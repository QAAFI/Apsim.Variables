(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243],{8e3:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.AmpStateContext=void 0;var d,e,f=(d=c(7294),d&&d.__esModule?d:{default:d}).default.createContext({});b.AmpStateContext=f},9470:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.isInAmpMode=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.ampFirst,c=a.hybrid,d=a.hasQuery;return void 0!==b&&b|| void 0!==c&&c&& void 0!==d&&d}},2717:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.defaultHead=l,b.default=void 0;var d,e=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=k();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}(c(7294)),f=(d=c(1585),d&&d.__esModule?d:{default:d}),g=c(8e3),h=c(5850),i=c(9470);function j(){return(j=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function k(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return k=function(){return a},a}function l(){var a=arguments.length>0&& void 0!==arguments[0]&&arguments[0],b=[e.default.createElement("meta",{charSet:"utf-8"})];return a||b.push(e.default.createElement("meta",{name:"viewport",content:"width=device-width"})),b}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===e.default.Fragment?a.concat(e.default.Children.toArray(b.props.children).reduce(function(a,b){return"string"==typeof b||"number"==typeof b?a:a.concat(b)},[])):a.concat(b)}c(9475);var n=["name","httpEquiv","charSet","itemProp"];function o(a,b){var c,d,f,g;return a.reduce(m,[]).reverse().concat(l(b.inAmpMode).reverse()).filter((c=new Set,d=new Set,f=new Set,g={},function(a){var b=!0,e=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){e=!0;var h=a.key.slice(a.key.indexOf("$")+1);c.has(h)?b=!1:c.add(h)}switch(a.type){case"title":case"base":d.has(a.type)?b=!1:d.add(a.type);break;case"meta":for(var i=0,j=n.length;i<j;i++){var k=n[i];if(a.props.hasOwnProperty(k)){if("charSet"===k)f.has(k)?b=!1:f.add(k);else{var l=a.props[k],m=g[k]||new Set;("name"!==k||!e)&&m.has(l)?b=!1:(m.add(l),g[k]=m)}}}}return b})).reverse().map(function(a,c){var d=a.key||c;if(!b.inAmpMode&&"link"===a.type&&a.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(b){return a.props.href.startsWith(b)})){var f=j({},a.props||{});return f["data-href"]=f.href,f.href=void 0,f["data-optimized-fonts"]=!0,e.default.cloneElement(a,f)}return e.default.cloneElement(a,{key:d})})}var p=function(a){var b=a.children,c=e.useContext(g.AmpStateContext),d=e.useContext(h.HeadManagerContext);return e.default.createElement(f.default,{reduceComponentsToState:o,headManager:d,inAmpMode:i.isInAmpMode(c)},b)};b.default=p,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},1585:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){var b,c=a.headManager,e=a.reduceComponentsToState;function i(){if(c&&c.mountedInstances){var b=d.Children.toArray(Array.from(c.mountedInstances).filter(Boolean));c.updateHead(e(b,a))}}return f&&(null==c||null==(b=c.mountedInstances)||b.add(a.children),i()),g(function(){var b;return null==c||null==(b=c.mountedInstances)||b.add(a.children),function(){var b;null==c||null==(b=c.mountedInstances)||b.delete(a.children)}}),g(function(){return c&&(c._pendingUpdate=i),function(){c&&(c._pendingUpdate=i)}}),h(function(){return c&&c._pendingUpdate&&(c._pendingUpdate(),c._pendingUpdate=null),function(){c&&c._pendingUpdate&&(c._pendingUpdate(),c._pendingUpdate=null)}}),null};var d=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=e();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if(Object.prototype.hasOwnProperty.call(a,f)){var g=d?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(c,f,g):c[f]=a[f]}return c.default=a,b&&b.set(a,c),c}(c(7294));function e(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return e=function(){return a},a}var f=!1,g=f?function(){}:d.useLayoutEffect,h=f?function(){}:d.useEffect},8628:function(a,b,c){"use strict";function d(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}c.r(b),c.d(b,{default:function(){return n}});var e=c(2937);function f(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(a,b)||(0,e.Z)(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=c(7794),h=c.n(g),i=c(9008),j=c.n(i),k=c(7294),l=c(5893),m=function(){var a=f(k.useState("Paste text here"),2),b=a[0],c=a[1],e=k.useState([]),g=f(e,2),i=g[0],m=g[1];function n(a){var b=[];try{var c=RegExp(/(?<=\[Description\(\").+?(?=\"\)\])/),d=RegExp(/(?<=\[Units\(\").+?(?=\"\)\])/),e=RegExp(/(?<=Variable\(\").+?(?=\"\))/);b=(b=a.split("\n").map(function(a){var b=c.exec(a),f=d.exec(a),g=e.exec(a);return{name:g?g[0]:null,description:b?b[0]:null,units:f?f[0]:null,source:a}})).filter(function(a){return a.source})}catch(f){console.error("Error parsing text: "+f)}return b.sort(o("name"))}function o(a){return function(b,c){var d,e,f=null===(d=b[a])|| void 0===d?void 0:d.trim().toLowerCase(),g=null===(e=c[a])|| void 0===e?void 0:e.trim().toLowerCase();return f<g?-1:g<f?1:0}}var p,q,r=function(a){var b=a.data,c=a.fileName,d=a.fileType,e=new Blob([b],{type:d}),f=document.createElement("a");f.download=c,f.href=window.URL.createObjectURL(e);var g=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});f.dispatchEvent(g),f.remove()},s=function(a){a.preventDefault(),r({data:JSON.stringify(i),fileName:"sorghum.json",fileType:"text/json"})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(j(),{children:[(0,l.jsx)("title",{children:"Parse Apsim classic variables"}),(0,l.jsx)("meta",{name:"description",content:"Generated by create-t3-app"}),(0,l.jsx)("link",{rel:"icon",href:"".concat("/Apsim.Variables","/favicon.ico")})]}),(0,l.jsxs)("main",{className:"container mx-auto flex flex-col items-center justify-center min-h-screen p-4",children:[(0,l.jsx)("h1",{className:"md:text-[2rem] leading-normal font-bold text-gray-700",children:"Parse Apsim Classic Variables"}),(0,l.jsx)("div",{className:"w-full",children:(0,l.jsx)("textarea",{className:"w-full border-gray-400 border-2 h-64",value:b,onChange:(q=(p=h().mark(function a(b){return h().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c(b.target.value),a.t0=m,a.next=4,n(b.target.value);case 4:a.t1=a.sent,(0,a.t0)(a.t1);case 6:case"end":return a.stop()}},a)}),function(){var a=this,b=arguments;return new Promise(function(c,e){var f=p.apply(a,b);function g(a){d(f,c,e,g,h,"next",a)}function h(a){d(f,c,e,g,h,"throw",a)}g(void 0)})}),function(a){return q.apply(this,arguments)})})}),(0,l.jsx)("button",{type:"button",onClick:s,className:"ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Export to JSON"}),(0,l.jsx)("ul",{className:"w-fit pt-2 container mx-auto flex flex-col ",children:null==i?void 0:i.map(function(a,b){return(0,l.jsx)("li",{className:"p-2 relative border flex-row",children:a.name?(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsx)("div",{className:"basis-1/4 p-1 font-semibold",children:a.name}),(0,l.jsxs)("div",{className:"basis-1/4 italic ml-4 text-gray-400",children:[" ",a.units?a.units:null]}),(0,l.jsx)("div",{className:"basis-1/2 p-1 text-gray-600",children:a.description?a.description:null})]}):(0,l.jsx)("div",{className:"p-1 italic",children:a.source})},b)})})]})]})},n=m},4385:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/parse",function(){return c(8628)}])},9008:function(a,b,c){a.exports=c(2717)},2587:function(a,b,c){"use strict";function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}c.d(b,{Z:function(){return d}})},2937:function(a,b,c){"use strict";c.d(b,{Z:function(){return e}});var d=c(2587);function e(a,b){if(a){if("string"==typeof a)return(0,d.Z)(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(a);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return(0,d.Z)(a,b)}}}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=4385)}),_N_E=a.O()}])