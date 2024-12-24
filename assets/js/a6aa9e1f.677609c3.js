"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["9539"],{71434:function(e,t,n){n.r(t),n.d(t,{default:()=>Z});var s=n("85893");n("67294");var r=n("67026"),o=n("2933"),i=n("79741"),l=n("84681"),a=n("15571"),c=n("96025"),d=n("50790");function u(e){let{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,s.jsxs)("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,s.jsx)(d.Z,{permalink:n,title:(0,s.jsx)(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,s.jsx)(d.Z,{permalink:r,title:(0,s.jsx)(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}var h=n("84315"),p=n("41835"),m=n("37897");function g(e){let{items:t,component:n=m.Z}=e;return(0,s.jsx)(s.Fragment,{children:t.map(e=>{let{content:t}=e;return(0,s.jsx)(p.n4,{content:t,children:(0,s.jsx)(n,{children:(0,s.jsx)(t,{})})},t.metadata.permalink)})})}var j=n("94819");function x(e){let t=(0,p.CS)(e);return(0,s.jsx)(j.Z,{children:(0,s.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function f(e){let{metadata:t}=e,{siteConfig:{title:n}}=(0,o.Z)(),{blogDescription:r,blogTitle:l,permalink:a}=t;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.d,{title:"/"===a?n:l,description:r}),(0,s.jsx)(h.Z,{tag:"blog_posts_list"})]})}function b(e){let{metadata:t,items:n,sidebar:r}=e;return(0,s.jsxs)(a.Z,{sidebar:r,children:[(0,s.jsx)(g,{items:n}),(0,s.jsx)(u,{metadata:t})]})}function Z(e){return(0,s.jsxs)(i.FG,{className:(0,r.Z)(l.k.wrapper.blogPages,l.k.page.blogListPage),children:[(0,s.jsx)(f,{...e}),(0,s.jsx)(x,{...e}),(0,s.jsx)(b,{...e})]})}},78367:function(e,t,n){n.d(t,{Z:()=>c});var s=n("85893"),r=n("67294"),o=n("2933"),i=n("45056");let l="htmlDemo_JfCu",a="iframeBg_qble",c=function(e){let{siteConfig:t}=(0,o.Z)(),{title:n}=t,[c,d]=(0,r.useState)(0),[u,h]=(0,r.useState)(""),p=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=p.current.contentWindow.document,n=!e.children.props,s=n?e.children:e.children.props.children.props.children;n&&(s=s.match(/<body[^>]*>([\s\S]*)<\/body>/)[1]),t.open(),t.write(`<style>html,body{margin:0;padding:0}</style>${s}`),t.close(),h(u+s),p.current.onload=()=>{d(c+t.body.scrollHeight+20)}},[]),(0,s.jsxs)("section",{className:l,children:[(0,s.jsxs)("header",{children:[(0,s.jsx)("code",{children:"\u6E90\u7801\u9884\u89C8"}),(0,s.jsx)("a",{onClick:function(){let e=window.open("");e.focus(),e.document.write(`<style>html,body{margin:0;padding:0}</style>${u}`),e.document.title=`\u{4EE3}\u{7801}\u{5728}\u{7EBF}\u{8FD0}\u{884C} | ${n}`,e.document.close()},children:"\u6253\u5F00\u7A97\u53E3"})]}),(0,s.jsx)("div",{className:a,children:(0,s.jsx)("iframe",{ref:p,height:c,frameBorder:"0",scrolling:"no",allowFullScreen:!0,width:"100%"})}),(0,s.jsxs)("details",{children:[(0,s.jsx)("summary",{children:"\u67E5\u770B\u6E90\u7801"}),(0,s.jsx)(i.Z,{className:"language-jsx",children:u})]})]})}},57751:function(e,t,n){n.d(t,{Z:()=>a});var s=n("85893"),r=n("67294"),o=n("45056");let i={jsDemo:"jsDemo_EGeP",consoleLog:"consoleLog_nNio"};class l extends r.Component{constructor(e){super(e),this.state={code:"",stdout:""},this.iframeRef=r.createRef(null)}componentDidMount(){let e=this.iframeRef.current.contentWindow.document,t=this.props.children.props?this.props.children.props.children.props.children:this.props.children,n="ts"===this.props.lang?"":`
    <script>
      const logs = [];
      console.oldLog = console.log;
      console.log = function (...str) {
        console.oldLog(str);
        logs.push(str.map(v=>String(v)).join(' '));
      };  
      ${t};
      setTimeout(()=>{
        for (let i = 0; i < logs.length; i++) {
          document.write('> ', logs[i], '<br/>');
        }
        document.write('>');
      });
    </script>  
    `;e.open(),e.write(n),e.close(),setTimeout(()=>{this.setState({code:t,stdout:e.body.innerHTML})})}render(){let e={__html:this.state.stdout},t="ts"===this.props.lang?"":(0,s.jsxs)("details",{open:this.state.stdout,children:[(0,s.jsx)("summary",{children:"\u8F93\u51FA\u7ED3\u679C"}),(0,s.jsx)("pre",{className:i.consoleLog,dangerouslySetInnerHTML:e})]});return(0,s.jsxs)("section",{className:i.jsDemo,children:[(0,s.jsx)(o.Z,{className:"language-jsx",children:this.state.code}),(0,s.jsx)("iframe",{ref:this.iframeRef}),t]})}}let a=l},35710:function(e,t,n){n.d(t,{Z:function(){return l}});var s=n(85893);n(67294);var r=n(75094),o=n(78367),i=n(57751);function l(e){return"htmlDemo"===e.type?(0,s.jsx)(o.Z,{...e}):"jsDemo"===e.type?(0,s.jsx)(i.Z,{...e}):(0,s.jsx)(r.Z,{...e})}},37897:function(e,t,n){n.d(t,{Z:function(){return i}});var s=n(85893);n(67294);var r=n(1080),o=n(41835);function i(e){let{isBlogPostPage:t}=(0,o.nO)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(r.Z,{...e})})}},83715:function(e,t,n){n.d(t,{Z:function(){return i}}),n(67294);var s=n(16190),r=n(78367),o=n(57751);let i={...s.Z,HtmlDemo:r.Z,JsDemo:o.Z}}}]);