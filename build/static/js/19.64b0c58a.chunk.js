(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[19],{1423:function(e,t,n){"use strict";n.r(t);var r=n(639),a=n(1),c=n(637),o=n(642),i=n.n(o),s=n(645),l=n.n(s),u=n(646),d=(n(647),n(25)),m=n(643),f=n(653),b=n(638),h=n(18),y=n(661),j=n(13),p=(n(642).default,f.b().shape({title:f.c().required()})),O=function(){var e=Object(b.e)({mode:"all",resolver:Object(m.a)(p)}),t=e.control,n=e.handleSubmit,o=e.formState.errors,i=(Object(h.g)(),Object(a.useState)(null)),s=Object(r.a)(i,2),l=s[0],u=s[1],f=Object(a.useState)(!1),O=Object(r.a)(f,2),g=O[0],v=O[1],x=Object(a.useState)(""),N=Object(r.a)(x,2),C=N[0],M=N[1];sessionStorage.getItem("token");return Object(j.jsx)("div",{children:Object(j.jsx)(c.ub,{children:Object(j.jsx)(c.u,{xs:"12",sm:"12",children:Object(j.jsx)(c.j,{children:Object(j.jsx)(c.k,{children:Object(j.jsxs)(c.J,{onSubmit:n((function(e){var t=new FormData;t.append("title",e.title),t.append("description",C),u(null),v(!0)})),children:[Object(j.jsx)("br",{}),l&&Object(j.jsx)("p",{className:"text-danger",children:l}),Object(j.jsx)(c.ub,{children:Object(j.jsx)(c.u,{xs:"6",children:Object(j.jsxs)(c.K,{children:[Object(j.jsx)(c.ab,{htmlFor:"category",children:"Title"}),Object(j.jsx)(c.T,{className:"mb-3",children:Object(j.jsx)(b.a,{name:"title",control:t,defaultValue:"",rules:{required:{value:!0,message:"Section title is required"}},render:function(e){var t=e.field;return Object(j.jsx)(c.Q,Object(d.a)(Object(d.a)({},t),{},{type:"text",placeholder:"Section title",autoComplete:"Section title"}))}})}),Object(j.jsx)(c.L,{className:"help-block text-danger",color:"red",children:o.title&&o.title.message})]})})}),Object(j.jsx)(c.ub,{children:Object(j.jsx)(c.u,{xl:"12",children:Object(j.jsxs)(c.K,{children:[Object(j.jsx)(c.ab,{htmlFor:"category",children:"Description"}),Object(j.jsx)(y.a,{onEditorValue:function(e){M(e)}}),Object(j.jsx)(c.L,{className:"help-block text-danger",color:"red",children:o.description&&o.description.message})]})})}),Object(j.jsx)(c.ub,{children:Object(j.jsx)(c.u,{xs:"8",children:Object(j.jsx)("button",{className:"btn btn-success",disabled:!!g,type:"submit",children:g?"Loading...":"Save"})})})]})})})})})})};t.default=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)(!1),d=Object(r.a)(s,2),m=d[0],f=d[1],b=Object(a.useState)(!1),h=Object(r.a)(b,2),y=h[0],p=h[1],g=sessionStorage.getItem("token"),v=function(e){i.a.delete("http://markbran.in/apis/admin/category/".concat(e),{headers:{"auth-token":g}}).then((function(e){f(!0),p(!1),x(),console.log(e)})).catch((function(e){f(!1),p(!0),console.log(e)}))},x=function(){i.a.get("http://markbran.in/apis/admin/category",{headers:{"auth-token":g}}).then((function(e){o(e.data.categories)})).catch((function(e){console.log(e)}))};return Object(a.useEffect)((function(){x()}),[]),Object(j.jsx)(c.ub,{children:Object(j.jsx)(c.u,{xl:12,children:Object(j.jsxs)(c.j,{children:[Object(j.jsx)(c.n,{children:"What Goes Inside"}),Object(j.jsx)(O,{}),Object(j.jsx)(c.n,{children:Object(j.jsx)(c.bb,{style:{float:"right"},className:"btn btn-success",to:"/what-goes-inside/add",children:"Add"})}),Object(j.jsxs)(c.k,{children:[m?Object(j.jsxs)("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(j.jsx)("strong",{children:"Deleted"})," Your item has been deleted successfully.",Object(j.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(j.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null,y?Object(j.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(j.jsx)("strong",{children:"Alert"})," Something went wrong try again later !.",Object(j.jsx)("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",children:Object(j.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null,Object(j.jsxs)("table",{className:"table table-hover",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"#"}),Object(j.jsx)("th",{scope:"col",children:"Title"}),Object(j.jsx)("th",{scope:"col",children:"Name"}),Object(j.jsx)("th",{scope:"col",children:"Create at"}),Object(j.jsx)("th",{scope:"col",children:"Action"})]})}),Object(j.jsx)("tbody",{children:n.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"row",children:t+1}),Object(j.jsx)("td",{children:e.title}),Object(j.jsx)("td",{children:"Lorem ipsum dolor sit amet."}),Object(j.jsx)("td",{children:l()(e.createdAt,"mmmm dS, yyyy")}),Object(j.jsxs)("td",{children:[Object(j.jsx)(c.bb,{className:"btn btn-sm btn-outline-warning",to:"/category-management/edit-category/".concat(e.id),children:"Edit"}),Object(j.jsx)("button",{onClick:function(){return t=e.id,void Object(u.confirmAlert)({title:"Are you sure?",message:"You want to delete this item?",buttons:[{label:"Yes, Delete it",onClick:function(){return v(t)}},{label:"No"}]});var t},type:"button",className:"btn btn-sm btn-outline-danger",children:"Delete"})]})]},e._id)}))})]})]})]})})})}},643:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(638),a=function(e,t){var n={};for(var a in e){var c=Object(r.c)(t,a);Object(r.d)(n,a,Object.assign(e[a],{ref:c&&c.ref}))}return n},c=function(e,t,n){return void 0===t&&(t={}),void 0===n&&(n={}),function(c,o,i){try{return Promise.resolve(function(r,a){try{var i=(t.context,Promise.resolve(e["sync"===n.mode?"validateSync":"validate"](c,Object.assign({abortEarly:!1},t,{context:o}))).then((function(e){return{values:e,errors:{}}})))}catch(r){return a(r)}return i&&i.then?i.then(void 0,a):i}(0,(function(e){return{values:{},errors:a((t=e,n="all"===i.criteriaMode,t.inner.reduce((function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),n){var a=e[t.path].types,c=a&&a[t.type];e[t.path]=Object(r.b)(t.path,n,e,t.type,c?[].concat(c,t.message):t.message)}return e}),{})),i.fields)};var t,n})))}catch(s){return Promise.reject(s)}}}},645:function(e,t,n){"use strict";var r;function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(c){var o=arguments,i=function(){var e=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,t=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,n=/[^-+\dA-Z]/g;return function(r,a,c,f){if(1!==o.length||"string"!==m(r)||/\d/.test(r)||(a=r,r=void 0),(r=r||0===r?r:new Date)instanceof Date||(r=new Date(r)),isNaN(r))throw TypeError("Invalid date");var b=(a=String(i.masks[a]||a||i.masks.default)).slice(0,4);"UTC:"!==b&&"GMT:"!==b||(a=a.slice(4),c=!0,"GMT:"===b&&(f=!0));var h=function(){return c?"getUTC":"get"},y=function(){return r[h()+"Date"]()},j=function(){return r[h()+"Day"]()},p=function(){return r[h()+"Month"]()},O=function(){return r[h()+"FullYear"]()},g=function(){return r[h()+"Hours"]()},v=function(){return r[h()+"Minutes"]()},x=function(){return r[h()+"Seconds"]()},N=function(){return r[h()+"Milliseconds"]()},C=function(){return c?0:r.getTimezoneOffset()},M=function(){return u(r)},D={d:function(){return y()},dd:function(){return s(y())},ddd:function(){return i.i18n.dayNames[j()]},DDD:function(){return l({y:O(),m:p(),d:y(),_:h(),dayName:i.i18n.dayNames[j()],short:!0})},dddd:function(){return i.i18n.dayNames[j()+7]},DDDD:function(){return l({y:O(),m:p(),d:y(),_:h(),dayName:i.i18n.dayNames[j()+7]})},m:function(){return p()+1},mm:function(){return s(p()+1)},mmm:function(){return i.i18n.monthNames[p()]},mmmm:function(){return i.i18n.monthNames[p()+12]},yy:function(){return String(O()).slice(2)},yyyy:function(){return s(O(),4)},h:function(){return g()%12||12},hh:function(){return s(g()%12||12)},H:function(){return g()},HH:function(){return s(g())},M:function(){return v()},MM:function(){return s(v())},s:function(){return x()},ss:function(){return s(x())},l:function(){return s(N(),3)},L:function(){return s(Math.floor(N()/10))},t:function(){return g()<12?i.i18n.timeNames[0]:i.i18n.timeNames[1]},tt:function(){return g()<12?i.i18n.timeNames[2]:i.i18n.timeNames[3]},T:function(){return g()<12?i.i18n.timeNames[4]:i.i18n.timeNames[5]},TT:function(){return g()<12?i.i18n.timeNames[6]:i.i18n.timeNames[7]},Z:function(){return f?"GMT":c?"UTC":(String(r).match(t)||[""]).pop().replace(n,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(C()>0?"-":"+")+s(100*Math.floor(Math.abs(C())/60)+Math.abs(C())%60,4)},p:function(){return(C()>0?"-":"+")+s(Math.floor(Math.abs(C())/60),2)+":"+s(Math.floor(Math.abs(C())%60),2)},S:function(){return["th","st","nd","rd"][y()%10>3?0:(y()%100-y()%10!=10)*y()%10]},W:function(){return M()},WW:function(){return s(M())},N:function(){return d(r)}};return a.replace(e,(function(e){return e in D?D[e]():e.slice(1,e.length-1)}))}}();i.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},i.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var s=function(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e},l=function(e){var t=e.y,n=e.m,r=e.d,a=e._,c=e.dayName,o=e.short,i=void 0!==o&&o,s=new Date,l=new Date;l.setDate(l[a+"Date"]()-1);var u=new Date;u.setDate(u[a+"Date"]()+1);return s[a+"FullYear"]()===t&&s[a+"Month"]()===n&&s[a+"Date"]()===r?i?"Tdy":"Today":l[a+"FullYear"]()===t&&l[a+"Month"]()===n&&l[a+"Date"]()===r?i?"Ysd":"Yesterday":u[a+"FullYear"]()===t&&u[a+"Month"]()===n&&u[a+"Date"]()===r?i?"Tmw":"Tomorrow":c},u=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-r);var a=(t-n)/6048e5;return 1+Math.floor(a)},d=function(e){var t=e.getDay();return 0===t&&(t=7),t},m=function(e){return null===e?"null":void 0===e?"undefined":"object"!==a(e)?a(e):Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}(void 0)},646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.confirmAlert=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var n=document.createElementNS(e,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(t);var r=document.createElementNS(e,"svg");r.setAttribute("id","react-confirm-alert-firm-svg"),r.setAttribute("class","react-confirm-alert-svg"),r.appendChild(n),document.body.appendChild(r)}(),function(e){var t=document.getElementById("react-confirm-alert");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t)),(0,l.render)(i.default.createElement(f,e),t)}(e)};var o=n(1),i=u(o),s=u(n(58)),l=n(86);function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=(a=r=function(e){function t(){var e,n,r;d(this,t);for(var a=arguments.length,c=Array(a),o=0;o<a;o++)c[o]=arguments[o];return n=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),r.handleClickButton=function(e){e.onClick&&e.onClick(),r.close()},r.handleClickOverlay=function(e){var t=r.props,n=t.closeOnClickOutside,a=t.onClickOutside,c=e.target===r.overlay;n&&c&&(a(),r.close())},r.close=function(){var e=r.props.afterClose;y(),h(),b(e)},r.keyboardClose=function(e){var t=r.props,n=t.closeOnEscape,a=t.onKeypressEscape,c=27===e.keyCode;n&&c&&(a(e),r.close())},r.componentDidMount=function(){document.addEventListener("keydown",r.keyboardClose,!1)},r.componentWillUnmount=function(){document.removeEventListener("keydown",r.keyboardClose,!1),r.props.willUnmount()},r.renderCustomUI=function(){var e=r.props,t=e.title,n=e.message,a=e.buttons;return(0,e.customUI)({title:t,message:n,buttons:a,onClose:r.close})},m(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),c(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.message,a=t.buttons,c=t.childrenElement,o=t.customUI,s=t.overlayClassName;return i.default.createElement("div",{className:"react-confirm-alert-overlay "+s,ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},i.default.createElement("div",{className:"react-confirm-alert"},o?this.renderCustomUI():i.default.createElement("div",{className:"react-confirm-alert-body"},n&&i.default.createElement("h1",null,n),r,c(),i.default.createElement("div",{className:"react-confirm-alert-button-group"},a.map((function(t,n){return i.default.createElement("button",{key:n,onClick:function(){return e.handleClickButton(t)},className:t.className},t.label)}))))))}}]),t}(o.Component),r.propTypes={title:s.default.string,message:s.default.string,buttons:s.default.array.isRequired,childrenElement:s.default.func,customUI:s.default.func,closeOnClickOutside:s.default.bool,closeOnEscape:s.default.bool,willUnmount:s.default.func,afterClose:s.default.func,onClickOutside:s.default.func,onKeypressEscape:s.default.func,overlayClassName:s.default.string},r.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},a);function b(e){var t=document.getElementById("react-confirm-alert-firm-svg");t&&t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}function h(){var e=document.getElementById("react-confirm-alert");e&&((0,l.unmountComponentAtNode)(e),e.parentNode.removeChild(e))}function y(){document.body.classList.remove("react-confirm-alert-body-element")}t.default=f},647:function(e,t,n){},661:function(e,t,n){"use strict";var r=n(1),a=n(637),c=n(687),o=n(688),i=n.n(o),s=n(13);t.a=function(e,t){Object(r.useRef)();return Object(s.jsx)("div",{children:Object(s.jsx)(a.ub,{children:Object(s.jsx)(a.u,{xs:"12",sm:"12",children:Object(s.jsx)(c.CKEditor,{editor:i.a,data:e.editorValue?e.editorValue:"",onChange:function(t,n){n.getData()&&e.onEditorValue(n.getData())}})})})})}}}]);
//# sourceMappingURL=19.64b0c58a.chunk.js.map