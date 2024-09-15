"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8285],{49608:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=s(74848),t=s(28453);const r={date:"2022-01-29 11:32:14",slug:"/29445"},i="\u4ec0\u4e48\u662f\u81ea\u5b9a\u4e49 Hook",a={id:"react-use/react-hooks/29445",title:"\u4ec0\u4e48\u662f\u81ea\u5b9a\u4e49 Hook",description:"\u81ea\u5b9a\u4e49 Hook",source:"@site/docs/4.react-use/2.react-hooks/29445.md",sourceDirName:"4.react-use/2.react-hooks",slug:"/29445",permalink:"/docs/29445",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-01-29 11:32:14",slug:"/29445"},sidebar:"tutorialSidebar",previous:{title:"useRef \u548c useContext \u7b49\u5176\u4ed6 Hooks",permalink:"/docs/29418"},next:{title:"\u4f7f\u7528 Hooks \u7684\u91cd\u8981\u89c4\u8303",permalink:"/docs/29448"}},c={},l=[{value:"\u6f14\u793a useAxios \u4f8b\u5b50",id:"\u6f14\u793a-useaxios-\u4f8b\u5b50",level:2},{value:"\u7b2c\u4e09\u65b9 Hooks",id:"\u7b2c\u4e09\u65b9-hooks",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u4ec0\u4e48\u662f\u81ea\u5b9a\u4e49-hook",children:"\u4ec0\u4e48\u662f\u81ea\u5b9a\u4e49 Hook"})}),"\n",(0,o.jsx)(n.p,{children:"\u81ea\u5b9a\u4e49 Hook"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u5c01\u88c5\u901a\u7528\u7684\u529f\u80fd"}),"\n",(0,o.jsx)(n.li,{children:"\u5f00\u53d1\u548c\u4f7f\u7528\u7b2c\u4e09\u65b9 Hooks"}),"\n",(0,o.jsx)(n.li,{children:"\u81ea\u5b9a\u4e49 Hook \u5e26\u6765\u4e86\u65e0\u9650\u7684\u6269\u5c55\u6027\uff0c\u89e3\u8026\u4ee3\u7801"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u6f14\u793a-useaxios-\u4f8b\u5b50",children:"\u6f14\u793a useAxios \u4f8b\u5b50"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u672c\u8d28\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4ee5 use \u5f00\u5934\uff08\u91cd\u8981\uff09"}),"\n",(0,o.jsx)(n.li,{children:"\u5185\u90e8\u6b63\u5e38\u4f7f\u7528 useState useEffect \u6216\u8005\u5176\u4ed6 Hooks"}),"\n",(0,o.jsx)(n.li,{children:"\u81ea\u5b9a\u4e49\u8fd4\u56de\u7ed3\u679c\uff0c\u683c\u5f0f\u4e0d\u9650"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import {useState, useEffect} from "react";\nimport axios from "axios";\n\n// axios \u8fd4\u9001\u7f51\u7edc\u8bf7\u6c42\nfunction useAxios(url) {\n  const [loading, setLoading] = useState(false)\n  const [data, setData] = useState()\n  const [error, setError] = useState()\n\n  useEffect(() => {\n    // \u5229\u7528 axios \u53d1\u9001\u7f51\u7edc\u8bf7\u6c42\n    setLoading(true)\n    axios.get(url) // \u53d1\u9001\u4e00\u4e2a get \u8bf7\u6c42\n      .then(res => setData(res))\n      .catch(err => setError(err))\n      .finally(() => setLoading(false))\n  }, [url]);\n\n  return [loading, data, error]\n}\n\nexport default useAxios\n'})}),"\n",(0,o.jsx)(n.p,{children:"\u6d4b\u8bd5\u4ee3\u7801"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import React from "react";\nimport useAxios from "../customHooks/useAxios";\n\nfunction CustomHooksMemo() {\n  const url = \'http://localhost:3000/\'\n\n  // \u6570\u7ec4\u89e3\u6784\n  const [loading, data, error] = useAxios(url)\n\n  if (loading) return <div>loading...</div>\n\n  return error ? <div>{JSON.stringify(error)}</div> : <div>{JSON.stringify(data)}</div>\n}\n\nexport default CustomHooksMemo\n'})}),"\n",(0,o.jsx)(n.h2,{id:"\u7b2c\u4e09\u65b9-hooks",children:"\u7b2c\u4e09\u65b9 Hooks"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://nikgraf.github.io/react-hooks/",children:"https://nikgraf.github.io/react-hooks/"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/alibaba/hooks",children:"https://github.com/alibaba/hooks"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var o=s(96540);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);