(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[199],{1440:function(e,t,c){"use strict";c.r(t);var n=c(639),s=c(1),a=c(637),r=c(642),l=c.n(r),i=(c(644),c(645)),o=(c(646),c(682),c(1465)),j=c(13);var d=function(e){var t=Object(s.useState)([]),c=Object(n.a)(t,2),r=c[0],d=c[1],b=Object(s.useState)(""),u=Object(n.a)(b,2),h=u[0],O=u[1],m=Object(s.useState)(""),x=Object(n.a)(m,2),p=x[0],g=x[1],f=Object(s.useState)(""),v=Object(n.a)(f,2),S=v[0],k=v[1],N=Object(s.useState)(""),C=Object(n.a)(N,2),A=C[0],y=C[1],w=Object(s.useState)(""),D=Object(n.a)(w,2),T=D[0],B=D[1],I=Object(s.useState)(!1),L=Object(n.a)(I,2),Q=L[0],F=L[1],E=Object(s.useState)([]),Y=Object(n.a)(E,2),P=Y[0],q=Y[1],R=sessionStorage.getItem("token"),V=Object(s.useState)(""),J=Object(n.a)(V,2),z=J[0],G=J[1],H=function(t){l.a.delete("http://markbran.in/apis/admin/service-page/banner/".concat(t),{headers:{"auth-token":R}}).then((function(t){e.setAlertSuccess("Deleted Successfully"),e.setAlertDanger(""),K()})).catch((function(t){e.setAlertSuccess(""),e.setAlertDanger("Request Failed"+t.toString())}))},K=function(){l.a.get("http://markbran.in/apis/admin/service-page/banner",{headers:{"auth-token":R}}).then((function(e){q(e.data.banners),B(e.data.banners[0].id?e.data.banners[0].id:0)})).catch((function(e){}))};return Object(s.useEffect)((function(){l.a.get("http://markbran.in/apis/admin/service-category",{headers:{"auth-token":R}}).then((function(e){d(e.data.categories)})).catch((function(t){console.log(t),e.setAlertDanger("Something went wrong")})),K()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(a.f,{className:"btn btn-info my-4 mx-2",onClick:function(){return F(!Q)},children:Q?"View All Banners":"Add Banner"}),Q?Object(j.jsxs)(a.w,{className:"m-2 p-2",children:[Object(j.jsx)(a.n,{className:"mb-4",children:"Add Service Page Banner"}),Object(j.jsxs)(a.ub,{children:[Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Title"}),Object(j.jsx)(a.Q,{value:h,onChange:function(e){return O(e.target.value)},placeholder:"Title"})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Description"}),Object(j.jsx)(a.Q,{value:p,onChange:function(e){return g(e.target.value)},placeholder:"Description"})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Button Text"}),Object(j.jsx)(a.Q,{value:S,onChange:function(e){return k(e.target.value)},placeholder:"Button Text"})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Button Link"}),Object(j.jsx)(a.Q,{value:A,onChange:function(e){return y(e.target.value)},placeholder:"Button Link",name:"buttonLink"})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Banner Image"}),Object(j.jsxs)(a.T,{className:"",children:[Object(j.jsx)(a.ab,{htmlFor:"categoryImage",variant:"custom-file",children:"Choose Image..."}),Object(j.jsx)(a.S,{onChange:function(e){return G(e.target.files[0])},custom:!0,id:"categoryImage",type:"file"})]})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Category"}),Object(j.jsx)("select",{onChange:function(e){B(e.target.value)},value:T,className:"custom-select mb-3","aria-label":"Category Select",children:r.map((function(e,t){return Object(j.jsx)("option",{value:e.id,children:e.title},t)}))})]})]}),Object(j.jsx)(a.f,{onClick:function(){var t=new FormData;t.append("title",h),t.append("description",p),t.append("buttonText",S),t.append("buttonLink",A),t.append("categoryId",T),t.append("image",z),l.a.post("http://markbran.in/apis/admin/service-page/banner",t,{headers:{"auth-token":R}}).then((function(t){console.log(t.data.categories),e.setAlertSuccess("Added Successfully"),F(!1),K()})).catch((function(e){console.log(e)}))},className:"mt-4 btn-outline-success",children:"Add Banner"})]}):Object(j.jsxs)(a.w,{children:[Object(j.jsx)(a.n,{className:"mb-4",children:"All Service Page Banners"}),Object(j.jsxs)("table",{className:"table table-striped",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"#"}),Object(j.jsx)("th",{scope:"col",children:"Title"}),Object(j.jsx)("th",{scope:"col",children:"Description"}),Object(j.jsx)("th",{scope:"col",children:"ButtonLink"}),Object(j.jsx)("th",{scope:"col",children:"ButtonText"}),Object(j.jsx)("th",{scope:"col",children:"CategoryId"}),Object(j.jsx)("th",{scope:"col",children:"Image"})]})}),Object(j.jsx)("tbody",{children:P.map((function(e,t){return Object(j.jsxs)("tr",{children:[" ",Object(j.jsx)("th",{scope:"col",children:t+1}),Object(j.jsx)("th",{scope:"col",children:e.title}),Object(j.jsx)("th",{scope:"col",children:e.description}),Object(j.jsx)("th",{scope:"col",children:e.buttonLink}),Object(j.jsx)("th",{scope:"col",children:e.buttonText}),Object(j.jsx)("th",{scope:"col",children:e.categoryId}),Object(j.jsx)("th",{scope:"col",children:Object(j.jsx)("img",{alt:"banner img",src:"".concat("http://markbran.in/sleepwell/","/").concat(e.image),className:"img-fluid",width:"50px"})}),Object(j.jsxs)("th",{scope:"col",children:[Object(j.jsx)(a.bb,{className:"btn btn-sm btn-outline-warning",children:"Edit"}),Object(j.jsx)("button",{type:"button",onClick:function(){return t=e.id,void Object(i.confirmAlert)({title:"Are you sure?",message:"You want to delete this item?",buttons:[{label:"Yes, Delete it",onClick:function(){return H(t)}},{label:"No"}]});var t},className:"btn btn-sm btn-outline-danger",children:"Delete"})]})]})}))})]})]})]})},b=c(640),u=c.n(b);var h=function(e){var t=Object(s.useState)([]),c=Object(n.a)(t,2),r=c[0],d=c[1],b=Object(s.useState)(""),h=Object(n.a)(b,2),O=h[0],m=h[1],x=Object(s.useState)(""),p=Object(n.a)(x,2),g=p[0],f=p[1],v=Object(s.useState)(""),S=Object(n.a)(v,2),k=S[0],N=S[1],C=Object(s.useState)(""),A=Object(n.a)(C,2),y=A[0],w=A[1],D=Object(s.useState)(""),T=Object(n.a)(D,2),B=T[0],I=T[1],L=Object(s.useState)(""),Q=Object(n.a)(L,2),F=Q[0],E=Q[1],Y=Object(s.useState)(!1),P=Object(n.a)(Y,2),q=P[0],R=P[1],V=Object(s.useState)(!1),J=Object(n.a)(V,2),z=J[0],G=J[1],H=Object(s.useState)([]),K=Object(n.a)(H,2),M=K[0],U=K[1],W=sessionStorage.getItem("token"),X=Object(s.useState)(""),Z=Object(n.a)(X,2),$=Z[0],_=Z[1],ee=function(t){l.a.delete("http://markbran.in/apis/admin/service-action-card/".concat(t),{headers:{"auth-token":W}}).then((function(t){e.setAlertSuccess("Deleted Successfully"),e.setAlertDanger("")})).catch((function(t){e.setAlertSuccess(""),e.setAlertDanger("Request Failed"+t.toString())}))},te=function(){l.a.get("http://markbran.in/apis/admin/service-action-card",{headers:{"auth-token":W}}).then((function(e){U(e.data.actionCards),E(e.data.actionCard[0].id?e.data.actionCard[0].id:0),G(!1)})).catch((function(e){}))};return Object(s.useEffect)((function(){l.a.get("http://markbran.in/apis/admin/service-category",{headers:{"auth-token":W}}).then((function(e){d(e.data.categories)})).catch((function(t){console.log(t),e.setAlertDanger("Something went wrong")})),te()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(a.f,{className:"btn btn-info my-4 mx-2",onClick:function(){return G(!z)},children:z?"View All Action Cards":"Add Action Card"}),z?Object(j.jsxs)(a.w,{className:"m-2 p-2",children:[Object(j.jsx)(a.n,{className:"mb-4",children:"Add Service Page Banner"}),Object(j.jsxs)(a.ub,{children:[Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Title"}),Object(j.jsx)(a.Q,{value:O,onChange:function(e){return m(e.target.value)},placeholder:"Title"})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Description"}),Object(j.jsx)(a.Q,{value:g,onChange:function(e){return f(e.target.value)},placeholder:"Description"})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Button Text"}),Object(j.jsx)(a.Q,{value:k,onChange:function(e){return N(e.target.value)},placeholder:"Button Text"})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Button Link"}),Object(j.jsx)(a.Q,{value:y,onChange:function(e){return w(e.target.value)},placeholder:"Button Link",name:"buttonLink"})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Card Sort Order"}),Object(j.jsx)(a.Q,{value:B,onChange:function(e){return I(e.target.value)},placeholder:"Sort Order",name:"sortOrder"})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Status"}),Object(j.jsx)("div",{children:Object(j.jsx)(u.a,{checked:q,onChange:function(e){return R(e)},placeholder:"Status",variant:"status"})})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Image"}),Object(j.jsxs)(a.T,{className:"",children:[Object(j.jsx)(a.ab,{htmlFor:"categoryImage",variant:"custom-file",children:"Choose Image..."}),Object(j.jsx)(a.S,{onChange:function(e){return _(e.target.files[0])},custom:!0,id:"categoryImage",type:"file"})]})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Category"}),Object(j.jsx)("select",{onChange:function(e){E(e.target.value)},value:F,className:"custom-select mb-3","aria-label":"Category Select",children:r.map((function(e,t){return Object(j.jsx)("option",{value:e.id,children:e.title},t)}))})]})]}),Object(j.jsx)(a.f,{onClick:function(){var t=new FormData;t.append("title",O),t.append("description",g),t.append("buttonText",k),t.append("buttonLink",y),t.append("status",q?1:0),t.append("sortOrder",B),t.append("image",$),l.a.post("http://markbran.in/apis/admin/service-action-card/",t,{headers:{"auth-token":W}}).then((function(t){console.log(t.data.categories),e.setAlertSuccess("Added Successfully"),G(!1),te()})).catch((function(e){console.log(e)}))},className:"mt-4 btn-outline-success",children:"Add Action Card"})]}):Object(j.jsxs)(a.w,{children:[Object(j.jsx)(a.n,{className:"mb-4",children:"All Service Page Action Cards"}),Object(j.jsxs)("table",{className:"table table-striped",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"#"}),Object(j.jsx)("th",{scope:"col",children:"Title"}),Object(j.jsx)("th",{scope:"col",children:"Description"}),Object(j.jsx)("th",{scope:"col",children:"Button Link"}),Object(j.jsx)("th",{scope:"col",children:"Button Text"}),Object(j.jsx)("th",{scope:"col",children:"Sort Order"}),Object(j.jsx)("th",{scope:"col",children:"Status"}),Object(j.jsx)("th",{scope:"col",children:"Image"}),Object(j.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(j.jsx)("tbody",{children:M.map((function(e,t){return Object(j.jsxs)("tr",{children:[" ",Object(j.jsx)("th",{scope:"col",children:t+1}),Object(j.jsx)("th",{scope:"col",children:e.title}),Object(j.jsx)("th",{scope:"col",children:e.description}),Object(j.jsx)("th",{scope:"col",children:e.buttonLink}),Object(j.jsx)("th",{scope:"col",children:e.buttonText}),Object(j.jsx)("th",{scope:"col",children:e.sortOrder}),Object(j.jsx)("th",{scope:"col",children:e.status?"Active":"Inactive"}),Object(j.jsx)("th",{scope:"col",children:Object(j.jsx)("img",{alt:"action card img",src:"".concat("http://markbran.in/sleepwell/","/").concat(e.image),className:"img-fluid",width:"50px"})}),Object(j.jsxs)("th",{scope:"col",children:[Object(j.jsx)(a.bb,{className:"btn btn-sm btn-outline-warning",children:"Edit"}),Object(j.jsx)("button",{type:"button",onClick:function(){return t=e.id,void Object(i.confirmAlert)({title:"Are you sure?",message:"You want to delete this item?",buttons:[{label:"Yes, Delete it",onClick:function(){return ee(t)}},{label:"No"}]});var t},className:"btn btn-sm btn-outline-danger",children:"Delete"})]})]})}))})]})]})]})};var O=function(e){var t=Object(s.useState)([]),c=Object(n.a)(t,2),r=c[0],d=c[1],b=Object(s.useState)(1),h=Object(n.a)(b,2),O=(h[0],h[1],Object(s.useState)("")),m=Object(n.a)(O,2),x=m[0],p=m[1],g=Object(s.useState)(""),f=Object(n.a)(g,2),v=f[0],S=f[1],k=Object(s.useState)(""),N=Object(n.a)(k,2),C=N[0],A=N[1],y=Object(s.useState)(""),w=Object(n.a)(y,2),D=w[0],T=w[1],B=Object(s.useState)(""),I=Object(n.a)(B,2),L=I[0],Q=I[1],F=Object(s.useState)(""),E=Object(n.a)(F,2),Y=E[0],P=E[1],q=Object(s.useState)(!1),R=Object(n.a)(q,2),V=R[0],J=R[1],z=Object(s.useState)(!1),G=Object(n.a)(z,2),H=G[0],K=G[1],M=Object(s.useState)([]),U=Object(n.a)(M,2),W=U[0],X=U[1],Z=sessionStorage.getItem("token"),$=Object(s.useState)(""),_=Object(n.a)($,2),ee=_[0],te=_[1],ce=function(t){l.a.delete("http://markbran.in/apis/admin/service-page/card/".concat(t),{headers:{"auth-token":Z}}).then((function(t){e.setAlertSuccess("Deleted Successfully"),e.setAlertDanger("")})).catch((function(t){e.setAlertSuccess(""),e.setAlertDanger("Request Failed"+t.toString())}))},ne=function(e){l.a.get("http://markbran.in/apis/admin/service-page/card/".concat(e),{headers:{"auth-token":Z}}).then((function(e){X(e.data.cards)})).catch((function(e){console.log(e)}))};return Object(s.useEffect)((function(){l.a.get("http://markbran.in/apis/admin/service-category",{headers:{"auth-token":Z}}).then((function(e){d(e.data.categories),ne(e.data.categories[0].id)})).catch((function(t){console.log(t),e.setAlertDanger("Something went wrong")}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)(a.u,{children:[" ",Object(j.jsx)(a.f,{className:"btn btn-info my-4 mx-2",onClick:function(){return K(!H)},children:H?"View All Cards":"Add Card"})]}),H?Object(j.jsxs)(a.w,{className:"m-2 p-2",children:[Object(j.jsx)(a.n,{className:"mb-4",children:"Add Service Card"}),Object(j.jsxs)(a.ub,{children:[Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Title"}),Object(j.jsx)(a.Q,{value:x,onChange:function(e){return p(e.target.value)},placeholder:"Title"})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Description"}),Object(j.jsx)(a.Q,{value:v,onChange:function(e){return S(e.target.value)},placeholder:"Description"})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Card Text"}),Object(j.jsx)(a.Q,{value:C,onChange:function(e){return A(e.target.value)},placeholder:"Button Text"})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Card Link"}),Object(j.jsx)(a.Q,{value:D,onChange:function(e){return T(e.target.value)},placeholder:"Button Link",name:"buttonLink"})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Card Sort Order"}),Object(j.jsx)(a.Q,{value:Y,onChange:function(e){return P(e.target.value)},placeholder:"Sort Order",name:"sortOrder"})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Status"}),Object(j.jsx)("div",{children:Object(j.jsx)(u.a,{checked:V,onChange:function(e){return J(e)},placeholder:"Status",variant:"status"})})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Card Image"}),Object(j.jsxs)(a.T,{className:"",children:[Object(j.jsx)(a.ab,{htmlFor:"categoryImage",variant:"custom-file",children:"Choose Image..."}),Object(j.jsx)(a.S,{onChange:function(e){return te(e.target.files[0])},custom:!0,id:"categoryImage",type:"file"})]})]}),Object(j.jsxs)(a.u,{md:"6",sm:"12",children:[Object(j.jsx)(o.a,{className:"mt-4",children:"Category"}),Object(j.jsx)("select",{onChange:function(e){Q(e.target.value)},value:L,className:"custom-select mb-3","aria-label":"Category Select",children:r.map((function(e,t){return Object(j.jsx)("option",{value:e.id,children:e.title},t)}))})]})]}),Object(j.jsx)(a.f,{onClick:function(){var t=new FormData;t.append("title",x),t.append("description",v),t.append("buttonText",C),t.append("buttonLink",D),t.append("categoryId",L),t.append("sortOrder",Y),t.append("image",ee),t.append("status",V?1:0),l.a.post("http://markbran.in/apis/admin/service-page/card",t,{headers:{"auth-token":Z}}).then((function(t){console.log(t.data.categories),e.setAlertSuccess("Added Successfully"),K(!1),ne()})).catch((function(e){console.log(e)}))},className:"mt-4 btn-outline-success",children:"Add Banner"})]}):Object(j.jsxs)(a.w,{children:[Object(j.jsx)(a.n,{className:"mb-4",children:"All Service Page Banners"}),Object(j.jsxs)(a.u,{style:{display:"flex"},className:"my-4 mx-2",children:[Object(j.jsx)("h6",{children:"Select Category"}),Object(j.jsx)("select",{className:"custom-select mb-3",onChange:function(e){ne(e.target.value)},children:r.map((function(e,t){return Object(j.jsx)("option",{value:e.id,children:e.title},t)}))})]}),Object(j.jsxs)("table",{className:"table table-striped",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"#"}),Object(j.jsx)("th",{scope:"col",children:"ID"}),Object(j.jsx)("th",{scope:"col",children:"Title"}),Object(j.jsx)("th",{scope:"col",children:"Description"}),Object(j.jsx)("th",{scope:"col",children:"ButtonLink"}),Object(j.jsx)("th",{scope:"col",children:"ButtonText"}),Object(j.jsx)("th",{scope:"col",children:"Sort Order"}),Object(j.jsx)("th",{scope:"col",children:"Status"}),Object(j.jsx)("th",{scope:"col",children:"Image"})]})}),Object(j.jsx)("tbody",{children:W.map((function(e,t){return Object(j.jsxs)("tr",{children:[" ",Object(j.jsx)("th",{scope:"col",children:t+1}),Object(j.jsx)("th",{scope:"col",children:e.id}),Object(j.jsx)("th",{scope:"col",children:e.title}),Object(j.jsx)("th",{scope:"col",children:e.description}),Object(j.jsx)("th",{scope:"col",children:e.buttonLink}),Object(j.jsx)("th",{scope:"col",children:e.buttonText}),Object(j.jsx)("th",{scope:"col",children:e.sortOrder}),Object(j.jsx)("th",{scope:"col",children:e.status?"Active":"Inactive"}),Object(j.jsx)("th",{scope:"col",children:Object(j.jsx)("img",{alt:"banner img",src:"".concat("http://markbran.in/sleepwell/","/").concat(e.image),className:"img-fluid",width:"50px"})}),Object(j.jsxs)("th",{scope:"col",children:[" ",Object(j.jsx)(a.bb,{className:"btn btn-sm btn-outline-warning",children:"Edit"}),Object(j.jsx)("button",{type:"button",onClick:function(){return t=e.id,void Object(i.confirmAlert)({title:"Are you sure?",message:"You want to delete this item?",buttons:[{label:"Yes, Delete it",onClick:function(){return ce(t)}},{label:"No"}]});var t},className:"btn btn-sm btn-outline-danger",children:"Delete"})]})]})}))})]})]})]})};t.default=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),c=t[0],r=t[1],l=Object(s.useState)(!1),i=Object(n.a)(l,2),o=i[0],b=i[1],u=(sessionStorage.getItem("token"),Object(s.useState)(1)),m=Object(n.a)(u,2),x=m[0],p=m[1];return Object(s.useEffect)((function(){}),[]),Object(j.jsx)(a.ub,{children:Object(j.jsx)(a.u,{xl:12,children:Object(j.jsxs)(a.j,{children:[Object(j.jsxs)(a.n,{children:["Service page",Object(j.jsx)(a.bb,{style:{float:"right"},className:"btn btn-success",to:"/service-page/add",children:"Add service page"})]}),Object(j.jsxs)(a.k,{children:[c?Object(j.jsxs)("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(j.jsx)("strong",{children:c})," .",Object(j.jsx)("button",{onClick:function(){return r("")},type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(j.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null,o?Object(j.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(j.jsx)("strong",{children:o}),".",Object(j.jsx)("button",{onClick:function(){return b("")},type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(j.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null,Object(j.jsxs)("ul",{className:"nav",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("button",{onClick:function(){return p(1)},className:"nav-link active btn btn-primary mx-2",children:"Banner"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("button",{onClick:function(){return p(2)},className:"nav-link btn btn-primary mx-2",children:"Cards"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("button",{onClick:function(){return p(3)},className:"nav-link btn btn-primary mx-2",children:"Action Cards"})})]}),1===x&&Object(j.jsx)(d,{setAlertSuccess:r,setAlertDanger:b}),2===x&&Object(j.jsx)(O,{setAlertSuccess:r,setAlertDanger:b}),3===x&&Object(j.jsx)(h,{setAlertSuccess:r,setAlertDanger:b})]})]})})})}}}]);
//# sourceMappingURL=199.2cdfe012.chunk.js.map