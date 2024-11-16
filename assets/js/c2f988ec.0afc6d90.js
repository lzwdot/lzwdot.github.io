"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["9162"],{28848:function(e,n,r){r.r(n),r.d(n,{metadata:()=>o,contentTitle:()=>l,default:()=>a,assets:()=>i,toc:()=>d,frontMatter:()=>c});var o=JSON.parse('{"id":"async/25813","title":"Promise \u6709\u54EA\u4E09\u79CD\u72B6\u6001\uFF1F\u5982\u4F55\u53D8\u5316\uFF1F","description":"\u4E09\u79CD\u72B6\u6001\uFF1Apending resolved rejected","source":"@site/issue/3.async/25813.md","sourceDirName":"3.async","slug":"/25813","permalink":"/issue/25813","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-10-20 16:56:54","slug":"/25813"},"sidebar":"tutorialSidebar","previous":{"title":"\u5B8F\u4EFB\u52A1 macroTask \u548C\u5FAE\u4EFB\u52A1 microTask","permalink":"/issue/25811"},"next":{"title":"promise \u5173\u4E8E then \u548C catch \u7684\u94FE\u63A5\u95EE\u9898","permalink":"/issue/25815"}}'),s=r("85893"),t=r("50065");let c={date:"2020-10-20 16:56:54",slug:"/25813"},l="Promise \u6709\u54EA\u4E09\u79CD\u72B6\u6001\uFF1F\u5982\u4F55\u53D8\u5316\uFF1F",i={},d=[];function p(e){let n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"promise-\u6709\u54EA\u4E09\u79CD\u72B6\u6001\u5982\u4F55\u53D8\u5316",children:"Promise \u6709\u54EA\u4E09\u79CD\u72B6\u6001\uFF1F\u5982\u4F55\u53D8\u5316\uFF1F"})}),"\n",(0,s.jsx)(n.p,{children:"\u4E09\u79CD\u72B6\u6001\uFF1Apending resolved rejected"}),"\n",(0,s.jsx)(n.p,{children:"\u72B6\u6001\u7684\u53D8\u5316\uFF1Apending \u2014> resolved \u6216 pending \u2014> rejected\uFF0C\u4EE3\u7801\u6F14\u793A\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const p1 = new Promise((resolve, reject) => {\n})\nconsole.log('p1', p1) // p1 Promise {<pending>}\nconst p2 = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        resolve()\n    })\n})\n// \u4E00\u5F00\u59CB\u6253\u5370\u65F6\u662F pending\uFF0C\u6700\u7EC8\u662F resolved \u72B6\u6001\nconsole.log('p2', p2) // p2 Promise {<pending>}\nsetTimeout(() => console.log('p2-setTimeout', p2)) // p2-setTimeout Promise {<resolved>: undefined}\nconst p3 = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        reject()\n    })\n})\n// \u4E00\u5F00\u59CB\u6253\u5370\u65F6\u662F pending\uFF0C\u6700\u7EC8\u662F rejected \u72B6\u6001\nconsole.log('p3', p3) // p3 Promise {<pending>}\nsetTimeout(() => console.log('p3-setTimeout', p3)) // p3-setTimeout Promise {<rejected>: undefined}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u72B6\u6001\u7684\u8868\u73B0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"pending \u72B6\u6001\uFF0C\u4E0D\u4F1A\u89E6\u53D1 then \u548C catch"}),"\n",(0,s.jsx)(n.li,{children:"resolved \u72B6\u6001\uFF0C\u4F1A\u89E6\u53D1\u540E\u7EED\u7684 then \u56DE\u8C03\u51FD\u6570"}),"\n",(0,s.jsx)(n.li,{children:"rejected \u72B6\u6001\uFF0C\u4F1A\u89E6\u53D1\u540E\u7EED\u7684 catch \u56DE\u8C03\u51FD\u6570\uFF0C\u4EE3\u7801\u6F14\u793A\uFF1A"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const p1 = Promise.resolve(100)\nconsole.log('p1',p1) // p1 Promise {<resolved>: 100}\np1.then(data=>{\n    console.log('data1',data) // data1 100\n}).catch(err=>{\n    console.error('err1',err) // \u4E0D\u4F1A\u89E6\u53D1\n})\nconst p2 = Promise.reject('err')\nconsole.log('p2',p2) //p2 Promise {<rejected>: \"err\"}\np2.then(data=>{\n    console.log('data2',data) // \u4E0D\u4F1A\u89E6\u53D1\n}).catch(err=>{\n    console.error('err2',err) // err2 err\n})\n"})}),"\n",(0,s.jsx)(n.p,{children:"then \u548C catch \u5982\u4F55\u5F71\u54CD\u72B6\u6001\u7684\u53D8\u5316"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"then \u6B63\u5E38\u8FD4\u56DE resolved\uFF0C\u91CC\u9762\u6709\u62A5\u9519\u5219\u8FD4\u56DE rejected"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const p1 = Promise.resolve().then(() => {\n    return 100\n})\n// \u4E00\u5F00\u59CB\u6253\u5370\u65F6\u662F pending\uFF0C\u6700\u7EC8\u662F resolved \u72B6\u6001\uFF0C\u4F1A\u89E6\u53D1\u540E\u7EED then \u7684\u56DE\u8C03\nconsole.log('p1', p1)\np1.then(() => {\n    console.log('123') //123\n})\nconst p2 = Promise.resolve().then(() => {\n    throw new Error('err')\n})\n// \u4E00\u5F00\u59CB\u6253\u5370\u65F6\u662F pending\uFF0C\u6700\u7EC8\u662F rejected \u72B6\u6001\uFF0C\u4F1A\u89E6\u53D1\u540E\u7EED catch \u7684\u56DE\u8C03\nconsole.log('p2', p2)\np2.then(() => {\n    console.log('123') // \u4E0D\u4F1A\u89E6\u53D1\n}).catch(err => {\n    console.error('err2', err) // err2 Error: err\n})\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"catch \u6B63\u5E38\u8FD4\u56DE resolved\uFF0C\u91CC\u9762\u6709\u62A5\u9519\u5219\u8FD4\u56DE rejected"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const p3 = Promise.reject('my error').catch(err=>{\n    console.error(err)\n})\n// \u4E00\u5F00\u59CB\u6253\u5370\u65F6\u662F pending\uFF0C\u6700\u7EC8\u662F resolved \u72B6\u6001\uFF0C\u4F1A\u89E6\u53D1\u540E\u7EED then \u7684\u56DE\u8C03\nconsole.log('p3',p3)\np3.then(() => {\n    console.log('333') //333\n})\nconst p4 = Promise.reject('my error').catch(err=>{\n    throw new Error('catch err')\n})\n// \u4E00\u5F00\u59CB\u6253\u5370\u65F6\u662F pending\uFF0C\u6700\u7EC8\u662F rejected \u72B6\u6001\uFF0C\u4F1A\u89E6\u53D1\u540E\u7EED catch \u7684\u56DE\u8C03\nconsole.log('p4',p4)\nconst p5 = p4.then(() => {\n    console.log('444') // \u4E0D\u4F1A\u89E6\u53D1\n}).catch(err => {\n    console.error('err4', err) // err4 Error: catch err\n})\nconsole.log('p5',p5) // \u4E00\u5F00\u59CB\u6253\u5370\u65F6\u662F pending\uFF0C\u6700\u7EC8\u662F resolved \u72B6\u6001\n"})})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},50065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return c}});var o=r(67294);let s={},t=o.createContext(s);function c(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);