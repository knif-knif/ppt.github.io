import{d as _,u as d,a as p,c as m,b as h,e as n,f as t,t as s,g as a,F as u,r as f,n as g,h as v,o as r,i as x,j as y,k as b,l as N,m as k,_ as P}from"./index-cb7c6f06.js";import{N as w}from"./NoteDisplay-4182cc25.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},j={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(E){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=h(()=>v.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(r(),n("div",{id:"page-root",style:g(a(k))},[t("div",V,[t("div",L,[t("h1",S,s(a(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(r(!0),n(u,null,f(a(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",j,[t("div",B,[t("div",D,s(e==null?void 0:e.no)+"/"+s(a(x)),1),y(" "+s(e==null?void 0:e.title)+" ",1),H])]),b(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<a(i).length-1?(r(),n("hr",z)):N("v-if",!0)]))),128))])],4))}}),A=P(C,[["__file","E:/project/ppt/test/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{A as default};
