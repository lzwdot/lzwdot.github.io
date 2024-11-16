"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["2394"],{1823:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>i,assets:()=>d,toc:()=>o,frontMatter:()=>c});var t=JSON.parse('{"id":"webpack-base/27190","title":"webpack \u5B9E\u73B0\u5F02\u6B65\u52A0\u8F7D JS","description":"\u61D2\u52A0\u8F7D\uFF0C\u5176\u5B9E webpack \u73AF\u5883\u652F\u6301\u7684","source":"@site/docs/5.webpack-base/27190.md","sourceDirName":"5.webpack-base","slug":"/27190","permalink":"/docs/27190","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-12-25 17:01:57","slug":"/27190"},"sidebar":"tutorialSidebar","previous":{"title":"webpack \u62BD\u79BB\u516C\u5171\u4EE3\u7801\u548C\u7B2C\u4E09\u65B9\u4EE3\u7801","permalink":"/docs/27187"},"next":{"title":"webpack \u4E2D module chunk bundle \u7684\u533A\u522B","permalink":"/docs/27191"}}'),s=a("85893"),r=a("50065");let c={date:"2020-12-25 17:01:57",slug:"/27190"},l="webpack \u5B9E\u73B0\u5F02\u6B65\u52A0\u8F7D JS",d={},o=[];function u(e){let n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"webpack-\u5B9E\u73B0\u5F02\u6B65\u52A0\u8F7D-js",children:"webpack \u5B9E\u73B0\u5F02\u6B65\u52A0\u8F7D JS"})}),"\n",(0,s.jsx)(n.p,{children:"\u61D2\u52A0\u8F7D\uFF0C\u5176\u5B9E webpack \u73AF\u5883\u652F\u6301\u7684"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u5F15\u5165\u52A8\u6001\u6570\u636E - \u61D2\u52A0\u8F7D\nsetTimeout(()=>{\n    // \u56DE\u987E vue React \u5F02\u6B65\u7EC4\u4EF6\uFF0C\u5176\u5B9E webpack \u73AF\u5883\u652F\u6301\u7684\n    // \u5B9A\u4E49 chunk\n    import('./dynamic-data.js').then(res=>{\n        console.log(res.default.message) // \u6CE8\u610F\u8FD9\u91CC\u7684 default\n    })\n},1500)\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5904\u7406 React \u7684 JSX \u4F7F\u7528"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"npm install --save-dev @babel/preset-react\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u540E\u914D\u7F6E .babelrc \u6587\u4EF6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'{\n  "presets": ["@babel/preset-react"]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5904\u7406 Vue \u6587\u4EF6\uFF0C\u5219\u4F7F\u7528 vue-loader"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"npm install -D vue-loader vue-template-compiler\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u540E\u914D\u7F6E webpack.common.js \u6587\u4EF6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n    module: {\n        rules: [\n            {\n                test: /\\.vue$/,\n                loader: ['vue-loader'],\n                include: srcPath\n            },\n        ]\n    },\n}\n"})})]})}function i(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},50065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return c}});var t=a(67294);let s={},r=t.createContext(s);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);