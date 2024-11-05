"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["9219"],{84069:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>c,assets:()=>d,toc:()=>u,frontMatter:()=>s});var i=JSON.parse('{"id":"vuejs-use/26752","title":"Vue \u5FAA\u73AF\uFF08\u5217\u8868\uFF09\u6E32\u67D3","description":"\u5FAA\u73AF","source":"@site/docs/3.vuejs-use/26752.md","sourceDirName":"3.vuejs-use","slug":"/26752","permalink":"/docs/26752","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-11-05 16:12:13","slug":"/26752"},"sidebar":"tutorialSidebar","previous":{"title":"Vue \u6761\u4EF6\u6E32\u67D3","permalink":"/docs/26747"},"next":{"title":"Vue \u4E8B\u4EF6","permalink":"/docs/26756"}}'),l=t("85893"),r=t("50065");let s={date:"2020-11-05 16:12:13",slug:"/26752"},a="Vue \u5FAA\u73AF\uFF08\u5217\u8868\uFF09\u6E32\u67D3",d={},u=[];function o(e){let n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"vue-\u5FAA\u73AF\u5217\u8868\u6E32\u67D3",children:"Vue \u5FAA\u73AF\uFF08\u5217\u8868\uFF09\u6E32\u67D3"})}),"\n",(0,l.jsx)(n.p,{children:"\u5FAA\u73AF"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5982\u4F55\u904D\u5386\u5BF9\u8C61\uFF1F\u2014\u2014\u4E5F\u53EF\u4EE5\u7528 v-for"}),"\n",(0,l.jsx)(n.li,{children:"key \u7684\u91CD\u8981\u6027\u3002key \u4E0D\u80FD\u4E71\u5199\uFF08\u5982 random \u6216\u8005 index\uFF09"}),"\n",(0,l.jsx)(n.li,{children:"v-for \u548C v-if \u4E0D\u80FD\u4E00\u8D77\u4F7F\u7528"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"<template>\n    <div>\n        <p>\u904D\u5386\u6570\u7EC4</p>\n        <ul>\n            <li v-for=\"(item, index) in listArr\" :key=\"item.id\">\n                {{index}} - {{item.id}} - {{item.title}}\n            </li>\n        </ul>\n        <p>\u904D\u5386\u5BF9\u8C61</p>\n        <ul >\n            \x3c!--\u62A5\u9519 v-for \u4F18\u5148\u7EA7\u66F4\u9AD8--\x3e\n            \x3c!--<li v-if=\"flag\" v-for=\"(val, key, index) in listObj\" :key=\"key\">--\x3e\n            <li v-for=\"(val, key, index) in listObj\" :key=\"key\">\n                {{index}} - {{key}} - {{val.title}}\n            </li>\n        </ul>\n    </div>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            flag: false,\n            listArr: [\n                { id: 'a', title: '\u6807\u98981' }, // \u6570\u636E\u7ED3\u6784\u4E2D\uFF0C\u6700\u597D\u6709 id \uFF0C\u65B9\u4FBF\u4F7F\u7528 key\n                { id: 'b', title: '\u6807\u98982' },\n                { id: 'c', title: '\u6807\u98983' }\n            ],\n            listObj: {\n                a: { title: '\u6807\u98981' },\n                b: { title: '\u6807\u98982' },\n                c: { title: '\u6807\u98983' },\n            }\n        }\n    }\n}\n<\/script>\n"})})]})}function c(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var i=t(67294);let l={},r=i.createContext(l);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);