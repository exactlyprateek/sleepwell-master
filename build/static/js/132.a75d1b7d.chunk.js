(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[132],{1280:function(t,e,n){"use strict";n.r(e);var i=n(639),o=n(1),s=n(637),a=n(640),c=n.n(a),r=n(686),h=n(638),l=n(18),u=n(13),d=n(642).default;e.default=function(){var t=Object(h.e)({mode:"all"}),e=(t.control,t.handleSubmit,t.formState.errors,Object(l.g)()),n=Object(o.useState)(null),a=Object(i.a)(n,2),p=a[0],b=a[1],j=Object(o.useState)(!1),f=Object(i.a)(j,2),m=f[0],x=f[1],O=Object(o.useState)(""),v=Object(i.a)(O,2),g=v[0],y=v[1],k=Object(o.useState)(""),w=Object(i.a)(k,2),S=w[0],T=w[1],C=Object(o.useState)(!0),M=Object(i.a)(C,2),D=M[0],I=M[1],E=Object(o.useState)(""),N=Object(i.a)(E,2),B=N[0],L=N[1],W=Object(o.useState)(""),H=Object(i.a)(W,2),F=H[0],R=H[1],U=Object(o.useState)(""),z=Object(i.a)(U,2),A=z[0],K=z[1],X=Object(o.useState)(""),_=Object(i.a)(X,2),P=_[0],J=_[1],Q=Object(o.useState)(),$=Object(i.a)(Q,2),V=$[0],q=$[1],G=Object(o.useState)([]),Y=Object(i.a)(G,2),Z=Y[0],tt=Y[1],et=Object(o.useState)(""),nt=Object(i.a)(et,2),it=(nt[0],nt[1],sessionStorage.getItem("token"));Object(o.useEffect)((function(){d.get("http://markbran.in/apis/admin/state",{headers:{"auth-token":it}}).then((function(t){console.log(t.data.states),q(t.data.states)})).catch((function(t){t.response&&t.response.data.message&&b(t.response.data.message)}))}),[]);return Object(u.jsx)("div",{children:Object(u.jsx)(s.ub,{children:Object(u.jsx)(s.u,{xs:"12",sm:"12",children:Object(u.jsxs)(s.j,{children:[Object(u.jsx)(s.n,{children:"Add Banner"}),Object(u.jsx)(s.k,{children:Object(u.jsxs)(s.J,{encType:"multipart/form-data",onSubmit:function(t){t.preventDefault(),b(null),x(!0);var n=new FormData,i=D?1:0;n.append("status",i),n.append("image",g),n.append("shortOrder",S),n.append("title",B),n.append("description",F),n.append("buttonText",A),n.append("buttonLink",P),n.append("states",Z),d({url:"http://markbran.in/apis/admin/banner",method:"POST",headers:{"Content-Type":"multipart/form-data","auth-token":it},data:n}).then((function(t){e.push("/banners")})).catch((function(t){t.response&&t.response.data.message?b(t.response.data.message):b("Something went wrong!")})).finally((function(){return x(!1)}))},children:[Object(u.jsx)("br",{}),p&&Object(u.jsx)("p",{className:"text-danger",children:p}),Object(u.jsxs)(s.ub,{children:[Object(u.jsx)(s.u,{xl:"6",children:Object(u.jsxs)(s.K,{children:[Object(u.jsx)(s.ab,{htmlFor:"shortItem",children:"Title"}),Object(u.jsx)(s.T,{className:"mb-3",children:Object(u.jsx)(s.Q,{type:"text",onChange:function(t){L(t.target.value)},value:B,placeholder:"Title",autoComplete:"title"})})]})}),Object(u.jsxs)(s.u,{xs:"6",children:[Object(u.jsx)(s.ab,{htmlFor:"category",children:"Banner"}),Object(u.jsxs)(s.T,{className:"mb-3",children:[Object(u.jsx)(s.ab,{htmlFor:"bannerImage",variant:"custom-file",children:"Choose banner..."}),Object(u.jsx)(s.S,{onChange:function(t){y(t.target.files[0])},custom:!0,id:"bannerImage",type:"file"})]})]})]}),Object(u.jsxs)(s.ub,{children:[Object(u.jsx)(s.u,{xl:"6",children:Object(u.jsxs)(s.K,{children:[Object(u.jsx)(s.ab,{htmlFor:"shortItem",children:"Button Text"}),Object(u.jsx)(s.T,{className:"mb-3",children:Object(u.jsx)(s.Q,{type:"text",onChange:function(t){K(t.target.value)},value:A,placeholder:"Button Text",autoComplete:"Button Text"})})]})}),Object(u.jsx)(s.u,{xl:"6",children:Object(u.jsxs)(s.K,{children:[Object(u.jsx)(s.ab,{htmlFor:"shortItem",children:"Button Link"}),Object(u.jsx)(s.T,{className:"mb-3",children:Object(u.jsx)(s.Q,{type:"text",onChange:function(t){J(t.target.value)},value:P,placeholder:"Button Link",autoComplete:"Button Link"})})]})})]}),Object(u.jsxs)(s.ub,{children:[Object(u.jsx)(s.u,{xs:"6",children:Object(u.jsxs)(s.K,{children:[Object(u.jsx)(s.ab,{htmlFor:"category",children:"Select State"}),Object(u.jsx)(s.T,{className:"mb-3",children:Object(u.jsx)(r.Multiselect,{options:V,onSelect:function(t){return function(t){tt(t.map((function(t,e){return t.id.toString()}))),console.log(Z)}(t)},displayValue:"state"})})]})}),Object(u.jsx)(s.u,{xl:"6",children:Object(u.jsxs)(s.K,{children:[Object(u.jsx)(s.ab,{htmlFor:"shortItem",children:"Sort Order"}),Object(u.jsx)(s.T,{className:"mb-3",children:Object(u.jsx)(s.Q,{type:"text",onChange:function(t){T(t.target.value)},value:S,placeholder:"Sort Order",autoComplete:"Sort Order"})})]})})]}),Object(u.jsx)(s.ub,{children:Object(u.jsx)(s.u,{xl:"12",children:Object(u.jsxs)(s.K,{children:[Object(u.jsx)(s.ab,{htmlFor:"shortItem",children:"Description"}),Object(u.jsx)(s.T,{className:"mb-3",children:Object(u.jsx)(s.Jb,{id:"content",rows:"5",onChange:function(t){R(t.target.value)},value:F})})]})})}),Object(u.jsx)(s.ub,{children:Object(u.jsx)(s.u,{xl:"6",children:Object(u.jsxs)(s.K,{children:[Object(u.jsx)(s.ab,{htmlFor:"category",children:"Status"}),Object(u.jsx)(s.T,{children:Object(u.jsx)(c.a,{onChange:function(t){I(t)},checked:D})})]})})}),Object(u.jsx)(s.ub,{children:Object(u.jsx)(s.u,{xs:"8",children:Object(u.jsx)("button",{className:"btn btn-success",disabled:!!m,type:"submit",children:m?"Loading...":"Add Banner"})})})]})})]})})})})}},640:function(t,e,n){t.exports=n(641)},641:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var s=i.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},i.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=i.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},i.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function c(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function r(t,e,n,i,o){return function(t,e,n,i,o){var s=(t-n)/(e-n);if(0===s)return i;if(1===s)return o;for(var a="#",c=1;c<6;c+=2){var r=parseInt(i.substr(c,2),16),h=parseInt(o.substr(c,2),16),l=Math.round((1-s)*r+s*h).toString(16);1===l.length&&(l="0"+l),a+=l}return a}(t,e,n,c(i),c(o))}var h=function(t){function e(e){t.call(this,e);var n=e.height,i=e.width,o=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.R,i=e.h,o=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,o));s!==i&&this.setState({h:s})},e.prototype.U=function(t){var e=this.state,n=e.h,i=e.N,o=e.B,s=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var c=Date.now()-o;(!i||c<250||s&&n<=a||!s&&n>=a)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,s=t.className,a=t.offColor,c=t.onColor,h=t.offHandleColor,l=t.onHandleColor,u=t.checkedIcon,d=t.uncheckedIcon,p=t.checkedHandleIcon,b=t.uncheckedHandleIcon,j=t.boxShadow,f=t.activeBoxShadow,m=t.height,x=t.width,O=t.borderRadius,v=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&-1===e.indexOf(i)&&(n[i]=t[i]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),g=this.state,y=g.h,k=g.N,w=g.j,S={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:m/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},T={height:m,width:x,margin:Math.max(0,(this.t-m)/2),position:"relative",background:r(y,this.i,this.o,a,c),borderRadius:"number"==typeof O?O:m/2,cursor:n?"default":"pointer",WebkitTransition:k?null:"background 0.25s",MozTransition:k?null:"background 0.25s",transition:k?null:"background 0.25s"},C={height:m,width:Math.min(1.5*m,x-(this.t+m)/2+1),position:"relative",opacity:(y-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},M={height:m,width:Math.min(1.5*m,x-(this.t+m)/2+1),position:"absolute",opacity:1-(y-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},D={height:this.t,width:this.t,background:r(y,this.i,this.o,h,l),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof O?O-1:"50%",position:"absolute",transform:"translateX("+y+"px)",top:Math.max(0,(m-this.t)/2),outline:0,boxShadow:w?f:j,border:0,WebkitTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},I={height:this.t,width:this.t,opacity:Math.max(2*(1-(y-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},E={height:this.t,width:this.t,opacity:Math.max(2*((y-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"};return i.createElement("div",{className:s,style:S},i.createElement("div",{className:"react-switch-bg",style:T,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},u&&i.createElement("div",{style:C},u),d&&i.createElement("div",{style:M},d)),i.createElement("div",{className:"react-switch-handle",style:D,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.M,onTouchEnd:n?null:this.m,onTouchCancel:n?null:this.O},b&&i.createElement("div",{style:I},b),p&&i.createElement("div",{style:E},p)),i.createElement("input",o({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},v,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(i.Component);h.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=h}}]);
//# sourceMappingURL=132.a75d1b7d.chunk.js.map