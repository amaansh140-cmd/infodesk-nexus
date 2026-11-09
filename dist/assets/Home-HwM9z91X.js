import{A as Gt,j as n,U as Mt,W as Ln,u as wn,m as Ot,T as Ae,K as Ve}from"./vendor-motion-CI9qmr4c.js";import{r as m,L as ht}from"./vendor-react-D5v3yjYH.js";import{M as Ut,u as Xt,a as Dt,P as kn,b as _n,L as In,c as Pn,d as En,m as ot,e as et,B as pt,f as Bt}from"./index-Dr3MRmFN.js";import{T as Fn,d as Ht,S as Tn,e as Un,f as Rn,g as Dn,D as Xn,G as zn,h as Gn,i as On,j as Bn,L as Hn,A as $t,U as $n,B as Vn,k as qn,l as Yn,m as Wn}from"./vendor-icons-BDXxOG7a.js";import{S as at}from"./ScrollReveal-Cf_0cnTW.js";import{L as jt,S as Vt,C as xt,a as Kn,b as Jn,c as Qn}from"./SpotlightCard-OVtsYP0Q.js";import{t as Zn,L as er}from"./testimonials-B9vbE0ep.js";import{c as qt}from"./courses-CquOJoZ7.js";import"./vendor-gsap-DdEiTQuA.js";function Yt(t,i){if(typeof t=="function")return t(i);t!=null&&(t.current=i)}function tr(...t){return i=>{let s=!1;const o=t.map(h=>{const d=Yt(h,i);return!s&&typeof d=="function"&&(s=!0),d});if(s)return()=>{for(let h=0;h<o.length;h++){const d=o[h];typeof d=="function"?d():Yt(t[h],null)}}}}function nr(...t){return m.useCallback(tr(...t),t)}const Wt=t=>{const{width:i,height:s}=(t==null?void 0:t.getBoundingClientRect())||{};return[i/(t==null?void 0:t.offsetWidth)||1,s/(t==null?void 0:t.offsetHeight)||1]},Mn=t=>{var b;let{left:i,top:s}=t.getBoundingClientRect(),o=t;for(;o=o.parentElement||((b=o.parentNode)==null?void 0:b.host);){const{scrollLeft:y,scrollTop:S}=o;if(y||S){const[X,F]=Wt(o);i+=y*X,s+=S*F}if(getComputedStyle(o).position==="fixed")break}const[h,d]=Wt(t.offsetParent);return[i/h,s/d]};class rr extends m.Component{getSnapshotBeforeUpdate(i){const s=this.props.getElement();if(Mt(s)&&i.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const o=s.offsetParent,h=Mt(o)&&o.offsetWidth||0,d=Mt(o)&&o.offsetHeight||0,b=getComputedStyle(s),y=this.props.sizeRef.current;y.height=parseFloat(b.height),y.width=parseFloat(b.width),y.top=s.offsetTop,y.left=s.offsetLeft,y.right=h-y.width-y.left,y.bottom=d-y.height-y.top,y.direction=b.direction,y.point=Mn(s)}return null}componentDidUpdate(){}render(){return this.props.children}}function sr({children:t,isPresent:i,anchorX:s,anchorY:o,root:h,pop:d,popNode:b}){var ee;const y=m.useId(),S=m.useRef(null),X=m.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:F}=m.useContext(Ut),B=d!==!1?((ee=t.props)==null?void 0:ee.ref)??(t==null?void 0:t.ref):void 0,K=nr(S,B),re=()=>{var Y;return S.current||((Y=b==null?void 0:b.current)==null?void 0:Y.current)},ce=Y=>{const{width:Ee,height:J,top:Q,left:G,right:se,bottom:be,direction:fe}=X.current,P=fe==="rtl",O=s==="left"?P?`right:${se}`:`left:${G}`:P?`left:${G}`:`right:${se}`,me=o==="bottom"?`bottom:${be}`:`top:${Q}`;Y==null||Y.insertRule(`[data-motion-pop-id="${y}"]{position:absolute!important;width:${Ee}px!important;height:${J}px!important;${O}px!important;${me}px!important}`)};return m.useInsertionEffect(()=>{const{width:Y,height:Ee}=X.current,J=re();if(i||d===!1||!J||!Y||!Ee)return;J.dataset.motionPopId=y;const Q=J.ownerDocument,G=Q.createElement("style");F&&(G.nonce=F);const se=h??Q.head;se.appendChild(G),ce(G.sheet);let be=0,fe=0;return Gt.setup(()=>{const[P,O]=Mn(J);be=X.current.point[0]-P,fe=X.current.point[1]-O}),Gt.read(()=>{const{sheet:P}=G;if(!P||!be&&!fe)return;const O=X.current;O.left+=be,O.right-=be,O.top+=fe,O.bottom-=fe,P.deleteRule(0),ce(P)}),()=>{J.removeAttribute("data-motion-pop-id"),se.contains(G)&&se.removeChild(G)}},[i]),n.jsx(rr,{isPresent:i,getElement:re,sizeRef:X,pop:d,children:d===!1?t:m.cloneElement(t,{ref:K})})}const ar=({children:t,initial:i,isPresent:s,onExitComplete:o,custom:h,presenceAffectsLayout:d,mode:b,anchorX:y,anchorY:S,root:X})=>{const F=Xt(or),B=m.useId(),K=m.useRef(),re=m.useRef(s),ce=m.useRef(o);Dt(()=>{re.current=s,ce.current=o});let ee=!0,Y=m.useMemo(()=>(ee=!1,{id:B,initial:i,isPresent:s,custom:h,onExitComplete:Ee=>{F.set(Ee,!0);for(const J of F.values())if(!J)return;o&&o()},register:(Ee,J)=>{var Q,G;return F.set(Ee,!1),J&&((G=(Q=J.parent)==null?void 0:Q.presenceContext)==null?void 0:G.id)!==B&&(K.current=J),()=>{var se;F.delete(Ee),!re.current&&!F.size&&((se=ce.current)==null||se.call(ce))}}}),[s,F,o]);return d&&ee&&(Y={...Y}),m.useMemo(()=>{F.forEach((Ee,J)=>F.set(J,!1))},[s]),m.useEffect(()=>{!s&&!F.size&&o&&o()},[s]),t=n.jsx(sr,{pop:b==="popLayout",isPresent:s,anchorX:y,anchorY:S,root:X,popNode:K,children:t}),n.jsx(kn.Provider,{value:Y,children:t})};function or(){return new Map}const ct=t=>t.key||"";function Kt(t){const i=[];return m.Children.forEach(t,s=>{m.isValidElement(s)&&i.push(s)}),i}const ir=({children:t,custom:i,initial:s=!0,onExitComplete:o,presenceAffectsLayout:h=!0,mode:d="sync",propagate:b=!1,anchorX:y="left",anchorY:S="top",root:X})=>{const[F,B]=_n(b),K=m.useMemo(()=>Kt(t),[t]),re=b&&!F?[]:K.map(ct),ce=m.useRef(!0),ee=Xt(()=>new Map),Y=m.useRef(new Set),[Ee,J]=m.useState(K),[Q,G]=m.useState(K);Dt(()=>{b&&!F&&!Q.length&&(B==null||B())},[F,b,Q.length,B]);const se=m.useRef();m.useEffect(()=>()=>{const P=se.current;se.current=void 0,P==null||P()},[Q]),Dt(()=>{ce.current=!1;for(let P=0;P<Q.length;P++){const O=ct(Q[P]);re.includes(O)?(ee.delete(O),Y.current.delete(O)):ee.get(O)!==!0&&ee.set(O,!1)}},[Q,re.length,re.join("-")]);const be=[];if(K!==Ee){let P=[...K],O=0;for(const me of Q){const he=re.indexOf(ct(me));he===-1?(P.splice(O++,0,me),be.push(me)):O=he+be.length+1}return be.every(me=>ee.get(ct(me)))?P=K:d==="wait"&&(P=be),G(Kt(P)),J(K),null}const{forceRender:fe}=m.useContext(In);return n.jsx(n.Fragment,{children:Q.map(P=>{const O=ct(P),me=b&&!F?!1:K===Q||re.includes(O),he=()=>{if(Y.current.has(O))return;if(ee.has(O))Y.current.add(O),ee.set(O,!0);else return;let Ce=!0;ee.forEach(V=>{V||(Ce=!1)}),Ce&&(fe==null||fe(),J([]),b&&(B==null||B()),se.current=o)};return n.jsx(ar,{isPresent:me,initial:!ce.current||s?void 0:!1,custom:i,presenceAffectsLayout:h,mode:d,root:X,onExitComplete:me?void 0:he,anchorX:y,anchorY:S,children:P},O)})})};function cr({children:t,...i}){const s=m.useContext(Ut);i={...s,...i},i.transition=Ln(i.transition,s.transition),i.isStatic=Xt(()=>i.isStatic);const o=m.useMemo(()=>i,[JSON.stringify(i.transition),i.transformPagePoint,i.reducedMotion,i.skipAnimations,i.isValidProp]);return n.jsx(Ut.Provider,{value:o,children:t})}const St=[{id:"science",tabLabel:"Data science",cmdBase:"infodesk $ learn --course",courseName:'"data science"',tools:"Loaded: Python, Scikit-Learn, GenAI, Alteryx, Informatica",duration:"Duration: 12 months comprehensive career program",level:"Status: Certified industrial faculties ✓"},{id:"analytics",tabLabel:"Analytics",cmdBase:"infodesk $ learn --course",courseName:'"data analytics"',tools:"Loaded: Excel, SQL, Python, Pandas, Power BI, Tableau",duration:"Duration: 6 months (hands-on industrial training)",level:"Status: 100% job assistance included ✓"},{id:"web",tabLabel:"Web",cmdBase:"infodesk $ learn --course",courseName:'"full stack web"',tools:"Loaded: HTML5, CSS3, JavaScript, PHP, SQL, WordPress",duration:"Duration: 6 months with real client capstone projects",level:"Status: Flexible small batch timings ✓"},{id:"marketing",tabLabel:"Marketing",cmdBase:"infodesk $ learn --course",courseName:'"digital marketing"',tools:"Loaded: SEO, Google Ads, SMM, Content, AI Tools",duration:"Duration: 6 months plus practical job training",level:"Status: Live ad spend & portfolio reviews ✓"},{id:"design",tabLabel:"Design",cmdBase:"infodesk $ learn --course",courseName:'"design & media"',tools:"Loaded: Photoshop, Illustrator, Figma, Premiere Pro, UI/UX",duration:"Duration: 6 months creative portfolio training",level:"Status: Live client design briefs ✓"}];function lr(){const t=wn(),[i,s]=m.useState(0),o=St[i],h=`${o.cmdBase} ${o.courseName}`,[d,b]=m.useState(h.length),[y,S]=m.useState(!0);m.useEffect(()=>{if(t){b(h.length),S(!0);return}const F=setTimeout(()=>{s(re=>(re+1)%St.length),b(0),S(!1);let B=0;const K=setInterval(()=>{B++,b(B),B>=h.length&&(clearInterval(K),setTimeout(()=>{S(!0)},200))},35)},6e3);return()=>{clearTimeout(F)}},[i,h,t]);const X=h.slice(0,d);return n.jsx("div",{className:"w-full max-w-full sm:max-w-md md:max-w-lg mx-auto md:[perspective:1200px]",children:n.jsxs(Ot.div,{className:"w-full relative bg-[#0b1437] border border-[#213275] rounded-panel p-5 sm:p-7 shadow-[0_22px_50px_-15px_rgba(11,20,55,0.7)] text-left select-none transition-transform duration-500 ease-out md:[transform:rotateY(-5deg)_rotateX(3deg)] md:hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1.02)]",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:[.2,.7,.2,1]},children:[n.jsx("div",{className:"absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-bright to-transparent opacity-40 pointer-events-none"}),n.jsxs("div",{className:"flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-white/10 gap-2",children:[n.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[n.jsx("span",{className:"w-3 h-3 rounded-full bg-[#f87171] inline-block shadow-[0_0_8px_rgba(248,113,113,0.5)]"}),n.jsx("span",{className:"w-3 h-3 rounded-full bg-[#fbbf24] inline-block shadow-[0_0_8px_rgba(251,191,36,0.5)]"}),n.jsx("span",{className:"w-3 h-3 rounded-full bg-[#34d399] inline-block shadow-[0_0_8px_rgba(52,211,153,0.5)]"})]}),n.jsx("div",{className:"flex items-center gap-1 overflow-x-auto py-0.5 scrollbar-none",children:St.map((F,B)=>{const K=B>=3;return n.jsx("button",{type:"button",onClick:()=>{s(B),b(`${F.cmdBase} ${F.courseName}`.length),S(!0)},className:`px-2 py-0.5 rounded text-[11px] font-mono whitespace-nowrap transition-colors ${K?"hidden sm:inline-block":"inline-block"} ${i===B?"bg-bright/20 text-white font-bold border border-bright/40":"text-white/50 hover:text-white/80"}`,children:F.tabLabel},F.id)})}),n.jsxs("div",{className:"hidden min-[480px]:flex items-center gap-1.5 text-[11px] font-mono text-white/50 shrink-0",children:[n.jsx(Fn,{size:12,className:"text-bright"}),n.jsx("span",{children:"infodesk-cli"})]})]}),n.jsxs("div",{className:"font-mono text-xs sm:text-[14px] leading-relaxed space-y-3 min-h-[160px] sm:min-h-[175px]",children:[n.jsxs("div",{className:"text-white/95 font-semibold flex items-center flex-wrap break-all sm:break-normal",children:[n.jsx("span",{className:"text-[#4a6df0] mr-2",children:"infodesk"}),n.jsx("span",{className:"text-white/40 mr-2",children:"$"}),d>11&&n.jsx("span",{className:"text-emerald-400 mr-2",children:"learn"}),d>17&&n.jsx("span",{className:"text-indigo-300 mr-2",children:"--course"}),d>26&&n.jsx("span",{className:"text-amber-300 font-bold",children:X.slice(26)}),n.jsx("span",{className:"inline-block w-2 h-4 ml-1 bg-bright animate-pulse"})]}),y&&n.jsxs(Ot.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.3},className:"space-y-2.5 pt-2 border-t border-white/10",children:[n.jsxs("div",{className:"flex items-start gap-2.5 text-emerald-400",children:[n.jsx(Ht,{size:16,className:"shrink-0 mt-0.5 text-emerald-400"}),n.jsx("span",{className:"text-emerald-300/95 text-xs sm:text-[13px] leading-snug break-words font-medium",children:o.tools})]}),n.jsxs("div",{className:"flex items-start gap-2.5 text-emerald-400",children:[n.jsx(Ht,{size:16,className:"shrink-0 mt-0.5 text-emerald-400"}),n.jsx("span",{className:"text-emerald-300/95 text-xs sm:text-[13px] leading-snug break-words font-medium",children:o.duration})]}),n.jsxs("div",{className:"flex items-center gap-2 text-white/60 text-[11px] sm:text-xs pl-6",children:[n.jsx(Tn,{size:12,className:"text-amber-400"}),n.jsx("span",{children:o.level})]})]})]}),n.jsxs("div",{className:"pt-3 sm:pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/40",children:[n.jsxs("span",{className:"flex items-center gap-1.5",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping"}),n.jsx("span",{children:"small batches • 4 Mumbai branches"})]}),n.jsx("span",{className:"text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30",children:"ready for demo"})]})]})})}const Jt=8,Nt=4,At=24,Qt=1.2,Zt=.7,en=.015,ur=2.4,wt=60,ut=100,dr=16,fr=.78,tn=["#1e3fd8","#f6f8ff","#a5d8ff","#38bdf8"],nn=" =+xX0S8#@",rn='"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',mr={horizon:0,pinch:1,rise:2,eclipse:3},hr={none:0,wave:1,burst:2},pr=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,jn=`
float hash12(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
`,xr=`#version 300 es
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
${jn}
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
}`,Sn=`
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
${jn}
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
`,gr=`#version 300 es
precision highp float;
uniform float uDownscale;
in vec2 vUv;
out vec4 outColor;
${Sn}
void main() {
  outColor = glyphAt(gl_FragCoord.xy * uDownscale);
}`,vr=`#version 300 es
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
}`,br=`#version 300 es
precision highp float;
uniform sampler2D uHalo;
uniform float uGlow;
uniform float uGradient;
uniform float uGrain;
uniform float uFrame;
in vec2 vUv;
out vec4 outColor;
${Sn}
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
}`,qe=(t,i,s)=>Math.min(s,Math.max(i,t)),Ct=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4,yr=([t,i,s])=>{const o=Ct(t),h=Ct(i),d=Ct(s),b=Math.cbrt(.4122214708*o+.5363325363*h+.0514459929*d),y=Math.cbrt(.2119034982*o+.6806995451*h+.1073969566*d),S=Math.cbrt(.0883024619*o+.2817188376*h+.6299787005*d);return[.2104542553*b+.793617785*y-.0040720468*S,1.9779984951*b-2.428592205*y+.4505937099*S,.0259040371*b+.7827717662*y-.808675766*S]},sn=(t,i,s)=>{const o=t.createShader(i);return o?(t.shaderSource(o,s),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(t.deleteShader(o),null)):null},gt=(t,i)=>{const s=sn(t,t.VERTEX_SHADER,pr),o=sn(t,t.FRAGMENT_SHADER,i),h=t.createProgram();if(!s||!o||!h)return null;if(t.attachShader(h,s),t.attachShader(h,o),t.linkProgram(h),t.deleteShader(s),t.deleteShader(o),!t.getProgramParameter(h,t.LINK_STATUS))return t.deleteProgram(h),null;const d={},b=t.getProgramParameter(h,t.ACTIVE_UNIFORMS);for(let y=0;y<b;y++){const S=t.getActiveUniform(h,y);if(!S)continue;const X=S.name.replace(/\[0\]$/,"");d[X]=t.getUniformLocation(h,X)}return{program:h,uniforms:d}},Lt=(t,i)=>({textures:Array.from({length:i},()=>{const o=t.createTexture();return t.bindTexture(t.TEXTURE_2D,o),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),o}),framebuffer:t.createFramebuffer(),width:0,height:0}),kt=(t,i,s,o)=>{i.width===s&&i.height===o||(i.width=s,i.height=o,t.bindFramebuffer(t.FRAMEBUFFER,i.framebuffer),i.textures.forEach((h,d)=>{t.bindTexture(t.TEXTURE_2D,h),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,s,o,0,t.RGBA,t.UNSIGNED_BYTE,null),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+d,t.TEXTURE_2D,h,0)}),t.bindFramebuffer(t.FRAMEBUFFER,null))},an=(t,i,s)=>{const o=[...new Set([...i].filter(F=>F!==`
`&&F!=="\r"))];o.length||o.push(" ");const h=`300 ${Math.round(ut*fr)}px ${s}`,d=Math.min(dr,o.length),b=Math.ceil(o.length/d),y=document.createElement("canvas");y.width=wt*d,y.height=ut*b;const S=y.getContext("2d");S&&(S.font=h,S.textAlign="center",S.textBaseline="middle",S.fillStyle="#fff",o.forEach((F,B)=>{const K=B%d,re=Math.floor(B/d);S.fillText(F,K*wt+wt/2,re*ut+ut/2+3)}));const X=t.createTexture();return t.bindTexture(t.TEXTURE_2D,X),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,t.RGBA,t.UNSIGNED_BYTE,y),t.generateMipmap(t.TEXTURE_2D),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),{texture:X,count:o.length,grid:[d,b]}},on=({colors:t=tn,shape:i="horizon",characters:s=nn,cellSize:o=18,density:h=.8,glyphOpacity:d=.85,glow:b=.2,depthOfField:y=0,flicker:S=.2,softness:X=.5,scale:F=1,flow:B=.5,speed:K=1,gradientOpacity:re=.9,grain:ce=.08,variation:ee=0,mouseInteraction:Y=!0,scrambleRadius:Ee=.1,clickEffect:J="wave",intro:Q=!0,lightMode:G=!1,fontFamily:se=rn,dpr:be,className:fe="",style:P,...O})=>{const me=m.useRef(null),he=m.useRef(null),Ce=m.useRef(null),V=(Array.isArray(t)&&t.length?t:tn).slice(0,Jt),te={colors:V.length>1?V:[V[0],V[0]],shape:mr[i]??0,characters:s||nn,cellSize:qe(o,6,64),density:qe(h,0,1),glyphOpacity:qe(d,0,1),glow:qe(b,0,2),depthOfField:qe(y,0,1),flicker:qe(S,0,1),softness:qe(X,0,1),scale:qe(F,.4,2.5),flow:qe(B,0,2),speed:Math.max(0,K),gradientOpacity:qe(re,0,1),grain:qe(ce,0,.4),variation:Math.max(0,ee),mouseInteraction:Y,scrambleRadius:qe(Ee,.02,.4),clickEffect:hr[J]??1,intro:Q,lightMode:G,fontFamily:se||rn,dpr:be},W=m.useRef(te);return W.current=te,m.useEffect(()=>{var Ze;const I=me.current,U=he.current,e=U==null?void 0:U.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!I||!U||!e)return;const Se=gt(e,xr),Te=gt(e,gr),C=gt(e,vr),q=gt(e,br);if(!Se||!Te||!C||!q)return;const le=e.createVertexArray(),Ne=Lt(e,2),ne=Lt(e,1),Fe=Lt(e,1),pe=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Ge=new Map,Ye=M=>{const w=String(M),g=Ge.get(w);if(g)return g;let D=[0,0,0];if(pe){pe.clearRect(0,0,1,1),pe.fillStyle="#000000",pe.fillStyle=w,pe.fillRect(0,0,1,1);const[k,l,a]=pe.getImageData(0,0,1,1).data;D=[k/255,l/255,a/255]}return Ge.set(w,D),D},Le=((Ze=window.matchMedia)==null?void 0:Ze.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,xe={width:1,height:1,ratio:1},Re=new Float32Array(Jt*3),Oe=new Float32Array(Nt*4),ye=[],Be=new Float32Array(At*4),ge=[],ue={x:0,y:0,inside:!1};let j=null,we="",Me="",r=0,u=0,c=W.current.intro&&!Le?0:1,p=0,T=0,R=0,A=0,x=!0,v=!1;const L=()=>{var g,D;const M=W.current,w=`${M.fontFamily}|${M.characters}`;w===we&&j||(we=w,j&&e.deleteTexture(j.texture),j=an(e,M.characters,M.fontFamily),(D=(g=document.fonts)==null?void 0:g.load)==null||D.call(g,`300 64px ${M.fontFamily}`,M.characters).then(()=>{v||we!==w||(j&&e.deleteTexture(j.texture),j=an(e,M.characters,M.fontFamily),ae())},()=>{}))},z=()=>{const M=W.current,w=M.colors.join(",");w!==Me&&(Me=w,M.colors.forEach((g,D)=>Re.set(yr(Ye(g)),D*3)))},H=(M,w,g)=>{if(!j)return;const D=W.current,k=M.uniforms,l=D.cellSize*xe.ratio,a=l*(wt/ut);e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ne.textures[0]),e.uniform1i(k.uField,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Ne.textures[1]),e.uniform1i(k.uAux,1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,j.texture),e.uniform1i(k.uAtlas,2),e.uniform2f(k.uResolution,w,g),e.uniform2f(k.uCell,a,l),e.uniform2f(k.uOffset,(w-Math.ceil(w/a)*a)/2,(g-Math.ceil(g/l)*l)/2),e.uniform2f(k.uAtlasGrid,j.grid[0],j.grid[1]),e.uniform1f(k.uCount,j.count),e.uniform1f(k.uDensity,D.density),e.uniform1f(k.uOpacity,D.glyphOpacity),e.uniform1f(k.uFlicker,Le?0:D.flicker),e.uniform1f(k.uDepth,D.depthOfField),e.uniform1f(k.uGlyphTime,u),e.uniform1f(k.uSeedValue,D.variation),e.uniform1f(k.uLight,D.lightMode?1:0)},ae=()=>{const M=W.current,w=xe.width/xe.height;L(),z(),e.bindVertexArray(le),e.disable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,Ne.framebuffer),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),e.viewport(0,0,Ne.width,Ne.height),e.useProgram(Se.program);const g=Se.uniforms;e.uniform1f(g.uAspect,w),e.uniform1f(g.uTime,r),e.uniform1i(g.uShape,M.shape),e.uniform3fv(g.uRamp,Re),e.uniform1i(g.uCount,M.colors.length),e.uniform1f(g.uScale,M.scale),e.uniform1f(g.uSoftness,M.softness),e.uniform1f(g.uFlow,M.flow),e.uniform2f(g.uSeed,M.variation*3.17,M.variation*1.91),e.uniform4fv(g.uTrail,Be),e.uniform1f(g.uRadius,M.scrambleRadius),e.uniform4fv(g.uClicks,Oe),e.uniform1i(g.uClickEffect,M.clickEffect),e.uniform1f(g.uIntro,c),e.uniform1f(g.uFrame,p),e.drawArrays(e.TRIANGLES,0,3);const D=M.glow>.001;D&&(e.bindFramebuffer(e.FRAMEBUFFER,ne.framebuffer),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.viewport(0,0,ne.width,ne.height),e.useProgram(Te.program),H(Te,U.width,U.height),e.uniform1f(Te.uniforms.uDownscale,U.width/ne.width),e.drawArrays(e.TRIANGLES,0,3),e.useProgram(C.program),e.activeTexture(e.TEXTURE0),e.uniform1i(C.uniforms.uSource,0),e.bindFramebuffer(e.FRAMEBUFFER,Fe.framebuffer),e.bindTexture(e.TEXTURE_2D,ne.textures[0]),e.uniform2f(C.uniforms.uStep,1/ne.width,0),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,ne.framebuffer),e.bindTexture(e.TEXTURE_2D,Fe.textures[0]),e.uniform2f(C.uniforms.uStep,0,1/ne.height),e.drawArrays(e.TRIANGLES,0,3)),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,U.width,U.height),e.useProgram(q.program),H(q,U.width,U.height);const k=q.uniforms;e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,ne.textures[0]),e.uniform1i(k.uHalo,3),e.uniform1f(k.uGlow,D?M.glow:0),e.uniform1f(k.uGradient,M.gradientOpacity),e.uniform1f(k.uGrain,M.grain),e.uniform1f(k.uFrame,p),e.drawArrays(e.TRIANGLES,0,3)},He=()=>{const M=W.current;xe.width=Math.max(1,I.clientWidth),xe.height=Math.max(1,I.clientHeight),xe.ratio=Math.min(M.dpr||window.devicePixelRatio||1,2),U.width=Math.max(1,Math.round(xe.width*xe.ratio)),U.height=Math.max(1,Math.round(xe.height*xe.ratio)),kt(e,Ne,Math.max(1,Math.round(U.width/2)),Math.max(1,Math.round(U.height/2)));const w=Math.max(1,Math.round(U.width/4)),g=Math.max(1,Math.round(U.height/4));kt(e,ne,w,g),kt(e,Fe,w,g),ae(),ke()},We=M=>{for(ge.forEach(w=>{w.age+=M});ge.length&&ge[ge.length-1].age>Zt;)ge.pop();for(let w=0;w<At;w++){const g=ge[w];if(!g){Be[w*4+2]=0;continue}const D=1-g.age/Zt;Be.set([g.x,g.y,D*D,0],w*4)}for(ye.forEach(w=>{w.age+=M});ye.length&&ye[ye.length-1].age>Qt;)ye.pop();for(let w=0;w<Nt;w++){const g=ye[w];if(!g){Oe[w*4+3]=0;continue}const D=g.age/Qt,k=Math.min(1,g.age/.08)*(1-D)*(1-D);Oe.set([g.x,g.y,g.age,k],w*4)}},rt=M=>{if(R=0,v||!x||document.hidden)return;const w=W.current,g=A?qe((M-A)/1e3,.001,.05):1/60;A=M,Le||(r+=g*w.speed*.5,u+=g*Math.max(w.speed,.15)),c<1&&(c=Math.min(1,c+g/ur)),T+=g,!Le&&T>1/24&&(T=0,p=(p+1)%97),We(g),ae(),!Le||c<1||ye.length>0||ge.length>0?R=requestAnimationFrame(rt):A=0};function ke(){!R&&!v&&x&&!document.hidden&&(R=requestAnimationFrame(rt))}const Z=M=>{const w=I.getBoundingClientRect(),g=(M.clientX-w.left)/Math.max(1,w.width),D=1-(M.clientY-w.top)/Math.max(1,w.height),k=w.width/Math.max(1,w.height);ue.inside=g>=0&&g<=1&&D>=0&&D<=1,ue.x=(g-.5)*k,ue.y=D-.5},Ke=M=>{Z(M);const w=W.current;if(!ue.inside||!w.mouseInteraction||Le)return;const g=ge[0],D=g?Math.hypot(ue.x-g.x,ue.y-g.y):1/0;if(!(D<en)){if(g&&g.age<.1){const k=Math.min(6,Math.floor(D/(en*2)));for(let l=1;l<=k;l++){const a=l/(k+1);ge.unshift({x:g.x+(ue.x-g.x)*a,y:g.y+(ue.y-g.y)*a,age:0})}}ge.unshift({x:ue.x,y:ue.y,age:0}),ge.length=Math.min(ge.length,At),ke()}},$e=M=>{Z(M);const w=W.current;!ue.inside||!w.clickEffect||Le||(ye.unshift({x:ue.x,y:ue.y,age:0}),ye.length>Nt&&ye.pop(),ke())},st=()=>{A=0,ke()},Je=new ResizeObserver(He);Je.observe(I);const tt=new IntersectionObserver(M=>{x=M.some(w=>w.isIntersecting),x&&(A=0,ke())});return tt.observe(I),window.addEventListener("pointermove",Ke,{passive:!0}),window.addEventListener("pointerdown",$e,{passive:!0}),document.addEventListener("visibilitychange",st),He(),Ce.current=ke,()=>{var M;v=!0,cancelAnimationFrame(R),Ce.current=null,Je.disconnect(),tt.disconnect(),window.removeEventListener("pointermove",Ke),window.removeEventListener("pointerdown",$e),document.removeEventListener("visibilitychange",st),[Ne,ne,Fe].forEach(w=>{w.textures.forEach(g=>e.deleteTexture(g)),e.deleteFramebuffer(w.framebuffer)}),j&&e.deleteTexture(j.texture),e.deleteVertexArray(le),[Se,Te,C,q].forEach(w=>e.deleteProgram(w.program)),(M=e.getExtension("WEBGL_lose_context"))==null||M.loseContext()}},[]),m.useEffect(()=>{var I;(I=Ce.current)==null||I.call(Ce)}),n.jsx("div",{ref:me,className:`gradient-ascii-container${fe?` ${fe}`:""}`,style:P,...O,children:n.jsx("canvas",{ref:he,className:"gradient-ascii-canvas","aria-hidden":"true"})})};function vt(...t){return t.filter(Boolean).join(" ")}const wr=typeof window<"u"?m.useLayoutEffect:m.useEffect,cn=typeof Intl<"u"&&Intl.Segmenter?new Intl.Segmenter("en",{granularity:"grapheme"}):null,Er=t=>cn?Array.from(cn.segment(t),i=>i.segment):Array.from(t),_t=(t,i)=>t&&typeof t=="object"&&!Array.isArray(t)?{...t,filter:i}:t,Tr={type:"spring",damping:25,stiffness:300},Rr={type:"spring",damping:34,stiffness:320},Mr={transformOrigin:"50% 50% -0.45em",backfaceVisibility:"hidden"},ln={slide:t=>({initial:{y:t?"100%":"-100%",opacity:0},animate:{y:0,opacity:1},exit:{y:t?"-120%":"120%",opacity:0},transition:{type:"spring",damping:25,stiffness:300}}),flip:t=>({initial:{rotateX:t?-90:90,opacity:0,transformPerspective:480},animate:{rotateX:0,opacity:1,transformPerspective:480},exit:{rotateX:t?90:-90,opacity:0,transformPerspective:480},transition:{type:"tween",duration:.6,ease:[.34,1.4,.64,1]},exitTransition:{type:"tween",duration:.32,ease:[.5,0,.75,0]}}),blur:t=>({initial:{y:t?"45%":"-45%",opacity:0},animate:{y:0,opacity:1},exit:{y:t?"-45%":"45%",opacity:0},transition:{type:"tween",duration:.55,ease:[.22,1,.36,1]}}),scale:t=>({initial:{scale:t?.35:1.7,opacity:0},animate:{scale:1,opacity:1},exit:{scale:t?1.7:.35,opacity:0},transition:{type:"spring",damping:17,stiffness:240}}),drop:()=>({initial:{y:"-110%",opacity:0},animate:{y:0,opacity:1},exit:{y:"110%",opacity:0},transition:{type:"spring",damping:18,stiffness:320,mass:.9},exitTransition:{type:"tween",duration:.3,ease:[.55,0,1,.45]}})},jr=t=>{const i=String(t??"").trim();let s=null;const o=i.match(/^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i);if(o){const y=o[1].length<6?[...o[1].slice(0,3)].map(S=>S+S).join(""):o[1].slice(0,6);s=[0,2,4].map(S=>parseInt(y.slice(S,S+2),16))}else{const y=i.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i);y&&(s=y.slice(1,4).map(Number))}if(!s)return;const[h,d,b]=s.map(y=>{const S=Math.min(Math.max(y/255,0),1);return S<=.04045?S/12.92:((S+.055)/1.055)**2.4});return .2126*h+.7152*d+.0722*b>.3?"#0b0b0c":"#ffffff"},Nn=m.forwardRef((t,i)=>{const{texts:s,transition:o,initial:h,animate:d,exit:b,effect:y="slide",direction:S="up",highlight:X=!1,highlightColor:F="#a855f7",animatePresenceMode:B="wait",animatePresenceInitial:K=!1,rotationInterval:re=2e3,staggerDuration:ce=0,staggerFrom:ee="first",loop:Y=!0,auto:Ee=!0,pauseOnHover:J=!1,blur:Q=0,splitBy:G="characters",onNext:se,onMouseEnter:be,onMouseLeave:fe,mainClassName:P,splitLevelClassName:O,elementLevelClassName:me,style:he,...Ce}=t,[V,te]=m.useState(0),[W,I]=m.useState(!1),U=m.useRef(0),e=m.useRef(se);e.current=se;const Se=m.useRef(null),Te=Pn("auto"),C=En(),q=Math.max(s.length-1,0),le=Math.min(V,q),Ne=m.useMemo(()=>{const x=s[le]??"";if(G==="characters"){const v=x.split(" ");return v.map((L,z)=>({characters:Er(L),needsSpace:z!==v.length-1}))}return G==="words"?x.split(" ").map((v,L,z)=>({characters:[v],needsSpace:L!==z.length-1})):G==="lines"?x.split(`
`).map((v,L,z)=>({characters:[v],needsSpace:L!==z.length-1})):x.split(G).map((v,L,z)=>({characters:[v],needsSpace:L!==z.length-1}))},[s,le,G]),ne=m.useMemo(()=>{const x=Ne.reduce((L,z)=>L+z.characters.length,0),v=Array.from({length:x},(L,z)=>z).sort(()=>Math.random()-.5);return{total:x,shuffled:v}},[Ne]),Fe=x=>{const{total:v,shuffled:L}=ne;return ee==="first"?x*ce:ee==="last"?(v-1-x)*ce:ee==="center"?Math.abs(Math.floor(v/2)-x)*ce:ee==="random"?L[x]*ce:Math.abs(ee-x)*ce},pe=m.useCallback(x=>{var v;x!==U.current&&(U.current=x,te(x),(v=e.current)==null||v.call(e,x))},[]),Ge=m.useCallback(()=>{const x=Math.min(U.current,q);pe(x<q?x+1:Y?0:x)},[q,Y,pe]),Ye=m.useCallback(()=>{const x=Math.min(U.current,q);pe(x>0?x-1:Y?q:x)},[q,Y,pe]),Le=m.useCallback(x=>pe(Math.max(0,Math.min(x,q))),[q,pe]),xe=m.useCallback(()=>pe(0),[pe]);m.useImperativeHandle(i,()=>({next:Ge,previous:Ye,jumpTo:Le,reset:xe}),[Ge,Ye,Le,xe]);const Re=J&&W;m.useEffect(()=>{if(!Ee||Re)return;const x=setTimeout(Ge,re);return()=>clearTimeout(x)},[Ge,re,Ee,Re,le]),wr(()=>{const x=Se.current;if(!X||!x){Te.set("auto");return}let v=null,L=!1;const z=()=>{const ae=x.offsetWidth+1;if(v==null||v.stop(),!L||C){L=!0,Te.set(ae);return}v=Ae(Te,ae,Rr)};z();const H=typeof ResizeObserver<"u"?new ResizeObserver(z):null;return H==null||H.observe(x),()=>{H==null||H.disconnect(),v==null||v.stop()}},[X,C,Te]);const Oe=x=>{J&&I(!0),be==null||be(x)},ye=x=>{I(!1),fe==null||fe(x)},Be=(ln[y]??ln.slide)(S!=="down"),ge=Q>0?Q:y==="blur"?10:0,ue=h??Be.initial,j=d??Be.animate,we=b??Be.exit,Me=o??Be.transition,r=o||b?null:Be.exitTransition,u=ge>0?_t(ue,`blur(${ge}px)`):ue,c=ge>0?_t(j,"blur(0px)"):j,p=ge>0?_t(we,`blur(${ge}px)`):we,T=y==="flip"?Mr:void 0,R=X?{...he,width:Te,backgroundColor:F,color:jr(F)??(he==null?void 0:he.color)}:he,A=n.jsx(ir,{mode:B,initial:K,children:n.jsx(ot.span,{className:vt(G==="lines"?"text-rotate-lines":"text-rotate"),layout:!X,"aria-hidden":"true",children:Ne.map((x,v,L)=>{const z=L.slice(0,v).reduce((H,ae)=>H+ae.characters.length,0);return n.jsxs("span",{className:vt("text-rotate-word",O),children:[x.characters.map((H,ae)=>{const He=Fe(z+ae);return n.jsx(ot.span,{initial:u,animate:c,exit:r?{...p,transition:{...r,delay:He}}:p,transition:{...Me,delay:He},className:vt("text-rotate-element",me),style:T,children:H},ae)}),x.needsSpace&&n.jsx("span",{className:"text-rotate-space",children:" "})]},v)})},le)});return n.jsx(cr,{reducedMotion:"user",children:n.jsxs(ot.span,{className:vt("text-rotate",X&&"text-rotate-highlight",P),...Ce,style:R,onMouseEnter:Oe,onMouseLeave:ye,layout:!X,transition:o??Tr,children:[n.jsx("span",{className:"text-rotate-sr-only",children:s[le]}),X?n.jsx("span",{ref:Se,className:"text-rotate-highlight-content",children:A}):A]})})});Nn.displayName="RotatingText";const De=96,It=.18,Sr=1024,un=96,bt=260,Nr={gloss:0,matte:1,holo:2};let dn=1;const Ar=`#version 300 es
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
}`,Cr=`#version 300 es
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
}`,Lr=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,kr=`#version 300 es
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
}`,Xe=(t,i,s)=>Math.min(s,Math.max(i,t)),fn=t=>Math.atan2(Math.sin(t),Math.cos(t)),mn=t=>t*Math.PI/180,Pt=(t,i,s,o,h,d)=>{const b=2*Math.PI*o,y=`${i}V`;t[y]+=(b*b*(s-t[i])-2*h*b*t[y])*d,t[i]+=t[y]*d},hn=(t,i,s)=>{const o=t.createShader(i);return o?(t.shaderSource(o,s),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(t.deleteShader(o),null)):null},pn=(t,i,s)=>{const o=hn(t,t.VERTEX_SHADER,i),h=hn(t,t.FRAGMENT_SHADER,s),d=t.createProgram();if(!o||!h||!d)return null;if(t.attachShader(d,o),t.attachShader(d,h),t.bindAttribLocation(d,0,"aGrid"),t.linkProgram(d),t.deleteShader(o),t.deleteShader(h),!t.getProgramParameter(d,t.LINK_STATUS))return t.deleteProgram(d),null;const b={},y=t.getProgramParameter(d,t.ACTIVE_UNIFORMS);for(let S=0;S<y;S++){const X=t.getActiveUniform(d,S);X&&(b[X.name]=t.getUniformLocation(d,X.name))}return{program:d,uniforms:b}},_r=t=>{const i=[...t].sort((d,b)=>d[0]-b[0]||d[1]-b[1]);if(i.length<3)return i;const s=(d,b,y)=>(b[0]-d[0])*(y[1]-d[1])-(b[1]-d[1])*(y[0]-d[0]),o=[];i.forEach(d=>{for(;o.length>=2&&s(o[o.length-2],o[o.length-1],d)<=0;)o.pop();o.push(d)});const h=[];for(let d=i.length-1;d>=0;d--){const b=i[d];for(;h.length>=2&&s(h[h.length-2],h[h.length-1],b)<=0;)h.pop();h.push(b)}return o.slice(0,-1).concat(h.slice(0,-1))},Ir=({imageSrc:t,width:i=200,rotate:s=0,peelDirection:o=0,peelBackHoverPct:h=25,peelBackActivePct:d=40,curlRadius:b=12,finish:y="gloss",backColor:S="#d4d4d8",lightingIntensity:X=.5,shadowIntensity:F=.6,followPointer:B=!0,draggable:K=!0,swing:re=1,friction:ce=.5,bounce:ee=.35,intro:Y=!0,initialPosition:Ee="center",onDragStart:J,onDragEnd:Q,dpr:G,className:se="",style:be,...fe})=>{const P=m.useRef(null),O=m.useRef(null),me=m.useRef(null),he=m.useRef(null),Ce={imageSrc:t,width:Math.max(16,i),rotate:mn(s),peelDirection:mn(o),hoverPeel:Xe(h,0,100)/100,activePeel:Xe(d,0,100)/100,curlRadius:Math.max(2,b),finish:Nr[y]??0,backColor:S,lighting:Xe(X,0,1),shadow:Xe(F,0,1),followPointer:B,draggable:K,swing:Xe(re,0,3),friction:Xe(ce,0,1),bounce:Xe(ee,0,1),intro:Y,initialPosition:Ee,onDragStart:J,onDragEnd:Q,dpr:G},V=m.useRef(Ce);return V.current=Ce,m.useEffect(()=>{var k;const te=P.current,W=O.current,I=me.current,U=te==null?void 0:te.parentElement,e=W==null?void 0:W.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!0,depth:!0,stencil:!1});if(!te||!W||!I||!U||!e)return;const Se=pn(e,Ar,Cr),Te=pn(e,Lr,kr);if(!Se||!Te)return;const C=Se.uniforms,q=Te.uniforms,le=[0,1].map(()=>{const l=e.createTexture();e.bindTexture(e.TEXTURE_2D,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const a=e.createFramebuffer();return{texture:l,buffer:a,width:0,height:0}}),Ne=()=>{const l=Math.max(1,Math.round(we.size/2)),a=l;le.forEach(f=>{f.width===l&&f.height===a||(f.width=l,f.height=a,e.bindTexture(e.TEXTURE_2D,f.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,l,a,0,e.RGBA,e.UNSIGNED_BYTE,null),e.bindFramebuffer(e.FRAMEBUFFER,f.buffer),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,f.texture,0))}),e.bindFramebuffer(e.FRAMEBUFFER,null)},ne=new Float32Array((De+1)*(De+1)*2);for(let l=0;l<=De;l++)for(let a=0;a<=De;a++){const f=(l*(De+1)+a)*2;ne[f]=a/De,ne[f+1]=l/De}const Fe=new Uint16Array(De*De*6);let pe=0;for(let l=0;l<De;l++)for(let a=0;a<De;a++){const f=l*(De+1)+a,E=f+1,N=f+De+1,_=N+1;Fe.set([f,E,_,f,_,N],pe),pe+=6}const Ge=e.createVertexArray();e.bindVertexArray(Ge);const Ye=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,Ye),e.bufferData(e.ARRAY_BUFFER,ne,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);const Le=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,Le),e.bufferData(e.ELEMENT_ARRAY_BUFFER,Fe,e.STATIC_DRAW);const xe=e.createTexture(),Re=document.createElement("canvas"),Oe=Re.getContext("2d",{willReadFrequently:!0}),ye=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Be=new Map,ge=l=>{const a=String(l),f=Be.get(a);if(f)return f;let E=[.83,.83,.85];if(ye){ye.clearRect(0,0,1,1),ye.fillStyle="#d4d4d8",ye.fillStyle=a,ye.fillRect(0,0,1,1);const[N,_,ve]=ye.getImageData(0,0,1,1).data;E=[N/255,_/255,ve/255]}return Be.set(a,E),E},ue=((k=window.matchMedia)==null?void 0:k.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,j={ready:!1,aspect:1,meshX:1,meshY:1,texel:1,mask:null,maskW:1,maskH:1,hull:[]},we={ratio:1,size:1,density:0},Me={width:1,height:1},r={x:0,y:0,vx:0,vy:0,placed:!1,swing:0,swingV:0,peel:0,peelV:0,lift:0,liftV:0,dir:V.current.peelDirection,hover:!1,local:{x:0,y:0},press:null,pivotV:{x:0,y:0},light:{x:0,y:0,z:bt},pointer:{x:0,y:0,inside:!1},intro:V.current.intro&&!ue?0:1};r.intro<1&&(r.lift=1.5,r.peel=.3,r.swing=.1,r.dir+=.6);let u=0,c=0,p=!0,T=null,R=!0;const A=()=>V.current.width*j.aspect,x=(l,a)=>{const E=V.current.width,N=A();if(!j.hull.length){const je=(Math.abs(l)*E+Math.abs(a)*N)/2;return[-je,je]}let _=1/0,ve=-1/0;return j.hull.forEach(([je,_e])=>{const $=je*E*l+_e*N*a;$<_&&(_=$),$>ve&&(ve=$)}),[_,ve]},v=l=>{if(T=l,j.ready=!1,!l)return;const a=new Image;a.crossOrigin="anonymous",a.decoding="async",a.onload=()=>{if(!R||T!==l||!Oe)return;const f=a.naturalWidth||1,E=a.naturalHeight||1,N=Math.min(1,Sr/(Math.max(f,E)*(1+2*It))),_=Math.max(1,Math.round(f*N)),ve=Math.max(1,Math.round(E*N)),je=Math.round(_*It),_e=Math.round(ve*It);Re.width=_+je*2,Re.height=ve+_e*2,Oe.clearRect(0,0,Re.width,Re.height),Oe.drawImage(a,je,_e,_,ve),e.bindTexture(e.TEXTURE_2D,xe),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,Re),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),j.aspect=E/f,j.meshX=Re.width/_,j.meshY=Re.height/ve,j.texel=Re.width;const $=Math.max(8,Math.round(un*Math.min(1,f/E))),de=Math.max(8,Math.round(un*Math.min(1,E/f)));Re.width=$,Re.height=de,Oe.clearRect(0,0,$,de),Oe.drawImage(a,0,0,$,de);const it=Oe.getImageData(0,0,$,de).data,Ue=new Uint8Array($*de).fill(255),Qe=[],Ie=(oe,ie)=>{const Pe=ie*$+oe;Ue[Pe]===0||it[Pe*4+3]>100||(Ue[Pe]=0,Qe.push(Pe))};for(let oe=0;oe<$;oe++)Ie(oe,0),Ie(oe,de-1);for(let oe=0;oe<de;oe++)Ie(0,oe),Ie($-1,oe);for(;Qe.length;){const oe=Qe.pop(),ie=oe%$,Pe=(oe-ie)/$;ie>0&&Ie(ie-1,Pe),ie<$-1&&Ie(ie+1,Pe),Pe>0&&Ie(ie,Pe-1),Pe<de-1&&Ie(ie,Pe+1)}const nt=[];for(let oe=0;oe<de;oe++)for(let ie=0;ie<$;ie++)it[(oe*$+ie)*4+3]>127&&nt.push([(ie+.5)/$-.5,(oe+.5)/de-.5]);j.mask=Ue,j.maskW=$,j.maskH=de,j.hull=_r(nt),j.ready=!0,L(),Z()},a.src=l},L=()=>{const l=V.current;we.ratio=Math.min(l.dpr||window.devicePixelRatio||1,2),Me.width=Math.max(1,U.clientWidth),Me.height=Math.max(1,U.clientHeight);const a=A(),f=Math.ceil(Math.hypot(l.width,a)*1.16+2*(36+l.curlRadius));if((f!==we.size||we.ratio!==we.density)&&(we.size=f,we.density=we.ratio,te.style.width=`${f}px`,te.style.height=`${f}px`,W.width=Math.round(f*we.ratio),W.height=Math.round(f*we.ratio)),I.style.width=`${l.width}px`,I.style.height=`${a}px`,!r.placed){const E=l.initialPosition,N=E&&typeof E=="object"?E:{x:0,y:0};r.x=Me.width/2+(N.x||0),r.y=Me.height/2+(N.y||0),r.light={x:r.x-l.width*.45,y:r.y-a*.9,z:bt*1.6},r.placed=!0}H()},z=()=>{const l=V.current,a=l.rotate+r.swing,f=1+.07*Math.max(0,r.lift),E=l.width/2*f,N=A()/2*f,_=Math.abs(Math.cos(a)),ve=Math.abs(Math.sin(a));return{x:E*_+N*ve,y:E*ve+N*_}},H=()=>{const l=V.current,a=z(),f=Math.min(a.x,Me.width/2),E=Math.max(Me.width-a.x,Me.width/2),N=Math.min(a.y,Me.height/2),_=Math.max(Me.height-a.y,Me.height/2);r.x<f?(r.x=f,r.vx<0&&(r.vx=-r.vx*l.bounce)):r.x>E&&(r.x=E,r.vx>0&&(r.vx=-r.vx*l.bounce)),r.y<N?(r.y=N,r.vy<0&&(r.vy=-r.vy*l.bounce)):r.y>_&&(r.y=_,r.vy>0&&(r.vy=-r.vy*l.bounce))},ae=l=>{const a=U.getBoundingClientRect();return{x:l.clientX-a.left-U.clientLeft,y:l.clientY-a.top-U.clientTop}},He=l=>{const f=-(V.current.rotate+r.swing),E=1+.07*Math.max(0,r.lift),N=l.x-r.x,_=l.y-r.y;return{x:(Math.cos(f)*N-Math.sin(f)*_)/E,y:(Math.sin(f)*N+Math.cos(f)*_)/E}},We=l=>{if(!j.mask)return!1;const a=V.current,f=Math.floor((l.x/a.width+.5)*j.maskW),E=Math.floor((l.y/A()+.5)*j.maskH);return f<0||E<0||f>=j.maskW||E>=j.maskH?!1:j.mask[E*j.maskW+f]>100},rt=()=>{const l=V.current,a=we.size;te.style.transform=`translate3d(${r.x-a/2}px, ${r.y-a/2}px, 0)`;const f=l.rotate+r.swing,E=1+.07*Math.max(0,r.lift);if(I.style.transform=`translate(-50%, -50%) rotate(${f}rad) scale(${E})`,e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,W.width,W.height),e.clearColor(0,0,0,0),e.clearDepth(1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),!j.ready)return;const N=l.width,_=A(),ve=-Math.sin(r.dir),je=Math.cos(r.dir),[_e,$]=x(ve,je),de=Xe(r.peel,0,1),it=_e+de*($-_e),Ue=Math.max(0,r.lift),Qe=a/2,Ie=De*De*6,nt=de>.001;e.useProgram(Se.program),e.bindVertexArray(Ge),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,xe),e.uniform1i(C.uImage,0),e.uniform2f(C.uCanvas,a,a),e.uniform2f(C.uMesh,N*j.meshX,_*j.meshY),e.uniform2f(C.uCenter,Qe,Qe),e.uniform2f(C.uDir,ve,je),e.uniform1f(C.uFold,it),e.uniform1f(C.uRadius,l.curlRadius),e.uniform1f(C.uAngle,f),e.uniform1f(C.uScale,E),e.uniform1f(C.uLift,Ue*26),e.uniform2f(C.uShadowOffset,1.2,2.4),e.uniform2f(C.uShadowSlope,.28,.55),e.uniform1i(C.uFinish,l.finish),e.uniform3fv(C.uBack,ge(l.backColor)),e.uniform3f(C.uLight,r.light.x-(r.x-Qe),r.light.y-(r.y-Qe),r.light.z),e.uniform1f(C.uShine,l.lighting),e.uniform1f(C.uShadow,l.shadow*.55),e.uniform1f(C.uTexel,j.texel/(N*j.meshX)),e.uniform1f(C.uLod,Math.max(0,Math.log2(j.texel/(N*j.meshX*E*we.ratio))));const oe=He(r.light);if(e.uniform2f(C.uGlint,oe.x/(N*j.meshX)+.5,oe.y/(_*j.meshY)+.5),e.disable(e.DEPTH_TEST),nt){Ne();const[ie,Pe]=le;e.bindFramebuffer(e.FRAMEBUFFER,ie.buffer),e.viewport(0,0,ie.width,ie.height),e.clear(e.COLOR_BUFFER_BIT),e.disable(e.BLEND),e.uniform1i(C.uPass,2),e.drawElements(e.TRIANGLES,Ie,e.UNSIGNED_SHORT,0),e.useProgram(Te.program),e.uniform1i(q.uSource,1),e.uniform1i(q.uMode,0),e.uniform1f(q.uSigma,Math.min(4,(2.5+l.curlRadius*.15)/2)),e.activeTexture(e.TEXTURE1),e.bindFramebuffer(e.FRAMEBUFFER,Pe.buffer),e.bindTexture(e.TEXTURE_2D,ie.texture),e.uniform2f(q.uStep,1/ie.width,0),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,ie.buffer),e.bindTexture(e.TEXTURE_2D,Pe.texture),e.uniform2f(q.uStep,0,1/ie.height),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,W.width,W.height),e.useProgram(Se.program),e.activeTexture(e.TEXTURE0)}e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.uniform1i(C.uPass,0),e.drawElements(e.TRIANGLES,Ie,e.UNSIGNED_SHORT,0),e.uniform1i(C.uPass,1),e.drawElements(e.TRIANGLES,Ie,e.UNSIGNED_SHORT,0),nt&&(e.useProgram(Te.program),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,le[0].texture),e.uniform1i(q.uMode,1),e.uniform1f(q.uStrength,l.shadow*.6),e.drawArrays(e.TRIANGLES,0,3),e.useProgram(Se.program),e.activeTexture(e.TEXTURE0),e.enable(e.DEPTH_TEST),e.depthFunc(e.LESS),e.uniform1i(C.uPass,3),e.drawElements(e.TRIANGLES,Ie,e.UNSIGNED_SHORT,0),e.disable(e.DEPTH_TEST))},ke=l=>{if(u=0,!p||document.hidden)return;const a=V.current,f=c?Xe((l-c)/1e3,.001,1/30):1/60;c=l,a.imageSrc!==T&&v(a.imageSrc);const E=A();r.intro<1&&j.ready&&(r.intro=Math.min(1,r.intro+f/1.1));const N=r.press,_=N&&N.moving?N:null;if(_){const Ue=_.pointer,Qe=_.pivot,Ie=1-Math.exp(-f/.045),nt=r.pivotV.x+((Ue.x-Qe.x)/f-r.pivotV.x)*Ie,oe=r.pivotV.y+((Ue.y-Qe.y)/f-r.pivotV.y)*Ie,ie=(nt-r.pivotV.x)/f,Pe=(oe-r.pivotV.y)/f;r.pivotV.x=nt,r.pivotV.y=oe,_.pivot={x:Ue.x,y:Ue.y};const ft=a.rotate+r.swing,Et=-(Math.cos(ft)*_.grab.x-Math.sin(ft)*_.grab.y),Tt=-(Math.sin(ft)*_.grab.x+Math.cos(ft)*_.grab.y),An=(a.width*a.width+E*E)/12+Et*Et+Tt*Tt,Cn=(Et*-Xe(Pe,-24e3,24e3)-Tt*-Xe(ie,-24e3,24e3))/An,Rt=2*Math.PI*1.5;r.swingV+=(Cn*1.1*a.swing-Rt*Rt*r.swing-2*.45*Rt*r.swingV)*f,r.swing=Xe(r.swing+r.swingV*f,-1.2,1.2);const mt=a.rotate+r.swing,zt=1+.07*Math.max(0,r.lift);r.x=Ue.x-(Math.cos(mt)*_.grab.x-Math.sin(mt)*_.grab.y)*zt,r.y=Ue.y-(Math.sin(mt)*_.grab.x+Math.cos(mt)*_.grab.y)*zt,H()}else{Pt(r,"swing",0,1.4,.32,f);const Ue=Math.exp(-f*(1.5+9*a.friction));r.vx*=Ue,r.vy*=Ue,Math.hypot(r.vx,r.vy)<4&&(r.vx=0,r.vy=0),r.x+=r.vx*f,r.y+=r.vy*f,H()}const ve=r.intro<.2,je=ve?.3:N?a.activePeel:r.hover?a.hoverPeel:0;Pt(r,"peel",je,N||r.hover?3:3.6,N||r.hover?.7:.62,f),Pt(r,"lift",_?1:0,3.2,.55,f);let _e=a.peelDirection;N&&Math.hypot(N.grab.x,N.grab.y)>Math.min(a.width,E)*.12?_e=Math.atan2(N.grab.x,-N.grab.y):a.followPointer&&r.hover&&Math.hypot(r.local.x,r.local.y)>Math.min(a.width,E)*.12&&(_e=Math.atan2(r.local.x,-r.local.y)),ve||(r.dir+=fn(_e-r.dir)*(1-Math.exp(-f/.12)));const $=r.pointer.inside?{x:r.pointer.x,y:r.pointer.y,z:bt}:{x:r.x-a.width*.45,y:r.y-E*.9,z:bt*1.6},de=1-Math.exp(-f/.08);r.light.x+=($.x-r.light.x)*de,r.light.y+=($.y-r.light.y)*de,r.light.z+=($.z-r.light.z)*de,W.style.opacity=String(Xe(r.intro/.12,0,1)),rt(),r.intro<1&&j.ready||N||Math.abs(r.peel-je)>5e-4||Math.abs(r.peelV)>5e-4||Math.abs(r.lift-(_?1:0))>5e-4||Math.abs(r.liftV)>5e-4||Math.abs(r.swing)>5e-4||Math.abs(r.swingV)>5e-4||r.vx!==0||r.vy!==0||Math.abs(fn(_e-r.dir))>.002||Math.hypot($.x-r.light.x,$.y-r.light.y,$.z-r.light.z)>.5?u=requestAnimationFrame(ke):c=0};function Z(){!u&&p&&!document.hidden&&(u=requestAnimationFrame(ke))}const Ke=l=>{const a=ae(l);r.local=He(a);const f=We(r.local);f!==r.hover&&(r.hover=f),I.style.cursor=f&&V.current.draggable?r.press?"grabbing":"grab":""},$e=l=>{const a=ae(l);r.pointer.x=a.x,r.pointer.y=a.y,r.pointer.inside=a.x>=0&&a.y>=0&&a.x<=Me.width&&a.y<=Me.height,Z()},st=l=>{var f,E;const a=r.press;if(!a)Ke(l);else if(a.id===l.pointerId){const N=ae(l);a.pointer=N,!a.moving&&Math.hypot(N.x-a.origin.x,N.y-a.origin.y)>3&&(a.moving=V.current.draggable,a.moving&&((E=(f=V.current).onDragStart)==null||E.call(f))),a.samples.push({x:N.x,y:N.y,t:performance.now()}),a.samples.length>8&&a.samples.shift()}Z()},Je=()=>{r.press||(r.hover=!1,I.style.cursor="",Z())},tt=l=>{var E;const a=V.current;if(l.button!==0||!j.ready||(Ke(l),!r.hover))return;const f=ae(l);r.press={id:l.pointerId,grab:He(f),origin:f,pointer:f,pivot:f,moving:!1,samples:[]},r.pivotV={x:0,y:0},r.vx=0,r.vy=0,(E=I.setPointerCapture)==null||E.call(I,l.pointerId),a.draggable&&(I.style.cursor="grabbing",dn+=1,te.style.zIndex=String(dn)),l.preventDefault(),Z()},Ze=l=>{var N,_,ve;const a=r.press;if(!a||a.id!==l.pointerId)return;r.press=null,(N=I.hasPointerCapture)!=null&&N.call(I,l.pointerId)&&I.releasePointerCapture(l.pointerId);const f=performance.now(),E=a.samples.filter(je=>f-je.t<90);if(a.moving&&E.length>1&&!ue){const je=E[0],_e=E[E.length-1],$=Math.max(_e.t-je.t,16)/1e3,de=2600;r.vx=Xe((_e.x-je.x)/$,-de,de),r.vy=Xe((_e.y-je.y)/$,-de,de)}Ke(l),l.pointerType!=="mouse"&&(r.hover=!1),a.moving&&((ve=(_=V.current).onDragEnd)==null||ve.call(_)),Z()},M=()=>{r.pointer.inside=!1,Z()},w=()=>{c=0,Z()},g=new ResizeObserver(()=>{L(),Z()});g.observe(U);const D=new IntersectionObserver(l=>{p=l.some(a=>a.isIntersecting),p&&(c=0,Z())});return D.observe(U),window.addEventListener("pointermove",$e,{passive:!0}),document.documentElement.addEventListener("pointerleave",M),document.addEventListener("visibilitychange",w),I.addEventListener("pointermove",st),I.addEventListener("pointerleave",Je),I.addEventListener("pointerdown",tt),I.addEventListener("pointerup",Ze),I.addEventListener("pointercancel",Ze),v(V.current.imageSrc),L(),he.current=()=>{L(),Z()},Z(),()=>{var l;R=!1,cancelAnimationFrame(u),he.current=null,g.disconnect(),D.disconnect(),window.removeEventListener("pointermove",$e),document.documentElement.removeEventListener("pointerleave",M),document.removeEventListener("visibilitychange",w),I.removeEventListener("pointermove",st),I.removeEventListener("pointerleave",Je),I.removeEventListener("pointerdown",tt),I.removeEventListener("pointerup",Ze),I.removeEventListener("pointercancel",Ze),e.deleteTexture(xe),le.forEach(a=>{e.deleteTexture(a.texture),e.deleteFramebuffer(a.buffer)}),e.deleteProgram(Te.program),e.deleteBuffer(Ye),e.deleteBuffer(Le),e.deleteVertexArray(Ge),e.deleteProgram(Se.program),(l=e.getExtension("WEBGL_lose_context"))==null||l.loseContext()}},[]),m.useEffect(()=>{var te;(te=he.current)==null||te.call(he)}),n.jsxs("div",{ref:P,className:`sticker-peel${se?` ${se}`:""}`,style:be,...fe,children:[n.jsx("canvas",{ref:O,className:"sticker-peel-canvas","aria-hidden":"true"}),n.jsx("div",{ref:me,className:"sticker-peel-hit"})]})},Pr=["https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format","https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format","https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format","https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"],xn={fan:[.9,.9],cascade:[.5,.5],deck:[.5,0],pile:[.5,.5]},Fr={fan:[1,-.3],cascade:[.8,.6],deck:[0,1]},Ur="0 14px 34px -10px rgba(0, 0, 0, 0.45), 0 3px 8px -2px rgba(0, 0, 0, 0.18)",Dr=6,Xr=650,gn=1300,Ft=260,zr=1.035,Gr={place:[260,24],settle:[320,34],tuck:[240,28],face:[240,30],lean:[240,28],press:[420,34],fling:[650,42]},Or=typeof window>"u"?m.useEffect:m.useLayoutEffect,ze=(t,i,s)=>Math.min(s,Math.max(i,t)),yt=(t,i,s)=>t+(i-t)*s,dt=t=>{const i=Math.sin(t*127.1+311.7)*43758.5453;return i-Math.floor(i)},lt=(t,i,s,o,h)=>t==="cascade"?{x:-i*o*28,y:-i*o*28,rotate:0,scale:1-i*h*.07}:t==="deck"?{x:0,y:-i*o*32,rotate:0,scale:1-i*h*.1}:t==="pile"?{x:(dt(s+1)-.5)*o*56,y:(dt(s+2)-.5)*o*44,rotate:(dt(s+3)-.5)*o*40,scale:1-i*h*.03}:{x:0,y:0,rotate:i*o*8,scale:1-i*h*.12},vn=(t,i)=>{const s=t.filter(b=>i-b[2]<=100);if(s.length<2)return[0,0];const o=s[0],h=s[s.length-1],d=Math.max((h[2]-o[2])/1e3,.008);return[(h[0]-o[0])/d,(h[1]-o[1])/d]};function Br({cards:t,layout:i="fan",visible:s=4,spread:o=.5,depth:h=.5,radius:d=16,frame:b=0,frameColor:y="#ffffff",shadow:S=!0,tilt:X=30,threshold:F=90,speed:B=1,sendToBackOnClick:K=!1,autoplay:re=!1,autoplayDelay:ce=3e3,pauseOnHover:ee=!1,onChange:Y,className:Ee="",style:J}){const Q=t&&t.length?t:Pr.map((u,c)=>n.jsx("img",{src:u,alt:`Card ${c+1}`,draggable:!1},u)),G=Q.length,se=xn[i]?i:"fan",be=En(),fe=m.useRef(null),[P,O]=m.useState(()=>Array.from({length:G},(u,c)=>c)),[me,he]=m.useState(!1),[Ce,V]=m.useState(!1),te=m.useRef(P),W=m.useRef(new Map),I=m.useRef(new Map),U=m.useRef(new Map),e=m.useRef(null),Se=m.useRef(!0),Te=m.useRef(!1),C=m.useRef(null),q=m.useRef(null),le=m.useRef(null),Ne=m.useRef(Y);if(Ne.current=Y,P.length!==G||P.some(u=>u>=G)){const u=P.filter(c=>c<G);for(let c=0;c<G;c++)u.includes(c)||u.push(c);te.current=u,O(u)}C.current={layout:se,visible:ze(Math.round(s),1,Math.max(G,1)),spread:ze(o,0,2),depth:ze(h,0,1),tilt:ze(X,0,89),threshold:Math.max(F,0),speed:ze(B,.2,4),sendToBackOnClick:K,count:G,reduceMotion:!!be};const ne=u=>{let c=W.current.get(u);if(!c){const p=C.current,T=Math.max(0,te.current.indexOf(u)),R=lt(p.layout,p.reduceMotion?Math.min(T,p.visible-1):0,u,p.spread,p.depth);c={x:Ve(R.x),y:Ve(R.y),rotate:Ve(R.rotate),scale:Ve(R.scale),tiltX:Ve(0),tiltY:Ve(0),spin:Ve(0),lift:Ve(1),grabX:Ve(.5),grabY:Ve(.5),z:Ve(p.count-T),opacity:Ve(T<p.visible?1:0),shade:Ve(0)},W.current.set(u,c)}return c},Fe=(u,c,p={})=>{if(u.reduceMotion)return{duration:.2,ease:"easeOut",delay:p.delay||0};const[T,R]=Gr[c];return{type:"spring",stiffness:T*u.speed*u.speed,damping:R*u.speed,restDelta:.01,restSpeed:.5,...p}},pe=(u,c,p=0)=>{const T=Fe(c,"face",{delay:p});Ae(u.tiltX,0,T),Ae(u.tiltY,0,T),Ae(u.spin,0,T),Ae(u.lift,1,T)},Ge=(u,c,{delay:p=0,lift:T=0,kind:R="place",velocity:A=null,keepZ:x=!1}={})=>{const v=C.current,L=ne(u),z=Math.min(c,v.visible-1),H=lt(v.layout,z,u,v.spread,v.depth);if(T>0&&z>0){const We=lt(v.layout,z-1,u,v.spread,v.depth);H.x=yt(H.x,We.x,T),H.y=yt(H.y,We.y,T),H.rotate=yt(H.rotate,We.rotate,T),H.scale=yt(H.scale,We.scale,T)}const ae=Fe(v,R,{delay:p}),He={duration:v.reduceMotion?.2:.35/v.speed,ease:"easeOut",delay:p};x||L.z.set(v.count-c),Ae(L.x,H.x,A?{...ae,velocity:A[0]}:ae),Ae(L.y,H.y,A?{...ae,velocity:A[1]}:ae),Ae(L.rotate,H.rotate,ae),Ae(L.scale,H.scale,ae),pe(L,v,p),Ae(L.opacity,c<v.visible?1:0,He),Ae(L.shade,Math.min(.6,z*v.depth*.14*(1-T)),He)},Ye=({stagger:u=0,lift:c=0,released:p=-1,velocity:T=null,kind:R="place"}={})=>{const A=e.current;te.current.forEach((x,v)=>{const L=U.current.get(x);if(L&&!L.turned||A&&A.moved&&A.card===x)return;const z=x===p;Ge(x,v,{delay:v*u,lift:v>0?c:0,kind:L?"tuck":z?"settle":R,velocity:z?T:null,keepZ:!!L})})},Le=u=>{te.current=u,O(u)},xe=(u,c=null)=>{var D;const p=C.current,T=te.current;if(T.length<2)return;const R=T[0];if(U.current.has(R))return;const A=[...T.slice(1),R];if(p.reduceMotion){Le(A);return}let[x,v]=u||Fr[p.layout]||[Math.cos(dt(R+9)*6.283),Math.sin(dt(R+9)*6.283)];const L=Math.hypot(x,v)||1;x/=L,v/=L;const z=(D=fe.current)==null?void 0:D.getBoundingClientRect(),H=(z==null?void 0:z.width)||240,ae=(z==null?void 0:z.height)||240,He=Math.min(H/Math.max(Math.abs(x),.01),ae/Math.max(Math.abs(v),.01)),We=lt(p.layout,0,R,p.spread,p.depth),rt=He*1.12+40,ke=[We.x+x*rt,We.y+v*rt],Z=ne(R),Ke=Fe(p,"fling"),$e={turned:!1};U.current.set(R,$e),Z.z.set(p.count+1),Ae(Z.x,ke[0],c?{...Ke,velocity:c[0]}:Ke),Ae(Z.y,ke[1],c?{...Ke,velocity:c[1]}:Ke),pe(Z,p),Le(A);const st=Math.max(Math.hypot(ke[0]-Z.x.get(),ke[1]-Z.y.get()),1);let Je=!1;const tt=()=>{$e.turned=!0;const k=te.current.indexOf(R);k>=0&&Ge(R,k,{kind:"tuck",keepZ:!Je})},Ze=()=>{Je=!0,U.current.get(R)===$e&&U.current.delete(R);const k=te.current.indexOf(R);k>=0&&Z.z.set(C.current.count-k)},M=setTimeout(()=>{$e.turned||tt(),Je||Ze()},1500/p.speed),w=()=>{const k=I.current.get(R);if(!k)return!0;const l=k.getBoundingClientRect();for(const[a,f]of I.current){if(a===R||U.current.has(a)||ne(a).opacity.get()<.5)continue;const E=f.getBoundingClientRect();if(l.left<E.right&&l.right>E.left&&l.top<E.bottom&&l.bottom>E.top)return!1}return!0},g=()=>{if(!Se.current||$e.turned&&Je){clearTimeout(M);return}const k=Z.x.get(),l=Z.y.get(),a=Z.x.getVelocity()*x+Z.y.getVelocity()*v;!$e.turned&&(Math.hypot(ke[0]-k,ke[1]-l)<=st*.06||a<0)&&tt(),!Je&&(w()||$e.turned&&a<0)&&Ze(),requestAnimationFrame(g)};requestAnimationFrame(g)},Re=u=>{const c=C.current;if(c.reduceMotion)return;const p=ne(u.card),T=p.x.get()-u.homeX,R=p.y.get()-u.homeY,A=ze(u.vx/gn,-1,1)*.7+ze(T/Ft,-1,1)*.3,x=ze(-u.vy/gn,-1,1)*.7+ze(-R/Ft,-1,1)*.3,v=Fe(c,"lean");Ae(p.tiltY,A*c.tilt,v),Ae(p.tiltX,x*c.tilt,v),Ae(p.spin,ze(T/Ft,-1,1)*6,v)},Oe=u=>{const c=e.current;if(!c||u.pointerId!==c.id)return;const p=C.current,T=u.clientX-c.startX,R=u.clientY-c.startY,A=ne(c.card);if(!c.moved){if(Math.hypot(T,R)<Dr)return;c.moved=!0,A.x.stop(),A.y.stop(),c.originX=A.x.get()-T,c.originY=A.y.get()-R;try{c.element.setPointerCapture(c.id)}catch{c.capture=!1}he(!0)}A.x.set(c.originX+T),A.y.set(c.originY+R),c.samples.push([u.clientX,u.clientY,u.timeStamp]),c.samples.length>12&&c.samples.shift(),[c.vx,c.vy]=vn(c.samples,u.timeStamp),Re(c),clearTimeout(c.idle),c.idle=setTimeout(()=>{e.current===c&&(c.vx=0,c.vy=0,Re(c))},70);const x=ze(Math.hypot(T,R)/Math.max(p.threshold,1),0,1);Math.abs(x-c.progress)>.02&&(c.progress=x,Ye({lift:x*.4,kind:"settle"}))},ye=u=>{const c=e.current;if(!c||u.pointerId!==c.id)return;e.current=null,clearTimeout(c.idle),window.removeEventListener("pointermove",le.current.move),window.removeEventListener("pointerup",le.current.up),window.removeEventListener("pointercancel",le.current.up);try{c.element.releasePointerCapture(c.id)}catch{c.capture=!1}const p=C.current;if(!c.moved){u.type==="pointerup"&&p.sendToBackOnClick?xe(null):pe(ne(c.card),p);return}he(!1);const T=u.clientX-c.startX,R=u.clientY-c.startY,[A,x]=vn(c.samples,u.timeStamp),v=Math.hypot(T,R),L=Math.hypot(A,x),z=L>Xr&&v>16&&A*T+x*R>0;u.type==="pointerup"&&p.count>1&&(v>p.threshold||z)?xe(L>300?[A,x]:[T,R],[A,x]):Ye({released:c.card,velocity:[ze(A,-3e3,3e3),ze(x,-3e3,3e3)]})},Be=(u,c)=>{if(u.button!==0||e.current||te.current[0]!==c||U.current.has(c))return;const p=C.current,T=ne(c),R=lt(p.layout,0,c,p.spread,p.depth),A=u.currentTarget.getBoundingClientRect();T.grabX.set(ze((u.clientX-A.left)/Math.max(A.width,1),0,1)),T.grabY.set(ze((u.clientY-A.top)/Math.max(A.height,1),0,1)),p.reduceMotion||Ae(T.lift,zr,Fe(p,"press")),e.current={card:c,id:u.pointerId,element:u.currentTarget,startX:u.clientX,startY:u.clientY,originX:0,originY:0,homeX:R.x,homeY:R.y,vx:0,vy:0,idle:0,moved:!1,progress:0,samples:[[u.clientX,u.clientY,u.timeStamp]]},u.pointerType==="mouse"&&u.preventDefault(),window.addEventListener("pointermove",le.current.move),window.addEventListener("pointerup",le.current.up),window.addEventListener("pointercancel",le.current.up)},ge=u=>{u.target===u.currentTarget&&["ArrowRight","ArrowDown","Enter"," "].includes(u.key)&&(u.preventDefault(),xe(null))};q.current={placeAll:Ye,sendToBack:xe,onMove:Oe,onUp:ye},le.current||(le.current={move:u=>q.current.onMove(u),up:u=>q.current.onUp(u)}),Or(()=>{te.current=P,q.current.placeAll({stagger:Te.current?0:.06}),Te.current=!0},[P,se,s,o,h,B,G]);const ue=P[0],j=m.useRef(!1);m.useEffect(()=>{var u;if(!j.current){j.current=!0;return}ue!==void 0&&((u=Ne.current)==null||u.call(Ne,ue))},[ue]),m.useEffect(()=>{if(!re||G<2||me||ee&&Ce)return;const u=setTimeout(()=>q.current.sendToBack(null),Math.max(300,ce));return()=>clearTimeout(u)},[re,ce,ee,Ce,me,P,G]),m.useEffect(()=>{Se.current=!0;const u=W.current,c=le.current;return()=>{Se.current=!1,e.current&&clearTimeout(e.current.idle),window.removeEventListener("pointermove",c.move),window.removeEventListener("pointerup",c.up),window.removeEventListener("pointercancel",c.up),u.forEach(p=>Object.values(p).forEach(T=>T.stop()))}},[]);const[we,Me]=xn[se],r=Math.max(0,d-b);return n.jsx("div",{ref:fe,className:`stack ${Ee}`.trim(),style:J,tabIndex:0,role:"group","aria-label":"Card stack",onKeyDown:ge,onMouseEnter:()=>V(!0),onMouseLeave:()=>V(!1),children:Q.map((u,c)=>{const p=ne(c),T=P[0]===c;return n.jsx(ot.div,{ref:R=>{R?I.current.set(c,R):I.current.delete(c)},className:"stack-card","data-top":T?"":void 0,"aria-hidden":T?void 0:!0,style:{x:p.x,y:p.y,rotate:p.rotate,scale:p.scale,zIndex:p.z,opacity:p.opacity,originX:we,originY:Me,cursor:T?me?"grabbing":"grab":"default",touchAction:T?"pan-y":"auto"},onPointerDown:R=>Be(R,c),children:n.jsxs(ot.div,{className:"stack-card-face",style:{rotateX:p.tiltX,rotateY:p.tiltY,rotate:p.spin,scale:p.lift,originX:p.grabX,originY:p.grabY,transformPerspective:800,borderRadius:d,padding:b,backgroundColor:b>0?y:"transparent",boxShadow:S?Ur:"none"},children:[n.jsx("div",{className:"stack-card-content",style:{borderRadius:r},children:u}),n.jsx(ot.div,{className:"stack-card-shade",style:{opacity:p.shade,borderRadius:d}})]})},c)})})}const Hr=[{name:"Govt. Recognized",desc:"Authorized vocational board",icon:Rn},{name:"ISO 9001:2015",desc:"Certified quality standards",icon:Dn},{name:"Skill India",desc:"Kaushal Bharat certified",image:"/assets/recognition/skill-india.png"},{name:"Ministry of MSME",desc:"Govt. of India registered",image:"/assets/recognition/msme.png"},{name:"Digital India",desc:"Power to empower initiatives",image:"/assets/recognition/digital-india.png"}],bn=[{title:"Data and AI",desc:"Data science, analytics, machine learning, generative AI, and advanced Excel modeling.",icon:Xn,color:"bg-blue-50 text-primary border-blue-200/60",count:"3 courses",link:"/courses?category=Data and AI"},{title:"Digital marketing",desc:"SEO, social media, Google Ads, content marketing, reputation, and AI ad suites.",icon:zn,color:"bg-emerald-50 text-emerald-600 border-emerald-200/60",count:"2 courses",link:"/courses?category=Digital marketing"},{title:"Web and software",desc:"Full stack web development, Android, Java, PHP, MySQL, C/C++, and software engineering.",icon:Gn,color:"bg-indigo-50 text-indigo-600 border-indigo-200/60",count:"3 courses",link:"/courses?category=Web and software"},{title:"Design and video",desc:"Graphic design, UI/UX with Figma, video editing with Premiere Pro, and After Effects VFX.",icon:On,color:"bg-rose-50 text-rose-600 border-rose-200/60",count:"4 courses",link:"/courses?category=Design and video"},{title:"Office and accounts",desc:"Digital office automation, Tally Prime with GST, taxation diplomas, and DCA programs.",icon:Bn,color:"bg-amber-50 text-amber-600 border-amber-200/60",count:"5 courses",link:"/courses?category=Office and accounts"},{title:"Cyber security",desc:"Ethical hacking, network defense, footprinting, system auditing, and security protocols.",icon:Hn,color:"bg-cyan-50 text-cyan-600 border-cyan-200/60",count:"1 course",link:"/courses?category=Cyber security"}],$r=[{num:"01",title:"Industrial faculties",desc:"Learn directly from practicing IT professionals who bring real-world architecture into class.",icon:$n,tag:"Direct Mentorship"},{num:"02",title:"Quality teaching",desc:"Rigorous step-by-step pedagogy emphasizing practical problem solving over passive lectures.",icon:Tn,tag:"Hands-on Labs"},{num:"03",title:"100% job assistance",desc:"Dedicated career guidance, resume building, mock interviews, and direct referral drives.",icon:Vn,tag:"Placement Cell"},{num:"04",title:"Flexible timing",desc:"Morning, afternoon, evening, and weekend slots suited for students and working professionals.",icon:qn,tag:"Flexible Slots"},{num:"05",title:"Extra practice hour",desc:"Unlimited lab access beyond standard lecture hours to practice code, models, and designs.",icon:Rn,tag:"Free Lab Hours"},{num:"06",title:"Small batch",desc:"Strictly limited student numbers per batch ensuring personal attention and one-on-one code reviews.",icon:Yn,tag:"Personalized Focus"}],yn=[{name:"Python",cat:"Data & Dev"},{name:"Power BI",cat:"Analytics"},{name:"Tableau",cat:"Analytics"},{name:"SQL",cat:"Database"},{name:"Excel",cat:"Analytics"},{name:"Tally Prime",cat:"Finance"},{name:"Photoshop",cat:"Design"},{name:"Premiere Pro",cat:"Video"},{name:"After Effects",cat:"VFX"},{name:"Figma",cat:"UI/UX"},{name:"WordPress",cat:"Web"},{name:"Java",cat:"Backend"}];function ts(){const t=wn(),i=Zn.map(s=>n.jsxs("div",{className:"w-full h-full bg-surface border border-line/80 rounded-card p-6 sm:p-7 flex flex-col justify-between shadow-card text-left select-none",children:[n.jsx("div",{className:"space-y-3",children:n.jsxs("p",{className:"text-deep text-xs sm:text-sm sm:text-[14px] leading-relaxed line-clamp-4 italic",children:["“",s.quote,"”"]})}),n.jsxs("div",{className:"flex items-center gap-3 pt-3.5 border-t border-line/50",children:[n.jsx("img",{src:s.image,alt:s.name,className:"w-10 h-10 rounded-full object-cover border border-line/80 shadow-sm",loading:"lazy"}),n.jsxs("div",{className:"min-w-0",children:[n.jsx("p",{className:"text-sm font-bold text-deep truncate",children:s.name}),n.jsx("p",{className:"text-xs text-muted truncate",children:"Infodesk student"})]})]})]},s.id));return n.jsxs("div",{className:"space-y-24 sm:space-y-32 w-full overflow-x-clip",children:[n.jsxs("section",{className:"relative pt-8 sm:pt-16 pb-12 overflow-x-clip w-full",children:[et.heroBackground&&!t?n.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-25 sm:opacity-35 -z-10 overflow-hidden select-none",children:n.jsx(jt,{className:"pointer-events-none select-none",isCanvasOrWebGL:!0,fallback:n.jsx("div",{className:"w-full h-full bg-grid-dots opacity-40 pointer-events-none"}),children:n.jsx(on,{shape:"horizon",colors:["#1e3fd8","#f6f8ff","#a5d8ff","#38bdf8"],characters:" =+xX0S8#@",cellSize:18,density:.8,speed:.5,glyphOpacity:.4,className:"w-full h-full pointer-events-none"})})}):n.jsx("div",{className:"absolute inset-0 bg-grid-dots opacity-40 -z-10 pointer-events-none"}),n.jsx("div",{className:"w-full max-w-content mx-auto px-4 sm:px-6",children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center",children:[n.jsxs("div",{className:"lg:col-span-7 min-w-0 space-y-6 text-left",children:[n.jsx("div",{className:"flex items-center gap-3",children:n.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-line/90 shadow-sm text-xs font-semibold text-deep",children:[n.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot inline-block"}),n.jsx("span",{children:"Govt. Recognized · ISO 9001:2015 certified board"})]})}),n.jsxs("h1",{"aria-label":"Learn data, design, marketing, web and accounts skills Mumbai's teams hire for.",className:"text-3xl sm:text-5xl lg:text-7xl font-bold text-deep tracking-tight leading-[1.08] break-words",children:[n.jsx("span",{children:"Learn "}),et.rotatingText&&!t?n.jsx("span",{className:"inline-block min-w-[9ch] text-left align-baseline","aria-hidden":"true",children:n.jsx(Nn,{texts:["data","design","marketing","web","accounts"],mainClassName:"inline-flex text-primary font-bold",rotationInterval:2400,staggerDuration:.03})}):n.jsx("span",{className:"text-primary font-bold",children:"data"})," ",n.jsx("br",{className:"sm:hidden"}),"skills Mumbai's teams ",n.jsx("br",{className:"sm:hidden"})," hire for."]}),n.jsx("p",{className:"text-muted text-base sm:text-lg sm:text-[19px] leading-relaxed max-w-xl",children:"Industry-led courses in data, digital marketing, web development, design and accounting, taught in small batches at four Mumbai branches."}),n.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2",children:[n.jsx(Vt,{as:"div",color:"#4a6df0",trailColor:"#2448c9",radius:9999,theme:"light",className:"!p-0 !bg-transparent !border-0 inline-block rounded-full shadow-button",children:n.jsx(pt,{to:"/courses",size:"lg",variant:"primary",magnet:!0,children:"Explore courses"})}),n.jsx(pt,{to:"/contact",size:"lg",variant:"ghost",children:"Book a free demo"})]}),n.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-2 text-xs text-muted",children:[n.jsxs("span",{className:"font-semibold text-deep flex items-center gap-1",children:[n.jsx(Un,{size:13,className:"text-primary"}),n.jsx("span",{children:"4 Mumbai Branches:"})]}),n.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Goregaon West"}),n.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Behram Baug"}),n.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Jogeshwari West"}),n.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Motilal Nagar"})]})]}),n.jsxs("div",{className:"lg:col-span-5 flex justify-center relative",children:[n.jsx(lr,{}),et.stickerPeel&&n.jsx("div",{className:"absolute -top-6 -right-6 hidden sm:block w-28 h-28 pointer-events-auto z-20",children:n.jsx(jt,{isCanvasOrWebGL:!0,fallback:n.jsx("div",{className:"w-24 h-24 rounded-[22px] bg-surface/95 backdrop-blur border border-line/80 shadow-md p-2 hover:rotate-3 transition-transform flex items-center justify-center",children:n.jsx("img",{src:"/assets/recognition/job-assistance-badge.png",alt:"100% job assistance",className:"w-full h-full object-contain"})}),children:n.jsx(Ir,{imageSrc:"/assets/recognition/job-assistance-badge.png",width:100,peelDirection:45,peelBackHoverPct:35,peelBackActivePct:50,finish:"gloss",draggable:!1,className:"cursor-pointer"})})})]})]})})]}),n.jsx("section",{className:"bg-soft/70 border-y border-line/70 py-8 sm:py-10",children:n.jsx("div",{className:"max-w-content mx-auto px-6",children:n.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center",children:[n.jsxs("div",{className:"p-3",children:[n.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-deep font-display tracking-tight flex items-center justify-center",children:et.countUp&&!t?n.jsx(xt,{to:Bt.length,duration:1.6}):Bt.length}),n.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Mumbai branches"})]}),n.jsxs("div",{className:"p-3",children:[n.jsxs("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display tracking-tight flex items-center justify-center",children:[et.countUp&&!t?n.jsx(xt,{to:qt.length,duration:1.8}):qt.length,n.jsx("span",{children:"+"})]}),n.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Industry courses"})]}),n.jsxs("div",{className:"p-3",children:[n.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-deep font-display tracking-tight flex items-center justify-center",children:et.countUp&&!t?n.jsx(xt,{to:100,duration:2,suffix:"%"}):"100%"}),n.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Job assistance"})]}),n.jsxs("div",{className:"p-3",children:[n.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display tracking-tight flex items-center justify-center",children:et.countUp&&!t?n.jsx(xt,{to:6,duration:1.5}):6}),n.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Educational pillars"})]})]})})}),n.jsx("section",{className:"max-w-content mx-auto px-6",children:n.jsx(at,{children:n.jsxs("div",{className:"bg-surface border border-line/80 rounded-panel p-6 sm:p-8 shadow-card",children:[n.jsx("p",{className:"text-center text-xs font-bold uppercase tracking-wider text-muted mb-6",children:"Recognized and certified for vocational excellence"}),n.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center",children:Hr.map(s=>n.jsxs("div",{className:"p-4 text-center rounded-2xl bg-background border border-line/70 hover:border-primary/40 hover:shadow-sm transition-all duration-300 flex flex-col items-center justify-center min-h-[105px] group",children:[s.image?n.jsx("img",{src:s.image,alt:s.name,className:"h-9 w-auto object-contain mb-2 group-hover:scale-105 transition-transform",loading:"lazy"}):s.icon?n.jsx("div",{className:"w-8 h-8 rounded-full bg-soft text-primary flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform",children:n.jsx(s.icon,{size:18})}):null,n.jsx("p",{className:"text-xs sm:text-sm font-bold text-deep leading-tight",children:s.name}),n.jsx("p",{className:"text-[11px] text-muted mt-0.5",children:s.desc})]},s.name))})]})})}),n.jsx("section",{className:"max-w-content mx-auto px-6",children:n.jsx(at,{children:n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[n.jsxs("div",{className:"lg:col-span-5 space-y-6 text-left",children:[n.jsx("h2",{className:"text-[clamp(32px,4.4vw,52px)] font-bold text-deep tracking-tight leading-tight",children:"Pick your track."}),n.jsx("p",{className:"text-muted text-base sm:text-lg leading-relaxed",children:"Explore specialized technology tracks designed around real job requirements, hands-on lab projects, and direct Mumbai recruitment drives."}),n.jsx("div",{className:"pt-2",children:n.jsx(pt,{to:"/courses",size:"lg",variant:"primary",children:"Explore courses"})})]}),n.jsx("div",{className:"lg:col-span-7 flex justify-center",children:et.cardSwap&&!t?n.jsx("div",{className:"relative w-full max-w-[480px] h-[340px] sm:h-[380px] flex items-center justify-center",children:n.jsx(Kn,{width:400,height:260,cardRadius:22,visibleCards:4,theme:"light",autoplay:!0,pauseOnHover:!0,delay:3500,className:"w-full h-full",children:bn.map(s=>{const o=s.icon;return n.jsx(Jn,{children:n.jsxs("div",{className:"w-full h-full p-6 sm:p-7 flex flex-col justify-between bg-surface rounded-card border border-line/90 shadow-card text-left select-none",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("div",{className:`w-11 h-11 rounded-xl ${s.color} border flex items-center justify-center shadow-sm`,children:n.jsx(o,{size:22})}),n.jsx("span",{className:"text-xs font-semibold px-2.5 py-0.5 rounded-full bg-background border border-line/70 text-muted",children:s.count})]}),n.jsx("h3",{className:"text-xl font-bold text-deep mb-2",children:s.title}),n.jsx("p",{className:"text-xs sm:text-sm text-muted leading-relaxed line-clamp-3",children:s.desc})]}),n.jsx("div",{className:"pt-4 border-t border-line/50 flex items-center justify-between text-xs font-semibold text-primary",children:n.jsxs(ht,{to:s.link,className:"hover:underline flex items-center gap-1",children:[n.jsx("span",{children:"Browse track"}),n.jsx($t,{size:14})]})})]})},s.title)})})}):n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full",children:bn.map(s=>{const o=s.icon;return n.jsx(ht,{to:s.link,className:"bg-surface border border-line/80 rounded-card p-5 shadow-card hover:border-primary/40 transition-all flex flex-col justify-between",children:n.jsxs("div",{children:[n.jsxs("div",{className:"flex items-center justify-between mb-3",children:[n.jsx("div",{className:`w-9 h-9 rounded-lg ${s.color} border flex items-center justify-center`,children:n.jsx(o,{size:18})}),n.jsx("span",{className:"text-xs text-muted font-medium",children:s.count})]}),n.jsx("h3",{className:"text-base font-bold text-deep",children:s.title}),n.jsx("p",{className:"text-xs text-muted mt-1 line-clamp-2",children:s.desc})]})},s.title)})})})]})})}),n.jsx("section",{className:"max-w-content mx-auto px-6",children:n.jsxs(at,{children:[n.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-14",children:[n.jsx("h2",{className:"text-[clamp(32px,4.4vw,52px)] font-bold text-deep",children:"Why Infodesk."}),n.jsx("p",{className:"text-muted text-base sm:text-lg mt-3",children:"Six foundational pillars taken directly from our educational charter to ensure every student succeeds."})]}),n.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:$r.map(s=>{const o=s.icon;return n.jsxs(Qn,{spotlightColor:"rgba(36, 72, 201, 0.16)",shape:"circle",intensity:.22,theme:"light",className:"!bg-surface !rounded-card p-6 transition-all duration-300",children:[n.jsxs("div",{className:"flex items-center justify-between mb-4",children:[n.jsx("div",{className:"w-10 h-10 rounded-xl bg-soft text-primary flex items-center justify-center shadow-sm",children:n.jsx(o,{size:20})}),n.jsx("span",{className:"font-mono text-xs font-bold text-muted/60 bg-background px-2 py-0.5 rounded-md border border-line/50",children:s.num})]}),n.jsx("div",{className:"flex items-center gap-2 mb-1.5",children:n.jsx("h3",{className:"text-lg font-bold text-deep",children:s.title})}),n.jsx("p",{className:"text-muted text-sm leading-relaxed mb-4",children:s.desc}),n.jsx("div",{className:"pt-3 border-t border-line/40",children:n.jsx("span",{className:"inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-soft/60 text-deep",children:s.tag})})]},s.title)})})]})}),n.jsx("section",{className:"max-w-content mx-auto px-6",children:n.jsxs(at,{children:[n.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-10",children:[n.jsx("h2",{className:"text-[clamp(32px,4.4vw,52px)] font-bold text-deep",children:"Student voices."}),n.jsx("p",{className:"text-muted text-base sm:text-lg mt-3",children:"Hear verified feedback from students who transformed their technical careers through our Mumbai batches."})]}),n.jsx("div",{className:"w-full max-w-lg h-[340px] sm:h-[360px] mx-auto relative",children:n.jsx(Br,{cards:i,layout:"fan",visible:4,spread:.3,depth:.4,radius:22,sendToBackOnClick:!0,autoplay:!t,autoplayDelay:4500,pauseOnHover:!0})}),n.jsx("div",{className:"text-center mt-8",children:n.jsxs(ht,{to:"/placements",className:"inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-bright transition-colors",children:[n.jsx("span",{children:"Read more placement stories"}),n.jsx($t,{size:15})]})})]})}),n.jsx("section",{className:"max-w-content mx-auto px-6",children:n.jsx(at,{children:n.jsxs("div",{className:"bg-[#101f5c] text-white rounded-band p-8 sm:p-14 shadow-signature overflow-hidden relative",children:[n.jsx("div",{className:"absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-bright/20 blur-3xl pointer-events-none"}),n.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10",children:[n.jsxs("div",{className:"lg:col-span-7 space-y-5",children:[n.jsxs("span",{className:"inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/95 border border-white/20",children:[n.jsx(Wn,{size:13,className:"text-amber-400 fill-amber-400"}),n.jsx("span",{children:"National Institutional Honor"})]}),n.jsx("h2",{className:"text-[clamp(28px,3.8vw,44px)] font-bold text-white tracking-tight leading-tight",children:"India's Best Institute award, honored by Ashneer Grover."}),n.jsx("p",{className:"text-white/80 text-base leading-relaxed max-w-xl",children:"Our institution was recognized nationally for educational excellence and quality career training, with the prestigious award presented personally by entrepreneur Ashneer Grover."}),n.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-4",children:[n.jsx(pt,{to:"/about",size:"md",variant:"white",children:"Read the award story"}),n.jsx("span",{className:"text-xs text-white/60 font-mono",children:"Official ceremony · Delhi, India"})]})]}),n.jsxs("div",{className:"lg:col-span-5 grid grid-cols-2 gap-3.5",children:[n.jsx("div",{className:"rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/20 group",children:n.jsx("img",{src:"/assets/awards/ashneer-award-main.jpg",alt:"Ashneer Grover presenting India's Best Institute award to Infodesk Computer Education",className:"w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500",loading:"lazy"})}),n.jsx("div",{className:"rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/20 group",children:n.jsx("img",{src:"/assets/awards/ashneer-award-1.jpg",alt:"Infodesk team on stage at national award ceremony",className:"w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500",loading:"lazy"})})]})]})]})})}),n.jsxs("section",{className:"w-full max-w-full overflow-hidden py-8 border-y border-line/60 bg-surface",children:[n.jsx("div",{className:"max-w-content mx-auto px-4 sm:px-6 mb-4 text-center",children:n.jsx("p",{className:"text-xs uppercase font-bold tracking-wider text-muted",children:"Industry tools and technologies taught in our labs"})}),t?n.jsx("div",{className:"max-w-content mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-3",children:yn.map(s=>n.jsxs("span",{className:"inline-flex items-center gap-2 text-sm font-semibold text-deep px-4 py-2 rounded-full bg-soft border border-primary/20 shadow-sm",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-primary inline-block"}),n.jsx("span",{children:s.name}),n.jsx("span",{className:"text-[10px] text-muted font-normal bg-white/60 px-1.5 py-0.5 rounded",children:s.cat})]},s.name))}):n.jsx("div",{className:"w-full max-w-full overflow-hidden py-1",children:n.jsx(er,{logos:yn,ariaLabel:"Industry tools and technologies",speed:60,direction:"left",gap:24,pauseOnHover:!0,fadeOut:!0,fadeOutWidth:.12,renderItem:s=>n.jsxs("span",{className:"inline-flex items-center gap-2 text-sm font-semibold text-deep px-4 py-2 rounded-full bg-soft border border-primary/25 shadow-sm transition-transform hover:scale-105 select-none",children:[n.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-primary inline-block"}),n.jsx("span",{children:s.name}),n.jsx("span",{className:"text-[10px] text-muted font-normal bg-white/70 px-1.5 py-0.5 rounded",children:s.cat})]},s.name)})})]}),n.jsx("section",{className:"max-w-content mx-auto px-6",children:n.jsx(at,{children:n.jsxs("div",{className:"bg-deep rounded-band p-8 sm:p-14 text-center text-white space-y-6 shadow-signature relative overflow-hidden",children:[et.homeClosingBanner&&!t&&n.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-30 z-0 overflow-hidden",children:n.jsx(jt,{isCanvasOrWebGL:!0,fallback:n.jsx("div",{className:"w-full h-full bg-deep"}),children:n.jsx(on,{shape:"rise",cellSize:16,density:.6,glyphOpacity:.6,colors:["#10173a","#13266f","#2448c9","#4a6df0"],characters:" =+xX0S8#@",speed:.4,mouseInteraction:!1,className:"w-full h-full"})})}),n.jsxs("div",{className:"relative z-10 space-y-6",children:[n.jsx("h2",{className:"text-[clamp(30px,4.2vw,48px)] font-bold text-white tracking-tight",children:"Try a free demo class."}),n.jsx("p",{className:"text-white/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed",children:"Experience our teaching firsthand before enrolling. Visit any of our four Mumbai branches or attend a preview session with our faculty."}),n.jsx("div",{className:"pt-2 flex justify-center",children:n.jsx(Vt,{as:ht,to:"/contact",backgroundColor:"#f6f5f1",textColor:"#13266f",color:"#4a6df0",trailColor:"#a5d8ff",radius:999,duration:5,glow:.6,className:"inline-flex items-center justify-center font-bold text-sm sm:text-base px-8 py-3.5 min-h-[48px] rounded-full shadow-lg hover:shadow-xl transition-all",children:"Book your demo"})})]})]})})})]})}export{ts as default};
