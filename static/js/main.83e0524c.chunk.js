(this["webpackJsonpuse-pubsub-example"]=this["webpackJsonpuse-pubsub-example"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(5),s=n.n(c),i=(n(12),n(3)),u=n(1),r=n(2),b=n.n(r),a=n(6),j=n.n(a),l=function(e){var t=e.token,n=e.handler,c=e.isUnsubscribe,s=void 0!==c&&c,i=Object(u.useCallback)((function(){b.a.unsubscribe(t)}),[t]),r=Object(u.useCallback)((function(){b.a.unsubscribe(t),b.a.subscribe(t,n)}),[t,n]);return Object(u.useEffect)((function(){return s?i():b.a.subscribe(t,n),function(){i()}}),[s]),{unsubscribe:i,resubscribe:r}},o=function(e){var t=e.token,n=e.message,c=e.isAutomatic,s=void 0!==c&&c,i=e.isInitialPublish,r=void 0!==i&&i,a=e.isImmediate,l=void 0!==a&&a,o=e.debounceMs,h=void 0===o?300:o,d=Object(u.useState)(!1),O=d[0],x=d[1],f=Object(u.useCallback)((function(){var e=b.a.publish(t,n);x(e)}),[t,n]);return Object(u.useEffect)((function(){r&&f()}),[]),Object(u.useEffect)((function(){var e=j()(f,h,l);return s&&n&&e(),function(){e.clear()}}),[f,l,s,h]),{lastPublish:O,publish:f}},h=(b.a,"example"),d="example_two",O="example_three",x="example_four",f={interval:void 0,publish:function(e){this.interval=setInterval((function(){b.a.publish(e,"message")}),5e3)},clear:function(){clearInterval(this.interval)}},v=n(0);f.publish(h),f.publish(d);var p=function(){var e=Object(u.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],s=l({token:h,handler:function(){c((function(e){return e+1}))}}),r=s.unsubscribe,b=s.resubscribe;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Manual external messages received:"}),Object(v.jsx)("p",{children:n}),Object(v.jsx)("button",{type:"button",onClick:r,children:"Unsubscribe"}),Object(v.jsx)("button",{type:"button",onClick:b,children:"Resubscribe"})]})},m=function(){var e=Object(u.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(u.useState)(!1),r=Object(i.a)(s,2),b=r[0],a=r[1];return l({token:d,handler:function(){c((function(e){return e+1}))},isUnsubscribe:b}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Auto external messages received:"}),Object(v.jsx)("p",{children:n}),Object(v.jsx)("button",{type:"button",onClick:function(){return a((function(e){return!e}))},children:"Change isUnsubscribe"})]})},k=function(){var e=o({token:O,message:"message"}).publish;return Object(v.jsx)("div",{children:Object(v.jsx)("button",{type:"button",onClick:e,children:"Publish"})})},g=function(){var e=Object(u.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1];return l({token:O,handler:function(){c((function(e){return e+1}))}}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Manual messages received:"}),Object(v.jsx)("p",{children:n})]})},C=function(){var e=Object(u.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1];return o({token:x,message:n,isAutomatic:!0}),Object(v.jsx)("div",{children:Object(v.jsx)("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)}})})},S=function(){var e=Object(u.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(u.useState)(""),r=Object(i.a)(s,2),b=r[0],a=r[1];return l({token:x,handler:function(e,t){c((function(e){return e+1})),a(t)}}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Automatic messages received:"}),Object(v.jsx)("p",{children:n}),Object(v.jsxs)("p",{children:["Last message: ",b]})]})},y=function(){var e=o({token:"fail",message:"fail"}),t=e.lastPublish,n=e.publish;return Object(v.jsxs)("div",{children:[t?Object(v.jsx)("p",{children:"Publishing success"}):Object(v.jsx)("p",{children:"Publication failure"}),Object(v.jsx)("button",{type:"button",onClick:n,children:"Publish"})]})},P=function(){return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"External section"}),Object(v.jsx)(m,{}),Object(v.jsx)(p,{})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Manual section"}),Object(v.jsx)(g,{}),Object(v.jsx)(k,{})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Automatic section"}),Object(v.jsx)(S,{}),Object(v.jsx)(C,{})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Fail section"}),Object(v.jsx)(y,{})]})]})};s.a.render(Object(v.jsx)(P,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.83e0524c.chunk.js.map