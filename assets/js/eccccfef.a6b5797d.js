"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["5111"],{31625:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>l});var i=JSON.parse('{"id":"vuejs-use/26929","title":"Vue \u7EC4\u4EF6\u62BD\u79BB\u516C\u5171\u903B\u8F91\uFF08\u9AD8\u7EA7\uFF09","description":"mixin","source":"@site/docs/3.vuejs-use/26929.md","sourceDirName":"3.vuejs-use","slug":"/26929","permalink":"/docs/26929","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-11-12 11:29:10","slug":"/26929"},"sidebar":"tutorialSidebar","previous":{"title":"Vue \u7F13\u5B58\u7EC4\u4EF6\uFF08\u9AD8\u7EA7\uFF09","permalink":"/docs/26924"},"next":{"title":"Vuex \u7684\u4F7F\u7528","permalink":"/docs/26941"}}'),s=t("85893"),r=t("50065");let l={date:"2020-11-12 11:29:10",slug:"/26929"},o="Vue \u7EC4\u4EF6\u62BD\u79BB\u516C\u5171\u903B\u8F91\uFF08\u9AD8\u7EA7\uFF09",c={},d=[];function a(n){let e={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"vue-\u7EC4\u4EF6\u62BD\u79BB\u516C\u5171\u903B\u8F91\u9AD8\u7EA7",children:"Vue \u7EC4\u4EF6\u62BD\u79BB\u516C\u5171\u903B\u8F91\uFF08\u9AD8\u7EA7\uFF09"})}),"\n",(0,s.jsx)(e.p,{children:"mixin"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u591A\u4E2A\u7EC4\u4EF6\u6709\u76F8\u540C\u7684\u903B\u8F91\uFF0C\u62BD\u79BB\u51FA\u6765"}),"\n",(0,s.jsx)(e.li,{children:"mixin \u5E76\u4E0D\u662F\u5B8C\u7F8E\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u4F1A\u6709\u4E00\u4E9B\u95EE\u9898"}),"\n",(0,s.jsx)(e.li,{children:"Vue 3 \u7684 Composition API \u65E8\u5728\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u9996\u5148\u6709\u8FD9\u6837\u4E00\u6BB5\u4EE3\u7801"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"<template>\n    <div>\n        <p>{{name}} {{major}} {{city}}</p>\n        <button @click=\"showName\">\u663E\u793A\u59D3\u540D</button>\n    </div>\n</template>\n<script>\nimport myMixin from './mixin'\nexport default {\n    mixins: [myMixin], // \u53EF\u4EE5\u6DFB\u52A0\u591A\u4E2A\uFF0C\u4F1A\u81EA\u52A8\u5408\u5E76\u8D77\u6765\n    data() {\n        return {\n            name: '\u5F20\u4E09',\n            major: 'web \u524D\u7AEF'\n        }\n    },\n    methods: {\n    },\n    mounted() {\n        // eslint-disable-next-line\n        console.log('component mounted', this.name)\n    }\n}\n<\/script>\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u800C mixin \u662F\u4E00\u4E2A mixin.js \u6587\u4EF6"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"export default {\n    data() {\n        return {\n            city: '\u6DF1\u5733'\n        }\n    },\n    methods: {\n        showName() {\n            // eslint-disable-next-line\n            console.log(this.name)\n        }\n    },\n    mounted() {\n        // eslint-disable-next-line\n        console.log('mixin mounted', this.name)\n    }\n} \n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8FD9\u5C31\u662F mixin \u7684\u7528\u6CD5\uFF0C\u62BD\u8C61\u51FA\u516C\u5171\u903B\u8F91\u3002\u4F46 mixin \u4E5F\u6709\u95EE\u9898\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u53D8\u91CF\u6765\u6E90\u4E0D\u660E\u786E\uFF0C\u4E0D\u5229\u4E8E\u9605\u8BFB"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u591A\u4E2A mixin \u53EF\u80FD\u4F1A\u9020\u6210\u547D\u540D\u51B2\u7A81"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"mixin \u548C\u7EC4\u4EF6\u53EF\u80FD\u51FA\u73B0\u591A\u5BF9\u591A\u7684\u5173\u7CFB\uFF0C\u590D\u6742\u5EA6\u8F83\u9AD8"}),"\n"]}),"\n"]})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return l}});var i=t(67294);let s={},r=i.createContext(s);function l(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);