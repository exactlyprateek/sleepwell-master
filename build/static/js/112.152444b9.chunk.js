(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[112],{1412:function(t,e,n){"use strict";n.r(e);var i=n(25),o=n(639),s=n(1),r=n(637),c=n(638),a=n(18),h=n(640),l=n.n(h),u=n(643),d=n(653),p=n(13),b=n(642).default,j=d.b().shape({title:d.c().required(),phone:d.a().positive(),sortOrder:d.a().positive()});e.default=function(){var t=Object(a.i)(),e=Object(c.e)({mode:"all",resolver:Object(u.a)(j)}),n=e.control,h=e.handleSubmit,d=e.setValue,f=(e.register,e.formState.errors),m=Object(a.g)(),O=Object(s.useState)(null),x=Object(o.a)(O,2),v=x[0],g=x[1],y=Object(s.useState)(!1),k=Object(o.a)(y,2),w=k[0],S=k[1],T=Object(s.useState)(!1),C=Object(o.a)(T,2),M=C[0],D=C[1],E=Object(s.useState)(!1),L=Object(o.a)(E,2),I=L[0],N=L[1],B=Object(s.useState)([]),W=Object(o.a)(B,2),H=W[0],F=W[1],P=Object(s.useState)(""),U=Object(o.a)(P,2),K=(U[0],U[1],Object(s.useState)("")),R=Object(o.a)(K,2),z=R[0],q=R[1],A=Object(s.useState)(""),X=Object(o.a)(A,2),_=X[0],Q=X[1],J=Object(s.useState)(""),V=Object(o.a)(J,2),$=V[0],G=V[1],Y=Object(s.useState)(""),Z=Object(o.a)(Y,2),tt=Z[0],et=Z[1],nt=sessionStorage.getItem("token");Object(s.useEffect)((function(){b.get("http://markbran.in/apis/admin/service-card/".concat(t.id),{headers:{"Content-Type":"multipart/form-data","auth-token":nt}}).then((function(t){S(!1),F(t.data.card)})).catch((function(t){S(!1),t.response&&t.response.data.message?g(t.response.data.message):g("Something went wrong!")})),H&&(d("title",H.title),d("phone",H.phone),d("sortOrder",H.sortOrder)),D(1===H.status),N(1===H.isGroup),G(H.buttonLink),Q(H.buttonText),et(H.description)}),[H.title,H.phone,H.sortOrder,H.status,H.buttonLink,H.buttonText,H.description]);return Object(p.jsx)("div",{children:Object(p.jsx)(r.ub,{children:Object(p.jsx)(r.u,{xs:"12",sm:"12",children:Object(p.jsxs)(r.j,{children:[Object(p.jsx)(r.n,{children:"Edit service card"}),Object(p.jsx)(r.k,{children:Object(p.jsxs)(r.J,{onSubmit:h((function(e){var n=new FormData,i=M?1:0,o=I?1:0;n.append("status",i),n.append("isGroup",o),n.append("title",e.title),n.append("image",z),n.append("buttonText",_),n.append("buttonLink",$),n.append("description",tt),n.append("sortOrder",e.sortOrder),g(null),S(!0),b.patch("http://markbran.in/apis/admin/service-card/".concat(t.id),n,{headers:{"Content-Type":"multipart/form-data","auth-token":nt}}).then((function(t){S(!1),m.push("/service-card")})).catch((function(t){S(!1),t.response&&t.response.data.errorMessage?g(t.response.data.errorMessage):g("Something went wrong!")}))})),children:[Object(p.jsx)("br",{}),v&&Object(p.jsx)("p",{className:"text-danger",children:v}),Object(p.jsxs)(r.ub,{children:[Object(p.jsx)(r.u,{xs:"6",children:Object(p.jsxs)(r.K,{children:[Object(p.jsx)(r.ab,{htmlFor:"category",children:"Title"}),Object(p.jsx)(r.T,{className:"mb-3",children:Object(p.jsx)(c.a,{name:"title",control:n,defaultValue:"",rules:{required:{value:!0,message:"title is required"}},render:function(t){var e=t.field;return Object(p.jsx)(r.Q,Object(i.a)(Object(i.a)({},e),{},{type:"text",placeholder:"Category",autoComplete:"category"}))}})}),Object(p.jsx)(r.L,{className:"help-block text-danger",color:"red",children:f.title&&f.title.message})]})}),Object(p.jsxs)(r.u,{xs:"5",children:[Object(p.jsx)(r.ab,{htmlFor:"category",children:"Category Image"}),Object(p.jsxs)(r.T,{className:"mb-3",children:[Object(p.jsx)(r.ab,{htmlFor:"categoryImage",variant:"custom-file",children:"Choose image..."}),Object(p.jsx)(r.S,{onChange:function(t){q(t.target.files[0])},custom:!0,id:"categoryImage",type:"file"})]})]}),Object(p.jsx)(r.u,{xs:"1",children:Object(p.jsx)("img",{src:"".concat("http://markbran.in/sleepwell/").concat(H.image),className:"img-fluid",alt:""})})]}),Object(p.jsxs)(r.ub,{children:[Object(p.jsx)(r.u,{xl:"6",children:Object(p.jsxs)(r.K,{children:[Object(p.jsx)(r.ab,{htmlFor:"Button Text",children:"Button Text"}),Object(p.jsx)(r.T,{children:Object(p.jsx)(r.Q,{type:"text",onChange:function(t){Q(t.target.value)},value:_,placeholder:"Button Text",autoComplete:"Button Text"})})]})}),Object(p.jsx)(r.u,{xl:"6",children:Object(p.jsxs)(r.K,{children:[Object(p.jsx)(r.ab,{htmlFor:"Button Link",children:"Button Link"}),Object(p.jsx)(r.T,{children:Object(p.jsx)(r.Q,{type:"text",onChange:function(t){G(t.target.value)},value:$,placeholder:"Button Link",autoComplete:"Button Link"})})]})})]}),Object(p.jsxs)(r.ub,{children:[Object(p.jsx)(r.u,{xl:"6",children:Object(p.jsxs)(r.K,{children:[Object(p.jsx)(r.ab,{htmlFor:"Button Link",children:"Sort Order"}),Object(p.jsx)(r.T,{children:Object(p.jsx)(c.a,{name:"sortOrder",control:n,defaultValue:"",rules:{required:{value:!0,message:"Categoty is required"}},render:function(t){var e=t.field;return Object(p.jsx)(r.Q,Object(i.a)(Object(i.a)({type:"text"},e),{},{placeholder:"Sort Order",autoComplete:"Sort Order"}))}})}),Object(p.jsx)(r.L,{className:"help-block text-danger",color:"red",children:f.sortOrder&&f.sortOrder.message})]})}),Object(p.jsx)(r.u,{xl:"6",children:Object(p.jsxs)(r.K,{children:[Object(p.jsx)(r.ab,{htmlFor:"Button Link",children:"Phone no."}),Object(p.jsx)(r.T,{children:Object(p.jsx)(c.a,{name:"phone",control:n,defaultValue:"",rules:{required:{value:!0,message:"phone is required"}},render:function(t){var e=t.field;return Object(p.jsx)(r.Q,Object(i.a)(Object(i.a)({type:"text"},e),{},{placeholder:"Phone Number",autoComplete:"Phone Number"}))}})}),Object(p.jsx)(r.L,{className:"help-block text-danger",color:"red",children:f.phone&&f.phone.message})]})})]}),Object(p.jsx)(r.ub,{children:Object(p.jsx)(r.u,{xl:"12",children:Object(p.jsxs)(r.K,{children:[Object(p.jsx)(r.ab,{htmlFor:"category",children:"Description"}),Object(p.jsx)(r.T,{children:Object(p.jsx)(r.Jb,{id:"content",rows:"3",onChange:function(t){et(t.target.value)},value:tt})})]})})}),Object(p.jsxs)(r.ub,{children:[Object(p.jsx)(r.u,{xl:"6",children:Object(p.jsxs)(r.K,{children:[Object(p.jsx)(r.ab,{htmlFor:"category",children:"Status"}),Object(p.jsx)(r.T,{children:Object(p.jsx)(l.a,{onChange:function(t){D(t)},checked:M})})]})}),Object(p.jsx)(r.u,{xl:"6",children:Object(p.jsxs)(r.K,{children:[Object(p.jsx)(r.ab,{htmlFor:"category",children:"IsGroup"}),Object(p.jsx)(r.T,{children:Object(p.jsx)(l.a,{onChange:function(t){N(t)},checked:I})})]})})]}),Object(p.jsx)(r.ub,{children:Object(p.jsx)(r.u,{xs:"8",children:Object(p.jsx)("button",{className:"btn btn-success",disabled:!!w,type:"submit",children:w?"Loading...":"Update service card"})})})]})})]})})})})}},640:function(t,e,n){t.exports=n(641)},641:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var s=i.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},i.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),r=i.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},i.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function c(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function a(t,e,n,i,o){return function(t,e,n,i,o){var s=(t-n)/(e-n);if(0===s)return i;if(1===s)return o;for(var r="#",c=1;c<6;c+=2){var a=parseInt(i.substr(c,2),16),h=parseInt(o.substr(c,2),16),l=Math.round((1-s)*a+s*h).toString(16);1===l.length&&(l="0"+l),r+=l}return r}(t,e,n,c(i),c(o))}var h=function(t){function e(e){t.call(this,e);var n=e.height,i=e.width,o=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.R,i=e.h,o=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,o));s!==i&&this.setState({h:s})},e.prototype.U=function(t){var e=this.state,n=e.h,i=e.N,o=e.B,s=this.props.checked,r=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var c=Date.now()-o;(!i||c<250||s&&n<=r||!s&&n>=r)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,s=t.className,r=t.offColor,c=t.onColor,h=t.offHandleColor,l=t.onHandleColor,u=t.checkedIcon,d=t.uncheckedIcon,p=t.checkedHandleIcon,b=t.uncheckedHandleIcon,j=t.boxShadow,f=t.activeBoxShadow,m=t.height,O=t.width,x=t.borderRadius,v=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&-1===e.indexOf(i)&&(n[i]=t[i]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),g=this.state,y=g.h,k=g.N,w=g.j,S={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:m/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},T={height:m,width:O,margin:Math.max(0,(this.t-m)/2),position:"relative",background:a(y,this.i,this.o,r,c),borderRadius:"number"==typeof x?x:m/2,cursor:n?"default":"pointer",WebkitTransition:k?null:"background 0.25s",MozTransition:k?null:"background 0.25s",transition:k?null:"background 0.25s"},C={height:m,width:Math.min(1.5*m,O-(this.t+m)/2+1),position:"relative",opacity:(y-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},M={height:m,width:Math.min(1.5*m,O-(this.t+m)/2+1),position:"absolute",opacity:1-(y-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},D={height:this.t,width:this.t,background:a(y,this.i,this.o,h,l),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof x?x-1:"50%",position:"absolute",transform:"translateX("+y+"px)",top:Math.max(0,(m-this.t)/2),outline:0,boxShadow:w?f:j,border:0,WebkitTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},E={height:this.t,width:this.t,opacity:Math.max(2*(1-(y-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},L={height:this.t,width:this.t,opacity:Math.max(2*((y-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"};return i.createElement("div",{className:s,style:S},i.createElement("div",{className:"react-switch-bg",style:T,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},u&&i.createElement("div",{style:C},u),d&&i.createElement("div",{style:M},d)),i.createElement("div",{className:"react-switch-handle",style:D,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.M,onTouchEnd:n?null:this.m,onTouchCancel:n?null:this.O},b&&i.createElement("div",{style:E},b),p&&i.createElement("div",{style:L},p)),i.createElement("input",o({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},v,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(i.Component);h.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:r,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=h},643:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(638),o=function(t,e){var n={};for(var o in t){var s=Object(i.c)(e,o);Object(i.d)(n,o,Object.assign(t[o],{ref:s&&s.ref}))}return n},s=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),function(s,r,c){try{return Promise.resolve(function(i,o){try{var c=(e.context,Promise.resolve(t["sync"===n.mode?"validateSync":"validate"](s,Object.assign({abortEarly:!1},e,{context:r}))).then((function(t){return{values:t,errors:{}}})))}catch(i){return o(i)}return c&&c.then?c.then(void 0,o):c}(0,(function(t){return{values:{},errors:o((e=t,n="all"===c.criteriaMode,e.inner.reduce((function(t,e){if(t[e.path]||(t[e.path]={message:e.message,type:e.type}),n){var o=t[e.path].types,s=o&&o[e.type];t[e.path]=Object(i.b)(e.path,n,t,e.type,s?[].concat(s,e.message):e.message)}return t}),{})),c.fields)};var e,n})))}catch(a){return Promise.reject(a)}}}}}]);
//# sourceMappingURL=112.152444b9.chunk.js.map