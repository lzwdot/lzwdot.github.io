"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5135],{30399:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=t(74848),o=t(28453);const s={date:"2020-12-15 14:20:00",slug:"/27175"},l="Vue3 \u7528 Proxy \u5b9e\u73b0\u54cd\u5e94\u5f0f",c={id:"vuejs-use/vuejs3-base/27175",title:"Vue3 \u7528 Proxy \u5b9e\u73b0\u54cd\u5e94\u5f0f",description:"Proxy \u5b9e\u73b0\u54cd\u5e94\u5f0f",source:"@site/docs/3.vuejs-use/3.vuejs3-base/27175.md",sourceDirName:"3.vuejs-use/3.vuejs3-base",slug:"/27175",permalink:"/docs/27175",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-12-15 14:20:00",slug:"/27175"},sidebar:"tutorialSidebar",previous:{title:"Proxy \u57fa\u672c\u4f7f\u7528",permalink:"/docs/27167"},next:{title:"Vue3 \u5bf9 Vue2 \u6709\u4f18\u52bf\u66f4\u5feb",permalink:"/docs/27891"}},a={},i=[];function u(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"vue3-\u7528-proxy-\u5b9e\u73b0\u54cd\u5e94\u5f0f",children:"Vue3 \u7528 Proxy \u5b9e\u73b0\u54cd\u5e94\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"Proxy \u5b9e\u73b0\u54cd\u5e94\u5f0f"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u6df1\u5ea6\u76d1\u542c\uff0c\u6027\u80fd\u66f4\u597d"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u76d1\u542c \u65b0\u589e/\u5220\u9664\u5c5e\u6027"}),"\n",(0,r.jsx)(n.li,{children:"\u53ef\u76d1\u542c\u6570\u7ec4\u53d8\u5316"}),"\n",(0,r.jsx)(n.li,{children:"\u4f46\uff0c\u65e0\u6cd5\u517c\u5bb9\u6240\u6709\u6d4f\u89c8\u5668\uff0c\u65e0\u6cd5 polyfill"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// \u521b\u5efa\u54cd\u5e94\u5f0f\nfunction reactive(target = {}) {\n    if (typeof target !== 'object' || target == null) {\n        // \u4e0d\u662f\u5bf9\u8c61\u6216\u6570\u7ec4\uff0c\u5219\u8fd4\u56de\n        return target\n    }\n    // \u4ee3\u7406\u914d\u7f6e\n    const proxyConf = {\n        get(target, key, receiver) {\n            // \u6539\u8fdb\n            // \u53ea\u5904\u7406\u672c\u8eab\uff08\u975e\u539f\u578b\u7684\uff09\u5c5e\u6027\n            const ownKeys = Reflect.ownKeys(target)\n            if (ownKeys.includes(key)) {\n                console.log('get', key) // \u76d1\u542c\n            }\n            const result = Reflect.get(target, key, receiver)\n            // return result // \u8fd4\u56de\u7ed3\u679c\n            // \u6df1\u5ea6\u76d1\u542c\uff0c\u628a\u4e0a\u9762\u4fee\u6539\u6210\u4e0b\u9762\n            return reactive(result);\n            // \u90a3\u4e48\u6027\u80fd\u662f\u5982\u4f55\u63d0\u5347?\n            /**\n             *  Object.defineProperty \u4e00\u6b21\u6027\u9012\u5f52\u5b8c\n             *  Proxy \u662f get \u5230\u54ea\u4e00\u5c42\uff0c\u5c31\u9012\u5f52\u5230\u54ea\u4e00\u5c42\n             */\n        },\n        set(target, key, val, receiver) {\n            // \u6539\u8fdb\n            // \u91cd\u590d\u7684\u6570\u636e\uff0c\u4e0d\u5904\u7406\n            if (val === target[key]) {\n                return true\n            }\n            const ownKeys = Reflect.ownKeys(target)\n            if (ownKeys.includes(key)) {\n                console.log('\u5df2\u6709\u7684 key', key)\n            }else{\n                console.log('\u65b0\u589e\u7684 key', key)\n            }\n            const result = Reflect.set(target, key, val, receiver)\n            console.log('set', key, val)\n            console.log('result', result)\n            return result // \u662f\u5426\u8bbe\u7f6e\u6210\u529f\n        },\n        deleteProperty(target, key) {\n            const result = Reflect.deleteProperty(target, key)\n            console.log('delete property', key)\n            console.log('result', result)\n            return result // \u662f\u5426\u5220\u9664\u6210\u529f\n        }\n    }\n    // \u751f\u6210\u4ee3\u7406\u5bf9\u8c61\n    const observed = new Proxy(target, proxyConf)\n    return observed\n}\n// \u6d4b\u8bd5\u6570\u636e\nconst data = {\n    name: 'zhangsan',\n    age: 20,\n    info: {\n        city: 'shenzhen',\n        a: {\n            b: {\n                c: {\n                    d: {\n                        e: 100\n                    }\n                }\n            }\n        }\n    }\n}\nconst proxyData = reactive(data);\n// \u6d4b\u8bd5\nconsole.log(proxyData.age)\n// get age\n// 20\n// \u6ca1\u6709\u6df1\u5ea6\u76d1\u542c\nconsole.log(proxyData.info.city)\n// get info\n// shenzhen\n// \u6df1\u5ea6\u76d1\u542c\nconsole.log(proxyData.info.city)\n// get info\n// get city\n// shenzhen\n// \u65b0\u589e\u7684 key\nconsole.log(proxyData.age1=100)\n// \u65b0\u589e\u7684 key age1\n// set age1 100\n// result true\n// 100\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u90a3\u4e48\u6027\u80fd\u662f\u5982\u4f55\u63d0\u5347?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Object.defineProperty \u4e00\u6b21\u6027\u9012\u5f52\u5b8c"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Proxy \u662f get \u5230\u54ea\u4e00\u5c42\uff0c\u5c31\u9012\u5f52\u5230\u54ea\u4e00\u5c42"}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var r=t(96540);const o={},s=r.createContext(o);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);