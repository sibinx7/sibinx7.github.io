import{_ as w}from"./35fWO8rd.js";import{T as h}from"./DHoFHYoc.js";import{e as k,r as x,m as N,v as A,g as S,o as C,c as F,b as J,u as b}from"./FV7cPrgW.js";import{u as f,q}from"./dUmRHQfo.js";import"./DFPC6rEY.js";import"./C35OYAUZ.js";import"./DSOs0waB.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./BIWVP-tD.js";import"./DJr2Sxax.js";import"./BT_Ki_fO.js";const G=k({__name:"index",async setup(B){let s,a;const i=x([]);N();const _=async()=>{var l;console.log("Start processing files before import.meta");const c=Object.assign({"./doc/index.vue":w}),o=[];try{const t=await f("markdown",()=>(console.log("Inside markdown useAsyncData"),q("/").find()),{server:!0}),n=(l=t==null?void 0:t.data)==null?void 0:l.value;for(const p in c){if(p.includes("_"))return;const m=p.replace(/^\.\/?/i,"").replace(/\/index(\.vue)?$/,"").replace(".vue",""),g=m.replace(/-/g," ").replace(/\b\w/g,r=>r.toUpperCase()),u=`/interviews/angular/${m.replaceAll(/\/index/g,"")}`,y=n==null?void 0:n.find(r=>r._path===u),v=JSON.stringify(y),e=JSON.parse(v||"{}");o.push({id:Date.now(),name:(e==null?void 0:e.title)||g,title:e==null?void 0:e.title,path:u})}i.value=o}catch(t){console.log("Error"),console.log(t)}},{data:d}=([s,a]=A(async()=>f("process",async()=>(await _(),i.value))),s=await s,a(),s);return S(async()=>{}),(c,o)=>(C(),F("div",null,[J(h,{links:b(d)},null,8,["links"])]))}});export{G as default};
