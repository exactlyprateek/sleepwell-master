(this.webpackJsonpsleepwell=this.webpackJsonpsleepwell||[]).push([[28,26,27,29],{640:function(t,e,n){t.exports=n(641)},641:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var r=o.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},o.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),a=o.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},o.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function s(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function u(t,e,n,o,i){return function(t,e,n,o,i){var r=(t-n)/(e-n);if(0===r)return o;if(1===r)return i;for(var a="#",s=1;s<6;s+=2){var u=parseInt(o.substr(s,2),16),l=parseInt(i.substr(s,2),16),c=Math.round((1-r)*u+r*l).toString(16);1===c.length&&(c="0"+c),a+=c}return a}(t,e,n,s(o),s(i))}var l=function(t){function e(e){t.call(this,e);var n=e.height,o=e.width,i=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(o-n,o-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:i?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.R,o=e.h,i=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var r=Math.min(this.i,Math.max(this.o,i));r!==o&&this.setState({h:r})},e.prototype.U=function(t){var e=this.state,n=e.h,o=e.N,i=e.B,r=this.props.checked,a=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var s=Date.now()-i;(!o||s<250||r&&n<=a||!r&&n>=a)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,r=t.className,a=t.offColor,s=t.onColor,l=t.offHandleColor,c=t.onHandleColor,d=t.checkedIcon,h=t.uncheckedIcon,f=t.checkedHandleIcon,m=t.uncheckedHandleIcon,p=t.boxShadow,y=t.activeBoxShadow,b=t.height,v=t.width,g=t.borderRadius,M=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&-1===e.indexOf(o)&&(n[o]=t[o]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),w=this.state,k=w.h,C=w.N,D=w.j,T={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:b/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},E={height:b,width:v,margin:Math.max(0,(this.t-b)/2),position:"relative",background:u(k,this.i,this.o,a,s),borderRadius:"number"==typeof g?g:b/2,cursor:n?"default":"pointer",WebkitTransition:C?null:"background 0.25s",MozTransition:C?null:"background 0.25s",transition:C?null:"background 0.25s"},S={height:b,width:Math.min(1.5*b,v-(this.t+b)/2+1),position:"relative",opacity:(k-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"},N={height:b,width:Math.min(1.5*b,v-(this.t+b)/2+1),position:"absolute",opacity:1-(k-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"},O={height:this.t,width:this.t,background:u(k,this.i,this.o,l,c),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof g?g-1:"50%",position:"absolute",transform:"translateX("+k+"px)",top:Math.max(0,(b-this.t)/2),outline:0,boxShadow:D?y:p,border:0,WebkitTransition:C?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:C?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:C?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},H={height:this.t,width:this.t,opacity:Math.max(2*(1-(k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"},x={height:this.t,width:this.t,opacity:Math.max(2*((k-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"};return o.createElement("div",{className:r,style:T},o.createElement("div",{className:"react-switch-bg",style:E,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},d&&o.createElement("div",{style:S},d),h&&o.createElement("div",{style:N},h)),o.createElement("div",{className:"react-switch-handle",style:O,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.M,onTouchEnd:n?null:this.m,onTouchCancel:n?null:this.O},m&&o.createElement("div",{style:H},m),f&&o.createElement("div",{style:x},f)),o.createElement("input",i({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},M,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(o.Component);l.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:r,checkedIcon:a,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=l},645:function(t,e,n){"use strict";var o;function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(r){var a=arguments,s=function(){var t=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,e=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,n=/[^-+\dA-Z]/g;return function(o,i,r,f){if(1!==a.length||"string"!==h(o)||/\d/.test(o)||(i=o,o=void 0),(o=o||0===o?o:new Date)instanceof Date||(o=new Date(o)),isNaN(o))throw TypeError("Invalid date");var m=(i=String(s.masks[i]||i||s.masks.default)).slice(0,4);"UTC:"!==m&&"GMT:"!==m||(i=i.slice(4),r=!0,"GMT:"===m&&(f=!0));var p=function(){return r?"getUTC":"get"},y=function(){return o[p()+"Date"]()},b=function(){return o[p()+"Day"]()},v=function(){return o[p()+"Month"]()},g=function(){return o[p()+"FullYear"]()},M=function(){return o[p()+"Hours"]()},w=function(){return o[p()+"Minutes"]()},k=function(){return o[p()+"Seconds"]()},C=function(){return o[p()+"Milliseconds"]()},D=function(){return r?0:o.getTimezoneOffset()},T=function(){return c(o)},E={d:function(){return y()},dd:function(){return u(y())},ddd:function(){return s.i18n.dayNames[b()]},DDD:function(){return l({y:g(),m:v(),d:y(),_:p(),dayName:s.i18n.dayNames[b()],short:!0})},dddd:function(){return s.i18n.dayNames[b()+7]},DDDD:function(){return l({y:g(),m:v(),d:y(),_:p(),dayName:s.i18n.dayNames[b()+7]})},m:function(){return v()+1},mm:function(){return u(v()+1)},mmm:function(){return s.i18n.monthNames[v()]},mmmm:function(){return s.i18n.monthNames[v()+12]},yy:function(){return String(g()).slice(2)},yyyy:function(){return u(g(),4)},h:function(){return M()%12||12},hh:function(){return u(M()%12||12)},H:function(){return M()},HH:function(){return u(M())},M:function(){return w()},MM:function(){return u(w())},s:function(){return k()},ss:function(){return u(k())},l:function(){return u(C(),3)},L:function(){return u(Math.floor(C()/10))},t:function(){return M()<12?s.i18n.timeNames[0]:s.i18n.timeNames[1]},tt:function(){return M()<12?s.i18n.timeNames[2]:s.i18n.timeNames[3]},T:function(){return M()<12?s.i18n.timeNames[4]:s.i18n.timeNames[5]},TT:function(){return M()<12?s.i18n.timeNames[6]:s.i18n.timeNames[7]},Z:function(){return f?"GMT":r?"UTC":(String(o).match(e)||[""]).pop().replace(n,"").replace(/GMT\+0000/g,"UTC")},o:function(){return(D()>0?"-":"+")+u(100*Math.floor(Math.abs(D())/60)+Math.abs(D())%60,4)},p:function(){return(D()>0?"-":"+")+u(Math.floor(Math.abs(D())/60),2)+":"+u(Math.floor(Math.abs(D())%60),2)},S:function(){return["th","st","nd","rd"][y()%10>3?0:(y()%100-y()%10!=10)*y()%10]},W:function(){return T()},WW:function(){return u(T())},N:function(){return d(o)}};return i.replace(t,(function(t){return t in E?E[t]():t.slice(1,t.length-1)}))}}();s.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},s.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var u=function(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t},l=function(t){var e=t.y,n=t.m,o=t.d,i=t._,r=t.dayName,a=t.short,s=void 0!==a&&a,u=new Date,l=new Date;l.setDate(l[i+"Date"]()-1);var c=new Date;c.setDate(c[i+"Date"]()+1);return u[i+"FullYear"]()===e&&u[i+"Month"]()===n&&u[i+"Date"]()===o?s?"Tdy":"Today":l[i+"FullYear"]()===e&&l[i+"Month"]()===n&&l[i+"Date"]()===o?s?"Ysd":"Yesterday":c[i+"FullYear"]()===e&&c[i+"Month"]()===n&&c[i+"Date"]()===o?s?"Tmw":"Tomorrow":r},c=function(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var o=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-o);var i=(e-n)/6048e5;return 1+Math.floor(i)},d=function(t){var e=t.getDay();return 0===e&&(e=7),e},h=function(t){return null===t?"null":void 0===t?"undefined":"object"!==i(t)?i(t):Array.isArray(t)?"array":{}.toString.call(t).slice(8,-1).toLowerCase()};void 0===(o=function(){return s}.call(e,n,e,t))||(t.exports=o)}(void 0)},646:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i,r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();e.confirmAlert=function(t){document.body.classList.add("react-confirm-alert-body-element"),function(){if(document.getElementById("react-confirm-alert-firm-svg"))return;var t="http://www.w3.org/2000/svg",e=document.createElementNS(t,"feGaussianBlur");e.setAttribute("stdDeviation","0.3");var n=document.createElementNS(t,"filter");n.setAttribute("id","gaussian-blur"),n.appendChild(e);var o=document.createElementNS(t,"svg");o.setAttribute("id","react-confirm-alert-firm-svg"),o.setAttribute("class","react-confirm-alert-svg"),o.appendChild(n),document.body.appendChild(o)}(),function(t){var e=document.getElementById("react-confirm-alert");e||(document.body.children[0].classList.add("react-confirm-alert-blur"),(e=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(e)),(0,l.render)(s.default.createElement(f,t),e)}(t)};var a=n(1),s=c(a),u=c(n(58)),l=n(86);function c(t){return t&&t.__esModule?t:{default:t}}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}var f=(i=o=function(t){function e(){var t,n,o;d(this,e);for(var i=arguments.length,r=Array(i),a=0;a<i;a++)r[a]=arguments[a];return n=o=h(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(r))),o.handleClickButton=function(t){t.onClick&&t.onClick(),o.close()},o.handleClickOverlay=function(t){var e=o.props,n=e.closeOnClickOutside,i=e.onClickOutside,r=t.target===o.overlay;n&&r&&(i(),o.close())},o.close=function(){var t=o.props.afterClose;y(),p(),m(t)},o.keyboardClose=function(t){var e=o.props,n=e.closeOnEscape,i=e.onKeypressEscape,r=27===t.keyCode;n&&r&&(i(t),o.close())},o.componentDidMount=function(){document.addEventListener("keydown",o.keyboardClose,!1)},o.componentWillUnmount=function(){document.removeEventListener("keydown",o.keyboardClose,!1),o.props.willUnmount()},o.renderCustomUI=function(){var t=o.props,e=t.title,n=t.message,i=t.buttons;return(0,t.customUI)({title:e,message:n,buttons:i,onClose:o.close})},h(o,n)}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.title,o=e.message,i=e.buttons,r=e.childrenElement,a=e.customUI,u=e.overlayClassName;return s.default.createElement("div",{className:"react-confirm-alert-overlay "+u,ref:function(e){return t.overlay=e},onClick:this.handleClickOverlay},s.default.createElement("div",{className:"react-confirm-alert"},a?this.renderCustomUI():s.default.createElement("div",{className:"react-confirm-alert-body"},n&&s.default.createElement("h1",null,n),o,r(),s.default.createElement("div",{className:"react-confirm-alert-button-group"},i.map((function(e,n){return s.default.createElement("button",{key:n,onClick:function(){return t.handleClickButton(e)},className:e.className},e.label)}))))))}}]),e}(a.Component),o.propTypes={title:u.default.string,message:u.default.string,buttons:u.default.array.isRequired,childrenElement:u.default.func,customUI:u.default.func,closeOnClickOutside:u.default.bool,closeOnEscape:u.default.bool,willUnmount:u.default.func,afterClose:u.default.func,onClickOutside:u.default.func,onKeypressEscape:u.default.func,overlayClassName:u.default.string},o.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},i);function m(t){var e=document.getElementById("react-confirm-alert-firm-svg");e&&e.parentNode.removeChild(e),document.body.children[0].classList.remove("react-confirm-alert-blur"),t()}function p(){var t=document.getElementById("react-confirm-alert");t&&((0,l.unmountComponentAtNode)(t),t.parentNode.removeChild(t))}function y(){document.body.classList.remove("react-confirm-alert-body-element")}e.default=f},647:function(t,e,n){}}]);
//# sourceMappingURL=28.143cadd4.chunk.js.map