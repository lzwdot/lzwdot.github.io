"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([["4361"],{89197:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return c}});var r=t(5251),s=t(85893),i=t(50065);let o={date:"2020-07-31 17:34:22",slug:"/24990",authors:"lzw"},a="Nginx \u57DF\u540D\u5B50\u76EE\u5F55\u91CD\u5B9A\u5411\u5176\u4ED6\u76EE\u5F55",l={authorsImageUrls:[void 0]},c=[];function p(e){let n={a:"a",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u4F8B\u5982\uFF0C",(0,s.jsx)(n.code,{children:"example.org"}),"\u57DF\u540D\u8FD0\u884C\u7684\u662F ",(0,s.jsx)(n.code,{children:"/var/www/top/public"})," \u76EE\u5F55\u4E2D\u7684\u7A0B\u5E8F\uFF0C\u73B0\u5728 ",(0,s.jsx)(n.code,{children:"example.org/blog"})," \u9700\u8981\u8FD0\u884C\u53E6\u4E00\u4E2A ",(0,s.jsx)(n.code,{children:"/var/www/nested/public"})," \u76EE\u5F55\u4E0B\u7684\u7A0B\u5E8F\u3002\u90A3\u8BE5\u600E\u4E48\u64CD\u4F5C\uFF1F"]}),"\n",(0,s.jsx)(n.p,{children:"\u4E4B\u524D\u6709\u4ECB\u7ECD\u8FC7\u7C7B\u4F3C\u7684\u201C\u5355\u57DF\u540D\u4E0B\u8BBF\u95EE\u591A\u4E2A Laravel \u9879\u76EE\u201D"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/blog/17121",children:"localhost multiple laravel"})}),"\n",(0,s.jsx)(n.p,{children:"\u4E0B\u9762\u4ECB\u7ECD Nginx \u4E0B\u7684\u53E6\u4E00\u79CD\u6BD4\u8F83\u597D\u7684\u65B9\u5F0F\uFF0C\u8FD8\u662F\u4EE5 Laravel \u5E94\u7528\u4E3A\u4F8B\uFF0C\u76F4\u63A5\u4E0A\u914D\u7F6E\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"server {\n    listen 80 default_server;\n    listen [::]:80 default_server;\n    root /var/www/top/public;\n    index index.html index.htm index.php;\n    server_name _;\n    location / {\n        try_files $uri $uri/ /index.php$is_args$args;\n    }\n    location /nested {\n        alias /var/www/nested/public;\n        try_files $uri $uri/ @nested;\n        location ~ .php$ {\n            include snippets/fastcgi-php.conf;\n            fastcgi_param SCRIPT_FILENAME $request_filename;\n            fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;\n        }\n    }\n    location @nested {\n        rewrite /nested/(.*)$ /nested/index.php?/$1 last;\n    }\n    location ~ .php$ {\n        include snippets/fastcgi-php.conf;\n        fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;\n    }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u914D\u7F6E\u4E0A\u540E\uFF0C\u4E24\u4E2A Laravel \u5E94\u7528\u90FD\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE\u4E86\uFF0C\u4F46\u53EF\u80FD\u51FA\u73B0\u8BBF\u95EE\u4E0D\u4E86 CSS \u7B49\u9759\u6001\u6587\u4EF6\uFF0C\u6240\u4EE5\u9700\u8981\u6DFB\u52A0\u914D\u7F6E\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"location ~ .*.(gif|jpg|jpeg|png|bmp|swf)$\n{\n    expires      30d;\n    error_log off;\n    access_log /dev/null;\n}\nlocation ~ .*.(js|css)?$\n{\n    expires      12h;\n    error_log off;\n    access_log /dev/null;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4E00\u5207 OK \u4E86\uFF0C\u611F\u89C9\u6BD4\u4E4B\u524D\u90A3\u4E2A\u65B9\u5F0F\u8981\u5B89\u5168\uFF0C\u5C31\u662F\u914D\u7F6E\u4F1A\u6BD4\u8F83\u9EBB\u70E6\u70B9\uFF0C\u6BCF\u6B21\u589E\u52A0\u4E00\u4E2A\u5E94\u7528\uFF0C\u90FD\u9700\u8981\u914D\u7F6E\u4E00\u6B21\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u53C2\u8003\uFF1A",(0,s.jsx)(n.a,{href:"https://serversforhackers.com/c/nginx-php-in-subdirectory",children:"https://serversforhackers.com/c/nginx-php-in-subdirectory"})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},50065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var r=t(67294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}},5251:function(e){e.exports=JSON.parse('{"permalink":"/blog/24990","editUrl":"/feedback","source":"@site/blog/2020/07/24990.md","title":"Nginx \u57DF\u540D\u5B50\u76EE\u5F55\u91CD\u5B9A\u5411\u5176\u4ED6\u76EE\u5F55","description":"\u4F8B\u5982\uFF0Cexample.org\u57DF\u540D\u8FD0\u884C\u7684\u662F /var/www/top/public \u76EE\u5F55\u4E2D\u7684\u7A0B\u5E8F\uFF0C\u73B0\u5728 example.org/blog \u9700\u8981\u8FD0\u884C\u53E6\u4E00\u4E2A /var/www/nested/public \u76EE\u5F55\u4E0B\u7684\u7A0B\u5E8F\u3002\u90A3\u8BE5\u600E\u4E48\u64CD\u4F5C\uFF1F","date":"2020-07-31T17:34:22.000Z","tags":[],"readingTime":1.345,"hasTruncateMarker":true,"authors":[{"name":"\u5927\u5218","title":"\u4E00\u4E2A web \u5F00\u53D1\u8005","url":"https://github.com/lzwdot","imageURL":"https://avatars.githubusercontent.com/u/24477920?v=4","key":"lzw","page":null}],"frontMatter":{"date":"2020-07-31 17:34:22","slug":"/24990","authors":"lzw"},"unlisted":false,"prevItem":{"title":"\u524D\u7AEF\u63A5\u5165\u83DC\u9E1F\u6253\u5370\u7EC4\u4EF6","permalink":"/blog/29502"},"nextItem":{"title":"\u591A\u53F0\u670D\u52A1\u5668\u4F7F\u7528 Rsync \u540C\u6B65\u4EE3\u7801","permalink":"/blog/24486"}}')}}]);