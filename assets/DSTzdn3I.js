import k from"./DwQd4P_s.js";import P from"./BRuhYUwS.js";import b from"./flWCmbTO.js";import{u as g,e as f,i as L,P as R,f as x,g as C,h as S,r as j,j as B,l as m,k as T,m as E,n as p,p as N,q as A,S as H,T as O,s as D,L as $,v as u,x as q,y as w,o as d,c as z,b as y,w as _,z as v}from"./B2XqdolG.js";import{u as F}from"./Cp6Vd7M9.js";import"./BlPcdLsL.js";import"./CxYJgpPD.js";import"./C8OLke2P.js";const I=f({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,o){return()=>p(m[t.name],t.layoutProps,o.slots)}}),M=f({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,o){const e=g(),a=L(R),s=a===x()?C():a,r=S(()=>{let n=u(t.name)??s.meta.layout??"default";return n&&!(n in m)&&t.fallback&&(n=u(t.fallback)),n}),i=j();o.expose({layoutRef:i});const l=e.deferHydration();if(e.isHydrating){const n=e.hooks.hookOnce("app:error",l);B().beforeEach(n)}return()=>{const n=r.value&&r.value in m,c=s.meta.layoutTransition??T;return E(O,n&&c,{default:()=>p(H,{suspensible:!0,onResolve:()=>{A(l)}},{default:()=>p(V,{layoutProps:N(o.attrs,{ref:i}),key:r.value||void 0,name:r.value,shouldProvide:!t.name,hasTransition:!!c},o.slots)})}).default()}}}),V=f({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,o){const e=t.name;return t.shouldProvide&&D($,{isCurrent:a=>e===(a.meta.layout??"default")}),()=>{var a,s;return!e||typeof e=="string"&&!(e in m)?(s=(a=o.slots).default)==null?void 0:s.call(a):p(I,{key:e,layoutProps:t.layoutProps,name:e},o.slots)}}}),G={class:"document-driven-page"},ee=f({__name:"document-driven",setup(t){const{contentHead:o}=q().public.content,{page:e,layout:a}=w();return e.value,o&&F(e),(s,r)=>{const i=k,l=P,n=b,c=M;return d(),z("div",G,[y(c,{name:u(a)||"default"},{default:_(()=>[u(e)?(d(),v(l,{key:u(e)._id,value:u(e)},{empty:_(({value:h})=>[y(i,{value:h},null,8,["value"])]),_:1},8,["value"])):(d(),v(n,{key:1}))]),_:1},8,["name"])])}}});export{ee as default};
