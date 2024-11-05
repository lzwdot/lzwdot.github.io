"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["2493"],{78367:function(e,s,t){t.d(s,{Z:()=>d});var o=t("85893"),n=t("67294"),r=t("2933"),l=t("45056");let i="htmlDemo_JfCu",c="iframeBg_qble",d=function(e){let{siteConfig:s}=(0,r.Z)(),{title:t}=s,[d,u]=(0,n.useState)(0),[a,h]=(0,n.useState)(""),m=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let s=m.current.contentWindow.document,t=!e.children.props,o=t?e.children:e.children.props.children.props.children;t&&(o=o.match(/<body[^>]*>([\s\S]*)<\/body>/)[1]),s.open(),s.write(`<style>html,body{margin:0;padding:0}</style>${o}`),s.close(),h(a+o),m.current.onload=()=>{u(d+s.body.scrollHeight+20)}},[]),(0,o.jsxs)("section",{className:i,children:[(0,o.jsxs)("header",{children:[(0,o.jsx)("code",{children:"\u6E90\u7801\u9884\u89C8"}),(0,o.jsx)("a",{onClick:function(){let e=window.open("");e.focus(),e.document.write(`<style>html,body{margin:0;padding:0}</style>${a}`),e.document.title=`\u{4EE3}\u{7801}\u{5728}\u{7EBF}\u{8FD0}\u{884C} | ${t}`,e.document.close()},children:"\u6253\u5F00\u7A97\u53E3"})]}),(0,o.jsx)("div",{className:c,children:(0,o.jsx)("iframe",{ref:m,height:d,frameBorder:"0",scrolling:"no",allowFullScreen:!0,width:"100%"})}),(0,o.jsxs)("details",{children:[(0,o.jsx)("summary",{children:"\u67E5\u770B\u6E90\u7801"}),(0,o.jsx)(l.Z,{className:"language-jsx",children:a})]})]})}},57751:function(e,s,t){t.d(s,{Z:()=>c});var o=t("85893"),n=t("67294"),r=t("45056");let l={jsDemo:"jsDemo_EGeP",consoleLog:"consoleLog_nNio"};class i extends n.Component{constructor(e){super(e),this.state={code:"",stdout:""},this.iframeRef=n.createRef(null)}componentDidMount(){let e=this.iframeRef.current.contentWindow.document,s=this.props.children.props?this.props.children.props.children.props.children:this.props.children,t="ts"===this.props.lang?"":`
    <script>
      const logs = [];
      console.oldLog = console.log;
      console.log = function (...str) {
        console.oldLog(str);
        logs.push(str.map(v=>String(v)).join(' '));
      };  
      ${s};
      setTimeout(()=>{
        for (let i = 0; i < logs.length; i++) {
          document.write('> ', logs[i], '<br/>');
        }
        document.write('>');
      });
    </script>  
    `;e.open(),e.write(t),e.close(),setTimeout(()=>{this.setState({code:s,stdout:e.body.innerHTML})})}render(){let e={__html:this.state.stdout},s="ts"===this.props.lang?"":(0,o.jsxs)("details",{open:this.state.stdout,children:[(0,o.jsx)("summary",{children:"\u8F93\u51FA\u7ED3\u679C"}),(0,o.jsx)("pre",{className:l.consoleLog,dangerouslySetInnerHTML:e})]});return(0,o.jsxs)("section",{className:l.jsDemo,children:[(0,o.jsx)(r.Z,{className:"language-jsx",children:this.state.code}),(0,o.jsx)("iframe",{ref:this.iframeRef}),s]})}}let c=i},35710:function(e,s,t){t.d(s,{Z:function(){return i}});var o=t(85893);t(67294);var n=t(75094),r=t(78367),l=t(57751);function i(e){return"htmlDemo"===e.type?(0,o.jsx)(r.Z,{...e}):"jsDemo"===e.type?(0,o.jsx)(l.Z,{...e}):(0,o.jsx)(n.Z,{...e})}},83715:function(e,s,t){t.d(s,{Z:function(){return l}}),t(67294);var o=t(16190),n=t(78367),r=t(57751);let l={...o.Z,HtmlDemo:n.Z,JsDemo:r.Z}}}]);