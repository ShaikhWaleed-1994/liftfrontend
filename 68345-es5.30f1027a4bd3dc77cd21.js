(self.webpackChunkPhysic=self.webpackChunkPhysic||[]).push([[68345],{68345:function(e,t,n){"use strict";n.r(t);var r,i=n(64762),a=n(21062),s=(n(46833),n(40308)),o=n(60250),c=n(5119),u="https://www.googletagmanager.com/gtag/js",l=function(e){return e.EVENT="event",e.SET="set",e.CONFIG="config",e}({}),d=function(e){return e.ADD_SHIPPING_INFO="add_shipping_info",e.ADD_PAYMENT_INFO="add_payment_info",e.ADD_TO_CART="add_to_cart",e.ADD_TO_WISHLIST="add_to_wishlist",e.BEGIN_CHECKOUT="begin_checkout",e.CHECKOUT_PROGRESS="checkout_progress",e.EXCEPTION="exception",e.GENERATE_LEAD="generate_lead",e.LOGIN="login",e.PAGE_VIEW="page_view",e.PURCHASE="purchase",e.REFUND="refund",e.REMOVE_FROM_CART="remove_from_cart",e.SCREEN_VIEW="screen_view",e.SEARCH="search",e.SELECT_CONTENT="select_content",e.SELECT_ITEM="select_item",e.SELECT_PROMOTION="select_promotion",e.SET_CHECKOUT_OPTION="set_checkout_option",e.SHARE="share",e.SIGN_UP="sign_up",e.TIMING_COMPLETE="timing_complete",e.VIEW_CART="view_cart",e.VIEW_ITEM="view_item",e.VIEW_ITEM_LIST="view_item_list",e.VIEW_PROMOTION="view_promotion",e.VIEW_SEARCH_RESULTS="view_search_results",e}({}),h=new s.Yd("@firebase/analytics");function f(e,t,n,r,a,s){return(0,i.mG)(this,void 0,void 0,function(){var o,c,u,d;return(0,i.Jh)(this,function(i){switch(i.label){case 0:o=r[a],i.label=1;case 1:return i.trys.push([1,7,,8]),o?[4,t[o]]:[3,3];case 2:return i.sent(),[3,6];case 3:return[4,Promise.all(n)];case 4:return c=i.sent(),(u=c.find(function(e){return e.measurementId===a}))?[4,t[u.appId]]:[3,6];case 5:i.sent(),i.label=6;case 6:return[3,8];case 7:return d=i.sent(),h.error(d),[3,8];case 8:return e(l.CONFIG,a,s),[2]}})})}function p(e,t,n,r,a){return(0,i.mG)(this,void 0,void 0,function(){var s,o,c,u,d,f,p;return(0,i.Jh)(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),s=[],a&&a.send_to?(o=a.send_to,Array.isArray(o)||(o=[o]),[4,Promise.all(n)]):[3,2];case 1:for(c=i.sent(),u=function(e){var n=c.find(function(t){return t.measurementId===e}),r=n&&t[n.appId];if(!r)return s=[],"break";s.push(r)},d=0,f=o;d<f.length&&"break"!==u(f[d]);d++);i.label=2;case 2:return 0===s.length&&(s=Object.values(t)),[4,Promise.all(s)];case 3:return i.sent(),e(l.EVENT,r,a||{}),[3,5];case 4:return p=i.sent(),h.error(p),[3,5];case 5:return[2]}})})}var m=((r={})["already-exists"]="A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",r["already-initialized"]="Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",r["interop-component-reg-failed"]="Firebase Analytics Interop Component failed to instantiate: {$reason}",r["invalid-analytics-context"]="Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",r["indexeddb-unavailable"]="IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",r["fetch-throttle"]="The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",r["config-fetch-failed"]="Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",r["no-api-key"]='The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',r["no-app-id"]='The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',r),v=new o.LL("analytics","Analytics",m),I=new(function(){function e(e,t){void 0===e&&(e={}),void 0===t&&(t=1e3),this.throttleMetadata=e,this.intervalMillis=t}return e.prototype.getThrottleMetadata=function(e){return this.throttleMetadata[e]},e.prototype.setThrottleMetadata=function(e,t){this.throttleMetadata[e]=t},e.prototype.deleteThrottleMetadata=function(e){delete this.throttleMetadata[e]},e}());function g(e){var t;return(0,i.mG)(this,void 0,void 0,function(){var n,r,a,s,o,c;return(0,i.Jh)(this,function(i){switch(i.label){case 0:return n=e.appId,r={method:"GET",headers:(u=e.apiKey,new Headers({Accept:"application/json","x-goog-api-key":u}))},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),[4,fetch(a,r)];case 1:if(200===(s=i.sent()).status||304===s.status)return[3,6];o="",i.label=2;case 2:return i.trys.push([2,4,,5]),[4,s.json()];case 3:return c=i.sent(),(null===(t=c.error)||void 0===t?void 0:t.message)&&(o=c.error.message),[3,5];case 4:return i.sent(),[3,5];case 5:throw v.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o});case 6:return[2,s.json()]}var u})})}function w(e,t,n,r){var a=t.throttleEndTimeMillis,s=t.backoffCount;return void 0===r&&(r=I),(0,i.mG)(this,void 0,void 0,function(){var t,c,u,l,d,f,p;return(0,i.Jh)(this,function(i){switch(i.label){case 0:t=e.appId,c=e.measurementId,i.label=1;case 1:return i.trys.push([1,3,,4]),[4,b(n,a)];case 2:return i.sent(),[3,4];case 3:if(u=i.sent(),c)return h.warn("Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID "+c+' provided in the "measurementId" field in the local Firebase config. ['+u.message+"]"),[2,{appId:t,measurementId:c}];throw u;case 4:return i.trys.push([4,6,,7]),[4,g(e)];case 5:return l=i.sent(),r.deleteThrottleMetadata(t),[2,l];case 6:if(!function(e){if(!(e instanceof o.ZR&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(d=i.sent())){if(r.deleteThrottleMetadata(t),c)return h.warn("Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID "+c+' provided in the "measurementId" field in the local Firebase config. ['+d.message+"]"),[2,{appId:t,measurementId:c}];throw d}return f=503===Number(d.customData.httpStatus)?(0,o.$s)(s,r.intervalMillis,30):(0,o.$s)(s,r.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:s+1},r.setThrottleMetadata(t,p),h.debug("Calling attemptFetch again in "+f+" millis"),[2,w(e,p,n,r)];case 7:return[2]}})})}function b(e,t){return new Promise(function(n,r){var i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener(function(){clearTimeout(a),r(v.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}var E,y,T,_=function(){function e(){this.listeners=[]}return e.prototype.addEventListener=function(e){this.listeners.push(e)},e.prototype.abort=function(){this.listeners.forEach(function(e){return e()})},e}(),C={},N=[],A={},F="dataLayer",G="gtag",O=!1;(T=a.Z).INTERNAL.registerComponent(new c.wA("analytics",function(e){return function(e,t){!function(){var e=[];if((0,o.ru)()&&e.push("This is a browser extension environment."),(0,o.zI)()||e.push("Cookies are not available."),e.length>0){var t=e.map(function(e,t){return"("+(t+1)+") "+e}).join(" "),n=v.create("invalid-analytics-context",{errorInfo:t});h.warn(n.message)}}();var n=e.options.appId;if(!n)throw v.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw v.create("no-api-key");h.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID '+e.options.measurementId+' provided in the "measurementId" field in the local Firebase config.')}if(null!=C[n])throw v.create("already-exists",{id:n});if(!O){!function(e){var t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(F);var r=function(e,t,n,r,a){var s=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];window[r].push(arguments)};return window[a]&&"function"==typeof window[a]&&(s=window[a]),window[a]=function(e,t,n,r){return function(a,s,o){return(0,i.mG)(this,void 0,void 0,function(){var c;return(0,i.Jh)(this,function(i){switch(i.label){case 0:return i.trys.push([0,6,,7]),a!==l.EVENT?[3,2]:[4,p(e,t,n,s,o)];case 1:return i.sent(),[3,5];case 2:return a!==l.CONFIG?[3,4]:[4,f(e,t,n,r,s,o)];case 3:return i.sent(),[3,5];case 4:e(l.SET,s),i.label=5;case 5:return[3,7];case 6:return c=i.sent(),h.error(c),[3,7];case 7:return[2]}})})}}(s,e,t,n),{gtagCore:s,wrappedGtag:window[a]}}(C,N,A,F,G);y=r.wrappedGtag,E=r.gtagCore,O=!0}return C[n]=function(e,t,n,r,a,s){return(0,i.mG)(this,void 0,void 0,function(){var c,d,f,p,m,g,b;return(0,i.Jh)(this,function(E){switch(E.label){case 0:return(c=function(e,t,n){return void 0===t&&(t=I),(0,i.mG)(this,void 0,void 0,function(){var n,r,a,s,o,c,u=this;return(0,i.Jh)(this,function(l){if(a=(n=e.options).apiKey,s=n.measurementId,!(r=n.appId))throw v.create("no-app-id");if(!a){if(s)return[2,{measurementId:s,appId:r}];throw v.create("no-api-key")}return o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new _,setTimeout(function(){return(0,i.mG)(u,void 0,void 0,function(){return(0,i.Jh)(this,function(e){return c.abort(),[2]})})},6e4),[2,w({appId:r,apiKey:a,measurementId:s},o,c,t)]})})}(e)).then(function(t){n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&h.warn("The measurement ID in the local Firebase config ("+e.options.measurementId+") does not match the measurement ID fetched from the server ("+t.measurementId+"). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")}).catch(function(e){return h.error(e)}),t.push(c),d=function(){return(0,i.mG)(this,void 0,void 0,function(){var e;return(0,i.Jh)(this,function(t){switch(t.label){case 0:return(0,o.hl)()?[3,1]:(h.warn(v.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),[2,!1]);case 1:return t.trys.push([1,3,,4]),[4,(0,o.eu)()];case 2:return t.sent(),[3,4];case 3:return e=t.sent(),h.warn(v.create("indexeddb-unavailable",{errorInfo:e}).message),[2,!1];case 4:return[2,!0]}})})}().then(function(e){return e?r.getId():void 0}),[4,Promise.all([c,d])];case 1:return f=E.sent(),p=f[0],m=f[1],function(){for(var e=window.document.getElementsByTagName("script"),t=0,n=Object.values(e);t<n.length;t++){var r=n[t];if(r.src&&r.src.includes(u))return r}return null}()||function(e,t){var n=document.createElement("script");n.src=u+"?l="+e+"&id="+t,n.async=!0,document.head.appendChild(n)}(s,p.measurementId),a("js",new Date),(b={}).origin="firebase",b.update=!0,g=b,null!=m&&(g.firebase_id=m),a(l.CONFIG,p.measurementId,g),[2,p.measurementId]}})})}(e,N,A,t,E,F),{app:e,logEvent:function(e,t,r){(function(e,t,n,r,a){return(0,i.mG)(this,void 0,void 0,function(){var s,o;return(0,i.Jh)(this,function(c){switch(c.label){case 0:return a&&a.global?(e(l.EVENT,n,r),[2]):[3,1];case 1:return[4,t];case 2:s=c.sent(),o=(0,i.pi)((0,i.pi)({},r),{send_to:s}),e(l.EVENT,n,o),c.label=3;case 3:return[2]}})})})(y,C[n],e,t,r).catch(function(e){return h.error(e)})},setCurrentScreen:function(e,t){(function(e,t,n,r){return(0,i.mG)(this,void 0,void 0,function(){var a;return(0,i.Jh)(this,function(i){switch(i.label){case 0:return r&&r.global?(e(l.SET,{screen_name:n}),[2,Promise.resolve()]):[3,1];case 1:return[4,t];case 2:a=i.sent(),e(l.CONFIG,a,{update:!0,screen_name:n}),i.label=3;case 3:return[2]}})})})(y,C[n],e,t).catch(function(e){return h.error(e)})},setUserId:function(e,t){(function(e,t,n,r){return(0,i.mG)(this,void 0,void 0,function(){var a;return(0,i.Jh)(this,function(i){switch(i.label){case 0:return r&&r.global?(e(l.SET,{user_id:n}),[2,Promise.resolve()]):[3,1];case 1:return[4,t];case 2:a=i.sent(),e(l.CONFIG,a,{update:!0,user_id:n}),i.label=3;case 3:return[2]}})})})(y,C[n],e,t).catch(function(e){return h.error(e)})},setUserProperties:function(e,t){(function(e,t,n,r){return(0,i.mG)(this,void 0,void 0,function(){var a,s,o,c,u;return(0,i.Jh)(this,function(i){switch(i.label){case 0:if(!r||!r.global)return[3,1];for(a={},s=0,o=Object.keys(n);s<o.length;s++)a["user_properties."+(c=o[s])]=n[c];return e(l.SET,a),[2,Promise.resolve()];case 1:return[4,t];case 2:u=i.sent(),e(l.CONFIG,u,{update:!0,user_properties:n}),i.label=3;case 3:return[2]}})})})(y,C[n],e,t).catch(function(e){return h.error(e)})},setAnalyticsCollectionEnabled:function(e){(function(e,t){return(0,i.mG)(this,void 0,void 0,function(){var n;return(0,i.Jh)(this,function(r){switch(r.label){case 0:return[4,e];case 1:return n=r.sent(),window["ga-disable-"+n]=!t,[2]}})})})(C[n],e).catch(function(e){return h.error(e)})},INTERNAL:{delete:function(){return delete C[n],Promise.resolve()}}}}(e.getProvider("app").getImmediate(),e.getProvider("installations").getImmediate())},"PUBLIC").setServiceProps({settings:function(e){if(O)throw v.create("already-initialized");e.dataLayerName&&(F=e.dataLayerName),e.gtagName&&(G=e.gtagName)},EventName:d,isSupported:function(){return(0,i.mG)(this,void 0,void 0,function(){return(0,i.Jh)(this,function(e){switch(e.label){case 0:if((0,o.ru)())return[2,!1];if(!(0,o.zI)())return[2,!1];if(!(0,o.hl)())return[2,!1];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,(0,o.eu)()];case 2:return[2,e.sent()];case 3:return e.sent(),[2,!1];case 4:return[2]}})})}})),T.INTERNAL.registerComponent(new c.wA("analytics-internal",function(e){try{return{logEvent:e.getProvider("analytics").getImmediate().logEvent}}catch(t){throw v.create("interop-component-reg-failed",{reason:t})}},"PRIVATE")),T.registerVersion("@firebase/analytics","0.6.13")}}]);