(this.webpackJsonprocket=this.webpackJsonprocket||[]).push([[0],{31:function(n,e,t){},52:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t.n(r),a=t(23),s=t.n(a),o=(t(31),t(12)),i=t(6),u=t(5),b=t.n(u),d=t(9),p=t(10),j=t.n(p);function f(){return(f=Object(d.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://jsonplaceholder.typicode.com/posts",n.next=3,j()("https://jsonplaceholder.typicode.com/posts").then((function(n){return n.data})).catch((function(n){return Promise.reject(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(){return(h=Object(d.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://jsonplaceholder.typicode.com/users",n.next=3,j()("https://jsonplaceholder.typicode.com/users").then((function(n){return n.data})).catch((function(n){return Promise.reject(n)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var l,x,O,m,g,v,y,w=t(3),S=t(4),k=Object(S.a)(l||(l=Object(w.a)(["\n    html {\n        height: 100%;\n    }\n\n    body {\n        margin:0;\n        background:#f4f4f4;\n    }\n\n    * {\n        box-sizing:border-box;\n    }\n"]))),F=S.b.h2(x||(x=Object(w.a)(["\n    font-size: 1.8rem;\n    text-align:center;\n"]))),C=S.b.div(O||(O=Object(w.a)(["\n    margin: 50px auto;\n    width: 80%;\n    border-radius:5px;\n    border:2px solid #d8e2f0;\n    background:#ffffff;\n\n    @media screen and (max-width: 480px) {\n        margin: 0 auto;\n        width: 95%;\n }\n"]))),P=S.b.div(m||(m=Object(w.a)(["\n    display:flex;\n    padding: 10px;\n    border-bottom: 2px solid #d8e2f0;;\n    \n    &::last-child{\n        border-bottom:none;\n    }\n"]))),z=S.b.img(g||(g=Object(w.a)(["\n    height:75px;\n    border-radius: 50%;\n"]))),V=S.b.div(v||(v=Object(w.a)(["\n    margin-left:10px;\n\n    h5{\n        margin:0;\n    }   \n\n    span{\n        color:#7d88b2;\n        font-size:.8rem;\n    }\n\n    p{\n        margin:0;\n    }\n"]))),E=t.p+"static/media/empty-avatar.f070c5e5.png",I=t(1);function L(n){var e=n.post;return Object(I.jsxs)(P,{children:[Object(I.jsx)(z,{src:E,alt:""}),Object(I.jsxs)(V,{children:[Object(I.jsxs)("h5",{children:[e.username,Object(I.jsxs)("span",{children:["@",e.name]})]}),Object(I.jsx)("p",{children:e.body})]})]})}var B=S.b.input(y||(y=Object(w.a)(["\n  margin: 10px;\n  font-size: 17px;\n  border-radius:5px;\n  border:2px solid #d8e2f0;\n"])));function J(n){var e=n.searchValue,t=n.setSearchValue;return Object(I.jsx)(B,{type:"text",value:e,placeholder:"Search",onChange:function(n){return t(n.target.value)}})}var T=function(){var n=Object(r.useState)([]),e=Object(i.a)(n,2),t=e[0],c=e[1],a=Object(r.useState)([]),s=Object(i.a)(a,2),u=s[0],b=s[1],d=Object(r.useState)(""),p=Object(i.a)(d,2),j=p[0],l=p[1],x=Object(r.useState)([]),O=Object(i.a)(x,2),m=O[0],g=O[1];Object(r.useEffect)((function(){(function(){return f.apply(this,arguments)})().then((function(n){c(n)})),function(){return h.apply(this,arguments)}().then((function(n){return b(n)}))}),[]),Object(r.useEffect)((function(){g(t.filter((function(n){return n.body.toLowerCase().includes(j)})))}),[j,t]);var v=m.map((function(n){var e=function(n,e){for(var t=0;t<n.length;t++)if(n[t].id===e)return n[t]}(u,n.userId);return e?Object(o.a)(Object(o.a)({},n),e):null}));return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(k,{}),Object(I.jsxs)(C,{children:[Object(I.jsx)(F,{children:"Posts"}),Object(I.jsx)(J,{searchValue:j,setSearchValue:l}),Object(I.jsx)(I.Fragment,{children:v.map((function(n){return n&&Object(I.jsx)(L,{post:n})}))})]})]})},D=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,53)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;t(n),r(n),c(n),a(n),s(n)}))};s.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(T,{})}),document.getElementById("root")),D()}},[[52,1,2]]]);
//# sourceMappingURL=main.26035e7a.chunk.js.map