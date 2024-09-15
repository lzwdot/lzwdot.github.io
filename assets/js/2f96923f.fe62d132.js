"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3128],{1603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(74848),a=t(28453);const r={date:"2022-01-21 14:05:44",slug:"/29240"},o="v-model \u53c2\u6570\u7684\u7528\u6cd5",c={id:"vuejs-use/vuejs3-base/29240",title:"v-model \u53c2\u6570\u7684\u7528\u6cd5",description:"\u4f5c\u7528\uff1a\u5b9e\u73b0\u4f20\u9012\u6570\u636e\u5230\u5b50\u7ec4\u4ef6\uff0c\u4fee\u6539\u5b50\u7ec4\u4ef6\u6570\u636e\u540c\u6b65\u5230\u7236\u7ec4\u4ef6",source:"@site/docs/3.vuejs-use/3.vuejs3-base/29240.md",sourceDirName:"3.vuejs-use/3.vuejs3-base",slug:"/29240",permalink:"/docs/29240",draft:!1,unlisted:!1,editUrl:"/feedback",tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-01-21 14:05:44",slug:"/29240"},sidebar:"tutorialSidebar",previous:{title:"Composition API \u5982\u4f55\u5b9e\u73b0\u903b\u8f91\u590d\u7528",permalink:"/docs/29238"},next:{title:"watch \u548c watchEffect \u7684\u533a\u522b",permalink:"/docs/29242"}},i={},l=[];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"v-model-\u53c2\u6570\u7684\u7528\u6cd5",children:"v-model \u53c2\u6570\u7684\u7528\u6cd5"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f5c\u7528\uff1a\u5b9e\u73b0\u4f20\u9012\u6570\u636e\u5230\u5b50\u7ec4\u4ef6\uff0c\u4fee\u6539\u5b50\u7ec4\u4ef6\u6570\u636e\u540c\u6b65\u5230\u7236\u7ec4\u4ef6"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["vue2 \u79fb\u9664 .sync \u7528\u6cd5\nvue3 \u53c2\u8003\uff1a",(0,s.jsx)(n.a,{href:"https://v3.cn.vuejs.org/guide/migration/v-model.html#v-model-%E5%8F%82%E6%95%B0",children:"https://v3.cn.vuejs.org/guide/migration/v-model.html#v-model-%E5%8F%82%E6%95%B0"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5217\u5b50\uff0c",(0,s.jsx)(n.code,{children:"Child.vue"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<template>\n  <input :value="name" @input="$emit(\'update:name\',$event.target.value)">\n  <input :value="age" @input="$emit(\'update:age\',$event.target.value)">\n</template>\n\n<script>\nexport default {\n  name: "Child",\n  props: {\n    name: String,\n    age: String\n  }\n}\n<\/script>\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7236\u7ec4\u4ef6\u4e2d\u4f7f\u7528"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<template>\n  <p>{{ name }}{{ age }}</p>\n  <child\n      v-model:name="name"\n      v-model:age="age"\n  ></child>\n</template>\n\n<script>\nimport Child from "@/components/Child";\nimport {reactive, toRefs} from "vue";\n\nexport default {\n  name: \'App\',\n  components: {\n    Child    \n  },\n  setup() {\n    const state = reactive({\n      name: \'lzw.\',\n      age: \'20\'\n    })\n\n    return toRefs(state)\n  }\n}\n<\/script>\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);