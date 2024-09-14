"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4107],{46e3:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var t=s(74848),o=s(28453);const c={date:"2020-10-20 17:02:20",slug:"/25821"},a="async/await \u7684\u987a\u5e8f\u95ee\u9898",r={id:"async/25821",title:"async/await \u7684\u987a\u5e8f\u95ee\u9898",description:"\u6765\u4e00\u9053\u7ecf\u5178\u7684\u5f02\u6b65\u9898\u76ee",source:"@site/issue/3.async/25821.md",sourceDirName:"3.async",slug:"/25821",permalink:"/issue/25821",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-10-20 17:02:20",slug:"/25821"},sidebar:"tutorialSidebar",previous:{title:"promise \u548c setTimeout \u7684\u987a\u5e8f",permalink:"/issue/25819"},next:{title:"async/await \u8bed\u6cd5\u95ee\u9898",permalink:"/issue/26026"}},i={},l=[];function u(n){const e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"asyncawait-\u7684\u987a\u5e8f\u95ee\u9898",children:"async/await \u7684\u987a\u5e8f\u95ee\u9898"})}),"\n",(0,t.jsx)(e.p,{children:"\u6765\u4e00\u9053\u7ecf\u5178\u7684\u5f02\u6b65\u9898\u76ee"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"async function async1() {\n    console.log('async1 start') // step 2\n    await async2()\n    // await \u540e\u9762\u7684\u90fd\u4f5c\u4e3a\u56de\u8c03\u5185\u5bb9 -\u5fae\u4efb\u52a1\n    console.log('async1 end') // step 6\n}\nasync function async2() {\n    console.log('async2')  // step 3\n}\nconsole.log('script start') // step 1\nsetTimeout(function () { // \u5b8f\u4efb\u52a1\n    console.log('setTimeout') // step 8\n}, 0)\nasync1()\n//\u521d\u59cb\u5316 promise \u65f6\uff0c\u4f20\u5165\u7684\u51fd\u6570\u4f1a\u7acb\u5373\u6267\u884c\nnew Promise(function (resolve) {\n    console.log('promise1')  // step 4\n    resolve()\n}).then(function () {  // \u5fae\u4efb\u52a1\n    console.log('promise2') // step 7\n})\nconsole.log('script end') // step 5\n// \u540c\u6b65\u4ee3\u7801\u6267\u884c\u5b8c\u6bd5\uff08event loop - call stack \u88ab\u6e05\u7a7a\uff09\n// \u6267\u884c\u5fae\u4efb\u52a1\n// \uff08\u5c1d\u8bd5\u89e6\u53d1 DOM \u6e32\u67d3\uff09\n// \u89e6\u53d1 Event Loop\uff0c \u6267\u884c\u5b8f\u4efb\u52a1\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4e0a\u9762\u6267\u884c\u7ed3\u679c\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"// script start\n// async1 start\n// async2\n// promise1\n// script end\n// async1 end\n// promise2\n// setTimeout\n"})})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>r});var t=s(96540);const o={},c=t.createContext(o);function a(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);