"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["9133"],{72280:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>f,assets:()=>c,toc:()=>u,frontMatter:()=>o});var r=JSON.parse('{"id":"async/README","title":"\u5F02\u6B65","description":"","source":"@site/issue/3.async/README.md","sourceDirName":"3.async","slug":"/async/","permalink":"/issue/async/","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u6570\u7EC4\u6C42\u548C -Array reduce","permalink":"/issue/29222"},"next":{"title":"\u8BF7\u63CF\u8FF0 event loop\uFF08\u4E8B\u4EF6\u5FAA\u73AF/\u4E8B\u4EF6\u8F6E\u8BE2\uFF09\u7684\u673A\u5236\uFF0C\u53EF\u753B\u56FE","permalink":"/issue/25763"}}'),l=n("85893"),s=n("50065"),i=n("94301");let o={},a="\u5F02\u6B65",c={},u=[];function d(e){let t={h1:"h1",header:"header",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"\u5F02\u6B65",children:"\u5F02\u6B65"})}),"\n","\n",(0,l.jsx)(i.Z,{})]})}function f(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},94301:function(e,t,n){n.d(t,{Z:()=>j});var r=n("85893");n("67294");var l=n("67026"),s=n("69369"),i=n("83012"),o=n("43115"),a=n("63150"),c=n("96025"),u=n("34403");let d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function f(e){let{href:t,children:n}=e;return(0,r.jsx)(i.Z,{href:t,className:(0,l.Z)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:s,description:i}=e;return(0,r.jsxs)(f,{href:t,children:[(0,r.jsxs)(u.Z,{as:"h2",className:(0,l.Z)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),i&&(0,r.jsx)("p",{className:(0,l.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e,n=(0,s.LM)(t),l=function(){let{selectMessage:e}=(0,o.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(m,{href:n,icon:"\uD83D\uDDC3\uFE0F",title:t.label,description:t.description??l(t.items.length)}):null}function h(e){let{item:t}=e,n=(0,a.Z)(t.href)?"\uD83D\uDCC4\uFE0F":"\uD83D\uDD17",l=(0,s.xz)(t.docId??void 0);return(0,r.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??l?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(h,{item:t});case"category":return(0,r.jsx)(p,{item:t});default:throw Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e,n=(0,s.jA)();return(0,r.jsx)(j,{items:n.items,className:t})}function j(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(g,{...e});let i=(0,s.MN)(t);return(0,r.jsx)("section",{className:(0,l.Z)("row",n),children:i.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(x,{item:e})},t))})}},43115:function(e,t,n){n.d(t,{c:function(){return a}});var r=n(67294),l=n(2933);let s=["zero","one","two","few","many","other"];function i(e){return s.filter(t=>e.includes(t))}let o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){let e=function(){let{i18n:{currentLocale:e}}=(0,l.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),o}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let l=n.select(t);return r[Math.min(n.pluralForms.indexOf(l),r.length-1)]})(n,t,e)}}},50065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var r=n(67294);let l={},s=r.createContext(l);function i(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);