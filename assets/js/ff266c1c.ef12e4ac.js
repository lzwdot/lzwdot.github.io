"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["8653"],{86242:function(n,e,t){t.r(e),t.d(e,{metadata:()=>o,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>l});var o=JSON.parse('{"id":"vuejs-use/26756","title":"Vue \u4E8B\u4EF6","description":"\u5982\u4F55\u4F20\u9012event \u53C2\u6570\uFF0C\u81EA\u5B9A\u4E49\u53C2\u6570\uFF0C\u3010\u89C2\u5BDF\u3011\u4E8B\u4EF6\u88AB\u7ED1\u5B9A\u5230\u54EA\u91CC\uFF1F","source":"@site/docs/3.vuejs-use/26756.md","sourceDirName":"3.vuejs-use","slug":"/26756","permalink":"/docs/26756","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-11-05 16:41:34","slug":"/26756"},"sidebar":"tutorialSidebar","previous":{"title":"Vue \u5FAA\u73AF\uFF08\u5217\u8868\uFF09\u6E32\u67D3","permalink":"/docs/26752"},"next":{"title":"Vue \u8868\u5355","permalink":"/docs/26763"}}'),r=t("85893"),s=t("50065");let l={date:"2020-11-05 16:41:34",slug:"/26756"},i="Vue \u4E8B\u4EF6",c={},a=[];function d(n){let e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"vue-\u4E8B\u4EF6",children:"Vue \u4E8B\u4EF6"})}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u4F55\u4F20\u9012event \u53C2\u6570\uFF0C\u81EA\u5B9A\u4E49\u53C2\u6570\uFF0C\u3010\u89C2\u5BDF\u3011\u4E8B\u4EF6\u88AB\u7ED1\u5B9A\u5230\u54EA\u91CC\uFF1F"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"<template>\n    <div>\n        <p>{{num}}</p>\n        <button @click=\"increment1\">+1</button>\n        <button @click=\"increment2(2, $event)\">+2</button>\n    </div>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            num: 0\n        }\n    },\n    methods: {\n        increment1(event) {\n            // eslint-disable-next-line\n            console.log('event', event, event.__proto__.constructor) // \u662F\u539F\u751F\u7684 event \u5BF9\u8C61\n            // eslint-disable-next-line\n            console.log(event.target)\n            // eslint-disable-next-line\n            console.log(event.currentTarget) // \u6CE8\u610F\uFF0C\u4E8B\u4EF6\u662F\u88AB\u6CE8\u518C\u5230\u5F53\u524D\u5143\u7D20\u7684\uFF0C\u548C React \u4E0D\u4E00\u6837\n            this.num++\n            // 1. event \u662F\u539F\u751F\u7684\n            // 2. \u4E8B\u4EF6\u88AB\u6302\u8F7D\u5230\u5F53\u524D\u5143\u7D20\n            // \u548C DOM \u4E8B\u4EF6\u4E00\u6837\n        },\n        increment2(val, event) {\n            // eslint-disable-next-line\n            console.log(event.target)\n            this.num = this.num + val\n        },\n        loadHandler() {\n            // do some thing\n        }\n    },\n    mounted() {\n        window.addEventListener('load', this.loadHandler)\n    },\n    beforeDestroy() {\n        //\u3010\u6CE8\u610F\u3011\u7528 vue \u7ED1\u5B9A\u7684\u4E8B\u4EF6\uFF0C\u7EC4\u5EFA\u9500\u6BC1\u65F6\u4F1A\u81EA\u52A8\u88AB\u89E3\u7ED1\n        // \u81EA\u5DF1\u7ED1\u5B9A\u7684\u4E8B\u4EF6\uFF0C\u9700\u8981\u81EA\u5DF1\u9500\u6BC1\uFF01\uFF01\uFF01\n        window.removeEventListener('load', this.loadHandler)\n    }\n}\n<\/script>\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4E8B\u4EF6\u4FEE\u9970\u7B26"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'\x3c!-- \u963B\u6B62\u5355\u51FB\u4E8B\u4EF6\u7EE7\u7EED\u4F20\u64AD --\x3e\n<a v-on:click.stop="doThis"></a>\n\x3c!-- \u63D0\u4EA4\u4E8B\u4EF6\u4E0D\u518D\u91CD\u8F7D\u9875\u9762 --\x3e\n<form v-on:submit.prevent="onSubmit"></form>\n\x3c!-- \u4FEE\u9970\u7B26\u53EF\u4EE5\u4E32\u8054 --\x3e\n<a v-on:click.stop.prevent="doThat"></a>\n\x3c!-- \u53EA\u6709\u4FEE\u9970\u7B26 --\x3e\n<form v-on:submit.prevent></form>\n\x3c!-- \u6DFB\u52A0\u4E8B\u4EF6\u76D1\u542C\u5668\u65F6\u4F7F\u7528\u4E8B\u4EF6\u6355\u83B7\u6A21\u5F0F --\x3e\n\x3c!-- \u5373\u5185\u90E8\u5143\u7D20\u89E6\u53D1\u7684\u4E8B\u4EF6\u5148\u5728\u6B64\u5904\u7406\uFF0C\u7136\u540E\u624D\u4EA4\u7531\u5185\u90E8\u5143\u7D20\u8FDB\u884C\u5904\u7406 --\x3e\n<div v-on:click.capture="doThis">...</div>\n\x3c!-- \u53EA\u5F53\u5728 event.target \u662F\u5F53\u524D\u5143\u7D20\u81EA\u8EAB\u65F6\u89E6\u53D1\u5904\u7406\u51FD\u6570 --\x3e\n\x3c!-- \u5373\u4E8B\u4EF6\u4E0D\u662F\u4ECE\u5185\u90E8\u5143\u7D20\u89E6\u53D1\u7684 --\x3e\n<div v-on:click.self="doThat">...</div>\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u6309\u952E\u4FEE\u9970\u7B26"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'\x3c!-- \u5373\u4F7F Alt \u6216 Shift \u88AB\u4E00\u540C\u6309\u4E0B\u65F6\u4E5F\u4F1A\u89E6\u53D1 --\x3e\n<button v-on:click.ctrl="onClick">A</button>\n\x3c!-- \u6709\u4E14\u53EA\u6709 Ctrl \u88AB\u6309\u4E0B\u7684\u65F6\u5019\u624D\u89E6\u53D1 --\x3e\n<button v-on:click.ctrl.exact="onCtrlClick">A</button>\n\x3c!-- \u6CA1\u6709\u4EFB\u4F55\u7CFB\u7EDF\u4FEE\u9970\u7B26\u88AB\u6309\u4E0B\u7684\u65F6\u5019\u624D\u89E6\u53D1 --\x3e\n<button v-on:click.exact="onClick">A</button>\n'})})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return i},a:function(){return l}});var o=t(67294);let r={},s=o.createContext(r);function l(n){let e=o.useContext(s);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);