import{e as f,r as c,f as l,o as d,c as u,a as e,t as p,u as r,g as v,h as _,b as m,F as h}from"./DZF9hVM-.js";const b=f({__name:"aboutSection",setup(o){const s=c({}),n=async()=>{const t=await(await fetch("/api/about")).json();t&&(s.value=t)};return l(()=>{n()}),(i,t)=>{var a;return d(),u("div",null,[e("p",null,p((a=r(s))==null?void 0:a.information),1)])}}}),g=window.setInterval;function w(){const o=["Angular Developer","React Developer","Vue JS Developer","WordPress","MERN Stack","MEAN Stack","React Native","Laravel Developer"];let s;const n=c(o[0]),i=()=>{o.filter(a=>a!==n.value);const t=o[Math.floor(Math.random()*o.length)];n.value=t};return l(()=>{s=g(()=>{i()},1e3)}),v(()=>{clearInterval(s)}),{profession:n}}const x=""+new URL("sibin.bJNtxwwW.jpg",import.meta.url).href,S={class:"home-content"},N={class:"home-profile-section"},I={class:"container-fluid"},R={class:"row"},y={class:"col-12 col-lg-6"},M={class:"profession-rolls"},V={class:"text-white"},k={class:"col-12 col-lg-6"},A=["src"],J={__name:"index",setup(o){const{profession:s}=w(),n=c(x);return(i,t)=>{const a=b;return d(),u(h,null,[e("div",S,[e("div",N,[e("div",I,[e("div",R,[e("div",y,[t[0]||(t[0]=e("div",{class:"main-heading"},[e("h1",{class:"text-white"},"Sibin Xavier")],-1)),e("div",M,[e("h4",V,p(r(s)),1)]),t[1]||(t[1]=_('<div class="resume-description"><p class="mb-0 text-white"> I am an experienced frontend developer with 11+ years in web development, specializing in React JS, Angular, and Vue JS. With over 6 years of expertise in React (TypeScript, MUI, Redux, SSR, Next.js, Nuxt JS) and 4+ years in Angular and Vue, I excel in creating intuitive user interfaces and optimizing performance </p></div><div class="resume-contact"><ul class="d-flex contact-button"><li><a href="" class="btn btn-rounded btn-primary btn-view-work"><span> View Work</span></a></li><li><a href="" class="btn btn-rounded btn-success btn"> Contact Me </a></li></ul></div>',2))]),e("div",k,[e("img",{src:r(n),alt:"Sibin Xavier",class:"home-profile-image"},null,8,A)])])])])]),e("div",null,[m(a)])],64)}}};export{J as default};
