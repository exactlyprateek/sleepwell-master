(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[100],{1263:function(t,e,i){"use strict";i.r(e);var o=i(25),n=i(638),s=i(1),a=i(637),r=i(647),c=i(18),h=i(639),l=i.n(h),d=i(13),u=i(640).default;e.default=function(){var t=Object(c.i)(),e=Object(r.e)({mode:"all"}),i=e.control,h=e.handleSubmit,p=e.setValue,b=(e.register,e.formState.errors),f=Object(c.g)(),j=Object(s.useState)(null),m=Object(n.a)(j,2),g=m[0],y=m[1],x=Object(s.useState)(!1),v=Object(n.a)(x,2),O=v[0],w=v[1],k=Object(s.useState)(!1),S=Object(n.a)(k,2),C=S[0],M=S[1],T=Object(s.useState)([]),D=Object(n.a)(T,2),E=D[0],I=D[1],N=Object(s.useState)(""),W=Object(n.a)(N,2),H=(W[0],W[1],Object(s.useState)("")),L=Object(n.a)(H,2),U=L[0],R=L[1],z=Object(s.useState)(""),B=Object(n.a)(z,2),A=B[0],F=B[1],X=sessionStorage.getItem("token");Object(s.useEffect)((function(){u.get("http://markbran.in/apis/admin/category/".concat(t.id),{headers:{"auth-token":X}}).then((function(t){I(t.data.category),console.log(t.data.category)})).catch((function(t){t.response.data.message?y(t.response.data.message):y("Something went wrong!")})),E&&p("category",E.title),M(E.status),F(E.description)}),[E.title,E.status,E.description]);return Object(d.jsx)("div",{children:Object(d.jsx)(a.ub,{children:Object(d.jsx)(a.u,{xs:"12",sm:"12",children:Object(d.jsxs)(a.j,{children:[Object(d.jsx)(a.n,{children:"Edit Category"}),Object(d.jsx)(a.k,{children:Object(d.jsxs)(a.J,{onSubmit:h((function(e){var i=new FormData;i.append("status",C),i.append("title",e.category),i.append("image",U),i.append("description",A),y(null),w(!0),u.patch("http://markbran.in/apis/admin/category/".concat(t.id),i,{headers:{"Content-Type":"multipart/form-data","auth-token":X}}).then((function(t){w(!1),f.push("/categories")})).catch((function(t){w(!1),t.response&&t.response.data.errorMessage?y(t.response.data.errorMessage):y("Something went wrong!")}))})),children:[Object(d.jsx)("br",{}),g&&Object(d.jsx)("p",{className:"text-danger",children:g}),Object(d.jsxs)(a.ub,{children:[Object(d.jsx)(a.u,{xs:"6",children:Object(d.jsxs)(a.K,{children:[Object(d.jsx)(a.ab,{htmlFor:"category",children:"Category"}),Object(d.jsx)(a.T,{className:"mb-3",children:Object(d.jsx)(r.a,{name:"category",control:i,defaultValue:"",rules:{required:{value:!0,message:"Categoty is required"}},render:function(t){var e=t.field;return Object(d.jsx)(a.Q,Object(o.a)(Object(o.a)({},e),{},{type:"text",placeholder:"Category",autoComplete:"category"}))}})}),Object(d.jsx)(a.L,{className:"help-block text-danger",color:"red",children:b.category&&b.category.message})]})}),Object(d.jsxs)(a.u,{xs:"5",children:[Object(d.jsx)(a.ab,{htmlFor:"category",children:"Category Image"}),Object(d.jsxs)(a.T,{className:"mb-3",children:[Object(d.jsx)(a.ab,{htmlFor:"categoryImage",variant:"custom-file",children:"Choose image..."}),Object(d.jsx)(a.S,{onChange:function(t){R(t.target.files[0])},custom:!0,id:"categoryImage",type:"file"})]})]}),Object(d.jsx)(a.u,{xs:"1",children:Object(d.jsx)("img",{src:"".concat(window.location.origin,"/").concat(E.image),className:"img-fluid",alt:""})})]}),Object(d.jsx)(a.ub,{children:Object(d.jsx)(a.u,{xl:"12",children:Object(d.jsxs)(a.K,{children:[Object(d.jsx)(a.ab,{htmlFor:"category",children:"Description"}),Object(d.jsx)(a.T,{children:Object(d.jsx)(a.Jb,{id:"content",rows:"3",onChange:function(t){F(t.target.value)},value:A})})]})})}),Object(d.jsx)(a.ub,{children:Object(d.jsx)(a.u,{xl:"8",children:Object(d.jsx)(a.K,{children:Object(d.jsx)(a.T,{children:Object(d.jsx)(l.a,{onChange:function(t){M(t)},checked:C})})})})}),Object(d.jsx)(a.ub,{children:Object(d.jsx)(a.u,{xs:"8",children:Object(d.jsx)("button",{className:"btn btn-success",disabled:!!O,type:"submit",children:O?"Loading...":"Update Category"})})})]})})]})})})})}},639:function(t,e,i){t.exports=i(641)},641:function(t,e,i){Object.defineProperty(e,"__esModule",{value:!0});var o=i(1);function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t}).apply(this,arguments)}var s=o.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},o.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=o.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},o.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function r(t){if(7===t.length)return t;for(var e="#",i=1;i<4;i+=1)e+=t[i]+t[i];return e}function c(t,e,i,o,n){return function(t,e,i,o,n){var s=(t-i)/(e-i);if(0===s)return o;if(1===s)return n;for(var a="#",r=1;r<6;r+=2){var c=parseInt(o.substr(r,2),16),h=parseInt(n.substr(r,2),16),l=Math.round((1-s)*c+s*h).toString(16);1===l.length&&(l="0"+l),a+=l}return a}(t,e,i,r(o),r(n))}var h=function(t){function e(e){t.call(this,e);var i=e.height,o=e.width,n=e.checked;this.t=e.handleDiameter||i-2,this.i=Math.max(o-i,o-(i+this.t)/2),this.o=Math.max(0,(i-this.t)/2),this.state={h:n?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,i=e.R,o=e.h,n=(this.props.checked?this.i:this.o)+t-i;e.N||t===i||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,n));s!==o&&this.setState({h:s})},e.prototype.U=function(t){var e=this.state,i=e.h,o=e.N,n=e.B,s=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var r=Date.now()-n;(!o||r<250||s&&i<=a||!s&&i>=a)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,i=t.disabled,s=t.className,a=t.offColor,r=t.onColor,h=t.offHandleColor,l=t.onHandleColor,d=t.checkedIcon,u=t.uncheckedIcon,p=t.checkedHandleIcon,b=t.uncheckedHandleIcon,f=t.boxShadow,j=t.activeBoxShadow,m=t.height,g=t.width,y=t.borderRadius,x=function(t,e){var i={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(i[o]=t[o]);return i}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),v=this.state,O=v.h,w=v.N,k=v.j,S={position:"relative",display:"inline-block",textAlign:"left",opacity:i?.5:1,direction:"ltr",borderRadius:m/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},C={height:m,width:g,margin:Math.max(0,(this.t-m)/2),position:"relative",background:c(O,this.i,this.o,a,r),borderRadius:"number"==typeof y?y:m/2,cursor:i?"default":"pointer",WebkitTransition:w?null:"background 0.25s",MozTransition:w?null:"background 0.25s",transition:w?null:"background 0.25s"},M={height:m,width:Math.min(1.5*m,g-(this.t+m)/2+1),position:"relative",opacity:(O-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},T={height:m,width:Math.min(1.5*m,g-(this.t+m)/2+1),position:"absolute",opacity:1-(O-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},D={height:this.t,width:this.t,background:c(O,this.i,this.o,h,l),display:"inline-block",cursor:i?"default":"pointer",borderRadius:"number"==typeof y?y-1:"50%",position:"absolute",transform:"translateX("+O+"px)",top:Math.max(0,(m-this.t)/2),outline:0,boxShadow:k?j:f,border:0,WebkitTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},E={height:this.t,width:this.t,opacity:Math.max(2*(1-(O-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},I={height:this.t,width:this.t,opacity:Math.max(2*((O-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"};return o.createElement("div",{className:s,style:S},o.createElement("div",{className:"react-switch-bg",style:C,onClick:i?null:this.T,onMouseDown:function(t){return t.preventDefault()}},d&&o.createElement("div",{style:M},d),u&&o.createElement("div",{style:T},u)),o.createElement("div",{className:"react-switch-handle",style:D,onClick:function(t){return t.preventDefault()},onMouseDown:i?null:this.p,onTouchStart:i?null:this.k,onTouchMove:i?null:this.M,onTouchEnd:i?null:this.m,onTouchCancel:i?null:this.O},b&&o.createElement("div",{style:E},b),p&&o.createElement("div",{style:I},p)),o.createElement("input",n({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:i,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},x,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(o.Component);h.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:s,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=h}}]);
//# sourceMappingURL=100.3af67712.chunk.js.map