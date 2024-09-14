"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5390],{31708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>i,frontMatter:()=>r,metadata:()=>u,toc:()=>a});var o=t(74848),s=t(28453);const r={date:"2020-11-11 10:45:00",slug:"/26879"},d="Vue \u81ea\u5b9a\u4e49 v-model\uff08\u9ad8\u7ea7\uff09",u={id:"vuejs-use/26879",title:"Vue \u81ea\u5b9a\u4e49 v-model\uff08\u9ad8\u7ea7\uff09",description:"\u6a21\u62df v-model \u7c7b\u4f3c `` \u7684\u5e94\u7528\uff0c\u4f46\u5bf9\u4e8e vuejs \u4e2d\u7684 model \u4f9d\u7136\u6709\u70b9\u4e91\u91cc\u96fe\u91cc\uff0c\u5148\u8bb0\u5f55\u4e0b\u6765\uff0c\u9996\u5148\u521b\u5efa CustomVModel.vue",source:"@site/docs/3.vuejs-use/26879.md",sourceDirName:"3.vuejs-use",slug:"/26879",permalink:"/docs/26879",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-11-11 10:45:00",slug:"/26879"},sidebar:"tutorialSidebar",previous:{title:"Vue \u7ec4\u4ef6\u751f\u547d\u5468\u671f",permalink:"/docs/26831"},next:{title:"Vue \u7ec4\u4ef6\u66f4\u65b0\u4e4b\u540e\u83b7\u53d6\u6700\u65b0DOM\uff08\u9ad8\u7ea7\uff09",permalink:"/docs/26888"}},l={},a=[];function c(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"vue-\u81ea\u5b9a\u4e49-v-model\u9ad8\u7ea7",children:"Vue \u81ea\u5b9a\u4e49 v-model\uff08\u9ad8\u7ea7\uff09"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6a21\u62df v-model \u7c7b\u4f3c ",(0,o.jsx)(n.code,{children:'<input type="text" v-model="name">'})," \u7684\u5e94\u7528\uff0c\u4f46\u5bf9\u4e8e vuejs \u4e2d\u7684 model \u4f9d\u7136\u6709\u70b9\u4e91\u91cc\u96fe\u91cc\uff0c\u5148\u8bb0\u5f55\u4e0b\u6765\uff0c\u9996\u5148\u521b\u5efa CustomVModel.vue"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"<template>\n    \x3c!--\u5e38\u7528\u7684\u5982\uff1avue \u989c\u8272\u9009\u62e9--\x3e\n    <input type=\"text\"\n           :value=\"str\"\n           @input=\"$emit('edit',$event.target.value)\"\n    >\n    \x3c!--\n        1\u3001\u4e0a\u9762\u7684 input \u4f7f\u7528\u4e86 :value \u800c\u4e0d\u662f v-model\n        2\u3001\u4e0a\u9762\u7684 edit \u548c model.event \u8981\u5bf9\u5e94\u8d77\u6765\n        3\u3001str \u5c5e\u6027\u5bf9\u5e94\u8d77\u6765\n    --\x3e\n</template>\n<script>\n    export default {\n        name: \"CustomVModel\",\n        props: {\n            str: String,\n            default() {\n                return ''\n            }\n        },\n        model: {\n            prop: 'str', // \u5bf9\u5e94 props str\n            event: 'edit'\n        }\n    }\n<\/script> \n"})}),"\n",(0,o.jsx)(n.p,{children:"\u6ce8\u610f\u4ee3\u7801\u4e2d\u7684\u89e3\u91ca\uff0c\u5728 Index.vue \u4e2d\u5f15\u5165 CustomVModel.vue"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'<template>\n    <div>\n        <p>\u9ad8\u7ea7</p>\n        <hr>\n        <p>{{name}}</p>\n        \x3c!--\u81ea\u5b9a\u4e49 v-model--\x3e\n        \x3c!--\u7c7b\u4f3c <input type="text" v-model="name">--\x3e\n        <CustomVModel v-model="name" />\n    </div>\n</template>\n<script>\n    import CustomVModel from \'./CustomVModel\'\n    export default {\n        name: "index",\n        components: {\n            CustomVModel,\n        },\n        data() {\n            return {\n                name: \'\u6155\u8bfe\'\n            }\n        }\n    }\n<\/script>\n'})})]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>u});var o=t(96540);const s={},r=o.createContext(s);function d(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);