(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1234,7765],{57838:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(97685),o=n(67294);function c(){var e=o.useReducer(function(e){return e+1},0);return(0,r.Z)(e,2)[1]}},15746:function(e,t,n){"use strict";var r=n(21584);t.Z=r.Z},25378:function(e,t,n){"use strict";var r=n(67294),o=n(57838),c=n(24308);t.Z=function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,r.useRef)({}),n=(0,o.Z)();return(0,r.useEffect)(function(){var r=c.ZP.subscribe(function(r){t.current=r,e&&n()});return function(){return c.ZP.unsubscribe(r)}},[]),t.current}},97183:function(e,t,n){"use strict";var r=n(2897),o=n(7293),c=r.ZP;c.Header=r.h4,c.Footer=r.$_,c.Content=r.VY,c.Sider=o.Z,t.Z=c},71230:function(e,t,n){"use strict";var r=n(92820);t.Z=r.Z},11382:function(e,t,n){"use strict";var r=n(87462),o=n(4942),c=n(97685),a=n(94184),i=n.n(a),l=n(23279),s=n.n(l),u=n(98423),f=n(67294),d=n(53124),p=n(96159),m=n(93355),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};(0,m.b)("small","default","large");var h=null,b=function(e){var t=e.spinPrefixCls,n=e.spinning,a=void 0===n||n,l=e.delay,m=e.className,b=e.size,y=void 0===b?"default":b,x=e.tip,g=e.wrapperClassName,Z=e.style,j=e.children,E=v(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),O=f.useState(function(){return a&&(!a||!l||!!isNaN(Number(l)))}),C=(0,c.Z)(O,2),k=C[0],w=C[1];return f.useEffect(function(){var e=s()(function(){w(a)},l);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[l,a]),f.createElement(d.C,null,function(n){var c,a,l,s=n.direction,d=i()(t,(l={},(0,o.Z)(l,"".concat(t,"-sm"),"small"===y),(0,o.Z)(l,"".concat(t,"-lg"),"large"===y),(0,o.Z)(l,"".concat(t,"-spinning"),k),(0,o.Z)(l,"".concat(t,"-show-text"),!!x),(0,o.Z)(l,"".concat(t,"-rtl"),"rtl"===s),l),m),v=(0,u.Z)(E,["indicator","prefixCls"]),b=f.createElement("div",(0,r.Z)({},v,{style:Z,className:d,"aria-live":"polite","aria-busy":k}),(c=e.indicator,a="".concat(t,"-dot"),null===c?null:(0,p.l$)(c)?(0,p.Tm)(c,{className:i()(c.props.className,a)}):(0,p.l$)(h)?(0,p.Tm)(h,{className:i()(h.props.className,a)}):f.createElement("span",{className:i()(a,"".concat(t,"-dot-spin"))},f.createElement("i",{className:"".concat(t,"-dot-item")}),f.createElement("i",{className:"".concat(t,"-dot-item")}),f.createElement("i",{className:"".concat(t,"-dot-item")}),f.createElement("i",{className:"".concat(t,"-dot-item")}))),x?f.createElement("div",{className:"".concat(t,"-text")},x):null);if(void 0!==j){var O=i()("".concat(t,"-container"),(0,o.Z)({},"".concat(t,"-blur"),k));return f.createElement("div",(0,r.Z)({},v,{className:i()("".concat(t,"-nested-loading"),g)}),k&&f.createElement("div",{key:"loading"},b),f.createElement("div",{className:O,key:"container"},j))}return b})},y=function(e){var t=e.prefixCls,n=(0,f.useContext(d.E_).getPrefixCls)("spin",t),o=(0,r.Z)((0,r.Z)({},e),{spinPrefixCls:n});return f.createElement(b,(0,r.Z)({},o))};y.setDefaultIndicator=function(e){h=e},t.Z=y},20550:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(4942),o=n(87462),c=n(97685),a=n(97937),i=n(94184),l=n.n(i),s=n(98423),u=n(67294),f=n(53124),d=n(98787),p=n(68349),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},h=new RegExp("^(".concat(d.Y.join("|"),")(-inverse)?$")),b=new RegExp("^(".concat(d.E.join("|"),")$")),y=u.forwardRef(function(e,t){var n,i=e.prefixCls,d=e.className,m=e.style,y=e.children,x=e.icon,g=e.color,Z=e.onClose,j=e.closeIcon,E=e.closable,O=void 0!==E&&E,C=v(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),k=u.useContext(f.E_),w=k.getPrefixCls,N=k.direction,S=u.useState(!0),P=(0,c.Z)(S,2),T=P[0],_=P[1];u.useEffect(function(){"visible"in C&&_(C.visible)},[C.visible]);var I=function(){return!!g&&(h.test(g)||b.test(g))},M=(0,o.Z)({backgroundColor:g&&!I()?g:void 0},m),A=I(),R=w("tag",i),W=l()(R,(n={},(0,r.Z)(n,"".concat(R,"-").concat(g),A),(0,r.Z)(n,"".concat(R,"-has-color"),g&&!A),(0,r.Z)(n,"".concat(R,"-hidden"),!T),(0,r.Z)(n,"".concat(R,"-rtl"),"rtl"===N),n),d),D=function(e){e.stopPropagation(),null==Z||Z(e),!e.defaultPrevented&&("visible"in C||_(!1))},$="onClick"in C||y&&"a"===y.type,U=(0,s.Z)(C,["visible"]),F=x||null,G=F?u.createElement(u.Fragment,null,F,u.createElement("span",null,y)):y,L=u.createElement("span",(0,o.Z)({},U,{ref:t,className:W,style:M}),G,O?j?u.createElement("span",{className:"".concat(R,"-close-icon"),onClick:D},j):u.createElement(a.Z,{className:"".concat(R,"-close-icon"),onClick:D}):null);return $?u.createElement(p.Z,null,L):L});y.CheckableTag=function(e){var t,n=e.prefixCls,c=e.className,a=e.checked,i=e.onChange,s=e.onClick,d=m(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,u.useContext(f.E_).getPrefixCls)("tag",n),v=l()(p,(t={},(0,r.Z)(t,"".concat(p,"-checkable"),!0),(0,r.Z)(t,"".concat(p,"-checkable-checked"),a),t),c);return u.createElement("span",(0,o.Z)({},d,{className:v,onClick:function(e){null==i||i(!a),null==s||s(e)}}))};var x=y},93645:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function o(e){return e?r[e]:r.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(19013),o=n(13882);function c(e,t){return(0,o.Z)(2,arguments),(0,r.Z)(e).getTime()-(0,r.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(59910),o=n(13882),c=n(93645);function a(e,t,n){(0,o.Z)(2,arguments);var a=(0,r.Z)(e,t)/1e3;return(0,c.u)(null==n?void 0:n.roundingMethod)(a)}},62705:function(e,t,n){var r=n(55639).Symbol;e.exports=r},44239:function(e,t,n){var r=n(62705),o=n(89607),c=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):c(e)}},27561:function(e,t,n){var r=n(67990),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},31957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},89607:function(e,t,n){var r=n(62705),o=Object.prototype,c=o.hasOwnProperty,a=o.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var t=c.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(e){}var o=a.call(e);return r&&(t?e[i]=n:delete e[i]),o}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:function(e,t,n){var r=n(31957),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();e.exports=c},67990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},23279:function(e,t,n){var r=n(13218),o=n(7771),c=n(14841),a=Math.max,i=Math.min;e.exports=function(e,t,n){var l,s,u,f,d,p,m=0,v=!1,h=!1,b=!0;if("function"!=typeof e)throw TypeError("Expected a function");function y(t){var n=l,r=s;return l=s=void 0,m=t,f=e.apply(r,n)}function x(e){var n=e-p,r=e-m;return void 0===p||n>=t||n<0||h&&r>=u}function g(){var e,n,r,c=o();if(x(c))return Z(c);d=setTimeout(g,(e=c-p,n=c-m,r=t-e,h?i(r,u-n):r))}function Z(e){return(d=void 0,b&&l)?y(e):(l=s=void 0,f)}function j(){var e,n=o(),r=x(n);if(l=arguments,s=this,p=n,r){if(void 0===d)return m=e=p,d=setTimeout(g,t),v?y(e):f;if(h)return clearTimeout(d),d=setTimeout(g,t),y(p)}return void 0===d&&(d=setTimeout(g,t)),f}return t=c(t)||0,r(n)&&(v=!!n.leading,u=(h="maxWait"in n)?a(c(n.maxWait)||0,t):u,b="trailing"in n?!!n.trailing:b),j.cancel=function(){void 0!==d&&clearTimeout(d),m=0,l=p=s=d=void 0},j.flush=function(){return void 0===d?f:Z(o())},j}},13218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},33448:function(e,t,n){var r=n(44239),o=n(37005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),o=n(13218),c=n(33448),a=0/0,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(c(e))return a;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=l.test(e);return n||s.test(e)?u(e.slice(2),n?2:8):i.test(e)?a:+e}},67742:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/webhooks",function(){return n(89651)}])},89651:function(e,t,n){"use strict";n.r(t);var r=n(85893),o=n(85818),c=n(94199),a=n(20550),i=n(15746),l=n(32808),s=n(85402),u=n(79531),f=n(71230),d=n(71577),p=n(26713),m=n(54398),v=n(5152),h=n.n(v),b=n(67294),y=n(81453),x=n(53899),g=n(34261);let{Title:Z,Paragraph:j}=o.Z,E=h()(()=>Promise.all([n.e(2074),n.e(7949)]).then(n.t.bind(n,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1}),O={CHAT:{name:"Chat messages",description:"When a user sends a chat message",color:"purple"},USER_JOINED:{name:"User joined",description:"When a user joins the chat",color:"green"},NAME_CHANGE:{name:"User name changed",description:"When a user changes their name",color:"blue"},"VISIBILITY-UPDATE":{name:"Message visibility changed",description:"When a message visibility changes, likely due to moderation",color:"red"},STREAM_STARTED:{name:"Stream started",description:"When a stream starts",color:"orange"},STREAM_STOPPED:{name:"Stream stopped",description:"When a stream stops",color:"cyan"},STREAM_TITLE_UPDATED:{name:"Stream title updated",description:"When a stream title is changed",color:"yellow"}},C=e=>{let{onOk:t,onCancel:n,open:o}=e,[c,a]=(0,b.useState)([]),[p,m]=(0,b.useState)(""),v=Object.keys(O).map(e=>({value:e,label:O[e].description})),h={disabled:(null==c?void 0:c.length)===0||!(0,x.jv)(p)},y=v.map(e=>(0,r.jsx)(i.Z,{span:8,children:(0,r.jsx)(l.Z,{value:e.value,children:e.label})},e.value));return(0,r.jsxs)(s.Z,{title:"Create New Webhook",open:o,onOk:function(){t(p,c),m(""),a(null)},onCancel:n,okButtonProps:h,children:[(0,r.jsx)("div",{children:(0,r.jsx)(u.Z,{value:p,placeholder:"https://myserver.com/webhook",onChange:e=>m(e.currentTarget.value.trim()),type:"url",pattern:x.ax})}),(0,r.jsx)("p",{children:"Select the events that will be sent to this webhook."}),(0,r.jsx)(l.Z.Group,{style:{width:"100%"},value:c,onChange:function(e){a(e)},children:(0,r.jsx)(f.Z,{children:y})}),(0,r.jsx)("p",{children:(0,r.jsx)(d.Z,{type:"primary",onClick:function(){a(Object.keys(O))},children:"Select all"})})]})},k=()=>{let[e,t]=(0,b.useState)([]),[n,o]=(0,b.useState)(!1);function i(e){console.error("error",e)}async function l(){try{let e=await (0,y.rQ)(y.XA);t(e)}catch(e){i(e)}}async function s(e){try{await (0,y.rQ)(y.M_,{method:"POST",data:{id:e}}),l()}catch(e){i(e)}}async function u(n,r){try{let o=await (0,y.rQ)(y.iG,{method:"POST",data:{url:n,events:r}});t(e.concat(o))}catch(e){i(e)}}(0,b.useEffect)(()=>{l()},[]);let f=[{title:"",key:"delete",render:(e,t)=>(0,r.jsx)(p.Z,{size:"middle",children:(0,r.jsx)(d.Z,{onClick:()=>s(t.id),icon:(0,r.jsx)(E,{})})})},{title:"URL",dataIndex:"url",key:"url"},{title:"Events",dataIndex:"events",key:"events",render:e=>(0,r.jsx)(r.Fragment,{children:e.map(e=>(function(e){if(!e||!O[e])return null;let t=O[e];return(0,r.jsx)(c.Z,{title:t.description,children:(0,r.jsx)(a.Z,{color:t.color,children:t.name})},e)})(e))})}];return(0,r.jsxs)("div",{children:[(0,r.jsx)(Z,{children:"Webhooks"}),(0,r.jsx)(j,{children:"A webhook is a callback made to an external API in response to an event that takes place within Owncast. This can be used to build chat bots or sending automatic notifications that you've started streaming."}),(0,r.jsxs)(j,{children:["Read more about how to use webhooks, with examples, at"," ",(0,r.jsx)("a",{href:"https://owncast.online/docs/integrations/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,r.jsx)(m.Z,{rowKey:e=>e.id,columns:f,dataSource:e,pagination:!1}),(0,r.jsx)("br",{}),(0,r.jsx)(d.Z,{type:"primary",onClick:()=>{o(!0)},children:"Create Webhook"}),(0,r.jsx)(C,{open:n,onOk:(e,t)=>{o(!1),u(e,t)},onCancel:()=>{o(!1)}})]})};k.getLayout=function(e){return(0,r.jsx)(g.l,{page:e})},t.default=k},11163:function(e,t,n){e.exports=n(96885)}},function(e){e.O(0,[173,5874,9151,5634,4931,5402,5257,1664,8014,5348,9915,4041,3698,3013,4398,4261,9774,2888,179],function(){return e(e.s=67742)}),_N_E=e.O()}]);