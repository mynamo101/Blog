import{Y as p,Z as y,_,x as $,D as h,z as m,$ as v,h as g,a0 as b,a1 as x,a2 as k}from"./render.AU3tqtiP.js";function f(t){return(s,...e)=>{var r,o=t(...e);if($)r=h,m();else{var n=o.render().trim(),a=p(n);r=v(a),s.before(r)}const l=o.setup?.(r);y(r,r),"function"==typeof l&&_(l)}}const u=new WeakMap,A=t=>async(s,e,r,{client:o})=>{if(!t.hasAttribute("ssr"))return;let n,a,l={};for(const[t,s]of Object.entries(r))a??={},"default"===t?(a.default=!0,n=f((()=>({render:()=>`<astro-slot>${s}</astro-slot>`})))):a[t]=f((()=>({render:()=>`<astro-slot name="${t}">${s}</astro-slot>`}))),"default"===t?l.children=f((()=>({render:()=>`<astro-slot>${s}</astro-slot>`}))):l[t]=f((()=>({render:()=>`<astro-slot name="${t}">${s}</astro-slot>`})));const i={...e,children:n,$$slots:a,...l};if(u.has(t))u.get(t).setProps(i);else{const e=j(s,t,i,"only"!==o);u.set(t,e),t.addEventListener("astro:unmount",(()=>e.destroy()),{once:!0})}};function j(t,s,e,r){let o=g(e);const n=r?b:x;r||(s.innerHTML="");const a=n(t,{target:s,props:o});return{setProps(t){Object.assign(o,t);for(const s in o)s in t||delete o[s]},destroy(){k(a)}}}export{A as default};