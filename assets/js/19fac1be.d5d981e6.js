"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7485],{1853:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var l=s(74848),t=s(28453);const i={date:"2020-10-25 16:56:38",slug:"/26286"},r="\u4ec0\u4e48\u662f Restful API",d={id:"network/26286",title:"\u4ec0\u4e48\u662f Restful API",description:"\u4f20\u7edf\u7684 methods",source:"@site/issue/4.network/26286.md",sourceDirName:"4.network",slug:"/26286",permalink:"/issue/26286",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-10-25 16:56:38",slug:"/26286"},sidebar:"tutorialSidebar",previous:{title:"http \u5e38\u89c1\u7684 header \u6709\u54ea\u4e9b\uff1f",permalink:"/issue/26284"},next:{title:"\u63cf\u8ff0\u4e00\u4e0b http \u7684\u7f13\u5b58\u673a\u5236",permalink:"/issue/26288"}},c={},u=[];function o(n){const e={h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u4ec0\u4e48\u662f-restful-api",children:"\u4ec0\u4e48\u662f Restful API"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f20\u7edf\u7684 methods"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"get \u83b7\u53d6\u670d\u52a1\u5668\u7684\u6570\u636e"}),"\n",(0,l.jsx)(e.li,{children:"post \u5411\u670d\u52a1\u5668\u63d0\u4ea4\u6570\u636e"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u73b0\u5728\u7684 methods"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"get \u83b7\u53d6\u6570\u636e"}),"\n",(0,l.jsx)(e.li,{children:"post \u65b0\u5efa\u6570\u636e"}),"\n",(0,l.jsx)(e.li,{children:"patch/put \u66f4\u65b0\u6570\u636e"}),"\n",(0,l.jsx)(e.li,{children:"delete \u5220\u9664\u6570\u636e"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Restful API"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4e00\u79cd\u65b0\u7684 API \u8bbe\u8ba1\u65b9\u6cd5\uff08\u65e9\u5df2\u63a8\u5e7f\u4f7f\u7528\uff09"}),"\n",(0,l.jsx)(e.li,{children:"\u4f20\u7edf API \u8bbe\u8ba1\uff1a\u628a\u6bcf\u4e2a url \u5f53\u505a\u4e00\u4e2a\u529f\u80fd"}),"\n",(0,l.jsx)(e.li,{children:"Restful API \u8bbe\u8ba1\uff1a\u628a\u6bcf\u4e2a url \u5f53\u505a\u4e00\u4e2a\u552f\u4e00\u7684\u8d44\u6e90"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u4f55\u8bbe\u8ba1\u6210\u4e00\u4e2a\u8d44\u6e90\uff1f"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5c3d\u91cf\u4e0d\u7528 url \u53c2\u6570","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4f20\u7edf API \u8bbe\u8ba1\uff1a/api/list?pageIndex=2\uff0c"}),"\n",(0,l.jsx)(e.li,{children:"Restful API \u8bbe\u8ba1\uff1a/api/list2"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\u7528 method \u8868\u793a\u64cd\u4f5c\u7c7b\u578b","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u4f20\u7edf API \u8bbe\u8ba1","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"post \u8bf7\u6c42 /api/create-blog"}),"\n",(0,l.jsx)(e.li,{children:"post \u8bf7\u6c42 /api/update-blog?id=100"}),"\n",(0,l.jsx)(e.li,{children:"get \u8bf7\u6c42 /api/get-blog?id=100"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["Restful API \u8bbe\u8ba1","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"post \u8bf7\u6c42 /api/blog"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"patch \u8bf7\u6c42 /api/blog/100"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"get \u8bf7\u6c42 /api/blog/100"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>d});var l=s(96540);const t={},i=l.createContext(t);function r(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);