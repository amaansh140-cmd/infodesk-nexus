import{A as Pt,j as t,U as vt,W as bs,u as ds,m as It,T as ys}from"./vendor-motion-CI9qmr4c.js";import{r as h,L as it}from"./vendor-react-D5v3yjYH.js";import{M as Ct,u as _t,a as Lt,P as ws,b as Es,L as Ts,c as Rs,d as js,m as bt,e as $e,B as lt,f as Ft}from"./index-D_JBj6OK.js";import{T as Ns,d as Ut,S as us,e as Ss,f as fs,g as Ms,D as As,G as Cs,h as Ls,i as _s,j as ks,L as Ps,A as Dt,U as Is,B as Fs,k as Us,l as Ds,m as zs}from"./vendor-icons-B6KzySJT.js";import{S as Ke}from"./ScrollReveal-DyHdqJEL.js";import{L as yt,S as zt,C as ct,a as Gs,b as Xs,c as Bs,d as Os}from"./Stack-X-QCP1rh.js";import{t as Hs,L as $s}from"./testimonials-B9vbE0ep.js";import{c as Gt}from"./courses-Z9kwS09F.js";import"./vendor-gsap-DdEiTQuA.js";function Xt(s,l){if(typeof s=="function")return s(l);s!=null&&(s.current=l)}function Vs(...s){return l=>{let a=!1;const o=s.map(f=>{const d=Xt(f,l);return!a&&typeof d=="function"&&(a=!0),d});if(a)return()=>{for(let f=0;f<o.length;f++){const d=o[f];typeof d=="function"?d():Xt(s[f],null)}}}}function Ws(...s){return h.useCallback(Vs(...s),s)}const Bt=s=>{const{width:l,height:a}=(s==null?void 0:s.getBoundingClientRect())||{};return[l/(s==null?void 0:s.offsetWidth)||1,a/(s==null?void 0:s.offsetHeight)||1]},ms=s=>{var p;let{left:l,top:a}=s.getBoundingClientRect(),o=s;for(;o=o.parentElement||((p=o.parentNode)==null?void 0:p.host);){const{scrollLeft:m,scrollTop:w}=o;if(m||w){const[N,R]=Bt(o);l+=m*N,a+=w*R}if(getComputedStyle(o).position==="fixed")break}const[f,d]=Bt(s.offsetParent);return[l/f,a/d]};class qs extends h.Component{getSnapshotBeforeUpdate(l){const a=this.props.getElement();if(vt(a)&&l.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const o=a.offsetParent,f=vt(o)&&o.offsetWidth||0,d=vt(o)&&o.offsetHeight||0,p=getComputedStyle(a),m=this.props.sizeRef.current;m.height=parseFloat(p.height),m.width=parseFloat(p.width),m.top=a.offsetTop,m.left=a.offsetLeft,m.right=f-m.width-m.left,m.bottom=d-m.height-m.top,m.direction=p.direction,m.point=ms(a)}return null}componentDidUpdate(){}render(){return this.props.children}}function Ys({children:s,isPresent:l,anchorX:a,anchorY:o,root:f,pop:d,popNode:p}){var V;const m=h.useId(),w=h.useRef(null),N=h.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:R}=h.useContext(Ct),I=d!==!1?((V=s.props)==null?void 0:V.ref)??(s==null?void 0:s.ref):void 0,U=Ws(w,I),Y=()=>{var D;return w.current||((D=p==null?void 0:p.current)==null?void 0:D.current)},Q=D=>{const{width:le,height:z,top:B,left:G,right:J,bottom:te,direction:se}=N.current,_=se==="rtl",k=a==="left"?_?`right:${J}`:`left:${G}`:_?`left:${G}`:`right:${J}`,ce=o==="bottom"?`bottom:${te}`:`top:${B}`;D==null||D.insertRule(`[data-motion-pop-id="${m}"]{position:absolute!important;width:${le}px!important;height:${z}px!important;${k}px!important;${ce}px!important}`)};return h.useInsertionEffect(()=>{const{width:D,height:le}=N.current,z=Y();if(l||d===!1||!z||!D||!le)return;z.dataset.motionPopId=m;const B=z.ownerDocument,G=B.createElement("style");R&&(G.nonce=R);const J=f??B.head;J.appendChild(G),Q(G.sheet);let te=0,se=0;return Pt.setup(()=>{const[_,k]=ms(z);te=N.current.point[0]-_,se=N.current.point[1]-k}),Pt.read(()=>{const{sheet:_}=G;if(!_||!te&&!se)return;const k=N.current;k.left+=te,k.right-=te,k.top+=se,k.bottom-=se,_.deleteRule(0),Q(_)}),()=>{z.removeAttribute("data-motion-pop-id"),J.contains(G)&&J.removeChild(G)}},[l]),t.jsx(qs,{isPresent:l,getElement:Y,sizeRef:N,pop:d,children:d===!1?s:h.cloneElement(s,{ref:U})})}const Ks=({children:s,initial:l,isPresent:a,onExitComplete:o,custom:f,presenceAffectsLayout:d,mode:p,anchorX:m,anchorY:w,root:N})=>{const R=_t(Js),I=h.useId(),U=h.useRef(),Y=h.useRef(a),Q=h.useRef(o);Lt(()=>{Y.current=a,Q.current=o});let V=!0,D=h.useMemo(()=>(V=!1,{id:I,initial:l,isPresent:a,custom:f,onExitComplete:le=>{R.set(le,!0);for(const z of R.values())if(!z)return;o&&o()},register:(le,z)=>{var B,G;return R.set(le,!1),z&&((G=(B=z.parent)==null?void 0:B.presenceContext)==null?void 0:G.id)!==I&&(U.current=z),()=>{var J;R.delete(le),!Y.current&&!R.size&&((J=Q.current)==null||J.call(Q))}}}),[a,R,o]);return d&&V&&(D={...D}),h.useMemo(()=>{R.forEach((le,z)=>R.set(z,!1))},[a]),h.useEffect(()=>{!a&&!R.size&&o&&o()},[a]),s=t.jsx(Ys,{pop:p==="popLayout",isPresent:a,anchorX:m,anchorY:w,root:N,popNode:U,children:s}),t.jsx(ws.Provider,{value:D,children:s})};function Js(){return new Map}const st=s=>s.key||"";function Ot(s){const l=[];return h.Children.forEach(s,a=>{h.isValidElement(a)&&l.push(a)}),l}const Qs=({children:s,custom:l,initial:a=!0,onExitComplete:o,presenceAffectsLayout:f=!0,mode:d="sync",propagate:p=!1,anchorX:m="left",anchorY:w="top",root:N})=>{const[R,I]=Es(p),U=h.useMemo(()=>Ot(s),[s]),Y=p&&!R?[]:U.map(st),Q=h.useRef(!0),V=_t(()=>new Map),D=h.useRef(new Set),[le,z]=h.useState(U),[B,G]=h.useState(U);Lt(()=>{p&&!R&&!B.length&&(I==null||I())},[R,p,B.length,I]);const J=h.useRef();h.useEffect(()=>()=>{const _=J.current;J.current=void 0,_==null||_()},[B]),Lt(()=>{Q.current=!1;for(let _=0;_<B.length;_++){const k=st(B[_]);Y.includes(k)?(V.delete(k),D.current.delete(k)):V.get(k)!==!0&&V.set(k,!1)}},[B,Y.length,Y.join("-")]);const te=[];if(U!==le){let _=[...U],k=0;for(const ce of B){const ne=Y.indexOf(st(ce));ne===-1?(_.splice(k++,0,ce),te.push(ce)):k=ne+te.length+1}return te.every(ce=>V.get(st(ce)))?_=U:d==="wait"&&(_=te),G(Ot(_)),z(U),null}const{forceRender:se}=h.useContext(Ts);return t.jsx(t.Fragment,{children:B.map(_=>{const k=st(_),ce=p&&!R?!1:U===B||Y.includes(k),ne=()=>{if(D.current.has(k))return;if(V.has(k))D.current.add(k),V.set(k,!0);else return;let Ae=!0;V.forEach(F=>{F||(Ae=!1)}),Ae&&(se==null||se(),z([]),p&&(I==null||I()),J.current=o)};return t.jsx(Ks,{isPresent:ce,initial:!Q.current||a?void 0:!1,custom:l,presenceAffectsLayout:f,mode:d,root:N,onExitComplete:ce?void 0:ne,anchorX:m,anchorY:w,children:_},k)})})};function Zs({children:s,...l}){const a=h.useContext(Ct);l={...a,...l},l.transition=bs(l.transition,a.transition),l.isStatic=_t(()=>l.isStatic);const o=h.useMemo(()=>l,[JSON.stringify(l.transition),l.transformPagePoint,l.reducedMotion,l.skipAnimations,l.isValidProp]);return t.jsx(Ct.Provider,{value:o,children:s})}const wt=[{id:"science",tabLabel:"Data science",cmdBase:"infodesk $ learn --course",courseName:'"data science"',tools:"Loaded: Python, Scikit-Learn, GenAI, Alteryx, Informatica",duration:"Duration: 12 months comprehensive career program",level:"Status: Certified industrial faculties ✓"},{id:"analytics",tabLabel:"Analytics",cmdBase:"infodesk $ learn --course",courseName:'"data analytics"',tools:"Loaded: Excel, SQL, Python, Pandas, Power BI, Tableau",duration:"Duration: 6 months (hands-on industrial training)",level:"Status: 100% job assistance included ✓"},{id:"web",tabLabel:"Web",cmdBase:"infodesk $ learn --course",courseName:'"full stack web"',tools:"Loaded: HTML5, CSS3, JavaScript, PHP, SQL, WordPress",duration:"Duration: 6 months with real client capstone projects",level:"Status: Flexible small batch timings ✓"},{id:"marketing",tabLabel:"Marketing",cmdBase:"infodesk $ learn --course",courseName:'"digital marketing"',tools:"Loaded: SEO, Google Ads, SMM, Content, AI Tools",duration:"Duration: 6 months plus practical job training",level:"Status: Live ad spend & portfolio reviews ✓"},{id:"design",tabLabel:"Design",cmdBase:"infodesk $ learn --course",courseName:'"design & media"',tools:"Loaded: Photoshop, Illustrator, Figma, Premiere Pro, UI/UX",duration:"Duration: 6 months creative portfolio training",level:"Status: Live client design briefs ✓"}];function en(){const s=ds(),[l,a]=h.useState(0),o=wt[l],f=`${o.cmdBase} ${o.courseName}`,[d,p]=h.useState(f.length),[m,w]=h.useState(!0);h.useEffect(()=>{if(s){p(f.length),w(!0);return}const R=setTimeout(()=>{a(Y=>(Y+1)%wt.length),p(0),w(!1);let I=0;const U=setInterval(()=>{I++,p(I),I>=f.length&&(clearInterval(U),setTimeout(()=>{w(!0)},200))},35)},6e3);return()=>{clearTimeout(R)}},[l,f,s]);const N=f.slice(0,d);return t.jsx("div",{className:"w-full max-w-full sm:max-w-md md:max-w-lg mx-auto md:[perspective:1200px]",children:t.jsxs(It.div,{className:"w-full relative bg-[#0b1437] border border-[#213275] rounded-panel p-5 sm:p-7 shadow-[0_22px_50px_-15px_rgba(11,20,55,0.7)] text-left select-none transition-transform duration-500 ease-out md:[transform:rotateY(-5deg)_rotateX(3deg)] md:hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1.02)]",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:[.2,.7,.2,1]},children:[t.jsx("div",{className:"absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-bright to-transparent opacity-40 pointer-events-none"}),t.jsxs("div",{className:"flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-white/10 gap-2",children:[t.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[t.jsx("span",{className:"w-3 h-3 rounded-full bg-[#f87171] inline-block shadow-[0_0_8px_rgba(248,113,113,0.5)]"}),t.jsx("span",{className:"w-3 h-3 rounded-full bg-[#fbbf24] inline-block shadow-[0_0_8px_rgba(251,191,36,0.5)]"}),t.jsx("span",{className:"w-3 h-3 rounded-full bg-[#34d399] inline-block shadow-[0_0_8px_rgba(52,211,153,0.5)]"})]}),t.jsx("div",{className:"flex items-center gap-1 overflow-x-auto py-0.5 scrollbar-none",children:wt.map((R,I)=>{const U=I>=3;return t.jsx("button",{type:"button",onClick:()=>{a(I),p(`${R.cmdBase} ${R.courseName}`.length),w(!0)},className:`px-2 py-0.5 rounded text-[11px] font-mono whitespace-nowrap transition-colors ${U?"hidden sm:inline-block":"inline-block"} ${l===I?"bg-bright/20 text-white font-bold border border-bright/40":"text-white/50 hover:text-white/80"}`,children:R.tabLabel},R.id)})}),t.jsxs("div",{className:"hidden min-[480px]:flex items-center gap-1.5 text-[11px] font-mono text-white/50 shrink-0",children:[t.jsx(Ns,{size:12,className:"text-bright"}),t.jsx("span",{children:"infodesk-cli"})]})]}),t.jsxs("div",{className:"font-mono text-xs sm:text-[14px] leading-relaxed space-y-3 min-h-[160px] sm:min-h-[175px]",children:[t.jsxs("div",{className:"text-white/95 font-semibold flex items-center flex-wrap break-all sm:break-normal",children:[t.jsx("span",{className:"text-[#4a6df0] mr-2",children:"infodesk"}),t.jsx("span",{className:"text-white/40 mr-2",children:"$"}),d>11&&t.jsx("span",{className:"text-emerald-400 mr-2",children:"learn"}),d>17&&t.jsx("span",{className:"text-indigo-300 mr-2",children:"--course"}),d>26&&t.jsx("span",{className:"text-amber-300 font-bold",children:N.slice(26)}),t.jsx("span",{className:"inline-block w-2 h-4 ml-1 bg-bright animate-pulse"})]}),m&&t.jsxs(It.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.3},className:"space-y-2.5 pt-2 border-t border-white/10",children:[t.jsxs("div",{className:"flex items-start gap-2.5 text-emerald-400",children:[t.jsx(Ut,{size:16,className:"shrink-0 mt-0.5 text-emerald-400"}),t.jsx("span",{className:"text-emerald-300/95 text-xs sm:text-[13px] leading-snug break-words font-medium",children:o.tools})]}),t.jsxs("div",{className:"flex items-start gap-2.5 text-emerald-400",children:[t.jsx(Ut,{size:16,className:"shrink-0 mt-0.5 text-emerald-400"}),t.jsx("span",{className:"text-emerald-300/95 text-xs sm:text-[13px] leading-snug break-words font-medium",children:o.duration})]}),t.jsxs("div",{className:"flex items-center gap-2 text-white/60 text-[11px] sm:text-xs pl-6",children:[t.jsx(us,{size:12,className:"text-amber-400"}),t.jsx("span",{children:o.level})]})]})]}),t.jsxs("div",{className:"pt-3 sm:pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/40",children:[t.jsxs("span",{className:"flex items-center gap-1.5",children:[t.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping"}),t.jsx("span",{children:"small batches • 4 Mumbai branches"})]}),t.jsx("span",{className:"text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30",children:"ready for demo"})]})]})})}const Ht=8,Et=4,Tt=24,$t=1.2,Vt=.7,Wt=.015,tn=2.4,mt=60,nt=100,sn=16,nn=.78,qt=["#1e3fd8","#f6f8ff","#a5d8ff","#38bdf8"],Yt=" =+xX0S8#@",Kt='"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',an={horizon:0,pinch:1,rise:2,eclipse:3},rn={none:0,wave:1,burst:2},on=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,hs=`
float hash12(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
`,ln=`#version 300 es
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
${hs}
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
}`,xs=`
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
${hs}
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
`,cn=`#version 300 es
precision highp float;
uniform float uDownscale;
in vec2 vUv;
out vec4 outColor;
${xs}
void main() {
  outColor = glyphAt(gl_FragCoord.xy * uDownscale);
}`,dn=`#version 300 es
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
}`,un=`#version 300 es
precision highp float;
uniform sampler2D uHalo;
uniform float uGlow;
uniform float uGradient;
uniform float uGrain;
uniform float uFrame;
in vec2 vUv;
out vec4 outColor;
${xs}
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
}`,ke=(s,l,a)=>Math.min(a,Math.max(l,s)),Rt=s=>s<=.04045?s/12.92:((s+.055)/1.055)**2.4,fn=([s,l,a])=>{const o=Rt(s),f=Rt(l),d=Rt(a),p=Math.cbrt(.4122214708*o+.5363325363*f+.0514459929*d),m=Math.cbrt(.2119034982*o+.6806995451*f+.1073969566*d),w=Math.cbrt(.0883024619*o+.2817188376*f+.6299787005*d);return[.2104542553*p+.793617785*m-.0040720468*w,1.9779984951*p-2.428592205*m+.4505937099*w,.0259040371*p+.7827717662*m-.808675766*w]},Jt=(s,l,a)=>{const o=s.createShader(l);return o?(s.shaderSource(o,a),s.compileShader(o),s.getShaderParameter(o,s.COMPILE_STATUS)?o:(s.deleteShader(o),null)):null},dt=(s,l)=>{const a=Jt(s,s.VERTEX_SHADER,on),o=Jt(s,s.FRAGMENT_SHADER,l),f=s.createProgram();if(!a||!o||!f)return null;if(s.attachShader(f,a),s.attachShader(f,o),s.linkProgram(f),s.deleteShader(a),s.deleteShader(o),!s.getProgramParameter(f,s.LINK_STATUS))return s.deleteProgram(f),null;const d={},p=s.getProgramParameter(f,s.ACTIVE_UNIFORMS);for(let m=0;m<p;m++){const w=s.getActiveUniform(f,m);if(!w)continue;const N=w.name.replace(/\[0\]$/,"");d[N]=s.getUniformLocation(f,N)}return{program:f,uniforms:d}},jt=(s,l)=>({textures:Array.from({length:l},()=>{const o=s.createTexture();return s.bindTexture(s.TEXTURE_2D,o),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),o}),framebuffer:s.createFramebuffer(),width:0,height:0}),Nt=(s,l,a,o)=>{l.width===a&&l.height===o||(l.width=a,l.height=o,s.bindFramebuffer(s.FRAMEBUFFER,l.framebuffer),l.textures.forEach((f,d)=>{s.bindTexture(s.TEXTURE_2D,f),s.texImage2D(s.TEXTURE_2D,0,s.RGBA8,a,o,0,s.RGBA,s.UNSIGNED_BYTE,null),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+d,s.TEXTURE_2D,f,0)}),s.bindFramebuffer(s.FRAMEBUFFER,null))},Qt=(s,l,a)=>{const o=[...new Set([...l].filter(R=>R!==`
`&&R!=="\r"))];o.length||o.push(" ");const f=`300 ${Math.round(nt*nn)}px ${a}`,d=Math.min(sn,o.length),p=Math.ceil(o.length/d),m=document.createElement("canvas");m.width=mt*d,m.height=nt*p;const w=m.getContext("2d");w&&(w.font=f,w.textAlign="center",w.textBaseline="middle",w.fillStyle="#fff",o.forEach((R,I)=>{const U=I%d,Y=Math.floor(I/d);w.fillText(R,U*mt+mt/2,Y*nt+nt/2+3)}));const N=s.createTexture();return s.bindTexture(s.TEXTURE_2D,N),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.texImage2D(s.TEXTURE_2D,0,s.RGBA8,s.RGBA,s.UNSIGNED_BYTE,m),s.generateMipmap(s.TEXTURE_2D),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR_MIPMAP_LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),{texture:N,count:o.length,grid:[d,p]}},Zt=({colors:s=qt,shape:l="horizon",characters:a=Yt,cellSize:o=18,density:f=.8,glyphOpacity:d=.85,glow:p=.2,depthOfField:m=0,flicker:w=.2,softness:N=.5,scale:R=1,flow:I=.5,speed:U=1,gradientOpacity:Y=.9,grain:Q=.08,variation:V=0,mouseInteraction:D=!0,scrambleRadius:le=.1,clickEffect:z="wave",intro:B=!0,lightMode:G=!1,fontFamily:J=Kt,dpr:te,className:se="",style:_,...k})=>{const ce=h.useRef(null),ne=h.useRef(null),Ae=h.useRef(null),F=(Array.isArray(s)&&s.length?s:qt).slice(0,Ht),ge={colors:F.length>1?F:[F[0],F[0]],shape:an[l]??0,characters:a||Yt,cellSize:ke(o,6,64),density:ke(f,0,1),glyphOpacity:ke(d,0,1),glow:ke(p,0,2),depthOfField:ke(m,0,1),flicker:ke(w,0,1),softness:ke(N,0,1),scale:ke(R,.4,2.5),flow:ke(I,0,2),speed:Math.max(0,U),gradientOpacity:ke(Y,0,1),grain:ke(Q,0,.4),variation:Math.max(0,V),mouseInteraction:D,scrambleRadius:ke(le,.02,.4),clickEffect:rn[z]??1,intro:B,lightMode:G,fontFamily:J||Kt,dpr:te},O=h.useRef(ge);return O.current=ge,h.useEffect(()=>{var qe;const j=ce.current,P=ne.current,e=P==null?void 0:P.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!j||!P||!e)return;const Se=dt(e,ln),ue=dt(e,cn),A=dt(e,dn),W=dt(e,un);if(!Se||!ue||!A||!W)return;const Ce=e.createVertexArray(),Le=jt(e,2),fe=jt(e,1),Xe=jt(e,1),de=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Ue=new Map,We=g=>{const x=String(g),u=Ue.get(x);if(u)return u;let S=[0,0,0];if(de){de.clearRect(0,0,1,1),de.fillStyle="#000000",de.fillStyle=x,de.fillRect(0,0,1,1);const[C,i,r]=de.getImageData(0,0,1,1).data;S=[C/255,i/255,r/255]}return Ue.set(x,S),S},_e=((qe=window.matchMedia)==null?void 0:qe.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,me={width:1,height:1,ratio:1},he=new Float32Array(Ht*3),Pe=new Float32Array(Et*4),ae=[],Ie=new Float32Array(Tt*4),Z=[],re={x:0,y:0,inside:!1};let b=null,oe="",xe="",n=0,ze=0,Me=O.current.intro&&!_e?0:1,Fe=0,Be=0,Ge=0,ve=0,E=!0,M=!1;const H=()=>{var u,S;const g=O.current,x=`${g.fontFamily}|${g.characters}`;x===oe&&b||(oe=x,b&&e.deleteTexture(b.texture),b=Qt(e,g.characters,g.fontFamily),(S=(u=document.fonts)==null?void 0:u.load)==null||S.call(u,`300 64px ${g.fontFamily}`,g.characters).then(()=>{M||oe!==x||(b&&e.deleteTexture(b.texture),b=Qt(e,g.characters,g.fontFamily),be())},()=>{}))},ee=()=>{const g=O.current,x=g.colors.join(",");x!==xe&&(xe=x,g.colors.forEach((u,S)=>he.set(fn(We(u)),S*3)))},pe=(g,x,u)=>{if(!b)return;const S=O.current,C=g.uniforms,i=S.cellSize*me.ratio,r=i*(mt/nt);e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Le.textures[0]),e.uniform1i(C.uField,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Le.textures[1]),e.uniform1i(C.uAux,1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,b.texture),e.uniform1i(C.uAtlas,2),e.uniform2f(C.uResolution,x,u),e.uniform2f(C.uCell,r,i),e.uniform2f(C.uOffset,(x-Math.ceil(x/r)*r)/2,(u-Math.ceil(u/i)*i)/2),e.uniform2f(C.uAtlasGrid,b.grid[0],b.grid[1]),e.uniform1f(C.uCount,b.count),e.uniform1f(C.uDensity,S.density),e.uniform1f(C.uOpacity,S.glyphOpacity),e.uniform1f(C.uFlicker,_e?0:S.flicker),e.uniform1f(C.uDepth,S.depthOfField),e.uniform1f(C.uGlyphTime,ze),e.uniform1f(C.uSeedValue,S.variation),e.uniform1f(C.uLight,S.lightMode?1:0)},be=()=>{const g=O.current,x=me.width/me.height;H(),ee(),e.bindVertexArray(Ce),e.disable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,Le.framebuffer),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),e.viewport(0,0,Le.width,Le.height),e.useProgram(Se.program);const u=Se.uniforms;e.uniform1f(u.uAspect,x),e.uniform1f(u.uTime,n),e.uniform1i(u.uShape,g.shape),e.uniform3fv(u.uRamp,he),e.uniform1i(u.uCount,g.colors.length),e.uniform1f(u.uScale,g.scale),e.uniform1f(u.uSoftness,g.softness),e.uniform1f(u.uFlow,g.flow),e.uniform2f(u.uSeed,g.variation*3.17,g.variation*1.91),e.uniform4fv(u.uTrail,Ie),e.uniform1f(u.uRadius,g.scrambleRadius),e.uniform4fv(u.uClicks,Pe),e.uniform1i(u.uClickEffect,g.clickEffect),e.uniform1f(u.uIntro,Me),e.uniform1f(u.uFrame,Fe),e.drawArrays(e.TRIANGLES,0,3);const S=g.glow>.001;S&&(e.bindFramebuffer(e.FRAMEBUFFER,fe.framebuffer),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.viewport(0,0,fe.width,fe.height),e.useProgram(ue.program),pe(ue,P.width,P.height),e.uniform1f(ue.uniforms.uDownscale,P.width/fe.width),e.drawArrays(e.TRIANGLES,0,3),e.useProgram(A.program),e.activeTexture(e.TEXTURE0),e.uniform1i(A.uniforms.uSource,0),e.bindFramebuffer(e.FRAMEBUFFER,Xe.framebuffer),e.bindTexture(e.TEXTURE_2D,fe.textures[0]),e.uniform2f(A.uniforms.uStep,1/fe.width,0),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,fe.framebuffer),e.bindTexture(e.TEXTURE_2D,Xe.textures[0]),e.uniform2f(A.uniforms.uStep,0,1/fe.height),e.drawArrays(e.TRIANGLES,0,3)),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,P.width,P.height),e.useProgram(W.program),pe(W,P.width,P.height);const C=W.uniforms;e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,fe.textures[0]),e.uniform1i(C.uHalo,3),e.uniform1f(C.uGlow,S?g.glow:0),e.uniform1f(C.uGradient,g.gradientOpacity),e.uniform1f(C.uGrain,g.grain),e.uniform1f(C.uFrame,Fe),e.drawArrays(e.TRIANGLES,0,3)},Oe=()=>{const g=O.current;me.width=Math.max(1,j.clientWidth),me.height=Math.max(1,j.clientHeight),me.ratio=Math.min(g.dpr||window.devicePixelRatio||1,2),P.width=Math.max(1,Math.round(me.width*me.ratio)),P.height=Math.max(1,Math.round(me.height*me.ratio)),Nt(e,Le,Math.max(1,Math.round(P.width/2)),Math.max(1,Math.round(P.height/2)));const x=Math.max(1,Math.round(P.width/4)),u=Math.max(1,Math.round(P.height/4));Nt(e,fe,x,u),Nt(e,Xe,x,u),be(),He()},ht=g=>{for(Z.forEach(x=>{x.age+=g});Z.length&&Z[Z.length-1].age>Vt;)Z.pop();for(let x=0;x<Tt;x++){const u=Z[x];if(!u){Ie[x*4+2]=0;continue}const S=1-u.age/Vt;Ie.set([u.x,u.y,S*S,0],x*4)}for(ae.forEach(x=>{x.age+=g});ae.length&&ae[ae.length-1].age>$t;)ae.pop();for(let x=0;x<Et;x++){const u=ae[x];if(!u){Pe[x*4+3]=0;continue}const S=u.age/$t,C=Math.min(1,u.age/.08)*(1-S)*(1-S);Pe.set([u.x,u.y,u.age,C],x*4)}},at=g=>{if(Ge=0,M||!E||document.hidden)return;const x=O.current,u=ve?ke((g-ve)/1e3,.001,.05):1/60;ve=g,_e||(n+=u*x.speed*.5,ze+=u*Math.max(x.speed,.15)),Me<1&&(Me=Math.min(1,Me+u/tn)),Be+=u,!_e&&Be>1/24&&(Be=0,Fe=(Fe+1)%97),ht(u),be(),!_e||Me<1||ae.length>0||Z.length>0?Ge=requestAnimationFrame(at):ve=0};function He(){!Ge&&!M&&E&&!document.hidden&&(Ge=requestAnimationFrame(at))}const Te=g=>{const x=j.getBoundingClientRect(),u=(g.clientX-x.left)/Math.max(1,x.width),S=1-(g.clientY-x.top)/Math.max(1,x.height),C=x.width/Math.max(1,x.height);re.inside=u>=0&&u<=1&&S>=0&&S<=1,re.x=(u-.5)*C,re.y=S-.5},Ye=g=>{Te(g);const x=O.current;if(!re.inside||!x.mouseInteraction||_e)return;const u=Z[0],S=u?Math.hypot(re.x-u.x,re.y-u.y):1/0;if(!(S<Wt)){if(u&&u.age<.1){const C=Math.min(6,Math.floor(S/(Wt*2)));for(let i=1;i<=C;i++){const r=i/(C+1);Z.unshift({x:u.x+(re.x-u.x)*r,y:u.y+(re.y-u.y)*r,age:0})}}Z.unshift({x:re.x,y:re.y,age:0}),Z.length=Math.min(Z.length,Tt),He()}},Je=g=>{Te(g);const x=O.current;!re.inside||!x.clickEffect||_e||(ae.unshift({x:re.x,y:re.y,age:0}),ae.length>Et&&ae.pop(),He())},Qe=()=>{ve=0,He()},Ze=new ResizeObserver(Oe);Ze.observe(j);const et=new IntersectionObserver(g=>{E=g.some(x=>x.isIntersecting),E&&(ve=0,He())});return et.observe(j),window.addEventListener("pointermove",Ye,{passive:!0}),window.addEventListener("pointerdown",Je,{passive:!0}),document.addEventListener("visibilitychange",Qe),Oe(),Ae.current=He,()=>{var g;M=!0,cancelAnimationFrame(Ge),Ae.current=null,Ze.disconnect(),et.disconnect(),window.removeEventListener("pointermove",Ye),window.removeEventListener("pointerdown",Je),document.removeEventListener("visibilitychange",Qe),[Le,fe,Xe].forEach(x=>{x.textures.forEach(u=>e.deleteTexture(u)),e.deleteFramebuffer(x.framebuffer)}),b&&e.deleteTexture(b.texture),e.deleteVertexArray(Ce),[Se,ue,A,W].forEach(x=>e.deleteProgram(x.program)),(g=e.getExtension("WEBGL_lose_context"))==null||g.loseContext()}},[]),h.useEffect(()=>{var j;(j=Ae.current)==null||j.call(Ae)}),t.jsx("div",{ref:ce,className:`gradient-ascii-container${se?` ${se}`:""}`,style:_,...k,children:t.jsx("canvas",{ref:ne,className:"gradient-ascii-canvas","aria-hidden":"true"})})};function ut(...s){return s.filter(Boolean).join(" ")}const mn=typeof window<"u"?h.useLayoutEffect:h.useEffect,es=typeof Intl<"u"&&Intl.Segmenter?new Intl.Segmenter("en",{granularity:"grapheme"}):null,hn=s=>es?Array.from(es.segment(s),l=>l.segment):Array.from(s),St=(s,l)=>s&&typeof s=="object"&&!Array.isArray(s)?{...s,filter:l}:s,xn={type:"spring",damping:25,stiffness:300},pn={type:"spring",damping:34,stiffness:320},gn={transformOrigin:"50% 50% -0.45em",backfaceVisibility:"hidden"},ts={slide:s=>({initial:{y:s?"100%":"-100%",opacity:0},animate:{y:0,opacity:1},exit:{y:s?"-120%":"120%",opacity:0},transition:{type:"spring",damping:25,stiffness:300}}),flip:s=>({initial:{rotateX:s?-90:90,opacity:0,transformPerspective:480},animate:{rotateX:0,opacity:1,transformPerspective:480},exit:{rotateX:s?90:-90,opacity:0,transformPerspective:480},transition:{type:"tween",duration:.6,ease:[.34,1.4,.64,1]},exitTransition:{type:"tween",duration:.32,ease:[.5,0,.75,0]}}),blur:s=>({initial:{y:s?"45%":"-45%",opacity:0},animate:{y:0,opacity:1},exit:{y:s?"-45%":"45%",opacity:0},transition:{type:"tween",duration:.55,ease:[.22,1,.36,1]}}),scale:s=>({initial:{scale:s?.35:1.7,opacity:0},animate:{scale:1,opacity:1},exit:{scale:s?1.7:.35,opacity:0},transition:{type:"spring",damping:17,stiffness:240}}),drop:()=>({initial:{y:"-110%",opacity:0},animate:{y:0,opacity:1},exit:{y:"110%",opacity:0},transition:{type:"spring",damping:18,stiffness:320,mass:.9},exitTransition:{type:"tween",duration:.3,ease:[.55,0,1,.45]}})},vn=s=>{const l=String(s??"").trim();let a=null;const o=l.match(/^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i);if(o){const m=o[1].length<6?[...o[1].slice(0,3)].map(w=>w+w).join(""):o[1].slice(0,6);a=[0,2,4].map(w=>parseInt(m.slice(w,w+2),16))}else{const m=l.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i);m&&(a=m.slice(1,4).map(Number))}if(!a)return;const[f,d,p]=a.map(m=>{const w=Math.min(Math.max(m/255,0),1);return w<=.04045?w/12.92:((w+.055)/1.055)**2.4});return .2126*f+.7152*d+.0722*p>.3?"#0b0b0c":"#ffffff"},ps=h.forwardRef((s,l)=>{const{texts:a,transition:o,initial:f,animate:d,exit:p,effect:m="slide",direction:w="up",highlight:N=!1,highlightColor:R="#a855f7",animatePresenceMode:I="wait",animatePresenceInitial:U=!1,rotationInterval:Y=2e3,staggerDuration:Q=0,staggerFrom:V="first",loop:D=!0,auto:le=!0,pauseOnHover:z=!1,blur:B=0,splitBy:G="characters",onNext:J,onMouseEnter:te,onMouseLeave:se,mainClassName:_,splitLevelClassName:k,elementLevelClassName:ce,style:ne,...Ae}=s,[F,ge]=h.useState(0),[O,j]=h.useState(!1),P=h.useRef(0),e=h.useRef(J);e.current=J;const Se=h.useRef(null),ue=Rs("auto"),A=js(),W=Math.max(a.length-1,0),Ce=Math.min(F,W),Le=h.useMemo(()=>{const E=a[Ce]??"";if(G==="characters"){const M=E.split(" ");return M.map((H,ee)=>({characters:hn(H),needsSpace:ee!==M.length-1}))}return G==="words"?E.split(" ").map((M,H,ee)=>({characters:[M],needsSpace:H!==ee.length-1})):G==="lines"?E.split(`
`).map((M,H,ee)=>({characters:[M],needsSpace:H!==ee.length-1})):E.split(G).map((M,H,ee)=>({characters:[M],needsSpace:H!==ee.length-1}))},[a,Ce,G]),fe=h.useMemo(()=>{const E=Le.reduce((H,ee)=>H+ee.characters.length,0),M=Array.from({length:E},(H,ee)=>ee).sort(()=>Math.random()-.5);return{total:E,shuffled:M}},[Le]),Xe=E=>{const{total:M,shuffled:H}=fe;return V==="first"?E*Q:V==="last"?(M-1-E)*Q:V==="center"?Math.abs(Math.floor(M/2)-E)*Q:V==="random"?H[E]*Q:Math.abs(V-E)*Q},de=h.useCallback(E=>{var M;E!==P.current&&(P.current=E,ge(E),(M=e.current)==null||M.call(e,E))},[]),Ue=h.useCallback(()=>{const E=Math.min(P.current,W);de(E<W?E+1:D?0:E)},[W,D,de]),We=h.useCallback(()=>{const E=Math.min(P.current,W);de(E>0?E-1:D?W:E)},[W,D,de]),_e=h.useCallback(E=>de(Math.max(0,Math.min(E,W))),[W,de]),me=h.useCallback(()=>de(0),[de]);h.useImperativeHandle(l,()=>({next:Ue,previous:We,jumpTo:_e,reset:me}),[Ue,We,_e,me]);const he=z&&O;h.useEffect(()=>{if(!le||he)return;const E=setTimeout(Ue,Y);return()=>clearTimeout(E)},[Ue,Y,le,he,Ce]),mn(()=>{const E=Se.current;if(!N||!E){ue.set("auto");return}let M=null,H=!1;const ee=()=>{const be=E.offsetWidth+1;if(M==null||M.stop(),!H||A){H=!0,ue.set(be);return}M=ys(ue,be,pn)};ee();const pe=typeof ResizeObserver<"u"?new ResizeObserver(ee):null;return pe==null||pe.observe(E),()=>{pe==null||pe.disconnect(),M==null||M.stop()}},[N,A,ue]);const Pe=E=>{z&&j(!0),te==null||te(E)},ae=E=>{j(!1),se==null||se(E)},Ie=(ts[m]??ts.slide)(w!=="down"),Z=B>0?B:m==="blur"?10:0,re=f??Ie.initial,b=d??Ie.animate,oe=p??Ie.exit,xe=o??Ie.transition,n=o||p?null:Ie.exitTransition,ze=Z>0?St(re,`blur(${Z}px)`):re,Me=Z>0?St(b,"blur(0px)"):b,Fe=Z>0?St(oe,`blur(${Z}px)`):oe,Be=m==="flip"?gn:void 0,Ge=N?{...ne,width:ue,backgroundColor:R,color:vn(R)??(ne==null?void 0:ne.color)}:ne,ve=t.jsx(Qs,{mode:I,initial:U,children:t.jsx(bt.span,{className:ut(G==="lines"?"text-rotate-lines":"text-rotate"),layout:!N,"aria-hidden":"true",children:Le.map((E,M,H)=>{const ee=H.slice(0,M).reduce((pe,be)=>pe+be.characters.length,0);return t.jsxs("span",{className:ut("text-rotate-word",k),children:[E.characters.map((pe,be)=>{const Oe=Xe(ee+be);return t.jsx(bt.span,{initial:ze,animate:Me,exit:n?{...Fe,transition:{...n,delay:Oe}}:Fe,transition:{...xe,delay:Oe},className:ut("text-rotate-element",ce),style:Be,children:pe},be)}),E.needsSpace&&t.jsx("span",{className:"text-rotate-space",children:" "})]},M)})},Ce)});return t.jsx(Zs,{reducedMotion:"user",children:t.jsxs(bt.span,{className:ut("text-rotate",N&&"text-rotate-highlight",_),...Ae,style:Ge,onMouseEnter:Pe,onMouseLeave:ae,layout:!N,transition:o??xn,children:[t.jsx("span",{className:"text-rotate-sr-only",children:a[Ce]}),N?t.jsx("span",{ref:Se,className:"text-rotate-highlight-content",children:ve}):ve]})})});ps.displayName="RotatingText";const je=96,Mt=.18,bn=1024,ss=96,ft=260,yn={gloss:0,matte:1,holo:2};let ns=1;const wn=`#version 300 es
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
}`,En=`#version 300 es
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
}`,Tn=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,Rn=`#version 300 es
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
}`,Ne=(s,l,a)=>Math.min(a,Math.max(l,s)),as=s=>Math.atan2(Math.sin(s),Math.cos(s)),rs=s=>s*Math.PI/180,At=(s,l,a,o,f,d)=>{const p=2*Math.PI*o,m=`${l}V`;s[m]+=(p*p*(a-s[l])-2*f*p*s[m])*d,s[l]+=s[m]*d},os=(s,l,a)=>{const o=s.createShader(l);return o?(s.shaderSource(o,a),s.compileShader(o),s.getShaderParameter(o,s.COMPILE_STATUS)?o:(s.deleteShader(o),null)):null},is=(s,l,a)=>{const o=os(s,s.VERTEX_SHADER,l),f=os(s,s.FRAGMENT_SHADER,a),d=s.createProgram();if(!o||!f||!d)return null;if(s.attachShader(d,o),s.attachShader(d,f),s.bindAttribLocation(d,0,"aGrid"),s.linkProgram(d),s.deleteShader(o),s.deleteShader(f),!s.getProgramParameter(d,s.LINK_STATUS))return s.deleteProgram(d),null;const p={},m=s.getProgramParameter(d,s.ACTIVE_UNIFORMS);for(let w=0;w<m;w++){const N=s.getActiveUniform(d,w);N&&(p[N.name]=s.getUniformLocation(d,N.name))}return{program:d,uniforms:p}},jn=s=>{const l=[...s].sort((d,p)=>d[0]-p[0]||d[1]-p[1]);if(l.length<3)return l;const a=(d,p,m)=>(p[0]-d[0])*(m[1]-d[1])-(p[1]-d[1])*(m[0]-d[0]),o=[];l.forEach(d=>{for(;o.length>=2&&a(o[o.length-2],o[o.length-1],d)<=0;)o.pop();o.push(d)});const f=[];for(let d=l.length-1;d>=0;d--){const p=l[d];for(;f.length>=2&&a(f[f.length-2],f[f.length-1],p)<=0;)f.pop();f.push(p)}return o.slice(0,-1).concat(f.slice(0,-1))},Nn=({imageSrc:s,width:l=200,rotate:a=0,peelDirection:o=0,peelBackHoverPct:f=25,peelBackActivePct:d=40,curlRadius:p=12,finish:m="gloss",backColor:w="#d4d4d8",lightingIntensity:N=.5,shadowIntensity:R=.6,followPointer:I=!0,draggable:U=!0,swing:Y=1,friction:Q=.5,bounce:V=.35,intro:D=!0,initialPosition:le="center",onDragStart:z,onDragEnd:B,dpr:G,className:J="",style:te,...se})=>{const _=h.useRef(null),k=h.useRef(null),ce=h.useRef(null),ne=h.useRef(null),Ae={imageSrc:s,width:Math.max(16,l),rotate:rs(a),peelDirection:rs(o),hoverPeel:Ne(f,0,100)/100,activePeel:Ne(d,0,100)/100,curlRadius:Math.max(2,p),finish:yn[m]??0,backColor:w,lighting:Ne(N,0,1),shadow:Ne(R,0,1),followPointer:I,draggable:U,swing:Ne(Y,0,3),friction:Ne(Q,0,1),bounce:Ne(V,0,1),intro:D,initialPosition:le,onDragStart:z,onDragEnd:B,dpr:G},F=h.useRef(Ae);return F.current=Ae,h.useEffect(()=>{var C;const ge=_.current,O=k.current,j=ce.current,P=ge==null?void 0:ge.parentElement,e=O==null?void 0:O.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!0,depth:!0,stencil:!1});if(!ge||!O||!j||!P||!e)return;const Se=is(e,wn,En),ue=is(e,Tn,Rn);if(!Se||!ue)return;const A=Se.uniforms,W=ue.uniforms,Ce=[0,1].map(()=>{const i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const r=e.createFramebuffer();return{texture:i,buffer:r,width:0,height:0}}),Le=()=>{const i=Math.max(1,Math.round(oe.size/2)),r=i;Ce.forEach(c=>{c.width===i&&c.height===r||(c.width=i,c.height=r,e.bindTexture(e.TEXTURE_2D,c.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,i,r,0,e.RGBA,e.UNSIGNED_BYTE,null),e.bindFramebuffer(e.FRAMEBUFFER,c.buffer),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,c.texture,0))}),e.bindFramebuffer(e.FRAMEBUFFER,null)},fe=new Float32Array((je+1)*(je+1)*2);for(let i=0;i<=je;i++)for(let r=0;r<=je;r++){const c=(i*(je+1)+r)*2;fe[c]=r/je,fe[c+1]=i/je}const Xe=new Uint16Array(je*je*6);let de=0;for(let i=0;i<je;i++)for(let r=0;r<je;r++){const c=i*(je+1)+r,v=c+1,y=c+je+1,T=y+1;Xe.set([c,v,T,c,T,y],de),de+=6}const Ue=e.createVertexArray();e.bindVertexArray(Ue);const We=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,We),e.bufferData(e.ARRAY_BUFFER,fe,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);const _e=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,_e),e.bufferData(e.ELEMENT_ARRAY_BUFFER,Xe,e.STATIC_DRAW);const me=e.createTexture(),he=document.createElement("canvas"),Pe=he.getContext("2d",{willReadFrequently:!0}),ae=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Ie=new Map,Z=i=>{const r=String(i),c=Ie.get(r);if(c)return c;let v=[.83,.83,.85];if(ae){ae.clearRect(0,0,1,1),ae.fillStyle="#d4d4d8",ae.fillStyle=r,ae.fillRect(0,0,1,1);const[y,T,K]=ae.getImageData(0,0,1,1).data;v=[y/255,T/255,K/255]}return Ie.set(r,v),v},re=((C=window.matchMedia)==null?void 0:C.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,b={ready:!1,aspect:1,meshX:1,meshY:1,texel:1,mask:null,maskW:1,maskH:1,hull:[]},oe={ratio:1,size:1,density:0},xe={width:1,height:1},n={x:0,y:0,vx:0,vy:0,placed:!1,swing:0,swingV:0,peel:0,peelV:0,lift:0,liftV:0,dir:F.current.peelDirection,hover:!1,local:{x:0,y:0},press:null,pivotV:{x:0,y:0},light:{x:0,y:0,z:ft},pointer:{x:0,y:0,inside:!1},intro:F.current.intro&&!re?0:1};n.intro<1&&(n.lift=1.5,n.peel=.3,n.swing=.1,n.dir+=.6);let ze=0,Me=0,Fe=!0,Be=null,Ge=!0;const ve=()=>F.current.width*b.aspect,E=(i,r)=>{const v=F.current.width,y=ve();if(!b.hull.length){const ie=(Math.abs(i)*v+Math.abs(r)*y)/2;return[-ie,ie]}let T=1/0,K=-1/0;return b.hull.forEach(([ie,ye])=>{const L=ie*v*i+ye*y*r;L<T&&(T=L),L>K&&(K=L)}),[T,K]},M=i=>{if(Be=i,b.ready=!1,!i)return;const r=new Image;r.crossOrigin="anonymous",r.decoding="async",r.onload=()=>{if(!Ge||Be!==i||!Pe)return;const c=r.naturalWidth||1,v=r.naturalHeight||1,y=Math.min(1,bn/(Math.max(c,v)*(1+2*Mt))),T=Math.max(1,Math.round(c*y)),K=Math.max(1,Math.round(v*y)),ie=Math.round(T*Mt),ye=Math.round(K*Mt);he.width=T+ie*2,he.height=K+ye*2,Pe.clearRect(0,0,he.width,he.height),Pe.drawImage(r,ie,ye,T,K),e.bindTexture(e.TEXTURE_2D,me),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,he),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),b.aspect=v/c,b.meshX=he.width/T,b.meshY=he.height/K,b.texel=he.width;const L=Math.max(8,Math.round(ss*Math.min(1,c/v))),q=Math.max(8,Math.round(ss*Math.min(1,v/c)));he.width=L,he.height=q,Pe.clearRect(0,0,L,q),Pe.drawImage(r,0,0,L,q);const tt=Pe.getImageData(0,0,L,q).data,Re=new Uint8Array(L*q).fill(255),De=[],we=(X,$)=>{const Ee=$*L+X;Re[Ee]===0||tt[Ee*4+3]>100||(Re[Ee]=0,De.push(Ee))};for(let X=0;X<L;X++)we(X,0),we(X,q-1);for(let X=0;X<q;X++)we(0,X),we(L-1,X);for(;De.length;){const X=De.pop(),$=X%L,Ee=(X-$)/L;$>0&&we($-1,Ee),$<L-1&&we($+1,Ee),Ee>0&&we($,Ee-1),Ee<q-1&&we($,Ee+1)}const Ve=[];for(let X=0;X<q;X++)for(let $=0;$<L;$++)tt[(X*L+$)*4+3]>127&&Ve.push([($+.5)/L-.5,(X+.5)/q-.5]);b.mask=Re,b.maskW=L,b.maskH=q,b.hull=jn(Ve),b.ready=!0,H(),Te()},r.src=i},H=()=>{const i=F.current;oe.ratio=Math.min(i.dpr||window.devicePixelRatio||1,2),xe.width=Math.max(1,P.clientWidth),xe.height=Math.max(1,P.clientHeight);const r=ve(),c=Math.ceil(Math.hypot(i.width,r)*1.16+2*(36+i.curlRadius));if((c!==oe.size||oe.ratio!==oe.density)&&(oe.size=c,oe.density=oe.ratio,ge.style.width=`${c}px`,ge.style.height=`${c}px`,O.width=Math.round(c*oe.ratio),O.height=Math.round(c*oe.ratio)),j.style.width=`${i.width}px`,j.style.height=`${r}px`,!n.placed){const v=i.initialPosition,y=v&&typeof v=="object"?v:{x:0,y:0};n.x=xe.width/2+(y.x||0),n.y=xe.height/2+(y.y||0),n.light={x:n.x-i.width*.45,y:n.y-r*.9,z:ft*1.6},n.placed=!0}pe()},ee=()=>{const i=F.current,r=i.rotate+n.swing,c=1+.07*Math.max(0,n.lift),v=i.width/2*c,y=ve()/2*c,T=Math.abs(Math.cos(r)),K=Math.abs(Math.sin(r));return{x:v*T+y*K,y:v*K+y*T}},pe=()=>{const i=F.current,r=ee(),c=Math.min(r.x,xe.width/2),v=Math.max(xe.width-r.x,xe.width/2),y=Math.min(r.y,xe.height/2),T=Math.max(xe.height-r.y,xe.height/2);n.x<c?(n.x=c,n.vx<0&&(n.vx=-n.vx*i.bounce)):n.x>v&&(n.x=v,n.vx>0&&(n.vx=-n.vx*i.bounce)),n.y<y?(n.y=y,n.vy<0&&(n.vy=-n.vy*i.bounce)):n.y>T&&(n.y=T,n.vy>0&&(n.vy=-n.vy*i.bounce))},be=i=>{const r=P.getBoundingClientRect();return{x:i.clientX-r.left-P.clientLeft,y:i.clientY-r.top-P.clientTop}},Oe=i=>{const c=-(F.current.rotate+n.swing),v=1+.07*Math.max(0,n.lift),y=i.x-n.x,T=i.y-n.y;return{x:(Math.cos(c)*y-Math.sin(c)*T)/v,y:(Math.sin(c)*y+Math.cos(c)*T)/v}},ht=i=>{if(!b.mask)return!1;const r=F.current,c=Math.floor((i.x/r.width+.5)*b.maskW),v=Math.floor((i.y/ve()+.5)*b.maskH);return c<0||v<0||c>=b.maskW||v>=b.maskH?!1:b.mask[v*b.maskW+c]>100},at=()=>{const i=F.current,r=oe.size;ge.style.transform=`translate3d(${n.x-r/2}px, ${n.y-r/2}px, 0)`;const c=i.rotate+n.swing,v=1+.07*Math.max(0,n.lift);if(j.style.transform=`translate(-50%, -50%) rotate(${c}rad) scale(${v})`,e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,O.width,O.height),e.clearColor(0,0,0,0),e.clearDepth(1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),!b.ready)return;const y=i.width,T=ve(),K=-Math.sin(n.dir),ie=Math.cos(n.dir),[ye,L]=E(K,ie),q=Ne(n.peel,0,1),tt=ye+q*(L-ye),Re=Math.max(0,n.lift),De=r/2,we=je*je*6,Ve=q>.001;e.useProgram(Se.program),e.bindVertexArray(Ue),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,me),e.uniform1i(A.uImage,0),e.uniform2f(A.uCanvas,r,r),e.uniform2f(A.uMesh,y*b.meshX,T*b.meshY),e.uniform2f(A.uCenter,De,De),e.uniform2f(A.uDir,K,ie),e.uniform1f(A.uFold,tt),e.uniform1f(A.uRadius,i.curlRadius),e.uniform1f(A.uAngle,c),e.uniform1f(A.uScale,v),e.uniform1f(A.uLift,Re*26),e.uniform2f(A.uShadowOffset,1.2,2.4),e.uniform2f(A.uShadowSlope,.28,.55),e.uniform1i(A.uFinish,i.finish),e.uniform3fv(A.uBack,Z(i.backColor)),e.uniform3f(A.uLight,n.light.x-(n.x-De),n.light.y-(n.y-De),n.light.z),e.uniform1f(A.uShine,i.lighting),e.uniform1f(A.uShadow,i.shadow*.55),e.uniform1f(A.uTexel,b.texel/(y*b.meshX)),e.uniform1f(A.uLod,Math.max(0,Math.log2(b.texel/(y*b.meshX*v*oe.ratio))));const X=Oe(n.light);if(e.uniform2f(A.uGlint,X.x/(y*b.meshX)+.5,X.y/(T*b.meshY)+.5),e.disable(e.DEPTH_TEST),Ve){Le();const[$,Ee]=Ce;e.bindFramebuffer(e.FRAMEBUFFER,$.buffer),e.viewport(0,0,$.width,$.height),e.clear(e.COLOR_BUFFER_BIT),e.disable(e.BLEND),e.uniform1i(A.uPass,2),e.drawElements(e.TRIANGLES,we,e.UNSIGNED_SHORT,0),e.useProgram(ue.program),e.uniform1i(W.uSource,1),e.uniform1i(W.uMode,0),e.uniform1f(W.uSigma,Math.min(4,(2.5+i.curlRadius*.15)/2)),e.activeTexture(e.TEXTURE1),e.bindFramebuffer(e.FRAMEBUFFER,Ee.buffer),e.bindTexture(e.TEXTURE_2D,$.texture),e.uniform2f(W.uStep,1/$.width,0),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,$.buffer),e.bindTexture(e.TEXTURE_2D,Ee.texture),e.uniform2f(W.uStep,0,1/$.height),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,O.width,O.height),e.useProgram(Se.program),e.activeTexture(e.TEXTURE0)}e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.uniform1i(A.uPass,0),e.drawElements(e.TRIANGLES,we,e.UNSIGNED_SHORT,0),e.uniform1i(A.uPass,1),e.drawElements(e.TRIANGLES,we,e.UNSIGNED_SHORT,0),Ve&&(e.useProgram(ue.program),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Ce[0].texture),e.uniform1i(W.uMode,1),e.uniform1f(W.uStrength,i.shadow*.6),e.drawArrays(e.TRIANGLES,0,3),e.useProgram(Se.program),e.activeTexture(e.TEXTURE0),e.enable(e.DEPTH_TEST),e.depthFunc(e.LESS),e.uniform1i(A.uPass,3),e.drawElements(e.TRIANGLES,we,e.UNSIGNED_SHORT,0),e.disable(e.DEPTH_TEST))},He=i=>{if(ze=0,!Fe||document.hidden)return;const r=F.current,c=Me?Ne((i-Me)/1e3,.001,1/30):1/60;Me=i,r.imageSrc!==Be&&M(r.imageSrc);const v=ve();n.intro<1&&b.ready&&(n.intro=Math.min(1,n.intro+c/1.1));const y=n.press,T=y&&y.moving?y:null;if(T){const Re=T.pointer,De=T.pivot,we=1-Math.exp(-c/.045),Ve=n.pivotV.x+((Re.x-De.x)/c-n.pivotV.x)*we,X=n.pivotV.y+((Re.y-De.y)/c-n.pivotV.y)*we,$=(Ve-n.pivotV.x)/c,Ee=(X-n.pivotV.y)/c;n.pivotV.x=Ve,n.pivotV.y=X,T.pivot={x:Re.x,y:Re.y};const rt=r.rotate+n.swing,xt=-(Math.cos(rt)*T.grab.x-Math.sin(rt)*T.grab.y),pt=-(Math.sin(rt)*T.grab.x+Math.cos(rt)*T.grab.y),gs=(r.width*r.width+v*v)/12+xt*xt+pt*pt,vs=(xt*-Ne(Ee,-24e3,24e3)-pt*-Ne($,-24e3,24e3))/gs,gt=2*Math.PI*1.5;n.swingV+=(vs*1.1*r.swing-gt*gt*n.swing-2*.45*gt*n.swingV)*c,n.swing=Ne(n.swing+n.swingV*c,-1.2,1.2);const ot=r.rotate+n.swing,kt=1+.07*Math.max(0,n.lift);n.x=Re.x-(Math.cos(ot)*T.grab.x-Math.sin(ot)*T.grab.y)*kt,n.y=Re.y-(Math.sin(ot)*T.grab.x+Math.cos(ot)*T.grab.y)*kt,pe()}else{At(n,"swing",0,1.4,.32,c);const Re=Math.exp(-c*(1.5+9*r.friction));n.vx*=Re,n.vy*=Re,Math.hypot(n.vx,n.vy)<4&&(n.vx=0,n.vy=0),n.x+=n.vx*c,n.y+=n.vy*c,pe()}const K=n.intro<.2,ie=K?.3:y?r.activePeel:n.hover?r.hoverPeel:0;At(n,"peel",ie,y||n.hover?3:3.6,y||n.hover?.7:.62,c),At(n,"lift",T?1:0,3.2,.55,c);let ye=r.peelDirection;y&&Math.hypot(y.grab.x,y.grab.y)>Math.min(r.width,v)*.12?ye=Math.atan2(y.grab.x,-y.grab.y):r.followPointer&&n.hover&&Math.hypot(n.local.x,n.local.y)>Math.min(r.width,v)*.12&&(ye=Math.atan2(n.local.x,-n.local.y)),K||(n.dir+=as(ye-n.dir)*(1-Math.exp(-c/.12)));const L=n.pointer.inside?{x:n.pointer.x,y:n.pointer.y,z:ft}:{x:n.x-r.width*.45,y:n.y-v*.9,z:ft*1.6},q=1-Math.exp(-c/.08);n.light.x+=(L.x-n.light.x)*q,n.light.y+=(L.y-n.light.y)*q,n.light.z+=(L.z-n.light.z)*q,O.style.opacity=String(Ne(n.intro/.12,0,1)),at(),n.intro<1&&b.ready||y||Math.abs(n.peel-ie)>5e-4||Math.abs(n.peelV)>5e-4||Math.abs(n.lift-(T?1:0))>5e-4||Math.abs(n.liftV)>5e-4||Math.abs(n.swing)>5e-4||Math.abs(n.swingV)>5e-4||n.vx!==0||n.vy!==0||Math.abs(as(ye-n.dir))>.002||Math.hypot(L.x-n.light.x,L.y-n.light.y,L.z-n.light.z)>.5?ze=requestAnimationFrame(He):Me=0};function Te(){!ze&&Fe&&!document.hidden&&(ze=requestAnimationFrame(He))}const Ye=i=>{const r=be(i);n.local=Oe(r);const c=ht(n.local);c!==n.hover&&(n.hover=c),j.style.cursor=c&&F.current.draggable?n.press?"grabbing":"grab":""},Je=i=>{const r=be(i);n.pointer.x=r.x,n.pointer.y=r.y,n.pointer.inside=r.x>=0&&r.y>=0&&r.x<=xe.width&&r.y<=xe.height,Te()},Qe=i=>{var c,v;const r=n.press;if(!r)Ye(i);else if(r.id===i.pointerId){const y=be(i);r.pointer=y,!r.moving&&Math.hypot(y.x-r.origin.x,y.y-r.origin.y)>3&&(r.moving=F.current.draggable,r.moving&&((v=(c=F.current).onDragStart)==null||v.call(c))),r.samples.push({x:y.x,y:y.y,t:performance.now()}),r.samples.length>8&&r.samples.shift()}Te()},Ze=()=>{n.press||(n.hover=!1,j.style.cursor="",Te())},et=i=>{var v;const r=F.current;if(i.button!==0||!b.ready||(Ye(i),!n.hover))return;const c=be(i);n.press={id:i.pointerId,grab:Oe(c),origin:c,pointer:c,pivot:c,moving:!1,samples:[]},n.pivotV={x:0,y:0},n.vx=0,n.vy=0,(v=j.setPointerCapture)==null||v.call(j,i.pointerId),r.draggable&&(j.style.cursor="grabbing",ns+=1,ge.style.zIndex=String(ns)),i.preventDefault(),Te()},qe=i=>{var y,T,K;const r=n.press;if(!r||r.id!==i.pointerId)return;n.press=null,(y=j.hasPointerCapture)!=null&&y.call(j,i.pointerId)&&j.releasePointerCapture(i.pointerId);const c=performance.now(),v=r.samples.filter(ie=>c-ie.t<90);if(r.moving&&v.length>1&&!re){const ie=v[0],ye=v[v.length-1],L=Math.max(ye.t-ie.t,16)/1e3,q=2600;n.vx=Ne((ye.x-ie.x)/L,-q,q),n.vy=Ne((ye.y-ie.y)/L,-q,q)}Ye(i),i.pointerType!=="mouse"&&(n.hover=!1),r.moving&&((K=(T=F.current).onDragEnd)==null||K.call(T)),Te()},g=()=>{n.pointer.inside=!1,Te()},x=()=>{Me=0,Te()},u=new ResizeObserver(()=>{H(),Te()});u.observe(P);const S=new IntersectionObserver(i=>{Fe=i.some(r=>r.isIntersecting),Fe&&(Me=0,Te())});return S.observe(P),window.addEventListener("pointermove",Je,{passive:!0}),document.documentElement.addEventListener("pointerleave",g),document.addEventListener("visibilitychange",x),j.addEventListener("pointermove",Qe),j.addEventListener("pointerleave",Ze),j.addEventListener("pointerdown",et),j.addEventListener("pointerup",qe),j.addEventListener("pointercancel",qe),M(F.current.imageSrc),H(),ne.current=()=>{H(),Te()},Te(),()=>{var i;Ge=!1,cancelAnimationFrame(ze),ne.current=null,u.disconnect(),S.disconnect(),window.removeEventListener("pointermove",Je),document.documentElement.removeEventListener("pointerleave",g),document.removeEventListener("visibilitychange",x),j.removeEventListener("pointermove",Qe),j.removeEventListener("pointerleave",Ze),j.removeEventListener("pointerdown",et),j.removeEventListener("pointerup",qe),j.removeEventListener("pointercancel",qe),e.deleteTexture(me),Ce.forEach(r=>{e.deleteTexture(r.texture),e.deleteFramebuffer(r.buffer)}),e.deleteProgram(ue.program),e.deleteBuffer(We),e.deleteBuffer(_e),e.deleteVertexArray(Ue),e.deleteProgram(Se.program),(i=e.getExtension("WEBGL_lose_context"))==null||i.loseContext()}},[]),h.useEffect(()=>{var ge;(ge=ne.current)==null||ge.call(ne)}),t.jsxs("div",{ref:_,className:`sticker-peel${J?` ${J}`:""}`,style:te,...se,children:[t.jsx("canvas",{ref:k,className:"sticker-peel-canvas","aria-hidden":"true"}),t.jsx("div",{ref:ce,className:"sticker-peel-hit"})]})},Sn=[{name:"Govt. Recognized",desc:"Authorized vocational board",icon:fs},{name:"ISO 9001:2015",desc:"Certified quality standards",icon:Ms},{name:"Skill India",desc:"Kaushal Bharat certified",image:"/assets/recognition/skill-india.png"},{name:"Ministry of MSME",desc:"Govt. of India registered",image:"/assets/recognition/msme.png"},{name:"Digital India",desc:"Power to empower initiatives",image:"/assets/recognition/digital-india.png"}],ls=[{title:"Data and AI",desc:"Data science, analytics, machine learning, generative AI, and advanced Excel modeling.",icon:As,color:"bg-blue-50 text-primary border-blue-200/60",count:"3 courses",link:"/courses?category=Data and AI"},{title:"Digital marketing",desc:"SEO, social media, Google Ads, content marketing, reputation, and AI ad suites.",icon:Cs,color:"bg-emerald-50 text-emerald-600 border-emerald-200/60",count:"2 courses",link:"/courses?category=Digital marketing"},{title:"Web and software",desc:"Full stack web development, Android, Java, PHP, MySQL, C/C++, and software engineering.",icon:Ls,color:"bg-indigo-50 text-indigo-600 border-indigo-200/60",count:"3 courses",link:"/courses?category=Web and software"},{title:"Design and video",desc:"Graphic design, UI/UX with Figma, video editing with Premiere Pro, and After Effects VFX.",icon:_s,color:"bg-rose-50 text-rose-600 border-rose-200/60",count:"4 courses",link:"/courses?category=Design and video"},{title:"Office and accounts",desc:"Digital office automation, Tally Prime with GST, taxation diplomas, and DCA programs.",icon:ks,color:"bg-amber-50 text-amber-600 border-amber-200/60",count:"5 courses",link:"/courses?category=Office and accounts"},{title:"Cyber security",desc:"Ethical hacking, network defense, footprinting, system auditing, and security protocols.",icon:Ps,color:"bg-cyan-50 text-cyan-600 border-cyan-200/60",count:"1 course",link:"/courses?category=Cyber security"}],Mn=[{num:"01",title:"Industrial faculties",desc:"Learn directly from practicing IT professionals who bring real-world architecture into class.",icon:Is,tag:"Direct Mentorship"},{num:"02",title:"Quality teaching",desc:"Rigorous step-by-step pedagogy emphasizing practical problem solving over passive lectures.",icon:us,tag:"Hands-on Labs"},{num:"03",title:"100% job assistance",desc:"Dedicated career guidance, resume building, mock interviews, and direct referral drives.",icon:Fs,tag:"Placement Cell"},{num:"04",title:"Flexible timing",desc:"Morning, afternoon, evening, and weekend slots suited for students and working professionals.",icon:Us,tag:"Flexible Slots"},{num:"05",title:"Extra practice hour",desc:"Unlimited lab access beyond standard lecture hours to practice code, models, and designs.",icon:fs,tag:"Free Lab Hours"},{num:"06",title:"Small batch",desc:"Strictly limited student numbers per batch ensuring personal attention and one-on-one code reviews.",icon:Ds,tag:"Personalized Focus"}],cs=[{name:"Python",cat:"Data & Dev"},{name:"Power BI",cat:"Analytics"},{name:"Tableau",cat:"Analytics"},{name:"SQL",cat:"Database"},{name:"Excel",cat:"Analytics"},{name:"Tally Prime",cat:"Finance"},{name:"Photoshop",cat:"Design"},{name:"Premiere Pro",cat:"Video"},{name:"After Effects",cat:"VFX"},{name:"Figma",cat:"UI/UX"},{name:"WordPress",cat:"Web"},{name:"Java",cat:"Backend"}];function Dn(){const s=ds(),l=Hs.map(a=>t.jsxs("div",{className:"w-full h-full bg-surface border border-line/80 rounded-card p-6 sm:p-7 flex flex-col justify-between shadow-card text-left select-none",children:[t.jsx("div",{className:"space-y-3",children:t.jsxs("p",{className:"text-deep text-xs sm:text-sm sm:text-[14px] leading-relaxed line-clamp-4 italic",children:["“",a.quote,"”"]})}),t.jsxs("div",{className:"flex items-center gap-3 pt-3.5 border-t border-line/50",children:[t.jsx("img",{src:a.image,alt:a.name,className:"w-10 h-10 rounded-full object-cover border border-line/80 shadow-sm",loading:"lazy"}),t.jsxs("div",{className:"min-w-0",children:[t.jsx("p",{className:"text-sm font-bold text-deep truncate",children:a.name}),t.jsx("p",{className:"text-xs text-muted truncate",children:"Infodesk student"})]})]})]},a.id));return t.jsxs("div",{className:"space-y-24 sm:space-y-32 w-full overflow-x-clip",children:[t.jsxs("section",{className:"relative pt-8 sm:pt-16 pb-12 overflow-x-clip w-full",children:[$e.heroBackground&&!s?t.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-25 sm:opacity-35 -z-10 overflow-hidden select-none",children:t.jsx(yt,{className:"pointer-events-none select-none",isCanvasOrWebGL:!0,fallback:t.jsx("div",{className:"w-full h-full bg-grid-dots opacity-40 pointer-events-none"}),children:t.jsx(Zt,{shape:"horizon",colors:["#1e3fd8","#f6f8ff","#a5d8ff","#38bdf8"],characters:" =+xX0S8#@",cellSize:18,density:.8,speed:.5,glyphOpacity:.4,className:"w-full h-full pointer-events-none"})})}):t.jsx("div",{className:"absolute inset-0 bg-grid-dots opacity-40 -z-10 pointer-events-none"}),t.jsx("div",{className:"w-full max-w-content mx-auto px-4 sm:px-6",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center",children:[t.jsxs("div",{className:"lg:col-span-7 min-w-0 space-y-6 text-left",children:[t.jsx("div",{className:"flex items-center gap-3",children:t.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-line/90 shadow-sm text-xs font-semibold text-deep",children:[t.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot inline-block"}),t.jsx("span",{children:"Govt. Recognized · ISO 9001:2015 certified board"})]})}),t.jsxs("h1",{"aria-label":"Learn data, design, marketing, web and accounts skills Mumbai's teams hire for.",className:"text-3xl sm:text-5xl lg:text-7xl font-bold text-deep tracking-tight leading-[1.08] break-words",children:[t.jsx("span",{children:"Learn "}),$e.rotatingText&&!s?t.jsx("span",{className:"inline-block min-w-[9ch] text-left align-baseline","aria-hidden":"true",children:t.jsx(ps,{texts:["data","design","marketing","web","accounts"],mainClassName:"inline-flex text-primary font-bold",rotationInterval:2400,staggerDuration:.03})}):t.jsx("span",{className:"text-primary font-bold",children:"data"})," ",t.jsx("br",{className:"sm:hidden"}),"skills Mumbai's teams ",t.jsx("br",{className:"sm:hidden"})," hire for."]}),t.jsx("p",{className:"text-muted text-base sm:text-lg sm:text-[19px] leading-relaxed max-w-xl",children:"Industry-led courses in data, digital marketing, web development, design and accounting, taught in small batches at four Mumbai branches."}),t.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2",children:[t.jsx(zt,{as:"div",color:"#4a6df0",trailColor:"#2448c9",radius:9999,theme:"light",className:"!p-0 !bg-transparent !border-0 inline-block rounded-full shadow-button",children:t.jsx(lt,{to:"/courses",size:"lg",variant:"primary",magnet:!0,children:"Explore courses"})}),t.jsx(lt,{to:"/contact",size:"lg",variant:"ghost",children:"Book a free demo"})]}),t.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-2 text-xs text-muted",children:[t.jsxs("span",{className:"font-semibold text-deep flex items-center gap-1",children:[t.jsx(Ss,{size:13,className:"text-primary"}),t.jsx("span",{children:"4 Mumbai Branches:"})]}),t.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Goregaon West"}),t.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Behram Baug"}),t.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Jogeshwari West"}),t.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Motilal Nagar"})]})]}),t.jsxs("div",{className:"lg:col-span-5 flex justify-center relative",children:[t.jsx(en,{}),$e.stickerPeel&&t.jsx("div",{className:"absolute -top-6 -right-6 hidden sm:block w-28 h-28 pointer-events-auto z-20",children:t.jsx(yt,{isCanvasOrWebGL:!0,fallback:t.jsx("div",{className:"w-24 h-24 rounded-[22px] bg-surface/95 backdrop-blur border border-line/80 shadow-md p-2 hover:rotate-3 transition-transform flex items-center justify-center",children:t.jsx("img",{src:"/assets/recognition/job-assistance-badge.png",alt:"100% job assistance",className:"w-full h-full object-contain"})}),children:t.jsx(Nn,{imageSrc:"/assets/recognition/job-assistance-badge.png",width:100,peelDirection:45,peelBackHoverPct:35,peelBackActivePct:50,finish:"gloss",draggable:!1,className:"cursor-pointer"})})})]})]})})]}),t.jsx("section",{className:"bg-soft/70 border-y border-line/70 py-8 sm:py-10",children:t.jsx("div",{className:"max-w-content mx-auto px-6",children:t.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center",children:[t.jsxs("div",{className:"p-3",children:[t.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-deep font-display tracking-tight flex items-center justify-center",children:$e.countUp&&!s?t.jsx(ct,{to:Ft.length,duration:1.6}):Ft.length}),t.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Mumbai branches"})]}),t.jsxs("div",{className:"p-3",children:[t.jsxs("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display tracking-tight flex items-center justify-center",children:[$e.countUp&&!s?t.jsx(ct,{to:Gt.length,duration:1.8}):Gt.length,t.jsx("span",{children:"+"})]}),t.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Industry courses"})]}),t.jsxs("div",{className:"p-3",children:[t.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-deep font-display tracking-tight flex items-center justify-center",children:$e.countUp&&!s?t.jsx(ct,{to:100,duration:2,suffix:"%"}):"100%"}),t.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Job assistance"})]}),t.jsxs("div",{className:"p-3",children:[t.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display tracking-tight flex items-center justify-center",children:$e.countUp&&!s?t.jsx(ct,{to:6,duration:1.5}):6}),t.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Educational pillars"})]})]})})}),t.jsx("section",{className:"max-w-content mx-auto px-6",children:t.jsx(Ke,{children:t.jsxs("div",{className:"bg-surface border border-line/80 rounded-panel p-6 sm:p-8 shadow-card",children:[t.jsx("p",{className:"text-center text-xs font-bold uppercase tracking-wider text-muted mb-6",children:"Recognized and certified for vocational excellence"}),t.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center",children:Sn.map(a=>t.jsxs("div",{className:"p-4 text-center rounded-2xl bg-background border border-line/70 hover:border-primary/40 hover:shadow-sm transition-all duration-300 flex flex-col items-center justify-center min-h-[105px] group",children:[a.image?t.jsx("img",{src:a.image,alt:a.name,className:"h-9 w-auto object-contain mb-2 group-hover:scale-105 transition-transform",loading:"lazy"}):a.icon?t.jsx("div",{className:"w-8 h-8 rounded-full bg-soft text-primary flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform",children:t.jsx(a.icon,{size:18})}):null,t.jsx("p",{className:"text-xs sm:text-sm font-bold text-deep leading-tight",children:a.name}),t.jsx("p",{className:"text-[11px] text-muted mt-0.5",children:a.desc})]},a.name))})]})})}),t.jsx("section",{className:"max-w-content mx-auto px-6",children:t.jsx(Ke,{children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[t.jsxs("div",{className:"lg:col-span-5 space-y-6 text-left",children:[t.jsx("h2",{className:"text-[clamp(32px,4.4vw,52px)] font-bold text-deep tracking-tight leading-tight",children:"Pick your track."}),t.jsx("p",{className:"text-muted text-base sm:text-lg leading-relaxed",children:"Explore specialized technology tracks designed around real job requirements, hands-on lab projects, and direct Mumbai recruitment drives."}),t.jsx("div",{className:"pt-2",children:t.jsx(lt,{to:"/courses",size:"lg",variant:"primary",children:"Explore courses"})})]}),t.jsx("div",{className:"lg:col-span-7 flex justify-center",children:$e.cardSwap&&!s?t.jsx("div",{className:"relative w-full max-w-[480px] h-[340px] sm:h-[380px] flex items-center justify-center",children:t.jsx(Gs,{width:400,height:260,cardRadius:22,visibleCards:4,theme:"light",autoplay:!0,pauseOnHover:!0,delay:3500,className:"w-full h-full",children:ls.map(a=>{const o=a.icon;return t.jsx(Xs,{children:t.jsxs("div",{className:"w-full h-full p-6 sm:p-7 flex flex-col justify-between bg-surface rounded-card border border-line/90 shadow-card text-left select-none",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("div",{className:`w-11 h-11 rounded-xl ${a.color} border flex items-center justify-center shadow-sm`,children:t.jsx(o,{size:22})}),t.jsx("span",{className:"text-xs font-semibold px-2.5 py-0.5 rounded-full bg-background border border-line/70 text-muted",children:a.count})]}),t.jsx("h3",{className:"text-xl font-bold text-deep mb-2",children:a.title}),t.jsx("p",{className:"text-xs sm:text-sm text-muted leading-relaxed line-clamp-3",children:a.desc})]}),t.jsx("div",{className:"pt-4 border-t border-line/50 flex items-center justify-between text-xs font-semibold text-primary",children:t.jsxs(it,{to:a.link,className:"hover:underline flex items-center gap-1",children:[t.jsx("span",{children:"Browse track"}),t.jsx(Dt,{size:14})]})})]})},a.title)})})}):t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full",children:ls.map(a=>{const o=a.icon;return t.jsx(it,{to:a.link,className:"bg-surface border border-line/80 rounded-card p-5 shadow-card hover:border-primary/40 transition-all flex flex-col justify-between",children:t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-3",children:[t.jsx("div",{className:`w-9 h-9 rounded-lg ${a.color} border flex items-center justify-center`,children:t.jsx(o,{size:18})}),t.jsx("span",{className:"text-xs text-muted font-medium",children:a.count})]}),t.jsx("h3",{className:"text-base font-bold text-deep",children:a.title}),t.jsx("p",{className:"text-xs text-muted mt-1 line-clamp-2",children:a.desc})]})},a.title)})})})]})})}),t.jsx("section",{className:"max-w-content mx-auto px-6",children:t.jsxs(Ke,{children:[t.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-14",children:[t.jsx("h2",{className:"text-[clamp(32px,4.4vw,52px)] font-bold text-deep",children:"Why Infodesk."}),t.jsx("p",{className:"text-muted text-base sm:text-lg mt-3",children:"Six foundational pillars taken directly from our educational charter to ensure every student succeeds."})]}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:Mn.map(a=>{const o=a.icon;return t.jsxs(Bs,{spotlightColor:"rgba(36, 72, 201, 0.16)",shape:"circle",intensity:.22,theme:"light",className:"!bg-surface !rounded-card p-6 transition-all duration-300",children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-xl bg-soft text-primary flex items-center justify-center shadow-sm",children:t.jsx(o,{size:20})}),t.jsx("span",{className:"font-mono text-xs font-bold text-muted/60 bg-background px-2 py-0.5 rounded-md border border-line/50",children:a.num})]}),t.jsx("div",{className:"flex items-center gap-2 mb-1.5",children:t.jsx("h3",{className:"text-lg font-bold text-deep",children:a.title})}),t.jsx("p",{className:"text-muted text-sm leading-relaxed mb-4",children:a.desc}),t.jsx("div",{className:"pt-3 border-t border-line/40",children:t.jsx("span",{className:"inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-soft/60 text-deep",children:a.tag})})]},a.title)})})]})}),t.jsx("section",{className:"max-w-content mx-auto px-6",children:t.jsxs(Ke,{children:[t.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-10",children:[t.jsx("h2",{className:"text-[clamp(32px,4.4vw,52px)] font-bold text-deep",children:"Student voices."}),t.jsx("p",{className:"text-muted text-base sm:text-lg mt-3",children:"Hear verified feedback from students who transformed their technical careers through our Mumbai batches."})]}),t.jsx("div",{className:"w-full max-w-lg h-[340px] sm:h-[360px] mx-auto relative",children:t.jsx(Os,{cards:l,layout:"fan",visible:4,spread:.3,depth:.4,radius:22,sendToBackOnClick:!0,autoplay:!s,autoplayDelay:4500,pauseOnHover:!0})}),t.jsx("div",{className:"text-center mt-8",children:t.jsxs(it,{to:"/placements",className:"inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-bright transition-colors",children:[t.jsx("span",{children:"Read more placement stories"}),t.jsx(Dt,{size:15})]})})]})}),t.jsx("section",{className:"max-w-content mx-auto px-6",children:t.jsx(Ke,{children:t.jsxs("div",{className:"bg-[#101f5c] text-white rounded-band p-8 sm:p-14 shadow-signature overflow-hidden relative",children:[t.jsx("div",{className:"absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-bright/20 blur-3xl pointer-events-none"}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10",children:[t.jsxs("div",{className:"lg:col-span-7 space-y-5",children:[t.jsxs("span",{className:"inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/95 border border-white/20",children:[t.jsx(zs,{size:13,className:"text-amber-400 fill-amber-400"}),t.jsx("span",{children:"National Institutional Honor"})]}),t.jsx("h2",{className:"text-[clamp(28px,3.8vw,44px)] font-bold text-white tracking-tight leading-tight",children:"India's Best Institute award, honored by Ashneer Grover."}),t.jsx("p",{className:"text-white/80 text-base leading-relaxed max-w-xl",children:"Our institution was recognized nationally for educational excellence and quality career training, with the prestigious award presented personally by entrepreneur Ashneer Grover."}),t.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-4",children:[t.jsx(lt,{to:"/about",size:"md",variant:"white",children:"Read the award story"}),t.jsx("span",{className:"text-xs text-white/60 font-mono",children:"Official ceremony · Delhi, India"})]})]}),t.jsxs("div",{className:"lg:col-span-5 grid grid-cols-2 gap-3.5",children:[t.jsx("div",{className:"rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/20 group",children:t.jsx("img",{src:"/assets/awards/ashneer-award-main.jpg",alt:"Ashneer Grover presenting India's Best Institute award to Infodesk Computer Education",className:"w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500",loading:"lazy"})}),t.jsx("div",{className:"rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/20 group",children:t.jsx("img",{src:"/assets/awards/ashneer-award-1.jpg",alt:"Infodesk team on stage at national award ceremony",className:"w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500",loading:"lazy"})})]})]})]})})}),t.jsxs("section",{className:"w-full max-w-full overflow-hidden py-8 border-y border-line/60 bg-surface",children:[t.jsx("div",{className:"max-w-content mx-auto px-4 sm:px-6 mb-4 text-center",children:t.jsx("p",{className:"text-xs uppercase font-bold tracking-wider text-muted",children:"Industry tools and technologies taught in our labs"})}),s?t.jsx("div",{className:"max-w-content mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-3",children:cs.map(a=>t.jsxs("span",{className:"inline-flex items-center gap-2 text-sm font-semibold text-deep px-4 py-2 rounded-full bg-soft border border-primary/20 shadow-sm",children:[t.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-primary inline-block"}),t.jsx("span",{children:a.name}),t.jsx("span",{className:"text-[10px] text-muted font-normal bg-white/60 px-1.5 py-0.5 rounded",children:a.cat})]},a.name))}):t.jsx("div",{className:"w-full max-w-full overflow-hidden py-1",children:t.jsx($s,{logos:cs,ariaLabel:"Industry tools and technologies",speed:60,direction:"left",gap:24,pauseOnHover:!0,fadeOut:!0,fadeOutWidth:.12,renderItem:a=>t.jsxs("span",{className:"inline-flex items-center gap-2 text-sm font-semibold text-deep px-4 py-2 rounded-full bg-soft border border-primary/25 shadow-sm transition-transform hover:scale-105 select-none",children:[t.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-primary inline-block"}),t.jsx("span",{children:a.name}),t.jsx("span",{className:"text-[10px] text-muted font-normal bg-white/70 px-1.5 py-0.5 rounded",children:a.cat})]},a.name)})})]}),t.jsx("section",{className:"max-w-content mx-auto px-6",children:t.jsx(Ke,{children:t.jsxs("div",{className:"bg-deep rounded-band p-8 sm:p-14 text-center text-white space-y-6 shadow-signature relative overflow-hidden",children:[$e.homeClosingBanner&&!s&&t.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-30 z-0 overflow-hidden",children:t.jsx(yt,{isCanvasOrWebGL:!0,fallback:t.jsx("div",{className:"w-full h-full bg-deep"}),children:t.jsx(Zt,{shape:"rise",cellSize:16,density:.6,glyphOpacity:.6,colors:["#10173a","#13266f","#2448c9","#4a6df0"],characters:" =+xX0S8#@",speed:.4,mouseInteraction:!1,className:"w-full h-full"})})}),t.jsxs("div",{className:"relative z-10 space-y-6",children:[t.jsx("h2",{className:"text-[clamp(30px,4.2vw,48px)] font-bold text-white tracking-tight",children:"Try a free demo class."}),t.jsx("p",{className:"text-white/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed",children:"Experience our teaching firsthand before enrolling. Visit any of our four Mumbai branches or attend a preview session with our faculty."}),t.jsx("div",{className:"pt-2 flex justify-center",children:t.jsx(zt,{as:it,to:"/contact",backgroundColor:"#f6f5f1",textColor:"#13266f",color:"#4a6df0",trailColor:"#a5d8ff",radius:999,duration:5,glow:.6,className:"inline-flex items-center justify-center font-bold text-sm sm:text-base px-8 py-3.5 min-h-[48px] rounded-full shadow-lg hover:shadow-xl transition-all",children:"Book your demo"})})]})]})})})]})}export{Dn as default};
