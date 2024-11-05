"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["4421"],{77953:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>o,default:()=>u,assets:()=>r,toc:()=>a,frontMatter:()=>i});var l=JSON.parse('{"id":"async/25763","title":"\u8BF7\u63CF\u8FF0 event loop\uFF08\u4E8B\u4EF6\u5FAA\u73AF/\u4E8B\u4EF6\u8F6E\u8BE2\uFF09\u7684\u673A\u5236\uFF0C\u53EF\u753B\u56FE","description":"\u63A8\u8350\u9605\u8BFB\uFF1Ahttps://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/","source":"@site/issue/3.async/25763.md","sourceDirName":"3.async","slug":"/25763","permalink":"/issue/25763","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-10-19 14:45:00","slug":"/25763"},"sidebar":"tutorialSidebar","previous":{"title":"\u5F02\u6B65","permalink":"/issue/async/"},"next":{"title":"\u5B8F\u4EFB\u52A1 macroTask \u548C\u5FAE\u4EFB\u52A1 microTask","permalink":"/issue/25811"}}'),t=s("85893"),c=s("50065");let i={date:"2020-10-19 14:45:00",slug:"/25763"},o="\u8BF7\u63CF\u8FF0 event loop\uFF08\u4E8B\u4EF6\u5FAA\u73AF/\u4E8B\u4EF6\u8F6E\u8BE2\uFF09\u7684\u673A\u5236\uFF0C\u53EF\u753B\u56FE",r={},a=[];function d(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u8BF7\u63CF\u8FF0-event-loop\u4E8B\u4EF6\u5FAA\u73AF\u4E8B\u4EF6\u8F6E\u8BE2\u7684\u673A\u5236\u53EF\u753B\u56FE",children:"\u8BF7\u63CF\u8FF0 event loop\uFF08\u4E8B\u4EF6\u5FAA\u73AF/\u4E8B\u4EF6\u8F6E\u8BE2\uFF09\u7684\u673A\u5236\uFF0C\u53EF\u753B\u56FE"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u63A8\u8350\u9605\u8BFB\uFF1A",(0,t.jsx)(n.a,{href:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/",children:"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"event-loop",src:s(41534).Z+"",width:"1115",height:"803"})}),"\n",(0,t.jsx)(n.p,{children:"event loop\uFF08\u4E8B\u4EF6\u5FAA\u73AF/\u4E8B\u4EF6\u8F6E\u8BE2\uFF09"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"JS \u662F\u5355\u7EBF\u7A0B\u8FD0\u884C\u7684"}),"\n",(0,t.jsx)(n.li,{children:"\u5F02\u6B65\u8981\u57FA\u4E8E\u56DE\u8C03\u6765\u5B9E\u73B0"}),"\n",(0,t.jsx)(n.li,{children:"event loop \u5C31\u662F\u5F02\u6B65\u56DE\u8C03\u7684\u5B9E\u73B0\u539F\u7406"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"JS \u5982\u4F55\u6267\u884C\uFF1F"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4ECE\u524D\u5230\u540E\uFF0C\u4E00\u884C\u4E00\u884C\u6267\u884C"}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679C\u67D0\u4E00\u884C\u6267\u884C\u62A5\u9519\uFF0C\u5219\u505C\u6B62\u4E0B\u9762\u4EE3\u7801\u7684\u6267\u884C"}),"\n",(0,t.jsx)(n.li,{children:"\u5148\u6267\u884C\u5B8C\u540C\u6B65\u4EE3\u7801\uFF0C\u518D\u6267\u884C\u5F02\u6B65"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"event loop \u7684\u6267\u884C\u8FC7\u7A0B\uFF1F"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"console.log('Hi')\nsetTimeout(function cb1(){\n    console.log('cb1') // cb1 \u5373 callback\n},5000)\nconsole.log('Bye')\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u540C\u6B65\u4EE3\u7801\uFF0C\u4E00\u884C\u4E00\u884C\u653E\u5728 Call Stack \u6267\u884C"}),"\n",(0,t.jsx)(n.li,{children:"\u9047\u5230\u5F02\u6B65\uFF0C\u4F1A\u5148\u201C\u8BB0\u5F55\u201D\u4E0B\uFF0C\u7B49\u5F85\u65F6\u673A\uFF08\u5B9A\u65F6\uFF0C\u7F51\u7EDC\u8BF7\u6C42\u7B49\uFF09"}),"\n",(0,t.jsx)(n.li,{children:"\u65F6\u673A\u5230\u4E86\uFF0C\u5C31\u79FB\u52A8\u5230 Callback Queue"}),"\n",(0,t.jsx)(n.li,{children:"\u5982 Call Stack \u4E3A\u7A7A\uFF08\u5373\u540C\u6B65\u4EE3\u7801\u6267\u884C\u5B8C\uFF09Event Loop \u5F00\u59CB\u5DE5\u4F5C"}),"\n",(0,t.jsx)(n.li,{children:"\u8F6E\u8BE2\u67E5\u627E Callback Queue\uFF0C\u5982\u6709\u5219\u79FB\u52A8 Call Stack \u6267\u884C"}),"\n",(0,t.jsxs)(n.li,{children:["\u7136\u540E\u7EE7\u7EED\u8F6E\u8BE2\u67E5\u627E\uFF08\u6C38\u52A8\u673A\u4E00\u6837\uFF09",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.img,{src:s(41823).Z+"",width:"1280",height:"805"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"DOM \u4E8B\u4EF6\u548C event loop \u7684\u5173\u7CFB"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"JS \u662F\u5355\u7EBF\u7A0B\u7684"}),"\n",(0,t.jsx)(n.li,{children:"\u5F02\u6B65\uFF08setTimeout\uFF0Cajax\u7B49\uFF09\u4F7F\u7528\u56DE\u8C03\uFF0C\u57FA\u4E8E event loop"}),"\n",(0,t.jsx)(n.li,{children:"DOM \u4E8B\u4EF6\u4E5F\u4F7F\u7528\u56DE\u8C03\uFF0C\u57FA\u4E8E event loop"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"<button id=\"btn\">\u70B9\u51FB</button>\n<script>\n    console.log('Hi')\n    document.getElementById('btn').addEventListener('click',function(e){\n        console.log('clicked')\n    })\n    console.log('Bye')\n<\/script>\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u4EE5\u4E0A\u4EE3\u7801\u901A\u8FC7\u70B9\u51FB\u4E8B\u4EF6\u628A\u56DE\u8C03\u51FD\u6570\u79FB\u52A8\u5230 Callback Queue"}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},41823:function(e,n,s){s.d(n,{Z:function(){return l}});let l=s.p+"assets/images/3989109606-79a7a7b6c479f840708a178724a50259.webp"},41534:function(e,n,s){s.d(n,{Z:function(){return l}});let l=s.p+"assets/images/eventloop-20220112114734-2ef6d0accdd23ec7c5d9cd2d4d93b4e4.webp"},50065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var l=s(67294);let t={},c=l.createContext(t);function i(e){let n=l.useContext(c);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);