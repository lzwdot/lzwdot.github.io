"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7384],{85311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var s=t(74848),r=t(28453);const o={date:"2022-01-25 14:55:57",slug:"/29309"},c="React Portals \u4f7f\u7528\u573a\u666f\uff08\u9ad8\u7ea7\uff09",l={id:"react-use/29309",title:"React Portals \u4f7f\u7528\u573a\u666f\uff08\u9ad8\u7ea7\uff09",description:"Portals \u4f20\u9001\u95e8",source:"@site/docs/4.react-use/29309.md",sourceDirName:"4.react-use",slug:"/29309",permalink:"/docs/29309",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-01-25 14:55:57",slug:"/29309"},sidebar:"tutorialSidebar",previous:{title:"React \u975e\u53d7\u63a7\u7ec4\u4ef6\uff08\u9ad8\u7ea7\uff09",permalink:"/docs/29307"},next:{title:"React Context \u7684\u4f7f\u7528\uff08\u9ad8\u7ea7\uff09",permalink:"/docs/29311"}},a={},i=[];function d(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"react-portals-\u4f7f\u7528\u573a\u666f\u9ad8\u7ea7",children:"React Portals \u4f7f\u7528\u573a\u666f\uff08\u9ad8\u7ea7\uff09"}),"\n",(0,s.jsx)(n.p,{children:"Portals \u4f20\u9001\u95e8"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7ec4\u4ef6\u9ed8\u8ba4\u4f1a\u6309\u7167\u65e2\u5b9a\u5c42\u6b21\u5d4c\u5957\u6e32\u67d3"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u4f55\u8ba9\u7ec4\u4ef6\u6e32\u67d3\u5230\u7236\u7ec4\u4ef6\u4ee5\u5916\uff1f Portals"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Portals \u4f7f\u7528\u573a\u666f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["overflow",":hidden"]}),"\n",(0,s.jsx)(n.li,{children:"\u7236\u7ec4\u4ef6 z-index \u503c\u592a\u5c0f"}),"\n",(0,s.jsx)(n.li,{children:"fixed \u9700\u8981\u653e\u5728 body \u7b2c\u4e00\u5c42\u7ea7"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5b50\uff0ccss \u6587\u4ef6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:".modal {\n    position: fixed;\n    width: 300px;\n    height: 100px;\n    top: 100px;\n    left: 50%;\n    margin-left: -150px;\n    background-color: #000;\n    color: #fff;\n    text-align: center;\n    /*opacity: 0.2;*/\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7ec4\u4ef6 PortalsDemo.js"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import React from "react";\nimport ReactDom from \'react-dom\'\nimport \'./style.css\'\n\nclass PortalsDemo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {}\n  }\n\n  render() {\n    // \u6b63\u5e38\u6e32\u67d3\n    // return <div className="modal">\n    //   {/*\u7c7b\u4f3c Vue slot*/}\n    //   {this.props.children}\n    // </div>\n\n    // \u4f7f\u7528 Portals \u6e32\u67d3\u5230 body \u4e0a\n    return ReactDom.createPortal(\n      <div className="modal">\n        {/*\u7c7b\u4f3c Vue slot*/}\n        {this.props.children}\n      </div>,\n      document.body // DOM \u8282\u70b9\n    )\n  }\n}\n\nexport default PortalsDemo\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5728 App.js \u4e2d\u4f7f\u7528"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"<PortalsDemo> modal \u5185\u5bb9</PortalsDemo>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>l});var s=t(96540);const r={},o=s.createContext(r);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);