"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[768],{41020:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var o=n(74848),s=n(28453);const l={date:"2020-11-11 15:36:11",slug:"/26893"},r="Vue \u7684 slot \u662f\u4ec0\u4e48\uff08\u9ad8\u7ea7\uff09",a={id:"vuejs-use/26893",title:"Vue \u7684 slot \u662f\u4ec0\u4e48\uff08\u9ad8\u7ea7\uff09",description:"\u9700\u8981\u77e5\u9053\uff1a\u57fa\u672c\u4f7f\u7528\uff0c\u4f5c\u7528\u57df\u63d2\u69fd\u548c\u5177\u540d\u63d2\u69fd",source:"@site/docs/3.vuejs-use/26893.md",sourceDirName:"3.vuejs-use",slug:"/26893",permalink:"/docs/26893",draft:!1,unlisted:!1,editUrl:"/feedback",tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-11-11 15:36:11",slug:"/26893"},sidebar:"tutorialSidebar",previous:{title:"Vue \u7ec4\u4ef6\u66f4\u65b0\u4e4b\u540e\u83b7\u53d6\u6700\u65b0DOM\uff08\u9ad8\u7ea7\uff09",permalink:"/docs/26888"},next:{title:"Vue \u52a8\u6001\u7ec4\u4ef6\uff08\u9ad8\u7ea7\uff09",permalink:"/docs/26902"}},c={},d=[];function i(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"vue-\u7684-slot-\u662f\u4ec0\u4e48\u9ad8\u7ea7",children:"Vue \u7684 slot \u662f\u4ec0\u4e48\uff08\u9ad8\u7ea7\uff09"})}),"\n",(0,o.jsx)(t.p,{children:"\u9700\u8981\u77e5\u9053\uff1a\u57fa\u672c\u4f7f\u7528\uff0c\u4f5c\u7528\u57df\u63d2\u69fd\u548c\u5177\u540d\u63d2\u69fd"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"<template>\n    <div>\n        \x3c!--slot \u57fa\u672c\u4f7f\u7528--\x3e\n        <SlotDemo :url=\"website.url\">\n            {{website.title}}\n        </SlotDemo>\n        <hr>\n        \x3c!--slot \u4f5c\u7528\u57df\u63d2\u69fd--\x3e\n        <ScopedSlotDemo :url=\"website.url\">\n            <template v-slot=\"slotProps\">\n                {{slotProps.slotData.subTitle}}\n            </template>\n        </ScopedSlotDemo>\n        <hr>\n        \x3c!--slot \u5177\u540d\u63d2\u69fd--\x3e\n        <NamedSlot>\n            <template v-slot:header>\n                <h1>\u63d2\u5165 header slot \u4e2d</h1>\n            </template>\n            <p> \u63d2\u5165\u5230 main slot\u4e2d\uff0c\u5373\u672a\u547d\u540d\u7684 slot</p>\n            <template v-slot:footer>\n                <p> \u63d2\u5165\u5230 footer slot \u4e2d</p>\n            </template>\n        </NamedSlot>\n    </div>\n</template>\n<script>\n    import SlotDemo from './SlotDemo'\n    import ScopedSlotDemo from './ScopedSlotDemo'\n    import NamedSlot from './NamedSlot'\n    export default {\n        name: \"index\",\n        components: {\n            SlotDemo,\n            ScopedSlotDemo,\n            NamedSlot\n        },\n        data() {\n            return {\n                website: {\n                    url: 'http://father.cn',\n                    title: '\u7236\u7ec4\u4ef6',\n                    subTitle: '\u7236\u7ec4\u4ef6\u526f\u6807\u9898'\n                }\n            }\n        }\n    }\n<\/script> \n"})}),"\n",(0,o.jsx)(t.p,{children:"slot \u57fa\u672c\u4f7f\u7528"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'<template>\n    <a :href="url">\n        <slot>\n            \u9ed8\u8ba4\u5185\u5bb9\uff0c\u5373\u7236\u7ec4\u4ef6\u6ca1\u8bbe\u7f6e\u5185\u5bb9\u65f6\uff0c\u663e\u793a\u8fd9\u91cc\n        </slot>\n    </a>\n</template>\n<script>\n    export default {\n        name: "SlotDemo",\n        props: [\'url\'],\n        data() {\n            return {}\n        }\n    }\n<\/script> \n'})}),"\n",(0,o.jsx)(t.p,{children:"slot \u4f5c\u7528\u57df\u63d2\u69fd"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"<template>\n    <a :href=\"url\">\n        <slot :slotData=\"website\">\n            {{website.subTitle}}\x3c!--\u9ed8\u8ba4\u663e\u793a subTitle\uff0c\u5373\u7236\u7ec4\u4ef6\u6ca1\u8bbe\u7f6e\u5185\u5bb9\u65f6\uff0c\u663e\u793a\u8fd9\u91cc--\x3e\n        </slot>\n    </a>\n</template>\n<script>\n    export default {\n        name: \"SlotDemo\",\n        props: ['url'],\n        data() {\n            return {\n                website: {\n                    url: 'http://child.cn',\n                    title: '\u5b50\u7ec4\u4ef6',\n                    subTitle: '\u5b50\u7ec4\u4ef6\u526f\u6807\u9898'\n                }\n            }\n        }\n    }\n<\/script> \n"})}),"\n",(0,o.jsx)(t.p,{children:"slot \u5177\u540d\u63d2\u69fd"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'<template>\n    <div>\n        <header>\n            <slot name="header"></slot>\n        </header>\n        <main>\n            <slot></slot>\n        </main>\n        <footer>\n            <slot name="footer"></slot>\n        </footer>\n    </div>\n</template>\n<script>\n    export default {\n        name: "NamedSlot"\n    }\n<\/script> \n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const s={},l=o.createContext(s);function r(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);