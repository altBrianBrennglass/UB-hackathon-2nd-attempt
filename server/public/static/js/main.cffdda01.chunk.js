(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{55:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(0),a=c.n(n),r=c(14),i=c.n(r),l=c(9),o=c(12),j=c.n(o),d=(c(55),c.p+"static/media/sunriseLogo.f6f4db4d.svg"),u=c(11),b=c(3),h="SAVE_ON_LOGIN",m=function(e){return{type:h,data:e}},O=function(){var e=Object(n.useState)("register"),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],h=i[1],O=Object(n.useState)(""),p=Object(l.a)(O,2),x=p[0],g=p[1],f=Object(n.useState)(""),N=Object(l.a)(f,2),v=N[0],y=N[1],S=Object(b.f)(),k=Object(u.b)();return Object(s.jsxs)("div",{className:"screen",children:[Object(s.jsxs)("div",{className:"left-side",children:[Object(s.jsx)("img",{src:d,alt:"Sun Rise Logo",className:"sunriseLogo"}),Object(s.jsx)("h1",{className:"sunriseTitle",children:"SUN RISE"}),Object(s.jsx)("h3",{className:"sunriseSubtitle",children:"Find out if your portfolio is Socially Responsible"})]}),Object(s.jsx)("div",{className:"right-side",children:Object(s.jsxs)("form",{className:"login_and_register_form",children:[Object(s.jsxs)("div",{className:"select-login-register",children:[Object(s.jsx)("h4",{className:"login login-register ".concat("login"===c&&"logRegUnderline"),onClick:function(){return a("login")},children:"Login"}),Object(s.jsx)("h4",{className:"register login-register ".concat("register"===c&&"logRegUnderline"),onClick:function(){return a("register")},children:"Register"})]}),Object(s.jsxs)("div",{className:"formatInputs",children:[Object(s.jsx)("input",{className:"loginInputs",type:"email",placeholder:"email",value:o,onChange:function(e){var t=e.target;return h(t.value)},required:!0}),Object(s.jsx)("input",{className:"loginInputs",type:"password",placeholder:"password",value:x,onChange:function(e){var t=e.target;return g(t.value)},required:!0}),Object(s.jsx)("input",{className:"loginInputs",type:"password",placeholder:"confirm password",value:v,onChange:function(e){var t=e.target;return y(t.value)},required:!0})]}),Object(s.jsx)("button",{className:"loginRegisterButton",onClick:function(e){var t;e.preventDefault(),"login"===c?j.a.post("http://localhost:8080/login",{email:o,password:x}).then((function(e){t=e.data,k(m(t)),S.push("/main")})).catch((function(e){return console.log(e)})):j.a.post("http://localhost:8080/register",{email:o,password:x}).then((function(e){t=e.data,k(m(t)),S.push("/main")})).catch((function(e){return console.log(e)}))},disabled:v!==x&&"register"===c,children:"SUBMIT"})]})})]})},p=c(19),x=function(e,t){switch(t.type){case h:return Object.assign({},{user:{email:t.data}});default:return e}},g={user:{email:""}},f=c(16),N=Object(f.b)(x,g),v=(c(61),c(62),function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],d=i[1],b=Object(u.c)((function(e){return e.user.email}));console.log(b);return Object(n.useEffect)((function(){try{j.a.get("https://financialmodelingprep.com/api/v3/search?query=".concat(o,"&limit=5&apikey=demo")).then((function(e){return a(e.data)}))}catch(e){d(!1)}}),[o]),Object(s.jsxs)("div",{className:"Search",children:[Object(s.jsx)("h1",{className:"Search-Title",children:"Search For Stocks"}),Object(s.jsxs)("div",{className:"barAndTable",children:[Object(s.jsx)("div",{className:"bar",children:Object(s.jsx)("input",{className:"loginInputs queryInput",maxLength:10,placeholder:"Search for companies",value:o,onChange:function(e){var t=e.target;return d(t.value)}})}),Object(s.jsx)("div",{className:"results",children:Object(s.jsx)("div",{className:"queryResponse",children:c&&Object(s.jsxs)("table",{className:"searchTable",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Symbol"}),Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Exchange"}),Object(s.jsx)("th",{children:"Follow"})]})}),Object(s.jsx)("tbody",{children:c.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"td",children:Object(s.jsxs)("span",{className:"stock-symbol",children:[e.symbol," "]})}),Object(s.jsx)("td",{className:"td",children:Object(s.jsxs)("span",{className:"stock-symbol",children:[e.name," "]})}),Object(s.jsx)("td",{className:"td",children:Object(s.jsx)("span",{className:"stock-symbol",children:e.stockExchange})}),Object(s.jsx)("td",{className:"td",onClick:function(){return t=e.symbol,void j.a.post("http://localhost:8080/followStock/".concat(b),{stock:t}).then((function(e){return console.log(e.data)}));var t},children:Object(s.jsx)("span",{className:"stock-symbol follow",children:"Learn More"})})]},e.symbol)}))})]})})})]})]})}),y=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"SearchContainer",children:Object(s.jsx)(v,{})}),Object(s.jsx)("div",{className:"TrackingContainer"}),Object(s.jsx)("div",{className:"CompanyDataContainer"}),Object(s.jsx)("div",{className:"EthicacyScoreContainer"})]})};var S=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(u.a,{store:N,children:Object(s.jsx)(p.a,{children:Object(s.jsxs)(b.c,{children:[Object(s.jsx)(b.a,{path:"/",exact:!0,component:O}),Object(s.jsx)(b.a,{path:"/Main",exact:!0,component:y})]})})})})};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(S,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.cffdda01.chunk.js.map