"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["6882"],{54219:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>u});var r=JSON.parse('{"id":"js-ts/26700","title":"\u6570\u7EC4\u53BB\u91CD\uFF0C\u8003\u8651\u8BA1\u7B97\u6548\u7387","description":"\u6570\u7EC4\u53BB\u91CD\u7684\u65B9\u6CD5","source":"@site/issue/2.js-ts/26700.md","sourceDirName":"2.js-ts","slug":"/26700","permalink":"/issue/26700","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-11-04 16:20:53","slug":"/26700"},"sidebar":"tutorialSidebar","previous":{"title":"\u624B\u5199\u6570\u7EC4 flatern\uFF0C\u8003\u8651\u591A\u5C42\u7EA7","permalink":"/issue/26698"},"next":{"title":"\u624B\u5199\u6DF1\u62F7\u8D1D\uFF0C\u6CE8\u610F Object.assign \u4E0D\u662F\u6DF1\u62F7\u8D1D","permalink":"/issue/26715"}}'),s=t("85893"),i=t("50065");let u={date:"2020-11-04 16:20:53",slug:"/26700"},l="\u6570\u7EC4\u53BB\u91CD\uFF0C\u8003\u8651\u8BA1\u7B97\u6548\u7387",a={},c=[];function o(e){let n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u6570\u7EC4\u53BB\u91CD\u8003\u8651\u8BA1\u7B97\u6548\u7387",children:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u8003\u8651\u8BA1\u7B97\u6548\u7387"})}),"\n",(0,s.jsx)(n.p,{children:"\u6570\u7EC4\u53BB\u91CD\u7684\u65B9\u6CD5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4F20\u7EDF\u65B9\u5F0F\uFF0C\u904D\u5386\u5143\u7D20\u6328\u4E2A\u6BD4\u8F83\uFF0C\u53BB\u91CD"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u4F20\u7EDF\u65B9\u5F0F\nfunction unique(arr) {\n    const res = []\n    arr.forEach(item => {\n        if (res.indexOf(item) < 0) {\n            res.push(item)\n        }\n    })\n    return res\n}\nconsole.log(unique([1,1,2,2])) // [1,2]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4F7F\u7528 ES6 \u4E2D\u7684 Set\uFF0C\u6027\u80FD\u66F4\u597D\u63A8\u8350\u4F7F\u7528"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u4F7F\u7528 Set \uFF08\u65E0\u5E8F\uFF0C\u4E0D\u80FD\u91CD\u590D\uFF09\nfunction uniqueSet(arr) {\n    const res = new Set(arr)\n    return [...res]\n}\nconsole.log(uniqueSet([1,1,2,2])) // [1,2]\n"})})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return u}});var r=t(67294);let s={},i=r.createContext(s);function u(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:u(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);