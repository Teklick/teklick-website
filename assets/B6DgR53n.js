import{_ as b}from"./CophkGXP.js";import{f as x,B as v,i as n,C as g,o as u,c,a as e,h as _,D as d,E as m,b as r,G as w,g as l,d as y,w as k,F as N,z as F}from"./DEtrrDHz.js";import{_ as j}from"./D5aoKrrc.js";import{F as z,I as V,L as E}from"./CkUIy2__.js";import{T as L}from"./D6-tcHhA.js";import"./Dyp0tcrL.js";import"./NVbQ5oj0.js";const I={key:0,class:"my-1 block text-red-500"},R={class:"mb-4"},A=e("label",{for:"LogInFullName",class:"mb-2 block text-base/normal font-semibold text-zinc-200"},"Full Name",-1),C=e("span",{class:"mt-1 block text-red-500"},null,-1),B={class:"mb-4"},T=e("label",{for:"LogInEmailAddress",class:"mb-2 block text-base/normal font-semibold text-zinc-200"},"Email address",-1),D={class:"mb-4"},S=F('<div class="mb-6 flex flex-wrap items-center justify-between gap-x-1 gap-y-2"><div class="inline-flex items-center"><input type="checkbox" class="h-4 w-4 rounded border-white/20 bg-white/20 text-primary shadow-sm focus:border-primary focus:ring focus:ring-primary/60 focus:ring-offset-0" id="checkbox-signin"><label class="ms-2 select-none align-middle text-base/none text-zinc-200" for="checkbox-signin">Remember me</label></div></div><div class="mb-6 text-center"><button class="group mt-5 inline-flex w-full items-center justify-center rounded bg-primary px-6 py-2.5 text-white backdrop-blur-2xl transition-all hover:bg-primary-700 hover:text-white" type="submit"> Register </button></div>',2),U=e("div",{class:"my-6 flex shrink items-center"},[e("div",{class:"mt-px flex-auto border-t border-dashed border-white/20"}),e("div",{class:"mx-4 text-zinc-100"},"Or"),e("div",{class:"mt-px flex-auto border-t border-dashed border-white/20"})],-1),M={class:"mb-6 shrink text-center"},P=e("p",{class:"mb-6 text-xl text-white"},"Continue in with",-1),$={class:"flex flex-wrap items-center justify-center gap-2"},G={href:"javascript:void(0);",class:"group inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-blue-500"},O={href:"javascript:void(0);",class:"group inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-pink-600"},q={href:"javascript:void(0);",class:"group inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-sky-600"},H={href:"javascript:void(0);",class:"group inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 transition-all duration-300 hover:bg-blue-800"},J={class:"shrink text-center text-zinc-200"},K=e("b",null,"Login",-1),oe=x({__name:"register",setup(Q){const h=v(),t=n({fullName:"",email:"",password:""}),a=n(!1),i=g(),p=()=>{if(h.register(t.value.fullName,t.value.email,t.value.password))return i.currentRoute.value.redirectedFrom?i.push(`${i.currentRoute.value.redirectedFrom}`):i.push("/");a.value=!0};return(W,s)=>{const f=b;return u(),c(N,null,[e("form",{class:"mt-10 shrink",onSubmit:w(p,["prevent"])},[a.value?(u(),c("div",I,"Please Provide valid credentials")):_("",!0),e("div",R,[A,d(e("input",{class:"block w-full rounded border-white/10 bg-transparent px-4 py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",type:"text",id:"LogInFullName","onUpdate:modelValue":s[0]||(s[0]=o=>t.value.fullName=o),placeholder:"Enter your Full Name"},null,512),[[m,t.value.fullName]]),C]),e("div",B,[T,d(e("input",{class:"block w-full rounded border-white/10 bg-transparent px-4 py-2.5 text-white/80 focus:border-white/25 focus:outline-0 focus:ring-0",type:"email",id:"LogInEmailAddress","onUpdate:modelValue":s[1]||(s[1]=o=>t.value.email=o),placeholder:"Enter your email"},null,512),[[m,t.value.email]])]),e("div",D,[r(j,{modelValue:t.value.password,"onUpdate:modelValue":s[2]||(s[2]=o=>t.value.password=o)},null,8,["modelValue"])]),S],32),U,e("div",M,[P,e("ul",$,[e("li",null,[e("a",G,[r(l(z),{class:"h-5 w-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white"})])]),e("li",null,[e("a",O,[r(l(V),{class:"h-5 w-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white"})])]),e("li",null,[e("a",q,[r(l(L),{class:"h-5 w-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white"})])]),e("li",null,[e("a",H,[r(l(E),{class:"h-5 w-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white"})])])])]),e("p",J,[y(" Already have an account ? "),r(f,{to:"/auth/login",class:"ms-1 text-primary"},{default:k(()=>[K]),_:1})])],64)}}});export{oe as default};
