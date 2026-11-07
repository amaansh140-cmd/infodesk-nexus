import{A as Gt,j as t,U as Mt,W as Cr,u as yr,m as Ot,T as Ae,K as Ve}from"./vendor-motion-CI9qmr4c.js";import{r as m,L as jt}from"./vendor-react-D5v3yjYH.js";import{M as Ut,u as Xt,a as Dt,P as Lr,b as kr,L as _r,c as Ir,d as wr,m as it,e as et,B as at,f as Bt}from"./index-Bv57Peh4.js";import{T as Pr,d as Ht,S as Er,e as $t,f as Fr,g as Tr,h as Ur,D as Dr,G as Xr,i as zr,j as Gr,k as Or,L as Br,A as Vt,U as Hr,B as $r,l as Vr,m as qr}from"./vendor-icons-C_n1hfuY.js";import{S as ot}from"./ScrollReveal-COkP6KVS.js";import{L as pt,S as Yr,C as xt,a as Wr,b as Kr,c as Jr,E as Qr}from"./ElectricBorder-8ZVcBNl0.js";import{t as Zr,L as en}from"./testimonials-B9vbE0ep.js";import{c as qt}from"./courses-CquOJoZ7.js";import"./vendor-gsap-DdEiTQuA.js";function Yt(r,i){if(typeof r=="function")return r(i);r!=null&&(r.current=i)}function tn(...r){return i=>{let s=!1;const a=r.map(h=>{const d=Yt(h,i);return!s&&typeof d=="function"&&(s=!0),d});if(s)return()=>{for(let h=0;h<a.length;h++){const d=a[h];typeof d=="function"?d():Yt(r[h],null)}}}}function rn(...r){return m.useCallback(tn(...r),r)}const Wt=r=>{const{width:i,height:s}=(r==null?void 0:r.getBoundingClientRect())||{};return[i/(r==null?void 0:r.offsetWidth)||1,s/(r==null?void 0:r.offsetHeight)||1]},Rr=r=>{var b;let{left:i,top:s}=r.getBoundingClientRect(),a=r;for(;a=a.parentElement||((b=a.parentNode)==null?void 0:b.host);){const{scrollLeft:y,scrollTop:S}=a;if(y||S){const[X,F]=Wt(a);i+=y*X,s+=S*F}if(getComputedStyle(a).position==="fixed")break}const[h,d]=Wt(r.offsetParent);return[i/h,s/d]};class nn extends m.Component{getSnapshotBeforeUpdate(i){const s=this.props.getElement();if(Mt(s)&&i.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const a=s.offsetParent,h=Mt(a)&&a.offsetWidth||0,d=Mt(a)&&a.offsetHeight||0,b=getComputedStyle(s),y=this.props.sizeRef.current;y.height=parseFloat(b.height),y.width=parseFloat(b.width),y.top=s.offsetTop,y.left=s.offsetLeft,y.right=h-y.width-y.left,y.bottom=d-y.height-y.top,y.direction=b.direction,y.point=Rr(s)}return null}componentDidUpdate(){}render(){return this.props.children}}function sn({children:r,isPresent:i,anchorX:s,anchorY:a,root:h,pop:d,popNode:b}){var ee;const y=m.useId(),S=m.useRef(null),X=m.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:F}=m.useContext(Ut),B=d!==!1?((ee=r.props)==null?void 0:ee.ref)??(r==null?void 0:r.ref):void 0,K=rn(S,B),ne=()=>{var Y;return S.current||((Y=b==null?void 0:b.current)==null?void 0:Y.current)},ce=Y=>{const{width:Ee,height:J,top:Q,left:G,right:se,bottom:be,direction:fe}=X.current,P=fe==="rtl",O=s==="left"?P?`right:${se}`:`left:${G}`:P?`left:${G}`:`right:${se}`,me=a==="bottom"?`bottom:${be}`:`top:${Q}`;Y==null||Y.insertRule(`[data-motion-pop-id="${y}"]{position:absolute!important;width:${Ee}px!important;height:${J}px!important;${O}px!important;${me}px!important}`)};return m.useInsertionEffect(()=>{const{width:Y,height:Ee}=X.current,J=ne();if(i||d===!1||!J||!Y||!Ee)return;J.dataset.motionPopId=y;const Q=J.ownerDocument,G=Q.createElement("style");F&&(G.nonce=F);const se=h??Q.head;se.appendChild(G),ce(G.sheet);let be=0,fe=0;return Gt.setup(()=>{const[P,O]=Rr(J);be=X.current.point[0]-P,fe=X.current.point[1]-O}),Gt.read(()=>{const{sheet:P}=G;if(!P||!be&&!fe)return;const O=X.current;O.left+=be,O.right-=be,O.top+=fe,O.bottom-=fe,P.deleteRule(0),ce(P)}),()=>{J.removeAttribute("data-motion-pop-id"),se.contains(G)&&se.removeChild(G)}},[i]),t.jsx(nn,{isPresent:i,getElement:ne,sizeRef:X,pop:d,children:d===!1?r:m.cloneElement(r,{ref:K})})}const an=({children:r,initial:i,isPresent:s,onExitComplete:a,custom:h,presenceAffectsLayout:d,mode:b,anchorX:y,anchorY:S,root:X})=>{const F=Xt(on),B=m.useId(),K=m.useRef(),ne=m.useRef(s),ce=m.useRef(a);Dt(()=>{ne.current=s,ce.current=a});let ee=!0,Y=m.useMemo(()=>(ee=!1,{id:B,initial:i,isPresent:s,custom:h,onExitComplete:Ee=>{F.set(Ee,!0);for(const J of F.values())if(!J)return;a&&a()},register:(Ee,J)=>{var Q,G;return F.set(Ee,!1),J&&((G=(Q=J.parent)==null?void 0:Q.presenceContext)==null?void 0:G.id)!==B&&(K.current=J),()=>{var se;F.delete(Ee),!ne.current&&!F.size&&((se=ce.current)==null||se.call(ce))}}}),[s,F,a]);return d&&ee&&(Y={...Y}),m.useMemo(()=>{F.forEach((Ee,J)=>F.set(J,!1))},[s]),m.useEffect(()=>{!s&&!F.size&&a&&a()},[s]),r=t.jsx(sn,{pop:b==="popLayout",isPresent:s,anchorX:y,anchorY:S,root:X,popNode:K,children:r}),t.jsx(Lr.Provider,{value:Y,children:r})};function on(){return new Map}const lt=r=>r.key||"";function Kt(r){const i=[];return m.Children.forEach(r,s=>{m.isValidElement(s)&&i.push(s)}),i}const cn=({children:r,custom:i,initial:s=!0,onExitComplete:a,presenceAffectsLayout:h=!0,mode:d="sync",propagate:b=!1,anchorX:y="left",anchorY:S="top",root:X})=>{const[F,B]=kr(b),K=m.useMemo(()=>Kt(r),[r]),ne=b&&!F?[]:K.map(lt),ce=m.useRef(!0),ee=Xt(()=>new Map),Y=m.useRef(new Set),[Ee,J]=m.useState(K),[Q,G]=m.useState(K);Dt(()=>{b&&!F&&!Q.length&&(B==null||B())},[F,b,Q.length,B]);const se=m.useRef();m.useEffect(()=>()=>{const P=se.current;se.current=void 0,P==null||P()},[Q]),Dt(()=>{ce.current=!1;for(let P=0;P<Q.length;P++){const O=lt(Q[P]);ne.includes(O)?(ee.delete(O),Y.current.delete(O)):ee.get(O)!==!0&&ee.set(O,!1)}},[Q,ne.length,ne.join("-")]);const be=[];if(K!==Ee){let P=[...K],O=0;for(const me of Q){const he=ne.indexOf(lt(me));he===-1?(P.splice(O++,0,me),be.push(me)):O=he+be.length+1}return be.every(me=>ee.get(lt(me)))?P=K:d==="wait"&&(P=be),G(Kt(P)),J(K),null}const{forceRender:fe}=m.useContext(_r);return t.jsx(t.Fragment,{children:Q.map(P=>{const O=lt(P),me=b&&!F?!1:K===Q||ne.includes(O),he=()=>{if(Y.current.has(O))return;if(ee.has(O))Y.current.add(O),ee.set(O,!0);else return;let Ce=!0;ee.forEach(V=>{V||(Ce=!1)}),Ce&&(fe==null||fe(),J([]),b&&(B==null||B()),se.current=a)};return t.jsx(an,{isPresent:me,initial:!ce.current||s?void 0:!1,custom:i,presenceAffectsLayout:h,mode:d,root:X,onExitComplete:me?void 0:he,anchorX:y,anchorY:S,children:P},O)})})};function ln({children:r,...i}){const s=m.useContext(Ut);i={...s,...i},i.transition=Cr(i.transition,s.transition),i.isStatic=Xt(()=>i.isStatic);const a=m.useMemo(()=>i,[JSON.stringify(i.transition),i.transformPagePoint,i.reducedMotion,i.skipAnimations,i.isValidProp]);return t.jsx(Ut.Provider,{value:a,children:r})}const St=[{id:"science",tabLabel:"Data science",cmdBase:"infodesk $ learn --course",courseName:'"data science"',tools:"Loaded: Python, Scikit-Learn, GenAI, Alteryx, Informatica",duration:"Duration: 12 months comprehensive career program",level:"Status: Certified industrial faculties ✓"},{id:"analytics",tabLabel:"Analytics",cmdBase:"infodesk $ learn --course",courseName:'"data analytics"',tools:"Loaded: Excel, SQL, Python, Pandas, Power BI, Tableau",duration:"Duration: 6 months (hands-on industrial training)",level:"Status: 100% job assistance included ✓"},{id:"web",tabLabel:"Web",cmdBase:"infodesk $ learn --course",courseName:'"full stack web"',tools:"Loaded: HTML5, CSS3, JavaScript, PHP, SQL, WordPress",duration:"Duration: 6 months with real client capstone projects",level:"Status: Flexible small batch timings ✓"},{id:"marketing",tabLabel:"Marketing",cmdBase:"infodesk $ learn --course",courseName:'"digital marketing"',tools:"Loaded: SEO, Google Ads, SMM, Content, AI Tools",duration:"Duration: 6 months plus practical job training",level:"Status: Live ad spend & portfolio reviews ✓"},{id:"design",tabLabel:"Design",cmdBase:"infodesk $ learn --course",courseName:'"design & media"',tools:"Loaded: Photoshop, Illustrator, Figma, Premiere Pro, UI/UX",duration:"Duration: 6 months creative portfolio training",level:"Status: Live client design briefs ✓"}];function un(){const r=yr(),[i,s]=m.useState(0),a=St[i],h=`${a.cmdBase} ${a.courseName}`,[d,b]=m.useState(h.length),[y,S]=m.useState(!0);m.useEffect(()=>{if(r){b(h.length),S(!0);return}const F=setTimeout(()=>{s(ne=>(ne+1)%St.length),b(0),S(!1);let B=0;const K=setInterval(()=>{B++,b(B),B>=h.length&&(clearInterval(K),setTimeout(()=>{S(!0)},200))},35)},6e3);return()=>{clearTimeout(F)}},[i,h,r]);const X=h.slice(0,d);return t.jsx("div",{className:"w-full max-w-full sm:max-w-md md:max-w-lg mx-auto md:[perspective:1200px]",children:t.jsxs(Ot.div,{className:"w-full relative bg-[#0b1437] border border-[#213275] rounded-panel p-5 sm:p-7 shadow-[0_22px_50px_-15px_rgba(11,20,55,0.7)] text-left select-none transition-transform duration-500 ease-out md:[transform:rotateY(-5deg)_rotateX(3deg)] md:hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1.02)]",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:[.2,.7,.2,1]},children:[t.jsx("div",{className:"absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-bright to-transparent opacity-40 pointer-events-none"}),t.jsxs("div",{className:"flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-white/10 gap-2",children:[t.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[t.jsx("span",{className:"w-3 h-3 rounded-full bg-[#f87171] inline-block shadow-[0_0_8px_rgba(248,113,113,0.5)]"}),t.jsx("span",{className:"w-3 h-3 rounded-full bg-[#fbbf24] inline-block shadow-[0_0_8px_rgba(251,191,36,0.5)]"}),t.jsx("span",{className:"w-3 h-3 rounded-full bg-[#34d399] inline-block shadow-[0_0_8px_rgba(52,211,153,0.5)]"})]}),t.jsx("div",{className:"flex items-center gap-1 overflow-x-auto py-0.5 scrollbar-none",children:St.map((F,B)=>{const K=B>=3;return t.jsx("button",{type:"button",onClick:()=>{s(B),b(`${F.cmdBase} ${F.courseName}`.length),S(!0)},className:`px-2 py-0.5 rounded text-[11px] font-mono whitespace-nowrap transition-colors ${K?"hidden sm:inline-block":"inline-block"} ${i===B?"bg-bright/20 text-white font-bold border border-bright/40":"text-white/50 hover:text-white/80"}`,children:F.tabLabel},F.id)})}),t.jsxs("div",{className:"hidden min-[480px]:flex items-center gap-1.5 text-[11px] font-mono text-white/50 shrink-0",children:[t.jsx(Pr,{size:12,className:"text-bright"}),t.jsx("span",{children:"infodesk-cli"})]})]}),t.jsxs("div",{className:"font-mono text-xs sm:text-[14px] leading-relaxed space-y-3 min-h-[160px] sm:min-h-[175px]",children:[t.jsxs("div",{className:"text-white/95 font-semibold flex items-center flex-wrap break-all sm:break-normal",children:[t.jsx("span",{className:"text-[#4a6df0] mr-2",children:"infodesk"}),t.jsx("span",{className:"text-white/40 mr-2",children:"$"}),d>11&&t.jsx("span",{className:"text-emerald-400 mr-2",children:"learn"}),d>17&&t.jsx("span",{className:"text-indigo-300 mr-2",children:"--course"}),d>26&&t.jsx("span",{className:"text-amber-300 font-bold",children:X.slice(26)}),t.jsx("span",{className:"inline-block w-2 h-4 ml-1 bg-bright animate-pulse"})]}),y&&t.jsxs(Ot.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.3},className:"space-y-2.5 pt-2 border-t border-white/10",children:[t.jsxs("div",{className:"flex items-start gap-2.5 text-emerald-400",children:[t.jsx(Ht,{size:16,className:"shrink-0 mt-0.5 text-emerald-400"}),t.jsx("span",{className:"text-emerald-300/95 text-xs sm:text-[13px] leading-snug break-words font-medium",children:a.tools})]}),t.jsxs("div",{className:"flex items-start gap-2.5 text-emerald-400",children:[t.jsx(Ht,{size:16,className:"shrink-0 mt-0.5 text-emerald-400"}),t.jsx("span",{className:"text-emerald-300/95 text-xs sm:text-[13px] leading-snug break-words font-medium",children:a.duration})]}),t.jsxs("div",{className:"flex items-center gap-2 text-white/60 text-[11px] sm:text-xs pl-6",children:[t.jsx(Er,{size:12,className:"text-amber-400"}),t.jsx("span",{children:a.level})]})]})]}),t.jsxs("div",{className:"pt-3 sm:pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/40",children:[t.jsxs("span",{className:"flex items-center gap-1.5",children:[t.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping"}),t.jsx("span",{children:"small batches • 4 Mumbai branches"})]}),t.jsx("span",{className:"text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30",children:"ready for demo"})]})]})})}const Jt=8,Nt=4,At=24,Qt=1.2,Zt=.7,er=.015,dn=2.4,wt=60,dt=100,fn=16,mn=.78,tr=["#1e3fd8","#f6f8ff","#a5d8ff","#38bdf8"],rr=" =+xX0S8#@",nr='"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',hn={horizon:0,pinch:1,rise:2,eclipse:3},pn={none:0,wave:1,burst:2},xn=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,Mr=`
float hash12(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
`,gn=`#version 300 es
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
${Mr}
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
}`,jr=`
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
${Mr}
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
`,vn=`#version 300 es
precision highp float;
uniform float uDownscale;
in vec2 vUv;
out vec4 outColor;
${jr}
void main() {
  outColor = glyphAt(gl_FragCoord.xy * uDownscale);
}`,bn=`#version 300 es
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
}`,yn=`#version 300 es
precision highp float;
uniform sampler2D uHalo;
uniform float uGlow;
uniform float uGradient;
uniform float uGrain;
uniform float uFrame;
in vec2 vUv;
out vec4 outColor;
${jr}
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
}`,qe=(r,i,s)=>Math.min(s,Math.max(i,r)),Ct=r=>r<=.04045?r/12.92:((r+.055)/1.055)**2.4,wn=([r,i,s])=>{const a=Ct(r),h=Ct(i),d=Ct(s),b=Math.cbrt(.4122214708*a+.5363325363*h+.0514459929*d),y=Math.cbrt(.2119034982*a+.6806995451*h+.1073969566*d),S=Math.cbrt(.0883024619*a+.2817188376*h+.6299787005*d);return[.2104542553*b+.793617785*y-.0040720468*S,1.9779984951*b-2.428592205*y+.4505937099*S,.0259040371*b+.7827717662*y-.808675766*S]},sr=(r,i,s)=>{const a=r.createShader(i);return a?(r.shaderSource(a,s),r.compileShader(a),r.getShaderParameter(a,r.COMPILE_STATUS)?a:(r.deleteShader(a),null)):null},gt=(r,i)=>{const s=sr(r,r.VERTEX_SHADER,xn),a=sr(r,r.FRAGMENT_SHADER,i),h=r.createProgram();if(!s||!a||!h)return null;if(r.attachShader(h,s),r.attachShader(h,a),r.linkProgram(h),r.deleteShader(s),r.deleteShader(a),!r.getProgramParameter(h,r.LINK_STATUS))return r.deleteProgram(h),null;const d={},b=r.getProgramParameter(h,r.ACTIVE_UNIFORMS);for(let y=0;y<b;y++){const S=r.getActiveUniform(h,y);if(!S)continue;const X=S.name.replace(/\[0\]$/,"");d[X]=r.getUniformLocation(h,X)}return{program:h,uniforms:d}},Lt=(r,i)=>({textures:Array.from({length:i},()=>{const a=r.createTexture();return r.bindTexture(r.TEXTURE_2D,a),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),a}),framebuffer:r.createFramebuffer(),width:0,height:0}),kt=(r,i,s,a)=>{i.width===s&&i.height===a||(i.width=s,i.height=a,r.bindFramebuffer(r.FRAMEBUFFER,i.framebuffer),i.textures.forEach((h,d)=>{r.bindTexture(r.TEXTURE_2D,h),r.texImage2D(r.TEXTURE_2D,0,r.RGBA8,s,a,0,r.RGBA,r.UNSIGNED_BYTE,null),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+d,r.TEXTURE_2D,h,0)}),r.bindFramebuffer(r.FRAMEBUFFER,null))},ar=(r,i,s)=>{const a=[...new Set([...i].filter(F=>F!==`
`&&F!=="\r"))];a.length||a.push(" ");const h=`300 ${Math.round(dt*mn)}px ${s}`,d=Math.min(fn,a.length),b=Math.ceil(a.length/d),y=document.createElement("canvas");y.width=wt*d,y.height=dt*b;const S=y.getContext("2d");S&&(S.font=h,S.textAlign="center",S.textBaseline="middle",S.fillStyle="#fff",a.forEach((F,B)=>{const K=B%d,ne=Math.floor(B/d);S.fillText(F,K*wt+wt/2,ne*dt+dt/2+3)}));const X=r.createTexture();return r.bindTexture(r.TEXTURE_2D,X),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.texImage2D(r.TEXTURE_2D,0,r.RGBA8,r.RGBA,r.UNSIGNED_BYTE,y),r.generateMipmap(r.TEXTURE_2D),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),{texture:X,count:a.length,grid:[d,b]}},or=({colors:r=tr,shape:i="horizon",characters:s=rr,cellSize:a=18,density:h=.8,glyphOpacity:d=.85,glow:b=.2,depthOfField:y=0,flicker:S=.2,softness:X=.5,scale:F=1,flow:B=.5,speed:K=1,gradientOpacity:ne=.9,grain:ce=.08,variation:ee=0,mouseInteraction:Y=!0,scrambleRadius:Ee=.1,clickEffect:J="wave",intro:Q=!0,lightMode:G=!1,fontFamily:se=nr,dpr:be,className:fe="",style:P,...O})=>{const me=m.useRef(null),he=m.useRef(null),Ce=m.useRef(null),V=(Array.isArray(r)&&r.length?r:tr).slice(0,Jt),te={colors:V.length>1?V:[V[0],V[0]],shape:hn[i]??0,characters:s||rr,cellSize:qe(a,6,64),density:qe(h,0,1),glyphOpacity:qe(d,0,1),glow:qe(b,0,2),depthOfField:qe(y,0,1),flicker:qe(S,0,1),softness:qe(X,0,1),scale:qe(F,.4,2.5),flow:qe(B,0,2),speed:Math.max(0,K),gradientOpacity:qe(ne,0,1),grain:qe(ce,0,.4),variation:Math.max(0,ee),mouseInteraction:Y,scrambleRadius:qe(Ee,.02,.4),clickEffect:pn[J]??1,intro:Q,lightMode:G,fontFamily:se||nr,dpr:be},W=m.useRef(te);return W.current=te,m.useEffect(()=>{var Ze;const I=me.current,U=he.current,e=U==null?void 0:U.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!I||!U||!e)return;const Se=gt(e,gn),Te=gt(e,vn),C=gt(e,bn),q=gt(e,yn);if(!Se||!Te||!C||!q)return;const le=e.createVertexArray(),Ne=Lt(e,2),re=Lt(e,1),Fe=Lt(e,1),pe=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Ge=new Map,Ye=M=>{const w=String(M),g=Ge.get(w);if(g)return g;let D=[0,0,0];if(pe){pe.clearRect(0,0,1,1),pe.fillStyle="#000000",pe.fillStyle=w,pe.fillRect(0,0,1,1);const[k,l,o]=pe.getImageData(0,0,1,1).data;D=[k/255,l/255,o/255]}return Ge.set(w,D),D},Le=((Ze=window.matchMedia)==null?void 0:Ze.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,xe={width:1,height:1,ratio:1},Re=new Float32Array(Jt*3),Oe=new Float32Array(Nt*4),ye=[],Be=new Float32Array(At*4),ge=[],ue={x:0,y:0,inside:!1};let j=null,we="",Me="",n=0,u=0,c=W.current.intro&&!Le?0:1,p=0,T=0,R=0,A=0,x=!0,v=!1;const L=()=>{var g,D;const M=W.current,w=`${M.fontFamily}|${M.characters}`;w===we&&j||(we=w,j&&e.deleteTexture(j.texture),j=ar(e,M.characters,M.fontFamily),(D=(g=document.fonts)==null?void 0:g.load)==null||D.call(g,`300 64px ${M.fontFamily}`,M.characters).then(()=>{v||we!==w||(j&&e.deleteTexture(j.texture),j=ar(e,M.characters,M.fontFamily),ae())},()=>{}))},z=()=>{const M=W.current,w=M.colors.join(",");w!==Me&&(Me=w,M.colors.forEach((g,D)=>Re.set(wn(Ye(g)),D*3)))},H=(M,w,g)=>{if(!j)return;const D=W.current,k=M.uniforms,l=D.cellSize*xe.ratio,o=l*(wt/dt);e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Ne.textures[0]),e.uniform1i(k.uField,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Ne.textures[1]),e.uniform1i(k.uAux,1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,j.texture),e.uniform1i(k.uAtlas,2),e.uniform2f(k.uResolution,w,g),e.uniform2f(k.uCell,o,l),e.uniform2f(k.uOffset,(w-Math.ceil(w/o)*o)/2,(g-Math.ceil(g/l)*l)/2),e.uniform2f(k.uAtlasGrid,j.grid[0],j.grid[1]),e.uniform1f(k.uCount,j.count),e.uniform1f(k.uDensity,D.density),e.uniform1f(k.uOpacity,D.glyphOpacity),e.uniform1f(k.uFlicker,Le?0:D.flicker),e.uniform1f(k.uDepth,D.depthOfField),e.uniform1f(k.uGlyphTime,u),e.uniform1f(k.uSeedValue,D.variation),e.uniform1f(k.uLight,D.lightMode?1:0)},ae=()=>{const M=W.current,w=xe.width/xe.height;L(),z(),e.bindVertexArray(le),e.disable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,Ne.framebuffer),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),e.viewport(0,0,Ne.width,Ne.height),e.useProgram(Se.program);const g=Se.uniforms;e.uniform1f(g.uAspect,w),e.uniform1f(g.uTime,n),e.uniform1i(g.uShape,M.shape),e.uniform3fv(g.uRamp,Re),e.uniform1i(g.uCount,M.colors.length),e.uniform1f(g.uScale,M.scale),e.uniform1f(g.uSoftness,M.softness),e.uniform1f(g.uFlow,M.flow),e.uniform2f(g.uSeed,M.variation*3.17,M.variation*1.91),e.uniform4fv(g.uTrail,Be),e.uniform1f(g.uRadius,M.scrambleRadius),e.uniform4fv(g.uClicks,Oe),e.uniform1i(g.uClickEffect,M.clickEffect),e.uniform1f(g.uIntro,c),e.uniform1f(g.uFrame,p),e.drawArrays(e.TRIANGLES,0,3);const D=M.glow>.001;D&&(e.bindFramebuffer(e.FRAMEBUFFER,re.framebuffer),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.viewport(0,0,re.width,re.height),e.useProgram(Te.program),H(Te,U.width,U.height),e.uniform1f(Te.uniforms.uDownscale,U.width/re.width),e.drawArrays(e.TRIANGLES,0,3),e.useProgram(C.program),e.activeTexture(e.TEXTURE0),e.uniform1i(C.uniforms.uSource,0),e.bindFramebuffer(e.FRAMEBUFFER,Fe.framebuffer),e.bindTexture(e.TEXTURE_2D,re.textures[0]),e.uniform2f(C.uniforms.uStep,1/re.width,0),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,re.framebuffer),e.bindTexture(e.TEXTURE_2D,Fe.textures[0]),e.uniform2f(C.uniforms.uStep,0,1/re.height),e.drawArrays(e.TRIANGLES,0,3)),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,U.width,U.height),e.useProgram(q.program),H(q,U.width,U.height);const k=q.uniforms;e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,re.textures[0]),e.uniform1i(k.uHalo,3),e.uniform1f(k.uGlow,D?M.glow:0),e.uniform1f(k.uGradient,M.gradientOpacity),e.uniform1f(k.uGrain,M.grain),e.uniform1f(k.uFrame,p),e.drawArrays(e.TRIANGLES,0,3)},He=()=>{const M=W.current;xe.width=Math.max(1,I.clientWidth),xe.height=Math.max(1,I.clientHeight),xe.ratio=Math.min(M.dpr||window.devicePixelRatio||1,2),U.width=Math.max(1,Math.round(xe.width*xe.ratio)),U.height=Math.max(1,Math.round(xe.height*xe.ratio)),kt(e,Ne,Math.max(1,Math.round(U.width/2)),Math.max(1,Math.round(U.height/2)));const w=Math.max(1,Math.round(U.width/4)),g=Math.max(1,Math.round(U.height/4));kt(e,re,w,g),kt(e,Fe,w,g),ae(),ke()},We=M=>{for(ge.forEach(w=>{w.age+=M});ge.length&&ge[ge.length-1].age>Zt;)ge.pop();for(let w=0;w<At;w++){const g=ge[w];if(!g){Be[w*4+2]=0;continue}const D=1-g.age/Zt;Be.set([g.x,g.y,D*D,0],w*4)}for(ye.forEach(w=>{w.age+=M});ye.length&&ye[ye.length-1].age>Qt;)ye.pop();for(let w=0;w<Nt;w++){const g=ye[w];if(!g){Oe[w*4+3]=0;continue}const D=g.age/Qt,k=Math.min(1,g.age/.08)*(1-D)*(1-D);Oe.set([g.x,g.y,g.age,k],w*4)}},nt=M=>{if(R=0,v||!x||document.hidden)return;const w=W.current,g=A?qe((M-A)/1e3,.001,.05):1/60;A=M,Le||(n+=g*w.speed*.5,u+=g*Math.max(w.speed,.15)),c<1&&(c=Math.min(1,c+g/dn)),T+=g,!Le&&T>1/24&&(T=0,p=(p+1)%97),We(g),ae(),!Le||c<1||ye.length>0||ge.length>0?R=requestAnimationFrame(nt):A=0};function ke(){!R&&!v&&x&&!document.hidden&&(R=requestAnimationFrame(nt))}const Z=M=>{const w=I.getBoundingClientRect(),g=(M.clientX-w.left)/Math.max(1,w.width),D=1-(M.clientY-w.top)/Math.max(1,w.height),k=w.width/Math.max(1,w.height);ue.inside=g>=0&&g<=1&&D>=0&&D<=1,ue.x=(g-.5)*k,ue.y=D-.5},Ke=M=>{Z(M);const w=W.current;if(!ue.inside||!w.mouseInteraction||Le)return;const g=ge[0],D=g?Math.hypot(ue.x-g.x,ue.y-g.y):1/0;if(!(D<er)){if(g&&g.age<.1){const k=Math.min(6,Math.floor(D/(er*2)));for(let l=1;l<=k;l++){const o=l/(k+1);ge.unshift({x:g.x+(ue.x-g.x)*o,y:g.y+(ue.y-g.y)*o,age:0})}}ge.unshift({x:ue.x,y:ue.y,age:0}),ge.length=Math.min(ge.length,At),ke()}},$e=M=>{Z(M);const w=W.current;!ue.inside||!w.clickEffect||Le||(ye.unshift({x:ue.x,y:ue.y,age:0}),ye.length>Nt&&ye.pop(),ke())},st=()=>{A=0,ke()},Je=new ResizeObserver(He);Je.observe(I);const tt=new IntersectionObserver(M=>{x=M.some(w=>w.isIntersecting),x&&(A=0,ke())});return tt.observe(I),window.addEventListener("pointermove",Ke,{passive:!0}),window.addEventListener("pointerdown",$e,{passive:!0}),document.addEventListener("visibilitychange",st),He(),Ce.current=ke,()=>{var M;v=!0,cancelAnimationFrame(R),Ce.current=null,Je.disconnect(),tt.disconnect(),window.removeEventListener("pointermove",Ke),window.removeEventListener("pointerdown",$e),document.removeEventListener("visibilitychange",st),[Ne,re,Fe].forEach(w=>{w.textures.forEach(g=>e.deleteTexture(g)),e.deleteFramebuffer(w.framebuffer)}),j&&e.deleteTexture(j.texture),e.deleteVertexArray(le),[Se,Te,C,q].forEach(w=>e.deleteProgram(w.program)),(M=e.getExtension("WEBGL_lose_context"))==null||M.loseContext()}},[]),m.useEffect(()=>{var I;(I=Ce.current)==null||I.call(Ce)}),t.jsx("div",{ref:me,className:`gradient-ascii-container${fe?` ${fe}`:""}`,style:P,...O,children:t.jsx("canvas",{ref:he,className:"gradient-ascii-canvas","aria-hidden":"true"})})};function vt(...r){return r.filter(Boolean).join(" ")}const En=typeof window<"u"?m.useLayoutEffect:m.useEffect,ir=typeof Intl<"u"&&Intl.Segmenter?new Intl.Segmenter("en",{granularity:"grapheme"}):null,Tn=r=>ir?Array.from(ir.segment(r),i=>i.segment):Array.from(r),_t=(r,i)=>r&&typeof r=="object"&&!Array.isArray(r)?{...r,filter:i}:r,Rn={type:"spring",damping:25,stiffness:300},Mn={type:"spring",damping:34,stiffness:320},jn={transformOrigin:"50% 50% -0.45em",backfaceVisibility:"hidden"},cr={slide:r=>({initial:{y:r?"100%":"-100%",opacity:0},animate:{y:0,opacity:1},exit:{y:r?"-120%":"120%",opacity:0},transition:{type:"spring",damping:25,stiffness:300}}),flip:r=>({initial:{rotateX:r?-90:90,opacity:0,transformPerspective:480},animate:{rotateX:0,opacity:1,transformPerspective:480},exit:{rotateX:r?90:-90,opacity:0,transformPerspective:480},transition:{type:"tween",duration:.6,ease:[.34,1.4,.64,1]},exitTransition:{type:"tween",duration:.32,ease:[.5,0,.75,0]}}),blur:r=>({initial:{y:r?"45%":"-45%",opacity:0},animate:{y:0,opacity:1},exit:{y:r?"-45%":"45%",opacity:0},transition:{type:"tween",duration:.55,ease:[.22,1,.36,1]}}),scale:r=>({initial:{scale:r?.35:1.7,opacity:0},animate:{scale:1,opacity:1},exit:{scale:r?1.7:.35,opacity:0},transition:{type:"spring",damping:17,stiffness:240}}),drop:()=>({initial:{y:"-110%",opacity:0},animate:{y:0,opacity:1},exit:{y:"110%",opacity:0},transition:{type:"spring",damping:18,stiffness:320,mass:.9},exitTransition:{type:"tween",duration:.3,ease:[.55,0,1,.45]}})},Sn=r=>{const i=String(r??"").trim();let s=null;const a=i.match(/^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i);if(a){const y=a[1].length<6?[...a[1].slice(0,3)].map(S=>S+S).join(""):a[1].slice(0,6);s=[0,2,4].map(S=>parseInt(y.slice(S,S+2),16))}else{const y=i.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i);y&&(s=y.slice(1,4).map(Number))}if(!s)return;const[h,d,b]=s.map(y=>{const S=Math.min(Math.max(y/255,0),1);return S<=.04045?S/12.92:((S+.055)/1.055)**2.4});return .2126*h+.7152*d+.0722*b>.3?"#0b0b0c":"#ffffff"},Sr=m.forwardRef((r,i)=>{const{texts:s,transition:a,initial:h,animate:d,exit:b,effect:y="slide",direction:S="up",highlight:X=!1,highlightColor:F="#a855f7",animatePresenceMode:B="wait",animatePresenceInitial:K=!1,rotationInterval:ne=2e3,staggerDuration:ce=0,staggerFrom:ee="first",loop:Y=!0,auto:Ee=!0,pauseOnHover:J=!1,blur:Q=0,splitBy:G="characters",onNext:se,onMouseEnter:be,onMouseLeave:fe,mainClassName:P,splitLevelClassName:O,elementLevelClassName:me,style:he,...Ce}=r,[V,te]=m.useState(0),[W,I]=m.useState(!1),U=m.useRef(0),e=m.useRef(se);e.current=se;const Se=m.useRef(null),Te=Ir("auto"),C=wr(),q=Math.max(s.length-1,0),le=Math.min(V,q),Ne=m.useMemo(()=>{const x=s[le]??"";if(G==="characters"){const v=x.split(" ");return v.map((L,z)=>({characters:Tn(L),needsSpace:z!==v.length-1}))}return G==="words"?x.split(" ").map((v,L,z)=>({characters:[v],needsSpace:L!==z.length-1})):G==="lines"?x.split(`
`).map((v,L,z)=>({characters:[v],needsSpace:L!==z.length-1})):x.split(G).map((v,L,z)=>({characters:[v],needsSpace:L!==z.length-1}))},[s,le,G]),re=m.useMemo(()=>{const x=Ne.reduce((L,z)=>L+z.characters.length,0),v=Array.from({length:x},(L,z)=>z).sort(()=>Math.random()-.5);return{total:x,shuffled:v}},[Ne]),Fe=x=>{const{total:v,shuffled:L}=re;return ee==="first"?x*ce:ee==="last"?(v-1-x)*ce:ee==="center"?Math.abs(Math.floor(v/2)-x)*ce:ee==="random"?L[x]*ce:Math.abs(ee-x)*ce},pe=m.useCallback(x=>{var v;x!==U.current&&(U.current=x,te(x),(v=e.current)==null||v.call(e,x))},[]),Ge=m.useCallback(()=>{const x=Math.min(U.current,q);pe(x<q?x+1:Y?0:x)},[q,Y,pe]),Ye=m.useCallback(()=>{const x=Math.min(U.current,q);pe(x>0?x-1:Y?q:x)},[q,Y,pe]),Le=m.useCallback(x=>pe(Math.max(0,Math.min(x,q))),[q,pe]),xe=m.useCallback(()=>pe(0),[pe]);m.useImperativeHandle(i,()=>({next:Ge,previous:Ye,jumpTo:Le,reset:xe}),[Ge,Ye,Le,xe]);const Re=J&&W;m.useEffect(()=>{if(!Ee||Re)return;const x=setTimeout(Ge,ne);return()=>clearTimeout(x)},[Ge,ne,Ee,Re,le]),En(()=>{const x=Se.current;if(!X||!x){Te.set("auto");return}let v=null,L=!1;const z=()=>{const ae=x.offsetWidth+1;if(v==null||v.stop(),!L||C){L=!0,Te.set(ae);return}v=Ae(Te,ae,Mn)};z();const H=typeof ResizeObserver<"u"?new ResizeObserver(z):null;return H==null||H.observe(x),()=>{H==null||H.disconnect(),v==null||v.stop()}},[X,C,Te]);const Oe=x=>{J&&I(!0),be==null||be(x)},ye=x=>{I(!1),fe==null||fe(x)},Be=(cr[y]??cr.slide)(S!=="down"),ge=Q>0?Q:y==="blur"?10:0,ue=h??Be.initial,j=d??Be.animate,we=b??Be.exit,Me=a??Be.transition,n=a||b?null:Be.exitTransition,u=ge>0?_t(ue,`blur(${ge}px)`):ue,c=ge>0?_t(j,"blur(0px)"):j,p=ge>0?_t(we,`blur(${ge}px)`):we,T=y==="flip"?jn:void 0,R=X?{...he,width:Te,backgroundColor:F,color:Sn(F)??(he==null?void 0:he.color)}:he,A=t.jsx(cn,{mode:B,initial:K,children:t.jsx(it.span,{className:vt(G==="lines"?"text-rotate-lines":"text-rotate"),layout:!X,"aria-hidden":"true",children:Ne.map((x,v,L)=>{const z=L.slice(0,v).reduce((H,ae)=>H+ae.characters.length,0);return t.jsxs("span",{className:vt("text-rotate-word",O),children:[x.characters.map((H,ae)=>{const He=Fe(z+ae);return t.jsx(it.span,{initial:u,animate:c,exit:n?{...p,transition:{...n,delay:He}}:p,transition:{...Me,delay:He},className:vt("text-rotate-element",me),style:T,children:H},ae)}),x.needsSpace&&t.jsx("span",{className:"text-rotate-space",children:" "})]},v)})},le)});return t.jsx(ln,{reducedMotion:"user",children:t.jsxs(it.span,{className:vt("text-rotate",X&&"text-rotate-highlight",P),...Ce,style:R,onMouseEnter:Oe,onMouseLeave:ye,layout:!X,transition:a??Rn,children:[t.jsx("span",{className:"text-rotate-sr-only",children:s[le]}),X?t.jsx("span",{ref:Se,className:"text-rotate-highlight-content",children:A}):A]})})});Sr.displayName="RotatingText";const De=96,It=.18,Nn=1024,lr=96,bt=260,An={gloss:0,matte:1,holo:2};let ur=1;const Cn=`#version 300 es
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
}`,Ln=`#version 300 es
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
}`,kn=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,_n=`#version 300 es
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
}`,Xe=(r,i,s)=>Math.min(s,Math.max(i,r)),dr=r=>Math.atan2(Math.sin(r),Math.cos(r)),fr=r=>r*Math.PI/180,Pt=(r,i,s,a,h,d)=>{const b=2*Math.PI*a,y=`${i}V`;r[y]+=(b*b*(s-r[i])-2*h*b*r[y])*d,r[i]+=r[y]*d},mr=(r,i,s)=>{const a=r.createShader(i);return a?(r.shaderSource(a,s),r.compileShader(a),r.getShaderParameter(a,r.COMPILE_STATUS)?a:(r.deleteShader(a),null)):null},hr=(r,i,s)=>{const a=mr(r,r.VERTEX_SHADER,i),h=mr(r,r.FRAGMENT_SHADER,s),d=r.createProgram();if(!a||!h||!d)return null;if(r.attachShader(d,a),r.attachShader(d,h),r.bindAttribLocation(d,0,"aGrid"),r.linkProgram(d),r.deleteShader(a),r.deleteShader(h),!r.getProgramParameter(d,r.LINK_STATUS))return r.deleteProgram(d),null;const b={},y=r.getProgramParameter(d,r.ACTIVE_UNIFORMS);for(let S=0;S<y;S++){const X=r.getActiveUniform(d,S);X&&(b[X.name]=r.getUniformLocation(d,X.name))}return{program:d,uniforms:b}},In=r=>{const i=[...r].sort((d,b)=>d[0]-b[0]||d[1]-b[1]);if(i.length<3)return i;const s=(d,b,y)=>(b[0]-d[0])*(y[1]-d[1])-(b[1]-d[1])*(y[0]-d[0]),a=[];i.forEach(d=>{for(;a.length>=2&&s(a[a.length-2],a[a.length-1],d)<=0;)a.pop();a.push(d)});const h=[];for(let d=i.length-1;d>=0;d--){const b=i[d];for(;h.length>=2&&s(h[h.length-2],h[h.length-1],b)<=0;)h.pop();h.push(b)}return a.slice(0,-1).concat(h.slice(0,-1))},Pn=({imageSrc:r,width:i=200,rotate:s=0,peelDirection:a=0,peelBackHoverPct:h=25,peelBackActivePct:d=40,curlRadius:b=12,finish:y="gloss",backColor:S="#d4d4d8",lightingIntensity:X=.5,shadowIntensity:F=.6,followPointer:B=!0,draggable:K=!0,swing:ne=1,friction:ce=.5,bounce:ee=.35,intro:Y=!0,initialPosition:Ee="center",onDragStart:J,onDragEnd:Q,dpr:G,className:se="",style:be,...fe})=>{const P=m.useRef(null),O=m.useRef(null),me=m.useRef(null),he=m.useRef(null),Ce={imageSrc:r,width:Math.max(16,i),rotate:fr(s),peelDirection:fr(a),hoverPeel:Xe(h,0,100)/100,activePeel:Xe(d,0,100)/100,curlRadius:Math.max(2,b),finish:An[y]??0,backColor:S,lighting:Xe(X,0,1),shadow:Xe(F,0,1),followPointer:B,draggable:K,swing:Xe(ne,0,3),friction:Xe(ce,0,1),bounce:Xe(ee,0,1),intro:Y,initialPosition:Ee,onDragStart:J,onDragEnd:Q,dpr:G},V=m.useRef(Ce);return V.current=Ce,m.useEffect(()=>{var k;const te=P.current,W=O.current,I=me.current,U=te==null?void 0:te.parentElement,e=W==null?void 0:W.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!0,depth:!0,stencil:!1});if(!te||!W||!I||!U||!e)return;const Se=hr(e,Cn,Ln),Te=hr(e,kn,_n);if(!Se||!Te)return;const C=Se.uniforms,q=Te.uniforms,le=[0,1].map(()=>{const l=e.createTexture();e.bindTexture(e.TEXTURE_2D,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const o=e.createFramebuffer();return{texture:l,buffer:o,width:0,height:0}}),Ne=()=>{const l=Math.max(1,Math.round(we.size/2)),o=l;le.forEach(f=>{f.width===l&&f.height===o||(f.width=l,f.height=o,e.bindTexture(e.TEXTURE_2D,f.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,l,o,0,e.RGBA,e.UNSIGNED_BYTE,null),e.bindFramebuffer(e.FRAMEBUFFER,f.buffer),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,f.texture,0))}),e.bindFramebuffer(e.FRAMEBUFFER,null)},re=new Float32Array((De+1)*(De+1)*2);for(let l=0;l<=De;l++)for(let o=0;o<=De;o++){const f=(l*(De+1)+o)*2;re[f]=o/De,re[f+1]=l/De}const Fe=new Uint16Array(De*De*6);let pe=0;for(let l=0;l<De;l++)for(let o=0;o<De;o++){const f=l*(De+1)+o,E=f+1,N=f+De+1,_=N+1;Fe.set([f,E,_,f,_,N],pe),pe+=6}const Ge=e.createVertexArray();e.bindVertexArray(Ge);const Ye=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,Ye),e.bufferData(e.ARRAY_BUFFER,re,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);const Le=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,Le),e.bufferData(e.ELEMENT_ARRAY_BUFFER,Fe,e.STATIC_DRAW);const xe=e.createTexture(),Re=document.createElement("canvas"),Oe=Re.getContext("2d",{willReadFrequently:!0}),ye=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Be=new Map,ge=l=>{const o=String(l),f=Be.get(o);if(f)return f;let E=[.83,.83,.85];if(ye){ye.clearRect(0,0,1,1),ye.fillStyle="#d4d4d8",ye.fillStyle=o,ye.fillRect(0,0,1,1);const[N,_,ve]=ye.getImageData(0,0,1,1).data;E=[N/255,_/255,ve/255]}return Be.set(o,E),E},ue=((k=window.matchMedia)==null?void 0:k.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,j={ready:!1,aspect:1,meshX:1,meshY:1,texel:1,mask:null,maskW:1,maskH:1,hull:[]},we={ratio:1,size:1,density:0},Me={width:1,height:1},n={x:0,y:0,vx:0,vy:0,placed:!1,swing:0,swingV:0,peel:0,peelV:0,lift:0,liftV:0,dir:V.current.peelDirection,hover:!1,local:{x:0,y:0},press:null,pivotV:{x:0,y:0},light:{x:0,y:0,z:bt},pointer:{x:0,y:0,inside:!1},intro:V.current.intro&&!ue?0:1};n.intro<1&&(n.lift=1.5,n.peel=.3,n.swing=.1,n.dir+=.6);let u=0,c=0,p=!0,T=null,R=!0;const A=()=>V.current.width*j.aspect,x=(l,o)=>{const E=V.current.width,N=A();if(!j.hull.length){const je=(Math.abs(l)*E+Math.abs(o)*N)/2;return[-je,je]}let _=1/0,ve=-1/0;return j.hull.forEach(([je,_e])=>{const $=je*E*l+_e*N*o;$<_&&(_=$),$>ve&&(ve=$)}),[_,ve]},v=l=>{if(T=l,j.ready=!1,!l)return;const o=new Image;o.crossOrigin="anonymous",o.decoding="async",o.onload=()=>{if(!R||T!==l||!Oe)return;const f=o.naturalWidth||1,E=o.naturalHeight||1,N=Math.min(1,Nn/(Math.max(f,E)*(1+2*It))),_=Math.max(1,Math.round(f*N)),ve=Math.max(1,Math.round(E*N)),je=Math.round(_*It),_e=Math.round(ve*It);Re.width=_+je*2,Re.height=ve+_e*2,Oe.clearRect(0,0,Re.width,Re.height),Oe.drawImage(o,je,_e,_,ve),e.bindTexture(e.TEXTURE_2D,xe),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,Re),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),j.aspect=E/f,j.meshX=Re.width/_,j.meshY=Re.height/ve,j.texel=Re.width;const $=Math.max(8,Math.round(lr*Math.min(1,f/E))),de=Math.max(8,Math.round(lr*Math.min(1,E/f)));Re.width=$,Re.height=de,Oe.clearRect(0,0,$,de),Oe.drawImage(o,0,0,$,de);const ct=Oe.getImageData(0,0,$,de).data,Ue=new Uint8Array($*de).fill(255),Qe=[],Ie=(oe,ie)=>{const Pe=ie*$+oe;Ue[Pe]===0||ct[Pe*4+3]>100||(Ue[Pe]=0,Qe.push(Pe))};for(let oe=0;oe<$;oe++)Ie(oe,0),Ie(oe,de-1);for(let oe=0;oe<de;oe++)Ie(0,oe),Ie($-1,oe);for(;Qe.length;){const oe=Qe.pop(),ie=oe%$,Pe=(oe-ie)/$;ie>0&&Ie(ie-1,Pe),ie<$-1&&Ie(ie+1,Pe),Pe>0&&Ie(ie,Pe-1),Pe<de-1&&Ie(ie,Pe+1)}const rt=[];for(let oe=0;oe<de;oe++)for(let ie=0;ie<$;ie++)ct[(oe*$+ie)*4+3]>127&&rt.push([(ie+.5)/$-.5,(oe+.5)/de-.5]);j.mask=Ue,j.maskW=$,j.maskH=de,j.hull=In(rt),j.ready=!0,L(),Z()},o.src=l},L=()=>{const l=V.current;we.ratio=Math.min(l.dpr||window.devicePixelRatio||1,2),Me.width=Math.max(1,U.clientWidth),Me.height=Math.max(1,U.clientHeight);const o=A(),f=Math.ceil(Math.hypot(l.width,o)*1.16+2*(36+l.curlRadius));if((f!==we.size||we.ratio!==we.density)&&(we.size=f,we.density=we.ratio,te.style.width=`${f}px`,te.style.height=`${f}px`,W.width=Math.round(f*we.ratio),W.height=Math.round(f*we.ratio)),I.style.width=`${l.width}px`,I.style.height=`${o}px`,!n.placed){const E=l.initialPosition,N=E&&typeof E=="object"?E:{x:0,y:0};n.x=Me.width/2+(N.x||0),n.y=Me.height/2+(N.y||0),n.light={x:n.x-l.width*.45,y:n.y-o*.9,z:bt*1.6},n.placed=!0}H()},z=()=>{const l=V.current,o=l.rotate+n.swing,f=1+.07*Math.max(0,n.lift),E=l.width/2*f,N=A()/2*f,_=Math.abs(Math.cos(o)),ve=Math.abs(Math.sin(o));return{x:E*_+N*ve,y:E*ve+N*_}},H=()=>{const l=V.current,o=z(),f=Math.min(o.x,Me.width/2),E=Math.max(Me.width-o.x,Me.width/2),N=Math.min(o.y,Me.height/2),_=Math.max(Me.height-o.y,Me.height/2);n.x<f?(n.x=f,n.vx<0&&(n.vx=-n.vx*l.bounce)):n.x>E&&(n.x=E,n.vx>0&&(n.vx=-n.vx*l.bounce)),n.y<N?(n.y=N,n.vy<0&&(n.vy=-n.vy*l.bounce)):n.y>_&&(n.y=_,n.vy>0&&(n.vy=-n.vy*l.bounce))},ae=l=>{const o=U.getBoundingClientRect();return{x:l.clientX-o.left-U.clientLeft,y:l.clientY-o.top-U.clientTop}},He=l=>{const f=-(V.current.rotate+n.swing),E=1+.07*Math.max(0,n.lift),N=l.x-n.x,_=l.y-n.y;return{x:(Math.cos(f)*N-Math.sin(f)*_)/E,y:(Math.sin(f)*N+Math.cos(f)*_)/E}},We=l=>{if(!j.mask)return!1;const o=V.current,f=Math.floor((l.x/o.width+.5)*j.maskW),E=Math.floor((l.y/A()+.5)*j.maskH);return f<0||E<0||f>=j.maskW||E>=j.maskH?!1:j.mask[E*j.maskW+f]>100},nt=()=>{const l=V.current,o=we.size;te.style.transform=`translate3d(${n.x-o/2}px, ${n.y-o/2}px, 0)`;const f=l.rotate+n.swing,E=1+.07*Math.max(0,n.lift);if(I.style.transform=`translate(-50%, -50%) rotate(${f}rad) scale(${E})`,e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,W.width,W.height),e.clearColor(0,0,0,0),e.clearDepth(1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),!j.ready)return;const N=l.width,_=A(),ve=-Math.sin(n.dir),je=Math.cos(n.dir),[_e,$]=x(ve,je),de=Xe(n.peel,0,1),ct=_e+de*($-_e),Ue=Math.max(0,n.lift),Qe=o/2,Ie=De*De*6,rt=de>.001;e.useProgram(Se.program),e.bindVertexArray(Ge),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,xe),e.uniform1i(C.uImage,0),e.uniform2f(C.uCanvas,o,o),e.uniform2f(C.uMesh,N*j.meshX,_*j.meshY),e.uniform2f(C.uCenter,Qe,Qe),e.uniform2f(C.uDir,ve,je),e.uniform1f(C.uFold,ct),e.uniform1f(C.uRadius,l.curlRadius),e.uniform1f(C.uAngle,f),e.uniform1f(C.uScale,E),e.uniform1f(C.uLift,Ue*26),e.uniform2f(C.uShadowOffset,1.2,2.4),e.uniform2f(C.uShadowSlope,.28,.55),e.uniform1i(C.uFinish,l.finish),e.uniform3fv(C.uBack,ge(l.backColor)),e.uniform3f(C.uLight,n.light.x-(n.x-Qe),n.light.y-(n.y-Qe),n.light.z),e.uniform1f(C.uShine,l.lighting),e.uniform1f(C.uShadow,l.shadow*.55),e.uniform1f(C.uTexel,j.texel/(N*j.meshX)),e.uniform1f(C.uLod,Math.max(0,Math.log2(j.texel/(N*j.meshX*E*we.ratio))));const oe=He(n.light);if(e.uniform2f(C.uGlint,oe.x/(N*j.meshX)+.5,oe.y/(_*j.meshY)+.5),e.disable(e.DEPTH_TEST),rt){Ne();const[ie,Pe]=le;e.bindFramebuffer(e.FRAMEBUFFER,ie.buffer),e.viewport(0,0,ie.width,ie.height),e.clear(e.COLOR_BUFFER_BIT),e.disable(e.BLEND),e.uniform1i(C.uPass,2),e.drawElements(e.TRIANGLES,Ie,e.UNSIGNED_SHORT,0),e.useProgram(Te.program),e.uniform1i(q.uSource,1),e.uniform1i(q.uMode,0),e.uniform1f(q.uSigma,Math.min(4,(2.5+l.curlRadius*.15)/2)),e.activeTexture(e.TEXTURE1),e.bindFramebuffer(e.FRAMEBUFFER,Pe.buffer),e.bindTexture(e.TEXTURE_2D,ie.texture),e.uniform2f(q.uStep,1/ie.width,0),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,ie.buffer),e.bindTexture(e.TEXTURE_2D,Pe.texture),e.uniform2f(q.uStep,0,1/ie.height),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,W.width,W.height),e.useProgram(Se.program),e.activeTexture(e.TEXTURE0)}e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.uniform1i(C.uPass,0),e.drawElements(e.TRIANGLES,Ie,e.UNSIGNED_SHORT,0),e.uniform1i(C.uPass,1),e.drawElements(e.TRIANGLES,Ie,e.UNSIGNED_SHORT,0),rt&&(e.useProgram(Te.program),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,le[0].texture),e.uniform1i(q.uMode,1),e.uniform1f(q.uStrength,l.shadow*.6),e.drawArrays(e.TRIANGLES,0,3),e.useProgram(Se.program),e.activeTexture(e.TEXTURE0),e.enable(e.DEPTH_TEST),e.depthFunc(e.LESS),e.uniform1i(C.uPass,3),e.drawElements(e.TRIANGLES,Ie,e.UNSIGNED_SHORT,0),e.disable(e.DEPTH_TEST))},ke=l=>{if(u=0,!p||document.hidden)return;const o=V.current,f=c?Xe((l-c)/1e3,.001,1/30):1/60;c=l,o.imageSrc!==T&&v(o.imageSrc);const E=A();n.intro<1&&j.ready&&(n.intro=Math.min(1,n.intro+f/1.1));const N=n.press,_=N&&N.moving?N:null;if(_){const Ue=_.pointer,Qe=_.pivot,Ie=1-Math.exp(-f/.045),rt=n.pivotV.x+((Ue.x-Qe.x)/f-n.pivotV.x)*Ie,oe=n.pivotV.y+((Ue.y-Qe.y)/f-n.pivotV.y)*Ie,ie=(rt-n.pivotV.x)/f,Pe=(oe-n.pivotV.y)/f;n.pivotV.x=rt,n.pivotV.y=oe,_.pivot={x:Ue.x,y:Ue.y};const mt=o.rotate+n.swing,Et=-(Math.cos(mt)*_.grab.x-Math.sin(mt)*_.grab.y),Tt=-(Math.sin(mt)*_.grab.x+Math.cos(mt)*_.grab.y),Nr=(o.width*o.width+E*E)/12+Et*Et+Tt*Tt,Ar=(Et*-Xe(Pe,-24e3,24e3)-Tt*-Xe(ie,-24e3,24e3))/Nr,Rt=2*Math.PI*1.5;n.swingV+=(Ar*1.1*o.swing-Rt*Rt*n.swing-2*.45*Rt*n.swingV)*f,n.swing=Xe(n.swing+n.swingV*f,-1.2,1.2);const ht=o.rotate+n.swing,zt=1+.07*Math.max(0,n.lift);n.x=Ue.x-(Math.cos(ht)*_.grab.x-Math.sin(ht)*_.grab.y)*zt,n.y=Ue.y-(Math.sin(ht)*_.grab.x+Math.cos(ht)*_.grab.y)*zt,H()}else{Pt(n,"swing",0,1.4,.32,f);const Ue=Math.exp(-f*(1.5+9*o.friction));n.vx*=Ue,n.vy*=Ue,Math.hypot(n.vx,n.vy)<4&&(n.vx=0,n.vy=0),n.x+=n.vx*f,n.y+=n.vy*f,H()}const ve=n.intro<.2,je=ve?.3:N?o.activePeel:n.hover?o.hoverPeel:0;Pt(n,"peel",je,N||n.hover?3:3.6,N||n.hover?.7:.62,f),Pt(n,"lift",_?1:0,3.2,.55,f);let _e=o.peelDirection;N&&Math.hypot(N.grab.x,N.grab.y)>Math.min(o.width,E)*.12?_e=Math.atan2(N.grab.x,-N.grab.y):o.followPointer&&n.hover&&Math.hypot(n.local.x,n.local.y)>Math.min(o.width,E)*.12&&(_e=Math.atan2(n.local.x,-n.local.y)),ve||(n.dir+=dr(_e-n.dir)*(1-Math.exp(-f/.12)));const $=n.pointer.inside?{x:n.pointer.x,y:n.pointer.y,z:bt}:{x:n.x-o.width*.45,y:n.y-E*.9,z:bt*1.6},de=1-Math.exp(-f/.08);n.light.x+=($.x-n.light.x)*de,n.light.y+=($.y-n.light.y)*de,n.light.z+=($.z-n.light.z)*de,W.style.opacity=String(Xe(n.intro/.12,0,1)),nt(),n.intro<1&&j.ready||N||Math.abs(n.peel-je)>5e-4||Math.abs(n.peelV)>5e-4||Math.abs(n.lift-(_?1:0))>5e-4||Math.abs(n.liftV)>5e-4||Math.abs(n.swing)>5e-4||Math.abs(n.swingV)>5e-4||n.vx!==0||n.vy!==0||Math.abs(dr(_e-n.dir))>.002||Math.hypot($.x-n.light.x,$.y-n.light.y,$.z-n.light.z)>.5?u=requestAnimationFrame(ke):c=0};function Z(){!u&&p&&!document.hidden&&(u=requestAnimationFrame(ke))}const Ke=l=>{const o=ae(l);n.local=He(o);const f=We(n.local);f!==n.hover&&(n.hover=f),I.style.cursor=f&&V.current.draggable?n.press?"grabbing":"grab":""},$e=l=>{const o=ae(l);n.pointer.x=o.x,n.pointer.y=o.y,n.pointer.inside=o.x>=0&&o.y>=0&&o.x<=Me.width&&o.y<=Me.height,Z()},st=l=>{var f,E;const o=n.press;if(!o)Ke(l);else if(o.id===l.pointerId){const N=ae(l);o.pointer=N,!o.moving&&Math.hypot(N.x-o.origin.x,N.y-o.origin.y)>3&&(o.moving=V.current.draggable,o.moving&&((E=(f=V.current).onDragStart)==null||E.call(f))),o.samples.push({x:N.x,y:N.y,t:performance.now()}),o.samples.length>8&&o.samples.shift()}Z()},Je=()=>{n.press||(n.hover=!1,I.style.cursor="",Z())},tt=l=>{var E;const o=V.current;if(l.button!==0||!j.ready||(Ke(l),!n.hover))return;const f=ae(l);n.press={id:l.pointerId,grab:He(f),origin:f,pointer:f,pivot:f,moving:!1,samples:[]},n.pivotV={x:0,y:0},n.vx=0,n.vy=0,(E=I.setPointerCapture)==null||E.call(I,l.pointerId),o.draggable&&(I.style.cursor="grabbing",ur+=1,te.style.zIndex=String(ur)),l.preventDefault(),Z()},Ze=l=>{var N,_,ve;const o=n.press;if(!o||o.id!==l.pointerId)return;n.press=null,(N=I.hasPointerCapture)!=null&&N.call(I,l.pointerId)&&I.releasePointerCapture(l.pointerId);const f=performance.now(),E=o.samples.filter(je=>f-je.t<90);if(o.moving&&E.length>1&&!ue){const je=E[0],_e=E[E.length-1],$=Math.max(_e.t-je.t,16)/1e3,de=2600;n.vx=Xe((_e.x-je.x)/$,-de,de),n.vy=Xe((_e.y-je.y)/$,-de,de)}Ke(l),l.pointerType!=="mouse"&&(n.hover=!1),o.moving&&((ve=(_=V.current).onDragEnd)==null||ve.call(_)),Z()},M=()=>{n.pointer.inside=!1,Z()},w=()=>{c=0,Z()},g=new ResizeObserver(()=>{L(),Z()});g.observe(U);const D=new IntersectionObserver(l=>{p=l.some(o=>o.isIntersecting),p&&(c=0,Z())});return D.observe(U),window.addEventListener("pointermove",$e,{passive:!0}),document.documentElement.addEventListener("pointerleave",M),document.addEventListener("visibilitychange",w),I.addEventListener("pointermove",st),I.addEventListener("pointerleave",Je),I.addEventListener("pointerdown",tt),I.addEventListener("pointerup",Ze),I.addEventListener("pointercancel",Ze),v(V.current.imageSrc),L(),he.current=()=>{L(),Z()},Z(),()=>{var l;R=!1,cancelAnimationFrame(u),he.current=null,g.disconnect(),D.disconnect(),window.removeEventListener("pointermove",$e),document.documentElement.removeEventListener("pointerleave",M),document.removeEventListener("visibilitychange",w),I.removeEventListener("pointermove",st),I.removeEventListener("pointerleave",Je),I.removeEventListener("pointerdown",tt),I.removeEventListener("pointerup",Ze),I.removeEventListener("pointercancel",Ze),e.deleteTexture(xe),le.forEach(o=>{e.deleteTexture(o.texture),e.deleteFramebuffer(o.buffer)}),e.deleteProgram(Te.program),e.deleteBuffer(Ye),e.deleteBuffer(Le),e.deleteVertexArray(Ge),e.deleteProgram(Se.program),(l=e.getExtension("WEBGL_lose_context"))==null||l.loseContext()}},[]),m.useEffect(()=>{var te;(te=he.current)==null||te.call(he)}),t.jsxs("div",{ref:P,className:`sticker-peel${se?` ${se}`:""}`,style:be,...fe,children:[t.jsx("canvas",{ref:O,className:"sticker-peel-canvas","aria-hidden":"true"}),t.jsx("div",{ref:me,className:"sticker-peel-hit"})]})},Fn=["https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format","https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format","https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format","https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"],pr={fan:[.9,.9],cascade:[.5,.5],deck:[.5,0],pile:[.5,.5]},Un={fan:[1,-.3],cascade:[.8,.6],deck:[0,1]},Dn="0 14px 34px -10px rgba(0, 0, 0, 0.45), 0 3px 8px -2px rgba(0, 0, 0, 0.18)",Xn=6,zn=650,xr=1300,Ft=260,Gn=1.035,On={place:[260,24],settle:[320,34],tuck:[240,28],face:[240,30],lean:[240,28],press:[420,34],fling:[650,42]},Bn=typeof window>"u"?m.useEffect:m.useLayoutEffect,ze=(r,i,s)=>Math.min(s,Math.max(i,r)),yt=(r,i,s)=>r+(i-r)*s,ft=r=>{const i=Math.sin(r*127.1+311.7)*43758.5453;return i-Math.floor(i)},ut=(r,i,s,a,h)=>r==="cascade"?{x:-i*a*28,y:-i*a*28,rotate:0,scale:1-i*h*.07}:r==="deck"?{x:0,y:-i*a*32,rotate:0,scale:1-i*h*.1}:r==="pile"?{x:(ft(s+1)-.5)*a*56,y:(ft(s+2)-.5)*a*44,rotate:(ft(s+3)-.5)*a*40,scale:1-i*h*.03}:{x:0,y:0,rotate:i*a*8,scale:1-i*h*.12},gr=(r,i)=>{const s=r.filter(b=>i-b[2]<=100);if(s.length<2)return[0,0];const a=s[0],h=s[s.length-1],d=Math.max((h[2]-a[2])/1e3,.008);return[(h[0]-a[0])/d,(h[1]-a[1])/d]};function Hn({cards:r,layout:i="fan",visible:s=4,spread:a=.5,depth:h=.5,radius:d=16,frame:b=0,frameColor:y="#ffffff",shadow:S=!0,tilt:X=30,threshold:F=90,speed:B=1,sendToBackOnClick:K=!1,autoplay:ne=!1,autoplayDelay:ce=3e3,pauseOnHover:ee=!1,onChange:Y,className:Ee="",style:J}){const Q=r&&r.length?r:Fn.map((u,c)=>t.jsx("img",{src:u,alt:`Card ${c+1}`,draggable:!1},u)),G=Q.length,se=pr[i]?i:"fan",be=wr(),fe=m.useRef(null),[P,O]=m.useState(()=>Array.from({length:G},(u,c)=>c)),[me,he]=m.useState(!1),[Ce,V]=m.useState(!1),te=m.useRef(P),W=m.useRef(new Map),I=m.useRef(new Map),U=m.useRef(new Map),e=m.useRef(null),Se=m.useRef(!0),Te=m.useRef(!1),C=m.useRef(null),q=m.useRef(null),le=m.useRef(null),Ne=m.useRef(Y);if(Ne.current=Y,P.length!==G||P.some(u=>u>=G)){const u=P.filter(c=>c<G);for(let c=0;c<G;c++)u.includes(c)||u.push(c);te.current=u,O(u)}C.current={layout:se,visible:ze(Math.round(s),1,Math.max(G,1)),spread:ze(a,0,2),depth:ze(h,0,1),tilt:ze(X,0,89),threshold:Math.max(F,0),speed:ze(B,.2,4),sendToBackOnClick:K,count:G,reduceMotion:!!be};const re=u=>{let c=W.current.get(u);if(!c){const p=C.current,T=Math.max(0,te.current.indexOf(u)),R=ut(p.layout,p.reduceMotion?Math.min(T,p.visible-1):0,u,p.spread,p.depth);c={x:Ve(R.x),y:Ve(R.y),rotate:Ve(R.rotate),scale:Ve(R.scale),tiltX:Ve(0),tiltY:Ve(0),spin:Ve(0),lift:Ve(1),grabX:Ve(.5),grabY:Ve(.5),z:Ve(p.count-T),opacity:Ve(T<p.visible?1:0),shade:Ve(0)},W.current.set(u,c)}return c},Fe=(u,c,p={})=>{if(u.reduceMotion)return{duration:.2,ease:"easeOut",delay:p.delay||0};const[T,R]=On[c];return{type:"spring",stiffness:T*u.speed*u.speed,damping:R*u.speed,restDelta:.01,restSpeed:.5,...p}},pe=(u,c,p=0)=>{const T=Fe(c,"face",{delay:p});Ae(u.tiltX,0,T),Ae(u.tiltY,0,T),Ae(u.spin,0,T),Ae(u.lift,1,T)},Ge=(u,c,{delay:p=0,lift:T=0,kind:R="place",velocity:A=null,keepZ:x=!1}={})=>{const v=C.current,L=re(u),z=Math.min(c,v.visible-1),H=ut(v.layout,z,u,v.spread,v.depth);if(T>0&&z>0){const We=ut(v.layout,z-1,u,v.spread,v.depth);H.x=yt(H.x,We.x,T),H.y=yt(H.y,We.y,T),H.rotate=yt(H.rotate,We.rotate,T),H.scale=yt(H.scale,We.scale,T)}const ae=Fe(v,R,{delay:p}),He={duration:v.reduceMotion?.2:.35/v.speed,ease:"easeOut",delay:p};x||L.z.set(v.count-c),Ae(L.x,H.x,A?{...ae,velocity:A[0]}:ae),Ae(L.y,H.y,A?{...ae,velocity:A[1]}:ae),Ae(L.rotate,H.rotate,ae),Ae(L.scale,H.scale,ae),pe(L,v,p),Ae(L.opacity,c<v.visible?1:0,He),Ae(L.shade,Math.min(.6,z*v.depth*.14*(1-T)),He)},Ye=({stagger:u=0,lift:c=0,released:p=-1,velocity:T=null,kind:R="place"}={})=>{const A=e.current;te.current.forEach((x,v)=>{const L=U.current.get(x);if(L&&!L.turned||A&&A.moved&&A.card===x)return;const z=x===p;Ge(x,v,{delay:v*u,lift:v>0?c:0,kind:L?"tuck":z?"settle":R,velocity:z?T:null,keepZ:!!L})})},Le=u=>{te.current=u,O(u)},xe=(u,c=null)=>{var D;const p=C.current,T=te.current;if(T.length<2)return;const R=T[0];if(U.current.has(R))return;const A=[...T.slice(1),R];if(p.reduceMotion){Le(A);return}let[x,v]=u||Un[p.layout]||[Math.cos(ft(R+9)*6.283),Math.sin(ft(R+9)*6.283)];const L=Math.hypot(x,v)||1;x/=L,v/=L;const z=(D=fe.current)==null?void 0:D.getBoundingClientRect(),H=(z==null?void 0:z.width)||240,ae=(z==null?void 0:z.height)||240,He=Math.min(H/Math.max(Math.abs(x),.01),ae/Math.max(Math.abs(v),.01)),We=ut(p.layout,0,R,p.spread,p.depth),nt=He*1.12+40,ke=[We.x+x*nt,We.y+v*nt],Z=re(R),Ke=Fe(p,"fling"),$e={turned:!1};U.current.set(R,$e),Z.z.set(p.count+1),Ae(Z.x,ke[0],c?{...Ke,velocity:c[0]}:Ke),Ae(Z.y,ke[1],c?{...Ke,velocity:c[1]}:Ke),pe(Z,p),Le(A);const st=Math.max(Math.hypot(ke[0]-Z.x.get(),ke[1]-Z.y.get()),1);let Je=!1;const tt=()=>{$e.turned=!0;const k=te.current.indexOf(R);k>=0&&Ge(R,k,{kind:"tuck",keepZ:!Je})},Ze=()=>{Je=!0,U.current.get(R)===$e&&U.current.delete(R);const k=te.current.indexOf(R);k>=0&&Z.z.set(C.current.count-k)},M=setTimeout(()=>{$e.turned||tt(),Je||Ze()},1500/p.speed),w=()=>{const k=I.current.get(R);if(!k)return!0;const l=k.getBoundingClientRect();for(const[o,f]of I.current){if(o===R||U.current.has(o)||re(o).opacity.get()<.5)continue;const E=f.getBoundingClientRect();if(l.left<E.right&&l.right>E.left&&l.top<E.bottom&&l.bottom>E.top)return!1}return!0},g=()=>{if(!Se.current||$e.turned&&Je){clearTimeout(M);return}const k=Z.x.get(),l=Z.y.get(),o=Z.x.getVelocity()*x+Z.y.getVelocity()*v;!$e.turned&&(Math.hypot(ke[0]-k,ke[1]-l)<=st*.06||o<0)&&tt(),!Je&&(w()||$e.turned&&o<0)&&Ze(),requestAnimationFrame(g)};requestAnimationFrame(g)},Re=u=>{const c=C.current;if(c.reduceMotion)return;const p=re(u.card),T=p.x.get()-u.homeX,R=p.y.get()-u.homeY,A=ze(u.vx/xr,-1,1)*.7+ze(T/Ft,-1,1)*.3,x=ze(-u.vy/xr,-1,1)*.7+ze(-R/Ft,-1,1)*.3,v=Fe(c,"lean");Ae(p.tiltY,A*c.tilt,v),Ae(p.tiltX,x*c.tilt,v),Ae(p.spin,ze(T/Ft,-1,1)*6,v)},Oe=u=>{const c=e.current;if(!c||u.pointerId!==c.id)return;const p=C.current,T=u.clientX-c.startX,R=u.clientY-c.startY,A=re(c.card);if(!c.moved){if(Math.hypot(T,R)<Xn)return;c.moved=!0,A.x.stop(),A.y.stop(),c.originX=A.x.get()-T,c.originY=A.y.get()-R;try{c.element.setPointerCapture(c.id)}catch{c.capture=!1}he(!0)}A.x.set(c.originX+T),A.y.set(c.originY+R),c.samples.push([u.clientX,u.clientY,u.timeStamp]),c.samples.length>12&&c.samples.shift(),[c.vx,c.vy]=gr(c.samples,u.timeStamp),Re(c),clearTimeout(c.idle),c.idle=setTimeout(()=>{e.current===c&&(c.vx=0,c.vy=0,Re(c))},70);const x=ze(Math.hypot(T,R)/Math.max(p.threshold,1),0,1);Math.abs(x-c.progress)>.02&&(c.progress=x,Ye({lift:x*.4,kind:"settle"}))},ye=u=>{const c=e.current;if(!c||u.pointerId!==c.id)return;e.current=null,clearTimeout(c.idle),window.removeEventListener("pointermove",le.current.move),window.removeEventListener("pointerup",le.current.up),window.removeEventListener("pointercancel",le.current.up);try{c.element.releasePointerCapture(c.id)}catch{c.capture=!1}const p=C.current;if(!c.moved){u.type==="pointerup"&&p.sendToBackOnClick?xe(null):pe(re(c.card),p);return}he(!1);const T=u.clientX-c.startX,R=u.clientY-c.startY,[A,x]=gr(c.samples,u.timeStamp),v=Math.hypot(T,R),L=Math.hypot(A,x),z=L>zn&&v>16&&A*T+x*R>0;u.type==="pointerup"&&p.count>1&&(v>p.threshold||z)?xe(L>300?[A,x]:[T,R],[A,x]):Ye({released:c.card,velocity:[ze(A,-3e3,3e3),ze(x,-3e3,3e3)]})},Be=(u,c)=>{if(u.button!==0||e.current||te.current[0]!==c||U.current.has(c))return;const p=C.current,T=re(c),R=ut(p.layout,0,c,p.spread,p.depth),A=u.currentTarget.getBoundingClientRect();T.grabX.set(ze((u.clientX-A.left)/Math.max(A.width,1),0,1)),T.grabY.set(ze((u.clientY-A.top)/Math.max(A.height,1),0,1)),p.reduceMotion||Ae(T.lift,Gn,Fe(p,"press")),e.current={card:c,id:u.pointerId,element:u.currentTarget,startX:u.clientX,startY:u.clientY,originX:0,originY:0,homeX:R.x,homeY:R.y,vx:0,vy:0,idle:0,moved:!1,progress:0,samples:[[u.clientX,u.clientY,u.timeStamp]]},u.pointerType==="mouse"&&u.preventDefault(),window.addEventListener("pointermove",le.current.move),window.addEventListener("pointerup",le.current.up),window.addEventListener("pointercancel",le.current.up)},ge=u=>{u.target===u.currentTarget&&["ArrowRight","ArrowDown","Enter"," "].includes(u.key)&&(u.preventDefault(),xe(null))};q.current={placeAll:Ye,sendToBack:xe,onMove:Oe,onUp:ye},le.current||(le.current={move:u=>q.current.onMove(u),up:u=>q.current.onUp(u)}),Bn(()=>{te.current=P,q.current.placeAll({stagger:Te.current?0:.06}),Te.current=!0},[P,se,s,a,h,B,G]);const ue=P[0],j=m.useRef(!1);m.useEffect(()=>{var u;if(!j.current){j.current=!0;return}ue!==void 0&&((u=Ne.current)==null||u.call(Ne,ue))},[ue]),m.useEffect(()=>{if(!ne||G<2||me||ee&&Ce)return;const u=setTimeout(()=>q.current.sendToBack(null),Math.max(300,ce));return()=>clearTimeout(u)},[ne,ce,ee,Ce,me,P,G]),m.useEffect(()=>{Se.current=!0;const u=W.current,c=le.current;return()=>{Se.current=!1,e.current&&clearTimeout(e.current.idle),window.removeEventListener("pointermove",c.move),window.removeEventListener("pointerup",c.up),window.removeEventListener("pointercancel",c.up),u.forEach(p=>Object.values(p).forEach(T=>T.stop()))}},[]);const[we,Me]=pr[se],n=Math.max(0,d-b);return t.jsx("div",{ref:fe,className:`stack ${Ee}`.trim(),style:J,tabIndex:0,role:"group","aria-label":"Card stack",onKeyDown:ge,onMouseEnter:()=>V(!0),onMouseLeave:()=>V(!1),children:Q.map((u,c)=>{const p=re(c),T=P[0]===c;return t.jsx(it.div,{ref:R=>{R?I.current.set(c,R):I.current.delete(c)},className:"stack-card","data-top":T?"":void 0,"aria-hidden":T?void 0:!0,style:{x:p.x,y:p.y,rotate:p.rotate,scale:p.scale,zIndex:p.z,opacity:p.opacity,originX:we,originY:Me,cursor:T?me?"grabbing":"grab":"default",touchAction:T?"pan-y":"auto"},onPointerDown:R=>Be(R,c),children:t.jsxs(it.div,{className:"stack-card-face",style:{rotateX:p.tiltX,rotateY:p.tiltY,rotate:p.spin,scale:p.lift,originX:p.grabX,originY:p.grabY,transformPerspective:800,borderRadius:d,padding:b,backgroundColor:b>0?y:"transparent",boxShadow:S?Dn:"none"},children:[t.jsx("div",{className:"stack-card-content",style:{borderRadius:n},children:u}),t.jsx(it.div,{className:"stack-card-shade",style:{opacity:p.shade,borderRadius:d}})]})},c)})})}const $n=[{name:"Govt. Recognized",desc:"Authorized vocational board",icon:Tr},{name:"ISO 9001:2015",desc:"Certified quality standards",icon:Ur},{name:"Skill India",desc:"Kaushal Bharat certified",image:"/assets/recognition/skill-india.png"},{name:"Ministry of MSME",desc:"Govt. of India registered",image:"/assets/recognition/msme.png"},{name:"Digital India",desc:"Power to empower initiatives",image:"/assets/recognition/digital-india.png"}],vr=[{title:"Data and AI",desc:"Data science, analytics, machine learning, generative AI, and advanced Excel modeling.",icon:Dr,color:"bg-blue-50 text-primary border-blue-200/60",count:"3 courses",link:"/courses?category=Data and AI"},{title:"Digital marketing",desc:"SEO, social media, Google Ads, content marketing, reputation, and AI ad suites.",icon:Xr,color:"bg-emerald-50 text-emerald-600 border-emerald-200/60",count:"2 courses",link:"/courses?category=Digital marketing"},{title:"Web and software",desc:"Full stack web development, Android, Java, PHP, MySQL, C/C++, and software engineering.",icon:zr,color:"bg-indigo-50 text-indigo-600 border-indigo-200/60",count:"3 courses",link:"/courses?category=Web and software"},{title:"Design and video",desc:"Graphic design, UI/UX with Figma, video editing with Premiere Pro, and After Effects VFX.",icon:Gr,color:"bg-rose-50 text-rose-600 border-rose-200/60",count:"4 courses",link:"/courses?category=Design and video"},{title:"Office and accounts",desc:"Digital office automation, Tally Prime with GST, taxation diplomas, and DCA programs.",icon:Or,color:"bg-amber-50 text-amber-600 border-amber-200/60",count:"5 courses",link:"/courses?category=Office and accounts"},{title:"Cyber security",desc:"Ethical hacking, network defense, footprinting, system auditing, and security protocols.",icon:Br,color:"bg-cyan-50 text-cyan-600 border-cyan-200/60",count:"1 course",link:"/courses?category=Cyber security"}],Vn=[{num:"01",title:"Industrial faculties",desc:"Learn directly from practicing IT professionals who bring real-world architecture into class.",icon:Hr,tag:"Direct Mentorship"},{num:"02",title:"Quality teaching",desc:"Rigorous step-by-step pedagogy emphasizing practical problem solving over passive lectures.",icon:Er,tag:"Hands-on Labs"},{num:"03",title:"100% job assistance",desc:"Dedicated career guidance, resume building, mock interviews, and direct referral drives.",icon:$r,tag:"Placement Cell"},{num:"04",title:"Flexible timing",desc:"Morning, afternoon, evening, and weekend slots suited for students and working professionals.",icon:Vr,tag:"Flexible Slots"},{num:"05",title:"Extra practice hour",desc:"Unlimited lab access beyond standard lecture hours to practice code, models, and designs.",icon:Tr,tag:"Free Lab Hours"},{num:"06",title:"Small batch",desc:"Strictly limited student numbers per batch ensuring personal attention and one-on-one code reviews.",icon:qr,tag:"Personalized Focus"}],br=[{name:"Python",cat:"Data & Dev"},{name:"Power BI",cat:"Analytics"},{name:"Tableau",cat:"Analytics"},{name:"SQL",cat:"Database"},{name:"Excel",cat:"Analytics"},{name:"Tally Prime",cat:"Finance"},{name:"Photoshop",cat:"Design"},{name:"Premiere Pro",cat:"Video"},{name:"After Effects",cat:"VFX"},{name:"Figma",cat:"UI/UX"},{name:"WordPress",cat:"Web"},{name:"Java",cat:"Backend"}];function rs(){const r=yr(),i=Zr.map(s=>t.jsxs("div",{className:"w-full h-full bg-surface border border-line/80 rounded-card p-6 sm:p-7 flex flex-col justify-between shadow-card text-left select-none",children:[t.jsxs("div",{className:"space-y-3",children:[t.jsx("div",{className:"flex items-center gap-1 text-amber-500",children:[...Array(5)].map((a,h)=>t.jsx($t,{size:15,fill:"currentColor"},h))}),t.jsxs("p",{className:"text-deep text-xs sm:text-sm sm:text-[14px] leading-relaxed line-clamp-4 italic",children:['"',s.quote,'"']})]}),t.jsxs("div",{className:"flex items-center gap-3 pt-3.5 border-t border-line/50",children:[t.jsx("img",{src:s.image,alt:s.name,className:"w-10 h-10 rounded-full object-cover border border-line/80 shadow-sm",loading:"lazy"}),t.jsxs("div",{className:"min-w-0",children:[t.jsx("p",{className:"text-sm font-bold text-deep truncate",children:s.name}),t.jsx("p",{className:"text-xs text-muted truncate",children:"Alumni · Brochure Verified"})]})]})]},s.id));return t.jsxs("div",{className:"space-y-24 sm:space-y-32 w-full overflow-x-clip",children:[t.jsxs("section",{className:"relative pt-8 sm:pt-16 pb-12 overflow-x-clip w-full",children:[et.heroBackground&&!r?t.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-25 sm:opacity-35 -z-10 overflow-hidden select-none",children:t.jsx(pt,{className:"pointer-events-none select-none",isCanvasOrWebGL:!0,fallback:t.jsx("div",{className:"w-full h-full bg-grid-dots opacity-40 pointer-events-none"}),children:t.jsx(or,{shape:"horizon",colors:["#1e3fd8","#f6f8ff","#a5d8ff","#38bdf8"],characters:" =+xX0S8#@",cellSize:18,density:.8,speed:.5,glyphOpacity:.4,className:"w-full h-full pointer-events-none"})})}):t.jsx("div",{className:"absolute inset-0 bg-grid-dots opacity-40 -z-10 pointer-events-none"}),t.jsx("div",{className:"w-full max-w-content mx-auto px-4 sm:px-6",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center",children:[t.jsxs("div",{className:"lg:col-span-7 min-w-0 space-y-6 text-left",children:[t.jsx("div",{className:"flex items-center gap-3",children:t.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-line/90 shadow-sm text-xs font-semibold text-deep",children:[t.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot inline-block"}),t.jsx("span",{children:"Govt. Recognized · ISO 9001:2015 certified board"})]})}),t.jsxs("h1",{"aria-label":"Learn data, design, marketing, web and accounts skills Mumbai's teams hire for.",className:"text-3xl sm:text-5xl lg:text-7xl font-bold text-deep tracking-tight leading-[1.08] break-words",children:[t.jsx("span",{children:"Learn "}),et.rotatingText&&!r?t.jsx("span",{className:"inline-block min-w-[9ch] text-left align-baseline","aria-hidden":"true",children:t.jsx(Sr,{texts:["data","design","marketing","web","accounts"],mainClassName:"inline-flex text-primary font-bold",rotationInterval:2400,staggerDuration:.03})}):t.jsx("span",{className:"text-primary font-bold",children:"data"})," ",t.jsx("br",{className:"sm:hidden"}),"skills Mumbai's teams ",t.jsx("br",{className:"sm:hidden"})," hire for."]}),t.jsx("p",{className:"text-muted text-base sm:text-lg sm:text-[19px] leading-relaxed max-w-xl",children:"Industry-led courses in data, digital marketing, web development, design and accounting, taught in small batches at four Mumbai branches."}),t.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2",children:[t.jsx(Yr,{as:"div",color:"#4a6df0",trailColor:"#2448c9",radius:9999,theme:"light",className:"!p-0 !bg-transparent !border-0 inline-block rounded-full shadow-button",children:t.jsx(at,{to:"/courses",size:"lg",variant:"primary",magnet:!0,children:"Explore courses"})}),t.jsx(at,{to:"/contact",size:"lg",variant:"ghost",children:"Book a free demo"})]}),t.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-2 text-xs text-muted",children:[t.jsxs("span",{className:"font-semibold text-deep flex items-center gap-1",children:[t.jsx(Fr,{size:13,className:"text-primary"}),t.jsx("span",{children:"4 Mumbai Branches:"})]}),t.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Goregaon West"}),t.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Behram Baug"}),t.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Jogeshwari West"}),t.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Motilal Nagar"})]})]}),t.jsxs("div",{className:"lg:col-span-5 flex justify-center relative",children:[t.jsx(un,{}),et.stickerPeel&&t.jsx("div",{className:"absolute -top-6 -right-6 hidden sm:block w-28 h-28 pointer-events-auto z-20",children:t.jsx(pt,{isCanvasOrWebGL:!0,fallback:t.jsx("div",{className:"w-24 h-24 rounded-[22px] bg-surface/95 backdrop-blur border border-line/80 shadow-md p-2 hover:rotate-3 transition-transform flex items-center justify-center",children:t.jsx("img",{src:"/assets/recognition/job-assistance-badge.png",alt:"100% job assistance",className:"w-full h-full object-contain"})}),children:t.jsx(Pn,{imageSrc:"/assets/recognition/job-assistance-badge.png",width:100,peelDirection:45,peelBackHoverPct:35,peelBackActivePct:50,finish:"gloss",draggable:!1,className:"cursor-pointer"})})})]})]})})]}),t.jsx("section",{className:"bg-soft/70 border-y border-line/70 py-8 sm:py-10",children:t.jsx("div",{className:"max-w-content mx-auto px-6",children:t.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center",children:[t.jsxs("div",{className:"p-3",children:[t.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-deep font-display tracking-tight flex items-center justify-center",children:et.countUp&&!r?t.jsx(xt,{to:Bt.length,duration:1.6}):Bt.length}),t.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Mumbai branches"})]}),t.jsxs("div",{className:"p-3",children:[t.jsxs("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display tracking-tight flex items-center justify-center",children:[et.countUp&&!r?t.jsx(xt,{to:qt.length,duration:1.8}):qt.length,t.jsx("span",{children:"+"})]}),t.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Industry courses"})]}),t.jsxs("div",{className:"p-3",children:[t.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-deep font-display tracking-tight flex items-center justify-center",children:et.countUp&&!r?t.jsx(xt,{to:100,duration:2,suffix:"%"}):"100%"}),t.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Job assistance"})]}),t.jsxs("div",{className:"p-3",children:[t.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display tracking-tight flex items-center justify-center",children:et.countUp&&!r?t.jsx(xt,{to:6,duration:1.5}):6}),t.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Educational pillars"})]})]})})}),t.jsx("section",{className:"max-w-content mx-auto px-6",children:t.jsx(ot,{children:t.jsxs("div",{className:"bg-surface border border-line/80 rounded-panel p-6 sm:p-8 shadow-card",children:[t.jsx("p",{className:"text-center text-xs font-bold uppercase tracking-wider text-muted mb-6",children:"Recognized and certified for vocational excellence"}),t.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center",children:$n.map(s=>t.jsxs("div",{className:"p-4 text-center rounded-2xl bg-background border border-line/70 hover:border-primary/40 hover:shadow-sm transition-all duration-300 flex flex-col items-center justify-center min-h-[105px] group",children:[s.image?t.jsx("img",{src:s.image,alt:s.name,className:"h-9 w-auto object-contain mb-2 group-hover:scale-105 transition-transform",loading:"lazy"}):s.icon?t.jsx("div",{className:"w-8 h-8 rounded-full bg-soft text-primary flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform",children:t.jsx(s.icon,{size:18})}):null,t.jsx("p",{className:"text-xs sm:text-sm font-bold text-deep leading-tight",children:s.name}),t.jsx("p",{className:"text-[11px] text-muted mt-0.5",children:s.desc})]},s.name))})]})})}),t.jsx("section",{className:"max-w-content mx-auto px-6",children:t.jsx(ot,{children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[t.jsxs("div",{className:"lg:col-span-5 space-y-6 text-left",children:[t.jsx("h2",{className:"text-[clamp(32px,4.4vw,52px)] font-bold text-deep tracking-tight leading-tight",children:"Pick your track."}),t.jsx("p",{className:"text-muted text-base sm:text-lg leading-relaxed",children:"Explore specialized technology tracks designed around real job requirements, hands-on lab projects, and direct Mumbai recruitment drives."}),t.jsx("div",{className:"pt-2",children:t.jsx(at,{to:"/courses",size:"lg",variant:"primary",children:"Explore courses"})})]}),t.jsx("div",{className:"lg:col-span-7 flex justify-center",children:et.cardSwap&&!r?t.jsx("div",{className:"relative w-full max-w-[480px] h-[340px] sm:h-[380px] flex items-center justify-center",children:t.jsx(Wr,{width:400,height:260,cardRadius:22,visibleCards:4,theme:"light",autoplay:!0,pauseOnHover:!0,delay:3500,className:"w-full h-full",children:vr.map(s=>{const a=s.icon;return t.jsx(Kr,{children:t.jsxs("div",{className:"w-full h-full p-6 sm:p-7 flex flex-col justify-between bg-surface rounded-card border border-line/90 shadow-card text-left select-none",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("div",{className:`w-11 h-11 rounded-xl ${s.color} border flex items-center justify-center shadow-sm`,children:t.jsx(a,{size:22})}),t.jsx("span",{className:"text-xs font-semibold px-2.5 py-0.5 rounded-full bg-background border border-line/70 text-muted",children:s.count})]}),t.jsx("h3",{className:"text-xl font-bold text-deep mb-2",children:s.title}),t.jsx("p",{className:"text-xs sm:text-sm text-muted leading-relaxed line-clamp-3",children:s.desc})]}),t.jsx("div",{className:"pt-4 border-t border-line/50 flex items-center justify-between text-xs font-semibold text-primary",children:t.jsxs(jt,{to:s.link,className:"hover:underline flex items-center gap-1",children:[t.jsx("span",{children:"Browse track"}),t.jsx(Vt,{size:14})]})})]})},s.title)})})}):t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full",children:vr.map(s=>{const a=s.icon;return t.jsx(jt,{to:s.link,className:"bg-surface border border-line/80 rounded-card p-5 shadow-card hover:border-primary/40 transition-all flex flex-col justify-between",children:t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-3",children:[t.jsx("div",{className:`w-9 h-9 rounded-lg ${s.color} border flex items-center justify-center`,children:t.jsx(a,{size:18})}),t.jsx("span",{className:"text-xs text-muted font-medium",children:s.count})]}),t.jsx("h3",{className:"text-base font-bold text-deep",children:s.title}),t.jsx("p",{className:"text-xs text-muted mt-1 line-clamp-2",children:s.desc})]})},s.title)})})})]})})}),t.jsx("section",{className:"max-w-content mx-auto px-6",children:t.jsxs(ot,{children:[t.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-14",children:[t.jsx("h2",{className:"text-[clamp(32px,4.4vw,52px)] font-bold text-deep",children:"Why Infodesk."}),t.jsx("p",{className:"text-muted text-base sm:text-lg mt-3",children:"Six foundational pillars taken directly from our educational charter to ensure every student succeeds."})]}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:Vn.map(s=>{const a=s.icon;return t.jsxs(Jr,{spotlightColor:"rgba(36, 72, 201, 0.16)",shape:"circle",intensity:.22,theme:"light",className:"!bg-surface !border !border-line/80 !rounded-card p-6 !shadow-card hover:!border-primary/40 transition-all duration-300",children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-xl bg-soft text-primary flex items-center justify-center shadow-sm",children:t.jsx(a,{size:20})}),t.jsx("span",{className:"font-mono text-xs font-bold text-muted/60 bg-background px-2 py-0.5 rounded-md border border-line/50",children:s.num})]}),t.jsx("div",{className:"flex items-center gap-2 mb-1.5",children:t.jsx("h3",{className:"text-lg font-bold text-deep",children:s.title})}),t.jsx("p",{className:"text-muted text-sm leading-relaxed mb-4",children:s.desc}),t.jsx("div",{className:"pt-3 border-t border-line/40",children:t.jsx("span",{className:"inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-soft/60 text-deep",children:s.tag})})]},s.title)})})]})}),t.jsx("section",{className:"max-w-content mx-auto px-6",children:t.jsxs(ot,{children:[t.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-10",children:[t.jsx("h2",{className:"text-[clamp(32px,4.4vw,52px)] font-bold text-deep",children:"Student voices."}),t.jsx("p",{className:"text-muted text-base sm:text-lg mt-3",children:"Hear verified feedback from students who transformed their technical careers through our Mumbai batches."})]}),t.jsx("div",{className:"w-full max-w-lg h-[340px] sm:h-[360px] mx-auto relative",children:t.jsx(Hn,{cards:i,layout:"fan",visible:4,spread:.3,depth:.4,radius:22,sendToBackOnClick:!0,autoplay:!r,autoplayDelay:4500,pauseOnHover:!0})}),t.jsx("div",{className:"text-center mt-8",children:t.jsxs(jt,{to:"/placements",className:"inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-bright transition-colors",children:[t.jsx("span",{children:"Read more placement stories"}),t.jsx(Vt,{size:15})]})})]})}),t.jsx("section",{className:"max-w-content mx-auto px-6",children:t.jsx(ot,{children:t.jsxs("div",{className:"bg-[#101f5c] text-white rounded-band p-8 sm:p-14 shadow-signature overflow-hidden relative",children:[t.jsx("div",{className:"absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-bright/20 blur-3xl pointer-events-none"}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10",children:[t.jsxs("div",{className:"lg:col-span-7 space-y-5",children:[t.jsxs("span",{className:"inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/95 border border-white/20",children:[t.jsx($t,{size:13,className:"text-amber-400 fill-amber-400"}),t.jsx("span",{children:"National Institutional Honor"})]}),t.jsx("h2",{className:"text-[clamp(28px,3.8vw,44px)] font-bold text-white tracking-tight leading-tight",children:"India's Best Institute award, honored by Ashneer Grover."}),t.jsx("p",{className:"text-white/80 text-base leading-relaxed max-w-xl",children:"Our institution was recognized nationally for educational excellence and quality career training, with the prestigious award presented personally by entrepreneur Ashneer Grover."}),t.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-4",children:[t.jsx(at,{to:"/about",size:"md",variant:"white",children:"Read the award story"}),t.jsx("span",{className:"text-xs text-white/60 font-mono",children:"Official ceremony · Delhi, India"})]})]}),t.jsxs("div",{className:"lg:col-span-5 grid grid-cols-2 gap-3.5",children:[t.jsx("div",{className:"rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/20 group",children:t.jsx("img",{src:"/assets/awards/ashneer-award-main.jpg",alt:"Ashneer Grover presenting India's Best Institute award to Infodesk Computer Education",className:"w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500",loading:"lazy"})}),t.jsx("div",{className:"rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/20 group",children:t.jsx("img",{src:"/assets/awards/ashneer-award-1.jpg",alt:"Infodesk team on stage at national award ceremony",className:"w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500",loading:"lazy"})})]})]})]})})}),t.jsxs("section",{className:"w-full max-w-full overflow-hidden py-8 border-y border-line/60 bg-surface",children:[t.jsx("div",{className:"max-w-content mx-auto px-4 sm:px-6 mb-4 text-center",children:t.jsx("p",{className:"text-xs uppercase font-bold tracking-wider text-muted",children:"Industry tools and technologies taught in our labs"})}),r?t.jsx("div",{className:"max-w-content mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-3",children:br.map(s=>t.jsxs("span",{className:"inline-flex items-center gap-2 text-sm font-semibold text-deep px-4 py-2 rounded-full bg-soft border border-primary/20 shadow-sm",children:[t.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-primary inline-block"}),t.jsx("span",{children:s.name}),t.jsx("span",{className:"text-[10px] text-muted font-normal bg-white/60 px-1.5 py-0.5 rounded",children:s.cat})]},s.name))}):t.jsx("div",{className:"w-full max-w-full overflow-hidden py-1",children:t.jsx(en,{logos:br,ariaLabel:"Industry tools and technologies",speed:60,direction:"left",gap:24,pauseOnHover:!0,fadeOut:!0,fadeOutWidth:.12,renderItem:s=>t.jsxs("span",{className:"inline-flex items-center gap-2 text-sm font-semibold text-deep px-4 py-2 rounded-full bg-soft border border-primary/25 shadow-sm transition-transform hover:scale-105 select-none",children:[t.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-primary inline-block"}),t.jsx("span",{children:s.name}),t.jsx("span",{className:"text-[10px] text-muted font-normal bg-white/70 px-1.5 py-0.5 rounded",children:s.cat})]},s.name)})})]}),t.jsx("section",{className:"max-w-content mx-auto px-6",children:t.jsx(ot,{children:t.jsxs("div",{className:"bg-deep rounded-band p-8 sm:p-14 text-center text-white space-y-6 shadow-signature relative overflow-hidden",children:[et.homeClosingBanner&&!r&&t.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-30 z-0 overflow-hidden",children:t.jsx(pt,{isCanvasOrWebGL:!0,fallback:t.jsx("div",{className:"w-full h-full bg-deep"}),children:t.jsx(or,{shape:"rise",cellSize:16,density:.6,glyphOpacity:.6,colors:["#10173a","#13266f","#2448c9","#4a6df0"],characters:" =+xX0S8#@",speed:.4,mouseInteraction:!1,className:"w-full h-full"})})}),t.jsxs("div",{className:"relative z-10 space-y-6",children:[t.jsx("h2",{className:"text-[clamp(30px,4.2vw,48px)] font-bold text-white tracking-tight",children:"Try a free demo class."}),t.jsx("p",{className:"text-white/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed",children:"Experience our teaching firsthand before enrolling. Visit any of our four Mumbai branches or attend a preview session with our faculty."}),t.jsx("div",{className:"pt-2 flex justify-center",children:t.jsx(pt,{isCanvasOrWebGL:!0,fallback:t.jsx(at,{to:"/contact",size:"lg",variant:"white",children:"Book your demo"}),children:t.jsx(Qr,{color:"#7df9ff",glowColor:"#38bdf8",borderRadius:9999,theme:"dark",speed:.8,intensity:.9,className:"inline-block rounded-full",children:t.jsx(at,{to:"/contact",size:"lg",variant:"white",children:"Book your demo"})})})})]})]})})})]})}export{rs as default};
