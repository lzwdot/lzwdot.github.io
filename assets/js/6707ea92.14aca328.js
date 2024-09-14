"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1674],{5689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var o=n(74848),s=n(28453);const r={date:"2019-02-25 07:36:01",slug:"/22650",authors:"lzw"},c="\u5982\u4f55\u7981\u7528 HTTP \u7684 DELETE PUT TRACE \u65b9\u6cd5",l={permalink:"/blog/22650",source:"@site/blog/2019/02/22650.md",title:"\u5982\u4f55\u7981\u7528 HTTP \u7684 DELETE PUT TRACE \u65b9\u6cd5",description:"1. Apache \u5728 httpd.conf \u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a",date:"2019-02-25T07:36:01.000Z",tags:[],readingTime:.25,hasTruncateMarker:!0,authors:[{name:"\u5927\u5218",title:"\u4e00\u4e2a web \u5f00\u53d1\u8005",url:"https://github.com/lzwdot",imageURL:"https://avatars.githubusercontent.com/u/24477920?v=4",key:"lzw",page:null}],frontMatter:{date:"2019-02-25 07:36:01",slug:"/22650",authors:"lzw"},unlisted:!1,prevItem:{title:"\u5b9d\u5854\u91cd\u65b0\u7f16\u8bd1 Nginx\uff0c\u9690\u85cf Server \u4fe1\u606f\u548c\u7248\u672c\u4fe1\u606f",permalink:"/blog/22789"},nextItem:{title:"Supervisor\u5b89\u88c5\u4ee5\u53ca\u914d\u7f6e\u5e38\u89c1\u95ee\u9898",permalink:"/blog/20415"}},a={authorsImageUrls:[void 0]},i=[];function d(e){const t={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Apache \u5728 ",(0,o.jsx)(t.code,{children:"httpd.conf"})," \u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'<Location "/">\n   AllowMethods GET POST\n</Location>\n'})}),"\n",(0,o.jsxs)(t.p,{children:["\u53c2\u8003\uff1a",(0,o.jsx)(t.a,{href:"https://httpd.apache.org/docs/2.4/mod/mod_allowmethods.html",children:"Apache AllowMethods \u6a21\u5757"})]}),"\n",(0,o.jsxs)(t.ol,{start:"2",children:["\n",(0,o.jsxs)(t.li,{children:["Nginx \u5728 ",(0,o.jsx)(t.code,{children:"nginx.conf"})," \u4e2d\u8fdb\u884c\u5982\u4e0b\u8bbe\u7f6e\uff1a"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"if ($request_method !~ ^(GET|HEAD|POST)$ ) {\n   return 403;\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var o=n(96540);const s={},r=o.createContext(s);function c(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);