(this.webpackJsonpigeo=this.webpackJsonpigeo||[]).push([[0],{32:function(e,t,n){e.exports=n(55)},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),i=n.n(r),o=(n(37),n(4)),u=(n(38),n(39),n(8)),l=(n(40),n(41),n(57)),s=n(7),m=n.n(s),f=function(){var e=Object(a.useState)("food"),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(["household","transport"]),s=Object(o.a)(i,2),f=s[0],p=s[1];return c.a.createElement("div",{className:"categories"},c.a.createElement(l.a,null,c.a.createElement(l.a.Toggle,{variant:"light",id:"dropdown-basic"},n),c.a.createElement(l.a.Menu,null,f.map((function(e){return c.a.createElement(l.a.Item,{onClick:function(){return function(e){if(e!==n){var t=Object(u.a)(f),a=t.indexOf(e);t.splice(a,1),t.push(n),p(t),r(e)}}(e)},key:m()(),href:"#/"},e)})))))},p=(n(48),n(49),function(e){var t=e.text,n=e.clicked;return c.a.createElement("div",{onClick:n,className:"base-button"},t)}),d=function(e){var t=e.addExpense;return c.a.createElement("div",{className:"receipt-header"},c.a.createElement(f,null),c.a.createElement("div",{className:"button"},c.a.createElement(p,{clicked:function(){return t()},text:"Add expense"})))},v=(n(50),n(51),function(e){var t=e.note,n=e.price,r=e.id,i=e.changed,u=Object(a.useState)(t),l=Object(o.a)(u,2),s=l[0],m=l[1],f=Object(a.useState)(n),p=Object(o.a)(f,2),d=p[0],v=p[1];return c.a.createElement("div",{className:"expense"},c.a.createElement("input",{onChange:function(e){m(e.target.value),i({note:e.target.value,price:d,id:r})},placeholder:"note",type:"text",value:s}),c.a.createElement("input",{onChange:function(e){v(Number(e.target.value)),i({note:s,price:Number(e.target.value),id:r})},placeholder:"price",type:"number",value:d}))}),b=n(29),E=n(25),O=n(26),j=n(30),h=n(28),g=n(31),x=Object(a.createContext)(null),y=function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(j.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={receipts:[],price:0},n.setFooterPrice=function(e,t){var a=n.state.receipts.map((function(e){return e.id})).indexOf(t);if(a>=0){var c=Object(u.a)(n.state.receipts);c[a].totalPrice=e;var r=0;c.map((function(e){return r+=e.totalPrice,e})),n.setState({receipts:c,price:r})}else n.setState({price:n.state.price+e,receipts:[].concat(Object(u.a)(n.state.receipts),[{totalPrice:e,id:t}])})},n}return Object(g.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return c.a.createElement(x.Provider,{value:Object(b.a)({},this.state,{setFooterPrice:this.setFooterPrice})},this.props.children)}}]),t}(a.Component),k=function(e){var t=e.expenses,n=e.setTotalPrice,r=Object(a.useState)(t),i=Object(o.a)(r,2),u=i[0],l=i[1],s=Object(a.useState)(m.a),f=Object(o.a)(s,1)[0],p=Object(a.useContext)(x).setFooterPrice;Object(a.useEffect)((function(){l(t)}),[t]);var d=function(){var e=0;u.map((function(t){return e+=t.price,t})),n(e),p(e,f)};return c.a.createElement("form",{className:"expenses-list"},u.map((function(e){return c.a.createElement(v,{changed:function(e){return function(e,t,n){var a=u.map((function(e){return e.id})).indexOf(e);u[a].price=n,u[a].note=t,d()}(e.id,e.note,e.price)},key:m()(),note:e.note,price:e.price,id:e.id})})))},P=(n(52),n(53),function(e){var t=e.money;return c.a.createElement("div",{className:"money"},t)}),N=function(e){var t=e.totalPrice;return c.a.createElement("div",{className:"receipt-footer"},c.a.createElement("div",null,"Total"),c.a.createElement(P,{money:t}))},S=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(0),l=Object(o.a)(i,2),s=l[0],f=l[1];return c.a.createElement("article",null,c.a.createElement(d,{addExpense:function(){r([].concat(Object(u.a)(n),[{note:"",price:0,id:m()()}]))}}),c.a.createElement(k,{setTotalPrice:function(e){f(e)},expenses:n}),c.a.createElement(N,{totalPrice:s}))},w=function(e){var t=e.receipts;return c.a.createElement("main",null,function(){for(var e=[],n=0;n<t;n++)e.push(c.a.createElement(S,{key:n}));return e}())},C=(n(54),function(e){var t=e.createReceipt,n=Object(a.useContext)(x).price;return c.a.createElement("footer",null,c.a.createElement("div",null,"Total"),c.a.createElement(P,{money:n}),c.a.createElement(p,{clicked:function(){t()},text:"Add receipt"}))});var T=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],r=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement(y,null,c.a.createElement(w,{receipts:n}),c.a.createElement(C,{createReceipt:function(){return r(n+1)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.a8a363bf.chunk.js.map