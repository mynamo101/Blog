import{t as pe,k as he,j as ge,z as ft,a as at,e as R,b as ut,s as dt}from"./zh_TW.BSGpsz4g.js";import{y as qe,x as A,z as J,a3 as pt,a4 as ht,H as gt,A as vt,B as Ue,C as U,F as ve,G as ee,I as be,a5 as bt,D as te,W as mt,a6 as yt,a7 as _t,Z as me,Y as wt,$ as M,T as It,a8 as St,a9 as Tt,aa as At,ab as kt,ac as Et,ad as xt,ae as Pt,af as Ct,d as Ot,ag as jt,ah as Lt,ai as Nt,aj as P,ak as Rt,al as ne,v as Q,am as Ft,an as ye,j as S,ao as He,ap as Ve,aq as Qe,O as Dt,N as Mt,ar as re,as as $t,o as zt,at as qt,i as se,au as Ut,m as F,av as Ht,aw as Vt,p as Qt,l as Bt,n as Gt,ax as _e,X as we,b as $,f as Yt,ay as Y,az as Kt,c as Wt,r as Zt,a as Ie,t as Xt}from"./render.AU3tqtiP.js";const Jt="5";function fe(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Se(e,t,[n,r]=[0,0]){A&&0===n&&J();var o=e,i=null,s=null,a=bt,c=!1;const l=(e,t=!0)=>{c=!0,u(t,e)},u=(e,t)=>{if(a===(a=e))return;let c=!1;if(A&&-1!==r){if(0===n){const e=o.data;e===ht?r=0:e===gt?r=1/0:(r=parseInt(e.substring(1)))!=r&&(r=a?1/0:-1)}!!a===r>n&&(o=vt(),Ue(o),U(!1),c=!0,r=-1)}a?(i?ve(i):t&&(i=ee((()=>t(o)))),s&&be(s,(()=>{s=null}))):(s?ve(s):t&&(s=ee((()=>t(o,[n+1,r])))),i&&be(i,(()=>{i=null}))),c&&U(!0)};qe((()=>{c=!1,t(l),c||u(null,null)}),n>0?pt:0),A&&(o=te)}function en(e,t,n,r,o){var i,s=e,a="";qe((()=>{a!==(a=t()??"")?(void 0!==i&&(It(i),i=void 0),""!==a&&(i=ee((()=>{if(A){te.data;for(var e=J(),t=e;null!==e&&(8!==e.nodeType||""!==e.data);)t=e,e=mt(e);if(null===e)throw yt(),_t;return me(te,t),void(s=Ue(e))}var o=a+"";n&&(o=`<svg>${o}</svg>`);var i=wt(o);if((n||r)&&(i=M(i)),me(M(i),i.lastChild),n||r)for(;M(i);)s.before(M(i));else s.before(i)})))):A&&J()}))}function Be(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Be(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function tn(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Be(e))&&(r&&(r+=" "),r+=t);return r}function nn(e){return"object"==typeof e?tn(e):e??""}typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Jt);const Te=[..." \t\n\r\f \v\ufeff"];function rn(e,t,n){var r=null==e?"":""+e;if(t&&(r=r?r+" "+t:t),n)for(var o in n)if(n[o])r=r?r+" "+o:o;else if(r.length)for(var i=o.length,s=0;(s=r.indexOf(o,s))>=0;){var a=s+i;0!==s&&!Te.includes(r[s-1])||a!==r.length&&!Te.includes(r[a])?s=a:r=(0===s?"":r.substring(0,s))+r.substring(a+1)}return""===r?null:r}function Ae(e,t=!1){var n=t?" !important;":";",r="";for(var o in e){var i=e[o];null!=i&&""!==i&&(r+=" "+o+": "+i+n)}return r}function K(e){return"-"!==e[0]||"-"!==e[1]?e.toLowerCase():e}function sn(e,t){if(t){var n,r,o="";if(Array.isArray(t)?(n=t[0],r=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,s=0,a=!1,c=[];n&&c.push(...Object.keys(n).map(K)),r&&c.push(...Object.keys(r).map(K));var l=0,u=-1;const t=e.length;for(var f=0;f<t;f++){var d=e[f];if(a?"/"===d&&"*"===e[f-1]&&(a=!1):i?i===d&&(i=!1):"/"===d&&"*"===e[f+1]?a=!0:'"'===d||"'"===d?i=d:"("===d?s++:")"===d&&s--,!a&&!1===i&&0===s)if(":"===d&&-1===u)u=f;else if(";"===d||f===t-1){if(-1!==u){var p=K(e.substring(l,u).trim());if(!c.includes(p))";"!==d&&f++,o+=" "+e.substring(l,f).trim()+";"}l=f+1,u=-1}}}return n&&(o+=Ae(n)),r&&(o+=Ae(r,!0)),""===(o=o.trim())?null:o}return null==e?null:String(e)}function on(e,t,n,r,o,i){var s=e.__className;if(A||s!==n||void 0===s){var a=rn(n,r,i);(!A||a!==e.getAttribute("class"))&&(null==a?e.removeAttribute("class"):t?e.className=a:e.setAttribute("class",a)),e.__className=n}else if(i&&o!==i)for(var c in i){var l=!!i[c];(null==o||l!==!!o[c])&&e.classList.toggle(c,l)}return i}function W(e,t={},n,r){for(var o in n){var i=n[o];t[o]!==i&&(null==n[o]?e.style.removeProperty(o):e.style.setProperty(o,i,r))}}function cn(e,t,n,r){var o=e.__style;if(A||o!==t){var i=sn(t,r);(!A||i!==e.getAttribute("style"))&&(null==i?e.removeAttribute("style"):e.style.cssText=i),e.__style=t}else r&&(Array.isArray(r)?(W(e,n?.[0],r[0]),W(e,n?.[1],r[1],"important")):W(e,n,r));return r}const O=Symbol("class"),j=Symbol("style"),Ge=Symbol("is custom element"),Ye=Symbol("is html");function Ar(e){if(A){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var n=e.value;H(e,"value",null),e.value=n}if(e.hasAttribute("checked")){var r=e.checked;H(e,"checked",null),e.checked=r}}};e.__on_r=n,Et(n),xt()}}function ln(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function H(e,t,n,r){var o=Ke(e);A&&(o[t]=e.getAttribute(t),"src"===t||"srcset"===t||"href"===t&&"LINK"===e.nodeName)||o[t]!==(o[t]=n)&&("loading"===t&&(e[St]=n),null==n?e.removeAttribute(t):"string"!=typeof n&&We(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function ke(e,t,n,r,o=!1){var i=Ke(e),s=i[Ge],a=!i[Ye];let c=A&&s;c&&U(!1);var l=t||{},u="OPTION"===e.tagName;for(var f in t)f in n||(n[f]=null);n.class?n.class=nn(n.class):n[O]&&(n.class=null),n[j]&&(n.style??=null);var d=We(e);for(const o in n){let c=n[o];if(u&&"value"===o&&null==c)e.value=e.__value="",l[o]=c;else if("class"!==o)if("style"!==o){var p=l[o];if(c!==p){l[o]=c;var h=o[0]+o[1];if("$$"!==h)if("on"===h){const t={},n="$$"+o;let r=o.slice(2);var g=Nt(r);if(Pt(r)&&(r=r.slice(0,-7),t.capture=!0),!g&&p){if(null!=c)continue;e.removeEventListener(r,l[n],t),l[n]=null}if(null!=c)if(g)e[`__${r}`]=c,Ot([r]);else{let i=function(e){l[o].call(this,e)};l[n]=Ct(r,e,i,t)}else g&&(e[`__${r}`]=void 0)}else if("style"===o)H(e,o,c);else if("autofocus"===o)jt(e,!!c);else if(s||"__value"!==o&&("value"!==o||null==c))if("selected"===o&&u)ln(e,c);else{var v=o;a||(v=Lt(v));var b="defaultValue"===v||"defaultChecked"===v;if(null!=c||s||b)b||d.includes(v)&&(s||"string"!=typeof c)?e[v]=c:"function"!=typeof c&&H(e,v,c);else if(i[o]=null,"value"===v||"checked"===v){let n=e;const r=void 0===t;if("value"===v){let e=n.defaultValue;n.removeAttribute(v),n.defaultValue=e,n.value=n.__value=r?e:null}else{let e=n.defaultChecked;n.removeAttribute(v),n.defaultChecked=e,n.checked=!!r&&e}}else e.removeAttribute(o)}else e.value=e.__value=c}}else cn(e,c,t?.[j],n[j]),l[o]=c,l[j]=n[j];else on(e,"http://www.w3.org/1999/xhtml"===e.namespaceURI,c,r,t?.[O],n[O]),l[o]=c,l[O]=n[O]}return c&&U(!0),l}function Ke(e){return e.__attributes??={[Ge]:e.nodeName.includes("-"),[Ye]:e.namespaceURI===Tt}}var Ee=new Map;function We(e){var t=Ee.get(e.nodeName);if(t)return t;Ee.set(e.nodeName,t=[]);for(var n,r=e,o=Element.prototype;o!==r;){for(var i in n=kt(r))n[i].set&&t.push(i);r=At(r)}return t}function fn(e=!1){const t=P,n=t.l.u;if(!n)return;let r=()=>He(t.s);if(e){let e=0,n={};const o=Ve((()=>{let r=!1;const o=t.s;for(const e in o)o[e]!==n[e]&&(n[e]=o[e],r=!0);return r&&e++,e}));r=()=>S(o)}n.b.length&&Rt((()=>{xe(t,r),ye(n.b)})),ne((()=>{const e=Q((()=>n.m.map(Ft)));return()=>{for(const t of e)"function"==typeof t&&t()}})),n.a.length&&ne((()=>{xe(t,r),ye(n.a)}))}function xe(e,t){if(e.l.s)for(const t of e.l.s)S(t);t()}function Ze(e){null===P&&fe(),Qe&&null!==P.l?pn(P).m.push(e):ne((()=>{const t=Q(e);if("function"==typeof t)return t}))}function an(e){null===P&&fe(),Ze((()=>()=>Q(e)))}function un(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}function dn(){const e=P;return null===e&&fe(),(t,n,r)=>{const o=e.s.$$events?.[t];if(o){const i=Dt(o)?o.slice():[o],s=un(t,n,r);for(const t of i)t.call(e.x,s);return!s.defaultPrevented}return!0}}function pn(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}const hn={get(e,t){if(!e.exclude.includes(t))return S(e.version),t in e.special?e.special[t]():e.props[t]},set:(e,t,n)=>(t in e.special||(e.special[t]=vn({get[t](){return e.props[t]}},t,Ht)),e.special[t](n),re(e.version),!0),getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty:(e,t)=>(e.exclude.includes(t)||(e.exclude.push(t),re(e.version)),!0),has:(e,t)=>!e.exclude.includes(t)&&t in e.props,ownKeys:e=>Reflect.ownKeys(e.props).filter((t=>!e.exclude.includes(t)))};function gn(e,t){return new Proxy({props:e,exclude:t,special:{},version:Mt(0)},hn)}function Pe(e){return e.ctx?.d??!1}function vn(e,t,n,r){var o,i=!Qe||!!(n&Ut);o=e[t];var s,a=r,c=!0,l=!1;if(i)s=()=>{var n=e[t];return void 0===n?(l=!0,c&&(c=!1,a=r),a):(c=!0,l=!1,n)};else{var u=zt((()=>e[t]));u.f|=$t,s=()=>{var e=S(u);return void 0!==e&&(a=void 0),void 0===e?a:e}}var f=!1,d=F(o),p=Ve((()=>{var e=s(),t=S(d);return f?(f=!1,t):d.v=e}));return p.equals=qt,function(e,t){if(arguments.length>0){const n=t?S(p):e;if(!p.equals(n)){if(f=!0,se(d,n),l&&void 0!==a&&(a=n),Pe(p))return e;Q((()=>S(p)))}return e}return Pe(p)?p.v:S(p)}}const bn=R,mn={es:ut,en:R,en_us:R,en_gb:R,en_au:R,zh_cn:at,zh_tw:ft,ja:ge,ja_jp:ge,ko:he,ko_kr:he,th:pe,th_th:pe};function yn(e){return mn[e.toLowerCase()]||bn}function kr(e){return yn(dt.lang)[e]}Vt();const Xe=/^[a-z0-9]+(-[a-z0-9]+)*$/,B=(e,t,n,r="")=>{const o=e.split(":");if("@"===e.slice(0,1)){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const e=o.pop(),n=o.pop(),i={provider:o.length>0?o[0]:r,prefix:n,name:e};return t&&!z(i)?null:i}const i=o[0],s=i.split("-");if(s.length>1){const e={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!z(e)?null:e}if(n&&""===r){const e={provider:r,prefix:"",name:i};return t&&!z(e,n)?null:e}return null},z=(e,t)=>!!e&&!(!(t&&""===e.prefix||e.prefix)||!e.name),Je=Object.freeze({left:0,top:0,width:16,height:16}),V=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),G=Object.freeze({...Je,...V}),ie=Object.freeze({...G,body:"",hidden:!1});function _n(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function Ce(e,t){const n=_n(e,t);for(const r in ie)r in V?r in e&&!(r in n)&&(n[r]=V[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function wn(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);return Object.keys(n).concat(Object.keys(r)).forEach((function e(t){if(n[t])return o[t]=[];if(!(t in o)){o[t]=null;const n=r[t]&&r[t].parent,i=n&&e(n);i&&(o[t]=[n].concat(i))}return o[t]})),o}function In(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let i={};function s(e){i=Ce(r[e]||o[e],i)}return s(t),n.forEach(s),Ce(e,i)}function et(e,t){const n=[];if("object"!=typeof e||"object"!=typeof e.icons)return n;e.not_found instanceof Array&&e.not_found.forEach((e=>{t(e,null),n.push(e)}));const r=wn(e);for(const o in r){const i=r[o];i&&(t(o,In(e,o,i)),n.push(o))}return n}const Sn={provider:"",aliases:{},not_found:{},...Je};function Z(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function tt(e){if("object"!=typeof e||null===e)return null;const t=e;if("string"!=typeof t.prefix||!e.icons||"object"!=typeof e.icons||!Z(e,Sn))return null;const n=t.icons;for(const e in n){const t=n[e];if(!e||"string"!=typeof t.body||!Z(t,ie))return null}const r=t.aliases||Object.create(null);for(const e in r){const t=r[e],o=t.parent;if(!e||"string"!=typeof o||!n[o]&&!r[o]||!Z(t,ie))return null}return t}const Oe=Object.create(null);function Tn(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function C(e,t){const n=Oe[e]||(Oe[e]=Object.create(null));return n[t]||(n[t]=Tn(e,t))}function nt(e,t){return tt(t)?et(t,((t,n)=>{n?e.icons[t]=n:e.missing.add(t)})):[]}function An(e,t,n){try{if("string"==typeof n.body)return e.icons[t]={...n},!0}catch{}return!1}let D=!1;function rt(e){return"boolean"==typeof e&&(D=e),D}function kn(e){const t="string"==typeof e?B(e,!0,D):e;if(t){const e=C(t.provider,t.prefix),n=t.name;return e.icons[n]||(e.missing.has(n)?null:void 0)}}function En(e,t){const n=B(e,!0,D);if(!n)return!1;const r=C(n.provider,n.prefix);return t?An(r,n.name,t):(r.missing.add(n.name),!0)}function xn(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t=e.provider||""),D&&!t&&!e.prefix){let t=!1;return tt(e)&&(e.prefix="",et(e,((e,n)=>{En(e,n)&&(t=!0)}))),t}const n=e.prefix;if(!z({prefix:n,name:"a"}))return!1;return!!nt(C(t,n),e)}const st=Object.freeze({width:null,height:null}),it=Object.freeze({...st,...V}),Pn=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Cn=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function je(e,t,n){if(1===t)return e;if(n=n||100,"number"==typeof e)return Math.ceil(e*t*n)/n;if("string"!=typeof e)return e;const r=e.split(Pn);if(null===r||!r.length)return e;const o=[];let i=r.shift(),s=Cn.test(i);for(;;){if(s){const e=parseFloat(i);isNaN(e)?o.push(i):o.push(Math.ceil(e*t*n)/n)}else o.push(i);if(i=r.shift(),void 0===i)return o.join("");s=!s}}function On(e,t="defs"){let n="";const r=e.indexOf("<"+t);for(;r>=0;){const o=e.indexOf(">",r),i=e.indexOf("</"+t);if(-1===o||-1===i)break;const s=e.indexOf(">",i);if(-1===s)break;n+=e.slice(o+1,i).trim(),e=e.slice(0,r).trim()+e.slice(s+1)}return{defs:n,content:e}}function jn(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Ln(e,t,n){const r=On(e);return jn(r.defs,t+r.content+n)}const Nn=e=>"unset"===e||"undefined"===e||"none"===e;function Rn(e,t){const n={...G,...e},r={...it,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach((e=>{const t=[],n=e.hFlip,r=e.vFlip;let s,a=e.rotate;switch(n?r?a+=2:(t.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),t.push("scale(-1 1)"),o.top=o.left=0):r&&(t.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),t.push("scale(1 -1)"),o.top=o.left=0),a<0&&(a-=4*Math.floor(a/4)),a%=4,a){case 1:s=o.height/2+o.top,t.unshift("rotate(90 "+s.toString()+" "+s.toString()+")");break;case 2:t.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:s=o.width/2+o.left,t.unshift("rotate(-90 "+s.toString()+" "+s.toString()+")")}a%2==1&&(o.left!==o.top&&(s=o.left,o.left=o.top,o.top=s),o.width!==o.height&&(s=o.width,o.width=o.height,o.height=s)),t.length&&(i=Ln(i,'<g transform="'+t.join(" ")+'">',"</g>"))}));const s=r.width,a=r.height,c=o.width,l=o.height;let u,f;null===s?(f=null===a?"1em":"auto"===a?l:a,u=je(f,c/l)):(u="auto"===s?c:s,f=null===a?je(u,l/c):"auto"===a?l:a);const d={},p=(e,t)=>{Nn(t)||(d[e]=t.toString())};p("width",u),p("height",f);const h=[o.left,o.top,c,l];return d.viewBox=h.join(" "),{attributes:d,viewBox:h,body:i}}const Fn=/\sid="(\S+)"/g,Dn="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let Mn=0;function $n(e,t=Dn){const n=[];let r;for(;r=Fn.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const r="function"==typeof t?t(n):t+(Mn++).toString(),i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+r+o+"$3")})),e=e.replace(new RegExp(o,"g"),"")}const oe=Object.create(null);function zn(e,t){oe[e]=t}function ce(e){return oe[e]||oe[""]}function ae(e){let t;if("string"==typeof e.resources)t=[e.resources];else if(t=e.resources,!(t instanceof Array&&t.length))return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:!0===e.random,index:e.index||0,dataAfterTimeout:!1!==e.dataAfterTimeout}}const ue=Object.create(null),L=["https://api.simplesvg.com","https://api.unisvg.com"],q=[];for(;L.length>0;)1===L.length||Math.random()>.5?q.push(L.shift()):q.push(L.pop());function qn(e,t){const n=ae(t);return null!==n&&(ue[e]=n,!0)}function de(e){return ue[e]}ue[""]=ae({resources:["https://api.iconify.design"].concat(q)});const Un=()=>{let e;try{if(e=fetch,"function"==typeof e)return e}catch{}};let Le=Un();function Hn(e,t){const n=de(e);if(!n)return 0;let r;if(n.maxURL){let e=0;n.resources.forEach((t=>{e=Math.max(e,t.length)}));const o=t+".json?icons=";r=n.maxURL-e-n.path.length-o.length}else r=0;return r}function Vn(e){return 404===e}const Qn=(e,t,n)=>{const r=[],o=Hn(e,t),i="icons";let s={type:i,provider:e,prefix:t,icons:[]},a=0;return n.forEach(((n,c)=>{a+=n.length+1,a>=o&&c>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},a=n.length),s.icons.push(n)})),r.push(s),r};function Bn(e){if("string"==typeof e){const t=de(e);if(t)return t.path}return"/"}const Gn=(e,t,n)=>{if(!Le)return void n("abort",424);let r=Bn(t.provider);switch(t.type){case"icons":{const e=t.prefix,n=t.icons.join(",");r+=e+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const e=t.uri;r+="/"===e.slice(0,1)?e.slice(1):e;break}default:return void n("abort",400)}let o=503;Le(e+r).then((e=>{const t=e.status;if(200===t)return o=501,e.json();setTimeout((()=>{n(Vn(t)?"abort":"next",t)}))})).then((e=>{"object"==typeof e&&null!==e?setTimeout((()=>{n("success",e)})):setTimeout((()=>{404===e?n("abort",e):n("next",o)}))})).catch((()=>{n("next",o)}))},Yn={prepare:Qn,send:Gn};function Kn(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort(((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name)));let r={provider:"",prefix:"",name:""};return e.forEach((e=>{if(r.name===e.name&&r.prefix===e.prefix&&r.provider===e.provider)return;r=e;const o=e.provider,i=e.prefix,s=e.name,a=n[o]||(n[o]=Object.create(null)),c=a[i]||(a[i]=C(o,i));let l;l=s in c.icons?t.loaded:""===i||c.missing.has(s)?t.missing:t.pending;const u={provider:o,prefix:i,name:s};l.push(u)})),t}function ot(e,t){e.forEach((e=>{const n=e.loaderCallbacks;n&&(e.loaderCallbacks=n.filter((e=>e.id!==t)))}))}function Wn(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout((()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach((t=>{const i=t.icons,s=i.pending.length;i.pending=i.pending.filter((t=>{if(t.prefix!==o)return!0;const s=t.name;if(e.icons[s])i.loaded.push({provider:r,prefix:o,name:s});else{if(!e.missing.has(s))return n=!0,!0;i.missing.push({provider:r,prefix:o,name:s})}return!1})),i.pending.length!==s&&(n||ot([e],t.id),t.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),t.abort))}))})))}let Zn=0;function Xn(e,t,n){const r=Zn++,o=ot.bind(null,n,r);if(!t.pending.length)return o;const i={id:r,icons:t,callback:e,abort:o};return n.forEach((e=>{(e.loaderCallbacks||(e.loaderCallbacks=[])).push(i)})),o}function Jn(e,t=!0,n=!1){const r=[];return e.forEach((e=>{const o="string"==typeof e?B(e,t,n):e;o&&r.push(o)})),r}var er={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function tr(e,t,n,r){const o=e.resources.length,i=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let t=e.resources.slice(0);for(s=[];t.length>1;){const e=Math.floor(Math.random()*t.length);s.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}s=s.concat(t)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const a=Date.now();let c,l="pending",u=0,f=null,d=[],p=[];function h(){f&&(clearTimeout(f),f=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function v(e,t){t&&(p=[]),"function"==typeof e&&p.push(e)}function b(){l="failed",p.forEach((e=>{e(void 0,c)}))}function m(){d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function y(){if("pending"!==l)return;h();const r=s.shift();if(void 0===r)return d.length?void(f=setTimeout((()=>{h(),"pending"===l&&(m(),b())}),e.timeout)):void b();const o={status:"pending",resource:r,callback:(t,n)=>{!function(t,n,r){const o="success"!==n;switch(d=d.filter((e=>e!==t)),l){case"pending":break;case"failed":if(o||!e.dataAfterTimeout)return;break;default:return}if("abort"===n)return c=r,void b();if(o)return c=r,void(d.length||(s.length?y():b()));if(h(),m(),!e.random){const n=e.resources.indexOf(t.resource);-1!==n&&n!==e.index&&(e.index=n)}l="completed",p.forEach((e=>{e(r)}))}(o,t,n)}};d.push(o),u++,f=setTimeout(y,e.rotate),n(r,t,o.callback)}return"function"==typeof r&&p.push(r),setTimeout(y),function(){return{startTime:a,payload:t,status:l,queriesSent:u,queriesPending:d.length,subscribe:v,abort:g}}}function ct(e){const t={...er,...e};let n=[];function r(){n=n.filter((e=>"pending"===e().status))}return{query:function(e,o,i){const s=tr(t,e,o,((e,t)=>{r(),i&&i(e,t)}));return n.push(s),s},find:function(e){return n.find((t=>e(t)))||null},setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:r}}function Ne(){}const X=Object.create(null);function nr(e){if(!X[e]){const t=de(e);if(!t)return;const n={config:t,redundancy:ct(t)};X[e]=n}return X[e]}function rr(e,t,n){let r,o;if("string"==typeof e){const t=ce(e);if(!t)return n(void 0,424),Ne;o=t.send;const i=nr(e);i&&(r=i.redundancy)}else{const t=ae(e);if(t){r=ct(t);const n=ce(e.resources?e.resources[0]:"");n&&(o=n.send)}}return r&&o?r.query(t,o,n)().abort:(n(void 0,424),Ne)}function Re(){}function sr(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout((()=>{e.iconsLoaderFlag=!1,Wn(e)})))}function ir(e){const t=[],n=[];return e.forEach((e=>{(e.match(Xe)?t:n).push(e)})),{valid:t,invalid:n}}function N(e,t,n){function r(){const n=e.pendingIcons;t.forEach((t=>{n&&n.delete(t),e.icons[t]||e.missing.add(t)}))}if(n&&"object"==typeof n)try{if(!nt(e,n).length)return void r()}catch(e){console.error(e)}r(),sr(e)}function Fe(e,t){e instanceof Promise?e.then((e=>{t(e)})).catch((()=>{t(null)})):t(e)}function or(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout((()=>{e.iconsQueueFlag=!1;const{provider:t,prefix:n}=e,r=e.iconsToLoad;if(delete e.iconsToLoad,!r||!r.length)return;const o=e.loadIcon;if(e.loadIcons&&(r.length>1||!o))return void Fe(e.loadIcons(r,n,t),(t=>{N(e,r,t)}));if(o)return void r.forEach((r=>{Fe(o(r,n,t),(t=>{N(e,[r],t?{prefix:n,icons:{[r]:t}}:null)}))}));const{valid:i,invalid:s}=ir(r);if(s.length&&N(e,s,null),!i.length)return;const a=n.match(Xe)?ce(t):null;a?a.prepare(t,n,i).forEach((n=>{rr(t,n,(t=>{N(e,n.icons,t)}))})):N(e,i,null)})))}const cr=(e,t)=>{const n=Kn(Jn(e,!0,rt()));if(!n.pending.length){let e=!0;return t&&setTimeout((()=>{e&&t(n.loaded,n.missing,n.pending,Re)})),()=>{e=!1}}const r=Object.create(null),o=[];let i,s;return n.pending.forEach((e=>{const{provider:t,prefix:n}=e;if(n===s&&t===i)return;i=t,s=n,o.push(C(t,n));const a=r[t]||(r[t]=Object.create(null));a[n]||(a[n]=[])})),n.pending.forEach((e=>{const{provider:t,prefix:n,name:o}=e,i=C(t,n),s=i.pendingIcons||(i.pendingIcons=new Set);s.has(o)||(s.add(o),r[t][n].push(o))})),o.forEach((e=>{const t=r[e.provider][e.prefix];t.length&&or(e,t)})),t?Xn(t,n,o):Re};function lr(e,t){const n={...e};for(const e in t){const r=t[e],o=typeof r;e in st?(null===r||r&&("string"===o||"number"===o))&&(n[e]=r):o===typeof n[e]&&(n[e]="rotate"===e?r%4:r)}return n}const fr=/[\s,]+/;function ar(e,t){t.split(fr).forEach((t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}}))}function ur(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(e){for(;e<0;)e+=4;return e%4}if(""===n){const t=parseInt(e);return isNaN(t)?0:r(t)}if(n!==e){let t=0;switch(n){case"%":t=25;break;case"deg":t=90}if(t){let o=parseFloat(e.slice(0,e.length-n.length));return isNaN(o)?0:(o/=t,o%1==0?r(o):0)}}return t}function dr(e,t){let n=-1===e.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const e in t)n+=" "+e+'="'+t[e]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function pr(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function hr(e){return"data:image/svg+xml,"+pr(e)}function gr(e){return'url("'+hr(e)+'")'}const De={...it,inline:!1},vr={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},br={display:"inline-block"},le={"background-color":"currentColor"},lt={"background-color":"transparent"},Me={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},$e={"-webkit-mask":le,mask:le,background:lt};for(const e in $e){const t=$e[e];for(const n in Me)t[e+"-"+n]=Me[n]}function mr(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function yr(e,t){const n=lr(De,t),r=t.mode||"svg",o="svg"===r?{...vr}:{};-1===e.body.indexOf("xlink:")&&delete o["xmlns:xlink"];let i="string"==typeof t.style?t.style:"";for(let e in t){const r=t[e];if(void 0!==r)switch(e){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[e]=!0===r||"true"===r||1===r;break;case"flip":"string"==typeof r&&ar(n,r);break;case"color":i=i+(i.length>0&&";"!==i.trim().slice(-1)?";":"")+"color: "+r+"; ";break;case"rotate":"string"==typeof r?n[e]=ur(r):"number"==typeof r&&(n[e]=r);break;case"ariaHidden":case"aria-hidden":!0!==r&&"true"!==r&&delete o["aria-hidden"];break;default:if("on:"===e.slice(0,3))break;void 0===De[e]&&(o[e]=r)}}const s=Rn(e,n),a=s.attributes;if(n.inline&&(i="vertical-align: -0.125em; "+i),"svg"===r){Object.assign(o,a),""!==i&&(o.style=i);let e=0,n=t.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),{svg:!0,attributes:o,body:$n(s.body,n?()=>n+"ID"+e++:"iconifySvelte")}}const{body:c,width:l,height:u}=e,f="mask"===r||"bg"!==r&&-1!==c.indexOf("currentColor"),d={"--svg":gr(dr(c,{...a,width:l+"",height:u+""}))},p=e=>{const t=a[e];t&&(d[e]=mr(t))};p("width"),p("height"),Object.assign(d,br,f?le:lt);let h="";for(const e in d)h+=e+": "+d[e]+";";return o.style=h+i,{svg:!1,attributes:o}}if(rt(!0),zn("",Yn),typeof document<"u"&&typeof window<"u"){const e=window;if(void 0!==e.IconifyPreload){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach((e=>{try{("object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||!xn(e))&&console.error(n)}catch{console.error(n)}}))}if(void 0!==e.IconifyProviders){const t=e.IconifyProviders;if("object"==typeof t&&null!==t)for(let e in t){const n="IconifyProviders["+e+"] is invalid.";try{const r=t[e];if("object"!=typeof r||!r||void 0===r.resources)continue;qn(e,r)||console.error(n)}catch{console.error(n)}}}}function _r(e,t,n,r,o){function i(){t.loading&&(t.loading.abort(),t.loading=null)}if("object"==typeof e&&null!==e&&"string"==typeof e.body)return t.name="",i(),{data:{...G,...e}};let s;if("string"!=typeof e||null===(s=B(e,!1,!0)))return i(),null;const a=kn(s);if(!a)return n&&(!t.loading||t.loading.name!==e)&&(i(),t.name="",t.loading={name:e,abort:cr([s],r)}),null;i(),t.name!==e&&(t.name=e,o&&!t.destroyed&&o(e));const c=["iconify"];return""!==s.prefix&&c.push("iconify--"+s.prefix),""!==s.provider&&c.push("iconify--"+s.provider),{data:a,classes:c}}function ze(e,t){return e?yr({...G,...e},t):null}var wr=Kt("<svg><!></svg>"),Ir=Xt("<span></span>");function Er(e,t){const n=gn(t,["children","$$slots","$$events","$$legacy"]);Qt(t,!1);const r=F({name:"",loading:null,destroyed:!1});let o=F(!1),i=F(0),s=F();const a=e=>{"function"==typeof n.onLoad&&n.onLoad(e),dn()("load",{icon:e})};function c(){re(i)}Ze((()=>{se(o,!0)})),an((()=>{Y(r,S(r).destroyed=!0),S(r).loading&&(S(r).loading.abort(),Y(r,S(r).loading=null))})),Bt((()=>(S(i),He(n),S(o),S(r),S(s),ze)),(()=>{S(i);const e=!!n.ssr||S(o),t=_r(n.icon,S(r),e,c,a);se(s,t?ze(t.data,n):null),S(s)&&t.classes&&Y(s,S(s).attributes.class=("string"==typeof n.class?n.class+" ":"")+t.classes.join(" "))})),Gt(),fn();var l=_e(),u=we(l),f=e=>{var t=_e(),n=we(t),r=e=>{var t=wr();let n;en(Wt(t),(()=>S(s).body),!0,!1),Zt(t),Ie((()=>n=ke(t,n,{...S(s).attributes}))),$(e,t)},o=e=>{var t=Ir();let n;Ie((()=>n=ke(t,n,{...S(s).attributes}))),$(e,t)};Se(n,(e=>{S(s).svg?e(r):e(o,!1)})),$(e,t)};Se(u,(e=>{S(s)&&e(f)})),$(e,l),Yt()}export{Er as I,fn as a,H as b,en as h,kr as i,Ze as o,Ar as r,on as s};