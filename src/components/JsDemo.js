import React from "react";
import CodeBlock from '@theme/CodeBlock';
import styles from './css/JsDemo.module.css'

class JsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      stdout: ''
    }
    this.iframeRef = React.createRef(null);
  }

  componentDidMount() {
    const iframeRef = this.iframeRef.current.contentWindow.document
    // 判断是否直接引入文件
    const isImport = !this.props.children.props

    const content = isImport ? this.props.children : this.props.children.props.children.props.children;
    const contentLog = `
    <script>
      const logs = [];
      console.oldLog = console.log;
      console.log = function (str) {
        console.oldLog(str);
        logs.push(str);
      };   
      ${content};
      for (let i = 0; i < logs.length; i++) {
        document.write('> ', JSON.stringify(logs[i]), '<br/>');
      }
      document.write('>');
    </script>  
    `

    // 把 slot 内容写入 iframe 里面
    iframeRef.open();
    iframeRef.write(contentLog);
    iframeRef.close();

    // 获取控制台输出内容
    setTimeout(() => {
      this.setState({
        code: content,
        stdout: iframeRef.body.innerHTML,
      })
    });
  }

  render() {
    // 显示 html 的格式
    const stdoutHtml = {
      __html: this.state.stdout
    }

    return (
      <div className={styles.jsDemo}>
        <code>源码预览</code>
        <CodeBlock className="language-jsx">
          {this.state.code}
        </CodeBlock>
        <iframe ref={this.iframeRef}></iframe>
        <details open={this.state.stdout}>
          <summary>输出结果</summary>
          <pre className={styles.consoleLog} dangerouslySetInnerHTML={stdoutHtml}></pre>
        </details>
      </div >
    )
  }
}

export default JsDemo
