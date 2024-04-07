"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8251],{5141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(74848),s=t(28453);const o={date:"2022-01-25 15:43:45",slug:"/29318"},c="React \u52a0\u8f7d\u5f02\u6b65\u7ec4\u4ef6\uff08\u9ad8\u7ea7\uff09",a={id:"react-use/29318",title:"React \u52a0\u8f7d\u5f02\u6b65\u7ec4\u4ef6\uff08\u9ad8\u7ea7\uff09",description:"\u5f02\u6b65\u7ec4\u4ef6",source:"@site/docs/4.react-use/29318.md",sourceDirName:"4.react-use",slug:"/29318",permalink:"/docs/29318",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-01-25 15:43:45",slug:"/29318"},sidebar:"tutorialSidebar",previous:{title:"React Context \u7684\u4f7f\u7528\uff08\u9ad8\u7ea7\uff09",permalink:"/docs/29311"},next:{title:"React \u6027\u80fd\u4f18\u5316\uff08\u9ad8\u7ea7\uff09",permalink:"/docs/29320"}},i={},l=[];function d(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"react-\u52a0\u8f7d\u5f02\u6b65\u7ec4\u4ef6\u9ad8\u7ea7",children:"React \u52a0\u8f7d\u5f02\u6b65\u7ec4\u4ef6\uff08\u9ad8\u7ea7\uff09"}),"\n",(0,r.jsx)(n.p,{children:"\u5f02\u6b65\u7ec4\u4ef6"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"import"}),"\n",(0,r.jsx)(n.li,{children:"React.lazy"}),"\n",(0,r.jsx)(n.li,{children:"React.Suspense"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5b50"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import React from \"react\";\n\nconst ContextDemo = React.lazy(() => import('./ContextDemo'))\n\nclass LazyDemo extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return <div>\n      <p>\u5f15\u5165\u4e00\u4e2a\u52a8\u6001\u7ec4\u4ef6</p>\n      <hr/>\n      <React.Suspense fallback={<div>Loading...</div>}>\n        <ContextDemo></ContextDemo>\n      </React.Suspense>\n    </div>\n\n    // 1\u3001\u5f3a\u5236\u5237\u65b0\uff0c\u53ef\u4ee5\u770b\u5230 loading \uff08\u770b\u4e0d\u5230\u5c31\u9650\u5236\u4e00\u4e0b chrome \u7f51\u901f\uff09\n    // 2\u3001\u770b network \u7684 js \u52a0\u8f7d\n  }\n}\n\nexport default LazyDemo\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var r=t(96540);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);