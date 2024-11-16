"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["8388"],{48293:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>a,default:()=>p,assets:()=>l,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"js-ts/29217","title":"Map \u548C Set-\u6709\u5E8F\u548C\u65E0\u5E8F","description":"\u6709\u5E8F\u548C\u65E0\u5E8F\uFF0C\u5148\u770B\u4E2A\u4F8B\u5B50","source":"@site/issue/2.js-ts/29217.md","sourceDirName":"2.js-ts","slug":"/29217","permalink":"/issue/29217","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2022-01-19 16:32:14","slug":"/29217"},"sidebar":"tutorialSidebar","previous":{"title":"\u524D\u7AEF\u6027\u80FD\u5982\u4F55\u4F18\u5316\uFF1F\u4E00\u822C\u4ECE\u54EA\u51E0\u4E2A\u65B9\u9762\u8003\u8651\uFF1F","permalink":"/issue/26719"},"next":{"title":"WeakMap \u548C WeakSet","permalink":"/issue/29220"}}'),r=s("85893"),i=s("50065");let o={date:"2022-01-19 16:32:14",slug:"/29217"},a="Map \u548C Set-\u6709\u5E8F\u548C\u65E0\u5E8F",l={},c=[];function d(n){let e={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"map-\u548C-set-\u6709\u5E8F\u548C\u65E0\u5E8F",children:"Map \u548C Set-\u6709\u5E8F\u548C\u65E0\u5E8F"})}),"\n",(0,r.jsx)(e.p,{children:"\u6709\u5E8F\u548C\u65E0\u5E8F\uFF0C\u5148\u770B\u4E2A\u4F8B\u5B50"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:"<p class=\"container\" style=\"color: red\" id=\"p1\">\n    <img src=\"xxx\" alt=\"xxx.png\">\n    <span>123</span>\n</p>\n<script>\n  // vdom \u865A\u62DF dom - \u6A21\u62DF\u771F\u662F\u7684 dom \u7ED3\u6784\n  const p = {\n    tag: 'p',\n    props: { // \u65E0\u5E8F\n      id: 'p1',\n      className: 'container',\n      style: 'color:red'\n    },\n    children: [ // \u6709\u5E8F\n      {\n        tag: 'img',\n        props: {\n          alt: 'xxx',\n          src: 'xxx.png'\n        }\n      },\n      {\n        tag: 'span',\n        children: [123]\n      }\n    ]\n  }\n  // js \u4E2D Object \u662F\u65E0\u5E8F\u7684\uFF0CArray \u662F\u6709\u6548\u7684\n<\/script>\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u6709\u5E8F\uFF1A\u64CD\u4F5C\u6162"}),"\n",(0,r.jsx)(e.li,{children:"\u65E0\u5E8F\uFF1A\u64CD\u4F5C\u5FEB\uFF0C\u4F46\u65E0\u5E8F"}),"\n",(0,r.jsx)(e.li,{children:"\u5982\u4F55\u7ED3\u5408\u4E24\u8005\u4F18\u70B9\u5462\uFF1F - \u4E8C\u53C9\u6811\u3001\u53CA\u5176\u53D8\u79CD"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"Map \u548C Object \u7684\u533A\u522B"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"API \u4E0D\u540C\uFF0CMap \u53EF\u4EE5\u4EE5\u4EFB\u610F\u7C7B\u578B\u4E3A key"}),"\n",(0,r.jsx)(e.li,{children:"Map \u662F\u6709\u5E8F\u7ED3\u6784\uFF08\u91CD\u8981\uFF09"}),"\n",(0,r.jsx)(e.li,{children:"Map \u64CD\u4F5C\u540C\u6837\u5F88\u5FEB"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const obj1 = {\n  2: 'hello',\n  1: {x: 100},\n  3: 100,\n}\n\n// Object \u662F\u65E0\u5E8F\u7684\nconsole.log(Object.keys(obj1)) // ['1', '2', '3']\n\n// Object \u6709\u591A\u5FEB\uFF1F\nfor (let i = 0; i < 1000 * 10000; i++) {\n  obj1[i + ''] = i\n}\nconsole.time('obj find')\nobj1['2000000']\nconsole.timeEnd('obj find') // obj find: 0.0068359375 ms\n\n// Map Api: set,delete,has,forEach,size\nconst m = new Map([\n  ['key1', 'hello'],\n  ['key3', {x: 100}],\n  ['key2', 100],\n])\n\n// Map \u7684 key \u53EF\u4EE5\u4E3A\u4EFB\u610F\u7C7B\u578B\nconst obj2 = {name: 'xxx'}\nm.set(obj2, 'object key')\n\nfunction fn() {\n}\n\nm.set(fn, 'fn key')\n\n// \u6BD4\u5982 obj1 \u548C obj2 \u5173\u8054\uFF0C\u4F46\u662F\u6CA1\u6709\u5F15\u7528\u5173\u7CFB\uFF0C\u4FDD\u6301\u72EC\u7ACB\n// m.set(obj1, obj2)\n\n// Map \u662F\u6709\u5E8F\u7684\nm.forEach((value, key) => console.log(key, value)) // \u4FDD\u6301\u987A\u5E8F\u8F93\u51FA\n\n// Map \u6709\u591A\u5FEB\uFF1F\nfor (let i = 0; i < 1000 * 10000; i++) {\n  m.set(i + '', i)\n}\nconsole.time('map find')\nm.has('2000000')\nconsole.timeEnd('map find') // map find: 0.01416015625 ms\n"})}),"\n",(0,r.jsx)(e.p,{children:"Set \u548C Array \u7684\u533A\u522B"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"API \u4E0D\u540C"}),"\n",(0,r.jsx)(e.li,{children:"Set \u5143\u7D20\u4E0D\u80FD\u91CD\u590D"}),"\n",(0,r.jsx)(e.li,{children:"Set \u662F\u65E0\u5E8F\u7ED3\u6784\uFF0C\u64CD\u4F5C\u5F88\u5FEB"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const arr = [1, 2, 3, 4]\nconst set = new Set([1, 2, 2, 3, 4])\n\n// Map Api: add,delete,has,forEach,\nset.forEach(val => console.log(val))\n\n// Set \u5143\u7D20\u662F\u4E0D\u80FD\u91CD\u590D\u7684\uFF08\u6570\u7EC4\u53BB\u91CD\uFF09\nconsole.log(set) // Set(4){1, 2, 3, 4}\n\n// Set \u662F\u65E0\u5E8F\u7684\uFF08\u5FEB\uFF09\uFF0Carr \u662F\u6709\u5E8F\u7684\uFF08\u6162\uFF09\nfor (let i = 0; i < 100 * 10000; i++) {\n  arr.push(i)\n}\nconsole.time('arr unshift')\narr.unshift('a') // \u5BFC\u81F4\u6240\u6709\u5143\u7D20\u540E\u79FB\uFF0C\u6240\u4EE5\u6162\nconsole.timeEnd('arr unshift') // arr unshift: 0.25390625 ms\nconsole.time('arr push')\narr.push('b')\nconsole.timeEnd('arr push') // arr push: 0.005859375 ms\nconsole.time('arr find')\narr.includes('20000')\nconsole.timeEnd('arr find') // arr find: 0.89794921875 ms\n\nfor (let i = 0; i < 100 * 10000; i++) {\n  set.add(i)\n}\nconsole.time('set add')\nset.add('a')\nconsole.timeEnd('set add') // set add: 0.00390625 ms\nconsole.time('set find')\nset.has('20000')\nconsole.timeEnd('set find') // set find: 0.005859375 ms\n"})})]})}function p(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},50065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return o}});var t=s(67294);let r={},i=t.createContext(r);function o(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);