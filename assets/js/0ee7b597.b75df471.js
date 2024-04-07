"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9565],{98032:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(74848),a=t(28453);const o={date:"2020-10-22 16:04:20",slug:"/26026"},c="async/await \u8bed\u6cd5\u95ee\u9898",r={id:"async/26026",title:"async/await \u8bed\u6cd5\u95ee\u9898",description:"\u8bed\u6cd5",source:"@site/issue/3.async/26026.md",sourceDirName:"3.async",slug:"/26026",permalink:"/issue/26026",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-10-22 16:04:20",slug:"/26026"},sidebar:"tutorialSidebar",previous:{title:"async/await \u7684\u987a\u5e8f\u95ee\u9898",permalink:"/issue/25821"},next:{title:"\u624b\u5199 Promise",permalink:"/issue/29208"}},i={},l=[];function u(n){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"asyncawait-\u8bed\u6cd5\u95ee\u9898",children:"async/await \u8bed\u6cd5\u95ee\u9898"}),"\n",(0,s.jsx)(e.p,{children:"\u8bed\u6cd5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6267\u884c async \u51fd\u6570\uff0c\u8fd4\u56de\u7684\u662f Promise \u5bf9\u8c61"}),"\n",(0,s.jsx)(e.li,{children:"await \u76f8\u5f53\u4e8e Promise \u7684 then"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"async function fn(){\n    return 100\n}\n(async function(){\n    const a = fn() // \u6267\u884c async \u51fd\u6570\uff0c\u8fd4\u56de\u7684\u662f Promise \u5bf9\u8c61\n    console.log('a',a) // a Promise\xa0{<resolved>: 100}\n    const b = await fn() // await \u76f8\u5f53\u4e8e Promise \u7684 then\n    console.log('b',b) // b 100\n})()\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u62a5\u9519\u65e0\u6cd5\u6267\u884c\uff0c\u9700\u8981 try\u2026catch \u624d\u53ef\u6355\u83b7\u5f02\u5e38"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"(async function(){\n    console.log('start')\n    const a = await 100 // \u76f4\u63a5\u8fd4\u56de 100\n    console.log('a',a)\n    const b = await Promise.resolve(100) // await \u76f8\u5f53\u4e8e Promise then\n    console.log('b',b)\n    const c = await Promise.reject(300) // \u62a5\u9519\uff0c\u4e0b\u9762\u65e0\u6cd5\u6267\u884c\uff0c\u9700\u8981 try...catch\n    console.log('c',c)\n    console.log('end')\n})() //\u6267\u884c\u5b8c\u6bd5\uff0c\u6253\u5370\u51fa\u54ea\u4e9b\u5185\u5bb9\uff1f\n//start\n//a 100\n//b 100\n//Uncaught (in promise) 300\n"})})]})}function d(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>r});var s=t(96540);const a={},o=s.createContext(a);function c(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);