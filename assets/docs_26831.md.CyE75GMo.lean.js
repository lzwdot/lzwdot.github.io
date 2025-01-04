import{_ as a,c as i,a4 as e,o as n}from"./chunks/framework.DG3u1zDB.js";const t="/assets/1719986943.BT67MqIy.webp",o=JSON.parse('{"title":"Vue 组件生命周期","description":"","frontmatter":{"date":"2020-11-06 16:59:00"},"headers":[],"relativePath":"docs/26831.md","filePath":"docs/2.vuejs-use/26831.md","lastUpdated":1735962194000}'),l={name:"docs/26831.md"};function p(h,s,d,E,r,c){return n(),i("div",null,s[0]||(s[0]=[e('<h1 id="vue-组件生命周期" tabindex="-1">Vue 组件生命周期 <a class="header-anchor" href="#vue-组件生命周期" aria-label="Permalink to &quot;Vue 组件生命周期&quot;">​</a></h1><p>生命周期</p><ul><li>挂载阶段</li><li>更新阶段</li><li>销毁阶段</li></ul><p>单个组件的生命周期</p><p><img src="'+t+`" alt="" loading="lazy"></p><p>比如一个 TodoList 功能，父组件 Index.vue，子组件 List.vue ，代码参考：</p><p><a href="https://lzwdot.com/docs/26811" target="_blank" rel="noreferrer">https://lzwdot.com/docs/26811</a></p><p>父子组件 created 和 mounted 周期</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">beforeCreate</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">created</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">beforeMount</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> children beforeCreate</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> children created</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> children beforeMount</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> children mounted</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mounted</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> children activated</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">activated</span></span></code></pre></div><p>父子组件 update 周期</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">before update</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> child before update</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> child updated</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">updated</span></span></code></pre></div><p>父子组件 destroyed 周期，通过路由切换可以触发 destroyed 事件</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">beforeDestroy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> child beforeDestroy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> child destroyed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">destroyed</span></span></code></pre></div><p>父子组件 keep-alive 周期</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">beforeCreate</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">created</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">beforeMount</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> children beforeCreate</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> children created</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> children beforeMount</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> children deactivated</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Other deactivated</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> children mounted</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mounted</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> children activated</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">activated</span></span></code></pre></div>`,15)]))}const g=a(l,[["render",p]]);export{o as __pageData,g as default};
