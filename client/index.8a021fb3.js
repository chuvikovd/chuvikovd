import{S as t,i as e,s,e as r,t as l,a,c as o,b as n,d as c,f,g as i,h,j as p,k as m,l as u,m as d,n as g,o as $,p as b,q as v,r as x,u as j,v as w,w as y,x as E}from"./client.9b7c1ebe.js";import{B as I,P}from"./PostHeader.1b6b2e9b.js";function D(t){let e;return{c(){e=l("Learn more")},l(t){e=f(t,"Learn more")},m(t,s){u(t,e,s)},d(t){t&&i(e)}}}function H(t){let e,s,j,w,y,E,P,H,L,R,V=t[0].title+"",A=t[0].description+"";const B=new I({props:{href:t[0].url,$$slots:{default:[D]},$$scope:{ctx:t}}});return{c(){e=r("article"),s=r("a"),j=r("h2"),w=l(V),E=a(),P=r("p"),H=l(A),L=a(),o(B.$$.fragment),this.h()},l(t){e=n(t,"ARTICLE",{class:!0});var r=c(e);s=n(r,"A",{href:!0});var l=c(s);j=n(l,"H2",{class:!0});var a=c(j);w=f(a,V),a.forEach(i),l.forEach(i),E=h(r),P=n(r,"P",{class:!0});var o=c(P);H=f(o,A),o.forEach(i),L=h(r),p(B.$$.fragment,r),r.forEach(i),this.h()},h(){m(j,"class","font-display text-3xl md:text-4xl font-bold text-red\n      leading-tight mb-1"),m(s,"href",y=t[0].url),m(P,"class","mb-4"),m(e,"class","w-full mt-8 first:mt-0")},m(t,r){u(t,e,r),d(e,s),d(s,j),d(j,w),d(e,E),d(e,P),d(P,H),d(e,L),g(B,e,null),R=!0},p(t,[e]){(!R||1&e)&&V!==(V=t[0].title+"")&&$(w,V),(!R||1&e&&y!==(y=t[0].url))&&m(s,"href",y),(!R||1&e)&&A!==(A=t[0].description+"")&&$(H,A);const r={};1&e&&(r.href=t[0].url),2&e&&(r.$$scope={dirty:e,ctx:t}),B.$set(r)},i(t){R||(b(B.$$.fragment,t),R=!0)},o(t){v(B.$$.fragment,t),R=!1},d(t){t&&i(e),x(B)}}}function L(t,e,s){let{project:r}=e;return t.$set=t=>{"project"in t&&s(0,r=t.project)},[r]}class R extends t{constructor(t){super(),e(this,t,L,H,s,{project:0})}}function V(t,e,s){const r=t.slice();return r[2]=e[s],r}function A(t,e,s){const r=t.slice();return r[5]=e[s],r}function B(t){let e;const s=new P({props:{post:t[5]}});return{c(){o(s.$$.fragment)},l(t){p(s.$$.fragment,t)},m(t,r){g(s,t,r),e=!0},p(t,e){const r={};1&e&&(r.post=t[5]),s.$set(r)},i(t){e||(b(s.$$.fragment,t),e=!0)},o(t){v(s.$$.fragment,t),e=!1},d(t){x(s,t)}}}function S(t){let e;const s=new R({props:{project:t[2]}});return{c(){o(s.$$.fragment)},l(t){p(s.$$.fragment,t)},m(t,r){g(s,t,r),e=!0},p(t,e){const r={};2&e&&(r.project=t[2]),s.$set(r)},i(t){e||(b(s.$$.fragment,t),e=!0)},o(t){v(s.$$.fragment,t),e=!1},d(t){x(s,t)}}}function T(t){let e,s,o,p,g,$,x,I,P,D,H,L,R,T,k,q,G,M,N,O,C,z,F,J=t[0],K=[];for(let e=0;e<J.length;e+=1)K[e]=B(A(t,J,e));const Q=t=>v(K[t],1,1,()=>{K[t]=null});let U=t[1],W=[];for(let e=0;e<U.length;e+=1)W[e]=S(V(t,U,e));const X=t=>v(W[t],1,1,()=>{W[t]=null});return{c(){e=a(),s=r("div"),o=r("h1"),p=l("Hi."),g=a(),$=r("p"),x=l("My name is Dmitrijs and this is my blog. Here I write about my journeys in\n    web development."),I=a(),P=r("div"),D=r("strong"),H=l("Latest Posts"),L=a(),R=r("a"),T=l("Read all posts"),k=a(),q=r("div");for(let t=0;t<K.length;t+=1)K[t].c();G=a(),M=r("div"),N=r("strong"),O=l("Projects"),C=a(),z=r("div");for(let t=0;t<W.length;t+=1)W[t].c();this.h()},l(t){j('[data-svelte="svelte-1cvhrxr"]',document.head).forEach(i),e=h(t),s=n(t,"DIV",{class:!0});var r=c(s);o=n(r,"H1",{class:!0});var l=c(o);p=f(l,"Hi."),l.forEach(i),g=h(r),$=n(r,"P",{class:!0});var a=c($);x=f(a,"My name is Dmitrijs and this is my blog. Here I write about my journeys in\n    web development."),a.forEach(i),r.forEach(i),I=h(t),P=n(t,"DIV",{class:!0});var m=c(P);D=n(m,"STRONG",{class:!0});var u=c(D);H=f(u,"Latest Posts"),u.forEach(i),L=h(m),R=n(m,"A",{class:!0,href:!0});var d=c(R);T=f(d,"Read all posts"),d.forEach(i),m.forEach(i),k=h(t),q=n(t,"DIV",{class:!0});var b=c(q);for(let t=0;t<K.length;t+=1)K[t].l(b);b.forEach(i),G=h(t),M=n(t,"DIV",{class:!0});var v=c(M);N=n(v,"STRONG",{class:!0});var w=c(N);O=f(w,"Projects"),w.forEach(i),v.forEach(i),C=h(t),z=n(t,"DIV",{class:!0});var y=c(z);for(let t=0;t<W.length;t+=1)W[t].l(y);y.forEach(i),this.h()},h(){document.title="chuva.dev",m(o,"class","font-display font-bold text-6xl text-red"),m($,"class","text-xl"),m(s,"class","py-10 sm:py-24"),m(D,"class","font-display text-3xl"),m(R,"class","font-display text-sm text-black hover:text-red"),m(R,"href","/blog"),m(P,"class","border-b flex justify-between items-center flex-wrap pb-2 w-full"),m(q,"class","w-full mt-8 pb-8 mb-10"),m(N,"class","font-display text-3xl"),m(M,"class","border-b flex justify-between items-center pb-2 w-full"),m(z,"class","w-full mt-8 pb-8")},m(t,r){u(t,e,r),u(t,s,r),d(s,o),d(o,p),d(s,g),d(s,$),d($,x),u(t,I,r),u(t,P,r),d(P,D),d(D,H),d(P,L),d(P,R),d(R,T),u(t,k,r),u(t,q,r);for(let t=0;t<K.length;t+=1)K[t].m(q,null);u(t,G,r),u(t,M,r),d(M,N),d(N,O),u(t,C,r),u(t,z,r);for(let t=0;t<W.length;t+=1)W[t].m(z,null);F=!0},p(t,[e]){if(1&e){let s;for(J=t[0],s=0;s<J.length;s+=1){const r=A(t,J,s);K[s]?(K[s].p(r,e),b(K[s],1)):(K[s]=B(r),K[s].c(),b(K[s],1),K[s].m(q,null))}for(E(),s=J.length;s<K.length;s+=1)Q(s);w()}if(2&e){let s;for(U=t[1],s=0;s<U.length;s+=1){const r=V(t,U,s);W[s]?(W[s].p(r,e),b(W[s],1)):(W[s]=S(r),W[s].c(),b(W[s],1),W[s].m(z,null))}for(E(),s=U.length;s<W.length;s+=1)X(s);w()}},i(t){if(!F){for(let t=0;t<J.length;t+=1)b(K[t]);for(let t=0;t<U.length;t+=1)b(W[t]);F=!0}},o(t){K=K.filter(Boolean);for(let t=0;t<K.length;t+=1)v(K[t]);W=W.filter(Boolean);for(let t=0;t<W.length;t+=1)v(W[t]);F=!1},d(t){t&&i(e),t&&i(s),t&&i(I),t&&i(P),t&&i(k),t&&i(q),y(K,t),t&&i(G),t&&i(M),t&&i(C),t&&i(z),y(W,t)}}}async function k({params:t,query:e}){return{posts:await(await this.fetch("blog/latest.json")).json(),projects:await(await this.fetch("projects.json")).json()}}function q(t,e,s){let{posts:r}=e,{projects:l}=e;return t.$set=t=>{"posts"in t&&s(0,r=t.posts),"projects"in t&&s(1,l=t.projects)},[r,l]}export default class extends t{constructor(t){super(),e(this,t,q,T,s,{posts:0,projects:1})}}export{k as preload};
