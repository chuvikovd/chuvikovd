import{S as e,i as a,s,e as t,t as r,j as i,c as o,a as n,b as l,k as u,d as c,f as h,g as m,h as d,C as f,n as $,K as p}from"./index.adcd38c1.js";import{g}from"./utils.c96bd709.js";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var b=function(e,a){return e(a={exports:{}},a.exports),a.exports}((function(e,a){!function(a,s){e.exports=s()}(0,(function(){var e=[],a=[],s={},t={},r={};function i(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function o(e,a){return e===a?a:e===e.toLowerCase()?a.toLowerCase():e===e.toUpperCase()?a.toUpperCase():e[0]===e[0].toUpperCase()?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():a.toLowerCase()}function n(e,a){return e.replace(/\$(\d{1,2})/g,(function(e,s){return a[s]||""}))}function l(e,a){return e.replace(a[0],(function(s,t){var r=n(a[1],arguments);return o(""===s?e[t-1]:s,r)}))}function u(e,a,t){if(!e.length||s.hasOwnProperty(e))return a;for(var r=t.length;r--;){var i=t[r];if(i[0].test(a))return l(a,i)}return a}function c(e,a,s){return function(t){var r=t.toLowerCase();return a.hasOwnProperty(r)?o(t,r):e.hasOwnProperty(r)?o(t,e[r]):u(r,t,s)}}function h(e,a,s,t){return function(t){var r=t.toLowerCase();return!!a.hasOwnProperty(r)||!e.hasOwnProperty(r)&&u(r,r,s)===r}}function m(e,a,s){return(s?a+" ":"")+(1===a?m.singular(e):m.plural(e))}return m.plural=c(r,t,e),m.isPlural=h(r,t,e),m.singular=c(t,r,a),m.isSingular=h(t,r,a),m.addPluralRule=function(a,s){e.push([i(a),s])},m.addSingularRule=function(e,s){a.push([i(e),s])},m.addUncountableRule=function(e){"string"!=typeof e?(m.addPluralRule(e,"$0"),m.addSingularRule(e,"$0")):s[e.toLowerCase()]=!0},m.addIrregularRule=function(e,a){a=a.toLowerCase(),e=e.toLowerCase(),r[e]=a,t[a]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return m.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return m.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return m.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(m.addUncountableRule),m}))}));function v(e,a,s){const t=e.slice();return t[1]=a[s],t}function y(e){let a,s,$,p,g,v,y,w,x,k=e[1]+"",C=e[0][e[1]]+"",j=b("post",e[0][e[1]])+"";return{c(){a=t("a"),s=t("h2"),$=r(k),p=r(" - "),g=r(C),v=i(),y=r(j),w=i(),this.h()},l(e){a=o(e,"A",{rel:!0,href:!0});var t=n(a);s=o(t,"H2",{class:!0});var r=n(s);$=l(r,k),p=l(r," - "),g=l(r,C),v=u(r),y=l(r,j),r.forEach(c),w=u(t),t.forEach(c),this.h()},h(){h(s,"class","font-display text-2xl md:text-3xl font-bold hover:text-red\r\n        leading-tight mb-2"),h(a,"rel","prefetch"),h(a,"href",x=`blog/categories/${e[1]}`)},m(e,t){m(e,a,t),d(a,s),d(s,$),d(s,p),d(s,g),d(s,v),d(s,y),d(a,w)},p(e,s){1&s&&k!==(k=e[1]+"")&&f($,k),1&s&&C!==(C=e[0][e[1]]+"")&&f(g,C),1&s&&j!==(j=b("post",e[0][e[1]])+"")&&f(y,j),1&s&&x!==(x=`blog/categories/${e[1]}`)&&h(a,"href",x)},d(e){e&&c(a)}}}function w(e){let a,s,r;document.title=a=g("Categories");let l=Object.keys(e[0]),d=[];for(let a=0;a<l.length;a+=1)d[a]=y(v(e,l,a));return{c(){s=i(),r=t("div");for(let e=0;e<d.length;e+=1)d[e].c();this.h()},l(e){s=u(e),r=o(e,"DIV",{class:!0});var a=n(r);for(let e=0;e<d.length;e+=1)d[e].l(a);a.forEach(c),this.h()},h(){h(r,"class","w-full mt-8 pb-8")},m(e,a){m(e,s,a),m(e,r,a);for(let e=0;e<d.length;e+=1)d[e].m(r,null)},p(e,[s]){if(0&s&&a!==(a=g("Categories"))&&(document.title=a),1&s){let a;for(l=Object.keys(e[0]),a=0;a<l.length;a+=1){const t=v(e,l,a);d[a]?d[a].p(t,s):(d[a]=y(t),d[a].c(),d[a].m(r,null))}for(;a<d.length;a+=1)d[a].d(1);d.length=l.length}},i:$,o:$,d(e){e&&c(s),e&&c(r),p(d,e)}}}function x({params:e,query:a}){return this.fetch("blog/categories.json").then(e=>e.json()).then(e=>({categories:e}))}function k(e,a,s){let{categories:t}=a;return e.$set=e=>{"categories"in e&&s(0,t=e.categories)},[t]}export default class extends e{constructor(e){super(),a(this,e,k,w,s,{categories:0})}}export{x as preload};