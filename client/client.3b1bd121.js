import{n as e,s as t,S as s,i as r,e as n,t as a,a as o,c,b as i,d as l,f as u,g as p,h as f,j as h,k as m,l as d,m as g,o as $,p as v,q as y,r as b,u as E,v as w,w as x,x as S,y as _,z as P,A as R,B as A,C,D as L,E as j,F as N,G as q,H as U}from"./index.ae739cdb.js";const k=[];function O(s,r=e){let n;const a=[];function o(e){if(t(s,e)&&(s=e,n)){const e=!k.length;for(let e=0;e<a.length;e+=1){const t=a[e];t[1](),k.push(t,s)}if(e){for(let e=0;e<k.length;e+=2)k[e][0](k[e+1]);k.length=0}}}return{set:o,update:function(e){o(e(s))},subscribe:function(t,c=e){const i=[t,c];return a.push(i),1===a.length&&(n=r(o)||e),t(s),()=>{const e=a.indexOf(i);-1!==e&&a.splice(e,1),0===a.length&&(n(),n=null)}}}}const H={},B=()=>({});function D(t){let s,r,$,v,y,b,E,w,x,S,_,P,R,A,C,L,j,N,q;return{c(){s=n("div"),r=n("div"),$=n("a"),v=a("Home"),y=o(),b=n("nav"),E=n("a"),w=a("Repositories"),x=o(),S=n("a"),_=a("Project Playground"),P=o(),R=n("nav"),A=n("a"),C=n("img"),j=o(),N=n("span"),q=a("GitHub"),this.h()},l(e){s=c(e,"DIV",{});var t=i(s);r=c(t,"DIV",{class:!0});var n=i(r);$=c(n,"A",{href:!0});var a=i($);v=l(a,"Home"),a.forEach(u),y=p(n),b=c(n,"NAV",{class:!0});var o=i(b);E=c(o,"A",{href:!0,class:!0});var f=i(E);w=l(f,"Repositories"),f.forEach(u),x=p(o),S=c(o,"A",{href:!0,class:!0});var h=i(S);_=l(h,"Project Playground"),h.forEach(u),o.forEach(u),P=p(n),R=c(n,"NAV",{class:!0});var m=i(R);A=c(m,"A",{href:!0,class:!0,target:!0});var d=i(A);C=c(d,"IMG",{src:!0,style:!0,alt:!0}),j=p(d),N=c(d,"SPAN",{class:!0});var g=i(N);q=l(g,"GitHub"),g.forEach(u),d.forEach(u),m.forEach(u),n.forEach(u),t.forEach(u),this.h()},h(){f($,"href","."),f(E,"href","repositories"),f(E,"class","TopBar-link svelte-1yw10ax"),h(E,"is-active","repositories"===t[0]),f(S,"href","playgrounds"),f(S,"class","TopBar-link svelte-1yw10ax"),h(S,"is-active","playgrounds"===t[0]),f(b,"class","TopBar-nav svelte-1yw10ax"),C.src!==(L="octocat_64x64.png")&&f(C,"src","octocat_64x64.png"),m(C,"width","24px"),m(C,"height","24px"),m(C,"margin","auto"),f(C,"alt","CrosszPai GitHub"),f(N,"class","svelte-1yw10ax"),f(A,"href","https://github.com/CrosszPai"),f(A,"class","github-btn svelte-1yw10ax"),f(A,"target","_blank"),f(R,"class","TopBar-navRight svelte-1yw10ax"),f(r,"class","TopBar svelte-1yw10ax")},m(e,t){d(e,s,t),g(s,r),g(r,$),g($,v),g(r,y),g(r,b),g(b,E),g(E,w),g(b,x),g(b,S),g(S,_),g(r,P),g(r,R),g(R,A),g(A,C),g(A,j),g(A,N),g(N,q)},p(e,[t]){1&t&&h(E,"is-active","repositories"===e[0]),1&t&&h(S,"is-active","playgrounds"===e[0])},i:e,o:e,d(e){e&&u(s)}}}function I(e,t,s){let{segment:r}=t;return e.$set=(e=>{"segment"in e&&s(0,r=e.segment)}),e.$$.update=(()=>{e.$$.dirty}),[r]}class T extends s{constructor(e){super(),r(this,e,I,D,t,{segment:0})}}function V(e){let t,s,r;const a=new T({props:{segment:e[0]}}),l=e[2].default,f=$(l,e,e[1],null);return{c(){v(a.$$.fragment),t=o(),s=n("main"),f&&f.c()},l(e){y(a.$$.fragment,e),t=p(e),s=c(e,"MAIN",{});var r=i(s);f&&f.l(r),r.forEach(u)},m(e,n){b(a,e,n),d(e,t,n),d(e,s,n),f&&f.m(s,null),r=!0},p(e,[t]){const s={};1&t&&(s.segment=e[0]),a.$set(s),f&&f.p&&2&t&&f.p(E(l,e,e[1],null),w(l,e[1],t,null))},i(e){r||(x(a.$$.fragment,e),x(f,e),r=!0)},o(e){S(a.$$.fragment,e),S(f,e),r=!1},d(e){_(a,e),e&&u(t),e&&u(s),f&&f.d(e)}}}function G(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:a}=t;return e.$set=(e=>{"segment"in e&&s(0,r=e.segment),"$$scope"in e&&s(1,a=e.$$scope)}),[r,a,n]}class J extends s{constructor(e){super(),r(this,e,G,V,t,{segment:0})}}function z(e){let t,s,r=e[1].stack+"";return{c(){t=n("pre"),s=a(r)},l(e){t=c(e,"PRE",{});var n=i(t);s=l(n,r),n.forEach(u)},m(e,r){d(e,t,r),g(t,s)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&P(s,r)},d(e){e&&u(t)}}}function K(t){let s,r,h,m,$,v,y,b,E,w=t[1].message+"";document.title=s=t[0];let x=t[2]&&t[1].stack&&z(t);return{c(){r=o(),h=n("h1"),m=a(t[0]),$=o(),v=n("p"),y=a(w),b=o(),x&&x.c(),E=R(),this.h()},l(e){A('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(u),r=p(e),h=c(e,"H1",{class:!0});var s=i(h);m=l(s,t[0]),s.forEach(u),$=p(e),v=c(e,"P",{class:!0});var n=i(v);y=l(n,w),n.forEach(u),b=p(e),x&&x.l(e),E=R(),this.h()},h(){f(h,"class","svelte-8od9u6"),f(v,"class","svelte-8od9u6")},m(e,t){d(e,r,t),d(e,h,t),g(h,m),d(e,$,t),d(e,v,t),g(v,y),d(e,b,t),x&&x.m(e,t),d(e,E,t)},p(e,[t]){1&t&&s!==(s=e[0])&&(document.title=s),1&t&&P(m,e[0]),2&t&&w!==(w=e[1].message+"")&&P(y,w),e[2]&&e[1].stack?x?x.p(e,t):((x=z(e)).c(),x.m(E.parentNode,E)):x&&(x.d(1),x=null)},i:e,o:e,d(e){e&&u(r),e&&u(h),e&&u($),e&&u(v),e&&u(b),x&&x.d(e),e&&u(E)}}}function M(e,t,s){let{status:r}=t,{error:n}=t;return e.$set=(e=>{"status"in e&&s(0,r=e.status),"error"in e&&s(1,n=e.error)}),[r,n,!1]}class F extends s{constructor(e){super(),r(this,e,M,K,t,{status:0,error:1})}}function W(e){let t,s;const r=[e[4].props];var n=e[4].component;function a(e){let t={};for(let e=0;e<r.length;e+=1)t=C(t,r[e]);return{props:t}}if(n)var o=new n(a());return{c(){o&&v(o.$$.fragment),t=R()},l(e){o&&y(o.$$.fragment,e),t=R()},m(e,r){o&&b(o,e,r),d(e,t,r),s=!0},p(e,s){const c=16&s?L(r,[j(e[4].props)]):{};if(n!==(n=e[4].component)){if(o){q();const e=o;S(e.$$.fragment,1,0,()=>{_(e,1)}),U()}n?(o=new n(a()),v(o.$$.fragment),x(o.$$.fragment,1),b(o,t.parentNode,t)):o=null}else n&&o.$set(c)},i(e){s||(o&&x(o.$$.fragment,e),s=!0)},o(e){o&&S(o.$$.fragment,e),s=!1},d(e){e&&u(t),o&&_(o,e)}}}function X(e){let t;const s=new F({props:{error:e[0],status:e[1]}});return{c(){v(s.$$.fragment)},l(e){y(s.$$.fragment,e)},m(e,r){b(s,e,r),t=!0},p(e,t){const r={};1&t&&(r.error=e[0]),2&t&&(r.status=e[1]),s.$set(r)},i(e){t||(x(s.$$.fragment,e),t=!0)},o(e){S(s.$$.fragment,e),t=!1},d(e){_(s,e)}}}function Y(e){let t,s,r,n;const a=[X,W],o=[];function c(e,t){return e[0]?0:1}return t=c(e),s=o[t]=a[t](e),{c(){s.c(),r=R()},l(e){s.l(e),r=R()},m(e,s){o[t].m(e,s),d(e,r,s),n=!0},p(e,n){let i=t;(t=c(e))===i?o[t].p(e,n):(q(),S(o[i],1,1,()=>{o[i]=null}),U(),(s=o[t])||(s=o[t]=a[t](e)).c(),x(s,1),s.m(r.parentNode,r))},i(e){n||(x(s),n=!0)},o(e){S(s),n=!1},d(e){o[t].d(e),e&&u(r)}}}function Q(e){let t;const s=[{segment:e[2][0]},e[3].props];let r={$$slots:{default:[Y]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)r=C(r,s[e]);const n=new J({props:r});return{c(){v(n.$$.fragment)},l(e){y(n.$$.fragment,e)},m(e,s){b(n,e,s),t=!0},p(e,[t]){const r=12&t?L(s,[4&t&&{segment:e[2][0]},8&t&&j(e[3].props)]):{};83&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){t||(x(n.$$.fragment,e),t=!0)},o(e){S(n.$$.fragment,e),t=!1},d(e){_(n,e)}}}function Z(e,t,s){let{stores:r}=t,{error:n}=t,{status:a}=t,{segments:o}=t,{level0:c}=t,{level1:i=null}=t;return N(H,r),e.$set=(e=>{"stores"in e&&s(5,r=e.stores),"error"in e&&s(0,n=e.error),"status"in e&&s(1,a=e.status),"segments"in e&&s(2,o=e.segments),"level0"in e&&s(3,c=e.level0),"level1"in e&&s(4,i=e.level1)}),[n,a,o,c,i,r]}class ee extends s{constructor(e){super(),r(this,e,Z,Q,t,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const te=[],se=[{js:()=>import("./index.6cd4171f.js"),css:["index.6cd4171f.css"]},{js:()=>import("./index.e1970538.js"),css:["index.e1970538.css"]},{js:()=>import("./index.977c77fb.js"),css:[]}],re=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/repositories\/?$/,parts:[{i:1}]},{pattern:/^\/playgrounds\/?$/,parts:[{i:2}]}];const ne="undefined"!=typeof __SAPPER__&&__SAPPER__;let ae,oe,ce,ie=!1,le=[],ue="{}";const pe={page:O({}),preloading:O(null),session:O(ne&&ne.session)};let fe,he;pe.session.subscribe(async e=>{if(fe=e,!ie)return;he=!0;const t=Ee(new URL(location.href)),s=oe={},{redirect:r,props:n,branch:a}=await _e(t);s===oe&&await Se(r,a,n,t.page)});let me,de=null;let ge,$e=1;const ve="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},ye={};function be(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function Ee(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(ne.baseUrl))return null;let t=e.pathname.slice(ne.baseUrl.length);if(""===t&&(t="/"),!te.some(e=>e.test(t)))for(let s=0;s<re.length;s+=1){const r=re[s],n=r.pattern.exec(t);if(n){const s=be(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(n):{},c={host:location.host,path:t,query:s,params:o};return{href:e.href,route:r,match:n,page:c}}}}function we(){return{x:pageXOffset,y:pageYOffset}}async function xe(e,t,s,r){if(t)ge=t;else{const e=we();ye[ge]=e,t=ge=++$e,ye[ge]=s?e:{x:0,y:0}}ge=t,ae&&pe.preloading.set(!0);const n=de&&de.href===e.href?de.promise:_e(e);de=null;const a=oe={},{redirect:o,props:c,branch:i}=await n;if(a===oe&&(await Se(o,i,c,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=ye[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}ye[ge]=e,e&&scrollTo(e.x,e.y)}}async function Se(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=Ee(new URL(e,document.baseURI));return s?(ve[t.replaceState?"replaceState":"pushState"]({id:ge},"",e),xe(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(pe.page.set(r),pe.preloading.set(!1),ae)ae.$set(s);else{s.stores={page:{subscribe:pe.page.subscribe},preloading:{subscribe:pe.preloading.subscribe},session:pe.session},s.level0={props:await ce};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Re(e.nextSibling);Re(e),Re(t)}ae=new ee({target:me,props:s,hydrate:!0})}le=t,ue=JSON.stringify(r.query),ie=!0,he=!1}async function _e(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let c;ce||(ce=ne.preloaded[0]||B.call(o,{host:s.host,path:s.path,query:s.query,params:{}},fe));let i=1;try{const n=JSON.stringify(s.query),l=t.pattern.exec(s.path);let u=!1;c=await Promise.all(t.parts.map(async(t,c)=>{const p=r[c];if(function(e,t,s,r){if(r!==ue)return!0;const n=le[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(c,p,l,n)&&(u=!0),a.segments[i]=r[c+1],!t)return{segment:p};const f=i++;if(!he&&!u&&le[c]&&le[c].part===t.i)return le[c];u=!1;const{default:h,preload:m}=await function(e){const t="string"==typeof e.css?[]:e.css.map(Pe);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(se[t.i]);let d;return d=ie||!ne.preloaded[c+1]?m?await m.call(o,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},fe):{}:ne.preloaded[c+1],a[`level${f}`]={component:h,props:d,segment:p,match:l,part:t.i}}))}catch(e){a.error=e,a.status=500,c=[]}return{redirect:n,props:a,branch:c}}function Pe(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=(()=>e()),r.onerror=s,document.head.appendChild(r)})}function Re(e){e.parentNode.removeChild(e)}function Ae(e){const t=Ee(new URL(e,document.baseURI));if(t)return de&&e===de.href||function(e,t){de={href:e,promise:t}}(e,_e(t)),de.promise}let Ce;function Le(e){clearTimeout(Ce),Ce=setTimeout(()=>{je(e)},20)}function je(e){const t=qe(e.target);t&&"prefetch"===t.rel&&Ae(t.href)}function Ne(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=qe(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=Ee(n);if(a){xe(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),ve.pushState({id:ge},"",n.href)}}function qe(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Ue(e){if(ye[ge]=we(),e.state){const t=Ee(new URL(location.href));t?xe(t,e.state.id):location.href=location.href}else(function(e){ge=e})($e=$e+1),ve.replaceState({id:ge},"",location.href)}!function(e){var t;"scrollRestoration"in ve&&(ve.scrollRestoration="manual"),t=e.target,me=t,addEventListener("click",Ne),addEventListener("popstate",Ue),addEventListener("touchstart",je),addEventListener("mousemove",Le),Promise.resolve().then(()=>{const{hash:e,href:t}=location;ve.replaceState({id:$e},"",t);const s=new URL(location.href);if(ne.error)return function(e){const{host:t,pathname:s,search:r}=location,{session:n,preloaded:a,status:o,error:c}=ne;ce||(ce=a&&a[0]),Se(null,[],{error:c,status:o,session:n,level0:{props:ce},level1:{props:{status:o,error:c},component:F},segments:a},{host:t,path:s,query:be(r),params:{}})}();const r=Ee(s);return r?xe(r,$e,!0,e):void 0})}({target:document.querySelector("#sapper")});
