import{_ as h}from"./YXRcfUC_.js";import{_ as v}from"./S7ldoiVV.js";import{e as y,r as x,q as N,o as n,c as i,a as _,F as w,h as F,u as S,t as k}from"./CnSLSZe4.js";import{u as q,q as A}from"./wTaVR_KO.js";import"./DXJlqD52.js";import"./IHfiiftJ.js";import"./CogUCYDO.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./AaMxkrIu.js";import"./DrcKQV-a.js";import"./mM1SO78n.js";const B=["href"],G=y({__name:"index",setup(J){const l=x([]);return N(),(async()=>{var e;const c=Object.assign({"./doc/basic.vue":h,"./doc/index.vue":v}),r=[];console.log("Process files");try{const o=await q("markdown",()=>A("/").find());console.log(o),console.log("API calles");const t=(e=o==null?void 0:o.data)==null?void 0:e.value;console.log("Data content"),console.log(t);for(const p in c){if(p.includes("_"))return;const m=p.replace(/^\.\/?/i,"").replace(/\/index(\.vue)?$/,"").replace(".vue",""),f=m.replace(/-/g," ").replace(/\b\w/g,a=>a.toUpperCase()),u=`/interviews/javascript/${m.replaceAll(/\/index/g,"")}`,d=t==null?void 0:t.find(a=>a._path===u),g=JSON.stringify(d),s=JSON.parse(g||"{}");r.push({id:Date.now(),name:(s==null?void 0:s.title)||f,title:s==null?void 0:s.title,path:u})}l.value=r}catch(o){console.log("Error"),console.log(o)}})(),(c,r)=>(n(),i("div",null,[_("ul",null,[(n(!0),i(w,null,F(S(l),e=>(n(),i("li",{key:e.id},[_("a",{href:e.path},k(e.name),9,B)]))),128))])]))}});export{G as default};
