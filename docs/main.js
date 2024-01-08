(()=>{var n={426:(n,t,e)=>{"use strict";e.d(t,{Z:()=>f});var r=e(81),o=e.n(r),i=e(645),a=e.n(i),s=e(667),c=e.n(s),u=new URL(e(280),e.b),l=a()(o()),d=c()(u);l.push([n.id,`html {\n  height: 100%;\n}\nbody {\n  min-height: 100%;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  background: #e9f6f8;\n}\nbody > section {\n  flex: 1;\n  padding: 15px;\n}\n\nheader {\n  background: url(${d});\n}\n\n#header-wrapper {\n  background: linear-gradient(45deg, #0798abfa, transparent);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\nh1 {\n  color: white;\n  margin: 0;\n}\n\nh2 {\n  color: white;\n  margin: 5px 0;\n  font-size: 1.2em;\n  font-weight: 100;\n}\n\n#my-picture {\n  padding: 5px;\n  width: 108px;\n  height: 108px;\n}\n\nheader img {\n  border-radius: 50%;\n  border: 4px solid #fff;\n  background-color: #ffffff90;\n}\n\n#header-info {\n  padding: 10px;\n  text-shadow: 1px 1px 2px #000000;\n}\n.tbar {\n  margin-bottom: 10px;\n  display: flex;\n  align-items: stretch;\n  flex-direction: row;\n}\n\n.tfill {\n  flex: 1;\n}\n.tbar label {\n  padding: 0 5px;\n}\n\n.select-row {\n  text-align: center;\n}\n\n#teamsTable {\n  width: 100%;\n}\n\n#teamsTable input:not([type="checkbox"]) {\n  width: 100%;\n  box-sizing: border-box;\n}\n\n#teamsTable tfoot input:not([type="image" i]) {\n  box-sizing: border-box;\n}\n\n.table-actions {\n  width: 90px;\n}\n\n#teamsTable td,\n#teamsTable th {\n  border: 1px solid #057988;\n  padding: 5px;\n  line-height: 25px;\n}\n\n#teamsTable th {\n  color: white;\n  background: #057988;\n}\n\nfooter {\n  background-color: #057988;\n  color: white;\n  text-align: center;\n  padding: 7px;\n}\n\n#teamsTable tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n.delete-btn {\n  color: #02638d;\n  display: none;\n}\n\n.edit-btn {\n  color: #02638d;\n  display: none;\n}\n\n.action-btn {\n  cursor: pointer;\n  min-width: 35px;\n}\n\na.edit-row:hover {\n  color: #039903;\n}\n\n#teamsTable tr:hover .action-btn {\n  display: inline-block;\n}\n\n.loading-mask {\n  position: relative;\n}\n.loading-mask::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #00000040;\n  /* rgba(0, 0, 0, 0.25) */\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n.loading-mask::after {\n  content: "💠";\n  text-align: center;\n  /* content: ""; */\n\n  position: absolute;\n  border-width: 3px;\n  border-style: solid;\n  border-color: transparent #fff #fff;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  top: calc(50% - 12px);\n  left: calc(50% - 12px);\n  animation: 2s linear 0s normal none infinite running spin;\n  filter: drop-shadow(0 0 2 rgba(0, 0, 0, 0.33));\n  line-height: initial;\n  font-size: initial;\n}\n\n.select-all-column {\n  width: 40px;\n}\n`,""]);const f=l},645:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:n=>{"use strict";n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{"use strict";n.exports=function(n){return n[1]}},705:(n,t,e)=>{var r=e(639).Symbol;n.exports=r},239:(n,t,e)=>{var r=e(705),o=e(607),i=e(333),a=r?r.toStringTag:void 0;n.exports=function(n){return null==n?void 0===n?"[object Undefined]":"[object Null]":a&&a in Object(n)?o(n):i(n)}},561:(n,t,e)=>{var r=e(990),o=/^\s+/;n.exports=function(n){return n?n.slice(0,r(n)+1).replace(o,""):n}},957:(n,t,e)=>{var r="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g;n.exports=r},607:(n,t,e)=>{var r=e(705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,s=r?r.toStringTag:void 0;n.exports=function(n){var t=i.call(n,s),e=n[s];try{n[s]=void 0;var r=!0}catch(n){}var o=a.call(n);return r&&(t?n[s]=e:delete n[s]),o}},333:n=>{var t=Object.prototype.toString;n.exports=function(n){return t.call(n)}},639:(n,t,e)=>{var r=e(957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();n.exports=i},990:n=>{var t=/\s/;n.exports=function(n){for(var e=n.length;e--&&t.test(n.charAt(e)););return e}},279:(n,t,e)=>{var r=e(218),o=e(771),i=e(841),a=Math.max,s=Math.min;n.exports=function(n,t,e){var c,u,l,d,f,p,m=0,h=!1,b=!1,v=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function g(t){var e=c,r=u;return c=u=void 0,m=t,d=n.apply(r,e)}function y(n){var e=n-p;return void 0===p||e>=t||e<0||b&&n-m>=l}function x(){var n=o();if(y(n))return w(n);f=setTimeout(x,function(n){var e=t-(n-p);return b?s(e,l-(n-m)):e}(n))}function w(n){return f=void 0,v&&c?g(n):(c=u=void 0,d)}function T(){var n=o(),e=y(n);if(c=arguments,u=this,p=n,e){if(void 0===f)return function(n){return m=n,f=setTimeout(x,t),h?g(n):d}(p);if(b)return clearTimeout(f),f=setTimeout(x,t),g(p)}return void 0===f&&(f=setTimeout(x,t)),d}return t=i(t)||0,r(e)&&(h=!!e.leading,l=(b="maxWait"in e)?a(i(e.maxWait)||0,t):l,v="trailing"in e?!!e.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),m=0,c=p=u=f=void 0},T.flush=function(){return void 0===f?d:w(o())},T}},218:n=>{n.exports=function(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}},5:n=>{n.exports=function(n){return null!=n&&"object"==typeof n}},448:(n,t,e)=>{var r=e(239),o=e(5);n.exports=function(n){return"symbol"==typeof n||o(n)&&"[object Symbol]"==r(n)}},771:(n,t,e)=>{var r=e(639);n.exports=function(){return r.Date.now()}},841:(n,t,e)=>{var r=e(561),o=e(218),i=e(448),a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;n.exports=function(n){if("number"==typeof n)return n;if(i(n))return NaN;if(o(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=o(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=r(n);var e=s.test(n);return e||c.test(n)?u(n.slice(2),e?2:8):a.test(n)?NaN:+n}},379:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var f=e(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);t[s].references--}for(var c=r(n,o),u=0;u<i.length;u++){var l=e(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},280:(n,t,e)=>{"use strict";n.exports=e.p+"b8f78287268b12151097.jfif"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.p="",e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{"use strict";var n=e(279),t=e.n(n),r=e(379),o=e.n(r),i=e(795),a=e.n(i),s=e(569),c=e.n(s),u=e(565),l=e.n(u),d=e(216),f=e.n(d),p=e(589),m=e.n(p),h=e(426),b={};function v(n){return document.querySelector(n)}function g(n){v(n).classList.add("loading-mask")}function y(n){v(n).classList.remove("loading-mask")}b.styleTagTransform=m(),b.setAttributes=l(),b.insert=c().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=f(),o()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;const x="http://localhost:3000/teams-json";function w(n){return fetch(`${x}/delete`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n})}).then((n=>n.json()))}let T,j=[];const k="#teamsForm";function S({id:n,promotion:t,members:e,name:r,url:o}){const i=o.startsWith('https/"')?o.substring(19):o;return`<tr>\n  <td class = "select-row">\n  <input type="checkbox" name="selected" value = "${n}" /></td>\n  <td>${t}</td>\n  <td>${e}</td>\n  <td>${r}</td>\n  <td>\n  <a href ="${o}" target="_blank"> ${i}</a>\n  </td>\n  <td>\n  <button type= "button" data-id= "${n}" class="action-btn delete-btn"> ♻ </button>\n  <button type= "button" data-id= "${n}" class="action-btn edit-btn"> ✏️ </button>\n  </td>\n</tr>`}let E=[];function L(n){if(function(n,t){return n===t||!(n.length!==t.length||!n.every(((n,e)=>n===t[e])))}(E,n))return!1;E=n;const t=n.map(S);v("#teamsTable tbody").innerHTML=t.join("")}async function O(){const n=await fetch(x,{method:"GET",headers:{"Content-Type":"application/json"}}).then((n=>n.json()));j=n,L(n)}v("#removeSelected").addEventListener("click",(async function(){g("#main");const n=[...document.querySelectorAll("input[name=selected]:checked")].map((n=>n.value)).map((n=>w(n)));await Promise.allSettled(n),await O(),y("#main")})),v("#search").addEventListener("input",t()((n=>{const t=n.target.value,e=function(n,t){return t=t.toLowerCase(),n.filter((({promotion:n,members:e,name:r,url:o})=>n.toLowerCase().includes(t)||e.toLowerCase().includes(t)||r.toLowerCase().includes(t)||o.toLowerCase().includes(t)))}(j,t);L(e)}),1e3)),v("#selectAll").addEventListener("input",(n=>{document.querySelectorAll("input[name=selected]").forEach((t=>{t.checked=n.target.checked}))})),v("#teamsForm").addEventListener("submit",(async function(n){n.preventDefault(),g(k);const t={promotion:v("input[name=promotion]").value,members:v("input[name=members]").value,name:v("input[name=name]").value,url:v("input[name=url]").value};if(T){t.id=T;const n=await function(n){return fetch(`${x}/update`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json()))}(t);n.success&&(j=function(n,t){return n.map((n=>n.id===t.id?{...n,...t}:n))}(j,t),L(j),v("#teamsForm").reset()),y(k)}else(function(n){return fetch(`${x}/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json()))})(t).then((n=>{n.success&&(t.id=n.id,j=[...j,t],L(j),v("#teamsForm").reset())}));y(k)})),v("#teamsForm").addEventListener("reset",(()=>{T=void 0})),v("#teamsTable tbody").addEventListener("click",(n=>{if(n.target.matches("button.delete-btn")){const{id:t}=n.target.dataset;g(k),w(t).then((n=>{n.success&&(n.success&&(j=j.filter((n=>n.id!==t)),L(j)),y(k))}))}else if(n.target.matches("button.edit-btn")){const{id:t}=n.target.dataset;!function(n){T=n,function({promotion:n,members:t,name:e,url:r}){v("input[name=promotion").value=n,v("input[name=members").value=t,v("input[name=name").value=e,v("input[name=url").value=r}(j.find((t=>t.id===n)))}(t)}})),g(k),O().then((()=>{y(k)}))})()})();