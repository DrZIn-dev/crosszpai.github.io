import{S as t,i as e,s as l,e as s,t as a,a as n,c as r,b as o,d as c,f as h,g as i,h as f,k as u,l as d,m,z as g,I as p,B as v,n as E,J as b}from"./index.ae739cdb.js";function w(t,e,l){const s=t.slice();return s[4]=e[l],s}function y(t,e,l){const s=t.slice();return s[1]=e[l],s}function I(t){let e,l,f,u,g,p,v;return{c(){e=s("div"),l=s("h1"),f=a("Loading..."),u=n(),g=s("h4"),p=a("Maybe api server is in downtime."),v=n()},l(t){e=r(t,"DIV",{});var s=o(e);l=r(s,"H1",{});var a=o(l);f=c(a,"Loading..."),a.forEach(h),u=i(s),g=r(s,"H4",{});var n=o(g);p=c(n,"Maybe api server is in downtime."),n.forEach(h),v=i(s),s.forEach(h)},m(t,s){d(t,e,s),m(e,l),m(l,f),m(e,u),m(e,g),m(g,p),m(e,v)},d(t){t&&h(e)}}}function k(t){let e,l,n=t[4]+"";return{c(){e=s("span"),l=a(n),this.h()},l(t){e=r(t,"SPAN",{class:!0});var s=o(e);l=c(s,n),s.forEach(h),this.h()},h(){f(e,"class","topic svelte-eufmo7")},m(t,s){d(t,e,s),m(e,l)},p(t,e){1&e&&n!==(n=t[4]+"")&&g(l,n)},d(t){t&&h(e)}}}function L(t){let e,l,v,E,b,y,I,L=t[1].name+"",_=t[1].topics,j=[];for(let e=0;e<_.length;e+=1)j[e]=k(w(t,_,e));return{c(){e=s("li"),l=s("a"),v=a(L),b=n(),y=s("div");for(let t=0;t<j.length;t+=1)j[t].c();I=n(),this.h()},l(t){e=r(t,"LI",{class:!0});var s=o(e);l=r(s,"A",{href:!0,target:!0});var a=o(l);v=c(a,L),a.forEach(h),b=i(s),y=r(s,"DIV",{style:!0});var n=o(y);for(let t=0;t<j.length;t+=1)j[t].l(n);n.forEach(h),I=i(s),s.forEach(h),this.h()},h(){f(l,"href",E=t[1].html_url),f(l,"target","__blank"),u(y,"display","block"),f(e,"class","svelte-eufmo7")},m(t,s){d(t,e,s),m(e,l),m(l,v),m(e,b),m(e,y);for(let t=0;t<j.length;t+=1)j[t].m(y,null);m(e,I)},p(t,e){if(1&e&&L!==(L=t[1].name+"")&&g(v,L),1&e&&E!==(E=t[1].html_url)&&f(l,"href",E),1&e){let l;for(_=t[1].topics,l=0;l<_.length;l+=1){const s=w(t,_,l);j[l]?j[l].p(s,e):(j[l]=k(s),j[l].c(),j[l].m(y,null))}for(;l<j.length;l+=1)j[l].d(1);j.length=_.length}},d(t){t&&h(e),p(j,t)}}}function _(t){let e,l,a,c,u=t[0],g=[];for(let e=0;e<u.length;e+=1)g[e]=L(y(t,u,e));let b=null;return u.length||(b=I()),{c(){e=n(),l=s("section"),a=s("div"),c=s("ul");for(let t=0;t<g.length;t+=1)g[t].c();b&&b.c(),this.h()},l(t){v('[data-svelte="svelte-1ufbapb"]',document.head).forEach(h),e=i(t),l=r(t,"SECTION",{});var s=o(l);a=r(s,"DIV",{class:!0});var n=o(a);c=r(n,"UL",{class:!0});var f=o(c);for(let t=0;t<g.length;t+=1)g[t].l(f);b&&b.l(f),f.forEach(h),n.forEach(h),s.forEach(h),this.h()},h(){document.title="CrosszPai: Repositories",f(c,"class","svelte-eufmo7"),f(a,"class","content svelte-eufmo7")},m(t,s){d(t,e,s),d(t,l,s),m(l,a),m(a,c);for(let t=0;t<g.length;t+=1)g[t].m(c,null);b&&b.m(c,null)},p(t,[e]){if(1&e){let l;for(u=t[0],l=0;l<u.length;l+=1){const s=y(t,u,l);g[l]?g[l].p(s,e):(g[l]=L(s),g[l].c(),g[l].m(c,null))}for(;l<g.length;l+=1)g[l].d(1);g.length=u.length}u.length?b&&(b.d(1),b=null):b||((b=I()).c(),b.m(c,null))},i:E,o:E,d(t){t&&h(e),t&&h(l),p(g,t),b&&b.d()}}}function j(t,e,l){let s=[];return b(async()=>{const t=await fetch("https://api.github.com/users/CrosszPai/repos",{headers:{Accept:"application/vnd.github.mercy-preview+json"}});let e=await t.json();if(!t.ok)throw new Error(e);l(0,s=e)}),[s]}export default class extends t{constructor(t){super(),e(this,t,j,_,l,{})}}
