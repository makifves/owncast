(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[885],{1698:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(85893),r=n(27049),a=n(71577),s=n(92032),o=n(29316),u=n.n(o);function c(e){var t=e.name,n=e.text;return(0,i.jsx)("div",{className:u().outerContainer,children:(0,i.jsxs)("div",{className:u().innerContainer,children:[(0,i.jsxs)("div",{className:u().header,children:[t," is currently offline."]}),(0,i.jsx)(r.Z,{}),(0,i.jsx)("div",{children:n}),(0,i.jsx)("div",{className:u().footer,children:(0,i.jsxs)(a.Z,{type:"primary",onClick:function(){console.log("show notification modal")},children:[(0,i.jsx)(s.Z,{}),"Notify when Live"]})})]})})}},36887:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(85893),r=n(45938),a=n(68730),s=n(67294),o=n(99611),u=n(93132),c=n.n(u);function l(e){var t=(0,s.useState)(new Date)[1];(0,s.useEffect)((function(){var e=setInterval((function(){return t(new Date)}),1e3);return function(){clearInterval(e)}}),[]);var n,u=e.online,l=e.lastConnectTime,h=e.lastDisconnectTime,f=e.viewerCount,d="";if(u&&l){var p=function(e){var t=(0,a.Z)({start:e,end:new Date});return t.days>1?"".concat(t.days," days ").concat(t.hours," hours"):t.hours>=1?"".concat(t.hours," hours ").concat(t.minutes," minutes"):"".concat(t.minutes," minutes ").concat(t.seconds," seconds")}(new Date(l));d=u?"Live for  ".concat(p):"Offline",n=f>0&&(0,i.jsxs)("span",{children:[(0,i.jsx)(o.Z,{})," ",f]})}else u||(d="Offline",h&&(n="Last live ".concat((0,r.Z)(new Date(h))," ago.")));return(0,i.jsxs)("div",{className:c().statusbar,children:[(0,i.jsx)("div",{children:d}),(0,i.jsx)("div",{children:n})]})}l.defaultProps={lastConnectTime:null,lastDisconnectTime:null}},98881:function(e,t,n){"use strict";n.d(t,{Z:function(){return Q}});var i=n(47568),r=n(828),a=n(34051),s=n.n(a),o=n(85893),u=n(67294),c=n(4480),l=n(49218),h=n(85215),f=n(90121),d=n.n(f);n(33108);var p=function(e){var t=u.useRef(null),n=u.useRef(null),i=e.options,r=e.onReady;return u.useEffect((function(){if(!n.current){var e=t.current,a=n.current=(0,h.Z)(e,i,(function(){return a.log("player is ready"),r&&r(a,h.Z)}));a.autoplay(i.autoplay),a.src(i.sources)}}),[i,t]),u.useEffect((function(){var e=n.current;return function(){e&&(e.dispose(),n.current=null)}}),[n]),(0,o.jsx)("div",{"data-vjs-player":!0,children:(0,o.jsx)("video",{ref:t,className:"video-js vjs-big-play-centered ".concat(d().player," vjs-owncast")})})},v=n(51438);var m=function(){function e(){(0,v.Z)(this,e)}var t=e.prototype;return t.start=function(){this.stop(),this.timer=setInterval((function(){!function(){try{fetch("/api/ping")}catch(e){console.error(e)}}()}),4e3)},t.stop=function(){clearInterval(this.timer)},e}(),y=n(26042),g=n(69396),b=n(29815),k={position:"absolute",width:"100%",height:"100%"};function T(e){var t=e.src,n=void 0===t?"":t,i=e.width,r=e.height,a=e.objectFit,s=void 0===a?"fill":a,c=e.duration,l=void 0===c?"1s":c,h=(0,u.useMemo)((function(){return{display:"inline-block",position:"relative",width:i,height:r}}),[i,r]),f=(0,u.useMemo)((function(){return[(0,g.Z)((0,y.Z)({},k),{objectFit:s,opacity:0,transition:"opacity ".concat(l)}),(0,g.Z)((0,y.Z)({},k),{objectFit:s,opacity:1,transition:"opacity ".concat(l)}),(0,g.Z)((0,y.Z)({},k),{objectFit:s,opacity:0})]}),[s,l]),d=(0,u.useState)(0),p=d[0],v=d[1],m=(0,u.useState)(["",""]),T=m[0],w=m[1],x=n!==T[1]?n:"",C=function(){v((p+1)%3),w([T[1],x])};return(0,o.jsx)("span",{style:h,children:(0,b.Z)(T).concat([x]).map((function(e,t){return""!==e&&(0,o.jsx)("img",{src:e,alt:"",style:f[t],onLoad:2===t?C:void 0},e)}))})}T.defaultProps={objectFit:"fill",duration:"3s"};var w=n(1125),x=n.n(w);function C(e){var t,n=e.online,i=e.initialSrc,r=e.src,a=(0,u.useState)(i),s=a[0],c=a[1],l=(0,u.useState)("0s"),h=l[0],f=l[1];return(0,u.useEffect)((function(){clearInterval(t),t=setInterval((function(){"0s"===h&&f("3s"),c("".concat(r,"?").concat(Date.now()))}),2e4)}),[]),(0,o.jsxs)("div",{className:x().poster,children:[!n&&(0,o.jsx)("img",{src:i,alt:"logo"}),n&&(0,o.jsx)(T,{src:s,duration:h,objectFit:"cover",width:"100%",height:"100%"})]})}var j=n(73682),B=n(39370),I=n(52951);var E=function(){function e(t,n){var i=this;(0,v.Z)(this,e),this.player=t,this.supportsDetailedMetrics=!1,this.hasPerformedInitialVariantChange=!1,this.clockSkewMs=0,this.segmentDownloadTime=[],this.bandwidthTracking=[],this.latencyTracking=[],this.errors=0,this.qualityVariantChanges=0,this.isBuffering=!1,this.bufferingDurationTimer=0,this.collectPlaybackMetricsTimer=0,this.videoJSReady=this.videoJSReady.bind(this),this.handlePlaying=this.handlePlaying.bind(this),this.handleBuffering=this.handleBuffering.bind(this),this.handleEnded=this.handleEnded.bind(this),this.handleError=this.handleError.bind(this),this.send=this.send.bind(this),this.collectPlaybackMetrics=this.collectPlaybackMetrics.bind(this),this.handleNoLongerBuffering=this.handleNoLongerBuffering.bind(this),this.player.on("canplaythrough",this.handleNoLongerBuffering),this.player.on("error",this.handleError),this.player.on("stalled",this.handleBuffering),this.player.on("waiting",this.handleBuffering),this.player.on("playing",this.handlePlaying),this.player.on("ended",this.handleEnded);var r=n.xhr;n.Vhs.xhr=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t[0].uri.match(".ts")){var a=new Date,s=t[1];t[1]=function(e,t,n){var r=(new Date).getTime()-a.getTime();i.trackSegmentDownloadTime(r),s(e,t,n)}}return r.apply(void 0,(0,b.Z)(t))},this.videoJSReady(),setInterval((function(){i.send()}),1e4)}return(0,I.Z)(e,[{key:"setClockSkew",value:function(e){this.clockSkewMs=e}},{key:"videoJSReady",value:function(){var e=this,t=this.player.tech({IWillNotUseThisInPlugins:!0});this.supportsDetailedMetrics=!!t,t.on("usage",(function(t){"vhs-unknown-waiting"===t.name&&e.setIsBuffering(!0),"vhs-rendition-change-abr"===t.name&&e.incrementQualityVariantChanges()})),this.player.textTracks().addEventListener("cuechange",(function(){e.incrementQualityVariantChanges()}))}},{key:"handlePlaying",value:function(){var e=this;clearInterval(this.collectPlaybackMetricsTimer),this.collectPlaybackMetricsTimer=setInterval((function(){e.collectPlaybackMetrics()}),5e3)}},{key:"handleEnded",value:function(){clearInterval(this.collectPlaybackMetricsTimer)}},{key:"handleBuffering",value:function(){this.incrementErrorCount(1),this.setIsBuffering(!0)}},{key:"handleNoLongerBuffering",value:function(){this.setIsBuffering(!1)}},{key:"handleError",value:function(){this.incrementErrorCount(1)}},{key:"incrementErrorCount",value:function(e){this.errors+=e}},{key:"incrementQualityVariantChanges",value:function(){this.hasPerformedInitialVariantChange?this.qualityVariantChanges++:this.hasPerformedInitialVariantChange=!0}},{key:"setIsBuffering",value:function(e){var t=this;this.isBuffering=e,e?this.bufferingDurationTimer=setTimeout((function(){t.incrementErrorCount(1)}),500):clearTimeout(this.bufferingDurationTimer)}},{key:"trackSegmentDownloadTime",value:function(e){this.segmentDownloadTime.push(e)}},{key:"trackBandwidth",value:function(e){this.bandwidthTracking.push(e)}},{key:"trackLatency",value:function(e){this.latencyTracking.push(e)}},{key:"collectPlaybackMetrics",value:function(){var e=this.player.tech({IWillNotUseThisInPlugins:!0});if(e&&e.vhs&&(!this.player.paused()&&2===this.player.networkState())){var t=e.vhs.systemBandwidth;this.trackBandwidth(t);try{var n=function(e){for(var t,n=e.vhs.playlists.media(),i=e.currentTime(),a=0,s=n.segments.length;a<s;a++)if(i<n.segments[a].end){t=n.segments[a];break}return t||(t=(0,r.Z)(n.segments,1)[0]),t}(e);if(!n||!n.dateTimeObject)return;var i=n.dateTimeObject.getTime(),a=(new Date).getTime()+this.clockSkewMs-i;if(a<0||a/1e3>=40)return;this.trackLatency(a)}catch(s){console.warn(s)}}}},{key:"send",value:function(){var e=this;return(0,i.Z)(s().mark((function t(){var n,i,r,a,o,u,c,l,h,f;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==e.segmentDownloadTime.length){t.next=2;break}return t.abrupt("return");case 2:if(e.player&&!e.player.paused()){t.next=4;break}return t.abrupt("return");case 4:return n=e.errors,e.supportsDetailedMetrics?(a=(r=function(e){return e.reduce((function(e,t){return e+t}),0)/e.length})(e.segmentDownloadTime)/1e3,o=Math.round(1e3*a)/1e3,u=r(e.bandwidthTracking)/1e3,c=Math.round(1e3*u)/1e3,l=r(e.latencyTracking)/1e3,h=Math.round(1e3*l)/1e3,i={bandwidth:c,latency:h,downloadDuration:o,errors:n+e.isBuffering?1:0,qualityVariantChanges:e.qualityVariantChanges}):i={errors:n+e.isBuffering?1:0},e.errors=0,e.qualityVariantChanges=0,e.segmentDownloadTime=[],e.bandwidthTracking=[],e.latencyTracking=[],f={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)},t.prev=13,t.next=16,fetch("/api/metrics/playback",f);case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(13),console.error(t.t0);case 21:case"end":return t.stop()}}),t,null,[[13,18]])})))()}}]),e}(),P=E,Z=n(45785),M=n(82662),D=n(88029),L=n(91224);function S(e,t,n,i){var r=t.getComponent("MenuItem"),a=t.getComponent("MenuItem"),s=t.getComponent("MenuButton"),o=function(e){(0,D.Z)(n,e);var t=(0,L.Z)(n);function n(e,i){return(0,v.Z)(this,n),t.call(this,e,i)}return n.prototype.createEl=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"button",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=(0,Z.Z)((0,M.Z)(n.prototype),"createEl",this).call(this,e,t,i);return r.innerHTML='<hr style="opacity: 0.3; margin-left: 10px; margin-right: 10px;" />',r},n}(r),u=new a(e,{selectable:!0});u.setAttribute("class","latency-toggle-item"),u.on("click",(function(){i()}));var c=new o(e,{selectable:!1}),l=t.extend(s,{constructor:function(){s.call(this,e)},createItems:function(){var t=e.tech({IWillNotUseThisInPlugins:!0}),i=new a(e,{selectable:!0,label:"Auto"}),r=n.map((function(n){var i=new a(e,{selectable:!0,label:n.name});return i.on("click",(function(){t?(t.vhs.representations().forEach((function(e,t){e.enabled(t===n.index)})),i.selected(!1)):console.warn("Invalid attempt to access null player tech")})),i}));i.on("click",(function(){t.vhs.representations().forEach((function(e){e.enabled(!0)})),i.selected(!1)}));var s=!!t&&!!t.vhs;return n.length<2&&s?[u]:n.length>1&&s?[i].concat((0,b.Z)(r),[c,u]):s||1!==n.length?[i].concat((0,b.Z)(r)):[]}}),h=e.tech({IWillNotUseThisInPlugins:!0});if(!(n.length<2)||h&&h.vhs){var f=new l;return f.addClass("vjs-quality-selector"),f}}var _=function(){function e(t){(0,v.Z)(this,e),this.player=t,this.playing=!1,this.enabled=!1,this.running=!1,this.inTimeout=!1,this.jumpingToLiveIgnoreBuffer=!1,this.timeoutTimer=0,this.checkTimer=0,this.bufferingCounter=0,this.bufferingTimer=0,this.playbackRate=1,this.lastJumpOccurred=null,this.startupTime=new Date,this.clockSkewMs=0,this.currentLatency=null,this.bufferedAtLatency=[],this.player.on("playing",this.handlePlaying.bind(this)),this.player.on("pause",this.handlePause.bind(this)),this.player.on("error",this.handleError.bind(this)),this.player.on("waiting",this.handleBuffering.bind(this)),this.player.on("stalled",this.handleBuffering.bind(this)),this.player.on("ended",this.handleEnded.bind(this)),this.player.on("canplaythrough",this.handlePlaying.bind(this)),this.player.on("canplay",this.handlePlaying.bind(this)),this.check=this.check.bind(this),this.start=this.start.bind(this),this.enable=this.enable.bind(this),this.countBufferingEvent=this.countBufferingEvent.bind(this)}return(0,I.Z)(e,[{key:"setClockSkew",value:function(e){this.clockSkewMs=e}},{key:"check",value:function(){if(!((new Date).getTime()-this.startupTime.getTime()<1e4)&&!this.player.paused()&&!this.player.seeking()&&!this.inTimeout&&this.enabled){var e=this.player.tech({IWillNotUseThisInPlugins:!0});if(e&&e.vhs)if(2===this.player.networkState()){var t=0;try{if(0===e.vhs.stats.buffered.length)return void this.timeout();e.vhs.stats.buffered.forEach((function(e){t+=e.end-e.start}))}catch(m){console.error(m)}var n=e.vhs.playlists.media().attributes.BANDWIDTH,i=e.vhs.systemBandwidth/n;try{var a=function(e){for(var t,n=e.vhs.playlists.media(),i=e.currentTime(),a=0,s=n.segments.length;a<s;a++)if(i<n.segments[a].end){t=n.segments[a];break}return t||(t=(0,r.Z)(n.segments,1)[0]),t}(e);if(!a)return;if(i<1.8&&t<6*a.duration)return void this.timeout();var s=Math.max(4e3,1e3*a.duration*1.8),o=this.bufferedAtLatency.concat([s]),u=o.reduce((function(e,t){return e+t}),0)/o.length,c=Math.max(1.4*u,Math.min(1e3*a.duration*2.6,15e3));u>=c&&(c=u+3e3);var l=a.dateTimeObject.getTime(),h=(new Date).getTime()+this.clockSkewMs-l;if(this.currentLatency=h,Math.abs(h)>8e4)return void this.timeout();if(h>c){if(this.shouldJumpToLive()&&h>c+5e3){var f=h/1e3-3*a.duration,d=this.player.currentTime()+f;console.info("latency",h/1e3,"jumping",f,"to live from ",this.player.currentTime()," to ",d);var p=e.vhs.stats.buffered[0].end;if(d>e.vhs.stats.buffered[0].start<p)return void this.jump(d)}var v=.33*i;(v=Math.max(Math.min(v,1.08),1))>this.playbackRate+.02&&(v=this.playbackRate+.02),v=Math.round(v*Math.pow(10,3))/Math.pow(10,3),this.start(v)}else h<=u&&this.stop();console.info("latency",h/1e3,"min",u/1e3,"max",c/1e3,"playback rate",this.playbackRate,"enabled:",this.enabled,"running: ",this.running,"skew: ",this.clockSkewMs,"rebuffer events: ",this.bufferingCounter)}catch(y){}}}}},{key:"shouldJumpToLive",value:function(){return!(this.bufferingCounter>1)&&(new Date).getTime()-this.lastJumpOccurred>2e4}},{key:"jump",value:function(e){var t=this;this.jumpingToLiveIgnoreBuffer=!0,this.performedInitialLiveJump=!0,this.lastJumpOccurred=new Date,console.info("current time",this.player.currentTime(),"seeking to",e),this.player.currentTime(e),setTimeout((function(){t.jumpingToLiveIgnoreBuffer=!1}),5e3)}},{key:"setPlaybackRate",value:function(e){this.playbackRate=e,this.player.playbackRate(e)}},{key:"start",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;!this.inTimeout&&this.enabled&&e!==this.playbackRate&&(this.running=!0,this.setPlaybackRate(e))}},{key:"stop",value:function(){this.running&&console.log("stopping latency compensator..."),this.running=!1,this.setPlaybackRate(1)}},{key:"enable",value:function(){var e=this;this.enabled=!0,clearInterval(this.checkTimer),clearTimeout(this.bufferingTimer),this.checkTimer=setInterval((function(){e.check()}),3e3)}},{key:"disable",value:function(){clearInterval(this.checkTimer),clearTimeout(this.timeoutTimer),this.stop(),this.enabled=!1}},{key:"timeout",value:function(){var e=this;this.jumpingToLiveIgnoreBuffer||(this.inTimeout=!0,this.stop(),clearTimeout(this.timeoutTimer),this.timeoutTimer=setTimeout((function(){e.endTimeout()}),3e4))}},{key:"endTimeout",value:function(){clearTimeout(this.timeoutTimer),this.inTimeout=!1}},{key:"handlePlaying",value:function(){var e=this.playing;this.playing=!0,clearTimeout(this.bufferingTimer),this.enabled&&this.shouldJumpToLive()&&(e||(this.jumpingToLiveIgnoreBuffer=!0,this.player.liveTracker.seekToLiveEdge(),this.lastJumpOccurred=new Date))}},{key:"handlePause",value:function(){this.playing=!1}},{key:"handleEnded",value:function(){this.enabled&&this.disable()}},{key:"handleError",value:function(){this.enabled&&this.timeout()}},{key:"countBufferingEvent",value:function(){var e=this;this.bufferingCounter+=1,this.bufferingCounter>4?this.disable():(this.bufferedAtLatency.push(this.currentLatency),console.log("latency compensation timeout due to buffering:",this.bufferingCounter,"buffering events of",4),setTimeout((function(){e.bufferingCounter>0&&(e.bufferingCounter-=1)}),18e4))}},{key:"handleBuffering",value:function(){var e=this;this.enabled&&!this.inTimeout&&(this.jumpingToLiveIgnoreBuffer?this.jumpingToLiveIgnoreBuffer=!1:(this.timeout(),clearTimeout(this.bufferingTimer),this.bufferingTimer=setTimeout((function(){e.countBufferingEvent()}),200)))}}]),e}(),R=_,N="/api/video/variants",O="owncast_volume",V="latencyCompensatorEnabled",J=new m,q=null,A=null,F=!1;function W(){return U.apply(this,arguments)}function U(){return(U=(0,i.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,fetch(N);case 4:return n=e.sent,e.next=7,n.json();case 7:t=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function Q(e){var t=u.useRef(null),n=e.source,a=e.online,h=(0,r.Z)((0,c.FV)(B.We),2),f=h[0],d=h[1],v=(0,c.sJ)(B.g8),m=function(){(0,j.qQ)(O,t.current.muted()?0:t.current.volume())},y=function(e){var t=document.querySelector(".latency-toggle-item > .vjs-menu-item-text");t&&(t.innerHTML=e)},g=function(){A&&A.stop(),F=!0,(A=new R(t.current)).setClockSkew(v),A.enable(),(0,j.qQ)(V,!0),y("disable minimized latency")},b=function(){A&&A.disable(),A=null,F=!1,(0,j.qQ)(V,!1),y('<span style="font-size: 0.8em">enable minimized latency (experimental)</span>')},k=function(){F?b():g()},T=function(e){var t=e.tech({IWillNotUseThisInPlugins:!0});t&&t.vhs&&("true"===(0,j.$o)(V)&&t&&t.vhs?g():b())},w=function(){var e=(0,i.Z)(s().mark((function e(t,n){var i,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:i=e.sent,r=S(t,n,i,k),t.controlBar.addChild(r,{},t.controlBar.children_.length-2),T(t);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();(0,l.y1)("space",(function(){t.current.paused()?t.current.play():t.current.pause()}),{enableOnContentEditable:!1}),(0,l.y1)("f",(function(){t.current.isFullscreen()?t.current.exitFullscreen():t.current.requestFullscreen()}),{enableOnContentEditable:!1}),(0,l.y1)("m",(function(){t.current.muted()||0===t.current.volume()?t.current.volume(.7):t.current.volume(0)}),{enableOnContentEditable:!1}),(0,l.y1)("0",(function(){return t.current.volume(t.current.volume()+.1)}),{enableOnContentEditable:!1}),(0,l.y1)("9",(function(){return t.current.volume(t.current.volume()-.1)}),{enableOnContentEditable:!1});var x={autoplay:!1,controls:!0,responsive:!0,fluid:!1,playsInline:!0,liveui:!0,preload:"auto",controlBar:{progressControl:{seekBar:!1}},html5:{vhs:{enableLowInitialPlaylist:!0,experimentalBufferBasedABR:!0,useNetworkInformationApi:!0,maxPlaylistRetries:30}},liveTracker:{trackingThreshold:0,liveTolerance:15},sources:[{src:n,type:"application/x-mpegURL"}]};return(0,u.useEffect)((function(){q&&q.setClockSkew(v)}),[v]),(0,o.jsxs)("div",{style:{display:"grid"},children:[a&&(0,o.jsx)("div",{style:{gridColumn:1,gridRow:1},children:(0,o.jsx)(p,{options:x,onReady:function(e,n){t.current=e,function(){try{t.current.volume((0,j.$o)(O)||1)}catch(e){console.warn(e)}}(),function(e,t){if(window.hasOwnProperty("WebKitPlaybackTargetAvailabilityEvent")){var n=t.getComponent("Button"),i=t.extend(n,{constructor:function(){n.call(this,e)},handleClick:function(){try{document.getElementsByTagName("video")[0].webkitShowPlaybackTargetPicker()}catch(e){console.error(e)}}});e.controlBar.addChild(new i).addClass("vjs-airplay")}}(e,n),e.on("waiting",(function(){e.log("player is waiting")})),e.on("dispose",(function(){e.log("player will dispose"),J.stop()})),e.on("playing",(function(){e.log("player is playing"),J.start(),d(!0)})),e.on("pause",(function(){e.log("player is paused"),J.stop(),d(!1)})),e.on("ended",(function(){e.log("player is ended"),J.stop(),d(!1)})),n.hookOnce(),e.on("volumechange",m),(q=new P(e,n)).setClockSkew(v),w(e,n)}})}),(0,o.jsx)("div",{style:{gridColumn:1,gridRow:1},children:!f&&(0,o.jsx)(C,{online:a,initialSrc:"/thumbnail.jpg",src:"/thumbnail.jpg"})})]})}},29316:function(e){e.exports={outerContainer:"OfflineBanner_outerContainer__3AbsB",innerContainer:"OfflineBanner_innerContainer__zTm13",header:"OfflineBanner_header__Vu20o",footer:"OfflineBanner_footer__o3Zl5"}},93132:function(e){e.exports={statusbar:"Statusbar_statusbar__AtVnB"}},90121:function(e){e.exports={player:"Player_player__6VqUk",poster:"Player_poster____6gX"}},1125:function(e){e.exports={poster:"VideoPoster_poster__RDkSk"}},25893:function(){}}]);