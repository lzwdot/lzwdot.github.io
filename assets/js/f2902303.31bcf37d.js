"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["366"],{80827:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>a,frontMatter:()=>r});var i=JSON.parse('{"id":"vuejs-use/vue-study/29203","title":"\u957F\u5217\u8868\u4F18\u5316 vue \u7248","description":"\u957F\u5217\u8868\u5728\u5404\u79CD\u6570\u636E\u5217\u573A\u666F\u4E0B\u7ECF\u5E38\u4F7F\u7528\uFF0C\u4E00\u65E6\u6570\u636E\u91CF\u975E\u5E38\u5927\uFF0C\u5C31\u4F1A\u51FA\u73B0\u5361\u6BB5\uFF0C\u5148\u770B\u4E0B\u957F\u5217\u8868\u4E00\u6B65\u4E00\u6B65\u8FDB\u5316","source":"@site/docs/3.vuejs-use/2.vue-study/29203.md","sourceDirName":"3.vuejs-use/2.vue-study","slug":"/29203","permalink":"/docs/29203","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2022-01-13 10:05:07","slug":"/29203"},"sidebar":"tutorialSidebar","previous":{"title":"\u624B\u5199\u7B80\u6613\u7248 Vue 2.0.2","permalink":"/docs/28778"},"next":{"title":"Vue3 \u57FA\u7840","permalink":"/docs/vuejs-use/vuejs3-base/"}}'),s=t("85893"),l=t("50065");let r={date:"2022-01-13 10:05:07",slug:"/29203"},o="\u957F\u5217\u8868\u4F18\u5316 vue \u7248",d={},a=[{value:"\u4E00\u6B21\u6027\u52A0\u8F7D",id:"\u4E00\u6B21\u6027\u52A0\u8F7D",level:3},{value:"\u4F7F\u7528\u5206\u7247\u52A0\u8F7D",id:"\u4F7F\u7528\u5206\u7247\u52A0\u8F7D",level:3},{value:"\u4F7F\u7528\u865A\u62DF\u5217\u8868",id:"\u4F7F\u7528\u865A\u62DF\u5217\u8868",level:3}];function c(n){let e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u957F\u5217\u8868\u4F18\u5316-vue-\u7248",children:"\u957F\u5217\u8868\u4F18\u5316 vue \u7248"})}),"\n",(0,s.jsx)(e.p,{children:"\u957F\u5217\u8868\u5728\u5404\u79CD\u6570\u636E\u5217\u573A\u666F\u4E0B\u7ECF\u5E38\u4F7F\u7528\uFF0C\u4E00\u65E6\u6570\u636E\u91CF\u975E\u5E38\u5927\uFF0C\u5C31\u4F1A\u51FA\u73B0\u5361\u6BB5\uFF0C\u5148\u770B\u4E0B\u957F\u5217\u8868\u4E00\u6B65\u4E00\u6B65\u8FDB\u5316"}),"\n",(0,s.jsx)(e.h3,{id:"\u4E00\u6B21\u6027\u52A0\u8F7D",children:"\u4E00\u6B21\u6027\u52A0\u8F7D"}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u5F00\u59CB\u4F7F\u7528\u957F\u5217\u8868\u65F6\uFF0C\u4F1A\u8FD9\u6837\u5199"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"<div id=\"container\"></div>\n<script>\n  let total = 100000\n  let timer = Date.now()\n  // \u65B0\u7248\u6D4F\u89C8\u5668\u4F18\u5316\uFF0C\u5F53 js \u6267\u884C\u5B8C\u6210\u540E\u4E00\u5E76\u63D2\u5165\u5230\u9875\u9762\n  for (let i = 0; i < total; i++) {\n    let li = document.createElement('li')\n    li.innerHTML = i;\n    container.appendChild(li)\n  }\n  console.log(Date.now() - timer) // js \u6267\u884C\u7684\u65F6\u95F4 == \u6267\u884C\u5F88\u5FEB\n  setTimeout(() => {\n    console.log(Date.now() - timer) // \u6E32\u67D3\u5B8C\u6210\u7528\u7684\u65F6\u95F4 == \u65F6\u95F4\u592A\u957F\u4E86\n  })\n<\/script>\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u65B0\u7248\u6D4F\u89C8\u5668\u5BF9\u6570\u636E dom \u63D2\u5165\u505A\u4E86\u4F18\u5316\uFF0C\u5F53 js \u6267\u884C\u5B8C\u6210\u540E\u4E00\u5E76\u63D2\u5165\u5230\u9875\u9762\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4\u9875\u9762\u7A7A\u767D\u9875\u5F88\u4E45"}),"\n",(0,s.jsx)(e.h3,{id:"\u4F7F\u7528\u5206\u7247\u52A0\u8F7D",children:"\u4F7F\u7528\u5206\u7247\u52A0\u8F7D"}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u4EEC\u77E5\u9053 js \u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u5F02\u6B65\u4E8B\u4EF6\u662F\u57FA\u4E8E ",(0,s.jsx)(e.code,{children:"EventLoop"})," \u673A\u5236\uFF0C\u6267\u884C\u987A\u5E8F\u4E3A"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6267\u884C\u4EE3\u7801\u65F6\uFF0C\u9047\u5230\u5B8F\u4EFB\u52A1\uFF08setTimeout\uFF0CsetInterval\uFF0CAjax\uFF0CDOM \u4E8B\u4EF6\uFF09\u6216\u5FAE\u4EFB\u52A1\uFF08promise\u3001async/await\uFF09\uFF0C\u90FD\u63A8\u5165\u5230\u76F8\u5E94\u7684\u961F\u5217"}),"\n",(0,s.jsx)(e.li,{children:"\u5F53\u540C\u6B65\u4EE3\u7801\u6267\u884C\u5B8C\uFF0C\u5F00\u59CB\u6E05\u7A7A\u5FAE\u4EFB\u52A1\u961F\u5217"}),"\n",(0,s.jsx)(e.li,{children:"\u5FAE\u4EFB\u52A1\u6267\u884C\u5B8C\u540E\uFF0C\u5C31\u4F1A\u5C1D\u8BD5\u8FDB\u884C dom \u6E32\u67D3"}),"\n",(0,s.jsxs)(e.li,{children:["\u4EE5\u4E0A\u5B8C\u6210\uFF0C\u8FD9\u65F6 ",(0,s.jsx)(e.code,{children:"EventLoop"})," \u5F00\u59CB\u5DE5\u4F5C\uFF0C\u4ECE\u5B8F\u4EFB\u52A1\u961F\u5217\u53D6\u51FA\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF08\u53EF\u80FD\u5305\u542B\u540C\u6B65\u4EE3\u7801\uFF0Cpromise \u7B49\uFF09\u6267\u884C"]}),"\n",(0,s.jsx)(e.li,{children:"\u7136\u540E\u7EE7\u7EED\u5FAA\u73AF\u4E0B\u4E00\u6B21"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4ECE\u4EE5\u4E0A\u77E5\u9053\uFF0C\u53EF\u4EE5 dom \u6E32\u67D3\u662F\u5728\u5B8F\u4EFB\u52A1\u4E4B\u524D\u6267\u884C\uFF0C\u90A3\u4E48\u53EF\u4EE5\u901A\u8FC7\u6539\u8FDB\u4E0B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"<div id=\"container\"></div>\n<script>\n  let total = 100000\n  let timer = Date.now()\n  // \u65B0\u7248\u6D4F\u89C8\u5668\u4F18\u5316\uFF0C\u5F53 js \u6267\u884C\u5B8C\u6210\u540E\u4E00\u5E76\u63D2\u5165\u5230\u9875\u9762\n  let index = 0 // \u504F\u79FB\u91CF\n  let id = 0 // \u9012\u589E\u7684\u5185\u5BB9\n  function load() {\n    index += 50\n    if (index < total) {\n      // setTimeout \u548C requestAnimationFrame \u90FD\u662F\u5B8F\u4EFB\u52A1\n      // requestAnimationFrame \u53EF\u4EE5\u914D\u5408\u6D4F\u89C8\u5668\u7684\u5237\u65B0\u9891\u7387\uFF0C\u6548\u679C\u53EF\u80FD\u597D\u70B9\n      setTimeout(() => { // \u5206\u7247\u6E32\u67D3\uFF0C\u56E0\u4E3A\u5B9A\u65F6\u5668\u662F\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u4F1A\u7B49\u5F85 ui \u6E32\u67D3\u5B8C\u6210\u540E\u6267\u884C\n        let fragment = document.createDocumentFragment() // ie \u6D4F\u89C8\u5668 \u9700\u8981\u4F7F\u7528\u6587\u6863\u788E\u7247\n        // \u5148\u6E32\u67D3 50 \u4E2A\uFF0C\u7B49\u5F85\u6E32\u67D3\u5B8C\u6210\u540E\uFF0C\u518D\u6E32\u67D3 50 \u4E2A\n        for (let i = 0; i < 50; i++) {\n\n          let li = document.createElement('li')\n          li.innerHTML = id++\n          fragment.appendChild(li)\n        }\n        container.appendChild(fragment)\n        load()\n      }, 0)\n    }\n  }\n\n  load()  \n<\/script>\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4F7F\u7528 setTimeout \u5B8F\u4EFB\u52A1\u5148\u6E32\u67D3 50 \u4E2A dom\uFF0C\u8FD9\u6837\u5C31\u80FD\u8FDB\u884C\u5206\u7247\u52A0\u8F7D\uFF0C\u9875\u9762\u5FEB\u901F\u663E\u793A\u5185\u5BB9\uFF0C\u4F46\u4F9D\u7136\u5B58\u5728\u9875\u9762\u5361\u987F\u7684\u95EE\u9898"}),"\n",(0,s.jsx)(e.h3,{id:"\u4F7F\u7528\u865A\u62DF\u5217\u8868",children:"\u4F7F\u7528\u865A\u62DF\u5217\u8868"}),"\n",(0,s.jsx)(e.p,{children:"\u9875\u9762\u5361\u987F\u7684\u6839\u672C\u539F\u56E0\uFF0C\u8FD8\u662F dom \u592A\u591A\u4E86\uFF0C\u4F7F\u7528\u865A\u62DF\u5217\u8868\uFF0C\u53EA\u6E32\u67D3\u5F53\u524D\u7684\u53EF\u89C6\u5316\u533A\u57DF\uFF0C\u8FD9\u91CC\u91C7\u7528 vue \u6765\u5B9E\u73B0"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u53C2\u8003\u5B9E\u73B0\uFF1A",(0,s.jsx)(e.a,{href:"https://github.com/tangbc/vue-virtual-scroll-list/tree/v1.4.7",children:"https://github.com/tangbc/vue-virtual-scroll-list/tree/v1.4.7"})]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6587\u4EF6 ",(0,s.jsx)(e.code,{children:"App.vue"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5305\u542B\u4E24\u4E2A\u7EC4\u4EF6 ",(0,s.jsx)(e.code,{children:"VirtualList"})," \u548C ",(0,s.jsx)(e.code,{children:"Item"})]}),"\n",(0,s.jsxs)(e.li,{children:["\u901A\u8FC7 ",(0,s.jsx)(e.code,{children:"mockjs"})," \u751F\u4EA7 mock \u6570\u636E"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<template>\n  <div id="app">\n    \x3c!-- \u53EA\u663E\u793A\u53EF\u89C6\u533A\u57DF--\x3e\n    \x3c!-- 1\u3001\u5217\u8868\u6BCF\u4E00\u9879\u591A\u9AD8\uFF0C\u7B97\u51FA\u4E00\u4E2A\u6EDA\u52A8\u6761\u6765--\x3e\n    \x3c!-- 2\u3001variable \u8FD9\u4E2A\u9AD8\u5EA6\u4E0D\u4E00\u5B9A\u591A\u9AD8\u4E86 --\x3e\n    <VirtualList :size="100" :remain="8" :items="items" :variable="true">\n      <Item slot-scope="{item}" :item="item"></Item>\n    </VirtualList>\n  </div>\n</template>\n\n<script>\n\nimport VirtualList from \'./components/virtual-list\'\nimport Item from \'./components/item\'\nimport mock from \'mockjs\'\n\nlet items = []\nfor (let i = 0; i < 10000; i++) {\n  items.push({id: i, value: mock.Random.sentence(5, 50)})\n}\n\nexport default {\n  name: \'App\',\n  components: {\n    VirtualList,\n    Item\n  },\n  data() {\n    return {items}\n  }\n}\n<\/script>\n\n<style>\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n</style>\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u7EC4\u4EF6 ",(0,s.jsx)(e.code,{children:"components/Item.vue"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u63A5\u6536 ",(0,s.jsx)(e.code,{children:"item"})," \u5BF9\u8C61\uFF0C\u663E\u793A\u503C"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<template>\n  <div style="border: 1px solid red; padding: 20px 0">\n    {{ item.value }}\n  </div>\n</template>\n\n<script>\nexport default {\n  name: "item",\n  props: {\n    item: Object\n  }\n}\n<\/script>\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u6700\u6838\u5FC3\u7684 ",(0,s.jsx)(e.code,{children:"components/virtual-list.vue"})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u63A5\u6536\u56DB\u4E2A\u53C2\u6570"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"size"}),": \u6BCF\u4E00\u9879\u7684\u9AD8\u5EA6"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"remain"}),": \u53EF\u89C6\u533A\u57DF\u663E\u793A\u591A\u5C11\u4E2A"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"items"}),": \u6570\u636E\u6E90"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"variable"}),": \u6BCF\u9879\u9AD8\u5EA6\u662F\u5426\u56FA\u5B9A"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["html \u7ED3\u6784\uFF1A\u53EF\u89C6\u533A\u57DF ",(0,s.jsx)(e.code,{children:'ref="viewport"'})," , \u6EDA\u52A8\u6761 ",(0,s.jsx)(e.code,{children:'ref="viewport"'})," \u548C\u6570\u636E\u5217\u8868 ",(0,s.jsx)(e.code,{children:'class="scroll-list"'})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u52A0\u8F7D\u5B8C\u6210\u540E\uFF0C\u8C03\u7528 ",(0,s.jsx)(e.code,{children:"cacheList"})," \u65B9\u6CD5\u5148\u7F13\u5B58\u6BCF\u4E2A dom \u7684\u9AD8\u5EA6\uFF0C\u9876\u90E8\uFF0C\u5E95\u90E8\u4F4D\u7F6E\uFF1B\u6BCF\u6B21\u6E32\u67D3\u540E\uFF0C\u66F4\u65B0\u7F13\u5B58\u4E3A\u5B9E\u9645\u7684\u9AD8\u5EA6\uFF0C\u9876\u90E8\uFF0C\u5E95\u90E8\u4F4D\u7F6E"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5F53 ",(0,s.jsx)(e.code,{children:"variable"})," \u4E3A ",(0,s.jsx)(e.code,{children:"true"})," \u65F6\uFF0C\u5229\u7528\u4E8C\u5206\u67E5\u627E\u7B97\u6CD5\u627E\u5230\u6EDA\u52A8\u6761\u7684\u4F4D\u7F6E"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u53EF\u89C6\u533A\u57DF\u663E\u793A\u7684\u5B9E\u9645 dom \u6570\u91CF\u5E94\u5927\u4E8E ",(0,s.jsx)(e.code,{children:"remain"})," \u4E2A\u6570\uFF0C\u9632\u6B62\u51FA\u73B0\u7A7A\u767D"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<template>\n  \x3c!--  \u80FD\u6EDA\u52A8\u7684\u76D2\u5B50--\x3e\n  <div class="viewport" ref="viewport" @scroll="scrollFn">\n    \x3c!--    \u81EA\u5DF1\u505A\u4E00\u4E2A\u6EDA\u52A8\u6761--\x3e\n    <div class="scroll-bar" ref="scrollBar"></div>\n    \x3c!--    \u6E32\u67D3\u7684\u5185\u5BB9--\x3e\n    <div class="scroll-list" :style="{transform:`translate3d(0,${offset}px,0)`}">\n      \x3c!--    <div class="scroll-list" :style="{top:`${offset}px`}">--\x3e\n      <div v-for="item in visibleData" :vid="item.id" :key="item.id" ref="items">\n        <slot :item="item"></slot>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport throttle from \'lodash/throttle\'\n\nexport default {\n  name: "virtual-list",\n  props: {\n    size: Number, // \u6BCF\u4E00\u9879\u7684\u9AD8\u5EA6\n    remain: Number, // \u53EF\u89C1\u591A\u5C11\u4E2A\n    items: Array,\n    variable: Boolean, //\n  },\n  data() {\n    return {\n      start: 0,\n      end: this.remain, // \u9ED8\u8BA4\u663E\u793A 8 \u4E2A\n      offset: 0,\n    }\n  },\n  created() {\n    this.scrollFn = throttle(this.handleScroll, 200, {leading: false})\n  },\n  computed: {// \u6E32\u67D3\u4E09\u4E2A\u5C4F\u5E55\n    prevCount() { // \u524D\u9762\u9884\u7559\u51E0\u4E2A\n      return Math.min(this.start, this.remain)\n    },\n    nextCount() { // \u540E\u9762\u9884\u7559\u51E0\u4E2A\n      return Math.min(this.remain, this.items.length - this.end)\n    },\n    // \u53EF\u89C1\u6570\u636E\u6709\u54EA\u4E9B\n    visibleData() {\n      // \u6839\u636E start \u548C end \u622A\u53D6\n      let start = this.start - this.prevCount\n      let end = this.end + this.nextCount\n      return this.items.slice(start, end)\n    }\n  },\n  mounted() {\n    // \u53EF\u89C6\u533A\u57DF\u9AD8\u5EA6\n    this.$refs.viewport.style.height = this.size * this.remain + \'px\'\n    // \u5B9E\u9645\u6EDA\u52A8\u6761\u9AD8\u5EA6\n    this.$refs.scrollBar.style.height = this.items.length * this.size + \'px\'\n\n    // \u5982\u679C\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u9700\u8981\u7F13\u5B58\u6BCF\u4E00\u9879\u7684\u9AD8\u5EA6\n    // 1\u3001\u5148\u8BB0\u5F55\u597D\uFF0C\u7B49\u4E00\u4F1A\u6EDA\u52A8\u7684\u65F6\u5019\uFF0C\u53BB\u6E32\u67D3\u9875\u9762\u662F\u83B7\u53D6\u771F\u5B9E dom \u7684\u9AD8\u5EA6\uFF0C\u6765\u66F4\u65B0\u7F13\u5B58\u5185\u5BB9\n    // 2\u3001\u518D\u91CD\u65B0\u8BA1\u7B97\u6EDA\u52A8\u6761\u7684\u9AD8\u5EA6\n    this.cacheList()\n  },\n  updated() {\n    // \u9875\u9762\u6E32\u67D3\u5B8C\u6210\u540E\uFF0C\u9700\u8981\u6839\u636E\u5F53\u524D\u5C55\u793A\u7684\u6570\u636E\uFF0C\u66F4\u65B0\u7F13\u5B58\u533A\u7684\u5185\u5BB9\n    this.$nextTick(() => {\n      // \u6839\u636E\u5F53\u524D\u663E\u793A\u7684\uFF0C\u66F4\u65B0\u7F13\u5B58\u4E2D\u7684 height bottom top\uFF0C\u6700\u7EC8\u66F4\u65B0\u6EDA\u52A8\u6761\u7684\u9AD8\u5EA6\n      let nodes = this.$refs.items // \u83B7\u53D6\u771F\u5B9E\u7684\u8282\u70B9\n      if (!(nodes && nodes.length > 0)) {\n        return\n      }\n      nodes.forEach(node => {\n        let {height} = node.getBoundingClientRect() // \u771F\u5B9E\u7684\u9AD8\u5EA6\n        // \u66F4\u65B0\u7F13\u5B58\u4E2D\u8001\u7684\u9AD8\u5EA6\n        let id = node.getAttribute(\'vid\') - 0\n        let oldHeight = this.positions[id].height\n        let val = oldHeight - height // \u8BA1\u7B97\u5F53\u524D\u7684\u9AD8\u5EA6\u548C\u4E4B\u524D\u7684\u9AD8\u5EA6\u662F\u5426\u53D8\u5316\n        if (val) { // \u6CA1\u53D8\u5316\u7684\u8BDD\uFF0C\u5C31\u4E0D\u7528\u4EFB\u4F55\u64CD\u4F5C\u4E86\n          this.positions[id].height = height\n          this.positions[id].bottom = this.positions[id].bottom - val // \u5E95\u90E8\u589E\u52A0\u4E86\n          // \u94FE\u8868 \u5C06\u540E\u7EED\u7684\u6240\u6709\u4EBA \u90FD\u8981\u5411\u540E\u79FB\u52A8\n          for (let i = id + 1; i < this.positions.length; i++) {\n            this.positions[i].top = this.positions[i - 1].bottom\n            this.positions[i].bottom = this.positions[i].bottom - val\n          }\n        }\n      })\n      // \u53EA\u8981\u66F4\u65B0\u8FC7\uFF0C\u4F1A\u8BA1\u7B97\u51FA\u6EDA\u52A8\u6761\u7684\u6700\u65B0\u9AD8\u5EA6\n      this.$refs.scrollBar.style.height = this.positions[this.positions.length - 1].bottom + \'px\'\n      // \u5C31\u662F\u52A8\u6001\u8BA1\u7B97\u6EDA\u52A8\u6761\u7684\u9AD8\u5EA6\n    })\n  },\n  methods: {\n    getStartIndex(value) { // \u67E5\u627E\u5F53\u524D\u6EDA\u52A8\u7684\u9700\u8981\u627E\u5230\u7684\u503C\n      let start = 0 // \u5F00\u59CB\n      let end = this.positions.length - 1 // \u7ED3\u675F\u4F4D\u7F6E\n      let temp = null\n      while (start <= end) {\n        let middleIndex = parseInt((start + end) / 2);\n        let middleValue = this.positions[middleIndex].bottom // \u627E\u5230\u5F53\u524D\u7684\u4E2D\u95F4\u7684\u90A3\u4E2A\u4EBA\u7684\u7ED3\u5C3E\u70B9\n        if (middleValue == value) { // \u5982\u679C\u76F4\u63A5\u627E\u5230\u4E86\uFF0C\u5C31\u8FD4\u56DE\u5F53\u524D\u7684\u4E0B\u4E00\u4E2A\u4EBA\n          return middleIndex + 1\n        } else if (middleValue < value) { // \u5F53\u524D\u8981\u67E5\u627E\u7684\u4EBA\uFF0C\u5728\u53F3\u8FB9\n          start = middleIndex + 1\n        } else if (middleValue > value) { // \u5F53\u524D\u8981\u67E5\u627E\u7684\u4EBA\uFF0C\u5728\u5DE6\u8FB9\n          if (temp == null || temp > middleIndex) {\n            temp = middleIndex // \u627E\u5230\u8303\u56F4\n          }\n          end = middleIndex - 1\n        }\n      }\n      return temp\n    },\n    cacheList() { // \u7F13\u5B58\u5F53\u524D\u9879\u7684\u9AD8\u5EA6\u548C top \u503C\uFF0C\u8FD8\u6709 bottom\n      this.positions = this.items.map((item, index) => ({\n        height: this.size,\n        top: index * this.size,\n        bottom: (index + 1) * this.size\n      }))\n    },\n    handleScroll() {\n      // 1\u3001\u5148\u7B97\u51FA\u5F53\u524D\u6EDA\u52A8\u8FC7\u53BB\u51E0\u4E2A\u4E86\uFF0C\u5E94\u8BE5\u4ECE\u7B2C\u51E0\u4E2A\u5F00\u59CB\u663E\u793A\n      let scrollTop = this.$refs.viewport.scrollTop\n\n      if (this.variable) {\n        // \u5982\u679C\u6709 variable \u4F7F\u7528\u4E8C\u5206\u67E5\u627E\u627E\u5230\u5BF9\u5E94\u7684\u8BB0\u5F55\n        // \u4E8C\u5206\u67E5\u627E: \u5728\u4E00\u4E2A\u6709\u5E8F\u7684\u6570\u636E\u5217\u8868\uFF0C\u5148\u5206\u6210\u4E24\u534A\uFF0C\u4ECE\u4E2D\u95F4\u5F00\u59CB\uFF0C\u5224\u65AD\u5728\u54EA\u4E2A\u4E00\u534A\uFF0C\u7136\u540E\u7EE7\u7EED\u5206\u6210\u4E24\u534A\u67E5\u627E\n        this.start = this.getStartIndex(scrollTop)\n        this.end = this.start + this.remain\n        // \u8BBE\u7F6E\u504F\u79FB\u91CF\n        this.offset = this.positions[this.start - this.prevCount] ? this.positions[this.start - this.prevCount].top : 0\n      } else {\n        // 2\u3001\u83B7\u53D6\u5F53\u524D\u5E94\u8BE5\u4ECE\u7B2C\u51E0\u4E2A\u5F00\u59CB\u6E32\u67D3\n        this.start = Math.floor(scrollTop / this.size)  // \u5DF2\u6EDA\u52A8\u7684\u9AD8\u5EA6/\u6BCF\u4E00\u9879\u7684\u9AD8\u5EA6 = \u5DF2\u6EDA\u52A8\u7684\u4E2A\u6570\uFF0C \u9700\u8981\u53D6\u6574\n        // 3\u3001\u8BA1\u7B97\u5F53\u524D\u7ED3\u5C3E\u7684\u4F4D\u7F6E\n        this.end = this.start + this.remain // \u5F53\u524D\u53EF\u6E32\u67D3\u7684\u533A\u57DF\n        // \u5B9A\u4E49\u5F53\u524D\u53EF\u89C6\u533A\u57DF\uFF0C\u8BA9\u5F53\u524D\u6E32\u67D3\u7684\u5185\u5BB9\u663E\u793A\u5728\u5F53\u524D viewport \u7684\u53EF\u89C6\u533A\u57DF\u91CC\n        // \u5982\u679C\u6709\u9884\u7559\u6E32\u67D3\uFF0C\u5E94\u8BE5\u628A\u8FD9\u4E2A\u4F4D\u7F6E\u518D\u5411\u4E0A\u79FB\u52A8\u5F53\u524D\u8FD9\u4E48\u591A this.size * this.prevCount\n        this.offset = this.start * this.size - this.size * this.prevCount // \u8BA9\u53EF\u89C6\u533A\u57DF\u8C03\u6574\u504F\u79FB\u4F4D\u7F6E\n      }\n    }\n  },\n}\n<\/script>\n\n<style>\n.viewport {\n  overflow-y: scroll;\n  position: relative;\n}\n\n.scroll-list {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n</style>\n'})})]})}function h(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return r}});var i=t(67294);let s={},l=i.createContext(s);function r(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);