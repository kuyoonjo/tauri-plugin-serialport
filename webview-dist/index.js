function t(t,n,e,i){return new(e||(e=Promise))((function(o,r){function u(t){try{s(i.next(t))}catch(t){r(t)}}function a(t){try{s(i.throw(t))}catch(t){r(t)}}function s(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,a)}s((i=i.apply(t,n||[])).next())}))}function n(t,n){var e,i,o,r,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return u.label++,{value:r[1],done:!1};case 5:u.label++,i=r[1],r=[0];continue;case 7:r=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){u=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){u.label=r[1];break}if(6===r[0]&&u.label<o[1]){u.label=o[1],o=r;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(r);break}o[2]&&u.ops.pop(),u.trys.pop();continue}r=n.call(t,u)}catch(t){r=[6,t],i=0}finally{e=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(t,n)};function i(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}var o=function(){return(o=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function r(t,n,e,i){return new(e||(e=Promise))((function(o,r){function u(t){try{s(i.next(t))}catch(t){r(t)}}function a(t){try{s(i.throw(t))}catch(t){r(t)}}function s(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,a)}s((i=i.apply(t,n||[])).next())}))}function u(t,n){var e,i,o,r,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return u.label++,{value:r[1],done:!1};case 5:u.label++,i=r[1],r=[0];continue;case 7:r=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){u=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){u.label=r[1];break}if(6===r[0]&&u.label<o[1]){u.label=o[1],o=r;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(r);break}o[2]&&u.ops.pop(),u.trys.pop();continue}r=n.call(t,u)}catch(t){r=[6,t],i=0}finally{e=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}function a(t,n){void 0===n&&(n=!1);var e=window.crypto.getRandomValues(new Uint32Array(1))[0],i="_".concat(e);return Object.defineProperty(window,i,{value:function(e){return n&&Reflect.deleteProperty(window,i),null==t?void 0:t(e)},writable:!1,configurable:!0}),e}function s(t,n){return void 0===n&&(n={}),r(this,void 0,void 0,(function(){return u(this,(function(e){return[2,new Promise((function(e,i){var r=a((function(t){e(t),Reflect.deleteProperty(window,"_".concat(u))}),!0),u=a((function(t){i(t),Reflect.deleteProperty(window,"_".concat(r))}),!0);window.__TAURI_IPC__(o({cmd:t,callback:r,error:u},n))}))]}))}))}function c(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){return[2,s("tauri",t)]}))}))}function l(t,n){return r(this,void 0,void 0,(function(){return u(this,(function(e){return[2,c({__tauriModule:"Event",message:{cmd:"unlisten",event:t,eventId:n}})]}))}))}function d(t,n,e){return r(this,void 0,void 0,(function(){return u(this,(function(i){switch(i.label){case 0:return[4,c({__tauriModule:"Event",message:{cmd:"emit",event:t,windowLabel:n,payload:"string"==typeof e?e:JSON.stringify(e)}})];case 1:return i.sent(),[2]}}))}))}function h(t,n,e){return r(this,void 0,void 0,(function(){var i=this;return u(this,(function(o){return[2,c({__tauriModule:"Event",message:{cmd:"listen",event:t,windowLabel:n,handler:a(e)}}).then((function(n){return function(){return r(i,void 0,void 0,(function(){return u(this,(function(e){return[2,l(t,n)]}))}))}}))]}))}))}function f(t,n,e){return r(this,void 0,void 0,(function(){return u(this,(function(i){return[2,h(t,n,(function(n){e(n),l(t,n.id).catch((function(){}))}))]}))}))}Object.freeze({__proto__:null,transformCallback:a,invoke:s,convertFileSrc:function(t,n){void 0===n&&(n="asset");var e=encodeURIComponent(t);return navigator.userAgent.includes("Windows")?"https://".concat(n,".localhost/").concat(e):"".concat(n,"://").concat(e)}});var p,m=function(t,n){this.type="Logical",this.width=t,this.height=n},y=function(){function t(t,n){this.type="Physical",this.width=t,this.height=n}return t.prototype.toLogical=function(t){return new m(this.width/t,this.height/t)},t}(),v=function(t,n){this.type="Logical",this.x=t,this.y=n},b=function(){function t(t,n){this.type="Physical",this.x=t,this.y=n}return t.prototype.toLogical=function(t){return new v(this.x/t,this.y/t)},t}();function w(){return window.__TAURI_METADATA__.__windows.map((function(t){return new z(t.label,{skip:!0})}))}!function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"}(p||(p={}));var g,_=["tauri://created","tauri://error"],M=function(){function t(t){this.label=t,this.listeners=Object.create(null)}return t.prototype.listen=function(t,n){return r(this,void 0,void 0,(function(){var e=this;return u(this,(function(i){return this._handleTauriEvent(t,n)?[2,Promise.resolve((function(){var i=e.listeners[t];i.splice(i.indexOf(n),1)}))]:[2,h(t,this.label,n)]}))}))},t.prototype.once=function(t,n){return r(this,void 0,void 0,(function(){var e=this;return u(this,(function(i){return this._handleTauriEvent(t,n)?[2,Promise.resolve((function(){var i=e.listeners[t];i.splice(i.indexOf(n),1)}))]:[2,f(t,this.label,n)]}))}))},t.prototype.emit=function(t,n){return r(this,void 0,void 0,(function(){var e,i;return u(this,(function(o){if(_.includes(t)){for(e=0,i=this.listeners[t]||[];e<i.length;e++)(0,i[e])({event:t,id:-1,windowLabel:this.label,payload:n});return[2,Promise.resolve()]}return[2,d(t,this.label,n)]}))}))},t.prototype._handleTauriEvent=function(t,n){return!!_.includes(t)&&(t in this.listeners?this.listeners[t].push(n):this.listeners[t]=[n],!0)},t}(),W=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return i(n,t),n.prototype.scaleFactor=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"scaleFactor"}}}})]}))}))},n.prototype.innerPosition=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerPosition"}}}}).then((function(t){var n=t.x,e=t.y;return new b(n,e)}))]}))}))},n.prototype.outerPosition=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerPosition"}}}}).then((function(t){var n=t.x,e=t.y;return new b(n,e)}))]}))}))},n.prototype.innerSize=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerSize"}}}}).then((function(t){var n=t.width,e=t.height;return new y(n,e)}))]}))}))},n.prototype.outerSize=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerSize"}}}}).then((function(t){var n=t.width,e=t.height;return new y(n,e)}))]}))}))},n.prototype.isFullscreen=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isFullscreen"}}}})]}))}))},n.prototype.isMaximized=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMaximized"}}}})]}))}))},n.prototype.isDecorated=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isDecorated"}}}})]}))}))},n.prototype.isResizable=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isResizable"}}}})]}))}))},n.prototype.isVisible=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isVisible"}}}})]}))}))},n.prototype.theme=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"theme"}}}})]}))}))},n.prototype.center=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"center"}}}})]}))}))},n.prototype.requestUserAttention=function(t){return r(this,void 0,void 0,(function(){var n;return u(this,(function(e){return n=null,t&&(n=t===p.Critical?{type:"Critical"}:{type:"Informational"}),[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"requestUserAttention",payload:n}}}})]}))}))},n.prototype.setResizable=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setResizable",payload:t}}}})]}))}))},n.prototype.setTitle=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setTitle",payload:t}}}})]}))}))},n.prototype.maximize=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"maximize"}}}})]}))}))},n.prototype.unmaximize=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unmaximize"}}}})]}))}))},n.prototype.toggleMaximize=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"toggleMaximize"}}}})]}))}))},n.prototype.minimize=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"minimize"}}}})]}))}))},n.prototype.unminimize=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unminimize"}}}})]}))}))},n.prototype.show=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"show"}}}})]}))}))},n.prototype.hide=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"hide"}}}})]}))}))},n.prototype.close=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"close"}}}})]}))}))},n.prototype.setDecorations=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setDecorations",payload:t}}}})]}))}))},n.prototype.setAlwaysOnTop=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setAlwaysOnTop",payload:t}}}})]}))}))},n.prototype.setSize=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSize",payload:{type:t.type,data:{width:t.width,height:t.height}}}}}})]}))}))},n.prototype.setMinSize=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){if(t&&"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMinSize",payload:t?{type:t.type,data:{width:t.width,height:t.height}}:null}}}})]}))}))},n.prototype.setMaxSize=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){if(t&&"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMaxSize",payload:t?{type:t.type,data:{width:t.width,height:t.height}}:null}}}})]}))}))},n.prototype.setPosition=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setPosition",payload:{type:t.type,data:{x:t.x,y:t.y}}}}}})]}))}))},n.prototype.setFullscreen=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFullscreen",payload:t}}}})]}))}))},n.prototype.setFocus=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFocus"}}}})]}))}))},n.prototype.setIcon=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIcon",payload:{icon:"string"==typeof t?t:Array.from(t)}}}}})]}))}))},n.prototype.setSkipTaskbar=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSkipTaskbar",payload:t}}}})]}))}))},n.prototype.setCursorGrab=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorGrab",payload:t}}}})]}))}))},n.prototype.setCursorVisible=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorVisible",payload:t}}}})]}))}))},n.prototype.setCursorIcon=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorIcon",payload:t}}}})]}))}))},n.prototype.setCursorPosition=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorPosition",payload:{type:t.type,data:{x:t.x,y:t.y}}}}}})]}))}))},n.prototype.startDragging=function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"startDragging"}}}})]}))}))},n.prototype.onResized=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){return[2,this.listen("tauri://resize",t)]}))}))},n.prototype.onMoved=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){return[2,this.listen("tauri://move",t)]}))}))},n.prototype.onCloseRequested=function(t){return r(this,void 0,void 0,(function(){var n=this;return u(this,(function(e){return[2,this.listen("tauri://close-requested",(function(e){var i=new P(e);Promise.resolve(t(i)).then((function(){if(!i.isPreventDefault())return n.close()}))}))]}))}))},n.prototype.onFocusChanged=function(t){return r(this,void 0,void 0,(function(){var n,e;return u(this,(function(i){switch(i.label){case 0:return[4,this.listen("tauri://focus",(function(n){t(o(o({},n),{payload:!0}))}))];case 1:return n=i.sent(),[4,this.listen("tauri://blur",(function(n){t(o(o({},n),{payload:!1}))}))];case 2:return e=i.sent(),[2,function(){n(),e()}]}}))}))},n.prototype.onScaleChanged=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){return[2,this.listen("tauri://scale-change",t)]}))}))},n.prototype.onMenuClicked=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){return[2,this.listen("tauri://menu",t)]}))}))},n.prototype.onFileDropEvent=function(t){return r(this,void 0,void 0,(function(){var n,e,i;return u(this,(function(r){switch(r.label){case 0:return[4,this.listen("tauri://file-drop",(function(n){t(o(o({},n),{payload:{type:"drop",paths:n.payload}}))}))];case 1:return n=r.sent(),[4,this.listen("tauri://file-drop-hover",(function(n){t(o(o({},n),{payload:{type:"hover",paths:n.payload}}))}))];case 2:return e=r.sent(),[4,this.listen("tauri://file-drop-cancelled",(function(n){t(o(o({},n),{payload:{type:"cancel"}}))}))];case 3:return i=r.sent(),[2,function(){n(),e(),i()}]}}))}))},n.prototype.onThemeChanged=function(t){return r(this,void 0,void 0,(function(){return u(this,(function(n){return[2,this.listen("tauri://theme-changed",t)]}))}))},n}(M),P=function(){function t(t){this._preventDefault=!1,this.event=t.event,this.windowLabel=t.windowLabel,this.id=t.id}return t.prototype.preventDefault=function(){this._preventDefault=!0},t.prototype.isPreventDefault=function(){return this._preventDefault},t}(),z=function(t){function n(n,e){void 0===e&&(e={});var i=t.call(this,n)||this;return(null==e?void 0:e.skip)||c({__tauriModule:"Window",message:{cmd:"createWebview",data:{options:o({label:n},e)}}}).then((function(){return r(i,void 0,void 0,(function(){return u(this,(function(t){return[2,this.emit("tauri://created")]}))}))})).catch((function(t){return r(i,void 0,void 0,(function(){return u(this,(function(n){return[2,this.emit("tauri://error",t)]}))}))})),i}return i(n,t),n.getByLabel=function(t){return w().some((function(n){return n.label===t}))?new n(t,{skip:!0}):null},n}(W);function x(e){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,s("plugin:serialport|open",{path:e.path,baudRate:e.baudRate})]}))}))}function T(e){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,s("plugin:serialport|close",{path:e})]}))}))}function A(e){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,s("plugin:serialport|write",{path:e.path,value:e.value})]}))}))}function S(e){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,s("plugin:serialport|read",{path:e.path,readEvent:e.readEvent||"".concat(e.path,"-read")})]}))}))}function C(e,i){return t(this,void 0,void 0,(function(){var t,o;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,g.listen(e,(function(t){i(t)}))];case 1:return t=n.sent(),[2,Promise.resolve(t)];case 2:return o=n.sent(),Promise.reject(o),[3,3];case 3:return[2]}}))}))}function E(){return t(this,void 0,void 0,(function(){return n(this,(function(t){return[2,s("plugin:serialport|available_ports")]}))}))}"__TAURI_METADATA__"in window?g=new z(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0}):(console.warn('Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.\nNote that this is not an issue if running this frontend on a browser instead of a Tauri window.'),g=new z("main",{skip:!0})),Object.freeze({__proto__:null,WebviewWindow:z,WebviewWindowHandle:M,WindowManager:W,CloseRequestedEvent:P,getCurrent:function(){return new z(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0})},getAll:w,get appWindow(){return g},LogicalSize:m,PhysicalSize:y,LogicalPosition:v,PhysicalPosition:b,get UserAttentionType(){return p},currentMonitor:function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"currentMonitor"}}}})]}))}))},primaryMonitor:function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"primaryMonitor"}}}})]}))}))},availableMonitors:function(){return r(this,void 0,void 0,(function(){return u(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"availableMonitors"}}}})]}))}))}});export{E as available_ports,T as close,C as listen,x as open,S as read,A as write};
