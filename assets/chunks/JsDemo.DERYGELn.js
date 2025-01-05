import{d as _,p as l,v as p,o as m,c as d,j as n,r as g,e as v,_ as h}from"./framework.DatVRQJC.js";const L={class:"jsDemo"},k={key:0,open:"true",class:"details custom-block"},T=["innerHTML"],y=_({__name:"JsDemo",setup(b){const r=l(""),s=l(),a=l();return p(()=>{var t,c,i;const e=(c=(t=a.value)==null?void 0:t.contentWindow)==null?void 0:c.document;if(e){let o=(i=s==null?void 0:s.value)==null?void 0:i.textContent;const u="js";o!=null&&o.trim().startsWith(u)&&(o=o.trim().substring(u.length));const f=`
    <script>
      const logs = [];
      console.oldLog = console.log;
      console.log = function (...str) {
        console.oldLog(str);
        logs.push(str.map(v=>String(v)).join(' '));
      };  
      ${o};
      setTimeout(()=>{
        for (let i = 0; i < logs.length; i++) {
          document.write('> ', logs[i], '<br/>');
        }
        document.write('>');
      });
    <\/script>  
    `;e.open(),e.write(f),e.close(),setTimeout(()=>{r.value=e.body.innerHTML})}}),(e,t)=>(m(),d("section",L,[n("header",{ref_key:"codeRef",ref:s},[g(e.$slots,"default",{},void 0,!0)],512),n("iframe",{ref_key:"iframeRef",ref:a},null,512),r.value?(m(),d("details",k,[t[0]||(t[0]=n("summary",null,"输出结果",-1)),n("pre",{class:"consoleLog",innerHTML:r.value},null,8,T)])):v("",!0)]))}}),w=h(y,[["__scopeId","data-v-89432203"]]);export{w as default};
