"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8676],{3515:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=t(74848),s=t(28453);const i={date:"2022-02-12 23:30:04",slug:"/29459"},o="LeetCode\uff1a43. \u5b57\u7b26\u4e32\u76f8\u4e58",u={id:"program/29459",title:"LeetCode\uff1a43. \u5b57\u7b26\u4e32\u76f8\u4e58",description:"\u65b9\u6cd5\u4e00",source:"@site/issue/7.program/29459.md",sourceDirName:"7.program",slug:"/29459",permalink:"/issue/29459",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-02-12 23:30:04",slug:"/29459"},sidebar:"tutorialSidebar",previous:{title:"JavaScript \u5b9e\u73b0\uff1a\u6700\u5c0f\u5806\u7c7b",permalink:"/issue/27970"},next:{title:"LeetCode\uff1a215. \u6570\u7ec4\u4e2d\u7684\u7b2cK\u4e2a\u6700\u5927\u5143\u7d20",permalink:"/issue/29460"}},a={},c=[];function l(n){const e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"leetcode43-\u5b57\u7b26\u4e32\u76f8\u4e58",children:"LeetCode\uff1a43. \u5b57\u7b26\u4e32\u76f8\u4e58"})}),"\n",(0,r.jsx)(e.p,{children:"\u65b9\u6cd5\u4e00"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"/**\n * @param {string} num1\n * @param {string} num2\n * @return {string}\n */\nvar multiply = function (num1, num2) {\n    if (num1 === '0' || num2 === '0') return '0'\n\n    const len1 = num1.length\n    const len2 = num2.length\n    const res = new Array(len1 + len2).fill(0)\n\n    // \u4ece\u4e2a\u4f4d\u5f00\u59cb\u8ba1\u7b97\n    for (let i = len1 - 1; i >= 0; i--) {\n        // \u7b2c\u4e8c\u4e2a\u6570\u4e5f\u4ece\u4e2a\u4f4d\u5f00\u59cb\u8ba1\u7b97\n        for (let j = len2 - 1; j >= 0; j--) {\n            // res[i+j+1] \u4e0a\u6b21\u8ba1\u7b97\u7684\u8fdb\u4f4d\u503c\n            const temp = num1[i] * num2[j] + res[i + j + 1]\n            // \u4e2a\u4f4d\u503c\n            res[i + j + 1] = temp % 10\n            // \u8fdb\u4f4d\u6570\uff0c\u4e5f\u52a0\u4e0a\u4e4b\u524d\u7684\u503c\n            res[i + j] += Math.floor(temp / 10)\n        }\n    }\n    // \u6e05\u9664\u9996\u4f4d 0 \n    res[0]===0 && res.splice(0,1)\n\n    return res.join('')\n};\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u65b9\u6cd5\u4e8c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"/**\n * @param {string} num1\n * @param {string} num2\n * @return {string}\n */\nvar multiply = function(num1, num2) {    \n    return (BigInt(num1) * BigInt(num2)).toString()\n};\n"})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>u});var r=t(96540);const s={},i=r.createContext(s);function o(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function u(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);