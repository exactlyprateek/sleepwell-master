(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[16,20,26,27,28,29],{1346:function(t,e,n){"use strict";n.r(e);var o=n(639),i=n(1),r=n(637),a=n(640),s=n.n(a),c=n(642),u=n.n(c),l=(n(644),n(645),n(646),n(834),n(13));e.default=function(){var t=Object(i.useState)([]),e=Object(o.a)(t,2),n=(e[0],e[1]),a=Object(i.useState)(!1),c=Object(o.a)(a,2),d=(c[0],c[1],Object(i.useState)(!1)),h=Object(o.a)(d,2),f=(h[0],h[1],sessionStorage.getItem("token")),m=Object(i.useState)(""),p=Object(o.a)(m,2),y=p[0],b=p[1],v=Object(i.useState)(""),g=Object(o.a)(v,2),j=g[0],O=g[1],k=Object(i.useState)(""),M=Object(o.a)(k,2),w=M[0],C=M[1],T=Object(i.useState)(""),D=Object(o.a)(T,2),x=D[0],S=D[1],N=Object(i.useState)(!1),E=Object(o.a)(N,2),H=E[0],I=E[1],U=function(){u.a.get("http://markbran.in/apis/admin/innovation",{headers:{"auth-token":f}}).then((function(t){n(t.data.innovation),b(t.data.innovation.buttonLink),O(t.data.innovation.buttonText),C(t.data.innovation.title),S(t.data.innovation.description),I(!!t.data.innovation.status)})).catch((function(t){console.log(t)}))};return Object(i.useEffect)((function(){U()}),[]),Object(l.jsx)(r.ub,{children:Object(l.jsx)(r.u,{xl:12,children:Object(l.jsxs)(r.j,{children:[Object(l.jsx)(r.n,{children:"Innovation"}),Object(l.jsxs)(r.k,{children:[Object(l.jsx)(r.ub,{className:"my-4",children:Object(l.jsxs)(r.u,{children:[Object(l.jsx)(r.ab,{children:"Title"}),Object(l.jsx)(r.Q,{value:w,onChange:function(t){return C(t.target.value)},placeholder:"Innovation Title"})]})}),Object(l.jsx)(r.ub,{className:"my-4",children:Object(l.jsxs)(r.u,{children:[Object(l.jsx)(r.ab,{children:"Description"}),Object(l.jsx)(r.Q,{value:x,onChange:function(t){return S(t.target.value)},placeholder:"Innovation Description"})]})}),Object(l.jsx)(r.ub,{className:"my-4",children:Object(l.jsxs)(r.u,{children:[Object(l.jsx)(r.ab,{children:"Button Link"}),Object(l.jsx)(r.Q,{value:y,onChange:function(t){return b(t.target.value)},placeholder:"Button Link"})]})}),Object(l.jsx)(r.ub,{className:"my-4",children:Object(l.jsxs)(r.u,{children:[Object(l.jsx)(r.ab,{children:"Button Text"}),Object(l.jsx)(r.Q,{value:j,onChange:function(t){return O(t.target.value)},placeholder:"Button Text"})]})})]}),Object(l.jsx)(r.ub,{children:Object(l.jsx)(r.u,{className:"ml-4",xl:"6",children:Object(l.jsxs)(r.K,{children:[Object(l.jsx)(r.ab,{htmlFor:"is_active",children:"Status"}),Object(l.jsx)(r.T,{children:Object(l.jsx)(s.a,{onChange:function(){return I(!H)},checked:H})})]})})}),Object(l.jsx)(r.f,{className:"m-4 btn btn-success",style:{maxWidth:"10rem"},onClick:function(){var t=new FormData;t.append("buttonLink",y),t.append("buttonText",j),t.append("title",w),t.append("description",x),t.append("id",1),t.append("status",H?1:0),u.a.post("http://markbran.in/apis/admin/innovation",t,{headers:{"auth-token":f}}).then((function(t){console.log(t),U()})).catch((function(t){console.log(t)}))},children:"Save Innovation"})]})})})}},640:function(t,e,n){t.exports=n(641)},641:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var r=o.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},o.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=o.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},o.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function s(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function c(t,e,n,o,i){return function(t,e,n,o,i){var r=(t-n)/(e-n);if(0===r)return o;if(1===r)return i;for(var a="#",s=1;s<6;s+=2){var c=parseInt(o.substr(s,2),16),u=parseInt(i.substr(s,2),16),l=Math.round((1-r)*c+r*u).toString(16);1===l.length&&(l="0"+l),a+=l}return a}(t,e,n,s(o),s(i))}var u=function(t){function e(e){t.call(this,e);var n=e.height,o=e.width,i=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(o-n,o-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:i?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.R,o=e.h,i=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var r=Math.min(this.i,Math.max(this.o,i));r!==o&&this.setState({h:r})},e.prototype.U=function(t){var e=this.state,n=e.h,o=e.N,i=e.B,r=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var s=Date.now()-i;(!o||s<250||r&&n<=a||!r&&n>=a)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,r=t.className,a=t.offColor,s=t.onColor,u=t.offHandleColor,l=t.onHandleColor,d=t.checkedIcon,h=t.uncheckedIcon,f=t.checkedHandleIcon,m=t.uncheckedHandleIcon,p=t.boxShadow,y=t.activeBoxShadow,b=t.height,v=t.width,g=t.borderRadius,j=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(n[o]=t[o]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),O=this.state,k=O.h,M=O.N,w=O.j,C={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:b/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},T={height:b,width:v,margin:Math.max(0,(this.t-b)/2),position:"relative",background:c(k,this.i,this.o,a,s),borderRadius:"number"==typeof g?g:b/2,cursor:n?"default":"pointer",WebkitTransition:M?null:"background 0.25s",MozTransition:M?null:"background 0.25s",transition:M?null:"background 0.25s"},D={height:b,width:Math.min(1.5*b,v-(this.t+b)/2+1),position:"relative",opacity:(k-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:M?null:"opacity 0.25s",MozTransition:M?null:"opacity 0.25s",transition:M?null:"opacity 0.25s"},x={height:b,width:Math.min(1.5*b,v-(this.t+b)/2+1),position:"absolute",opacity:1-(k-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:M?null:"opacity 0.25s",MozTransition:M?null:"opacity 0.25s",transition:M?null:"opacity 0.25s"},S={height:this.t,width:this.t,background:c(k,this.i,this.o,u,l),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof g?g-1:"50%",position:"absolute",transform:"translateX("+k+"px)",top:Math.max(0,(b-this.t)/2),outline:0,boxShadow:w?y:p,border:0,WebkitTransition:M?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:M?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:M?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},N={height:this.t,width:this.t,opacity:Math.max(2*(1-(k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:M?null:"opacity 0.25s",MozTransition:M?null:"opacity 0.25s",transition:M?null:"opacity 0.25s"},E={height:this.t,width:this.t,opacity:Math.max(2*((k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:M?null:"opacity 0.25s",MozTransition:M?null:"opacity 0.25s",transition:M?null:"opacity 0.25s"};return o.createElement("div",{className:r,style:C},o.createElement("div",{className:"react-switch-bg",style:T,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},d&&o.createElement("div",{style:D},d),h&&o.createElement("div",{style:x},h)),o.createElement("div",{className:"react-switch-handle",style:S,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.M,onTouchEnd:n?null:this.m,onTouchCancel:n?null:this.O},m&&o.createElement("div",{style:N},m),f&&o.createElement("div",{style:E},f)),o.createElement("input",i({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},j,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(o.Component);u.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:r,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=u},643:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(638),i=function(t,e){var n={};for(var i in t){var r=Object(o.c)(e,i);Object(o.d)(n,i,Object.assign(t[i],{ref:r&&r.ref}))}return n},r=function(t,e,n){return void 0===e&&(e={}),void 0===n&&(n={}),function(r,a,s){try{return Promise.resolve(function(o,i){try{var s=(e.context,Promise.resolve(t["sync"===n.mode?"validateSync":"validate"](r,Object.assign({abortEarly:!1},e,{context:a}))).then((function(t){return{values:t,errors:{}}})))}catch(o){return i(o)}return s&&s.then?s.then(void 0,i):s}(0,(function(t){return{values:{},errors:i((e=t,n="all"===s.criteriaMode,e.inner.reduce((function(t,e){if(t[e.path]||(t[e.path]={message:e.message,type:e.type}),n){var i=t[e.path].types,r=i&&i[e.type];t[e.path]=Object(o.b)(e.path,n,t,e.type,r?[].concat(r,e.message):e.message)}return t}),{})),s.fields)};var e,n})))}catch(c){return Promise.reject(c)}}}},644:function(t,e,n){"use strict";var o;function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(r){var a=arguments,s=function(){var t=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,e=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,n=/[^-+\dA-Z]/g;return function(o,i,r,f){if(1!==a.length||"string"!==h(o)||/\d/.test(o)||(i=o,o=void 0),(o=o||0===o?o:new Date)instanceof Date||(o=new Date(o)),isNaN(o))throw TypeError("Invalid date");var m=(i=String(s.masks[i]||i||s.masks.default)).slice(0,4);"UTC:"!==m&&"GMT:"!==m||(i=i.slice(4),r=!0,"GMT:"===m&&(f=!0));var p=function(){return r?"getUTC":"get"},y=function(){return o[p()+"Date"]()},b=function(){return o[p()+"Day"]()},v=function(){return o[p()+"Month"]()},g=function(){return o[p()+"FullYear"]()},j=function(){return o[p()+"Hours"]()},O=function(){return o[p()+"Minutes"]()},k=function(){return o[p()+"Seconds"]()},M=function(){return o[p()+"Milliseconds"]()},w=function(){return r?0:o.getTimezoneOffset()},C=function(){return l(o)},T={d:function(){return y()},dd:function(){return c(y())},ddd:function(){return s.i18n.dayNames[b()]},DDD:function(){return u({y:g(),m:v(),d:y(),_:p(),dayName:s.i18n.dayNames[b()],short:!0})},dddd:function(){return s.i18n.dayNames[b()+7]},DDDD:function(){return u({y:g(),m:v(),d:y(),_:p(),dayName:s.i18n.dayNames[b()+7]})},m:function(){return v()+1},mm:function(){return c(v()+1)},mmm:function(){return s.i18n.monthNames[v()]},mmmm:function(){return s.i18n.monthNames[v()+12]},yy:function(){return String(g()).slice(2)},yyyy:function(){return c(g(),4)},h:function(){return j()%12||12},hh:function(){return c(j()%12||12)},H:function(){return j()},HH:function(){return c(j())},M:function(){return O()},MM:function(){return c(O())},s:function(){return k()},ss:function(){return c(k())},l:function(){return c(M(),3)},L:function(){return c(Math.floor(M()/10))},t:function(){return j()<12?s.i18n.timeNames[0]:s.i18n.timeNames[1]},tt:function(){return j()<12?s.i18n.timeNames[2]:s.i18n.timeNames[3]},T:function(){return j()<12?s.i18n.timeNames[4]:s.i18n.timeNames[5]},TT:function(){return j()<12?s.i18n.timeNames[6]:s.i18n.timeNames[7]},Z:function(){return f?"GMT":r?"UTC":(String(o).match(e)||[""]).pop().replace(n,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(w()>0?"-":"+")+c(100*Math.floor(Math.abs(w())/60)+Math.abs(w())%60,4)},p:function(){return(w()>0?"-":"+")+c(Math.floor(Math.abs(w())/60),2)+":"+c(Math.floor(Math.abs(w())%60),2)},S:function(){return["th","st","nd","rd"][y()%10>3?0:(y()%100-y()%10!=10)*y()%10]},W:function(){return C()},WW:function(){return c(C())},N:function(){return d(o)}};return i.replace(t,(function(t){return t in T?T[t]():t.slice(1,t.length-1)}))}}();s.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},s.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var c=function(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t},u=function(t){var e=t.y,n=t.m,o=t.d,i=t._,r=t.dayName,a=t.short,s=void 0!==a&&a,c=new Date,u=new Date;u.setDate(u[i+"Date"]()-1);var l=new Date;l.setDate(l[i+"Date"]()+1);return c[i+"FullYear"]()===e&&c[i+"Month"]()===n&&c[i+"Date"]()===o?s?"Tdy":"Today":u[i+"FullYear"]()===e&&u[i+"Month"]()===n&&u[i+"Date"]()===o?s?"Ysd":"Yesterday":l[i+"FullYear"]()===e&&l[i+"Month"]()===n&&l[i+"Date"]()===o?s?"Tmw":"Tomorrow":r},l=function(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var o=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-o);var i=(e-n)/6048e5;return 1+Math.floor(i)},d=function(t){var e=t.getDay();return 0===e&&(e=7),e},h=function(t){return null===t?"null":void 0===t?"undefined":"object"!==i(t)?i(t):Array.isArray(t)?"array":{}.toString.call(t).slice(8,-1).toLowerCase()};void 0===(o=function(){return s}.call(e,n,e,t))||(t.exports=o)}(void 0)},645:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i,r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();e.confirmAlert=function(t){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var t="http://www.w3.org/2000/svg",e=document.createElementNS(t,"feGaussianBlur");e.setAttribute("stdDeviation","0.3");var n=document.createElementNS(t,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(e);var o=document.createElementNS(t,"svg");o.setAttribute("id","react-confirm-alert-firm-svg"),o.setAttribute("class","react-confirm-alert-svg"),o.appendChild(n),document.body.appendChild(o)}(),function(t){var e=document.getElementById("react-confirm-alert");e||(document.body.children[0].classList.add("react-confirm-alert-blur"),(e=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(e)),(0,u.render)(s.default.createElement(f,t),e)}(t)};var a=n(1),s=l(a),c=l(n(58)),u=n(86);function l(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}var f=(i=o=function(t){function e(){var t,n,o;d(this,e);for(var i=arguments.length,r=Array(i),a=0;a<i;a++)r[a]=arguments[a];return n=o=h(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(r))),o.handleClickButton=function(t){t.onClick&&t.onClick(),o.close()},o.handleClickOverlay=function(t){var e=o.props,n=e.closeOnClickOutside,i=e.onClickOutside,r=t.target===o.overlay;n&&r&&(i(),o.close())},o.close=function(){var t=o.props.afterClose;y(),p(),m(t)},o.keyboardClose=function(t){var e=o.props,n=e.closeOnEscape,i=e.onKeypressEscape,r=27===t.keyCode;n&&r&&(i(t),o.close())},o.componentDidMount=function(){document.addEventListener("keydown",o.keyboardClose,!1)},o.componentWillUnmount=function(){document.removeEventListener("keydown",o.keyboardClose,!1),o.props.willUnmount()},o.renderCustomUI=function(){var t=o.props,e=t.title,n=t.message,i=t.buttons;return(0,t.customUI)({title:e,message:n,buttons:i,onClose:o.close})},h(o,n)}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.title,o=e.message,i=e.buttons,r=e.childrenElement,a=e.customUI,c=e.overlayClassName;return s.default.createElement("div",{className:"react-confirm-alert-overlay "+c,ref:function(e){return t.overlay=e},onClick:this.handleClickOverlay},s.default.createElement("div",{className:"react-confirm-alert"},a?this.renderCustomUI():s.default.createElement("div",{className:"react-confirm-alert-body"},n&&s.default.createElement("h1",null,n),o,r(),s.default.createElement("div",{className:"react-confirm-alert-button-group"},i.map((function(e,n){return s.default.createElement("button",{key:n,onClick:function(){return t.handleClickButton(e)},className:e.className},e.label)}))))))}}]),e}(a.Component),o.propTypes={title:c.default.string,message:c.default.string,buttons:c.default.array.isRequired,childrenElement:c.default.func,customUI:c.default.func,closeOnClickOutside:c.default.bool,closeOnEscape:c.default.bool,willUnmount:c.default.func,afterClose:c.default.func,onClickOutside:c.default.func,onKeypressEscape:c.default.func,overlayClassName:c.default.string},o.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},i);function m(t){var e=document.getElementById("react-confirm-alert-firm-svg");e&&e.parentNode.removeChild(e),document.body.children[0].classList.remove("react-confirm-alert-blur"),t()}function p(){var t=document.getElementById("react-confirm-alert");t&&((0,u.unmountComponentAtNode)(t),t.parentNode.removeChild(t))}function y(){document.body.classList.remove("react-confirm-alert-body-element")}e.default=f},646:function(t,e,n){},660:function(t,e,n){"use strict";var o=n(1),i=n(637),r=n(676),a=n(677),s=n.n(a),c=n(13);e.a=function(t,e){Object(o.useRef)();return Object(c.jsx)("div",{children:Object(c.jsx)(i.ub,{children:Object(c.jsx)(i.u,{xs:"12",sm:"12",children:Object(c.jsx)(r.CKEditor,{editor:s.a,data:t.editorValue?t.editorValue:"",onChange:function(e,n){n.getData()&&t.onEditorValue(n.getData())}})})})})}},834:function(t,e,n){"use strict";n(25),n(639),n(1),n(637),n(643);var o=n(651);n(638),n(18),n(660),n(13),n(642).default,o.b().shape({title:o.c().required()})}}]);
//# sourceMappingURL=16.f824d8f3.chunk.js.map