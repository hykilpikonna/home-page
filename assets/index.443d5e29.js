var d=Object.defineProperty,y=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var i=(e,t,r)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&i(e,r,t[r]);if(c)for(var r of c(t))b.call(t,r)&&i(e,r,t[r]);return e},o=(e,t)=>y(e,h(t));const f=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;");var p=(e,...t)=>{if(typeof e=="string")return f(e);let r=e[0];for(const[n,a]of t.entries())r=r+f(String(a))+e[n+1];return r};function w(e){const t=[];for(let[r,n]of Object.entries(e)){if(n===!1)continue;Array.isArray(n)&&(n=n.join(" "));let a=p(r);n!==!0&&(a+=`="${p(String(n))}"`),t.push(a)}return t.length>0?" "+t.join(" "):""}var $=["area","base","br","col","embed","hr","img","input","link","menuitem","meta","param","source","track","wbr"],x=$;const s=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function A(e,...t){if(typeof e=="string")return s(e);let r=e[0];for(const[n,a]of t.entries())r=r+s(String(a))+e[n+1];return r}const E=new Set(x);function k({name:e="div",attributes:t={},html:r="",text:n}={}){if(r&&n)throw new Error("The `html` and `text` options are mutually exclusive");const a=n?A(n):r;let l=`<${e}${w(t)}>`;return E.has(e)||(l+=`${a}</${e}>`),l}const g=()=>/((?<!\+)https?:\/\/(?:www\.)?(?:[-\w.]+?[.@][a-zA-Z\d]{2,}|localhost)(?:[-\w.:%+~#*$!?&/=@]*?(?:,(?!\s))*?)*)/g,m=(e,t)=>k({name:"a",attributes:o(u({href:""},t.attributes),{href:e}),text:typeof t.value=="undefined"?e:void 0,html:typeof t.value=="undefined"?void 0:typeof t.value=="function"?t.value(e):t.value}),S=e=>document.createRange().createContextualFragment(e),j=(e,t)=>e.replace(g(),r=>m(r,t)),T=(e,t)=>{const r=document.createDocumentFragment();for(const[n,a]of Object.entries(e.split(g())))n%2?r.append(S(m(a,t))):a.length>0&&r.append(a);return r};function F(e,t){if(t=u({attributes:{},type:"string"},t),t.type==="string")return j(e,t);if(t.type==="dom")return T(e,t);throw new TypeError("The type option must be either `dom` or `string`")}export{F as l};