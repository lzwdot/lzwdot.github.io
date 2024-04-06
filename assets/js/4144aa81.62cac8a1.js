"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7093],{44012:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>t});var r=s(74848),i=s(28453);const c={date:"2022-01-05 15:34:19",slug:"/28964"},l="webpack \u6253\u5305\u516c\u5171\u5e93",d={id:"webpack-base/28964",title:"webpack \u6253\u5305\u516c\u5171\u5e93",description:"\u4e00\u822c\u800c\u8a00\uff0c\u516c\u5171\u5e93\u90fd\u6709\u8fd9\u4e9b",source:"@site/docs/5.webpack-base/28964.md",sourceDirName:"5.webpack-base",slug:"/28964",permalink:"/docs/28964",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-01-05 15:34:19",slug:"/28964"},sidebar:"tutorialSidebar",previous:{title:"webpack \u6253\u5305 bundle \u539f\u7406\u5206\u6790",permalink:"/docs/28929"},next:{title:"\u6570\u636e\u7ed3\u6784\u7b97\u6cd5",permalink:"/docs/algorithm-data/"}},a={},t=[];function o(n){const e={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"webpack-\u6253\u5305\u516c\u5171\u5e93",children:"webpack \u6253\u5305\u516c\u5171\u5e93"}),"\n",(0,r.jsx)(e.p,{children:"\u4e00\u822c\u800c\u8a00\uff0c\u516c\u5171\u5e93\u90fd\u6709\u8fd9\u4e9b"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u63d0\u4f9b\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,r.jsx)(e.li,{children:"github \u5730\u5740"}),"\n",(0,r.jsxs)(e.li,{children:["readme \u6587\u6863","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u65b9\u5f0f"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"npm \u5e73\u53f0"}),"\n",(0,r.jsx)(e.li,{children:"npm install"}),"\n",(0,r.jsx)(e.li,{children:"require"}),"\n",(0,r.jsx)(e.li,{children:"import"}),"\n",(0,r.jsx)(e.li,{children:"srcript src"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4ee3\u7801\u6848\u4f8b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\u6e90\u7801\u8f93\u51fa","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u538b\u7f29\u7248\u672c\u6587\u4ef6\uff08\u751f\u4ea7\u73af\u5883\uff09"}),"\n",(0,r.jsx)(e.li,{children:"\u672a\u538b\u7f29\u7248\u672c\u6587\u4ef6\uff08\u5f00\u53d1\u73af\u5883\uff09"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6d4b\u8bd5\u4ee3\u7801 ",(0,r.jsx)(e.code,{children:"./src/lib.js"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"export default function addNumber(a, b) {\n  return a + b\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5148\u5b89\u88c5 webpack \u6253\u5305\u5de5\u5177"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"npm i -D webpack webpack-cli terser-webpack-plugin\n"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"terser-webpack-plugin"})," \u6253\u5305\u516c\u5171\u5e93\u63a8\u8350\u5de5\u5177"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u914d\u7f6e ",(0,r.jsx)(e.code,{children:"webpack.lib.config.js"})," \u6587\u4ef6"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const path = require('path')\n// \u6253\u5305\u516c\u5171\u5e93\u5de5\u5177\nconst terserWebpackPlugin = require('terser-webpack-plugin')\n\nmodule.exports = {\n  entry: {\n    'add-number': './src/lib.js',\n    'add-number.min': './src/lib.js',\n  },\n  output: {\n    filename: '[name].js',\n    library: 'addNumber', // \u6253\u5305\u5e93\u6587\u4ef6\n    libraryTarget: 'umd', // \u6253\u5305\u5e93\u4f7f\u7528\u7684\u65b9\u5f0f\uff0c\u4e00\u822c\u63a8\u8350 umd\n    libraryExport: 'default' // \u6253\u5305\u5904\u7406\u6389 'default'\uff0c \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u51fd\u6570\u540d addNumber\n  },\n  mode: 'none',\n  optimization: {\n    minimize: true,\n    minimizer: [\n      new terserWebpackPlugin({\n        test: /\\.min\\.js$/  // \u5224\u65ad\u4ec0\u4e48\u6587\u4ef6\u9700\u8981\u538b\u7f29\n      })\n    ]\n  }\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"webpack",src:s(24402).A+"",width:"694",height:"311"})}),"\n",(0,r.jsxs)(e.p,{children:["\u6839\u76ee\u5f55\u5165\u53e3\u6587\u4ef6 ",(0,r.jsx)(e.code,{children:"index.js"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"'use strict'\n\nif (process.env.NODE_ENV === 'production') {\n  module.exports = require('./dist/add-number.min.js')\n} else {\n  module.exports = require('./dist/add-number.js')\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u6dfb\u52a0\u547d\u4ee4\u548c\u914d\u7f6e\u5165\u53e3\u6587\u4ef6\u5230 ",(0,r.jsx)(e.code,{children:"package.json"})," \u6587\u4ef6"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "main": "index.js",\n   "scripts": {\n    "lib": "webpack --config ./webpack.lib.config.js",\n  },\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6267\u884c\u6253\u5305\u547d\u4ee4"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"npm run lib\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u53d1\u5e03\u5230 npm \u4ed3\u5e93\uff0c\u8bb0\u5f97\u9996\u5148\u8bbe\u7f6e\u955c\u50cf\u5e93"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"npm config set registry http://registry.npmjs.org\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u767b\u5f55\uff0c\u8f93\u5165\u7528\u6237\u540d\u548c\u5bc6\u7801"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"npm login\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u53d1\u5e03\u5373\u53ef"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sh",children:"npm publish\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},24402:(n,e,s)=>{s.d(e,{A:()=>r});const r=s.p+"assets/images/webpack-eff2bf9dfa38f0a8-1b22626c2aabf074961fbf549f162990.webp"},28453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>d});var r=s(96540);const i={},c=r.createContext(i);function l(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);