class w{constructor(e){this.properties=e??[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const Y="https://unpkg.com/@workadventure/scripting-api-extra@1.9.1/dist";class ue{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new w(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function D(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(Y+"/configuration.html"+e,!0)}async function ce(t,e){const n=await WA.room.getTiledMap(),r=new Map;return X(n.layers,r,t,e),r}function X(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const a of o.objects)if(a.type==="variable"||a.class==="variable"){if(n&&o.name!==n||r&&!r.includes(a.name))continue;e.set(a.name,new ue(a))}}else o.type==="group"&&X(o.layers,e,n,r)}let R;async function C(){return R===void 0&&(R=fe()),R}async function fe(){return pe(await WA.room.getTiledMap())}function pe(t){const e=new Map;return Z(t.layers,"",e),e}function Z(t,e,n){for(const r of t)r.type==="group"?Z(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}async function ee(){const t=await C(),e=[];for(const n of t.values())if(n.type==="objectgroup")for(const r of n.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function ge(t){let e=1/0,n=1/0,r=0,o=0;const a=t.data;if(typeof a=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<t.height;s++)for(let i=0;i<t.width;i++)a[i+s*t.width]!==0&&(e=Math.min(e,i),o=Math.max(o,i),n=Math.min(n,s),r=Math.max(r,s));return{top:n,left:e,right:o+1,bottom:r+1}}function te(t){let e=1/0,n=1/0,r=0,o=0;for(const a of t){const s=ge(a);s.left<e&&(e=s.left),s.top<n&&(n=s.top),s.right>o&&(o=s.right),s.bottom>r&&(r=s.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var de=Object.prototype.toString,P=Array.isArray||function(e){return de.call(e)==="[object Array]"};function G(t){return typeof t=="function"}function he(t){return P(t)?"array":typeof t}function O(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function J(t,e){return t!=null&&typeof t=="object"&&e in t}function ye(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var be=RegExp.prototype.test;function me(t,e){return be.call(t,e)}var ve=/\S/;function Ae(t){return!me(ve,t)}var We={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function we(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return We[n]})}var Se=/\s*/,Ce=/\s+/,_=/\s*=/,Pe=/\s*\}/,ke=/#|\^|\/|>|\{|&|=|!/;function Le(t,e){if(!t)return[];var n=!1,r=[],o=[],a=[],s=!1,i=!1,l="",c=0;function p(){if(s&&!i)for(;a.length;)delete o[a.pop()];else a=[];s=!1,i=!1}var h,b,E;function k(v){if(typeof v=="string"&&(v=v.split(Ce,2)),!P(v)||v.length!==2)throw new Error("Invalid tags: "+v);h=new RegExp(O(v[0])+"\\s*"),b=new RegExp("\\s*"+O(v[1])),E=new RegExp("\\s*"+O("}"+v[1]))}k(e||d.tags);for(var f=new T(t),m,u,y,L,V,A;!f.eos();){if(m=f.pos,y=f.scanUntil(h),y)for(var B=0,le=y.length;B<le;++B)L=y.charAt(B),Ae(L)?(a.push(o.length),l+=L):(i=!0,n=!0,l+=" "),o.push(["text",L,m,m+1]),m+=1,L===`
`&&(p(),l="",c=0,n=!1);if(!f.scan(h))break;if(s=!0,u=f.scan(ke)||"name",f.scan(Se),u==="="?(y=f.scanUntil(_),f.scan(_),f.scanUntil(b)):u==="{"?(y=f.scanUntil(E),f.scan(Pe),f.scanUntil(b),u="&"):y=f.scanUntil(b),!f.scan(b))throw new Error("Unclosed tag at "+f.pos);if(u==">"?V=[u,y,m,f.pos,l,c,n]:V=[u,y,m,f.pos],c++,o.push(V),u==="#"||u==="^")r.push(V);else if(u==="/"){if(A=r.pop(),!A)throw new Error('Unopened section "'+y+'" at '+m);if(A[1]!==y)throw new Error('Unclosed section "'+A[1]+'" at '+m)}else u==="name"||u==="{"||u==="&"?i=!0:u==="="&&k(y)}if(p(),A=r.pop(),A)throw new Error('Unclosed section "'+A[1]+'" at '+f.pos);return Te(Me(o))}function Me(t){for(var e=[],n,r,o=0,a=t.length;o<a;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function Te(t){for(var e=[],n=e,r=[],o,a,s=0,i=t.length;s<i;++s)switch(o=t[s],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":a=r.pop(),a[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function T(t){this.string=t,this.tail=t,this.pos=0}T.prototype.eos=function(){return this.tail===""};T.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};T.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function S(t,e){this.view=t,this.cache={".":this.view},this.parent=e}S.prototype.push=function(e){return new S(e,this)};S.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,a,s,i,l=!1;o;){if(e.indexOf(".")>0)for(a=o.view,s=e.split("."),i=0;a!=null&&i<s.length;)i===s.length-1&&(l=J(a,s[i])||ye(a,s[i])),a=a[s[i++]];else a=o.view[e],l=J(o.view,e);if(l){r=a;break}o=o.parent}n[e]=r}return G(r)&&(r=r.call(this.view)),r};function g(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}g.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};g.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||d.tags).join(":"),a=typeof r<"u",s=a?r.get(o):void 0;return s==null&&(s=Le(e,n),a&&r.set(o,s)),s};g.prototype.render=function(e,n,r,o){var a=this.getConfigTags(o),s=this.parse(e,a),i=n instanceof S?n:new S(n,void 0);return this.renderTokens(s,i,r,e,o)};g.prototype.renderTokens=function(e,n,r,o,a){for(var s="",i,l,c,p=0,h=e.length;p<h;++p)c=void 0,i=e[p],l=i[0],l==="#"?c=this.renderSection(i,n,r,o,a):l==="^"?c=this.renderInverted(i,n,r,o,a):l===">"?c=this.renderPartial(i,n,r,a):l==="&"?c=this.unescapedValue(i,n):l==="name"?c=this.escapedValue(i,n,a):l==="text"&&(c=this.rawValue(i)),c!==void 0&&(s+=c);return s};g.prototype.renderSection=function(e,n,r,o,a){var s=this,i="",l=n.lookup(e[1]);function c(b){return s.render(b,n,r,a)}if(l){if(P(l))for(var p=0,h=l.length;p<h;++p)i+=this.renderTokens(e[4],n.push(l[p]),r,o,a);else if(typeof l=="object"||typeof l=="string"||typeof l=="number")i+=this.renderTokens(e[4],n.push(l),r,o,a);else if(G(l)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");l=l.call(n.view,o.slice(e[3],e[5]),c),l!=null&&(i+=l)}else i+=this.renderTokens(e[4],n,r,o,a);return i}};g.prototype.renderInverted=function(e,n,r,o,a){var s=n.lookup(e[1]);if(!s||P(s)&&s.length===0)return this.renderTokens(e[4],n,r,o,a)};g.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),a=e.split(`
`),s=0;s<a.length;s++)a[s].length&&(s>0||!r)&&(a[s]=o+a[s]);return a.join(`
`)};g.prototype.renderPartial=function(e,n,r,o){if(r){var a=this.getConfigTags(o),s=G(r)?r(e[1]):r[e[1]];if(s!=null){var i=e[6],l=e[5],c=e[4],p=s;l==0&&c&&(p=this.indentPartial(s,c,i));var h=this.parse(p,a);return this.renderTokens(h,n,r,p,o)}}};g.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r};g.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||d.escape,a=n.lookup(e[1]);if(a!=null)return typeof a=="number"&&o===d.escape?String(a):o(a)};g.prototype.rawValue=function(e){return e[1]};g.prototype.getConfigTags=function(e){return P(e)?e:e&&typeof e=="object"?e.tags:void 0};g.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!P(e))return e.escape};var d={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){M.templateCache=t},get templateCache(){return M.templateCache}},M=new g;d.clearCache=function(){return M.clearCache()};d.parse=function(e,n){return M.parse(e,n)};d.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+he(e)+'" was given as the first argument for mustache#render(template, view, partials)');return M.render(e,n,r,o)};d.escape=we;d.Scanner=T;d.Context=S;d.Writer=g;class ne{constructor(e,n){this.template=e,this.state=n,this.ast=d.parse(e)}getValue(){return this.value===void 0&&(this.value=d.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=d.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],a=r[1],s=r[4];["name","&","#","^"].includes(o)&&n.add(a),s!==void 0&&typeof s!="string"&&this.recursiveGetUsedVariables(s,n)}}}async function Ee(){var t;const e=await ee();for(const n of e){const r=(t=n.properties)!==null&&t!==void 0?t:[];for(const o of r){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const a=new ne(o.value,WA.state);if(a.isPureString())continue;const s=a.getValue();await q(n.name,o.name,s),a.onChange(async i=>{await q(n.name,o.name,i)})}}}async function Ve(){var t;const e=await C();for(const[n,r]of e.entries())if(r.type!=="objectgroup"){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const a of o){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const s=new ne(a.value,WA.state);if(s.isPureString())continue;const i=s.getValue();H(n,a.name,i),s.onChange(l=>{H(n,a.name,l)})}}}async function q(t,e,n){console.log(t),(await WA.room.area.get(t)).setProperty(e,n)}function H(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}const xe="https://admin.workadventu.re/html";let j,N=0,I=0;function F(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function Be(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=oe(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Re(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=oe(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function re(t){return t.map(e=>j.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function oe(t){const e=re(t),n=te(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(N-r,2)+Math.pow(I-o,2))}function Oe(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Be(t):Re(t),F(t)}),F(t)}function K(t,e,n,r){const o=t.name;let a,s,i=!1;const l=n.getString("tag");let c=!0;l&&!WA.player.tags.includes(l)&&(c=!1);const p=!!l;function h(){var u;a&&a.remove(),a=WA.ui.displayActionMessage({message:(u=n.getString("closeTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,b()}})}function b(){var u;a&&a.remove(),a=WA.ui.displayActionMessage({message:(u=n.getString("openTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,h()}})}function E(){let u;if(t.type==="tilelayer")u=te(re(e.properties.mustGetString("closeLayer").split(`
`)));else{if(t.x===void 0||t.y===void 0||t.width===void 0||t.height===void 0)throw new Error(`Doorstep zone "${t.name}" is missing x, y, width or height`);u={top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}s=WA.room.website.create({name:"doorKeypad"+o,url:r+"/keypad.html#"+encodeURIComponent(o),position:{x:u.right*32,y:u.top*32,width:32*3,height:32*4},allowApi:!0})}function k(){s&&(WA.room.website.delete(s.name),s=void 0)}function f(){if(i=!0,n.getBoolean("autoOpen")&&c){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(p&&!c||!p)&&(n.getString("code")||n.getString("codeVariable"))){E();return}c&&(WA.state[e.name]?h():b())}function m(){i=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),a&&a.remove(),k()}t.type==="tilelayer"?(WA.room.onEnterLayer(o).subscribe(f),WA.room.onLeaveLayer(o).subscribe(m)):(WA.room.area.onEnter(o).subscribe(f),WA.room.area.onLeave(o).subscribe(m)),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&h(),s&&WA.state[e.name]===!0&&k(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&b())})}function je(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-N,2)+Math.pow(t.y-I,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function Ue(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&je(t)})}function $(t,e,n){let r;const o=e.getString("bellPopup");if(n.type==="tilelayer"){const a=n.name;WA.room.onEnterLayer(a).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(a).subscribe(()=>{r&&(r.close(),r=void 0)})}else{const a=n.name;WA.room.area.onEnter(a).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.area.onLeave(a).subscribe(()=>{r&&(r.close(),r=void 0)})}}async function Ge(t){t=t??xe;const e=await ce();j=await C();for(const n of e.values())n.properties.get("door")&&Oe(n),n.properties.get("bell")&&Ue(n);for(const n of j.values()){const r=new w(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const s=e.get(o);if(s===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');K(n,s,r,t)}const a=r.getString("bellVariable");a&&n.type==="tilelayer"&&$(a,r,n)}for(const n of await ee()){const r=new w(n.properties),o=r.getString("doorVariable");if(o){const s=e.get(o);if(s===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of object "'+n.name+'"');K(n,s,r,t)}const a=r.getString("bellVariable");a&&$(a,r,n)}WA.player.onPlayerMove(n=>{N=n.x,I=n.y})}function Ne(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),a=t.getString("triggerMessage"),s=t.getString("tag");Ie(n,e,r,o,a,s)}}function Ie(t,e,n,r,o,a){a&&!WA.player.tags.includes(a)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function De(){const t=await C();for(const e of t.values()){const n=new w(e.properties);Ne(n,e.name)}}let z;async function Je(t){const e=await WA.room.getTiledMap();t=t??Y,z=await C();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new w(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const a of z.values()){const s=new w(a.properties),i=s.getString("openConfig");i&&a.type==="tilelayer"&&_e(i.split(","),a.name,s)}}}function _e(t,e,n){let r;const o=n.getString("openConfigAdminTag");let a=!0;o&&!WA.player.tags.includes(o)&&(a=!1);function s(){var l;r&&r.remove(),r=WA.ui.displayActionMessage({message:(l=n.getString("openConfigTriggerMessage"))!==null&&l!==void 0?l:"Press SPACE or touch here to configure",callback:()=>D(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const l=n.getString("openConfigTrigger");a&&(l&&l==="onaction"?s():D(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),i()})}function ae(){return WA.onInit().then(()=>{Ge().catch(t=>console.error(t)),De().catch(t=>console.error(t)),Je().catch(t=>console.error(t)),Ve().catch(t=>console.error(t)),Ee().catch(t=>console.error(t))}).catch(t=>console.error(t))}ae();console.log("Script started successfully");var x=void 0,U=!1,qe="https://forms.office.com/Pages/ResponsePage.aspx?id=nC2noeZJbU-a9lqvoRg7_f26WHDvlOFNi_8Y43fECOdUMDVDTUpUUDRONkxHMzdLQ09WRlQxUUZSMS4u";function se(){x!==void 0&&(x.close(),x=void 0)}var ie="feedback";WA.room.onEnterLayer(ie).subscribe(()=>{x=WA.ui.openPopup("popUpFeedback","Hier kannst du Feedback abgeben.",[{label:"Feedback",callback:t=>{WA.nav.openCoWebSite(qe),U=!0,se()}}])});WA.room.onLeaveLayer(ie).subscribe(()=>{se(),U&&(WA.nav.closeCoWebSites(),U=!1)});WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),ae().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t)),He()}).catch(t=>console.error(t));WA.ui.actionBar.addButton({id:"minimap",type:"action",imageSrc:"https://buenni86.github.io/systel-openspace/map_logo.png",toolTip:"Minimap",callback:async()=>{WA.ui.modal.openModal({title:"Minimap",src:"https://buenni86.github.io/systel-openspace/minimap.html",allow:"fullscreen",allowApi:!0,position:"right"})}});const W="tableStatusMox1";let Q=null;function He(){console.log("Mox 'Table' module loaded"),C().then(t=>{Q=t.get("areas").objects.find(n=>n.name==="Mox1");let e=JSON.parse(WA.state.loadVariable(W));Object.keys(e).includes("playerCount")||(e={playerCount:0},WA.state.saveVariable(W,JSON.stringify(e)),console.log("After Saving: ",JSON.parse(WA.state.loadVariable(W))))}),WA.room.area.onEnter("Mox1").subscribe(()=>{Fe(W),$e(W)?Qe(Q):WA.ui.actionBar.addButton({id:"lockTable",label:"Toggle Table Lock",callback:t=>{console.log(t),ze(W)}})}),WA.room.area.onLeave("Mox1").subscribe(()=>{Ke(W)})}function Fe(t){let e=JSON.parse(WA.state.loadVariable(t));e.playerCount=e.playerCount+1,WA.state.saveVariable(t,JSON.stringify(e)),console.log("After increment",JSON.parse(WA.state.loadVariable(t)))}function Ke(t){WA.ui.actionBar.removeButton("lockTable");const e=JSON.parse(WA.state.loadVariable(t));e.playerCount=e.playerCount-1,e.playerCount<=0&&(e.playerCount=0,e.locked=!1),WA.state.saveVariable(t,JSON.stringify(e)),console.log("After decrement",JSON.parse(WA.state.loadVariable(t)))}function $e(t){return JSON.parse(WA.state.loadVariable(t)).locked}function ze(t){let e=JSON.parse(WA.state.loadVariable(t));e.locked=!e.locked,WA.state.saveVariable(t,JSON.stringify(e))}function Qe(t){WA.controls.disablePlayerControls(),WA.player.getPosition().then(e=>{const n=t.x+t.width+t.width*.03,r=e.y;WA.player.moveTo(n,r,50).finally(()=>{WA.controls.restorePlayerControls()})})}
//# sourceMappingURL=script-8d1be82a.js.map
