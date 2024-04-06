"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6789],{93150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(74848),s=n(28453);const i={date:"2019-04-03 08:57:00",slug:"/22789",authors:"lzw"},l="\u5b9d\u5854\u91cd\u65b0\u7f16\u8bd1 Nginx\uff0c\u9690\u85cf Server \u4fe1\u606f\u548c\u7248\u672c\u4fe1\u606f",o={permalink:"/blog/22789",source:"@site/blog/2019/04/22789.md",title:"\u5b9d\u5854\u91cd\u65b0\u7f16\u8bd1 Nginx\uff0c\u9690\u85cf Server \u4fe1\u606f\u548c\u7248\u672c\u4fe1\u606f",description:"\u73af\u5883",date:"2019-04-03T08:57:00.000Z",tags:[],readingTime:1.32,hasTruncateMarker:!0,authors:[{name:"\u5927\u5218",title:"\u4e00\u4e2a web \u5f00\u53d1\u8005",url:"https://github.com/lzwdot",imageURL:"https://avatars.githubusercontent.com/u/24477920?v=4",key:"lzw"}],frontMatter:{date:"2019-04-03 08:57:00",slug:"/22789",authors:"lzw"},unlisted:!1,prevItem:{title:"Security AppScan Standard\u5e38\u89c1\u6f0f\u6d1e",permalink:"/blog/23583"},nextItem:{title:"\u5982\u4f55\u7981\u7528 HTTP \u7684 DELETE PUT TRACE \u65b9\u6cd5",permalink:"/blog/22650"}},c={authorsImageUrls:[void 0]},d=[{value:"\u4fee\u6539\u914d\u7f6e\u548c\u6e90\u7801",id:"\u4fee\u6539\u914d\u7f6e\u548c\u6e90\u7801",level:2},{value:"\u91cd\u65b0\u7f16\u8bd1 Nginx",id:"\u91cd\u65b0\u7f16\u8bd1-nginx",level:2}];function h(e){const t={blockquote:"blockquote",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u73af\u5883"}),(0,r.jsx)(t.br,{}),"\n","\u7cfb\u7edf: CentOS Linux 7.6.1810 (Core)",(0,r.jsx)(t.br,{}),"\n","\u5b9d\u5854\uff1a\u514d\u8d39\u7248 5.9.1",(0,r.jsx)(t.br,{}),"\n","Nginx\u7248\u672c\uff1a1.15"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"\u9700\u6c42"}),(0,r.jsx)(t.br,{}),"\n","\u9690\u85cf Nginx \u7684 server \u4fe1\u606f\u548c\u7248\u672c\u4fe1\u606f"]}),"\n",(0,r.jsx)(t.h2,{id:"\u4fee\u6539\u914d\u7f6e\u548c\u6e90\u7801",children:"\u4fee\u6539\u914d\u7f6e\u548c\u6e90\u7801"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"\u9690\u85cf\u7248\u672c\u4fe1\u606f"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["\u5728 ",(0,r.jsx)(t.code,{children:"nginx.conf"})," \u91cc\u9762\u6dfb\u52a0"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"server_tokens off;\n"})}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsx)(t.li,{children:"\u9690\u85cf server \u4fe1\u606f\uff08\u9700\u8981\u91cd\u65b0\u7f16\u8bd1 Nginx\uff09"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["\u8fdb\u5165 Nginx \u6e90\u7801\u76ee\u5f55 ",(0,r.jsx)(t.code,{children:"/www/server/nginx/src"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"# vi src/http/ngx_http_header_filter_module.c\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u5c06"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'static u_char ngx_http_server_string[] = "Server: nginx" CRLF;\nstatic u_char ngx_http_server_full_string[] = "Server: " NGINX_VER CRLF;\nstatic u_char ngx_http_server_build_string[] = "Server: " NGINX_VER_BUILD CRLF;\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u6539\u4e3a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'static u_char ngx_http_server_string[] = "Server: webServer" CRLF;\nstatic u_char ngx_http_server_full_string[] = "Server: webServer" CRLF;\nstatic u_char ngx_http_server_build_string[] = "Server: webServer" CRLF;\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u91cd\u65b0\u7f16\u8bd1-nginx",children:"\u91cd\u65b0\u7f16\u8bd1 Nginx"}),"\n",(0,r.jsxs)(t.p,{children:["\u7531\u4e8e\u4f7f\u7528\u5b9d\u5854\u5b89\u88c5 Nginx\uff0c\u6240\u4ee5\u53ef\u4ee5\u53c2\u8003\u5b9d\u5854\u5b89\u88c5\u811a\u672c\uff1a",(0,r.jsx)(t.code,{children:"/www/server/panel/install/nginx.sh"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'...\nif [ "${version}" == "1.15" ];then\n        ./configure --user=www --group=www --prefix=${Setup_Path} --with-openssl=${Setup_Path}/src/openssl --add-module=${Setup_Path}/src/ngx_devel_kit --add-module=${Setup_Path}/src/lua_nginx_module --add-module=${Setup_Path}/src/ngx_cache_purge --add-module=${Setup_Path}/src/nginx-sticky-module --with-http_stub_status_module --with-http_ssl_module --with-http_v2_module --with-http_image_filter_module --with-http_gzip_static_module --with-http_gunzip_module --with-stream --with-stream_ssl_module --with-ipv6 --with-http_sub_module --with-http_flv_module --with-http_addition_module --with-http_realip_module --with-http_mp4_module --with-ld-opt="-Wl,-E" --with-openssl-opt="enable-tls1_3 enable-weak-ssl-ciphers" --with-cc-opt="-Wno-error" ${jemallocLD}\n...\n'})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u5c06 ",(0,r.jsx)(t.code,{children:"${Setup_Path}"})," \u6539\u4e3a ",(0,r.jsx)(t.code,{children:"/www/server/nginx"}),(0,r.jsx)(t.br,{}),"\n","\u5c06 ",(0,r.jsx)(t.code,{children:"${jemallocLD}"})," \u6539\u4e3a ",(0,r.jsx)(t.code,{children:'--with-ld-opt="-ljemalloc"'})]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u7f16\u8bd1 Nginx"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'# cd /www/server/nginx/src\n# ./configure --user=www --group=www --prefix=/www/server/nginx --with-openssl=/www/server/nginx/src/openssl --add-module=/www/server/nginx/src/ngx_devel_kit --add-module=/www/server/nginx/src/lua_nginx_module --add-module=/www/server/nginx/src/ngx_cache_purge --add-module=/www/server/nginx/src/nginx-sticky-module --with-http_stub_status_module --with-http_ssl_module --with-http_v2_module --with-http_image_filter_module --with-http_gzip_static_module --with-http_gunzip_module --with-stream --with-stream_ssl_module --with-ipv6 --with-http_sub_module --with-http_flv_module --with-http_addition_module --with-http_realip_module --with-http_mp4_module --with-ld-opt="-Wl,-E" --with-openssl-opt="enable-tls1_3 enable-weak-ssl-ciphers" --with-cc-opt="-Wno-error" --with-ld-opt="-ljemalloc"\n# make && make install\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u91cd\u542f Nginx \u5373\u53ef"})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);