"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[227],{40888:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var s=t(74848),r=t(28453);const a={date:"2020-11-05 15:27:15",slug:"/26733"},c="Vue \u4e2d\u6307\u4ee4\u3001\u63d2\u503c",u={id:"vuejs-use/26733",title:"Vue \u4e2d\u6307\u4ee4\u3001\u63d2\u503c",description:"\u57fa\u7840",source:"@site/docs/3.vuejs-use/26733.md",sourceDirName:"3.vuejs-use",slug:"/26733",permalink:"/docs/26733",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-11-05 15:27:15",slug:"/26733"},sidebar:"tutorialSidebar",previous:{title:"Vue \u57fa\u7840",permalink:"/docs/vuejs-use/"},next:{title:"Vue \u7684 computed \u548c watch",permalink:"/docs/26735"}},i={},l=[];function o(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"vue-\u4e2d\u6307\u4ee4\u63d2\u503c",children:"Vue \u4e2d\u6307\u4ee4\u3001\u63d2\u503c"}),"\n",(0,s.jsx)(n.p,{children:"\u57fa\u7840"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u63d2\u503c\uff0c\u8868\u8fbe\u5f0f"}),"\n",(0,s.jsx)(n.li,{children:"\u6307\u4ee4\uff0c\u52a8\u6001\u5c5e\u6027"}),"\n",(0,s.jsx)(n.li,{children:"v-html\uff1a\u4f1a\u6709 XSS \u98ce\u9669\uff0c\u4f1a\u8986\u76d6\u5b50\u7ec4\u4ef6"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee3\u7801\u6f14\u793a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"<template>\n    <div>\n        <p>\u6587\u672c\u63d2\u503c {{message}}</p>\n        <p>JS \u8868\u8fbe\u5f0f {{ flag ? 'yes' : 'no' }} \uff08\u53ea\u80fd\u662f\u8868\u8fbe\u5f0f\uff0c\u4e0d\u80fd\u662f js \u8bed\u53e5\uff09</p>\n        <p :id=\"dynamicId\">\u52a8\u6001\u5c5e\u6027 id</p>\n        <hr/>\n        <p v-html=\"rawHtml\">\n            <span>\u6709 xss \u98ce\u9669</span>\n            <span>\u3010\u6ce8\u610f\u3011\u4f7f\u7528 v-html \u4e4b\u540e\uff0c\u5c06\u4f1a\u8986\u76d6\u5b50\u5143\u7d20</span>\n        </p>\n        \x3c!-- \u5176\u4ed6\u5e38\u7528\u6307\u4ee4\u540e\u9762\u8bb2 --\x3e\n    </div>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            message: 'hello vue',\n            flag: true,\n            rawHtml: '\u6307\u4ee4 - \u539f\u59cb html <b>\u52a0\u7c97</b> <i>\u659c\u4f53</i>',\n            dynamicId: `id-${Date.now()}`\n        }\n    }\n}\n<\/script>\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>u});var s=t(96540);const r={},a=s.createContext(r);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);