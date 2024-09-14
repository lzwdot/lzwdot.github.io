"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5384],{20605:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var s=t(74848),a=t(28453);const l={date:"2022-01-21 15:53:39",slug:"/29246"},r="\u4ec0\u4e48\u662f PatchFlag",c={id:"vuejs-use/vuejs3-base/29246",title:"\u4ec0\u4e48\u662f PatchFlag",description:"\u7279\u5f81",source:"@site/docs/3.vuejs-use/3.vuejs3-base/29246.md",sourceDirName:"3.vuejs-use/3.vuejs3-base",slug:"/29246",permalink:"/docs/29246",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-01-21 15:53:39",slug:"/29246"},sidebar:"tutorialSidebar",previous:{title:"setup \u4e2d\u5982\u4f55\u83b7\u53d6\u7ec4\u4ef6\u5b9e\u4f8b",permalink:"/docs/29244"},next:{title:"\u4ec0\u4e48\u662f HoistStatic \u548c CacheHandler",permalink:"/docs/29248"}},o={},i=[];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u4ec0\u4e48\u662f-patchflag",children:"\u4ec0\u4e48\u662f PatchFlag"})}),"\n",(0,s.jsx)(n.p,{children:"\u7279\u5f81"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7f16\u8bd1\u6a21\u677f\u65f6\uff0c\u52a8\u6001\u8282\u70b9\u505a\u6807\u8bb0"}),"\n",(0,s.jsx)(n.li,{children:"\u6807\u8bb0\uff0c\u5206\u4e3a\u4e0d\u540c\u7684\u7c7b\u578b\uff0c\u5982 TEXT, PROPS"}),"\n",(0,s.jsx)(n.li,{children:"diff \u7b97\u6cd5\u65f6\uff0c\u53ef\u4ee5\u533a\u5206\u9759\u6001\u8282\u70b9\uff0c\u4ee5\u53ca\u4e0d\u540c\u7c7b\u578b\u7684\u52a8\u6001\u8282\u70b9"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,s.jsx)(n.a,{href:"https://vue-next-template-explorer.netlify.app",children:"https://vue-next-template-explorer.netlify.app"})," \u8fd0\u884c\u793a\u4f8b"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<div>\n  <span>hello vue3</span>\n  <span>{{msg}}</span>\n  <span :class="name">lzw</span>\n  <span :id="name">lzw</span>\n  <span :id="name" :msg="msg">{{msg}}</span>\n</div>\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u751f\u6210\u7684 AST \u6811"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"\n\nexport function render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (_openBlock(), _createElementBlock("div", null, [\n    _createElementVNode("span", null, "hello vue3"),\n    _createElementVNode("span", null, _toDisplayString(_ctx.msg), 1 /* TEXT */),\n    _createElementVNode("span", {\n      class: _normalizeClass(_ctx.name)\n    }, "lzw", 2 /* CLASS */),\n    _createElementVNode("span", { id: _ctx.name }, "lzw", 8 /* PROPS */, ["id"]),\n    _createElementVNode("span", {\n      id: _ctx.name,\n      msg: _ctx.msg\n    }, _toDisplayString(_ctx.msg), 9 /* TEXT, PROPS */, ["id", "msg"])\n  ]))\n}\n\n// Check the console for the AST\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7528 PatchFlag \u6807\u8bb0\u4f18\u5316 diff \u7b97\u6cd5\u6548\u7387"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["diff \u7b97\u6cd5\u8fd8\u662f\u4e00\u6837\u7684",(0,s.jsx)(n.br,{}),"\n","\u901a\u8fc7\u8f93\u5165\u6807\u8bb0\u6765\u4f18\u5316"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"diff",src:t(64567).A+"",width:"880",height:"1000"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},64567:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/diff-20220121162522-399530f9ca1f8a884929c6d26136b467.webp"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(96540);const a={},l=s.createContext(a);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);