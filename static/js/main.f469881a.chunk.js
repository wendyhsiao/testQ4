(this["webpackJsonpuser-form"]=this["webpackJsonpuser-form"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(6),s=n.n(r),o=(n(11),n(2)),u=n(3),i=n(5),b=function(e){var t=e.initialValues,n=e.validation,c=e.onSubmit,r=Object(a.useState)(t),s=Object(i.a)(r,2),b=s[0],l=s[1],j=Object(a.useState)({}),m=Object(i.a)(j,2),d=m[0],h=m[1],O=Object(a.useRef)(!0);Object(a.useEffect)((function(){O.current?O.current=!1:0===Object.values(d).length&&c(b)}),[d]);return{handleChange:function(e){"rememberMe"===e.target.name?l((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(o.a)({},e.target.name,e.target.checked))})):l((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(o.a)({},e.target.name,e.target.value))}))},handleSubmit:function(e){h(n(b))},values:b,errors:d}},l=(n(12),n(0));var j=function(){var e=b({initialValues:{account:"",password:"",rememberMe:!1},validation:function(e){var t={};return e.account?e.password||(t.password="\u8acb\u8f38\u5165\u5bc6\u78bc"):t.account="\u8acb\u8f38\u5165\u5e33\u865f",t},onSubmit:function(e){return console.table(e)}}),t=e.handleChange,n=e.handleSubmit,a=e.values,c=e.errors;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{name:"account",onChange:t,value:a.account,placeholder:"Account",className:"item"}),c.account&&Object(l.jsx)("div",{children:c.account}),Object(l.jsx)("input",{name:"password",onChange:t,value:a.password,placeholder:"password",className:"item"}),c.password&&Object(l.jsx)("div",{children:c.password}),Object(l.jsxs)("label",{className:"item",children:[Object(l.jsx)("input",{type:"checkbox",name:"rememberMe",onChange:t,checked:a.rememberMe}),"Remember Me"]}),Object(l.jsx)("button",{onClick:n,className:"item",children:"Login"})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),m()}},[[14,1,2]]]);
//# sourceMappingURL=main.f469881a.chunk.js.map