"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2593],{46161:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=e(74848),c=e(28453);const o={date:"2020-03-08 21:33:20",slug:"/24486",authors:"lzw"},t="\u591a\u53f0\u670d\u52a1\u5668\u4f7f\u7528 Rsync \u540c\u6b65\u4ee3\u7801",l={permalink:"/blog/24486",editUrl:"/feedback",source:"@site/blog/2020/03/24486.md",title:"\u591a\u53f0\u670d\u52a1\u5668\u4f7f\u7528 Rsync \u540c\u6b65\u4ee3\u7801",description:"\u5f53\u591a\u53f0\u670d\u52a1\u5668\u4f7f\u7528\u8d1f\u8f7d\u5747\u8861\u7b49\u89e3\u51b3\u65b9\u6848\u65f6\uff0c\u5404\u670d\u52a1\u5668\u4ee3\u7801\u540c\u6b65\u53c8\u662f\u53e6\u4e00\u4e2a\u95ee\u9898\uff0c\u8fd9\u65f6\u4f7f\u7528 Rsync \u662f\u4e00\u4e2a\u5e38\u7528\u7684\u65b9\u6848\u3002\u8fd9\u91cc\u4ee5\u4e24\u53f0\u670d\u52a1\u5668\u4e3a\u4f8b",date:"2020-03-08T21:33:20.000Z",tags:[],readingTime:3.315,hasTruncateMarker:!0,authors:[{name:"\u5927\u5218",title:"\u4e00\u4e2a web \u5f00\u53d1\u8005",url:"https://github.com/lzwdot",imageURL:"https://avatars.githubusercontent.com/u/24477920?v=4",key:"lzw",page:null}],frontMatter:{date:"2020-03-08 21:33:20",slug:"/24486",authors:"lzw"},unlisted:!1,prevItem:{title:"Nginx \u57df\u540d\u5b50\u76ee\u5f55\u91cd\u5b9a\u5411\u5176\u4ed6\u76ee\u5f55",permalink:"/blog/24990"},nextItem:{title:"\u5b9d\u5854 ECS \u914d\u7f6e\u8d1f\u8f7d\u5747\u8861 SLB \u7684\u95ee\u9898",permalink:"/blog/24469"}},d={authorsImageUrls:[void 0]},i=[{value:"\u5b89\u88c5\u914d\u7f6e Rsync",id:"\u5b89\u88c5\u914d\u7f6e-rsync",level:2},{value:"\u4ee3\u7801\u540c\u6b65",id:"\u4ee3\u7801\u540c\u6b65",level:2}];function a(n){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"\u5f53\u591a\u53f0\u670d\u52a1\u5668\u4f7f\u7528\u8d1f\u8f7d\u5747\u8861\u7b49\u89e3\u51b3\u65b9\u6848\u65f6\uff0c\u5404\u670d\u52a1\u5668\u4ee3\u7801\u540c\u6b65\u53c8\u662f\u53e6\u4e00\u4e2a\u95ee\u9898\uff0c\u8fd9\u65f6\u4f7f\u7528 Rsync \u662f\u4e00\u4e2a\u5e38\u7528\u7684\u65b9\u6848\u3002\u8fd9\u91cc\u4ee5\u4e24\u53f0\u670d\u52a1\u5668\u4e3a\u4f8b"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\u4e3b\u670d\u52a1\u5668 A \uff1a192.168.0.2"}),"\n",(0,r.jsx)(s.p,{children:"\u8f85\u670d\u52a1\u5668 B \uff1a192.168.0.3"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u5b89\u88c5\u914d\u7f6e-rsync",children:"\u5b89\u88c5\u914d\u7f6e Rsync"}),"\n",(0,r.jsx)(s.p,{children:"\u5b89\u88c5 Rsync \u5e76\u67e5\u770b\u7248\u672c\u4fe1\u606f"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"yum install rsync\nrsync -version\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u542f\u52a8\u548c\u505c\u6b62 Rsync"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"/usr/bin/rsync --daemon --config=/etc/rsyncd.conf\nps -ef|grep rsync\nkill 12521\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u914d\u7f6e\u4e3b\u670d\u52a1\u5668 A"}),"\uff0c \u9996\u5148\u7b80\u5355\u914d\u7f6e\u4e0b Rsync\uff0c\u4f7f\u7528\u547d\u4ee4 ",(0,r.jsx)(s.code,{children:"vi /etc/rsyncd.conf"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"# \u8fd0\u884c Rsync \u5b88\u62a4\u8fdb\u7a0b\u7528\u6237\u548c\u7ec4\nuid = nobody\ngid = nobody\n# \u5141\u8bb8\u6700\u5927\u8fde\u63a5\u6570\uff0c\u5c31\u662f\u9884\u671f\u591a\u5c11\u53f0\u670d\u52a1\u5668\u94fe\u63a5\nmax connections = 4\n# \u53ea\u8bfb\u6a21\u5f0f\nread only = true\n# \u9884\u671f\u94fe\u63a5\u7684 IP\uff0c\u591a\u4e2a\u7528\u9017\u53f7\u9694\u5f00\n# hosts allow = 202.207.177.180\n# \u73b0\u5728\u662f\u5141\u8bb8\u6240\u6709\u7684\u670d\u52a1\u5668\u90fd\u80fd\u8fde\nhosts allow = *\ntransfer logging = true\nlog format = %h %o %f %l %b\n# \u65e5\u5fd7\u6587\u4ef6\nlog file = /var/log/rsyncd.log\nslp refresh = 300\n# \u8fdb\u7a0b\u6587\u4ef6\u4f4d\u7f6e\npid file = /var/run/rsyncd.pid\nlock file = /var/run/rsyncd.lock\n[test]\n# A \u670d\u52a1\u5668\u9700\u8981\u540c\u6b65\u7684\u76ee\u5f55\npath = /www/wwwroot/test\nread only = false\n# \u5141\u8bb8\u7684\u8ba4\u8bc1\u7528\u6237\nauth users = root\n# \u5bc6\u7801\u6587\u4ef6\u4f4d\u7f6e\nsecrets file = /etc/rsyncd.password\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u63a5\u7740\u8bbe\u7f6e\u4e0a\u9762\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5bc6\u7801\u6587\u4ef6 ",(0,r.jsx)(s.code,{children:"vim rsyncd.password"})," \u6dfb\u52a0\u3010user",":password","\u3011\u683c\u5f0f\u7684\u5185\u5bb9\u5982\uff1a",(0,r.jsx)(s.code,{children:"root:123456"}),"\uff0c\u5e76\u8bbe\u7f6e 600 \u6743\u9650\uff0c\u8fd9\u70b9\u975e\u5e38\u91cd\u8981"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"chmod -R 600 rsyncd.password\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u914d\u7f6e\u8f85\u670d\u52a1\u5668 B"}),"\uff0c\u8fd9\u91cc\u53ea\u9700\u8981\u6dfb\u52a0\u5bc6\u7801\u6587\u4ef6 ",(0,r.jsx)(s.code,{children:"vim rsyncd.password"})," \u6dfb\u52a0\u3010password\u3011\u683c\u5f0f\u7684\u5185\u5bb9\u5982\uff1a",(0,r.jsx)(s.code,{children:"123456"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u6dfb\u52a0\u5f00\u673a\u542f\u52a8"}),"\uff0c\u9632\u6b62\u670d\u52a1\u5668\u91cd\u542f\u6216\u8005\u5b95\u673a\u4fee\u590d\u597d\u4e4b\u540e\uff0c\u9700\u8981\u624b\u52a8\u91cd\u542f\u670d\u52a1"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"vi /etc/rc.local\n/usr/bin/rsync --daemon --config=/ect/rsyncd.conf   #\u5f00\u673a\u81ea\u52a8\u8fd0\u884c\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u4ee3\u7801\u540c\u6b65",children:"\u4ee3\u7801\u540c\u6b65"}),"\n",(0,r.jsx)(s.p,{children:"\u914d\u7f6e\u597d\u4e86 Rsync\uff0c\u73b0\u5728\u5c31\u6765\u5b9e\u73b0\u670d\u52a1\u5668 B \u4ece\u670d\u52a1\u5668 A \u540c\u6b65\u4ee3\u7801\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"rsync -vzrtopg --progress root@192.168.0.2::test /www/wwwroot/test --password-file=/etc/rsyncd.password\n"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"root"})," \u5bf9\u5e94\u670d\u52a1\u5668 A \u914d\u7f6e\u6587\u4ef6 rsyncd.conf \u4e2d\u7684 auth users = root"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"192.168.0.2"})," \u5e94\u670d\u52a1\u5668 A \u7684 IP"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"test"})," \u5bf9\u5e94\u670d\u52a1\u5668 A \u914d\u7f6e\u6587\u4ef6 rsyncd.conf \u4e2d\u7684 [test]"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"/www/wwwroot/test"})," \u662f\u670d\u52a1\u5668 B \u5b58\u653e\u540c\u6b65\u4ee3\u7801\u7684\u76ee\u5f55"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"/etc/rsyncd.password"})," \u662f\u670d\u52a1\u5668 B \u7684\u5bc6\u7801\u6587\u4ef6"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["\u4ee5\u4e0a\u547d\u4ee4\u6267\u884c\u4e00\u6b21\uff0c\u540c\u6b65\u4e00\u6b21\uff0c\u9700\u8981\u7528\u5230 crontab \u8ba1\u5212\u4efb\u52a1\u6765\u505a\u5230\u5b9e\u65f6\u540c\u6b65\uff0c\u65b0\u5efa shell \u811a\u672c ",(0,r.jsx)(s.code,{children:"vim /root/rsyncd.sh"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"#!/bin/bash\nPATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin\nexport PATH\n# \u95f4\u9694\u7684\u79d2\u6570\uff0c\u4e0d\u80fd\u5927\u4e8e60\nstep=1\nfor (( i = 0; i < 60; i=(i+step) )); do\n    $(rsync -vzrtopg --progress root@192.168.0.2::test /www/wwwroot/test --password-file=/etc/rsyncd.password)\n    sleep $step\ndone\nexit 0\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u7136\u540e\u5728\u670d\u52a1\u5668 B \u6dfb\u52a0 crontab \u5b9a\u65f6\u4efb\u52a1\uff0c\u6267\u884c ",(0,r.jsx)(s.code,{children:"crontab -e"})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"* * * * * sh /root/rsyncd.sh > /dev/null 2>&1\n"})}),"\n",(0,r.jsx)(s.p,{children:"OK\uff0c\u5927\u529f\u544a\u6210\uff0c\u8d76\u7d27\u53bb\u8bd5\u8bd5\u5427\uff01"}),"\n",(0,r.jsxs)(s.p,{children:["\u53c2\u8003\uff1a ",(0,r.jsx)(s.a,{href:"https://blog.csdn.net/oljuydfcg/article/details/91639416",children:"https://blog.csdn.net/oljuydfcg/article/details/91639416"})]})]})}function h(n={}){const{wrapper:s}={...(0,c.R)(),...n.components};return s?(0,r.jsx)(s,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},28453:(n,s,e)=>{e.d(s,{R:()=>t,x:()=>l});var r=e(96540);const c={},o=r.createContext(c);function t(n){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function l(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),r.createElement(o.Provider,{value:s},n.children)}}}]);