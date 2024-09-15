"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7297],{17015:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=n(74848),c=n(28453);const i={date:"2022-01-25 10:35:46",slug:"/29296"},a="React \u4e2d\u6700\u91cd\u8981\u7684 setState",l={id:"react-use/29296",title:"React \u4e2d\u6700\u91cd\u8981\u7684 setState",description:"setState \u7684\u7279\u70b9",source:"@site/docs/4.react-use/29296.md",sourceDirName:"4.react-use",slug:"/29296",permalink:"/docs/29296",draft:!1,unlisted:!1,editUrl:"/feedback",tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-01-25 10:35:46",slug:"/29296"},sidebar:"tutorialSidebar",previous:{title:"React \u7236\u5b50\u7ec4\u4ef6\u901a\u8baf",permalink:"/docs/29294"},next:{title:"React \u7ec4\u4ef6\u751f\u547d\u5468\u671f",permalink:"/docs/29298"}},r={},o=[{value:"setState \u4e3a\u4f55\u4f7f\u7528\u4e0d\u53ef\u53d8\u503c\uff1f",id:"setstate-\u4e3a\u4f55\u4f7f\u7528\u4e0d\u53ef\u53d8\u503c",level:2},{value:"setState \u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65 \uff1f",id:"setstate-\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65-",level:2},{value:"setState \u4f55\u65f6\u4f1a\u5408\u5e76 state \uff1f",id:"setstate-\u4f55\u65f6\u4f1a\u5408\u5e76-state-",level:2}];function d(t){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"react-\u4e2d\u6700\u91cd\u8981\u7684-setstate",children:"React \u4e2d\u6700\u91cd\u8981\u7684 setState"})}),"\n",(0,s.jsx)(e.p,{children:"setState \u7684\u7279\u70b9"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4e0d\u53ef\u53d8\u503c"}),"\n",(0,s.jsx)(e.li,{children:"\u53ef\u80fd\u662f\u5f02\u6b65\u66f4\u65b0"}),"\n",(0,s.jsx)(e.li,{children:"\u53ef\u80fd\u4f1a\u88ab\u5408\u5e76"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"setstate-\u4e3a\u4f55\u4f7f\u7528\u4e0d\u53ef\u53d8\u503c",children:"setState \u4e3a\u4f55\u4f7f\u7528\u4e0d\u53ef\u53d8\u503c\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"React \u4e2d\u6700\u91cd\u8981\u7684\u6982\u5ff5 setState \u548c \u4e0d\u53ef\u53d8\u503c"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u4e0d\u53ef\u53d8\u503c-\u53d8\u91cf"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5b50"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"// \u4e0d\u8981\u76f4\u63a5\u4fee\u6539 state\uff0c\u4f7f\u7528\u4e0d\u53ef\u53d8\u6570\u636e \n// this.state.count++ // \u9519\u8bef\nthis.setState({\n  count: this.state.count + 1\n})\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u4e0d\u53ef\u53d8\u503c-\u6570\u7ec4"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5b50"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"// \u4e0d\u53ef\u53d8\u503c\uff08\u51fd\u6570\u5f0f\u7f16\u7a0b\uff0c\u7eaf\u51fd\u6570\uff09 - \u6570\u7ec4\nconst list5Copy = this.state.list5.slice()\nlist5Copy.splice(2, 0, 'a') // \u4e2d\u95f4\u63d2\u5165/\u5220\u9664\nthis.setState({\n  list1: this.state.list1.concat(100), // \u8ffd\u52a0\n  list2: [...this.state.list2, 100], // \u8ffd\u52a0\n  list3: this.state.list3.slice(0, 3),// \u622a\u53d6\n  list4: this.state.list4.filter(item => item > 100), // \u5e05\u9009\n  list5: list5Copy //\u5176\u4ed6\u64cd\u4f5c\n})\n// \u6ce8\u610f\uff0c\u4e0d\u80fd\u76f4\u63a5\u5bf9 this.state.list \u8fdb\u884c push pop splice \u7b49\uff0c\u8fd9\u6837\u8fdd\u53cd\u4e0d\u53ef\u53d8\u503c\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u4e0d\u53ef\u53d8\u503c-\u5bf9\u8c61"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5b50"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"// \u4e0d\u53ef\u53d8\u503c - \u5bf9\u8c61\nthis.setState({\n  obj1: Object.assign({}, this.state.obj1, {a: 100}),\n  obj2: {...this.state.obj2, a: 100}\n})\n// \u6ce8\u610f\uff0c\u4e0d\u80fd\u76f4\u63a5\u5bf9 this.state.obj \u8fdb\u884c\u5c5e\u6027\u8bbe\u7f6e\uff0c\u8fd9\u6837\u8fdd\u53cd\u4e0d\u53ef\u53d8\u503c\n"})}),"\n",(0,s.jsx)(e.h2,{id:"setstate-\u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65-",children:"setState \u662f\u540c\u6b65\u8fd8\u662f\u5f02\u6b65 \uff1f"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"setState \u53ef\u4ee5\u5f02\u6b65\u6216\u540c\u6b65"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5b50"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"// setState \u53ef\u80fd\u662f\u5f02\u6b65\u66f4\u65b0\uff08\u6709\u53ef\u80fd\u662f\u540c\u6b65\u66f4\u65b0\uff09\nthis.setState({\n  count: this.state.count + 1\n}, () => {\n  // \u7c7b\u4f3c Vue $nextTick\n  console.log('count by callback', this.state.count) // \u56de\u8c03\u51fd\u6570\u62ff\u5230\u6700\u65b0\u503c\n})\nconsole.log('count', this.state.count) // \u5f02\u6b65\u7684\uff0c\u62ff\u4e0d\u5230\u6700\u65b0\u503c\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"setTimeout \u4e2d setState \u662f\u540c\u6b65\u7684"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5b50"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"// setTimeout \u4e2d setState \u662f\u540c\u6b65\u7684\nsetTimeout(() => {\n  this.setState({\n    count: this.state.count + 1\n  })\n  console.log('count in setTimeout', this.state.count)\n})\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u81ea\u5df1\u5b9a\u4e49\u7684 DOM \u4e8b\u4ef6\uff0csetState \u662f\u540c\u6b65\u7684"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5b50"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"// \u81ea\u5df1\u5b9a\u4e49\u7684 DOM \u4e8b\u4ef6\uff0csetState \u662f\u540c\u6b65\u7684\nbodyClickHandler = () => {\n  this.setState({\n    count: this.state.count + 1\n  })\n  console.log('count in body event', this.state.count)\n}\n\ncomponentDidMount() {\n  // \u81ea\u5df1\u5b9a\u4e49\u7684 DOM \u4e8b\u4ef6\uff0csetState \u662f\u540c\u6b65\u7684\uff0c\u5728 componentDidMount \u4e2d\n  document.body.addEventListener('click', this.bodyClickHandler)\n}\n\ncomponentWillUnmount() {\n  // \u53ca\u65f6\u9500\u6bc1\u81ea\u5b9a\u4e49 dom \u4e8b\u4ef6\n  document.body.removeEventListener('click', this.bodyClickHandler)\n  // clearTimeout\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"setstate-\u4f55\u65f6\u4f1a\u5408\u5e76-state-",children:"setState \u4f55\u65f6\u4f1a\u5408\u5e76 state \uff1f"}),"\n",(0,s.jsx)(e.p,{children:"state \u5f02\u6b65\u66f4\u65b0\u7684\u8bdd\uff0c\u66f4\u65b0\u524d\u4f1a\u88ab\u5408\u5e76"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u4f20\u5165\u5bf9\u8c61\uff0c\u4f1a\u88ab\u5408\u5e76"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5b50"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"// \u4f20\u5165\u5bf9\u8c61\uff0c\u4f1a\u88ab\u5408\u5e76\uff08\u7c7b\u4f3c Object.assign({count:1},{count:1})\uff09\u3002\u6267\u884c\u7ed3\u679c\u53ea\u4e00\u6b21 +1\nthis.setState({\n  count: this.state.count + 1\n})\nthis.setState({\n  count: this.state.count + 1\n})\nthis.setState({\n  count: this.state.count + 1\n})\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u4f20\u5165\u51fd\u6570\uff0c\u4e0d\u4f1a\u88ab\u5408\u5e76"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5b50"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"// \u4f20\u5165\u51fd\u6570\uff0c\u4e0d\u4f1a\u88ab\u5408\u5e76\u3002\u6267\u884c\u7ed3\u679c\u662f +3\nthis.setState((prevState, props) => {\n  return {\n    count: prevState.count + 1\n  }\n})\nthis.setState((prevState, props) => {\n  return {\n    count: prevState.count + 1\n  }\n})\nthis.setState((prevState, props) => {\n  return {\n    count: prevState.count + 1\n  }\n})\n"})})]})}function h(t={}){const{wrapper:e}={...(0,c.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>l});var s=n(96540);const c={},i=s.createContext(c);function a(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:a(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);