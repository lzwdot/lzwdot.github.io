"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1902],{40205:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>a});var i=t(74848),s=t(28453);const c={date:"2022-01-24 16:14:34",slug:"/29287"},r="React \u4e8b\u4ef6\u548c bind this",o={id:"react-use/29287",title:"React \u4e8b\u4ef6\u548c bind this",description:"\u4e8b\u4ef6",source:"@site/docs/4.react-use/29287.md",sourceDirName:"4.react-use",slug:"/29287",permalink:"/docs/29287",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-01-24 16:14:34",slug:"/29287"},sidebar:"tutorialSidebar",previous:{title:"JSX \u57fa\u672c\u77e5\u8bc6\u70b9",permalink:"/docs/29284"},next:{title:"React \u8868\u5355\u77e5\u8bc6\u70b9",permalink:"/docs/29290"}},l={},a=[];function d(n){const e={blockquote:"blockquote",code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"react-\u4e8b\u4ef6\u548c-bind-this",children:"React \u4e8b\u4ef6\u548c bind this"})}),"\n",(0,i.jsx)(e.p,{children:"\u4e8b\u4ef6"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"bind this"}),"\n",(0,i.jsx)(e.li,{children:"\u5173\u4e8e event \u53c2\u6570"}),"\n",(0,i.jsx)(e.li,{children:"\u4f20\u9012\u81ea\u5b9a\u4e49\u53c2\u6570"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u4f8b\u5b50"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"import React from \"react\";\n\nclass ListDemo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      name: 'lzw.',\n      list: [\n        {\n          id: 'id-1',\n          title: '\u6807\u9898-1'\n        },\n        {\n          id: 'id-2',\n          title: '\u6807\u9898-2'\n        },\n        {\n          id: 'id-3',\n          title: '\u6807\u9898-3'\n        }\n      ]\n    }\n\n    // \u4fee\u6539\u65b9\u6cd5\u7684 this \u6307\u5411\n    this.clickHandler1 = this.clickHandler1.bind(this)\n  }\n\n  render() {\n    // this - \u4f7f\u7528 bind\n    // return <p onClick={this.clickHandler1}>\n    //   {this.state.name}\n    // </p>\n\n    // this - \u4f7f\u7528\u9759\u6001\u65b9\u6cd5\n    // return <p onClick={this.clickHandler2}>\n    //   {this.state.name}\n    // </p>\n\n    // event\n    // return <a href=\"https://lzwdot.github.io/docusaurus\" onClick={this.clickHandler3}>\n    //   click me\n    // </a>\n\n    // \u4f20\u53c2 - \u7528 bind(this,a,b)\n    return <ul>\n      {\n        this.state.list.map((item, index) => {\n          return <li key={item.id} onClick={this.clickHandler4.bind(this, item.id, item.title)}>\n            index {index}; title {item.title}\n          </li>\n        })\n      }\n    </ul>\n  }\n\n  clickHandler1() {\n    console.log('this', this) // this \u9ed8\u8ba4\u662f undefined\n    this.setState({\n      name: 'lzw.1'\n    })\n  }\n\n  // \u9759\u6001\u65b9\u6cd5\uff0cthis \u6307\u5411\u5f53\u524d\u5b9e\u4f8b\n  clickHandler2 = () => {\n    this.setState({\n      name: 'lzw.2'\n    })\n  }\n\n  // \u83b7\u53d6 event\n  clickHandler3 = (e) => {\n    e.preventDefault() // \u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a\n    e.stopPropagation() // \u963b\u6b62\u5192\u6ce1\n    console.log('target', e.target) // \u6307\u5411\u5f53\u524d\u5143\u7d20\uff0c\u5373\u5f53\u524d\u5143\u7d20\u89e6\u53d1\n    console.log('current target', e.currentTarget) // \u6307\u5411\u5f53\u524d\u5143\u7d20\uff0c\u5047\u8c61\uff01\n\n    // \u6ce8\u610f\uff0cevent \u5176\u5b9e\u5c31\u662f React \u5c01\u88c5\u7684\uff0c\u53ef\u4ee5\u770b __proto__.constructor \u662f SyntheticBaseEvent \u7ec4\u5408\u4e8b\u4ef6\n    console.log('event', e) // \u4e0d\u662f\u539f\u751f\u7684 Event\uff0c\u539f\u751f\u7684\u662f MouseEvent\n    console.log('event.__proto__.constructor', e.__proto__.constructor)\n\n    // \u539f\u751f event \u5982\u4e0b\uff0c\u5176 __proto__.constructor \u662f MouseEvent\n    console.log('nativeEvent', e.nativeEvent)\n    console.log('nativeEvent', e.nativeEvent.target) // \u6307\u5411\u5f53\u524d\u5143\u7d20\uff0c\u5373\u5f53\u524d\u5143\u7d20\u89e6\u53d1\n    console.log('nativeEvent', e.nativeEvent.currentTarget) // \u6307\u5411 root \u5143\u7d20\n\n    // 1\u3001event \u662f SyntheticBaseEvent\uff0c\u6a21\u62df\u51fa\u6765 DOM \u4e8b\u4ef6\u6240\u6709\u80fd\u529b\n    // 2\u3001e.nativeEvent \u662f\u539f\u751f\u4e8b\u4ef6\u5bf9\u8c61\n    // 3\u3001\u6240\u6709\u7684\u4e8b\u4ef6\uff0c\u6302\u8f7d\u5230 root \u5143\u7d20\n    // 4\u3001\u548c DOM \u4e8b\u4ef6\u4e0d\u4e00\u6837\uff0c\u548c Vue \u4e8b\u4ef6\u4e5f\u4e0d\u4e00\u6837\n  }\n\n  // \u63a5\u6536\u53c2\u6570\n  clickHandler4 = (id, title, e) => {\n    console.log(id, title)\n    console.log('event', e) // \u6700\u540e\u8ffd\u52a0 event \u53c2\u6570\u5373\u53ef\u4f7f\u7528\n  }\n}\n\nexport default ListDemo\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u6ce8\u610f"}),"\n"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"React 16 \u7ed1\u5b9a document"}),"\n",(0,i.jsx)(e.li,{children:"React 17 \u4e8b\u4ef6\u7ed1\u5b9a\u5230 root \u7ec4\u4ef6"}),"\n",(0,i.jsx)(e.li,{children:"\u8fd9\u6837\u6539\u8fdb\u6709\u5229\u4e8e\u591a\u4e2a React \u7248\u672c\u5e76\u5b58\uff0c\u4f8b\u5982\u5fae\u524d\u7aef"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5927\u6982\u5c31\u662f\u8fd9\u6837\u7684"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"react",src:t(36111).A+"",width:"1080",height:"727"})})]})}function u(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},36111:(n,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/react-945dd88ba1f47ecac1b9f27c15d8b312-3b76c8d21aaa0858d489150f6978c2dd.webp"},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var i=t(96540);const s={},c=i.createContext(s);function r(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);