import{_ as s,a as n,b as a,c as t,i as r,s as c,d as e,S as i,e as o,f as u,q as l,g as f,h,j as v,k as d,l as p,m,n as g,o as E,p as b,t as H,r as $,u as I,v as k,w as y}from"./client.92260627.js";function j(s){var n,a;return{c:function(){n=u("h1"),a=H("Load pap"),this.h()},l:function(s){n=v(s,"H1",{class:!0});var t=d(n);a=$(t,"Load pap"),t.forEach(f),this.h()},h:function(){p(n,"class","svelte-1r28uvs")},m:function(s,t){m(s,n,t),I(n,a)},p:E,d:function(s){s&&f(n)}}}function x(s){var n,a,t,r,c,e,i,l,g,E,b,k,j,x,L,P,V,w,C,G,N,S=s[2]().header+"",_=s[2]().subheader+"",q=s[2]().describe+"",z=s[2]().link+"",A=5!=s[0]&&D(s);return{c:function(){A&&A.c(),n=o(),a=u("div"),t=u("div"),r=u("h4"),c=H(S),e=o(),i=u("h1"),l=H(_),g=o(),E=u("p"),b=H(q),k=o(),j=u("br"),x=o(),L=u("a"),P=H(z),w=o(),C=u("div"),G=u("img"),this.h()},l:function(s){A&&A.l(s),n=h(s),a=v(s,"DIV",{class:!0});var o=d(a);t=v(o,"DIV",{class:!0});var u=d(t);r=v(u,"H4",{class:!0});var p=d(r);c=$(p,S),p.forEach(f),e=h(u),i=v(u,"H1",{class:!0});var m=d(i);l=$(m,_),m.forEach(f),g=h(u),E=v(u,"P",{class:!0});var H=d(E);b=$(H,q),k=h(H),j=v(H,"BR",{}),x=h(H),L=v(H,"A",{class:!0,href:!0,target:!0});var I=d(L);P=$(I,z),I.forEach(f),H.forEach(f),u.forEach(f),w=h(o),C=v(o,"DIV",{class:!0});var y=d(C);G=v(y,"IMG",{src:!0,class:!0,alt:!0}),y.forEach(f),o.forEach(f),this.h()},h:function(){p(r,"class","svelte-1r28uvs"),p(i,"class","svelte-1r28uvs"),p(L,"class","Link svelte-1r28uvs"),p(L,"href",V=s[2]().href),p(L,"target","_blank"),p(E,"class","svelte-1r28uvs"),p(t,"class","Hero-left svelte-1r28uvs"),G.src!==(N=s[2]().image)&&p(G,"src",N),p(G,"class","big-picture svelte-1r28uvs"),p(G,"alt","doggo"),p(C,"class","Hero-right svelte-1r28uvs"),p(a,"class","Hero-inner svelte-1r28uvs")},m:function(s,o){A&&A.m(s,o),m(s,n,o),m(s,a,o),I(a,t),I(t,r),I(r,c),I(t,e),I(t,i),I(i,l),I(t,g),I(t,E),I(E,b),I(E,k),I(E,j),I(E,x),I(E,L),I(L,P),I(a,w),I(a,C),I(C,G)},p:function(s,a){5!=s[0]?A?A.p(s,a):((A=D(s)).c(),A.m(n.parentNode,n)):A&&(A.d(1),A=null),4&a&&S!==(S=s[2]().header+"")&&y(c,S),4&a&&_!==(_=s[2]().subheader+"")&&y(l,_),4&a&&q!==(q=s[2]().describe+"")&&y(b,q),4&a&&z!==(z=s[2]().link+"")&&y(P,z),4&a&&V!==(V=s[2]().href)&&p(L,"href",V),4&a&&G.src!==(N=s[2]().image)&&p(G,"src",N)},d:function(s){A&&A.d(s),s&&f(n),s&&f(a)}}}function D(s){var n,a,t=5-s[0]+"";return{c:function(){n=u("h1"),a=H(t),this.h()},l:function(s){n=v(s,"H1",{style:!0,class:!0});var r=d(n);a=$(r,t),r.forEach(f),this.h()},h:function(){k(n,"display","absolute"),k(n,"margin-left","10px"),p(n,"class","svelte-1r28uvs")},m:function(s,t){m(s,n,t),I(n,a)},p:function(s,n){1&n&&t!==(t=5-s[0]+"")&&y(a,t)},d:function(s){s&&f(n)}}}function L(s){var n,a;function t(s,n){return s[1][0]?x:j}var r=t(s),c=r(s);return{c:function(){n=o(),a=u("section"),c.c(),this.h()},l:function(s){l('[data-svelte="svelte-s1cnwc"]',document.head).forEach(f),n=h(s),a=v(s,"SECTION",{class:!0});var t=d(a);c.l(t),t.forEach(f),this.h()},h:function(){document.title="CrosszPai GitHub Pages",p(a,"class","Hero svelte-1r28uvs")},m:function(s,t){m(s,n,t),m(s,a,t),c.m(a,null)},p:function(s,n){var e=g(n,1)[0];r===(r=t(s))&&c?c.p(s,e):(c.d(1),(c=r(s))&&(c.c(),c.m(a,null)))},i:E,o:E,d:function(s){s&&f(n),s&&f(a),c.d()}}}function P(s,n,a){var t,r=0,c=setInterval(function(s){return a(0,r+=1)},1e3),e=[];return b(function(){fetch("index.json").then(function(s){return s.json()}).then(function(s){a(1,e=s)})}),s.$$.update=function(){1&s.$$.dirty&&5===r&&clearInterval(c),1&s.$$.dirty&&console.log(r),3&s.$$.dirty&&a(2,t=function(){return 5===r?e[1]:e[0]})},[r,e,t]}export default(function(o){function u(s){var i;return n(this,u),i=a(this,t(u).call(this)),r(e(i),s,P,L,c,{}),i}return s(u,i),u}());
