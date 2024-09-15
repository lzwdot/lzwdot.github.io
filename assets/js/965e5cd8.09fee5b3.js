"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2004],{54794:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var t=n(74848),c=n(28453);const r={date:"2020-12-16 16:38:00",slug:"/27186"},a="webpack \u62bd\u79bb\u538b\u7f29 css \u6587\u4ef6",o={id:"webpack-base/27186",title:"webpack \u62bd\u79bb\u538b\u7f29 css \u6587\u4ef6",description:"\u9700\u5728 webpack \u7684\u57fa\u7840\u914d\u7f6e\u4e0a\uff0c\u505a\u4e00\u5b9a\u7684\u4fee\u6539\uff1a",source:"@site/docs/5.webpack-base/27186.md",sourceDirName:"5.webpack-base",slug:"/27186",permalink:"/docs/27186",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-12-16 16:38:00",slug:"/27186"},sidebar:"tutorialSidebar",previous:{title:"webpack \u914d\u7f6e\u591a\u5165\u53e3",permalink:"/docs/27184"},next:{title:"webpack \u62bd\u79bb\u516c\u5171\u4ee3\u7801\u548c\u7b2c\u4e09\u65b9\u4ee3\u7801",permalink:"/docs/27187"}},l={},i=[];function d(e){const s={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"webpack-\u62bd\u79bb\u538b\u7f29-css-\u6587\u4ef6",children:"webpack \u62bd\u79bb\u538b\u7f29 css \u6587\u4ef6"})}),"\n",(0,t.jsx)(s.p,{children:"\u9700\u5728 webpack \u7684\u57fa\u7840\u914d\u7f6e\u4e0a\uff0c\u505a\u4e00\u5b9a\u7684\u4fee\u6539\uff1a"}),"\n",(0,t.jsx)(s.p,{children:"1\u3001\u62c6\u5206 webpack.common.js \u7684 css \u5904\u7406\uff0c\u5373\u5206\u522b\u5728 webpack.dev.js \u548c webpack.prod.js \u4e2d\u5904\u7406 css"}),"\n",(0,t.jsx)(s.p,{children:"2\u3001\u590d\u5236\u4e4b\u524d webpack.common.js \u7684 css \u5904\u7406\u5230 webpack.dev.js"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:" module: {\n        rules: [\n            // ...\n            {\n                test: /\\.css$/,\n                // loader \u7684\u6267\u884c\u987a\u5e8f\u662f\uff1a\u4ece\u540e\u5f80\u524d\n                loader: ['style-loader', 'css-loader', 'postcss-loader'] // \u52a0\u4e86 postcss\n            },\n            {\n                test: /\\.less$/,\n                // \u589e\u52a0 'less-loader' \uff0c\u6ce8\u610f\u987a\u5e8f\n                loader: ['style-loader', 'css-loader', 'less-loader']\n            }\n        ]\n    },\n"})}),"\n",(0,t.jsx)(s.p,{children:"3\u3001\u4fee\u6539 webpack.pro.js \u914d\u7f6e"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"const MiniCssExtractPlugin = require('mini-css-extract-plugin')\nconst TerserJSPlugin = require('terser-webpack-plugin')\nconst OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')\nmodule.exports = smart(webpackCommonConf, {\n    // ...\n    module: {\n        rules: [\n            // ...\n            // \u62bd\u79bb css\n            {\n                test: /\\.css$/,\n                loader: [\n                    MiniCssExtractPlugin.loader,  // \u6ce8\u610f\uff0c\u8fd9\u91cc\u4e0d\u518d\u7528 style-loader\n                    'css-loader',\n                    'postcss-loader'\n                ]\n            },\n            // \u62bd\u79bb less --\x3e css\n            {\n                test: /\\.less$/,\n                loader: [\n                    MiniCssExtractPlugin.loader,  // \u6ce8\u610f\uff0c\u8fd9\u91cc\u4e0d\u518d\u7528 style-loader\n                    'css-loader',\n                    'less-loader',\n                    'postcss-loader'\n                ]\n            }\n        ]\n    },\n    plugins: [\n        //...\n        // \u62bd\u79bb css \u6587\u4ef6\n        new MiniCssExtractPlugin({\n            filename: 'css/main.[contentHash:8].css'\n        })\n    ],\n    optimization: {\n        // \u538b\u7f29 css\n        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],\n    }\n})\n"})})]})}function p(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var t=n(96540);const c={},r=t.createContext(c);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);