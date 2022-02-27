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
    this.openWin = this.openWin.bind(this)
  }

  componentDidMount() {
    const iframeDoc = this.iframeRef.current.contentWindow.document
    // 判断是否直接引入文件
    const isImport = !this.props.children.props

    // 获取 body 中的内容
    let content = isImport ? this.props.children : this.props.children.props.children.props.children;
    if (isImport) {
      content = content.match(/<body[^>]*>([\s\S]*)<\/body>/)[1]
    }

    // 把 slot 内容写入 iframe 里面
    iframeDoc.open();
    iframeDoc.write(`<style>html,body{margin:0;padding:0}</style>${content}`);
    iframeDoc.close();

    // 查看源码
    this.setState({
      code: content
    });

    // 高度等于内容高度
    this.iframeRef.current.onload = () => {
      this.setState({
        height: iframeDoc.body.scrollHeight + 20
      });
    }
  }

  openWin() {
    const win = window.open('')
    win.focus()

    // 把 slot 内容写入 iframe 里面
    win.document.write(`<style>html,body{margin:0;padding:0}</style>${this.state.code}`);
    win.document.title = '在线代码运行'

    win.document.close()
  }

  render() {
    return (
      <div className={styles.htmlDemo}>
        <header>
          <code>源码预览</code>
          <a href="#" onClick={this.openWin}>打开窗口</a>
        </header>
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
