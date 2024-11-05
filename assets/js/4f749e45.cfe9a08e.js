"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["5595"],{13028:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>c,default:()=>d,assets:()=>u,toc:()=>l,frontMatter:()=>o});var s=JSON.parse('{"id":"react-use/react-hooks/29412","title":"\u7528 useState \u5B9E\u73B0 state \u548C setState \u529F\u80FD","description":"\u8BA9\u51FD\u6570\u7EC4\u4EF6\u5B9E\u73B0 state \u548C setState","source":"@site/docs/4.react-use/2.react-hooks/29412.md","sourceDirName":"4.react-use/2.react-hooks","slug":"/29412","permalink":"/docs/29412","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2022-01-28 15:40:19","slug":"/29412"},"sidebar":"tutorialSidebar","previous":{"title":"class \u7EC4\u4EF6\u5B58\u5728\u54EA\u4E9B\u95EE\u9898","permalink":"/docs/29410"},"next":{"title":"\u7528 useEffect \u6A21\u62DF\u7EC4\u4EF6\u751F\u547D\u5468\u671F","permalink":"/docs/29414"}}'),a=n("85893"),r=n("50065");let o={date:"2022-01-28 15:40:19",slug:"/29412"},c="\u7528 useState \u5B9E\u73B0 state \u548C setState \u529F\u80FD",u={},l=[];function i(e){let t={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"\u7528-usestate-\u5B9E\u73B0-state-\u548C-setstate-\u529F\u80FD",children:"\u7528 useState \u5B9E\u73B0 state \u548C setState \u529F\u80FD"})}),"\n",(0,a.jsx)(t.p,{children:"\u8BA9\u51FD\u6570\u7EC4\u4EF6\u5B9E\u73B0 state \u548C setState"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"\u9ED8\u8BA4\u51FD\u6570\u7EC4\u4EF6\u6CA1\u6709 state"}),"\n",(0,a.jsx)(t.li,{children:"\u51FD\u6570\u7EC4\u4EF6\u662F\u4E00\u4E2A\u7EAF\u51FD\u6570\uFF0C\u6267\u884C\u5B8C\u5373\u9500\u6BC1\uFF0C\u65E0\u6CD5\u5B58\u50A8 state"}),"\n",(0,a.jsx)(t.li,{children:"\u9700\u8981 State Hook\uFF0C\u5373\u628A state \u529F\u80FD\u201C\u94A9\u201D\u5230\u7EAF\u51FD\u6570\u4E2D"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"\u4F8B\u5B50"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import React, {useState} from \"react\";\n\nfunction ClickCounter() {\n  // \u6570\u7EC4\u7684\u89E3\u6784\n  // const arr = userState(0)\n  // const count = arr[0]\n  // const setCount = arr[1]\n  // useState \u5C31\u662F\u4E00\u4E2A Hook\uFF0C\u6700\u57FA\u672C\u7684\u4E00\u4E2A Hook\n  const [count, setCount] = useState(0)\n  const [name, setName] = useState('lzw.')\n\n  function setVal() {\n    setCount(count + 1)\n    setName(name + '-' + count)\n  }\n\n  return <div>\n    <p>\u4F60\u70B9\u51FB\u4E86\u591A\u5C11\u6B21 {count} \u6B21 {name}</p>\n    <button onClick={setVal}>\u70B9\u51FB</button>\n  </div>\n}\n\nexport default ClickCounter\n"})}),"\n",(0,a.jsx)(t.p,{children:"useState \u4F7F\u7528\u603B\u7ED3"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"useState(0) \u4F20\u5165\u521D\u59CB\u503C\uFF0C\u8FD4\u56DE\u6570\u7EC4[state,setState]"}),"\n",(0,a.jsx)(t.li,{children:"\u901A\u8FC7 state \u83B7\u53D6\u503C"}),"\n",(0,a.jsx)(t.li,{children:"\u901A\u8FC7 setState(1) \u4FEE\u6539\u503C"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Hooks \u547D\u540D\u89C4\u8303"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"\u89C4\u5B9A\u6240\u6709\u7684 Hooks \u90FD\u662F use \u5F00\u5934\uFF0C\u5982 useXxx"}),"\n",(0,a.jsx)(t.li,{children:"\u81EA\u5B9A\u4E49 Hook \u4E5F\u9700\u8981\u4EE5 use \u5F00\u5934"}),"\n",(0,a.jsx)(t.li,{children:"\u975E Hooks \u7684\u5730\u65B9\uFF0C\u5C3D\u91CF\u4E0D\u8981\u4F7F\u7528 useXxx \u5199\u6CD5"}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},50065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return o}});var s=n(67294);let a={},r=s.createContext(a);function o(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);