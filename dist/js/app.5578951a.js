(function(e){function n(n){for(var r,c,o=n[0],i=n[1],f=n[2],h=0,l=[];h<o.length;h++)c=o[h],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&l.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(l.length)l.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var o=t[c];0!==a[o]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},a={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-142fa3ec":"03439c38","chunk-2d0ab84e":"f4aa63d9","chunk-2ec270ef":"0d496427","chunk-307839e6":"21855232","chunk-450f4192":"da942b40","chunk-04f0ad4c":"9a7c683e","chunk-2db13c5d":"ad388b1c","chunk-2fde0292":"4709e412","chunk-5055fcce":"d9811135","chunk-54fdad4a":"fc0b88d9","chunk-679c7532":"22f39f59","chunk-7d3f67f6":"e560ed5f"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-142fa3ec":1,"chunk-2ec270ef":1,"chunk-307839e6":1,"chunk-2db13c5d":1,"chunk-2fde0292":1,"chunk-5055fcce":1,"chunk-54fdad4a":1,"chunk-679c7532":1,"chunk-7d3f67f6":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-142fa3ec":"e0bbac89","chunk-2d0ab84e":"31d6cfe0","chunk-2ec270ef":"f7681245","chunk-307839e6":"e5cfec73","chunk-450f4192":"31d6cfe0","chunk-04f0ad4c":"31d6cfe0","chunk-2db13c5d":"29682b73","chunk-2fde0292":"b63ad63f","chunk-5055fcce":"301b091e","chunk-54fdad4a":"2597fe56","chunk-679c7532":"b9904e73","chunk-7d3f67f6":"9a1f034a"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var f=u[o],h=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(h===r||h===a))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){f=l[o],h=f.getAttribute("data-href");if(h===r||h===a)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete c[e],d.parentNode.removeChild(d),t(u)},d.href=a;var s=document.getElementsByTagName("head")[0];s.appendChild(d)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=u);var f,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=o(e);var l=new Error;f=function(n){h.onerror=h.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,t[1](l)}a[e]=void 0}};var d=setTimeout((function(){f({type:"timeout",target:h})}),12e4);h.onerror=h.onload=f,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],h=f.push.bind(f);f.push=n,f=f.slice();for(var l=0;l<f.length;l++)n(f[l]);var d=h;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},4360:function(e,n,t){"use strict";t("caad"),t("2532"),t("c975"),t("a434");var r=t("2b0e"),c=t("2f62"),a=t("5d2d");r["a"].use(c["a"]);n["a"]=new c["a"].Store({state:{user:Object(a["a"])("user_key"),cachePages:["LatoutIndex"]},mutations:{setUser:function(e,n){e.user=n,Object(a["b"])("user_key",e.user)},addCachePage:function(e,n){e.cachePages.includes(n)||e.cachePages.push(n)},removeCachePage:function(e,n){var t=e.cachePages.indexOf(n);-1!==t&&e.cachePages.splice(t,1)}},actions:{},modules:{}})},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("keep-alive",{attrs:{include:e.cachePages}},[t("router-view")],1)],1)},a=[],u=t("5530"),o=t("2f62"),i={name:"App",computed:Object(u["a"])({},Object(o["b"])(["cachePages"]))},f=i,h=t("2877"),l=Object(h["a"])(f,c,a,!1,null,null,null),d=l.exports,s=t("a18c"),p=t("4360"),m=(t("5717"),t("b970")),b=(t("157a"),t("5cfb"),t("4de4"),t("5a0c")),k=t.n(b),g=(t("a471"),t("4208")),v=t.n(g);k.a.extend(v.a),k.a.locale("zh-cn"),r["a"].filter("relativeTime",(function(e){return k()(e).from(k()())})),r["a"].filter("datetime",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm";return k()(e).format(n)})),r["a"].use(m["a"]),r["a"].config.productionTip=!1,new r["a"]({router:s["a"],store:p["a"],render:function(e){return e(d)}}).$mount("#app")},5717:function(e,n,t){},"5d2d":function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return a}));var r=t("53ca"),c=function(e){var n=localStorage.getItem(e);try{return JSON.parse(n)}catch(t){return n}},a=function(e,n){"object"===Object(r["a"])(n)&&(n=JSON.stringify(n)),localStorage.setItem(e,n)}},a18c:function(e,n,t){"use strict";t("d3b7"),t("3ca3"),t("ddb0"),t("ac1f"),t("5319");var r=t("2b0e"),c=t("8c4f"),a=t("2241"),u=t("4360");r["a"].use(c["a"]);var o=[{path:"/login",name:"login",component:function(){return Promise.all([t.e("chunk-450f4192"),t.e("chunk-7d3f67f6")]).then(t.bind(null,"dd7b"))},meta:{requiresAuth:!1}},{path:"/",component:function(){return t.e("chunk-2d0ab84e").then(t.bind(null,"162e"))},children:[{path:"",name:"home",component:function(){return Promise.all([t.e("chunk-450f4192"),t.e("chunk-04f0ad4c"),t.e("chunk-2fde0292")]).then(t.bind(null,"bb51"))},meta:{requiresAuth:!1}},{path:"/qa",name:"qa",component:function(){return t.e("chunk-307839e6").then(t.bind(null,"f9c4"))},meta:{requiresAuth:!1}},{path:"/video",name:"video",component:function(){return t.e("chunk-142fa3ec").then(t.bind(null,"e001"))},meta:{requiresAuth:!1}},{path:"/my",name:"my",component:function(){return Promise.all([t.e("chunk-450f4192"),t.e("chunk-5055fcce")]).then(t.bind(null,"0c6f"))},meta:{requiresAuth:!1}}]},{path:"/search",name:"search",component:function(){return Promise.all([t.e("chunk-450f4192"),t.e("chunk-04f0ad4c"),t.e("chunk-2db13c5d")]).then(t.bind(null,"4e22"))},meta:{requiresAuth:!1}},{path:"/article/:articleId",name:"article",component:function(){return Promise.all([t.e("chunk-450f4192"),t.e("chunk-54fdad4a")]).then(t.bind(null,"72e1"))},props:!0,meta:{requiresAuth:!1}},{path:"/user-profile",name:"user-profile",component:function(){return Promise.all([t.e("chunk-450f4192"),t.e("chunk-679c7532")]).then(t.bind(null,"f1a6"))},meta:{requiresAuth:!1}},{path:"/user-chat",name:"user-chat",component:function(){return t.e("chunk-2ec270ef").then(t.bind(null,"6ec1"))},meta:{requiresAuth:!0}}],i=new c["a"]({routes:o});i.beforeEach((function(e,n,t){if(e.meta.requiresAuth){if(u["a"].state.user)return t();a["a"].confirm({title:"服务提示",message:"该功能需登录才能服务，确认登录吗"}).then((function(){i.replace({name:"login",query:{redirect:i.currentRoute.fullPath}})})).catch((function(){t(!1)}))}else t()})),n["a"]=i}});
//# sourceMappingURL=app.5578951a.js.map