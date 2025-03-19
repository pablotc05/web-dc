"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{1360:function(e,t,r){function n(e,t){var r=t&&t.cache?t.cache:c,n=t&&t.serializer?t.serializer:i;return(t&&t.strategy?t.strategy:function(e,t){var r,n,i=1===e.length?a:o;return r=t.cache.create(),n=t.serializer,i.bind(this,e,r,n)})(e,{cache:r,serializer:n})}function a(e,t,r,n){var a=null==n||"number"==typeof n||"boolean"==typeof n?n:r(n),o=t.get(a);return void 0===o&&(o=e.call(this,n),t.set(a,o)),o}function o(e,t,r){var n=Array.prototype.slice.call(arguments,3),a=r(n),o=t.get(a);return void 0===o&&(o=e.apply(this,n),t.set(a,o)),o}r.r(t),r.d(t,{memoize:function(){return n},strategies:function(){return s}});var i=function(){return JSON.stringify(arguments)},l=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(e){return this.cache[e]},e.prototype.set=function(e,t){this.cache[e]=t},e}(),c={create:function(){return new l}},s={variadic:function(e,t){var r,n;return r=t.cache.create(),n=t.serializer,o.bind(this,e,r,n)},monadic:function(e,t){var r,n;return r=t.cache.create(),n=t.serializer,a.bind(this,e,r,n)}}},16456:function(e,t,r){function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}r.d(t,{default:function(){return i}});var a=r(2265),o=r(69362);function i(e){let{locale:t,...r}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl.dev/docs/configuration#locale");return a.createElement(o.IntlProvider,n({locale:t},r))}},23442:function(e,t,r){let n=r(2265).createContext(void 0);t.IntlContext=n},69362:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(2265),a=r(24563),o=r(23442);r(1360);var i=n&&n.__esModule?n:{default:n};t.IntlProvider=function(e){let{children:t,defaultTranslationValues:r,formats:l,getMessageFallback:c,locale:s,messages:u,now:f,onError:v,timeZone:d}=e,h=n.useMemo(()=>a.createCache(),[s]),p=n.useMemo(()=>a.createIntlFormatters(h),[h]),g=n.useMemo(()=>({...a.initializeConfig({locale:s,defaultTranslationValues:r,formats:l,getMessageFallback:c,messages:u,now:f,onError:v,timeZone:d}),formatters:p,cache:h}),[h,r,l,p,c,s,u,f,v,d]);return i.default.createElement(o.IntlContext.Provider,{value:g},t)}},24563:function(e,t,r){var n=r(1360);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(".")}function o(e){return a(e.namespace,e.key)}function i(e){console.error(e)}function l(e,t){return n.memoize(e,{cache:{create:()=>({get:e=>t[e],set(e,r){t[e]=r}})},strategy:n.strategies.variadic})}function c(e,t){return l(function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return new e(...r)},t)}t.createCache=function(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}},t.createIntlFormatters=function(e){return{getDateTimeFormat:c(Intl.DateTimeFormat,e.dateTime),getNumberFormat:c(Intl.NumberFormat,e.number),getPluralRules:c(Intl.PluralRules,e.pluralRules),getRelativeTimeFormat:c(Intl.RelativeTimeFormat,e.relativeTime),getListFormat:c(Intl.ListFormat,e.list),getDisplayNames:c(Intl.DisplayNames,e.displayNames)}},t.defaultGetMessageFallback=o,t.defaultOnError=i,t.initializeConfig=function(e){let{getMessageFallback:t,messages:r,onError:n,...a}=e;return{...a,messages:r,onError:n||i,getMessageFallback:t||o}},t.joinPath=a,t.memoFn=l},3243:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(2265),a={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};let o=(e,t,r,o)=>{let i=(0,n.forwardRef)((r,i)=>{let{color:l="currentColor",size:c=24,stroke:s=2,title:u,className:f,children:v,...d}=r;return(0,n.createElement)("svg",{ref:i,...a[e],width:c,height:c,className:["tabler-icon","tabler-icon-".concat(t),f].join(" "),..."filled"===e?{fill:l}:{strokeWidth:s,stroke:l},...d},[u&&(0,n.createElement)("title",{key:"svg-title"},u),...o.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(v)?v:[v]])});return i.displayName="".concat(r),i}},13103:function(e,t,r){r.d(t,{Z:function(){return n}});var n=(0,r(3243).Z)("outline","book","IconBook",[["path",{d:"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-0"}],["path",{d:"M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0",key:"svg-1"}],["path",{d:"M3 6l0 13",key:"svg-2"}],["path",{d:"M12 6l0 13",key:"svg-3"}],["path",{d:"M21 6l0 13",key:"svg-4"}]])},5405:function(e,t,r){r.d(t,{Z:function(){return n}});var n=(0,r(3243).Z)("outline","info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]])},10363:function(e,t,r){r.d(t,{Z:function(){return n}});var n=(0,r(3243).Z)("outline","news","IconNews",[["path",{d:"M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11",key:"svg-0"}],["path",{d:"M8 8l4 0",key:"svg-1"}],["path",{d:"M8 12l4 0",key:"svg-2"}],["path",{d:"M8 16l4 0",key:"svg-3"}]])},87319:function(e,t,r){r.d(t,{Z:function(){return n}});var n=(0,r(3243).Z)("outline","question-mark","IconQuestionMark",[["path",{d:"M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4",key:"svg-0"}],["path",{d:"M12 19l0 .01",key:"svg-1"}]])},92266:function(e,t,r){r.d(t,{Z:function(){return n}});var n=(0,r(3243).Z)("outline","user","IconUser",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]])},66505:function(e,t,r){r.d(t,{Z:function(){return n}});var n=(0,r(3243).Z)("outline","users","IconUsers",[["path",{d:"M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"svg-2"}],["path",{d:"M21 21v-2a4 4 0 0 0 -3 -3.85",key:"svg-3"}]])},46231:function(e,t,r){r.d(t,{w_:function(){return u}});var n=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(f,l({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,s({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:a,size:o,title:c}=e,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,i),f=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==o?n.createElement(o.Consumer,null,e=>t(e)):t(a)}}}]);