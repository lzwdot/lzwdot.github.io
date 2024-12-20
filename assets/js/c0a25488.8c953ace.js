"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["8454"],{55482:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>l});var s=JSON.parse('{"id":"vuejs-use/vuejs3-base/29260","title":"ES Module \u5728\u6D4F\u89C8\u5668\u4E2D\u7684\u5E94\u7528","description":"\u5206\u7C7B\u8BB2\u89E3","source":"@site/docs/3.vuejs-use/3.vuejs3-base/29260.md","sourceDirName":"3.vuejs-use/3.vuejs3-base","slug":"/29260","permalink":"/docs/29260","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2022-01-21 20:56:58","slug":"/29260"},"sidebar":"tutorialSidebar","previous":{"title":"Vite \u4E3A\u4EC0\u4E48\u542F\u52A8\u975E\u5E38\u5FEB","permalink":"/docs/29256"},"next":{"title":"Vue3 \u548C JSX -\u57FA\u672C\u4F7F\u7528","permalink":"/docs/29264"}}'),r=t("85893"),d=t("50065");let l={date:"2022-01-21 20:56:58",slug:"/29260"},o="ES Module \u5728\u6D4F\u89C8\u5668\u4E2D\u7684\u5E94\u7528",c={},a=[{value:"\u57FA\u672C\u4F7F\u7528",id:"\u57FA\u672C\u4F7F\u7528",level:2},{value:"\u5916\u94FE\u5F15\u5165",id:"\u5916\u94FE\u5F15\u5165",level:2},{value:"\u8FDC\u7A0B\u5F15\u5165",id:"\u8FDC\u7A0B\u5F15\u5165",level:2},{value:"\u6309\u9700\u52A8\u6001\u5F15\u5165",id:"\u6309\u9700\u52A8\u6001\u5F15\u5165",level:2}];function i(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"es-module-\u5728\u6D4F\u89C8\u5668\u4E2D\u7684\u5E94\u7528",children:"ES Module \u5728\u6D4F\u89C8\u5668\u4E2D\u7684\u5E94\u7528"})}),"\n",(0,r.jsx)(n.p,{children:"\u5206\u7C7B\u8BB2\u89E3"}),"\n",(0,r.jsx)(n.h2,{id:"\u57FA\u672C\u4F7F\u7528",children:"\u57FA\u672C\u4F7F\u7528"}),"\n",(0,r.jsxs)(n.p,{children:["\u6587\u4EF6 ",(0,r.jsx)(n.code,{children:"/src/math.js"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"export function add(a, b) {\n  return a + b\n}\n\nexport function multi(a, b) {\n  return a * b\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6D4B\u8BD5\u6587\u4EF6 ",(0,r.jsx)(n.code,{children:"test1.html"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<p>\u57FA\u672C\u6F14\u793A</p>\n\n<script type=\"module\">\n  import {add, multi} from \"./src/math.js\";\n\n  console.log('res add', add(2, 3)) // res add 5\n  console.log('res multi', multi(2, 3)) // res multi 6\n<\/script>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5916\u94FE\u5F15\u5165",children:"\u5916\u94FE\u5F15\u5165"}),"\n",(0,r.jsxs)(n.p,{children:["\u6587\u4EF6 ",(0,r.jsx)(n.code,{children:"/src/index.js"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import {add, multi} from \"./math.js\";\n\nconsole.log('res add', add(2, 3)) // res add 5\nconsole.log('res multi', multi(2, 3)) // res multi 6\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6D4B\u8BD5\u6587\u4EF6 ",(0,r.jsx)(n.code,{children:"test2.html"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<p>\u5916\u94FE</p>\n\n<script type="module" src="./src/index.js"><\/script>\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u8FDC\u7A0B\u5F15\u5165",children:"\u8FDC\u7A0B\u5F15\u5165"}),"\n",(0,r.jsx)(n.p,{children:"\u6D4B\u8BD5\u6587\u4EF6 test3.html"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<p>\u8FDC\u7A0B\u5F15\u7528</p>\n\n<script type="module">\n  import {createStore} from \'https://unpkg.com/redux@4.1.2/es/redux.mjs\';\n\n  console.log(\'createStore\', createStore)\n  // createStore \u0192 i(n,f,u){var c;if("function"==typeof f&&"function"==typeof u||"function"==typeof u&&"function"==typeof arguments[3])throw Error(r(0));if("function"==typeof f&&void 0===u&&(u=f,f=void 0),void 0!==u){i\u2026\n<\/script>\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u6309\u9700\u52A8\u6001\u5F15\u5165",children:"\u6309\u9700\u52A8\u6001\u5F15\u5165"}),"\n",(0,r.jsxs)(n.p,{children:["\u6D4B\u8BD5\u6587\u4EF6 ",(0,r.jsx)(n.code,{children:"test4.html"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<p>\u52A8\u6001\u5F15\u5165</p>\n<button id=\"btn1\">load1</button>\n<button id=\"btn2\">load2</button>\n\n<script type=\"module\">\n  btn1.addEventListener('click', async () => {\n    const add = await import('./src/add.js')\n    console.log(add)\n    // Module {Symbol(Symbol.toStringTag): 'Module'}\n    // default: \u0192 add(a, b)\n    //   Symbol(Symbol.toStringTag): \"Module\"\n    //   get default: \u0192 ()\n    //   set default: \u0192 ()\n    const res = add.default(1, 2)\n    console.log('res add', res)\n    // print add\n    // res add 3\n  })\n  btn2.addEventListener('click', async () => {\n    const {add} = await import('./src/math.js')\n    console.log(add)\n    // \u0192 add(a, b) {\n    //   return a + b\n    // }\n    const res = add(1, 2)\n    console.log('res add', res) // res add 3\n  })\n<\/script>\n"})})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var s=t(67294);let r={},d=s.createContext(r);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);