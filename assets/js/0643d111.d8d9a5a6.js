"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8089],{48845:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(74848),o=t(28453);const r={date:"2021-12-16 22:16:46",slug:"/28654"},a="\u624b\u5199\u7b80\u6613\u7248 Vue 2.0.1",i={id:"vuejs-use/vue-study/28654",title:"\u624b\u5199\u7b80\u6613\u7248 Vue 2.0.1",description:"\u7b80\u6613\u7248 Vue 2.0.1\uff0c\u5b9e\u73b0\u7b80\u5355\u529f\u80fd",source:"@site/docs/3.vuejs-use/2.vue-study/28654.md",sourceDirName:"3.vuejs-use/2.vue-study",slug:"/28654",permalink:"/docs/28654",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2021-12-16 22:16:46",slug:"/28654"},sidebar:"tutorialSidebar",previous:{title:"\u624b\u5199\u7b80\u6613\u7248 Vuex",permalink:"/docs/27990"},next:{title:"\u624b\u5199\u7b80\u6613\u7248 Vue 2.0.2",permalink:"/docs/28778"}},d={},c=[];function l(n){const e={blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u624b\u5199\u7b80\u6613\u7248-vue-201",children:"\u624b\u5199\u7b80\u6613\u7248 Vue 2.0.1"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u7b80\u6613\u7248 Vue 2.0.1\uff0c\u5b9e\u73b0\u7b80\u5355\u529f\u80fd"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u54cd\u5e94\u5f0f\u5904\u7406"}),"\n",(0,s.jsx)(e.li,{children:"\u7f16\u8f91\u6a21\u677f"}),"\n",(0,s.jsx)(e.li,{children:"\u7b80\u5355\u6307\u4ee4"}),"\n",(0,s.jsx)(e.li,{children:"\u4f9d\u8d56\u6536\u96c6"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"vue",src:t(22802).A+"",width:"1104",height:"609"})}),"\n",(0,s.jsx)(e.p,{children:"\u6d4b\u8bd5\u4ee3\u7801"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Title</title>\n</head>\n<body>\n<div id="app">\n  <p>{{counter}}</p>\n  <p>{{counter}}</p>\n  <p k-text="counter"></p>\n  <p k-html="desc"></p>\n</div>\n<script src="./kvue.js"><\/script>\n<script>\n  const app = new Kvue({\n    el: \'#app\',\n    data: {\n      counter: 1,\n      desc: \'<span style="color: red">lzw. \u771f\u68d2</span>\'\n    }\n  })\n  setInterval(() => {\n    app.counter++\n  }, 1000)\n<\/script>\n</body>\n</html>\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u7b80\u6613\u7248 Vue 2.0"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"/**\n * 1\u3001\u5bf9 data \u9009\u9879\u8fdb\u884c\u54cd\u5e94\u5f0f\u5904\u7406\n * 2\u3001\u7f16\u8f91\u6a21\u677f\n * 3\u3001\u6307\u4ee4\u548c\u4e8b\u4ef6\n * 4\u3001\u4f9d\u8d56\u6536\u96c6\n */\nclass Kvue {\n  constructor(options) {\n    this.$options = options\n    this.$data = options.data\n    // \u54cd\u5e94\u5f0f\n    observe(this.$data)\n\n    // \u4ee3\u7406\u4e0b\n    proxy(this)\n\n    // compile \u7f16\u8f91\u6a21\u677f\n    new Compile(options.el, this)\n  }\n\n}\n\n\n// \u6570\u636e\u54cd\u5e94\u5f0f\nfunction defineReactive(obj, key, val) {\n  // \u9012\u5f52\u4e0b\uff0c\u517c\u5bb9 obj[key] = {a:10}\n  observe(obj[key])\n\n  // \u521b\u5efa Key\u3001Dep\u3001Watcher \u7684\u4f9d\u8d56\n  const dep = new Dep()\n\n  Object.defineProperty(obj, key, {\n    get() {\n      console.log('get', key)\n      // \u4f9d\u8d56\u6536\u96c6\n      Dep.target && dep.addDep(Dep.target)\n      return val\n    },\n    set(newVal) {\n      if (newVal !== val) {\n        console.log('set', key)\n        // \u5982\u679c newVal \u662f\u5bf9\u8c61\uff0c\u505a\u54cd\u5e94\u5f0f\u5904\u7406\uff0c\u6bd4\u5982 obj.key = {a:10}\n        observe(newVal)\n        val = newVal\n\n        // watcher \u66f4\u65b0\n        // watchers.forEach(w => w.update())\n        dep.notify()\n      }\n    }\n  })\n}\n\n// \u904d\u5386 obj, \u5bf9\u6240\u6709\u5c5e\u6027\u505a\u54cd\u5e94\u5f0f\nfunction observe(obj) {\n  if (typeof obj !== 'object' || obj == null) {\n    return\n  }\n\n  new Observer(obj)\n}\n\n\n// \u4ee3\u7406\uff0c\u5b9e\u73b0\u7684\u76ee\u7684 vm.$data.counter \u53ef\u4ee5\u901a\u8fc7 vm.counter \u62ff\u5230\nfunction proxy(vm) {\n  Object.keys(vm.$data).forEach(key => {\n    Object.defineProperty(vm, key, {\n      get() {\n        return vm.$data[key]\n      },\n      set(v) {\n        vm.$data[key] = v\n      }\n    })\n  })\n}\n\n\n// \u6839\u636e\u4e0d\u540c\u7c7b\u578b\u505a\u54cd\u5e94\u5f0f\u5904\u7406\nclass Observer {\n  constructor(value) {\n    this.value = value\n\n    if (Array.isArray(value)) {\n      // todo\n    } else {\n      this.walk(value)\n    }\n  }\n\n  walk(obj) {\n    Object.keys(obj).forEach(key => {\n      defineReactive(obj, key, obj[key])\n    })\n  }\n}\n\n// \u89e3\u6790\u6a21\u677f\uff0c1\u3001\u5904\u7406\u63d2\u503c\uff0c2\u3001\u5904\u7406\u6307\u4ee4\u548c\u4e8b\u4ef6\uff0c3\u3001\u4ee5\u4e0a\u4e24\u8005\u7684\u521d\u59cb\u5316\u548c\u66f4\u65b0\n\nclass Compile {\n  constructor(el, vm) {\n    this.$vm = vm\n    this.$el = document.querySelector(el)\n\n    if (this.$el) {\n      this.compile(this.$el)\n    }\n  }\n\n  compile(el) {\n    // \u904d\u5386 el \u5b50\u8282\u70b9\uff0c\u5224\u65ad\u7c7b\u578b\u505a\u76f8\u5e94\u7684\u5904\u7406\n    const childNodes = el.childNodes\n\n    childNodes.forEach(node => {\n      if (node.nodeType === 1) {\n        // \u5143\u7d20\n        // console.log('\u5143\u7d20', node.nodeName)\n        // \u5904\u7406 \u6307\u4ee4\u548c\u4e8b\u4ef6\n        const attrs = node.attributes\n        Array.from(attrs).forEach(attr => {\n          // k-xxx=\"abc\"\n          const attrName = attr.name\n          const exp = attr.value\n          if (attrName.startsWith('k-')) {\n            const dir = attrName.substring(2)\n            this[dir] && this[dir](node, exp)\n          }\n        })\n      } else if (this.isInter(node)) {\n        // \u6587\u672c \u63d2\u503c\u8868\u8fbe\u5f0f\n        // console.log('\u63d2\u503c', node.textContent)\n        this.compileText(node)\n      }\n\n      // \u9012\u5f52\u4e0b\n      if (node.childNodes) {\n        this.compile(node)\n      }\n    })\n  }\n\n  // \u9ad8\u7ea7\u51fd\u6570\u6267\u884c dir\n  update(node, exp, dir) {\n    // 1\u3001\u521d\u59cb\u5316\n    const fn = this[dir + 'Updater']\n    fn && fn(node, this.$vm[exp])\n\n    // 2\u3001\u66f4\u65b0\u64cd\u4f5c\n    new Watcher(this.$vm, exp, function (val) {\n      fn && fn(node, val)\n    })\n  }\n\n  // \u5bf9\u5e94\u7684 k-text \u7684\u6307\u4ee4\n  text(node, exp) {\n    // node.textContent = this.$vm[exp]\n    this.update(node, exp, 'text')\n  }\n\n  textUpdater(node, value) {\n    node.textContent = value\n  }\n\n  // \u7f16\u8bd1 {{xxx}}\u6587\u672c\n  compileText(node) {\n    // node.textContent = this.$vm[RegExp.$1]\n    this.update(node, RegExp.$1, 'text')\n  }\n\n  // \u5bf9\u5e94\u7684 k-html \u7684\u6307\u4ee4\n  html(node, exp) {\n    // node.innerHTML = this.$vm[exp]\n    this.update(node, exp, 'html')\n  }\n\n  htmlUpdater(node, value) {\n    node.innerHTML = value\n  }\n\n  // \u662f\u5426\u63d2\u503c\u8868\u8fbe\u5f0f\n  isInter(node) {\n    return node.nodeType === 3 && /\\{\\{(.*)\\}\\}/.test(node.textContent)\n  }\n}\n\n// \u76d1\u7763\u5668\uff1a\u8d1f\u8d23\u4f9d\u8d56\u66f4\u65b0\uff0c\u6709\u591a\u5c11\u4e2a\u53d8\u91cf\u5c31\u6709\u591a\u5c11\u4e2a watcher\n// const watchers = []\n\nclass Watcher {\n  constructor(vm, key, updateFn) {\n    this.vm = vm\n    this.key = key\n    this.updateFn = updateFn\n\n    // watchers.push(this)\n    Dep.target = this\n    // \u76f8\u5f53\u4e8e\u8c03\u7528\u4e86\u4e00\u6b21 key \u7684 get \u65b9\u6cd5\u8fdb\u884c\u4f9d\u8d56\u6536\u9f50\n    this.vm[this.key]\n    Dep.target = null\n  }\n\n  // \u88ab Dep \u8c03\u7528\u7684\n  update() {\n    // \u6267\u884c\u5b9e\u9645\u7684\u66f4\u65b0\u64cd\u4f5c\n    this.updateFn.call(this.vm, this.vm[this.key])\n  }\n}\n\n// \u5b9e\u73b0 Dep\uff0c\u6709\u591a\u5c11\u4e2a key \u5c31\u6709\u591a\u5c11\u4e2a dep\nclass Dep {\n  constructor() {\n    this.deps = []\n  }\n\n  addDep(dep) {\n    // \u8fd9\u91cc\u7684 dep \u5176\u5b9e\u5c31\u662f watcher\n    this.deps.push(dep)\n  }\n\n  notify() {\n    // \u8fd9\u91cc\u7684 dep \u5176\u5b9e\u5c31\u662f watcher\n    this.deps.forEach(dep => dep.update())\n  }\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},22802:(n,e,t)=>{t.d(e,{A:()=>s});const s=t.p+"assets/images/20211214221640-2e1e0ad7490e57323715195516977a6e.webp"},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>i});var s=t(96540);const o={},r=s.createContext(o);function a(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);