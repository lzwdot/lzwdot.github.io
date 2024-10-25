"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8076],{86440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>o});var s=t(74848),i=t(28453);const c={date:"2022-01-23 12:13:40",slug:"/29281"},l="Vue3 script setup \u7684\u4f7f\u7528",r={id:"vuejs-use/vuejs3-base/29281",title:"Vue3 script setup \u7684\u4f7f\u7528",description:"\u6ce8\u610f\uff1a\u9700\u8981 Vue 3.2 \u7248\u672c\u4ee5\u4e0a",source:"@site/docs/3.vuejs-use/3.vuejs3-base/29281.md",sourceDirName:"3.vuejs-use/3.vuejs3-base",slug:"/29281",permalink:"/docs/29281",draft:!1,unlisted:!1,editUrl:"/feedback",tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-01-23 12:13:40",slug:"/29281"},sidebar:"tutorialSidebar",previous:{title:"Vue3 \u548c JSX -slot \u7684\u4e00\u4e9b\u95ee\u9898",permalink:"/docs/29276"},next:{title:"React \u57fa\u7840",permalink:"/docs/react-use/"}},d={},o=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"\u5c5e\u6027\u548c\u4e8b\u4ef6",id:"\u5c5e\u6027\u548c\u4e8b\u4ef6",level:2},{value:"\u66b4\u9732\u7ec4\u4ef6\u4fe1\u606f defineExpose",id:"\u66b4\u9732\u7ec4\u4ef6\u4fe1\u606f-defineexpose",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"vue3-script-setup-\u7684\u4f7f\u7528",children:"Vue3 script setup \u7684\u4f7f\u7528"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a\u9700\u8981 ",(0,s.jsx)(n.code,{children:"Vue 3.2"})," \u7248\u672c\u4ee5\u4e0a"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Vue3 \u5f15\u5165\u4e86 composition API"}),"\n",(0,s.jsx)(n.li,{children:"composition API \u6700\u91cd\u8981\u7684\u662f setup \u51fd\u6570"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"<script>"})," \u53ea\u6709\u4e00\u4e2a setup \u51fd\u6570\u592a\u201c\u5b64\u5355\u201d\uff0c\u5982\u4f55\u7b80\u5316\u4e00\u4e0b\uff1f"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u9876\u7ea7\u53d8\u91cf\u3001\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u76f4\u63a5\u7528\u4e8e\u6a21\u677f"}),"\n",(0,s.jsx)(n.li,{children:"\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528 ref reactive computed \u7b49\u80fd\u529b"}),"\n",(0,s.jsxs)(n.li,{children:["\u548c\u5176\u4ed6 ",(0,s.jsx)(n.code,{children:"<script>"})," \u540c\u65f6\u4f7f\u7528"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5b50\uff0c\u5b9a\u4e49\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"Child.vue"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<template>\n  <p>child</p>\n</template>\n\n<script>\nexport default {\n  name: "Child"\n}\n<\/script>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540e\u5728 ",(0,s.jsx)(n.code,{children:"Index.vue"})," \u4e2d\u4f7f\u7528"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<script>\nfunction add(a, b) {\n  return a + b\n}\n<\/script>\n\n<script setup>\nimport {reactive, ref, toRefs} from \"vue\";\nimport Child from './Child'\n\nconst countRef = ref(100)\n\n// \u76f4\u63a5\u4f7f\u7528\uff0c\u4e0d\u9700\u8981 return\nfunction addCount() {\n  countRef.value++\n}\n\nconst state = reactive({\n  name: 'lzw.'\n})\n// \u76f4\u63a5\u4f7f\u7528\uff0c\u4e0d\u9700\u8981 return\nconst {name} = toRefs(state)\n\n// \u76f4\u63a5\u4f7f\u7528\u5176\u4ed6 script \u51fd\u6570\nconst addVal = add(1, 2)\n<\/script>\n\n<template>\n  <p @click=\"addCount\">vue3.2+ script setup {{ countRef }} {{ name }} {{ addVal }}</p>\n  \x3c!--  \u76f4\u63a5\u5f15\u5165\u4f7f\u7528\uff0c\u4e0d\u9700\u8981\u6ce8\u518c\u4e86--\x3e\n  <Child></Child>\n</template>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5c5e\u6027\u548c\u4e8b\u4ef6",children:"\u5c5e\u6027\u548c\u4e8b\u4ef6"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"defineProps"}),"\n",(0,s.jsx)(n.li,{children:"defineEmits"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd8\u662f\u5b9a\u4e49\u4e00\u4e2a\u5b50\u7ec4\u4ef6 ",(0,s.jsx)(n.code,{children:"Child.vue"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<script setup>\nimport {defineProps, defineEmits} from \"vue\";\n\n// \u5b9a\u4e49\u5c5e\u6027\nconst props = defineProps({\n  name: String,\n  age: Number\n})\n\n// \u5b9a\u4e49\u4e8b\u4ef6\nconst emits = defineEmits(['change', 'delete'])\n\nfunction deleteHandler() {\n  emits('delete', '\u5220\u9664')\n}\n<\/script>\n\n<template>\n  <p>child - {{ props.name }} {{ props.age }}</p>\n  <button @click=\"$emit('change','\u4fee\u6539')\"> change</button>\n  <button @click=\"deleteHandler\"> delete</button>\n</template>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540e\u5728 ",(0,s.jsx)(n.code,{children:"Index.vue"})," \u4e2d\u4f7f\u7528"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script setup>\nimport Child from \'./Child\'\n\nfunction onChange(info) {\n  console.log(\'on change\', info)\n}\n\nfunction onDelete(info) {\n  console.log(\'on delete\', info)\n}\n<\/script>\n\n<template> \n  \x3c!--  \u76f4\u63a5\u5f15\u5165\u4f7f\u7528\uff0c\u4e0d\u9700\u8981\u6ce8\u518c\u4e86--\x3e\n  <Child name="name" age="20" @change="onChange" @delete="onDelete"></Child>\n</template>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u66b4\u9732\u7ec4\u4ef6\u4fe1\u606f-defineexpose",children:"\u66b4\u9732\u7ec4\u4ef6\u4fe1\u606f defineExpose"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd8\u662f\u5b9a\u4e49\u4e00\u4e2a\u5b50\u7ec4\u4ef6 ",(0,s.jsx)(n.code,{children:"Child.vue"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script setup>\nimport {ref, defineExpose} from "vue";\nconst a = ref(100)\nconst b = 200\ndefineExpose({\n  a,\n  b\n})\n<\/script>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540e\u5728 ",(0,s.jsx)(n.code,{children:"Index.vue"})," \u4e2d\u4f7f\u7528"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script setup>\nimport {onMounted} from "vue";\nimport Child from \'./Child\'\n\nconst childRef = ref(null)\nonMounted(() => {\n  // \u62ff\u5230 child \u7ec4\u4ef6\u7684\u4e00\u4e9b\u6570\u636e\n  console.log(childRef.value.a)\n  console.log(childRef.value.b)\n})\n<\/script>\n\n<template> \n  \x3c!--  \u76f4\u63a5\u5f15\u5165\u4f7f\u7528\uff0c\u4e0d\u9700\u8981\u6ce8\u518c\u4e86--\x3e\n  <Child ref="childRef"></Child>\n</template>\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var s=t(96540);const i={},c=s.createContext(i);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);