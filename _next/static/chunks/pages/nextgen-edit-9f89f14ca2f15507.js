(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[351],{6362:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return s}});var d=c(7812),e=c(9008),f=c.n(e),g=c(7294),h=c(3273),i=c(5085),j=c(3028),k=c(9951),l=c(5893),m=function(a){var b=a.id,c=void 0===b?"tag-input":b,e=a.label,f=a.badgeColor,h=a.disabled,i=a.initValues,j=void 0===i?[]:i,m=a.onChange,n=void 0===m?function(a){return null}:m,o=(0,g.useState)(""),p=o[0],q=o[1],r=(0,g.useState)([]),s=r[0],t=r[1];s.length<1&&j.length>0&&t(j);var u=function(){if(p){var a=s;a.length>0&&a.includes(p)||(a.push(p),t((0,d.Z)(a)),n(a)),q("")}},v=function(a){var b,e=s;e.splice(a,1),t((0,d.Z)(e)),null===(b=document.getElementById(c))|| void 0===b||b.focus()},w=function(a){var b,d;q(null!==(b=s[a])&& void 0!==b?b:""),v(a),null===(d=document.getElementById(c))|| void 0===d||d.focus()},x=s.length>0?"":"peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4";return(0,l.jsxs)("div",{className:"flex relative w-full bg-transparent rounded-lg border border-gray-300 focus:border-gray-600",children:[s.length>0&&(0,l.jsx)("div",{className:"pl-2 pt-1 flex gap-1 pointer-events-none",children:s.map(function(a,b){return(0,l.jsx)("div",{className:"pointer-events-auto",children:(0,l.jsxs)(k.Ct,{color:f,onClose:function(){return v(b)},onClick:function(){return w(b)},children:["#",a]})},"tag-".concat(b))})}),(0,l.jsx)("input",{disabled:void 0!==h&&h,type:"text",id:c,className:"block px-2 pb-2 pt-2 w-full text-sm text-gray-900 rounded-lg focus:outline-none focus:ring-0 appearance-none peer",placeholder:" ",value:p,onChange:function(a){return q(a.target.value)},onKeyDown:function(a){"Enter"===a.key&&u()},onBlur:function(){return u()}}),(0,l.jsx)("label",{htmlFor:"floating_outlined",className:"absolute cursor-text pointer-events-none text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 left-1 ".concat(x),children:e})]})};function n(a,b){var c="undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(!c){if(Array.isArray(a)||(c=o(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function(a){throw a},f:e}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function(){c=c.call(a)},n:function(){var a=c.next();return g=a.done,a},e:function(a){h=!0,f=a},f:function(){try{g||null==c.return||c.return()}finally{if(h)throw f}}}}function o(a,b){if(a){if("string"==typeof a)return p(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(a);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return p(a,b)}}function p(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var q=[{name:"Variable name",value:"0"}],r={"0":"blue"},s=function(){var a=(0,g.useState)([]),b=a[0],c=a[1],e=(0,g.useState)({}),k=e[0],o=e[1],p=(0,g.useRef)([]),s=(0,g.useRef)(null);(0,g.useEffect)(function(){c(h),p.current=h.map(function(a){return a.name})},[h]);var t=function(a){var b=a.data,c=a.fileName,d=a.fileType,e=new Blob([b],{type:d}),f=document.createElement("a");f.download=c,f.href=window.URL.createObjectURL(e);var g=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0});f.dispatchEvent(g),f.remove()},u=function(a){a.preventDefault(),t({data:JSON.stringify(b),fileName:"sorghum.json",fileType:"text/json"})},v=function(a,b,c){if(0===a){var d,e;return d=b,!(e=c).name||e.name.toLowerCase().includes(d.toLowerCase())}},w=function(a){o(a)},x=function(a){var b=JSON.parse(a);c((0,d.Z)(b))},y=function(a){var b,c,d=null===(b=a.target)|| void 0===b?void 0:null===(c=b.files)|| void 0===c?void 0:c[0];if(console.log(d),d){var e=new FileReader;e.onload=function(a){var b;x(null===(b=a.target)|| void 0===b?void 0:b.result)},e.readAsText(d)}},z=function(a){var b=!0;for(var c in k){var d,e,f=n(null!==(d=k[c])&& void 0!==d?d:[]);try{for(f.s();!(e=f.n()).done;){var g=e.value;b=b&&v(+c,g,a)}}catch(h){f.e(h)}finally{f.f()}}return b};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(f(),{children:[(0,l.jsx)("title",{children:"Parse Apsim classic variables"}),(0,l.jsx)("meta",{name:"description",content:"Generated by create-t3-app"}),(0,l.jsx)("link",{rel:"icon",href:"".concat("/Apsim.Variables","/favicon.ico")})]}),(0,l.jsxs)("main",{className:"container mx-auto flex flex-col items-center min-h-screen p-4",children:[(0,l.jsx)("h1",{className:"md:text-[2rem] leading-normal font-bold text-gray-700",children:"Edit Apsim Classic Variables"}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("input",{id:"import-file",ref:s,type:"file",className:"hidden",onChange:y}),(0,l.jsx)("button",{type:"button",onClick:function(){var a;return null===(a=s.current)|| void 0===a?void 0:a.click()},className:"bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Import JSON"}),(0,l.jsx)("button",{type:"button",onClick:u,className:"ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Export to JSON"})]}),(0,l.jsx)("div",{className:"mt-4 w-full",children:(0,l.jsx)(j.K,{filterPlaceholder:{name:"Please select"},options:q,onChange:function(a){return w(a)},colorMap:r,suggestions:p.current})}),(0,l.jsx)("ul",{className:"w-full pt-2 container mx-auto flex flex-col ",children:null==b?void 0:b.map(function(a,e){if(!1!==z(a))return a.name?(0,l.jsx)("li",{className:"p-2 relative border flex-row",children:a.name&&(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsxs)("div",{className:"flex flex-col w-1/4",children:[(0,l.jsx)("div",{className:"p-1 font-semibold",children:a.name}),(0,l.jsxs)("div",{className:"pl-1 italic text-xs l-4 text-gray-400",children:[" ",a.units?a.units:null]}),(0,l.jsx)("div",{className:"basis-1/4 p-1 text-sm text-gray-600",children:a.description?a.description:null})]}),(0,l.jsxs)("div",{className:"flex flex-col w-3/4 gap-2",children:[(0,l.jsx)(i.A,{lable:"Apsim NextGen Reference",value:a.nextgen,onChange:function(e){a.nextgen=e,c((0,d.Z)(b))}}),(0,l.jsx)(m,{initValues:a.tags,label:"Apsim NextGen Tags",onChange:function(b){return a.tags=b},id:"tag-input-"+e})]})]})},e):!k&&(0,l.jsx)("li",{className:"p-2 relative border flex-row",children:(0,l.jsx)("div",{className:"p-1 italic",children:a.source})},e)})})]})]})}},3373:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nextgen-edit",function(){return c(6362)}])}},function(a){a.O(0,[445,831,604,774,888,179],function(){var b;return a(a.s=3373)}),_N_E=a.O()}])