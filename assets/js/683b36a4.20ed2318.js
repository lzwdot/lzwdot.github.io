"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6474],{92195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var i=t(74848),d=t(28453);const s={date:"2020-10-22 16:58:20",slug:"/26041"},o="DOM \u64cd\u4f5c\u7684\u5e38\u7528 API",l={id:"browser/26041",title:"DOM \u64cd\u4f5c\u7684\u5e38\u7528 API",description:"\u83b7\u53d6 DOM \u8282\u70b9",source:"@site/issue/5.browser/26041.md",sourceDirName:"5.browser",slug:"/26041",permalink:"/issue/26041",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2020-10-22 16:58:20",slug:"/26041"},sidebar:"tutorialSidebar",previous:{title:"DOM \u662f\u54ea\u79cd\u6570\u636e\u7ed3\u6784",permalink:"/issue/26038"},next:{title:"attr \u548c property \u7684\u533a\u522b",permalink:"/issue/26043"}},c={},r=[];function p(e){const n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"dom-\u64cd\u4f5c\u7684\u5e38\u7528-api",children:"DOM \u64cd\u4f5c\u7684\u5e38\u7528 API"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'<div id="div1" class="container">\n    <p id="p1">\u4e00\u6bb5\u6587\u5b57 1</p>\n    <p>\u4e00\u6bb5\u6587\u5b57 2</p>\n    <p>\u4e00\u6bb5\u6587\u5b57 3</p>\n</div>\n<div id="div2" class="container">\n    <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="">\n</div>\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u83b7\u53d6 DOM \u8282\u70b9"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const div1 = document.getElementById('div1')\nconsole.log('div1',div1)\n// div1 <div id=\u200b\"div1\" class=\u200b\"container\">\u200b\u2026\u200b</div>\n\u200b\nconst divList = document.getElementsByTagName('div') // \u96c6\u5408\nconsole.log('divList.length',divList.length)\n// divList.length 2\nconsole.log('divList[1]',divList[1])\n// divList[1] <div id=\u200b\"div2\">\u200b\u2026\u200b</div>\u200b\nconst containerList = document.getElementsByClassName('container') // \u96c6\u5408\nconsole.log('containerList.length',divList.length)\n// containerList.length 2\nconsole.log('containerList[1]',divList[1])\n// containerList[1] <div id=\u200b\"div2\">\u200b\u2026\u200b</div>\nconst pList = document.querySelectorAll('p') // \u96c6\u5408\nconsole.log('pList',pList)\n"})}),"\n",(0,i.jsx)(n.p,{children:"property \u548c attribute"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"property\uff1a\u4fee\u6539\u5bf9\u8c61\u5c5e\u6027\uff0c\u4e0d\u4f1a\u4f53\u73b0\u5230 html \u7ed3\u6784\u4e2d\uff08\u5c3d\u91cf\u7528\uff09"}),"\n",(0,i.jsx)(n.li,{children:"attribute\uff1a\u4fee\u6539 html \u5c5e\u6027\uff0c\u4f1a\u6539\u53d8 html \u7ed3\u6784"}),"\n",(0,i.jsx)(n.li,{children:"\u4e24\u8005\u90fd\u6709\u53ef\u80fd\u5f15\u8d77 DOM \u91cd\u65b0\u6e32\u67d3"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const pList = document.querySelectorAll('p') // \u96c6\u5408\nconst p1 = pList[0]\n// property \u5f62\u5f0f\np1.style.width = '100px'\np1.className = 'red'\nconsole.log(p1.style.width) // 100px\nconsole.log(p1.className) // red\nconsole.log(p1.nodeName) // p\nconsole.log(p1.nodeType) // 1\n// attribute \u5f62\u5f0f\np1.setAttribute('data-name','baidu')\nconsole.log(p1.getAttribute('data-name')) // baidu\np1.setAttribute('style','font-size:50px')\nconsole.log(p1.getAttribute('style')) // font-size:50px\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u65b0\u589e/\u63d2\u5165\u8282\u70b9"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const div1 = document.getElementById('div1')\nconst div2 = document.getElementById('div2')\n// \u65b0\u5efa\u8282\u70b9\nconst newP = document.createElement('p')\nnewP.innerText = 'this is newP'\n// \u63d2\u5165\u8282\u70b9\ndiv1.appendChild(newP)\n// \u79fb\u52a8\u8282\u70b9 id=\"p1\" \u4ece div1 \u79fb\u52a8\u5230 div2\nconst p1 = document.getElementById('p1')\ndiv2.appendChild(p1)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u83b7\u53d6\u5b50\u5143\u7d20\u5217\u8868 & \u83b7\u53d6\u7236\u5143\u7d20"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const div1 = document.getElementById('div1')\nconst p1 = document.getElementById('p1')\n// \u83b7\u53d6\u7236\u5143\u7d20\nconsole.log('p1.parentNode', p1.parentNode)\n// p1.parentNode <div id=\u200b\"div1\" class=\u200b\"container\">\u200b\u2026\u200b</div>\u200b\n// \u83b7\u53d6\u5b50\u5143\u7d20\u5217\u8868\nconst div1ChildNodes = div1.childNodes\nconsole.log(div1ChildNodes)\n// NodeList(7) [text, p#p1, text, p, text, p, text]\n// 0: text\n// 1: p#p1\n// 2: text\n// 3: p\n// 4: text\n// 5: p\n// 6: text\n// length: 7\n// \u5bf9\u8c61\u8f6c\u6570\u7ec4\uff0c\u8fc7\u6ee4 text \u6807\u7b7e nodeType=3\uff0c\u53ea\u7559\u4e0b p\u6807\u7b7e nodeType=1\nconst div1ChildNodesP = Array.prototype.slice.call(div1ChildNodes).filter(child => {\n    if (child.nodeType === 1) {\n        return true\n    }\n    return false\n})\nconsole.log('div1ChildNodesP', div1ChildNodesP)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5220\u9664\u8282\u70b9"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const div1 = document.getElementById('div1')\nconst child = div1.childNodes\nconsole.log(child)\n//NodeList(7) [text, p#p1, text, p, text, p, text]\n// 0: p#p1\n// 1: text\n// 2: p\n// 3: text\n// 4: p\n// 5: text\n// length: 6\n// \u5bf9\u8c61\u8f6c\u6570\u7ec4\uff0c\u8fc7\u6ee4 text \u6807\u7b7e nodeType=3\uff0c\u53ea\u7559\u4e0b p\u6807\u7b7e nodeType=1\nconst childP = Array.prototype.slice.call(child).filter(ch=>{\n    if(ch.nodeType === 1){\n        return true\n    }\n    return false\n})\ndiv1.removeChild(childP[0]) // \u5220\u9664 p#p1\n"})})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const d={},s=i.createContext(d);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);