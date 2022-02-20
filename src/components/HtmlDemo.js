import React from "react";
import CodeBlock from '@theme/CodeBlock';
import styles from './css/HtmlDemo.module.css'

class HtmlDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      code: ''
    }
    this.iframeRef = React.createRef(null);
  }

  componentDidMount() {
    const iframeRef = this.iframeRef.current.contentWindow.document
    // 判断是否直接引入文件
    const isImport = !this.props.children.props

    // 把 slot 内容写入 iframe 里面
    const content = isImport ? this.props.children : this.props.children.props.children.props.children;
    iframeRef.open();
    iframeRef.write(`<style>html,body{margin:0;padding:0}</style>${content}`);
    iframeRef.close();

    // 高度等于内容高度
    this.setState({
      height: iframeRef.body.scrollHeight + 20,
      code: isImport ? iframeRef.body.innerHTML : content
    });

    // 再修复一下
    setTimeout(() => {
      this.setState({
        height: iframeRef.body.scrollHeight + 20
      });
    }, 300);
  }

  render() {
    return (
      <div className={styles.htmlDemo}>
        <code>源码预览</code>
        <iframe
          ref={this.iframeRef}
          height={this.state.height}
          frameBorder="0"
          scrolling="no"
          allowFullScreen={true}
          width="100%"
        ></iframe>
        <details>
          <summary>查看源码</summary>
          <CodeBlock className="language-jsx">
            {this.state.code}
          </CodeBlock>
        </details>
      </div >
    )
  }
}

export default HtmlDemo
