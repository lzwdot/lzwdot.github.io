"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3007],{99449:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>t});var r=l(74848),s=l(28453);const i={date:"2020-12-28 16:51:00",slug:"/27204"},a="webpack \u4e4b babel \u4f7f\u7528",c={id:"webpack-base/27204",title:"webpack \u4e4b babel \u4f7f\u7528",description:"babel \u524d\u7aef\u5f00\u53d1\u73af\u5883\u5fc5\u5907\u5de5\u5177",source:"@site/docs/5.webpack-base/27204.md",sourceDirName:"5.webpack-base",slug:"/27204",permalink:"/docs/27204",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-12-28 16:51:00",slug:"/27204"},sidebar:"tutorialSidebar",previous:{title:"webpack \u4f18\u5316\u4ea7\u51fa\u4ee3\u7801",permalink:"/docs/27202"},next:{title:"webpack \u5b89\u88c5\u548c\u914d\u7f6e",permalink:"/docs/28782"}},o={},t=[{value:"1\u3001\u73af\u5883\u914d\u7f6e\u6587\u4ef6 package.json",id:"1\u73af\u5883\u914d\u7f6e\u6587\u4ef6-packagejson",level:4},{value:"2\u3001babel-polyfill",id:"2babel-polyfill",level:4},{value:"3\u3001babel-runtime",id:"3babel-runtime",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"webpack-\u4e4b-babel-\u4f7f\u7528",children:"webpack \u4e4b babel \u4f7f\u7528"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"babel \u524d\u7aef\u5f00\u53d1\u73af\u5883\u5fc5\u5907\u5de5\u5177"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u73af\u5883\u642d\u5efa & \u57fa\u672c\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u73af\u5883\u642d\u5efa"}),"\n",(0,r.jsx)(n.li,{children:".babelrc \u914d\u7f6e presets \u548c pluins"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"1\u73af\u5883\u914d\u7f6e\u6587\u4ef6-packagejson",children:"1\u3001\u73af\u5883\u914d\u7f6e\u6587\u4ef6 package.json"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\n  "name": "09-babel-demo",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "devDependencies": {\n    "@babel/cli": "^7.7.5",\n    "@babel/core": "^7.7.5",\n    "@babel/plugin-transform-runtime": "^7.7.5",\n    "@babel/preset-env": "^7.7.5"\n  },\n  "dependencies": {\n    "@babel/polyfill": "^7.7.0",\n    "@babel/runtime": "^7.7.5"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"babel \u914d\u7f6e\u6587\u4ef6 .babelrc"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"presets - \u53ef\u4ee5\u4f5c\u4e3a Babel \u63d2\u4ef6\u7684\u7ec4\u5408"}),"\n",(0,r.jsx)(n.li,{children:"pluins"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\n    "presets": [\n        [\n            "@babel/preset-env",\n            {\n                "useBuiltIns": "usage",\n                "corejs": 3\n            }\n        ]\n    ],\n    "plugins": [\n        [\n            "@babel/plugin-transform-runtime",\n            {\n                "absoluteRuntime": false,\n                "corejs": 3,\n                "helpers": true,\n                "regenerator": true,\n                "useESModules": false\n            }\n        ]\n    ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u6d4b\u8bd5 index.js \u4e2d\u7684 ES6 \u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const sum = (a, b) => a + b\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884c\u547d\u4ee4 ",(0,r.jsx)(n.code,{children:"npx babel src/index.js"}),"\uff0c\u8f93\u51fa ES5 \u8bed\u6cd5"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"var sum = function sum(a, b) {\n  return a + b;\n};\n"})}),"\n",(0,r.jsx)(n.h4,{id:"2babel-polyfill",children:"2\u3001babel-polyfill"}),"\n",(0,r.jsx)(n.p,{children:"1\uff09polyfill \u610f\u4e3a\u8865\u4e01\uff0c\u6bd4\u5982"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"if(!Array.prototype.indexOf){\n    Array.prototype.indexOf = (function(Object,max,min){})\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u5b9e\u73b0 polyfill"}),"\n",(0,r.jsx)(n.p,{children:"2\uff09core-js \u548c regenerator"}),"\n",(0,r.jsxs)(n.p,{children:["core-js \u662f ES6+ \u8f6c ES5 \u6807\u51c6\u7248\uff0cgithub \u5730\u5740\uff1a",(0,r.jsx)(n.a,{href:"https://github.com/zloirock/core-js",children:"https://github.com/zloirock/core-js"}),"\uff0c\u4f46 core-js \u65e0\u6cd5\u6ee1\u8db3 ES6 \u4e2d generator\uff0c\u5982"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// ES6 generator \u51fd\u6570\uff08\u5904\u7406\u5f02\u6b65\uff09\uff0c\u88ab async/await \u4ee3\u66ff\nfunction* tell(){\n    console.log('\u6267\u884c a \u5904\u7406');\n    yield 'a';\n    console.log('\u6267\u884c b \u5904\u7406');\n    yield 'b';\n    console.log('\u6267\u884c c \u5904\u7406');\n    yield 'c';\n}\nlet k = tell();\nconsole.log(k.next());\nconsole.log(k.next());\nconsole.log(k.next());\nconsole.log(k.next());\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6240\u4ee5\u8fd8\u9700\u8981 regenerator \u7684\u652f\u6301\uff0cgithub \u5730\u5740\uff1a",(0,r.jsx)(n.a,{href:"https://github.com/facebook/regenerator",children:"https://github.com/facebook/regenerator"})]}),"\n",(0,r.jsx)(n.p,{children:"3\uff09 babel-polyfill \u5373\u662f core-js \u548c regenerator \u7684\u96c6\u5408"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Babel 7.4 \u4e4b\u540e\u5f03\u7528 babel-polyfill"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u63a8\u8350\u76f4\u63a5\u4f7f\u7528 core-js \u548c regenerator"}),"\uff0c\u4f46\u662f babel-polyfill \u8fd8\u662f\u5f88\u591a\u4eba\u7528"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["babel ",(0,r.jsx)(n.strong,{children:"\u53ea\u5c06 ES6+ \u8bed\u6cd5\u8f6c ES5 \u8bed\u6cd5"}),"\uff0c\u4f46\u4e0d\u80fd\u5904\u7406\u65b0\u7684 API \uff08\u65b0\u7684 API \u8bed\u6cd5\u7b26\u5408 ES5 \u89c4\u8303\uff0c\u4f46\u6d4f\u89c8\u5668\u662f\u5426\u517c\u5bb9\uff0cbabel \u4e0d\u5173\u5fc3\uff09\uff0c\u6240\u4ee5\u5728\u4ee3\u7801\u4e2d\u5f15\u5165 babel-polyfill"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import '@babel/polyfill'\n// \u65b0\u7684 API\nPromise.resolve(100).then(data => data);\n// \u65b0\u7684 API\n[10, 20, 30].includes(20)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0a\u88ab\u89e3\u6790\u4e3a"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"require('@babel/polyfill')"}),"\n",(0,r.jsx)(n.p,{children:"// \u65b0\u7684 API"}),"\n",(0,r.jsx)(n.p,{children:"Promise.resolve(100).then(data => data);"}),"\n",(0,r.jsx)(n.p,{children:"// \u65b0\u7684 API"}),"\n",(0,r.jsx)(n.p,{children:"[10, 20, 30].includes(20)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"babel \u628a import \u5f15\u5165\u7684\u89e3\u6790\u4e3a require \u7684\u6a21\u5757\u5316\uff0c\u4f46 babel \u4e0d\u5904\u7406\u6a21\u5757\u5316\uff0c\u6240\u4ee5\u8fd8\u662f\u9700\u8981 webpack \u914d\u5408\uff0c\u7136\u800c babel-polyfill \u6587\u4ef6\u8f83\u5927\uff0c\u6240\u4ee5\u5e94\u914d\u7f6e .babelrc \u6309\u9700\u5f15\u5165"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u6ce8\uff0cimport '@babel/polyfill' \u5c31\u4e0d\u9700\u8981\u624b\u52a8\u5f15\u5165\u4e86"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\n    "presets": [\n        [\n            "@babel/preset-env",\n            {\n                "useBuiltIns": "usage",\n                "corejs": 3\n            }\n        ]\n    ],\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"3babel-runtime",children:"3\u3001babel-runtime"}),"\n",(0,r.jsx)(n.p,{children:"babel-polyfill \u7684\u95ee\u9898"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// \u6c61\u67d3\u5168\u5c40\u73af\u5883\nwindow.Promise = function() {}\nArray.prototype.includes = function () {}\n// \u4f7f\u7528\u65b9\nwindow.Promise = 'abc'\nArray.prototype.includes = 100\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6c61\u67d3\u5168\u5c40\u73af\u5883"}),"\n",(0,r.jsx)(n.li,{children:"\u505a\u72ec\u7acb\u7684 web \u7cfb\u7edf\u6ca1\u5173\u7cfb\uff1b\u5982\u679c\u505a\u7b2c\u4e09\u65b9 lib \u5c31\u4f1a\u6709\u95ee\u9898"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u90a3\u600e\u4e48\u89e3\u51b3\u52d2\uff0c\u53ef\u4ee5\u6362\u4e00\u4e2a\u540d\u5b57\uff0c\u5982"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"window.Promise2 = function() {}\nArray.prototype.includes2 = function () {}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 babel-runtime \u5c31\u662f\u89e3\u51b3\u6c61\u67d3\u73af\u5883\u95ee\u9898\uff0c\u5b89\u88c5 @babel/plugin-transform-runtime \u548c @babel/runtime\uff0c\u53c2\u8003\u6700\u4e0a\u7684 package.json \u6587\u4ef6\uff0c\u7136\u540e\u9ed8\u8ba4\u914d\u7f6e .babelrc \u5373\u53ef"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\n    "plugins": [\n        [\n            "@babel/plugin-transform-runtime",\n            {\n                "absoluteRuntime": false,\n                "corejs": 3,\n                "helpers": true,\n                "regenerator": true,\n                "useESModules": false\n            }\n        ]\n    ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6267\u884c\u547d\u4ee4 ",(0,r.jsx)(n.code,{children:"npx babel src/index.js"})," \u67e5\u770b"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'"use strict";\nvar _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");\nrequire("core-js/modules/es.object.to-string.js");\nrequire("core-js/modules/es.promise.js");\nvar _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));\nvar _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));\nvar _context;\nvar sum = function sum(a, b) {\n  return a + b;\n}; // \u65b0\u7684 API\n_promise["default"].resolve(100).then(function (data) {\n  return data;\n}); // \u65b0\u7684 API\n(0, _includes["default"])(_context = [10, 20, 30]).call(_context, 20);\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0a\u89e3\u6790\u540e\uff0c\u4e0d\u4f1a\u6c61\u67d3\u5168\u5c40\u73af\u5883"})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>c});var r=l(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);