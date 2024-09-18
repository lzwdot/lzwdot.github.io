"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3249],{73858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});n(96540);var s=n(34164),a=n(45500),r=n(17559),o=n(44096),i=n(28027),l=n(31225),c=n(21312),d=n(39022),u=n(74848);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,o.e7)(),{title:n,description:s,date:r,tags:i,authors:l,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(a.be,{title:n,description:s,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:r}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")})]})}var h=n(5260);function p(){const e=(0,o.J_)();return(0,u.jsx)(h.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var f=n(67763),x=n(86896);function j(e){let{sidebar:t,children:n}=e;const{metadata:s,toc:a}=(0,o.e7)(),{nextItem:r,prevItem:c,frontMatter:d}=s,{hide_table_of_contents:g,toc_min_heading_level:h,toc_max_heading_level:p}=d;return(0,u.jsxs)(i.A,{sidebar:t,toc:!g&&a.length>0?(0,u.jsx)(f.A,{toc:a,minHeadingLevel:h,maxHeadingLevel:p}):void 0,children:[(0,u.jsx)(x.A,{metadata:s}),(0,u.jsx)(l.A,{children:n}),(r||c)&&(0,u.jsx)(m,{nextItem:r,prevItem:c})]})}function v(e){const t=e.content;return(0,u.jsx)(o.in,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.e3,{className:(0,s.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(p,{}),(0,u.jsx)(j,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},86896:(e,t,n)=>{n.d(t,{A:()=>x});n(96540);var s=n(34164),a=n(21312),r=n(5260),o=n(74848);function i(){return(0,o.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,o.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(r.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,o.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,o.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=n(17559),g=n(60890);function h(e){let{className:t}=e;return(0,o.jsx)(g.A,{type:"caution",title:(0,o.jsx)(d,{}),className:(0,s.A)(t,m.G.common.draftBanner),children:(0,o.jsx)(u,{})})}function p(e){let{className:t}=e;return(0,o.jsx)(g.A,{type:"caution",title:(0,o.jsx)(i,{}),className:(0,s.A)(t,m.G.common.unlistedBanner),children:(0,o.jsx)(l,{})})}function f(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(p,{...e})]})}function x(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,o.jsxs)(o.Fragment,{children:[(n||s.unlisted)&&(0,o.jsx)(f,{}),s.draft&&(0,o.jsx)(h,{})]})}},39022:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var s=n(34164),a=n(28774),r=n(74848);function o(e){const{permalink:t,title:n,subLabel:o,isNext:i}=e;return(0,r.jsxs)(a.A,{className:(0,s.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[o&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},67763:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var s=n(34164),a=n(65195);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var o=n(74848);const i="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,o.jsx)("div",{className:(0,s.A)(r.tableOfContents,"thin-scrollbar",t),children:(0,o.jsx)(a.A,{...n,linkClassName:i,linkActiveClassName:l})})}},65195:(e,t,n)=>{n.d(t,{A:()=>p});var s=n(96540),a=n(6342);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function i(e){const t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>i(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=l(i,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}var u=n(28774),m=n(74848);function g(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const h=s.memo(g);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const p=(0,a.p)(),f=c??p.tableOfContents.minHeadingLevel,x=u??p.tableOfContents.maxHeadingLevel,j=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>o({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:f,maxHeadingLevel:x});return d((0,s.useMemo)((()=>{if(i&&l)return{linkClassName:i,linkActiveClassName:l,minHeadingLevel:f,maxHeadingLevel:x}}),[i,l,f,x])),(0,m.jsx)(h,{toc:j,className:n,linkClassName:i,...g})}},58046:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var s=n(34164),a=n(21312),r=n(28774);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=n(74848);function l(e){let{permalink:t,label:n,count:a,description:l}=e;return(0,i.jsxs)(r.A,{href:t,title:l,className:(0,s.A)(o.tag,a?o.tagWithCount:o.tagRegular),children:[n,a&&(0,i.jsx)("span",{children:a})]})}const c={tags:"tags_jXut",tag:"tag_QGVx"};function d(e){let{tags:t}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("b",{children:(0,i.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,i.jsx)("ul",{className:(0,s.A)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,i.jsx)("li",{className:c.tag,children:(0,i.jsx)(l,{...e})},e.permalink)))})]})}},53465:(e,t,n)=>{n.d(t,{W:()=>c});var s=n(96540),a=n(44586);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=n.select(t),r=n.pluralForms.indexOf(a);return s[Math.min(r,s.length-1)]}(n,t,e)}}},38719:(e,t,n)=>{n.d(t,{A:()=>i});var s=n(96540),a=n(95293),r=n(74848);function o({id:e,host:t,repo:a,repoId:o,category:i,categoryId:l,mapping:c,term:d,strict:u,reactionsEnabled:m,emitMetadata:g,inputPosition:h,theme:p,lang:f,loading:x}){const[j,v]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{j||(n.e(1135).then(n.bind(n,1135)),v(!0))}),[]),j?(0,r.jsx)("giscus-widget",{id:e,host:t,repo:a,repoid:o,category:i,categoryid:l,mapping:c,term:d,strict:u,reactionsenabled:m,emitmetadata:g,inputposition:h,theme:p,lang:f,loading:x}):null}function i(e){const{colorMode:t}=(0,a.G)();let{type:n}=e;return(0,r.jsx)(o,{id:"comments",repo:"lzwdot/docusaurus",repoId:"R_kgDOLMEUdA",category:"Announcements",categoryId:"R_kgDOLMEUdA",mapping:"title",term:"Welcome to @giscus/react component!",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:t,lang:"zh-CN",loading:"lazy"})}},84948:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(96540),a=n(44586),r=n(21432);const o="htmlDemo_JfCu",i="iframeBg_qble";var l=n(74848);const c=function(e){const{siteConfig:t}=(0,a.A)(),{title:n}=t,[c,d]=(0,s.useState)(0),[u,m]=(0,s.useState)(""),g=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const t=g.current.contentWindow.document,n=!e.children.props;let s=n?e.children:e.children.props.children.props.children;n&&(s=s.match(/<body[^>]*>([\s\S]*)<\/body>/)[1]),t.open(),t.write(`<style>html,body{margin:0;padding:0}</style>${s}`),t.close(),m(u+s),g.current.onload=()=>{d(c+t.body.scrollHeight+20)}}),[]),(0,l.jsxs)("section",{className:o,children:[(0,l.jsxs)("header",{children:[(0,l.jsx)("code",{children:"\u6e90\u7801\u9884\u89c8"}),(0,l.jsx)("a",{onClick:function(){const e=window.open("");e.focus(),e.document.write(`<style>html,body{margin:0;padding:0}</style>${u}`),e.document.title=`\u4ee3\u7801\u5728\u7ebf\u8fd0\u884c | ${n}`,e.document.close()},children:"\u6253\u5f00\u7a97\u53e3"})]}),(0,l.jsx)("div",{className:i,children:(0,l.jsx)("iframe",{ref:g,height:c,frameBorder:"0",scrolling:"no",allowFullScreen:!0,width:"100%"})}),(0,l.jsxs)("details",{children:[(0,l.jsx)("summary",{children:"\u67e5\u770b\u6e90\u7801"}),(0,l.jsx)(r.A,{className:"language-jsx",children:u})]})]})}},76102:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(96540),a=n(21432);const r="jsDemo_EGeP",o="consoleLog_nNio";var i=n(74848);class l extends s.Component{constructor(e){super(e),this.state={code:"",stdout:""},this.iframeRef=s.createRef(null)}componentDidMount(){const e=this.iframeRef.current.contentWindow.document,t=!this.props.children.props?this.props.children:this.props.children.props.children.props.children,n="ts"===this.props.lang?"":`\n    <script>\n      const logs = [];\n      console.oldLog = console.log;\n      console.log = function (...str) {\n        console.oldLog(str);\n        logs.push(str.map(v=>String(v)).join(' '));\n      };  \n      ${t};\n      setTimeout(()=>{\n        for (let i = 0; i < logs.length; i++) {\n          document.write('> ', logs[i], '<br/>');\n        }\n        document.write('>');\n      });\n    <\/script>  \n    `;e.open(),e.write(n),e.close(),setTimeout((()=>{this.setState({code:t,stdout:e.body.innerHTML})}))}render(){const e={__html:this.state.stdout},t="ts"===this.props.lang?"":(0,i.jsxs)("details",{open:this.state.stdout,children:[(0,i.jsx)("summary",{children:"\u8f93\u51fa\u7ed3\u679c"}),(0,i.jsx)("pre",{className:o,dangerouslySetInnerHTML:e})]});return(0,i.jsxs)("section",{className:r,children:[(0,i.jsx)(a.A,{className:"language-jsx",children:this.state.code}),(0,i.jsx)("iframe",{ref:this.iframeRef}),t]})}}const c=l},60890:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(27293),a=n(84948),r=n(76102),o=n(74848);function i(e){return"htmlDemo"===e.type?(0,o.jsx)(a.A,{...e}):"jsDemo"===e.type?(0,o.jsx)(r.A,{...e}):(0,o.jsx)(s.A,{...e})}},31225:(e,t,n)=>{n.d(t,{A:()=>P});n(96540);var s=n(34164),a=n(44096),r=n(74848);function o(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var i=n(28774);const l={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:o}=(0,a.e7)(),{permalink:c,title:d}=n,u=o?"h1":"h2";return(0,r.jsx)(u,{className:(0,s.A)(l.title,t),children:o?d:(0,r.jsx)(i.A,{to:c,children:d})})}var d=n(21312),u=n(53465),m=n(36266);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function f(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function x(e){let{className:t}=e;const{metadata:n}=(0,a.e7)(),{date:o,readingTime:i}=n,l=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.A)(g.container,"margin-vert--md",t),children:[(0,r.jsx)(p,{date:o,formattedDate:(c=o,l.format(new Date(c)))}),void 0!==i&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsx)(h,{readingTime:i})]})]});var c}var j=n(56913);const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function b(e){let{className:t}=e;const{metadata:{authors:n},assets:o}=(0,a.e7)();if(0===n.length)return null;const i=n.every((e=>{let{name:t}=e;return!t})),l=1===n.length;return(0,r.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",i?v.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.A)(!i&&(l?"col col--12":"col col--6"),i?v.imageOnlyAuthorCol:v.authorCol),children:(0,r.jsx)(j.A,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})},t)))})}function A(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(x,{}),(0,r.jsx)(b,{})]})}var N=n(70440),y=n(77910);function _(e){let{children:t,className:n}=e;const{isBlogPostPage:o}=(0,a.e7)();return(0,r.jsx)("div",{id:o?N.LU:void 0,className:(0,s.A)("markdown",n),children:(0,r.jsx)(y.A,{children:t})})}var L=n(17559),w=n(4336),C=n(58046);function k(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function T(e){const{blogPostTitle:t,...n}=e;return(0,r.jsx)(i.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(k,{})})}function H(){const{metadata:e,isBlogPostPage:t}=(0,a.e7)(),{tags:n,title:o,editUrl:i,hasTruncateMarker:l,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&l,m=n.length>0;if(!(m||u||i))return null;if(t){const e=!!(i||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,s.A)("row","margin-top--sm",L.G.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(C.A,{tags:n})})}),e&&(0,r.jsx)(w.A,{className:(0,s.A)("margin-top--sm",L.G.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,s.A)("col",{"col--9":u}),children:(0,r.jsx)(C.A,{tags:n})}),u&&(0,r.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":m}),children:(0,r.jsx)(T,{blogPostTitle:o,to:e.permalink})})]})}function R(e){let{children:t,className:n}=e;const i=function(){const{isBlogPostPage:e}=(0,a.e7)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(o,{className:(0,s.A)(i,n),children:[(0,r.jsx)(A,{}),(0,r.jsx)(_,{children:t}),(0,r.jsx)(H,{})]})}var M=n(38719);function P(e){const{isBlogPostPage:t}=(0,a.e7)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(R,{...e}),t&&(0,r.jsx)(M.A,{type:"blog"})]})}},89057:(e,t,n)=>{n.d(t,{A:()=>o});var s=n(21278),a=n(84948),r=n(76102);const o={...s.A,HtmlDemo:a.A,JsDemo:r.A}}}]);