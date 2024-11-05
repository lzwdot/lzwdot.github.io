"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["3688"],{64092:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>a,assets:()=>c,toc:()=>r,frontMatter:()=>o});var i=JSON.parse('{"id":"browser/26041","title":"DOM \u64CD\u4F5C\u7684\u5E38\u7528 API","description":"\u83B7\u53D6 DOM \u8282\u70B9","source":"@site/issue/5.browser/26041.md","sourceDirName":"5.browser","slug":"/26041","permalink":"/issue/26041","draft":false,"unlisted":false,"editUrl":"/feedback","tags":[],"version":"current","lastUpdatedBy":"lzw","lastUpdatedAt":1712409180000,"frontMatter":{"date":"2020-10-22 16:58:20","slug":"/26041"},"sidebar":"tutorialSidebar","previous":{"title":"DOM \u662F\u54EA\u79CD\u6570\u636E\u7ED3\u6784","permalink":"/issue/26038"},"next":{"title":"attr \u548C property \u7684\u533A\u522B","permalink":"/issue/26043"}}'),d=t("85893"),s=t("50065");let o={date:"2020-10-22 16:58:20",slug:"/26041"},l="DOM \u64CD\u4F5C\u7684\u5E38\u7528 API",c={},r=[];function p(e){let n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"dom-\u64CD\u4F5C\u7684\u5E38\u7528-api",children:"DOM \u64CD\u4F5C\u7684\u5E38\u7528 API"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:'<div id="div1" class="container">\n    <p id="p1">\u4E00\u6BB5\u6587\u5B57 1</p>\n    <p>\u4E00\u6BB5\u6587\u5B57 2</p>\n    <p>\u4E00\u6BB5\u6587\u5B57 3</p>\n</div>\n<div id="div2" class="container">\n    <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="">\n</div>\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u83B7\u53D6 DOM \u8282\u70B9"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"const div1 = document.getElementById('div1')\nconsole.log('div1',div1)\n// div1 <div id=\u200B\"div1\" class=\u200B\"container\">\u200B\u2026\u200B</div>\n\u200B\nconst divList = document.getElementsByTagName('div') // \u96C6\u5408\nconsole.log('divList.length',divList.length)\n// divList.length 2\nconsole.log('divList[1]',divList[1])\n// divList[1] <div id=\u200B\"div2\">\u200B\u2026\u200B</div>\u200B\nconst containerList = document.getElementsByClassName('container') // \u96C6\u5408\nconsole.log('containerList.length',divList.length)\n// containerList.length 2\nconsole.log('containerList[1]',divList[1])\n// containerList[1] <div id=\u200B\"div2\">\u200B\u2026\u200B</div>\nconst pList = document.querySelectorAll('p') // \u96C6\u5408\nconsole.log('pList',pList)\n"})}),"\n",(0,d.jsx)(n.p,{children:"property \u548C attribute"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"property\uFF1A\u4FEE\u6539\u5BF9\u8C61\u5C5E\u6027\uFF0C\u4E0D\u4F1A\u4F53\u73B0\u5230 html \u7ED3\u6784\u4E2D\uFF08\u5C3D\u91CF\u7528\uFF09"}),"\n",(0,d.jsx)(n.li,{children:"attribute\uFF1A\u4FEE\u6539 html \u5C5E\u6027\uFF0C\u4F1A\u6539\u53D8 html \u7ED3\u6784"}),"\n",(0,d.jsx)(n.li,{children:"\u4E24\u8005\u90FD\u6709\u53EF\u80FD\u5F15\u8D77 DOM \u91CD\u65B0\u6E32\u67D3"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"const pList = document.querySelectorAll('p') // \u96C6\u5408\nconst p1 = pList[0]\n// property \u5F62\u5F0F\np1.style.width = '100px'\np1.className = 'red'\nconsole.log(p1.style.width) // 100px\nconsole.log(p1.className) // red\nconsole.log(p1.nodeName) // p\nconsole.log(p1.nodeType) // 1\n// attribute \u5F62\u5F0F\np1.setAttribute('data-name','baidu')\nconsole.log(p1.getAttribute('data-name')) // baidu\np1.setAttribute('style','font-size:50px')\nconsole.log(p1.getAttribute('style')) // font-size:50px\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u65B0\u589E/\u63D2\u5165\u8282\u70B9"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"const div1 = document.getElementById('div1')\nconst div2 = document.getElementById('div2')\n// \u65B0\u5EFA\u8282\u70B9\nconst newP = document.createElement('p')\nnewP.innerText = 'this is newP'\n// \u63D2\u5165\u8282\u70B9\ndiv1.appendChild(newP)\n// \u79FB\u52A8\u8282\u70B9 id=\"p1\" \u4ECE div1 \u79FB\u52A8\u5230 div2\nconst p1 = document.getElementById('p1')\ndiv2.appendChild(p1)\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u83B7\u53D6\u5B50\u5143\u7D20\u5217\u8868 & \u83B7\u53D6\u7236\u5143\u7D20"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"const div1 = document.getElementById('div1')\nconst p1 = document.getElementById('p1')\n// \u83B7\u53D6\u7236\u5143\u7D20\nconsole.log('p1.parentNode', p1.parentNode)\n// p1.parentNode <div id=\u200B\"div1\" class=\u200B\"container\">\u200B\u2026\u200B</div>\u200B\n// \u83B7\u53D6\u5B50\u5143\u7D20\u5217\u8868\nconst div1ChildNodes = div1.childNodes\nconsole.log(div1ChildNodes)\n// NodeList(7) [text, p#p1, text, p, text, p, text]\n// 0: text\n// 1: p#p1\n// 2: text\n// 3: p\n// 4: text\n// 5: p\n// 6: text\n// length: 7\n// \u5BF9\u8C61\u8F6C\u6570\u7EC4\uFF0C\u8FC7\u6EE4 text \u6807\u7B7E nodeType=3\uFF0C\u53EA\u7559\u4E0B p\u6807\u7B7E nodeType=1\nconst div1ChildNodesP = Array.prototype.slice.call(div1ChildNodes).filter(child => {\n    if (child.nodeType === 1) {\n        return true\n    }\n    return false\n})\nconsole.log('div1ChildNodesP', div1ChildNodesP)\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5220\u9664\u8282\u70B9"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"const div1 = document.getElementById('div1')\nconst child = div1.childNodes\nconsole.log(child)\n//NodeList(7) [text, p#p1, text, p, text, p, text]\n// 0: p#p1\n// 1: text\n// 2: p\n// 3: text\n// 4: p\n// 5: text\n// length: 6\n// \u5BF9\u8C61\u8F6C\u6570\u7EC4\uFF0C\u8FC7\u6EE4 text \u6807\u7B7E nodeType=3\uFF0C\u53EA\u7559\u4E0B p\u6807\u7B7E nodeType=1\nconst childP = Array.prototype.slice.call(child).filter(ch=>{\n    if(ch.nodeType === 1){\n        return true\n    }\n    return false\n})\ndiv1.removeChild(childP[0]) // \u5220\u9664 p#p1\n"})})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(p,{...e})}):p(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var i=t(67294);let d={},s=i.createContext(d);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);