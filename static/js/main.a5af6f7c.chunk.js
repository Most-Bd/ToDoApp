(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{14:function(e,t,o){},15:function(e,t,o){},16:function(e,t,o){"use strict";o.r(t);var c=o(0),n=o(1),a=o.n(n),s=o(7),l=o.n(s),r=(o(14),o(2)),i=(o(15),o(8)),d=function(e){var t=e.inputText,o=e.setInputText,n=e.todos,a=e.setTodos,s=e.setFilter;return Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{onChange:function(e){o(e.target.value)},value:t,type:"text",className:"todo-input"}),Object(c.jsx)("button",{onClick:function(e){e.preventDefault(),a([].concat(Object(i.a)(n),[{text:t,completed:!1,id:1e3*Math.random()}])),o("")},className:"todo-button",type:"submit",children:Object(c.jsx)("i",{className:"fas fa-plus-square"})}),Object(c.jsx)("div",{className:"select",children:Object(c.jsxs)("select",{onChange:function(e){s(e.target.value)},name:"todos",className:"filter-todo",children:[Object(c.jsx)("option",{value:"all",children:"All"}),Object(c.jsx)("option",{value:"done",children:"Done"}),Object(c.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=o(6),j=function(e){var t=e.id,o=e.text,n=e.todos,a=e.todo,s=e.setTodos;return Object(c.jsxs)("div",{className:"todo",children:[Object(c.jsx)("li",{className:"todo-item ".concat(a.completed?"completed-elements":""),children:o}),Object(c.jsx)("button",{onClick:function(){s(n.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e})))},className:"completed-btn",children:Object(c.jsx)("i",{className:"fas fa-check"})}),Object(c.jsx)("button",{onClick:function(){s(n.filter((function(e){return e.id!==t})))},className:"trash-btn",children:Object(c.jsx)("i",{className:"fas fa-trash"})})]})},f=function(e){var t=e.todos,o=e.setTodos,n=e.filteredTodos;return Object(c.jsx)("div",{className:"todo-container",children:Object(c.jsx)("ul",{className:"todo-list",children:n.filter((function(e){return""!==e.text})).map((function(e){return Object(c.jsx)(j,{text:e.text,todos:t,id:e.id,todo:e,setTodos:o},e.id)}))})})},b=function(e){var t=e.theme,o=e.setTheme,n="Dark"===t?"Colorful":"Dark";return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("button",{onClick:function(){localStorage.clear(),setTimeout((function(){window.location.reload("true")}),0)},className:"clear-all",children:"CLEAR"}),Object(c.jsx)("button",{onClick:function(e){e.preventDefault(),o("Dark"===t?"Colorful":"Dark")},className:"".concat("Dark"===n?"theme-selector-dark":"theme-selector-colorful"),children:n})]})};var m=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),o=t[0],a=t[1],s=Object(n.useState)([]),l=Object(r.a)(s,2),i=l[0],u=l[1],j=Object(n.useState)("all"),m=Object(r.a)(j,2),O=m[0],p=m[1],h=Object(n.useState)([]),x=Object(r.a)(h,2),g=x[0],v=x[1],N=Object(n.useState)("Dark"),k=Object(r.a)(N,2),S=k[0],D=k[1];return Object(n.useEffect)((function(){switch(O){case"done":v(i.filter((function(e){return!0===e.completed})));break;case"uncompleted":v(i.filter((function(e){return!1===e.completed})));break;default:v(i)}}),[i,O]),Object(n.useEffect)((function(){var e;null===localStorage.getItem("todosData")?(localStorage.setItem("todosData",JSON.stringify([])),e=localStorage.getItem("todosData")):e=localStorage.getItem("todosData"),u(JSON.parse(e))}),[]),Object(n.useEffect)((function(){localStorage.setItem("todosData",JSON.stringify(i))}),[i,O]),Object(n.useEffect)((function(){null===localStorage.getItem("theme")?D("Dark"):D(localStorage.getItem("theme"))}),[]),Object(n.useEffect)((function(){localStorage.setItem("theme",S)}),[S]),Object(n.useEffect)((function(){var e=document.getElementById("body");e.className="Dark"===S?"App-dark":"App-colorful"}),[S]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"Simple To-Do App"})}),Object(c.jsx)(d,{inputText:o,setInputText:a,todos:i,setTodos:u,setFilter:p}),Object(c.jsx)(f,{todos:i,setTodos:u,filteredTodos:g}),Object(c.jsx)(b,{theme:S,setTheme:D})]})},O=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,17)).then((function(t){var o=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;o(e),c(e),n(e),a(e),s(e)}))};l.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.a5af6f7c.chunk.js.map