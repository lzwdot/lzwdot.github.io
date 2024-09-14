"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1228],{65183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>i,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(74848),s=t(28453);const o={date:"2020-12-10 16:41:00",slug:"/27167"},l="Proxy \u57fa\u672c\u4f7f\u7528",a={id:"vuejs-use/vuejs3-base/27167",title:"Proxy \u57fa\u672c\u4f7f\u7528",description:"\u56de\u987e Object.defineProperty \u7f3a\u70b9",source:"@site/docs/3.vuejs-use/3.vuejs3-base/27167.md",sourceDirName:"3.vuejs-use/3.vuejs3-base",slug:"/27167",permalink:"/docs/27167",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-12-10 16:41:00",slug:"/27167"},sidebar:"tutorialSidebar",previous:{title:"Vue3 \u5347\u7ea7\u5185\u5bb9",permalink:"/docs/27166"},next:{title:"Vue3 \u7528 Proxy \u5b9e\u73b0\u54cd\u5e94\u5f0f",permalink:"/docs/27175"}},c={},u=[];function d(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"proxy-\u57fa\u672c\u4f7f\u7528",children:"Proxy \u57fa\u672c\u4f7f\u7528"})}),"\n",(0,r.jsx)(n.p,{children:"\u56de\u987e Object.defineProperty \u7f3a\u70b9"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6df1\u5ea6\u76d1\u542c\uff0c\u9700\u8981\u9012\u5f52\u5230\u5e95\uff0c\u4e00\u6b21\u6027\u8ba1\u7b97\u91cf\u5927"}),"\n",(0,r.jsx)(n.li,{children:"\u65e0\u6cd5\u76d1\u542c\u65b0\u589e\u5c5e\u6027/\u5220\u9664\u5c5e\u6027\uff08Vue.set Vue.delete\uff09"}),"\n",(0,r.jsx)(n.li,{children:"\u65e0\u6cd5\u539f\u751f\u76d1\u542c\u6570\u7ec4\uff0c\u9700\u8981\u7279\u6b8a\u5904\u7406"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Proxy \u57fa\u672c\u4f7f\u7528"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// const data = {\n//     name: 'zhangsan',\n//     age: 20\n// }\nconst data = ['a', 'b', 'c']\nconst proxyData = new Proxy(data, {\n    get(target, key, receiver) {\n        // \u6539\u8fdb\n        // \u53ea\u5904\u7406\u672c\u8eab\uff08\u975e\u539f\u578b\u7684\uff09\u5c5e\u6027\n        const ownKeys = Reflect.ownKeys(target)\n        if (ownKeys.includes(key)) {\n            console.log('get', key) // \u76d1\u542c\n        }\n        const result = Reflect.get(target, key, receiver)\n        return result // \u8fd4\u56de\u7ed3\u679c\n    },\n    set(target, key, val, receiver) {\n        // \u6539\u8fdb\n        // \u91cd\u590d\u7684\u6570\u636e\uff0c\u4e0d\u5904\u7406\n        if (val === target[key]) {\n            return true\n        }\n        const result = Reflect.set(target, key, val, receiver)\n        console.log('set', key, val)\n        console.log('result', result)\n        return result // \u662f\u5426\u8bbe\u7f6e\u6210\u529f\n    },\n    deleteProperty(target, key) {\n        const result = Reflect.deleteProperty(target, key)\n        console.log('delete property', key)\n        console.log('result', result)\n        return result // \u662f\u5426\u5220\u9664\u6210\u529f\n    }\n})\n// proxyData.age\n// // get age\n//\n// proxyData.age = 30\n// // set age 30\n// // result true\n//\n// delete proxyData.age\n// // delete property age\n// // result true\n// proxyData.push('d')\n// get push\n// get length\n// set 3 d\n// result true\n// set length 4\n// result true\n// \u6539\u8fdb\u540e\nproxyData.push('d')\n// get length\n// set 3 d\n// result true\n"})}),"\n",(0,r.jsx)(n.p,{children:"Reflect \u4f5c\u7528"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u548c Proxy \u80fd\u529b\u4e00\u4e00\u5bf9\u5e94"}),"\n",(0,r.jsx)(n.li,{children:"\u89c4\u8303\u5316\uff0c\u6807\u51c6\u5316\uff0c\u51fd\u6570\u5316"}),"\n",(0,r.jsx)(n.li,{children:"\u66ff\u4ee3\u6389 Object \u4e0a\u7684\u5de5\u5177\u51fd\u6570"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const obj = {a: 100, b: 200}\n// \u5224\u65ad a \u5728 obj \u4e2d\u7684\u65b9\u6cd5\nconsole.log(\'a\' in obj) // true\n// \u770b\u8d77\u6765\u66f4\u8212\u670d\nconsole.log(Reflect.has(obj, \'a\')) // true\n// \u5220\u9664\u6570\u636e\nconsole.log(delete obj.a) // true\nconsole.log(Reflect.deleteProperty(obj, \'b\')) // true\nobj.a=300\nobj.b=400\n// \u53ef\u4ee5\u66ff\u6362 Object \u51fd\u6570\nconsole.log(Object.getOwnPropertyNames(obj)) // ["a", "b"]\nconsole.log(Reflect.ownKeys(obj)) // ["a", "b"]\n'})})]})}function i(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var r=t(96540);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);