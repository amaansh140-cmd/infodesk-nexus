import{A as dr,j as r,U as Gt,W as mn,u as rn,m as fr,T as We,K as rt}from"./vendor-motion-B4xVGn2d.js";import{r as b,L as Bt}from"./vendor-react-D5v3yjYH.js";import{M as or,u as ir,a as ar,P as pn,b as xn,L as gn,c as vn,d as nn,m as pt,e as it,B as ft,f as hr}from"./index-Dl-FmAoc.js";import{T as yn,d as mr,S as on,H as St,e as pr,f as bn,g as an,h as wn,D as Mn,G as En,i as Tn,j as Rn,k as kn,L as Sn,A as xr,U as Cn,B as jn,l as An,m as Nn}from"./vendor-icons-DqTWSw_E.js";import{S as ht}from"./ScrollReveal-BvwnZXhM.js";import{L as Ct,C as jt,S as Ln}from"./SpotlightCard-DUduat1M.js";import{L as Pn}from"./LogoLoop-B18dumcD.js";import{c as gr}from"./courses-CquOJoZ7.js";import{t as In}from"./testimonials-DBmBnN91.js";import"./vendor-gsap-DdEiTQuA.js";function vr(e,a){if(typeof e=="function")return e(a);e!=null&&(e.current=a)}function Fn(...e){return a=>{let n=!1;const o=e.map(l=>{const f=vr(l,a);return!n&&typeof f=="function"&&(n=!0),f});if(n)return()=>{for(let l=0;l<o.length;l++){const f=o[l];typeof f=="function"?f():vr(e[l],null)}}}}function _n(...e){return b.useCallback(Fn(...e),e)}const yr=e=>{const{width:a,height:n}=(e==null?void 0:e.getBoundingClientRect())||{};return[a/(e==null?void 0:e.offsetWidth)||1,n/(e==null?void 0:e.offsetHeight)||1]},sn=e=>{var v;let{left:a,top:n}=e.getBoundingClientRect(),o=e;for(;o=o.parentElement||((v=o.parentNode)==null?void 0:v.host);){const{scrollLeft:C,scrollTop:D}=o;if(C||D){const[O,W]=yr(o);a+=C*O,n+=D*W}if(getComputedStyle(o).position==="fixed")break}const[l,f]=yr(e.offsetParent);return[a/l,n/f]};class Un extends b.Component{getSnapshotBeforeUpdate(a){const n=this.props.getElement();if(Gt(n)&&a.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const o=n.offsetParent,l=Gt(o)&&o.offsetWidth||0,f=Gt(o)&&o.offsetHeight||0,v=getComputedStyle(n),C=this.props.sizeRef.current;C.height=parseFloat(v.height),C.width=parseFloat(v.width),C.top=n.offsetTop,C.left=n.offsetLeft,C.right=l-C.width-C.left,C.bottom=f-C.height-C.top,C.direction=v.direction,C.point=sn(n)}return null}componentDidUpdate(){}render(){return this.props.children}}function Dn({children:e,isPresent:a,anchorX:n,anchorY:o,root:l,pop:f,popNode:v}){var pe;const C=b.useId(),D=b.useRef(null),O=b.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:W}=b.useContext(or),ee=f!==!1?((pe=e.props)==null?void 0:pe.ref)??(e==null?void 0:e.ref):void 0,me=_n(D,ee),ge=()=>{var ye;return D.current||((ye=v==null?void 0:v.current)==null?void 0:ye.current)},ve=ye=>{const{width:_e,height:xe,top:fe,left:le,right:ke,bottom:Ne,direction:be}=O.current,re=be==="rtl",ue=n==="left"?re?`right:${ke}`:`left:${le}`:re?`left:${le}`:`right:${ke}`,Ee=o==="bottom"?`bottom:${Ne}`:`top:${fe}`;ye==null||ye.insertRule(`[data-motion-pop-id="${C}"]{position:absolute!important;width:${_e}px!important;height:${xe}px!important;${ue}px!important;${Ee}px!important}`)};return b.useInsertionEffect(()=>{const{width:ye,height:_e}=O.current,xe=ge();if(a||f===!1||!xe||!ye||!_e)return;xe.dataset.motionPopId=C;const fe=xe.ownerDocument,le=fe.createElement("style");W&&(le.nonce=W);const ke=l??fe.head;ke.appendChild(le),ve(le.sheet);let Ne=0,be=0;return dr.setup(()=>{const[re,ue]=sn(xe);Ne=O.current.point[0]-re,be=O.current.point[1]-ue}),dr.read(()=>{const{sheet:re}=le;if(!re||!Ne&&!be)return;const ue=O.current;ue.left+=Ne,ue.right-=Ne,ue.top+=be,ue.bottom-=be,re.deleteRule(0),ve(re)}),()=>{xe.removeAttribute("data-motion-pop-id"),ke.contains(le)&&ke.removeChild(le)}},[a]),r.jsx(Un,{isPresent:a,getElement:ge,sizeRef:O,pop:f,children:f===!1?e:b.cloneElement(e,{ref:me})})}const zn=({children:e,initial:a,isPresent:n,onExitComplete:o,custom:l,presenceAffectsLayout:f,mode:v,anchorX:C,anchorY:D,root:O})=>{const W=ir(Xn),ee=b.useId(),me=b.useRef(),ge=b.useRef(n),ve=b.useRef(o);ar(()=>{ge.current=n,ve.current=o});let pe=!0,ye=b.useMemo(()=>(pe=!1,{id:ee,initial:a,isPresent:n,custom:l,onExitComplete:_e=>{W.set(_e,!0);for(const xe of W.values())if(!xe)return;o&&o()},register:(_e,xe)=>{var fe,le;return W.set(_e,!1),xe&&((le=(fe=xe.parent)==null?void 0:fe.presenceContext)==null?void 0:le.id)!==ee&&(me.current=xe),()=>{var ke;W.delete(_e),!ge.current&&!W.size&&((ke=ve.current)==null||ke.call(ve))}}}),[n,W,o]);return f&&pe&&(ye={...ye}),b.useMemo(()=>{W.forEach((_e,xe)=>W.set(xe,!1))},[n]),b.useEffect(()=>{!n&&!W.size&&o&&o()},[n]),e=r.jsx(Dn,{pop:v==="popLayout",isPresent:n,anchorX:C,anchorY:D,root:O,popNode:me,children:e}),r.jsx(pn.Provider,{value:ye,children:e})};function Xn(){return new Map}const gt=e=>e.key||"";function br(e){const a=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&a.push(n)}),a}const On=({children:e,custom:a,initial:n=!0,onExitComplete:o,presenceAffectsLayout:l=!0,mode:f="sync",propagate:v=!1,anchorX:C="left",anchorY:D="top",root:O})=>{const[W,ee]=xn(v),me=b.useMemo(()=>br(e),[e]),ge=v&&!W?[]:me.map(gt),ve=b.useRef(!0),pe=ir(()=>new Map),ye=b.useRef(new Set),[_e,xe]=b.useState(me),[fe,le]=b.useState(me);ar(()=>{v&&!W&&!fe.length&&(ee==null||ee())},[W,v,fe.length,ee]);const ke=b.useRef();b.useEffect(()=>()=>{const re=ke.current;ke.current=void 0,re==null||re()},[fe]),ar(()=>{ve.current=!1;for(let re=0;re<fe.length;re++){const ue=gt(fe[re]);ge.includes(ue)?(pe.delete(ue),ye.current.delete(ue)):pe.get(ue)!==!0&&pe.set(ue,!1)}},[fe,ge.length,ge.join("-")]);const Ne=[];if(me!==_e){let re=[...me],ue=0;for(const Ee of fe){const we=ge.indexOf(gt(Ee));we===-1?(re.splice(ue++,0,Ee),Ne.push(Ee)):ue=we+Ne.length+1}return Ne.every(Ee=>pe.get(gt(Ee)))?re=me:f==="wait"&&(re=Ne),le(br(re)),xe(me),null}const{forceRender:be}=b.useContext(gn);return r.jsx(r.Fragment,{children:fe.map(re=>{const ue=gt(re),Ee=v&&!W?!1:me===fe||ge.includes(ue),we=()=>{if(ye.current.has(ue))return;if(pe.has(ue))ye.current.add(ue),pe.set(ue,!0);else return;let ne=!0;pe.forEach($=>{$||(ne=!1)}),ne&&(be==null||be(),xe([]),v&&(ee==null||ee()),ke.current=o)};return r.jsx(zn,{isPresent:Ee,initial:!ve.current||n?void 0:!1,custom:a,presenceAffectsLayout:l,mode:f,root:O,onExitComplete:Ee?void 0:we,anchorX:C,anchorY:D,children:re},ue)})})};function Gn({children:e,...a}){const n=b.useContext(or);a={...n,...a},a.transition=mn(a.transition,n.transition),a.isStatic=ir(()=>a.isStatic);const o=b.useMemo(()=>a,[JSON.stringify(a.transition),a.transformPagePoint,a.reducedMotion,a.skipAnimations,a.isValidProp]);return r.jsx(or.Provider,{value:o,children:e})}const $t=[{id:"science",tabLabel:"Data science",cmdBase:"infodesk $ learn --course",courseName:'"data science"',tools:"Loaded: Python, Scikit-Learn, GenAI, Alteryx, Informatica",duration:"Duration: 12 months comprehensive career program",level:"Status: Certified industrial faculties ✓"},{id:"analytics",tabLabel:"Analytics",cmdBase:"infodesk $ learn --course",courseName:'"data analytics"',tools:"Loaded: Excel, SQL, Python, Pandas, Power BI, Tableau",duration:"Duration: 6 months (hands-on industrial training)",level:"Status: 100% job assistance included ✓"},{id:"web",tabLabel:"Web",cmdBase:"infodesk $ learn --course",courseName:'"full stack web"',tools:"Loaded: HTML5, CSS3, JavaScript, PHP, SQL, WordPress",duration:"Duration: 6 months with real client capstone projects",level:"Status: Flexible small batch timings ✓"},{id:"marketing",tabLabel:"Marketing",cmdBase:"infodesk $ learn --course",courseName:'"digital marketing"',tools:"Loaded: SEO, Google Ads, SMM, Content, AI Tools",duration:"Duration: 6 months plus practical job training",level:"Status: Live ad spend & portfolio reviews ✓"},{id:"design",tabLabel:"Design",cmdBase:"infodesk $ learn --course",courseName:'"design & media"',tools:"Loaded: Photoshop, Illustrator, Figma, Premiere Pro, UI/UX",duration:"Duration: 6 months creative portfolio training",level:"Status: Live client design briefs ✓"}];function Bn(){const e=rn(),[a,n]=b.useState(0),o=$t[a],l=`${o.cmdBase} ${o.courseName}`,[f,v]=b.useState(l.length),[C,D]=b.useState(!0);b.useEffect(()=>{if(e){v(l.length),D(!0);return}const W=setTimeout(()=>{n(ge=>(ge+1)%$t.length),v(0),D(!1);let ee=0;const me=setInterval(()=>{ee++,v(ee),ee>=l.length&&(clearInterval(me),setTimeout(()=>{D(!0)},200))},35)},6e3);return()=>{clearTimeout(W)}},[a,l,e]);const O=l.slice(0,f);return r.jsx("div",{className:"w-full max-w-full sm:max-w-md md:max-w-lg mx-auto md:[perspective:1200px]",children:r.jsxs(fr.div,{className:"w-full relative bg-[#0b1437] border border-[#213275] rounded-panel p-5 sm:p-7 shadow-[0_22px_50px_-15px_rgba(11,20,55,0.7)] text-left select-none transition-transform duration-500 ease-out md:[transform:rotateY(-5deg)_rotateX(3deg)] md:hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1.02)]",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:[.2,.7,.2,1]},children:[r.jsx("div",{className:"absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-bright to-transparent opacity-40 pointer-events-none"}),r.jsxs("div",{className:"flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-white/10 gap-2",children:[r.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[r.jsx("span",{className:"w-3 h-3 rounded-full bg-[#f87171] inline-block shadow-[0_0_8px_rgba(248,113,113,0.5)]"}),r.jsx("span",{className:"w-3 h-3 rounded-full bg-[#fbbf24] inline-block shadow-[0_0_8px_rgba(251,191,36,0.5)]"}),r.jsx("span",{className:"w-3 h-3 rounded-full bg-[#34d399] inline-block shadow-[0_0_8px_rgba(52,211,153,0.5)]"})]}),r.jsx("div",{className:"flex items-center gap-1 overflow-x-auto py-0.5 scrollbar-none",children:$t.map((W,ee)=>{const me=ee>=3;return r.jsx("button",{type:"button",onClick:()=>{n(ee),v(`${W.cmdBase} ${W.courseName}`.length),D(!0)},className:`px-2 py-0.5 rounded text-[11px] font-mono whitespace-nowrap transition-colors ${me?"hidden sm:inline-block":"inline-block"} ${a===ee?"bg-bright/20 text-white font-bold border border-bright/40":"text-white/50 hover:text-white/80"}`,children:W.tabLabel},W.id)})}),r.jsxs("div",{className:"hidden min-[480px]:flex items-center gap-1.5 text-[11px] font-mono text-white/50 shrink-0",children:[r.jsx(yn,{size:12,className:"text-bright"}),r.jsx("span",{children:"infodesk-cli"})]})]}),r.jsxs("div",{className:"font-mono text-xs sm:text-[14px] leading-relaxed space-y-3 min-h-[160px] sm:min-h-[175px]",children:[r.jsxs("div",{className:"text-white/95 font-semibold flex items-center flex-wrap break-all sm:break-normal",children:[r.jsx("span",{className:"text-[#4a6df0] mr-2",children:"infodesk"}),r.jsx("span",{className:"text-white/40 mr-2",children:"$"}),f>11&&r.jsx("span",{className:"text-emerald-400 mr-2",children:"learn"}),f>17&&r.jsx("span",{className:"text-indigo-300 mr-2",children:"--course"}),f>26&&r.jsx("span",{className:"text-amber-300 font-bold",children:O.slice(26)}),r.jsx("span",{className:"inline-block w-2 h-4 ml-1 bg-bright animate-pulse"})]}),C&&r.jsxs(fr.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.3},className:"space-y-2.5 pt-2 border-t border-white/10",children:[r.jsxs("div",{className:"flex items-start gap-2.5 text-emerald-400",children:[r.jsx(mr,{size:16,className:"shrink-0 mt-0.5 text-emerald-400"}),r.jsx("span",{className:"text-emerald-300/95 text-xs sm:text-[13px] leading-snug break-words font-medium",children:o.tools})]}),r.jsxs("div",{className:"flex items-start gap-2.5 text-emerald-400",children:[r.jsx(mr,{size:16,className:"shrink-0 mt-0.5 text-emerald-400"}),r.jsx("span",{className:"text-emerald-300/95 text-xs sm:text-[13px] leading-snug break-words font-medium",children:o.duration})]}),r.jsxs("div",{className:"flex items-center gap-2 text-white/60 text-[11px] sm:text-xs pl-6",children:[r.jsx(on,{size:12,className:"text-amber-400"}),r.jsx("span",{children:o.level})]})]})]}),r.jsxs("div",{className:"pt-3 sm:pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/40",children:[r.jsxs("span",{className:"flex items-center gap-1.5",children:[r.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping"}),r.jsx("span",{children:"small batches • 4 Mumbai branches"})]}),r.jsx("span",{className:"text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30",children:"ready for demo"})]})]})})}const wr=8,Ht=4,qt=24,Mr=1.2,Er=.7,Tr=.015,$n=2.4,_t=60,Mt=100,Hn=16,qn=.78,Rr=["#1e3fd8","#f6f8ff","#a5d8ff","#38bdf8"],kr=" =+xX0S8#@",Sr='"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',Vn={horizon:0,pinch:1,rise:2,eclipse:3},Wn={none:0,wave:1,burst:2},Yn=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,cn=`
float hash12(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
`,Kn=`#version 300 es
precision highp float;
precision highp int;
uniform float uAspect;
uniform float uTime;
uniform int uShape;
uniform vec3 uRamp[8];
uniform int uCount;
uniform float uScale;
uniform float uSoftness;
uniform float uFlow;
uniform vec2 uSeed;
uniform vec4 uTrail[24];
uniform float uRadius;
uniform vec4 uClicks[4];
uniform int uClickEffect;
uniform float uIntro;
uniform float uFrame;
in vec2 vUv;
layout(location = 0) out vec4 outColor;
layout(location = 1) out vec4 outAux;
${cn}
vec2 hash22(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.103, 0.0973));
  q += dot(q, q.yzx + 33.33);
  return fract((q.xx + q.yz) * q.zy) * 2.0 - 1.0;
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float a = dot(hash22(i), f);
  float b = dot(hash22(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(hash22(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(hash22(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  return 0.5 + 0.5 * mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec3 labToRgb(vec3 lab) {
  float l = lab.x + 0.3963377774 * lab.y + 0.2158037573 * lab.z;
  float m = lab.x - 0.1055613458 * lab.y - 0.0638541728 * lab.z;
  float s = lab.x - 0.0894841775 * lab.y - 1.2914855480 * lab.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}

vec3 encode(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

vec3 horizon(vec2 p, float time, out float order) {
  float span = 0.5 * max(uAspect, 1.0);
  float x = p.x / span;
  float arch = -0.17 - 0.2 * x * x + 0.02 * sin(time * 0.6);
  float soft = mix(0.05, 0.22, uSoftness);
  float edge = p.y - arch;
  float rim = 0.38 * smoothstep(-soft, 0.42, edge);
  vec2 sun = vec2(0.08 * sin(time * 0.31) * span, 0.58);
  float spread = length((p - sun) / vec2(0.95 * span, 0.75));
  float sky = mix(0.55, 1.0, smoothstep(0.2, 0.95, spread));
  order = clamp(edge * 1.3, 0.0, 1.0);
  return vec3(rim, sky, smoothstep(0.18, 0.62, edge));
}

vec3 pinch(vec2 p, float time, out float order) {
  float span = 0.5 * max(uAspect, 0.75);
  float x = p.x / span;
  float sway = 0.02 * sin(x * 1.7 + time * 0.55);
  float breathe = 1.0 + 0.06 * sin(time * 0.8);
  float width = (0.13 + 0.22 * x * x) * breathe * mix(0.85, 1.2, uSoftness);
  float y = abs(p.y - sway) / width;
  float t = exp(-pow(y, 2.2)) * (0.42 + 0.58 * exp(-x * x * 1.8));
  order = clamp(abs(p.y - sway) * 2.4 + abs(x) * 0.3, 0.0, 1.0);
  return vec3(t, t, 0.0);
}

vec3 rise(vec2 p, float time, out float order) {
  float wide = max(uAspect, 0.9);
  vec2 center = vec2(0.05 * sin(time * 0.45) * wide, -0.7);
  vec2 radius = vec2(0.82 * wide, 0.64 * (1.0 + 0.04 * sin(time * 0.8)));
  float d = length((p - center) / radius);
  float soft = mix(0.6, 1.15, uSoftness);
  float t = clamp(pow(clamp(1.0 - d, 0.0, 1.0), soft) * 1.35, 0.0, 1.0);
  order = clamp((d - 0.2) * 1.3, 0.0, 1.0);
  return vec3(t, t, 0.0);
}

vec3 eclipse(vec2 p, float time, out float order) {
  float fit = min(1.0, uAspect * 1.25);
  float r = 0.23 * fit * (1.0 + 0.015 * sin(time * 0.9));
  float angle = atan(p.y, p.x);
  float rays = noise(vec2(cos(angle), sin(angle)) * 2.2 + time * 0.08) * 0.8 + 0.6;
  float d = length(p) - r;
  float reach = mix(0.07, 0.15, uSoftness) * rays * fit;
  float t = smoothstep(-0.006, 0.006 + 0.02 * uSoftness, d) * exp(-max(d, 0.0) / reach);
  order = clamp(d * 2.0, 0.0, 1.0);
  return vec3(t, t, 0.0);
}

vec4 tone(float t) {
  float x = smoothstep(0.3, 1.0, t) * float(uCount - 1);
  int index = int(floor(x));
  return vec4(mix(uRamp[index], uRamp[min(index + 1, uCount - 1)], fract(x)), smoothstep(0.0, 0.38, t));
}

void main() {
  vec2 p = (vUv - 0.5) * vec2(uAspect, 1.0);
  float time = uTime;
  vec2 q = p / uScale;
  vec2 warp = vec2(
    noise(q * 1.6 + uSeed + vec2(0.0, time * 0.3)),
    noise(q * 1.6 + uSeed.yx + vec2(4.3, -time * 0.24))
  ) - 0.5;
  q += warp * uFlow * (uShape == 3 ? 0.04 : 0.18);
  float order = 0.0;
  vec3 shape;
  if (uShape == 0) shape = horizon(q, time, order);
  else if (uShape == 1) shape = pinch(q, time, order);
  else if (uShape == 2) shape = rise(q, time, order);
  else shape = eclipse(q, time, order);

  float reveal = clamp((uIntro * 1.45 - order) / 0.45, 0.0, 1.0);
  reveal = reveal * reveal * (3.0 - 2.0 * reveal);

  float scramble = 0.0;
  for (int i = 0; i < 24; i++) {
    vec4 point = uTrail[i];
    if (point.z <= 0.0) continue;
    vec2 d = p - point.xy;
    scramble = max(scramble, point.z * exp(-dot(d, d) / (uRadius * uRadius)));
  }
  for (int i = 0; i < 4; i++) {
    vec4 c = uClicks[i];
    if (c.w <= 0.0) continue;
    float d = length(p - c.xy);
    if (uClickEffect == 1) {
      scramble = max(scramble, exp(-pow((d - c.z * 0.75) / 0.06, 2.0)) * c.w);
    } else if (uClickEffect == 2) {
      float size = 0.08 + 0.22 * (1.0 - exp(-c.z * 5.0));
      scramble = max(scramble, (1.0 - smoothstep(size * 0.6, size, d)) * c.w);
    }
  }
  vec2 t = clamp(shape.xy * mix(0.7, 1.0, reveal), 0.0, 1.0);
  vec4 mixed = mix(tone(t.x), tone(t.y), shape.z);
  vec3 color = encode(labToRgb(mixed.rgb));
  float alpha = mixed.a * reveal;
  float dither = (hash12(gl_FragCoord.xy + uFrame * 13.7) - 0.5) / 255.0;
  outColor = clamp(vec4(color * alpha + dither, alpha + dither), 0.0, 1.0);
  outAux = vec4(reveal, scramble, 0.0, 1.0);
}`,ln=`
uniform sampler2D uField;
uniform sampler2D uAux;
uniform sampler2D uAtlas;
uniform vec2 uResolution;
uniform vec2 uCell;
uniform vec2 uOffset;
uniform vec2 uAtlasGrid;
uniform float uCount;
uniform float uDensity;
uniform float uOpacity;
uniform float uFlicker;
uniform float uDepth;
uniform float uGlyphTime;
uniform float uSeedValue;
uniform float uLight;
${cn}
float sampleGlyph(float index, vec2 local, vec2 coord, float soft) {
  float column = mod(index, uAtlasGrid.x);
  float row = floor(index / uAtlasGrid.x);
  vec2 atlasUv = vec2((column + local.x) / uAtlasGrid.x, (row + 1.0 - local.y) / uAtlasGrid.y);
  vec2 continuous = coord / uAtlasGrid;
  float scale = exp2(soft);
  return textureGrad(uAtlas, atlasUv, dFdx(continuous) * scale, dFdy(continuous) * scale).a;
}

vec4 glyphAt(vec2 px) {
  vec2 coord = (px - uOffset) / uCell;
  vec2 cell = floor(coord);
  vec2 local = coord - cell;
  vec2 uv = clamp(((cell + 0.5) * uCell + uOffset) / uResolution, vec2(0.0), vec2(1.0));
  vec4 field = texture(uField, uv);
  vec4 aux = texture(uAux, uv);
  vec3 visible = uLight > 0.5 ? field.rgb + (1.0 - field.a) : field.rgb;
  float luma = dot(visible, vec3(0.2126, 0.7152, 0.0722));
  float value = uLight > 0.5 ? clamp((1.0 - luma) * 1.5, 0.0, 1.0) : luma;
  float pick = hash12(cell + uSeedValue * 7.31);
  float level = hash12(cell * 1.73 + 4.1 + uSeedValue);
  float tick = floor(uGlyphTime * 9.0 + level * 9.0);
  float wobble = (hash12(cell * 2.31 + tick * 17.7) - 0.5) * uFlicker * 0.4 + (level - 0.5) * 0.1;
  float tone = clamp(pow(value, 0.75) + wobble, 0.0, 1.0);
  float index = floor(tone * (uCount - 1.0) + 0.5);
  float decode = max(aux.g, 1.0 - aux.r);
  if (decode > 0.02) {
    float frame = floor(uGlyphTime * 20.0);
    if (hash12(cell * 3.7 + frame * 5.3) < decode * 1.25) index = 1.0 + floor(hash12(cell + frame * 1.37) * (uCount - 1.0));
  }
  float present = step(pick, uDensity * mix(1.0, 0.3 + tone * 1.1, 0.55));
  float cutoff = smoothstep(0.03, 0.1, value);
  float focus = step(hash12(cell * 0.71 + 9.2 + uSeedValue), uDepth);
  float coverage = sampleGlyph(index, local, coord, focus * 1.2);
  float alpha = uOpacity * present * cutoff * coverage * mix(1.0, 0.35 + 0.65 * level, 0.55) * (1.0 - focus * 0.5);
  if (uLight < 0.5) {
    vec3 light = field.rgb * 0.55 + vec3(0.03) * field.a;
    return vec4(light * alpha, 0.6 * field.a * alpha);
  }
  vec3 ink = visible * 0.8;
  return vec4(ink * alpha, alpha);
}
`,Jn=`#version 300 es
precision highp float;
uniform float uDownscale;
in vec2 vUv;
out vec4 outColor;
${ln}
void main() {
  outColor = glyphAt(gl_FragCoord.xy * uDownscale);
}`,Qn=`#version 300 es
precision highp float;
uniform sampler2D uSource;
uniform vec2 uStep;
in vec2 vUv;
out vec4 outColor;
void main() {
  vec4 sum = texture(uSource, vUv) * 0.2270270270;
  sum += texture(uSource, vUv + uStep * 1.3846153846) * 0.3162162162;
  sum += texture(uSource, vUv - uStep * 1.3846153846) * 0.3162162162;
  sum += texture(uSource, vUv + uStep * 3.2307692308) * 0.0702702703;
  sum += texture(uSource, vUv - uStep * 3.2307692308) * 0.0702702703;
  outColor = sum;
}`,Zn=`#version 300 es
precision highp float;
uniform sampler2D uHalo;
uniform float uGlow;
uniform float uGradient;
uniform float uGrain;
uniform float uFrame;
in vec2 vUv;
out vec4 outColor;
${ln}
void main() {
  vec4 base = texture(uField, vUv) * uGradient;
  vec4 glyph = glyphAt(gl_FragCoord.xy);
  vec4 halo = texture(uHalo, vUv) * uGlow;
  vec4 color;
  if (uLight < 0.5) {
    color = base + glyph + halo;
  } else {
    color = glyph + base * (1.0 - glyph.a);
    color += halo * 0.6 * (1.0 - color.a);
  }
  float grain = (hash12(gl_FragCoord.xy + uFrame * vec2(17.0, 59.0)) + hash12(gl_FragCoord.xy * 1.31 + uFrame * 7.0) - 1.0) * uGrain;
  float body = clamp(color.a, 0.0, 1.0);
  color.rgb += grain * (0.25 + body) * 0.5;
  color.a = clamp(color.a, 0.0, 1.0);
  color.rgb = clamp(color.rgb, 0.0, color.a);
  outColor = color;
}`,nt=(e,a,n)=>Math.min(n,Math.max(a,e)),Vt=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4,eo=([e,a,n])=>{const o=Vt(e),l=Vt(a),f=Vt(n),v=Math.cbrt(.4122214708*o+.5363325363*l+.0514459929*f),C=Math.cbrt(.2119034982*o+.6806995451*l+.1073969566*f),D=Math.cbrt(.0883024619*o+.2817188376*l+.6299787005*f);return[.2104542553*v+.793617785*C-.0040720468*D,1.9779984951*v-2.428592205*C+.4505937099*D,.0259040371*v+.7827717662*C-.808675766*D]},Cr=(e,a,n)=>{const o=e.createShader(a);return o?(e.shaderSource(o,n),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)?o:(e.deleteShader(o),null)):null},At=(e,a)=>{const n=Cr(e,e.VERTEX_SHADER,Yn),o=Cr(e,e.FRAGMENT_SHADER,a),l=e.createProgram();if(!n||!o||!l)return null;if(e.attachShader(l,n),e.attachShader(l,o),e.linkProgram(l),e.deleteShader(n),e.deleteShader(o),!e.getProgramParameter(l,e.LINK_STATUS))return e.deleteProgram(l),null;const f={},v=e.getProgramParameter(l,e.ACTIVE_UNIFORMS);for(let C=0;C<v;C++){const D=e.getActiveUniform(l,C);if(!D)continue;const O=D.name.replace(/\[0\]$/,"");f[O]=e.getUniformLocation(l,O)}return{program:l,uniforms:f}},Wt=(e,a)=>({textures:Array.from({length:a},()=>{const o=e.createTexture();return e.bindTexture(e.TEXTURE_2D,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),o}),framebuffer:e.createFramebuffer(),width:0,height:0}),Yt=(e,a,n,o)=>{a.width===n&&a.height===o||(a.width=n,a.height=o,e.bindFramebuffer(e.FRAMEBUFFER,a.framebuffer),a.textures.forEach((l,f)=>{e.bindTexture(e.TEXTURE_2D,l),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,n,o,0,e.RGBA,e.UNSIGNED_BYTE,null),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+f,e.TEXTURE_2D,l,0)}),e.bindFramebuffer(e.FRAMEBUFFER,null))},jr=(e,a,n)=>{const o=[...new Set([...a].filter(W=>W!==`
`&&W!=="\r"))];o.length||o.push(" ");const l=`300 ${Math.round(Mt*qn)}px ${n}`,f=Math.min(Hn,o.length),v=Math.ceil(o.length/f),C=document.createElement("canvas");C.width=_t*f,C.height=Mt*v;const D=C.getContext("2d");D&&(D.font=l,D.textAlign="center",D.textBaseline="middle",D.fillStyle="#fff",o.forEach((W,ee)=>{const me=ee%f,ge=Math.floor(ee/f);D.fillText(W,me*_t+_t/2,ge*Mt+Mt/2+3)}));const O=e.createTexture();return e.bindTexture(e.TEXTURE_2D,O),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE,C),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),{texture:O,count:o.length,grid:[f,v]}},Ar=({colors:e=Rr,shape:a="horizon",characters:n=kr,cellSize:o=18,density:l=.8,glyphOpacity:f=.85,glow:v=.2,depthOfField:C=0,flicker:D=.2,softness:O=.5,scale:W=1,flow:ee=.5,speed:me=1,gradientOpacity:ge=.9,grain:ve=.08,variation:pe=0,mouseInteraction:ye=!0,scrambleRadius:_e=.1,clickEffect:xe="wave",intro:fe=!0,lightMode:le=!1,fontFamily:ke=Sr,dpr:Ne,className:be="",style:re,...ue})=>{const Ee=b.useRef(null),we=b.useRef(null),ne=b.useRef(null),$=(Array.isArray(e)&&e.length?e:Rr).slice(0,wr),A={colors:$.length>1?$:[$[0],$[0]],shape:Vn[a]??0,characters:n||kr,cellSize:nt(o,6,64),density:nt(l,0,1),glyphOpacity:nt(f,0,1),glow:nt(v,0,2),depthOfField:nt(C,0,1),flicker:nt(D,0,1),softness:nt(O,0,1),scale:nt(W,.4,2.5),flow:nt(ee,0,2),speed:Math.max(0,me),gradientOpacity:nt(ge,0,1),grain:nt(ve,0,.4),variation:Math.max(0,pe),mouseInteraction:ye,scrambleRadius:nt(_e,.02,.4),clickEffect:Wn[xe]??1,intro:fe,lightMode:le,fontFamily:ke||Sr,dpr:Ne},_=b.useRef(A);return _.current=A,b.useEffect(()=>{var Re;const F=Ee.current,u=we.current,t=u==null?void 0:u.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!F||!u||!t)return;const Se=At(t,Kn),de=At(t,Jn),K=At(t,Qn),ie=At(t,Zn);if(!Se||!de||!K||!ie)return;const k=t.createVertexArray(),H=Wt(t,2),Q=Wt(t,1),De=Wt(t,1),Me=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),ae=new Map,E=z=>{const M=String(z),j=ae.get(M);if(j)return j;let te=[0,0,0];if(Me){Me.clearRect(0,0,1,1),Me.fillStyle="#000000",Me.fillStyle=M,Me.fillRect(0,0,1,1);const[V,g,x]=Me.getImageData(0,0,1,1).data;te=[V/255,g/255,x/255]}return ae.set(M,te),te},Ue=((Re=window.matchMedia)==null?void 0:Re.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,Le={width:1,height:1,ratio:1},ce=new Float32Array(wr*3),Pe=new Float32Array(Ht*4),Te=[],Xe=new Float32Array(qt*4),Fe=[],je={x:0,y:0,inside:!1};let q=null,Ce="",ze="",s=0,w=0,p=_.current.intro&&!Ue?0:1,d=0,h=0,m=0,P=0,S=!0,T=!1;const G=()=>{var j,te;const z=_.current,M=`${z.fontFamily}|${z.characters}`;M===Ce&&q||(Ce=M,q&&t.deleteTexture(q.texture),q=jr(t,z.characters,z.fontFamily),(te=(j=document.fonts)==null?void 0:j.load)==null||te.call(j,`300 64px ${z.fontFamily}`,z.characters).then(()=>{T||Ce!==M||(q&&t.deleteTexture(q.texture),q=jr(t,z.characters,z.fontFamily),U())},()=>{}))},J=()=>{const z=_.current,M=z.colors.join(",");M!==ze&&(ze=M,z.colors.forEach((j,te)=>ce.set(eo(E(j)),te*3)))},oe=(z,M,j)=>{if(!q)return;const te=_.current,V=z.uniforms,g=te.cellSize*Le.ratio,x=g*(_t/Mt);t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,H.textures[0]),t.uniform1i(V.uField,0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,H.textures[1]),t.uniform1i(V.uAux,1),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,q.texture),t.uniform1i(V.uAtlas,2),t.uniform2f(V.uResolution,M,j),t.uniform2f(V.uCell,x,g),t.uniform2f(V.uOffset,(M-Math.ceil(M/x)*x)/2,(j-Math.ceil(j/g)*g)/2),t.uniform2f(V.uAtlasGrid,q.grid[0],q.grid[1]),t.uniform1f(V.uCount,q.count),t.uniform1f(V.uDensity,te.density),t.uniform1f(V.uOpacity,te.glyphOpacity),t.uniform1f(V.uFlicker,Ue?0:te.flicker),t.uniform1f(V.uDepth,te.depthOfField),t.uniform1f(V.uGlyphTime,w),t.uniform1f(V.uSeedValue,te.variation),t.uniform1f(V.uLight,te.lightMode?1:0)},U=()=>{const z=_.current,M=Le.width/Le.height;G(),J(),t.bindVertexArray(k),t.disable(t.BLEND),t.bindFramebuffer(t.FRAMEBUFFER,H.framebuffer),t.drawBuffers([t.COLOR_ATTACHMENT0,t.COLOR_ATTACHMENT1]),t.viewport(0,0,H.width,H.height),t.useProgram(Se.program);const j=Se.uniforms;t.uniform1f(j.uAspect,M),t.uniform1f(j.uTime,s),t.uniform1i(j.uShape,z.shape),t.uniform3fv(j.uRamp,ce),t.uniform1i(j.uCount,z.colors.length),t.uniform1f(j.uScale,z.scale),t.uniform1f(j.uSoftness,z.softness),t.uniform1f(j.uFlow,z.flow),t.uniform2f(j.uSeed,z.variation*3.17,z.variation*1.91),t.uniform4fv(j.uTrail,Xe),t.uniform1f(j.uRadius,z.scrambleRadius),t.uniform4fv(j.uClicks,Pe),t.uniform1i(j.uClickEffect,z.clickEffect),t.uniform1f(j.uIntro,p),t.uniform1f(j.uFrame,d),t.drawArrays(t.TRIANGLES,0,3);const te=z.glow>.001;te&&(t.bindFramebuffer(t.FRAMEBUFFER,Q.framebuffer),t.drawBuffers([t.COLOR_ATTACHMENT0]),t.viewport(0,0,Q.width,Q.height),t.useProgram(de.program),oe(de,u.width,u.height),t.uniform1f(de.uniforms.uDownscale,u.width/Q.width),t.drawArrays(t.TRIANGLES,0,3),t.useProgram(K.program),t.activeTexture(t.TEXTURE0),t.uniform1i(K.uniforms.uSource,0),t.bindFramebuffer(t.FRAMEBUFFER,De.framebuffer),t.bindTexture(t.TEXTURE_2D,Q.textures[0]),t.uniform2f(K.uniforms.uStep,1/Q.width,0),t.drawArrays(t.TRIANGLES,0,3),t.bindFramebuffer(t.FRAMEBUFFER,Q.framebuffer),t.bindTexture(t.TEXTURE_2D,De.textures[0]),t.uniform2f(K.uniforms.uStep,0,1/Q.height),t.drawArrays(t.TRIANGLES,0,3)),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,u.width,u.height),t.useProgram(ie.program),oe(ie,u.width,u.height);const V=ie.uniforms;t.activeTexture(t.TEXTURE3),t.bindTexture(t.TEXTURE_2D,Q.textures[0]),t.uniform1i(V.uHalo,3),t.uniform1f(V.uGlow,te?z.glow:0),t.uniform1f(V.uGradient,z.gradientOpacity),t.uniform1f(V.uGrain,z.grain),t.uniform1f(V.uFrame,d),t.drawArrays(t.TRIANGLES,0,3)},X=()=>{const z=_.current;Le.width=Math.max(1,F.clientWidth),Le.height=Math.max(1,F.clientHeight),Le.ratio=Math.min(z.dpr||window.devicePixelRatio||1,2),u.width=Math.max(1,Math.round(Le.width*Le.ratio)),u.height=Math.max(1,Math.round(Le.height*Le.ratio)),Yt(t,H,Math.max(1,Math.round(u.width/2)),Math.max(1,Math.round(u.height/2)));const M=Math.max(1,Math.round(u.width/4)),j=Math.max(1,Math.round(u.height/4));Yt(t,Q,M,j),Yt(t,De,M,j),U(),c()},L=z=>{for(Fe.forEach(M=>{M.age+=z});Fe.length&&Fe[Fe.length-1].age>Er;)Fe.pop();for(let M=0;M<qt;M++){const j=Fe[M];if(!j){Xe[M*4+2]=0;continue}const te=1-j.age/Er;Xe.set([j.x,j.y,te*te,0],M*4)}for(Te.forEach(M=>{M.age+=z});Te.length&&Te[Te.length-1].age>Mr;)Te.pop();for(let M=0;M<Ht;M++){const j=Te[M];if(!j){Pe[M*4+3]=0;continue}const te=j.age/Mr,V=Math.min(1,j.age/.08)*(1-te)*(1-te);Pe.set([j.x,j.y,j.age,V],M*4)}},Ae=z=>{if(m=0,T||!S||document.hidden)return;const M=_.current,j=P?nt((z-P)/1e3,.001,.05):1/60;P=z,Ue||(s+=j*M.speed*.5,w+=j*Math.max(M.speed,.15)),p<1&&(p=Math.min(1,p+j/$n)),h+=j,!Ue&&h>1/24&&(h=0,d=(d+1)%97),L(j),U(),!Ue||p<1||Te.length>0||Fe.length>0?m=requestAnimationFrame(Ae):P=0};function c(){!m&&!T&&S&&!document.hidden&&(m=requestAnimationFrame(Ae))}const i=z=>{const M=F.getBoundingClientRect(),j=(z.clientX-M.left)/Math.max(1,M.width),te=1-(z.clientY-M.top)/Math.max(1,M.height),V=M.width/Math.max(1,M.height);je.inside=j>=0&&j<=1&&te>=0&&te<=1,je.x=(j-.5)*V,je.y=te-.5},R=z=>{i(z);const M=_.current;if(!je.inside||!M.mouseInteraction||Ue)return;const j=Fe[0],te=j?Math.hypot(je.x-j.x,je.y-j.y):1/0;if(!(te<Tr)){if(j&&j.age<.1){const V=Math.min(6,Math.floor(te/(Tr*2)));for(let g=1;g<=V;g++){const x=g/(V+1);Fe.unshift({x:j.x+(je.x-j.x)*x,y:j.y+(je.y-j.y)*x,age:0})}}Fe.unshift({x:je.x,y:je.y,age:0}),Fe.length=Math.min(Fe.length,qt),c()}},y=z=>{i(z);const M=_.current;!je.inside||!M.clickEffect||Ue||(Te.unshift({x:je.x,y:je.y,age:0}),Te.length>Ht&&Te.pop(),c())},I=()=>{P=0,c()},B=new ResizeObserver(X);B.observe(F);const Z=new IntersectionObserver(z=>{S=z.some(M=>M.isIntersecting),S&&(P=0,c())});return Z.observe(F),window.addEventListener("pointermove",R,{passive:!0}),window.addEventListener("pointerdown",y,{passive:!0}),document.addEventListener("visibilitychange",I),X(),ne.current=c,()=>{var z;T=!0,cancelAnimationFrame(m),ne.current=null,B.disconnect(),Z.disconnect(),window.removeEventListener("pointermove",R),window.removeEventListener("pointerdown",y),document.removeEventListener("visibilitychange",I),[H,Q,De].forEach(M=>{M.textures.forEach(j=>t.deleteTexture(j)),t.deleteFramebuffer(M.framebuffer)}),q&&t.deleteTexture(q.texture),t.deleteVertexArray(k),[Se,de,K,ie].forEach(M=>t.deleteProgram(M.program)),(z=t.getExtension("WEBGL_lose_context"))==null||z.loseContext()}},[]),b.useEffect(()=>{var F;(F=ne.current)==null||F.call(ne)}),r.jsx("div",{ref:Ee,className:`gradient-ascii-container${be?` ${be}`:""}`,style:re,...ue,children:r.jsx("canvas",{ref:we,className:"gradient-ascii-canvas","aria-hidden":"true"})})};function Nt(...e){return e.filter(Boolean).join(" ")}const to=typeof window<"u"?b.useLayoutEffect:b.useEffect,Nr=typeof Intl<"u"&&Intl.Segmenter?new Intl.Segmenter("en",{granularity:"grapheme"}):null,ro=e=>Nr?Array.from(Nr.segment(e),a=>a.segment):Array.from(e),Kt=(e,a)=>e&&typeof e=="object"&&!Array.isArray(e)?{...e,filter:a}:e,no={type:"spring",damping:25,stiffness:300},oo={type:"spring",damping:34,stiffness:320},ao={transformOrigin:"50% 50% -0.45em",backfaceVisibility:"hidden"},Lr={slide:e=>({initial:{y:e?"100%":"-100%",opacity:0},animate:{y:0,opacity:1},exit:{y:e?"-120%":"120%",opacity:0},transition:{type:"spring",damping:25,stiffness:300}}),flip:e=>({initial:{rotateX:e?-90:90,opacity:0,transformPerspective:480},animate:{rotateX:0,opacity:1,transformPerspective:480},exit:{rotateX:e?90:-90,opacity:0,transformPerspective:480},transition:{type:"tween",duration:.6,ease:[.34,1.4,.64,1]},exitTransition:{type:"tween",duration:.32,ease:[.5,0,.75,0]}}),blur:e=>({initial:{y:e?"45%":"-45%",opacity:0},animate:{y:0,opacity:1},exit:{y:e?"-45%":"45%",opacity:0},transition:{type:"tween",duration:.55,ease:[.22,1,.36,1]}}),scale:e=>({initial:{scale:e?.35:1.7,opacity:0},animate:{scale:1,opacity:1},exit:{scale:e?1.7:.35,opacity:0},transition:{type:"spring",damping:17,stiffness:240}}),drop:()=>({initial:{y:"-110%",opacity:0},animate:{y:0,opacity:1},exit:{y:"110%",opacity:0},transition:{type:"spring",damping:18,stiffness:320,mass:.9},exitTransition:{type:"tween",duration:.3,ease:[.55,0,1,.45]}})},so=e=>{const a=String(e??"").trim();let n=null;const o=a.match(/^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i);if(o){const C=o[1].length<6?[...o[1].slice(0,3)].map(D=>D+D).join(""):o[1].slice(0,6);n=[0,2,4].map(D=>parseInt(C.slice(D,D+2),16))}else{const C=a.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i);C&&(n=C.slice(1,4).map(Number))}if(!n)return;const[l,f,v]=n.map(C=>{const D=Math.min(Math.max(C/255,0),1);return D<=.04045?D/12.92:((D+.055)/1.055)**2.4});return .2126*l+.7152*f+.0722*v>.3?"#0b0b0c":"#ffffff"},un=b.forwardRef((e,a)=>{const{texts:n,transition:o,initial:l,animate:f,exit:v,effect:C="slide",direction:D="up",highlight:O=!1,highlightColor:W="#a855f7",animatePresenceMode:ee="wait",animatePresenceInitial:me=!1,rotationInterval:ge=2e3,staggerDuration:ve=0,staggerFrom:pe="first",loop:ye=!0,auto:_e=!0,pauseOnHover:xe=!1,blur:fe=0,splitBy:le="characters",onNext:ke,onMouseEnter:Ne,onMouseLeave:be,mainClassName:re,splitLevelClassName:ue,elementLevelClassName:Ee,style:we,...ne}=e,[$,A]=b.useState(0),[_,F]=b.useState(!1),u=b.useRef(0),t=b.useRef(ke);t.current=ke;const Se=b.useRef(null),de=vn("auto"),K=nn(),ie=Math.max(n.length-1,0),k=Math.min($,ie),H=b.useMemo(()=>{const S=n[k]??"";if(le==="characters"){const T=S.split(" ");return T.map((G,J)=>({characters:ro(G),needsSpace:J!==T.length-1}))}return le==="words"?S.split(" ").map((T,G,J)=>({characters:[T],needsSpace:G!==J.length-1})):le==="lines"?S.split(`
`).map((T,G,J)=>({characters:[T],needsSpace:G!==J.length-1})):S.split(le).map((T,G,J)=>({characters:[T],needsSpace:G!==J.length-1}))},[n,k,le]),Q=b.useMemo(()=>{const S=H.reduce((G,J)=>G+J.characters.length,0),T=Array.from({length:S},(G,J)=>J).sort(()=>Math.random()-.5);return{total:S,shuffled:T}},[H]),De=S=>{const{total:T,shuffled:G}=Q;return pe==="first"?S*ve:pe==="last"?(T-1-S)*ve:pe==="center"?Math.abs(Math.floor(T/2)-S)*ve:pe==="random"?G[S]*ve:Math.abs(pe-S)*ve},Me=b.useCallback(S=>{var T;S!==u.current&&(u.current=S,A(S),(T=t.current)==null||T.call(t,S))},[]),ae=b.useCallback(()=>{const S=Math.min(u.current,ie);Me(S<ie?S+1:ye?0:S)},[ie,ye,Me]),E=b.useCallback(()=>{const S=Math.min(u.current,ie);Me(S>0?S-1:ye?ie:S)},[ie,ye,Me]),Ue=b.useCallback(S=>Me(Math.max(0,Math.min(S,ie))),[ie,Me]),Le=b.useCallback(()=>Me(0),[Me]);b.useImperativeHandle(a,()=>({next:ae,previous:E,jumpTo:Ue,reset:Le}),[ae,E,Ue,Le]);const ce=xe&&_;b.useEffect(()=>{if(!_e||ce)return;const S=setTimeout(ae,ge);return()=>clearTimeout(S)},[ae,ge,_e,ce,k]),to(()=>{const S=Se.current;if(!O||!S){de.set("auto");return}let T=null,G=!1;const J=()=>{const U=S.offsetWidth+1;if(T==null||T.stop(),!G||K){G=!0,de.set(U);return}T=We(de,U,oo)};J();const oe=typeof ResizeObserver<"u"?new ResizeObserver(J):null;return oe==null||oe.observe(S),()=>{oe==null||oe.disconnect(),T==null||T.stop()}},[O,K,de]);const Pe=S=>{xe&&F(!0),Ne==null||Ne(S)},Te=S=>{F(!1),be==null||be(S)},Xe=(Lr[C]??Lr.slide)(D!=="down"),Fe=fe>0?fe:C==="blur"?10:0,je=l??Xe.initial,q=f??Xe.animate,Ce=v??Xe.exit,ze=o??Xe.transition,s=o||v?null:Xe.exitTransition,w=Fe>0?Kt(je,`blur(${Fe}px)`):je,p=Fe>0?Kt(q,"blur(0px)"):q,d=Fe>0?Kt(Ce,`blur(${Fe}px)`):Ce,h=C==="flip"?ao:void 0,m=O?{...we,width:de,backgroundColor:W,color:so(W)??(we==null?void 0:we.color)}:we,P=r.jsx(On,{mode:ee,initial:me,children:r.jsx(pt.span,{className:Nt(le==="lines"?"text-rotate-lines":"text-rotate"),layout:!O,"aria-hidden":"true",children:H.map((S,T,G)=>{const J=G.slice(0,T).reduce((oe,U)=>oe+U.characters.length,0);return r.jsxs("span",{className:Nt("text-rotate-word",ue),children:[S.characters.map((oe,U)=>{const X=De(J+U);return r.jsx(pt.span,{initial:w,animate:p,exit:s?{...d,transition:{...s,delay:X}}:d,transition:{...ze,delay:X},className:Nt("text-rotate-element",Ee),style:h,children:oe},U)}),S.needsSpace&&r.jsx("span",{className:"text-rotate-space",children:" "})]},T)})},k)});return r.jsx(Gn,{reducedMotion:"user",children:r.jsxs(pt.span,{className:Nt("text-rotate",O&&"text-rotate-highlight",re),...ne,style:m,onMouseEnter:Pe,onMouseLeave:Te,layout:!O,transition:o??no,children:[r.jsx("span",{className:"text-rotate-sr-only",children:n[k]}),O?r.jsx("span",{ref:Se,className:"text-rotate-highlight-content",children:P}):P]})})});un.displayName="RotatingText";const Pr={dark:{surface:"#0c0c0f",text:"#fafafa",track:"rgba(255, 255, 255, 0.1)",light:"#ffffff"},light:{surface:"#ffffff",text:"#18181b",track:"rgba(24, 24, 27, 0.12)",light:"#18181b"}},io=["lap","brighten","reveal","none"],Jt=48,Qt=.9,Ut=Math.PI*2,ct=[255,255,255],dt=(e,a,n)=>Math.min(n,Math.max(a,e)),cr=(e,a)=>(e%a+a)%a,Ir=e=>e<.5?4*e*e*e:1-(2-2*e)**3/2,Lt=(e,a,n)=>[e[0]+(a[0]-e[0])*n,e[1]+(a[1]-e[1])*n,e[2]+(a[2]-e[2])*n],qe=(e,a)=>`rgba(${Math.round(e[0])}, ${Math.round(e[1])}, ${Math.round(e[2])}, ${dt(a,0,1).toFixed(3)})`;let mt=null;const Fr=e=>{var o;if(mt=mt??document.createElement("canvas").getContext("2d"),!mt)return ct;mt.fillStyle="#000000",mt.fillStyle=e;const a=String(mt.fillStyle);if(a.startsWith("#")){const l=parseInt(a.slice(1,7),16);return[l>>16&255,l>>8&255,l&255]}const n=((o=a.match(/[\d.]+/g))==null?void 0:o.map(Number))??ct;return[n[0],n[1],n[2]]},co=(e,a,n)=>{const o=Math.max(0,Math.min(n,e/2,a/2)),l=Math.PI*o/2,f=Math.max(0,e-2*o),v=Math.max(0,a-2*o),C=[{length:f,x:o,y:0,dx:1,dy:0,angle:null},{length:l,x:e-o,y:o,dx:0,dy:0,angle:-Math.PI/2},{length:v,x:e,y:o,dx:0,dy:1,angle:null},{length:l,x:e-o,y:a-o,dx:0,dy:0,angle:0},{length:f,x:e-o,y:a,dx:-1,dy:0,angle:null},{length:l,x:o,y:a-o,dx:0,dy:0,angle:Math.PI/2},{length:v,x:0,y:a-o,dx:0,dy:-1,angle:null},{length:l,x:o,y:o,dx:0,dy:0,angle:Math.PI}];return{r:o,segments:C,total:Math.max(1,C.reduce((D,O)=>D+O.length,0))}},vt=(e,a,n)=>{let o=cr(a,e.total);for(const l of e.segments){if(l.length>0&&o<=l.length){if(l.angle===null)n.x=l.x+l.dx*o,n.y=l.y+l.dy*o,n.nx=l.dy,n.ny=-l.dx;else{const f=l.angle+o/e.r;n.nx=Math.cos(f),n.ny=Math.sin(f),n.x=l.x+n.nx*e.r,n.y=l.y+n.ny*e.r}return n}o-=l.length}return n},_r=(e,a,n)=>{let o=1/0,l=0,f=0;return e.segments.forEach(v=>{if(v.length>0){let C=0,D=0,O=0;if(v.angle===null)C=dt((a-v.x)*v.dx+(n-v.y)*v.dy,0,v.length),D=v.x+v.dx*C,O=v.y+v.dy*C;else{let ee=cr(Math.atan2(n-v.y,a-v.x)-v.angle,Ut);ee>Math.PI/2&&(ee=ee>Math.PI*1.25?0:Math.PI/2),C=ee*e.r,D=v.x+Math.cos(v.angle+ee)*e.r,O=v.y+Math.sin(v.angle+ee)*e.r}const W=(a-D)**2+(n-O)**2;W<o&&(o=W,l=f+C)}f+=v.length}),l},lo=({as:e="button",children:a,className:n="",style:o,color:l,trailColor:f,duration:v=4,thickness:C=1,radius:D=12,trailLength:O=.3,stars:W=1,glow:ee=.6,sparkle:me=!1,direction:ge="clockwise",hover:ve="lap",clickPulse:pe=!0,theme:ye="dark",backgroundColor:_e,textColor:xe,borderColor:fe,...le})=>{const ke=b.useRef(null),Ne=b.useRef(null),be=b.useRef(null),re=Pr[ye]??Pr.dark,ue=l??re.light,Ee={light:ye==="light",color:ue,trailColor:f??ue,duration:Math.max(.3,v),thickness:Math.max(.5,C),radius:Math.max(0,D),trailLength:dt(O,0,1),stars:dt(Math.round(W),1,6),glow:dt(ee,0,1),sparkle:me,direction:ge==="counterclockwise"?-1:1,hover:io.includes(ve)?ve:"lap",clickPulse:pe},we=b.useRef(Ee);return we.current=Ee,b.useEffect(()=>{var p;const ne=ke.current,$=Ne.current,A=$==null?void 0:$.getContext("2d");if(!ne||!$||!A)return;const _=((p=window.matchMedia)==null?void 0:p.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,F={x:0,y:0,nx:0,ny:-1},u={width:0,height:0,dpr:1,phase:0,velocity:0,motion:0,lap:-1,time:0,reveal:0,boost:0,flash:0,emit:0,hovered:!1,focused:!1,pointerX:0,pointerY:0,visible:!0},t=[],Se=[],de={key:"",head:ct,tail:ct};let K=0,ie=performance.now(),k=!0;const H=()=>{u.width=ne.offsetWidth,u.height=ne.offsetHeight,u.dpr=Math.min(window.devicePixelRatio||1,2),$.width=Math.max(1,Math.round((u.width+Jt*2)*u.dpr)),$.height=Math.max(1,Math.round((u.height+Jt*2)*u.dpr)),Pe()},Q=d=>{const h=ne.getBoundingClientRect(),m=h.width?u.width/h.width:1,P=h.height?u.height/h.height:1;return[(d.clientX-h.left)*m,(d.clientY-h.top)*P]},De=d=>co(Math.max(1,u.width-d.thickness),Math.max(1,u.height-d.thickness),d.radius-d.thickness/2),Me=(d,h,m,P,S,T)=>{A.lineWidth=S,A.strokeStyle=T,A.beginPath(),A.moveTo(d,h),A.lineTo(m,P),A.stroke()},ae=(d,h,m,P,S,T,G=!0)=>{if(P<.5||T<=0)return;const J=dt(Math.ceil(P/2),2,90);vt(h,m,F);let oe=F.x,U=F.y;for(let X=1;X<=J;X++){vt(h,m-S*P*(X/J),F);const L=1-(X-.5)/J,Ae=L*L*T;let c=Lt(de.tail,de.head,L);d.light||(c=Lt(c,ct,L**6*.65)),A.lineCap=G&&X===1?"round":"butt",Me(oe,U,F.x,F.y,2+6*d.glow,qe(c,Ae*(d.light?.1:.2)*d.glow)),Me(oe,U,F.x,F.y,d.thickness,qe(c,Ae)),oe=F.x,U=F.y}},E=(d,h,m,P,S)=>{if(P<=0)return;const T=de.head,G=(12+40*d.glow)*(d.light?.6:1),J=A.createRadialGradient(h,m,0,h,m,G),oe=(d.light?.08:.4)*d.glow*P;if(J.addColorStop(0,qe(T,oe)),J.addColorStop(.2,qe(T,oe*.4)),J.addColorStop(.5,qe(T,oe*.1)),J.addColorStop(1,qe(T,0)),A.fillStyle=J,A.fillRect(h-G,m-G,G*2,G*2),!d.sparkle)return;const U=(1+d.thickness*.6)*(d.light?.85:1),X=A.createRadialGradient(h,m,0,h,m,U*2.2);X.addColorStop(0,qe(d.light?T:ct,P)),X.addColorStop(d.light?.3:.4,qe(d.light?T:Lt(T,ct,.5),P*.9)),X.addColorStop(d.light?.55:1,qe(T,d.light?P*.12:0)),X.addColorStop(1,qe(T,0)),A.fillStyle=X,A.beginPath(),A.arc(h,m,U*2.2,0,Ut),A.fill();const L=(3+4*d.glow+d.thickness*1.5)*S,Ae=d.light?T:ct,c=A.createLinearGradient(h-L,m,h+L,m);c.addColorStop(0,qe(T,0)),c.addColorStop(.5,qe(Ae,P*.95)),c.addColorStop(1,qe(T,0)),Me(h-L,m,h+L,m,d.light?.75:1,c);const i=A.createLinearGradient(h,m-L,h,m+L);i.addColorStop(0,qe(T,0)),i.addColorStop(.5,qe(Ae,P*.95)),i.addColorStop(1,qe(T,0)),Me(h,m-L,h,m+L,d.light?.75:1,i)},Ue=(d,h,m,P,S)=>{if(Se.length>48)return;const T=3+Math.random()*10,G=(Math.random()-.5)*8;Se.push({x:d+m*(Math.random()*3-1),y:h+P*(Math.random()*3-1),vx:m*T-P*G-S*-P*.04,vy:P*T+m*G-S*m*.04,age:0,life:.35+Math.random()*.5,size:.45+Math.random()*.7,seed:Math.random()*Ut})},Le=(d,h)=>{const m=u.boost>.001?{...d,glow:Math.min(1.5,d.glow+.4*u.boost)}:d;if(A.setTransform(1,0,0,1,0,0),A.clearRect(0,0,$.width,$.height),u.width<2||u.height<2)return;const P=(Jt+m.thickness/2)*u.dpr;A.setTransform(u.dpr,0,0,u.dpr,P,P),A.globalCompositeOperation=m.light?"source-over":"lighter",A.lineCap="butt";const S=h.total,T=S/m.stars,G=Math.abs(u.motion),J=u.motion>=0?1:-1,oe=m.trailLength*m.duration,U=Math.min(G*oe,T*.92,S*.6),X=u.reveal*(1+.4*u.boost+.6*u.flash),L=u.flash*(m.light?.18:.32)+u.boost*u.reveal*(m.light?.07:.12);L>.005&&(A.lineWidth=m.thickness+2*m.glow,A.strokeStyle=qe(de.head,L),A.beginPath(),A.roundRect(0,0,Math.max(1,u.width-m.thickness),Math.max(1,u.height-m.thickness),Math.max(0,h.r)),A.stroke());const Ae=dt(1-G/Math.max(1,S/m.duration*.6),0,1)*Math.min(1,X),c=(10+14*m.glow+m.thickness*2)*Ae;for(let i=0;i<m.stars;i++){const R=u.phase+i*T;ae(m,h,R,U,J,Math.min(1,X)),Ae>.01&&(ae(m,h,R,c,1,Ae,!1),ae(m,h,R,c,-1,Ae,!1))}t.forEach(i=>{const y=(1-i.age/.65)**2,I=S/2*(1-(1-Math.min(1,i.age/.5))**2),B=Math.min(I,S*.16);[1,-1].forEach(Z=>{const Re=i.origin+Z*I;ae(m,h,Re,B,Z,y),vt(h,Re,F),E(m,F.x,F.y,y*.8,.8)})});for(let i=0;i<m.stars;i++){vt(h,u.phase+i*T,F);const R=.82+.18*Math.sin(u.time*6.1+i*2.3)*Math.sin(u.time*2.7+i);E(m,F.x,F.y,Math.min(1.3,X),R)}Se.forEach(i=>{const R=1-i.age/i.life,y=.45+.55*Math.sin(u.time*20+i.seed),I=R*y*u.reveal*(m.light?.35:.9);I<=.01||(A.fillStyle=qe(m.light?de.head:Lt(de.tail,ct,.6),I),A.beginPath(),A.arc(i.x,i.y,i.size*(.6+.4*R),0,Ut),A.fill())})},ce=d=>{if(K=0,!k)return;const h=we.current,m=Math.min(.05,Math.max(.001,(d-ie)/1e3));ie=d,u.time+=m;const P=`${h.color}|${h.trailColor}`;P!==de.key&&(de.key=P,de.head=Fr(h.color),de.tail=Fr(h.trailColor));const S=De(h),T=S.total,G=T/h.stars,J=u.hovered||u.focused,oe=_?0:h.direction*T/h.duration,U=h.hover==="reveal"&&!J?0:1;u.reveal+=(U-u.reveal)*(1-Math.exp(-m/(U>u.reveal?.16:.45)));const X=h.hover==="brighten"&&J?1:0;u.boost+=(X-u.boost)*(1-Math.exp(-m/(X>u.boost?.18:.5))),u.flash*=Math.exp(-m/.22),u.velocity+=(oe-u.velocity)*(1-Math.exp(-m/.45));let L=0;if(u.lap>=0){const y=Ir(Math.min(1,u.lap/Qt));u.lap+=m,L=(Ir(Math.min(1,u.lap/Qt))-y)*T*h.direction,u.lap>=Qt&&(u.lap=-1)}u.motion=u.velocity+L/m,u.phase=cr(u.phase+u.velocity*m+L,T);const Ae=Math.abs(u.motion)/Math.max(1,Math.abs(T/h.duration));if(h.sparkle&&!_&&u.reveal>.05)for(u.emit+=m*(2+6*Math.min(2,Ae))*h.stars;u.emit>1;)u.emit-=1,vt(S,u.phase+Math.floor(Math.random()*h.stars)*G,F),Ue(F.x,F.y,F.nx,F.ny,u.motion);for(let y=Se.length-1;y>=0;y--){const I=Se[y];I.age+=m,I.x+=I.vx*m,I.y+=I.vy*m,I.vx*=Math.exp(-m*2.2),I.vy*=Math.exp(-m*2.2),I.age>=I.life&&Se.splice(y,1)}for(let y=t.length-1;y>=0;y--)t[y].age+=m,t[y].age>=.65&&t.splice(y,1);Le(h,S);const c=Math.abs(U-u.reveal)>.002||Math.abs(X-u.boost)>.002||u.flash>.01||t.length>0||Se.length>0,i=Math.abs(u.motion)>.05||oe!==0||u.lap>=0,R=u.reveal>.002||U>0;u.visible&&(c||i&&R||u.hovered)&&(K=requestAnimationFrame(ce))},Pe=()=>{K||!k||!u.visible||(ie=performance.now(),K=requestAnimationFrame(ce))};be.current=Pe;const Te=d=>{const h=we.current;[u.pointerX,u.pointerY]=Q(d),u.hovered=!0,h.hover==="reveal"&&u.reveal<.15&&(u.phase=_r(De(h),u.pointerX-h.thickness/2,u.pointerY-h.thickness/2),u.velocity=0),h.hover==="lap"&&u.lap<0&&!_&&(u.lap=0),Pe()},Xe=()=>{u.hovered=!1,Pe()},Fe=d=>{we.current.clickPulse&&(t.push({origin:d,age:0}),t.length>4&&t.shift(),u.flash=1,Pe())},je=d=>{if(d.button!==0&&d.pointerType==="mouse")return;const h=we.current,[m,P]=Q(d);Fe(_r(De(h),m-h.thickness/2,P-h.thickness/2))},q=d=>{d.detail===0&&Fe(u.phase)},Ce=()=>{u.focused=ne.matches(":focus-visible"),u.focused&&we.current.hover==="lap"&&u.lap<0&&!_&&(u.lap=0),Pe()},ze=()=>{u.focused=!1,Pe()},s=new ResizeObserver(H);s.observe(ne);const w=new IntersectionObserver(d=>{u.visible=d.some(h=>h.isIntersecting),u.visible&&Pe()});return w.observe(ne),ne.addEventListener("pointerenter",Te),ne.addEventListener("pointerleave",Xe),ne.addEventListener("pointerdown",je),ne.addEventListener("click",q),ne.addEventListener("focus",Ce),ne.addEventListener("blur",ze),H(),()=>{k=!1,be.current=null,cancelAnimationFrame(K),s.disconnect(),w.disconnect(),ne.removeEventListener("pointerenter",Te),ne.removeEventListener("pointerleave",Xe),ne.removeEventListener("pointerdown",je),ne.removeEventListener("click",q),ne.removeEventListener("focus",Ce),ne.removeEventListener("blur",ze)}},[]),b.useEffect(()=>{var ne;(ne=be.current)==null||ne.call(be)}),r.jsxs(e,{ref:ke,className:`star-border${n?` ${n}`:""}`,style:{"--star-border-radius":`${Ee.radius}px`,"--star-border-thickness":`${Ee.thickness}px`,"--star-border-surface":_e??re.surface,"--star-border-text":xe??re.text,"--star-border-track":fe??re.track,...o},...e==="button"&&le.type===void 0?{type:"button"}:null,...le,children:[r.jsx("canvas",{ref:Ne,className:"star-border__light","aria-hidden":"true"}),a]})},Ze=96,Zt=.18,uo=1024,Ur=96,Pt=260,fo={gloss:0,matte:1,holo:2};let Dr=1;const ho=`#version 300 es
in vec2 aGrid;
uniform vec2 uCanvas;
uniform vec2 uMesh;
uniform vec2 uCenter;
uniform vec2 uDir;
uniform float uFold;
uniform float uRadius;
uniform float uAngle;
uniform float uScale;
uniform float uLift;
uniform int uPass;
uniform vec2 uShadowOffset;
uniform vec2 uShadowSlope;
out vec2 vUv;
out float vFold;
out vec3 vNormal;
out vec3 vPos;
out float vHeight;
out float vCurl;
const float PI = 3.14159265;

void main() {
  vec2 local = (aGrid - 0.5) * uMesh;
  float s = dot(local, uDir);
  float d = uFold - s;
  vec3 normal = vec3(0.0, 0.0, 1.0);
  float z = 0.0;
  vec2 p = local;
  if (d > 0.0) {
    float theta = d / uRadius;
    float along = uFold + d - PI * uRadius;
    z = 2.0 * uRadius;
    normal = vec3(0.0, 0.0, -1.0);
    if (theta < PI) {
      along = uFold - uRadius * sin(theta);
      z = uRadius * (1.0 - cos(theta));
      normal = vec3(uDir * sin(theta), cos(theta));
    }
    p += (along - s) * uDir;
  }
  float c = cos(uAngle);
  float sn = sin(uAngle);
  vec2 turned = vec2(c * p.x - sn * p.y, sn * p.x + c * p.y) * uScale;
  vNormal = vec3(c * normal.x - sn * normal.y, sn * normal.x + c * normal.y, normal.z);
  vUv = aGrid;
  vFold = d;
  vCurl = z * uScale;
  float height = z * uScale + uLift;
  vec2 screen = uCenter + turned;
  float depth = 0.0;
  if (uPass == 0 || uPass == 2) {
    vHeight = uPass == 0 ? height : z * uScale;
    screen += uShadowOffset + uShadowSlope * vHeight;
  } else {
    vHeight = height;
    depth = clamp(-height / 1000.0, -1.0, 1.0);
  }
  vPos = vec3(uCenter + turned, height);
  gl_Position = vec4(screen.x / uCanvas.x * 2.0 - 1.0, 1.0 - screen.y / uCanvas.y * 2.0, depth, 1.0);
}`,mo=`#version 300 es
precision highp float;
precision highp int;
uniform sampler2D uImage;
uniform int uPass;
uniform int uFinish;
uniform vec3 uBack;
uniform vec3 uLight;
uniform float uShine;
uniform float uShadow;
uniform float uTexel;
uniform float uLod;
uniform float uRadius;
uniform vec2 uGlint;
in vec2 vUv;
in float vFold;
in vec3 vNormal;
in vec3 vPos;
in float vHeight;
in float vCurl;
out vec4 outColor;

float hash(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}

vec3 spectrum(float t) {
  t = fract(t) * 6.0;
  vec3 a = vec3(1.0, 0.478, 0.46);
  vec3 b = vec3(1.0, 0.928, 0.38);
  vec3 c = vec3(0.659, 1.0, 0.38);
  vec3 d = vec3(0.52, 1.0, 0.968);
  vec3 e = vec3(0.48, 0.584, 1.0);
  vec3 f = vec3(0.68, 0.52, 1.0);
  if (t < 1.0) return mix(a, b, t);
  if (t < 2.0) return mix(b, c, t - 1.0);
  if (t < 3.0) return mix(c, d, t - 2.0);
  if (t < 4.0) return mix(d, e, t - 3.0);
  if (t < 5.0) return mix(e, f, t - 4.0);
  return mix(f, a, t - 5.0);
}

float bars(float t) {
  t = fract(t) * 12.0;
  if (t < 3.8) return mix(0.08, 0.6, t / 3.8);
  if (t < 4.5) return mix(0.6, 0.72, (t - 3.8) / 0.7);
  if (t < 5.2) return mix(0.72, 0.6, (t - 4.5) / 0.7);
  if (t < 10.0) return mix(0.6, 0.08, (t - 5.2) / 4.8);
  return 0.08;
}

void main() {
  if (uPass == 0) {
    float alpha;
    if (vFold > 0.0) {
      alpha = textureLod(uImage, vUv, log2(max(1.5 * uTexel, 1.0))).a * (1.0 - smoothstep(0.0, uRadius, vCurl));
    } else {
      alpha = textureLod(uImage, vUv, log2(max((1.2 + vHeight * 0.55) * uTexel, 1.0))).a;
    }
    outColor = vec4(0.0, 0.0, 0.0, alpha * uShadow / (1.0 + vHeight * 0.03));
    return;
  }
  if (uPass == 2) {
    if (vFold <= 0.0) discard;
    float alpha = textureLod(uImage, vUv, log2(max(uTexel, 1.0))).a * smoothstep(0.0, uRadius, vCurl);
    outColor = vec4(alpha);
    return;
  }
  if (uPass == 1 && vFold > 0.0) discard;
  if (uPass == 3 && vFold <= 0.0) discard;
  vec4 art = textureLod(uImage, vUv, uLod);
  if (art.a < 0.004) discard;
  bool front = vNormal.z >= 0.0;
  vec3 n = normalize(front ? vNormal : -vNormal);
  vec3 toLight = normalize(uLight - vPos);
  vec3 halfway = normalize(toLight + vec3(0.0, 0.0, 1.0));
  float diffuse = max(dot(n, toLight), 0.0);
  float nh = max(dot(n, halfway), 0.0);
  vec3 key = normalize(vec3(-0.45, -0.6, 0.66));
  float shade = clamp(0.5 + 0.25 * dot(n, key) / key.z + 0.25 * n.z, 0.5, front ? 1.0 : 1.08);
  if (uPass == 1) shade = 1.0;
  vec3 color;
  if (!front) {
    float grain = hash(floor(vUv * 700.0)) * 0.06 - 0.03;
    color = uBack * (0.7 + 0.3 * diffuse + grain) * art.a + vec3(pow(nh, 24.0) * 0.2 * uShine) * art.a;
  } else if (uFinish == 1) {
    color = art.rgb * (0.8 + 0.22 * diffuse) + vec3(pow(nh, 8.0) * 0.08 * uShine) * art.a;
  } else if (uFinish == 2) {
    vec3 albedo = art.rgb / art.a;
    float lum = dot(albedo, vec3(0.299, 0.587, 0.114));
    float foil = smoothstep(0.5, 0.92, lum);
    vec2 q = vUv - uGlint;
    float near = exp(-dot(q, q) * 3.0);
    float tilt = dot(n.xy, vec2(0.6, 0.8)) * 1.6;
    vec3 rainbow = spectrum((vUv.x + vUv.y) * 0.85 - (uGlint.x + uGlint.y) * 1.2 + tilt);
    float streak = bars((vUv.x - vUv.y) * 2.6 + uGlint.x * 1.8 - uGlint.y * 0.6 + tilt * 0.5);
    float band = smoothstep(0.32, 0.7, streak);
    vec3 silver = vec3(0.8, 0.82, 0.86) * (0.88 + 0.16 * diffuse);
    vec3 film = mix(silver, rainbow * 1.08, clamp(band * (0.55 + 0.45 * near) + 0.18 * near, 0.0, 1.0));
    vec3 ink = albedo * (0.86 + 0.14 * diffuse) + rainbow * band * 0.22 * (0.4 + 0.6 * near);
    vec3 base = mix(albedo * (0.86 + 0.14 * diffuse), mix(ink, film, foil), uShine * 0.6 + 0.4);
    vec2 cell = floor(vUv * 180.0);
    vec2 jitter = vec2(hash(cell), hash(cell + 7.3)) * 0.6 + 0.2;
    float dist = length(fract(vUv * 180.0) - jitter);
    vec3 facet = normalize(vec3(vec2(hash(cell + 2.1), hash(cell + 5.7)) * 2.0 - 1.0, 1.6));
    float glint = pow(max(dot(facet, halfway), 0.0), 60.0) * smoothstep(0.32, 0.05, dist) * step(0.55, hash(cell + 3.1)) * (0.15 + 0.85 * foil);
    color = (base + spectrum(hash(cell) + uGlint.x) * glint * 1.6 * uShine + vec3(pow(nh, 140.0) * 0.4 * uShine)) * art.a;
  } else {
    color = art.rgb * (0.86 + 0.16 * diffuse) + vec3(pow(nh, 220.0) * 0.4 + pow(nh, 24.0) * 0.03) * uShine * art.a;
  }
  float bend = uPass == 3 ? smoothstep(0.0, uRadius * 0.6, vCurl) : 0.0;
  float glare = pow(max(dot(n, normalize(key + vec3(0.0, 0.0, 1.0))), 0.0), 28.0) * bend * (0.18 + 0.3 * uShine);
  outColor = vec4(min(color * shade + vec3(glare) * art.a, vec3(art.a)), art.a);
}`,po=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,xo=`#version 300 es
precision highp float;
uniform sampler2D uSource;
uniform vec2 uStep;
uniform float uSigma;
uniform float uStrength;
uniform int uMode;
in vec2 vUv;
out vec4 outColor;

void main() {
  if (uMode == 1) {
    outColor = vec4(0.0, 0.0, 0.0, texture(uSource, vUv).a * uStrength);
    return;
  }
  vec4 sum = vec4(0.0);
  float total = 0.0;
  for (int i = -8; i <= 8; i++) {
    float offset = float(i);
    float weight = exp(-0.5 * offset * offset / (uSigma * uSigma));
    sum += texture(uSource, vUv + uStep * offset) * weight;
    total += weight;
  }
  outColor = sum / total;
}`,et=(e,a,n)=>Math.min(n,Math.max(a,e)),zr=e=>Math.atan2(Math.sin(e),Math.cos(e)),Xr=e=>e*Math.PI/180,er=(e,a,n,o,l,f)=>{const v=2*Math.PI*o,C=`${a}V`;e[C]+=(v*v*(n-e[a])-2*l*v*e[C])*f,e[a]+=e[C]*f},Or=(e,a,n)=>{const o=e.createShader(a);return o?(e.shaderSource(o,n),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)?o:(e.deleteShader(o),null)):null},Gr=(e,a,n)=>{const o=Or(e,e.VERTEX_SHADER,a),l=Or(e,e.FRAGMENT_SHADER,n),f=e.createProgram();if(!o||!l||!f)return null;if(e.attachShader(f,o),e.attachShader(f,l),e.bindAttribLocation(f,0,"aGrid"),e.linkProgram(f),e.deleteShader(o),e.deleteShader(l),!e.getProgramParameter(f,e.LINK_STATUS))return e.deleteProgram(f),null;const v={},C=e.getProgramParameter(f,e.ACTIVE_UNIFORMS);for(let D=0;D<C;D++){const O=e.getActiveUniform(f,D);O&&(v[O.name]=e.getUniformLocation(f,O.name))}return{program:f,uniforms:v}},go=e=>{const a=[...e].sort((f,v)=>f[0]-v[0]||f[1]-v[1]);if(a.length<3)return a;const n=(f,v,C)=>(v[0]-f[0])*(C[1]-f[1])-(v[1]-f[1])*(C[0]-f[0]),o=[];a.forEach(f=>{for(;o.length>=2&&n(o[o.length-2],o[o.length-1],f)<=0;)o.pop();o.push(f)});const l=[];for(let f=a.length-1;f>=0;f--){const v=a[f];for(;l.length>=2&&n(l[l.length-2],l[l.length-1],v)<=0;)l.pop();l.push(v)}return o.slice(0,-1).concat(l.slice(0,-1))},vo=({imageSrc:e,width:a=200,rotate:n=0,peelDirection:o=0,peelBackHoverPct:l=25,peelBackActivePct:f=40,curlRadius:v=12,finish:C="gloss",backColor:D="#d4d4d8",lightingIntensity:O=.5,shadowIntensity:W=.6,followPointer:ee=!0,draggable:me=!0,swing:ge=1,friction:ve=.5,bounce:pe=.35,intro:ye=!0,initialPosition:_e="center",onDragStart:xe,onDragEnd:fe,dpr:le,className:ke="",style:Ne,...be})=>{const re=b.useRef(null),ue=b.useRef(null),Ee=b.useRef(null),we=b.useRef(null),ne={imageSrc:e,width:Math.max(16,a),rotate:Xr(n),peelDirection:Xr(o),hoverPeel:et(l,0,100)/100,activePeel:et(f,0,100)/100,curlRadius:Math.max(2,v),finish:fo[C]??0,backColor:D,lighting:et(O,0,1),shadow:et(W,0,1),followPointer:ee,draggable:me,swing:et(ge,0,3),friction:et(ve,0,1),bounce:et(pe,0,1),intro:ye,initialPosition:_e,onDragStart:xe,onDragEnd:fe,dpr:le},$=b.useRef(ne);return $.current=ne,b.useEffect(()=>{var V;const A=re.current,_=ue.current,F=Ee.current,u=A==null?void 0:A.parentElement,t=_==null?void 0:_.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!0,depth:!0,stencil:!1});if(!A||!_||!F||!u||!t)return;const Se=Gr(t,ho,mo),de=Gr(t,po,xo);if(!Se||!de)return;const K=Se.uniforms,ie=de.uniforms,k=[0,1].map(()=>{const g=t.createTexture();t.bindTexture(t.TEXTURE_2D,g),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);const x=t.createFramebuffer();return{texture:g,buffer:x,width:0,height:0}}),H=()=>{const g=Math.max(1,Math.round(Ce.size/2)),x=g;k.forEach(N=>{N.width===g&&N.height===x||(N.width=g,N.height=x,t.bindTexture(t.TEXTURE_2D,N.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,g,x,0,t.RGBA,t.UNSIGNED_BYTE,null),t.bindFramebuffer(t.FRAMEBUFFER,N.buffer),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,N.texture,0))}),t.bindFramebuffer(t.FRAMEBUFFER,null)},Q=new Float32Array((Ze+1)*(Ze+1)*2);for(let g=0;g<=Ze;g++)for(let x=0;x<=Ze;x++){const N=(g*(Ze+1)+x)*2;Q[N]=x/Ze,Q[N+1]=g/Ze}const De=new Uint16Array(Ze*Ze*6);let Me=0;for(let g=0;g<Ze;g++)for(let x=0;x<Ze;x++){const N=g*(Ze+1)+x,Y=N+1,se=N+Ze+1,he=se+1;De.set([N,Y,he,N,he,se],Me),Me+=6}const ae=t.createVertexArray();t.bindVertexArray(ae);const E=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,E),t.bufferData(t.ARRAY_BUFFER,Q,t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0);const Ue=t.createBuffer();t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,Ue),t.bufferData(t.ELEMENT_ARRAY_BUFFER,De,t.STATIC_DRAW);const Le=t.createTexture(),ce=document.createElement("canvas"),Pe=ce.getContext("2d",{willReadFrequently:!0}),Te=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Xe=new Map,Fe=g=>{const x=String(g),N=Xe.get(x);if(N)return N;let Y=[.83,.83,.85];if(Te){Te.clearRect(0,0,1,1),Te.fillStyle="#d4d4d8",Te.fillStyle=x,Te.fillRect(0,0,1,1);const[se,he,$e]=Te.getImageData(0,0,1,1).data;Y=[se/255,he/255,$e/255]}return Xe.set(x,Y),Y},je=((V=window.matchMedia)==null?void 0:V.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,q={ready:!1,aspect:1,meshX:1,meshY:1,texel:1,mask:null,maskW:1,maskH:1,hull:[]},Ce={ratio:1,size:1,density:0},ze={width:1,height:1},s={x:0,y:0,vx:0,vy:0,placed:!1,swing:0,swingV:0,peel:0,peelV:0,lift:0,liftV:0,dir:$.current.peelDirection,hover:!1,local:{x:0,y:0},press:null,pivotV:{x:0,y:0},light:{x:0,y:0,z:Pt},pointer:{x:0,y:0,inside:!1},intro:$.current.intro&&!je?0:1};s.intro<1&&(s.lift=1.5,s.peel=.3,s.swing=.1,s.dir+=.6);let w=0,p=0,d=!0,h=null,m=!0;const P=()=>$.current.width*q.aspect,S=(g,x)=>{const Y=$.current.width,se=P();if(!q.hull.length){const He=(Math.abs(g)*Y+Math.abs(x)*se)/2;return[-He,He]}let he=1/0,$e=-1/0;return q.hull.forEach(([He,Ye])=>{const Ie=He*Y*g+Ye*se*x;Ie<he&&(he=Ie),Ie>$e&&($e=Ie)}),[he,$e]},T=g=>{if(h=g,q.ready=!1,!g)return;const x=new Image;x.crossOrigin="anonymous",x.decoding="async",x.onload=()=>{if(!m||h!==g||!Pe)return;const N=x.naturalWidth||1,Y=x.naturalHeight||1,se=Math.min(1,uo/(Math.max(N,Y)*(1+2*Zt))),he=Math.max(1,Math.round(N*se)),$e=Math.max(1,Math.round(Y*se)),He=Math.round(he*Zt),Ye=Math.round($e*Zt);ce.width=he+He*2,ce.height=$e+Ye*2,Pe.clearRect(0,0,ce.width,ce.height),Pe.drawImage(x,He,Ye,he,$e),t.bindTexture(t.TEXTURE_2D,Le),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,ce),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.generateMipmap(t.TEXTURE_2D),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),q.aspect=Y/N,q.meshX=ce.width/he,q.meshY=ce.height/$e,q.texel=ce.width;const Ie=Math.max(8,Math.round(Ur*Math.min(1,N/Y))),Be=Math.max(8,Math.round(Ur*Math.min(1,Y/N)));ce.width=Ie,ce.height=Be,Pe.clearRect(0,0,Ie,Be),Pe.drawImage(x,0,0,Ie,Be);const xt=Pe.getImageData(0,0,Ie,Be).data,Qe=new Uint8Array(Ie*Be).fill(255),ot=[],Ke=(Oe,Ge)=>{const Je=Ge*Ie+Oe;Qe[Je]===0||xt[Je*4+3]>100||(Qe[Je]=0,ot.push(Je))};for(let Oe=0;Oe<Ie;Oe++)Ke(Oe,0),Ke(Oe,Be-1);for(let Oe=0;Oe<Be;Oe++)Ke(0,Oe),Ke(Ie-1,Oe);for(;ot.length;){const Oe=ot.pop(),Ge=Oe%Ie,Je=(Oe-Ge)/Ie;Ge>0&&Ke(Ge-1,Je),Ge<Ie-1&&Ke(Ge+1,Je),Je>0&&Ke(Ge,Je-1),Je<Be-1&&Ke(Ge,Je+1)}const lt=[];for(let Oe=0;Oe<Be;Oe++)for(let Ge=0;Ge<Ie;Ge++)xt[(Oe*Ie+Ge)*4+3]>127&&lt.push([(Ge+.5)/Ie-.5,(Oe+.5)/Be-.5]);q.mask=Qe,q.maskW=Ie,q.maskH=Be,q.hull=go(lt),q.ready=!0,G(),i()},x.src=g},G=()=>{const g=$.current;Ce.ratio=Math.min(g.dpr||window.devicePixelRatio||1,2),ze.width=Math.max(1,u.clientWidth),ze.height=Math.max(1,u.clientHeight);const x=P(),N=Math.ceil(Math.hypot(g.width,x)*1.16+2*(36+g.curlRadius));if((N!==Ce.size||Ce.ratio!==Ce.density)&&(Ce.size=N,Ce.density=Ce.ratio,A.style.width=`${N}px`,A.style.height=`${N}px`,_.width=Math.round(N*Ce.ratio),_.height=Math.round(N*Ce.ratio)),F.style.width=`${g.width}px`,F.style.height=`${x}px`,!s.placed){const Y=g.initialPosition,se=Y&&typeof Y=="object"?Y:{x:0,y:0};s.x=ze.width/2+(se.x||0),s.y=ze.height/2+(se.y||0),s.light={x:s.x-g.width*.45,y:s.y-x*.9,z:Pt*1.6},s.placed=!0}oe()},J=()=>{const g=$.current,x=g.rotate+s.swing,N=1+.07*Math.max(0,s.lift),Y=g.width/2*N,se=P()/2*N,he=Math.abs(Math.cos(x)),$e=Math.abs(Math.sin(x));return{x:Y*he+se*$e,y:Y*$e+se*he}},oe=()=>{const g=$.current,x=J(),N=Math.min(x.x,ze.width/2),Y=Math.max(ze.width-x.x,ze.width/2),se=Math.min(x.y,ze.height/2),he=Math.max(ze.height-x.y,ze.height/2);s.x<N?(s.x=N,s.vx<0&&(s.vx=-s.vx*g.bounce)):s.x>Y&&(s.x=Y,s.vx>0&&(s.vx=-s.vx*g.bounce)),s.y<se?(s.y=se,s.vy<0&&(s.vy=-s.vy*g.bounce)):s.y>he&&(s.y=he,s.vy>0&&(s.vy=-s.vy*g.bounce))},U=g=>{const x=u.getBoundingClientRect();return{x:g.clientX-x.left-u.clientLeft,y:g.clientY-x.top-u.clientTop}},X=g=>{const N=-($.current.rotate+s.swing),Y=1+.07*Math.max(0,s.lift),se=g.x-s.x,he=g.y-s.y;return{x:(Math.cos(N)*se-Math.sin(N)*he)/Y,y:(Math.sin(N)*se+Math.cos(N)*he)/Y}},L=g=>{if(!q.mask)return!1;const x=$.current,N=Math.floor((g.x/x.width+.5)*q.maskW),Y=Math.floor((g.y/P()+.5)*q.maskH);return N<0||Y<0||N>=q.maskW||Y>=q.maskH?!1:q.mask[Y*q.maskW+N]>100},Ae=()=>{const g=$.current,x=Ce.size;A.style.transform=`translate3d(${s.x-x/2}px, ${s.y-x/2}px, 0)`;const N=g.rotate+s.swing,Y=1+.07*Math.max(0,s.lift);if(F.style.transform=`translate(-50%, -50%) rotate(${N}rad) scale(${Y})`,t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,_.width,_.height),t.clearColor(0,0,0,0),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),!q.ready)return;const se=g.width,he=P(),$e=-Math.sin(s.dir),He=Math.cos(s.dir),[Ye,Ie]=S($e,He),Be=et(s.peel,0,1),xt=Ye+Be*(Ie-Ye),Qe=Math.max(0,s.lift),ot=x/2,Ke=Ze*Ze*6,lt=Be>.001;t.useProgram(Se.program),t.bindVertexArray(ae),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,Le),t.uniform1i(K.uImage,0),t.uniform2f(K.uCanvas,x,x),t.uniform2f(K.uMesh,se*q.meshX,he*q.meshY),t.uniform2f(K.uCenter,ot,ot),t.uniform2f(K.uDir,$e,He),t.uniform1f(K.uFold,xt),t.uniform1f(K.uRadius,g.curlRadius),t.uniform1f(K.uAngle,N),t.uniform1f(K.uScale,Y),t.uniform1f(K.uLift,Qe*26),t.uniform2f(K.uShadowOffset,1.2,2.4),t.uniform2f(K.uShadowSlope,.28,.55),t.uniform1i(K.uFinish,g.finish),t.uniform3fv(K.uBack,Fe(g.backColor)),t.uniform3f(K.uLight,s.light.x-(s.x-ot),s.light.y-(s.y-ot),s.light.z),t.uniform1f(K.uShine,g.lighting),t.uniform1f(K.uShadow,g.shadow*.55),t.uniform1f(K.uTexel,q.texel/(se*q.meshX)),t.uniform1f(K.uLod,Math.max(0,Math.log2(q.texel/(se*q.meshX*Y*Ce.ratio))));const Oe=X(s.light);if(t.uniform2f(K.uGlint,Oe.x/(se*q.meshX)+.5,Oe.y/(he*q.meshY)+.5),t.disable(t.DEPTH_TEST),lt){H();const[Ge,Je]=k;t.bindFramebuffer(t.FRAMEBUFFER,Ge.buffer),t.viewport(0,0,Ge.width,Ge.height),t.clear(t.COLOR_BUFFER_BIT),t.disable(t.BLEND),t.uniform1i(K.uPass,2),t.drawElements(t.TRIANGLES,Ke,t.UNSIGNED_SHORT,0),t.useProgram(de.program),t.uniform1i(ie.uSource,1),t.uniform1i(ie.uMode,0),t.uniform1f(ie.uSigma,Math.min(4,(2.5+g.curlRadius*.15)/2)),t.activeTexture(t.TEXTURE1),t.bindFramebuffer(t.FRAMEBUFFER,Je.buffer),t.bindTexture(t.TEXTURE_2D,Ge.texture),t.uniform2f(ie.uStep,1/Ge.width,0),t.drawArrays(t.TRIANGLES,0,3),t.bindFramebuffer(t.FRAMEBUFFER,Ge.buffer),t.bindTexture(t.TEXTURE_2D,Je.texture),t.uniform2f(ie.uStep,0,1/Ge.height),t.drawArrays(t.TRIANGLES,0,3),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,_.width,_.height),t.useProgram(Se.program),t.activeTexture(t.TEXTURE0)}t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.uniform1i(K.uPass,0),t.drawElements(t.TRIANGLES,Ke,t.UNSIGNED_SHORT,0),t.uniform1i(K.uPass,1),t.drawElements(t.TRIANGLES,Ke,t.UNSIGNED_SHORT,0),lt&&(t.useProgram(de.program),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,k[0].texture),t.uniform1i(ie.uMode,1),t.uniform1f(ie.uStrength,g.shadow*.6),t.drawArrays(t.TRIANGLES,0,3),t.useProgram(Se.program),t.activeTexture(t.TEXTURE0),t.enable(t.DEPTH_TEST),t.depthFunc(t.LESS),t.uniform1i(K.uPass,3),t.drawElements(t.TRIANGLES,Ke,t.UNSIGNED_SHORT,0),t.disable(t.DEPTH_TEST))},c=g=>{if(w=0,!d||document.hidden)return;const x=$.current,N=p?et((g-p)/1e3,.001,1/30):1/60;p=g,x.imageSrc!==h&&T(x.imageSrc);const Y=P();s.intro<1&&q.ready&&(s.intro=Math.min(1,s.intro+N/1.1));const se=s.press,he=se&&se.moving?se:null;if(he){const Qe=he.pointer,ot=he.pivot,Ke=1-Math.exp(-N/.045),lt=s.pivotV.x+((Qe.x-ot.x)/N-s.pivotV.x)*Ke,Oe=s.pivotV.y+((Qe.y-ot.y)/N-s.pivotV.y)*Ke,Ge=(lt-s.pivotV.x)/N,Je=(Oe-s.pivotV.y)/N;s.pivotV.x=lt,s.pivotV.y=Oe,he.pivot={x:Qe.x,y:Qe.y};const Rt=x.rotate+s.swing,zt=-(Math.cos(Rt)*he.grab.x-Math.sin(Rt)*he.grab.y),Xt=-(Math.sin(Rt)*he.grab.x+Math.cos(Rt)*he.grab.y),fn=(x.width*x.width+Y*Y)/12+zt*zt+Xt*Xt,hn=(zt*-et(Je,-24e3,24e3)-Xt*-et(Ge,-24e3,24e3))/fn,Ot=2*Math.PI*1.5;s.swingV+=(hn*1.1*x.swing-Ot*Ot*s.swing-2*.45*Ot*s.swingV)*N,s.swing=et(s.swing+s.swingV*N,-1.2,1.2);const kt=x.rotate+s.swing,ur=1+.07*Math.max(0,s.lift);s.x=Qe.x-(Math.cos(kt)*he.grab.x-Math.sin(kt)*he.grab.y)*ur,s.y=Qe.y-(Math.sin(kt)*he.grab.x+Math.cos(kt)*he.grab.y)*ur,oe()}else{er(s,"swing",0,1.4,.32,N);const Qe=Math.exp(-N*(1.5+9*x.friction));s.vx*=Qe,s.vy*=Qe,Math.hypot(s.vx,s.vy)<4&&(s.vx=0,s.vy=0),s.x+=s.vx*N,s.y+=s.vy*N,oe()}const $e=s.intro<.2,He=$e?.3:se?x.activePeel:s.hover?x.hoverPeel:0;er(s,"peel",He,se||s.hover?3:3.6,se||s.hover?.7:.62,N),er(s,"lift",he?1:0,3.2,.55,N);let Ye=x.peelDirection;se&&Math.hypot(se.grab.x,se.grab.y)>Math.min(x.width,Y)*.12?Ye=Math.atan2(se.grab.x,-se.grab.y):x.followPointer&&s.hover&&Math.hypot(s.local.x,s.local.y)>Math.min(x.width,Y)*.12&&(Ye=Math.atan2(s.local.x,-s.local.y)),$e||(s.dir+=zr(Ye-s.dir)*(1-Math.exp(-N/.12)));const Ie=s.pointer.inside?{x:s.pointer.x,y:s.pointer.y,z:Pt}:{x:s.x-x.width*.45,y:s.y-Y*.9,z:Pt*1.6},Be=1-Math.exp(-N/.08);s.light.x+=(Ie.x-s.light.x)*Be,s.light.y+=(Ie.y-s.light.y)*Be,s.light.z+=(Ie.z-s.light.z)*Be,_.style.opacity=String(et(s.intro/.12,0,1)),Ae(),s.intro<1&&q.ready||se||Math.abs(s.peel-He)>5e-4||Math.abs(s.peelV)>5e-4||Math.abs(s.lift-(he?1:0))>5e-4||Math.abs(s.liftV)>5e-4||Math.abs(s.swing)>5e-4||Math.abs(s.swingV)>5e-4||s.vx!==0||s.vy!==0||Math.abs(zr(Ye-s.dir))>.002||Math.hypot(Ie.x-s.light.x,Ie.y-s.light.y,Ie.z-s.light.z)>.5?w=requestAnimationFrame(c):p=0};function i(){!w&&d&&!document.hidden&&(w=requestAnimationFrame(c))}const R=g=>{const x=U(g);s.local=X(x);const N=L(s.local);N!==s.hover&&(s.hover=N),F.style.cursor=N&&$.current.draggable?s.press?"grabbing":"grab":""},y=g=>{const x=U(g);s.pointer.x=x.x,s.pointer.y=x.y,s.pointer.inside=x.x>=0&&x.y>=0&&x.x<=ze.width&&x.y<=ze.height,i()},I=g=>{var N,Y;const x=s.press;if(!x)R(g);else if(x.id===g.pointerId){const se=U(g);x.pointer=se,!x.moving&&Math.hypot(se.x-x.origin.x,se.y-x.origin.y)>3&&(x.moving=$.current.draggable,x.moving&&((Y=(N=$.current).onDragStart)==null||Y.call(N))),x.samples.push({x:se.x,y:se.y,t:performance.now()}),x.samples.length>8&&x.samples.shift()}i()},B=()=>{s.press||(s.hover=!1,F.style.cursor="",i())},Z=g=>{var Y;const x=$.current;if(g.button!==0||!q.ready||(R(g),!s.hover))return;const N=U(g);s.press={id:g.pointerId,grab:X(N),origin:N,pointer:N,pivot:N,moving:!1,samples:[]},s.pivotV={x:0,y:0},s.vx=0,s.vy=0,(Y=F.setPointerCapture)==null||Y.call(F,g.pointerId),x.draggable&&(F.style.cursor="grabbing",Dr+=1,A.style.zIndex=String(Dr)),g.preventDefault(),i()},Re=g=>{var se,he,$e;const x=s.press;if(!x||x.id!==g.pointerId)return;s.press=null,(se=F.hasPointerCapture)!=null&&se.call(F,g.pointerId)&&F.releasePointerCapture(g.pointerId);const N=performance.now(),Y=x.samples.filter(He=>N-He.t<90);if(x.moving&&Y.length>1&&!je){const He=Y[0],Ye=Y[Y.length-1],Ie=Math.max(Ye.t-He.t,16)/1e3,Be=2600;s.vx=et((Ye.x-He.x)/Ie,-Be,Be),s.vy=et((Ye.y-He.y)/Ie,-Be,Be)}R(g),g.pointerType!=="mouse"&&(s.hover=!1),x.moving&&(($e=(he=$.current).onDragEnd)==null||$e.call(he)),i()},z=()=>{s.pointer.inside=!1,i()},M=()=>{p=0,i()},j=new ResizeObserver(()=>{G(),i()});j.observe(u);const te=new IntersectionObserver(g=>{d=g.some(x=>x.isIntersecting),d&&(p=0,i())});return te.observe(u),window.addEventListener("pointermove",y,{passive:!0}),document.documentElement.addEventListener("pointerleave",z),document.addEventListener("visibilitychange",M),F.addEventListener("pointermove",I),F.addEventListener("pointerleave",B),F.addEventListener("pointerdown",Z),F.addEventListener("pointerup",Re),F.addEventListener("pointercancel",Re),T($.current.imageSrc),G(),we.current=()=>{G(),i()},i(),()=>{var g;m=!1,cancelAnimationFrame(w),we.current=null,j.disconnect(),te.disconnect(),window.removeEventListener("pointermove",y),document.documentElement.removeEventListener("pointerleave",z),document.removeEventListener("visibilitychange",M),F.removeEventListener("pointermove",I),F.removeEventListener("pointerleave",B),F.removeEventListener("pointerdown",Z),F.removeEventListener("pointerup",Re),F.removeEventListener("pointercancel",Re),t.deleteTexture(Le),k.forEach(x=>{t.deleteTexture(x.texture),t.deleteFramebuffer(x.buffer)}),t.deleteProgram(de.program),t.deleteBuffer(E),t.deleteBuffer(Ue),t.deleteVertexArray(ae),t.deleteProgram(Se.program),(g=t.getExtension("WEBGL_lose_context"))==null||g.loseContext()}},[]),b.useEffect(()=>{var A;(A=we.current)==null||A.call(we)}),r.jsxs("div",{ref:re,className:`sticker-peel${ke?` ${ke}`:""}`,style:Ne,...be,children:[r.jsx("canvas",{ref:ue,className:"sticker-peel-canvas","aria-hidden":"true"}),r.jsx("div",{ref:Ee,className:"sticker-peel-hit"})]})},yo=[["path",{d:"M10.5128 8.50195L7.49414 15.5004",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M12.9036 2.97659C10.5213 1.95129 7.84887 2.63719 6.20986 4.48844C5.68751 5.07843 5.42633 5.37342 5.53667 5.87689C5.64701 6.38035 6.08935 6.57072 6.97403 6.95147L14.2225 10.0711C15.1098 10.4529 15.5534 10.6439 15.9872 10.3728C16.4211 10.1018 16.447 9.70476 16.4988 8.91071C16.661 6.42691 15.2841 4.0011 12.9036 2.97659Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M3 16.5C3 16.5 4.61581 15.5 7.5 15.5C12 15.5 15 18 21 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}],["path",{d:"M3 20.5H21",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"3"}]],bo=[["path",{d:"M3 7C3.5 7 5 6.5 6 5C7 6.5 9 9 12 9C15 9 17 6.5 18 5C19 6.5 20.5 7 21 7",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M6 4V20",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M2 16H22",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"2"}],["path",{d:"M18 4V20",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"3"}],["path",{d:"M10 9V16",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"4"}],["path",{d:"M14 9V16",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"5"}]],wo=[["path",{d:"M17.4776 10.0001C17.485 10 17.4925 10 17.5 10C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H7C4.23858 19 2 16.7614 2 14C2 11.4003 3.98398 9.26407 6.52042 9.0227M17.4776 10.0001C17.4924 9.83536 17.5 9.66856 17.5 9.5C17.5 6.46243 15.0376 4 12 4C9.12324 4 6.76233 6.20862 6.52042 9.0227M17.4776 10.0001C17.3753 11.1345 16.9286 12.1696 16.2428 13M6.52042 9.0227C6.67826 9.00768 6.83823 9 7 9C8.12582 9 9.16474 9.37209 10.0005 10",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}]],Mo=[["path",{d:"M9.5 7.5C9.99153 8.0057 11.2998 10 12 10M14.5 7.5C14.0085 8.0057 12.7002 10 12 10M12 10V4",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",key:"0"}],["path",{d:"M18.3633 10.6357L16.9491 12.05",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"1"}],["path",{d:"M3 17H5",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"2"}],["path",{d:"M5.63657 10.6356L7.05078 12.0498",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"3"}],["path",{d:"M21 17H19",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"4"}],["path",{d:"M21 20H3",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"5"}],["path",{d:"M16 17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",key:"6"}]],Br=typeof window>"u"?b.useEffect:b.useLayoutEffect,$r={dark:{"--swap-tile":"linear-gradient(180deg, #3a3644 0%, #27242f 100%)","--swap-tile-edge":"rgba(255, 255, 255, 0.07)","--swap-tile-highlight":"rgba(255, 255, 255, 0.12)","--swap-shadow":"0 30px 60px -24px rgba(0, 0, 0, 0.8), 0 10px 24px -12px rgba(0, 0, 0, 0.55)","--swap-media-edge":"rgba(255, 255, 255, 0.06)","--swap-ink":"#f4f4f5","--swap-badge":"rgba(255, 255, 255, 0.08)","--swap-shade":"#100e15"},light:{"--swap-tile":"linear-gradient(180deg, #ffffff 0%, #f6f6f8 100%)","--swap-tile-edge":"rgba(24, 24, 27, 0.08)","--swap-tile-highlight":"rgba(255, 255, 255, 1)","--swap-shadow":"0 30px 60px -28px rgba(24, 24, 27, 0.35), 0 10px 24px -14px rgba(24, 24, 27, 0.2)","--swap-media-edge":"rgba(24, 24, 27, 0.06)","--swap-ink":"#27272a","--swap-badge":"rgba(24, 24, 27, 0.05)","--swap-shade":"#ffffff"}},Eo=[{title:"Golden hour",image:"https://images.unsplash.com/photo-1514519334989-3d5c8b1a9f91?w=900&q=80&auto=format&fit=crop",icon:r.jsx(St,{icon:Mo,size:14,strokeWidth:1.8})},{title:"Black beach",image:"https://images.unsplash.com/photo-1511300636408-a63a89df3482?w=900&q=80&auto=format&fit=crop",icon:r.jsx(St,{icon:yo,size:14,strokeWidth:1.8})},{title:"Steel arches",image:"https://images.unsplash.com/photo-1520930528075-4ea5ead759f5?w=900&q=80&auto=format&fit=crop",icon:r.jsx(St,{icon:bo,size:14,strokeWidth:1.8})},{title:"Pink drift",image:"https://images.unsplash.com/photo-1778849097774-0ab2a873a858?w=900&q=80&auto=format&fit=crop",icon:r.jsx(St,{icon:wo,size:14,strokeWidth:1.8})}],Hr=900,yt=Math.PI*2,qr=1/240,It=32,Vr=["x","y","z","r","p"],tr={x:0,y:1},at=(e,a,n)=>Math.min(n,Math.max(a,e)),To=({width:e,height:a,cardDistance:n,verticalDistance:o,depth:l,skewAmount:f,visible:v,hoverSpread:C})=>{const D=Math.tan(f*Math.PI/180),O=1+Math.max(0,C);let W=1/0,ee=-1/0,me=1/0,ge=-1/0;for(let ve=0;ve<v;ve++){const pe=Hr/(Hr+ve*l);for(const ye of[-e/2,e/2])for(const _e of[-a/2,a/2]){const xe=(ve*n*O+ye)*pe,fe=(-ve*o*O+_e+ye*D)*pe;W=Math.min(W,xe),ee=Math.max(ee,xe),me=Math.min(me,fe),ge=Math.max(ge,fe)}}return{width:Math.ceil(ee-W+It*2),height:Math.ceil(ge-me+It*2),originX:It-W,originY:It-me}},lr=b.forwardRef(({customClass:e,className:a,children:n,...o},l)=>r.jsxs("div",{ref:l,...o,className:["card-swap-card",e,a].filter(Boolean).join(" "),children:[n,r.jsx("span",{className:"card-swap-card-rim","aria-hidden":"true"})]}));lr.displayName="Card";const Ro=({item:e})=>r.jsx(lr,{children:r.jsxs("div",{className:"card-swap-item",children:[(e.icon||e.title)&&r.jsxs("div",{className:"card-swap-head",children:[e.icon&&r.jsx("span",{className:"card-swap-icon",children:e.icon}),e.title&&r.jsx("span",{className:"card-swap-title",children:e.title})]}),e.image&&r.jsx("div",{className:"card-swap-media",children:r.jsx("img",{src:e.image,alt:e.alt??e.title??"",draggable:!1})})]})}),dn=b.forwardRef(({items:e,width:a=460,height:n=340,cardDistance:o=60,verticalDistance:l=70,depth:f=90,skewAmount:v=6,visibleCards:C=4,delay:D=4e3,autoplay:O=!0,pauseOnHover:W=!0,draggable:ee=!0,speed:me=1,bounce:ge=.35,parallax:ve=.5,hoverSpread:pe=.12,dim:ye=.5,cardRadius:_e=18,intro:xe=!0,theme:fe="dark",onCardClick:le,onChange:ke,className:Ne="",children:be},re)=>{const ue=b.useRef(null),Ee=b.useRef(null),we=b.useRef([]),ne=b.useRef([]),$=b.useRef(null),A=b.useRef(null),_=b.useMemo(()=>{const k=b.Children.toArray(be).filter(b.isValidElement);return k.length?k:(e!=null&&e.length?e:Eo).map((H,Q)=>r.jsx(Ro,{item:H},`${H.title??"card"}-${Q}`))},[be,e]),F=_.length,u=Math.max(40,Number(a)||460),t=Math.max(40,Number(n)||340),Se=at(Math.round(C),1,Math.max(1,F)),de=b.useMemo(()=>To({width:u,height:t,cardDistance:o,verticalDistance:l,depth:Math.max(0,f),skewAmount:v,visible:Se,hoverSpread:pe}),[u,t,o,l,f,v,Se,pe]);A.current={width:u,height:t,dx:o,dy:l,dz:Math.max(0,f),skew:v,visible:Se,delay:D,autoplay:O,pauseOnHover:W,draggable:ee,speed:at(me,.1,4),bounce:at(ge,0,1),parallax:at(ve,0,1),hoverSpread:Math.max(0,pe),dim:at(ye,0,1),bounds:de,onCardClick:le,onChange:ke},b.useImperativeHandle(re,()=>({next:()=>{var k;return(k=$.current)==null?void 0:k.next()},prev:()=>{var k;return(k=$.current)==null?void 0:k.prev()}}),[]),Br(()=>{var L,Ae;const k=ue.current,H=Ee.current;if(!k||!H||!F)return;const Q=((L=window.matchMedia)==null?void 0:L.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,De=performance.now(),Me=A.current,ae=Array.from({length:F},(c,i)=>({el:we.current[i],shade:ne.current[i],index:i,pos:i,from:i,hold:0,nudge:0,phase:"rest",dir:{x:0,y:1},tilt:0,top:0,under:!1,x:0,y:0,z:0,r:0,p:0,v:{x:0,y:0,z:0,r:0,p:0}})),E={order:ae.map(c=>c.index),raf:0,last:0,timer:0,queue:[],layers:0,scale:1,hovered:!1,overCard:!1,inView:!0,drag:null,spread:0,spreadV:0,px:0,py:0,pvx:0,pvy:0,tx:0,ty:0,dragged:!1,autoplay:Me.autoplay,delay:Me.delay},Ue=(c,i)=>{const R=Math.min(c,i.visible),y=1+E.spread;return{x:R*i.dx*y,y:-R*i.dy*y,z:-R*i.dz,r:0,p:R}},Le=(c,i)=>Math.abs(i.x)*c.width+Math.abs(i.y)*c.height+12,ce=(c,i,R)=>{if(c.phase==="exit"){const I=Ue(0,i),B=Le(i,c.dir)*1.3;return{x:I.x+c.dir.x*B,y:I.y+c.dir.y*B,z:I.z,r:c.tilt,p:0}}if(c.phase==="enter"){const I=Ue(0,i);return{x:I.x,y:I.y+Le(i,tr)*1.3,z:I.z,r:0,p:c.p}}const y=(R<c.hold?c.from:c.pos)+c.nudge;return Ue(Math.max(0,y),i)},Pe=c=>c.top?1e3+c.top:c.under?1:10+(F-c.pos)*2,Te=(c,i)=>{const{el:R,shade:y}=c;if(!R)return;R.style.transform=`translate3d(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px, ${c.z.toFixed(2)}px) rotate(${c.r.toFixed(3)}deg) skewY(${i.skew}deg)`,R.style.zIndex=String(Pe(c));const I=at(i.visible-c.p,0,1);if(R.style.opacity=I<1?I.toFixed(3):"",R.style.visibility=I<=.001?"hidden":"",y){const B=at(c.p/Math.max(1,i.visible-1),0,1);y.style.opacity=(i.dim*.62*B).toFixed(3)}R.style.cursor=c.phase==="drag"?"grabbing":c.pos>0?"pointer":i.draggable?"grab":"",c.pos===0?R.setAttribute("data-front",""):R.removeAttribute("data-front")},Xe=c=>{const i=c.bounds.originX+E.px,R=c.bounds.originY+E.py;H.style.perspectiveOrigin=`${i.toFixed(2)}px ${R.toFixed(2)}px`},Fe=(c,i,R,y,I)=>{const B=R*R,Z=2*y*R,Re=Math.max(1,Math.ceil(I/qr)),z=I/Re;for(let M=0;M<Re;M++)for(const j of Vr){const te=c.v[j]+(B*(i[j]-c[j])-Z*c.v[j])*z;c.v[j]=te,c[j]+=te*z}},je=(c,i,R,y,I,B)=>{const Z=y*y,Re=2*I*y,z=Math.max(1,Math.ceil(B/qr)),M=B/z;let j=c,te=i;for(let V=0;V<z;V++)te+=(Z*(R-j)-Re*te)*M,j+=te*M;return[j,te]},q=c=>{E.raf=0;const i=A.current,R=E.last?Math.min(.05,(c-E.last)/1e3):1/60;E.last=c;const y=i.speed,I=yt*1.7*y,B=Q?1:1-.72*i.bounce,Z=yt*1.9*y;let Re=!1;const z=E.hovered&&!Q?i.hoverSpread:0;[E.spread,E.spreadV]=je(E.spread,E.spreadV,z,yt*1.4,.9,R),[E.px,E.pvx]=je(E.px,E.pvx,Q?0:E.tx,yt*1.1,1,R),[E.py,E.pvy]=je(E.py,E.pvy,Q?0:E.ty,yt*1.1,1,R),(Math.abs(E.spread-z)>5e-4||Math.abs(E.spreadV)>5e-4||Math.abs(E.px-E.tx)>.05||Math.abs(E.py-E.ty)>.05||Math.abs(E.pvx)+Math.abs(E.pvy)>.05)&&(Re=!0),Xe(i);for(const M of ae){if(M.phase==="drag"){Re=!0,Te(M,i);continue}const j=ce(M,i,c),te=M.phase==="exit"||M.phase==="enter";if(Fe(M,j,te?Z:I,te?1:B,R),M.phase==="exit"){const V=Ue(0,i);(M.x-V.x)*M.dir.x+(M.y-V.y)*M.dir.y>=Le(i,M.dir)&&(M.phase="rest",M.top=0,M.hold=0)}else if(M.phase==="enter"){const V=Ue(0,i);M.y-V.y>=Le(i,tr)&&(M.phase="rest",M.under=!1,M.hold=0)}(M.hold>c||M.phase!=="rest")&&(Re=!0);for(const V of Vr){const g=V==="p"?.001:.02;(Math.abs(j[V]-M[V])>g||Math.abs(M.v[V])>g)&&(Re=!0)}Te(M,i)}if(Re)E.raf=requestAnimationFrame(q);else{E.last=0;for(const M of ae)M.top&&M.phase==="rest"&&(M.top=0)}},Ce=()=>{E.raf||(E.raf=requestAnimationFrame(q))},ze=()=>{const c=A.current;return!c.autoplay||F<2||c.pauseOnHover&&E.overCard||E.drag||!E.inView||document.visibilityState==="hidden"},s=()=>{clearTimeout(E.timer),E.timer=0,!ze()&&(E.timer=window.setTimeout(()=>{E.timer=0,p(1)},Math.max(400,A.current.delay)))},w=(c,i)=>{E.order.forEach((R,y)=>{const I=ae[R];I.pos!==y&&(I.from=I.pos,I.pos=y,I.hold=c+Math.max(0,y)*i)})},p=(c,i={})=>{var B;if(F<2)return;const R=A.current,y=performance.now(),I=.05/R.speed;if(c>0){const Z=ae[E.order[0]];E.order=[...E.order.slice(1),Z.index],w(y,I*1e3),Z.phase="exit",Z.dir=i.dir??tr,Z.tilt=i.tilt??0,Z.top=++E.layers,Z.under=!1,Z.nudge=0,Z.hold=0,i.velocity&&(Z.v.x=i.velocity.x,Z.v.y=i.velocity.y)}else{const Z=ae[E.order[F-1]];E.order=[Z.index,...E.order.slice(0,F-1)],w(y,I*1e3),Z.phase="enter",Z.top=0,Z.under=!0,Z.nudge=0,Z.hold=0}ae.forEach(Z=>{Z.phase==="rest"&&(Z.nudge=0)}),(B=R.onChange)==null||B.call(R,E.order[0]),Ce(),s()},d=c=>{E.queue.forEach(clearTimeout),E.queue=[];const i=110/A.current.speed;for(let R=0;R<c;R++)E.queue.push(window.setTimeout(()=>p(1),R*i))},h=()=>{const c=A.current,i=k.clientWidth,R=k.clientHeight,y=Math.min(1,i/c.bounds.width,R>0?R/c.bounds.height:1);E.scale=y>0?y:1,H.style.transform=`translate(-50%, -50%) scale(${E.scale.toFixed(4)})`},m=c=>{const i=k.getBoundingClientRect();return{x:c.clientX-i.left,y:c.clientY-i.top,w:i.width,h:i.height}},P=c=>{var j,te,V;const i=A.current;if(c.pointerType!=="touch"){const g=m(c),x=at(g.x/Math.max(1,g.w)*2-1,-1,1),N=at(g.y/Math.max(1,g.h)*2-1,-1,1);E.tx=x*i.parallax*.35*i.bounds.width,E.ty=N*i.parallax*.35*i.bounds.height,E.hovered=!0;const Y=!!((te=(j=c.target).closest)!=null&&te.call(j,"[data-swap-index]"));Y!==E.overCard&&(E.overCard=Y,s()),Ce()}const R=E.drag;if(!R||R.id!==c.pointerId)return;const y=(c.clientX-R.startX)/E.scale,I=(c.clientY-R.startY)/E.scale;if(!R.active){if(Math.hypot(y,I)<5)return;R.active=!0,E.dragged=!0;const g=ae[R.index];g.phase="drag",g.v={x:0,y:0,z:0,r:0,p:0},(V=k.setPointerCapture)==null||V.call(k,c.pointerId),k.style.cursor="grabbing"}const B=ae[R.index],Z=Ue(0,i);B.x=Z.x+y,B.y=Z.y+I,B.z=Z.z,B.r=at(y*.035,-9,9),B.p=0;const Re=performance.now();for(R.samples.push({x:B.x,y:B.y,t:Re});R.samples.length>2&&Re-R.samples[0].t>90;)R.samples.shift();const z=at(Math.hypot(y,I)/(Math.min(i.width,i.height)*.3),0,1),M=ae[E.order[1]];M&&M.phase==="rest"&&(M.nudge=-.22*z),Ce()},S=c=>{var i;c.pointerType!=="touch"&&((i=E.drag)!=null&&i.active||(E.hovered=!1,E.overCard=!1,E.tx=0,E.ty=0,s(),Ce()))},T=c=>{var I,B;const i=A.current;if(E.dragged=!1,!i.draggable||c.button>0||F<2)return;const R=(B=(I=c.target).closest)==null?void 0:B.call(I,"[data-swap-index]");if(!R||!k.contains(R))return;const y=Number(R.getAttribute("data-swap-index"));y!==E.order[0]||ae[y].phase!=="rest"||(E.drag={id:c.pointerId,index:y,startX:c.clientX,startY:c.clientY,active:!1,samples:[]},s())},G=c=>{var g;const i=E.drag;if(!i||i.id!==c.pointerId)return;if(E.drag=null,k.style.cursor="",!i.active){s();return}(g=k.releasePointerCapture)==null||g.call(k,c.pointerId);const R=A.current,y=ae[i.index],I=Ue(0,R),B=i.samples[0],Z=i.samples[i.samples.length-1],Re=B&&Z?Math.max(.016,(Z.t-B.t)/1e3):1,z=B&&Z&&Z!==B?{x:(Z.x-B.x)/Re,y:(Z.y-B.y)/Re}:{x:0,y:0},M={x:y.x-I.x,y:y.y-I.y},j=Math.hypot(M.x,M.y),te=Math.hypot(z.x,z.y),V=ae[E.order[1]];if(V&&(V.nudge=0),c.type!=="pointercancel"&&(j>Math.min(R.width,R.height)*.3||te>700)){const x={x:M.x+z.x*.12,y:M.y+z.y*.12},N=Math.hypot(x.x,x.y)||1;y.phase="rest",p(1,{dir:{x:x.x/N,y:x.y/N},tilt:y.r,velocity:z})}else y.phase="rest",y.v.x=z.x,y.v.y=z.y,Ce(),s()},J=c=>{var I,B,Z,Re;if(E.dragged){E.dragged=!1;return}const i=(B=(I=c.target).closest)==null?void 0:B.call(I,"[data-swap-index]");if(!i||!k.contains(i))return;const R=Number(i.getAttribute("data-swap-index"));(Re=(Z=A.current).onCardClick)==null||Re.call(Z,R);const y=E.order.indexOf(R);y>0&&d(y)},oe=()=>s();$.current={next:()=>p(1),prev:()=>p(-1),refresh:()=>{const c=A.current;ae.forEach(i=>{const R=we.current[i.index],y=ne.current[i.index];R===i.el&&y===i.shade||(i.el=R,i.shade=y,Te(i,c))}),(c.autoplay!==E.autoplay||c.delay!==E.delay)&&(E.autoplay=c.autoplay,E.delay=c.delay,s()),h(),Ce()}},xe&&!Q?(ae.forEach(c=>{c.from=0,c.hold=De+c.pos*70/Me.speed}),(Ae=H.animate)==null||Ae.call(H,[{opacity:0},{opacity:1}],{duration:420,easing:"ease-out"})):ae.forEach(c=>{Object.assign(c,Ue(c.pos,Me))}),h(),Xe(Me),ae.forEach(c=>Te(c,Me)),Ce();const U=new ResizeObserver(h);U.observe(k);const X=new IntersectionObserver(c=>{var i;E.inView=((i=c[c.length-1])==null?void 0:i.isIntersecting)??!0,s()});return X.observe(k),k.addEventListener("pointermove",P),k.addEventListener("pointerleave",S),k.addEventListener("pointerdown",T),k.addEventListener("pointerup",G),k.addEventListener("pointercancel",G),k.addEventListener("click",J),document.addEventListener("visibilitychange",oe),s(),()=>{cancelAnimationFrame(E.raf),clearTimeout(E.timer),E.queue.forEach(clearTimeout),U.disconnect(),X.disconnect(),k.removeEventListener("pointermove",P),k.removeEventListener("pointerleave",S),k.removeEventListener("pointerdown",T),k.removeEventListener("pointerup",G),k.removeEventListener("pointercancel",G),k.removeEventListener("click",J),document.removeEventListener("visibilitychange",oe),$.current=null}},[F]),Br(()=>{var k;(k=$.current)==null||k.refresh()});const K=k=>{var H,Q;k.key==="ArrowRight"||k.key==="ArrowDown"?(k.preventDefault(),(H=$.current)==null||H.next()):(k.key==="ArrowLeft"||k.key==="ArrowUp")&&(k.preventDefault(),(Q=$.current)==null||Q.prev())},ie={...$r[fe]??$r.dark,"--swap-w":`${u}px`,"--swap-h":`${t}px`,"--swap-ox":`${de.originX}px`,"--swap-oy":`${de.originY}px`,"--swap-stage-w":`${de.width}px`,"--swap-stage-h":`${de.height}px`,"--swap-ratio":`${de.width} / ${de.height}`,"--swap-radius":`${Math.max(0,_e)}px`};return r.jsxs("div",{ref:ue,className:`card-swap${Ne?` ${Ne}`:""}`,style:ie,tabIndex:0,role:"region","aria-roledescription":"carousel","aria-label":"Card stack",onKeyDown:K,children:[r.jsx("div",{className:"card-swap-sizer","aria-hidden":"true",children:r.jsx("span",{})}),r.jsx("div",{ref:Ee,className:"card-swap-stage",children:_.map((k,H)=>r.jsxs("div",{ref:Q=>{we.current[H]=Q},className:"card-swap-slot","data-swap-index":H,children:[k,r.jsx("span",{ref:Q=>{ne.current[H]=Q},className:"card-swap-shade","aria-hidden":"true"})]},H))})]})});dn.displayName="CardSwap";const ko=["https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format","https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format","https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format","https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"],Wr={fan:[.9,.9],cascade:[.5,.5],deck:[.5,0],pile:[.5,.5]},So={fan:[1,-.3],cascade:[.8,.6],deck:[0,1]},Co="0 14px 34px -10px rgba(0, 0, 0, 0.45), 0 3px 8px -2px rgba(0, 0, 0, 0.18)",jo=6,Ao=650,Yr=1300,rr=260,No=1.035,Lo={place:[260,24],settle:[320,34],tuck:[240,28],face:[240,30],lean:[240,28],press:[420,34],fling:[650,42]},Po=typeof window>"u"?b.useEffect:b.useLayoutEffect,tt=(e,a,n)=>Math.min(n,Math.max(a,e)),Ft=(e,a,n)=>e+(a-e)*n,Et=e=>{const a=Math.sin(e*127.1+311.7)*43758.5453;return a-Math.floor(a)},bt=(e,a,n,o,l)=>e==="cascade"?{x:-a*o*28,y:-a*o*28,rotate:0,scale:1-a*l*.07}:e==="deck"?{x:0,y:-a*o*32,rotate:0,scale:1-a*l*.1}:e==="pile"?{x:(Et(n+1)-.5)*o*56,y:(Et(n+2)-.5)*o*44,rotate:(Et(n+3)-.5)*o*40,scale:1-a*l*.03}:{x:0,y:0,rotate:a*o*8,scale:1-a*l*.12},Kr=(e,a)=>{const n=e.filter(v=>a-v[2]<=100);if(n.length<2)return[0,0];const o=n[0],l=n[n.length-1],f=Math.max((l[2]-o[2])/1e3,.008);return[(l[0]-o[0])/f,(l[1]-o[1])/f]};function Io({cards:e,layout:a="fan",visible:n=4,spread:o=.5,depth:l=.5,radius:f=16,frame:v=0,frameColor:C="#ffffff",shadow:D=!0,tilt:O=30,threshold:W=90,speed:ee=1,sendToBackOnClick:me=!1,autoplay:ge=!1,autoplayDelay:ve=3e3,pauseOnHover:pe=!1,onChange:ye,className:_e="",style:xe}){const fe=e&&e.length?e:ko.map((w,p)=>r.jsx("img",{src:w,alt:`Card ${p+1}`,draggable:!1},w)),le=fe.length,ke=Wr[a]?a:"fan",Ne=nn(),be=b.useRef(null),[re,ue]=b.useState(()=>Array.from({length:le},(w,p)=>p)),[Ee,we]=b.useState(!1),[ne,$]=b.useState(!1),A=b.useRef(re),_=b.useRef(new Map),F=b.useRef(new Map),u=b.useRef(new Map),t=b.useRef(null),Se=b.useRef(!0),de=b.useRef(!1),K=b.useRef(null),ie=b.useRef(null),k=b.useRef(null),H=b.useRef(ye);if(H.current=ye,re.length!==le||re.some(w=>w>=le)){const w=re.filter(p=>p<le);for(let p=0;p<le;p++)w.includes(p)||w.push(p);A.current=w,ue(w)}K.current={layout:ke,visible:tt(Math.round(n),1,Math.max(le,1)),spread:tt(o,0,2),depth:tt(l,0,1),tilt:tt(O,0,89),threshold:Math.max(W,0),speed:tt(ee,.2,4),sendToBackOnClick:me,count:le,reduceMotion:!!Ne};const Q=w=>{let p=_.current.get(w);if(!p){const d=K.current,h=Math.max(0,A.current.indexOf(w)),m=bt(d.layout,d.reduceMotion?Math.min(h,d.visible-1):0,w,d.spread,d.depth);p={x:rt(m.x),y:rt(m.y),rotate:rt(m.rotate),scale:rt(m.scale),tiltX:rt(0),tiltY:rt(0),spin:rt(0),lift:rt(1),grabX:rt(.5),grabY:rt(.5),z:rt(d.count-h),opacity:rt(h<d.visible?1:0),shade:rt(0)},_.current.set(w,p)}return p},De=(w,p,d={})=>{if(w.reduceMotion)return{duration:.2,ease:"easeOut",delay:d.delay||0};const[h,m]=Lo[p];return{type:"spring",stiffness:h*w.speed*w.speed,damping:m*w.speed,restDelta:.01,restSpeed:.5,...d}},Me=(w,p,d=0)=>{const h=De(p,"face",{delay:d});We(w.tiltX,0,h),We(w.tiltY,0,h),We(w.spin,0,h),We(w.lift,1,h)},ae=(w,p,{delay:d=0,lift:h=0,kind:m="place",velocity:P=null,keepZ:S=!1}={})=>{const T=K.current,G=Q(w),J=Math.min(p,T.visible-1),oe=bt(T.layout,J,w,T.spread,T.depth);if(h>0&&J>0){const L=bt(T.layout,J-1,w,T.spread,T.depth);oe.x=Ft(oe.x,L.x,h),oe.y=Ft(oe.y,L.y,h),oe.rotate=Ft(oe.rotate,L.rotate,h),oe.scale=Ft(oe.scale,L.scale,h)}const U=De(T,m,{delay:d}),X={duration:T.reduceMotion?.2:.35/T.speed,ease:"easeOut",delay:d};S||G.z.set(T.count-p),We(G.x,oe.x,P?{...U,velocity:P[0]}:U),We(G.y,oe.y,P?{...U,velocity:P[1]}:U),We(G.rotate,oe.rotate,U),We(G.scale,oe.scale,U),Me(G,T,d),We(G.opacity,p<T.visible?1:0,X),We(G.shade,Math.min(.6,J*T.depth*.14*(1-h)),X)},E=({stagger:w=0,lift:p=0,released:d=-1,velocity:h=null,kind:m="place"}={})=>{const P=t.current;A.current.forEach((S,T)=>{const G=u.current.get(S);if(G&&!G.turned||P&&P.moved&&P.card===S)return;const J=S===d;ae(S,T,{delay:T*w,lift:T>0?p:0,kind:G?"tuck":J?"settle":m,velocity:J?h:null,keepZ:!!G})})},Ue=w=>{A.current=w,ue(w)},Le=(w,p=null)=>{var te;const d=K.current,h=A.current;if(h.length<2)return;const m=h[0];if(u.current.has(m))return;const P=[...h.slice(1),m];if(d.reduceMotion){Ue(P);return}let[S,T]=w||So[d.layout]||[Math.cos(Et(m+9)*6.283),Math.sin(Et(m+9)*6.283)];const G=Math.hypot(S,T)||1;S/=G,T/=G;const J=(te=be.current)==null?void 0:te.getBoundingClientRect(),oe=(J==null?void 0:J.width)||240,U=(J==null?void 0:J.height)||240,X=Math.min(oe/Math.max(Math.abs(S),.01),U/Math.max(Math.abs(T),.01)),L=bt(d.layout,0,m,d.spread,d.depth),Ae=X*1.12+40,c=[L.x+S*Ae,L.y+T*Ae],i=Q(m),R=De(d,"fling"),y={turned:!1};u.current.set(m,y),i.z.set(d.count+1),We(i.x,c[0],p?{...R,velocity:p[0]}:R),We(i.y,c[1],p?{...R,velocity:p[1]}:R),Me(i,d),Ue(P);const I=Math.max(Math.hypot(c[0]-i.x.get(),c[1]-i.y.get()),1);let B=!1;const Z=()=>{y.turned=!0;const V=A.current.indexOf(m);V>=0&&ae(m,V,{kind:"tuck",keepZ:!B})},Re=()=>{B=!0,u.current.get(m)===y&&u.current.delete(m);const V=A.current.indexOf(m);V>=0&&i.z.set(K.current.count-V)},z=setTimeout(()=>{y.turned||Z(),B||Re()},1500/d.speed),M=()=>{const V=F.current.get(m);if(!V)return!0;const g=V.getBoundingClientRect();for(const[x,N]of F.current){if(x===m||u.current.has(x)||Q(x).opacity.get()<.5)continue;const Y=N.getBoundingClientRect();if(g.left<Y.right&&g.right>Y.left&&g.top<Y.bottom&&g.bottom>Y.top)return!1}return!0},j=()=>{if(!Se.current||y.turned&&B){clearTimeout(z);return}const V=i.x.get(),g=i.y.get(),x=i.x.getVelocity()*S+i.y.getVelocity()*T;!y.turned&&(Math.hypot(c[0]-V,c[1]-g)<=I*.06||x<0)&&Z(),!B&&(M()||y.turned&&x<0)&&Re(),requestAnimationFrame(j)};requestAnimationFrame(j)},ce=w=>{const p=K.current;if(p.reduceMotion)return;const d=Q(w.card),h=d.x.get()-w.homeX,m=d.y.get()-w.homeY,P=tt(w.vx/Yr,-1,1)*.7+tt(h/rr,-1,1)*.3,S=tt(-w.vy/Yr,-1,1)*.7+tt(-m/rr,-1,1)*.3,T=De(p,"lean");We(d.tiltY,P*p.tilt,T),We(d.tiltX,S*p.tilt,T),We(d.spin,tt(h/rr,-1,1)*6,T)},Pe=w=>{const p=t.current;if(!p||w.pointerId!==p.id)return;const d=K.current,h=w.clientX-p.startX,m=w.clientY-p.startY,P=Q(p.card);if(!p.moved){if(Math.hypot(h,m)<jo)return;p.moved=!0,P.x.stop(),P.y.stop(),p.originX=P.x.get()-h,p.originY=P.y.get()-m;try{p.element.setPointerCapture(p.id)}catch{p.capture=!1}we(!0)}P.x.set(p.originX+h),P.y.set(p.originY+m),p.samples.push([w.clientX,w.clientY,w.timeStamp]),p.samples.length>12&&p.samples.shift(),[p.vx,p.vy]=Kr(p.samples,w.timeStamp),ce(p),clearTimeout(p.idle),p.idle=setTimeout(()=>{t.current===p&&(p.vx=0,p.vy=0,ce(p))},70);const S=tt(Math.hypot(h,m)/Math.max(d.threshold,1),0,1);Math.abs(S-p.progress)>.02&&(p.progress=S,E({lift:S*.4,kind:"settle"}))},Te=w=>{const p=t.current;if(!p||w.pointerId!==p.id)return;t.current=null,clearTimeout(p.idle),window.removeEventListener("pointermove",k.current.move),window.removeEventListener("pointerup",k.current.up),window.removeEventListener("pointercancel",k.current.up);try{p.element.releasePointerCapture(p.id)}catch{p.capture=!1}const d=K.current;if(!p.moved){w.type==="pointerup"&&d.sendToBackOnClick?Le(null):Me(Q(p.card),d);return}we(!1);const h=w.clientX-p.startX,m=w.clientY-p.startY,[P,S]=Kr(p.samples,w.timeStamp),T=Math.hypot(h,m),G=Math.hypot(P,S),J=G>Ao&&T>16&&P*h+S*m>0;w.type==="pointerup"&&d.count>1&&(T>d.threshold||J)?Le(G>300?[P,S]:[h,m],[P,S]):E({released:p.card,velocity:[tt(P,-3e3,3e3),tt(S,-3e3,3e3)]})},Xe=(w,p)=>{if(w.button!==0||t.current||A.current[0]!==p||u.current.has(p))return;const d=K.current,h=Q(p),m=bt(d.layout,0,p,d.spread,d.depth),P=w.currentTarget.getBoundingClientRect();h.grabX.set(tt((w.clientX-P.left)/Math.max(P.width,1),0,1)),h.grabY.set(tt((w.clientY-P.top)/Math.max(P.height,1),0,1)),d.reduceMotion||We(h.lift,No,De(d,"press")),t.current={card:p,id:w.pointerId,element:w.currentTarget,startX:w.clientX,startY:w.clientY,originX:0,originY:0,homeX:m.x,homeY:m.y,vx:0,vy:0,idle:0,moved:!1,progress:0,samples:[[w.clientX,w.clientY,w.timeStamp]]},w.pointerType==="mouse"&&w.preventDefault(),window.addEventListener("pointermove",k.current.move),window.addEventListener("pointerup",k.current.up),window.addEventListener("pointercancel",k.current.up)},Fe=w=>{w.target===w.currentTarget&&["ArrowRight","ArrowDown","Enter"," "].includes(w.key)&&(w.preventDefault(),Le(null))};ie.current={placeAll:E,sendToBack:Le,onMove:Pe,onUp:Te},k.current||(k.current={move:w=>ie.current.onMove(w),up:w=>ie.current.onUp(w)}),Po(()=>{A.current=re,ie.current.placeAll({stagger:de.current?0:.06}),de.current=!0},[re,ke,n,o,l,ee,le]);const je=re[0],q=b.useRef(!1);b.useEffect(()=>{var w;if(!q.current){q.current=!0;return}je!==void 0&&((w=H.current)==null||w.call(H,je))},[je]),b.useEffect(()=>{if(!ge||le<2||Ee||pe&&ne)return;const w=setTimeout(()=>ie.current.sendToBack(null),Math.max(300,ve));return()=>clearTimeout(w)},[ge,ve,pe,ne,Ee,re,le]),b.useEffect(()=>{Se.current=!0;const w=_.current,p=k.current;return()=>{Se.current=!1,t.current&&clearTimeout(t.current.idle),window.removeEventListener("pointermove",p.move),window.removeEventListener("pointerup",p.up),window.removeEventListener("pointercancel",p.up),w.forEach(d=>Object.values(d).forEach(h=>h.stop()))}},[]);const[Ce,ze]=Wr[ke],s=Math.max(0,f-v);return r.jsx("div",{ref:be,className:`stack ${_e}`.trim(),style:xe,tabIndex:0,role:"group","aria-label":"Card stack",onKeyDown:Fe,onMouseEnter:()=>$(!0),onMouseLeave:()=>$(!1),children:fe.map((w,p)=>{const d=Q(p),h=re[0]===p;return r.jsx(pt.div,{ref:m=>{m?F.current.set(p,m):F.current.delete(p)},className:"stack-card","data-top":h?"":void 0,"aria-hidden":h?void 0:!0,style:{x:d.x,y:d.y,rotate:d.rotate,scale:d.scale,zIndex:d.z,opacity:d.opacity,originX:Ce,originY:ze,cursor:h?Ee?"grabbing":"grab":"default",touchAction:h?"pan-y":"auto"},onPointerDown:m=>Xe(m,p),children:r.jsxs(pt.div,{className:"stack-card-face",style:{rotateX:d.tiltX,rotateY:d.tiltY,rotate:d.spin,scale:d.lift,originX:d.grabX,originY:d.grabY,transformPerspective:800,borderRadius:f,padding:v,backgroundColor:v>0?C:"transparent",boxShadow:D?Co:"none"},children:[r.jsx("div",{className:"stack-card-content",style:{borderRadius:s},children:w}),r.jsx(pt.div,{className:"stack-card-shade",style:{opacity:d.shade,borderRadius:f}})]})},p)})})}const ut=4,Tt=3,Ve=64,Fo=3e6,_o=560,Dt=Math.PI/2,Uo=`#version 300 es
const vec2 corners[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
void main() {
  gl_Position = vec4(corners[gl_VertexID], 0.0, 1.0);
}`,Do=`#version 300 es
precision highp float;
precision highp int;

uniform vec2 uSize;
uniform float uRatio;
uniform vec2 uCenter;
uniform vec2 uHalf;
uniform float uRadius;
uniform vec3 uParam;
uniform float uPerimeter;
uniform vec4 uCells;
uniform vec2 uSoft;
uniform float uTime;
uniform float uPower;
uniform float uReveal;
uniform vec3 uHover;
uniform float uHoverRadius;
uniform vec4 uPulses[${Tt}];
uniform vec3 uCore;
uniform vec3 uGlowColor;
uniform float uIntensity;
uniform float uGlow;
uniform float uThickness;
uniform float uStrands;
uniform float uChaos;
uniform float uSpread;
uniform float uFlicker;
uniform float uInk;
uniform vec4 uArcEnds[${ut}];
uniform vec4 uArcShape[${ut}];

out vec4 fragColor;

uint scramble(uint x) {
  x ^= x >> 16u;
  x *= 0x7feb352du;
  x ^= x >> 15u;
  x *= 0x846ca68bu;
  x ^= x >> 16u;
  return x;
}

vec2 slant(uint x, uint y, uint seed) {
  uint h = scramble(x * 0x8da6b343u + y * 0xd8163841u + seed * 0xcb1ab31fu);
  return vec2(uvec2(h, h >> 8u) & 255u) / 127.5 - 1.0;
}

vec2 ring(vec2 p, float period, uint seed) {
  vec2 i = floor(p);
  vec2 f = p - i;
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  float du = 30.0 * f.x * f.x * (f.x * (f.x - 2.0) + 1.0);
  uint x0 = uint(mod(i.x, period));
  uint x1 = uint(mod(i.x + 1.0, period));
  uint y0 = uint(i.y + 65536.0);
  vec2 ga = slant(x0, y0, seed);
  vec2 gb = slant(x1, y0, seed);
  vec2 gc = slant(x0, y0 + 1u, seed);
  vec2 gd = slant(x1, y0 + 1u, seed);
  float va = dot(ga, f);
  float vb = dot(gb, f - vec2(1.0, 0.0));
  float vc = dot(gc, f - vec2(0.0, 1.0));
  float vd = dot(gd, f - vec2(1.0, 1.0));
  float k = va - vb - vc + vd;
  float value = va + u.x * (vb - va) + u.y * (vc - va) + u.x * u.y * k;
  float gx = ga.x + u.x * (gb.x - ga.x) + u.y * (gc.x - ga.x) + u.x * u.y * (ga.x - gb.x - gc.x + gd.x);
  return vec2(value, gx + du * (vb - va + u.y * k));
}

float wobble(float x, uint seed) {
  return ring(vec2(x, 0.5), 1048576.0, seed).x;
}

vec2 frameAt(vec2 p) {
  vec2 inner = max(uHalf - uRadius, 0.0);
  vec2 q = abs(p) - inner;
  float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - uRadius;
  float quarter = uPerimeter * 0.25;
  vec2 v = abs(p) - uParam.xy;
  float t;
  if (v.x > 0.0 && v.y > 0.0) t = uParam.x + uParam.z * atan(v.x, v.y);
  else if (v.x > v.y) t = uParam.x + 1.5707963 * uParam.z + uParam.y - abs(p.y);
  else t = abs(p.x);
  t = clamp(t, 0.0, quarter);
  float s = p.x >= 0.0 ? (p.y < 0.0 ? t : 2.0 * quarter - t) : (p.y < 0.0 ? 4.0 * quarter - t : 2.0 * quarter + t);
  return vec2(s, d);
}

vec2 glowShape(float line, float spread, float w) {
  float x = abs(line);
  float y = abs(spread);
  return vec2(exp(-x * x / (w * w * 0.5)) + exp(-y / (w * 2.2)) * 0.6, exp(-y / (w * 4.5)) * 0.5);
}

void addArc(vec2 p, vec4 ends, vec4 info, float t, inout vec3 light, inout float energy, inout float hot) {
  if (info.y < 0.002) return;
  vec2 ab = ends.zw - ends.xy;
  float len = max(length(ab), 1.0);
  vec2 dir = ab / len;
  vec2 rel = p - ends.xy;
  float along = dot(rel, dir);
  float side = dot(rel, vec2(-dir.y, dir.x));
  float margin = abs(info.x) + (0.6 + uChaos) * (2.0 + len * 0.08) + uThickness * 12.0 + 10.0;
  if (along < -margin || along > len + margin || abs(side) > margin) return;
  float u = clamp(along / len, 0.0, 1.0);
  float taper = sin(3.14159265 * u);
  float settle = smoothstep(0.0, 0.15, u) * smoothstep(1.0, 0.85, u);
  float bendSlope = 3.14159265 / len * cos(3.14159265 * u) * settle;
  float beyond = max(-along, 0.0) + max(along - len, 0.0);
  for (int c = 0; c < 2; c++) {
    uint seed = uint(info.z * 131.0) + uint(c) * 29u + 7u;
    float jag = 0.0;
    float jagSlope = 0.0;
    float wave = max(len * 0.3, 14.0);
    float weight = (0.6 + uChaos) * (1.5 + len * 0.05) * (c == 0 ? 1.0 : 1.5);
    for (int o = 0; o < 3; o++) {
      vec2 n = ring(vec2(along / wave + info.z * 3.0, t * (1.4 + float(o) * 1.1)), 1048576.0, seed + uint(o));
      jag += n.x * weight;
      jagSlope += n.y * weight / wave;
      wave *= 0.42;
      weight *= 0.4;
    }
    float offset = (info.x + jag) * taper;
    float offsetSlope = (info.x + jag) * bendSlope + jagSlope * taper * settle;
    float across = (side - offset) / sqrt(1.0 + offsetSlope * offsetSlope);
    float gap = length(vec2(beyond, across));
    float w = uThickness * (c == 0 ? 0.9 : 0.6);
    vec2 g = glowShape(gap, gap, w);
    float k = info.y * (c == 0 ? 1.0 : 0.45);
    light += (uCore * g.x + uGlowColor * g.y * uGlow) * k;
    energy += (g.x + g.y * uGlow) * k;
    hot += exp(-gap * gap / (w * w * 0.16)) * k * (c == 0 ? 1.0 : 0.0);
  }
}

void main() {
  vec2 p = vec2(gl_FragCoord.x / uRatio, uSize.y - gl_FragCoord.y / uRatio);
  vec2 frame = frameAt(p - uCenter);
  float s = frame.x;
  float d = frame.y;
  float t = uTime;
  vec3 light = vec3(0.0);
  float energy = 0.0;
  float hot = 0.0;

  float along = min(s, uPerimeter - s);
  float front = uReveal * (uPerimeter * 0.5 + 80.0);
  float shown = smoothstep(front, front - 70.0, along) * uPower;
  float flare = uReveal < 1.0 ? exp(-pow((along - front + 30.0) / 26.0, 2.0)) * uPower : 0.0;

  vec2 toHover = p - uHover.xy;
  float heat = uHover.z * exp(-dot(toHover, toHover) / (uHoverRadius * uHoverRadius));
  float surge = 0.0;
  for (int i = 0; i < ${Tt}; i++) {
    vec4 pulse = uPulses[i];
    if (pulse.z <= 0.0) continue;
    float gap = abs(s - pulse.x);
    gap = min(gap, uPerimeter - gap);
    float wave = (gap - pulse.y * ${_o}.0) / 46.0;
    surge += exp(-wave * wave) * pulse.z * exp(-pulse.y * 1.2);
  }
  heat = min(heat * 0.7 + surge * 0.8 + flare * 0.6, 1.2);
  vec2 inset = min(p, uSize - p);
  float frameFade = smoothstep(0.0, 14.0, min(inset.x, inset.y));

  float edge = abs(d);
  float inward = d < 0.0 ? exp(d / 14.0) : 1.0;
  float bloom = (exp(-edge / 3.0) * 0.1 + exp(-edge / 16.0) * 0.05 * inward) * uGlow * (1.0 + heat * 0.6) * shown;
  light += uGlowColor * bloom;
  energy += bloom;

  float bendAmp = uSpread * 16.0 * (1.0 + heat * 0.35);
  float rippleAmp = uSpread * 6.0 * (1.0 + heat * 0.3);
  float crinkleAmp = uChaos * 4.5 * (1.0 + heat * 0.3);
  float squeeze = min(1.0, 34.0 / max((bendAmp + rippleAmp) * 1.6 + crinkleAmp, 1e-3));
  bendAmp *= squeeze;
  rippleAmp *= squeeze;
  crinkleAmp *= squeeze;
  float reach = (bendAmp * 1.9 + rippleAmp + crinkleAmp * 1.6) * 1.3 + uThickness * 14.0 + 8.0;
  if (edge < reach && shown > 0.0) {
    float fade = smoothstep(reach, reach * 0.55, edge);
    float count = min(uStrands + heat * 1.2, 6.0);
    float slopeScale = 1.0 / uPerimeter;
    for (int i = 0; i < 6; i++) {
      float fi = float(i);
      if (fi >= ceil(count)) break;
      float present = clamp(count - fi, 0.0, 1.0);
      uint seed = uint(i) * 7u + 3u;
      float lead = i == 0 ? 1.0 : 0.0;
      float range = mix(1.35 + fi * 0.18, 0.7, lead);
      float x = s * slopeScale;
      vec2 a = ring(vec2(x * uCells.x, t * 0.7 + fi * 3.1), uCells.x, seed);
      vec2 b = ring(vec2(x * uCells.y, t * 1.9 + fi * 1.7), uCells.y, seed + 1u);
      vec2 c = ring(vec2(x * uCells.z, t * 4.6 + fi * 0.9), uCells.z, seed + 2u);
      vec2 e = ring(vec2(x * uCells.w, t * 6.8), uCells.w, seed + 3u);
      float offset = (a.x * bendAmp + b.x * rippleAmp) * range + (c.x + e.x * 0.35) * crinkleAmp;
      float slope =
        ((a.y * uCells.x * bendAmp + b.y * uCells.y * rippleAmp) * range +
          (c.y * uCells.z + e.y * 0.35 * uCells.w) * crinkleAmp) *
        slopeScale;
      float drift = lead > 0.5 ? 0.0 : wobble(fi * 7.3, seed + 9u) * 2.5 * uSpread;
      offset += drift;
      float across = (d - offset) / sqrt(1.0 + slope * slope);
      float spread = d - a.x * bendAmp * range - drift;
      float swell = 0.5 + 0.5 * ring(vec2(x * uSoft.y, t * 2.0 + fi * 5.1), uSoft.y, seed + 8u).x;
      float w = uThickness * mix(0.55, 1.0, lead) * (0.5 + swell);
      float vis = mix(0.3 + 0.45 * smoothstep(-0.25, 0.2, ring(vec2(x * uSoft.x, t * 0.5 + fi * 3.7), uSoft.x, seed + 5u).x), 1.0, lead);
      float spark = 1.0 - uFlicker * 0.3 * (0.5 + 0.5 * wobble(t * 13.0 + fi * 2.3, seed + 6u));
      float weight = max(vis, heat * 0.6) * spark * fade * present * (0.7 + 0.6 * swell);
      vec2 g = glowShape(across, spread, w) * weight;
      g.y *= inward;
      float haze = uGlow * (1.0 + heat * 0.5) * (1.0 - uInk * 0.7);
      light += uCore * g.x + uGlowColor * g.y * haze;
      energy += g.x + g.y * haze;
      hot += exp(-across * across / (w * w * 0.16)) * lead * weight;
    }
    light *= shown;
    energy *= shown;
    hot *= shown;
  }

  for (int i = 0; i < ${ut}; i++) addArc(p, uArcEnds[i], uArcShape[i], t, light, energy, hot);

  float breath = 1.0 + uFlicker * 0.5 * wobble(t * 4.6 + 7.0, 3u);
  float gain = uIntensity * breath * (1.0 + heat * 0.25) * 1.4;
  light *= frameFade;
  energy *= frameFade;
  hot *= frameFade;
  float alpha = 1.0 - exp(-energy * gain);
  vec3 color = mix(1.0 - exp(-light * gain), alpha * light / max(energy, 1e-4), uInk);
  color = mix(color, vec3(alpha), clamp(hot, 0.0, 1.0) * uInk * 0.85);
  float grain = (fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - 0.5) / 255.0;
  alpha = clamp(alpha + grain, 0.0, 1.0);
  fragColor = vec4(clamp(color + grain, 0.0, alpha), alpha);
}`,st=(e,a,n)=>Math.min(n,Math.max(a,e)),sr=e=>{const a=String(e||"").trim(),n=/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(a);if(n){const l=n[1].length===3?n[1].replace(/./g,f=>f+f):n[1];return[0,2,4].map(f=>parseInt(l.slice(f,f+2),16)/255)}const o=/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(a);if(o)return[o[1],o[2],o[3]].map(l=>st(parseFloat(l)/255,0,1));if(typeof document<"u"){const l=document.createElement("canvas").getContext("2d");if(l){l.fillStyle="#000000",l.fillStyle=a;const f=String(l.fillStyle);if(f!=="#000000"||/^(#0{3}|#0{6}|black)$/i.test(a))return sr(f)}}return[.49,.98,1]},Jr=(e,a,n)=>{const o=e.createShader(a);return o?(e.shaderSource(o,n),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS)?o:(console.error(e.getShaderInfoLog(o)),e.deleteShader(o),null)):null},zo=e=>{const a=Jr(e,e.VERTEX_SHADER,Uo),n=Jr(e,e.FRAGMENT_SHADER,Do),o=a&&n?e.createProgram():null;if(!a||!n||!o)return a&&e.deleteShader(a),n&&e.deleteShader(n),null;if(e.attachShader(o,a),e.attachShader(o,n),e.linkProgram(o),e.deleteShader(a),e.deleteShader(n),!e.getProgramParameter(o,e.LINK_STATUS))return console.error(e.getProgramInfoLog(o)),e.deleteProgram(o),null;const l={},f=e.getProgramParameter(o,e.ACTIVE_UNIFORMS);for(let v=0;v<f;v++){const C=e.getActiveUniform(o,v);C&&(l[C.name.replace(/\[0\]$/,"")]=e.getUniformLocation(o,C.name))}return{program:o,uniforms:l}},wt=(e,a,n,o,l)=>{const f=Math.abs(e)-(n-l),v=Math.abs(a)-(o-l);return Math.hypot(Math.max(f,0),Math.max(v,0))+Math.min(Math.max(f,v),0)-l},Qr=(e,a,n,o)=>{const l=Math.max(1,e/2+o),f=Math.max(1,a/2+o),v=st(n+o,0,Math.min(l,f)),C=Math.min(v+48,Math.min(l,f)),D=l-C,O=f-C,W=D+O+Dt*C;return{hx:l,hy:f,r:v,vr:C,ax:D,ay:O,quarter:W,perimeter:W*4}},nr=(e,a)=>{const{hx:n,hy:o,r:l,vr:f,ax:v,ay:C,quarter:D,perimeter:O}=e,W=(a%O+O)%O,ee=Math.min(3,Math.floor(W/D)),me=W-ee*D,ge=ee%2?D-me:me;let ve,pe;if(ge<=v)ve=ge,pe=-o;else if(ge<=v+Dt*f){const be=f>0?(ge-v)/f:0,re=Math.sin(be),ue=-Math.cos(be);let Ee=0,we=f+l+2;for(let ne=0;ne<18;ne++){const $=(Ee+we)/2;wt(v+re*$,-C+ue*$,n,o,l)<0?Ee=$:we=$}ve=v+re*Ee,pe=-C+ue*Ee}else ve=n,pe=-C+(ge-v-Dt*f);const ye=ee>=2?-1:1,_e=ee===1||ee===2?-1:1,xe=ve*ye,fe=pe*_e,le=wt(xe+.5,fe,n,o,l)-wt(xe-.5,fe,n,o,l),ke=wt(xe,fe+.5,n,o,l)-wt(xe,fe-.5,n,o,l),Ne=Math.hypot(le,ke)||1;return{x:xe,y:fe,nx:le/Ne,ny:ke/Ne}},Zr=(e,a,n)=>{const{ax:o,ay:l,vr:f,quarter:v}=e,C=Math.abs(a)-o,D=Math.abs(n)-l;let O;return C>0&&D>0?O=o+f*Math.atan2(C,D):C>D?O=o+Dt*f+l-Math.abs(n):O=Math.abs(a),O=st(O,0,v),a>=0?n<0?O:2*v-O:n<0?4*v-O:2*v+O},Xo=({children:e,color:a="#7df9ff",glowColor:n,speed:o=1,chaos:l=.5,spread:f=.6,thickness:v=1.5,strands:C=3,glow:D=.6,intensity:O=.8,arcs:W=1,flicker:ee=.5,borderRadius:me=24,offset:ge=0,active:ve=!0,intro:pe=!0,interactive:ye=!0,cursorRadius:_e=90,theme:xe="dark",className:fe="",style:le})=>{const ke=b.useRef(null),Ne=b.useRef(null),be=b.useRef(null),[re,ue]=b.useState(0),Ee=sr(a),we={core:Ee.map($=>$+(1-$)*.55),glowColor:n?sr(n):Ee,speed:Math.max(0,o),chaos:st(l,0,2),spread:st(f,0,2),thickness:Math.max(.25,v),strands:st(Math.round(C),1,6),glow:st(D,0,3),intensity:Math.max(0,O),arcs:Math.max(0,W),flicker:st(ee,0,1),borderRadius:Math.max(0,me),offset:ge,active:ve,intro:pe,interactive:ye,cursorRadius:Math.max(1,_e),light:xe==="light"},ne=b.useRef(we);return ne.current=we,b.useEffect(()=>{var $;($=be.current)==null||$.call(be)}),b.useEffect(()=>{const $=ke.current,A=Ne.current;if(!$||!A)return;const _=A.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"default"}),F=_?zo(_):null;if(!_||!F)return;const u=window.matchMedia("(prefers-reduced-motion: reduce)").matches,t=_.createVertexArray(),Se=new Float32Array(ut*4),de=new Float32Array(ut*4),K=new Float32Array(Tt*4),ie={width:1,height:1,ratio:1},k={x:0,y:0,over:!1,near:!1},H={x:0,y:0,vx:0,vy:0,power:0},Q=[],De=[],Me=ne.current;let ae=Me.active&&!(Me.intro&&!u&&re===0)?1:0,E=ae,Ue=Me.active,Le=Me.light?1:0,ce=Qr(1,1,0,0),Pe=Math.random()*100,Te=0,Xe=0,Fe=!0,je=document.visibilityState!=="hidden",q=!1;const Ce=()=>{const U=ne.current,X=Math.max(1,$.offsetWidth),L=Math.max(1,$.offsetHeight),Ae=X+Ve*2,c=L+Ve*2,i=Math.min(window.devicePixelRatio||1,2,Math.sqrt(Fo/(Ae*c))),R=Math.max(1,Math.round(Ae*i)),y=Math.max(1,Math.round(c*i));(A.width!==R||A.height!==y)&&(A.width=R,A.height=y),A.style.width=`${Ae}px`,A.style.height=`${c}px`,Object.assign(ie,{width:X,height:L,ratio:R/Ae}),ce=Qr(X,L,U.borderRadius,U.offset)},ze=(U,X)=>{const L=Math.min(ce.perimeter*.3,60+Math.random()*90),c=(X??Math.random()*ce.perimeter)-L*(.2+Math.random()*.6),i=c+L,R=nr(ce,c),y=nr(ce,i),I=nr(ce,(c+i)/2),B=y.x-R.x,Z=y.y-R.y,Re=Math.hypot(B,Z)||1,z=-Z/Re*I.nx+B/Re*I.ny,M=Math.min(Ve-30,Re*(.14+Math.random()*.16)+5);return{ax:R.x,ay:R.y,bx:y.x,by:y.y,bow:z>=0?M:-M,seed:1+Math.random()*60,born:U,life:.35+Math.random()*.45}},s=(U,X)=>{const L=F.uniforms,Ae=ie.width+Ve*2,c=ie.height+Ve*2;_.viewport(0,0,A.width,A.height),_.clearColor(0,0,0,0),_.clear(_.COLOR_BUFFER_BIT),!(ae<=.001&&!Q.length)&&(_.useProgram(F.program),_.uniform2f(L.uSize,Ae,c),_.uniform1f(L.uRatio,ie.ratio),_.uniform2f(L.uCenter,Ae/2,c/2),_.uniform2f(L.uHalf,ce.hx,ce.hy),_.uniform1f(L.uRadius,ce.r),_.uniform3f(L.uParam,ce.ax,ce.ay,ce.vr),_.uniform1f(L.uPerimeter,ce.perimeter),_.uniform4f(L.uCells,Math.max(1,Math.round(ce.perimeter/75)),Math.max(2,Math.round(ce.perimeter/25)),Math.max(3,Math.round(ce.perimeter/9)),Math.max(4,Math.round(ce.perimeter/4))),_.uniform2f(L.uSoft,Math.max(1,Math.round(ce.perimeter/150)),Math.max(1,Math.round(ce.perimeter/50))),_.uniform1f(L.uTime,Pe),_.uniform1f(L.uPower,ae*ae*(3-2*ae)),_.uniform1f(L.uReveal,E),_.uniform3f(L.uHover,H.x+Ve,H.y+Ve,X),_.uniform1f(L.uHoverRadius,U.cursorRadius),_.uniform4fv(L.uPulses,K),_.uniform3fv(L.uCore,U.core),_.uniform3fv(L.uGlowColor,U.glowColor),_.uniform1f(L.uIntensity,U.intensity),_.uniform1f(L.uGlow,U.glow),_.uniform1f(L.uThickness,U.thickness),_.uniform1f(L.uStrands,U.strands),_.uniform1f(L.uChaos,U.chaos),_.uniform1f(L.uSpread,U.spread),_.uniform1f(L.uFlicker,u?0:U.flicker),_.uniform1f(L.uInk,Le),_.uniform4fv(L.uArcEnds,Se),_.uniform4fv(L.uArcShape,de),_.bindVertexArray(t),_.drawArrays(_.TRIANGLES,0,3))},w=U=>{if(Te=0,q)return;const X=ne.current,L=st((U-Xe)/1e3||0,0,.05);Xe=Math.max(Xe,U);const Ae=u?.2:1;Pe+=L*X.speed*Ae,X.active&&!Ue&&(E=0),Ue=X.active,ae+=((X.active?1:0)-ae)*(1-Math.exp(-L/(X.active?.28:.4))),X.active&&(E=u?1:Math.min(1,E+L/.9)),Le+=((X.light?1:0)-Le)*(1-Math.exp(-L/.25));const c=X.interactive&&k.near&&X.active;c&&H.power<.01&&(H.x=k.x,H.y=k.y,H.vx=0,H.vy=0),H.vx+=((k.x-H.x)*120-H.vx*19)*L,H.vy+=((k.y-H.y)*120-H.vy*19)*L,H.x+=H.vx*L,H.y+=H.vy*L,H.power+=((c?1:0)-H.power)*(1-Math.exp(-L/(c?.3:.55)));for(let y=Q.length-1;y>=0;y--)Pe-Q[y].born>Q[y].life&&Q.splice(y,1);if(!u&&X.active&&E>=1&&X.arcs>0&&Q.length<ut){const y=L*X.speed*X.arcs;Math.random()<y*5*H.power?Q.push(ze(Pe,Zr(ce,H.x-ie.width/2,H.y-ie.height/2))):Math.random()<y*(.6+ce.perimeter/2400)&&Q.push(ze(Pe,null))}const i=ae*ae*(3-2*ae);for(let y=0;y<ut;y++){const I=y*4,B=Q[y];if(!B){de[I+1]=0;continue}const Z=st((Pe-B.born)/B.life,0,1);Se[I]=B.ax+ie.width/2+Ve,Se[I+1]=B.ay+ie.height/2+Ve,Se[I+2]=B.bx+ie.width/2+Ve,Se[I+3]=B.by+ie.height/2+Ve,de[I]=B.bow,de[I+1]=Math.sin(Math.PI*Z)*i,de[I+2]=B.seed}for(let y=De.length-1;y>=0;y--)U-De[y].born>2200&&De.splice(y,1);for(let y=0;y<Tt;y++){const I=y*4,B=De[y];if(!B){K[I+2]=0;continue}K[I]=B.s,K[I+1]=(U-B.born)/1e3,K[I+2]=1}s(X,H.power*(X.interactive?1:0)),(ae>.002||X.active||Q.length>0)&&Fe&&je&&(Te=requestAnimationFrame(w))},p=()=>{Te||q||!Fe||!je||(Xe=performance.now(),Te=requestAnimationFrame(w))};be.current=()=>{Ce(),p()};const d=U=>{const X=$.getBoundingClientRect();k.x=U.clientX-X.left,k.y=U.clientY-X.top,k.over=k.x>=0&&k.y>=0&&k.x<=X.width&&k.y<=X.height,k.near=k.x>=-Ve/2&&k.y>=-Ve/2&&k.x<=X.width+Ve/2&&k.y<=X.height+Ve/2},h=U=>{d(U),k.near&&p()},m=U=>{d(U);const X=ne.current;if(!k.over||!X.interactive||!X.active||u)return;const L=Zr(ce,k.x-ie.width/2,k.y-ie.height/2);De.push({s:L,born:performance.now()}),De.length>Tt&&De.shift(),Q.length<ut&&Q.push(ze(Pe,L)),p()},P=()=>{k.over=!1,k.near=!1};window.addEventListener("pointermove",h,{passive:!0}),window.addEventListener("pointerdown",m,{passive:!0}),document.documentElement.addEventListener("pointerleave",P);const S=U=>{U.preventDefault(),q=!0,cancelAnimationFrame(Te),Te=0},T=()=>ue(U=>U+1);A.addEventListener("webglcontextlost",S),A.addEventListener("webglcontextrestored",T);const G=new ResizeObserver(()=>{Ce(),p()});G.observe($);const J=new IntersectionObserver(U=>{Fe=U.some(X=>X.isIntersecting),p()});J.observe($);const oe=()=>{je=document.visibilityState!=="hidden",p()};return document.addEventListener("visibilitychange",oe),Ce(),p(),()=>{cancelAnimationFrame(Te),be.current=null,G.disconnect(),J.disconnect(),window.removeEventListener("pointermove",h),window.removeEventListener("pointerdown",m),document.documentElement.removeEventListener("pointerleave",P),document.removeEventListener("visibilitychange",oe),A.removeEventListener("webglcontextlost",S),A.removeEventListener("webglcontextrestored",T),_.isContextLost()||(_.deleteVertexArray(t),_.deleteProgram(F.program))}},[re]),r.jsxs("div",{ref:ke,className:`electric-border${fe?` ${fe}`:""}`,style:{borderRadius:me,...le},children:[e,r.jsx("canvas",{ref:Ne,className:"electric-border__canvas",style:{top:-Ve,left:-Ve},"aria-hidden":"true"})]})},Oo=[{name:"Govt. Recognized",desc:"Authorized vocational board",icon:an},{name:"ISO 9001:2015",desc:"Certified quality standards",icon:wn},{name:"Skill India",desc:"Kaushal Bharat certified",image:"/assets/recognition/skill-india.png"},{name:"Ministry of MSME",desc:"Govt. of India registered",image:"/assets/recognition/msme.png"},{name:"Digital India",desc:"Power to empower initiatives",image:"/assets/recognition/digital-india.png"}],en=[{title:"Data and AI",desc:"Data science, analytics, machine learning, generative AI, and advanced Excel modeling.",icon:Mn,color:"bg-blue-50 text-primary border-blue-200/60",count:"3 courses",link:"/courses?category=Data and AI"},{title:"Digital marketing",desc:"SEO, social media, Google Ads, content marketing, reputation, and AI ad suites.",icon:En,color:"bg-emerald-50 text-emerald-600 border-emerald-200/60",count:"2 courses",link:"/courses?category=Digital marketing"},{title:"Web and software",desc:"Full stack web development, Android, Java, PHP, MySQL, C/C++, and software engineering.",icon:Tn,color:"bg-indigo-50 text-indigo-600 border-indigo-200/60",count:"3 courses",link:"/courses?category=Web and software"},{title:"Design and video",desc:"Graphic design, UI/UX with Figma, video editing with Premiere Pro, and After Effects VFX.",icon:Rn,color:"bg-rose-50 text-rose-600 border-rose-200/60",count:"4 courses",link:"/courses?category=Design and video"},{title:"Office and accounts",desc:"Digital office automation, Tally Prime with GST, taxation diplomas, and DCA programs.",icon:kn,color:"bg-amber-50 text-amber-600 border-amber-200/60",count:"5 courses",link:"/courses?category=Office and accounts"},{title:"Cyber security",desc:"Ethical hacking, network defense, footprinting, system auditing, and security protocols.",icon:Sn,color:"bg-cyan-50 text-cyan-600 border-cyan-200/60",count:"1 course",link:"/courses?category=Cyber security"}],Go=[{num:"01",title:"Industrial faculties",desc:"Learn directly from practicing IT professionals who bring real-world architecture into class.",icon:Cn,tag:"Direct Mentorship"},{num:"02",title:"Quality teaching",desc:"Rigorous step-by-step pedagogy emphasizing practical problem solving over passive lectures.",icon:on,tag:"Hands-on Labs"},{num:"03",title:"100% job assistance",desc:"Dedicated career guidance, resume building, mock interviews, and direct referral drives.",icon:jn,tag:"Placement Cell"},{num:"04",title:"Flexible timing",desc:"Morning, afternoon, evening, and weekend slots suited for students and working professionals.",icon:An,tag:"Flexible Slots"},{num:"05",title:"Extra practice hour",desc:"Unlimited lab access beyond standard lecture hours to practice code, models, and designs.",icon:an,tag:"Free Lab Hours"},{num:"06",title:"Small batch",desc:"Strictly limited student numbers per batch ensuring personal attention and one-on-one code reviews.",icon:Nn,tag:"Personalized Focus"}],tn=[{name:"Python",cat:"Data & Dev"},{name:"Power BI",cat:"Analytics"},{name:"Tableau",cat:"Analytics"},{name:"SQL",cat:"Database"},{name:"Excel",cat:"Analytics"},{name:"Tally Prime",cat:"Finance"},{name:"Photoshop",cat:"Design"},{name:"Premiere Pro",cat:"Video"},{name:"After Effects",cat:"VFX"},{name:"Figma",cat:"UI/UX"},{name:"WordPress",cat:"Web"},{name:"Java",cat:"Backend"}];function Zo(){const e=rn(),a=In.map(n=>r.jsxs("div",{className:"w-full h-full bg-surface border border-line/80 rounded-card p-6 sm:p-7 flex flex-col justify-between shadow-card text-left select-none",children:[r.jsxs("div",{className:"space-y-3",children:[r.jsx("div",{className:"flex items-center gap-1 text-amber-500",children:[...Array(5)].map((o,l)=>r.jsx(pr,{size:15,fill:"currentColor"},l))}),r.jsxs("p",{className:"text-deep text-xs sm:text-sm sm:text-[14px] leading-relaxed line-clamp-4 italic",children:['"',n.quote,'"']})]}),r.jsxs("div",{className:"flex items-center gap-3 pt-3.5 border-t border-line/50",children:[r.jsx("img",{src:n.image,alt:n.name,className:"w-10 h-10 rounded-full object-cover border border-line/80 shadow-sm",loading:"lazy"}),r.jsxs("div",{className:"min-w-0",children:[r.jsx("p",{className:"text-sm font-bold text-deep truncate",children:n.name}),r.jsx("p",{className:"text-xs text-muted truncate",children:"Alumni · Brochure Verified"})]})]})]},n.id));return r.jsxs("div",{className:"space-y-24 sm:space-y-32 w-full overflow-x-clip",children:[r.jsxs("section",{className:"relative pt-8 sm:pt-16 pb-12 overflow-x-clip w-full",children:[it.heroBackground&&!e?r.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-25 sm:opacity-35 -z-10 overflow-hidden select-none",children:r.jsx(Ct,{className:"pointer-events-none select-none",isCanvasOrWebGL:!0,fallback:r.jsx("div",{className:"w-full h-full bg-grid-dots opacity-40 pointer-events-none"}),children:r.jsx(Ar,{shape:"horizon",colors:["#1e3fd8","#f6f8ff","#a5d8ff","#38bdf8"],characters:" =+xX0S8#@",cellSize:18,density:.8,speed:.5,glyphOpacity:.4,className:"w-full h-full pointer-events-none"})})}):r.jsx("div",{className:"absolute inset-0 bg-grid-dots opacity-40 -z-10 pointer-events-none"}),r.jsx("div",{className:"w-full max-w-content mx-auto px-4 sm:px-6",children:r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center",children:[r.jsxs("div",{className:"lg:col-span-7 min-w-0 space-y-6 text-left",children:[r.jsx("div",{className:"flex items-center gap-3",children:r.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-line/90 shadow-sm text-xs font-semibold text-deep",children:[r.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot inline-block"}),r.jsx("span",{children:"Govt. Recognized · ISO 9001:2015 certified board"})]})}),r.jsxs("h1",{"aria-label":"Learn data, design, marketing, web and accounts skills Mumbai's teams hire for.",className:"text-3xl sm:text-5xl lg:text-7xl font-bold text-deep tracking-tight leading-[1.08] break-words",children:[r.jsx("span",{children:"Learn "}),it.rotatingText&&!e?r.jsx("span",{className:"inline-block min-w-[9ch] text-left align-baseline","aria-hidden":"true",children:r.jsx(un,{texts:["data","design","marketing","web","accounts"],mainClassName:"inline-flex text-primary font-bold",rotationInterval:2400,staggerDuration:.03})}):r.jsx("span",{className:"text-primary font-bold",children:"data"})," ",r.jsx("br",{className:"sm:hidden"}),"skills Mumbai's teams ",r.jsx("br",{className:"sm:hidden"})," hire for."]}),r.jsx("p",{className:"text-muted text-base sm:text-lg sm:text-[19px] leading-relaxed max-w-xl",children:"Industry-led courses in data, digital marketing, web development, design and accounting, taught in small batches at four Mumbai branches."}),r.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2",children:[r.jsx(lo,{as:"div",color:"#4a6df0",trailColor:"#2448c9",radius:9999,theme:"light",className:"!p-0 !bg-transparent !border-0 inline-block rounded-full shadow-button",children:r.jsx(ft,{to:"/courses",size:"lg",variant:"primary",magnet:!0,children:"Explore courses"})}),r.jsx(ft,{to:"/contact",size:"lg",variant:"ghost",children:"Book a free demo"})]}),r.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-2 text-xs text-muted",children:[r.jsxs("span",{className:"font-semibold text-deep flex items-center gap-1",children:[r.jsx(bn,{size:13,className:"text-primary"}),r.jsx("span",{children:"4 Mumbai Branches:"})]}),r.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Goregaon West"}),r.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Behram Baug"}),r.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Jogeshwari West"}),r.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Motilal Nagar"})]})]}),r.jsxs("div",{className:"lg:col-span-5 flex justify-center relative",children:[r.jsx(Bn,{}),it.stickerPeel&&r.jsx("div",{className:"absolute -top-6 -right-6 hidden sm:block w-28 h-28 pointer-events-auto z-20",children:r.jsx(Ct,{isCanvasOrWebGL:!0,fallback:r.jsx("div",{className:"w-24 h-24 rounded-[22px] bg-surface/95 backdrop-blur border border-line/80 shadow-md p-2 hover:rotate-3 transition-transform flex items-center justify-center",children:r.jsx("img",{src:"/assets/recognition/job-assistance-badge.png",alt:"100% job assistance",className:"w-full h-full object-contain"})}),children:r.jsx(vo,{imageSrc:"/assets/recognition/job-assistance-badge.png",width:100,peelDirection:45,peelBackHoverPct:35,peelBackActivePct:50,finish:"gloss",draggable:!1,className:"cursor-pointer"})})})]})]})})]}),r.jsx("section",{className:"bg-soft/70 border-y border-line/70 py-8 sm:py-10",children:r.jsx("div",{className:"max-w-content mx-auto px-6",children:r.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center",children:[r.jsxs("div",{className:"p-3",children:[r.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-deep font-display tracking-tight flex items-center justify-center",children:it.countUp&&!e?r.jsx(jt,{to:hr.length,duration:1.6}):hr.length}),r.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Mumbai branches"})]}),r.jsxs("div",{className:"p-3",children:[r.jsxs("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display tracking-tight flex items-center justify-center",children:[it.countUp&&!e?r.jsx(jt,{to:gr.length,duration:1.8}):gr.length,r.jsx("span",{children:"+"})]}),r.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Industry courses"})]}),r.jsxs("div",{className:"p-3",children:[r.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-deep font-display tracking-tight flex items-center justify-center",children:it.countUp&&!e?r.jsx(jt,{to:100,duration:2,suffix:"%"}):"100%"}),r.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Job assistance"})]}),r.jsxs("div",{className:"p-3",children:[r.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display tracking-tight flex items-center justify-center",children:it.countUp&&!e?r.jsx(jt,{to:6,duration:1.5}):6}),r.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Educational pillars"})]})]})})}),r.jsx("section",{className:"max-w-content mx-auto px-6",children:r.jsx(ht,{children:r.jsxs("div",{className:"bg-surface border border-line/80 rounded-panel p-6 sm:p-8 shadow-card",children:[r.jsx("p",{className:"text-center text-xs font-bold uppercase tracking-wider text-muted mb-6",children:"Recognized and certified for vocational excellence"}),r.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center",children:Oo.map(n=>r.jsxs("div",{className:"p-4 text-center rounded-2xl bg-background border border-line/70 hover:border-primary/40 hover:shadow-sm transition-all duration-300 flex flex-col items-center justify-center min-h-[105px] group",children:[n.image?r.jsx("img",{src:n.image,alt:n.name,className:"h-9 w-auto object-contain mb-2 group-hover:scale-105 transition-transform",loading:"lazy"}):n.icon?r.jsx("div",{className:"w-8 h-8 rounded-full bg-soft text-primary flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform",children:r.jsx(n.icon,{size:18})}):null,r.jsx("p",{className:"text-xs sm:text-sm font-bold text-deep leading-tight",children:n.name}),r.jsx("p",{className:"text-[11px] text-muted mt-0.5",children:n.desc})]},n.name))})]})})}),r.jsx("section",{className:"max-w-content mx-auto px-6",children:r.jsx(ht,{children:r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[r.jsxs("div",{className:"lg:col-span-5 space-y-6 text-left",children:[r.jsx("h2",{className:"text-[clamp(32px,4.4vw,52px)] font-bold text-deep tracking-tight leading-tight",children:"Pick your track."}),r.jsx("p",{className:"text-muted text-base sm:text-lg leading-relaxed",children:"Explore specialized technology tracks designed around real job requirements, hands-on lab projects, and direct Mumbai recruitment drives."}),r.jsx("div",{className:"pt-2",children:r.jsx(ft,{to:"/courses",size:"lg",variant:"primary",children:"Explore courses"})})]}),r.jsx("div",{className:"lg:col-span-7 flex justify-center",children:it.cardSwap&&!e?r.jsx("div",{className:"relative w-full max-w-[480px] h-[340px] sm:h-[380px] flex items-center justify-center",children:r.jsx(dn,{width:400,height:260,cardRadius:22,visibleCards:4,theme:"light",autoplay:!0,pauseOnHover:!0,delay:3500,className:"w-full h-full",children:en.map(n=>{const o=n.icon;return r.jsx(lr,{children:r.jsxs("div",{className:"w-full h-full p-6 sm:p-7 flex flex-col justify-between bg-surface rounded-card border border-line/90 shadow-card text-left select-none",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsx("div",{className:`w-11 h-11 rounded-xl ${n.color} border flex items-center justify-center shadow-sm`,children:r.jsx(o,{size:22})}),r.jsx("span",{className:"text-xs font-semibold px-2.5 py-0.5 rounded-full bg-background border border-line/70 text-muted",children:n.count})]}),r.jsx("h3",{className:"text-xl font-bold text-deep mb-2",children:n.title}),r.jsx("p",{className:"text-xs sm:text-sm text-muted leading-relaxed line-clamp-3",children:n.desc})]}),r.jsx("div",{className:"pt-4 border-t border-line/50 flex items-center justify-between text-xs font-semibold text-primary",children:r.jsxs(Bt,{to:n.link,className:"hover:underline flex items-center gap-1",children:[r.jsx("span",{children:"Browse track"}),r.jsx(xr,{size:14})]})})]})},n.title)})})}):r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full",children:en.map(n=>{const o=n.icon;return r.jsx(Bt,{to:n.link,className:"bg-surface border border-line/80 rounded-card p-5 shadow-card hover:border-primary/40 transition-all flex flex-col justify-between",children:r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-center justify-between mb-3",children:[r.jsx("div",{className:`w-9 h-9 rounded-lg ${n.color} border flex items-center justify-center`,children:r.jsx(o,{size:18})}),r.jsx("span",{className:"text-xs text-muted font-medium",children:n.count})]}),r.jsx("h3",{className:"text-base font-bold text-deep",children:n.title}),r.jsx("p",{className:"text-xs text-muted mt-1 line-clamp-2",children:n.desc})]})},n.title)})})})]})})}),r.jsx("section",{className:"max-w-content mx-auto px-6",children:r.jsxs(ht,{children:[r.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-14",children:[r.jsx("h2",{className:"text-[clamp(32px,4.4vw,52px)] font-bold text-deep",children:"Why Infodesk."}),r.jsx("p",{className:"text-muted text-base sm:text-lg mt-3",children:"Six foundational pillars taken directly from our educational charter to ensure every student succeeds."})]}),r.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:Go.map(n=>{const o=n.icon;return r.jsxs(Ln,{spotlightColor:"rgba(36, 72, 201, 0.16)",shape:"circle",intensity:.22,theme:"light",className:"!bg-surface !border !border-line/80 !rounded-card p-6 !shadow-card hover:!border-primary/40 transition-all duration-300",children:[r.jsxs("div",{className:"flex items-center justify-between mb-4",children:[r.jsx("div",{className:"w-10 h-10 rounded-xl bg-soft text-primary flex items-center justify-center shadow-sm",children:r.jsx(o,{size:20})}),r.jsx("span",{className:"font-mono text-xs font-bold text-muted/60 bg-background px-2 py-0.5 rounded-md border border-line/50",children:n.num})]}),r.jsx("div",{className:"flex items-center gap-2 mb-1.5",children:r.jsx("h3",{className:"text-lg font-bold text-deep",children:n.title})}),r.jsx("p",{className:"text-muted text-sm leading-relaxed mb-4",children:n.desc}),r.jsx("div",{className:"pt-3 border-t border-line/40",children:r.jsx("span",{className:"inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-soft/60 text-deep",children:n.tag})})]},n.title)})})]})}),r.jsx("section",{className:"max-w-content mx-auto px-6",children:r.jsxs(ht,{children:[r.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-10",children:[r.jsx("h2",{className:"text-[clamp(32px,4.4vw,52px)] font-bold text-deep",children:"Student voices."}),r.jsx("p",{className:"text-muted text-base sm:text-lg mt-3",children:"Hear verified feedback from students who transformed their technical careers through our Mumbai batches."})]}),r.jsx("div",{className:"w-full max-w-lg h-[340px] sm:h-[360px] mx-auto relative",children:r.jsx(Io,{cards:a,layout:"fan",visible:4,spread:.3,depth:.4,radius:22,sendToBackOnClick:!0,autoplay:!e,autoplayDelay:4500,pauseOnHover:!0})}),r.jsx("div",{className:"text-center mt-8",children:r.jsxs(Bt,{to:"/placements",className:"inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-bright transition-colors",children:[r.jsx("span",{children:"Read more placement stories"}),r.jsx(xr,{size:15})]})})]})}),r.jsx("section",{className:"max-w-content mx-auto px-6",children:r.jsx(ht,{children:r.jsxs("div",{className:"bg-[#101f5c] text-white rounded-band p-8 sm:p-14 shadow-signature overflow-hidden relative",children:[r.jsx("div",{className:"absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-bright/20 blur-3xl pointer-events-none"}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10",children:[r.jsxs("div",{className:"lg:col-span-7 space-y-5",children:[r.jsxs("span",{className:"inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/95 border border-white/20",children:[r.jsx(pr,{size:13,className:"text-amber-400 fill-amber-400"}),r.jsx("span",{children:"National Institutional Honor"})]}),r.jsx("h2",{className:"text-[clamp(28px,3.8vw,44px)] font-bold text-white tracking-tight leading-tight",children:"India's Best Institute award, honored by Ashneer Grover."}),r.jsx("p",{className:"text-white/80 text-base leading-relaxed max-w-xl",children:"Our institution was recognized nationally for educational excellence and quality career training, with the prestigious award presented personally by entrepreneur Ashneer Grover."}),r.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-4",children:[r.jsx(ft,{to:"/about",size:"md",variant:"white",children:"Read the award story"}),r.jsx("span",{className:"text-xs text-white/60 font-mono",children:"Official ceremony · Delhi, India"})]})]}),r.jsxs("div",{className:"lg:col-span-5 grid grid-cols-2 gap-3.5",children:[r.jsx("div",{className:"rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/20 group",children:r.jsx("img",{src:"/assets/awards/ashneer-award-main.jpg",alt:"Ashneer Grover presenting India's Best Institute award to Infodesk Computer Education",className:"w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500",loading:"lazy"})}),r.jsx("div",{className:"rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/20 group",children:r.jsx("img",{src:"/assets/awards/ashneer-award-1.jpg",alt:"Infodesk team on stage at national award ceremony",className:"w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500",loading:"lazy"})})]})]})]})})}),r.jsxs("section",{className:"w-full max-w-full overflow-hidden py-8 border-y border-line/60 bg-surface",children:[r.jsx("div",{className:"max-w-content mx-auto px-4 sm:px-6 mb-4 text-center",children:r.jsx("p",{className:"text-xs uppercase font-bold tracking-wider text-muted",children:"Industry tools and technologies taught in our labs"})}),e?r.jsx("div",{className:"max-w-content mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-3",children:tn.map(n=>r.jsxs("span",{className:"inline-flex items-center gap-2 text-sm font-semibold text-deep px-4 py-2 rounded-full bg-soft border border-primary/20 shadow-sm",children:[r.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-primary inline-block"}),r.jsx("span",{children:n.name}),r.jsx("span",{className:"text-[10px] text-muted font-normal bg-white/60 px-1.5 py-0.5 rounded",children:n.cat})]},n.name))}):r.jsx("div",{className:"w-full max-w-full overflow-hidden py-1",children:r.jsx(Pn,{logos:tn,ariaLabel:"Industry tools and technologies",speed:60,direction:"left",gap:24,pauseOnHover:!0,fadeOut:!0,fadeOutWidth:.12,renderItem:n=>r.jsxs("span",{className:"inline-flex items-center gap-2 text-sm font-semibold text-deep px-4 py-2 rounded-full bg-soft border border-primary/25 shadow-sm transition-transform hover:scale-105 select-none",children:[r.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-primary inline-block"}),r.jsx("span",{children:n.name}),r.jsx("span",{className:"text-[10px] text-muted font-normal bg-white/70 px-1.5 py-0.5 rounded",children:n.cat})]},n.name)})})]}),r.jsx("section",{className:"max-w-content mx-auto px-6",children:r.jsx(ht,{children:r.jsxs("div",{className:"bg-deep rounded-band p-8 sm:p-14 text-center text-white space-y-6 shadow-signature relative overflow-hidden",children:[it.homeClosingBanner&&!e&&r.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-30 z-0 overflow-hidden",children:r.jsx(Ct,{isCanvasOrWebGL:!0,fallback:r.jsx("div",{className:"w-full h-full bg-deep"}),children:r.jsx(Ar,{shape:"rise",cellSize:16,density:.6,glyphOpacity:.6,colors:["#10173a","#13266f","#2448c9","#4a6df0"],characters:" =+xX0S8#@",speed:.4,mouseInteraction:!1,className:"w-full h-full"})})}),r.jsxs("div",{className:"relative z-10 space-y-6",children:[r.jsx("h2",{className:"text-[clamp(30px,4.2vw,48px)] font-bold text-white tracking-tight",children:"Try a free demo class."}),r.jsx("p",{className:"text-white/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed",children:"Experience our teaching firsthand before enrolling. Visit any of our four Mumbai branches or attend a preview session with our faculty."}),r.jsx("div",{className:"pt-2 flex justify-center",children:r.jsx(Ct,{isCanvasOrWebGL:!0,fallback:r.jsx(ft,{to:"/contact",size:"lg",variant:"white",children:"Book your demo"}),children:r.jsx(Xo,{color:"#7df9ff",glowColor:"#38bdf8",borderRadius:9999,theme:"dark",speed:.8,intensity:.9,className:"inline-block rounded-full",children:r.jsx(ft,{to:"/contact",size:"lg",variant:"white",children:"Book your demo"})})})})]})]})})})]})}export{Zo as default};
