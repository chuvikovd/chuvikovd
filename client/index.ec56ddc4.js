import{S as t,i as s,s as e,r as n,u as o,v as l,y as r,z as a,A as f,j as c,e as i,k as h,c as u,a as p,d as g,f as m,g as $,I as d,l as j,H as I}from"./store.d415e0cf.js";import{I as v}from"./Item.f1d84ea0.js";function x(t,s,e){const n=t.slice();return n[1]=s[e],n}function b(t){let s;const e=new v({props:{post:t[1]}});return{c(){n(e.$$.fragment)},l(t){o(e.$$.fragment,t)},m(t,n){l(e,t,n),s=!0},p(t,s){const n={};1&s&&(n.post=t[1]),e.$set(n)},i(t){s||(r(e.$$.fragment,t),s=!0)},o(t){a(e.$$.fragment,t),s=!1},d(t){f(e,t)}}}function w(t){let s,e,n,o=t[0],l=[];for(let s=0;s<o.length;s+=1)l[s]=b(x(t,o,s));const f=t=>a(l[t],1,1,()=>{l[t]=null});return{c(){s=c(),e=i("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){s=h(t),e=u(t,"DIV",{class:!0});var n=p(e);for(let t=0;t<l.length;t+=1)l[t].l(n);n.forEach(g),this.h()},h(){document.title="Blog",m(e,"class","w-full mt-8 pb-8")},m(t,o){$(t,s,o),$(t,e,o);for(let t=0;t<l.length;t+=1)l[t].m(e,null);n=!0},p(t,[s]){if(1&s){let n;for(o=t[0],n=0;n<o.length;n+=1){const a=x(t,o,n);l[n]?(l[n].p(a,s),r(l[n],1)):(l[n]=b(a),l[n].c(),r(l[n],1),l[n].m(e,null))}for(I(),n=o.length;n<l.length;n+=1)f(n);d()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)r(l[t]);n=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)a(l[t]);n=!1},d(t){t&&g(s),t&&g(e),j(l,t)}}}function y({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function B(t,s,e){let{posts:n}=s;return t.$set=t=>{"posts"in t&&e(0,n=t.posts)},[n]}export default class extends t{constructor(t){super(),s(this,t,B,w,e,{posts:0})}}export{y as preload};
