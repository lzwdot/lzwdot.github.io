import React from "react";
import CodeBlock from '@theme/CodeBlock';
import styles from './css/JsDemo.module.css'

class JsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stdout: ''
    }
    this.iframeRef = React.createRef(null);
  }

  componentDidMount() {
    const iframeRef = this.iframeRef.current.contentWindow.document
    const content = this.props.children;
    const contentLog = `
    <script>
      let lastLog;
      console.oldLog = console.log;
      console.log = function(str) {
        console.oldLog(str);
        lastLog = str;
      } 
      ${content}
      document.write(lastLog+'')
    </script>  
    `

    // 把 slot 内容写入 iframe 里面
    iframeRef.open();
    iframeRef.write(contentLog);
    iframeRef.close();

    // 获取控制台输出内容
    setTimeout(() => {      
      this.setState({
        stdout: iframeRef.body.innerHTML
      })      
    }, 300);
  }

  render() {
    return (
      <div className={styles.jsDemo}>
        <code>源码预览</code>
        <CodeBlock className="language-jsx">
          {this.props.children}
        </CodeBlock>
        <iframe
          ref={this.iframeRef}
          frameBorder="0"
          scrolling="no"
        ></iframe>
        <details open={true}>
          <summary>输出结果</summary>
          <pre className={styles.consoleLog}>
            {this.state.stdout}
          </pre>
        </details>
      </div >
    )
  }
}

export default JsDemo
