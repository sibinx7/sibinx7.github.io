import{e as n,h as o,o as c,z as h,v as a,av as p,aw as l,N as u,x as d,ar as m}from"./B2XqdolG.js";const g="img",w=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,i=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=l(u(d().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return m(e,t.src)}return t.src});return(s,e)=>(c(),h(p(a(g)),{src:a(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{w as default};