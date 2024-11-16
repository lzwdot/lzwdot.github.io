"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["9707"],{50305:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>d,assets:()=>i,toc:()=>a,frontMatter:()=>r});var t=JSON.parse('{"id":"js-ts/25680","title":"\u5982\u4F55\u7406\u89E3 JS \u539F\u578B(\u9690\u5F0F\u539F\u578B\u548C\u663E\u793A\u539F\u578B)\u4E09\u5EA7\u5927\u5C71\u4E4B\u4E00","description":"\u901A\u8FC7\u4E00\u4E9B\u4F8B\u5B50\u6765\u8BF4\u660E\uFF0C\u9996\u5148\u5B9A\u4E49","source":"@site/issue/2.js-ts/25680.md","sourceDirName":"2.js-ts","slug":"/25680","permalink":"/issue/25680","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-10-09 17:49:00","slug":"/25680"},"sidebar":"tutorialSidebar","previous":{"title":"\u5982\u4F55\u7528 class \u5B9E\u73B0\u7EE7\u627F?","permalink":"/issue/25673"},"next":{"title":"instanceof \u662F\u57FA\u4E8E\u539F\u578B\u94FE\u5B9E\u73B0\u7684","permalink":"/issue/25686"}}'),o=s("85893"),l=s("50065");let r={date:"2020-10-09 17:49:00",slug:"/25680"},c="\u5982\u4F55\u7406\u89E3 JS \u539F\u578B(\u9690\u5F0F\u539F\u578B\u548C\u663E\u793A\u539F\u578B)\u4E09\u5EA7\u5927\u5C71\u4E4B\u4E00",i={},a=[];function u(e){let n={code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u5982\u4F55\u7406\u89E3-js-\u539F\u578B\u9690\u5F0F\u539F\u578B\u548C\u663E\u793A\u539F\u578B\u4E09\u5EA7\u5927\u5C71\u4E4B\u4E00",children:"\u5982\u4F55\u7406\u89E3 JS \u539F\u578B(\u9690\u5F0F\u539F\u578B\u548C\u663E\u793A\u539F\u578B)\u4E09\u5EA7\u5927\u5C71\u4E4B\u4E00"})}),"\n",(0,o.jsx)(n.p,{children:"\u901A\u8FC7\u4E00\u4E9B\u4F8B\u5B50\u6765\u8BF4\u660E\uFF0C\u9996\u5148\u5B9A\u4E49"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"class People {\n    constructor(name) {\n        this.name = name\n    }\n    eat(){\n        console.log(`${this.name} eat something`)\n    }\n}\n//\u5B50\u7C7B\nclass Student extends People{\n    constructor(name,number){\n        super(name)\n        this.number = number\n    }\n    sayHi(){\n        console.log(\n            `\u59D3\u540D${this.name}\uFF0C\u5B66\u53F7${this.number}`\n        )\n    }\n}\n//\u5B9E\u4F8B\u5316\nconst xialuo = new Student('\u590F\u6D1B',100)\nconsole.log(xialuo.name,xialuo.number) //\u590F\u6D1B 100\nxialuo.sayHi() //\u59D3\u540D\u590F\u6D1B\uFF0C\u5B66\u53F7100\nxialuo.eat() //\u590F\u6D1B eat something\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u7C7B\u578B\u5224\u65AD - instanceof"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"console.log(xialuo instanceof Student) //true\nconsole.log(xialuo instanceof People) //true\nconsole.log(xialuo instanceof Object) //true\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"console.log([] instanceof Array) //true\nconsole.log([] instanceof Object) //true\nconsole.log({} instanceof Object) //true\n"})}),"\n",(0,o.jsx)(n.p,{children:"class \u7684\u539F\u578B\u672C\u8D28\u662F\u4EC0\u4E48\uFF1F\u5B9E\u9645\u4E0A\u662F\u51FD\u6570\uFF0C\u53EF\u89C1\u662F\u8BED\u6CD5\u7CD6"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"console.log(typeof People) //function\nconsole.log(typeof Student) //function\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u539F\u578B"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"console.log(xialuo.__proto__) //\u9690\u5F0F\u539F\u578B\nconsole.log(Student.prototype) // \u663E\u793A\u539F\u578B\nconsole.log(xialuo.__proto__ === Student.prototype) // true\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(39882).Z+"",width:"770",height:"404"})}),"\n",(0,o.jsx)(n.p,{children:"\u539F\u578B\u5173\u7CFB"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u6BCF\u4E2A class \u90FD\u6709\u663E\u793A\u539F\u578B prototype"}),"\n",(0,o.jsxs)(n.li,{children:["\u6BCF\u4E2A\u5B9E\u4F8B\u90FD\u6709\u9690\u5F0F\u539F\u578B ",(0,o.jsx)(n.code,{children:"__proto__"})]}),"\n",(0,o.jsxs)(n.li,{children:["\u5B9E\u4F8B\u7684 ",(0,o.jsx)(n.code,{children:"__proto__"})," \u6307\u5411\u5BF9\u5E94 class \u7684 prototype"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u57FA\u4E8E\u539F\u578B\u7684\u6307\u5411\u89C4\u5219\uFF0C\u83B7\u53D6\u5C5E\u6027\u6216\u6267\u884C\u65B9\u6CD5\u65F6"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"\u5148\u5728\u81EA\u8EAB\u5C5E\u6027\u548C\u65B9\u6CD5\u5BFB\u627E"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["\u5982\u679C\u627E\u4E0D\u5230\u5219\u81EA\u52A8\u53BB ",(0,o.jsx)(n.code,{children:"__proto__"})," \u4E2D\u67E5\u627E"]}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},39882:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/3626654752-aef020284abc93abdd40d4ff6fa58ecd.webp"},50065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var t=s(67294);let o={},l=t.createContext(o);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);