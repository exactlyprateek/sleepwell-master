(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[154],{1409:function(t,e,n){"use strict";n.r(e);var i=n(639),o=n(1),s=n(637),a=n(638),r=n(18),c=n(640),h=n.n(c),l=n(682),u=n(13),d=n(642).default;e.default=function(){var t=Object(r.i)(),e=Object(a.e)({mode:"all"}),n=(e.control,e.handleSubmit,e.formState.errors,Object(r.g)()),c=Object(o.useState)(null),p=Object(i.a)(c,2),b=p[0],j=p[1],f=Object(o.useState)(!1),m=Object(i.a)(f,2),O=m[0],x=m[1],g=Object(o.useState)(""),v=Object(i.a)(g,2),y=v[0],k=v[1],w=Object(o.useState)(""),S=Object(i.a)(w,2),T=S[0],C=S[1],M=Object(o.useState)(),D=Object(i.a)(M,2),E=D[0],I=D[1],N=Object(o.useState)([]),L=Object(i.a)(N,2),W=L[0],H=L[1],B=Object(o.useState)(""),R=Object(i.a)(B,2),F=R[0],U=R[1],z=Object(o.useState)(""),A=Object(i.a)(z,2),K=A[0],X=A[1],_=Object(o.useState)(""),J=Object(i.a)(_,2),P=(J[0],J[1]),$=Object(o.useState)(""),Q=Object(i.a)($,2),V=(Q[0],Q[1]),q=Object(o.useState)(!0),G=Object(i.a)(q,2),Y=G[0],Z=G[1],tt=Object(o.useState)([]),et=Object(i.a)(tt,2),nt=et[0],it=et[1],ot=sessionStorage.getItem("token");Object(o.useEffect)((function(){at(),d.get("http://markbran.in/apis/admin/comfort/banner/".concat(t.id),{headers:{"auth-token":ot}}).then((function(t){console.log(t),H(t.data.banner)})).catch((function(t){t.response&&t.response.data.message&&j(t.response.data.message)})),C(W.soortOrder),it(W.states),C(W.sortOrder),Z(W.status),U(W.title),X(W.description),P(W.buttonText),V(W.buttonLink)}),[W.sortOrder,W.status,W.title,W.description,W.buttonText,W.buttonLink]);var st=function(t){it(t.map((function(t,e){return t.id.toString()}))),console.log(nt)},at=function(){d.get("http://markbran.in/apis/admin/state",{headers:{"auth-token":ot}}).then((function(t){console.log(t.data.states),I(t.data.states)})).catch((function(t){t.response&&t.response.data.message&&j(t.response.data.message)}))};return Object(u.jsx)("div",{children:Object(u.jsx)(s.ub,{children:Object(u.jsx)(s.u,{xs:"12",sm:"12",children:Object(u.jsxs)(s.j,{children:[Object(u.jsx)(s.n,{children:"Edit Banner"}),Object(u.jsx)(s.k,{children:Object(u.jsxs)(s.J,{encType:"multipart/form-data",onSubmit:function(e){e.preventDefault(),j(null),x(!0);var i=new FormData;i.append("image",y),i.append("sortOrder",T),i.append("title",F),i.append("description",K),i.append("status",Y),i.append("states",nt),d.patch("http://markbran.in/apis/admin/comfort/banner/".concat(t.id),i,{headers:{"Content-Type":"multipart/form-data","auth-token":ot}}).then((function(t){x(!1),n.push("/comfort-banner")})).catch((function(t){x(!1),console.log(t),t.response&&t.response.data.message?j(t.response.data.message):j("Something went wrong!")})).finally((function(){return x(!1)}))},children:[Object(u.jsx)("br",{}),b&&Object(u.jsx)("p",{className:"text-danger",children:b}),Object(u.jsxs)(s.ub,{children:[Object(u.jsx)(s.u,{xl:"6",children:Object(u.jsxs)(s.K,{children:[Object(u.jsx)(s.ab,{htmlFor:"shortItem",children:"Title"}),Object(u.jsx)(s.T,{className:"mb-3",children:Object(u.jsx)(s.Q,{type:"text",onChange:function(t){return U(t.target.value)},value:F,placeholder:"Title",autoComplete:"title"})})]})}),Object(u.jsxs)(s.u,{xs:"5",children:[Object(u.jsx)(s.ab,{htmlFor:"category",children:"Banner"}),Object(u.jsxs)(s.T,{className:"mb-3",children:[Object(u.jsx)(s.ab,{htmlFor:"bannerImage",variant:"custom-file",children:"Choose banner..."}),Object(u.jsx)(s.S,{onChange:function(t){k(t.target.files[0])},custom:!0,id:"bannerImage",type:"file"})]})]}),Object(u.jsx)(s.u,{xs:"1",children:Object(u.jsx)("img",{src:"".concat("http://markbran.in/sleepwell/","/").concat(W.image),className:"img-fluid",width:"120px",alt:""})})]}),Object(u.jsx)(s.ub,{children:Object(u.jsx)(s.u,{xs:"6",children:Object(u.jsxs)(s.K,{children:[Object(u.jsx)(s.ab,{htmlFor:"category",children:"Select State"}),Object(u.jsx)(s.T,{className:"mb-3",children:E&&nt?Object(u.jsx)(l.Multiselect,{options:E,selectedValues:E.filter((function(t,e){return nt.toString().includes(t.id)})),onSelect:function(t){return st(t)},onRemove:function(t){return st(t)},displayValue:"state"}):"Loading States"})]})})}),Object(u.jsx)(s.ub,{children:Object(u.jsx)(s.u,{xl:"6",children:Object(u.jsxs)(s.K,{children:[Object(u.jsx)(s.ab,{htmlFor:"shortItem",children:"Sort Order"}),Object(u.jsx)(s.T,{className:"mb-3",children:Object(u.jsx)(s.Q,{type:"text",onChange:function(t){C(t.target.value)},value:T,placeholder:"Sort Order",autoComplete:"Sort Order"})})]})})}),Object(u.jsx)(s.ub,{children:Object(u.jsx)(s.u,{xl:"12",children:Object(u.jsxs)(s.K,{children:[Object(u.jsx)(s.ab,{htmlFor:"shortItem",children:"Description"}),Object(u.jsx)(s.T,{className:"mb-3",children:Object(u.jsx)(s.Jb,{id:"content",rows:"3",onChange:function(t){X(t.target.value)},value:K})})]})})}),Object(u.jsx)(s.ub,{children:Object(u.jsx)(s.u,{xl:"6",children:Object(u.jsxs)(s.K,{children:[Object(u.jsx)(s.ab,{htmlFor:"category",children:"Status"}),Object(u.jsx)(s.T,{children:Object(u.jsx)(h.a,{onChange:function(t){Z(t)},checked:Y})})]})})}),Object(u.jsx)(s.ub,{children:Object(u.jsx)(s.u,{xs:"8",children:Object(u.jsx)("button",{className:"btn btn-success",disabled:!!O,type:"submit",children:O?"Loading...":"Edit Banner"})})})]})})]})})})})}},640:function(t,e,n){t.exports=n(641)},641:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var s=i.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},i.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=i.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},i.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function r(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function c(t,e,n,i,o){return function(t,e,n,i,o){var s=(t-n)/(e-n);if(0===s)return i;if(1===s)return o;for(var a="#",r=1;r<6;r+=2){var c=parseInt(i.substr(r,2),16),h=parseInt(o.substr(r,2),16),l=Math.round((1-s)*c+s*h).toString(16);1===l.length&&(l="0"+l),a+=l}return a}(t,e,n,r(i),r(o))}var h=function(t){function e(e){t.call(this,e);var n=e.height,i=e.width,o=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.R,i=e.h,o=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,o));s!==i&&this.setState({h:s})},e.prototype.U=function(t){var e=this.state,n=e.h,i=e.N,o=e.B,s=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var r=Date.now()-o;(!i||r<250||s&&n<=a||!s&&n>=a)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,s=t.className,a=t.offColor,r=t.onColor,h=t.offHandleColor,l=t.onHandleColor,u=t.checkedIcon,d=t.uncheckedIcon,p=t.checkedHandleIcon,b=t.uncheckedHandleIcon,j=t.boxShadow,f=t.activeBoxShadow,m=t.height,O=t.width,x=t.borderRadius,g=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&-1===e.indexOf(i)&&(n[i]=t[i]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),v=this.state,y=v.h,k=v.N,w=v.j,S={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:m/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},T={height:m,width:O,margin:Math.max(0,(this.t-m)/2),position:"relative",background:c(y,this.i,this.o,a,r),borderRadius:"number"==typeof x?x:m/2,cursor:n?"default":"pointer",WebkitTransition:k?null:"background 0.25s",MozTransition:k?null:"background 0.25s",transition:k?null:"background 0.25s"},C={height:m,width:Math.min(1.5*m,O-(this.t+m)/2+1),position:"relative",opacity:(y-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},M={height:m,width:Math.min(1.5*m,O-(this.t+m)/2+1),position:"absolute",opacity:1-(y-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},D={height:this.t,width:this.t,background:c(y,this.i,this.o,h,l),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof x?x-1:"50%",position:"absolute",transform:"translateX("+y+"px)",top:Math.max(0,(m-this.t)/2),outline:0,boxShadow:w?f:j,border:0,WebkitTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},E={height:this.t,width:this.t,opacity:Math.max(2*(1-(y-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},I={height:this.t,width:this.t,opacity:Math.max(2*((y-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"};return i.createElement("div",{className:s,style:S},i.createElement("div",{className:"react-switch-bg",style:T,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},u&&i.createElement("div",{style:C},u),d&&i.createElement("div",{style:M},d)),i.createElement("div",{className:"react-switch-handle",style:D,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.M,onTouchEnd:n?null:this.m,onTouchCancel:n?null:this.O},b&&i.createElement("div",{style:E},b),p&&i.createElement("div",{style:I},p)),i.createElement("input",o({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},g,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(i.Component);h.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=h}}]);
//# sourceMappingURL=154.0bfb9ab0.chunk.js.map