"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["2865"],{51323:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"engineering/26484","title":"\u624B\u5199\u8282\u6D41 throttle","description":"\u8282\u6D41 throttle","source":"@site/issue/8.engineering/26484.md","sourceDirName":"8.engineering","slug":"/26484","permalink":"/issue/26484","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-10-29 15:45:23","slug":"/26484"},"sidebar":"tutorialSidebar","previous":{"title":"\u624B\u5199\u9632\u6296 debounce","permalink":"/issue/26473"},"next":{"title":"\u5E38\u89C1\u7684 web \u524D\u7AEF\u653B\u51FB\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F","permalink":"/issue/26487"}}'),s=t("85893"),i=t("50065");let l={date:"2020-10-29 15:45:23",slug:"/26484"},o="\u624B\u5199\u8282\u6D41 throttle",d={},c=[];function a(e){let n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u624B\u5199\u8282\u6D41-throttle",children:"\u624B\u5199\u8282\u6D41 throttle"})}),"\n",(0,s.jsx)(n.p,{children:"\u8282\u6D41 throttle"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u62D6\u62FD\u4E00\u4E2A\u5143\u7D20\u65F6\uFF0C\u8981\u968F\u65F6\u62FF\u5230\u8BE5\u5143\u7D20\u88AB\u62D6\u62FD\u7684\u4F4D\u7F6E"}),"\n",(0,s.jsx)(n.li,{children:"\u76F4\u63A5\u7528 drag \u4E8B\u4EF6\uFF0C\u5219\u4F1A\u9891\u7E41\u89E6\u53D1\uFF0C\u5F88\u5BB9\u6613\u5BFC\u81F4\u5361\u987F"}),"\n",(0,s.jsx)(n.li,{children:"\u8282\u6D41\uFF1A\u65E0\u8BBA\u62D6\u62FD\u901F\u5EA6\u591A\u5FEB\uFF0C\u90FD\u4F1A\u6BCF\u9694 100ms \u89E6\u53D1\u4E00\u6B21"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5F00\u542F\u4E00\u4E2A\u53EF\u62D6\u62FD\u7684 div"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<div id="div" draggable="true">\u53EF\u62D6\u62FD</div>\n<script>const div = document.getElementById(\'div\')<\/script>\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u666E\u901A\u7684\u5199\u6CD5\uFF0C\u9891\u7E41\u83B7\u53D6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"div.addEventListener('drag', function (e) {\n    console.log(e.offsetX, e.offsetY)\n})\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4F7F\u7528 setTimeout \u589E\u52A0\u8282\u594F\u63AA\u65BD"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u4F7F\u7528 setTimeout \u589E\u52A0\u8282\u594F\u63AA\u65BD\nlet timer = null\ndiv.addEventListener('drag', function (e) {\n    if (timer) {\n        return\n    }\n    timer = setTimeout(() => {\n        console.log(e.offsetX, e.offsetY)\n        timer = null\n    }, 500)\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5C01\u88C5\u4E00\u4E2A\u8282\u6D41 throttle \u51FD\u6570\uFF0C\u6CE8\u610F\u4F7F\u7528\uFF1A",(0,s.jsx)(n.code,{children:"fn.apply(this, arguments)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function throttle(fn, delay = 100) {\n    let timer = null\n    return function () {\n        if (timer) {\n            return\n        }\n        // \u5EFA\u8BAE\u4F7F\u7528\uFF0C\u9632\u6B62 this \u548C arguments \u4F5C\u7528\u57DF\u95EE\u9898\n        const self = this\n        const args = arguments\n        timer = setTimeout(() => {\n            fn.apply(self, args)\n            timer = null\n        }, delay)\n    }\n}\ndiv.addEventListener('drag',throttle(function(e){\n    console.log(e.offsetX, e.offsetY)\n},200))\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var r=t(67294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);