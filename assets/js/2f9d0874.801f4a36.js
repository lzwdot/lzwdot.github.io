"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4437],{79945:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=t(74848),c=t(28453);const s={date:"2022-01-21 14:52:07",slug:"/29242"},r="watch \u548c watchEffect \u7684\u533a\u522b",o={id:"vuejs-use/vuejs3-base/29242",title:"watch \u548c watchEffect \u7684\u533a\u522b",description:"watchEffect \u662f\u65b0\u7279\u6027",source:"@site/docs/3.vuejs-use/3.vuejs3-base/29242.md",sourceDirName:"3.vuejs-use/3.vuejs3-base",slug:"/29242",permalink:"/docs/29242",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-01-21 14:52:07",slug:"/29242"},sidebar:"tutorialSidebar",previous:{title:"v-model \u53c2\u6570\u7684\u7528\u6cd5",permalink:"/docs/29240"},next:{title:"setup \u4e2d\u5982\u4f55\u83b7\u53d6\u7ec4\u4ef6\u5b9e\u4f8b",permalink:"/docs/29244"}},l={},u=[];function i(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"watch-\u548c-watcheffect-\u7684\u533a\u522b",children:"watch \u548c watchEffect \u7684\u533a\u522b"})}),"\n",(0,a.jsx)(n.p,{children:"watchEffect \u662f\u65b0\u7279\u6027"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u4e24\u8005\u90fd\u53ef\u4ee5\u76d1\u542c data \u5c5e\u6027\u53d8\u5316"}),"\n",(0,a.jsx)(n.li,{children:"watch \u9700\u8981\u660e\u786e\u76d1\u542c\u54ea\u4e2a\u5c5e\u6027"}),"\n",(0,a.jsx)(n.li,{children:"watchEffect \u4f1a\u6839\u636e\u5176\u4e2d\u7684\u5c5e\u6027\uff0c\u81ea\u52a8\u76d1\u542c\u5176\u53d8\u5316"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u4f8b\u5b50"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:" <template>\n  <p>watch vs watchEffect {{ numberRef }} {{ name }} {{ age }}</p>\n</template>\n\n<script>\nimport {reactive, ref, toRefs, watch, watchEffect} from \"vue\";\n\nexport default {\n  name: \"Watch\",\n  setup() {\n    const numberRef = ref(100)\n    const state = reactive({\n      name: 'lzw.',\n      age: 20\n    })\n\n    // ==== watch =====\n    watch(numberRef, (newVal, oldVal) => {\n      console.log('ref watch', newVal, oldVal) // ref watch 100 undefined\n    }, {\n      // immediate: true,// \u521d\u59cb\u5316\u4e4b\u524d\u5c31\u76d1\u542c\uff0c\u53ef\u9009\n    })\n\n    watch(\n        // \u53c2\u6570\u4e00\uff0c\u8981\u76d1\u542c\u7684\u5c5e\u6027\n        () => state.age,\n\n        // \u53c2\u6570\u4e8c\uff0c\u56de\u8c03\u51fd\u6570\n        (newAge, oldAge) => {\n          console.log('state watch', newAge, oldAge) // state watch 25 20\n        },\n\n        // \u53c2\u6570\u4e09\uff0c\u914d\u7f6e\u9879\n        {\n          immediate: true, // \u521d\u59cb\u5316\u4e4b\u524d\u5c31\u76d1\u542c\uff0c\u53ef\u9009\n          deep: true // \u6df1\u5ea6\u76d1\u542c\n        }\n    )\n\n    // ==== watchEffect =====\n    watchEffect(() => {\n      // \u521d\u59cb\u5316\u65f6\uff0c\u4e00\u5b9a\u4f1a\u6267\u884c\u4e00\u6b21\uff08\u6536\u96c6\u8981\u76d1\u542c\u7684\u6570\u636e\uff09\n      console.log('hello watchEffect')\n      // \u81ea\u52a8\u76d1\u542c state.name\n      console.log('state.name', state.name) // state.name lzw.A\n    })\n\n\n    setTimeout(() => {\n      state.age = 25\n    }, 1000)\n    setTimeout(() => {\n      state.name = 'lzw.A'\n    }, 1000)\n\n    return {\n      numberRef,\n      ...toRefs(state)\n    }\n  }\n}\n<\/script>\n"})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(96540);const c={},s=a.createContext(c);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);