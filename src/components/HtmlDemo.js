import React from "react";
import styles from './HtmlDemo.module.css'

class HtmlDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    }
    this.iframeRef = React.createRef(null);
  }

  componentDidMount() {
    const iframeRef = this.iframeRef.current.contentWindow.document

    // 把 slot 内容写入 iframe 里面
    const content = this.props.children.props.children.props.children;
    iframeRef.open();
    iframeRef.write(content);
    iframeRef.close();

    // 高度等于内容高度
    this.setState({
      height: iframeRef.body.scrollHeight + 20
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
      <div>
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
          {this.props.children}
        </details>
      </div >
    )
  }
}

export default HtmlDemo

/**


 
import HtmlDemo from '../../../src/components/HtmlDemo.js';

<HtmlDemo>




 */
