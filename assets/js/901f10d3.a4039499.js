"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2601],{50257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(74848),s=t(28453);const c="/**\n * @desc \u62ec\u53f7\u5339\u914d\n * @author lzw.\n */\n\nfunction isMatch(left: string, right: string): boolean {\n  if (left === '(' && right === ')') return true\n  if (left === '{' && right === '}') return true\n  if (left === '[' && right === ']') return true\n  return false\n}\n\nfunction matchBracket(str: string): boolean {\n  const length = str.length\n  if (length === 0) return true\n\n  const stack = []\n  const leftBracket = '{(['\n  const rightBracket = '})]'\n\n  for (let i = 0; i < length; i++) {\n    const s = str[i]\n    // \u5de6\u62ec\u53f7\uff0c\u538b\u6808\n    if (leftBracket.includes(s)) {\n      stack.push(s)\n    }\n    if (rightBracket.includes(s)) {\n      const top = stack[stack.length - 1]\n      // \u662f\u5426\u5339\u914d\uff0c\u51fa\u6808\n      if (isMatch(top, s)) {\n        stack.pop()\n      } else {\n        return false\n      }\n    }\n  }\n\n  return stack.length === 0\n}\n\n// \u6d4b\u8bd5\u7528\u4f8b - jest\ndescribe('\u62ec\u53f7\u5339\u914d', () => {\n  it('\u6b63\u5e38\u60c5\u51b5', () => {       \n    expect(matchBracket('{a(b[c]d)e}f')).toBe(true)\n  })\n});\n\ndescribe('\u62ec\u53f7\u5339\u914d', () => {\n  it('\u9519\u8bef\u60c5\u51b5', () => {\n    expect(matchBracket('{a(b[c]de}f)')).toBe(false)\n  })\n});\n\ndescribe('\u62ec\u53f7\u5339\u914d', () => {\n  it('\u7a7a', () => {\n    expect(matchBracket('')).toBe(true)\n  })\n});",i={date:"2022-10-23 10:44:20",slug:"/29474"},o="LeetCode\uff1a20. \u6709\u6548\u7684\u62ec\u53f7",l={id:"program/29474",title:"LeetCode\uff1a20. \u6709\u6548\u7684\u62ec\u53f7",description:"\u89e3\u6790\u601d\u8def-\u7528\u6808\u6765\u5b9e\u73b0",source:"@site/issue/7.program/29474.md",sourceDirName:"7.program",slug:"/29474",permalink:"/issue/29474",draft:!1,unlisted:!1,editUrl:"/feedback",tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-10-23 10:44:20",slug:"/29474"},sidebar:"tutorialSidebar",previous:{title:"\u5c06\u4e00\u4e2a\u6570\u7ec4\u65cb\u8f6c k \u6b65",permalink:"/issue/29473"},next:{title:"\u4f7f\u7528 JS \u53cd\u8f6c\u5355\u5411\u94fe\u8868",permalink:"/issue/29478"}},a={},d=[];function u(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components},{JsDemo:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("JsDemo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"leetcode20-\u6709\u6548\u7684\u62ec\u53f7",children:"LeetCode\uff1a20. \u6709\u6548\u7684\u62ec\u53f7"})}),"\n",(0,r.jsx)(n.p,{children:"\u89e3\u6790\u601d\u8def-\u7528\u6808\u6765\u5b9e\u73b0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u9047\u5230\u5de6\u62ec\u53f7 ",(0,r.jsx)(n.code,{children:"{(["})," \u5c31\u538b\u5165\u6808"]}),"\n",(0,r.jsxs)(n.li,{children:["\u9047\u5230\u53f3\u62ec\u53f7 ",(0,r.jsx)(n.code,{children:"})]"})," \u5c31\u5224\u65ad\u6808\u9876\uff0c\u5339\u914d\u6cfd\u51fa\u6808"]}),"\n",(0,r.jsx)(n.li,{children:"\u6700\u540e\u5224\u65ad length \u662f\u5426\u4e3a 0"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee3\u7801\u5b9e\u73b0"}),"\n","\n",(0,r.jsx)(t,{lang:"ts",children:c}),"\n",(0,r.jsx)(n.p,{children:"\u6027\u80fd\u5206\u6790"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6\u548c\u7a7a\u95f4\u590d\u6742\u5ea6\u90fd\u662f O(n)"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);