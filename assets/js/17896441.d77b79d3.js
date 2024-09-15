"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8401],{86896:(e,t,n)=>{n.d(t,{A:()=>v});n(96540);var s=n(34164),i=n(21312),a=n(5260),o=n(74848);function l(){return(0,o.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,o.jsx)(i.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(a.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,o.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,o.jsx)(i.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=n(17559),h=n(60890);function x(e){let{className:t}=e;return(0,o.jsx)(h.A,{type:"caution",title:(0,o.jsx)(d,{}),className:(0,s.A)(t,m.G.common.draftBanner),children:(0,o.jsx)(u,{})})}function p(e){let{className:t}=e;return(0,o.jsx)(h.A,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,s.A)(t,m.G.common.unlistedBanner),children:(0,o.jsx)(r,{})})}function g(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(p,{...e})]})}function v(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,o.jsxs)(o.Fragment,{children:[(n||s.unlisted)&&(0,o.jsx)(g,{}),s.draft&&(0,o.jsx)(x,{})]})}},30575:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ie});var s=n(96540),i=n(45500),a=n(89532),o=n(74848);const l=s.createContext(null);function r(e){let{children:t,content:n}=e;const i=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,o.jsx)(l.Provider,{value:i,children:t})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new a.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,o.jsx)(i.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(34164),m=n(24581),h=n(21312),x=n(39022);function p(e){const{previous:t,next:n}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(x.A,{...t,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,o.jsx)(x.A,{...n,subLabel:(0,o.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function g(){const{metadata:e}=c();return(0,o.jsx)(p,{previous:e.previous,next:e.next})}var v=n(44586),b=n(28774),f=n(44070),j=n(17559),A=n(53886),N=n(23025);const L={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,o.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){const t=L[e.versionMetadata.banner];return(0,o.jsx)(t,{...e})}function _(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,o.jsx)("b",{children:(0,o.jsx)(b.A,{to:n,onClick:s,children:(0,o.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function T(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,v.A)(),{pluginId:i}=(0,f.vT)({failfast:!0}),{savePreferredVersionName:a}=(0,A.g1)(i),{latestDocSuggestion:l,latestVersionSuggestion:r}=(0,f.HW)(i),c=l??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,o.jsxs)("div",{className:(0,u.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,o.jsx)("div",{children:(0,o.jsx)(C,{siteTitle:s,versionMetadata:n})}),(0,o.jsx)("div",{className:"margin-top--md",children:(0,o.jsx)(_,{versionLabel:r.label,to:c.path,onClick:()=>a(r.name)})})]})}function k(e){let{className:t}=e;const n=(0,N.r)();return n.banner?(0,o.jsx)(T,{className:t,versionMetadata:n}):null}function y(e){let{className:t}=e;const n=(0,N.r)();return n.badge?(0,o.jsx)("span",{className:(0,u.A)(t,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var H=n(58046),w=n(4336);function M(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:i}=e,a=i.length>0,l=!!(t||n||s);return a||l?(0,o.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[a&&(0,o.jsx)("div",{className:(0,u.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(H.A,{tags:i})})}),l&&(0,o.jsx)(w.A,{className:(0,u.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var B=n(41422),I=n(65195);const E={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function V(e){let{collapsed:t,...n}=e;return(0,o.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",E.tocCollapsibleButton,!t&&E.tocCollapsibleButtonExpanded,n.className),children:(0,o.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const S={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function R(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:a,toggleCollapsed:l}=(0,B.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,u.A)(S.tocCollapsible,!a&&S.tocCollapsibleExpanded,n),children:[(0,o.jsx)(V,{collapsed:a,onClick:l}),(0,o.jsx)(B.N,{lazy:!0,className:S.tocCollapsibleContent,collapsed:a,children:(0,o.jsx)(I.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})})]})}const O={tocMobile:"tocMobile_ITEo"};function D(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(R,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,O.tocMobile)})}var G=n(67763);function F(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(G.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var P=n(51107),U=n(77910);function $(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,o.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[n&&(0,o.jsx)("header",{children:(0,o.jsx)(P.A,{as:"h1",children:n})}),(0,o.jsx)(U.A,{children:t})]})}var W=n(26972),z=n(99169),q=n(86025);function J(e){return(0,o.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,o.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const Q={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function X(){const e=(0,q.Ay)("/");return(0,o.jsx)("li",{className:"breadcrumbs__item",children:(0,o.jsx)(b.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,o.jsx)(J,{className:Q.breadcrumbHomeIcon})})})}const Y={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function Z(e){let{children:t,href:n,isLast:s}=e;const i="breadcrumbs__link";return s?(0,o.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,o.jsx)(b.A,{className:i,href:n,itemProp:"item",children:(0,o.jsx)("span",{itemProp:"name",children:t})}):(0,o.jsx)("span",{className:i,children:t})}function K(e){let{children:t,active:n,index:s,addMicrodata:i}=e;return(0,o.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,o.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ee(){const e=(0,W.OF)(),t=(0,z.Dt)();return e?(0,o.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,Y.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,o.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,o.jsx)(X,{}),e.map(((t,n)=>{const s=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,o.jsx)(K,{active:s,index:n,addMicrodata:!!i,children:(0,o.jsx)(Z,{href:i,isLast:s,children:t.label})},n)}))]})}):null}var te=n(86896);const ne={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function se(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),s=e.hide_table_of_contents,i=!s&&t.length>0;return{hidden:s,mobile:i?(0,o.jsx)(D,{}):void 0,desktop:!i||"desktop"!==n&&"ssr"!==n?void 0:(0,o.jsx)(F,{})}}(),{metadata:s}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&ne.docItemCol),children:[(0,o.jsx)(te.A,{metadata:s}),(0,o.jsx)(k,{}),(0,o.jsxs)("div",{className:ne.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(ee,{}),(0,o.jsx)(y,{}),n.mobile,(0,o.jsx)($,{children:t}),(0,o.jsx)(M,{})]}),(0,o.jsx)(g,{})]})]}),n.desktop&&(0,o.jsx)("div",{className:"col col--3",children:n.desktop})]})}function ie(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(i.e3,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(se,{children:(0,o.jsx)(n,{})})]})})}},39022:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var s=n(34164),i=n(28774),a=n(74848);function o(e){const{permalink:t,title:n,subLabel:o,isNext:l}=e;return(0,a.jsxs)(i.A,{className:(0,s.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[o&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:o}),(0,a.jsx)("div",{className:"pagination-nav__label",children:n})]})}},67763:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var s=n(34164),i=n(65195);const a={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var o=n(74848);const l="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,o.jsx)("div",{className:(0,s.A)(a.tableOfContents,"thin-scrollbar",t),children:(0,o.jsx)(i.A,{...n,linkClassName:l,linkActiveClassName:r})})}},65195:(e,t,n)=>{n.d(t,{A:()=>p});var s=n(96540),i=n(6342);function a(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):s.push(i)})),s}function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=o({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>l(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let i=t;i<=n;i+=1)s.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),c=r(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var u=n(28774),m=n(74848);function h(e){let{toc:t,className:n,linkClassName:s,isChild:i}=e;return t.length?(0,m.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const x=s.memo(h);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const p=(0,i.p)(),g=c??p.tableOfContents.minHeadingLevel,v=u??p.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>o({toc:a(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:g,maxHeadingLevel:v});return d((0,s.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:g,maxHeadingLevel:v}}),[l,r,g,v])),(0,m.jsx)(x,{toc:b,className:n,linkClassName:l,...h})}},58046:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var s=n(34164),i=n(21312),a=n(28774);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=n(74848);function r(e){let{permalink:t,label:n,count:i,description:r}=e;return(0,l.jsxs)(a.A,{href:t,title:r,className:(0,s.A)(o.tag,i?o.tagWithCount:o.tagRegular),children:[n,i&&(0,l.jsx)("span",{children:i})]})}const c={tags:"tags_jXut",tag:"tag_QGVx"};function d(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(i.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,s.A)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:c.tag,children:(0,l.jsx)(r,{...e})},e.permalink)))})]})}},84948:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(96540),i=n(44586),a=n(21432);const o="htmlDemo_JfCu",l="iframeBg_qble";var r=n(74848);const c=function(e){const{siteConfig:t}=(0,i.A)(),{title:n}=t,[c,d]=(0,s.useState)(0),[u,m]=(0,s.useState)(""),h=(0,s.useRef)(null);return(0,s.useEffect)((()=>{const t=h.current.contentWindow.document,n=!e.children.props;let s=n?e.children:e.children.props.children.props.children;n&&(s=s.match(/<body[^>]*>([\s\S]*)<\/body>/)[1]),t.open(),t.write(`<style>html,body{margin:0;padding:0}</style>${s}`),t.close(),m(u+s),h.current.onload=()=>{d(c+t.body.scrollHeight+20)}}),[]),(0,r.jsxs)("section",{className:o,children:[(0,r.jsxs)("header",{children:[(0,r.jsx)("code",{children:"\u6e90\u7801\u9884\u89c8"}),(0,r.jsx)("a",{onClick:function(){const e=window.open("");e.focus(),e.document.write(`<style>html,body{margin:0;padding:0}</style>${u}`),e.document.title=`\u4ee3\u7801\u5728\u7ebf\u8fd0\u884c | ${n}`,e.document.close()},children:"\u6253\u5f00\u7a97\u53e3"})]}),(0,r.jsx)("div",{className:l,children:(0,r.jsx)("iframe",{ref:h,height:c,frameBorder:"0",scrolling:"no",allowFullScreen:!0,width:"100%"})}),(0,r.jsxs)("details",{children:[(0,r.jsx)("summary",{children:"\u67e5\u770b\u6e90\u7801"}),(0,r.jsx)(a.A,{className:"language-jsx",children:u})]})]})}},76102:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(96540),i=n(21432);const a="jsDemo_EGeP",o="consoleLog_nNio";var l=n(74848);class r extends s.Component{constructor(e){super(e),this.state={code:"",stdout:""},this.iframeRef=s.createRef(null)}componentDidMount(){const e=this.iframeRef.current.contentWindow.document,t=!this.props.children.props?this.props.children:this.props.children.props.children.props.children,n="ts"===this.props.lang?"":`\n    <script>\n      const logs = [];\n      console.oldLog = console.log;\n      console.log = function (...str) {\n        console.oldLog(str);\n        logs.push(str.map(v=>String(v)).join(' '));\n      };  \n      ${t};\n      setTimeout(()=>{\n        for (let i = 0; i < logs.length; i++) {\n          document.write('> ', logs[i], '<br/>');\n        }\n        document.write('>');\n      });\n    <\/script>  \n    `;e.open(),e.write(n),e.close(),setTimeout((()=>{this.setState({code:t,stdout:e.body.innerHTML})}))}render(){const e={__html:this.state.stdout},t="ts"===this.props.lang?"":(0,l.jsxs)("details",{open:this.state.stdout,children:[(0,l.jsx)("summary",{children:"\u8f93\u51fa\u7ed3\u679c"}),(0,l.jsx)("pre",{className:o,dangerouslySetInnerHTML:e})]});return(0,l.jsxs)("section",{className:a,children:[(0,l.jsx)(i.A,{className:"language-jsx",children:this.state.code}),(0,l.jsx)("iframe",{ref:this.iframeRef}),t]})}}const c=r},60890:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var s=n(27293),i=n(84948),a=n(76102),o=n(74848);function l(e){return"htmlDemo"===e.type?(0,o.jsx)(i.A,{...e}):"jsDemo"===e.type?(0,o.jsx)(a.A,{...e}):(0,o.jsx)(s.A,{...e})}},89057:(e,t,n)=>{n.d(t,{A:()=>o});var s=n(21278),i=n(84948),a=n(76102);const o={...s.A,HtmlDemo:i.A,JsDemo:a.A}}}]);