"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3570],{46128:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var a=s(74848),l=s(28453);const c={date:"2020-10-26 18:26:53",slug:"/26350"},r="\u5982\u4f55\u914d\u7f6e webpack \u548c babel",i={id:"engineering/26350",title:"\u5982\u4f55\u914d\u7f6e webpack \u548c babel",description:"\u4f7f\u7528 webpack \u548c babel \u7684\u610f\u4e49",source:"@site/issue/8.engineering/26350.md",sourceDirName:"8.engineering",slug:"/26350",permalink:"/issue/26350",draft:!1,unlisted:!1,editUrl:"/feedback",tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-10-26 18:26:53",slug:"/26350"},sidebar:"tutorialSidebar",previous:{title:"\u79fb\u52a8\u7aef h5 \u5982\u4f55\u6293\u5305\u7f51\u7edc\u8bf7\u6c42",permalink:"/issue/26347"},next:{title:"\u524d\u7aef\u7528\u5230\u7684 linux \u5e38\u7528\u547d\u4ee4\u6709\u54ea\u4e9b",permalink:"/issue/26372"}},t={},d=[];function o(n){const e={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"\u5982\u4f55\u914d\u7f6e-webpack-\u548c-babel",children:"\u5982\u4f55\u914d\u7f6e webpack \u548c babel"})}),"\n",(0,a.jsx)(e.p,{children:"\u4f7f\u7528 webpack \u548c babel \u7684\u610f\u4e49"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"ES6 \u6a21\u5757\u5316\uff0c\u6d4f\u89c8\u5668\u6682\u4e0d\u652f\u6301"}),"\n",(0,a.jsx)(e.li,{children:"ES6 \u8bed\u6cd5\uff0c\u6d4f\u89c8\u5668\u5e76\u4e0d\u5b8c\u5168\u652f\u6301"}),"\n",(0,a.jsx)(e.li,{children:"\u538b\u7f29\u4ee3\u7801\uff0c\u6574\u5408\u4ee3\u7801\uff0c\u4ee5\u8ba9\u7f51\u9875\u52a0\u8f7d\u66f4\u5feb"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u521d\u59cb\u5316\u4e00\u4e2a npm \u73af\u5883\uff0c\u751f\u6210 package.json \u6587\u4ef6"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"// \u521d\u59cb\u5316 package.json \u6587\u4ef6\nnpm init -y\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u987a\u4fbf\u770b\u4e0b\u6700\u7ec8\u7684 package.json \u6587\u4ef6\u5185\u5bb9"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'{\n  "name": "webpack-demo",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo "Error: no test specified" && exit 1",\n    "build": "webpack --config webpack.prod.js",\n    "dev": "webpack-dev-server --config webpack.config.js"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "devDependencies": {\n    "@babel/core": "^7.6.2",\n    "@babel/preset-env": "^7.6.2",\n    "babel-loader": "^8.0.6",\n    "html-webpack-plugin": "^3.2.0",\n    "webpack": "^4.41.0",\n    "webpack-cli": "^3.3.9",\n    "webpack-dev-server": "^3.8.2"\n  }\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["\u4e00\u987f\u64cd\u4f5c\u731b\u5982\u864e\u5b89\u88c5 webpack \u548c babel \u5404\u79cd\u63d2\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528\u6dd8\u5b9d\u4ee3\u7406 ",(0,a.jsx)(e.code,{children:"--registry=https://registry.npm.taobao.org"})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"// \u5b89\u88c5 webpack\nnpm install webpack webpack-cli -D\n// \u5b89\u88c5 html-webpack-plugin\uff0c\u7528\u4e8e\u89e3\u6790 html\nnpm install html-webpack-plugin -D\n// \u5b89\u88c5 webpack-dev-server\uff0c\u7528\u4e8e\u542f\u52a8\u670d\u52a1\nnpm install webpack-dev-server -D\n// \u5b89\u88c5 babel \u76f8\u5173\u63d2\u4ef6\uff0c\u7528\u4e8e es6 \u8f6c es5\nnpm install @babel/core @babel/preset-env babel-loader -D\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u589e\u52a0\u4e00\u4e2a webpack.config.js \u7528\u4e8e\u5f00\u53d1\u65f6\u7684\u914d\u7f6e"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"const path = require('path') // node \u73af\u5883\u7684 path\n// \u5f15\u5165 webpack \u89e3\u6790 html \u7684\u63d2\u4ef6\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\nmodule.exports = {\n    mode: 'development',// \u6a21\u5f0f production\n    entry: path.join(__dirname, 'src', 'index.js'), //\u5165\u53e3\u6587\u4ef6\n    output: { // \u8f93\u51fa\u6587\u4ef6\n        filename: 'bundle.js',\n        path: path.join(__dirname, 'dist') // build \u540e\u7684\u76ee\u5f55\n    },\n    module: { // \u6a21\u5757\n        rules: [\n            {  // es6 \u8f6c es5\n                test: /.js$/,\n                loader: ['babel-loader'],\n                include: path.join(__dirname, 'src'),\n                exclude: /node_modules/\n            }\n        ]\n    },\n    plugins: [ // \u63d2\u4ef6\n        new HtmlWebpackPlugin({\n            //\u5f15\u5165\u7684\u6a21\u677f\n            template: path.join(__dirname, 'src', 'index.html'),\n            //\u4ea7\u751f\u7684\u6587\u4ef6\n            filename: 'index.html'\n        })\n    ],\n    devServer: { // http\u670d\u52a1\n        port: 8088, //\u7aef\u53e3\n        contentBase: path.join(__dirname, 'dist') // \u8fd0\u884c\u7684\u6839\u76ee\u5f55\n    },\n    stats: {children: false} //\u89e3\u51b3 Entrypoint undefined = index.html \u7684\u9519\u8bef\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u6839\u636e webpack.config.js \u5185\u5bb9\u53ef\u77e5\uff0c\u9700\u8981\u5728\u540c\u7ea7\u7684 src \u76ee\u5f55\u589e\u52a0 index.html\uff0cindex.js \u4e24\u4e2a\u6587\u4ef6\uff0cdist \u76ee\u5f55\u5728 build \u65f6\u4f1a\u81ea\u52a8\u751f\u6210\uff0c\u6b64\u65f6\u6267\u884c\u547d\u4ee4"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"// \u8fd0\u884c webpack \u5f00\u53d1\u73af\u5883\nnpm run dev\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u53ef\u4ee5\u542f\u52a8\u4e00\u4e2a webpack \u5f00\u53d1\u73af\u5883\u670d\u52a1\uff0c\u8bbf\u95ee\uff1a"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"http://localhost:8088/index.html\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u7b49\u7b49\uff0c\u5982\u679c\u9700\u8981 babel \u7684\u652f\u6301\uff0c\u8fd8\u9700\u8981\u589e\u52a0\u4e00\u4e2a .babelrc \u6587\u4ef6\uff0c\u914d\u7f6e babel \u73af\u5883\u6765\u8c03\u7528 @babel/core \u63d2\u4ef6\u8f6c\u4e49 es6 \u8bed\u6cd5"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'{\n  "presets": ["@babel/preset-env"]\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u987a\u5e26\u63d2\u5165\u4e00\u4e0b ES6 \u6a21\u5757\u5316\u89c4\u8303\u7684\u95ee\u9898\uff0ca.js \u6587\u4ef6"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"export function fn() {\n    console.log('fn')\n}\nexport const name = 'a'\nexport const obj = {\n    name: 'zhangshan'\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"b.js\u6587\u4ef6"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"function fn() {\n    console.log('fn')\n}\nconst name = 'b'\nconst obj = {\n    name: 'lishi'\n}\nexport {\n    fn,\n    name,\n    obj\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"c.js \u6587\u4ef6"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"const a = {\n    name: 'a'\n}\nconst b = 'b'\nexport default {\n    a,\n    b\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u7528 index.js \u6587\u4ef6\u6765\u8c03\u7528"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'// es 6 \u8bed\u6cd5\nconst sum = (a, b) => {\n    return a + b\n}\nconsole.log(sum(1, 2)) // 3\n// \u89e3\u6784\u8d4b\u503c\n// import {fn, name, obj} from "./a";\nimport {fn, name, obj} from "./b";\nimport c from \'./c\'\nfn() //\nconsole.log(name) // b\nconsole.log(obj.name) // lishi\nconsole.log(c.a, c.b) // {name: "a"} "b"\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u6700\u540e\u914d\u7f6e\u4e0b webpack \u7684\u751f\u4ea7\u73af\u5883\u7684 webpack.prod.js \u6587\u4ef6"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"const path = require('path')\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\nmodule.exports = {\n    mode: 'production',//\n    entry: path.join(__dirname, 'src', 'index.js'), //\u5165\u53e3\u6587\u4ef6\n    output: {\n        // contenthash \u7528\u4e8e\u751f\u6210\u7c7b\u4f3c bundle.373515fc1573230aee90.js \u7684\u6587\u4ef6\n        filename: 'bundle.[contenthash].js',\n        path: path.join(__dirname, 'dist') // build \u540e\u7684\u76ee\u5f55\n    },\n    module: {\n        rules: [\n            {  // es6 \u8f6c es5\n                test: /.js$/,\n                loader: ['babel-loader'],\n                include: path.join(__dirname, 'src'),\n                exclude: /node_modules/\n            }\n        ]\n    },\n    plugins: [\n        new HtmlWebpackPlugin({\n            //\u5f15\u5165\u7684\u6a21\u677f\n            template: path.join(__dirname, 'src', 'index.html'),\n            //\u4ea7\u751f\u7684\u6587\u4ef6\n            filename: 'index.html'\n        })\n    ],\n    stats: {children: false} //\u89e3\u51b3 Entrypoint undefined = index.html \u7684\u9519\u8bef\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u6700\u540e\u6267\u884c\u547d\u4ee4\uff0c\u4f1a\u5728 dist \u76ee\u5f55\u4e2d\u751f\u6210\u6253\u5305\u540e\u7684\u6587\u4ef6"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"// \u8fd0\u884c webpack \u6253\u5305\nnpm run build\n"})})]})}function p(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>i});var a=s(96540);const l={},c=a.createContext(l);function r(n){const e=a.useContext(c);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),a.createElement(c.Provider,{value:e},n.children)}}}]);