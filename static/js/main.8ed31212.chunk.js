(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{44:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c,r,a=n(0),o=n.n(a),i=n(34),s=n.n(i),j=(n(44),n(8)),b=n(2),l=Object(a.createContext)(),d=n(12),u=n(3),O=n(4),h=O.a.header(c||(c=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background-color: black;\n  padding: 1rem;\n\n  p {\n    color: white;\n    margin-right: 1rem;\n    cursor: pointer;\n  };\n"]))),x=O.a.p(r||(r=Object(u.a)(["\n  flex: 1;\n  text-align: center;\n"]))),m=n(1),p=function(e){var t=e.title,n=Object(a.useContext)(l),c=n.createNewItem,r=n.setCreateNewItem;return Object(m.jsxs)(h,{children:[Object(m.jsx)(d.b,{to:"/home",children:Object(m.jsx)("p",{children:"Home"})}),!t&&Object(m.jsx)("p",{onClick:function(e){r(!c)},children:"New"}),t&&Object(m.jsx)(x,{children:t})]})},f=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(p,{title:"Login"})})},g=n(39),v=n(23),w=n.n(v);w.a.defaults.withCredentials=!0;var k,C,I,y,S,E,T,N,F,L,A=w.a.create({baseURL:"https://daniels-todo.herokuapp.com"}),M=function(){return A.get("/api/items")},D=n(9),B=n(10),P=O.a.div(k||(k=Object(u.a)(["\n  position: relative;\n  padding: 0.25rem;\n  margin: 0.5rem;\n  width: calc(20vw - 1.83rem);\n  border: 1px solid black;\n  box-shadow: 0.25rem 0.25rem black;\n"]))),R=O.a.p(C||(C=Object(u.a)(["\n  display: inline;\n  width: 80%;\n"]))),U=O.a.button(I||(I=Object(u.a)(["\n  float: right;\n  background-color: white;\n  border: 1px solid black;\n  max-width: 20%;\n  cursor: pointer;\n\n  :hover, :active {\n    color: white;\n    background-color: black\n  }\n"]))),_=O.a.button(y||(y=Object(u.a)(["\n  background-color: white;\n  border: 1px solid black;\n  cursor: pointer;\n  margin: 0.3rem;\n\n  :hover, :active {\n    color: white;\n    background-color: black\n  }\n"]))),z=O.a.form(S||(S=Object(u.a)(["\n  font-size: 1rem;\n"]))),J=O.a.input(E||(E=Object(u.a)(["\n  width: 80%;\n  color: blue;\n"]))),H=O.a.textarea(T||(T=Object(u.a)(["\n  color: red;\n  width: 100%;\n  height: 3rem;\n  resize: none;\n"]))),V=O.a.input(N||(N=Object(u.a)(["\n  background-color: white;\n  border: 1px solid black;\n  cursor: pointer;\n\n  :hover, :active {\n    color: white;\n    background-color: black\n  }\n"]))),q=O.a.p(F||(F=Object(u.a)(["\n  color: red;\n"]))),G=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),o=Object(j.a)(r,2),i=o[0],s=o[1],b=Object(a.useContext)(l),d=b.setTodoItems,u=b.setCreateNewItem,O=function(e){c(Object(B.a)(Object(B.a)({},n),{},Object(D.a)({},e.target.name,e.target.value)))};return Object(m.jsxs)(P,{children:[i&&Object(m.jsx)(q,{children:i}),Object(m.jsxs)(z,{onSubmit:function(e){var t;e.preventDefault(),(t=n,A.post("/api/items/",t)).then((function(e){M().then((function(e){return d(e.data)}))})).then((function(){return u(!1)})).catch((function(e){return s(e.response.data.errorMessage)}))},children:[Object(m.jsx)(J,{type:"text",name:"title",placeholder:"Title",onChange:O}),Object(m.jsx)(U,{onClick:function(e){u(!1),c(null)},children:"CANCEL"}),Object(m.jsx)(H,{name:"body",placeholder:"body",onChange:O}),Object(m.jsx)(V,{type:"submit",value:"SAVE"})]})]})},K=function(e){var t=e.todoItem,n=Object(a.useState)(!1),c=Object(j.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)(!1),s=Object(j.a)(i,2),b=s[0],d=s[1],u=Object(a.useState)(null),O=Object(j.a)(u,2),h=O[0],x=O[1],p=Object(a.useContext)(l).setTodoItems,f=Object(a.useState)("MORE"),g=Object(j.a)(f,2),v=g[0],w=g[1],k=Object(a.useState)({title:t.title,body:t.body}),C=Object(j.a)(k,2),I=C[0],y=C[1],S=function(e){!1===r?(o(!0),w("LESS")):(o(!1),w("MORE"),y({title:t.title,body:t.body})),!0===b&&d(!1)},E=function(e){y(Object(B.a)(Object(B.a)({},I),{},Object(D.a)({},e.target.name,e.target.value)))};return!1===b?Object(m.jsxs)(P,{children:[Object(m.jsx)(R,{children:I.title}),Object(m.jsx)(U,{onClick:S,children:v}),!0===r&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{children:I.body}),Object(m.jsxs)("p",{children:["Created: ",t.createdAt]}),t.updatedAt!==t.createdAt&&Object(m.jsxs)("p",{children:["Updated: ",t.updatedAt]}),Object(m.jsx)(_,{onClick:function(e){d(!0)},children:"EDIT"}),Object(m.jsx)(_,{onClick:function(e){var n;(n=t._id,A.delete("/api/items/".concat(n))).then((function(){M().then((function(e){return p(e.data)}))})).catch((function(e){return console.error(e)}))},children:"DELETE"})]})]}):Object(m.jsxs)(P,{children:[h&&Object(m.jsx)(q,{children:h}),Object(m.jsxs)(z,{onSubmit:function(e){var n,c;e.preventDefault(),(n=t._id,c=I,A.post("/api/items/".concat(n),c)).then((function(){return d(!1)})).catch((function(e){return x(e.response.data.errorMessage)}))},children:[Object(m.jsx)(J,{type:"text",name:"title",value:I.title,onChange:E}),Object(m.jsx)(U,{onClick:S,children:v}),Object(m.jsx)(H,{name:"body",value:I.body,onChange:E}),Object(m.jsx)(V,{type:"submit",value:"SUBMIT"})]})]})},Q=O.a.div(L||(L=Object(u.a)(["\n  display: flex;\n  flex-flow: column wrap;\n  align-items: flex-start;\n  max-width: 100vw;\n  max-height: 100vh;\n  margin: 3.5rem 0.5rem 0.5rem 0.5rem;\n"]))),W=function(){var e=Object(a.useContext)(l),t=e.todoItems,n=e.setTodoItems,c=e.createNewItem;return Object(a.useEffect)((function(){M().then((function(e){return n((function(t){return Object(g.a)(e.data)}))})).catch((function(e){return console.error(e)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{}),Object(m.jsxs)(Q,{children:[c&&Object(m.jsx)(G,{}),t?t.map((function(e){return Object(m.jsx)(K,{todoItem:e},e._id)})):Object(m.jsx)("p",{children:"No items found"})]})]})};var X=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),o=Object(j.a)(r,2),i={todoItems:n,setTodoItems:c,createNewItem:o[0],setCreateNewItem:o[1]};return Object(m.jsx)(l.Provider,{value:i,children:Object(m.jsxs)(b.c,{children:[Object(m.jsx)(b.a,{path:"/home",children:Object(m.jsx)(W,{})}),Object(m.jsx)(b.a,{path:"/",children:Object(m.jsx)(f,{})})]})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};s.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(d.a,{children:Object(m.jsx)(X,{})})}),document.getElementById("root")),Y()}},[[72,1,2]]]);
//# sourceMappingURL=main.8ed31212.chunk.js.map