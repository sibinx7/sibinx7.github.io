import{_ as h}from"./CeCIUbBK.js";import{_ as y}from"./Ex95Noyf.js";import{_ as w}from"./BzubIXBq.js";import{e as x,r as N,q as S,g as b,o as i,c as l,a as f,F as k,h as A,u as F,t as q}from"./RzyEOJC_.js";import{u as B,q as D}from"./D6VfMK4S.js";import"./Bt55fmVS.js";import"./7PhOf3_X.js";import"./DbRHbC4B.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./C0m5HdJw.js";import"./CZ6kM5aW.js";import"./SYPyBVcl.js";const I=["href"],M=x({__name:"index",setup(J){const c=N([]);S();const p=async()=>{var e;console.log("Start processing files before import.meta");const r=Object.assign({"./doc/basic.vue":h,"./doc/index.vue":y,"./doc/vdom-dom.vue":w}),a=[];console.log("Process files");try{console.log("Inside process files");const o=await B("markdown",()=>(console.log("Inside markdown useAsyncData"),D("/").find()),{server:!0});console.log(o),console.log("API calles");const t=(e=o==null?void 0:o.data)==null?void 0:e.value;console.log("Data content"),console.log(t);for(const m in r){if(m.includes("_"))return;const u=m.replace(/^\.\/?/i,"").replace(/\/index(\.vue)?$/,"").replace(".vue",""),d=u.replace(/-/g," ").replace(/\b\w/g,n=>n.toUpperCase()),_=`/interviews/javascript/${u.replaceAll(/\/index/g,"")}`,g=t==null?void 0:t.find(n=>n._path===_),v=JSON.stringify(g),s=JSON.parse(v||"{}");a.push({id:Date.now(),name:(s==null?void 0:s.title)||d,title:s==null?void 0:s.title,path:_})}c.value=a}catch(o){console.log("Error"),console.log(o)}};try{p()}catch{}return b(async()=>{await p()}),(r,a)=>(i(),l("div",null,[f("ul",null,[(i(!0),l(k,null,A(F(c),e=>(i(),l("li",{key:e.id},[f("a",{href:e.path},q(e.name),9,I)]))),128))])]))}});export{M as default};
