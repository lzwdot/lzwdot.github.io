"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["8143"],{44174:function(n,e,s){s.r(e),s.d(e,{metadata:()=>a,contentTitle:()=>t,default:()=>p,assets:()=>i,toc:()=>d,frontMatter:()=>r});var a=JSON.parse('{"id":"engineering/26350","title":"\u5982\u4F55\u914D\u7F6E webpack \u548C babel","description":"\u4F7F\u7528 webpack \u548C babel \u7684\u610F\u4E49","source":"@site/issue/8.engineering/26350.md","sourceDirName":"8.engineering","slug":"/26350","permalink":"/issue/26350","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-10-26 18:26:53","slug":"/26350"},"sidebar":"tutorialSidebar","previous":{"title":"\u79FB\u52A8\u7AEF h5 \u5982\u4F55\u6293\u5305\u7F51\u7EDC\u8BF7\u6C42","permalink":"/issue/26347"},"next":{"title":"\u524D\u7AEF\u7528\u5230\u7684 linux \u5E38\u7528\u547D\u4EE4\u6709\u54EA\u4E9B","permalink":"/issue/26372"}}'),l=s("85893"),c=s("50065");let r={date:"2020-10-26 18:26:53",slug:"/26350"},t="\u5982\u4F55\u914D\u7F6E webpack \u548C babel",i={},d=[];function o(n){let e={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u5982\u4F55\u914D\u7F6E-webpack-\u548C-babel",children:"\u5982\u4F55\u914D\u7F6E webpack \u548C babel"})}),"\n",(0,l.jsx)(e.p,{children:"\u4F7F\u7528 webpack \u548C babel \u7684\u610F\u4E49"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"ES6 \u6A21\u5757\u5316\uFF0C\u6D4F\u89C8\u5668\u6682\u4E0D\u652F\u6301"}),"\n",(0,l.jsx)(e.li,{children:"ES6 \u8BED\u6CD5\uFF0C\u6D4F\u89C8\u5668\u5E76\u4E0D\u5B8C\u5168\u652F\u6301"}),"\n",(0,l.jsx)(e.li,{children:"\u538B\u7F29\u4EE3\u7801\uFF0C\u6574\u5408\u4EE3\u7801\uFF0C\u4EE5\u8BA9\u7F51\u9875\u52A0\u8F7D\u66F4\u5FEB"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u521D\u59CB\u5316\u4E00\u4E2A npm \u73AF\u5883\uFF0C\u751F\u6210 package.json \u6587\u4EF6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u521D\u59CB\u5316 package.json \u6587\u4EF6\nnpm init -y\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u987A\u4FBF\u770B\u4E0B\u6700\u7EC8\u7684 package.json \u6587\u4EF6\u5185\u5BB9"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'{\n  "name": "webpack-demo",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo "Error: no test specified" && exit 1",\n    "build": "webpack --config webpack.prod.js",\n    "dev": "webpack-dev-server --config webpack.config.js"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "devDependencies": {\n    "@babel/core": "^7.6.2",\n    "@babel/preset-env": "^7.6.2",\n    "babel-loader": "^8.0.6",\n    "html-webpack-plugin": "^3.2.0",\n    "webpack": "^4.41.0",\n    "webpack-cli": "^3.3.9",\n    "webpack-dev-server": "^3.8.2"\n  }\n}\n'})}),"\n",(0,l.jsxs)(e.p,{children:["\u4E00\u987F\u64CD\u4F5C\u731B\u5982\u864E\u5B89\u88C5 webpack \u548C babel \u5404\u79CD\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6DD8\u5B9D\u4EE3\u7406 ",(0,l.jsx)(e.code,{children:"--registry=https://registry.npm.taobao.org"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u5B89\u88C5 webpack\nnpm install webpack webpack-cli -D\n// \u5B89\u88C5 html-webpack-plugin\uFF0C\u7528\u4E8E\u89E3\u6790 html\nnpm install html-webpack-plugin -D\n// \u5B89\u88C5 webpack-dev-server\uFF0C\u7528\u4E8E\u542F\u52A8\u670D\u52A1\nnpm install webpack-dev-server -D\n// \u5B89\u88C5 babel \u76F8\u5173\u63D2\u4EF6\uFF0C\u7528\u4E8E es6 \u8F6C es5\nnpm install @babel/core @babel/preset-env babel-loader -D\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u589E\u52A0\u4E00\u4E2A webpack.config.js \u7528\u4E8E\u5F00\u53D1\u65F6\u7684\u914D\u7F6E"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"const path = require('path') // node \u73AF\u5883\u7684 path\n// \u5F15\u5165 webpack \u89E3\u6790 html \u7684\u63D2\u4EF6\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\nmodule.exports = {\n    mode: 'development',// \u6A21\u5F0F production\n    entry: path.join(__dirname, 'src', 'index.js'), //\u5165\u53E3\u6587\u4EF6\n    output: { // \u8F93\u51FA\u6587\u4EF6\n        filename: 'bundle.js',\n        path: path.join(__dirname, 'dist') // build \u540E\u7684\u76EE\u5F55\n    },\n    module: { // \u6A21\u5757\n        rules: [\n            {  // es6 \u8F6C es5\n                test: /.js$/,\n                loader: ['babel-loader'],\n                include: path.join(__dirname, 'src'),\n                exclude: /node_modules/\n            }\n        ]\n    },\n    plugins: [ // \u63D2\u4EF6\n        new HtmlWebpackPlugin({\n            //\u5F15\u5165\u7684\u6A21\u677F\n            template: path.join(__dirname, 'src', 'index.html'),\n            //\u4EA7\u751F\u7684\u6587\u4EF6\n            filename: 'index.html'\n        })\n    ],\n    devServer: { // http\u670D\u52A1\n        port: 8088, //\u7AEF\u53E3\n        contentBase: path.join(__dirname, 'dist') // \u8FD0\u884C\u7684\u6839\u76EE\u5F55\n    },\n    stats: {children: false} //\u89E3\u51B3 Entrypoint undefined = index.html \u7684\u9519\u8BEF\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u636E webpack.config.js \u5185\u5BB9\u53EF\u77E5\uFF0C\u9700\u8981\u5728\u540C\u7EA7\u7684 src \u76EE\u5F55\u589E\u52A0 index.html\uFF0Cindex.js \u4E24\u4E2A\u6587\u4EF6\uFF0Cdist \u76EE\u5F55\u5728 build \u65F6\u4F1A\u81EA\u52A8\u751F\u6210\uFF0C\u6B64\u65F6\u6267\u884C\u547D\u4EE4"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u8FD0\u884C webpack \u5F00\u53D1\u73AF\u5883\nnpm run dev\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u53EF\u4EE5\u542F\u52A8\u4E00\u4E2A webpack \u5F00\u53D1\u73AF\u5883\u670D\u52A1\uFF0C\u8BBF\u95EE\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"http://localhost:8088/index.html\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u7B49\u7B49\uFF0C\u5982\u679C\u9700\u8981 babel \u7684\u652F\u6301\uFF0C\u8FD8\u9700\u8981\u589E\u52A0\u4E00\u4E2A .babelrc \u6587\u4EF6\uFF0C\u914D\u7F6E babel \u73AF\u5883\u6765\u8C03\u7528 @babel/core \u63D2\u4EF6\u8F6C\u4E49 es6 \u8BED\u6CD5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'{\n  "presets": ["@babel/preset-env"]\n}\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u987A\u5E26\u63D2\u5165\u4E00\u4E0B ES6 \u6A21\u5757\u5316\u89C4\u8303\u7684\u95EE\u9898\uFF0Ca.js \u6587\u4EF6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"export function fn() {\n    console.log('fn')\n}\nexport const name = 'a'\nexport const obj = {\n    name: 'zhangshan'\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"b.js\u6587\u4EF6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"function fn() {\n    console.log('fn')\n}\nconst name = 'b'\nconst obj = {\n    name: 'lishi'\n}\nexport {\n    fn,\n    name,\n    obj\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"c.js \u6587\u4EF6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"const a = {\n    name: 'a'\n}\nconst b = 'b'\nexport default {\n    a,\n    b\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u7528 index.js \u6587\u4EF6\u6765\u8C03\u7528"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'// es 6 \u8BED\u6CD5\nconst sum = (a, b) => {\n    return a + b\n}\nconsole.log(sum(1, 2)) // 3\n// \u89E3\u6784\u8D4B\u503C\n// import {fn, name, obj} from "./a";\nimport {fn, name, obj} from "./b";\nimport c from \'./c\'\nfn() //\nconsole.log(name) // b\nconsole.log(obj.name) // lishi\nconsole.log(c.a, c.b) // {name: "a"} "b"\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u6700\u540E\u914D\u7F6E\u4E0B webpack \u7684\u751F\u4EA7\u73AF\u5883\u7684 webpack.prod.js \u6587\u4EF6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"const path = require('path')\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\nmodule.exports = {\n    mode: 'production',//\n    entry: path.join(__dirname, 'src', 'index.js'), //\u5165\u53E3\u6587\u4EF6\n    output: {\n        // contenthash \u7528\u4E8E\u751F\u6210\u7C7B\u4F3C bundle.373515fc1573230aee90.js \u7684\u6587\u4EF6\n        filename: 'bundle.[contenthash].js',\n        path: path.join(__dirname, 'dist') // build \u540E\u7684\u76EE\u5F55\n    },\n    module: {\n        rules: [\n            {  // es6 \u8F6C es5\n                test: /.js$/,\n                loader: ['babel-loader'],\n                include: path.join(__dirname, 'src'),\n                exclude: /node_modules/\n            }\n        ]\n    },\n    plugins: [\n        new HtmlWebpackPlugin({\n            //\u5F15\u5165\u7684\u6A21\u677F\n            template: path.join(__dirname, 'src', 'index.html'),\n            //\u4EA7\u751F\u7684\u6587\u4EF6\n            filename: 'index.html'\n        })\n    ],\n    stats: {children: false} //\u89E3\u51B3 Entrypoint undefined = index.html \u7684\u9519\u8BEF\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6700\u540E\u6267\u884C\u547D\u4EE4\uFF0C\u4F1A\u5728 dist \u76EE\u5F55\u4E2D\u751F\u6210\u6253\u5305\u540E\u7684\u6587\u4EF6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"// \u8FD0\u884C webpack \u6253\u5305\nnpm run build\n"})})]})}function p(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},50065:function(n,e,s){s.d(e,{Z:function(){return t},a:function(){return r}});var a=s(67294);let l={},c=a.createContext(l);function r(n){let e=a.useContext(c);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),a.createElement(c.Provider,{value:e},n.children)}}}]);