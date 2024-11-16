"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["3151"],{44335:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>l});var r=JSON.parse('{"id":"browser/26045","title":"\u4E00\u6B21\u6027\u63D2\u5165\u591A\u4E2A DOM \u8282\u70B9\uFF0C\u8003\u8651\u6027\u80FD","description":"DOM \u6027\u80FD","source":"@site/issue/5.browser/26045.md","sourceDirName":"5.browser","slug":"/26045","permalink":"/issue/26045","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-10-22 16:59:31","slug":"/26045"},"sidebar":"tutorialSidebar","previous":{"title":"attr \u548C property \u7684\u533A\u522B","permalink":"/issue/26043"},"next":{"title":"\u5982\u4F55\u8BC6\u522B\u6D4F\u89C8\u5668\u7684\u7C7B\u578B","permalink":"/issue/26136"}}'),s=t("85893"),i=t("50065");let l={date:"2020-10-22 16:59:31",slug:"/26045"},a="\u4E00\u6B21\u6027\u63D2\u5165\u591A\u4E2A DOM \u8282\u70B9\uFF0C\u8003\u8651\u6027\u80FD",c={},o=[];function d(e){let n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u4E00\u6B21\u6027\u63D2\u5165\u591A\u4E2A-dom-\u8282\u70B9\u8003\u8651\u6027\u80FD",children:"\u4E00\u6B21\u6027\u63D2\u5165\u591A\u4E2A DOM \u8282\u70B9\uFF0C\u8003\u8651\u6027\u80FD"})}),"\n",(0,s.jsx)(n.p,{children:"DOM \u6027\u80FD"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"DOM \u64CD\u4F5C\u975E\u5E38\u201C\u6602\u8D35\u201D\uFF0C\u907F\u514D\u9891\u7E41\u7684 DOM \u64CD\u4F5C"}),"\n",(0,s.jsx)(n.li,{children:"\u5BF9 DOM \u67E5\u8BE2\u505A\u7F13\u5B58"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u4E0D\u7F13\u5B58 DOM \u67E5\u8BE2\u7ED3\u679C\nfor (let i = 0; i < document.getElementsByTagName('p').length; i++) {}\n// \u7F13\u5B58 DOM \u67E5\u8BE2\u7ED3\u679C\nconst length = document.getElementsByTagName('p').length\nfor (let i = 0; i < length; i++) {}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5C06\u9891\u7E41\u64CD\u4F5C\u6539\u4E3A\u4E00\u6B21\u6027\u64CD\u4F5C"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const list = document.getElementById('list')\n// \u521B\u5EFA\u4E00\u4E2A\u6587\u6863\u7247\u6BB5\uFF0C\u6B64\u65F6\u8FD8\u6CA1\u6709\u63D2\u5165\u5230 DOM \u7ED3\u6784\u4E2D\nconst frag = document.createDocumentFragment()\nfor (let i=0; i< 10; i++){\n    const li = document.createElement('li')\n    li.innerHTML = `List item ${i}`\n    // \u5148\u63D2\u5165\u5230\u6587\u6863\u7247\u6BB5\u4E2D\n    frag.appendChild(li)\n}\n// \u90FD\u5B8C\u6210\u540E\uFF0C\u518D\u7EDF\u4E00\u63D2\u5165\u5230 DOM \u7ED3\u6784\u4E2D\nlist.appendChild(frag)\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var r=t(67294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);