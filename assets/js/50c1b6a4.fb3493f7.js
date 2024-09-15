"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4599],{7117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var o=n(74848),r=n(28453);const s={date:"2022-01-25 15:15:20",slug:"/29311"},c="React Context \u7684\u4f7f\u7528\uff08\u9ad8\u7ea7\uff09",a={id:"react-use/29311",title:"React Context \u7684\u4f7f\u7528\uff08\u9ad8\u7ea7\uff09",description:"context \u4e0a\u4e0b\u6587\u573a\u666f",source:"@site/docs/4.react-use/29311.md",sourceDirName:"4.react-use",slug:"/29311",permalink:"/docs/29311",draft:!1,unlisted:!1,editUrl:"/feedback",tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-01-25 15:15:20",slug:"/29311"},sidebar:"tutorialSidebar",previous:{title:"React Portals \u4f7f\u7528\u573a\u666f\uff08\u9ad8\u7ea7\uff09",permalink:"/docs/29309"},next:{title:"React \u52a0\u8f7d\u5f02\u6b65\u7ec4\u4ef6\uff08\u9ad8\u7ea7\uff09",permalink:"/docs/29318"}},i={},h=[];function u(e){const t={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"react-context-\u7684\u4f7f\u7528\u9ad8\u7ea7",children:"React Context \u7684\u4f7f\u7528\uff08\u9ad8\u7ea7\uff09"})}),"\n",(0,o.jsx)(t.p,{children:"context \u4e0a\u4e0b\u6587\u573a\u666f"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"\u516c\u5171\u4fe1\u606f\uff08\u8bed\u97f3\uff0c\u4e3b\u9898\uff09\u5982\u4f55\u4f20\u9012\u7ed9\u6bcf\u4e2a\u7ec4\u4ef6\uff1f"}),"\n",(0,o.jsx)(t.li,{children:"\u7528 props \u592a\u7e41\u7410"}),"\n",(0,o.jsx)(t.li,{children:"\u7528 redux \u5c0f\u9898\u5927\u505a"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"\u4e00\u4e2a\u66f4\u6539 theme \u914d\u8272\u7684\u4f8b\u5b50"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import React from \"react\";\n\n// \u521b\u5efa Context \u586b\u5145\u9ed8\u8ba4\u503c\uff08\u4efb\u610f\u4e00\u4e2a js \u53d8\u91cf\uff09\nconst ThemeContext = React.createContext('light')\n\n// \u5e95\u5c42\u7ec4\u4ef6 - \u51fd\u6570\u5f0f\u7ec4\u4ef6\nfunction ThemeLink(props) {\n  // const theme = this.context // \u4f1a\u62a5\u9519\uff0c\u51fd\u6570\u5f0f\u7ec4\u4ef6\u6ca1\u6709\u5b9e\u4f8b\uff0c\u65e2\u6ca1\u6709 this\n\n  // \u51fd\u6570\u5f0f\u7ec4\u4ef6\u53ef\u4ee5\u4f7f\u7528 Consumer\n  return <ThemeContext.Consumer>\n    {value => <p>link's theme is {value}</p>}\n  </ThemeContext.Consumer>\n}\n\n// \u5e95\u5c42\u7ec4\u4ef6 - class \u7ec4\u4ef6\nclass ThemeButton extends React.Component {\n  // \u6307\u5b9a contextType \u8bfb\u53d6\u5f53\u524d\u7684 theme context\n  // static contextType = ThemeContext // \u4e5f\u53ef\u4ee5\u7528 ThemeButton.context\n  render() {\n    const theme = this.context // React \u4f1a\u5f80\u4e0a\u627e\u5230\u6700\u8fd1\u7684 theme Provider\uff0c\u7136\u540e\u4f7f\u7528\n    return <div>\n      <p>button's theme is {theme}</p>\n    </div>\n  }\n}\n\nThemeButton.contextType = ThemeContext // \u6307\u5b9a contextType \u8bfb\u53d6\u5f53\u524d theme context\n\n// \u4e2d\u95f4\u7684\u7ec4\u4ef6\u518d\u4e5f\u4e0d\u5fc5\u6307\u660e\u5f80\u4e0b\u4f20\u9012 theme \u4e86\nfunction ToolBar(props) {\n  return (\n    <div>\n      <ThemeButton/>\n      <ThemeLink/>\n    </div>\n  )\n}\n\n// \u6700\u5916\u5c42\u7ec4\u4ef6\nclass ContextDemo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      theme: 'light'\n    }\n  }\n\n  render() {\n    // \u6570\u636e\u63d0\u4f9b\u8005\n    return <ThemeContext.Provider value={this.state.theme}>\n      {/*\u91cc\u9762\u7684\u7ec4\u4ef6\u90fd\u53ef\u4ee5\u6d88\u8d39\u6570\u636e*/}\n      <ToolBar/>\n      <hr/>\n      <button onClick={this.changeTheme}>change theme</button>\n    </ThemeContext.Provider>\n  }\n\n  changeTheme = () => {\n    this.setState({\n      theme: this.state.theme === 'light' ? 'dark' : 'light'\n    })\n  }\n}\n\nexport default ContextDemo\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var o=n(96540);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);