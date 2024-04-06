"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7672],{18366:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var i=s(74848),l=s(28453);const c={date:"2020-12-28 14:56:00",slug:"/27202"},r="webpack \u4f18\u5316\u4ea7\u51fa\u4ee3\u7801",o={id:"webpack-base/27202",title:"webpack \u4f18\u5316\u4ea7\u51fa\u4ee3\u7801",description:"\u4f18\u5316\u4ea7\u51fa\u4ee3\u7801",source:"@site/docs/5.webpack-base/27202.md",sourceDirName:"5.webpack-base",slug:"/27202",permalink:"/docs/27202",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-12-28 14:56:00",slug:"/27202"},sidebar:"tutorialSidebar",previous:{title:"webpack \u4f18\u5316\u6784\u5efa\u901f\u5ea6",permalink:"/docs/27195"},next:{title:"webpack \u4e4b babel \u4f7f\u7528",permalink:"/docs/27204"}},a={},d=[{value:"1\u3001\u5c0f\u56fe\u7247 base64 \u7f16\u7801",id:"1\u5c0f\u56fe\u7247-base64-\u7f16\u7801",level:4},{value:"2\u3001bundle \u52a0 hash",id:"2bundle-\u52a0-hash",level:4},{value:"3\u3001\u61d2\u52a0\u8f7d\uff0c\u5982",id:"3\u61d2\u52a0\u8f7d\u5982",level:4},{value:"4\u3001\u63d0\u53d6\u516c\u5171\u4ee3\u7801",id:"4\u63d0\u53d6\u516c\u5171\u4ee3\u7801",level:4},{value:"5\u3001IngorePlugin \u5ffd\u7565\u65e0\u7528\u6587\u4ef6",id:"5ingoreplugin-\u5ffd\u7565\u65e0\u7528\u6587\u4ef6",level:4},{value:"6\u3001\u4f7f\u7528 CDN \u52a0\u901f\uff0c\u56fe\u7247\u4e5f\u9700\u8981 cdn \u914d\u7f6e",id:"6\u4f7f\u7528-cdn-\u52a0\u901f\u56fe\u7247\u4e5f\u9700\u8981-cdn-\u914d\u7f6e",level:4},{value:"7\u3001\u4f7f\u7528 production \u6a21\u5f0f",id:"7\u4f7f\u7528-production-\u6a21\u5f0f",level:4},{value:"8\u3001\u4f7f\u7528 Scope Hosting",id:"8\u4f7f\u7528-scope-hosting",level:4}];function t(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"webpack-\u4f18\u5316\u4ea7\u51fa\u4ee3\u7801",children:"webpack \u4f18\u5316\u4ea7\u51fa\u4ee3\u7801"}),"\n",(0,i.jsx)(e.p,{children:"\u4f18\u5316\u4ea7\u51fa\u4ee3\u7801"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4f53\u79ef\u66f4\u5c0f"}),"\n",(0,i.jsx)(e.li,{children:"\u5408\u7406\u5206\u5305\uff0c\u4e0d\u91cd\u590d\u52a0\u8f7d"}),"\n",(0,i.jsx)(e.li,{children:"\u901f\u5ea6\u66f4\u5feb\uff0c\u5185\u5b58\u4f7f\u7528\u66f4\u5c11"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u6ce8\uff0c\u4ea7\u51fa\u4ee3\u7801\u914d\u7f6e webpack.prod.js \u6587\u4ef6"})}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"1\u5c0f\u56fe\u7247-base64-\u7f16\u7801",children:"1\u3001\u5c0f\u56fe\u7247 base64 \u7f16\u7801"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"{\n    module: {\n        rules: [\n            // \u56fe\u7247 - \u8003\u8651 base64 \u7f16\u7801\u7684\u60c5\u51b5\n            {\n                test: /\\.(png|jpg|jpeg|gif)$/,\n                use: {\n                    loader: 'url-loader',\n                    options: {\n                        // \u5c0f\u4e8e 5kb \u7684\u56fe\u7247\u7528 base64 \u683c\u5f0f\u4ea7\u51fa\n                        // \u5426\u5219\uff0c\u4f9d\u7136\u5ef6\u7528 file-loader \u7684\u5f62\u5f0f\uff0c\u4ea7\u51fa url \u683c\u5f0f\n                        limit: 5 * 1024,\n                        // \u6253\u5305\u5230 img \u76ee\u5f55\u4e0b\n                        outputPath: '/img1/',\n                        // \u8bbe\u7f6e\u56fe\u7247\u7684 cdn \u5730\u5740\uff08\u4e5f\u53ef\u4ee5\u7edf\u4e00\u5728\u5916\u9762\u7684 output \u4e2d\u8bbe\u7f6e\uff0c\u90a3\u5c06\u4f5c\u7528\u4e8e\u6240\u6709\u9759\u6001\u8d44\u6e90\uff09\n                        // publicPath: 'http://cdn.abc.com'\n                    }\n                }\n            },\n        ]\n    },\n}\n"})}),"\n",(0,i.jsx)(e.h4,{id:"2bundle-\u52a0-hash",children:"2\u3001bundle \u52a0 hash"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"{\n    output: {\n        filename: '[name].[contentHash:8].js', // name \u5373\u591a\u5165\u53e3\u65f6 entry \u7684 key\n    },\n}    \n"})}),"\n",(0,i.jsx)(e.h4,{id:"3\u61d2\u52a0\u8f7d\u5982",children:"3\u3001\u61d2\u52a0\u8f7d\uff0c\u5982"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"import('./dynamic-data.js')\n"})}),"\n",(0,i.jsx)(e.h4,{id:"4\u63d0\u53d6\u516c\u5171\u4ee3\u7801",children:"4\u3001\u63d0\u53d6\u516c\u5171\u4ee3\u7801"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"{\n    optimization: {\n        // \u538b\u7f29 css\n        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],\n        // \u5206\u5272\u4ee3\u7801\u5757\n        splitChunks: {\n            chunks: 'all',\n            /**\n             * initial \u5165\u53e3chunk\uff0c\u5bf9\u4e8e\u5f02\u6b65\u5bfc\u5165\u7684\u6587\u4ef6\u4e0d\u5904\u7406\n                async \u5f02\u6b65chunk\uff0c\u53ea\u5bf9\u5f02\u6b65\u5bfc\u5165\u7684\u6587\u4ef6\u5904\u7406\n                all \u5168\u90e8chunk\n             */\n            // \u7f13\u5b58\u5206\u7ec4\n            cacheGroups: {\n                // \u7b2c\u4e09\u65b9\u6a21\u5757\n                vendor: {\n                    name: 'vendor', // chunk \u540d\u79f0\n                    priority: 1, // \u6743\u9650\u66f4\u9ad8\uff0c\u4f18\u5148\u62bd\u79bb\uff0c\u91cd\u8981\uff01\uff01\uff01\n                    test: /node_modules/,\n                    minSize: 0,  // \u5927\u5c0f\u9650\u5236\n                    minChunks: 1  // \u6700\u5c11\u590d\u7528\u8fc7\u51e0\u6b21\n                },\n                // \u516c\u5171\u7684\u6a21\u5757\n                common: {\n                    name: 'common', // chunk \u540d\u79f0\n                    priority: 0, // \u4f18\u5148\u7ea7\n                    minSize: 0,  // \u516c\u5171\u6a21\u5757\u7684\u5927\u5c0f\u9650\u5236\n                    minChunks: 2  // \u516c\u5171\u6a21\u5757\u6700\u5c11\u590d\u7528\u8fc7\u51e0\u6b21\n                }\n            }\n        }\n    }\n}\n"})}),"\n",(0,i.jsx)(e.h4,{id:"5ingoreplugin-\u5ffd\u7565\u65e0\u7528\u6587\u4ef6",children:"5\u3001IngorePlugin \u5ffd\u7565\u65e0\u7528\u6587\u4ef6"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"{\n    plugins: [\n        // \u5ffd\u7565 moment \u4e0b\u7684 /locale \u76ee\u5f55\n        new webpack.IgnorePlugin(/\\.\\/locale/, /moment/),\n    ]\n}\n"})}),"\n",(0,i.jsx)(e.h4,{id:"6\u4f7f\u7528-cdn-\u52a0\u901f\u56fe\u7247\u4e5f\u9700\u8981-cdn-\u914d\u7f6e",children:"6\u3001\u4f7f\u7528 CDN \u52a0\u901f\uff0c\u56fe\u7247\u4e5f\u9700\u8981 cdn \u914d\u7f6e"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"{\n    mode: 'production',\n    output: {\n        publicPath: 'http://cdn.abc.com'  // \u4fee\u6539\u6240\u6709\u9759\u6001\u6587\u4ef6 url \u7684\u524d\u7f00\uff08\u5982 cdn \u57df\u540d\uff09\uff0c\u8fd9\u91cc\u6682\u65f6\u7528\u4e0d\u5230\n    },\n}\n"})}),"\n",(0,i.jsx)(e.h4,{id:"7\u4f7f\u7528-production-\u6a21\u5f0f",children:"7\u3001\u4f7f\u7528 production \u6a21\u5f0f"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u81ea\u52a8\u5f00\u542f\u4ee3\u7801\u538b\u7f29"}),"\n",(0,i.jsx)(e.li,{children:"Vue React \u7b49\u4f1a\u81ea\u52a8\u5220\u9664\u8c03\u8bd5\u4ee3\u7801\uff08\u5982\u5f00\u53d1\u73af\u5883\u7684 warning\uff09"}),"\n",(0,i.jsx)(e.li,{children:"\u81ea\u52a8\u542f\u52a8 Tree-Shaking"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"{\n    mode: 'production',\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"1\uff09\u4ec0\u4e48\u662f Tree-Shaking \uff1f\u6bd4\u5982 math.js \u6709\u8fd9\u6837\u4e00\u6bb5\u4ee3\u7801"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"export const sum = (a, b) => {\n    return a + b\n}\nexport const mult = (a, b) => {\n    return a * b\n}\n// ES6 Module \u624d\u80fd\u8ba9 tree-shaking \u751f\u6548\n// commonjs \u5c31\u4e0d\u884c\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5728 index.js \u4e2d\u53ea\u5f15\u7528 sum \u51fd\u6570"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"import { sum } from './math'\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u6837\u5728\u6253\u5305\u662f\u4f1a\u81ea\u52a8\u5220\u9664 mult \u51fd\u6570\uff0c\u8fd9\u5c31\u662f Tree-Shaking \u529f\u80fd"}),"\n",(0,i.jsx)(e.p,{children:"2\uff09ES6 Module \u548c Commonjs \u7684\u533a\u522b"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"ES6 Module \u9759\u6001\u5f15\u5165\uff0c\u7f16\u8bd1\u65f6\u5f15\u5165"}),"\n",(0,i.jsx)(e.li,{children:"Commonjs \u52a8\u6001\u5f15\u5165\uff0c\u6267\u884c\u65f6\u5f15\u5165"}),"\n",(0,i.jsx)(e.li,{children:"\u53ea\u6709 ES6 Module \u624d\u80fd\u9759\u6001\u5206\u4eab\uff0c\u5b9e\u73b0 Tree-Shaking"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"let apiList = require('../config/api.js')\nif(isDev){\n    // \u53ef\u4ee5\u52a8\u6001\u5f15\u5165\uff0c\u6267\u884c\u65f6\u5f15\u5165\n    apiList = require('../config/api_dev.js')\n}\nimport apiList from '../config/api.js'\nif(isDev){\n    // \u7f16\u8f91\u65f6\u62a5\u9519\uff0c\u53ea\u80fd\u9759\u6001\u5f15\u5165\n    import apiList from '../config/api_dev.js'\n}\n"})}),"\n",(0,i.jsx)(e.h4,{id:"8\u4f7f\u7528-scope-hosting",children:"8\u3001\u4f7f\u7528 Scope Hosting"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4ee3\u7801\u4f53\u79ef\u66f4\u5c0f"}),"\n",(0,i.jsx)(e.li,{children:"\u521b\u5efa\u51fd\u6570\u4f5c\u7528\u57df\u66f4\u5c11"}),"\n",(0,i.jsx)(e.li,{children:"\u4ee3\u7801\u53ef\u8bfb\u6027\u66f4\u597d"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u6bd4\u5982"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"let a = 1;\nlet b = 2;\nlet c = 3;\nlet d = a+b+c;   //\u5728webpack\u4e2d\u4f1a\u81ea\u52a8\u7701\u7565\u4e00\u4e9b\u53ef\u4ee5\u7b80\u5316\u7684\u4ee3\u7801\n//\u7b80\u5316\u540e\u7684\u4ee3\u7801\u5982\u4e0b\uff1aconsole.log(6);\nconsole.log(d);\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u914d\u7f6e\u542f\u7528 Scope Hosting \u529f\u80fd"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')\nmodule.exports = smart(webpackCommonConf, {\n    resolve:{\n        // \u9488\u5bf9 NPM \u4e2d\u7b2c\u4e09\u65b9\u6a21\u5757\u4f18\u5148\u91c7\u7528 jsnext:main \u4e2d\u6307\u5411\u7684 ES6 \u6a21\u5757\u5316\u8bed\u6cd5\u7684\u6587\u4ef6\n        mainFields:['jsnext:main','browser','main']\n    },\n    plugins: [\n        // \u5f00\u542f Scope Hosting\n        new ModuleConcatenationPlugin(),\n    ],\n"})})]})}function u(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(t,{...n})}):t(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>o});var i=s(96540);const l={},c=i.createContext(l);function r(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);