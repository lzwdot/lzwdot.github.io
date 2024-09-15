"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1008],{48146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>a});var o=t(74848),s=t(28453);const r={date:"2022-01-28 22:03:49",slug:"/29418"},c="useRef \u548c useContext \u7b49\u5176\u4ed6 Hooks",u={id:"react-use/react-hooks/29418",title:"useRef \u548c useContext \u7b49\u5176\u4ed6 Hooks",description:"\u5176\u4ed6 Hooks",source:"@site/docs/4.react-use/2.react-hooks/29418.md",sourceDirName:"4.react-use/2.react-hooks",slug:"/29418",permalink:"/docs/29418",draft:!1,unlisted:!1,editUrl:"/feedback",tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-01-28 22:03:49",slug:"/29418"},sidebar:"tutorialSidebar",previous:{title:"\u7528 useEffect \u6a21\u62df\u7ec4\u4ef6\u751f\u547d\u5468\u671f",permalink:"/docs/29414"},next:{title:"\u4ec0\u4e48\u662f\u81ea\u5b9a\u4e49 Hook",permalink:"/docs/29445"}},l={},a=[{value:"useRef \u4f7f\u7528",id:"useref-\u4f7f\u7528",level:2},{value:"useContext \u4f7f\u7528",id:"usecontext-\u4f7f\u7528",level:2},{value:"useReducer \u7684\u4f7f\u7528",id:"usereducer-\u7684\u4f7f\u7528",level:2},{value:"useMemo \u4f7f\u7528",id:"usememo-\u4f7f\u7528",level:2},{value:"useCallback \u4f7f\u7528",id:"usecallback-\u4f7f\u7528",level:2}];function i(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"useref-\u548c-usecontext-\u7b49\u5176\u4ed6-hooks",children:"useRef \u548c useContext \u7b49\u5176\u4ed6 Hooks"})}),"\n",(0,o.jsx)(n.p,{children:"\u5176\u4ed6 Hooks"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"useRef"}),"\n",(0,o.jsx)(n.li,{children:"useContext"}),"\n",(0,o.jsx)(n.li,{children:"useReducer"}),"\n",(0,o.jsx)(n.li,{children:"useMemo"}),"\n",(0,o.jsx)(n.li,{children:"useCallback"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"useref-\u4f7f\u7528",children:"useRef \u4f7f\u7528"}),"\n",(0,o.jsx)(n.p,{children:"\u4f8b\u5b50"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'import React, {useEffect, useRef} from "react";\n\nfunction UseRefDemo() {\n  const btnRef = useRef(null) // \u521d\u59cb\u503c\n  const numRef = useRef(100);\n  console.log(numRef.current) // 100\n\n  useEffect(() => {\n    console.log(btnRef.current) // DOM \u8282\u70b9 <button>click</button>\n  }, [])\n\n  return <div>\n    <button ref={btnRef}>click</button>\n  </div>\n}\n\nexport default UseRefDemo\n'})}),"\n",(0,o.jsx)(n.h2,{id:"usecontext-\u4f7f\u7528",children:"useContext \u4f7f\u7528"}),"\n",(0,o.jsx)(n.p,{children:"\u4f8b\u5b50"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import React, {useContext} from \"react\";\n\nconst themes = {\n  light: {\n    foreground: '#000',\n    background: '#eee'\n  },\n  dark: {\n    foreground: '#fff',\n    background: '#222'\n  }\n}\n// \u521b\u5efa Context\nconst ThemeContext = React.createContext(themes.light)\n\n// \u5b59\u5b50\u7ec4\u4ef6\nfunction ThemeButton() {\n  const theme = useContext(ThemeContext);\n  return <button style={{background: theme.background, color: theme.foreground}}>\n    hello world\n  </button>\n}\n\n// \u5b50\u7ec4\u4ef6\nfunction Toolbar() {\n  return <div>\n    <ThemeButton></ThemeButton>\n  </div>\n}\n\n// \u7236\u7ec4\u4ef6\nfunction UseContextDemo() {\n  return <ThemeContext.Provider value={themes.dark}>\n    <Toolbar></Toolbar>\n  </ThemeContext.Provider>\n}\n\nexport default UseContextDemo\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usereducer-\u7684\u4f7f\u7528",children:"useReducer \u7684\u4f7f\u7528"}),"\n",(0,o.jsx)(n.p,{children:"useReducer \u80fd\u4ee3\u66ff redux \u5417"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"useReducer \u662f useState \u7684\u66ff\u4ee3\u65b9\u6848\uff0c\u7528\u4e8e state \u590d\u6742\u53d8\u5316"}),"\n",(0,o.jsx)(n.li,{children:"useReducer \u662f\u5355\u4e2a\u7ec4\u4ef6\u72b6\u6001\u7ba1\u7406\uff0c\u7ec4\u4ef6\u901a\u8baf\u8fd8\u9700\u8981 props"}),"\n",(0,o.jsx)(n.li,{children:"redux \u662f\u5168\u5c40\u7684\u72b6\u6001\u7ba1\u7406\uff0c\u591a\u7ec4\u4ef6\u5171\u4eab\u6570\u636e"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f8b\u5b50"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import React, {useReducer} from \"react\";\n\nconst initialState = {count: 0}\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case 'increment' :\n      return {count: state.count + 1}\n    case 'decrement':\n      return {count: state.count - 1}\n    default:\n      return state\n  }\n}\n\nfunction UseReducerDemo() {\n  // \u5f88\u50cf const [count,setCount] = useState(0)\n  const [state, dispatch] = useReducer(reducer, initialState)\n\n  return <div>\n    count: {state.count}\n    <button onClick={() => dispatch({type: 'increment'})}>increment</button>\n    <button onClick={() => dispatch({type: 'decrement'})}>decrement</button>\n  </div>\n}\n\nexport default UseReducerDemo\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usememo-\u4f7f\u7528",children:"useMemo \u4f7f\u7528"}),"\n",(0,o.jsx)(n.p,{children:"\u4f7f\u7528 useMemo \u505a\u6027\u80fd\u4f18\u5316"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"React \u9ed8\u8ba4\u4f1a\u66f4\u65b0\u6240\u6709\u5b50\u7ec4\u4ef6"}),"\n",(0,o.jsx)(n.li,{children:"class \u7ec4\u4ef6\u4f7f\u7528 SCU \u548c PureComponect \u505a\u4f18\u5316"}),"\n",(0,o.jsx)(n.li,{children:"Hooks \u4e2d\u4f7f\u7528 useMemo\uff0c\u4f46\u4f18\u5316\u7684\u539f\u7406\u662f\u76f8\u540c\u7684"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f8b\u5b50"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import React, {memo, useMemo, useState} from \"react\";\n\n// \u5b50\u7ec4\u4ef6\n// function Child({userInfo}) {\n//   console.log('child render ...', userInfo)\n//\n//   return <div>\n//     <p>this is child {userInfo.name} {userInfo.age}</p>\n//   </div>\n// }\n\n// \u7c7b\u4f3c class PureComponent\uff0c\u5bf9 props \u8fdb\u884c\u6d45\u5c42\u6bd4\u8f83\nconst Child = memo(({userInfo}) => {\n  console.log('child render ...', userInfo)\n\n  return <div>\n    <p>this is child {userInfo.name} {userInfo.age}</p>\n  </div>\n})\n\n// \u7236\u7ec4\u4ef6\nfunction UseMemoDemo() {\n  console.log('parent render ...')\n\n  const [count, setCount] = useState(0)\n  const [name, setName] = useState('lzw')\n\n  // const userInfo = {name, age: 20}\n  // \u7528 useMemo \u7f13\u5b58\u6570\u636e\uff0c\u6709\u4f9d\u8d56\n  const userInfo = useMemo(() => {\n    return {name, age: 21}\n  }, [name])\n\n  return <div>\n    <p>\n      count is {count}\n      <button onClick={() => setCount(count + 1)}>click</button>\n    </p>\n    <Child userInfo={userInfo}></Child>\n  </div>\n}\n\nexport default UseMemoDemo\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usecallback-\u4f7f\u7528",children:"useCallback \u4f7f\u7528"}),"\n",(0,o.jsx)(n.p,{children:"\u4f7f\u7528 useCallback \u505a\u6027\u80fd\u4f18\u5316"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"useMemo \u7f13\u5b58\u6570\u636e"}),"\n",(0,o.jsx)(n.li,{children:"useCallback \u7f13\u5b58\u51fd\u6570"}),"\n",(0,o.jsx)(n.li,{children:"\u4e24\u8005\u662f React Hooks \u7684\u5e38\u89c1\u4f18\u5316\u7b56\u7565"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f8b\u5b50"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import React, {memo, useMemo, useState, useCallback} from \"react\";\n\n// \u5b50\u7ec4\u4ef6\uff0c memo \u7c7b\u4f3c class PureComponent\uff0c\u5bf9 props \u8fdb\u884c\u6d45\u5c42\u6bd4\u8f83\nconst Child = memo(({userInfo, onChange}) => {\n  console.log('child render ...', userInfo)\n\n  return <div>\n    <p>this is child {userInfo.name} {userInfo.age}</p>\n    <input onChange={onChange}/>\n  </div>\n})\n\n// \u7236\u7ec4\u4ef6\nfunction UseCallbackDemo() {\n  console.log('parent render ...')\n\n  const [count, setCount] = useState(0)\n  const [name, setName] = useState('lzw')\n\n  // \u7528 useMemo \u7f13\u5b58\u6570\u636e\uff0c\u6709\u4f9d\u8d56\n  const userInfo = useMemo(() => {\n    return {name, age: 21}\n  }, [name])\n\n  // function onChange(e) {\n  //   console.log(e.target.value)\n  // }\n  // \u7528 useCallback \u7f13\u5b58\u51fd\u6570\n  const onChange = useCallback(e => {\n    console.log(e.target.value)\n  }, []);\n\n\n  return <div>\n    <p>\n      count is {count}\n      <button onClick={() => setCount(count + 1)}>click</button>\n    </p>\n    <Child userInfo={userInfo} onChange={onChange}></Child>\n  </div>\n}\n\nexport default UseCallbackDemo\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>u});var o=t(96540);const s={},r=o.createContext(s);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);