(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c360ba7"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(n(t))}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),a=r("9112");for(var c in o){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==i)try{a(u,"forEach",i)}catch(f){u.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=r("ae40"),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1d1c":function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("37e8");n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperties:i})},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3c19":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0",staticStyle:{"font-family":"'Lato',sans-serif"}},[r("header",{staticClass:"max-w-lg mx-auto"},[r("a",{attrs:{href:"#"}},[r("h1",{staticClass:"text-4xl font-bold text-white text-center"},[t._v("Startup")])])]),r("main",{staticClass:"bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl"},[r("section",[r("h3",{staticClass:"font-bold text-2xl"},[t._v("Welcome to Startup")]),r("p",{staticClass:"text-gray-600 pt-2"},[t._v("Sign in to your account.")])]),r("section",{staticClass:"mt-10"},[r("form",{staticClass:"flex flex-col",attrs:{method:"POST",action:"#"}},[r("div",{staticClass:"mb-6 pt-3 rounded bg-gray-200"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2 ml-3",attrs:{for:"email"}},[t._v("Email")]),r("input",{staticClass:"bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3",attrs:{type:"text",id:"email"}})]),r("div",{staticClass:"mb-6 pt-3 rounded bg-gray-200"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2 ml-3",attrs:{for:"password"}},[t._v("Password")]),r("input",{staticClass:"bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3",attrs:{type:"password",id:"password"}})]),r("div",{staticClass:"flex justify-end"},[r("a",{staticClass:"text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6",attrs:{href:"#"}},[t._v("Forgot your password?")])]),r("button",{staticClass:"bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200",attrs:{type:"submit"}},[t._v("Sign In")])])])]),r("div",{staticClass:"max-w-lg mx-auto text-center mt-12 mb-6"},[r("p",{staticClass:"text-white"},[t._v("Don't have an account? "),r("a",{staticClass:"font-bold hover:underline",attrs:{href:"#"}},[t._v("Sign up")]),t._v(".")])]),r("footer",{staticClass:"max-w-lg mx-auto flex justify-center text-white"},[r("a",{staticClass:"hover:underline",attrs:{href:"#"}},[t._v("Contact")]),r("span",{staticClass:"mx-3"},[t._v("•")]),r("a",{staticClass:"hover:underline",attrs:{href:"#"}},[t._v("Privacy")])])])}],i=r("5530"),a=(r("96cf"),r("1da1")),c=r("7ffd"),s={name:"Root",components:{},props:{},data:function(){return{txt:"Hello World"}},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeRouteEnter:function(t,e,r){return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r();case 1:case"end":return t.stop()}}),t)})))()},computed:Object(i["a"])({},Object(c["d"])("test/*")),methods:Object(i["a"])(Object(i["a"])({},Object(c["a"])("test/*")),{},{load:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.testApi();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()})},u=s,f=(r("d1e3"),r("2877")),l=Object(f["a"])(u,n,o,!1,null,null,null);e["default"]=l.exports},4160:function(t,e,r){"use strict";var n=r("23e7"),o=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),a=r("ae40"),c=i("filter"),s=a("filter");n({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("a4d3"),r("4de4"),r("4160"),r("1d1c"),r("7a82"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},"7a82":function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("9bf2");n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:i.f})},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},a465:function(t,e,r){},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),f=r("d039"),l=r("5135"),d=r("e8b5"),b=r("861d"),p=r("825a"),h=r("7b0b"),v=r("fc6a"),m=r("c04e"),y=r("5c6c"),g=r("7c73"),w=r("df75"),x=r("241c"),O=r("057f"),S=r("7418"),j=r("06cf"),C=r("9bf2"),P=r("d1e7"),L=r("9112"),E=r("6eeb"),_=r("5692"),T=r("f772"),k=r("d012"),R=r("90e3"),A=r("b622"),D=r("e538"),M=r("746f"),N=r("d44e"),V=r("69f3"),G=r("b727").forEach,F=T("hidden"),H="Symbol",I="prototype",J=A("toPrimitive"),W=V.set,B=V.getterFor(H),$=Object[I],q=o.Symbol,Q=i("JSON","stringify"),z=j.f,K=C.f,U=O.f,X=P.f,Y=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),rt=_("wks"),nt=o.QObject,ot=!nt||!nt[I]||!nt[I].findChild,it=c&&f((function(){return 7!=g(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=z($,e);n&&delete $[e],K(t,e,r),n&&t!==$&&K($,e,n)}:K,at=function(t,e){var r=Y[t]=g(q[I]);return W(r,{type:H,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},st=function(t,e,r){t===$&&st(Z,e,r),p(t);var n=m(e,!0);return p(r),l(Y,n)?(r.enumerable?(l(t,F)&&t[F][n]&&(t[F][n]=!1),r=g(r,{enumerable:y(0,!1)})):(l(t,F)||K(t,F,y(1,{})),t[F][n]=!0),it(t,n,r)):K(t,n,r)},ut=function(t,e){p(t);var r=v(e),n=w(r).concat(pt(r));return G(n,(function(e){c&&!lt.call(r,e)||st(t,e,r[e])})),t},ft=function(t,e){return void 0===e?g(t):ut(g(t),e)},lt=function(t){var e=m(t,!0),r=X.call(this,e);return!(this===$&&l(Y,e)&&!l(Z,e))&&(!(r||!l(this,e)||!l(Y,e)||l(this,F)&&this[F][e])||r)},dt=function(t,e){var r=v(t),n=m(e,!0);if(r!==$||!l(Y,n)||l(Z,n)){var o=z(r,n);return!o||!l(Y,n)||l(r,F)&&r[F][n]||(o.enumerable=!0),o}},bt=function(t){var e=U(v(t)),r=[];return G(e,(function(t){l(Y,t)||l(k,t)||r.push(t)})),r},pt=function(t){var e=t===$,r=U(e?Z:v(t)),n=[];return G(r,(function(t){!l(Y,t)||e&&!l($,t)||n.push(Y[t])})),n};if(s||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=R(t),r=function(t){this===$&&r.call(Z,t),l(this,F)&&l(this[F],e)&&(this[F][e]=!1),it(this,e,y(1,t))};return c&&ot&&it($,e,{configurable:!0,set:r}),at(e,t)},E(q[I],"toString",(function(){return B(this).tag})),E(q,"withoutSetter",(function(t){return at(R(t),t)})),P.f=lt,C.f=st,j.f=dt,x.f=O.f=bt,S.f=pt,D.f=function(t){return at(A(t),t)},c&&(K(q[I],"description",{configurable:!0,get:function(){return B(this).description}}),a||E($,"propertyIsEnumerable",lt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:q}),G(w(rt),(function(t){M(t)})),n({target:H,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var r=q(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(h(t))}}),Q){var ht=!s||f((function(){var t=q();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(b(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),o[1]=e,Q.apply(null,o)}})}q[I][J]||L(q[I],J,q[I].valueOf),N(q,H),k[F]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,r){var n=r("83ab"),o=r("d039"),i=r("5135"),a=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var r=[][t],u=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:s,l=i(e,1)?e[1]:void 0;return c[t]=!!r&&!o((function(){if(u&&!n)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:s}):t[1]=1,r.call(t,f,l)}))}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),a=r("d039"),c=a((function(){i(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return i(o(t))}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),c=r("65f0"),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l;return function(b,p,h,v){for(var m,y,g=i(b),w=o(g),x=n(p,h,3),O=a(w.length),S=0,j=v||c,C=e?j(b,O):r?j(b,0):void 0;O>S;S++)if((d||S in w)&&(m=w[S],y=x(m,S,g),t))if(e)C[S]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return S;case 2:s.call(C,m)}else if(f)return!1;return l?-1:u||f?f:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},d1e3:function(t,e,r){"use strict";var n=r("a465"),o=r.n(n);o.a},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),a=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),o=c.f,u=i(n),f={},l=0;while(u.length>l)r=o(n,e=u[l++]),void 0!==r&&s(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),a=r("06cf").f,c=r("83ab"),s=o((function(){a(1)})),u=!c||s;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-7c360ba7.7c793e12.js.map