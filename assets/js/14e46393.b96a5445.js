"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["7902"],{5638:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>d,assets:()=>i,toc:()=>a,frontMatter:()=>c});var r=JSON.parse('{"id":"browser/26149","title":"\u7F16\u5199\u4E00\u4E2A\u901A\u7528\u7684\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570","description":"\u9996\u5148\u4E00\u4E2A html \u7ED3\u6784\u4EE3\u7801","source":"@site/issue/5.browser/26149.md","sourceDirName":"5.browser","slug":"/26149","permalink":"/issue/26149","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-10-23 14:14:02","slug":"/26149"},"sidebar":"tutorialSidebar","previous":{"title":"\u5206\u6790\u62C6\u89E3 url \u5404\u4E2A\u90E8\u5206","permalink":"/issue/26138"},"next":{"title":"\u63CF\u8FF0\u4E8B\u4EF6\u5192\u6CE1\u7684\u6D41\u7A0B","permalink":"/issue/26152"}}'),s=t("85893"),l=t("50065");let c={date:"2020-10-23 14:14:02",slug:"/26149"},o="\u7F16\u5199\u4E00\u4E2A\u901A\u7528\u7684\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570",i={},a=[];function u(e){let n={blockquote:"blockquote",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u7F16\u5199\u4E00\u4E2A\u901A\u7528\u7684\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570",children:"\u7F16\u5199\u4E00\u4E2A\u901A\u7528\u7684\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570"})}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\u4E00\u4E2A html \u7ED3\u6784\u4EE3\u7801"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<button id="btn1">\u6309\u94AE</button>\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5B9E\u73B0\u4E8B\u4EF6\u7ED1\u5B9A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u4E8B\u4EF6\u7ED1\u5B9A\u51FD\u6570\nfunction bindEvent(elem, type, fn) {\n    elem.addEventListener(type, fn)\n}\nconst btn1 = document.getElementById('btn1')\nbindEvent(btn1, 'click', event => {\n    console.log(event.target) // <button id=\"btn1\">\u6309\u94AE</button>\n    event.preventDefault() // \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\n    alert('clicked')\n})\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u901A\u7528\u7684\u4E8B\u4EF6\u76D1\u542C\u51FD\u6570"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u901A\u7528\u7684\u4E8B\u4EF6\u7ED1\u5B9A\u51FD\u6570\nfunction bindEvent(elem, type, selector, fn) {\n    if (fn == null) {\n        fn = selector\n        selector = null\n    }\n    elem.addEventListener(type, event => {\n        const target = event.target\n        if (selector) {\n            // \u4EE3\u7406\u7ED1\u5B9A\n            if (target.matches(selector)) {\n                fn.call(target, event)\n            }\n        } else {\n            // \u666E\u901A\u7ED1\u5B9A\n            fn.call(target, event)\n        }\n    })\n}\nconst btn1 = document.getElementById('btn1')\nbindEvent(btn1, 'click', function(event){ //\n    console.log(this.innerHTML) // \u6309\u94AE\n})\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u9700\u8981\u6CE8\u610F\u7684\u662F this.innerHTML \u7684\u6307\u5411\uFF0C\u6B64\u65F6\u4E0D\u80FD\u662F event=>"," , \u800C\u9700\u8981\u4F7F\u7528 function(event)"]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return c}});var r=t(67294);let s={},l=r.createContext(s);function c(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);