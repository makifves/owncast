(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2852],{11165:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config-storage",function(){return t(67389)}])},15976:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var i=t(34051),a=t.n(i),r=t(85893),s=t(67294),o=t(94594),c=t(83192),l=t(78464),u=t(25964),d=t(35159);function f(e,n,t,i,a,r,s){try{var o=e[r](s),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(i,a)}function h(e){var n=(0,s.useState)(null),t=n[0],i=n[1],h=null,v=((0,s.useContext)(d.aC)||{}).setFieldInConfigState,p=e.apiPath,m=e.checked,g=e.reversed,x=void 0!==g&&g,b=e.configPath,j=void 0===b?"":b,y=e.disabled,k=void 0!==y&&y,N=e.fieldName,P=e.label,w=e.tip,C=e.useSubmit,S=e.onChange,Z=function(){i(null),clearTimeout(h),h=null},E=function(){var e,n=(e=a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!C){e.next=6;break}return i((0,c.kg)(c.Jk)),t=x?!n:n,e.next=5,(0,u.Si)({apiPath:p,data:{value:t},onSuccess:function(){v({fieldName:N,value:t,path:j}),i((0,c.kg)(c.zv))},onError:function(e){i((0,c.kg)(c.Un,"There was an error: ".concat(e)))}});case 5:h=setTimeout(Z,u.sI);case 6:S&&S(n);case 7:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(i,a){var r=e.apply(n,t);function s(e){f(r,i,a,s,o,"next",e)}function o(e){f(r,i,a,s,o,"throw",e)}s(void 0)}))});return function(e){return n.apply(this,arguments)}}(),O=null!==t&&t.type===c.Jk;return(0,r.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[P&&(0,r.jsx)("div",{className:"label-side",children:(0,r.jsx)("span",{className:"formfield-label",children:P})}),(0,r.jsxs)("div",{className:"input-side",children:[(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsx)(o.Z,{className:"switch field-".concat(N),loading:O,onChange:E,defaultChecked:m,checked:m,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:k}),(0,r.jsx)(l.Z,{status:t})]}),(0,r.jsx)("p",{className:"field-tip",children:w})]})]})}h.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},67389:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return C}});var i=t(85893),a=t(84485),r=t(67294),s=t(34051),o=t.n(s),c=t(54907),l=t(71577),u=t(94184),d=t.n(u),f=t(35159),h=t(57553),v=t(25964),p=t(83192),m=t(48419),g=t(78464),x=t(19411),b=t(15976);function j(e,n,t,i,a,r,s){try{var o=e[r](s),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(i,a)}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){y(e,n,t[n])}))}return e}var N=c.Z.Panel;function P(){var e=(0,r.useState)(null),n=e[0],t=e[1],a=(0,r.useState)(null),s=a[0],u=a[1],P=(0,r.useState)(!1),w=P[0],C=P[1],S=(0,r.useContext)(f.aC)||{},Z=S.serverConfig,E=S.setFieldInConfigState,O=(0,r.useContext)(h.k).setMessage,_=Z.s3,z=_.accessKey,T=void 0===z?"":z,K=_.acl,F=void 0===K?"":K,I=_.bucket,D=void 0===I?"":I,U=_.enabled,J=void 0!==U&&U,X=_.endpoint,L=void 0===X?"":X,M=_.region,V=void 0===M?"":M,$=_.secret,q=void 0===$?"":$,A=_.servingEndpoint,B=void 0===A?"":A,G=_.forcePathStyle,H=void 0!==G&&G;if((0,r.useEffect)((function(){t({accessKey:T,acl:F,bucket:D,enabled:J,endpoint:L,region:V,secret:q,servingEndpoint:B,forcePathStyle:H}),C(J)}),[_]),!n)return null;var Q=null,R=function(){u(null),Q=null,clearTimeout(Q)},W=function(e){var i=e.fieldName,a=e.value;t(k({},n,y({},i,a)))},Y=function(){var e,t=(e=o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u((0,p.kg)(p.Jk)),t=n,e.next=4,(0,v.Si)({apiPath:v.$w,data:{value:t},onSuccess:function(){E({fieldName:"s3",value:t,path:""}),u((0,p.kg)(p.zv,"Updated.")),Q=setTimeout(R,v.sI),O("Changing your storage configuration will take place the next time you start a new stream.")},onError:function(e){u((0,p.kg)(p.Un,e)),Q=setTimeout(R,v.sI)}});case 4:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(i,a){var r=e.apply(n,t);function s(e){j(r,i,a,s,o,"next",e)}function o(e){j(r,i,a,s,o,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}(),ee=d()({"edit-storage-container":!0,"form-module":!0,enabled:w}),ne=function(e,n){var t=e.endpoint,i=e.accessKey,a=e.secret,r=e.bucket,s=e.region,o=e.enabled,c=e.servingEndpoint,l=e.acl,u=e.forcePathStyle;if(o){if(t&&(0,x.Z)(t)&&i&&a&&r&&s&&(o!==n.enabled||t!==n.endpoint||i!==n.accessKey||a!==n.secret||s!==n.region||!n.servingEndpoint&&""!==c||n.servingEndpoint&&c!==n.servingEndpoint||!n.acl&&""!==l||n.acl&&l!==n.acl||u!==n.forcePathStyle))return!0}else if(o!==n.enabled)return!0;return!1}(n,_);return(0,i.jsxs)("div",{className:ee,children:[(0,i.jsx)("div",{className:"enable-switch",children:(0,i.jsx)(b.Z,{apiPath:"",fieldName:"enabled",label:"Use S3 Storage Provider",checked:n.enabled,onChange:function(e){C(e),W({fieldName:"enabled",value:e})}})}),(0,i.jsxs)("div",{className:"form-fields",children:[(0,i.jsx)("div",{className:"field-container",children:(0,i.jsx)(m.ZP,k({},v.zm.endpoint,{value:n.endpoint,onChange:W}))}),(0,i.jsx)("div",{className:"field-container",children:(0,i.jsx)(m.ZP,k({},v.zm.accessKey,{value:n.accessKey,onChange:W}))}),(0,i.jsx)("div",{className:"field-container",children:(0,i.jsx)(m.ZP,k({},v.zm.secret,{value:n.secret,onChange:W}))}),(0,i.jsx)("div",{className:"field-container",children:(0,i.jsx)(m.ZP,k({},v.zm.bucket,{value:n.bucket,onChange:W}))}),(0,i.jsx)("div",{className:"field-container",children:(0,i.jsx)(m.ZP,k({},v.zm.region,{value:n.region,onChange:W}))}),(0,i.jsx)(c.Z,{className:"advanced-section",children:(0,i.jsxs)(N,{header:"Optional Settings",children:[(0,i.jsx)("div",{className:"field-container",children:(0,i.jsx)(m.ZP,k({},v.zm.acl,{value:n.acl,onChange:W}))}),(0,i.jsx)("div",{className:"field-container",children:(0,i.jsx)(m.ZP,k({},v.zm.servingEndpoint,{value:n.servingEndpoint,onChange:W}))}),(0,i.jsx)("div",{className:"enable-switch",children:(0,i.jsx)(b.Z,k({},v.zm.forcePathStyle,{fieldName:"forcePathStyle",checked:n.forcePathStyle,onChange:function(e){W({fieldName:"forcePathStyle",value:e})}}))})]},"1")})]}),(0,i.jsxs)("div",{className:"button-container",children:[(0,i.jsx)(l.Z,{type:"primary",onClick:Y,disabled:!ne,children:"Save"}),(0,i.jsx)(g.Z,{status:s})]})]})}var w=a.Z.Title;function C(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w,{children:"Storage"}),(0,i.jsxs)("p",{className:"description",children:["Owncast supports optionally using external storage providers to stream your video. Learn more about this by visiting our"," ",(0,i.jsx)("a",{href:"https://owncast.online/docs/storage/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Storage Documentation"}),"."]}),(0,i.jsx)("p",{className:"description",children:"Configuring this incorrectly will likely cause your video to be unplayable. Double check the documentation for your storage provider on how to configure the bucket you created for Owncast."}),(0,i.jsx)("p",{className:"description",children:"Keep in mind this is for live streaming, not for archival, recording or VOD purposes."}),(0,i.jsx)(P,{})]})}}},function(e){e.O(0,[5473,9774,2888,179],(function(){return n=11165,e(e.s=n);var n}));var n=e.O();_N_E=n}]);