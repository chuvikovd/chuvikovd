import{S as t,i as s,s as e,r as o,u as a,v as n,y as r,z as l,A as f,j as c,e as i,k as u,c as g,a as h,d as p,f as m,g as $,I as d,l as j,H as y}from"./store.d415e0cf.js";import{I as w}from"./Item.f1d84ea0.js";function I(t,s,e){const o=t.slice();return o[1]=s[e],o}function v(t){let s;const e=new w({props:{post:t[1]}});return{c(){o(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,o){n(e,t,o),s=!0},p(t,s){const o={};1&s&&(o.post=t[1]),e.$set(o)},i(t){s||(r(e.$$.fragment,t),s=!0)},o(t){l(e.$$.fragment,t),s=!1},d(t){f(e,t)}}}function x(t){let s,e,o,a=t[0],n=[];for(let s=0;s<a.length;s+=1)n[s]=v(I(t,a,s));const f=t=>l(n[t],1,1,()=>{n[t]=null});return{c(){s=c(),e=i("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){s=u(t),e=g(t,"DIV",{class:!0});var o=h(e);for(let t=0;t<n.length;t+=1)n[t].l(o);o.forEach(p),this.h()},h(){document.title="Blog",m(e,"class","w-full mt-8 pb-8")},m(t,a){$(t,s,a),$(t,e,a);for(let t=0;t<n.length;t+=1)n[t].m(e,null);o=!0},p(t,[s]){if(1&s){let o;for(a=t[0],o=0;o<a.length;o+=1){const l=I(t,a,o);n[o]?(n[o].p(l,s),r(n[o],1)):(n[o]=v(l),n[o].c(),r(n[o],1),n[o].m(e,null))}for(y(),o=a.length;o<n.length;o+=1)f(o);d()}},i(t){if(!o){for(let t=0;t<a.length;t+=1)r(n[t]);o=!0}},o(t){n=n.filter(Boolean);for(let t=0;t<n.length;t+=1)l(n[t]);o=!1},d(t){t&&p(s),t&&p(e),j(n,t)}}}async function b({params:t,query:s}){const e=await this.fetch(`blog/category/${t.category}.json`),o=await e.json();if(200===e.status)return{posts:o};this.error(e.status,o.message)}function B(t,s,e){let{posts:o}=s;return t.$set=t=>{"posts"in t&&e(0,o=t.posts)},[o]}export default class extends t{constructor(t){super(),s(this,t,B,x,e,{posts:0})}}export{b as preload};
