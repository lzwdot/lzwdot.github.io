"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1911],{77175:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>p,contentTitle:()=>h,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>x});var a=i(74848),t=i(28453);const o='<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>\u54cd\u5e94\u5f0f\u5e03\u5c40 - \u5a92\u4f53\u67e5\u8be2</title>\n</head>\n\n<body>\n    <style>\n        @media screen {\n            .box1 {\n                font-size: 60px;\n            }\n        }\n\n        @media print {\n            .box2 {\n                font-size: 60px;\n            }\n        }\n    </style>\n\n    <div class="box1">\n        \u5c4f\u5e55 screen\n    </div>\n\n    <div class="box2">\n        \u6253\u5370 print\n    </div>\n</body>\n\n</html>',l='<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>\u54cd\u5e94\u5f0f\u5e03\u5c40 - \u5a92\u4f53\u67e5\u8be2</title>\n</head>\n\n<body>\n    <style>\n        /* max-width:1000px */\n        @media (min-width:700px) {\n            .box1 {\n                width: 200px;\n                height: 200px;\n                background-color: pink;\n            }\n        }\n\n        /* \u7ad6\u5c4f */\n        @media (orientation:portrait) {\n            .box2 {\n                width: 200px;\n                height: 200px;\n                background-color: pink;\n            }\n        }\n\n        /* \u6a2a\u5c4f */\n        @media (orientation:landscape) {\n            .box2 {\n                width: 200px;\n                height: 200px;\n                background-color: skyblue;\n            }\n        }\n    </style>\n\n    <div class="box1">\n        min-width:700px\n    </div>\n\n    <div class="box2">\n        \u6a2a\u7ad6\u5c4f\u989c\u8272\u53d8\u5316\n    </div>\n</body>\n\n</html>',d='<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>\u54cd\u5e94\u5f0f\u5e03\u5c40 - \u5a92\u4f53\u67e5\u8be2</title>\n</head>\n\n<body>\n    <style>\n        @media (min-width:700px) and (max-width:1000px) {\n            .box1 {\n                width: 200px;\n                height: 200px;\n                background-color: pink;\n            }\n        }\n\n        @media not (min-width:700px) {\n            .box1 {\n                width: 200px;\n                height: 200px;\n                background-color: pink;\n            }\n        }\n\n        @media screen,print and (min-width:700px) {\n            .box1 {\n                width: 200px;\n                height: 200px;\n                background-color: pink;\n            }\n        }\n    </style>\n\n    <div class="box1">\n        (min-width:700px) and (max-width:1000px)\n    </div>\n\n    <div class="box2">\n        not (min-width:700px)\n    </div>\n\n    <div class="box3">\n        screen,print and (min-width:700px)\n    </div>\n</body>\n\n</html>',r='<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>\u54cd\u5e94\u5f0f\u5e03\u5c40 - \u6805\u683c\u7cfb\u7edf</title>\n</head>\n\n<body>\n\n    <style>\n        .row {\n            width: 300px;\n            height: 300px;\n            background: skyblue;\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            grid-template-rows: 50px;\n            grid-auto-rows: 50px;\n        }\n\n        .row div {\n            background-color: pink;\n            border: 1px solid gray;\n            box-sizing: border-box;\n        }\n\n        .row .col-1 {\n            grid-area: auto/auto/auto/span 1;\n        }\n\n        .row .col-2 {\n            grid-area: auto/auto/auto/span 2;\n        }\n\n        .row .col-3 {\n            grid-area: auto/auto/auto/span 3;\n        }\n\n        .row .col-4 {\n            grid-area: auto/auto/auto/span 4;\n        }\n\n        .row .col-5 {\n            grid-area: auto/auto/auto/span 5;\n        }\n\n        .row .col-6 {\n            grid-area: auto/auto/auto/span 6;\n        }\n\n        .row .col-7 {\n            grid-area: auto/auto/auto/span 7;\n        }\n\n        .row .col-8 {\n            grid-area: auto/auto/auto/span 8;\n        }\n\n        .row .col-9 {\n            grid-area: auto/auto/auto/span 9;\n        }\n\n        .row .col-10 {\n            grid-area: auto/auto/auto/span 10;\n        }\n\n        .row .col-11 {\n            grid-area: auto/auto/auto/span 11;\n        }\n\n        .row .col-12 {\n            grid-area: auto/auto/auto/span 12;\n        }\n\n        @media screen and (min-width:576px) {\n            .row .col-sm-1 {\n                grid-area: auto/auto/auto/span 1;\n            }\n\n            .row .col-sm-2 {\n                grid-area: auto/auto/auto/span 2;\n            }\n\n            .row .col-sm-3 {\n                grid-area: auto/auto/auto/span 3;\n            }\n\n            .row .col-sm-4 {\n                grid-area: auto/auto/auto/span 4;\n            }\n\n            .row .col-sm-5 {\n                grid-area: auto/auto/auto/span 5;\n            }\n\n            .row .col-sm-6 {\n                grid-area: auto/auto/auto/span 6;\n            }\n\n            .row .col-sm-7 {\n                grid-area: auto/auto/auto/span 7;\n            }\n\n            .row .col-sm-8 {\n                grid-area: auto/auto/auto/span 8;\n            }\n\n            .row .col-sm-9 {\n                grid-area: auto/auto/auto/span 9;\n            }\n\n            .row .col-sm-10 {\n                grid-area: auto/auto/auto/span 10;\n            }\n\n            .row .col-sm-11 {\n                grid-area: auto/auto/auto/span 11;\n            }\n\n            .row .col-sm-12 {\n                grid-area: auto/auto/auto/span 12;\n            }\n        }\n    </style>\n    <div class="row">\n        <div class="col-3 col-sm-3">col-3 col-sm-3</div>\n        <div class="col-3 col-sm-6">col-3 col-sm-6</div>\n        <div class="col-3 col-sm-6">col-3 col-sm-6</div>\n        <div class="col-3 col-sm-12">col-3 col-sm-12</div>\n    </div>\n</body>\n\n</html>',s='<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>\u54cd\u5e94\u5f0f\u5e03\u5c40 - \u54cd\u5e94\u5f0f\u4ea4\u4e92</title>\n</head>\n\n<body>\n\n    <style>\n        ul {\n            display: none;\n        }\n\n        input {\n            display: none;\n        }\n\n        input:checked+ul {\n            display: block;\n        }\n\n        @media screen and (min-width:500px) {\n            ul {\n                display: block;\n            }\n\n            span {\n                display: none;\n            }\n        }\n    </style>\n    <label for="menu">\n        <span>\n            \u83dc\u5355\n        </span>\n    </label>\n    <input id="menu" type="checkbox">\n    <ul>\n        <li>\u9996\u9875</li>\n        <li>\u6559\u7a0b</li>\n        <li>\u8bba\u575b</li>\n        <li>\u6587\u7ae0</li>\n    </ul>\n</body>\n\n</html>',c={date:"2022-02-25 21:09:42",slug:"/29468"},h="css \u54cd\u5e94\u5f0f\u5e03\u5c40",u={id:"css-layout/29468",title:"css \u54cd\u5e94\u5f0f\u5e03\u5c40",description:"\u54cd\u5e94\u5f0f\u5e03\u5c40\u6982\u5ff5",source:"@site/docs/2.css-layout/29468.md",sourceDirName:"2.css-layout",slug:"/29468",permalink:"/docs/29468",draft:!1,unlisted:!1,editUrl:"/feedback",tags:[],version:"current",lastUpdatedBy:"lzw",lastUpdatedAt:171240918e4,frontMatter:{date:"2022-02-25 21:09:42",slug:"/29468"},sidebar:"tutorialSidebar",previous:{title:"vw \u79fb\u52a8\u7aef\u5e03\u5c40",permalink:"/docs/29467"},next:{title:"css \u591a\u680f\u5e03\u5c40",permalink:"/docs/29469"}},p={},x=[{value:"\u5a92\u4f53\u67e5\u8be2\u8bed\u6cd5",id:"\u5a92\u4f53\u67e5\u8be2\u8bed\u6cd5",level:2},{value:"\u5a92\u4f53\u7c7b\u578b\uff08Media types\uff09",id:"\u5a92\u4f53\u7c7b\u578bmedia-types",level:3},{value:"\u5a92\u4f53\u7279\u6027\uff08Media features\uff09",id:"\u5a92\u4f53\u7279\u6027media-features",level:3},{value:"\u903b\u8f91\u64cd\u4f5c\u7b26\uff08logical operation\uff09",id:"\u903b\u8f91\u64cd\u4f5c\u7b26logical-operation",level:3},{value:"link \u6807\u7b7e\u65b9\u5f0f",id:"link-\u6807\u7b7e\u65b9\u5f0f",level:3},{value:"\u5a92\u4f53\u67e5\u8be2\u89c4\u5219",id:"\u5a92\u4f53\u67e5\u8be2\u89c4\u5219",level:2},{value:"\u54cd\u5e94\u5f0f\u65ad\u70b9\uff08\u9608\u503c\uff09\u8bbe\u5b9a",id:"\u54cd\u5e94\u5f0f\u65ad\u70b9\u9608\u503c\u8bbe\u5b9a",level:2},{value:"\u54cd\u5e94\u5f0f\u6805\u683c\u7cfb\u7edf",id:"\u54cd\u5e94\u5f0f\u6805\u683c\u7cfb\u7edf",level:2},{value:"\u54cd\u5e94\u5f0f\u4ea4\u4e92\u5b9e\u73b0",id:"\u54cd\u5e94\u5f0f\u4ea4\u4e92\u5b9e\u73b0",level:2}];function m(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...n.components},{HtmlDemo:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("HtmlDemo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"css-\u54cd\u5e94\u5f0f\u5e03\u5c40",children:"css \u54cd\u5e94\u5f0f\u5e03\u5c40"})}),"\n",(0,a.jsx)(e.p,{children:"\u54cd\u5e94\u5f0f\u5e03\u5c40\u6982\u5ff5"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u6307\u7f51\u9875\u80fd\u81ea\u52a8\u8bc6\u522b\u5c4f\u5e55\u5bbd\u5ea6\uff0c\u5e76\u505a\u51fa\u76f8\u5e94\u8c03\u6574\u7684\u7f51\u9875\u8bbe\u8ba1\u3002\u54cd\u5e94\u5f0f\u5e03\u5c40\u53ef\u4ee5\u4e3a\u4e0d\u540c\u7ec8\u7aef\u7684\u7528\u6237\u63d0\u4f9b\u66f4\u52a0\u8212\u9002\u7684\u754c\u9762\u548c\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c"}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"\u5a92\u4f53\u67e5\u8be2\u8bed\u6cd5",children:"\u5a92\u4f53\u67e5\u8be2\u8bed\u6cd5"}),"\n",(0,a.jsx)(e.p,{children:"\u57fa\u672c\u8bed\u6cd5"}),"\n",(0,a.jsx)(e.h3,{id:"\u5a92\u4f53\u7c7b\u578bmedia-types",children:"\u5a92\u4f53\u7c7b\u578b\uff08Media types\uff09"}),"\n",(0,a.jsx)(e.p,{children:"\u63cf\u8ff0\u8bbe\u5907\u7684\u4e00\u822c\u7c7b\u578b"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"all \u9002\u7528\u4e8e\u6240\u6709\u8bbe\u5907"}),"\n",(0,a.jsx)(e.li,{children:"print \u9002\u7528\u4e8e\u5728\u6253\u5370\u9884\u89c8\u6a21\u5f0f"}),"\n",(0,a.jsx)(e.li,{children:"screen \u4e3b\u8981\u7528\u4e8e\u5c4f\u5e55"}),"\n",(0,a.jsx)(e.li,{children:"speech \u4e3b\u8981\u7528\u4e8e\u8bed\u8a00\u5408\u6210\u5668"}),"\n"]}),"\n","\n",(0,a.jsx)(i,{children:o}),"\n",(0,a.jsx)(e.h3,{id:"\u5a92\u4f53\u7279\u6027media-features",children:"\u5a92\u4f53\u7279\u6027\uff08Media features\uff09"}),"\n",(0,a.jsx)(e.p,{children:"\u63cf\u8ff0\u4e86 user agent\u3001\u8f93\u51fa\u8bbe\u5907\uff0c\u6216\u662f\u6d4f\u89c8\u73af\u5883\u7684\u5177\u4f53\u7279\u5f81"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"width \u89c6\u7a97 viewpoint \u7684\u5bbd\u5ea6"}),"\n",(0,a.jsx)(e.li,{children:"height \u89c6\u7a97 viewpoint \u7684\u9ad8\u5ea6"}),"\n",(0,a.jsx)(e.li,{children:"aspect-ratio \u89c6\u7a97 viewpoint \u7684\u5bbd\u9ad8\u6bd4"}),"\n",(0,a.jsx)(e.li,{children:"orientation \u89c6\u7a97 viewpoint \u7684\u65cb\u8f6c\u65b9\u5411"}),"\n",(0,a.jsx)(e.li,{children:"..."}),"\n"]}),"\n","\n",(0,a.jsx)(i,{children:l}),"\n",(0,a.jsx)(e.h3,{id:"\u903b\u8f91\u64cd\u4f5c\u7b26logical-operation",children:"\u903b\u8f91\u64cd\u4f5c\u7b26\uff08logical operation\uff09"}),"\n",(0,a.jsx)(e.p,{children:"not,and \u548c only \u53ef\u7528\u4e8e\u8054\u5408\u6784\u9020\u590d\u6742\u7684\u5a92\u4f53\u67e5\u8be2"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"and \u7528\u4e8e\u5c06\u591a\u4e2a\u5a92\u4f53\u67e5\u8be2\u89c4\u5219\u7ec4\u5408\u6210\u5355\u6761\u5a92\u4f53\u67e5\u8be2"}),"\n",(0,a.jsx)(e.li,{children:"not \u7528\u4e8e\u5426\u5b9a\u5a92\u4f53\u67e5\u8be2\uff0c\u5982\u679c\u4e0d\u6ee1\u8db3\u8fd9\u4e2a\u6761\u4ef6\u5219\u8fd4\u56de true, \u5426\u5219\u8fd4\u56de false"}),"\n",(0,a.jsx)(e.li,{children:"only \u7528\u4e8e\u65e7\u7248\u6d4f\u89c8\u5668\u8bc6\u522b\u5a92\u4f53\u7c7b\u578b\u4f7f\u7528"}),"\n",(0,a.jsx)(e.li,{children:"\u9017\u53f7\uff0c\u7528\u4e8e\u5c06\u591a\u4e2a\u5a92\u4f53\u67e5\u8be2\u5408\u5e76\u4e3a\u4e00\u4e2a\u89c4\u5219"}),"\n"]}),"\n","\n",(0,a.jsx)(i,{children:d}),"\n",(0,a.jsx)(e.h3,{id:"link-\u6807\u7b7e\u65b9\u5f0f",children:"link \u6807\u7b7e\u65b9\u5f0f"}),"\n",(0,a.jsx)(e.p,{children:"\u901a\u8fc7 media \u5c5e\u6027\u8bbe\u7f6e\u5a92\u4f53\u67e5\u8be2\u7c7b\u578b\u548c\u5a92\u4f53\u7279\u6027"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-css",children:'<link rel="stylesheet" href="a.css" media="(orientation:portrait)">\n<link rel="stylesheet" href="b.css" media="(orientation:landscape)">\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u5a92\u4f53\u67e5\u8be2\u89c4\u5219",children:"\u5a92\u4f53\u67e5\u8be2\u89c4\u5219"}),"\n",(0,a.jsx)(e.p,{children:"\u7f16\u5199\u4f4d\u7f6e\u53ca\u987a\u5e8f"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u6dfb\u52a0\u5230\u6837\u5f0f\u8868\u7684\u5e95\u90e8\uff0c\u5bf9 css \u8fdb\u884c\u4f18\u5148\u7ea7\u7684\u8986\u76d6"}),"\n",(0,a.jsx)(e.li,{children:"\u79fb\u52a8\u7aef -> PC \u7aef\u7684\u9002\u914d\u539f\u5219\uff1a min-width \u4ece\u5c0f\u5230\u5927"}),"\n",(0,a.jsx)(e.li,{children:"PC \u7aef -> \u79fb\u52a8\u7aef\u7684\u9002\u914d\u539f\u5219\uff1a max-width \u4ece\u5927\u5230\u5c0f"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-css",children:"/* \u540e\u9762\u7684\u8986\u76d6\u524d\u9762\u7684 */\n.box1 {\n    background-color: blue;\n}\n\n@media (min-width:700px) {\n    .box1 {\n        background-color: pink;\n    }\n}\n\n/* \u79fb\u52a8\u7aef\u4f18\u5148\u65f6\uff0cmin-width \u987a\u5e8f\uff1a\u4ece\u5c0f\u5230\u5927 */\n.box2 {\n    background-color: blue;\n}\n\n@media (min-width:700px) {\n    .box1 {\n        background-color: pink;\n    }\n}\n\n@media (min-width:100px) {\n    .box1 {\n        background-color: green;\n    }\n}\n\n/* PC \u7aef\u4f18\u5148\u65f6\uff0cmax-width \u987a\u5e8f\uff1a\u4ece\u5927\u5230\u5c0f */\n.box3 {\n    background-color: blue;\n}\n\n@media (max-width:1000px) {\n    .box1 {\n        background-color: pink;\n    }\n}\n\n@media (max-width:700px) {\n    .box1 {\n        background-color: green;\n    }\n}\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u54cd\u5e94\u5f0f\u65ad\u70b9\u9608\u503c\u8bbe\u5b9a",children:"\u54cd\u5e94\u5f0f\u65ad\u70b9\uff08\u9608\u503c\uff09\u8bbe\u5b9a"}),"\n",(0,a.jsx)(e.p,{children:"\u4e00\u822c\u63a8\u8350\u7684"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Extra small < 576px"}),"\n",(0,a.jsx)(e.li,{children:"Small >= 576px ,-sm"}),"\n",(0,a.jsx)(e.li,{children:"Medium >= 768px ,-md"}),"\n",(0,a.jsx)(e.li,{children:"Large >= 992px ,-lg"}),"\n",(0,a.jsx)(e.li,{children:"X-Large >= 1200px ,-xl"}),"\n",(0,a.jsx)(e.li,{children:"XX-Large >= 1400px ,-xxl"}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-css",children:".d-none {\n  display:none\n}\n\n@media (min-width:576px) {\n  .d-sm-none {\n    display:none\n  }\n}\n\n/*...*/\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u54cd\u5e94\u5f0f\u6805\u683c\u7cfb\u7edf",children:"\u54cd\u5e94\u5f0f\u6805\u683c\u7cfb\u7edf"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u6805\u683c\u5e03\u5c40 + \u65ad\u70b9\u8bbe\u5b9a"}),"\n"]}),"\n","\n",(0,a.jsx)(i,{children:r}),"\n",(0,a.jsx)(e.h2,{id:"\u54cd\u5e94\u5f0f\u4ea4\u4e92\u5b9e\u73b0",children:"\u54cd\u5e94\u5f0f\u4ea4\u4e92\u5b9e\u73b0"}),"\n",(0,a.jsx)(e.p,{children:"\u4e00\u822c\u4e24\u79cd\u65b9\u5f0f"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\u5229\u7528 ",":checked"," \u4f2a\u7c7b"]}),"\n",(0,a.jsx)(e.li,{children:"\u5229\u7528 JavaScript \u811a\u672c"}),"\n"]}),"\n","\n",(0,a.jsx)(i,{children:s})]})}function g(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(m,{...n})}):m(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>d});var a=i(96540);const t={},o=a.createContext(t);function l(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);