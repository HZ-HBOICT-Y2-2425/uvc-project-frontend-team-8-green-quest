import{a as _,t as T}from"../chunks/disclose-version.4mwnyd39.js";import"../chunks/legacy.C0vkhBWH.js";import{G as t,J as a,K as e,S as H,Q as i,M as O,T as F,R as U}from"../chunks/runtime.B8VvrZ1Y.js";import{s as j}from"../chunks/render.X5FDlczF.js";import{e as W,i as G}from"../chunks/each.8dt2bd6Z.js";import{s as w}from"../chunks/attributes.XouPAvqr.js";import{e as o}from"../chunks/events.Bz3koNc8.js";/* empty css                    */var P=T('<div class="bg-beige w-[45%] h-40 flex flex-col items-center justify-between rounded-lg p-2 shadow-md svelte-1fiji8y"><img class="h-16 w-auto"> <div class="bg-orange-500 text-white w-full flex items-center justify-between px-2 py-1 rounded-md"><p class="text-sm font-medium"> </p> <div class="flex items-center gap-1"><img src="/coins.png" alt="coins" class="h-4 w-4"> <span class="text-sm font-medium"> </span></div></div></div>'),z=T('<div class="bg-beige h-screen flex flex-col justify-between svelte-1fiji8y"><div class="flex items-center justify-center relative"><a href="/" class="absolute left-4"><img src="/back.png" alt="Back" class="h-6 w-6"></a> <h1 class="text-black text-center text-2xl font-bold">SHOP</h1></div> <div class="flex-grow flex items-start justify-center bg-beige pt-20 svelte-1fiji8y"><div class="bg-dark-green h-96 w-80 rounded-3xl p-5 flex svelte-1fiji8y"><div class="w-1/3 flex flex-col justify-center gap-4 pr-4"><button class="bg-light-green text-dark-green rounded-lg py-2 px-4 text-center text-sm font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300 svelte-1fiji8y">TREES</button> <button class="bg-light-green text-dark-green rounded-lg py-2 px-4 text-center text-sm font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300 svelte-1fiji8y">BUSHES</button> <button class="bg-light-green text-dark-green rounded-lg py-2 px-4 text-center text-sm font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300 svelte-1fiji8y">FLOWERS</button> <button class="bg-light-green text-dark-green rounded-lg py-2 px-4 text-center text-sm font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300 svelte-1fiji8y">ANIMALS</button> <button class="bg-light-green text-dark-green rounded-lg py-2 px-4 text-center text-sm font-medium hover:bg-dark-green hover:text-beige transform transition-transform duration-300 svelte-1fiji8y">INSECTS</button></div> <div class="border-l-2 border-black"></div> <div class="flex-grow flex flex-wrap justify-evenly items-center gap-4 pl-4"></div></div></div> <div></div></div>');function Y(L){const R={TREES:[{name:"Oak",image:"/coins.png",coins:Math.floor(Math.random()*10)+1},{name:"Pine",image:"/coins.png",coins:Math.floor(Math.random()*10)+1},{name:"Maple",image:"/coins.png",coins:Math.floor(Math.random()*10)+1},{name:"Birch",image:"/coins.png",coins:Math.floor(Math.random()*10)+1}],BUSHES:[{name:"Rose",image:"/coins.png",coins:Math.floor(Math.random()*10)+1},{name:"Hibiscus",image:"/coins.png",coins:Math.floor(Math.random()*10)+1},{name:"Azalea",image:"/coins.png",coins:Math.floor(Math.random()*10)+1},{name:"Lilac",image:"/coins.png",coins:Math.floor(Math.random()*10)+1}],FLOWERS:[{name:"Sunflower",image:"/coins.png",coins:Math.floor(Math.random()*10)+1},{name:"Tulip",image:"/coins.png",coins:Math.floor(Math.random()*10)+1},{name:"Daisy",image:"/coins.png",coins:Math.floor(Math.random()*10)+1},{name:"Lily",image:"/coins.png",coins:Math.floor(Math.random()*10)+1}],ANIMALS:[{name:"Lion",image:"/coins.png",coins:Math.floor(Math.random()*10)+1},{name:"Elephant",image:"/coins.png",coins:Math.floor(Math.random()*10)+1},{name:"Tiger",image:"/coins.png",coins:Math.floor(Math.random()*10)+1},{name:"Zebra",image:"/coins.png",coins:Math.floor(Math.random()*10)+1}],INSECTS:[{name:"Bee",image:"/coins.png",coins:Math.floor(Math.random()*10)+1},{name:"Butterfly",image:"/coins.png",coins:Math.floor(Math.random()*10)+1},{name:"Ant",image:"/coins.png",coins:Math.floor(Math.random()*10)+1},{name:"Grasshopper",image:"/coins.png",coins:Math.floor(Math.random()*10)+1}]};let f=F("TREES");const n=m=>{U(f,m)};var r=z(),v=t(a(r),2),h=a(v),s=a(h),p=a(s),x=t(p,2),u=t(x,2),b=t(u,2),A=t(b,2);e(s);var M=t(s,4);W(M,5,()=>R[i(f)],G,(m,l)=>{let y=()=>i(l).name,B=()=>i(l).image,I=()=>i(l).coins;var c=P(),g=a(c),S=t(g,2),d=a(S),N=a(d,!0);e(d);var k=t(d,2),E=t(a(k),2),C=a(E,!0);e(E),e(k),e(S),e(c),H(()=>{w(g,"src",B()),w(g,"alt",y()),j(N,y()),j(C,I())}),_(m,c)}),e(M),e(h),e(v),O(2),e(r),o("click",p,()=>n("TREES")),o("click",x,()=>n("BUSHES")),o("click",u,()=>n("FLOWERS")),o("click",b,()=>n("ANIMALS")),o("click",A,()=>n("INSECTS")),_(L,r)}export{Y as component};
