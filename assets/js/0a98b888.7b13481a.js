"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["7593"],{4446:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>r,default:()=>p,assets:()=>i,toc:()=>l,frontMatter:()=>c});var s=JSON.parse('{"id":"async/25821","title":"async/await \u7684\u987A\u5E8F\u95EE\u9898","description":"\u6765\u4E00\u9053\u7ECF\u5178\u7684\u5F02\u6B65\u9898\u76EE","source":"@site/issue/3.async/25821.md","sourceDirName":"3.async","slug":"/25821","permalink":"/issue/25821","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-10-20 17:02:20","slug":"/25821"},"sidebar":"tutorialSidebar","previous":{"title":"promise \u548C setTimeout \u7684\u987A\u5E8F","permalink":"/issue/25819"},"next":{"title":"async/await \u8BED\u6CD5\u95EE\u9898","permalink":"/issue/26026"}}'),a=t("85893"),o=t("50065");let c={date:"2020-10-20 17:02:20",slug:"/25821"},r="async/await \u7684\u987A\u5E8F\u95EE\u9898",i={},l=[];function u(n){let e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"asyncawait-\u7684\u987A\u5E8F\u95EE\u9898",children:"async/await \u7684\u987A\u5E8F\u95EE\u9898"})}),"\n",(0,a.jsx)(e.p,{children:"\u6765\u4E00\u9053\u7ECF\u5178\u7684\u5F02\u6B65\u9898\u76EE"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"async function async1() {\n    console.log('async1 start') // step 2\n    await async2()\n    // await \u540E\u9762\u7684\u90FD\u4F5C\u4E3A\u56DE\u8C03\u5185\u5BB9 -\u5FAE\u4EFB\u52A1\n    console.log('async1 end') // step 6\n}\nasync function async2() {\n    console.log('async2')  // step 3\n}\nconsole.log('script start') // step 1\nsetTimeout(function () { // \u5B8F\u4EFB\u52A1\n    console.log('setTimeout') // step 8\n}, 0)\nasync1()\n//\u521D\u59CB\u5316 promise \u65F6\uFF0C\u4F20\u5165\u7684\u51FD\u6570\u4F1A\u7ACB\u5373\u6267\u884C\nnew Promise(function (resolve) {\n    console.log('promise1')  // step 4\n    resolve()\n}).then(function () {  // \u5FAE\u4EFB\u52A1\n    console.log('promise2') // step 7\n})\nconsole.log('script end') // step 5\n// \u540C\u6B65\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\uFF08event loop - call stack \u88AB\u6E05\u7A7A\uFF09\n// \u6267\u884C\u5FAE\u4EFB\u52A1\n// \uFF08\u5C1D\u8BD5\u89E6\u53D1 DOM \u6E32\u67D3\uFF09\n// \u89E6\u53D1 Event Loop\uFF0C \u6267\u884C\u5B8F\u4EFB\u52A1\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u4E0A\u9762\u6267\u884C\u7ED3\u679C\uFF1A"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"// script start\n// async1 start\n// async2\n// promise1\n// script end\n// async1 end\n// promise2\n// setTimeout\n"})})]})}function p(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return c}});var s=t(67294);let a={},o=s.createContext(a);function c(n){let e=s.useContext(o);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:c(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);