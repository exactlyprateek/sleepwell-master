(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[90],{1308:function(t,e,i){"use strict";i.r(e);var n=i(638),o=i(1),s=i(637),a=i(647),r=i(18),c=i(639),h=i.n(c),l=i(13),d=i(640).default;e.default=function(){var t=Object(r.i)(),e=Object(a.e)({mode:"all"}),i=(e.control,e.handleSubmit,e.formState.errors,Object(r.g)()),c=Object(o.useState)(null),u=Object(n.a)(c,2),p=u[0],b=u[1],j=Object(o.useState)(!1),f=Object(n.a)(j,2),m=f[0],O=f[1],x=Object(o.useState)(""),v=Object(n.a)(x,2),y=(v[0],v[1],Object(o.useState)("")),g=Object(n.a)(y,2),k=g[0],w=g[1],S=Object(o.useState)([]),C=Object(n.a)(S,2),T=C[0],M=C[1],D=Object(o.useState)(""),E=Object(n.a)(D,2),I=E[0],L=E[1],N=Object(o.useState)(""),W=Object(n.a)(N,2),H=W[0],U=W[1],B=Object(o.useState)(""),R=Object(n.a)(B,2),z=R[0],F=(R[1],Object(o.useState)("")),A=Object(n.a)(F,2),K=A[0],X=A[1],_=Object(o.useState)(!0),J=Object(n.a)(_,2),P=J[0],$=J[1],Q=sessionStorage.getItem("token");Object(o.useEffect)((function(){d.get("http://markbran.in/apis/admin/aboutUsCard/".concat(t.id),{headers:{"auth-token":Q}}).then((function(t){console.log(t.data.card),M(t.data.card)})).catch((function(t){t.response&&t.response.data.message&&b(t.response.data.message)})),w(T.sortOrder),$(1===T.status),L(T.title),U(T.tagLine),X(T.link)}),[T.sortOrder,T.status,T.title,T.tagLine,T.link]);return Object(l.jsx)("div",{children:Object(l.jsx)(s.ub,{children:Object(l.jsx)(s.u,{xs:"12",sm:"12",children:Object(l.jsxs)(s.j,{children:[Object(l.jsx)(s.n,{children:"Edit Banner"}),Object(l.jsx)(s.k,{children:Object(l.jsxs)(s.J,{encType:"multipart/form-data",onSubmit:function(e){e.preventDefault(),b(null),O(!0);var n=new FormData,o=P?1:0;n.append("shortOrder",k),n.append("title",I),n.append("description",H),n.append("buttonText",z),n.append("link",K),n.append("status",o),d.patch("http://markbran.in/apis/admin/aboutUsCard/".concat(t.id),n,{headers:{"auth-token":Q}}).then((function(t){O(!1),i.push("/about-us-card")})).catch((function(t){O(!1),t.response&&t.response.data.message?b(t.response.data.message):b("Something went wrong!")}))},children:[Object(l.jsx)("br",{}),p&&Object(l.jsx)("p",{className:"text-danger",children:p}),Object(l.jsx)(s.ub,{children:Object(l.jsx)(s.u,{xl:"6",children:Object(l.jsxs)(s.K,{children:[Object(l.jsx)(s.ab,{htmlFor:"shortItem",children:"Title"}),Object(l.jsx)(s.T,{className:"mb-3",children:Object(l.jsx)(s.Q,{type:"text",onChange:function(t){L(t.target.value)},value:I,placeholder:"Title",autoComplete:"title"})})]})})}),Object(l.jsxs)(s.ub,{children:[Object(l.jsx)(s.u,{xl:"6",children:Object(l.jsxs)(s.K,{children:[Object(l.jsx)(s.ab,{htmlFor:"shortItem",children:"Sort Order"}),Object(l.jsx)(s.T,{className:"mb-3",children:Object(l.jsx)(s.Q,{type:"text",onChange:function(t){w(t.target.value)},value:k,placeholder:"Sort Order",autoComplete:"Sort Order"})})]})}),Object(l.jsx)(s.u,{xl:"6",children:Object(l.jsxs)(s.K,{children:[Object(l.jsx)(s.ab,{htmlFor:"shortItem",children:"Link"}),Object(l.jsx)(s.T,{className:"mb-3",children:Object(l.jsx)(s.Q,{type:"text",onChange:function(t){X(t.target.value)},value:K,placeholder:"Link",autoComplete:"Link"})})]})})]}),Object(l.jsx)(s.ub,{children:Object(l.jsx)(s.u,{xl:"12",children:Object(l.jsxs)(s.K,{children:[Object(l.jsx)(s.ab,{htmlFor:"shortItem",children:"Tagline"}),Object(l.jsx)(s.T,{className:"mb-3",children:Object(l.jsx)(s.Jb,{id:"content",rows:"3",onChange:function(t){U(t.target.value)},value:H})})]})})}),Object(l.jsx)(s.ub,{children:Object(l.jsx)(s.u,{xl:"6",children:Object(l.jsxs)(s.K,{children:[Object(l.jsx)(s.ab,{htmlFor:"category",children:"Status"}),Object(l.jsx)(s.T,{children:Object(l.jsx)(h.a,{onChange:function(t){$(t)},checked:P})})]})})}),Object(l.jsx)(s.ub,{children:Object(l.jsx)(s.u,{xs:"8",children:Object(l.jsx)("button",{className:"btn btn-success",disabled:!!m,type:"submit",children:m?"Loading...":"Edit Card"})})})]})})]})})})})}},639:function(t,e,i){t.exports=i(641)},641:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var n=i(1);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}var s=n.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},n.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=n.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},n.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function r(t){if(7===t.length)return t;for(var e="#",i=1;i<4;i+=1)e+=t[i]+t[i];return e}function c(t,e,i,n,o){return function(t,e,i,n,o){var s=(t-i)/(e-i);if(0===s)return n;if(1===s)return o;for(var a="#",r=1;r<6;r+=2){var c=parseInt(n.substr(r,2),16),h=parseInt(o.substr(r,2),16),l=Math.round((1-s)*c+s*h).toString(16);1===l.length&&(l="0"+l),a+=l}return a}(t,e,i,r(n),r(o))}var h=function(t){function e(e){t.call(this,e);var i=e.height,n=e.width,o=e.checked;this.t=e.handleDiameter||i-2,this.i=Math.max(n-i,n-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,i=e.R,n=e.h,o=(this.props.checked?this.i:this.o)+t-i;e.N||t===i||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,o));s!==n&&this.setState({h:s})},e.prototype.U=function(t){var e=this.state,i=e.h,n=e.N,o=e.B,s=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var r=Date.now()-o;(!n||r<250||s&&i<=a||!s&&i>=a)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,i=t.disabled,s=t.className,a=t.offColor,r=t.onColor,h=t.offHandleColor,l=t.onHandleColor,d=t.checkedIcon,u=t.uncheckedIcon,p=t.checkedHandleIcon,b=t.uncheckedHandleIcon,j=t.boxShadow,f=t.activeBoxShadow,m=t.height,O=t.width,x=t.borderRadius,v=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===e.indexOf(n)&&(i[n]=t[n]);return i}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),y=this.state,g=y.h,k=y.N,w=y.j,S={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:m/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},C={height:m,width:O,margin:Math.max(0,(this.t-m)/2),position:"relative",background:c(g,this.i,this.o,a,r),borderRadius:"number"==typeof x?x:m/2,cursor:i?"default":"pointer",WebkitTransition:k?null:"background 0.25s",MozTransition:k?null:"background 0.25s",transition:k?null:"background 0.25s"},T={height:m,width:Math.min(1.5*m,O-(this.t+m)/2+1),position:"relative",opacity:(g-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},M={height:m,width:Math.min(1.5*m,O-(this.t+m)/2+1),position:"absolute",opacity:1-(g-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},D={height:this.t,width:this.t,background:c(g,this.i,this.o,h,l),display:"inline-block",cursor:i?"default":"pointer",borderRadius:"number"==typeof x?x-1:"50%",position:"absolute",transform:"translateX("+g+"px)",top:Math.max(0,(m-this.t)/2),outline:0,boxShadow:w?f:j,border:0,WebkitTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},E={height:this.t,width:this.t,opacity:Math.max(2*(1-(g-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},I={height:this.t,width:this.t,opacity:Math.max(2*((g-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"};return n.createElement("div",{className:s,style:S},n.createElement("div",{className:"react-switch-bg",style:C,onClick:i?null:this.T,onMouseDown:function(t){return t.preventDefault()}},d&&n.createElement("div",{style:T},d),u&&n.createElement("div",{style:M},u)),n.createElement("div",{className:"react-switch-handle",style:D,onClick:function(t){return t.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.M,onTouchEnd:i?null:this.m,onTouchCancel:i?null:this.O},b&&n.createElement("div",{style:E},b),p&&n.createElement("div",{style:I},p)),n.createElement("input",o({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},v,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(n.Component);h.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=h}}]);
//# sourceMappingURL=90.ca36b534.chunk.js.map