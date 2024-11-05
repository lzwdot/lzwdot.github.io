"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["707"],{28985:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"vuejs-use/26902","title":"Vue \u52A8\u6001\u7EC4\u4EF6\uFF08\u9AD8\u7EA7\uFF09","description":"\u52A8\u6001\u7EC4\u4EF6","source":"@site/docs/3.vuejs-use/26902.md","sourceDirName":"3.vuejs-use","slug":"/26902","permalink":"/docs/26902","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-11-11 17:08:24","slug":"/26902"},"sidebar":"tutorialSidebar","previous":{"title":"Vue \u7684 slot \u662F\u4EC0\u4E48\uFF08\u9AD8\u7EA7\uFF09","permalink":"/docs/26893"},"next":{"title":"Vue \u5F02\u6B65\u52A0\u8F7D\u7EC4\u4EF6\uFF08\u9AD8\u7EA7\uFF09","permalink":"/docs/26919"}}'),r=t("85893"),a=t("50065");let i={date:"2020-11-11 17:08:24",slug:"/26902"},c="Vue \u52A8\u6001\u7EC4\u4EF6\uFF08\u9AD8\u7EA7\uFF09",o={},l=[];function d(e){let n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"vue-\u52A8\u6001\u7EC4\u4EF6\u9AD8\u7EA7",children:"Vue \u52A8\u6001\u7EC4\u4EF6\uFF08\u9AD8\u7EA7\uFF09"})}),"\n",(0,r.jsx)(n.p,{children:"\u52A8\u6001\u7EC4\u4EF6"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:':is="component-name"'})," \u7684\u7528\u6CD5"]}),"\n",(0,r.jsx)(n.li,{children:"\u9700\u8981\u6839\u636E\u6570\u636E\uFF0C\u52A8\u6001\u6E32\u67D3\u7684\u573A\u666F\u3002\u5373\u7EC4\u4EF6\u7C7B\u578B\u4E0D\u786E\u5B9A"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4E3E\u4F8B\u4E00\u4E2A\u52A8\u6001\u7EC4\u4EF6 Dynamic.vue"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'<template>\n    <div>\n        \u52A8\u6001\u7EC4\u4EF6\n    </div>\n</template>\n<script>\n    export default {\n        name: "Dynamic"\n    }\n<\/script> \n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u8FC7\u52A8\u6001\u7EC4\u4EF6 ",(0,r.jsx)(n.code,{children:'<componet :is="DynamicName"/>'})," \u6765\u4F7F\u7528"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"<template>\n    <div>\n        \x3c!--\u52A8\u6001\u7EC4\u4EF6--\x3e\n        <componet :is=\"DynamicName\"/>\n        <div v-for=\"(val,key) in newsData\" :key=\"key\">\n            <componet :is=\"val.type\"/>\n        </div>\n    </div>\n</template>\n<script>\n    import Dynamic from './Dynamic'\n    export default {\n        name: \"index\",\n        components: {\n            Dynamic\n        },\n        data() {\n            return {\n                DynamicName: 'Dynamic',\n                newsData: {\n                    1: {\n                        type: 'text'\n                    },\n                    2: {\n                        type: 'image'\n                    },\n                    3: {\n                        type: 'video'\n                    }\n                }\n            }\n        }\n    }\n<\/script> \n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(67294);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);