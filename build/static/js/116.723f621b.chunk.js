(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[116],{1275:function(t,e,i){"use strict";i.r(e);var n=i(25),o=i(639),s=i(1),r=i(637),a=i(638),c=i(643),h=i(653),l=i(18),u=i(640),d=i.n(u),p=i(13),b=i(642).default,f=h.b().shape({size:h.a().required().positive()});e.default=function(){var t=Object(l.i)(),e=Object(a.e)({mode:"all",resolver:Object(c.a)(f)}),i=e.control,h=e.handleSubmit,u=e.setValue,m=(e.register,e.formState.errors),v=Object(l.g)(),j=Object(s.useState)(null),y=Object(o.a)(j,2),g=y[0],x=y[1],O=Object(s.useState)(!1),k=Object(o.a)(O,2),w=k[0],S=k[1],M=Object(s.useState)(!1),z=Object(o.a)(M,2),C=z[0],T=z[1],E=Object(s.useState)([]),D=Object(o.a)(E,2),I=D[0],W=D[1],H=Object(s.useState)(""),N=Object(o.a)(H,2),L=(N[0],N[1]),U=sessionStorage.getItem("token");Object(s.useEffect)((function(){b.get("http://markbran.in/apis/admin/size/".concat(t.id),{headers:{"auth-token":U}}).then((function(t){W(t.data.size),x(null)})).catch((function(t){t.response.data.message?x(t.response.data.message):x("Something went wrong!")})),I&&u("size",I.size),T(I.status),L(I.size)}),[I.status,I.size]);return Object(p.jsx)(s.Fragment,{children:Object(p.jsx)(r.ub,{children:Object(p.jsx)(r.u,{xs:"12",sm:"12",children:Object(p.jsxs)(r.j,{children:[Object(p.jsx)(r.n,{children:"Edit Size"}),Object(p.jsx)(r.k,{children:Object(p.jsxs)(r.J,{onSubmit:h((function(e){var i=new FormData,n=C?1:0;i.append("status",n),i.append("size",e.size),x(null),S(!0),b.patch("http://markbran.in/apis/admin/size/".concat(t.id),i,{headers:{"auth-token":U}}).then((function(t){S(!1),v.push("/sizes"),x(null)})).catch((function(t){S(!1),t.response&&t.response.data.message?x(t.response.data.message):x("Something went wrong!")}))})),children:[Object(p.jsx)("br",{}),g&&Object(p.jsx)("p",{className:"text-danger",children:g}),Object(p.jsx)(r.ub,{children:Object(p.jsx)(r.u,{xs:"6",children:Object(p.jsxs)(r.K,{children:[Object(p.jsx)(r.ab,{htmlFor:"size",children:"Size"}),Object(p.jsx)(r.T,{className:"mb-3",children:Object(p.jsx)(a.a,{name:"size",control:i,defaultValue:"",rules:{required:{value:!0,message:"Size is required"}},render:function(t){var e=t.field;return Object(p.jsx)(r.Q,Object(n.a)(Object(n.a)({},e),{},{type:"text",placeholder:"Size",autoComplete:"size"}))}})}),Object(p.jsx)(r.L,{className:"help-block text-danger",color:"red",children:m.size&&m.size.message})]})})}),Object(p.jsx)(r.ub,{children:Object(p.jsx)(r.u,{xl:"8",children:Object(p.jsx)(r.K,{children:Object(p.jsx)(r.T,{children:Object(p.jsx)(d.a,{onChange:function(t){T(t)},checked:C})})})})}),Object(p.jsx)(r.ub,{children:Object(p.jsx)(r.u,{xs:"8",children:Object(p.jsx)("button",{className:"btn btn-success",disabled:!!w,type:"submit",children:w?"Loading...":"Update Size"})})})]})})]})})})})}},640:function(t,e,i){t.exports=i(641)},641:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var n=i(1);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}var s=n.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},n.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),r=n.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},n.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function a(t){if(7===t.length)return t;for(var e="#",i=1;i<4;i+=1)e+=t[i]+t[i];return e}function c(t,e,i,n,o){return function(t,e,i,n,o){var s=(t-i)/(e-i);if(0===s)return n;if(1===s)return o;for(var r="#",a=1;a<6;a+=2){var c=parseInt(n.substr(a,2),16),h=parseInt(o.substr(a,2),16),l=Math.round((1-s)*c+s*h).toString(16);1===l.length&&(l="0"+l),r+=l}return r}(t,e,i,a(n),a(o))}var h=function(t){function e(e){t.call(this,e);var i=e.height,n=e.width,o=e.checked;this.t=e.handleDiameter||i-2,this.i=Math.max(n-i,n-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,i=e.R,n=e.h,o=(this.props.checked?this.i:this.o)+t-i;e.N||t===i||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,o));s!==n&&this.setState({h:s})},e.prototype.U=function(t){var e=this.state,i=e.h,n=e.N,o=e.B,s=this.props.checked,r=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var a=Date.now()-o;(!n||a<250||s&&i<=r||!s&&i>=r)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,i=t.disabled,s=t.className,r=t.offColor,a=t.onColor,h=t.offHandleColor,l=t.onHandleColor,u=t.checkedIcon,d=t.uncheckedIcon,p=t.checkedHandleIcon,b=t.uncheckedHandleIcon,f=t.boxShadow,m=t.activeBoxShadow,v=t.height,j=t.width,y=t.borderRadius,g=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===e.indexOf(n)&&(i[n]=t[n]);return i}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),x=this.state,O=x.h,k=x.N,w=x.j,S={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:v/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},M={height:v,width:j,margin:Math.max(0,(this.t-v)/2),position:"relative",background:c(O,this.i,this.o,r,a),borderRadius:"number"==typeof y?y:v/2,cursor:i?"default":"pointer",WebkitTransition:k?null:"background 0.25s",MozTransition:k?null:"background 0.25s",transition:k?null:"background 0.25s"},z={height:v,width:Math.min(1.5*v,j-(this.t+v)/2+1),position:"relative",opacity:(O-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},C={height:v,width:Math.min(1.5*v,j-(this.t+v)/2+1),position:"absolute",opacity:1-(O-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},T={height:this.t,width:this.t,background:c(O,this.i,this.o,h,l),display:"inline-block",cursor:i?"default":"pointer",borderRadius:"number"==typeof y?y-1:"50%",position:"absolute",transform:"translateX("+O+"px)",top:Math.max(0,(v-this.t)/2),outline:0,boxShadow:w?m:f,border:0,WebkitTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},E={height:this.t,width:this.t,opacity:Math.max(2*(1-(O-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},D={height:this.t,width:this.t,opacity:Math.max(2*((O-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"};return n.createElement("div",{className:s,style:S},n.createElement("div",{className:"react-switch-bg",style:M,onClick:i?null:this.T,onMouseDown:function(t){return t.preventDefault()}},u&&n.createElement("div",{style:z},u),d&&n.createElement("div",{style:C},d)),n.createElement("div",{className:"react-switch-handle",style:T,onClick:function(t){return t.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.M,onTouchEnd:i?null:this.m,onTouchCancel:i?null:this.O},b&&n.createElement("div",{style:E},b),p&&n.createElement("div",{style:D},p)),n.createElement("input",o({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},g,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(n.Component);h.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:r,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=h},643:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i(638),o=function(t,e){var i={};for(var o in t){var s=Object(n.c)(e,o);Object(n.d)(i,o,Object.assign(t[o],{ref:s&&s.ref}))}return i},s=function(t,e,i){return void 0===e&&(e={}),void 0===i&&(i={}),function(s,r,a){try{return Promise.resolve(function(n,o){try{var a=(e.context,Promise.resolve(t["sync"===i.mode?"validateSync":"validate"](s,Object.assign({abortEarly:!1},e,{context:r}))).then((function(t){return{values:t,errors:{}}})))}catch(n){return o(n)}return a&&a.then?a.then(void 0,o):a}(0,(function(t){return{values:{},errors:o((e=t,i="all"===a.criteriaMode,e.inner.reduce((function(t,e){if(t[e.path]||(t[e.path]={message:e.message,type:e.type}),i){var o=t[e.path].types,s=o&&o[e.type];t[e.path]=Object(n.b)(e.path,i,t,e.type,s?[].concat(s,e.message):e.message)}return t}),{})),a.fields)};var e,i})))}catch(c){return Promise.reject(c)}}}}}]);
//# sourceMappingURL=116.723f621b.chunk.js.map