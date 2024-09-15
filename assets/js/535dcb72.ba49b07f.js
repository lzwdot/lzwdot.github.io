"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1056],{10478:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>h,toc:()=>o});var i=t(74848),s=t(28453);const r={date:"2022-02-15 16:04:29",slug:"/29463"},a="LeetCode\uff1a23. \u5408\u5e76K\u4e2a\u6392\u5e8f\u94fe\u8868",h={id:"program/29463",title:"LeetCode\uff1a23. \u5408\u5e76K\u4e2a\u6392\u5e8f\u94fe\u8868",description:"\u4f7f\u7528\u6700\u5c0f\u5806",source:"@site/issue/7.program/29463.md",sourceDirName:"7.program",slug:"/29463",permalink:"/issue/29463",draft:!1,unlisted:!1,editUrl:"/feedback",tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-02-15 16:04:29",slug:"/29463"},sidebar:"tutorialSidebar",previous:{title:"LeetCode\uff1a347. \u524d K \u4e2a\u9ad8\u9891\u5143\u7d20",permalink:"/issue/29462"},next:{title:"JavaScript \u5b9e\u73b0\uff1a\u5192\u6ce1\u6392\u5e8f",permalink:"/issue/29465"}},d={},o=[];function l(n){const e={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"leetcode23-\u5408\u5e76k\u4e2a\u6392\u5e8f\u94fe\u8868",children:"LeetCode\uff1a23. \u5408\u5e76K\u4e2a\u6392\u5e8f\u94fe\u8868"})}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u6700\u5c0f\u5806"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"/**\n * JavaScript \u5b9e\u73b0\uff1a\u6700\u5c0f\u5806\u7c7b\n * \u63d2\u5165\n * \u5220\u9664\n * \u8fd4\u56de\u5806\u5934\n * \u8fd4\u56de\u5806\u957f\n */\n\nclass MinHeap {\n    constructor() {\n        this.heap = []\n    }\n\n    swap(i1, i2) {\n        // \u4ea4\u6362\u4e24\u4e2a\u503c\n        const temp = this.heap[i1]\n        this.heap[i1] = this.heap[i2]\n        this.heap[i2] = temp\n    }\n\n    getParentIndex(i) {\n        // \u83b7\u53d6\u7236\u5143\u7d20\u7684\u7d22\u5f15\u503c (index-1)/2\n        // \u7c7b\u4f3c Math.floor((index-1/2))\n        return (i - 1) >> 1\n    }\n\n    getLeftIndex(i) {\n        // \u83b7\u53d6\u5de6\u5143\u7d20\u7684\u7d22\u5f15\u503c i*2+1\n        // \u7c7b\u4f3c Math.floor((index-1/2))\n        return i * 2 + 1\n    }\n\n    getRightIndex(i) {\n        // \u83b7\u53d6\u53f3\u5143\u7d20\u7684\u7d22\u5f15\u503c i*2+2\n        // \u7c7b\u4f3c Math.floor((index-1/2))\n        return i * 2 + 2\n    }\n\n    shiftUp(index) {\n        if (index === 0) return;\n\n        const parentIndex = this.getParentIndex(index)\n\n        // \u8f83\u5c0f\u7684\u503c \u4e0a\u79fb\n        if (this.heap[parentIndex] && this.heap[index].val < this.heap[parentIndex].val) {\n            this.swap(index, parentIndex)\n            this.shiftUp(parentIndex)\n        }\n    }\n\n    shiftDown(index) {\n        const leftIndex = this.getLeftIndex(index)\n        const rightIndex = this.getRightIndex(index)\n\n        // \u8f83\u5927\u7684\u503c \u4e0b\u79fb\n        if (this.heap[leftIndex] && this.heap[index].val > this.heap[leftIndex].val) {\n            this.swap(index, leftIndex)\n            this.shiftDown(leftIndex)\n        }\n\n        // \u8f83\u5927\u7684\u503c \u4e0b\u79fb\n        if (this.heap[rightIndex] && this.heap[index].val > this.heap[rightIndex].val) {\n            this.swap(index, rightIndex)\n            this.shiftDown(rightIndex)\n        }\n    }\n\n    insert(val) {\n        // \u63d2\u5165\u65b0\u503c\n        this.heap.push(val)\n        this.shiftUp(this.heap.length - 1)\n    }\n    pop() {\n        // \u8fd4\u56de\u5806\u9876\n        if(this.size() === 1) return this.heap.shift()\n        // \u4fdd\u5b58\u5806\u9876\n        const top = this.heap[0]\n        // \u5220\u9664\u503c\uff0c\u7528\u5806\u5c3e\u66ff\u6362\u5806\u9876\n        this.heap[0] = this.heap.pop()\n        // \u7136\u540e\u628a\u8f83\u5927\u503c\u4e0b\u79fb\n        this.shiftDown(0)\n        return top\n    }\n    peek() {\n        // \u8fd4\u56de\u5806\u9876\n        return this.heap[0]\n    }\n\n    size() {\n        // \u8fd4\u56de\u5806\u5bb9\u91cf\n        return this.heap.length\n    }\n}\n\n\n/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode[]} lists\n * @return {ListNode}\n */\nvar mergeKLists = function(lists) {\n    const res = new ListNode(0)\n    const h = new MinHeap()\n    let p = res\n    \n    // \u63a8\u5230\u5806\u4e2d\u5f97\u5230 MinHeap { heap: [ [1,4,5], [1,3,4], [2,6] ] }\n    lists.forEach(l=>{        \n        if(l) h.insert(l)\n    })\n\n    while(h.size()){\n        // \u5206\u522b\u5f39\u51fa [1,4,5], [1,3,4], [2,6] \u94fe\u8868\n        const n = h.pop()\n        p.next = n // {val:1} \u8fd9\u79cd\u7ed3\u6784\n        p = p.next\n        if(n.next) h.insert(n.next)\n    }\n\n    return res.next\n};\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u53d1\u73b0\u4f7f\u7528\u6570\u7ec4\u6392\u5e8f\u4e5f\u633a\u597d\u7684"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode[]} lists\n * @return {ListNode}\n */\nvar mergeKLists = function(lists) {\n    // \u53d1\u73b0\u7528\u6570\u7ec4\u6392\u5e8f\u4e5f\u884c\n    let list = []\n    for(let i=0;i<lists.length;i++){\n        let node = lists[i]\n        while(node){\n            list.push(node.val) \n            node = node.next \n        }\n    }\n\n    list = list.sort((a,b)=>a-b)\n\n    let res = new ListNode(0)\n    let p = res\n    list.forEach(n=>{\n        p.next = new ListNode(n)\n        p = p.next\n    })\n\n    return res.next\n};\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>h});var i=t(96540);const s={},r=i.createContext(s);function a(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function h(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);