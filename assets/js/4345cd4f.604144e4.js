"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9318],{20139:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=t(74848),i=t(28453);const s={date:"2020-11-16 18:27:19",slug:"/27051"},l="Vue \u6a21\u677f\u7f16\u8bd1",c={id:"vuejs-use/vuejs-principle/27051",title:"Vue \u6a21\u677f\u7f16\u8bd1",description:"with \u8bed\u6cd5",source:"@site/docs/3.vuejs-use/1.vuejs-principle/27051.md",sourceDirName:"3.vuejs-use/1.vuejs-principle",slug:"/27051",permalink:"/docs/27051",draft:!1,unlisted:!1,editUrl:"/feedback",tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-11-16 18:27:19",slug:"/27051"},sidebar:"tutorialSidebar",previous:{title:"Snabbdom \u6e90\u7801 diff \u7b97\u6cd5\u89e3\u8bf4",permalink:"/docs/27026"},next:{title:"Vue \u7ec4\u4ef6\u53ef\u7528 render \u4ee3\u66ff template",permalink:"/docs/27062"}},o={},a=[];function d(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"vue-\u6a21\u677f\u7f16\u8bd1",children:"Vue \u6a21\u677f\u7f16\u8bd1"})}),"\n",(0,r.jsx)(n.p,{children:"with \u8bed\u6cd5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u524d\u7f6e\u77e5\u8bc6\uff1aJS \u7684 with \u8bed\u6cd5"}),"\n",(0,r.jsx)(n.li,{children:"vue template complier \u5c06\u6a21\u677f\u7f16\u8bd1\u4e3a render \u51fd\u6570"}),"\n",(0,r.jsx)(n.li,{children:"\u6267\u884c render \u51fd\u6570\u751f\u6210 vnode"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"with \u8bed\u6cd5\uff0c\u4e0d\u63a8\u8350\u4f7f\u7528"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6539\u53d8 "," \u5185\u81ea\u7531\u53d8\u91cf\u7684\u67e5\u627e\u89c4\u5219\uff0c\u5f53\u505a obj \u7684\u5c5e\u6027\u6765\u67e5\u627e"]}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u627e\u4e0d\u5230\u5339\u914d\u7684 obj \u5c5e\u6027\uff0c\u5c31\u4f1a\u62a5\u9519"}),"\n",(0,r.jsx)(n.li,{children:"with \u8981\u614e\u7528\uff0c\u5b83\u6253\u7834\u4e86\u4f5c\u7528\u57df\u89c4\u5219\uff0c\u6613\u8bfb\u6027\u53d8\u5dee"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const obj = {a: 100, b: 200}\nconsole.log(obj.a)\nconsole.log(obj.b)\nconsole.log(obj.c) // undefined\n// \u4f7f\u7528 with\uff0c\u80fd\u6539\u53d8 {} \u5185\u81ea\u7531\u53d8\u91cf\u7684\u67e5\u627e\u65b9\u5f0f\n// \u5c06 {} \u5185\u81ea\u7531\u53d8\u91cf\uff0c\u5f53\u505a obj \u7684\u5c5e\u6027\u6765\u67e5\u627e\nwith (obj) {\n    console.log(a)\n    console.log(b)\n    console.log(c) // \u62a5\u9519\n} \n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6a21\u677f\u7f16\u8bd1"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6a21\u677f\u4e0d\u662f html\uff0c\u6709\u6307\u4ee4\uff0c\u63d2\u503c\uff0cJS \u8868\u8fbe\u5f0f\uff0c\u80fd\u5b9e\u73b0\u5224\u65ad\uff0c\u5faa\u73af"}),"\n",(0,r.jsx)(n.li,{children:"html \u662f\u6807\u7b7e\u8bed\u8a00\uff0c\u53ea\u6709 JS \u624d\u80fd\u5b9e\u73b0\u5224\u65ad\uff0c\u5faa\u73af\uff08\u56fe\u7075\u5b8c\u5907\u7684\uff09"}),"\n",(0,r.jsx)(n.li,{children:"\u56e0\u6b64\uff0c\u6a21\u677f\u4e00\u5b9a\u662f\u8f6c\u6362\u6210\u67d0\u79cd JS \u4ee3\u7801\uff0c\u5373\u7f16\u8bd1\u6a21\u677f"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee3\u7801\u6f14\u793a\uff0c\u9700\u8981\u5f15\u5165 vue-template-compiler"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const compiler = require(\'vue-template-compiler\')\n// \u63d2\u503c\n// const template = `<p>{{message}}</p>`\n// with(this){return createElement(\'p\',[createTextVNode(toString(message))])}\n// h -> vnode\n// createElement -> vnode\n// \u8868\u8fbe\u5f0f\n// const template = `<p>{{flag ? message : \'no message found\'}}</p>`\n// with(this){return _c(\'p\',[_v(_s(flag ? message : \'no message found\'))])}\n// \u5c5e\u6027\u548c\u52a8\u6001\u5c5e\u6027\n// const template = `\n//     <div id="div1" class="container">\n//         <img :src="imgUrl"/>\n//     </div>\n// `\n// with(this){return _c(\'div\',\n//      {staticClass:"container",attrs:{"id":"div1"}},\n//      [\n//          _c(\'img\',{attrs:{"src":imgUrl}})])}\n// \u6761\u4ef6\n// const template = `\n//     <div>\n//         <p v-if="flag === \'a\'">A</p>\n//         <p v-else>B</p>\n//     </div>\n// `\n// with(this){return _c(\'div\',[(flag === \'a\')?_c(\'p\',[_v("A")]):_c(\'p\',[_v("B")])])}\n// \u5faa\u73af\n// const template = `\n//     <ul>\n//         <li v-for="item in list" :key="item.id">{{item.title}}</li>\n//     </ul>\n// `\n// with(this){return _c(\'ul\',_l((list),function(item){return _c(\'li\',{key:item.id},[_v(_s(item.title))])}),0)}\n// \u4e8b\u4ef6\n// const template = `\n//     <button @click="clickHandler">submit</button>\n// `\n// with(this){return _c(\'button\',{on:{"click":clickHandler}},[_v("submit")])}\n// v-model\n// const template = `<input type="text" v-model="name">`\n// \u4e3b\u8981\u770b input \u4e8b\u4ef6\n// with(this){return _c(\'input\',{directives:[{name:"model",rawName:"v-model",value:(name),expression:"name"}],attrs:{"type":"text"},domProps:{"value":(name)},on:{"input":function($event){if($event.target.composing)return;name=$event.target.value}}})}\n// render \u51fd\u6570\n// \u8fd4\u56de vnode\n// patch\n// \u7f16\u8bd1\nconst res = compiler.compile(template)\nconsole.log(res.render)\n// ---------------\u5206\u5272\u7ebf--------------\n// // \u4ece vue \u6e90\u7801\u4e2d\u627e\u5230\u7f29\u5199\u51fd\u6570\u7684\u542b\u4e49\n// function installRenderHelpers (target) {\n//     target._o = markOnce;\n//     target._n = toNumber;\n//     target._s = toString;\n//     target._l = renderList;\n//     target._t = renderSlot;\n//     target._q = looseEqual;\n//     target._i = looseIndexOf;\n//     target._m = renderStatic;\n//     target._f = resolveFilter;\n//     target._k = checkKeyCodes;\n//     target._b = bindObjectProps;\n//     target._v = createTextVNode;\n//     target._e = createEmptyVNode;\n//     target._u = resolveScopedSlots;\n//     target._g = bindObjectListeners;\n//     target._d = bindDynamicKeys;\n//     target._p = prependModifier;\n// } \n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6a21\u677f\u7f16\u8bd1\u4e3a render \u51fd\u6570\uff0c\u6267\u884c render \u51fd\u6570\u8fd4\u56de vnode"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u57fa\u4e8e vnode \u518d\u6267\u884c patch \u548c diff"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 webpack vue-loader\uff0c\u4f1a\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u7f16\u8bd1\u6a21\u677f\uff08\u91cd\u8981\uff09"}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var r=t(96540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);