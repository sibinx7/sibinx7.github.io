import{f}from"./CxYJgpPD.js";import{e as u,y as i,f as c,A as a,I as d}from"./lboRYUvm.js";const p=u({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:s}=d(),{default:n}=i(),r=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:n,tags:r,parent:s}},render({use:t,unwrap:s,fallbackSlot:n,tags:r,parent:e}){var l;try{let o=t;return typeof t=="string"&&(o=(e==null?void 0:e.slots[t])||((l=e==null?void 0:e.parent)==null?void 0:l.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),o?s?f(o(),r):[o()]:n?n():a("div")}catch{return a("div")}}}),g=u({props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},render(t){return a(p,t)}});export{g as default};
