import{_ as h}from"./DX4c3sHA.js";import{_ as y}from"./CSr6tWlI.js";import{_ as w}from"./SAu-4Bob.js";import{_ as x}from"./BWQkXiu0.js";import{e as N,r as b,q as S,g as k,o as i,c as l,a as f,F as A,h as F,u as q,t as B}from"./DI5O4YJM.js";import{u as D,q as I}from"./qnTx17DU.js";import"./C14VVGQZ.js";import"./DEdtjICY.js";import"./DHChRVM6.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./B0Lw0mOI.js";import"./C8v267lW.js";import"./B02FL1Mc.js";const J=["href"],T=N({__name:"index",setup(P){const c=b([]);S();const p=async()=>{var e;console.log("Start processing files before import.meta");const r=Object.assign({"./doc/basic.vue":h,"./doc/generator-function.vue":y,"./doc/index.vue":w,"./doc/vdom-dom.vue":x}),n=[];console.log("Process files");try{console.log("Inside process files");const o=await D("markdown",()=>(console.log("Inside markdown useAsyncData"),I("/").find()),{server:!0});console.log(o),console.log("API calles");const s=(e=o==null?void 0:o.data)==null?void 0:e.value;console.log("Data content"),console.log(s);for(const m in r){if(m.includes("_"))return;const _=m.replace(/^\.\/?/i,"").replace(/\/index(\.vue)?$/,"").replace(".vue",""),d=_.replace(/-/g," ").replace(/\b\w/g,a=>a.toUpperCase()),u=`/interviews/javascript/${_.replaceAll(/\/index/g,"")}`,g=s==null?void 0:s.find(a=>a._path===u),v=JSON.stringify(g),t=JSON.parse(v||"{}");n.push({id:Date.now(),name:(t==null?void 0:t.title)||d,title:t==null?void 0:t.title,path:u})}c.value=n}catch(o){console.log("Error"),console.log(o)}};try{p()}catch{}return k(async()=>{await p()}),(r,n)=>(i(),l("div",null,[f("ul",null,[(i(!0),l(A,null,F(q(c),e=>(i(),l("li",{key:e.id},[f("a",{href:e.path},B(e.name),9,J)]))),128))])]))}});export{T as default};
