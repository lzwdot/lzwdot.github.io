"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5566],{39233:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(74848),a=r(28453);const d="/**\n * @desc \u4e8c\u5206\u67e5\u627e\n * @author lzw.\n */\n\n// \u5faa\u73af\nfunction binarySearch1(arr: any[], target: any): number {\n  const length = arr.length\n  // \u6ca1\u6570\u636e\n  if (length === 0) return -1\n\n  let startIdx = 0 // \u5f00\u59cb\u4f4d\u7f6e\n  let endIdx = length - 1 // \u7ed3\u675f\u4f4d\u7f6e\n\n  while (startIdx <= endIdx) {\n    // \u4e2d\u95f4\u4f4d\u7f6e\n    const middleIdx = Math.floor((startIdx + endIdx) / 2)\n    const middleVal = arr[middleIdx]\n\n    // target\u7684\u503c \u548c \u4e2d\u95f4\u503c\u5bf9\u6bd4\n    if (middleVal > target) {\n      // \u5728\u5de6\u534a\u6bb5\n      endIdx = middleIdx - 1\n    } else if (middleVal < target) {\n      // \u5728\u53f3\u534a\u6bb5\n      startIdx = middleIdx + 1\n    } else {\n      // \u627e\u5230\u4e86\n      return middleIdx\n    }\n  }\n  return -1\n}\n\n// \u5faa\u73af\nfunction binarySearch2(arr: any[], target: any, startIdx?: number, endIdx?: number): number {\n  const length = arr.length\n  // \u6ca1\u6570\u636e\n  if (length === 0) return -1\n\n  if (startIdx == null) startIdx = 0 // \u5f00\u59cb\u4f4d\u7f6e\n  if (endIdx == null) endIdx = length - 1 // \u7ed3\u675f\u4f4d\u7f6e\n\n  if (endIdx < startIdx) return -1\n\n  // \u4e2d\u95f4\u4f4d\u7f6e\n  const middleIdx = Math.floor((startIdx + endIdx) / 2)\n  const middleVal = arr[middleIdx]\n\n  // target\u7684\u503c \u548c \u4e2d\u95f4\u503c\u5bf9\u6bd4\n  if (middleVal > target) {\n    // \u5728\u5de6\u534a\u6bb5\n    return binarySearch2(arr, target, startIdx, middleIdx - 1)\n  } else if (middleVal < target) {\n    // \u5728\u53f3\u534a\u6bb5    \n    return binarySearch2(arr, target, middleIdx + 1, endIdx)\n  } else {\n    // \u627e\u5230\u4e86\n    return middleIdx\n  }\n}\n\n// \u6d4b\u8bd5\n// console.log(binarySearch2([10, 20, 30, 50, 60], 50)) // 3\n// console.log(binarySearch2([10, 20, 30, 50, 60], 500)) // -1\n\n// \u6d4b\u8bd5\u7528\u4f8b - jest\ndescribe('\u4e8c\u5206\u67e5\u627e', () => {\n  it('\u5faa\u73af', () => {\n    const arr = [10, 20, 30, 50, 60]\n    expect(binarySearch1(arr, 50)).toBe(3)\n    expect(binarySearch1(arr, 500)).toBe(-1)\n    expect(binarySearch1([], 500)).toBe(-1)\n  })\n\n  it('\u9012\u5f52', () => {\n    const arr = [10, 20, 30, 50, 60]\n    expect(binarySearch2(arr, 50)).toBe(3)\n    expect(binarySearch2(arr, 500)).toBe(-1)\n    expect(binarySearch2([], 500)).toBe(-1)\n  })\n});\n\n// \u6027\u80fd\u6d4b\u8bd5\nconst arr = [10, 20, 30, 50, 60]\nconst target = 50\n\nconsole.time('binarySearch1')\nfor (let i = 0; i < 100 * 10000; i++) {\n  binarySearch1(arr, target)\n}\nconsole.timeEnd('binarySearch1') // 8.628ms\n\nconsole.time('binarySearch2')\nfor (let i = 0; i < 100 * 10000; i++) {\n  binarySearch2(arr, target)\n}\nconsole.timeEnd('binarySearch2') // 13.434ms",i={date:"2022-11-05 20:54:18",slug:"/29481"},o="\u7528 JS \u5b9e\u73b0\u4e8c\u5206\u67e5\u627e",s={id:"program/29481",title:"\u7528 JS \u5b9e\u73b0\u4e8c\u5206\u67e5\u627e",description:"\u5728\u6709\u5e8f\u7684\u6570\u7ec4\u4e2d\u4e8c\u5206\u67e5\u627e",source:"@site/issue/7.program/29481.md",sourceDirName:"7.program",slug:"/29481",permalink:"/issue/29481",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-11-05 20:54:18",slug:"/29481"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u94fe\u8868\u5b9e\u73b0\u961f\u5217",permalink:"/issue/29480"},next:{title:"\u627e\u51fa\u4e00\u4e2a\u6570\u7ec4\u4e2d\u548c\u4e3an\u7684\u4e24\u4e2a\u6570",permalink:"/issue/29490"}},l={},c=[];function u(n){const e={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components},{JsDemo:r}=e;return r||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("JsDemo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"\u7528-js-\u5b9e\u73b0\u4e8c\u5206\u67e5\u627e",children:"\u7528 JS \u5b9e\u73b0\u4e8c\u5206\u67e5\u627e"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u6709\u5e8f\u7684\u6570\u7ec4\u4e2d\u4e8c\u5206\u67e5\u627e"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"10,20,30,50,60 \u67e5\u627e 50\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5b9e\u73b0\u601d\u8def"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u9012\u5f52 - \u4ee3\u7801\u903b\u8f91\u66f4\u6e05\u6670\uff08\u591a\u6b21\u8c03\u7528\u51fd\u6570\uff0c\u6240\u4ee5\u7a0d\u5fae\u6162\u70b9\uff09"}),"\n",(0,t.jsx)(e.li,{children:"\u975e\u9012\u5f52 - \u6027\u80fd\u66f4\u597d"}),"\n",(0,t.jsx)(e.li,{children:"\u65f6\u95f4\u590d\u6742\u5ea6 O(logN) - \u975e\u5e38\u5feb"}),"\n"]}),"\n","\n",(0,t.jsx)(r,{lang:"ts",children:d})]})}function x(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>o});var t=r(96540);const a={},d=t.createContext(a);function i(n){const e=t.useContext(d);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);