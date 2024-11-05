"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["5302"],{70356:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>a,default:()=>d,assets:()=>o,toc:()=>l,frontMatter:()=>u});var r=JSON.parse('{"id":"program/29459","title":"LeetCode\uFF1A43. \u5B57\u7B26\u4E32\u76F8\u4E58","description":"\u65B9\u6CD5\u4E00","source":"@site/issue/7.program/29459.md","sourceDirName":"7.program","slug":"/29459","permalink":"/issue/29459","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2022-02-12 23:30:04","slug":"/29459"},"sidebar":"tutorialSidebar","previous":{"title":"JavaScript \u5B9E\u73B0\uFF1A\u6700\u5C0F\u5806\u7C7B","permalink":"/issue/27970"},"next":{"title":"LeetCode\uFF1A215. \u6570\u7EC4\u4E2D\u7684\u7B2CK\u4E2A\u6700\u5927\u5143\u7D20","permalink":"/issue/29460"}}'),s=t("85893"),i=t("50065");let u={date:"2022-02-12 23:30:04",slug:"/29459"},a="LeetCode\uFF1A43. \u5B57\u7B26\u4E32\u76F8\u4E58",o={},l=[];function c(n){let e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"leetcode43-\u5B57\u7B26\u4E32\u76F8\u4E58",children:"LeetCode\uFF1A43. \u5B57\u7B26\u4E32\u76F8\u4E58"})}),"\n",(0,s.jsx)(e.p,{children:"\u65B9\u6CD5\u4E00"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"/**\n * @param {string} num1\n * @param {string} num2\n * @return {string}\n */\nvar multiply = function (num1, num2) {\n    if (num1 === '0' || num2 === '0') return '0'\n\n    const len1 = num1.length\n    const len2 = num2.length\n    const res = new Array(len1 + len2).fill(0)\n\n    // \u4ECE\u4E2A\u4F4D\u5F00\u59CB\u8BA1\u7B97\n    for (let i = len1 - 1; i >= 0; i--) {\n        // \u7B2C\u4E8C\u4E2A\u6570\u4E5F\u4ECE\u4E2A\u4F4D\u5F00\u59CB\u8BA1\u7B97\n        for (let j = len2 - 1; j >= 0; j--) {\n            // res[i+j+1] \u4E0A\u6B21\u8BA1\u7B97\u7684\u8FDB\u4F4D\u503C\n            const temp = num1[i] * num2[j] + res[i + j + 1]\n            // \u4E2A\u4F4D\u503C\n            res[i + j + 1] = temp % 10\n            // \u8FDB\u4F4D\u6570\uFF0C\u4E5F\u52A0\u4E0A\u4E4B\u524D\u7684\u503C\n            res[i + j] += Math.floor(temp / 10)\n        }\n    }\n    // \u6E05\u9664\u9996\u4F4D 0 \n    res[0]===0 && res.splice(0,1)\n\n    return res.join('')\n};\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u65B9\u6CD5\u4E8C"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"/**\n * @param {string} num1\n * @param {string} num2\n * @return {string}\n */\nvar multiply = function(num1, num2) {    \n    return (BigInt(num1) * BigInt(num2)).toString()\n};\n"})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return u}});var r=t(67294);let s={},i=r.createContext(s);function u(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:u(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);