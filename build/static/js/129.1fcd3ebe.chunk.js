(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[129],{1363:function(t,e,i){"use strict";i.r(e);var n=i(25),o=i(638),s=i(1),a=i(637),r=i(647),c=i(18),h=i(653),l=i(652),d=i(639),u=i.n(d),p=i(13),b=i(640).default,m=l.b().shape({name:l.c().required(),description:l.c().required()});e.default=function(){var t=Object(c.i)(),e=Object(r.e)({mode:"all",resolver:Object(h.a)(m)}),i=e.control,l=e.handleSubmit,d=e.setValue,f=(e.register,e.formState.errors),j=Object(c.g)(),g=Object(s.useState)(null),x=Object(o.a)(g,2),v=x[0],y=x[1],O=Object(s.useState)(!1),k=Object(o.a)(O,2),w=k[0],S=k[1],M=Object(s.useState)(!1),C=Object(o.a)(M,2),T=C[0],D=C[1],E=Object(s.useState)([]),N=Object(o.a)(E,2),I=N[0],W=N[1],H=Object(s.useState)(""),L=Object(o.a)(H,2),U=L[0],R=L[1],z=sessionStorage.getItem("token");Object(s.useEffect)((function(){b.get("http://markbran.in/apis/admin/testimonial/".concat(t.id),{headers:{"auth-token":z}}).then((function(t){W(t.data.testimonial),console.log(t.data.testimonial)})).catch((function(t){t.response&&t.response.data.message?y(t.response.data.message):y("Something went wrong!")})),I&&(d("name",I.name),d("description",I.description)),D(I.status?1:0)}),[I.name,I.status,I.description]);return Object(p.jsx)("div",{children:Object(p.jsx)(a.ub,{children:Object(p.jsx)(a.u,{xs:"12",sm:"12",children:Object(p.jsxs)(a.j,{children:[Object(p.jsx)(a.n,{children:"Add Testimonial"}),Object(p.jsx)(a.k,{children:Object(p.jsxs)(a.J,{onSubmit:l((function(e){var i=new FormData,n=T?1:0;i.append("status",n),i.append("name",e.name),i.append("description",e.description),i.append("image",U),y(null),S(!0),b.patch("http://markbran.in/apis/admin/testimonial/".concat(t.id),i,{headers:{"Content-Type":"multipart/form-data","auth-token":z}}).then((function(t){S(!1),j.push("/testimonials")})).catch((function(t){S(!1),t.response&&t.response.data.message?y(t.response.data.message):y("Something went wrong!")}))})),children:[Object(p.jsx)("br",{}),v&&Object(p.jsx)("p",{className:"text-danger",children:v}),Object(p.jsxs)(a.ub,{children:[Object(p.jsx)(a.u,{xs:"6",children:Object(p.jsxs)(a.K,{children:[Object(p.jsx)(a.ab,{htmlFor:"category",children:"Category"}),Object(p.jsx)(a.T,{className:"mb-3",children:Object(p.jsx)(r.a,{name:"name",control:i,defaultValue:"",rules:{required:{value:!0,message:"Name is required"}},render:function(t){var e=t.field;return Object(p.jsx)(a.Q,Object(n.a)(Object(n.a)({},e),{},{type:"text",placeholder:"Name",autoComplete:"name"}))}})}),Object(p.jsx)(a.L,{className:"help-block text-danger",color:"red",children:f.name&&f.name.message})]})}),Object(p.jsxs)(a.u,{xs:"5",children:[Object(p.jsx)(a.ab,{htmlFor:"category",children:"Image"}),Object(p.jsxs)(a.T,{className:"mb-3",children:[Object(p.jsx)(a.ab,{htmlFor:"image",variant:"custom-file",children:"Choose image..."}),Object(p.jsx)(a.S,{onChange:function(t){R(t.target.files[0])},custom:!0,id:"image",type:"file"})]})]}),Object(p.jsx)(a.u,{xs:"1",children:Object(p.jsx)("img",{src:"".concat("http://markbran.in/sleepwell/").concat(I.image),className:"img-fluid",alt:""})})]}),Object(p.jsx)(a.ub,{children:Object(p.jsx)(a.u,{xl:"12",children:Object(p.jsxs)(a.K,{children:[Object(p.jsx)(a.ab,{htmlFor:"category",children:"Description"}),Object(p.jsx)(a.T,{children:Object(p.jsx)(r.a,{name:"description",control:i,defaultValue:"",rules:{required:{value:!0,message:"Description is required"}},render:function(t){var e=t.field;return Object(p.jsx)(a.Jb,Object(n.a)(Object(n.a)({},e),{},{id:"content",rows:"3"}))}})})]})})}),Object(p.jsx)(a.ub,{children:Object(p.jsx)(a.u,{xl:"8",children:Object(p.jsx)(a.K,{children:Object(p.jsx)(a.T,{children:Object(p.jsx)(u.a,{onChange:function(t){D(t)},checked:T})})})})}),Object(p.jsx)(a.ub,{children:Object(p.jsx)(a.u,{xs:"8",children:Object(p.jsx)("button",{className:"btn btn-success",disabled:!!w,type:"submit",children:w?"Loading...":"Update testimonial"})})})]})})]})})})})}},639:function(t,e,i){t.exports=i(641)},641:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var n=i(1);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}var s=n.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},n.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=n.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},n.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function r(t){if(7===t.length)return t;for(var e="#",i=1;i<4;i+=1)e+=t[i]+t[i];return e}function c(t,e,i,n,o){return function(t,e,i,n,o){var s=(t-i)/(e-i);if(0===s)return n;if(1===s)return o;for(var a="#",r=1;r<6;r+=2){var c=parseInt(n.substr(r,2),16),h=parseInt(o.substr(r,2),16),l=Math.round((1-s)*c+s*h).toString(16);1===l.length&&(l="0"+l),a+=l}return a}(t,e,i,r(n),r(o))}var h=function(t){function e(e){t.call(this,e);var i=e.height,n=e.width,o=e.checked;this.t=e.handleDiameter||i-2,this.i=Math.max(n-i,n-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,i=e.R,n=e.h,o=(this.props.checked?this.i:this.o)+t-i;e.N||t===i||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,o));s!==n&&this.setState({h:s})},e.prototype.U=function(t){var e=this.state,i=e.h,n=e.N,o=e.B,s=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var r=Date.now()-o;(!n||r<250||s&&i<=a||!s&&i>=a)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,i=t.disabled,s=t.className,a=t.offColor,r=t.onColor,h=t.offHandleColor,l=t.onHandleColor,d=t.checkedIcon,u=t.uncheckedIcon,p=t.checkedHandleIcon,b=t.uncheckedHandleIcon,m=t.boxShadow,f=t.activeBoxShadow,j=t.height,g=t.width,x=t.borderRadius,v=function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===e.indexOf(n)&&(i[n]=t[n]);return i}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),y=this.state,O=y.h,k=y.N,w=y.j,S={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:j/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},M={height:j,width:g,margin:Math.max(0,(this.t-j)/2),position:"relative",background:c(O,this.i,this.o,a,r),borderRadius:"number"==typeof x?x:j/2,cursor:i?"default":"pointer",WebkitTransition:k?null:"background 0.25s",MozTransition:k?null:"background 0.25s",transition:k?null:"background 0.25s"},C={height:j,width:Math.min(1.5*j,g-(this.t+j)/2+1),position:"relative",opacity:(O-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},T={height:j,width:Math.min(1.5*j,g-(this.t+j)/2+1),position:"absolute",opacity:1-(O-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},D={height:this.t,width:this.t,background:c(O,this.i,this.o,h,l),display:"inline-block",cursor:i?"default":"pointer",borderRadius:"number"==typeof x?x-1:"50%",position:"absolute",transform:"translateX("+O+"px)",top:Math.max(0,(j-this.t)/2),outline:0,boxShadow:w?f:m,border:0,WebkitTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:k?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},E={height:this.t,width:this.t,opacity:Math.max(2*(1-(O-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"},N={height:this.t,width:this.t,opacity:Math.max(2*((O-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:k?null:"opacity 0.25s",MozTransition:k?null:"opacity 0.25s",transition:k?null:"opacity 0.25s"};return n.createElement("div",{className:s,style:S},n.createElement("div",{className:"react-switch-bg",style:M,onClick:i?null:this.T,onMouseDown:function(t){return t.preventDefault()}},d&&n.createElement("div",{style:C},d),u&&n.createElement("div",{style:T},u)),n.createElement("div",{className:"react-switch-handle",style:D,onClick:function(t){return t.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.M,onTouchEnd:i?null:this.m,onTouchCancel:i?null:this.O},b&&n.createElement("div",{style:E},b),p&&n.createElement("div",{style:N},p)),n.createElement("input",o({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},v,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(n.Component);h.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=h}}]);
//# sourceMappingURL=129.1fcd3ebe.chunk.js.map