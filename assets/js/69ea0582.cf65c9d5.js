"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["9450"],{29363:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>d,assets:()=>o,toc:()=>i,frontMatter:()=>l});var s=JSON.parse('{"id":"program/29479","title":"\u4F7F\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u961F\u5217","description":"\u6027\u80FD\u5206\u6790","source":"@site/issue/7.program/29479.md","sourceDirName":"7.program","slug":"/29479","permalink":"/issue/29479","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2022-10-30 11:19:02","slug":"/29479"},"sidebar":"tutorialSidebar","previous":{"title":"\u4F7F\u7528 JS \u53CD\u8F6C\u5355\u5411\u94FE\u8868","permalink":"/issue/29478"},"next":{"title":"\u4F7F\u7528\u94FE\u8868\u5B9E\u73B0\u961F\u5217","permalink":"/issue/29480"}}'),a=t("85893"),r=t("50065");let l={date:"2022-10-30 11:19:02",slug:"/29479"},c="\u4F7F\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u961F\u5217",o={},i=[];function u(n){let e={h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,r.a)(),...n.components},{JsDemo:t}=e;return!t&&function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("JsDemo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"\u4F7F\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u961F\u5217",children:"\u4F7F\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u961F\u5217"})}),"\n",(0,a.jsx)(e.p,{children:"\u6027\u80FD\u5206\u6790"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u65F6\u95F4\u590D\u6742\u5EA6\uFF1Aadd O(1); delete O(n)"}),"\n",(0,a.jsx)(e.li,{children:"\u7A7A\u95F4\u590D\u6742\u5EA6\uFF0C\u6574\u4F53\u662F O(n)"}),"\n"]}),"\n","\n",(0,a.jsx)(t,{lang:"ts",children:"/**\n * @desc \u4F7F\u7528\u4E24\u4E2A\u6808\u5B9E\u73B0\u961F\u5217\n * @author lzw.\n */\n\nclass MyQueue {\n  private stack1: any[] = []\n  private stack2: any[] = []\n\n\n  add(val: any) {\n    this.stack1.push(val)\n  }\n\n  delete(): any | null {\n    let res: any\n\n    const stack1 = this.stack1\n    const stack2 = this.stack2\n\n    // 1\u3001stack1 \u5168\u90E8\u63D2\u5165\u5230 stack2\n    while (stack1.length) {\n      const val = stack1.pop()\n      if (val != null) {\n        stack2.push(val)\n      }\n    }\n\n    // 2\u3001\u4ECE stack2 \u62FF\u5230\u9876\u90E8\u5143\u7D20\n    res = stack2.pop()\n\n    // 3\u3001stack2 \u8FD8\u7ED9 stack1\n    while (stack2.length) {\n      const val = stack2.pop()\n      if (val != null) {\n        stack1.push(val)\n      }\n    }\n\n    return res || null\n  }\n\n  get length(): number {\n    return this.stack1.length\n  }\n}\n\n// const q = new MyQueue()\n// q.add(100)\n// q.add(200)\n// q.add(300)\n// console.log(q.delete())\n// console.log(q.length)\n\n// \u6D4B\u8BD5\u7528\u4F8B - jest\ndescribe('\u961F\u5217\u6D4B\u8BD5', () => {\n  it('\u6B63\u5E38\u60C5\u51B5', () => {\n    const q = new MyQueue()\n    q.add(100)\n    q.add(200)\n    q.add(300)\n\n    expect(q.delete()).toBe(100)\n    expect(q.length).toBe(2)\n  })\n});"})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return l}});var s=t(67294);let a={},r=s.createContext(a);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);