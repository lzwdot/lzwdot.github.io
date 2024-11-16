"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["1926"],{5278:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>c,default:()=>u,assets:()=>l,toc:()=>i,frontMatter:()=>o});var a=JSON.parse('{"id":"js-ts/29220","title":"WeakMap \u548C WeakSet","description":"\u4E24\u8005\u7684\u7279\u70B9","source":"@site/issue/2.js-ts/29220.md","sourceDirName":"2.js-ts","slug":"/29220","permalink":"/issue/29220","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2022-01-20 09:44:55","slug":"/29220"},"sidebar":"tutorialSidebar","previous":{"title":"Map \u548C Set-\u6709\u5E8F\u548C\u65E0\u5E8F","permalink":"/issue/29217"},"next":{"title":"\u6570\u7EC4\u6C42\u548C -Array reduce","permalink":"/issue/29222"}}'),s=t("85893"),r=t("50065");let o={date:"2022-01-20 09:44:55",slug:"/29220"},c="WeakMap \u548C WeakSet",l={},i=[];function d(e){let n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"weakmap-\u548C-weakset",children:"WeakMap \u548C WeakSet"})}),"\n",(0,s.jsx)(n.p,{children:"\u4E24\u8005\u7684\u7279\u70B9"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5F31\u5F15\u7528\uFF0C\u9632\u6B62\u5185\u5B58\u6CC4\u9732"}),"\n",(0,s.jsx)(n.li,{children:"WeakMap \u53EA\u80FD\u7528\u5BF9\u8C61\u4F5C\u4E3A key\uFF0CWeakSet \u53EA\u80FD\u7528\u5BF9\u8C61\u505A value"}),"\n",(0,s.jsx)(n.li,{children:"\u6CA1\u6709 forEach \u548C size\uFF0C\u53EA\u80FD\u7528 set/add delete has"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"WeakMap \u7528\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// WeakMap \u5F31\u5F15\u7528\uFF0C\u6CA1\u6709 forEach \u548C size\uFF0C\u53EA\u80FD\u7528 set delete has\nconst wMap = new WeakMap\n\nconst a = {}\n\nfunction fn() {\n  const obj = {name: 'lzw'}\n  a.obj = obj // \u5F3A\u5F15\u7528\n  wMap.set(obj, 'name info') // \u53EA\u80FD\u7528\u5BF9\u8C61\u4F5C\u4E3A key\n}\n\nfn()\nconsole.log(a)  // obj: {name: 'lzw'}\n// \u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u8F93\u5165\uFF1AwMap\uFF0C\u7ED3\u679C\uFF1AWeakMap{}\n// \u7ED3\u679C\u6709\u53EF\u80FD\u4E0D\u4E3A\u7A7A\uFF0C\u8FD9\u662F\u56E0\u4E3A gc \u5783\u573E\u6E05\u7406\u4E0D\u4E00\u5B9A\u662F\u53CA\u65F6\u7684\n// \u53EF\u4EE5\u5728\u5F00\u53D1\u8005\u5DE5\u5177->\u5185\u5B58-> \u5783\u573E\u6876\u56FE\u6807\uFF0C\u70B9\u51FB\u6E05\u7406\u5185\u5B58\u5783\u573E\n\n// \u573A\u666F\u4F7F\u7528\uFF0C\nconst userInfo = {name: 'lzw.'}\nconst cityInfo = {city: '\u957F\u6C99'}\n// userInfo.city = cityInfo\nwMap.set(userInfo, cityInfo) // \u5EFA\u7ACB\u5173\u7CFB\uFF0C\u4F46\u4E24\u8005\u786E\u72EC\u7ACB\u7684\uFF0C\u800C\u4E14\u4E0D\u5F71\u54CD\u5F7C\u6B64\u7684\u9500\u6BC1\u903B\u8F91\nconsole.log(wMap.get(userInfo))\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"WeakSet \u7528\u6CD5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// WeakSet \u5F31\u5F15\u7528\uFF0C\u9632\u6B62\u5185\u5B58\u6CC4\u9732\uFF0C\u53EA\u80FD\u7528\u5BF9\u8C61\u4F5C\u4E3A value\n// \u6CA1\u6709 forEach \u548C size\uFF0C\u53EA\u80FD\u7528 add delete has\nconst wSet = new WeakSet()\nconst set = new Set()\n\nfunction fn() {\n  const obj = {name: 'lzw.'}\n  // set.add(obj)\n  wSet.add(obj)\n}\n\nfn()\n\n// \u6D4F\u89C8\u5668\u63A7\u5236\u53F0\u8F93\u5165\uFF1AwSet\uFF0C\u7ED3\u679C\uFF1AWeakSet{}\n// \u7ED3\u679C\u6709\u53EF\u80FD\u4E0D\u4E3A\u7A7A\uFF0C\u8FD9\u662F\u56E0\u4E3A gc \u5783\u573E\u6E05\u7406\u4E0D\u4E00\u5B9A\u662F\u53CA\u65F6\u7684\n// \u53EF\u4EE5\u5728\u5F00\u53D1\u8005\u5DE5\u5177->\u5185\u5B58-> \u5783\u573E\u6876\u56FE\u6807\uFF0C\u70B9\u51FB\u6E05\u7406\u5185\u5B58\u5783\u573E\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var a=t(67294);let s={},r=a.createContext(s);function o(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);