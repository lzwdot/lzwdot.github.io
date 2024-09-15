"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6087],{33383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var s=t(74848),o=t(28453);const c={date:"2020-11-03 09:40:35",slug:"/26638"},r="new Object() \u548c Object.create \u7684\u533a\u522b",i={id:"js-ts/26638",title:"new Object() \u548c Object.create \u7684\u533a\u522b",description:"\u533a\u522b",source:"@site/issue/2.js-ts/26638.md",sourceDirName:"2.js-ts",slug:"/26638",permalink:"/issue/26638",draft:!1,unlisted:!1,editUrl:"/feedback",tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-11-03 09:40:35",slug:"/26638"},sidebar:"tutorialSidebar",previous:{title:"\u51fd\u6570\u58f0\u660e\u548c\u51fd\u6570\u8868\u8fbe\u5f0f\u7684\u533a\u522b",permalink:"/issue/26636"},next:{title:"\u5173\u4e8e this \u7684\u573a\u666f\u9898",permalink:"/issue/26640"}},l={},a=[];function j(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"new-object-\u548c-objectcreate-\u7684\u533a\u522b",children:"new Object() \u548c Object.create \u7684\u533a\u522b"})}),"\n",(0,s.jsx)(n.p,{children:"\u533a\u522b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{}"})," \u7b49\u540c\u4e8e ",(0,s.jsx)(n.code,{children:"new Object()"}),"\uff0c\u539f\u578b\u90fd\u662f ",(0,s.jsx)(n.code,{children:"Object.prototype"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Object.create(null)"})," \u6ca1\u6709\u539f\u578b"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Object.create({...})"})," \u53ef\u6307\u5b9a\u539f\u578b"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const obj1 = {\n    a: 10,\n    b: 20,\n    sum() {\n        return this.a + this.b\n    }\n}\nconst obj2 = new Object({\n    a: 10,\n    b: 20,\n    sum() {\n        return this.a + this.b\n    }\n})\nconst obj3 = new Object(obj1)\nconsole.log(obj1===obj2) // false\nconsole.log(obj1===obj3) // true\nconst obj4 = Object.create(null) // {} \u6ca1\u6709\u539f\u578b\nconst obj5 = new Object() // {} \u6709\u539f\u578b\n// obj6 \u7684 __proto__ \u539f\u578b\u5c31\u662f\n// {\n//     a: 10,\n//     b: 20,\n//     sum() {\n//         return this.a + this.b\n//     }\n// }\nconst obj6 = Object.create({\n    a: 10,\n    b: 20,\n    sum() {\n        return this.a + this.b\n    }\n})\n// obj7 \u7684 __proto__ \u539f\u578b\u5c31\u662f obj1\nconst obj7 = Object.create(obj1)\nconsole.log(obj7.__proto__ === obj1) // true\nconsole.log(obj7 === obj1) // false\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(96540);const o={},c=s.createContext(o);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);