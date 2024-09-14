"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4245],{11253:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=r(74848),t=r(28453);const o={date:"2020-07-31 17:34:22",slug:"/24990",authors:"lzw"},a="Nginx \u57df\u540d\u5b50\u76ee\u5f55\u91cd\u5b9a\u5411\u5176\u4ed6\u76ee\u5f55",i={permalink:"/blog/24990",source:"@site/blog/2020/07/24990.md",title:"Nginx \u57df\u540d\u5b50\u76ee\u5f55\u91cd\u5b9a\u5411\u5176\u4ed6\u76ee\u5f55",description:"\u4f8b\u5982\uff0cexample.org\u57df\u540d\u8fd0\u884c\u7684\u662f /var/www/top/public \u76ee\u5f55\u4e2d\u7684\u7a0b\u5e8f\uff0c\u73b0\u5728 example.org/blog \u9700\u8981\u8fd0\u884c\u53e6\u4e00\u4e2a /var/www/nested/public \u76ee\u5f55\u4e0b\u7684\u7a0b\u5e8f\u3002\u90a3\u8be5\u600e\u4e48\u64cd\u4f5c\uff1f",date:"2020-07-31T17:34:22.000Z",tags:[],readingTime:1.345,hasTruncateMarker:!0,authors:[{name:"\u5927\u5218",title:"\u4e00\u4e2a web \u5f00\u53d1\u8005",url:"https://github.com/lzwdot",imageURL:"https://avatars.githubusercontent.com/u/24477920?v=4",key:"lzw",page:null}],frontMatter:{date:"2020-07-31 17:34:22",slug:"/24990",authors:"lzw"},unlisted:!1,prevItem:{title:"\u524d\u7aef\u63a5\u5165\u83dc\u9e1f\u6253\u5370\u7ec4\u4ef6",permalink:"/blog/29502"},nextItem:{title:"\u591a\u53f0\u670d\u52a1\u5668\u4f7f\u7528 Rsync \u540c\u6b65\u4ee3\u7801",permalink:"/blog/24486"}},l={authorsImageUrls:[void 0]},c=[];function p(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c",(0,s.jsx)(n.code,{children:"example.org"}),"\u57df\u540d\u8fd0\u884c\u7684\u662f ",(0,s.jsx)(n.code,{children:"/var/www/top/public"})," \u76ee\u5f55\u4e2d\u7684\u7a0b\u5e8f\uff0c\u73b0\u5728 ",(0,s.jsx)(n.code,{children:"example.org/blog"})," \u9700\u8981\u8fd0\u884c\u53e6\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"/var/www/nested/public"})," \u76ee\u5f55\u4e0b\u7684\u7a0b\u5e8f\u3002\u90a3\u8be5\u600e\u4e48\u64cd\u4f5c\uff1f"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e4b\u524d\u6709\u4ecb\u7ecd\u8fc7\u7c7b\u4f3c\u7684\u201c\u5355\u57df\u540d\u4e0b\u8bbf\u95ee\u591a\u4e2a Laravel \u9879\u76ee\u201d"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/blog/17121",children:"localhost multiple laravel"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u4ecb\u7ecd Nginx \u4e0b\u7684\u53e6\u4e00\u79cd\u6bd4\u8f83\u597d\u7684\u65b9\u5f0f\uff0c\u8fd8\u662f\u4ee5 Laravel \u5e94\u7528\u4e3a\u4f8b\uff0c\u76f4\u63a5\u4e0a\u914d\u7f6e\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"server {\n    listen 80 default_server;\n    listen [::]:80 default_server;\n    root /var/www/top/public;\n    index index.html index.htm index.php;\n    server_name _;\n    location / {\n        try_files $uri $uri/ /index.php$is_args$args;\n    }\n    location /nested {\n        alias /var/www/nested/public;\n        try_files $uri $uri/ @nested;\n        location ~ .php$ {\n            include snippets/fastcgi-php.conf;\n            fastcgi_param SCRIPT_FILENAME $request_filename;\n            fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;\n        }\n    }\n    location @nested {\n        rewrite /nested/(.*)$ /nested/index.php?/$1 last;\n    }\n    location ~ .php$ {\n        include snippets/fastcgi-php.conf;\n        fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u914d\u7f6e\u4e0a\u540e\uff0c\u4e24\u4e2a Laravel \u5e94\u7528\u90fd\u53ef\u4ee5\u6b63\u5e38\u8bbf\u95ee\u4e86\uff0c\u4f46\u53ef\u80fd\u51fa\u73b0\u8bbf\u95ee\u4e0d\u4e86 CSS \u7b49\u9759\u6001\u6587\u4ef6\uff0c\u6240\u4ee5\u9700\u8981\u6dfb\u52a0\u914d\u7f6e\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"location ~ .*.(gif|jpg|jpeg|png|bmp|swf)$\n{\n    expires      30d;\n    error_log off;\n    access_log /dev/null;\n}\nlocation ~ .*.(js|css)?$\n{\n    expires      12h;\n    error_log off;\n    access_log /dev/null;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u5207 OK \u4e86\uff0c\u611f\u89c9\u6bd4\u4e4b\u524d\u90a3\u4e2a\u65b9\u5f0f\u8981\u5b89\u5168\uff0c\u5c31\u662f\u914d\u7f6e\u4f1a\u6bd4\u8f83\u9ebb\u70e6\u70b9\uff0c\u6bcf\u6b21\u589e\u52a0\u4e00\u4e2a\u5e94\u7528\uff0c\u90fd\u9700\u8981\u914d\u7f6e\u4e00\u6b21\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u53c2\u8003\uff1a",(0,s.jsx)(n.a,{href:"https://serversforhackers.com/c/nginx-php-in-subdirectory",children:"https://serversforhackers.com/c/nginx-php-in-subdirectory"})]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var s=r(96540);const t={},o=s.createContext(t);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);