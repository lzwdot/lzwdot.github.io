"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6126],{25787:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(74848),i=s(28453);const r={date:"2022-01-19 16:32:14",slug:"/29217"},o="Map \u548c Set-\u6709\u5e8f\u548c\u65e0\u5e8f",a={id:"js-ts/29217",title:"Map \u548c Set-\u6709\u5e8f\u548c\u65e0\u5e8f",description:"\u6709\u5e8f\u548c\u65e0\u5e8f\uff0c\u5148\u770b\u4e2a\u4f8b\u5b50",source:"@site/issue/2.js-ts/29217.md",sourceDirName:"2.js-ts",slug:"/29217",permalink:"/issue/29217",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-01-19 16:32:14",slug:"/29217"},sidebar:"tutorialSidebar",previous:{title:"\u524d\u7aef\u6027\u80fd\u5982\u4f55\u4f18\u5316\uff1f\u4e00\u822c\u4ece\u54ea\u51e0\u4e2a\u65b9\u9762\u8003\u8651\uff1f",permalink:"/issue/26719"},next:{title:"WeakMap \u548c WeakSet",permalink:"/issue/29220"}},l={},c=[];function d(n){const e={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"map-\u548c-set-\u6709\u5e8f\u548c\u65e0\u5e8f",children:"Map \u548c Set-\u6709\u5e8f\u548c\u65e0\u5e8f"})}),"\n",(0,t.jsx)(e.p,{children:"\u6709\u5e8f\u548c\u65e0\u5e8f\uff0c\u5148\u770b\u4e2a\u4f8b\u5b50"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:"<p class=\"container\" style=\"color: red\" id=\"p1\">\n    <img src=\"xxx\" alt=\"xxx.png\">\n    <span>123</span>\n</p>\n<script>\n  // vdom \u865a\u62df dom - \u6a21\u62df\u771f\u662f\u7684 dom \u7ed3\u6784\n  const p = {\n    tag: 'p',\n    props: { // \u65e0\u5e8f\n      id: 'p1',\n      className: 'container',\n      style: 'color:red'\n    },\n    children: [ // \u6709\u5e8f\n      {\n        tag: 'img',\n        props: {\n          alt: 'xxx',\n          src: 'xxx.png'\n        }\n      },\n      {\n        tag: 'span',\n        children: [123]\n      }\n    ]\n  }\n  // js \u4e2d Object \u662f\u65e0\u5e8f\u7684\uff0cArray \u662f\u6709\u6548\u7684\n<\/script>\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6709\u5e8f\uff1a\u64cd\u4f5c\u6162"}),"\n",(0,t.jsx)(e.li,{children:"\u65e0\u5e8f\uff1a\u64cd\u4f5c\u5feb\uff0c\u4f46\u65e0\u5e8f"}),"\n",(0,t.jsx)(e.li,{children:"\u5982\u4f55\u7ed3\u5408\u4e24\u8005\u4f18\u70b9\u5462\uff1f - \u4e8c\u53c9\u6811\u3001\u53ca\u5176\u53d8\u79cd"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Map \u548c Object \u7684\u533a\u522b"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"API \u4e0d\u540c\uff0cMap \u53ef\u4ee5\u4ee5\u4efb\u610f\u7c7b\u578b\u4e3a key"}),"\n",(0,t.jsx)(e.li,{children:"Map \u662f\u6709\u5e8f\u7ed3\u6784\uff08\u91cd\u8981\uff09"}),"\n",(0,t.jsx)(e.li,{children:"Map \u64cd\u4f5c\u540c\u6837\u5f88\u5feb"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"const obj1 = {\n  2: 'hello',\n  1: {x: 100},\n  3: 100,\n}\n\n// Object \u662f\u65e0\u5e8f\u7684\nconsole.log(Object.keys(obj1)) // ['1', '2', '3']\n\n// Object \u6709\u591a\u5feb\uff1f\nfor (let i = 0; i < 1000 * 10000; i++) {\n  obj1[i + ''] = i\n}\nconsole.time('obj find')\nobj1['2000000']\nconsole.timeEnd('obj find') // obj find: 0.0068359375 ms\n\n// Map Api: set,delete,has,forEach,size\nconst m = new Map([\n  ['key1', 'hello'],\n  ['key3', {x: 100}],\n  ['key2', 100],\n])\n\n// Map \u7684 key \u53ef\u4ee5\u4e3a\u4efb\u610f\u7c7b\u578b\nconst obj2 = {name: 'xxx'}\nm.set(obj2, 'object key')\n\nfunction fn() {\n}\n\nm.set(fn, 'fn key')\n\n// \u6bd4\u5982 obj1 \u548c obj2 \u5173\u8054\uff0c\u4f46\u662f\u6ca1\u6709\u5f15\u7528\u5173\u7cfb\uff0c\u4fdd\u6301\u72ec\u7acb\n// m.set(obj1, obj2)\n\n// Map \u662f\u6709\u5e8f\u7684\nm.forEach((value, key) => console.log(key, value)) // \u4fdd\u6301\u987a\u5e8f\u8f93\u51fa\n\n// Map \u6709\u591a\u5feb\uff1f\nfor (let i = 0; i < 1000 * 10000; i++) {\n  m.set(i + '', i)\n}\nconsole.time('map find')\nm.has('2000000')\nconsole.timeEnd('map find') // map find: 0.01416015625 ms\n"})}),"\n",(0,t.jsx)(e.p,{children:"Set \u548c Array \u7684\u533a\u522b"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"API \u4e0d\u540c"}),"\n",(0,t.jsx)(e.li,{children:"Set \u5143\u7d20\u4e0d\u80fd\u91cd\u590d"}),"\n",(0,t.jsx)(e.li,{children:"Set \u662f\u65e0\u5e8f\u7ed3\u6784\uff0c\u64cd\u4f5c\u5f88\u5feb"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"const arr = [1, 2, 3, 4]\nconst set = new Set([1, 2, 2, 3, 4])\n\n// Map Api: add,delete,has,forEach,\nset.forEach(val => console.log(val))\n\n// Set \u5143\u7d20\u662f\u4e0d\u80fd\u91cd\u590d\u7684\uff08\u6570\u7ec4\u53bb\u91cd\uff09\nconsole.log(set) // Set(4){1, 2, 3, 4}\n\n// Set \u662f\u65e0\u5e8f\u7684\uff08\u5feb\uff09\uff0carr \u662f\u6709\u5e8f\u7684\uff08\u6162\uff09\nfor (let i = 0; i < 100 * 10000; i++) {\n  arr.push(i)\n}\nconsole.time('arr unshift')\narr.unshift('a') // \u5bfc\u81f4\u6240\u6709\u5143\u7d20\u540e\u79fb\uff0c\u6240\u4ee5\u6162\nconsole.timeEnd('arr unshift') // arr unshift: 0.25390625 ms\nconsole.time('arr push')\narr.push('b')\nconsole.timeEnd('arr push') // arr push: 0.005859375 ms\nconsole.time('arr find')\narr.includes('20000')\nconsole.timeEnd('arr find') // arr find: 0.89794921875 ms\n\nfor (let i = 0; i < 100 * 10000; i++) {\n  set.add(i)\n}\nconsole.time('set add')\nset.add('a')\nconsole.timeEnd('set add') // set add: 0.00390625 ms\nconsole.time('set find')\nset.has('20000')\nconsole.timeEnd('set find') // set find: 0.005859375 ms\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function o(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);