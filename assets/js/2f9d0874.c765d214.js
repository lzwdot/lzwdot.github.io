"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["2772"],{25061:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>l,default:()=>d,assets:()=>o,toc:()=>u,frontMatter:()=>r});var a=JSON.parse('{"id":"vuejs-use/vuejs3-base/29242","title":"watch \u548C watchEffect \u7684\u533A\u522B","description":"watchEffect \u662F\u65B0\u7279\u6027","source":"@site/docs/3.vuejs-use/3.vuejs3-base/29242.md","sourceDirName":"3.vuejs-use/3.vuejs3-base","slug":"/29242","permalink":"/docs/29242","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2022-01-21 14:52:07","slug":"/29242"},"sidebar":"tutorialSidebar","previous":{"title":"v-model \u53C2\u6570\u7684\u7528\u6CD5","permalink":"/docs/29240"},"next":{"title":"setup \u4E2D\u5982\u4F55\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B","permalink":"/docs/29244"}}'),c=n("85893"),s=n("50065");let r={date:"2022-01-21 14:52:07",slug:"/29242"},l="watch \u548C watchEffect \u7684\u533A\u522B",o={},u=[];function i(e){let t={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.header,{children:(0,c.jsx)(t.h1,{id:"watch-\u548C-watcheffect-\u7684\u533A\u522B",children:"watch \u548C watchEffect \u7684\u533A\u522B"})}),"\n",(0,c.jsx)(t.p,{children:"watchEffect \u662F\u65B0\u7279\u6027"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:"\u4E24\u8005\u90FD\u53EF\u4EE5\u76D1\u542C data \u5C5E\u6027\u53D8\u5316"}),"\n",(0,c.jsx)(t.li,{children:"watch \u9700\u8981\u660E\u786E\u76D1\u542C\u54EA\u4E2A\u5C5E\u6027"}),"\n",(0,c.jsx)(t.li,{children:"watchEffect \u4F1A\u6839\u636E\u5176\u4E2D\u7684\u5C5E\u6027\uFF0C\u81EA\u52A8\u76D1\u542C\u5176\u53D8\u5316"}),"\n"]}),"\n",(0,c.jsx)(t.p,{children:"\u4F8B\u5B50"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-js",children:" <template>\n  <p>watch vs watchEffect {{ numberRef }} {{ name }} {{ age }}</p>\n</template>\n\n<script>\nimport {reactive, ref, toRefs, watch, watchEffect} from \"vue\";\n\nexport default {\n  name: \"Watch\",\n  setup() {\n    const numberRef = ref(100)\n    const state = reactive({\n      name: 'lzw.',\n      age: 20\n    })\n\n    // ==== watch =====\n    watch(numberRef, (newVal, oldVal) => {\n      console.log('ref watch', newVal, oldVal) // ref watch 100 undefined\n    }, {\n      // immediate: true,// \u521D\u59CB\u5316\u4E4B\u524D\u5C31\u76D1\u542C\uFF0C\u53EF\u9009\n    })\n\n    watch(\n        // \u53C2\u6570\u4E00\uFF0C\u8981\u76D1\u542C\u7684\u5C5E\u6027\n        () => state.age,\n\n        // \u53C2\u6570\u4E8C\uFF0C\u56DE\u8C03\u51FD\u6570\n        (newAge, oldAge) => {\n          console.log('state watch', newAge, oldAge) // state watch 25 20\n        },\n\n        // \u53C2\u6570\u4E09\uFF0C\u914D\u7F6E\u9879\n        {\n          immediate: true, // \u521D\u59CB\u5316\u4E4B\u524D\u5C31\u76D1\u542C\uFF0C\u53EF\u9009\n          deep: true // \u6DF1\u5EA6\u76D1\u542C\n        }\n    )\n\n    // ==== watchEffect =====\n    watchEffect(() => {\n      // \u521D\u59CB\u5316\u65F6\uFF0C\u4E00\u5B9A\u4F1A\u6267\u884C\u4E00\u6B21\uFF08\u6536\u96C6\u8981\u76D1\u542C\u7684\u6570\u636E\uFF09\n      console.log('hello watchEffect')\n      // \u81EA\u52A8\u76D1\u542C state.name\n      console.log('state.name', state.name) // state.name lzw.A\n    })\n\n\n    setTimeout(() => {\n      state.age = 25\n    }, 1000)\n    setTimeout(() => {\n      state.name = 'lzw.A'\n    }, 1000)\n\n    return {\n      numberRef,\n      ...toRefs(state)\n    }\n  }\n}\n<\/script>\n"})})]})}function d(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return r}});var a=n(67294);let c={},s=a.createContext(c);function r(e){let t=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);