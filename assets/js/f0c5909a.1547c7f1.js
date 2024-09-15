"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2052],{44378:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var s=t(74848),r=t(28453);const a={date:"2020-11-04 14:10:56",slug:"/26682"},c="\u83b7\u53d6\u5f53\u524d\u9875\u9762 url \u53c2\u6570",o={id:"js-ts/26682",title:"\u83b7\u53d6\u5f53\u524d\u9875\u9762 url \u53c2\u6570",description:"\u6bd4\u5982\uff1ahttp://localhost/test/test.html?a=100&b=200#c=300",source:"@site/issue/2.js-ts/26682.md",sourceDirName:"2.js-ts",slug:"/26682",permalink:"/issue/26682",draft:!1,unlisted:!1,editUrl:"/feedback",tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-11-04 14:10:56",slug:"/26682"},sidebar:"tutorialSidebar",previous:{title:"\u4ec0\u4e48\u662f JSON ?",permalink:"/issue/26680"},next:{title:"\u5c06 url \u53c2\u6570\u89e3\u6790\u4e3a JS \u5bf9\u8c61",permalink:"/issue/26695"}},l={},u=[];function i(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u83b7\u53d6\u5f53\u524d\u9875\u9762-url-\u53c2\u6570",children:"\u83b7\u53d6\u5f53\u524d\u9875\u9762 url \u53c2\u6570"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6bd4\u5982\uff1a",(0,s.jsx)(n.a,{href:"http://localhost/test/test.html?a=100&b=200#c=300",children:"http://localhost/test/test.html?a=100&b=200#c=300"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// \u4f20\u7edf\u65b9\u5f0f\nfunction query(name) {\n    // \u7c7b\u4f3carray.slice(1)\n    const search = location.search.substr(1)\n    // search: \'a=100&b=200\'\n    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`,\'i\') // i \u5927\u5c0f\u5199\u4e0d\u533a\u5206\n    const res = search.match(reg)\n    console.log(res)\n    // ["a=100", "", "100", index: 0, input: "a=100&b=200", groups: undefined]\n    if(res === null){\n        return null\n    }\n    return res[2] // \u6240\u4ee5\u8981\u53d6\u7d22\u5f15 2 \u7684\u503c\n}\nconsole.log(query(\'a\')) // 100\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u9ad8\u7ea7 API \u65b9\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// URLSearchParams\nfunction search(name) {\n    const search = location.search\n    const p = new URLSearchParams(search)\n    return p.get(name)\n}\nconsole.log(search('b')) // 200\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(96540);const r={},a=s.createContext(r);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);