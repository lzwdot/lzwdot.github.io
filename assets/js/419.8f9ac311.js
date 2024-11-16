"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["419"],{1080:function(e,t,n){n.d(t,{Z:()=>T});var r=n("85893");n("67294");var l=n("67026"),a=n("41835");function i(e){let{children:t,className:n}=e;return(0,r.jsx)("article",{className:n,children:t})}var s=n("83012");let o="title_f1Hy";function u(e){let{className:t}=e,{metadata:n,isBlogPostPage:i}=(0,a.nO)(),{permalink:u,title:c}=n;return(0,r.jsx)(i?"h1":"h2",{className:(0,l.Z)(o,t),children:i?c:(0,r.jsx)(s.Z,{to:u,children:c})})}var c=n("96025"),d=n("43115"),m=n("11437");let g="container_mt6G";function h(e){let{readingTime:t}=e,n=function(){let{selectMessage:e}=(0,d.c)();return t=>{let n=Math.ceil(t);return e(n,(0,c.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,r.jsx)(r.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,r.jsx)("time",{dateTime:t,children:n})}function f(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function x(e){let t,{className:n}=e,{metadata:i}=(0,a.nO)(),{date:s,readingTime:o}=i,u=(0,m.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,l.Z)(g,"margin-vert--md",n),children:[(0,r.jsx)(p,{date:s,formattedDate:(t=s,u.format(new Date(t)))}),void 0!==o&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsx)(h,{readingTime:o})]})]})}var j=n("21389");let b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function v(e){let{className:t}=e,{metadata:{authors:n},assets:i}=(0,a.nO)();if(0===n.length)return null;let s=n.every(e=>{let{name:t}=e;return!t}),o=1===n.length;return(0,r.jsx)("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",s?b.imageOnlyAuthorRow:"row",t),children:n.map((e,t)=>(0,r.jsx)("div",{className:(0,l.Z)(!s&&(o?"col col--12":"col col--6"),s?b.imageOnlyAuthorCol:b.authorCol),children:(0,r.jsx)(j.Z,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t))})}function Z(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(u,{}),(0,r.jsx)(x,{}),(0,r.jsx)(v,{})]})}var _=n("8365"),w=n("95939");function N(e){let{children:t,className:n}=e,{isBlogPostPage:i}=(0,a.nO)();return(0,r.jsx)("div",{id:i?_.blogPostContainerID:void 0,className:(0,l.Z)("markdown",n),children:(0,r.jsx)(w.Z,{children:t})})}var y=n("84681"),k=n("49230"),O=n("59701");function F(){return(0,r.jsx)("b",{children:(0,r.jsx)(c.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function R(e){let{blogPostTitle:t,...n}=e;return(0,r.jsx)(s.Z,{"aria-label":(0,c.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,r.jsx)(F,{})})}function C(){let{metadata:e,isBlogPostPage:t}=(0,a.nO)(),{tags:n,title:i,editUrl:s,hasTruncateMarker:o,lastUpdatedBy:u,lastUpdatedAt:c}=e,d=!t&&o,m=n.length>0;if(!(m||d||s))return null;if(!t)return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,l.Z)("col",{"col--9":d}),children:(0,r.jsx)(O.Z,{tags:n})}),d&&(0,r.jsx)("div",{className:(0,l.Z)("col text--right",{"col--3":m}),children:(0,r.jsx)(R,{blogPostTitle:i,to:e.permalink})})]});{let e=!!(s||c||u);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,l.Z)("row","margin-top--sm",y.k.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(O.Z,{tags:n})})}),e&&(0,r.jsx)(k.Z,{className:(0,l.Z)("margin-top--sm",y.k.blog.blogFooterEditMetaRow),editUrl:s,lastUpdatedAt:c,lastUpdatedBy:u})]})}}function T(e){let{children:t,className:n}=e,s=function(){let{isBlogPostPage:e}=(0,a.nO)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,l.Z)(s,n),children:[(0,r.jsx)(Z,{}),(0,r.jsx)(N,{children:t}),(0,r.jsx)(C,{})]})}},50790:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(85893);n(67294);var l=n(67026),a=n(83012);function i(e){let{permalink:t,title:n,subLabel:i,isNext:s}=e;return(0,r.jsxs)(a.Z,{className:(0,l.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:n})]})}},59701:function(e,t,n){n.d(t,{Z:()=>d});var r=n("85893");n("67294");var l=n("67026"),a=n("96025"),i=n("83012");let s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function o(e){let{permalink:t,label:n,count:a,description:o}=e;return(0,r.jsxs)(i.Z,{href:t,title:o,className:(0,l.Z)(s.tag,a?s.tagWithCount:s.tagRegular),children:[n,a&&(0,r.jsx)("span",{children:a})]})}let u="tags_jXut",c="tag_QGVx";function d(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,l.Z)(u,"padding--none","margin-left--sm"),children:t.map(e=>(0,r.jsx)("li",{className:c,children:(0,r.jsx)(o,{...e})},e.permalink))})]})}},43115:function(e,t,n){n.d(t,{c:function(){return o}});var r=n(67294),l=n(2933);let a=["zero","one","two","few","many","other"];function i(e){return a.filter(t=>e.includes(t))}let s={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function o(){let e=function(){let{i18n:{currentLocale:e}}=(0,l.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),s}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let l=n.select(t);return r[Math.min(n.pluralForms.indexOf(l),r.length-1)]})(n,t,e)}}},30206:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(85893),l=n(67294);function a({id:e,host:t,repo:a,repoId:i,category:s,categoryId:o,mapping:u,term:c,strict:d,reactionsEnabled:m,emitMetadata:g,inputPosition:h,theme:p,lang:f,loading:x}){let[j,b]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{j||(n.e("8260").then(n.bind(n,30671)),b(!0))},[]),j?(0,r.jsx)("giscus-widget",{id:e,host:t,repo:a,repoid:i,category:s,categoryid:o,mapping:u,term:c,strict:d,reactionsenabled:m,emitmetadata:g,inputposition:h,theme:p,lang:f,loading:x}):null}}}]);