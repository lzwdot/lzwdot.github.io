"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2887],{71488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=t(74848),r=t(28453);const o={date:"2020-11-04 11:18:46",slug:"/26668"},a="\u5982\u4f55\u83b7\u53d6\u591a\u4e2a\u6570\u5b57\u4e2d\u7684\u6700\u5927\u503c",c={id:"js-ts/26668",title:"\u5982\u4f55\u83b7\u53d6\u591a\u4e2a\u6570\u5b57\u4e2d\u7684\u6700\u5927\u503c",description:"\u624b\u5199\u51fd\u6570",source:"@site/issue/2.js-ts/26668.md",sourceDirName:"2.js-ts",slug:"/26668",permalink:"/issue/26668",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-11-04 11:18:46",slug:"/26668"},sidebar:"tutorialSidebar",previous:{title:"\u624b\u5199\u5b57\u7b26\u4e32 trim \u65b9\u6cd5\uff0c\u4fdd\u8bc1\u6d4f\u89c8\u5668\u7684\u517c\u5bb9\u6027",permalink:"/issue/26666"},next:{title:"\u5982\u4f55\u7528 JS \u5b9e\u73b0\u7ee7\u627f",permalink:"/issue/26670"}},l={},u=[];function i(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u5982\u4f55\u83b7\u53d6\u591a\u4e2a\u6570\u5b57\u4e2d\u7684\u6700\u5927\u503c",children:"\u5982\u4f55\u83b7\u53d6\u591a\u4e2a\u6570\u5b57\u4e2d\u7684\u6700\u5927\u503c"}),"\n",(0,s.jsx)(n.p,{children:"\u624b\u5199\u51fd\u6570"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u8fd4\u56de\u6700\u5927\u503c\nfunction max() {\n    // Arguments(6)\xa0[1, 2, 3, 7, 6, 5, callee: \u0192, Symbol(Symbol.iterator): \u0192]\n    console.log(arguments)\n    // \u76f8\u5f53\u4e8e Array.prototype.slice.apply(arguments, [0, arguments.length])\n    // \u6216\u8005 const nums = Array.prototype.slice.call(arguments)\n    const nums = Array.prototype.slice.call(arguments,0,arguments.length)\n    let max = 0\n    nums.forEach(n => {\n        if (n > max) {\n            max = n\n        }\n    })\n    return max\n}\nconsole.log(max(1,2,3,7,6,5)) // 7\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u7528"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"console.log(Math.max(1,2,3,6,5,4)) // 6\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(96540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);