(this["webpackJsonpuser-acts"]=this["webpackJsonpuser-acts"]||[]).push([[0],{27:function(n,e,t){n.exports=t(55)},32:function(n,e,t){},33:function(n,e,t){},55:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),c=t(21),o=t.n(c),i=(t(32),t(5)),u=(t(33),t(2)),l=t(3);function f(){var n=Object(u.a)([""]);return f=function(){return n},n}function s(){var n=Object(u.a)([""]);return s=function(){return n},n}function m(){var n=Object(u.a)([""]);return m=function(){return n},n}function d(){var n=Object(u.a)(["\n  padding: 2px;\n  margin: 10px;\n"]);return d=function(){return n},n}function v(){var n=Object(u.a)(["\n  /* display: flex; */\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  overflow-y: scroll;\n  height: 30vh;\n"]);return v=function(){return n},n}function b(){var n=Object(u.a)(["\n  width: 95%;\n  height: 95%;\n  background: rgba(255, 255, 255, 1);\n  margin: 20px auto;\n  position: relative;\n  border-radius: 0.2em;\n"]);return b=function(){return n},n}function h(){var n=Object(u.a)(["\n  padding: 10px;\n  background: #ff605c;\n  outline: none;\n  border: none;\n  border-radius: 50%;\n  color: white;\n  margin: 0 10px;\n\n  &:hover {\n    box-shadow: 0 0 5px 2px lightgray;\n  }\n"]);return h=function(){return n},n}function p(){var n=Object(u.a)(["\n  display: flex;\n  align-items: baseline;\n"]);return p=function(){return n},n}function g(){var n=Object(u.a)(["\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  background: rgba(0, 0, 0, 0.5);\n"]);return g=function(){return n},n}function j(){var n=Object(u.a)(["\n  padding: 1px;\n  margin: 20px;\n"]);return j=function(){return n},n}function E(){var n=Object(u.a)(["\n  height: 90vh;\n  overflow-y: scroll;\n"]);return E=function(){return n},n}function O(){var n=Object(u.a)(["\n  box-shadow: 0 0 5px 2px lightgray;\n  border-radius: 0.4em;\n"]);return O=function(){return n},n}function x(){var n=Object(u.a)([""]);return x=function(){return n},n}var w=l.a.h2(x()),y=l.a.div(O()),k=l.a.div(E()),_=Object(l.a)(y)(j()),M=l.a.div(g()),Y=l.a.div(p()),S=l.a.button(h()),z=l.a.div(b()),B=l.a.div(v()),C=Object(l.a)(y)(d()),D=l.a.h4(m()),N=l.a.h3(s()),A=l.a.h4(f()),F=t(26),J=(t(35),t(7)),W=t.n(J),I=function(n){var e=n.activity_period;return a.a.createElement(C,null,a.a.createElement(D,null,e.start_time.split(" ")[3]," -"," ",e.end_time.split(" ")[3]))};function T(){var n=Object(u.a)(["\n  margin: auto;\n"]);return T=function(){return n},n}var U=Object(l.a)(F.a)(T()),$=function(n){var e=n.activity_periods,t=n.timezone,c=Object(r.useState)(new Date),o=Object(i.a)(c,2),u=o[0],l=o[1],f=Object(r.useState)([]),s=Object(i.a)(f,2),m=s[0],d=s[1];return Object(r.useEffect)((function(){!function(){var n=e.filter((function(n){var e=n.start_time.split(" ").slice(0,3).join(" ");return W()(u).isSame(W()(e,"MMM D YYYY"))}));d(n)}()}),[e,u]),a.a.createElement(a.a.Fragment,null,a.a.createElement(U,{value:u,onChange:l}),Boolean(m.length)?a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",null,"Activity periods for ",W()(u).format("MMM D, YYYY")),a.a.createElement(A,null,"Timezone: ",t),a.a.createElement(B,null,m.map((function(n,e){return a.a.createElement(I,{key:e,activity_period:n})})))):a.a.createElement("h3",null,"No activities found for selected date."))},q=function(n){var e=n.user,t=n.closeModal;return a.a.createElement(M,null,a.a.createElement(z,null,a.a.createElement(Y,null,a.a.createElement(N,{style:{flex:1}},e.real_name),a.a.createElement(S,{onClick:t})),a.a.createElement($,{activity_periods:e.activity_periods,timezone:e.tz})))},G=function(n){var e=n.users,t=Object(r.useState)(null),c=Object(i.a)(t,2),o=c[0],u=c[1];return a.a.createElement(k,null,e.map((function(n){return a.a.createElement(_,{key:n.id,onClick:function(){return function(n){u(n)}(n)}},a.a.createElement(N,null,n.real_name))})),o&&a.a.createElement(q,{user:o,closeModal:function(){u(null)}}))},H=t(25),K=t.n(H);var L=function(){var n=Object(r.useState)([]),e=Object(i.a)(n,2),t=e[0],c=e[1],o=Object(r.useState)(!1),u=Object(i.a)(o,2),l=u[0],f=u[1];Object(r.useEffect)((function(){s()}),[]);var s=function(){f(!0),K()("".concat("http://localhost:8000","/members")).then((function(n){c(n.data)})).catch((function(n){return console.log(n)})).finally((function(){f(!1)}))};return l?a.a.createElement("h2",null,"loading..."):t.length?a.a.createElement("div",{className:"App"},a.a.createElement(w,null,"Users"),a.a.createElement(G,{users:t})):a.a.createElement("h2",null,"No users found")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.24e3db67.chunk.js.map