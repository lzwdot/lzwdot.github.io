"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3398],{50347:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=t(74848),s=t(28453);const l={date:"2022-01-13 10:05:07",slug:"/29203"},r="\u957f\u5217\u8868\u4f18\u5316 vue \u7248",o={id:"vuejs-use/vue-study/29203",title:"\u957f\u5217\u8868\u4f18\u5316 vue \u7248",description:"\u957f\u5217\u8868\u5728\u5404\u79cd\u6570\u636e\u5217\u573a\u666f\u4e0b\u7ecf\u5e38\u4f7f\u7528\uff0c\u4e00\u65e6\u6570\u636e\u91cf\u975e\u5e38\u5927\uff0c\u5c31\u4f1a\u51fa\u73b0\u5361\u6bb5\uff0c\u5148\u770b\u4e0b\u957f\u5217\u8868\u4e00\u6b65\u4e00\u6b65\u8fdb\u5316",source:"@site/docs/3.vuejs-use/2.vue-study/29203.md",sourceDirName:"3.vuejs-use/2.vue-study",slug:"/29203",permalink:"/docs/29203",draft:!1,unlisted:!1,editUrl:"/feedback",tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-01-13 10:05:07",slug:"/29203"},sidebar:"tutorialSidebar",previous:{title:"\u624b\u5199\u7b80\u6613\u7248 Vue 2.0.2",permalink:"/docs/28778"},next:{title:"Vue3 \u57fa\u7840",permalink:"/docs/vuejs-use/vuejs3-base/"}},d={},c=[{value:"\u4e00\u6b21\u6027\u52a0\u8f7d",id:"\u4e00\u6b21\u6027\u52a0\u8f7d",level:3},{value:"\u4f7f\u7528\u5206\u7247\u52a0\u8f7d",id:"\u4f7f\u7528\u5206\u7247\u52a0\u8f7d",level:3},{value:"\u4f7f\u7528\u865a\u62df\u5217\u8868",id:"\u4f7f\u7528\u865a\u62df\u5217\u8868",level:3}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u957f\u5217\u8868\u4f18\u5316-vue-\u7248",children:"\u957f\u5217\u8868\u4f18\u5316 vue \u7248"})}),"\n",(0,i.jsx)(e.p,{children:"\u957f\u5217\u8868\u5728\u5404\u79cd\u6570\u636e\u5217\u573a\u666f\u4e0b\u7ecf\u5e38\u4f7f\u7528\uff0c\u4e00\u65e6\u6570\u636e\u91cf\u975e\u5e38\u5927\uff0c\u5c31\u4f1a\u51fa\u73b0\u5361\u6bb5\uff0c\u5148\u770b\u4e0b\u957f\u5217\u8868\u4e00\u6b65\u4e00\u6b65\u8fdb\u5316"}),"\n",(0,i.jsx)(e.h3,{id:"\u4e00\u6b21\u6027\u52a0\u8f7d",children:"\u4e00\u6b21\u6027\u52a0\u8f7d"}),"\n",(0,i.jsx)(e.p,{children:"\u6700\u5f00\u59cb\u4f7f\u7528\u957f\u5217\u8868\u65f6\uff0c\u4f1a\u8fd9\u6837\u5199"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"<div id=\"container\"></div>\n<script>\n  let total = 100000\n  let timer = Date.now()\n  // \u65b0\u7248\u6d4f\u89c8\u5668\u4f18\u5316\uff0c\u5f53 js \u6267\u884c\u5b8c\u6210\u540e\u4e00\u5e76\u63d2\u5165\u5230\u9875\u9762\n  for (let i = 0; i < total; i++) {\n    let li = document.createElement('li')\n    li.innerHTML = i;\n    container.appendChild(li)\n  }\n  console.log(Date.now() - timer) // js \u6267\u884c\u7684\u65f6\u95f4 == \u6267\u884c\u5f88\u5feb\n  setTimeout(() => {\n    console.log(Date.now() - timer) // \u6e32\u67d3\u5b8c\u6210\u7528\u7684\u65f6\u95f4 == \u65f6\u95f4\u592a\u957f\u4e86\n  })\n<\/script>\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u65b0\u7248\u6d4f\u89c8\u5668\u5bf9\u6570\u636e dom \u63d2\u5165\u505a\u4e86\u4f18\u5316\uff0c\u5f53 js \u6267\u884c\u5b8c\u6210\u540e\u4e00\u5e76\u63d2\u5165\u5230\u9875\u9762\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u9875\u9762\u7a7a\u767d\u9875\u5f88\u4e45"}),"\n",(0,i.jsx)(e.h3,{id:"\u4f7f\u7528\u5206\u7247\u52a0\u8f7d",children:"\u4f7f\u7528\u5206\u7247\u52a0\u8f7d"}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u4eec\u77e5\u9053 js \u662f\u5355\u7ebf\u7a0b\u7684\uff0c\u5f02\u6b65\u4e8b\u4ef6\u662f\u57fa\u4e8e ",(0,i.jsx)(e.code,{children:"EventLoop"})," \u673a\u5236\uff0c\u6267\u884c\u987a\u5e8f\u4e3a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u4ee3\u7801\u65f6\uff0c\u9047\u5230\u5b8f\u4efb\u52a1\uff08setTimeout\uff0csetInterval\uff0cAjax\uff0cDOM \u4e8b\u4ef6\uff09\u6216\u5fae\u4efb\u52a1\uff08promise\u3001async/await\uff09\uff0c\u90fd\u63a8\u5165\u5230\u76f8\u5e94\u7684\u961f\u5217"}),"\n",(0,i.jsx)(e.li,{children:"\u5f53\u540c\u6b65\u4ee3\u7801\u6267\u884c\u5b8c\uff0c\u5f00\u59cb\u6e05\u7a7a\u5fae\u4efb\u52a1\u961f\u5217"}),"\n",(0,i.jsx)(e.li,{children:"\u5fae\u4efb\u52a1\u6267\u884c\u5b8c\u540e\uff0c\u5c31\u4f1a\u5c1d\u8bd5\u8fdb\u884c dom \u6e32\u67d3"}),"\n",(0,i.jsxs)(e.li,{children:["\u4ee5\u4e0a\u5b8c\u6210\uff0c\u8fd9\u65f6 ",(0,i.jsx)(e.code,{children:"EventLoop"})," \u5f00\u59cb\u5de5\u4f5c\uff0c\u4ece\u5b8f\u4efb\u52a1\u961f\u5217\u53d6\u51fa\u4e00\u4e2a\u5b8f\u4efb\u52a1\uff08\u53ef\u80fd\u5305\u542b\u540c\u6b65\u4ee3\u7801\uff0cpromise \u7b49\uff09\u6267\u884c"]}),"\n",(0,i.jsx)(e.li,{children:"\u7136\u540e\u7ee7\u7eed\u5faa\u73af\u4e0b\u4e00\u6b21"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u4ece\u4ee5\u4e0a\u77e5\u9053\uff0c\u53ef\u4ee5 dom \u6e32\u67d3\u662f\u5728\u5b8f\u4efb\u52a1\u4e4b\u524d\u6267\u884c\uff0c\u90a3\u4e48\u53ef\u4ee5\u901a\u8fc7\u6539\u8fdb\u4e0b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"<div id=\"container\"></div>\n<script>\n  let total = 100000\n  let timer = Date.now()\n  // \u65b0\u7248\u6d4f\u89c8\u5668\u4f18\u5316\uff0c\u5f53 js \u6267\u884c\u5b8c\u6210\u540e\u4e00\u5e76\u63d2\u5165\u5230\u9875\u9762\n  let index = 0 // \u504f\u79fb\u91cf\n  let id = 0 // \u9012\u589e\u7684\u5185\u5bb9\n  function load() {\n    index += 50\n    if (index < total) {\n      // setTimeout \u548c requestAnimationFrame \u90fd\u662f\u5b8f\u4efb\u52a1\n      // requestAnimationFrame \u53ef\u4ee5\u914d\u5408\u6d4f\u89c8\u5668\u7684\u5237\u65b0\u9891\u7387\uff0c\u6548\u679c\u53ef\u80fd\u597d\u70b9\n      setTimeout(() => { // \u5206\u7247\u6e32\u67d3\uff0c\u56e0\u4e3a\u5b9a\u65f6\u5668\u662f\u4e00\u4e2a\u5b8f\u4efb\u52a1\uff0c\u4f1a\u7b49\u5f85 ui \u6e32\u67d3\u5b8c\u6210\u540e\u6267\u884c\n        let fragment = document.createDocumentFragment() // ie \u6d4f\u89c8\u5668 \u9700\u8981\u4f7f\u7528\u6587\u6863\u788e\u7247\n        // \u5148\u6e32\u67d3 50 \u4e2a\uff0c\u7b49\u5f85\u6e32\u67d3\u5b8c\u6210\u540e\uff0c\u518d\u6e32\u67d3 50 \u4e2a\n        for (let i = 0; i < 50; i++) {\n\n          let li = document.createElement('li')\n          li.innerHTML = id++\n          fragment.appendChild(li)\n        }\n        container.appendChild(fragment)\n        load()\n      }, 0)\n    }\n  }\n\n  load()  \n<\/script>\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528 setTimeout \u5b8f\u4efb\u52a1\u5148\u6e32\u67d3 50 \u4e2a dom\uff0c\u8fd9\u6837\u5c31\u80fd\u8fdb\u884c\u5206\u7247\u52a0\u8f7d\uff0c\u9875\u9762\u5feb\u901f\u663e\u793a\u5185\u5bb9\uff0c\u4f46\u4f9d\u7136\u5b58\u5728\u9875\u9762\u5361\u987f\u7684\u95ee\u9898"}),"\n",(0,i.jsx)(e.h3,{id:"\u4f7f\u7528\u865a\u62df\u5217\u8868",children:"\u4f7f\u7528\u865a\u62df\u5217\u8868"}),"\n",(0,i.jsx)(e.p,{children:"\u9875\u9762\u5361\u987f\u7684\u6839\u672c\u539f\u56e0\uff0c\u8fd8\u662f dom \u592a\u591a\u4e86\uff0c\u4f7f\u7528\u865a\u62df\u5217\u8868\uff0c\u53ea\u6e32\u67d3\u5f53\u524d\u7684\u53ef\u89c6\u5316\u533a\u57df\uff0c\u8fd9\u91cc\u91c7\u7528 vue \u6765\u5b9e\u73b0"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u53c2\u8003\u5b9e\u73b0\uff1a",(0,i.jsx)(e.a,{href:"https://github.com/tangbc/vue-virtual-scroll-list/tree/v1.4.7",children:"https://github.com/tangbc/vue-virtual-scroll-list/tree/v1.4.7"})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6587\u4ef6 ",(0,i.jsx)(e.code,{children:"App.vue"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5305\u542b\u4e24\u4e2a\u7ec4\u4ef6 ",(0,i.jsx)(e.code,{children:"VirtualList"})," \u548c ",(0,i.jsx)(e.code,{children:"Item"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"mockjs"})," \u751f\u4ea7 mock \u6570\u636e"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:'<template>\n  <div id="app">\n    \x3c!-- \u53ea\u663e\u793a\u53ef\u89c6\u533a\u57df--\x3e\n    \x3c!-- 1\u3001\u5217\u8868\u6bcf\u4e00\u9879\u591a\u9ad8\uff0c\u7b97\u51fa\u4e00\u4e2a\u6eda\u52a8\u6761\u6765--\x3e\n    \x3c!-- 2\u3001variable \u8fd9\u4e2a\u9ad8\u5ea6\u4e0d\u4e00\u5b9a\u591a\u9ad8\u4e86 --\x3e\n    <VirtualList :size="100" :remain="8" :items="items" :variable="true">\n      <Item slot-scope="{item}" :item="item"></Item>\n    </VirtualList>\n  </div>\n</template>\n\n<script>\n\nimport VirtualList from \'./components/virtual-list\'\nimport Item from \'./components/item\'\nimport mock from \'mockjs\'\n\nlet items = []\nfor (let i = 0; i < 10000; i++) {\n  items.push({id: i, value: mock.Random.sentence(5, 50)})\n}\n\nexport default {\n  name: \'App\',\n  components: {\n    VirtualList,\n    Item\n  },\n  data() {\n    return {items}\n  }\n}\n<\/script>\n\n<style>\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n</style>\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u7ec4\u4ef6 ",(0,i.jsx)(e.code,{children:"components/Item.vue"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u63a5\u6536 ",(0,i.jsx)(e.code,{children:"item"})," \u5bf9\u8c61\uff0c\u663e\u793a\u503c"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:'<template>\n  <div style="border: 1px solid red; padding: 20px 0">\n    {{ item.value }}\n  </div>\n</template>\n\n<script>\nexport default {\n  name: "item",\n  props: {\n    item: Object\n  }\n}\n<\/script>\n'})}),"\n",(0,i.jsxs)(e.p,{children:["\u6700\u6838\u5fc3\u7684 ",(0,i.jsx)(e.code,{children:"components/virtual-list.vue"})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u63a5\u6536\u56db\u4e2a\u53c2\u6570"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"size"}),": \u6bcf\u4e00\u9879\u7684\u9ad8\u5ea6"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"remain"}),": \u53ef\u89c6\u533a\u57df\u663e\u793a\u591a\u5c11\u4e2a"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"items"}),": \u6570\u636e\u6e90"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"variable"}),": \u6bcf\u9879\u9ad8\u5ea6\u662f\u5426\u56fa\u5b9a"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["html \u7ed3\u6784\uff1a\u53ef\u89c6\u533a\u57df ",(0,i.jsx)(e.code,{children:'ref="viewport"'})," , \u6eda\u52a8\u6761 ",(0,i.jsx)(e.code,{children:'ref="viewport"'})," \u548c\u6570\u636e\u5217\u8868 ",(0,i.jsx)(e.code,{children:'class="scroll-list"'})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u52a0\u8f7d\u5b8c\u6210\u540e\uff0c\u8c03\u7528 ",(0,i.jsx)(e.code,{children:"cacheList"})," \u65b9\u6cd5\u5148\u7f13\u5b58\u6bcf\u4e2a dom \u7684\u9ad8\u5ea6\uff0c\u9876\u90e8\uff0c\u5e95\u90e8\u4f4d\u7f6e\uff1b\u6bcf\u6b21\u6e32\u67d3\u540e\uff0c\u66f4\u65b0\u7f13\u5b58\u4e3a\u5b9e\u9645\u7684\u9ad8\u5ea6\uff0c\u9876\u90e8\uff0c\u5e95\u90e8\u4f4d\u7f6e"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5f53 ",(0,i.jsx)(e.code,{children:"variable"})," \u4e3a ",(0,i.jsx)(e.code,{children:"true"})," \u65f6\uff0c\u5229\u7528\u4e8c\u5206\u67e5\u627e\u7b97\u6cd5\u627e\u5230\u6eda\u52a8\u6761\u7684\u4f4d\u7f6e"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u53ef\u89c6\u533a\u57df\u663e\u793a\u7684\u5b9e\u9645 dom \u6570\u91cf\u5e94\u5927\u4e8e ",(0,i.jsx)(e.code,{children:"remain"})," \u4e2a\u6570\uff0c\u9632\u6b62\u51fa\u73b0\u7a7a\u767d"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",children:'<template>\n  \x3c!--  \u80fd\u6eda\u52a8\u7684\u76d2\u5b50--\x3e\n  <div class="viewport" ref="viewport" @scroll="scrollFn">\n    \x3c!--    \u81ea\u5df1\u505a\u4e00\u4e2a\u6eda\u52a8\u6761--\x3e\n    <div class="scroll-bar" ref="scrollBar"></div>\n    \x3c!--    \u6e32\u67d3\u7684\u5185\u5bb9--\x3e\n    <div class="scroll-list" :style="{transform:`translate3d(0,${offset}px,0)`}">\n      \x3c!--    <div class="scroll-list" :style="{top:`${offset}px`}">--\x3e\n      <div v-for="item in visibleData" :vid="item.id" :key="item.id" ref="items">\n        <slot :item="item"></slot>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport throttle from \'lodash/throttle\'\n\nexport default {\n  name: "virtual-list",\n  props: {\n    size: Number, // \u6bcf\u4e00\u9879\u7684\u9ad8\u5ea6\n    remain: Number, // \u53ef\u89c1\u591a\u5c11\u4e2a\n    items: Array,\n    variable: Boolean, //\n  },\n  data() {\n    return {\n      start: 0,\n      end: this.remain, // \u9ed8\u8ba4\u663e\u793a 8 \u4e2a\n      offset: 0,\n    }\n  },\n  created() {\n    this.scrollFn = throttle(this.handleScroll, 200, {leading: false})\n  },\n  computed: {// \u6e32\u67d3\u4e09\u4e2a\u5c4f\u5e55\n    prevCount() { // \u524d\u9762\u9884\u7559\u51e0\u4e2a\n      return Math.min(this.start, this.remain)\n    },\n    nextCount() { // \u540e\u9762\u9884\u7559\u51e0\u4e2a\n      return Math.min(this.remain, this.items.length - this.end)\n    },\n    // \u53ef\u89c1\u6570\u636e\u6709\u54ea\u4e9b\n    visibleData() {\n      // \u6839\u636e start \u548c end \u622a\u53d6\n      let start = this.start - this.prevCount\n      let end = this.end + this.nextCount\n      return this.items.slice(start, end)\n    }\n  },\n  mounted() {\n    // \u53ef\u89c6\u533a\u57df\u9ad8\u5ea6\n    this.$refs.viewport.style.height = this.size * this.remain + \'px\'\n    // \u5b9e\u9645\u6eda\u52a8\u6761\u9ad8\u5ea6\n    this.$refs.scrollBar.style.height = this.items.length * this.size + \'px\'\n\n    // \u5982\u679c\u52a0\u8f7d\u5b8c\u6bd5\uff0c\u9700\u8981\u7f13\u5b58\u6bcf\u4e00\u9879\u7684\u9ad8\u5ea6\n    // 1\u3001\u5148\u8bb0\u5f55\u597d\uff0c\u7b49\u4e00\u4f1a\u6eda\u52a8\u7684\u65f6\u5019\uff0c\u53bb\u6e32\u67d3\u9875\u9762\u662f\u83b7\u53d6\u771f\u5b9e dom \u7684\u9ad8\u5ea6\uff0c\u6765\u66f4\u65b0\u7f13\u5b58\u5185\u5bb9\n    // 2\u3001\u518d\u91cd\u65b0\u8ba1\u7b97\u6eda\u52a8\u6761\u7684\u9ad8\u5ea6\n    this.cacheList()\n  },\n  updated() {\n    // \u9875\u9762\u6e32\u67d3\u5b8c\u6210\u540e\uff0c\u9700\u8981\u6839\u636e\u5f53\u524d\u5c55\u793a\u7684\u6570\u636e\uff0c\u66f4\u65b0\u7f13\u5b58\u533a\u7684\u5185\u5bb9\n    this.$nextTick(() => {\n      // \u6839\u636e\u5f53\u524d\u663e\u793a\u7684\uff0c\u66f4\u65b0\u7f13\u5b58\u4e2d\u7684 height bottom top\uff0c\u6700\u7ec8\u66f4\u65b0\u6eda\u52a8\u6761\u7684\u9ad8\u5ea6\n      let nodes = this.$refs.items // \u83b7\u53d6\u771f\u5b9e\u7684\u8282\u70b9\n      if (!(nodes && nodes.length > 0)) {\n        return\n      }\n      nodes.forEach(node => {\n        let {height} = node.getBoundingClientRect() // \u771f\u5b9e\u7684\u9ad8\u5ea6\n        // \u66f4\u65b0\u7f13\u5b58\u4e2d\u8001\u7684\u9ad8\u5ea6\n        let id = node.getAttribute(\'vid\') - 0\n        let oldHeight = this.positions[id].height\n        let val = oldHeight - height // \u8ba1\u7b97\u5f53\u524d\u7684\u9ad8\u5ea6\u548c\u4e4b\u524d\u7684\u9ad8\u5ea6\u662f\u5426\u53d8\u5316\n        if (val) { // \u6ca1\u53d8\u5316\u7684\u8bdd\uff0c\u5c31\u4e0d\u7528\u4efb\u4f55\u64cd\u4f5c\u4e86\n          this.positions[id].height = height\n          this.positions[id].bottom = this.positions[id].bottom - val // \u5e95\u90e8\u589e\u52a0\u4e86\n          // \u94fe\u8868 \u5c06\u540e\u7eed\u7684\u6240\u6709\u4eba \u90fd\u8981\u5411\u540e\u79fb\u52a8\n          for (let i = id + 1; i < this.positions.length; i++) {\n            this.positions[i].top = this.positions[i - 1].bottom\n            this.positions[i].bottom = this.positions[i].bottom - val\n          }\n        }\n      })\n      // \u53ea\u8981\u66f4\u65b0\u8fc7\uff0c\u4f1a\u8ba1\u7b97\u51fa\u6eda\u52a8\u6761\u7684\u6700\u65b0\u9ad8\u5ea6\n      this.$refs.scrollBar.style.height = this.positions[this.positions.length - 1].bottom + \'px\'\n      // \u5c31\u662f\u52a8\u6001\u8ba1\u7b97\u6eda\u52a8\u6761\u7684\u9ad8\u5ea6\n    })\n  },\n  methods: {\n    getStartIndex(value) { // \u67e5\u627e\u5f53\u524d\u6eda\u52a8\u7684\u9700\u8981\u627e\u5230\u7684\u503c\n      let start = 0 // \u5f00\u59cb\n      let end = this.positions.length - 1 // \u7ed3\u675f\u4f4d\u7f6e\n      let temp = null\n      while (start <= end) {\n        let middleIndex = parseInt((start + end) / 2);\n        let middleValue = this.positions[middleIndex].bottom // \u627e\u5230\u5f53\u524d\u7684\u4e2d\u95f4\u7684\u90a3\u4e2a\u4eba\u7684\u7ed3\u5c3e\u70b9\n        if (middleValue == value) { // \u5982\u679c\u76f4\u63a5\u627e\u5230\u4e86\uff0c\u5c31\u8fd4\u56de\u5f53\u524d\u7684\u4e0b\u4e00\u4e2a\u4eba\n          return middleIndex + 1\n        } else if (middleValue < value) { // \u5f53\u524d\u8981\u67e5\u627e\u7684\u4eba\uff0c\u5728\u53f3\u8fb9\n          start = middleIndex + 1\n        } else if (middleValue > value) { // \u5f53\u524d\u8981\u67e5\u627e\u7684\u4eba\uff0c\u5728\u5de6\u8fb9\n          if (temp == null || temp > middleIndex) {\n            temp = middleIndex // \u627e\u5230\u8303\u56f4\n          }\n          end = middleIndex - 1\n        }\n      }\n      return temp\n    },\n    cacheList() { // \u7f13\u5b58\u5f53\u524d\u9879\u7684\u9ad8\u5ea6\u548c top \u503c\uff0c\u8fd8\u6709 bottom\n      this.positions = this.items.map((item, index) => ({\n        height: this.size,\n        top: index * this.size,\n        bottom: (index + 1) * this.size\n      }))\n    },\n    handleScroll() {\n      // 1\u3001\u5148\u7b97\u51fa\u5f53\u524d\u6eda\u52a8\u8fc7\u53bb\u51e0\u4e2a\u4e86\uff0c\u5e94\u8be5\u4ece\u7b2c\u51e0\u4e2a\u5f00\u59cb\u663e\u793a\n      let scrollTop = this.$refs.viewport.scrollTop\n\n      if (this.variable) {\n        // \u5982\u679c\u6709 variable \u4f7f\u7528\u4e8c\u5206\u67e5\u627e\u627e\u5230\u5bf9\u5e94\u7684\u8bb0\u5f55\n        // \u4e8c\u5206\u67e5\u627e: \u5728\u4e00\u4e2a\u6709\u5e8f\u7684\u6570\u636e\u5217\u8868\uff0c\u5148\u5206\u6210\u4e24\u534a\uff0c\u4ece\u4e2d\u95f4\u5f00\u59cb\uff0c\u5224\u65ad\u5728\u54ea\u4e2a\u4e00\u534a\uff0c\u7136\u540e\u7ee7\u7eed\u5206\u6210\u4e24\u534a\u67e5\u627e\n        this.start = this.getStartIndex(scrollTop)\n        this.end = this.start + this.remain\n        // \u8bbe\u7f6e\u504f\u79fb\u91cf\n        this.offset = this.positions[this.start - this.prevCount] ? this.positions[this.start - this.prevCount].top : 0\n      } else {\n        // 2\u3001\u83b7\u53d6\u5f53\u524d\u5e94\u8be5\u4ece\u7b2c\u51e0\u4e2a\u5f00\u59cb\u6e32\u67d3\n        this.start = Math.floor(scrollTop / this.size)  // \u5df2\u6eda\u52a8\u7684\u9ad8\u5ea6/\u6bcf\u4e00\u9879\u7684\u9ad8\u5ea6 = \u5df2\u6eda\u52a8\u7684\u4e2a\u6570\uff0c \u9700\u8981\u53d6\u6574\n        // 3\u3001\u8ba1\u7b97\u5f53\u524d\u7ed3\u5c3e\u7684\u4f4d\u7f6e\n        this.end = this.start + this.remain // \u5f53\u524d\u53ef\u6e32\u67d3\u7684\u533a\u57df\n        // \u5b9a\u4e49\u5f53\u524d\u53ef\u89c6\u533a\u57df\uff0c\u8ba9\u5f53\u524d\u6e32\u67d3\u7684\u5185\u5bb9\u663e\u793a\u5728\u5f53\u524d viewport \u7684\u53ef\u89c6\u533a\u57df\u91cc\n        // \u5982\u679c\u6709\u9884\u7559\u6e32\u67d3\uff0c\u5e94\u8be5\u628a\u8fd9\u4e2a\u4f4d\u7f6e\u518d\u5411\u4e0a\u79fb\u52a8\u5f53\u524d\u8fd9\u4e48\u591a this.size * this.prevCount\n        this.offset = this.start * this.size - this.size * this.prevCount // \u8ba9\u53ef\u89c6\u533a\u57df\u8c03\u6574\u504f\u79fb\u4f4d\u7f6e\n      }\n    }\n  },\n}\n<\/script>\n\n<style>\n.viewport {\n  overflow-y: scroll;\n  position: relative;\n}\n\n.scroll-list {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n</style>\n'})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var i=t(96540);const s={},l=i.createContext(s);function r(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);