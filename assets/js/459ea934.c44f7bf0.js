"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["3722"],{17042:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>j,assets:()=>i,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"js-ts/26638","title":"new Object() \u548C Object.create \u7684\u533A\u522B","description":"\u533A\u522B","source":"@site/issue/2.js-ts/26638.md","sourceDirName":"2.js-ts","slug":"/26638","permalink":"/issue/26638","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-11-03 09:40:35","slug":"/26638"},"sidebar":"tutorialSidebar","previous":{"title":"\u51FD\u6570\u58F0\u660E\u548C\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u533A\u522B","permalink":"/issue/26636"},"next":{"title":"\u5173\u4E8E this \u7684\u573A\u666F\u9898","permalink":"/issue/26640"}}'),o=t("85893"),c=t("50065");let r={date:"2020-11-03 09:40:35",slug:"/26638"},l="new Object() \u548C Object.create \u7684\u533A\u522B",i={},a=[];function u(e){let n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"new-object-\u548C-objectcreate-\u7684\u533A\u522B",children:"new Object() \u548C Object.create \u7684\u533A\u522B"})}),"\n",(0,o.jsx)(n.p,{children:"\u533A\u522B"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"{}"})," \u7B49\u540C\u4E8E ",(0,o.jsx)(n.code,{children:"new Object()"}),"\uFF0C\u539F\u578B\u90FD\u662F ",(0,o.jsx)(n.code,{children:"Object.prototype"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Object.create(null)"})," \u6CA1\u6709\u539F\u578B"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Object.create({...})"})," \u53EF\u6307\u5B9A\u539F\u578B"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const obj1 = {\n    a: 10,\n    b: 20,\n    sum() {\n        return this.a + this.b\n    }\n}\nconst obj2 = new Object({\n    a: 10,\n    b: 20,\n    sum() {\n        return this.a + this.b\n    }\n})\nconst obj3 = new Object(obj1)\nconsole.log(obj1===obj2) // false\nconsole.log(obj1===obj3) // true\nconst obj4 = Object.create(null) // {} \u6CA1\u6709\u539F\u578B\nconst obj5 = new Object() // {} \u6709\u539F\u578B\n// obj6 \u7684 __proto__ \u539F\u578B\u5C31\u662F\n// {\n//     a: 10,\n//     b: 20,\n//     sum() {\n//         return this.a + this.b\n//     }\n// }\nconst obj6 = Object.create({\n    a: 10,\n    b: 20,\n    sum() {\n        return this.a + this.b\n    }\n})\n// obj7 \u7684 __proto__ \u539F\u578B\u5C31\u662F obj1\nconst obj7 = Object.create(obj1)\nconsole.log(obj7.__proto__ === obj1) // true\nconsole.log(obj7 === obj1) // false\n"})})]})}function j(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(67294);let o={},c=s.createContext(o);function r(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);