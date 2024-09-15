"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2855],{93506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var i=t(74848),d=t(28453);const l={date:"2020-11-06 16:32:19",slug:"/26811"},s="Vue \u7ec4\u4ef6\u4e4b\u95f4\u5982\u4f55\u901a\u8baf",o={id:"vuejs-use/26811",title:"Vue \u7ec4\u4ef6\u4e4b\u95f4\u5982\u4f55\u901a\u8baf",description:"\u6bd4\u5982\u505a\u4e00\u4e2a TodoList\uff0c\u6709\u4e00\u4e2a\u7236\u7ec4\u4ef6 Index.vue",source:"@site/docs/3.vuejs-use/26811.md",sourceDirName:"3.vuejs-use",slug:"/26811",permalink:"/docs/26811",draft:!1,unlisted:!1,editUrl:"/feedback",tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-11-06 16:32:19",slug:"/26811"},sidebar:"tutorialSidebar",previous:{title:"Vue \u8868\u5355",permalink:"/docs/26763"},next:{title:"Vue \u7ec4\u4ef6\u751f\u547d\u5468\u671f",permalink:"/docs/26831"}},r={},a=[];function u(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"vue-\u7ec4\u4ef6\u4e4b\u95f4\u5982\u4f55\u901a\u8baf",children:"Vue \u7ec4\u4ef6\u4e4b\u95f4\u5982\u4f55\u901a\u8baf"})}),"\n",(0,i.jsx)(n.p,{children:"\u6bd4\u5982\u505a\u4e00\u4e2a TodoList\uff0c\u6709\u4e00\u4e2a\u7236\u7ec4\u4ef6 Index.vue"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<template>\n    <div>\n        <Input @add=\"addHandler\"/>\n        <List :list=\"list\" @delete=\"deleteHandler\"/>\n    </div>\n</template>\n<script>\nimport Input from './Input'\nimport List from './List'\nexport default {\n    components: {\n        Input,\n        List\n    },\n    data() {\n        return {\n            list: [\n                {\n                    id: 'id-1',\n                    title: '\u6807\u98981'\n                },\n                {\n                    id: 'id-2',\n                    title: '\u6807\u98982'\n                }\n            ]\n        }\n    },\n    methods: {\n        addHandler(title) {\n            this.list.push({\n                id: `id-${Date.now()}`,\n                title\n            })\n        },\n        deleteHandler(id) {\n            this.list = this.list.filter(item => item.id !== id)\n        }\n    },\n    created() {\n        // eslint-disable-next-line\n        console.log('index created')\n    },\n    mounted() {\n        // eslint-disable-next-line\n        console.log('index mounted')\n    },\n    beforeUpdate() {\n        // eslint-disable-next-line\n        console.log('index before update')\n    },\n    updated() {\n        // eslint-disable-next-line\n        console.log('index updated')\n    },\n}\n<\/script>\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5b50\u7ec4\u4ef6 List.vue"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<template>\n    <div>\n        <ul>\n            <li v-for=\"item in list\" :key=\"item.id\">\n                {{item.title}}\n                <button @click=\"deleteItem(item.id)\">\u5220\u9664</button>\n            </li>\n        </ul>\n    </div>\n</template>\n<script>\nimport event from './event'\nexport default {\n    // props: ['list']\n    props: {\n        // prop \u7c7b\u578b\u548c\u9ed8\u8ba4\u503c\n        list: {\n            type: Array,\n            default() {\n                return []\n            }\n        }\n    },\n    data() {\n        return {\n        }\n    },\n    methods: {\n        deleteItem(id) {\n            this.$emit('delete', id)\n        },\n        addTitleHandler(title) {\n            // eslint-disable-next-line\n            console.log('on add title', title)\n        }\n    },\n    created() {\n        // eslint-disable-next-line\n        console.log('list created')\n    },\n    mounted() {\n        // eslint-disable-next-line\n        console.log('list mounted')\n        // \u7ed1\u5b9a\u81ea\u5b9a\u4e49\u4e8b\u4ef6\n        event.$on('onAddTitle', this.addTitleHandler)\n    },\n    beforeUpdate() {\n        // eslint-disable-next-line\n        console.log('list before update')\n    },\n    updated() {\n        // eslint-disable-next-line\n        console.log('list updated')\n    },\n    beforeDestroy() {\n        // \u53ca\u65f6\u9500\u6bc1\uff0c\u5426\u5219\u53ef\u80fd\u9020\u6210\u5185\u5b58\u6cc4\u9732\n        event.$off('onAddTitle', this.addTitleHandler)\n    }\n}\n<\/script>\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u53e6\u5916\u4e00\u4e2a\u5b50\u7ec4\u4ef6 Input.vue"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<template>\n    <div>\n        <input type=\"text\" v-model=\"title\"/>\n        <button @click=\"addTitle\">add</button>\n    </div>\n</template>\n<script>\nimport event from './event'\nexport default {\n    data() {\n        return {\n            title: ''\n        }\n    },\n    methods: {\n        addTitle() {\n            // \u8c03\u7528\u7236\u7ec4\u4ef6\u7684\u4e8b\u4ef6\n            this.$emit('add', this.title)\n            // \u8c03\u7528\u81ea\u5b9a\u4e49\u4e8b\u4ef6\n            event.$emit('onAddTitle', this.title)\n            this.title = ''\n        }\n    }\n}\n<\/script>\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5\u4e0a\uff0c\u7236\u5b50\u7ec4\u4ef6\u901a\u8baf\u662f\u901a\u8fc7 props \u548c $emit \u6765\u5b9e\u73b0"}),"\n",(0,i.jsx)(n.p,{children:"\u5144\u5f1f\u95f4\u901a\u8baf\u5219\u901a\u8fc7\u81ea\u5b9a\u4e49\u4e8b\u4ef6 event.js\uff0c\u7136\u540e\u5728\u5b50\u7ec4\u4ef6\u4e2d\u5206\u522b\u5f15\u5165 event.js"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import Vue from 'vue'\nexport default new Vue() \n"})})]})}function c(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const d={},l=i.createContext(d);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);