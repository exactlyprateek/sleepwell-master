(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[100],{1331:function(t,e,n){"use strict";n.r(e);var i=n(25),s=n(639),o=n(1),a=n(637),r=n(638),c=n(643),h=n(653),l=n(18),d=n(640),u=n.n(d),p=n(13),b=n(642).default,f=h.b().shape({question:h.c().required(),categoryId:h.c().required(),answer:h.c().required()});e.default=function(){var t=Object(l.i)(),e=Object(r.e)({mode:"all",resolver:Object(c.a)(f)}),n=e.control,h=e.handleSubmit,d=e.setValue,j=e.register,m=e.formState.errors,g=Object(l.g)(),v=Object(o.useState)(null),y=Object(s.a)(v,2),x=y[0],O=y[1],w=Object(o.useState)(!1),k=Object(s.a)(w,2),S=k[0],C=k[1],M=Object(o.useState)(!1),T=Object(s.a)(M,2),E=T[0],q=T[1],I=Object(o.useState)(!1),D=Object(s.a)(I,2),N=D[0],H=D[1],L=Object(o.useState)([]),W=Object(s.a)(L,2),z=W[0],U=W[1],F=Object(o.useState)([]),R=Object(s.a)(F,2),A=R[0],B=R[1],P=sessionStorage.getItem("token");Object(o.useEffect)((function(){b.get("http://markbran.in/apis/admin/faq/".concat(t.id),{headers:{"auth-token":P}}).then((function(t){console.log(t.data),U(t.data.faqs),H(!!t.data.faqs.addToHome),O(null)})).catch((function(t){t.response&&t.response.data.message?O(t.response.data.message):O("Something went wrong!")})),b.get("http://markbran.in/apis/admin/faqCategory",{headers:{"auth-token":P}}).then((function(t){B(t.data.categories)})).catch((function(t){t.response&&t.response.data.message?O(t.response.data.message):O("Something went wrong!")})),z&&(d("question",z.question),d("answer",z.answer),d("categoryId",z.categoryId)),q(z.status?1:0)}),[z.status?1:0,z.question,z.answer,z.categoryId]);return Object(p.jsx)(o.Fragment,{children:Object(p.jsx)(a.ub,{children:Object(p.jsx)(a.u,{xs:"12",sm:"12",children:Object(p.jsxs)(a.j,{children:[Object(p.jsx)(a.n,{children:"Edit Faq Category"}),Object(p.jsx)(a.k,{children:Object(p.jsxs)(a.J,{onSubmit:h((function(e){var n=new FormData,i=E?1:0;n.append("status",i),n.append("question",e.question),n.append("categoryId",e.categoryId),n.append("answer",e.answer),n.append("addToHome",N?1:0),O(null),C(!0),b.patch("http://markbran.in/apis/admin/faq/".concat(t.id),n,{headers:{"auth-token":P}}).then((function(t){C(!1),g.push("/faq"),O(null)})).catch((function(t){C(!1),t.response&&t.response.data.message?O(t.response.data.message):O("Something went wrong!")}))})),children:[Object(p.jsx)("br",{}),x&&Object(p.jsx)("p",{className:"text-danger",children:x}),Object(p.jsxs)(a.ub,{children:[Object(p.jsx)(a.u,{xs:"6",children:Object(p.jsxs)(a.K,{children:[Object(p.jsx)(a.ab,{htmlFor:"size",children:"Category"}),Object(p.jsx)(a.T,{className:"mb-3",children:Object(p.jsxs)(a.vb,Object(i.a)(Object(i.a)({},j("categoryId")),{},{name:"categoryId",children:[Object(p.jsx)("option",{value:"",children:"select category"}),A.map((function(t,e){return Object(p.jsx)("option",{value:t.id,children:t.title})}))]}))}),Object(p.jsx)(a.L,{className:"help-block text-danger",color:"red",children:m.title&&m.title.message})]})}),Object(p.jsx)(a.u,{xs:"6",children:Object(p.jsxs)(a.K,{children:[Object(p.jsx)(a.ab,{htmlFor:"size",children:"Question"}),Object(p.jsx)(a.T,{className:"mb-3",children:Object(p.jsx)(r.a,{name:"question",control:n,defaultValue:"",rules:{required:{value:!0,message:"heading is required"}},render:function(t){var e=t.field;return Object(p.jsx)(a.Q,Object(i.a)(Object(i.a)({},e),{},{type:"text",placeholder:"Edit question",autoComplete:"question"}))}})}),Object(p.jsx)(a.L,{className:"help-block text-danger",color:"red",children:m.question&&m.question.message})]})})]}),Object(p.jsx)(a.ub,{children:Object(p.jsx)(a.u,{xs:"6",children:Object(p.jsxs)(a.K,{children:[Object(p.jsx)(a.ab,{htmlFor:"size",children:"Answer"}),Object(p.jsx)(a.T,{className:"mb-3",children:Object(p.jsx)(r.a,{name:"answer",control:n,defaultValue:"",rules:{required:{value:!0,message:"heading is required"}},render:function(t){var e=t.field;return Object(p.jsx)(a.Q,Object(i.a)(Object(i.a)({},e),{},{type:"text",placeholder:"Edit answer",autoComplete:"answer"}))}})}),Object(p.jsx)(a.L,{className:"help-block text-danger",color:"red",children:m.answer&&m.answer.message})]})})}),Object(p.jsx)(a.ub,{children:Object(p.jsx)(a.u,{xl:"6",children:Object(p.jsxs)(a.K,{children:[Object(p.jsx)(a.ab,{htmlFor:"is_active",children:"Status"}),Object(p.jsx)(a.T,{children:Object(p.jsx)(u.a,{onChange:function(t){q(t)},checked:E})})]})})}),Object(p.jsx)(a.ub,{children:Object(p.jsx)(a.u,{xl:"6",children:Object(p.jsxs)(a.K,{children:[Object(p.jsx)(a.ab,{htmlFor:"addtohome",children:"Add to Home"}),Object(p.jsx)(a.T,{children:Object(p.jsx)(u.a,{onChange:function(){return H(!N)},checked:N})})]})})}),Object(p.jsx)(a.ub,{children:Object(p.jsx)(a.u,{xs:"8",children:Object(p.jsx)("button",{className:"btn btn-success",disabled:!!S,type:"submit",children:S?"Loading...":"Update Category"})})})]})})]})})})})}},640:function(t,e,n){t.exports=n(641)},641:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var o=i.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},i.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=i.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},i.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function r(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function c(t,e,n,i,s){return function(t,e,n,i,s){var o=(t-n)/(e-n);if(0===o)return i;if(1===o)return s;for(var a="#",r=1;r<6;r+=2){var c=parseInt(i.substr(r,2),16),h=parseInt(s.substr(r,2),16),l=Math.round((1-o)*c+o*h).toString(16);1===l.length&&(l="0"+l),a+=l}return a}(t,e,n,r(i),r(s))}var h=function(t){function e(e){t.call(this,e);var n=e.height,i=e.width,s=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:s?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.R,i=e.h,s=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var o=Math.min(this.i,Math.max(this.o,s));o!==i&&this.setState({h:o})},e.prototype.U=function(t){var e=this.state,n=e.h,i=e.N,s=e.B,o=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var r=Date.now()-s;(!i||r<250||o&&n<=a||!o&&n>=a)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,o=t.className,a=t.offColor,r=t.onColor,h=t.offHandleColor,l=t.onHandleColor,d=t.checkedIcon,u=t.uncheckedIcon,p=t.checkedHandleIcon,b=t.uncheckedHandleIcon,f=t.boxShadow,j=t.activeBoxShadow,m=t.height,g=t.width,v=t.borderRadius,y=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&-1===e.indexOf(i)&&(n[i]=t[i]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),x=this.state,O=x.h,w=x.N,k=x.j,S={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:m/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},C={height:m,width:g,margin:Math.max(0,(this.t-m)/2),position:"relative",background:c(O,this.i,this.o,a,r),borderRadius:"number"==typeof v?v:m/2,cursor:n?"default":"pointer",WebkitTransition:w?null:"background 0.25s",MozTransition:w?null:"background 0.25s",transition:w?null:"background 0.25s"},M={height:m,width:Math.min(1.5*m,g-(this.t+m)/2+1),position:"relative",opacity:(O-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},T={height:m,width:Math.min(1.5*m,g-(this.t+m)/2+1),position:"absolute",opacity:1-(O-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},E={height:this.t,width:this.t,background:c(O,this.i,this.o,h,l),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof v?v-1:"50%",position:"absolute",transform:"translateX("+O+"px)",top:Math.max(0,(m-this.t)/2),outline:0,boxShadow:k?j:f,border:0,WebkitTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},q={height:this.t,width:this.t,opacity:Math.max(2*(1-(O-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},I={height:this.t,width:this.t,opacity:Math.max(2*((O-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"};return i.createElement("div",{className:o,style:S},i.createElement("div",{className:"react-switch-bg",style:C,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},d&&i.createElement("div",{style:M},d),u&&i.createElement("div",{style:T},u)),i.createElement("div",{className:"react-switch-handle",style:E,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.M,onTouchEnd:n?null:this.m,onTouchCancel:n?null:this.O},b&&i.createElement("div",{style:q},b),p&&i.createElement("div",{style:I},p)),i.createElement("input",s({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},y,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(i.Component);h.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:o,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=h},643:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(638),s=function(t,e){var n={};for(var s in t){var o=Object(i.c)(e,s);Object(i.d)(n,s,Object.assign(t[s],{ref:o&&o.ref}))}return n},o=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),function(o,a,r){try{return Promise.resolve(function(i,s){try{var r=(e.context,Promise.resolve(t["sync"===n.mode?"validateSync":"validate"](o,Object.assign({abortEarly:!1},e,{context:a}))).then((function(t){return{values:t,errors:{}}})))}catch(i){return s(i)}return r&&r.then?r.then(void 0,s):r}(0,(function(t){return{values:{},errors:s((e=t,n="all"===r.criteriaMode,e.inner.reduce((function(t,e){if(t[e.path]||(t[e.path]={message:e.message,type:e.type}),n){var s=t[e.path].types,o=s&&s[e.type];t[e.path]=Object(i.b)(e.path,n,t,e.type,o?[].concat(o,e.message):e.message)}return t}),{})),r.fields)};var e,n})))}catch(c){return Promise.reject(c)}}}}}]);
//# sourceMappingURL=100.2e07aa1b.chunk.js.map