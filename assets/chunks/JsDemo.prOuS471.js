import{d,x as n,p as m,c as a,o as i,j as t,e as f,r as _,_ as p}from"./framework.C_xhN8hT.js";const g={class:"jsDemo"},v={key:0,open:"true",class:"details custom-block"},h=["innerHTML"],L=d({__name:"JsDemo",setup(k){const s=n(""),r=n(),c=n();return m(()=>{const e=c.value?.contentWindow?.document;if(e){let o=r?.value?.textContent;const l="js";o?.trim().startsWith(l)&&(o=o.trim().substring(l.length));const u=`
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
    `;e.open(),e.write(u),e.close(),setTimeout(()=>{s.value=e.body.innerHTML})}}),(e,o)=>(i(),a("section",g,[t("header",{ref_key:"codeRef",ref:r},[_(e.$slots,"default",{},void 0,!0)],512),t("iframe",{ref_key:"iframeRef",ref:c},null,512),s.value?(i(),a("details",v,[o[0]||(o[0]=t("summary",null,"输出结果",-1)),t("pre",{class:"consoleLog",innerHTML:s.value},null,8,h)])):f("",!0)]))}}),y=p(L,[["__scopeId","data-v-89432203"]]);export{y as default};
