"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7421],{40759:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(74848),o=t(28453);const r={date:"2020-11-04 17:34:07",slug:"/26715"},c="\u624b\u5199\u6df1\u62f7\u8d1d\uff0c\u6ce8\u610f Object.assign \u4e0d\u662f\u6df1\u62f7\u8d1d",a={id:"js-ts/26715",title:"\u624b\u5199\u6df1\u62f7\u8d1d\uff0c\u6ce8\u610f Object.assign \u4e0d\u662f\u6df1\u62f7\u8d1d",description:"\u6df1\u62f7\u8d1d\u51fd\u6570",source:"@site/issue/2.js-ts/26715.md",sourceDirName:"2.js-ts",slug:"/26715",permalink:"/issue/26715",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-11-04 17:34:07",slug:"/26715"},sidebar:"tutorialSidebar",previous:{title:"\u6570\u7ec4\u53bb\u91cd\uff0c\u8003\u8651\u8ba1\u7b97\u6548\u7387",permalink:"/issue/26700"},next:{title:"\u4ecb\u7ecd\u4e00\u4e0b RAF\uff08requestAnimationFrame\uff09",permalink:"/issue/26717"}},i={},l=[];function u(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u624b\u5199\u6df1\u62f7\u8d1d\u6ce8\u610f-objectassign-\u4e0d\u662f\u6df1\u62f7\u8d1d",children:"\u624b\u5199\u6df1\u62f7\u8d1d\uff0c\u6ce8\u610f Object.assign \u4e0d\u662f\u6df1\u62f7\u8d1d"}),"\n",(0,s.jsx)(e.p,{children:"\u6df1\u62f7\u8d1d\u51fd\u6570"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"function deepClone(obj = {}) {\n    // \u4e00\u822c\u62f7\u8d1d\u7684\u662f\u5bf9\u8c61\u6216\u8005\u6570\u7ec4\n    if (typeof obj !== 'object' || typeof obj !== 'array') {\n        return obj\n    }\n    let res\n    if (typeof obj === 'array') {\n        res = []\n    } else if (typeof obj === 'object') {\n        res = {}\n    }\n    for (let key in obj) {\n        // \u5224\u65ad\u662f\u5426\u5c5e\u4e8e\u81ea\u5df1\u7684\u5c5e\u6027\uff0c\u4e0d\u662f\u539f\u578b\u7684\n        if (obj.hasOwnProperty(key)) {\n            res[key] = deepClone(obj[key])\n        }\n    }\n    return res\n}\nconst obj1 = {\n    a: 1,\n    b: 2,\n    c: {\n        x: 10,\n        y: {\n            z: 20\n        }\n    }\n}\nconsole.log(deepClone(obj1))\n// {a: 1, b: 2, c: {\u2026}}\n// a: 1\n// b: 2\n// c:\n// x: 10\n// y:\n// z: 20\n// __proto__: Object\n// __proto__: Object\n// __proto__: Object\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6d4b\u8bd5 Object.assign \u4e0d\u662f\u6df1\u62f7\u8d1d"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"const obj1 = {\n    a: 1,\n    b: 2,\n    c: {\n        x: 10,\n        y: {\n            z: 20\n        }\n    }\n}\nconst obj2 = Object.assign({}, obj1)\nobj1.c.x = 30\nconsole.log(obj2.c.x) // 30\n"})})]})}function j(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>a});var s=t(96540);const o={},r=s.createContext(o);function c(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);