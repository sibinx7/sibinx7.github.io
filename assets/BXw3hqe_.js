import{e as d,Z as l,h as f,$ as v,y as p,a0 as m,a1 as g,M as h,n as s}from"./B2XqdolG.js";import{u as y}from"./CslOJen6.js";import{_}from"./BCJ52B9U.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:t}=l(i),n=f(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&v("dd-navigation").value){const{navigation:a}=p();return{navigation:a}}const{data:o}=await y(`content-navigation-${g(n.value)}`,()=>m(n.value));return{navigation:o}},render(i){const t=h(),{navigation:n}=i,o=e=>s(_,{to:e._path},()=>e.title),a=(e,u)=>s("ul",u?{"data-level":u}:null,e.map(r=>r.children?s("li",null,[o(r),a(r.children,u+1)]):s("li",null,o(r)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),x=C;export{x as default};