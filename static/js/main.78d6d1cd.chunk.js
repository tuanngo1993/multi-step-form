(this["webpackJsonpmulti-step-form"]=this["webpackJsonpmulti-step-form"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(1),a=n.n(s),r=n(9),i=n.n(r),o=(n(15),n(3)),l=n(4),u=n(6),d=n(5),h=(n(16),n(8)),b=n(2),f=(n(17),function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).state={steps:c.props.steps},c.onCurrentStepHandler=c.onCurrentStepHandler.bind(Object(b.a)(c)),c.onBackHandler=c.onBackHandler.bind(Object(b.a)(c)),c.onNextHandler=c.onNextHandler.bind(Object(b.a)(c)),c}return Object(l.a)(n,[{key:"onCurrentStepHandler",value:function(t){var e=this.state.steps.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{checked:!1})})),n=this.state.steps.find((function(e){return e.label===t.target.name}));e.some((function(t){if(t.label===n.label)return t.checked=!0,!0;t.checked=!0})),this.setState({steps:e})}},{key:"onBackHandler",value:function(){var t=this.state.steps.filter((function(t){return t.checked})).length-1,e=this.state.steps;e[t].checked=!1,this.setState({steps:e})}},{key:"onNextHandler",value:function(){var t=this.state.steps.filter((function(t){return t.checked})).length-1,e=this.state.steps;t<e.length-1&&(e[t+1].checked=!0,this.setState({steps:e}))}},{key:"render",value:function(){var t=this,e=this.state.steps[this.state.steps.filter((function(t){return t.checked})).length-1];return Object(c.jsxs)("div",{className:"tuan-form",children:[Object(c.jsx)("div",{className:"tuan-form__left-container",children:this.state.steps.map((function(e,n){return e.label?Object(c.jsxs)("button",{name:e.label,className:e.checked?"tuan-form__step tuan-form__step--checked":"tuan-form__step",onClick:t.onCurrentStepHandler,children:[Object(c.jsx)("div",{className:"tuan-form__index-step",children:n+1}),Object(c.jsx)("div",{className:"tuan-form__text-step",children:e.label})]},"".concat(e.label)):void 0}))}),Object(c.jsxs)("div",{className:"tuan-form__right-container",children:[Object(c.jsx)("div",{className:"tuan-form__content",children:e.finishedContent?e.finishedContent:e.content}),Object(c.jsxs)("div",{className:"tuan-form__footer",children:[e.backBtn&&Object(c.jsx)("button",{className:"tuan-form__back-btn",onClick:this.onBackHandler,children:e.backBtn}),e.nextBtn&&Object(c.jsx)("button",{className:"tuan-form__next-btn",onClick:this.onNextHandler,children:e.nextBtn})]})]})]})}}]),n}(a.a.Component)),p=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(f,{steps:[{checked:!0,label:"Choose title",content:"Choose title content",nextBtn:"Submit Title"},{checked:!0,label:"Choose description",content:"Choose description content",backBtn:"Back",nextBtn:"Submit description"},{checked:!0,label:"Confirm data",content:"Are you happy now?",backBtn:"No, go back",nextBtn:"Yes, go ahead"},{finishedContent:"Ok we're done. Thanks for sending us your data!"}]})})}}]),n}(a.a.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),s(t),a(t),r(t)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),j()}},[[18,1,2]]]);
//# sourceMappingURL=main.78d6d1cd.chunk.js.map