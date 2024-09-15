"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5519],{98409:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var c=t(74848),s=t(28453);const a={date:"2020-12-16 16:39:00",slug:"/27187"},i="webpack \u62bd\u79bb\u516c\u5171\u4ee3\u7801\u548c\u7b2c\u4e09\u65b9\u4ee3\u7801",r={id:"webpack-base/27187",title:"webpack \u62bd\u79bb\u516c\u5171\u4ee3\u7801\u548c\u7b2c\u4e09\u65b9\u4ee3\u7801",description:"\u9700\u5728 webpack \u7684\u57fa\u7840\u914d\u7f6e\u4e0a\uff0c\u505a\u4e00\u5b9a\u7684\u4fee\u6539\uff1a",source:"@site/docs/5.webpack-base/27187.md",sourceDirName:"5.webpack-base",slug:"/27187",permalink:"/docs/27187",draft:!1,unlisted:!1,editUrl:"/feedback",tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-12-16 16:39:00",slug:"/27187"},sidebar:"tutorialSidebar",previous:{title:"webpack \u62bd\u79bb\u538b\u7f29 css \u6587\u4ef6",permalink:"/docs/27186"},next:{title:"webpack \u5b9e\u73b0\u5f02\u6b65\u52a0\u8f7d JS",permalink:"/docs/27190"}},o={},l=[];function d(n){const e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.header,{children:(0,c.jsx)(e.h1,{id:"webpack-\u62bd\u79bb\u516c\u5171\u4ee3\u7801\u548c\u7b2c\u4e09\u65b9\u4ee3\u7801",children:"webpack \u62bd\u79bb\u516c\u5171\u4ee3\u7801\u548c\u7b2c\u4e09\u65b9\u4ee3\u7801"})}),"\n",(0,c.jsx)(e.p,{children:"\u9700\u5728 webpack \u7684\u57fa\u7840\u914d\u7f6e\u4e0a\uff0c\u505a\u4e00\u5b9a\u7684\u4fee\u6539\uff1a"}),"\n",(0,c.jsx)(e.p,{children:"1\u3001\u4fee\u6539 webpack.prod.js \u6587\u4ef6"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"{\n    optimization: {\n        // \u538b\u7f29 css\n        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],\n        // \u5206\u5272\u4ee3\u7801\u5757\n        splitChunks: {\n            chunks: 'all',\n            /**\n             * initial \u5165\u53e3 chunk\uff0c\u5bf9\u4e8e\u5f02\u6b65\u5bfc\u5165\u7684\u6587\u4ef6\u4e0d\u5904\u7406\n                async \u5f02\u6b65 chunk\uff0c\u53ea\u5bf9\u5f02\u6b65\u5bfc\u5165\u7684\u6587\u4ef6\u5904\u7406\n                all \u5168\u90e8 chunk\n             */\n            // \u7f13\u5b58\u5206\u7ec4\n            cacheGroups: {\n                // \u7b2c\u4e09\u65b9\u6a21\u5757\n                vendor: {\n                    name: 'vendor', // chunk \u540d\u79f0\n                    priority: 1, // \u6743\u9650\u66f4\u9ad8\uff0c\u4f18\u5148\u62bd\u79bb\uff0c\u91cd\u8981\uff01\uff01\uff01\n                    test: /node_modules/,\n                    minSize: 0,  // \u5927\u5c0f\u9650\u5236\n                    minChunks: 1  // \u6700\u5c11\u590d\u7528\u8fc7\u51e0\u6b21\n                },\n                // \u516c\u5171\u7684\u6a21\u5757\n                common: {\n                    name: 'common', // chunk \u540d\u79f0\n                    priority: 0, // \u4f18\u5148\u7ea7\n                    minSize: 0,  // \u516c\u5171\u6a21\u5757\u7684\u5927\u5c0f\u9650\u5236\n                    minChunks: 2  // \u516c\u5171\u6a21\u5757\u6700\u5c11\u590d\u7528\u8fc7\u51e0\u6b21\n                }\n            }\n        }\n    }\n}\n"})}),"\n",(0,c.jsx)(e.p,{children:"2\u3001\u5728 webpack.common.js \u4fee\u6539"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-js",children:"{\n    plugins: [\n        // new HtmlWebpackPlugin({\n        //     template: path.join(srcPath, 'index.html'),\n        //     filename: 'index.html'\n        // })\n        // \u591a\u5165\u53e3 - \u751f\u6210 index.html\n        new HtmlWebpackPlugin({\n            template: path.join(srcPath, 'index.html'),\n            filename: 'index.html',\n            // chunks \u8868\u793a\u8be5\u9875\u9762\u8981\u5f15\u7528\u54ea\u4e9b chunk \uff08\u5373\u4e0a\u9762\u7684 index \u548c other\uff09\uff0c\u9ed8\u8ba4\u5168\u90e8\u5f15\u7528\n            chunks: ['index', 'vendor', 'common']  // \u8981\u8003\u8651\u4ee3\u7801\u5206\u5272\n        }),\n        // \u591a\u5165\u53e3 - \u751f\u6210 other.html\n        new HtmlWebpackPlugin({\n            template: path.join(srcPath, 'other.html'),\n            filename: 'other.html',\n            chunks: ['other', 'common']  // \u8003\u8651\u4ee3\u7801\u5206\u5272\n        })\n    ]\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>r});var c=t(96540);const s={},a=c.createContext(s);function i(n){const e=c.useContext(a);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),c.createElement(a.Provider,{value:e},n.children)}}}]);