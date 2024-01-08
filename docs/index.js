(()=>{"use strict";var n={902:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),s=t(667),c=t.n(s),d=new URL(t(822),t.b),l=i()(r()),u=c()(d);l.push([n.id,`html {\n  height: 100%;\n}\nbody {\n  min-height: 100%;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  background: #e9f6f8;\n}\nbody > section {\n  flex: 1;\n  padding: 15px;\n}\n\nheader {\n  background: url(${u});\n}\n\n#header-wrapper {\n  background: linear-gradient(45deg, #0798abfa, transparent);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\nh1 {\n  color: white;\n  margin: 0;\n}\n\nh2 {\n  color: white;\n  margin: 5px 0;\n  font-size: 1.2em;\n  font-weight: 100;\n}\n\n#my-picture {\n  padding: 5px;\n  width: 108px;\n  height: 108px;\n}\n\nheader img {\n  border-radius: 50%;\n  border: 4px solid #fff;\n  background-color: #ffffff90;\n}\n\n#header-info {\n  padding: 10px;\n  text-shadow: 1px 1px 2px #000000;\n}\n.tbar {\n  margin-bottom: 10px;\n  display: flex;\n  align-items: stretch;\n  flex-direction: row;\n}\n\n.tfill {\n  flex: 1;\n}\n.tbar label {\n  padding: 0 5px;\n}\n\n.select-row {\n  text-align: center;\n}\n\n#teamsTable {\n  width: 100%;\n}\n\n#teamsTable input:not([type="checkbox"]) {\n  width: 100%;\n  box-sizing: border-box;\n}\n\n#teamsTable tfoot input:not([type="image" i]) {\n  box-sizing: border-box;\n}\n\n.table-actions {\n  width: 90px;\n}\n\n#teamsTable td,\n#teamsTable th {\n  border: 1px solid #057988;\n  padding: 5px;\n  line-height: 25px;\n}\n\n#teamsTable th {\n  color: white;\n  background: #057988;\n}\n\nfooter {\n  background-color: #057988;\n  color: white;\n  text-align: center;\n  padding: 7px;\n}\n\n#teamsTable tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n.delete-btn {\n  color: #02638d;\n  display: none;\n}\n\n.edit-btn {\n  color: #02638d;\n  display: none;\n}\n\n.action-btn {\n  cursor: pointer;\n  min-width: 35px;\n}\n\na.edit-row:hover {\n  color: #039903;\n}\n\n#teamsTable tr:hover .action-btn {\n  display: inline-block;\n}\n\n.loading-mask {\n  position: relative;\n}\n.loading-mask::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #00000040;\n  /* rgba(0, 0, 0, 0.25) */\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n.loading-mask::after {\n  content: "💠";\n  text-align: center;\n  /* content: ""; */\n\n  position: absolute;\n  border-width: 3px;\n  border-style: solid;\n  border-color: transparent #fff #fff;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  top: calc(50% - 12px);\n  left: calc(50% - 12px);\n  animation: 2s linear 0s normal none infinite running spin;\n  filter: drop-shadow(0 0 2 rgba(0, 0, 0, 0.33));\n  line-height: initial;\n  font-size: initial;\n}\n\n.select-all-column {\n  width: 40px;\n}\n`,""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},822:(n,e,t)=>{n.exports=t.p+"b8f78287268b12151097.jfif"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.p="",t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(902),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let h,b=[];const g="#teamsForm";function v({id:n,promotion:e,members:t,name:o,url:r}){const a=r.startsWith('https/"')?r.substring(19):r;return`<tr>\n  <td class = "select-row">\n  <input type="checkbox" name="selected" value = "${n}" /></td>\n  <td>${e}</td>\n  <td>${t}</td>\n  <td>${o}</td>\n  <td>\n  <a href ="${r}" target="_blank"> ${a}</a>\n  </td>\n  <td>\n  <button type= "button" data-id= "${n}" class="action-btn delete-btn"> ♻ </button>\n  <button type= "button" data-id= "${n}" class="action-btn edit-btn"> ✏️ </button>\n  </td>\n</tr>`}let y=[];function x(n){if(function(n,e){return n===e||!(n.length!==e.length||!n.every(((n,t)=>n===e[t])))}(y,n))return!1;y=n;const e=n.map(v);L("#teamsTable tbody").innerHTML=e.join("")}async function w(){const n=await fetch(T,{method:"GET",headers:{"Content-Type":"application/json"}}).then((n=>n.json()));b=n,x(n)}const T="http://localhost:3000/teams-json";function k(n){return fetch(`${T}/delete`,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n})}).then((n=>n.json()))}function L(n){return document.querySelector(n)}function C(n){L(n).classList.add("loading-mask")}function E(n){L(n).classList.remove("loading-mask")}L("#removeSelected").addEventListener("click",(async function(){C("#main");const n=[...document.querySelectorAll("input[name=selected]:checked")].map((n=>n.value)).map((n=>k(n)));await Promise.allSettled(n),await w(),E("#main")})),L("#search").addEventListener("input",(n=>{const e=n.target.value,t=function(n,e){return e=e.toLowerCase(),n.filter((({promotion:n,members:t,name:o,url:r})=>n.toLowerCase().includes(e)||t.toLowerCase().includes(e)||o.toLowerCase().includes(e)||r.toLowerCase().includes(e)))}(b,e);x(t)})),L("#selectAll").addEventListener("input",(n=>{document.querySelectorAll("input[name=selected]").forEach((e=>{e.checked=n.target.checked}))})),L("#teamsForm").addEventListener("submit",(async function(n){n.preventDefault(),C(g);const e={promotion:L("input[name=promotion]").value,members:L("input[name=members]").value,name:L("input[name=name]").value,url:L("input[name=url]").value};if(h){e.id=h;const n=await function(n){return fetch(`${T}/update`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json()))}(e);n.success&&(b=function(n,e){return n.map((n=>n.id===e.id?{...n,...e}:n))}(b,e),x(b),L("#teamsForm").reset()),E(g)}else(function(n){return fetch(`${T}/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json()))})(e).then((n=>{n.success&&(e.id=n.id,b=[...b,e],x(b),L("#teamsForm").reset())}));E(g)})),L("#teamsForm").addEventListener("reset",(()=>{h=void 0})),L("#teamsTable tbody").addEventListener("click",(n=>{if(n.target.matches("button.delete-btn")){const{id:e}=n.target.dataset;C(g),k(e).then((n=>{n.success&&(n.success&&(b=b.filter((n=>n.id!==e)),x(b)),E(g))}))}else if(n.target.matches("button.edit-btn")){const{id:e}=n.target.dataset;!function(n){h=n,function({promotion:n,members:e,name:t,url:o}){L("input[name=promotion").value=n,L("input[name=members").value=e,L("input[name=name").value=t,L("input[name=url").value=o}(b.find((e=>e.id===n)))}(e)}})),C(g),w().then((()=>{E(g)}))})()})();