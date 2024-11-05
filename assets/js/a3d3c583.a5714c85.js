"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["188"],{72877:function(t,e,n){n.r(e),n.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>l,assets:()=>u,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"vuejs-use/vue-study/27990","title":"\u624B\u5199\u7B80\u6613\u7248 Vuex","description":"\u7B80\u6613\u7248 Vuex\uFF0C\u76F4\u63A5\u5F15\u5165\u4E5F\u53EF\u4EE5\u7528","source":"@site/docs/3.vuejs-use/2.vue-study/27990.md","sourceDirName":"3.vuejs-use/2.vue-study","slug":"/27990","permalink":"/docs/27990","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2021-11-24 16:16:46","slug":"/27990"},"sidebar":"tutorialSidebar","previous":{"title":"\u624B\u5199\u7B80\u6613\u7248 VueRouter","permalink":"/docs/27988"},"next":{"title":"\u624B\u5199\u7B80\u6613\u7248 Vue 2.0.1","permalink":"/docs/28654"}}'),o=n("85893"),r=n("50065");let i={date:"2021-11-24 16:16:46",slug:"/27990"},a="\u624B\u5199\u7B80\u6613\u7248 Vuex",u={},c=[];function d(t){let e={blockquote:"blockquote",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"\u624B\u5199\u7B80\u6613\u7248-vuex",children:"\u624B\u5199\u7B80\u6613\u7248 Vuex"})}),"\n",(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsx)(e.p,{children:"\u7B80\u6613\u7248 Vuex\uFF0C\u76F4\u63A5\u5F15\u5165\u4E5F\u53EF\u4EE5\u7528"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"let Vue  // \u63D2\u4EF6\u5168\u5C40\u4F7F\u7528\n\nclass Store {\n  constructor(options) {\n    // \u4FDD\u5B58\u7528\u6237\u5B9A\u4E49\u7684 mutations,actions,getters\n    this._mutations = options.mutations\n    this._actions = options.actions\n    this._getters = options.getters\n\n\n    // \u66F4\u6B63 this \u6307\u5411\n    this.commit = this.commit.bind(this)\n    this.dispatch = this.dispatch.bind(this)\n\n    // \u5B9E\u73B0 this.getters\n    const computed = {}\n    const store = this\n    this.getters = {}\n    for (let key in this._getters) {\n      // \u7528\u6237\u5B9A\u4E49\u7684 getters \u65B9\u6CD5\n      const fn = store._getters[key]\n      // \u65E0\u53C2\u6570\u5F62\u5F0F\u8BBF\u95EE this.getters.key\n      computed[key] = () => fn(store.state)\n      // \u54CD\u5E94\u5F0F\u53EA\u8BFB\u5C5E\u6027\n      Object.defineProperty(this.getters, key, {\n        get: () => store._vm[key]\n      })\n    }\n\n    // Vue \u9ED8\u8BA4\u4F1A\u628A data \u904D\u5386\u5904\u7406\u6210\u54CD\u5E94\u5F0F\n    this._vm = new Vue({\n      data: {\n        $$state: options.state,\n      },\n      computed\n    })\n  }\n\n  // es6 get set\n  get state() {\n    return this._vm._data.$$state\n  }\n\n  set state(v) {\n    console.error('use replaceState to reset state')\n  }\n\n  commit(type, payload) {\n    const entry = this._mutations[type]\n    if (!entry) console.error('unknow mutations type')\n\n    entry(this.state, payload)\n  }\n\n  dispatch(type, payload) {\n    const entry = this._actions[type]\n    if (!entry) console.error('unknow actions type')\n\n    entry(this, payload)\n  }\n}\n\n// Vue.use \u65B9\u5F0F install.apply(this,[this,...])\nfunction install(_Vue) {\n  Vue = _Vue //\u4FDD\u5B58\u53C2\u5165\u7684 Vue\uFF0C\u4E0D\u7528\u5F15\u5165\u4E5F\u80FD\u4F7F\u7528\n\n  // \u5168\u5C40\u6DF7\u5165\uFF0C\u6302\u8F7D $store\uFF0C\u5EF6\u8FDF\u4E0B\u9762\u903B\u8F91\u5230 store \u88AB\u6DFB\u52A0\u5230 new vue \u9009\u9879\u65F6\u624D\u6267\u884C\n  Vue.mixin({\n    beforeCreate() {\n      if (this.$options.store) {\n        Vue.prototype.$store = this.$options.store\n      }\n    }\n  })\n}\n\nexport default {Store, install}\n"})})]})}function l(t={}){let{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},50065:function(t,e,n){n.d(e,{Z:function(){return a},a:function(){return i}});var s=n(67294);let o={},r=s.createContext(o);function i(t){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);