(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6964],{15746:function(e,t,n){"use strict";var a=n(21584);t.Z=a.Z},54907:function(e,t,n){"use strict";n.d(t,{Z:function(){return z}});var a=n(87462),r=n(4942),l=n(18073),s=n(94184),i=n.n(s),o=n(74902),c=n(15671),d=n(43144),u=n(32531),m=n(73568),v=n(71002),p=n(50344),f=n(67294),h=n(96774),x=n.n(h),Z=n(45987),y=n(82225),g=n(97685),w=f.forwardRef(function(e,t){var n,a=e.prefixCls,l=e.forceRender,s=e.className,o=e.style,c=e.children,d=e.isActive,u=e.role,m=f.useState(d||l),v=(0,g.Z)(m,2),p=v[0],h=v[1];return(f.useEffect(function(){(l||d)&&h(!0)},[l,d]),p)?f.createElement("div",{ref:t,className:i()("".concat(a,"-content"),(n={},(0,r.Z)(n,"".concat(a,"-content-active"),d),(0,r.Z)(n,"".concat(a,"-content-inactive"),!d),n),s),style:o,role:u},f.createElement("div",{className:"".concat(a,"-content-box")},c)):null});w.displayName="PanelContent";var j=["className","id","style","prefixCls","headerClass","children","isActive","destroyInactivePanel","accordion","forceRender","openMotion","extra","collapsible"],b=function(e){(0,u.Z)(n,e);var t=(0,m.Z)(n);function n(){var e;(0,c.Z)(this,n);for(var a=arguments.length,r=Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).onItemClick=function(){var t=e.props,n=t.onItemClick,a=t.panelKey;"function"==typeof n&&n(a)},e.handleKeyPress=function(t){("Enter"===t.key||13===t.keyCode||13===t.which)&&e.onItemClick()},e.renderIcon=function(){var t=e.props,n=t.showArrow,a=t.expandIcon,r=t.prefixCls,l=t.collapsible;if(!n)return null;var s="function"==typeof a?a(e.props):f.createElement("i",{className:"arrow"});return s&&f.createElement("div",{className:"".concat(r,"-expand-icon"),onClick:"header"===l||"icon"===l?e.onItemClick:null},s)},e.renderTitle=function(){var t=e.props,n=t.header,a=t.prefixCls,r=t.collapsible;return f.createElement("span",{className:"".concat(a,"-header-text"),onClick:"header"===r?e.onItemClick:null},n)},e}return(0,d.Z)(n,[{key:"shouldComponentUpdate",value:function(e){return!x()(this.props,e)}},{key:"render",value:function(){var e,t,n=this.props,l=n.className,s=n.id,o=n.style,c=n.prefixCls,d=n.headerClass,u=n.children,m=n.isActive,v=n.destroyInactivePanel,p=n.accordion,h=n.forceRender,x=n.openMotion,g=n.extra,b=n.collapsible,C=(0,Z.Z)(n,j),N="disabled"===b,k="header"===b,E="icon"===b,I=i()((e={},(0,r.Z)(e,"".concat(c,"-item"),!0),(0,r.Z)(e,"".concat(c,"-item-active"),m),(0,r.Z)(e,"".concat(c,"-item-disabled"),N),e),l),P={className:i()("".concat(c,"-header"),(t={},(0,r.Z)(t,d,d),(0,r.Z)(t,"".concat(c,"-header-collapsible-only"),k),(0,r.Z)(t,"".concat(c,"-icon-collapsible-only"),E),t)),"aria-expanded":m,"aria-disabled":N,onKeyPress:this.handleKeyPress};k||E||(P.onClick=this.onItemClick,P.role=p?"tab":"button",P.tabIndex=N?-1:0);var S=null!=g&&"boolean"!=typeof g;return delete C.header,delete C.panelKey,delete C.onItemClick,delete C.showArrow,delete C.expandIcon,f.createElement("div",(0,a.Z)({},C,{className:I,style:o,id:s}),f.createElement("div",P,this.renderIcon(),this.renderTitle(),S&&f.createElement("div",{className:"".concat(c,"-extra")},g)),f.createElement(y.default,(0,a.Z)({visible:m,leavedClassName:"".concat(c,"-content-hidden")},x,{forceRender:h,removeOnLeave:v}),function(e,t){var n=e.className,a=e.style;return f.createElement(w,{ref:t,prefixCls:c,className:n,style:a,isActive:m,forceRender:h,role:p?"tabpanel":null},u)}))}}]),n}(f.Component);function C(e){var t=e;if(!Array.isArray(t)){var n=(0,v.Z)(t);t="number"===n||"string"===n?[t]:[]}return t.map(function(e){return String(e)})}b.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var N=function(e){(0,u.Z)(n,e);var t=(0,m.Z)(n);function n(e){(0,c.Z)(this,n),(a=t.call(this,e)).onClickItem=function(e){var t=a.state.activeKey;if(a.props.accordion)t=t[0]===e?[]:[e];else{var n=(t=(0,o.Z)(t)).indexOf(e);n>-1?t.splice(n,1):t.push(e)}a.setActiveKey(t)},a.getNewChild=function(e,t){if(!e)return null;var n=a.state.activeKey,r=a.props,l=r.prefixCls,s=r.openMotion,i=r.accordion,o=r.destroyInactivePanel,c=r.expandIcon,d=r.collapsible,u=e.key||String(t),m=e.props,v=m.header,p=m.headerClass,h=m.destroyInactivePanel,x=m.collapsible,Z=!1;Z=i?n[0]===u:n.indexOf(u)>-1;var y=null!=x?x:d,g={key:u,panelKey:u,header:v,headerClass:p,isActive:Z,prefixCls:l,destroyInactivePanel:null!=h?h:o,openMotion:s,accordion:i,children:e.props.children,onItemClick:"disabled"===y?null:a.onClickItem,expandIcon:c,collapsible:y};return"string"==typeof e.type?e:(Object.keys(g).forEach(function(e){void 0===g[e]&&delete g[e]}),f.cloneElement(e,g))},a.getItems=function(){var e=a.props.children;return(0,p.Z)(e).map(a.getNewChild)},a.setActiveKey=function(e){"activeKey"in a.props||a.setState({activeKey:e}),a.props.onChange(a.props.accordion?e[0]:e)};var a,r=e.activeKey,l=e.defaultActiveKey;return"activeKey"in e&&(l=r),a.state={activeKey:C(l)},a}return(0,d.Z)(n,[{key:"shouldComponentUpdate",value:function(e,t){return!x()(this.props,e)||!x()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,a=t.className,l=t.style,s=t.accordion,o=i()((e={},(0,r.Z)(e,n,!0),(0,r.Z)(e,a,!!a),e));return f.createElement("div",{className:o,style:l,role:s?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=C(e.activeKey)),t}}]),n}(f.Component);N.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},N.Panel=b,N.Panel;var k=n(98423),E=n(53124),I=n(33603),P=n(96159),S=function(e){var t,n,s=f.useContext(E.E_),o=s.getPrefixCls,c=s.direction,d=e.prefixCls,u=e.className,m=e.bordered,v=e.ghost,h=e.expandIconPosition,x=void 0===h?"start":h,Z=o("collapse",d),y=f.useMemo(function(){return"left"===x?"start":"right"===x?"end":x},[x]),g=i()("".concat(Z,"-icon-position-").concat(y),(n={},(0,r.Z)(n,"".concat(Z,"-borderless"),!(void 0===m||m)),(0,r.Z)(n,"".concat(Z,"-rtl"),"rtl"===c),(0,r.Z)(n,"".concat(Z,"-ghost"),!!v),n),void 0===u?"":u),w=(0,a.Z)((0,a.Z)({},I.ZP),{motionAppear:!1,leavedClassName:"".concat(Z,"-content-hidden")});return f.createElement(N,(0,a.Z)({openMotion:w},e,{expandIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.expandIcon,a=n?n(t):f.createElement(l.Z,{rotate:t.isActive?90:void 0});return(0,P.Tm)(a,function(){return{className:i()(a.props.className,"".concat(Z,"-arrow"))}})},prefixCls:Z,className:g}),(t=e.children,(0,p.Z)(t).map(function(e,t){var n;if(null===(n=e.props)||void 0===n?void 0:n.disabled){var r=e.key||String(t),l=e.props,s=l.disabled,i=l.collapsible,o=(0,a.Z)((0,a.Z)({},(0,k.Z)(e.props,["disabled"])),{key:r,collapsible:null!=i?i:s?"disabled":void 0});return(0,P.Tm)(e,o)}return e})))};S.Panel=function(e){var t=f.useContext(E.E_).getPrefixCls,n=e.prefixCls,l=e.className,s=e.showArrow,o=t("collapse",n),c=i()((0,r.Z)({},"".concat(o,"-no-arrow"),!(void 0===s||s)),void 0===l?"":l);return f.createElement(N.Panel,(0,a.Z)({},e,{prefixCls:o,className:c}))};var z=S},71230:function(e,t,n){"use strict";var a=n(92820);t.Z=a.Z},26303:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var a=n(4942),r=n(87462),l=n(71002),s=n(94184),i=n.n(s),o=n(67294),c=n(53124),d=n(98423),u=function(e){var t,n,l=e.prefixCls,s=e.className,c=e.style,d=e.size,u=e.shape,m=i()((t={},(0,a.Z)(t,"".concat(l,"-lg"),"large"===d),(0,a.Z)(t,"".concat(l,"-sm"),"small"===d),t)),v=i()((n={},(0,a.Z)(n,"".concat(l,"-circle"),"circle"===u),(0,a.Z)(n,"".concat(l,"-square"),"square"===u),(0,a.Z)(n,"".concat(l,"-round"),"round"===u),n)),p=o.useMemo(function(){return"number"==typeof d?{width:d,height:d,lineHeight:"".concat(d,"px")}:{}},[d]);return o.createElement("span",{className:i()(l,m,v,s),style:(0,r.Z)((0,r.Z)({},p),c)})},m=n(1413),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},p=n(42135),f=function(e,t){return o.createElement(p.Z,(0,m.Z)((0,m.Z)({},e),{},{ref:t,icon:v}))};f.displayName="DotChartOutlined";var h=o.forwardRef(f),x=n(74902),Z=function(e){var t=function(t){var n=e.width,a=e.rows;return Array.isArray(n)?n[t]:(void 0===a?2:a)-1===t?n:void 0},n=e.prefixCls,a=e.className,r=e.style,l=e.rows,s=(0,x.Z)(Array(l)).map(function(e,n){return o.createElement("li",{key:n,style:{width:t(n)}})});return o.createElement("ul",{className:i()(n,a),style:r},s)},y=function(e){var t=e.prefixCls,n=e.className,a=e.width,l=e.style;return o.createElement("h3",{className:i()(t,n),style:(0,r.Z)({width:a},l)})};function g(e){return e&&"object"===(0,l.Z)(e)?e:{}}var w=function(e){var t=e.prefixCls,n=e.loading,l=e.className,s=e.style,d=e.children,m=e.avatar,v=void 0!==m&&m,p=e.title,f=void 0===p||p,h=e.paragraph,x=void 0===h||h,w=e.active,j=e.round,b=o.useContext(c.E_),C=b.getPrefixCls,N=b.direction,k=C("skeleton",t);if(n||!("loading"in e)){var E=!!v,I=!!f,P=!!x;if(E){var S=(0,r.Z)((0,r.Z)({prefixCls:"".concat(k,"-avatar")},I&&!P?{size:"large",shape:"square"}:{size:"large",shape:"circle"}),g(v));O=o.createElement("div",{className:"".concat(k,"-header")},o.createElement(u,(0,r.Z)({},S)))}if(I||P){if(I){var z,O,_,A,T,K=(0,r.Z)((0,r.Z)({prefixCls:"".concat(k,"-title")},!E&&P?{width:"38%"}:E&&P?{width:"50%"}:{}),g(f));A=o.createElement(y,(0,r.Z)({},K))}if(P){var M,R=(0,r.Z)((0,r.Z)({prefixCls:"".concat(k,"-paragraph")},(M={},E&&I||(M.width="61%"),!E&&I?M.rows=3:M.rows=2,M)),g(x));T=o.createElement(Z,(0,r.Z)({},R))}_=o.createElement("div",{className:"".concat(k,"-content")},A,T)}var D=i()(k,(z={},(0,a.Z)(z,"".concat(k,"-with-avatar"),E),(0,a.Z)(z,"".concat(k,"-active"),w),(0,a.Z)(z,"".concat(k,"-rtl"),"rtl"===N),(0,a.Z)(z,"".concat(k,"-round"),j),z),l);return o.createElement("div",{className:D,style:s},O,_)}return void 0!==d?d:null};w.Button=function(e){var t,n=e.prefixCls,l=e.className,s=e.active,m=e.block,v=e.size,p=(0,o.useContext(c.E_).getPrefixCls)("skeleton",n),f=(0,d.Z)(e,["prefixCls"]),h=i()(p,"".concat(p,"-element"),(t={},(0,a.Z)(t,"".concat(p,"-active"),s),(0,a.Z)(t,"".concat(p,"-block"),void 0!==m&&m),t),l);return o.createElement("div",{className:h},o.createElement(u,(0,r.Z)({prefixCls:"".concat(p,"-button"),size:void 0===v?"default":v},f)))},w.Avatar=function(e){var t=e.prefixCls,n=e.className,l=e.active,s=e.shape,m=e.size,v=(0,o.useContext(c.E_).getPrefixCls)("skeleton",t),p=(0,d.Z)(e,["prefixCls","className"]),f=i()(v,"".concat(v,"-element"),(0,a.Z)({},"".concat(v,"-active"),l),n);return o.createElement("div",{className:f},o.createElement(u,(0,r.Z)({prefixCls:"".concat(v,"-avatar"),shape:void 0===s?"circle":s,size:void 0===m?"default":m},p)))},w.Input=function(e){var t,n=e.prefixCls,l=e.className,s=e.active,m=e.block,v=e.size,p=(0,o.useContext(c.E_).getPrefixCls)("skeleton",n),f=(0,d.Z)(e,["prefixCls"]),h=i()(p,"".concat(p,"-element"),(t={},(0,a.Z)(t,"".concat(p,"-active"),s),(0,a.Z)(t,"".concat(p,"-block"),m),t),l);return o.createElement("div",{className:h},o.createElement(u,(0,r.Z)({prefixCls:"".concat(p,"-input"),size:void 0===v?"default":v},f)))},w.Image=function(e){var t=e.prefixCls,n=e.className,r=e.style,l=e.active,s=(0,o.useContext(c.E_).getPrefixCls)("skeleton",t),d=i()(s,"".concat(s,"-element"),(0,a.Z)({},"".concat(s,"-active"),l),n);return o.createElement("div",{className:d},o.createElement("div",{className:i()("".concat(s,"-image"),n),style:r},o.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(s,"-image-svg")},o.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(s,"-image-path")}))))},w.Node=function(e){var t=e.prefixCls,n=e.className,r=e.style,l=e.active,s=e.children,d=(0,o.useContext(c.E_).getPrefixCls)("skeleton",t),u=i()(d,"".concat(d,"-element"),(0,a.Z)({},"".concat(d,"-active"),l),n),m=null!=s?s:o.createElement(h,null);return o.createElement("div",{className:u},o.createElement("div",{className:i()("".concat(d,"-image"),n),style:r},m))};var j=w},75401:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(24262),r=n(19013),l=n(13882);function s(e){(0,l.Z)(1,arguments);var t=(0,r.Z)(e);return t.setHours(0,0,0,0),t}function i(e,t){(0,l.Z)(2,arguments);var n=s(e),r=s(t);return Math.round((n.getTime()-(0,a.Z)(n)-(r.getTime()-(0,a.Z)(r)))/864e5)}},64830:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return n(56649)}])},86177:function(e,t,n){"use strict";n.d(t,{o:function(){return m}});var a=n(85893);n(67294);var r=n(85818),l=n(20550),s=n(54398),i=n(53731),o=n(58091);let{Title:c}=r.Z;function d(e,t){let n="black";return"warning"===t.level?n="orange":"error"===t.level&&(n="red"),(0,a.jsx)(l.Z,{color:n,children:e})}function u(e){return(0,a.jsx)(i.Z,{children:e})}let m=e=>{let{logs:t,pageSize:n}=e;if(!(null==t?void 0:t.length))return null;let r=[{title:"Level",dataIndex:"level",key:"level",filters:[{text:"Info",value:"info"},{text:"Warning",value:"warning"},{text:"Error",value:"Error"}],onFilter:(e,t)=>0===t.level.indexOf(e),render:d},{title:"Timestamp",dataIndex:"time",key:"time",render:e=>{let t=new Date(e);return(0,o.Z)(t,"pp P")},sorter:(e,t)=>new Date(e.time).getTime()-new Date(t.time).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Message",dataIndex:"message",key:"message",render:u}];return(0,a.jsxs)("div",{className:"logs-section",children:[(0,a.jsx)(c,{children:"Logs"}),(0,a.jsx)(s.Z,{size:"middle",dataSource:t,columns:r,rowKey:e=>e.time,pagination:{pageSize:n||20}})]})}},53920:function(e,t,n){"use strict";n.d(t,{j:function(){return y}});var a=n(85893),r=n(59652),l=n(71230),s=n(15746),i=n(74763),o=n(85818),c=n(14670),d=n(71577),u=n(5152),m=n.n(u),v=n(41664),p=n.n(v),f=n(67294),h=n(38631);let x=m()(()=>Promise.all([n.e(2074),n.e(7996)]).then(n.t.bind(n,67996,23)),{loadableGenerated:{webpack:()=>[67996]},ssr:!1}),Z=m()(()=>Promise.all([n.e(2074),n.e(7039)]).then(n.t.bind(n,67039,23)),{loadableGenerated:{webpack:()=>[67039]},ssr:!1}),y=e=>{let{showTroubleshootButton:t}=e,n=(0,f.useContext)(h.a),{health:u}=n;if(!u)return null;let{healthy:m,healthPercentage:v,message:y,representation:g}=u,w="#3f8600",j="info";return v<80?(w="#cf000f",j="error"):v<30&&(w="#f0ad4e",j="error"),(0,a.jsx)("div",{children:(0,a.jsxs)(r.Z,{type:"inner",children:[(0,a.jsxs)(l.Z,{gutter:8,children:[(0,a.jsx)(s.Z,{span:12,children:(0,a.jsx)(i.Z,{title:"Healthy Stream",value:m?"Yes":"No",valueStyle:{color:w},prefix:m?(0,a.jsx)(x,{}):(0,a.jsx)(Z,{})})}),(0,a.jsx)(s.Z,{span:12,children:(0,a.jsx)(i.Z,{title:"Playback Health",value:v,valueStyle:{color:w},suffix:"%"})})]}),(0,a.jsx)(l.Z,{style:{display:g<100&&0!==g?"grid":"none"},children:(0,a.jsxs)(o.Z.Text,{type:"secondary",style:{textAlign:"center",fontSize:"0.7em",opacity:"0.3"},children:["Stream health represents ",g,"% of all known players. Other player status is unknown."]})}),(0,a.jsx)(l.Z,{gutter:16,style:{width:"100%",display:y?"grid":"none",marginTop:"10px"},children:(0,a.jsx)(s.Z,{span:24,children:(0,a.jsx)(c.Z,{message:y,type:j,showIcon:!0,action:t&&(0,a.jsx)(p(),{passHref:!0,href:"/stream-health",children:(0,a.jsx)(d.Z,{size:"small",type:"text",style:{color:"black"},children:"TROUBLESHOOT"})})})})})]})})};y.defaultProps={showTroubleshootButton:!0}},56649:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var a=n(85893),r=n(67294),l=n(26303),s=n(74763),i=n(59652),o=n(71230),c=n(15746),d=n(84314),u=n(75401),m=n(58091),v=n(86559),p=n(92234),f=n(19013),h=n(24262),x=n(13882),Z=n(83946),y=n(45938),g=n(5152),w=n.n(g),j=n(38631),b=n(86177),C=n(85818),N=n(41664),k=n.n(N),E=n(42099),I=n(54907),P=n(81453);let{Panel:S}=I.Z,{Title:z,Link:O}=C.Z,_=e=>{let{title:t,url:n,content_html:r,date_published:l}=e,s=new Date(l),i=(0,m.Z)(s,"MMM dd, yyyy, HH:mm");return(0,a.jsx)("article",{children:(0,a.jsx)(I.Z,{children:(0,a.jsxs)(S,{header:t,children:[(0,a.jsxs)("p",{className:"timestamp",children:[i," (",(0,a.jsx)(O,{href:"".concat("https://owncast.online").concat(n),target:"_blank",rel:"noopener noreferrer",children:"Link"}),")"]}),(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:r}})]},n)})})},A=()=>{let[e,t]=(0,r.useState)([]),[n,s]=(0,r.useState)(!0),i=async()=>{s(!1);try{let e=await (0,P.kg)("https://owncast.online/news/index.json");(null==e?void 0:e.items.length)>0&&t(e.items)}catch(e){console.log("==== error",e)}};(0,r.useEffect)(()=>{i()},[]);let o=n?(0,a.jsx)(l.Z,{loading:!0,active:!0}):null,c=n||0!==e.length?null:(0,a.jsx)("div",{children:"No news."});return(0,a.jsxs)("section",{className:"news-feed form-module",children:[(0,a.jsx)(z,{level:2,children:"News & Updates from Owncast"}),o,e.map(e=>(0,r.createElement)(_,{...e,key:e.url})),c]})},{Paragraph:T,Text:K}=C.Z,{Title:M}=C.Z,{Meta:R}=i.Z,D=w()(()=>Promise.all([n.e(2074),n.e(3371)]).then(n.t.bind(n,33371,23)),{loadableGenerated:{webpack:()=>[33371]},ssr:!1}),U=w()(()=>Promise.all([n.e(2074),n.e(5308)]).then(n.t.bind(n,85308,23)),{loadableGenerated:{webpack:()=>[85308]},ssr:!1}),L=w()(()=>Promise.all([n.e(2074),n.e(856)]).then(n.t.bind(n,20856,23)),{loadableGenerated:{webpack:()=>[20856]},ssr:!1}),q=w()(()=>Promise.all([n.e(2074),n.e(9208)]).then(n.t.bind(n,99208,23)),{loadableGenerated:{webpack:()=>[99208]},ssr:!1}),B=e=>{var t,l,s;let d,{logs:u=[],config:m}=e,v=(0,r.useContext)(j.a),{serverConfig:p}=v||{},{rtmpServerPort:f,streamKeyOverridden:h}=p,x=(null===(t=n.g.window)||void 0===t?void 0:t.location.hostname)||"";x&&f&&(d="rtmp://".concat(x.replace(/(^\w+:|^)\/\//,""),":").concat(f,"/live"));let Z=[{icon:(0,a.jsx)(D,{twoToneColor:"#6f42c1"}),title:"Use your broadcasting software",content:(0,a.jsxs)("div",{children:[(0,a.jsx)("a",{href:"https://owncast.online/docs/broadcasting/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn how to point your existing software to your new server and start streaming your content."}),(0,a.jsxs)("div",{className:"stream-info-container",children:[(0,a.jsx)(K,{strong:!0,className:"stream-info-label",children:"Streaming URL:"}),d&&(0,a.jsx)(T,{className:"stream-info-box",copyable:!0,children:d}),(0,a.jsx)(K,{strong:!0,className:"stream-info-label",children:"Streaming Keys:"}),(0,a.jsx)(K,{strong:!0,className:"stream-info-box",children:h?(0,a.jsx)("span",{style:{paddingLeft:"10px",fontWeight:"normal"},children:"Overridden via command line."}):(0,a.jsx)(k(),{href:"/admin/config/server",children:" View "})})]})]})},{icon:(0,a.jsx)(L,{twoToneColor:"#f9826c"}),title:"Embed your video onto other sites",content:(0,a.jsx)("div",{children:(0,a.jsx)("a",{href:"https://owncast.online/docs/embed?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn how you can add your Owncast stream to other sites you control."})})}];return(null==m?void 0:m.chatDisabled)||Z.push({icon:(0,a.jsx)(U,{twoToneColor:"#0366d6"}),title:"Chat is disabled",content:(0,a.jsx)("span",{children:"Chat will continue to be disabled until you begin a live stream."})}),(null==m?void 0:null===(l=m.yp)||void 0===l?void 0:l.enabled)||Z.push({icon:(0,a.jsx)(q,{twoToneColor:"#D18BFE"}),title:"Find an audience on the Owncast Directory",content:(0,a.jsxs)("div",{children:["List yourself in the Owncast Directory and show off your stream. Enable it in"," ",(0,a.jsx)(k(),{href:"/admin/config/general/",children:"settings."})]})}),(null==m?void 0:null===(s=m.federation)||void 0===s?void 0:s.enabled)||Z.push({icon:(0,a.jsx)("img",{alt:"fediverse",width:"20px",src:"/img/fediverse-color.png"}),title:"Add your Owncast instance to the Fediverse",content:(0,a.jsxs)("div",{children:[(0,a.jsx)(k(),{href:"/admin/config-federation/",children:"Enable Owncast social"})," features to have your instance join the Fediverse, allowing people to follow, share and engage with your live stream."]})}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{children:(0,a.jsx)(c.Z,{span:12,offset:6,children:(0,a.jsxs)("div",{className:"offline-intro",children:[(0,a.jsx)("span",{className:"logo",children:(0,a.jsx)(E.C,{variant:"simple"})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(M,{level:2,children:"No stream is active"}),(0,a.jsx)("p",{children:"You should start one."})]})]})})}),(0,a.jsxs)(o.Z,{gutter:[16,16],className:"offline-content",children:[(0,a.jsx)(c.Z,{span:12,xs:24,sm:24,md:24,lg:12,className:"list-section",children:Z.map(e=>(0,a.jsx)(i.Z,{size:"small",bordered:!1,children:(0,a.jsx)(R,{avatar:e.icon,title:e.title,description:e.content})},e.title))}),(0,a.jsx)(c.Z,{span:12,xs:24,sm:24,md:24,lg:12,children:(0,a.jsx)(A,{})})]}),(0,a.jsx)(b.o,{logs:u,pageSize:5})]})};var H=n(53920),F=n(37135),G=n(34261);let V=w()(()=>Promise.all([n.e(2074),n.e(5412)]).then(n.t.bind(n,95412,23)),{loadableGenerated:{webpack:()=>[95412]},ssr:!1}),W=w()(()=>Promise.all([n.e(2074),n.e(9095)]).then(n.t.bind(n,69095,23)),{loadableGenerated:{webpack:()=>[69095]},ssr:!1});function Q(e){return(0,a.jsxs)("ul",{className:"statistics-list",children:[(0,a.jsxs)("li",{children:[e.videoCodec||"Unknown"," @ ",e.videoBitrate||"Unknown"," kbps"]}),(0,a.jsxs)("li",{children:[e.framerate||"Unknown"," fps"]}),(0,a.jsxs)("li",{children:[e.width," x ",e.height]})]})}function X(){var e,t;let n=(0,r.useContext)(j.a),{broadcaster:g,serverConfig:w}=n||{},{remoteAddr:C,streamDetails:N}=g||{},k=(null==N?void 0:N.encoder)||"Unknown encoder",[E,I]=(0,r.useState)([]),S=async()=>{try{let e=await (0,P.rQ)(P.WQ);I(e)}catch(e){console.log("==== error",e)}},z=()=>{S()};if((0,r.useEffect)(()=>{z();let e=null;return e=setInterval(z,P.NE),()=>{clearInterval(e)}},[]),(0,F.Qr)(w)||(0,F.Qr)(n))return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{active:!0}),(0,a.jsx)(l.Z,{active:!0}),(0,a.jsx)(l.Z,{active:!0})]});if(!g)return(0,a.jsx)(B,{logs:E,config:w});let O=null==n?void 0:null===(e=n.currentBroadcast)||void 0===e?void 0:null===(t=e.outputSettings)||void 0===t?void 0:t.map(e=>{let{audioPassthrough:t,videoPassthrough:n,audioBitrate:r,videoBitrate:l,framerate:i}=e,o=t?"".concat(N.audioCodec||"Unknown",", ").concat(N.audioBitrate," kbps"):"".concat(r||"Unknown"," kbps"),c=n?"".concat(N.videoBitrate||"Unknown"," kbps, ").concat(N.framerate," fps ").concat(N.width," x ").concat(N.height):"".concat(l||"Unknown"," kbps, ").concat(i," fps");return(0,a.jsxs)("div",{className:"stream-details-item-container",children:[(0,a.jsx)(s.Z,{className:"stream-details-item",title:"Outbound Video Stream",value:c}),(0,a.jsx)(s.Z,{className:"stream-details-item",title:"Outbound Audio Stream",value:o})]})}),{viewerCount:_,sessionPeakViewerCount:T}=n,K="".concat(N.audioCodec,", ").concat(N.audioBitrate||"Unknown"," kbps"),M=new Date(g.time);return(0,a.jsxs)("div",{className:"home-container",children:[(0,a.jsxs)("div",{className:"sections-container",children:[(0,a.jsx)("div",{className:"online-status-section",children:(0,a.jsxs)(i.Z,{size:"small",type:"inner",className:"online-details-card",children:[(0,a.jsxs)(o.Z,{gutter:[16,16],align:"middle",children:[(0,a.jsx)(c.Z,{span:8,sm:24,md:8,children:(0,a.jsx)(s.Z,{title:"Stream started ".concat(function(e,t,n){(0,x.Z)(2,arguments);var a,r,l,s,i,o,c,y,g,w,j=(0,f.Z)(e),b=(0,f.Z)(t),C=(0,d.j)(),N=null!==(a=null!==(r=null==n?void 0:n.locale)&&void 0!==r?r:C.locale)&&void 0!==a?a:v.Z,k=(0,Z.Z)(null!==(l=null!==(s=null!==(i=null!==(o=null==n?void 0:n.weekStartsOn)&&void 0!==o?o:null==n?void 0:null===(c=n.locale)||void 0===c?void 0:null===(y=c.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==i?i:C.weekStartsOn)&&void 0!==s?s:null===(g=C.locale)||void 0===g?void 0:null===(w=g.options)||void 0===w?void 0:w.weekStartsOn)&&void 0!==l?l:0);if(!N.localize)throw RangeError("locale must contain localize property");if(!N.formatLong)throw RangeError("locale must contain formatLong property");if(!N.formatRelative)throw RangeError("locale must contain formatRelative property");var E=(0,u.Z)(j,b);if(isNaN(E))throw RangeError("Invalid time value");var I=(0,p.Z)(j,(0,h.Z)(j)),P=(0,p.Z)(b,(0,h.Z)(b)),S=N.formatRelative(E<-6?"other":E<-1?"lastWeek":E<0?"yesterday":E<1?"today":E<2?"tomorrow":E<7?"nextWeek":"other",I,P,{locale:N,weekStartsOn:k});return(0,m.Z)(j,S,{locale:N,weekStartsOn:k})}(M,Date.now())),value:(0,y.Z)(M),prefix:(0,a.jsx)(W,{})})}),(0,a.jsx)(c.Z,{span:8,sm:24,md:8,children:(0,a.jsx)(s.Z,{title:"Viewers",value:_,prefix:(0,a.jsx)(V,{})})}),(0,a.jsx)(c.Z,{span:8,sm:24,md:8,children:(0,a.jsx)(s.Z,{title:"Peak viewer count",value:T,prefix:(0,a.jsx)(V,{})})})]}),(0,a.jsx)(H.j,{})]})}),(0,a.jsxs)(o.Z,{gutter:[16,16],className:"section stream-details-section",children:[(0,a.jsxs)(c.Z,{className:"stream-details",span:12,sm:24,md:24,lg:12,children:[(0,a.jsx)(i.Z,{size:"small",title:"Outbound Stream Details",type:"inner",className:"outbound-details",children:O}),(0,a.jsxs)(i.Z,{size:"small",title:"Inbound Stream Details",type:"inner",children:[(0,a.jsx)(s.Z,{className:"stream-details-item",title:"Input",value:"".concat(k," ").concat((0,F.t5)(C))}),(0,a.jsx)(s.Z,{className:"stream-details-item",title:"Inbound Video Stream",value:N,formatter:Q}),(0,a.jsx)(s.Z,{className:"stream-details-item",title:"Inbound Audio Stream",value:K})]})]}),(0,a.jsx)(c.Z,{span:12,xs:24,sm:24,md:24,lg:12,children:(0,a.jsx)(A,{})})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)(b.o,{logs:E,pageSize:5})]})}X.getLayout=function(e){return(0,a.jsx)(G.l,{page:e})}}},function(e){e.O(0,[173,5874,9151,5634,4931,5402,5257,1664,8014,5348,9915,4041,3698,3013,4398,4526,7940,5938,428,3731,7765,4261,9774,2888,179],function(){return e(e.s=64830)}),_N_E=e.O()}]);