"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["9896"],{77040:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>s,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>d});var i=JSON.parse('{"id":"html-css/25241","title":"float \u5E03\u5C40","description":"\u5723\u676F\u5E03\u5C40","source":"@site/issue/1.html-css/25241.md","sourceDirName":"1.html-css","slug":"/25241","permalink":"/issue/25241","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-09-25 10:55:29","slug":"/25241"},"sidebar":"tutorialSidebar","previous":{"title":"BFC \u7406\u89E3\u4E0E\u5E94\u7528","permalink":"/issue/25189"},"next":{"title":"flex \u5E03\u5C40","permalink":"/issue/25247"}}'),r=t("85893"),l=t("50065");let d={date:"2020-09-25 10:55:29",slug:"/25241"},s="float \u5E03\u5C40",a={},c=[];function o(n){let e={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"float-\u5E03\u5C40",children:"float \u5E03\u5C40"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5723\u676F\u5E03\u5C40"})}),"\n",(0,r.jsx)(e.admonition,{type:"htmlDemo",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<style>\n    #container {\n        padding-left: 200px;\n        padding-right: 150px;\n    }\n    #container .column {\n        float: left;\n    }\n    #center {\n        width: 100%;\n    }\n    #left {\n        width: 200px;\n        margin-left: -100%;\n        position: relative;\n        right: 200px;\n    }\n    #right {\n        width: 150px;\n        margin-right: -150px;\n    }\n    #footer {\n        clear: both;\n    }\n</style>\n<div id="header">header</div>\n<div id="container">\n    <div id="center" class="column">center</div>\n    <div id="left" class="column">left</div>\n    <div id="right" class="column">right</div>\n</div>\n<div id="footer">footer</div>\n'})})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u53CC\u98DE\u7FFC\u5E03\u5C40"})}),"\n",(0,r.jsx)(e.admonition,{type:"htmlDemo",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<style>\n    #container {\n        width: 100%;\n    }\n    .column {\n        float: left;\n    }\n    #center {\n        margin-left: 200px;\n        margin-right: 150px;\n    }\n    #left {\n        width: 200px;\n        margin-left: -100%;\n    }\n    #right {\n        width: 150px;\n        margin-left: -150px;\n    }\n    #footer {\n        clear: both;\n    }\n</style>\n<div id="header">header</div>\n<div id="container" class="column">\n    <div id="center">center</div>\n</div>\n<div id="left" class="column">left</div>\n<div id="right" class="column">right</div>\n<div id="footer">footer</div>   \n'})})}),"\n",(0,r.jsx)(e.p,{children:"\u5723\u676F\u5E03\u5C40\u548C\u53CC\u98DE\u7FFC\u5E03\u5C40\u7684\u6280\u672F\u603B\u7ED3"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u4F7F\u7528 float \u5E03\u5C40"}),"\n",(0,r.jsx)(e.li,{children:"\u4E24\u4FA7\u4F7F\u7528 margin \u8D1F\u503C\uFF0C\u4EE5\u4FBF\u548C\u4E2D\u95F4\u5185\u5BB9\u6A2A\u5411\u91CD\u53E0"}),"\n",(0,r.jsx)(e.li,{children:"\u9632\u6B62\u4E2D\u95F4\u5185\u5BB9\u88AB\u4E24\u4FA7\u8986\u76D6\uFF0C\u4E00\u4E2A\u7528 padding \u4E00\u4E2A\u7528 margin"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u624B\u5199 clearfix \u4EE3\u7801"})}),"\n",(0,r.jsx)(e.p,{children:"css\u6E05\u7406\u6D6E\u52A8"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:".clearfix:after{\n    content:'';\n    display:table;\n    clear:both\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u517C\u5BB9 ie \u4F4E\u7248\u672C"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:".clearfix{\n    *zoom:1\n}\n"})})]})}function h(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return s},a:function(){return d}});var i=t(67294);let r={},l=i.createContext(r);function d(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);