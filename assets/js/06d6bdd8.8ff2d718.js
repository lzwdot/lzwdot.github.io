"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["8915"],{76429:function(n,e,t){t.r(e),t.d(e,{metadata:()=>o,contentTitle:()=>r,default:()=>h,assets:()=>i,toc:()=>a,frontMatter:()=>l});var o=JSON.parse('{"id":"vuejs-use/vue-study/28778","title":"\u624B\u5199\u7B80\u6613\u7248 Vue 2.0.2","description":"\u7B80\u6613\u7248 Vue 2.0.2, \u589E\u52A0\u529F\u80FD","source":"@site/docs/3.vuejs-use/2.vue-study/28778.md","sourceDirName":"3.vuejs-use/2.vue-study","slug":"/28778","permalink":"/docs/28778","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2021-12-27 14:26:47","slug":"/28778"},"sidebar":"tutorialSidebar","previous":{"title":"\u624B\u5199\u7B80\u6613\u7248 Vue 2.0.1","permalink":"/docs/28654"},"next":{"title":"\u957F\u5217\u8868\u4F18\u5316 vue \u7248","permalink":"/docs/29203"}}'),s=t("85893"),d=t("50065");let l={date:"2021-12-27 14:26:47",slug:"/28778"},r="\u624B\u5199\u7B80\u6613\u7248 Vue 2.0.2",i={},a=[];function c(n){let e={blockquote:"blockquote",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u624B\u5199\u7B80\u6613\u7248-vue-202",children:"\u624B\u5199\u7B80\u6613\u7248 Vue 2.0.2"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u7B80\u6613\u7248 Vue 2.0.2, \u589E\u52A0\u529F\u80FD"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u589E\u52A0 ",(0,s.jsx)(e.code,{children:"$mount(el)"})," \uFF0C\u4F5C\u7528\uFF1A"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u83B7\u53D6\u5BBF\u4E3B"}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"updateComponet"})}),"\n",(0,s.jsxs)(e.li,{children:["\u521B\u5EFA ",(0,s.jsx)(e.code,{children:"Watcher"})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Watcher"})," \u6539\u9020"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u80FD\u591F\u4F20\u5165 ",(0,s.jsx)(e.code,{children:"updateComponet"})]}),"\n",(0,s.jsxs)(e.li,{children:["\u548C ",(0,s.jsx)(e.code,{children:"dep"})," \u5BF9\u5E94\u5173\u7CFB ",(0,s.jsx)(e.code,{children:"1:n"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6D4B\u8BD5\u4EE3\u7801"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Title</title>\n</head>\n<body>\n<div id=\"app\"></div>\n<script src=\"./kvue.js\"><\/script>\n<script>\n  const app = new Kvue({\n    el: '#app',\n    data: {\n      counter: 1,\n    },\n    render(h) {\n      // const d1 = document.createElement('div')\n      // d1.id = 'app'\n      // const p1 = document.createElement('p')\n      // p1.textContent = this.counter\n      // d1.appendChild(p1)\n      // return d1\n\n      // \u4F7F\u7528 h \u51FD\u6570\n      return h('div', {id: 'app', title: this.counter}, [\n        h('p', null, this.counter + '')\n      ])\n    }\n  })\n  setInterval(() => {\n    app.counter++\n  }, 1000)\n<\/script>\n</body>\n</html>\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5347\u7EA7\u7248\u7684\u7B80\u6613\u7248 Vue 2.0"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"/**\n \u589E\u52A0 `$mount(el)` \uFF0C\u4F5C\u7528\uFF1A\n\n - \u83B7\u53D6\u5BBF\u4E3B\n - `updateComponet`\n - \u521B\u5EFA `Watcher`\n\n `Watcher` \u6539\u9020\n\n - \u80FD\u591F\u4F20\u5165 `updateComponet`\n - \u548C `dep` \u5BF9\u5E94\u5173\u7CFB `1:n`\n */\n\n\n/**\n * 1\u3001\u5BF9 data \u9009\u9879\u8FDB\u884C\u54CD\u5E94\u5F0F\u5904\u7406\n * 2\u3001\u7F16\u8F91\u6A21\u677F\n * 3\u3001\u6307\u4EE4\u548C\u4E8B\u4EF6\n * 4\u3001\u4F9D\u8D56\u6536\u96C6\n */\nclass Kvue {\n  constructor(options) {\n    this.$options = options\n    this.$data = options.data\n    // \u54CD\u5E94\u5F0F\n    observe(this.$data)\n\n    // \u4EE3\u7406\u4E0B\n    proxy(this)\n\n    // compile \u7F16\u8F91\u6A21\u677F\n    // new Compile(options.el, this)\n\n    if (options.el) {\n      this.$mount(options.el)\n    }\n  }\n\n  $mount(el) {\n    // \u83B7\u53D6\u5BBF\u4E3B\n    this.$el = document.querySelector(el)\n\n    // \u521B\u5EFA updateComponent\n    const updateComponent = () => {\n      // \u83B7\u53D6\u6E32\u67D3\u51FD\u6570\n      const {render} = this.$options\n      const vnode = render.call(this, this.$createElement)\n      // vnode \u53D8\u6210 dom\n      this._update(vnode)\n\n      // const parent = this.$el.parentElement\n      // parent.insertBefore(el, this.$el.nextSibling)\n      // parent.removeChild(this.$el)\n      // this.$el = el\n    }\n\n    // \u521B\u5EFA\u6839\u7EC4\u4EF6\u5BF9\u5E94\u7684 Watcher\n    new Watcher(this, updateComponent)\n  }\n\n  // h \u51FD\u6570\n  $createElement(tag, props, children) {\n    return {tag, props, children}\n  }\n\n  _update(vnode) {\n    const prevVnode = this._vnode\n\n    if (!prevVnode) {\n      // init\n      this.__patch__(this.$el, vnode)\n\n    } else {\n      // update\n      this.__patch__(prevVnode, vnode)\n    }\n  }\n\n  __patch__(oldVnode, vnode) {\n    // dom\n    if (oldVnode.nodeType) {\n      const parent = oldVnode.parentElement\n      const refElm = oldVnode.nextSibling\n      const el = this.createElm(vnode)\n      parent.insertBefore(el, refElm)\n      parent.removeChild(oldVnode)\n\n      // \u4FDD\u5B58\u5F53\u524D vnode\n      this._vnode = vnode\n    } else {\n      // update\n      // \u83B7\u53D6 el\n      const el = vnode.el = oldVnode.el\n      //\u76F8\u540C\u8282\u70B9\n      if (oldVnode.tag === vnode.tag) {\n        // props \u65B0\u65E7\u5BF9\u6BD4\n        const oldProps = oldVnode.props || {}\n        const newProps = vnode.props || {}\n\n        // \u5C5E\u6027\u66F4\u65B0\n        for (const key in oldProps) {\n          const oldValue = oldProps[key]\n          const newValue = newProps[key]\n          if (oldValue !== newValue) {\n            el.setAttribute(key, newValue)\n          }\n        }\n\n        // \u5C5E\u6027\u5220\u9664\n        for (const key in oldProps) {\n          if (!(key in newProps)) {\n            el.removeAttribute(key)\n          }\n        }\n\n        // children\n        const oldCh = oldVnode.children\n        const newCh = vnode.children\n        if (typeof newCh === 'string') {\n          if (typeof oldCh === 'string') {\n            // \u65B0\u65E7\u6587\u672C\u90FD\u5B58\u5728\u4E14\u4E0D\u540C\n            if (oldCh !== newCh) {\n              el.textContent = newCh\n            }\n          } else {\n            // \u65E7\u7684\u6CA1\u6709\u6587\u672C\n            el.textContent = newCh\n          }\n        }else{\n          // children\n          if (typeof oldCh === 'string') {\n            el.innerHTML = ''\n            newCh.forEach(child => this.createElm(child))\n          } else {\n            // updateChildren\n            this.updateChildren(el, oldCh, newCh)\n          }\n        }\n      }\n    }\n  }\n\n  createElm(vnode) {\n    const el = document.createElement(vnode.tag)\n    // props\n    if (vnode.props) {\n      for (const key in vnode.props) {\n        const value = vnode.props[key]\n        el.setAttribute(key, value)\n      }\n    }\n\n    // children\n    if (vnode.children) {\n      if (typeof vnode.children === 'string') {\n        // text\n        el.textContent = vnode.children\n      } else {\n        // \u9012\u5F52\n        vnode.children.forEach(n => {\n          const child = this.createElm(n)\n          el.appendChild(child)\n        })\n      }\n    }\n\n    vnode.el = el\n    return el\n  }\n\n  updateChildren(parentElm, oldCh, newCh) {\n    const len = Math.min(oldCh.length, newCh.length)\n    for (let i = 0; i < len; i++) {\n      this.__patch__(oldCh[i], newCh[i])\n    }\n\n    if (newCh.length > oldCh.length) {\n      // add\n      newCh.slice(len).forEach(child => {\n        const el = this.createElm(child)\n        parentElm.appendChild(el)\n      })\n    } else if (newCh.length < oldCh.length) {\n      // remove\n      oldCh.slice(len).forEach(child => {\n        const el = this.createElm(child)\n        parentElm.removeChild(el)\n      })\n    }\n  }\n}\n\n\n// \u6570\u636E\u54CD\u5E94\u5F0F\nfunction defineReactive(obj, key, val) {\n  // \u9012\u5F52\u4E0B\uFF0C\u517C\u5BB9 obj[key] = {a:10}\n  observe(obj[key])\n\n  // \u521B\u5EFA Key\u3001Dep\u3001Watcher \u7684\u4F9D\u8D56\n  const dep = new Dep()\n\n  Object.defineProperty(obj, key, {\n    get() {\n      console.log('get', key)\n      // \u4F9D\u8D56\u6536\u96C6\n      Dep.target && dep.addDep(Dep.target)\n      return val\n    },\n    set(newVal) {\n      if (newVal !== val) {\n        console.log('set', key)\n        // \u5982\u679C newVal \u662F\u5BF9\u8C61\uFF0C\u505A\u54CD\u5E94\u5F0F\u5904\u7406\uFF0C\u6BD4\u5982 obj.key = {a:10}\n        observe(newVal)\n        val = newVal\n\n        // watcher \u66F4\u65B0\n        // watchers.forEach(w => w.update())\n        dep.notify()\n      }\n    }\n  })\n}\n\n// \u904D\u5386 obj, \u5BF9\u6240\u6709\u5C5E\u6027\u505A\u54CD\u5E94\u5F0F\nfunction observe(obj) {\n  if (typeof obj !== 'object' || obj == null) {\n    return\n  }\n\n  new Observer(obj)\n}\n\n\n// \u4EE3\u7406\uFF0C\u5B9E\u73B0\u7684\u76EE\u7684 vm.$data.counter \u53EF\u4EE5\u901A\u8FC7 vm.counter \u62FF\u5230\nfunction proxy(vm) {\n  Object.keys(vm.$data).forEach(key => {\n    Object.defineProperty(vm, key, {\n      get() {\n        return vm.$data[key]\n      },\n      set(v) {\n        vm.$data[key] = v\n      }\n    })\n  })\n}\n\n\n// \u6839\u636E\u4E0D\u540C\u7C7B\u578B\u505A\u54CD\u5E94\u5F0F\u5904\u7406\nclass Observer {\n  constructor(value) {\n    this.value = value\n\n    if (Array.isArray(value)) {\n      // todo\n    } else {\n      this.walk(value)\n    }\n  }\n\n  walk(obj) {\n    Object.keys(obj).forEach(key => {\n      defineReactive(obj, key, obj[key])\n    })\n  }\n}\n\n// \u89E3\u6790\u6A21\u677F\uFF0C1\u3001\u5904\u7406\u63D2\u503C\uFF0C2\u3001\u5904\u7406\u6307\u4EE4\u548C\u4E8B\u4EF6\uFF0C3\u3001\u4EE5\u4E0A\u4E24\u8005\u7684\u521D\u59CB\u5316\u548C\u66F4\u65B0\n\nclass Compile {\n  constructor(el, vm) {\n    this.$vm = vm\n    this.$el = document.querySelector(el)\n\n    if (this.$el) {\n      this.compile(this.$el)\n    }\n  }\n\n  compile(el) {\n    // \u904D\u5386 el \u5B50\u8282\u70B9\uFF0C\u5224\u65AD\u7C7B\u578B\u505A\u76F8\u5E94\u7684\u5904\u7406\n    const childNodes = el.childNodes\n\n    childNodes.forEach(node => {\n      if (node.nodeType === 1) {\n        // \u5143\u7D20\n        // console.log('\u5143\u7D20', node.nodeName)\n        // \u5904\u7406 \u6307\u4EE4\u548C\u4E8B\u4EF6\n        const attrs = node.attributes\n        Array.from(attrs).forEach(attr => {\n          // k-xxx=\"abc\"\n          const attrName = attr.name\n          const exp = attr.value\n          if (attrName.startsWith('k-')) {\n            const dir = attrName.substring(2)\n            this[dir] && this[dir](node, exp)\n          }\n        })\n      } else if (this.isInter(node)) {\n        // \u6587\u672C \u63D2\u503C\u8868\u8FBE\u5F0F\n        // console.log('\u63D2\u503C', node.textContent)\n        this.compileText(node)\n      }\n\n      // \u9012\u5F52\u4E0B\n      if (node.childNodes) {\n        this.compile(node)\n      }\n    })\n  }\n\n  // \u9AD8\u7EA7\u51FD\u6570\u6267\u884C dir\n  update(node, exp, dir) {\n    // 1\u3001\u521D\u59CB\u5316\n    const fn = this[dir + 'Updater']\n    fn && fn(node, this.$vm[exp])\n\n    // 2\u3001\u66F4\u65B0\u64CD\u4F5C\n    new Watcher(this.$vm, exp, function (val) {\n      fn && fn(node, val)\n    })\n  }\n\n  // \u5BF9\u5E94\u7684 k-text \u7684\u6307\u4EE4\n  text(node, exp) {\n    // node.textContent = this.$vm[exp]\n    this.update(node, exp, 'text')\n  }\n\n  textUpdater(node, value) {\n    node.textContent = value\n  }\n\n  // \u7F16\u8BD1 {{xxx}}\u6587\u672C\n  compileText(node) {\n    // node.textContent = this.$vm[RegExp.$1]\n    this.update(node, RegExp.$1, 'text')\n  }\n\n  // \u5BF9\u5E94\u7684 k-html \u7684\u6307\u4EE4\n  html(node, exp) {\n    // node.innerHTML = this.$vm[exp]\n    this.update(node, exp, 'html')\n  }\n\n  htmlUpdater(node, value) {\n    node.innerHTML = value\n  }\n\n  // \u662F\u5426\u63D2\u503C\u8868\u8FBE\u5F0F\n  isInter(node) {\n    return node.nodeType === 3 && /\\{\\{(.*)\\}\\}/.test(node.textContent)\n  }\n}\n\n// \u76D1\u7763\u5668\uFF1A\u8D1F\u8D23\u4F9D\u8D56\u66F4\u65B0\uFF0C\u6709\u591A\u5C11\u4E2A\u53D8\u91CF\u5C31\u6709\u591A\u5C11\u4E2A watcher\n// const watchers = []\n\nclass Watcher {\n  constructor(vm, fn) {\n    this.vm = vm\n    // this.key = key\n    // this.updateFn = updateFn\n    this.getter = fn\n\n    // watchers.push(this)\n    // Dep.target = this\n    // \u76F8\u5F53\u4E8E\u8C03\u7528\u4E86\u4E00\u6B21 key \u7684 get \u65B9\u6CD5\u8FDB\u884C\u4F9D\u8D56\u6536\u9F50\n    // this.vm[this.key]\n    // Dep.target = null\n\n    this.get()\n  }\n\n  get() {\n    Dep.target = this\n    this.getter.call(this.vm)\n    Dep.target = null\n  }\n\n  // \u88AB Dep \u8C03\u7528\u7684\n  update() {\n    // \u6267\u884C\u5B9E\u9645\u7684\u66F4\u65B0\u64CD\u4F5C\n    // this.updateFn.call(this.vm, this.vm[this.key])\n    this.get()\n  }\n}\n\n// \u5B9E\u73B0 Dep\uFF0C\u6709\u591A\u5C11\u4E2A key \u5C31\u6709\u591A\u5C11\u4E2A dep\nclass Dep {\n  constructor() {\n    // this.deps = []\n    this.deps = new Set()\n  }\n\n  addDep(dep) {\n    // \u8FD9\u91CC\u7684 dep \u5176\u5B9E\u5C31\u662F watcher\n    // this.deps.push(dep)\n    this.deps.add(dep)\n  }\n\n  notify() {\n    // \u8FD9\u91CC\u7684 dep \u5176\u5B9E\u5C31\u662F watcher\n    this.deps.forEach(dep => dep.update())\n  }\n}\n"})})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return l}});var o=t(67294);let s={},d=o.createContext(s);function l(n){let e=o.useContext(d);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),o.createElement(d.Provider,{value:e},n.children)}}}]);