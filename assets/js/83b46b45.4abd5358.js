"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["4363"],{36055:function(n,e,l){l.r(e),l.d(e,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>d,toc:()=>o,frontMatter:()=>c});var s=JSON.parse('{"id":"webpack-base/27195","title":"webpack \u4F18\u5316\u6784\u5EFA\u901F\u5EA6","description":"\u7528\u4E8E\u751F\u4EA7\u73AF\u5883","source":"@site/docs/5.webpack-base/27195.md","sourceDirName":"5.webpack-base","slug":"/27195","permalink":"/docs/27195","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-12-25 17:52:00","slug":"/27195"},"sidebar":"tutorialSidebar","previous":{"title":"webpack \u4E2D module chunk bundle \u7684\u533A\u522B","permalink":"/docs/27191"},"next":{"title":"webpack \u4F18\u5316\u4EA7\u51FA\u4EE3\u7801","permalink":"/docs/27202"}}'),a=l("85893"),r=l("50065");let c={date:"2020-12-25 17:52:00",slug:"/27195"},i="webpack \u4F18\u5316\u6784\u5EFA\u901F\u5EA6",d={},o=[{value:"\u7528\u4E8E\u751F\u4EA7\u73AF\u5883",id:"\u7528\u4E8E\u751F\u4EA7\u73AF\u5883",level:3},{value:"1\u3001\u4F18\u5316 babel-loader\uFF0C\u5F00\u542F\u7F13\u5B58\u548C\u6392\u9664\u8303\u56F4",id:"1\u4F18\u5316-babel-loader\u5F00\u542F\u7F13\u5B58\u548C\u6392\u9664\u8303\u56F4",level:4},{value:"2\u3001\u7528 IngorePlugin \u5FFD\u7565\u65E0\u7528\u6587\u4EF6\uFF0C\u6BD4\u5982",id:"2\u7528-ingoreplugin-\u5FFD\u7565\u65E0\u7528\u6587\u4EF6\u6BD4\u5982",level:4},{value:"3\u3001noParse \u907F\u514D\u91CD\u590D\u6253\u5305",id:"3noparse-\u907F\u514D\u91CD\u590D\u6253\u5305",level:4},{value:"4\u3001happyPack \u591A\u8FDB\u7A0B\u6253\u5305",id:"4happypack-\u591A\u8FDB\u7A0B\u6253\u5305",level:4},{value:"5\u3001\u4F7F\u7528 ParallelUglifyPlugin \u591A\u8FDB\u7A0B\u538B\u7F29 JS",id:"5\u4F7F\u7528-paralleluglifyplugin-\u591A\u8FDB\u7A0B\u538B\u7F29-js",level:4},{value:"\u7528\u4E8E\u5F00\u53D1\u73AF\u5883",id:"\u7528\u4E8E\u5F00\u53D1\u73AF\u5883",level:3},{value:"6\u3001\u5F00\u542F\u6D4F\u89C8\u5668\u81EA\u52A8\u5237\u65B0",id:"6\u5F00\u542F\u6D4F\u89C8\u5668\u81EA\u52A8\u5237\u65B0",level:4},{value:"7\u3001\u5F00\u542F\u70ED\u66F4\u65B0",id:"7\u5F00\u542F\u70ED\u66F4\u65B0",level:4},{value:"8\u3001DllPlugin \u52A8\u6001\u94FE\u63A5\u5E93\u63D2\u4EF6",id:"8dllplugin-\u52A8\u6001\u94FE\u63A5\u5E93\u63D2\u4EF6",level:4}];function t(n){let e={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"webpack-\u4F18\u5316\u6784\u5EFA\u901F\u5EA6",children:"webpack \u4F18\u5316\u6784\u5EFA\u901F\u5EA6"})}),"\n",(0,a.jsx)(e.h3,{id:"\u7528\u4E8E\u751F\u4EA7\u73AF\u5883",children:"\u7528\u4E8E\u751F\u4EA7\u73AF\u5883"}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u6CE8\uFF0C\u6253\u5305\u914D\u7F6E\u4E00\u822C\u662F\u6307 webpack.prod.js \u6587\u4EF6"})}),"\n"]}),"\n",(0,a.jsx)(e.h4,{id:"1\u4F18\u5316-babel-loader\u5F00\u542F\u7F13\u5B58\u548C\u6392\u9664\u8303\u56F4",children:"1\u3001\u4F18\u5316 babel-loader\uFF0C\u5F00\u542F\u7F13\u5B58\u548C\u6392\u9664\u8303\u56F4"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"{\n    module: {\n        rules: [\n            {\n                test: /\\.js$/,\n                loader: ['babel-loader?cacheDirectory'], // \u5F00\u542F\u7F13\u5B58\n                include: path.resolve(__dirname,'scr'),\n                // \u6392\u9664\u8303\u56F4\uFF0Cinclude \u548C exclude \u4E8C\u9009\u4E00\n                //exclude: path.resolve(__dirname,'node_modules')\n            },\n        ]\n    },\n}\n"})}),"\n",(0,a.jsx)(e.h4,{id:"2\u7528-ingoreplugin-\u5FFD\u7565\u65E0\u7528\u6587\u4EF6\u6BD4\u5982",children:"2\u3001\u7528 IngorePlugin \u5FFD\u7565\u65E0\u7528\u6587\u4EF6\uFF0C\u6BD4\u5982"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import moment from 'moment'\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u9ED8\u8BA4\u4F1A\u5F15\u5165\u6240\u6709\u8BED\u8A00 JS \u4EE3\u7801\uFF0C\u4EE3\u7801\u8FC7\u5927\uFF0C\u5982\u4F55\u53EA\u5F15\u5165\u4E2D\u6587\uFF1F"}),"\n",(0,a.jsx)(e.p,{children:"\u5148\u5FFD\u7565\u8BED\u8A00\u5305\u6587\u4EF6\u5939"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"{\n    plugins: [\n        // \u5FFD\u7565 moment \u4E0B\u7684 /locale \u76EE\u5F55\n        new webpack.IgnorePlugin(/\\.\\/locale/, /moment/),\n    ]\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u7136\u540E\u624B\u52A8\u5F15\u5165"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import moment from 'moment'\nimport 'moment/locale/zh-cn' // \u624B\u52A8\u5F15\u5165\u8BED\u8A00\u5305\nmoment.locale('zh-cn') // \u8BBE\u7F6E\u4E2D\u6587\nconsole.log('locale',moment.locale())\nconsole.log('date',moment().format('ll')) // 2020\u5E74xx\u6708xx\u65E5\n// locale zh-cn\n// date 2020\u5E7412\u670828\u65E5\n"})}),"\n",(0,a.jsx)(e.h4,{id:"3noparse-\u907F\u514D\u91CD\u590D\u6253\u5305",children:"3\u3001noParse \u907F\u514D\u91CD\u590D\u6253\u5305"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"{\n    module: {\n        // \u72EC\u7ACB\u5B8C\u6574\u7684 react.min.js \u6587\u4EF6\u6CA1\u6709\u91C7\u7528\u6A21\u5757\u5316\n        // \u5FFD\u7565\u5BF9 react.min.js \u6587\u4EF6\u7684\u9012\u5F52\u89E3\u6790\u5904\u7406\n        noParse:[/react\\.min\\.js$/],\n    }\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"IngorePlugin \u548C noParse \u533A\u522B"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"IngorePlugin \u76F4\u63A5\u4E0D\u5F15\u5165\uFF0C\u4EE3\u7801\u4E2D\u6CA1\u6709"}),"\n",(0,a.jsx)(e.li,{children:"noParse \u5F15\u5165\uFF0C\u4F46\u4E0D\u6253\u5305"}),"\n"]}),"\n",(0,a.jsx)(e.h4,{id:"4happypack-\u591A\u8FDB\u7A0B\u6253\u5305",children:"4\u3001happyPack \u591A\u8FDB\u7A0B\u6253\u5305"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"JS \u5355\u7EBF\u7A0B\uFF0C\u5F00\u542F\u591A\u8FDB\u7A0B\u6253\u5305"}),"\n",(0,a.jsx)(e.li,{children:"\u63D0\u9AD8\u6784\u5EFA\u901F\u5EA6\uFF08\u7279\u522B\u662F\u591A\u6838 CPU\uFF09"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u6BD4\u5982\u5F00\u542F babel \u5F00\u542F\u591A\u8FDB\u7A0B\uFF0C\u5148\u5F15\u5165"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"const HappyPack = require('happypack')\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u7136\u540E\u914D\u7F6E"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"{\n    module: {\n        rules: [\n            // js\n            {\n                test: /\\.js$/,\n                // \u628A\u5BF9 .js \u6587\u4EF6\u7684\u5904\u7406\u8F6C\u4EA4\u7ED9 id \u4E3A babel \u7684 HappyPack \u5B9E\u4F8B\n                use: ['happypack/loader?id=babel'],\n                include: srcPath,\n                // exclude: /node_modules/\n            },\n        ]\n    },\n    plugins: [\n        // happyPack \u5F00\u542F\u591A\u8FDB\u7A0B\u6253\u5305\n        new HappyPack({\n            // \u7528\u552F\u4E00\u7684\u6807\u8BC6\u7B26 id \u6765\u4EE3\u8868\u5F53\u524D\u7684 HappyPack \u662F\u7528\u6765\u5904\u7406\u4E00\u7C7B\u7279\u5B9A\u7684\u6587\u4EF6\n            id: 'babel',\n            // \u5982\u4F55\u5904\u7406 .js \u6587\u4EF6\uFF0C\u7528\u6CD5\u548C Loader \u914D\u7F6E\u4E2D\u4E00\u6837\n            loaders: ['babel-loader?cacheDirectory']\n        }),\n    ]\n}\n"})}),"\n",(0,a.jsx)(e.h4,{id:"5\u4F7F\u7528-paralleluglifyplugin-\u591A\u8FDB\u7A0B\u538B\u7F29-js",children:"5\u3001\u4F7F\u7528 ParallelUglifyPlugin \u591A\u8FDB\u7A0B\u538B\u7F29 JS"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"webpack \u5185\u7F6E Uglify \u5DE5\u5177\u538B\u7F29 JS \uFF08\u5355\u8FDB\u7A0B\uFF09"}),"\n",(0,a.jsx)(e.li,{children:"JS \u5355\u7EBF\u7A0B\uFF0C\u5F00\u542F\u591A\u8FDB\u7A0B\u538B\u7F29\u66F4\u5FEB"}),"\n",(0,a.jsx)(e.li,{children:"\u548C happyPack \u540C\u539F\u7406"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u5148\u5F15\u5165"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u7136\u540E\u914D\u7F6E"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"{\n    plugins: [\n        // \u4F7F\u7528 ParallelUglifyPlugin \u5E76\u884C\u538B\u7F29\u8F93\u51FA\u7684 JS \u4EE3\u7801\n        new ParallelUglifyPlugin({\n            // \u4F20\u9012\u7ED9 UglifyJS \u7684\u53C2\u6570\n            // \uFF08\u8FD8\u662F\u4F7F\u7528 UglifyJS \u538B\u7F29\uFF0C\u53EA\u4E0D\u8FC7\u5E2E\u52A9\u5F00\u542F\u4E86\u591A\u8FDB\u7A0B\uFF09\n            uglifyJS: {\n                output: {\n                    beautify: false, // \u6700\u7D27\u51D1\u7684\u8F93\u51FA\n                    comments: false, // \u5220\u9664\u6240\u6709\u7684\u6CE8\u91CA\n                },\n                compress: {\n                    // \u5220\u9664\u6240\u6709\u7684 `console` \u8BED\u53E5\uFF0C\u53EF\u4EE5\u517C\u5BB9ie\u6D4F\u89C8\u5668\n                    drop_console: true,\n                    // \u5185\u5D4C\u5B9A\u4E49\u4E86\u4F46\u662F\u53EA\u7528\u5230\u4E00\u6B21\u7684\u53D8\u91CF\n                    collapse_vars: true,\n                    // \u63D0\u53D6\u51FA\u51FA\u73B0\u591A\u6B21\u4F46\u662F\u6CA1\u6709\u5B9A\u4E49\u6210\u53D8\u91CF\u53BB\u5F15\u7528\u7684\u9759\u6001\u503C\n                    reduce_vars: true,\n                }\n            }\n        })\n    ],\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5173\u4E8E\u5F00\u542F\u591A\u8FDB\u7A0B"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u9879\u76EE\u8F83\u5927\uFF0C\u6253\u5305\u8F83\u6162\uFF0C\u5F00\u542F\u591A\u8FDB\u7A0B\u80FD\u63D0\u9AD8\u901F\u5EA6"}),"\n",(0,a.jsx)(e.li,{children:"\u9879\u76EE\u8F83\u5C0F\uFF0C\u6253\u5305\u5F88\u5FEB\uFF0C\u5F00\u542F\u591A\u8FDB\u7A0B\u4F1A\u51CF\u4F4E\u901F\u5EA6\uFF08\u8FDB\u7A0B\u5F00\u9500\uFF09"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"\u7528\u4E8E\u5F00\u53D1\u73AF\u5883",children:"\u7528\u4E8E\u5F00\u53D1\u73AF\u5883"}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"\u6CE8\uFF0C\u4EE5\u4E0B\u914D\u7F6E webpack.dev.js \u6587\u4EF6"})}),"\n"]}),"\n",(0,a.jsx)(e.h4,{id:"6\u5F00\u542F\u6D4F\u89C8\u5668\u81EA\u52A8\u5237\u65B0",children:"6\u3001\u5F00\u542F\u6D4F\u89C8\u5668\u81EA\u52A8\u5237\u65B0"}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"\u4E00\u822C\u7528\u4E0D\u4E0A\uFF0C\u672C\u5730\u5F00\u53D1 devServer \u9ED8\u8BA4\u5F00\u542F\u76D1\u542C\u6587\u4EF6\u53D8\u5316\uFF0C\u81EA\u52A8\u5237\u65B0\u6D4F\u89C8\u5668"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"{\n    devServer: {\n    },\n    watch: true, // \u5F00\u542F\u76D1\u542C\uFF0C\u9ED8\u8BA4\u4E3A false\n    watchOptions: {\n        ignored: /node_modules/, // \u5FFD\u7565\u54EA\u4E9B\n        // \u76D1\u542C\u5230\u53D8\u5316\u53D1\u751F\u540E\u4F1A\u7B49300ms\u518D\u53BB\u6267\u884C\u52A8\u4F5C\uFF0C\u9632\u6B62\u6587\u4EF6\u66F4\u65B0\u592A\u5FEB\u5BFC\u81F4\u91CD\u65B0\u7F16\u8BD1\u9891\u7387\u592A\u9AD8\n        // \u9ED8\u8BA4\u4E3A 300ms\n        aggregateTimeout: 300,\n        // \u5224\u65AD\u6587\u4EF6\u662F\u5426\u53D1\u751F\u53D8\u5316\u662F\u901A\u8FC7\u4E0D\u505C\u7684\u53BB\u8BE2\u95EE\u7CFB\u7EDF\u6307\u5B9A\u6587\u4EF6\u6709\u6CA1\u6709\u53D8\u5316\u5B9E\u73B0\u7684\n        // \u9ED8\u8BA4\u6BCF\u96941000\u6BEB\u79D2\u8BE2\u95EE\u4E00\u6B21\n        poll: 1000\n    }\n}\n"})}),"\n",(0,a.jsx)(e.h4,{id:"7\u5F00\u542F\u70ED\u66F4\u65B0",children:"7\u3001\u5F00\u542F\u70ED\u66F4\u65B0"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u81EA\u52A8\u5237\u65B0\uFF1A\u6574\u4E2A\u9875\u9762\u5168\u90E8\u5237\u65B0\uFF0C\u901F\u5EA6\u8F83\u6162"}),"\n",(0,a.jsx)(e.li,{children:"\u81EA\u52A8\u5237\u65B0\uFF1A\u6574\u4E2A\u9875\u9762\u5168\u90E8\u5237\u65B0\uFF0C\u72B6\u6001\u4F1A\u4E22\u5931"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u5148\u5F15\u5165"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u7136\u540E\u914D\u7F6E"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"{\n    entry: {\n        // index: path.join(srcPath, 'index.js'),\n        index: [\n            'webpack-dev-server/client?http://localhost:8080/',\n            'webpack/hot/dev-server',\n            path.join(srcPath, 'index.js')\n        ],\n    },\n    plugins: [\n        new HotModuleReplacementPlugin()\n    ],\n    devServer: {\n        hot: true,\n    }\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u8FD9\u6837\u4FEE\u6539 css \u53EF\u4EE5\u5B9E\u73B0\u70ED\u66F4\u65B0\u4E86\uFF0C\u4F46 JS \u9700\u8981\u76D1\u542C\u8303\u56F4\uFF0C\u5982"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import { sum } from './math'\n// \u589E\u52A0\uFF0C\u5F00\u542F\u70ED\u66F4\u65B0\u4E4B\u540E\u7684\u4EE3\u7801\u903B\u8F91\nif (module.hot) {\n    module.hot.accept(['./math'], () => {\n        const sumRes = sum(10, 10)\n        console.log('sumRes in hot', sumRes)\n    })\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u4EE5\u4E0A\u4FEE\u6539 math.js \u624D\u4F1A\u89E6\u53D1\u70ED\u66F4\u65B0\u56DE\u8C03\u51FD\u6570"}),"\n",(0,a.jsx)(e.h4,{id:"8dllplugin-\u52A8\u6001\u94FE\u63A5\u5E93\u63D2\u4EF6",children:"8\u3001DllPlugin \u52A8\u6001\u94FE\u63A5\u5E93\u63D2\u4EF6"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u524D\u7AEF\u6846\u67B6\u5982 vue React\uFF0C\u4F53\u79EF\u5927\uFF0C\u6784\u5EFA\u6162"}),"\n",(0,a.jsx)(e.li,{children:"\u8F83\u7A33\u5B9A\uFF0C\u4E0D\u5E38\u5347\u7EA7\u7248\u672C"}),"\n",(0,a.jsx)(e.li,{children:"\u540C\u4E00\u4E2A\u7248\u672C\u53EA\u6784\u5EFA\u4E00\u6B21\u5373\u53EF\uFF0C\u4E0D\u7528\u6BCF\u6B21\u90FD\u91CD\u65B0\u6784\u5EFA"}),"\n",(0,a.jsx)(e.li,{children:"webpback \u5DF2\u5185\u7F6E DllPlugin \u652F\u6301"}),"\n",(0,a.jsx)(e.li,{children:"DllPlugin - \u6253\u5305\u51FA dll \u6587\u4EF6"}),"\n",(0,a.jsx)(e.li,{children:"DllReferencePlugin - \u4F7F\u7528 dll \u6587\u4EF6"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"\u914D\u7F6E webpack.dll.js \u6587\u4EF6"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"const path = require('path')\nconst DllPlugin = require('webpack/lib/DllPlugin')\nconst { srcPath, distPath } = require('./paths')\nmodule.exports = {\n  mode: 'development',\n  // JS \u6267\u884C\u5165\u53E3\u6587\u4EF6\n  entry: {\n    // \u628A React \u76F8\u5173\u6A21\u5757\u7684\u653E\u5230\u4E00\u4E2A\u5355\u72EC\u7684\u52A8\u6001\u94FE\u63A5\u5E93\n    react: ['react', 'react-dom']\n  },\n  output: {\n    // \u8F93\u51FA\u7684\u52A8\u6001\u94FE\u63A5\u5E93\u7684\u6587\u4EF6\u540D\u79F0\uFF0C[name] \u4EE3\u8868\u5F53\u524D\u52A8\u6001\u94FE\u63A5\u5E93\u7684\u540D\u79F0\uFF0C\n    // \u4E5F\u5C31\u662F entry \u4E2D\u914D\u7F6E\u7684 react \u548C polyfill\n    filename: '[name].dll.js',\n    // \u8F93\u51FA\u7684\u6587\u4EF6\u90FD\u653E\u5230 dist \u76EE\u5F55\u4E0B\n    path: distPath,\n    // \u5B58\u653E\u52A8\u6001\u94FE\u63A5\u5E93\u7684\u5168\u5C40\u53D8\u91CF\u540D\u79F0\uFF0C\u4F8B\u5982\u5BF9\u5E94 react \u6765\u8BF4\u5C31\u662F _dll_react\n    // \u4E4B\u6240\u4EE5\u5728\u524D\u9762\u52A0\u4E0A _dll_ \u662F\u4E3A\u4E86\u9632\u6B62\u5168\u5C40\u53D8\u91CF\u51B2\u7A81\n    library: '_dll_[name]',\n  },\n  plugins: [\n    // \u63A5\u5165 DllPlugin\n    new DllPlugin({\n      // \u52A8\u6001\u94FE\u63A5\u5E93\u7684\u5168\u5C40\u53D8\u91CF\u540D\u79F0\uFF0C\u9700\u8981\u548C output.library \u4E2D\u4FDD\u6301\u4E00\u81F4\n      // \u8BE5\u5B57\u6BB5\u7684\u503C\u4E5F\u5C31\u662F\u8F93\u51FA\u7684 manifest.json \u6587\u4EF6 \u4E2D name \u5B57\u6BB5\u7684\u503C\n      // \u4F8B\u5982 react.manifest.json \u4E2D\u5C31\u6709 \"name\": \"_dll_react\"\n      name: '_dll_[name]',\n      // \u63CF\u8FF0\u52A8\u6001\u94FE\u63A5\u5E93\u7684 manifest.json \u6587\u4EF6\u8F93\u51FA\u65F6\u7684\u6587\u4EF6\u540D\u79F0\n      path: path.join(distPath, '[name].manifest.json'),\n    }),\n  ],\n}\n"})}),"\n",(0,a.jsxs)(e.p,{children:["\u5728 package.json \u914D\u7F6E\u6267\u884C\u7684\u811A\u6B65\uFF0C\u5E76\u6267\u884C ",(0,a.jsx)(e.code,{children:"npm run dll"})," \u547D\u4EE4"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'{\n  "scripts": {\n    "dll": "webpack --config build/webpack.dll.js"\n  },\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u4F7F\u7528\u6253\u5305\u51FA\u6765\u7684 dll \u6587\u4EF6\uFF0C\u914D\u7F6E webpack.dev.js \u6587\u4EF6"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"// \u7B2C\u4E00\uFF0C\u5F15\u5165 DllReferencePlugin\nconst DllReferencePlugin = require('webpack/lib/DllReferencePlugin');\nmodule.exports = smart(webpackCommonConf, {\n    mode: 'development',\n    module: {\n        rules: [\n            {\n                test: /\\.js$/,\n                loader: ['babel-loader'],\n                include: srcPath,\n                exclude: /node_modules/ // \u7B2C\u4E8C\uFF0C\u4E0D\u8981\u518D\u8F6C\u6362 node_modules \u7684\u4EE3\u7801\n            },\n        ]\n    },\n    plugins: [\n        // \u7B2C\u4E09\uFF0C\u544A\u8BC9 Webpack \u4F7F\u7528\u4E86\u54EA\u4E9B\u52A8\u6001\u94FE\u63A5\u5E93\n        new DllReferencePlugin({\n            // \u63CF\u8FF0 react \u52A8\u6001\u94FE\u63A5\u5E93\u7684\u6587\u4EF6\u5185\u5BB9\n            manifest: require(path.join(distPath, 'react.manifest.json')),\n        }),\n    ],\n})\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u6700\u540E\u5728 index.html \u5F15\u7528"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:'<script src="./react.dll.js"><\/script>\n'})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(t,{...n})}):t(n)}},50065:function(n,e,l){l.d(e,{Z:function(){return i},a:function(){return c}});var s=l(67294);let a={},r=s.createContext(a);function c(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);