"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["5428"],{40390:function(n,e,i){i.r(e),i.d(e,{metadata:()=>l,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>t,frontMatter:()=>r});var l=JSON.parse('{"id":"webpack-base/27202","title":"webpack \u4F18\u5316\u4EA7\u51FA\u4EE3\u7801","description":"\u4F18\u5316\u4EA7\u51FA\u4EE3\u7801","source":"@site/docs/5.webpack-base/27202.md","sourceDirName":"5.webpack-base","slug":"/27202","permalink":"/docs/27202","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-12-28 14:56:00","slug":"/27202"},"sidebar":"tutorialSidebar","previous":{"title":"webpack \u4F18\u5316\u6784\u5EFA\u901F\u5EA6","permalink":"/docs/27195"},"next":{"title":"webpack \u4E4B babel \u4F7F\u7528","permalink":"/docs/27204"}}'),s=i("85893"),c=i("50065");let r={date:"2020-12-28 14:56:00",slug:"/27202"},a="webpack \u4F18\u5316\u4EA7\u51FA\u4EE3\u7801",o={},t=[{value:"1\u3001\u5C0F\u56FE\u7247 base64 \u7F16\u7801",id:"1\u5C0F\u56FE\u7247-base64-\u7F16\u7801",level:4},{value:"2\u3001bundle \u52A0 hash",id:"2bundle-\u52A0-hash",level:4},{value:"3\u3001\u61D2\u52A0\u8F7D\uFF0C\u5982",id:"3\u61D2\u52A0\u8F7D\u5982",level:4},{value:"4\u3001\u63D0\u53D6\u516C\u5171\u4EE3\u7801",id:"4\u63D0\u53D6\u516C\u5171\u4EE3\u7801",level:4},{value:"5\u3001IngorePlugin \u5FFD\u7565\u65E0\u7528\u6587\u4EF6",id:"5ingoreplugin-\u5FFD\u7565\u65E0\u7528\u6587\u4EF6",level:4},{value:"6\u3001\u4F7F\u7528 CDN \u52A0\u901F\uFF0C\u56FE\u7247\u4E5F\u9700\u8981 cdn \u914D\u7F6E",id:"6\u4F7F\u7528-cdn-\u52A0\u901F\u56FE\u7247\u4E5F\u9700\u8981-cdn-\u914D\u7F6E",level:4},{value:"7\u3001\u4F7F\u7528 production \u6A21\u5F0F",id:"7\u4F7F\u7528-production-\u6A21\u5F0F",level:4},{value:"8\u3001\u4F7F\u7528 Scope Hosting",id:"8\u4F7F\u7528-scope-hosting",level:4}];function d(n){let e={blockquote:"blockquote",code:"code",h1:"h1",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"webpack-\u4F18\u5316\u4EA7\u51FA\u4EE3\u7801",children:"webpack \u4F18\u5316\u4EA7\u51FA\u4EE3\u7801"})}),"\n",(0,s.jsx)(e.p,{children:"\u4F18\u5316\u4EA7\u51FA\u4EE3\u7801"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4F53\u79EF\u66F4\u5C0F"}),"\n",(0,s.jsx)(e.li,{children:"\u5408\u7406\u5206\u5305\uFF0C\u4E0D\u91CD\u590D\u52A0\u8F7D"}),"\n",(0,s.jsx)(e.li,{children:"\u901F\u5EA6\u66F4\u5FEB\uFF0C\u5185\u5B58\u4F7F\u7528\u66F4\u5C11"}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6CE8\uFF0C\u4EA7\u51FA\u4EE3\u7801\u914D\u7F6E webpack.prod.js \u6587\u4EF6"})}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"1\u5C0F\u56FE\u7247-base64-\u7F16\u7801",children:"1\u3001\u5C0F\u56FE\u7247 base64 \u7F16\u7801"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"{\n    module: {\n        rules: [\n            // \u56FE\u7247 - \u8003\u8651 base64 \u7F16\u7801\u7684\u60C5\u51B5\n            {\n                test: /\\.(png|jpg|jpeg|gif)$/,\n                use: {\n                    loader: 'url-loader',\n                    options: {\n                        // \u5C0F\u4E8E 5kb \u7684\u56FE\u7247\u7528 base64 \u683C\u5F0F\u4EA7\u51FA\n                        // \u5426\u5219\uFF0C\u4F9D\u7136\u5EF6\u7528 file-loader \u7684\u5F62\u5F0F\uFF0C\u4EA7\u51FA url \u683C\u5F0F\n                        limit: 5 * 1024,\n                        // \u6253\u5305\u5230 img \u76EE\u5F55\u4E0B\n                        outputPath: '/img1/',\n                        // \u8BBE\u7F6E\u56FE\u7247\u7684 cdn \u5730\u5740\uFF08\u4E5F\u53EF\u4EE5\u7EDF\u4E00\u5728\u5916\u9762\u7684 output \u4E2D\u8BBE\u7F6E\uFF0C\u90A3\u5C06\u4F5C\u7528\u4E8E\u6240\u6709\u9759\u6001\u8D44\u6E90\uFF09\n                        // publicPath: 'http://cdn.abc.com'\n                    }\n                }\n            },\n        ]\n    },\n}\n"})}),"\n",(0,s.jsx)(e.h4,{id:"2bundle-\u52A0-hash",children:"2\u3001bundle \u52A0 hash"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"{\n    output: {\n        filename: '[name].[contentHash:8].js', // name \u5373\u591A\u5165\u53E3\u65F6 entry \u7684 key\n    },\n}    \n"})}),"\n",(0,s.jsx)(e.h4,{id:"3\u61D2\u52A0\u8F7D\u5982",children:"3\u3001\u61D2\u52A0\u8F7D\uFF0C\u5982"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"import('./dynamic-data.js')\n"})}),"\n",(0,s.jsx)(e.h4,{id:"4\u63D0\u53D6\u516C\u5171\u4EE3\u7801",children:"4\u3001\u63D0\u53D6\u516C\u5171\u4EE3\u7801"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"{\n    optimization: {\n        // \u538B\u7F29 css\n        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],\n        // \u5206\u5272\u4EE3\u7801\u5757\n        splitChunks: {\n            chunks: 'all',\n            /**\n             * initial \u5165\u53E3chunk\uFF0C\u5BF9\u4E8E\u5F02\u6B65\u5BFC\u5165\u7684\u6587\u4EF6\u4E0D\u5904\u7406\n                async \u5F02\u6B65chunk\uFF0C\u53EA\u5BF9\u5F02\u6B65\u5BFC\u5165\u7684\u6587\u4EF6\u5904\u7406\n                all \u5168\u90E8chunk\n             */\n            // \u7F13\u5B58\u5206\u7EC4\n            cacheGroups: {\n                // \u7B2C\u4E09\u65B9\u6A21\u5757\n                vendor: {\n                    name: 'vendor', // chunk \u540D\u79F0\n                    priority: 1, // \u6743\u9650\u66F4\u9AD8\uFF0C\u4F18\u5148\u62BD\u79BB\uFF0C\u91CD\u8981\uFF01\uFF01\uFF01\n                    test: /node_modules/,\n                    minSize: 0,  // \u5927\u5C0F\u9650\u5236\n                    minChunks: 1  // \u6700\u5C11\u590D\u7528\u8FC7\u51E0\u6B21\n                },\n                // \u516C\u5171\u7684\u6A21\u5757\n                common: {\n                    name: 'common', // chunk \u540D\u79F0\n                    priority: 0, // \u4F18\u5148\u7EA7\n                    minSize: 0,  // \u516C\u5171\u6A21\u5757\u7684\u5927\u5C0F\u9650\u5236\n                    minChunks: 2  // \u516C\u5171\u6A21\u5757\u6700\u5C11\u590D\u7528\u8FC7\u51E0\u6B21\n                }\n            }\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(e.h4,{id:"5ingoreplugin-\u5FFD\u7565\u65E0\u7528\u6587\u4EF6",children:"5\u3001IngorePlugin \u5FFD\u7565\u65E0\u7528\u6587\u4EF6"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"{\n    plugins: [\n        // \u5FFD\u7565 moment \u4E0B\u7684 /locale \u76EE\u5F55\n        new webpack.IgnorePlugin(/\\.\\/locale/, /moment/),\n    ]\n}\n"})}),"\n",(0,s.jsx)(e.h4,{id:"6\u4F7F\u7528-cdn-\u52A0\u901F\u56FE\u7247\u4E5F\u9700\u8981-cdn-\u914D\u7F6E",children:"6\u3001\u4F7F\u7528 CDN \u52A0\u901F\uFF0C\u56FE\u7247\u4E5F\u9700\u8981 cdn \u914D\u7F6E"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"{\n    mode: 'production',\n    output: {\n        publicPath: 'http://cdn.abc.com'  // \u4FEE\u6539\u6240\u6709\u9759\u6001\u6587\u4EF6 url \u7684\u524D\u7F00\uFF08\u5982 cdn \u57DF\u540D\uFF09\uFF0C\u8FD9\u91CC\u6682\u65F6\u7528\u4E0D\u5230\n    },\n}\n"})}),"\n",(0,s.jsx)(e.h4,{id:"7\u4F7F\u7528-production-\u6A21\u5F0F",children:"7\u3001\u4F7F\u7528 production \u6A21\u5F0F"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u81EA\u52A8\u5F00\u542F\u4EE3\u7801\u538B\u7F29"}),"\n",(0,s.jsx)(e.li,{children:"Vue React \u7B49\u4F1A\u81EA\u52A8\u5220\u9664\u8C03\u8BD5\u4EE3\u7801\uFF08\u5982\u5F00\u53D1\u73AF\u5883\u7684 warning\uFF09"}),"\n",(0,s.jsx)(e.li,{children:"\u81EA\u52A8\u542F\u52A8 Tree-Shaking"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"{\n    mode: 'production',\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"1\uFF09\u4EC0\u4E48\u662F Tree-Shaking \uFF1F\u6BD4\u5982 math.js \u6709\u8FD9\u6837\u4E00\u6BB5\u4EE3\u7801"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"export const sum = (a, b) => {\n    return a + b\n}\nexport const mult = (a, b) => {\n    return a * b\n}\n// ES6 Module \u624D\u80FD\u8BA9 tree-shaking \u751F\u6548\n// commonjs \u5C31\u4E0D\u884C\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728 index.js \u4E2D\u53EA\u5F15\u7528 sum \u51FD\u6570"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"import { sum } from './math'\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8FD9\u6837\u5728\u6253\u5305\u662F\u4F1A\u81EA\u52A8\u5220\u9664 mult \u51FD\u6570\uFF0C\u8FD9\u5C31\u662F Tree-Shaking \u529F\u80FD"}),"\n",(0,s.jsx)(e.p,{children:"2\uFF09ES6 Module \u548C Commonjs \u7684\u533A\u522B"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ES6 Module \u9759\u6001\u5F15\u5165\uFF0C\u7F16\u8BD1\u65F6\u5F15\u5165"}),"\n",(0,s.jsx)(e.li,{children:"Commonjs \u52A8\u6001\u5F15\u5165\uFF0C\u6267\u884C\u65F6\u5F15\u5165"}),"\n",(0,s.jsx)(e.li,{children:"\u53EA\u6709 ES6 Module \u624D\u80FD\u9759\u6001\u5206\u4EAB\uFF0C\u5B9E\u73B0 Tree-Shaking"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"let apiList = require('../config/api.js')\nif(isDev){\n    // \u53EF\u4EE5\u52A8\u6001\u5F15\u5165\uFF0C\u6267\u884C\u65F6\u5F15\u5165\n    apiList = require('../config/api_dev.js')\n}\nimport apiList from '../config/api.js'\nif(isDev){\n    // \u7F16\u8F91\u65F6\u62A5\u9519\uFF0C\u53EA\u80FD\u9759\u6001\u5F15\u5165\n    import apiList from '../config/api_dev.js'\n}\n"})}),"\n",(0,s.jsx)(e.h4,{id:"8\u4F7F\u7528-scope-hosting",children:"8\u3001\u4F7F\u7528 Scope Hosting"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4EE3\u7801\u4F53\u79EF\u66F4\u5C0F"}),"\n",(0,s.jsx)(e.li,{children:"\u521B\u5EFA\u51FD\u6570\u4F5C\u7528\u57DF\u66F4\u5C11"}),"\n",(0,s.jsx)(e.li,{children:"\u4EE3\u7801\u53EF\u8BFB\u6027\u66F4\u597D"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6BD4\u5982"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"let a = 1;\nlet b = 2;\nlet c = 3;\nlet d = a+b+c;   //\u5728webpack\u4E2D\u4F1A\u81EA\u52A8\u7701\u7565\u4E00\u4E9B\u53EF\u4EE5\u7B80\u5316\u7684\u4EE3\u7801\n//\u7B80\u5316\u540E\u7684\u4EE3\u7801\u5982\u4E0B\uFF1Aconsole.log(6);\nconsole.log(d);\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u914D\u7F6E\u542F\u7528 Scope Hosting \u529F\u80FD"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin')\nmodule.exports = smart(webpackCommonConf, {\n    resolve:{\n        // \u9488\u5BF9 NPM \u4E2D\u7B2C\u4E09\u65B9\u6A21\u5757\u4F18\u5148\u91C7\u7528 jsnext:main \u4E2D\u6307\u5411\u7684 ES6 \u6A21\u5757\u5316\u8BED\u6CD5\u7684\u6587\u4EF6\n        mainFields:['jsnext:main','browser','main']\n    },\n    plugins: [\n        // \u5F00\u542F Scope Hosting\n        new ModuleConcatenationPlugin(),\n    ],\n"})})]})}function u(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},50065:function(n,e,i){i.d(e,{Z:function(){return a},a:function(){return r}});var l=i(67294);let s={},c=l.createContext(s);function r(n){let e=l.useContext(c);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);