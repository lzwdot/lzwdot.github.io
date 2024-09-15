"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8522],{50985:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>i,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var l=t(74848),s=t(28453);const a={date:"2020-11-05 15:28:45",slug:"/26735"},o="Vue \u7684 computed \u548c watch",d={id:"vuejs-use/26735",title:"Vue \u7684 computed \u548c watch",description:"\u533a\u522b",source:"@site/docs/3.vuejs-use/26735.md",sourceDirName:"3.vuejs-use",slug:"/26735",permalink:"/docs/26735",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-11-05 15:28:45",slug:"/26735"},sidebar:"tutorialSidebar",previous:{title:"Vue \u4e2d\u6307\u4ee4\u3001\u63d2\u503c",permalink:"/docs/26733"},next:{title:"Vue \u7684 class \u548c style",permalink:"/docs/26743"}},r={},c=[];function u(n){const e={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"vue-\u7684-computed-\u548c-watch",children:"Vue \u7684 computed \u548c watch"})}),"\n",(0,l.jsx)(e.p,{children:"\u533a\u522b"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"computed \u6709\u7f13\u5b58\uff0cdata \u4e0d\u53d8\u5219\u4e0d\u4f1a\u91cd\u65b0\u8ba1\u7b97"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'<template>\n    <div>\n        <p>num {{num}}</p>\n        <p>double1 {{double1}}</p>\n        <input v-model="double2"/>\n    </div>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            num: 20\n        }\n    },\n    computed: {\n        double1() {\n            return this.num * 2\n        },\n        double2: {\n            get() {\n                return this.num * 2\n            },\n            set(val) {\n                this.num = val/2\n            }\n        }\n    }\n}\n<\/script>\n'})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"watch \u5982\u4f55\u6df1\u5ea6\u76d1\u542c\uff1f"}),"\n",(0,l.jsx)(e.li,{children:"watch \u76d1\u542c\u5f15\u7528\u7c7b\u578b\uff0c\u62ff\u4e0d\u5230 oldVal"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:"<template>\n    <div>\n        <input v-model=\"name\"/>\n        <input v-model=\"info.city\"/>\n    </div>\n</template>\n<script>\nexport default {\n    data() {\n        return {\n            name: '\u53cc\u8d8a',\n            info: {\n                city: '\u5317\u4eac'\n            }\n        }\n    },\n    watch: {\n        name(oldVal, val) {\n            // eslint-disable-next-line\n            console.log('watch name', oldVal, val) // \u503c\u7c7b\u578b\uff0c\u53ef\u6b63\u5e38\u62ff\u5230 oldVal \u548c val\n        },\n        info: {\n            handler(oldVal, val) {\n                // eslint-disable-next-line\n                console.log('watch info', oldVal, val) // \u5f15\u7528\u7c7b\u578b\uff0c\u62ff\u4e0d\u5230 oldVal \u3002\u56e0\u4e3a\u6307\u9488\u76f8\u540c\uff0c\u6b64\u65f6\u5df2\u7ecf\u6307\u5411\u4e86\u65b0\u7684 val\n            },\n            deep: true // \u6df1\u5ea6\u76d1\u542c\n        }\n    }\n}\n<\/script>\n"})})]})}function i(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>d});var l=t(96540);const s={},a=l.createContext(s);function o(n){const e=l.useContext(a);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),l.createElement(a.Provider,{value:e},n.children)}}}]);