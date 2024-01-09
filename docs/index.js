(()=>{"use strict";var n={902:(n,t,e)=>{e.d(t,{Z:()=>p});var a=e(81),o=e.n(a),r=e(645),i=e.n(r),s=e(667),c=e.n(s),d=new URL(e(822),e.b),l=i()(o()),u=c()(d);l.push([n.id,`html {\n  height: 100%;\n}\nbody {\n  min-height: 100%;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  background: #e9f6f8;\n}\nbody > section {\n  flex: 1;\n  padding: 15px;\n}\n\nheader {\n  background: url(${u});\n}\n\n#header-wrapper {\n  background: linear-gradient(45deg, #0798abfa, transparent);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\nh1 {\n  color: white;\n  margin: 0;\n}\n\nh2 {\n  color: white;\n  margin: 5px 0;\n  font-size: 1.2em;\n  font-weight: 100;\n}\n\n#my-picture {\n  padding: 5px;\n  width: 108px;\n  height: 108px;\n}\n\nheader img {\n  border-radius: 50%;\n  border: 4px solid #fff;\n  background-color: #ffffff90;\n}\n\n#header-info {\n  padding: 10px;\n  text-shadow: 1px 1px 2px #000000;\n}\n.tbar {\n  margin-bottom: 10px;\n  display: flex;\n  align-items: stretch;\n  flex-direction: row;\n}\n\n.tfill {\n  flex: 1;\n}\n.tbar label {\n  padding: 0 5px;\n}\n\n.select-row {\n  text-align: center;\n}\n\n#tasksTable {\n  width: 100%;\n}\n\n#tasksTable input:not([type="checkbox"]) {\n  width: 100%;\n  box-sizing: border-box;\n}\n\n#tasksTable tfoot input:not([type="image" i]) {\n  box-sizing: border-box;\n}\n\n.table-actions {\n  width: 90px;\n}\n\n#tasksTable td,\n#tasksTable th {\n  border: 1px solid #057988;\n  padding: 5px;\n  line-height: 25px;\n}\n\n#tasksTable th {\n  color: white;\n  background: #057988;\n}\n\nfooter {\n  background-color: #057988;\n  color: white;\n  text-align: center;\n  padding: 7px;\n}\n\n#tasksTable tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n.delete-btn {\n  color: #02638d;\n  display: none;\n}\n\n.edit-btn {\n  color: #02638d;\n  display: none;\n}\n\n.action-btn {\n  cursor: pointer;\n  min-width: 35px;\n}\n\na.edit-row:hover {\n  color: #039903;\n}\n\n#tasksTable tr:hover .action-btn {\n  display: inline-block;\n}\n\n.loading-mask {\n  position: relative;\n}\n.loading-mask::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #00000040;\n  /* rgba(0, 0, 0, 0.25) */\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n.loading-mask::after {\n  content: "💠";\n  text-align: center;\n  /* content: ""; */\n\n  position: absolute;\n  border-width: 3px;\n  border-style: solid;\n  border-color: transparent #fff #fff;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  top: calc(50% - 12px);\n  left: calc(50% - 12px);\n  animation: 2s linear 0s normal none infinite running spin;\n  filter: drop-shadow(0 0 2 rgba(0, 0, 0, 0.33));\n  line-height: initial;\n  font-size: initial;\n}\n\n.select-all-column {\n  width: 40px;\n}\n\n#footer-menu-bar a:visited {\n  color: #fff;\n}\n#footer-menu-bar a:hover,\n#footer-menu-bar a.active {\n  color: #fff;\n  background-color: #055c88;\n}\n\n#footer-menu-bar li {\n  display: inline;\n  margin: 0;\n  padding: 0;\n}\n`,""]);const p=l},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",a=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),a&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),a&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,a,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);a&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,a=0;a<t.length;a++)if(t[a].identifier===n){e=a;break}return e}function a(n,a){for(var r={},i=[],s=0;s<n.length;s++){var c=n[s],d=a.base?c[0]+a.base:c[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=e(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,a);a.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var r=a(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var s=e(r[i]);t[s].references--}for(var c=a(n,o),d=0;d<r.length;d++){var l=e(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=c}}},569:n=>{var t={};n.exports=function(n,e){var a=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var a="";e.supports&&(a+="@supports (".concat(e.supports,") {")),e.media&&(a+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(a+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),a+=e.css,o&&(a+="}"),e.media&&(a+="}"),e.supports&&(a+="}");var r=e.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},822:(n,t,e)=>{n.exports=e.p+"b8f78287268b12151097.jfif"}},t={};function e(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return n[a](r,r.exports,e),r.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var a in t)e.o(t,a)&&!e.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:t[a]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.p="",e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),t=e.n(n),a=e(795),o=e.n(a),r=e(569),i=e.n(r),s=e(565),c=e.n(s),d=e(216),l=e.n(d),u=e(589),p=e.n(u),f=e(902),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;let m,b=[];const v="#tasksForm";function g({id:n,activity:t,domain:e,details:a,status:o}){const r=o.startsWith('https/"')?o.substring(19):o;return`<tr>\n  <td class = "select-row">\n  <input type="checkbox" name="selected" value = "${n}" /></td>\n  <td>${t}</td>\n  <td>${e}</td>\n  <td>${a}</td>\n  <td>\n  <a href ="${o}" target="_blank"> ${r}</a>\n  </td>\n  <td>\n  <button type= "button" data-id= "${n}" class="action-btn delete-btn"> ♻ </button>\n  <button type= "button" data-id= "${n}" class="action-btn edit-btn"> ✏️ </button>\n  </td>\n</tr>`}let y=[];function x(n){if(function(n,t){return n===t||!(n.length!==t.length||!n.every(((n,e)=>n===t[e])))}(y,n))return!1;y=n;const t=n.map(g);L("#tasksTable tbody").innerHTML=t.join("")}async function k(){const n=await fetch(w,{method:"GET",headers:{"Content-Type":"application/json"}}).then((n=>n.json()));b=n,x(n)}const w="http://localhost:3000/tasks-json";function T(n){return fetch(`${w}/delete`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n})}).then((n=>n.json()))}function L(n){return document.querySelector(n)}function C(n){L(n).classList.add("loading-mask")}function E(n){L(n).classList.remove("loading-mask")}L("#removeSelected").addEventListener("click",(async function(){C("#main");const n=[...document.querySelectorAll("input[name=selected]:checked")].map((n=>n.value)).map((n=>T(n)));await Promise.allSettled(n),await k(),E("#main")})),L("#search").addEventListener("input",(n=>{const t=n.target.value,e=function(n,t){return t=t.toLowerCase(),n.filter((({activity:n,domain:e,details:a,status:o})=>n.toLowerCase().includes(t)||e.toLowerCase().includes(t)||a.toLowerCase().includes(t)||o.toLowerCase().includes(t)))}(b,t);x(e)})),L("#selectAll").addEventListener("input",(n=>{document.querySelectorAll("input[name=selected]").forEach((t=>{t.checked=n.target.checked}))})),L("#tasksForm").addEventListener("submit",(async function(n){n.preventDefault(),C(v);const t={activity:L("input[name=activity]").value,domain:L("input[name=domain]").value,details:L("input[name=details]").value,status:L("input[name=status]").value};if(m){t.id=m;const n=await function(n){return fetch(`${w}/update`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json()))}(t);n.success&&(b=function(n,t){return n.map((n=>n.id===t.id?{...n,...t}:n))}(b,t),x(b),L("#tasksForm").reset()),E(v)}else(function(n){return fetch(`${w}/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json()))})(t).then((n=>{n.success&&(t.id=n.id,b=[...b,t],x(b),L("#tasksForm").reset())}));E(v)})),L("#tasksForm").addEventListener("reset",(()=>{m=void 0})),L("#tasksTable tbody").addEventListener("click",(n=>{if(n.target.matches("button.delete-btn")){const{id:t}=n.target.dataset;C(v),T(t).then((n=>{n.success&&(n.success&&(b=b.filter((n=>n.id!==t)),x(b)),E(v))}))}else if(n.target.matches("button.edit-btn")){const{id:t}=n.target.dataset;!function(n){m=n,function({activity:n,domain:t,details:e,status:a}){L("input[name=activity").value=n,L("input[name=domain").value=t,L("input[name=details").value=e,L("input[name=status").value=a}(b.find((t=>t.id===n)))}(t)}})),C(v),k().then((()=>{E(v)}))})()})();