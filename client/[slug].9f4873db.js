import{S as t,i as s,s as e,e as n,c as a,f as o,g as r,d as i,z as c,j as m,q as d,k as p,r as l,a as u,m as h,h as f,u as g,v as $,w as j,x as w}from"./index.adcd38c1.js";import{d as b}from"./store.6eeff462.js";import{P as x}from"./PostHeader.cb063982.js";import{g as H}from"./utils.c96bd709.js";function M(t){let s,e;return{c(){s=n("meta"),this.h()},l(t){s=a(t,"META",{name:!0,content:!0}),this.h()},h(){o(s,"name","description"),o(s,"content",e=t[0].description)},m(t,e){r(t,s,e)},p(t,n){1&n&&e!==(e=t[0].description)&&o(s,"content",e)},d(t){t&&i(s)}}}function T(t){let s,e,b,T,k,q,v=t[0].html+"";document.title=s=H(t[0].title);let y=t[0].description&&M(t);const E=new x({props:{post:t[0],opened:"true"}});return{c(){y&&y.c(),e=c(),b=m(),d(E.$$.fragment),T=m(),k=n("div"),this.h()},l(t){y&&y.l(t),e=c(),b=p(t),l(E.$$.fragment,t),T=p(t),k=a(t,"DIV",{class:!0}),u(k).forEach(i),this.h()},h(){o(k,"class","w-full mt-6 markdown"),h(k,"night",!t[1])},m(t,s){y&&y.m(document.head,null),f(document.head,e),r(t,b,s),g(E,t,s),r(t,T,s),r(t,k,s),k.innerHTML=v,q=!0},p(t,[n]){(!q||1&n)&&s!==(s=H(t[0].title))&&(document.title=s),t[0].description?y?y.p(t,n):(y=M(t),y.c(),y.m(e.parentNode,e)):y&&(y.d(1),y=null);const a={};1&n&&(a.post=t[0]),E.$set(a),(!q||1&n)&&v!==(v=t[0].html+"")&&(k.innerHTML=v),2&n&&h(k,"night",!t[1])},i(t){q||($(E.$$.fragment,t),q=!0)},o(t){j(E.$$.fragment,t),q=!1},d(t){y&&y.d(t),i(e),t&&i(b),w(E,t),t&&i(T),t&&i(k)}}}async function k({params:t,query:s}){const e=await this.fetch(`blog/${t.slug}.json`),n=await e.json();if(200===e.status)return{post:n};this.error(e.status,data.message)}function q(t,s,e){let n,{post:a}=s;b.subscribe(t=>{e(1,n=t)});return t.$set=t=>{"post"in t&&e(0,a=t.post)},[a,n]}export default class extends t{constructor(t){super(),s(this,t,q,T,e,{post:0})}}export{k as preload};