(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[102],{1341:function(t,e,n){"use strict";n.r(e);var i=n(25),o=(n(700),n(639)),s=n(1),a=n(637),r=n(643),c=n(653),h=n(638),l=n(18),u=n(686),d=n(640),p=n.n(d),b=n(13),f=n(642).default,j=c.b().shape({sectionTitle:c.c().required()});e.default=function(){var t=Object(h.e)({mode:"all",resolver:Object(r.a)(j)}),e=t.control,n=t.handleSubmit,c=t.formState.errors,d=Object(l.g)(),m=Object(s.useState)(null),v=Object(o.a)(m,2),g=v[0],O=v[1],y=Object(s.useState)(!1),x=Object(o.a)(y,2),k=x[0],w=x[1],S=Object(s.useState)(""),T=Object(o.a)(S,2),M=T[0],C=T[1],D=Object(s.useState)(""),E=Object(o.a)(D,2),I=E[0],N=E[1],H=Object(s.useState)(""),W=Object(o.a)(H,2),L=(W[0],W[1],Object(s.useState)([])),A=Object(o.a)(L,2),F=A[0],R=A[1],U=Object(s.useState)([{advantagesArray:[],status:!0}]),z=Object(o.a)(U,2),B=(z[0],z[1],Object(s.useState)(!1)),_=Object(o.a)(B,2),P=_[0],K=_[1],X=Object(s.useState)([]),J=Object(o.a)(X,2),$=J[0],q=J[1],V=Object(s.useState)(!0),Q=Object(o.a)(V,2),G=Q[0],Y=Q[1],Z=sessionStorage.getItem("token");Object(s.useEffect)((function(){f.get("http://markbran.in/apis/admin/advantage",{headers:{"auth-token":Z}}).then((function(t){q(t.data.advantages)})).catch((function(t){t.response&&t.response.data.message?O(t.response.data.message):O("Something went wrong!")}))}),[]);return Object(b.jsx)("div",{children:Object(b.jsx)(a.ub,{children:Object(b.jsx)(a.u,{xs:"12",sm:"12",children:Object(b.jsxs)(a.j,{children:[Object(b.jsx)(a.n,{children:"Add Innovation"}),Object(b.jsx)(a.k,{children:Object(b.jsxs)(a.J,{onSubmit:n((function(t){var e=new FormData,n=G?1:0,i=P?1:0;e.append("status",n),e.append("title",t.sectionTitle),e.append("image",M),e.append("advantages",JSON.stringify(F)),e.append("description",I),e.append("addToHome",i),O(null),w(!0),f.post("http://markbran.in/apis/admin/innovation/card",e,{headers:{"Content-Type":"multipart/form-data","auth-token":Z}}).then((function(t){d.push("/innovation-card"),console.log(t.response.data)})).catch((function(t){t.response&&t.response.data.message?O(t.response.data.message):O("Something went wrong!")})).finally((function(){return w(!1)}))})),children:[Object(b.jsx)("br",{}),g&&Object(b.jsx)("p",{className:"text-danger",children:g}),Object(b.jsxs)(a.ub,{children:[Object(b.jsx)(a.u,{xs:"6",children:Object(b.jsxs)(a.K,{children:[Object(b.jsx)(a.ab,{htmlFor:"category",children:"Section Title"}),Object(b.jsx)(a.T,{className:"mb-3",children:Object(b.jsx)(h.a,{name:"sectionTitle",control:e,defaultValue:"",rules:{required:{value:!0,message:"Section title is required"}},render:function(t){var e=t.field;return Object(b.jsx)(a.Q,Object(i.a)(Object(i.a)({},e),{},{type:"text",placeholder:"Section title",autoComplete:"Section title"}))}})}),Object(b.jsx)(a.L,{className:"help-block text-danger",color:"red",children:c.sectionTitle&&c.sectionTitle.message})]})}),Object(b.jsxs)(a.u,{xs:"6",children:[Object(b.jsx)(a.ab,{htmlFor:"category",children:"Image"}),Object(b.jsxs)(a.T,{className:"mb-3",children:[Object(b.jsx)(a.ab,{htmlFor:"Image",variant:"custom-file",children:"Choose image..."}),Object(b.jsx)(a.S,{onChange:function(t){C(t.target.files[0])},custom:!0,id:"Image",type:"file",multiple:"true"})]})]})]}),Object(b.jsx)(a.ub,{children:Object(b.jsx)(a.u,{xs:"6",children:Object(b.jsxs)(a.K,{children:[Object(b.jsx)(a.ab,{htmlFor:"category",children:"Select advantages"}),Object(b.jsx)(a.T,{className:"mb-3",children:Object(b.jsx)(u.Multiselect,{options:$,selectedValues:$.filter((function(t,e){return F.toString().includes(t.id)})),onSelect:function(t){return function(t){R(t.map((function(t,e){return t.id.toString()})))}(t)},name:"advantagesArray",displayValue:"advantage"})})]})})}),Object(b.jsx)(a.ub,{children:Object(b.jsx)(a.u,{xl:"12",children:Object(b.jsxs)(a.K,{children:[Object(b.jsx)(a.ab,{htmlFor:"category",children:"Description"}),Object(b.jsx)(a.Jb,{value:I,onChange:function(t){return N(t.target.value)}})]})})}),Object(b.jsxs)(a.ub,{children:[Object(b.jsx)(a.u,{xl:"6",children:Object(b.jsxs)(a.K,{children:[Object(b.jsx)(a.ab,{htmlFor:"is_active",children:"Status"}),Object(b.jsx)(a.T,{children:Object(b.jsx)(p.a,{onChange:function(t){Y(t)},checked:G})})]})}),Object(b.jsx)(a.u,{xl:"6",children:Object(b.jsxs)(a.K,{children:[Object(b.jsx)(a.ab,{htmlFor:"is_active",children:"Show in home"}),Object(b.jsx)(a.T,{children:Object(b.jsx)(p.a,{onChange:function(t){console.log(t),K(t)},checked:P})})]})})]}),Object(b.jsx)(a.ub,{children:Object(b.jsx)(a.u,{xs:"8",children:Object(b.jsx)("button",{className:"btn btn-success",disabled:!!k,type:"submit",children:k?"Loading...":"Add Innovation"})})})]})})]})})})})}},640:function(t,e,n){t.exports=n(641)},641:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var s=i.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},i.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=i.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},i.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function r(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function c(t,e,n,i,o){return function(t,e,n,i,o){var s=(t-n)/(e-n);if(0===s)return i;if(1===s)return o;for(var a="#",r=1;r<6;r+=2){var c=parseInt(i.substr(r,2),16),h=parseInt(o.substr(r,2),16),l=Math.round((1-s)*c+s*h).toString(16);1===l.length&&(l="0"+l),a+=l}return a}(t,e,n,r(i),r(o))}var h=function(t){function e(e){t.call(this,e);var n=e.height,i=e.width,o=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.R,i=e.h,o=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,o));s!==i&&this.setState({h:s})},e.prototype.U=function(t){var e=this.state,n=e.h,i=e.N,o=e.B,s=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var r=Date.now()-o;(!i||r<250||s&&n<=a||!s&&n>=a)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,s=t.className,a=t.offColor,r=t.onColor,h=t.offHandleColor,l=t.onHandleColor,u=t.checkedIcon,d=t.uncheckedIcon,p=t.checkedHandleIcon,b=t.uncheckedHandleIcon,f=t.boxShadow,j=t.activeBoxShadow,m=t.height,v=t.width,g=t.borderRadius,O=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&-1===e.indexOf(i)&&(n[i]=t[i]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),y=this.state,x=y.h,k=y.N,w=y.j,S={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:m/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},T={height:m,width:v,margin:Math.max(0,(this.t-m)/2),position:"relative",background:c(x,this.i,this.o,a,r),borderRadius:"number"==typeof g?g:m/2,cursor:n?"default":"pointer",WebkitTransition:k?null:"background 0.25s",MozTransition:k?null:"background 0.25s",transition:k?null:"background 0.25s"},M={height:m,width:Math.min(1.5*m,v-(this.t+m)/2+1),position:"relative",opacity:(x-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},C={height:m,width:Math.min(1.5*m,v-(this.t+m)/2+1),position:"absolute",opacity:1-(x-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},D={height:this.t,width:this.t,background:c(x,this.i,this.o,h,l),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof g?g-1:"50%",position:"absolute",transform:"translateX("+x+"px)",top:Math.max(0,(m-this.t)/2),outline:0,boxShadow:w?j:f,border:0,WebkitTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},E={height:this.t,width:this.t,opacity:Math.max(2*(1-(x-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},I={height:this.t,width:this.t,opacity:Math.max(2*((x-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"};return i.createElement("div",{className:s,style:S},i.createElement("div",{className:"react-switch-bg",style:T,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},u&&i.createElement("div",{style:M},u),d&&i.createElement("div",{style:C},d)),i.createElement("div",{className:"react-switch-handle",style:D,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.M,onTouchEnd:n?null:this.m,onTouchCancel:n?null:this.O},b&&i.createElement("div",{style:E},b),p&&i.createElement("div",{style:I},p)),i.createElement("input",o({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},O,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(i.Component);h.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=h},643:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n(638),o=function(t,e){var n={};for(var o in t){var s=Object(i.c)(e,o);Object(i.d)(n,o,Object.assign(t[o],{ref:s&&s.ref}))}return n},s=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),function(s,a,r){try{return Promise.resolve(function(i,o){try{var r=(e.context,Promise.resolve(t["sync"===n.mode?"validateSync":"validate"](s,Object.assign({abortEarly:!1},e,{context:a}))).then((function(t){return{values:t,errors:{}}})))}catch(i){return o(i)}return r&&r.then?r.then(void 0,o):r}(0,(function(t){return{values:{},errors:o((e=t,n="all"===r.criteriaMode,e.inner.reduce((function(t,e){if(t[e.path]||(t[e.path]={message:e.message,type:e.type}),n){var o=t[e.path].types,s=o&&o[e.type];t[e.path]=Object(i.b)(e.path,n,t,e.type,s?[].concat(s,e.message):e.message)}return t}),{})),r.fields)};var e,n})))}catch(c){return Promise.reject(c)}}}}}]);
//# sourceMappingURL=102.249cff86.chunk.js.map