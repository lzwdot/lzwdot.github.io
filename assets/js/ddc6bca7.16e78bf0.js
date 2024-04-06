"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8945],{89353:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=t(74848),l=t(28453);const a={date:"2020-11-05 17:04:49",slug:"/26763"},c="Vue \u8868\u5355",i={id:"vuejs-use/26763",title:"Vue \u8868\u5355",description:"\u8868\u5355",source:"@site/docs/3.vuejs-use/26763.md",sourceDirName:"3.vuejs-use",slug:"/26763",permalink:"/docs/26763",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-11-05 17:04:49",slug:"/26763"},sidebar:"tutorialSidebar",previous:{title:"Vue \u4e8b\u4ef6",permalink:"/docs/26756"},next:{title:"Vue \u7ec4\u4ef6\u4e4b\u95f4\u5982\u4f55\u901a\u8baf",permalink:"/docs/26811"}},s={},d=[];function r(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"vue-\u8868\u5355",children:"Vue \u8868\u5355"}),"\n",(0,o.jsx)(n.p,{children:"\u8868\u5355"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"v-model"}),"\n",(0,o.jsx)(n.li,{children:"\u5e38\u89c1\u8868\u5355\u9879 textarea checkbox radio select"}),"\n",(0,o.jsx)(n.li,{children:"\u4fee\u9970\u7b26 lazy number trim"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'<template>\n    <div>\n        <p>\u8f93\u5165\u6846: {{name}}</p>\n        <input type="text" v-model.trim="name"/>\n        <input type="text" v-model.lazy="name"/>\n        <input type="text" v-model.number="age"/>\n        <p>\u591a\u884c\u6587\u672c: {{desc}}</p>\n        <textarea v-model="desc"></textarea>\n        \x3c!-- \u6ce8\u610f\uff0c<textarea>{{desc}}</textarea> \u662f\u4e0d\u5141\u8bb8\u7684\uff01\uff01\uff01 --\x3e\n        <p>\u590d\u9009\u6846 {{checked}}</p>\n        <input type="checkbox" v-model="checked"/>\n        <p>\u591a\u4e2a\u590d\u9009\u6846 {{checkedNames}}</p>\n        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">\n        <label for="jack">Jack</label>\n        <input type="checkbox" id="john" value="John" v-model="checkedNames">\n        <label for="john">John</label>\n        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">\n        <label for="mike">Mike</label>\n        <p>\u5355\u9009 {{gender}}</p>\n        <input type="radio" id="male" value="male" v-model="gender"/>\n        <label for="male">\u7537</label>\n        <input type="radio" id="female" value="female" v-model="gender"/>\n        <label for="female">\u5973</label>\n        <p>\u4e0b\u62c9\u5217\u8868\u9009\u62e9 {{selected}}</p>\n        <select v-model="selected">\n            <option disabled value="">\u8bf7\u9009\u62e9</option>\n            <option>A</option>\n            <option>B</option>\n            <option>C</option>\n        </select>\n        <p>\u4e0b\u62c9\u5217\u8868\u9009\u62e9\uff08\u591a\u9009\uff09 {{selectedList}}</p>\n        <select v-model="selectedList" multiple>\n            <option disabled value="">\u8bf7\u9009\u62e9</option>\n            <option>A</option>\n            <option>B</option>\n            <option>C</option>\n        </select>\n    </div>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            name: \'\u53cc\u8d8a\',\n            age: 18,\n            desc: \'\u81ea\u6211\u4ecb\u7ecd\',\n            checked: true,\n            checkedNames: [],\n            gender: \'male\',\n            selected: \'\',\n            selectedList: []\n        }\n    }\n}\n<\/script>\n'})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var o=t(96540);const l={},a=o.createContext(l);function c(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);