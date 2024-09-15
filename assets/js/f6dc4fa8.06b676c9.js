"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5941],{1343:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var a=s(74848),t=s(28453);const r={date:"2020-12-15 15:18:00",slug:"/27178"},c="webpack \u57fa\u672c\u914d\u7f6e",l={id:"webpack-base/27178",title:"webpack \u57fa\u672c\u914d\u7f6e",description:"\u57fa\u672c\u914d\u7f6e\uff0c\u4e3b\u8981\u5305\u542b\uff1a",source:"@site/docs/5.webpack-base/27178.md",sourceDirName:"5.webpack-base",slug:"/27178",permalink:"/docs/27178",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-12-15 15:18:00",slug:"/27178"},sidebar:"tutorialSidebar",previous:{title:"Webpack \u57fa\u7840",permalink:"/docs/webpack-base/"},next:{title:"webpack \u914d\u7f6e\u591a\u5165\u53e3",permalink:"/docs/27184"}},o={},i=[];function p(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"webpack-\u57fa\u672c\u914d\u7f6e",children:"webpack \u57fa\u672c\u914d\u7f6e"})}),"\n",(0,a.jsx)(n.p,{children:"\u57fa\u672c\u914d\u7f6e\uff0c\u4e3b\u8981\u5305\u542b\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u62c6\u5206\u914d\u7f6e\u548c merge"}),"\n",(0,a.jsx)(n.li,{children:"\u542f\u52a8\u672c\u5730\u670d\u52a1"}),"\n",(0,a.jsx)(n.li,{children:"\u5904\u7406 ES6"}),"\n",(0,a.jsx)(n.li,{children:"\u5904\u7406\u6837\u5f0f"}),"\n",(0,a.jsx)(n.li,{children:"\u5904\u7406\u56fe\u7247"}),"\n",(0,a.jsx)(n.li,{children:"\uff08\u6a21\u5757\u5316\uff09"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u516c\u5171\u914d\u7f6e\u6587\u4ef6 webpack.common.js"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const path = require('path')\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\nconst { srcPath, distPath } = require('./paths')\nmodule.exports = {\n    entry: path.join(srcPath, 'index'),\n    module: {\n        rules: [\n            {\n                // \u5904\u7406 ES6 \u7b49\n                test: /\\.js$/,\n                loader: ['babel-loader'],\n                include: srcPath,\n                exclude: /node_modules/\n            },\n            // {\n            //     test: /\\.vue$/,\n            //     loader: ['vue-loader'],\n            //     include: srcPath\n            // },\n            // {\n            //     test: /\\.css$/,\n            //     // loader \u7684\u6267\u884c\u987a\u5e8f\u662f\uff1a\u4ece\u540e\u5f80\u524d\uff08\u77e5\u8bc6\u70b9\uff09\n            //     loader: ['style-loader', 'css-loader']\n            // },\n            {\n                test: /\\.css$/,\n                // loader \u7684\u6267\u884c\u987a\u5e8f\u662f\uff1a\u4ece\u540e\u5f80\u524d\n                loader: ['style-loader', 'css-loader', 'postcss-loader'] // \u52a0\u4e86 postcss\n            },\n            {\n                test: /\\.less$/,\n                // \u589e\u52a0 'less-loader' \uff0c\u6ce8\u610f\u987a\u5e8f\n                loader: ['style-loader', 'css-loader', 'less-loader']\n            }\n        ]\n    },\n    plugins: [\n        new HtmlWebpackPlugin({\n            template: path.join(srcPath, 'index.html'),\n            filename: 'index.html'\n        })\n    ]\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5f00\u53d1\u73af\u5883\u914d\u7f6e webpack.dev.js"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const path = require('path')\nconst webpack = require('webpack')\nconst webpackCommonConf = require('./webpack.common.js')\nconst { smart } = require('webpack-merge')\nconst { srcPath, distPath } = require('./paths')\nmodule.exports = smart(webpackCommonConf, {\n    mode: 'development',\n    module: {\n        rules: [\n            // \u76f4\u63a5\u5f15\u5165\u56fe\u7247 url\n            {\n                test: /\\.(png|jpg|jpeg|gif)$/,\n                use: 'file-loader'\n            }\n        ]\n    },\n    plugins: [\n        new webpack.DefinePlugin({\n            // window.ENV = 'development'\n            ENV: JSON.stringify('development')\n        })\n    ],\n    devServer: {\n        port: 8080,\n        progress: true,  // \u663e\u793a\u6253\u5305\u7684\u8fdb\u5ea6\u6761\n        contentBase: distPath,  // \u6839\u76ee\u5f55\n        open: true,  // \u81ea\u52a8\u6253\u5f00\u6d4f\u89c8\u5668\n        compress: true,  // \u542f\u52a8 gzip \u538b\u7f29\n        // \u8bbe\u7f6e\u4ee3\u7406\n        proxy: {\n            // \u5c06\u672c\u5730 /api/xxx \u4ee3\u7406\u5230 localhost:3000/api/xxx\n            '/api': 'http://localhost:3000',\n            // \u5c06\u672c\u5730 /api2/xxx \u4ee3\u7406\u5230 localhost:3000/xxx\n            '/api2': {\n                target: 'http://localhost:3000',\n                pathRewrite: {\n                    '/api2': ''\n                }\n            }\n        }\n    }\n})\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u751f\u6210\u73af\u5883\u914d\u7f6e webpack.prod.js"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const path = require('path')\nconst webpack = require('webpack')\nconst { CleanWebpackPlugin } = require('clean-webpack-plugin')\nconst webpackCommonConf = require('./webpack.common.js')\nconst { smart } = require('webpack-merge')\nconst { srcPath, distPath } = require('./paths')\nmodule.exports = smart(webpackCommonConf, {\n    mode: 'production',\n    output: {\n        filename: 'bundle.[contentHash:8].js',  // \u6253\u5305\u4ee3\u7801\u65f6\uff0c\u52a0\u4e0a hash \u6233\n        path: distPath,\n        // publicPath: 'http://cdn.abc.com'  // \u4fee\u6539\u6240\u6709\u9759\u6001\u6587\u4ef6 url \u7684\u524d\u7f00\uff08\u5982 cdn \u57df\u540d\uff09\uff0c\u8fd9\u91cc\u6682\u65f6\u7528\u4e0d\u5230\n    },\n    module: {\n        rules: [\n            // \u56fe\u7247 - \u8003\u8651 base64 \u7f16\u7801\u7684\u60c5\u51b5\n            {\n                test: /\\.(png|jpg|jpeg|gif)$/,\n                use: {\n                    loader: 'url-loader',\n                    options: {\n                        // \u5c0f\u4e8e 5kb \u7684\u56fe\u7247\u7528 base64 \u683c\u5f0f\u4ea7\u51fa\n                        // \u5426\u5219\uff0c\u4f9d\u7136\u5ef6\u7528 file-loader \u7684\u5f62\u5f0f\uff0c\u4ea7\u51fa url \u683c\u5f0f\n                        limit: 5 * 1024,\n                        // \u6253\u5305\u5230 img \u76ee\u5f55\u4e0b\n                        outputPath: '/img1/',\n                        // \u8bbe\u7f6e\u56fe\u7247\u7684 cdn \u5730\u5740\uff08\u4e5f\u53ef\u4ee5\u7edf\u4e00\u5728\u5916\u9762\u7684 output \u4e2d\u8bbe\u7f6e\uff0c\u90a3\u5c06\u4f5c\u7528\u4e8e\u6240\u6709\u9759\u6001\u8d44\u6e90\uff09\n                        // publicPath: 'http://cdn.abc.com'\n                    }\n                }\n            },\n        ]\n    },\n    plugins: [\n        new CleanWebpackPlugin(), // \u4f1a\u9ed8\u8ba4\u6e05\u7a7a output.path \u6587\u4ef6\u5939\n        new webpack.DefinePlugin({\n            // window.ENV = 'production'\n            ENV: JSON.stringify('production')\n        })\n    ]\n})\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u914d\u7f6e\u6587\u4ef6\u8fd8\u5f15\u5165\u4e86\u4e00\u4e2a paths.js \u7684\u6587\u4ef6"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const path = require('path')\nconst srcPath = path.join(__dirname, '..', 'src')\nconst distPath = path.join(__dirname, '..', 'dist')\nmodule.exports = {\n    srcPath,\n    distPath\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u60f3\u8981\u4f7f\u7528 babel \u529f\u80fd\uff0c\u8fd8\u9700\u8981\u5728\u6839\u76ee\u5f55\u589e\u52a0 .babelrc \u6587\u4ef6"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "presets": ["@babel/preset-env"],\n    "plugins": []\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u5f53\u5904\u7406 css \u65f6\uff0c\u4e3a\u4e86\u4fdd\u6301\u517c\u5bb9\u6027\uff0c\u81ea\u52a8\u524d\u7f00\uff0c\u5f15\u5165 postcss-loader \u6a21\u5757\u542f\u7528 autoprefixer \u529f\u80fd\uff0c\u5728\u6839\u76ee\u5f55\u65b0\u589e postcss.config.js \u6587\u4ef6"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"module.exports = {\n    plugins: [require('autoprefixer')]\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6700\u540e\uff0c\u770b\u4e0b\u5b8c\u6574\u7684 package.json \u914d\u7f6e"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "name": "webpack-demo",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "devBuild": "webpack --config build-base-conf/webpack.dev.js",\n    "dev": "webpack-dev-server --config build-base-conf/webpack.dev.js",\n    "build": "webpack --config build-base-conf/webpack.prod.js"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "devDependencies": {\n    "@babel/core": "^7.7.4",\n    "@babel/preset-env": "^7.7.4",\n    "autoprefixer": "^9.7.3",\n    "babel-loader": "^8.0.6",\n    "clean-webpack-plugin": "^3.0.0",\n    "css-loader": "^3.2.1",\n    "file-loader": "^5.0.2",\n    "happypack": "^5.0.1",\n    "html-webpack-plugin": "^3.2.0",\n    "less": "^3.10.3",\n    "less-loader": "^5.0.0",\n    "mini-css-extract-plugin": "^0.8.0",\n    "optimize-css-assets-webpack-plugin": "^5.0.3",\n    "postcss-loader": "^3.0.0",\n    "style-loader": "^1.0.1",\n    "terser-webpack-plugin": "^2.2.2",\n    "url-loader": "^3.0.0",\n    "webpack": "^4.41.2",\n    "webpack-cli": "^3.3.10",\n    "webpack-dev-server": "^3.9.0",\n    "webpack-merge": "^4.2.2",\n    "webpack-parallel-uglify-plugin": "^1.1.2"\n  },\n  "dependencies": {\n    "lodash": "^4.17.15",\n    "moment": "^2.24.0"\n  }\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var a=s(96540);const t={},r=a.createContext(t);function c(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);