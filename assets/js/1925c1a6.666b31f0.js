"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5359],{30039:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=t(74848),r=t(28453);const i={date:"2020-10-22 16:59:31",slug:"/26045"},l="\u4e00\u6b21\u6027\u63d2\u5165\u591a\u4e2a DOM \u8282\u70b9\uff0c\u8003\u8651\u6027\u80fd",o={id:"browser/26045",title:"\u4e00\u6b21\u6027\u63d2\u5165\u591a\u4e2a DOM \u8282\u70b9\uff0c\u8003\u8651\u6027\u80fd",description:"DOM \u6027\u80fd",source:"@site/issue/5.browser/26045.md",sourceDirName:"5.browser",slug:"/26045",permalink:"/issue/26045",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-10-22 16:59:31",slug:"/26045"},sidebar:"tutorialSidebar",previous:{title:"attr \u548c property \u7684\u533a\u522b",permalink:"/issue/26043"},next:{title:"\u5982\u4f55\u8bc6\u522b\u6d4f\u89c8\u5668\u7684\u7c7b\u578b",permalink:"/issue/26136"}},c={},a=[];function d(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u4e00\u6b21\u6027\u63d2\u5165\u591a\u4e2a-dom-\u8282\u70b9\u8003\u8651\u6027\u80fd",children:"\u4e00\u6b21\u6027\u63d2\u5165\u591a\u4e2a DOM \u8282\u70b9\uff0c\u8003\u8651\u6027\u80fd"})}),"\n",(0,s.jsx)(n.p,{children:"DOM \u6027\u80fd"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"DOM \u64cd\u4f5c\u975e\u5e38\u201c\u6602\u8d35\u201d\uff0c\u907f\u514d\u9891\u7e41\u7684 DOM \u64cd\u4f5c"}),"\n",(0,s.jsx)(n.li,{children:"\u5bf9 DOM \u67e5\u8be2\u505a\u7f13\u5b58"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u4e0d\u7f13\u5b58 DOM \u67e5\u8be2\u7ed3\u679c\nfor (let i = 0; i < document.getElementsByTagName('p').length; i++) {}\n// \u7f13\u5b58 DOM \u67e5\u8be2\u7ed3\u679c\nconst length = document.getElementsByTagName('p').length\nfor (let i = 0; i < length; i++) {}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5c06\u9891\u7e41\u64cd\u4f5c\u6539\u4e3a\u4e00\u6b21\u6027\u64cd\u4f5c"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const list = document.getElementById('list')\n// \u521b\u5efa\u4e00\u4e2a\u6587\u6863\u7247\u6bb5\uff0c\u6b64\u65f6\u8fd8\u6ca1\u6709\u63d2\u5165\u5230 DOM \u7ed3\u6784\u4e2d\nconst frag = document.createDocumentFragment()\nfor (let i=0; i< 10; i++){\n    const li = document.createElement('li')\n    li.innerHTML = `List item ${i}`\n    // \u5148\u63d2\u5165\u5230\u6587\u6863\u7247\u6bb5\u4e2d\n    frag.appendChild(li)\n}\n// \u90fd\u5b8c\u6210\u540e\uff0c\u518d\u7edf\u4e00\u63d2\u5165\u5230 DOM \u7ed3\u6784\u4e2d\nlist.appendChild(frag)\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);