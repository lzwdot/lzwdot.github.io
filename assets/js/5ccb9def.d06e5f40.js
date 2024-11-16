"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["1499"],{55643:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>r});var a=JSON.parse('{"id":"react-use/29290","title":"React \u8868\u5355\u77E5\u8BC6\u70B9","description":"\u8868\u5355\u63A7\u4EF6\u7B49","source":"@site/docs/4.react-use/29290.md","sourceDirName":"4.react-use","slug":"/29290","permalink":"/docs/29290","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2022-01-24 17:06:27","slug":"/29290"},"sidebar":"tutorialSidebar","previous":{"title":"React \u4E8B\u4EF6\u548C bind this","permalink":"/docs/29287"},"next":{"title":"React \u7236\u5B50\u7EC4\u4EF6\u901A\u8BAF","permalink":"/docs/29294"}}'),s=t("85893"),i=t("50065");let r={date:"2022-01-24 17:06:27",slug:"/29290"},o="React \u8868\u5355\u77E5\u8BC6\u70B9",c={},l=[];function h(e){let n={blockquote:"blockquote",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"react-\u8868\u5355\u77E5\u8BC6\u70B9",children:"React \u8868\u5355\u77E5\u8BC6\u70B9"})}),"\n",(0,s.jsx)(n.p,{children:"\u8868\u5355\u63A7\u4EF6\u7B49"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u53D7\u63A7\u7EC4\u4EF6"}),"\n",(0,s.jsx)(n.li,{children:"input textarea select \u7528 value"}),"\n",(0,s.jsx)(n.li,{children:"checkbox radio \u7528 checked"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u975E\u53D7\u63A7\u7EC4\u4EF6"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u975E\u53D7\u63A7\u7EC4\u4EF6\uFF0C\u5373\u7EC4\u4EF6\u7684\u72B6\u6001\u4E0D\u53D7 React \u63A7\u5236\u7684\u7EC4\u4EF6"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53D7\u63A7\u7EC4\u4EF6"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u540C\u6837\u7684\uFF0C\u53D7\u63A7\u7EC4\u4EF6\u5C31\u662F\u7EC4\u4EF6\u7684\u72B6\u6001\u53D7 React \u63A7\u5236\u3002\u4E0A\u9762\u63D0\u5230\u8FC7\uFF0C\u65E2\u7136\u901A\u8FC7\u8BBE\u7F6E input \u7684 value \u5C5E\u6027, \u65E0\u6CD5\u6539\u53D8\u8F93\u5165\u6846\u503C,\u90A3\u4E48\u6211\u4EEC\u628A\u5B83\u548C state \u7ED3\u5408\u5728\u4E00\u8D77,\u518D\u7ED1\u5B9A onChange \u4E8B\u4EF6,\u5B9E\u65F6\u66F4\u65B0 value \u503C\u5C31\u884C\u4E86\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import React from "react";\n\nclass FormDemo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      name: \'lzw.\',\n      info: \'\u4E2A\u4EBA\u4FE1\u606F\',\n      city: \'changsha\',\n      flag: true,\n      gender: \'male\'\n    }\n  }\n\n  render() {\n    // \u53D7\u63A7\u7EC4\u4EF6\uFF0C\u7C7B\u4F3C v-model\uFF08state.name \u53D7\u5230 input \u4E8B\u4EF6\u63A7\u5236\u6539\u53D8\u503C\uFF09\n    // return <div>\n    //   <p>{this.state.name}</p>\n    //   {/*\u7528 htmlFor \u4EE3\u66FF for*/}\n    //   <label htmlFor="inputName">\u59D3\u540D\uFF1A</label>\n    //   <input id="inputName" value={this.state.name} onChange={this.onInputChange}/>\n    // </div>\n\n    // textarea - \u4F7F\u7528 value\n    // return <div>\n    //   <textarea value={this.state.info} onChange={this.onTextareaChange}></textarea>\n    //   <p>{this.state.info}</p>\n    // </div>\n\n    // select - \u4F7F\u7528 value\n    // return <div>\n    //   <select value={this.state.city} onChange={this.onSelectChange}>\n    //     <option value="beijing">\u5317\u4EAC</option>\n    //     <option value="shanghai">\u4E0A\u6D77</option>\n    //     <option value="shenzhen">\u6DF1\u5733</option>\n    //   </select>\n    //   <p>{this.state.city}</p>\n    // </div>\n\n    // checkbox\n    // return <div>\n    //   <input type="checkbox" checked={this.state.flag} onChange={this.onCheckboxChange}/>\n    //   <p>{this.state.flag.toString()}</p>\n    // </div>\n\n    // radio\n    return <div>\n      <input type="radio" value="male" checked={this.state.gender === \'male\'} onChange={this.onRadioChange}/>\n      <input type="radio" value="female" checked={this.state.gender === \'female\'} onChange={this.onRadioChange}/>\n      <p>{this.state.gender}</p>\n    </div>\n  }\n\n  onInputChange = (e) => {\n    this.setState({\n      name: e.target.value\n    })\n  }\n\n  onTextareaChange = (e) => {\n    this.setState({\n      info: e.target.value\n    })\n  }\n\n  onSelectChange = (e) => {\n    this.setState({\n      city: e.target.value\n    })\n  }\n  onCheckboxChange = (e) => {\n    this.setState({\n      flag: !this.state.flag\n    })\n  }\n\n  onRadioChange = (e) => {\n    this.setState({\n      gender: e.target.value\n    })\n  }\n}\n\nexport default FormDemo\n'})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var a=t(67294);let s={},i=a.createContext(s);function r(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);