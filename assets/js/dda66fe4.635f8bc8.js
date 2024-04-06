"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1553],{2125:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=t(74848),l=t(28453);const s={date:"2020-11-05 16:12:13",slug:"/26752"},r="Vue \u5faa\u73af\uff08\u5217\u8868\uff09\u6e32\u67d3",o={id:"vuejs-use/26752",title:"Vue \u5faa\u73af\uff08\u5217\u8868\uff09\u6e32\u67d3",description:"\u5faa\u73af",source:"@site/docs/3.vuejs-use/26752.md",sourceDirName:"3.vuejs-use",slug:"/26752",permalink:"/docs/26752",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-11-05 16:12:13",slug:"/26752"},sidebar:"tutorialSidebar",previous:{title:"Vue \u6761\u4ef6\u6e32\u67d3",permalink:"/docs/26747"},next:{title:"Vue \u4e8b\u4ef6",permalink:"/docs/26756"}},d={},u=[];function c(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"vue-\u5faa\u73af\u5217\u8868\u6e32\u67d3",children:"Vue \u5faa\u73af\uff08\u5217\u8868\uff09\u6e32\u67d3"}),"\n",(0,i.jsx)(n.p,{children:"\u5faa\u73af"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5982\u4f55\u904d\u5386\u5bf9\u8c61\uff1f\u2014\u2014\u4e5f\u53ef\u4ee5\u7528 v-for"}),"\n",(0,i.jsx)(n.li,{children:"key \u7684\u91cd\u8981\u6027\u3002key \u4e0d\u80fd\u4e71\u5199\uff08\u5982 random \u6216\u8005 index\uff09"}),"\n",(0,i.jsx)(n.li,{children:"v-for \u548c v-if \u4e0d\u80fd\u4e00\u8d77\u4f7f\u7528"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<template>\n    <div>\n        <p>\u904d\u5386\u6570\u7ec4</p>\n        <ul>\n            <li v-for=\"(item, index) in listArr\" :key=\"item.id\">\n                {{index}} - {{item.id}} - {{item.title}}\n            </li>\n        </ul>\n        <p>\u904d\u5386\u5bf9\u8c61</p>\n        <ul >\n            \x3c!--\u62a5\u9519 v-for \u4f18\u5148\u7ea7\u66f4\u9ad8--\x3e\n            \x3c!--<li v-if=\"flag\" v-for=\"(val, key, index) in listObj\" :key=\"key\">--\x3e\n            <li v-for=\"(val, key, index) in listObj\" :key=\"key\">\n                {{index}} - {{key}} - {{val.title}}\n            </li>\n        </ul>\n    </div>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            flag: false,\n            listArr: [\n                { id: 'a', title: '\u6807\u98981' }, // \u6570\u636e\u7ed3\u6784\u4e2d\uff0c\u6700\u597d\u6709 id \uff0c\u65b9\u4fbf\u4f7f\u7528 key\n                { id: 'b', title: '\u6807\u98982' },\n                { id: 'c', title: '\u6807\u98983' }\n            ],\n            listObj: {\n                a: { title: '\u6807\u98981' },\n                b: { title: '\u6807\u98982' },\n                c: { title: '\u6807\u98983' },\n            }\n        }\n    }\n}\n<\/script>\n"})})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const l={},s=i.createContext(l);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);