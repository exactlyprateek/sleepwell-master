(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[70],{1266:function(t,e,n){"use strict";n.r(e);var i=n(639),a=n(1),o=n.n(a),s=n(637),c=n(640),r=n.n(c),l=(n(653),n(686)),u=n(18),h=n(13),d=n(642).default;e.default=function(){var t=Object(u.i)(),e=Object(a.useState)(1),n=Object(i.a)(e,2),c=n[0],b=n[1],p=Object(a.useState)(""),j=Object(i.a)(p,2),f=j[0],m=j[1],O=Object(a.useState)(!1),g=Object(i.a)(O,2),x=g[0],v=g[1],y=Object(a.useState)(!1),S=Object(i.a)(y,2),k=S[0],w=S[1],C=Object(a.useState)(),D=Object(i.a)(C,2),M=(D[0],D[1]),N=Object(a.useState)(""),T=Object(i.a)(N,2),E=(T[0],T[1],Object(a.useState)([])),L=Object(i.a)(E,2),I=L[0],F=L[1],A=Object(a.useState)([]),W=Object(i.a)(A,2),H=W[0],K=W[1],B=Object(a.useState)([]),P=Object(i.a)(B,2),R=P[0],U=P[1],V=Object(a.useState)([]),z=Object(i.a)(V,2),_=z[0],J=z[1],X=Object(a.useState)([]),$=Object(i.a)(X,2),Q=$[0],q=$[1],G=Object(a.useState)([]),Y=Object(i.a)(G,2),Z=Y[0],tt=Y[1],et=Object(a.useState)([]),nt=Object(i.a)(et,2),it=nt[0],at=nt[1],ot=Object(a.useState)([]),st=Object(i.a)(ot,2),ct=st[0],rt=st[1],lt=Object(a.useState)([]),ut=Object(i.a)(lt,2),ht=(ut[0],ut[1]),dt=Object(a.useState)(""),bt=Object(i.a)(dt,2),pt=bt[0],jt=bt[1],ft=Object(a.useState)(""),mt=Object(i.a)(ft,2),Ot=mt[0],gt=mt[1],xt=Object(a.useState)(""),vt=Object(i.a)(xt,2),yt=vt[0],St=vt[1],kt=Object(a.useState)(""),wt=Object(i.a)(kt,2),Ct=wt[0],Dt=wt[1],Mt=Object(a.useState)(""),Nt=Object(i.a)(Mt,2),Tt=Nt[0],Et=Nt[1],Lt=Object(a.useState)(""),It=Object(i.a)(Lt,2),Ft=It[0],At=It[1],Wt=Object(a.useState)(!0),Ht=Object(i.a)(Wt,2),Kt=Ht[0],Bt=Ht[1],Pt=Object(a.useState)(t.id),Rt=Object(i.a)(Pt,2),Ut=Rt[0],Vt=(Rt[1],Object(a.useState)([])),zt=Object(i.a)(Vt,2),_t=zt[0],Jt=zt[1],Xt=Object(a.useState)([]),$t=Object(i.a)(Xt,2),Qt=$t[0],qt=$t[1],Gt=Object(a.useState)([]),Yt=Object(i.a)(Gt,2),Zt=Yt[0],te=Yt[1],ee=Object(a.useState)([]),ne=Object(i.a)(ee,2),ie=ne[0],ae=ne[1],oe=Object(a.useState)(""),se=Object(i.a)(oe,2),ce=se[0],re=(se[1],Object(a.useState)(!0)),le=Object(i.a)(re,2),ue=(le[0],le[1],sessionStorage.getItem("token"));Object(a.useEffect)((function(){console.log(),d.get("http://markbran.in/apis/admin/category",{headers:{"auth-token":ue}}).then((function(t){F(t.data.categories)})).catch((function(t){console.log(t),m(t.toLocaleString())})),console.log(),d.get("http://markbran.in/apis/admin/subCategory",{headers:{"auth-token":ue}}).then((function(t){at(t.data.subcategories)})).catch((function(t){m(t.toLocaleString()),console.log(t)})),d.get("http://markbran.in/apis/admin/subSubCategory",{headers:{"auth-token":ue}}).then((function(t){rt(t.data.subSubCategories)})).catch((function(t){m(t.toLocaleString()),console.log(t)})),d.get("http://markbran.in/apis/admin/product/details/".concat(Ut),{headers:{"auth-token":ue}}).then((function(t){U(t.data.productDetails),Dt(t.data.productDetails.cid),Et(t.data.productDetails.scid),At(t.data.productDetails.sscid),ae(t.data.productDetails.materials.map((function(t){return JSON.parse(t)}))),te(t.data.productDetails.states.map((function(t){return JSON.parse(t)}))),jt(t.data.productDetails.title),gt(t.data.productDetails.description),St(t.data.productDetails.discount)})).catch((function(t){m(t.toLocaleString()),console.log(t)})),d.get("http://markbran.in/apis/admin/advantage/",{headers:{"auth-token":ue}}).then((function(t){tt(t.data.advantages)})).catch((function(t){m(t.toLocaleString()),console.log(t)})),console.log(ce),d.get("http://markbran.in/apis/admin/benifit/",{headers:{"auth-token":ue}}).then((function(t){K(t.data.benifits)})).catch((function(t){m(t.toLocaleString()),console.log(t)})),d.get("http://markbran.in/apis/admin/state/",{headers:{"auth-token":ue}}).then((function(t){q(t.data.states)})).catch((function(t){m(t.toLocaleString()),console.log(t)})),console.log(ce),d.get("http://markbran.in/apis/admin/material/",{headers:{"auth-token":ue}}).then((function(t){J(t.data.materials)})).catch((function(t){m(t.toLocaleString()),console.log(t)})),d.get("http://markbran.in/apis/admin/product/advantages/".concat(Ut,"/"),{headers:{"auth-token":ue}}).then((function(t){var e=t.data.productAdvanatages.map((function(t){return t.advantageId}));Jt(e)})).catch((function(t){m(t.toLocaleString()),console.log(t)})),d.get("http://markbran.in/apis/admin/product/benifits/".concat(Ut,"/"),{headers:{"auth-token":ue}}).then((function(t){var e=t.data.productBenifits.map((function(t){return t.benifitId}));qt(e)})).catch((function(t){m(t.toLocaleString()),console.log(t)})),d.get("http://markbran.in/apis/admin/product/images/".concat(Ut,"/"),{headers:{"auth-token":ue}}).then((function(t){ht(t.data.productImages)})).catch((function(t){m(t.toLocaleString()),console.log(t)}))}),[Ut]);var he=Object(a.useState)(!1),de=Object(i.a)(he,2),be=de[0],pe=de[1],je=Object(a.useState)(!1),fe=Object(i.a)(je,2),me=fe[0],Oe=fe[1];return me?Object(h.jsx)(u.a,{to:"/products/"}):be?Object(h.jsx)(u.a,{to:"/add-product/"}):Object(h.jsx)(s.ub,{children:Object(h.jsx)(s.u,{xs:"12",sm:"12",children:Object(h.jsxs)(s.j,{children:[Object(h.jsxs)(s.n,{children:["Product Title : ",R.title,Object(h.jsx)(s.f,{className:"btn-success mx-2",style:{float:"right"},variant:"success",onClick:function(){return Oe(!0)},children:"View All Products"}),Object(h.jsx)(s.f,{className:"btn-success",style:{float:"right"},variant:"success",onClick:function(){return pe(!0)},children:"Add New Product"})]}),x?Object(h.jsxs)("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(h.jsx)("strong",{children:x})," .",Object(h.jsx)("button",{onClick:function(){return v("")},type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null,k?Object(h.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(h.jsx)("strong",{children:k}),".",Object(h.jsx)("button",{onClick:function(){return w("")},type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null,Object(h.jsxs)(s.k,{children:[Object(h.jsxs)("ul",{className:"nav",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("button",{onClick:function(){return b(1)},className:"nav-link active btn btn-".concat(1===c?"primary":"secondary"," mx-2"),children:"Edit basic Details"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("button",{onClick:function(){return b(2)},className:"nav-link active btn btn-".concat(2===c?"primary":"secondary"," mx-2"),children:"Edit more details"})})]}),1===c&&Object(h.jsxs)(o.a.Fragment,{children:[Object(h.jsx)(s.ub,{children:Object(h.jsx)(s.L,{className:"help-block text-danger",color:"red",children:f})}),Object(h.jsxs)(s.ub,{className:"mt-4",children:[Object(h.jsx)(s.u,{xs:"6",children:Object(h.jsxs)(s.K,{children:[Object(h.jsx)(s.ab,{children:"Product Title"}),Object(h.jsx)(s.Q,{id:"title",value:pt,onChange:function(t){return jt(t.target.value)},placeholder:"Enter your product",required:!0})]})}),Object(h.jsx)(s.u,{xs:"6",children:Object(h.jsxs)(s.K,{children:[Object(h.jsx)(s.ab,{htmlFor:"categories",children:"Category"}),Object(h.jsx)(s.vb,{onChange:function(t){return Dt(t.target.value)},children:I.map((function(t){return Object(h.jsx)("option",{value:t.id,children:t.title},t.id)}))})]})}),Object(h.jsx)(s.u,{xs:"6",children:Object(h.jsxs)(s.K,{children:[Object(h.jsx)(s.ab,{htmlFor:"categories",children:"Sub Category"}),Object(h.jsx)(s.vb,{onChange:function(t){return Et(t.target.value)},children:it.map((function(t){return Object(h.jsx)("option",{value:t.id,children:t.title},t.id)}))})]})}),Object(h.jsx)(s.u,{xs:"6",children:Object(h.jsxs)(s.K,{children:[Object(h.jsx)(s.ab,{children:"Sub Sub Category"}),Object(h.jsx)(s.vb,{onChange:function(t){return At(t.target.value)},children:ct.map((function(t){return Object(h.jsx)("option",{value:t.id,children:t.title},t.id)}))})]})}),Object(h.jsx)(s.u,{xl:"12",children:Object(h.jsxs)(s.K,{children:[Object(h.jsx)(s.ab,{htmlFor:"category",children:"Description"}),Object(h.jsx)(s.T,{children:Object(h.jsx)(s.Jb,{id:"content",rows:"3",onChange:function(t){gt(t.target.value)},value:Ot})})]})}),Object(h.jsx)(s.u,{xs:"6",children:Object(h.jsxs)(s.K,{children:[Object(h.jsx)(s.ab,{htmlFor:"name",children:"Discount"}),Object(h.jsx)(s.Q,{id:"name",placeholder:"Enter your Product Discount",onChange:function(t){return St(t.target.value)},value:yt})]})}),Object(h.jsx)(s.u,{xl:"6",children:Object(h.jsxs)(s.K,{children:[Object(h.jsx)(s.ab,{htmlFor:"is_active",children:"Status"}),Object(h.jsx)(s.T,{children:Object(h.jsx)(r.a,{onChange:function(t){Bt(t)},checked:Kt})})]})}),Object(h.jsx)(s.u,{xs:"8",children:Object(h.jsx)("button",{onClick:function(){var t=new FormData;t.append("cid",Ct),t.append("scid",Tt),t.append("sscid",Ft),t.append("title",pt),t.append("discount",yt),t.append("description",Ot),t.append("status",Kt?1:0),d.post("http://markbran.in/apis/admin/product/details/".concat(Ut),t,{headers:{"auth-token":ue}}).then((function(t){console.log(t.data),v("Saved Successfully")})).catch((function(t){m(t.toLocaleString()),console.log(t)}))},className:"btn btn-success",type:"button",children:"Save Changes"})})]})]}),2===c&&Object(h.jsxs)(s.ub,{className:"mt-4",children:[Object(h.jsx)(s.u,{xs:"6",children:Object(h.jsxs)(s.K,{children:[Object(h.jsx)(s.ab,{htmlFor:"ccyear",children:"Select Advantages"}),Object(h.jsx)(s.T,{className:"mb-3",children:Z?Object(h.jsx)(l.Multiselect,{options:Z,selectedValues:Z.filter((function(t){return _t.includes(t.id)})),onSelect:function(t){return function(t){console.log(t.map((function(t){return t.id}))),Jt(t.map((function(t){return t.id})))}(t)},displayValue:"advantage"}):"Loading Advantages"})]})}),Object(h.jsx)(s.u,{xs:"6",children:Object(h.jsxs)(s.K,{children:[Object(h.jsx)(s.ab,{htmlFor:"ccyear",children:"Select Benifits"}),Object(h.jsx)(s.T,{className:"mb-3",children:H?Object(h.jsx)(l.Multiselect,{options:H,selectedValues:H.filter((function(t){return Qt.includes(t.id)})),onSelect:function(t){qt(t.map((function(t){return t.id})))},displayValue:"benifit"}):"Loading Benifits"})]})}),Object(h.jsx)(s.u,{xs:"6",children:Object(h.jsxs)(s.K,{children:[Object(h.jsx)(s.ab,{htmlFor:"ccyear",children:"Select Materials"}),Object(h.jsx)(s.T,{className:"mb-3",children:_?Object(h.jsx)(l.Multiselect,{options:_,selectedValues:_.filter((function(t){return ie.includes(t.id)})),onSelect:function(t){ae(t.map((function(t){return t.id})))},displayValue:"title"}):"Loading Materials"})]})}),Object(h.jsx)(s.u,{xs:"6",children:Object(h.jsxs)(s.K,{children:[Object(h.jsx)(s.ab,{htmlFor:"ccyear",children:"Select States"}),Object(h.jsx)(s.T,{className:"mb-3",children:Q?Object(h.jsx)(l.Multiselect,{options:Q,selectedValues:Q.filter((function(t){return Zt.includes(t.id)})),onSelect:function(t){return function(t){te(t.map((function(t){return t.id})))}(t)},displayValue:"state"}):"Loading States"})]})}),Object(h.jsxs)(s.u,{xs:"6",children:[Object(h.jsx)(s.ab,{htmlFor:"category",children:"Image"}),Object(h.jsxs)(s.T,{className:"mb-3",children:[Object(h.jsx)(s.ab,{htmlFor:"bannerImage",variant:"custom-file",children:"Choose image..."}),Object(h.jsx)(s.S,{onChange:function(t){M(t.target.files[0])},custom:!0,id:"bannerImage",type:"file"})]})]}),Object(h.jsx)(s.u,{xs:"8",children:Object(h.jsx)("button",{onClick:function(){!function(){var t=new FormData;t.append("pid",Ut),t.append("states",Zt)}(),function(){var t=new FormData;t.append("pid",Ut),t.append("advantages",_t),d.post("http://markbran.in/apis/admin/product/advantages/",t,{headers:{"auth-token":ue}}).then((function(t){console.log(t.data)})).catch((function(t){console.log(t)}))}(),function(){var t=new FormData;t.append("pid",Ut),t.append("materials",ie),d.post("http://markbran.in/apis/admin/product/materials/",t,{headers:{"auth-token":ue}}).then((function(t){console.log(t.data)})).catch((function(t){console.log(t)}))}(),function(){var t=new FormData;t.append("pid",Ut),t.append("benifits",Qt),d.post("http://markbran.in/apis/admin/product/benifits/",t,{headers:{"auth-token":ue}}).then((function(t){console.log(t.data)})).catch((function(t){console.log(t)}))}()},className:"btn btn-success",type:"button",children:"Save Details"})})]}),Object(h.jsx)(s.J,{children:Object(h.jsx)(s.ub,{})})]})]})})})}},640:function(t,e,n){t.exports=n(641)},641:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var o=i.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},i.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),s=i.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},i.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function c(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function r(t,e,n,i,a){return function(t,e,n,i,a){var o=(t-n)/(e-n);if(0===o)return i;if(1===o)return a;for(var s="#",c=1;c<6;c+=2){var r=parseInt(i.substr(c,2),16),l=parseInt(a.substr(c,2),16),u=Math.round((1-o)*r+o*l).toString(16);1===u.length&&(u="0"+u),s+=u}return s}(t,e,n,c(i),c(a))}var l=function(t){function e(e){t.call(this,e);var n=e.height,i=e.width,a=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:a?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.R,i=e.h,a=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var o=Math.min(this.i,Math.max(this.o,a));o!==i&&this.setState({h:o})},e.prototype.U=function(t){var e=this.state,n=e.h,i=e.N,a=e.B,o=this.props.checked,s=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var c=Date.now()-a;(!i||c<250||o&&n<=s||!o&&n>=s)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,o=t.className,s=t.offColor,c=t.onColor,l=t.offHandleColor,u=t.onHandleColor,h=t.checkedIcon,d=t.uncheckedIcon,b=t.checkedHandleIcon,p=t.uncheckedHandleIcon,j=t.boxShadow,f=t.activeBoxShadow,m=t.height,O=t.width,g=t.borderRadius,x=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&-1===e.indexOf(i)&&(n[i]=t[i]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),v=this.state,y=v.h,S=v.N,k=v.j,w={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:m/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},C={height:m,width:O,margin:Math.max(0,(this.t-m)/2),position:"relative",background:r(y,this.i,this.o,s,c),borderRadius:"number"==typeof g?g:m/2,cursor:n?"default":"pointer",WebkitTransition:S?null:"background 0.25s",MozTransition:S?null:"background 0.25s",transition:S?null:"background 0.25s"},D={height:m,width:Math.min(1.5*m,O-(this.t+m)/2+1),position:"relative",opacity:(y-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:S?null:"opacity 0.25s",MozTransition:S?null:"opacity 0.25s",transition:S?null:"opacity 0.25s"},M={height:m,width:Math.min(1.5*m,O-(this.t+m)/2+1),position:"absolute",opacity:1-(y-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:S?null:"opacity 0.25s",MozTransition:S?null:"opacity 0.25s",transition:S?null:"opacity 0.25s"},N={height:this.t,width:this.t,background:r(y,this.i,this.o,l,u),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof g?g-1:"50%",position:"absolute",transform:"translateX("+y+"px)",top:Math.max(0,(m-this.t)/2),outline:0,boxShadow:k?f:j,border:0,WebkitTransition:S?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:S?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:S?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},T={height:this.t,width:this.t,opacity:Math.max(2*(1-(y-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:S?null:"opacity 0.25s",MozTransition:S?null:"opacity 0.25s",transition:S?null:"opacity 0.25s"},E={height:this.t,width:this.t,opacity:Math.max(2*((y-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:S?null:"opacity 0.25s",MozTransition:S?null:"opacity 0.25s",transition:S?null:"opacity 0.25s"};return i.createElement("div",{className:o,style:w},i.createElement("div",{className:"react-switch-bg",style:C,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},h&&i.createElement("div",{style:D},h),d&&i.createElement("div",{style:M},d)),i.createElement("div",{className:"react-switch-handle",style:N,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.M,onTouchEnd:n?null:this.m,onTouchCancel:n?null:this.O},p&&i.createElement("div",{style:T},p),b&&i.createElement("div",{style:E},b)),i.createElement("input",a({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},x,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(i.Component);l.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:o,checkedIcon:s,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=l},700:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(658);var a=n(657);function o(t){return function(t){if(Array.isArray(t))return Object(i.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},806:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(657);function a(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(i.a)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,c=!0,r=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){r=!0,s=t},f:function(){try{c||null==n.return||n.return()}finally{if(r)throw s}}}}}}]);
//# sourceMappingURL=70.a1226c38.chunk.js.map