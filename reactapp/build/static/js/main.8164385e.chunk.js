(this.webpackJsonpmymoviz=this.webpackJsonpmymoviz||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(13),o=n.n(i),s=(n(49),n(44)),r=n(10),l=(n(50),n(82)),j=n(83),u=n(84),m=n(85),d=n(86),b=n(87),O=n(88),v=n(12),g=n(11),h=n(3);function f(e){for(var t=Object(c.useState)(!1),n=Object(r.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)(0),s=Object(r.a)(o,2),f=s[0],x=s[1],p=Object(c.useState)(0),k=Object(r.a)(p,2),y=k[0],C=k[1],N=Object(c.useState)(e.globalRating),S=Object(r.a)(N,2),L=S[0],D=S[1],w=Object(c.useState)(e.globalCountRating),M=Object(r.a)(w,2),P=M[0],A=M[1],R=Object(c.useState)(!1),I=Object(r.a)(R,2),F=I[0],T=I[1],q=function(e){F?D((L*P-y+e)/P):(D((L*P-y+e)/(P+1)),A(P+1)),T(!0),C(e)},J=Array(10).fill(0).map((function(e,t){return Object(h.jsx)(v.a,{onClick:function(){return q(t+1)},icon:g.b})})),z=function(e){J[e]=Object(h.jsx)(v.a,{onClick:function(){return q(e+1)},style:{color:"#f1c40f"},icon:g.b})},B=0;B<y;B++)z(B);var E=Array(10).fill(Object(h.jsx)(v.a,{style:{color:"#f1c40f"},icon:g.b}),0,Math.round(L)-1).fill(Object(h.jsx)(v.a,{icon:g.b}),Math.round(L));return Object(h.jsx)(l.a,{xs:"12",lg:"6",xl:"4",className:"mb-4",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(u.a,{top:!0,width:"100%",src:e.movieImg,alt:"Card image cap"}),Object(h.jsxs)(m.a,{children:[Object(h.jsxs)(d.a,{children:["Like"," ",Object(h.jsx)(v.a,{onClick:function(){e.isLiked?e.handleClickDeleteMovieParent(e.movieName):e.handleClickAddMovieParent(e.movieName,e.movieImg)},icon:g.a,style:{cursor:"pointer",color:e.isLiked?"#e74c3c":""}})]}),Object(h.jsxs)(d.a,{children:["Nombre de vues"," ",Object(h.jsx)(v.a,{onClick:function(){i(!0),x(f+1)},icon:g.c,style:{cursor:"pointer",color:a?"#e74c3c":""}})," ",Object(h.jsx)(b.a,{color:"primary",style:{backgroundColor:"gray"},children:f})]}),Object(h.jsxs)(d.a,{children:["Mon avis ",J,Object(h.jsx)(O.a,{onClick:function(){0!==y&&(C(y-1),F?D((L*P-1)/P):(D((L*P-1)/(P+1)),A(P+1)),T(!0))},children:"-1"}),Object(h.jsx)(O.a,{onClick:function(){10!==y&&(C(y+1),F?D((L*P+1)/P):(D((L*P+1)/(P+1)),A(P+1)),T(!0))},children:"+1"})]}),Object(h.jsxs)(d.a,{children:["Avis Global ",E," (",P,")"]}),Object(h.jsx)(d.a,{children:e.movieName}),Object(h.jsx)(d.a,{children:e.movieDesc})]})]})})}var x=n(89),p=n(90),k=n(91),y=n(92),C=n(97),N=n(93),S=n(94),L=n(95),D=n(96);var w=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),o=Object(r.a)(i,2),j=o[0],u=o[1],m=Object(c.useState)([]),d=Object(r.a)(m,2),b=d[0],v=d[1],g=function(e,t){a(n+1),v([].concat(Object(s.a)(b),[{movieName:e,movieImg:t}]))},w=function(e){a(n-1),v(b.filter((function(t){return t.movieName!==e})))},M=[{name:"Star Wars : L'ascension de Skywalker",desc:"La conclusion de la saga Skywalker. De nouvelles l\xe9gendes vont na\xeetre dans cette ...",img:"starwars.jpg",note:6.7,vote:5},{name:"Mal\xe9fique : Le pouvoir du mal",desc:"Plusieurs ann\xe9es apr\xe8s avoir d\xe9couvert pourquoi la plus c\xe9l\xe8bre m\xe9chante Disney avait un c\u0153ur ...",img:"maleficent.jpg",note:8.2,vote:3},{name:"Jumanji: The Next Level",desc:"L\u2019\xe9quipe est de retour, mais le jeu a chang\xe9. Alors qu\u2019ils retournent dans Jumanji pour secourir ...",img:"jumanji.jpg",note:4,vote:5},{name:"Once Upon a Time... in Hollywood",desc:"En 1969, Rick Dalton \u2013 star d\xe9clinante d'une s\xe9rie t\xe9l\xe9vis\xe9e de western \u2013 et Cliff Booth ...",img:"once_upon.jpg",note:6,vote:7},{name:"La Reine des neiges 2",desc:"Elsa, Anna, Kristoff, Olaf et Sven voyagent bien au-del\xe0 des portes d\u2019Arendelle \xe0 la recherche de r\xe9ponses ...",img:"frozen.jpg",note:4.6,vote:3},{name:"Terminator: Dark Fate",desc:"De nos jours \xe0 Mexico. Dani Ramos, 21 ans, travaille sur une cha\xeene de montage dans une usine automobile...",img:"terminator.jpg",note:6.1,vote:1}].map((function(e){return Object(h.jsx)(f,{movieName:e.name,movieDesc:e.desc,movieImg:e.img,globalRating:e.note,globalCountRating:e.vote,handleClickAddMovieParent:g,handleClickDeleteMovieParent:w,isLiked:b.map((function(e){return e.movieName})).includes(e.name)})}));return Object(h.jsxs)(x.a,{className:"d-flex flex-column",children:[Object(h.jsx)(p.a,{className:"mt-3 mb-3",children:Object(h.jsx)(l.a,{children:Object(h.jsxs)(k.a,{className:"text-white gap-3",children:[Object(h.jsx)(y.a,{children:Object(h.jsx)("img",{src:"logo.png",alt:""})}),Object(h.jsx)(y.a,{children:"Last Releases"}),Object(h.jsxs)(y.a,{children:[Object(h.jsxs)(O.a,{id:"Popover1",type:"button",children:[n," films"]}),Object(h.jsxs)(C.a,{placement:"bottom",isOpen:j,target:"Popover1",toggle:function(){return u(!j)},children:[Object(h.jsx)(N.a,{children:"Wish List"}),Object(h.jsx)(S.a,{children:Object(h.jsx)(L.a,{children:b.map((function(e){return Object(h.jsxs)(D.a,{style:{cursor:"pointer"},onClick:function(){return w(e.movieName)},children:[Object(h.jsx)("img",{src:e.movieImg,className:"w-25",alt:""}),e.movieName]})}))})})]})]})]})})}),Object(h.jsx)(p.a,{children:M})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};n(79);o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),M()}},[[80,1,2]]]);
//# sourceMappingURL=main.8164385e.chunk.js.map