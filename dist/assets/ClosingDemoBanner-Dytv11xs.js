import{j as d}from"./vendor-motion-iuFgYMdS.js";import{r as v,L as eo}from"./vendor-react-6YCBRoeX.js";import{d as to,m as Jt,B as kr,e as ro,p as oo,i as no,j as so}from"./index-CHZFJ1gh.js";import{g as Ot}from"./vendor-gsap-CnPRBKv6.js";import{a as ao}from"./ScrollReveal-BWxX0vM2.js";import{c as io,F as lo,d as lr}from"./vendor-icons-CyNvKEFQ.js";import{L as co,S as uo}from"./SpotlightCard-C3Psjj7n.js";const yr=5,Kr=3,fo=2.4,ho=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,po=`#version 300 es
precision highp float;
precision highp int;
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uStops[${yr}];
uniform int uStopCount;
uniform float uAmplitude;
uniform float uBlend;
uniform float uHeight;
uniform float uScale;
uniform float uGlow;
uniform float uBrightness;
uniform int uLayers;
uniform float uFlip;
uniform vec3 uPointer;
uniform float uReveal;
uniform float uOpacity;
uniform float uLightMode;
out vec4 outColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float smootherstep(float edge0, float edge1, float x) {
  float t = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

vec3 oklabToLinear(vec3 c) {
  float l = c.x + 0.3963377774 * c.y + 0.2158037573 * c.z;
  float m = c.x - 0.1055613458 * c.y - 0.0638541728 * c.z;
  float s = c.x - 0.0894841775 * c.y - 1.2914855480 * c.z;
  l = l * l * l;
  m = m * m * m;
  s = s * s * s;
  return vec3(
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s
  );
}

vec3 toSrgb(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

vec3 ramp(float t) {
  float x = clamp(t, 0.0, 1.0) * float(uStopCount - 1);
  int i = int(min(floor(x), float(uStopCount - 2)));
  float f = x - float(i);
  f = f * f * (3.0 - 2.0 * f);
  vec3 lch = mix(uStops[i], uStops[i + 1], f);
  lch.x = mix(lch.x, min(lch.x, 0.7), uLightMode);
  return toSrgb(oklabToLinear(vec3(lch.x, lch.y * cos(lch.z), lch.y * sin(lch.z))));
}

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  float y = 1.0 - frag.y / uResolution.y;
  y = mix(y, 1.0 - y, uFlip);
  float u = frag.x / uResolution.x;
  float X = (frag.x - uResolution.x * 0.5) / uResolution.y;
  float t = uTime;
  float reach = uPointer.z * exp(-pow((X - uPointer.x) / 0.38, 2.0));

  vec3 glow = vec3(0.0);
  float cover = 0.0;
  for (int k = 0; k < ${Kr}; k++) {
    if (k >= uLayers) break;
    float layer = float(k);
    float seed = layer * 13.7;
    float pace = t * (1.0 - layer * 0.18);
    float warp = snoise(vec2(X * 0.45 * uScale + pace * 0.02 + seed, pace * 0.05 + seed));
    float wave = snoise(vec2(X * 0.75 * uScale + warp * 0.35 - pace * 0.03 + seed, pace * 0.07 - seed)) * 0.72
      + snoise(vec2(X * 1.6 * uScale + warp * 0.5 + pace * 0.04 - seed, pace * 0.1 + seed * 0.5)) * 0.28;
    float hem = uHeight + layer * 0.07 + wave * 0.15 * uAmplitude;
    hem += reach * 0.08 * (layer < 0.5 ? 1.0 : 0.4);
    hem = mix(-0.25, hem, uReveal);

    float soft = (0.04 + uBlend * 0.16) * (1.0 + layer * 0.9);
    float rise = hem - y;
    float low = -soft - uGlow * 0.14;
    float high = 0.26 + soft * 0.6;
    float body = pow(smootherstep(low, high, rise), 1.5 + uGlow * 0.6);
    float lobes = 0.86 + 0.14 * snoise(vec2(X * 0.9 * uScale - pace * 0.025 + seed, y * 0.3 + pace * 0.04));
    float alpha = body * lobes * (layer < 0.5 ? 1.0 : 0.32 / layer);
    alpha = clamp(alpha * (1.0 + reach * 0.25 * smootherstep(0.9, 0.0, abs(y - hem))), 0.0, 1.0);

    vec3 tint = ramp(u + 0.05 * sin(pace * 0.08 + layer * 2.3) + layer * 0.1 + max(rise, 0.0) * 0.05);
    glow = 1.0 - (1.0 - glow) * (1.0 - tint * alpha);
    cover = 1.0 - (1.0 - cover) * (1.0 - alpha);
  }

  float fade = smootherstep(0.0, 0.7, uReveal) * uOpacity;
  float strength = clamp(uBrightness, 0.0, 2.0);
  glow *= fade * min(strength, 1.0);
  cover *= fade * min(strength, 1.0);
  glow = 1.0 - pow(1.0 - glow, vec3(max(strength, 1.0)));
  float dither = (hash(frag) - 0.5) / 255.0;

  if (uLightMode > 0.5) {
    vec3 tint = cover > 0.0001 ? glow / cover : vec3(0.0);
    cover *= smootherstep(0.0, 0.25, cover);
    float alpha = cover * 0.7;
    outColor = vec4(tint * alpha + dither, clamp(alpha + dither, 0.0, 1.0));
    return;
  }
  outColor = vec4(glow + dither, clamp(cover + dither, 0.0, 1.0));
}`,Bt=(t,e,s)=>Math.min(s,Math.max(e,t)),mo=t=>{const[e,s,r]=t.map(y=>y<=.04045?y/12.92:Math.pow((y+.055)/1.055,2.4)),n=Math.cbrt(.4122214708*e+.5363325363*s+.0514459929*r),f=Math.cbrt(.2119034982*e+.6806995451*s+.1073969566*r),x=Math.cbrt(.0883024619*e+.2817188376*s+.6299787005*r),m=[.2104542553*n+.793617785*f-.0040720468*x,1.9779984951*n-2.428592205*f+.4505937099*x,.0259040371*n+.7827717662*f-.808675766*x];return[m[0],Math.hypot(m[1],m[2]),Math.atan2(m[2],m[1])]},xo=t=>{const e=t.findIndex(n=>n[1]>.02);let r=e===-1?0:t[e][2];return t.map(n=>{let f=n[1]>.02?n[2]:r;for(;f-r>Math.PI;)f-=Math.PI*2;for(;f-r<-Math.PI;)f+=Math.PI*2;return r=f,[n[0],n[1],f]})},Ir=(t,e,s)=>{const r=t.createShader(e);return r?(t.shaderSource(r,s),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(t.deleteShader(r),null)):null},vo=t=>{const e=Ir(t,t.VERTEX_SHADER,ho),s=Ir(t,t.FRAGMENT_SHADER,po),r=t.createProgram();if(!e||!s||!r)return null;if(t.attachShader(r,e),t.attachShader(r,s),t.bindAttribLocation(r,0,"aPosition"),t.linkProgram(r),t.deleteShader(e),t.deleteShader(s),!t.getProgramParameter(r,t.LINK_STATUS))return t.deleteProgram(r),null;const n={},f=t.getProgramParameter(r,t.ACTIVE_UNIFORMS);for(let x=0;x<f;x++){const m=t.getActiveUniform(r,x);m&&(n[m.name.replace("[0]","")]=t.getUniformLocation(r,m.name))}return{program:r,uniforms:n}},Mn=({colorStops:t=["#5227FF","#7cff67","#5227FF"],amplitude:e=1,blend:s=.5,speed:r=1,time:n,height:f=.45,scale:x=1,glow:m=.6,brightness:y=1,layers:R=1,direction:I="top",mouseInteraction:k=!0,intro:O=!0,opacity:$=1,lightMode:M=!1,paused:T=!1,dpr:_,className:ve="",style:pe})=>{const ue=v.useRef(null),G=v.useRef(null),me=v.useRef(null),te=(Array.isArray(t)?t:[]).filter(Boolean).map(String).slice(0,yr),Z={stops:te.length>=2?te:te.length===1?[te[0],te[0]]:["#5227FF","#7cff67"],amplitude:Math.max(0,e),blend:Bt(s,0,1),speed:r,time:n,height:Bt(f,0,1),scale:Math.max(.1,x),glow:Math.max(0,m),brightness:Math.max(0,y),layers:Bt(Math.round(R),1,Kr),flip:I==="bottom"?1:0,mouseInteraction:k,intro:O,opacity:Bt($,0,1),lightMode:M,paused:T,dpr:_},fe=v.useRef(Z);return fe.current=Z,v.useEffect(()=>{var b;const j=ue.current,ne=G.current,u=ne==null?void 0:ne.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!j||!ne||!u)return;const B=vo(u);if(!B)return;const H=B.uniforms,ke=u.createBuffer(),W=u.createVertexArray();u.bindVertexArray(W),u.bindBuffer(u.ARRAY_BUFFER,ke),u.bufferData(u.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),u.STATIC_DRAW),u.enableVertexAttribArray(0),u.vertexAttribPointer(0,2,u.FLOAT,!1,0,0);const z=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),X=((b=window.matchMedia)==null?void 0:b.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,l=new Map,w=c=>{if(l.has(c))return l.get(c);let g=[1,1,1];if(z){z.clearRect(0,0,1,1),z.fillStyle="#ffffff",z.fillStyle=c,z.fillRect(0,0,1,1);const[S,C,q]=z.getImageData(0,0,1,1).data;g=[S/255,C/255,q/255]}return l.set(c,g),g},P=new Float32Array(yr*3),re={width:1,height:1},se={x:0,y:0,inside:!1},ae={clock:0,px:0,py:.5,reach:0,reveal:fe.current.intro&&!X?0:1};let ge=0,ye=0,de=!0;const Se=()=>{const c=fe.current;xo(c.stops.map(S=>mo(w(S)))).forEach((S,C)=>P.set(S,C*3));const g=ae.reveal;u.viewport(0,0,ne.width,ne.height),u.useProgram(B.program),u.bindVertexArray(W),u.uniform2f(H.uResolution,ne.width,ne.height),u.uniform1f(H.uTime,c.time!==void 0?c.time*c.speed*.1:ae.clock),u.uniform3fv(H.uStops,P),u.uniform1i(H.uStopCount,c.stops.length),u.uniform1f(H.uAmplitude,c.amplitude),u.uniform1f(H.uBlend,c.blend),u.uniform1f(H.uHeight,c.height),u.uniform1f(H.uScale,c.scale),u.uniform1f(H.uGlow,c.glow),u.uniform1f(H.uBrightness,c.brightness),u.uniform1i(H.uLayers,c.layers),u.uniform1f(H.uFlip,c.flip),u.uniform3f(H.uPointer,ae.px,ae.py,ae.reach),u.uniform1f(H.uReveal,1-Math.pow(1-g,3)),u.uniform1f(H.uOpacity,c.opacity),u.uniform1f(H.uLightMode,c.lightMode?1:0),u.drawArrays(u.TRIANGLES,0,3)},A=c=>{if(ge=0,!de||document.hidden)return;const g=fe.current,S=ye?Bt((c-ye)/1e3,5e-4,.05):1/60;if(ye=c,g.paused){ae.reveal=1,Se(),ye=0;return}const C=X?0:1;ae.clock+=S*g.speed*C;const q=g.mouseInteraction&&se.inside&&!X,Ne=1-Math.exp(-S/.6);if(q){const _e=(se.x-re.width/2)/re.height,je=g.flip?1-se.y/re.height:se.y/re.height;ae.px+=(_e-ae.px)*Ne,ae.py+=(je-ae.py)*Ne}ae.reach+=((q?1:0)-ae.reach)*(1-Math.exp(-S/(q?.9:1.4))),!g.intro||X?ae.reveal=1:ae.reveal<1&&(ae.reveal=Math.min(1,ae.reveal+S/fo)),Se(),ge=requestAnimationFrame(A)},Q=()=>{!ge&&de&&!document.hidden&&(ge=requestAnimationFrame(A))},V=()=>{const c=fe.current,g=Math.max(1,j.clientWidth),S=Math.max(1,j.clientHeight),C=Math.min(c.dpr||window.devicePixelRatio||1,2);re.width=g,re.height=S,ne.width=Math.max(1,Math.round(g*C)),ne.height=Math.max(1,Math.round(S*C)),Se(),Q()},Fe=c=>{const g=j.getBoundingClientRect();se.x=c.clientX-g.left,se.y=c.clientY-g.top;const S=se.inside;if(se.inside=se.x>=0&&se.y>=0&&se.x<=g.width&&se.y<=g.height,se.inside&&!S){const C=fe.current;ae.px=(se.x-g.width/2)/Math.max(1,g.height),ae.py=C.flip?1-se.y/Math.max(1,g.height):se.y/Math.max(1,g.height)}fe.current.paused||Q()},Re=c=>{c.pointerType!=="mouse"&&(se.inside=!1)},Ce=()=>{se.inside=!1},D=()=>{ye=0,Q()},ie=new ResizeObserver(V);ie.observe(j);const he=new IntersectionObserver(c=>{de=c.some(g=>g.isIntersecting),de&&(ye=0,Q())});he.observe(j),window.addEventListener("pointermove",Fe,{passive:!0}),window.addEventListener("pointerdown",Fe,{passive:!0}),window.addEventListener("pointerup",Re,{passive:!0}),window.addEventListener("pointercancel",Re,{passive:!0}),document.documentElement.addEventListener("pointerleave",Ce),document.addEventListener("visibilitychange",D),V();let Le=fe.current.dpr;return me.current=()=>{const c=fe.current;if(c.dpr!==Le){Le=c.dpr,V();return}ge||Se(),Q()},()=>{var c;cancelAnimationFrame(ge),me.current=null,ie.disconnect(),he.disconnect(),window.removeEventListener("pointermove",Fe),window.removeEventListener("pointerdown",Fe),window.removeEventListener("pointerup",Re),window.removeEventListener("pointercancel",Re),document.documentElement.removeEventListener("pointerleave",Ce),document.removeEventListener("visibilitychange",D),u.deleteProgram(B.program),u.deleteBuffer(ke),u.deleteVertexArray(W),(c=u.getExtension("WEBGL_lose_context"))==null||c.loseContext()}},[]),v.useEffect(()=>{var j;(j=me.current)==null||j.call(me)}),d.jsx("div",{ref:ue,className:`aurora-container${ve?` ${ve}`:""}`,style:pe,children:d.jsx("canvas",{ref:G,className:"aurora-canvas","aria-hidden":"true"})})},Pr={linear:t=>t,smooth:t=>.5-Math.cos(Math.PI*t)/2,snappy:t=>t<.5?16*Math.pow(t,5):1-Math.pow(-2*t+2,5)/2},go=["loop","hover","view"],yo=[0,.2,.4,.6,.8,1],Dt=(t,e,s)=>Math.min(s,Math.max(e,t));let At=null;const $r=t=>{if(typeof document>"u"||(At||(At=document.createElement("canvas").getContext("2d")),!At))return null;At.fillStyle="#000000",At.fillStyle=t;const e=String(At.fillStyle);if(e.startsWith("#"))return[1,3,5].map(r=>parseInt(e.slice(r,r+2),16)).concat(1);const s=e.match(/[\d.]+/g);return!s||s.length<3?null:[Number(s[0]),Number(s[1]),Number(s[2]),s.length>3?Number(s[3]):1]},cr=(t,e,s)=>{const r=(R,I)=>Math.round(Math.pow(Math.pow(R/255,2.2)*(1-s)+Math.pow(I/255,2.2)*s,.45454545454545453)*255),n=t[3]*(1-s)+e[3]*s;if(n<=0)return"rgba(0, 0, 0, 0)";const f=(R,I)=>(R*t[3]*(1-s)+I*e[3]*s)/n,x=t[3]===e[3]?r(t[0],e[0]):Math.round(f(t[0],e[0])),m=t[3]===e[3]?r(t[1],e[1]):Math.round(f(t[1],e[1])),y=t[3]===e[3]?r(t[2],e[2]):Math.round(f(t[2],e[2]));return`rgba(${x}, ${m}, ${y}, ${Math.round(n*1e3)/1e3})`},En=({text:t,children:e,color:s="#b5b5b5",shineColor:r="#ffffff",speed:n=2,delay:f=0,angle:x=120,shineWidth:m=40,softness:y=.8,bands:R=1,glow:I=0,direction:k="left",easing:O="smooth",trigger:$="loop",yoyo:M=!1,followPointer:T=!1,pauseOnHover:_=!1,disabled:ve=!1,className:pe="",style:ue})=>{const G=v.useRef(null),me=v.useRef(null),te=v.useRef(null),Z=v.useRef(null),fe=e??t;return te.current={color:s,shineColor:r,speed:Math.max(.1,n),delay:Math.max(0,f),angle:x,shineWidth:Dt(m,2,200),softness:Dt(y,0,1),bands:Dt(Math.round(R),1,3),glow:Dt(I,0,1),sign:k==="right"?1:-1,ease:Pr[O]??Pr.smooth,trigger:go.includes($)?$:"loop",yoyo:M,followPointer:T,pauseOnHover:_,disabled:ve},v.useEffect(()=>{var j;(j=Z.current)==null||j.call(Z)}),v.useEffect(()=>{var Ce;const j=G.current;if(!j)return;const ne=((Ce=window.matchMedia)==null?void 0:Ce.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,u={pos:null,vel:0,phase:"idle",from:0,to:0,start:0,duration:1,resume:0,flip:!1,inside:!1,target:0,visible:!0,seen:!1,colors:""};let B=null,H=null,ke=null,W=0,z=0,X=0,l=!0;const w=()=>{const D=te.current;return D.shineWidth/2+(D.bands-1)*D.shineWidth*1.3+2},P=()=>te.current.sign>0?-w():100+w(),re=()=>te.current.sign>0?100+w():-w(),se=()=>u.target<50?-w():100+w(),ae=(D,ie)=>{const he=te.current,Le=he.shineWidth/2,b=Le*(1-he.softness),c=Le-b,g=[];for(let C=0;C<he.bands;C++){const q=D-he.sign*C*he.shineWidth*1.3,Ne=1-C*.28;for(const _e of[-1,1])for(const je of yo){const F=q+_e*(b+c*(1-je)),N=je*je*(3-2*je)*Ne;g.push([F,N])}}g.sort((C,q)=>C[0]-q[0]);const S=g.map(([C,q])=>`${cr(ie,H,q)} ${C.toFixed(2)}%`);return`linear-gradient(${he.angle}deg, ${cr(ie,H,0)} 0%, ${S.join(", ")}, ${cr(ie,H,0)} 100%)`},ge=()=>{const D=te.current,ie=`${D.color}|${D.shineColor}`;if(ie!==u.colors&&(u.colors=ie,B=$r(D.color),H=$r(D.shineColor),ke=H?[H[0],H[1],H[2],0]:null),!B||!H){j.style.backgroundImage=`linear-gradient(${D.color}, ${D.color})`;return}if(u.pos===null||D.disabled){j.style.backgroundImage=`linear-gradient(${D.color}, ${D.color})`,me.current&&(me.current.style.backgroundImage="none");return}j.style.backgroundImage=ae(u.pos,B),me.current&&(me.current.style.backgroundImage=ae(u.pos,ke),me.current.style.opacity=String(D.glow))},ye=(D,ie,he)=>{const Le=te.current,b=Math.abs(re()-P())||1;u.phase="sweep",u.from=D,u.to=ie,u.start=he,u.duration=Le.speed*1e3*Math.max(.15,Math.abs(ie-D)/b)},de=()=>{W||!l||(window.clearTimeout(z),z=0,X=performance.now(),W=requestAnimationFrame(Se))},Se=D=>{if(W=0,!l)return;const ie=te.current,he=Math.min(.05,Math.max(0,(D-X)/1e3));if(X=D,ie.disabled){u.pos=null,u.phase="idle",ge();return}if(ie.followPointer&&u.inside){u.pos===null&&(u.pos=se());const b=220;u.vel+=((u.target-u.pos)*b-u.vel*2*Math.sqrt(b))*he,u.pos+=u.vel*he,u.phase="follow",ge(),W=requestAnimationFrame(Se);return}if(u.phase==="follow"&&(u.vel=0,ye(u.pos??se(),se(),D)),u.phase==="sweep"){if(ie.pauseOnHover&&u.inside){u.start+=he*1e3,W=requestAnimationFrame(Se);return}const b=Dt((D-u.start)/u.duration,0,1);if(u.pos=u.from+(u.to-u.from)*ie.ease(b),ge(),b<1){W=requestAnimationFrame(Se);return}if(ie.trigger!=="loop"||ne){u.phase="idle",u.pos=null,ge();return}u.phase="wait",u.resume=D+ie.delay*1e3}if(u.phase==="wait"){if(!u.visible)return;if(D<u.resume){window.clearTimeout(z),z=window.setTimeout(de,u.resume-D);return}ie.yoyo?(u.flip=!u.flip,ye(u.flip?re():P(),u.flip?P():re(),D)):ye(P(),re(),D),W=requestAnimationFrame(Se);return}u.phase==="idle"&&ie.trigger==="loop"&&!ne&&u.visible&&(u.flip=!1,ye(P(),re(),D),W=requestAnimationFrame(Se))},A=D=>{const ie=te.current,he=j.getBoundingClientRect(),Le=ie.angle*Math.PI/180,b=Math.sin(Le),c=-Math.cos(Le),g=Math.abs(he.width*b)+Math.abs(he.height*c)||1;return 50+((D.clientX-he.left-he.width/2)*b+(D.clientY-he.top-he.height/2)*c)/g*100},Q=D=>{const ie=te.current;u.inside=!0,u.target=A(D),!ie.disabled&&(ie.followPointer?u.pos===null&&(u.pos=se()):ie.trigger==="hover"&&u.phase==="idle"&&!ne&&ye(P(),re(),performance.now()),de())},V=D=>{u.target=A(D),te.current.followPointer&&de()},Fe=()=>{u.inside=!1,de()},Re=new IntersectionObserver(D=>{const ie=D.some(Le=>Le.isIntersecting);u.visible=ie;const he=te.current;ie&&(he.trigger==="view"&&!u.seen&&!ne&&!he.disabled&&(u.seen=!0,ye(P(),re(),performance.now())),de())});return Re.observe(j),j.addEventListener("pointerenter",Q),j.addEventListener("pointermove",V),j.addEventListener("pointerleave",Fe),Z.current=()=>{const D=te.current;D.disabled?(u.pos=null,u.phase="idle"):D.trigger!=="loop"&&u.phase==="wait"&&(u.phase="idle",u.pos=null),ge(),de()},ge(),de(),()=>{l=!1,cancelAnimationFrame(W),window.clearTimeout(z),Re.disconnect(),j.removeEventListener("pointerenter",Q),j.removeEventListener("pointermove",V),j.removeEventListener("pointerleave",Fe),Z.current=null}},[]),d.jsxs("span",{ref:G,className:`shiny-text${pe?` ${pe}`:""}`,style:{backgroundImage:`linear-gradient(${s}, ${s})`,...ue},children:[fe,I>0?d.jsx("span",{ref:me,className:"shiny-text__glow","aria-hidden":"true",children:fe}):null]})},bo=["top-left","top-right","bottom-left","bottom-right"],Ge=10,wo=[.65,0,.35,1],Mo="cubic-bezier(0.65, 0, 0.35, 1)",Eo="cubic-bezier(0.34, 1.56, 0.64, 1)",Ro=typeof window<"u"?v.useLayoutEffect:v.useEffect,Rn=({sentence:t="True Focus",separator:e=" ",manualMode:s=!1,focusStyle:r="brackets",order:n="sequential",easing:f="smooth",blurAmount:x=5,focusScale:m=1,borderColor:y="green",highlightColor:R,glowColor:I="transparent",animationDuration:k=.5,pauseBetweenAnimations:O=1,cornerSize:$=16,borderWidth:M=3,unfocusedOpacity:T=1})=>{const _=t.split(e).filter(z=>z.trim()!==""),[ve,pe]=v.useState(0),[ue,G]=v.useState(null),me=v.useRef(null),te=v.useRef([]),Z=to(),fe=Z?0:k,j=_.length?ve%_.length:-1,ne=f==="spring"&&!Z,u=ne?{type:"spring",visualDuration:fe,bounce:.38}:{duration:fe,ease:wo};v.useEffect(()=>{if(s||_.length<2)return;const z=setInterval(()=>{const X=Math.random();pe(l=>{const w=l%_.length;if(n!=="random")return(w+1)%_.length;const P=Math.floor(X*(_.length-1));return P>=w?P+1:P})},(k+O)*1e3);return()=>clearInterval(z)},[s,k,O,_.length,n]),Ro(()=>{const z=me.current,X=te.current[j];if(!z||!X)return;const l=()=>{const P={x:X.offsetLeft,y:X.offsetTop,width:X.offsetWidth,height:X.offsetHeight};G(re=>re&&re.x===P.x&&re.y===P.y&&re.width===P.width&&re.height===P.height?re:P)};if(l(),typeof ResizeObserver>"u")return;const w=new ResizeObserver(l);return w.observe(z),te.current.forEach(P=>P&&w.observe(P)),()=>w.disconnect()},[j,t,e]);const B=ue&&{x:ue.x-ue.width*(m-1)/2,y:ue.y-ue.height*(m-1)/2,width:ue.width*m,height:ue.height*m},H=B&&{"top-left":{x:B.x-Ge,y:B.y-Ge},"top-right":{x:B.x+B.width+Ge-$,y:B.y-Ge},"bottom-left":{x:B.x-Ge,y:B.y+B.height+Ge-$},"bottom-right":{x:B.x+B.width+Ge-$,y:B.y+B.height+Ge-$}},ke=B&&{box:{x:B.x-Ge,y:B.y-Ge,width:B.width+Ge*2,height:B.height+Ge*2},underline:{x:B.x,y:B.y+B.height+Ge*.4,width:B.width,height:M},highlight:{x:B.x-B.height*.14,y:B.y+B.height*.04,width:B.width+B.height*.28,height:B.height*.92}},W={"--border-color":y,"--highlight-color":`color-mix(in srgb, ${R??y} 30%, transparent)`,"--glow-color":I,"--corner-size":`${$}px`,"--border-width":`${M}px`};return d.jsxs("div",{className:"focus-container",ref:me,style:W,children:[r==="highlight"&&ke&&d.jsx(Jt.span,{className:"focus-highlight","aria-hidden":"true",initial:{...ke.highlight,opacity:0},animate:{...ke.highlight,opacity:1},transition:u}),_.map((z,X)=>{const l=X===j;return d.jsx("span",{ref:w=>{te.current[X]=w},className:`focus-word ${s?"manual":""} ${l&&!s?"active":""}`,style:{filter:`blur(${l?0:x}px)`,opacity:l?1:T,transform:m!==1?`scale(${l?m:1})`:void 0,transition:`filter ${fe}s ease, opacity ${fe}s ease, transform ${fe}s ${ne?Eo:Mo}`},onMouseEnter:()=>{s&&pe(X)},children:z},X)}),ke&&H&&r!=="highlight"&&d.jsxs("div",{className:"focus-frame","aria-hidden":"true",children:[r==="box"&&d.jsx(Jt.span,{className:"focus-box",initial:{...ke.box,opacity:0},animate:{...ke.box,opacity:1},transition:u}),r==="underline"&&d.jsx(Jt.span,{className:"focus-underline",initial:{...ke.underline,opacity:0},animate:{...ke.underline,opacity:1},transition:u}),r!=="box"&&r!=="underline"&&bo.map(z=>d.jsx(Jt.span,{className:`corner ${z}`,initial:{...H[z],opacity:0},animate:{...H[z],opacity:1},transition:u},z))]})]})},To=t=>t*t*t*(t*(t*6-15)+10),bt=(t,e,s)=>{const r=Math.abs(t-e);return r>=s?0:To(1-r/s)},Fr={streak:(t,e)=>bt(t,.5,.06+.16*e)+.32*bt(t,.5,.5),twin:(t,e)=>bt(t,.36,.08+.18*e)+.85*bt(t,.7,.03+.06*e)+.26*bt(t,.5,.5),sheen:(t,e)=>.55*bt(t,.5,.25+.25*e)+.3*bt(t,.5,.5)},Nr=(t,e,s,r)=>{const n=Fr[s]??Fr.streak;return`linear-gradient(90deg, ${Array.from({length:33},(x,m)=>{const y=m/32,R=Math.round(Math.min(1,n(y,r)*e)*1e3)/10;return`color-mix(in srgb, ${t} ${R}%, transparent) ${(y*100).toFixed(1)}%`}).join(", ")})`},Ao=t=>(1-Math.cos(Math.PI*t))/2,Tn=({width:t="auto",height:e="auto",background:s="transparent",borderRadius:r="10px",borderColor:n="transparent",children:f,glareColor:x="#ffffff",glareOpacity:m=.5,glareAngle:y=-45,glareSize:R=30,softness:I=.6,variant:k="streak",blendMode:O="screen",rimGlint:$=!0,mode:M="hover",transitionDuration:T=650,interval:_=3,playOnce:ve=!1,intro:pe=!1,className:ue="",style:G={}})=>{const me=v.useRef(null),te=v.useRef(null),Z=v.useRef(null),fe=v.useRef(null),j=v.useRef(null),ne=v.useRef(!1),u={glareAngle:y,glareSize:R,transitionDuration:T,interval:_,playOnce:ve,intro:pe},B=v.useRef(u);B.current=u,v.useEffect(()=>{const W=me.current,z=te.current;if(!W||!z)return;const X=window.matchMedia("(prefers-reduced-motion: reduce)").matches,l={band:0,reach:0,ux:0,uy:-1,angle:0},w={pos:0,velocity:0,target:0,presence:0,presenceTarget:0,sweep:null,visible:!0};let P=0,re=0,se=0;const ae=()=>[Z.current,fe.current].filter(Boolean),ge=()=>{const c=`translate(-50%, -50%) rotate(${l.angle-90}deg) translateX(${w.pos.toFixed(2)}px)`;for(const g of ae())g.style.transform=c;z.style.opacity=w.presence.toFixed(3)},ye=()=>{const{glareAngle:c,glareSize:g}=B.current,S=W.clientWidth,C=W.clientHeight,q=c*Math.PI/180,Ne=Math.sin(q),_e=-Math.cos(q),je=Math.hypot(S,C),F=Math.max(8,je*g/100),N=(Math.abs(S*Ne)+Math.abs(C*_e))/2+F/2+2,K=!w.sweep&&M!=="follow";Object.assign(l,{band:F,reach:N,ux:Ne,uy:_e,angle:c});for(const oe of ae())oe.style.width=`${F}px`,oe.style.height=`${je+F}px`;K&&(w.pos=w.pos>0?N:-N),ge()},de=c=>{const g=Math.min(.05,(c-re)/1e3||0);re=c;let S=!1;if(w.sweep){const C=w.sweep,q=Math.min(1,(c-C.start)/C.duration);w.pos=C.from+(C.to-C.from)*Ao(q),q<1?S=!0:w.sweep=null}else if(M==="follow"){const C=Math.max(1,Math.ceil(g/.008333333333333333)),q=g/C;for(let _e=0;_e<C;_e++)w.velocity+=(170*(w.target-w.pos)-24*w.velocity)*q,w.pos+=w.velocity*q;const Ne=w.presenceTarget>w.presence?.18:.4;w.presence+=(w.presenceTarget-w.presence)*(1-Math.exp(-g/Ne)),S=Math.abs(w.target-w.pos)>.05||Math.abs(w.velocity)>.05||Math.abs(w.presenceTarget-w.presence)>.002,S||(w.presence=w.presenceTarget)}ge(),P=S?requestAnimationFrame(de):0},Se=()=>{P||(re=performance.now(),P=requestAnimationFrame(de))},A=c=>{if(X||!l.reach)return;const g=c*l.reach,S=w.sweep||Math.abs(w.pos)<l.reach?w.pos:-g;if(S===g)return;const C=Math.abs(g-S)/(2*l.reach);w.sweep={from:S,to:g,start:performance.now(),duration:Math.max(120,B.current.transitionDuration*C)},Se()},Q=c=>{const g=W.getBoundingClientRect(),S=c.clientX-(g.left+g.width/2),C=c.clientY-(g.top+g.height/2);return S*l.ux+C*l.uy},V=c=>{w.target=Math.max(-l.reach,Math.min(l.reach,Q(c))),Se()},Fe=c=>{M==="hover"&&A(Q(c)>0?-1:1),M==="follow"&&(w.presence<.02&&(w.pos=Math.max(-l.reach,Math.min(l.reach,Q(c))),w.velocity=0),w.presenceTarget=X?0:1,V(c))},Re=c=>{M==="follow"&&V(c)},Ce=c=>{M==="hover"&&!B.current.playOnce&&A(Q(c)>0?1:-1),M==="follow"&&(w.presenceTarget=0,Se())},D=c=>{M==="click"&&A(Q(c)>0?-1:1)},ie=c=>{var g,S;M!=="follow"&&((S=(g=c.target).matches)!=null&&S.call(g,":focus-visible"))&&A(1)},he=()=>{window.clearTimeout(se),!(M!=="loop"||X)&&(se=window.setTimeout(()=>{w.visible&&!document.hidden&&A(1),he()},Math.max(.5,B.current.interval)*1e3))};W.addEventListener("pointerenter",Fe),W.addEventListener("pointermove",Re),W.addEventListener("pointerleave",Ce),W.addEventListener("pointerdown",D),W.addEventListener("focusin",ie);const Le=new ResizeObserver(ye);Le.observe(W);const b=new IntersectionObserver(([c])=>{w.visible=c.isIntersecting,c.isIntersecting&&B.current.intro&&!ne.current&&(ne.current=!0,A(1))},{threshold:.4});return b.observe(W),w.presence=M==="follow"?0:1,w.presenceTarget=w.presence,w.pos=-1e4,ye(),he(),j.current={measure:ye},()=>{cancelAnimationFrame(P),window.clearTimeout(se),Le.disconnect(),b.disconnect(),W.removeEventListener("pointerenter",Fe),W.removeEventListener("pointermove",Re),W.removeEventListener("pointerleave",Ce),W.removeEventListener("pointerdown",D),W.removeEventListener("focusin",ie),j.current=null}},[M]),v.useEffect(()=>{var W;(W=j.current)==null||W.measure()},[y,R,$]);const H=Nr(x,m,k,I),ke=Nr(x,Math.min(1,m*1.8),k,I);return d.jsxs("div",{ref:me,className:`glare-hover ${ue}`.trim(),style:{"--gh-width":t,"--gh-height":e,"--gh-bg":s,"--gh-br":r,"--gh-border":n,"--gh-glare":H,"--gh-rim":ke,"--gh-blend":O,...G},children:[f,d.jsxs("span",{ref:te,className:"glare-hover__glare","aria-hidden":"true",children:[d.jsx("span",{ref:Z,className:"glare-hover__band"}),$&&d.jsx("span",{className:"glare-hover__rim",children:d.jsx("span",{ref:fe,className:"glare-hover__band glare-hover__band--rim"})})]})]})},Xe=1440,_r=120,Cr=4e3,jr=960,ur=2.2,br=Math.PI*2,er=typeof window<"u"?v.useLayoutEffect:v.useEffect,fr=(t,e)=>e>0?(t%e+e)%e-e:t,So=t=>Math.atan2(Math.sin(t),Math.cos(t)),Lo=(t,e)=>{const s=Math.min(Math.max(t,0),1)*50*e;if(s<=0)return;const r=50-e*50,n=10,f=[],x=[];for(let m=0;m<=n;m++){const y=m/n,R=(y*y*y*(y*(y*6-15)+10)).toFixed(3);f.push(`rgba(0, 0, 0, ${R}) ${(r+y*s).toFixed(2)}%`),x.unshift(`rgba(0, 0, 0, ${R}) ${(100-r-y*s).toFixed(2)}%`)}return`linear-gradient(to right, ${[...f,...x].join(", ")})`},ko=(t,e)=>{const r=Xe+100,n=br/jr,f=k=>e+t*Math.cos(n*(k-Xe/2)),x=k=>-t*n*Math.sin(n*(k-Xe/2)),m=Math.ceil((r- -100)/(jr/8)),y=(r- -100)/m,R=k=>k.toFixed(2);let I=`M${R(-100)},${R(f(-100))}`;for(let k=0;k<m;k++){const O=-100+k*y,$=O+y;I+=` C${R(O+y/3)},${R(f(O)+x(O)*y/3)} ${R($-y/3)},${R(f($)-x($)*y/3)} ${R($)},${R(f($))}`}return I},Io=(t,e,s,r)=>{if(t==="circle"){const x=r>0?Math.max(1,Math.round(br*s*ur/r)):1,m=r>0?x*r/br:s*ur,y=m+s;return{d:`M${-m},0 A${m},${m} 0 1,1 ${m},0 A${m},${m} 0 1,1 ${-m},0`,viewBox:`${-y} ${-y} ${y*2} ${y*2}`,radius:m,repeats:x,span:Math.min(1,s*(ur+1)*2/Xe)}}const n={viewBox:`0 0 ${Xe} ${_r}`,radius:0,repeats:0,span:1},f=_r/2+s*.36;return t==="line"?{...n,d:`M-100,${f} L${Xe+100},${f}`}:t==="wave"?{...n,d:ko(e*.25,f)}:{...n,d:`M-100,40 Q500,${40+e} 1540,40`}},An=({marqueeText:t="",speed:e=2,className:s,curveAmount:r=400,direction:n="left",interactive:f=!0,pauseOnHover:x=!1,color:m="currentColor",edgeFade:y=0,shape:R="arc",fontSize:I=96,fontWeight:k=700,letterSpacing:O=0,outline:$=!1,separator:M="",separatorColor:T,scrollBoost:_=0})=>{const ve=v.useMemo(()=>t.replace(/\s+$/,""),[t]),pe=String(M??"").trim(),ue=pe?`${ve} ${pe} `:`${ve} `,G=`curve-${v.useId().replace(/[^a-zA-Z0-9_-]/g,"")}`,me=v.useRef(null),te=v.useRef(null),Z=v.useRef(null),fe=v.useRef(null),j=v.useRef([]),[ne,u]=v.useState(0),[B,H]=v.useState(0),[ke,W]=v.useState(!1),z=v.useRef(0),X=v.useRef(0),l=v.useRef(0),w=v.useRef(n),P=v.useRef(!1),re=v.useRef({speed:e,pauseOnHover:x,scrollBoost:_}),se=v.useRef({distance:0,level:0}),ae=v.useRef({active:!1,x:0,time:0,scale:1,velocity:0,ring:!1,radius:0,angle:0,cx:0,cy:0}),ge=R==="circle",ye=Io(R,r,I,ne),de=ne>0,Se=de?ge?ye.repeats+1:Math.ceil((B||1800)/ne)+2:1,A=Lo(y,ye.span),Q=`${G}-outline`,V=!!(pe&&T),Fe=ue.repeat(Se),Re=b=>Array.from({length:Se},(c,g)=>d.jsxs(v.Fragment,{children:[`${ve} `,d.jsx("tspan",{...b,children:pe})," "]},g)),Ce=()=>{const b=`${X.current}px`;for(const c of j.current)c.setAttribute("startOffset",b)};v.useEffect(()=>{re.current={speed:e,pauseOnHover:x,scrollBoost:_}},[e,x,_]),v.useEffect(()=>{w.current=n},[n]),er(()=>{var C;const b=()=>{Z.current&&u(Z.current.getComputedTextLength())};b();let c=!0;const g=document.fonts;g==null||g.ready.then(()=>c&&b()),(C=g==null?void 0:g.addEventListener)==null||C.call(g,"loadingdone",b);const S=typeof ResizeObserver<"u"?new ResizeObserver(b):null;return S&&te.current&&S.observe(te.current),()=>{var q;c=!1,(q=g==null?void 0:g.removeEventListener)==null||q.call(g,"loadingdone",b),S==null||S.disconnect()}},[ue,s,I,k,O]),er(()=>{fe.current&&H(fe.current.getTotalLength())},[ye.d]),er(()=>{de&&(z.current=ne,X.current=fr(X.current,ne))},[de,ne]),er(()=>{j.current=te.current?Array.from(te.current.querySelectorAll("textPath")):[];const b=`${X.current}px`;for(const c of j.current)c.setAttribute("startOffset",b)}),v.useEffect(()=>{if(!_)return;const b=new Map([[window,window.scrollY]]),c=g=>{const S=g.target instanceof Element?g.target:window;if(S instanceof Element&&!S.contains(me.current))return;const C=S instanceof Element?S.scrollTop:window.scrollY,q=b.get(S);b.set(S,C),q!==void 0&&(se.current.distance+=Math.abs(C-q))};return window.addEventListener("scroll",c,{passive:!0,capture:!0}),()=>window.removeEventListener("scroll",c,{capture:!0})},[_]),v.useEffect(()=>{var Ne;if(!de)return;const b=((Ne=window.matchMedia)==null?void 0:Ne.call(window,"(prefers-reduced-motion: reduce)").matches)??!1;let c=0,g=0,S=!0;const C=_e=>{if(c=0,!S)return;const je=g?Math.min((_e-g)/1e3,.05):0;g=_e;const F=se.current,N=je>0?F.distance/je:0;if(F.distance=0,F.level+=(N-F.level)*(1-Math.exp(-je*(N>F.level?10:2.4))),!ae.current.active){const{speed:K,pauseOnHover:oe,scrollBoost:be}=re.current,Te=w.current==="right"?1:-1,p=b||oe&&P.current,U=p?0:Te*K*60,J=p?0:Te*F.level*be*.3;l.current+=(U-l.current)*(1-Math.exp(-je*3));const o=(l.current+J)*je;if(Math.abs(o)>1e-4){X.current=fr(X.current+o,z.current);for(const Ue of j.current)Ue.setAttribute("startOffset",`${X.current}px`)}}c=requestAnimationFrame(C)},q=typeof IntersectionObserver<"u"?new IntersectionObserver(([_e])=>{S=_e.isIntersecting,S&&!c&&(g=0,se.current.level=0,c=requestAnimationFrame(C))}):null;return q&&me.current&&q.observe(me.current),c=requestAnimationFrame(C),()=>{cancelAnimationFrame(c),q==null||q.disconnect()}},[de]);const D=b=>{var q,Ne,_e;if(!f||!de)return;const c=(q=te.current)==null?void 0:q.getBoundingClientRect(),g=(c==null?void 0:c.width)||Xe,S=c?c.left+c.width/2:b.clientX,C=c?c.top+c.height/2:b.clientY;ae.current={active:!0,x:b.clientX,time:performance.now(),scale:Xe/g,velocity:0,ring:ge,radius:ye.radius,angle:Math.atan2(b.clientY-C,b.clientX-S),cx:S,cy:C},l.current=0,W(!0),(_e=(Ne=b.currentTarget).setPointerCapture)==null||_e.call(Ne,b.pointerId)},ie=b=>{const c=ae.current;if(!c.active)return;const g=performance.now();let S=(b.clientX-c.x)*c.scale;if(c.ring){const q=Math.atan2(b.clientY-c.cy,b.clientX-c.cx);S=So(q-c.angle)*c.radius,c.angle=q}const C=Math.max(g-c.time,1)/1e3;c.x=b.clientX,c.time=g,c.velocity=c.velocity*.5+S/C*.5,X.current=fr(X.current+S,z.current),Ce()},he=()=>{const b=ae.current;if(!b.active)return;b.active=!1,W(!1);const c=performance.now()-b.time>100?0:Math.max(-Cr,Math.min(Cr,b.velocity));l.current=c,Math.abs(c)>60&&(w.current=c>0?"right":"left")},Le=()=>{P.current=!1,he()};return d.jsx("div",{ref:me,className:"curved-loop-jacket",style:{visibility:de?"visible":"hidden",cursor:f?ke?"grabbing":"grab":"auto",touchAction:f?"pan-y":"auto",maskImage:A,WebkitMaskImage:A},onPointerDown:D,onPointerMove:ie,onPointerUp:he,onPointerCancel:he,onLostPointerCapture:he,onPointerEnter:()=>{P.current=!0},onPointerLeave:Le,children:d.jsxs("svg",{ref:te,className:"curved-loop-svg",viewBox:ye.viewBox,style:{fontSize:I,fontWeight:k,letterSpacing:O,...ge?{width:`${(ye.span*100).toFixed(3)}%`,aspectRatio:"1"}:null},role:"img","aria-label":t,children:[d.jsx("text",{ref:Z,xmlSpace:"preserve",className:s,style:{visibility:"hidden",opacity:0,pointerEvents:"none"},children:ue}),d.jsxs("defs",{children:[d.jsx("path",{ref:fe,id:G,d:ye.d,fill:"none",stroke:"transparent"}),de&&$&&d.jsxs("mask",{id:Q,maskUnits:"userSpaceOnUse",x:-Xe,y:-Xe,width:Xe*3,height:Xe*3,children:[d.jsx("rect",{x:-Xe,y:-Xe,width:Xe*3,height:Xe*3,fill:"#fff"}),d.jsx("text",{xmlSpace:"preserve",className:s,fill:"#000",children:d.jsx("textPath",{href:`#${G}`,xmlSpace:"preserve",children:Fe})})]})]}),de&&($?d.jsx("text",{xmlSpace:"preserve",className:s,fill:"none",stroke:m,strokeWidth:I*.05,strokeLinejoin:"round",mask:`url(#${Q})`,children:d.jsx("textPath",{href:`#${G}`,xmlSpace:"preserve",children:V?Re({stroke:"none"}):Fe})}):d.jsx("text",{xmlSpace:"preserve",className:s,fill:m,children:d.jsx("textPath",{href:`#${G}`,xmlSpace:"preserve",children:V?Re({fill:T}):Fe})})),de&&$&&V&&d.jsx("text",{xmlSpace:"preserve",className:s,fill:"none","aria-hidden":"true",children:d.jsx("textPath",{href:`#${G}`,xmlSpace:"preserve",children:Re({fill:T})})})]})})},St=Math.PI*2,Po=1/240,$o=6,Fo=[{title:"Brand guidelines"},{title:"Launch plan"},{title:"Moodboard"}],No=[.5,-1.1,1.5,-.7,1.2,-1.6],_o=[{x:.14,y:-.004,r:1.4},{x:.115,y:.008,r:-1.1},{x:.09,y:0,r:.6}],Co=[{x:.27,y:-.016,r:4.5},{x:.2,y:.014,r:1.2},{x:.14,y:0,r:-1.2}],dr=[{x:.16,rise:0,r:3},{x:-.17,rise:.05,r:-3.5},{x:0,rise:.1,r:.5},{x:.25,rise:.08,r:5},{x:-.25,rise:.09,r:-5.5},{x:.08,rise:.12,r:1.5}],Zr=[4,-5,3,-6,5,-3],Qr=[.03,-.04,.05,-.02,.04,-.05],jo=[-6,4,-3,7,-5,3],Bo={open:-180,receive:-24,peek:-13,rest:0},Do={open:-64,receive:-30,peek:-15,rest:0},hr={out:50,drag:80,focus:90},Oo=typeof window>"u"?v.useEffect:v.useLayoutEffect,Ae=(t,e,s)=>Math.min(s,Math.max(e,t)),Br=(()=>{let t=null;const e=new Map;return s=>{const r=String(s);if(e.has(r))return e.get(r);let n=[61,139,255];return typeof document<"u"&&(t??(t=document.createElement("canvas").getContext("2d",{willReadFrequently:!0})),t&&(t.clearRect(0,0,1,1),t.fillStyle="#3d8bff",t.fillStyle=r,t.fillRect(0,0,1,1),n=Array.from(t.getImageData(0,0,1,1).data.slice(0,3)))),e.set(r,n),n}})(),ht=(t,e,s)=>t.map((r,n)=>Math.round(r+(e[n]-r)*s)),it=t=>`rgb(${t[0]}, ${t[1]}, ${t[2]})`,Xo=t=>(.2126*t[0]+.7152*t[1]+.0722*t[2])/255,wr=(t,e)=>{const s=new Array(16);for(let r=0;r<4;r++)for(let n=0;n<4;n++)s[r*4+n]=t[n]*e[r*4]+t[4+n]*e[r*4+1]+t[8+n]*e[r*4+2]+t[12+n]*e[r*4+3];return s},Lt=(...t)=>t.reduce(wr),Qe=(t,e,s=0)=>[1,0,0,0,0,1,0,0,0,0,1,0,t,e,s,1],tr=(t,e)=>[t,0,0,0,0,e,0,0,0,0,1,0,0,0,0,1],Dr=t=>{const e=t*Math.PI/180,s=Math.cos(e),r=Math.sin(e);return[1,0,0,0,0,s,r,0,0,-r,s,0,0,0,0,1]},pr=t=>{const e=t*Math.PI/180,s=Math.cos(e),r=Math.sin(e);return[s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1]},zo=t=>{const e=t*Math.PI/180,s=Math.cos(e),r=Math.sin(e);return[s,r,0,0,-r,s,0,0,0,0,1,0,0,0,0,1]},kt=t=>`matrix3d(${t.map(e=>Math.abs(e)<1e-7?0:Number(e.toFixed(6))).join(", ")})`,Uo=(t,e,s,r,n)=>{const f=(t?180:224)*e,x=(t?232:176)*e,m=20*e,y=12*e,R=m*.75,I=t?m:m+x*.3,k=t?[0,y,y,0]:[y,y,y,y],O=f-k[0]-k[1]-R*2-10*e,$=Ae(r?s+14*e+R:f*.34,Math.min(f*.3,O),O),M=n==="left"?k[0]+5*e+R:n==="center"?(f-$)/2:f-k[1]-5*e-R-$,T=t?f*.8:f*.54;return{book:t,scale:e,w:f,h:x,tabH:m,r:y,shoulder:R,corners:k,tabW:$,tabX:M,frontTop:I,frontH:m+x-I,docW:T,docH:T*(t?1.28:1.22)}},Jr=t=>{const{w:e,h:s,tabX:r,tabW:n,tabH:f,shoulder:x}=t,[m,y,R,I]=t.corners,k=f,O=f+s;return[`M 0 ${k+m}`,`Q 0 ${k} ${m} ${k}`,`L ${r-x} ${k}`,`C ${r} ${k} ${r} 0 ${r+x} 0`,`L ${r+n-x} 0`,`C ${r+n} 0 ${r+n} ${k} ${r+n+x} ${k}`,`L ${e-y} ${k}`,`Q ${e} ${k} ${e} ${k+y}`,`L ${e} ${O-R}`,`Q ${e} ${O} ${e-R} ${O}`,`L ${I} ${O}`,`Q 0 ${O} 0 ${O-I}`,"Z"].join(" ")},Or=`#version 300 es
layout(location = 0) in vec2 aCorner;
uniform mat4 uModel;
uniform vec2 uSize;
uniform float uDepth;
uniform vec2 uOrigin;
uniform vec4 uView;
uniform float uBleed;
out vec2 vLocal;
out vec2 vUv;
void main() {
  vLocal = aCorner * (uSize + vec2(uBleed, 0.0)) - vec2(uBleed, 0.0);
  vUv = aCorner;
  vec4 q = uModel * vec4(vLocal, 0.0, 1.0);
  float w = 1.0 - q.z / uDepth;
  vec2 p = q.xy - uOrigin + (uOrigin - uView.xy) * w;
  vec2 clip = p / uView.zw * 2.0 - w;
  gl_Position = vec4(clip.x, -clip.y, 0.0, w);
}`,Ho=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uImage;
uniform float uAlpha;
out vec4 outColor;
void main() {
  outColor = texture(uImage, vUv) * uAlpha;
}`,Wo=`#version 300 es
layout(location = 0) in vec2 aCorner;
out vec2 vUv;
void main() {
  vUv = aCorner;
  gl_Position = vec4(aCorner * 2.0 - 1.0, 0.0, 1.0);
}`,qo=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uImage;
uniform vec2 uStep;
uniform float uSigma;
out vec4 outColor;
void main() {
  float spacing = max(1.0, uSigma * 2.5 / 24.0);
  int reach = int(min(ceil(uSigma * 2.5 / spacing), 24.0));
  vec4 sum = texture(uImage, vUv);
  float total = 1.0;
  for (int i = 1; i <= 24; i++) {
    if (i > reach) break;
    float x = float(i) * spacing;
    float weight = exp(-0.5 * x * x / (uSigma * uSigma));
    sum += (texture(uImage, vUv + uStep * x) + texture(uImage, vUv - uStep * x)) * weight;
    total += 2.0 * weight;
  }
  outColor = sum / total;
}`,Yo=`#version 300 es
precision highp float;
in vec2 vLocal;
uniform mat4 uModel;
uniform vec2 uSize;
uniform float uDepth;
uniform vec2 uOrigin;
uniform vec4 uView;
uniform sampler2D uBehind;
uniform vec4 uRadii;
uniform float uSpine;
uniform float uLens;
uniform float uMorph;
uniform vec3 uInsideTop;
uniform vec3 uInsideBottom;
uniform float uTabRatio;
uniform vec2 uGutter;
uniform float uBevel;
uniform float uStrength;
uniform float uSplit;
uniform vec4 uTint;
uniform float uHaze;
uniform float uDim;
uniform float uGlint;
uniform float uShine;
uniform vec2 uLight;
out vec4 outColor;

float box(vec2 p, vec2 b, vec4 r) {
  float k = p.x > 0.0 ? (p.y > 0.0 ? r.z : r.y) : (p.y > 0.0 ? r.w : r.x);
  vec2 q = abs(p) - b + k;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - k;
}

float shape(vec2 p) {
  vec2 halfSize = vec2(uSize.x + uSpine, uSize.y) * 0.5;
  return box(p - vec2(uSize.x - halfSize.x, halfSize.y), halfSize, uRadii);
}

vec2 locate(vec2 p) {
  vec4 q = uModel * vec4(p, 0.0, 1.0);
  float w = 1.0 - q.z / uDepth;
  vec2 s = uOrigin + (q.xy - uOrigin) / w;
  vec2 uv = (s - uView.xy) / uView.zw;
  return vec2(uv.x, 1.0 - uv.y);
}

void main() {
  float d = shape(vLocal);
  float aa = max(fwidth(d), 1e-3);
  float cover = clamp(0.5 - d / aa, 0.0, 1.0);
  if (cover <= 0.0) discard;
  float e = 0.5;
  vec2 n = vec2(
    shape(vLocal + vec2(e, 0.0)) - shape(vLocal - vec2(e, 0.0)),
    shape(vLocal + vec2(0.0, e)) - shape(vLocal - vec2(0.0, e))
  );
  n /= max(length(n), 1e-5);
  float inside = max(0.0, -d);
  float t = 1.0 - clamp(inside / uBevel, 0.0, 1.0);
  vec2 bend = -n * pow(t, 2.0) * uStrength + (uSize * 0.5 - vLocal) * uLens;
  vec2 p = vLocal + bend;
  vec2 uv = locate(p);
  mat2 jac = mat2(locate(p + vec2(1.0, 0.0)) - uv, locate(p + vec2(0.0, 1.0)) - uv);
  vec4 seen = texture(uBehind, uv);
  if (uSplit > 0.0) {
    vec2 split = jac * (bend * uSplit);
    seen.r = texture(uBehind, uv + split).r;
    seen.b = texture(uBehind, uv - split).b;
  }
  vec4 color = vec4(uTint.rgb, 1.0) * uTint.a + seen * (1.0 - uTint.a);
  color.rgb = mix(color.rgb, vec3(color.a), uHaze + uGlint);
  color.rgb *= 1.0 - uDim;
  float band = 0.0;
  if (uMorph > 0.0) {
    band = (1.0 - smoothstep(0.0, uSize.x * 0.75, vLocal.x)) * uMorph;
    vec3 solid = mix(uInsideTop, uInsideBottom, uTabRatio + vLocal.y / uSize.y * (1.0 - uTabRatio));
    color = mix(color, vec4(solid, 1.0), band);
  }
  if (uGutter.y > 0.0) color.rgb *= 1.0 - uGutter.y * (1.0 - smoothstep(0.0, uGutter.x, vLocal.x));
  float facing = dot(n, uLight);
  float edge = clamp(inside / aa, 0.0, 1.0);
  vec2 span = vLocal / uSize;
  float across = uLight.x > 0.0 ? 1.0 - span.x : span.x;
  float sheen = smoothstep(0.85, 0.0, across * 0.55 + span.y) * 0.07 * uShine * (1.0 - band);
  float light = (max(facing, 0.0) * 0.85 + max(-facing, 0.0) * 0.28) * t * t * t * uShine + sheen;
  light += exp(-inside / 0.9) * (0.16 + 0.3 * max(facing, 0.0)) * uShine;
  float shade = max(-facing, 0.0) * t * t * 0.22 * (1.0 - band);
  color = color * (1.0 - shade) + vec4(0.0, 0.0, 0.0, shade);
  light = clamp(light * edge * (1.0 - band), 0.0, 1.0);
  color = color * (1.0 - light) + vec4(light);
  outColor = color * cover;
}`,Xr=(t,e,s)=>{const r=t.createShader(e);return r?(t.shaderSource(r,s),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(t.deleteShader(r),null)):null},mr=(t,e,s,r)=>{const n=Xr(t,t.VERTEX_SHADER,e),f=Xr(t,t.FRAGMENT_SHADER,s),x=t.createProgram();if(!n||!f||!x)return null;if(t.attachShader(x,n),t.attachShader(x,f),t.linkProgram(x),t.deleteShader(n),t.deleteShader(f),!t.getProgramParameter(x,t.LINK_STATUS))return t.deleteProgram(x),null;const m={};return r.forEach(y=>{m[y]=t.getUniformLocation(x,y)}),{program:x,uniforms:m}},zr=["uModel","uSize","uDepth","uOrigin","uView","uBleed"],Go=t=>{const e=t.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!0});if(!e)return null;const s=mr(e,Or,Ho,[...zr,"uImage","uAlpha"]),r=mr(e,Wo,qo,["uImage","uStep","uSigma"]),n=mr(e,Or,Yo,[...zr,"uBehind","uRadii","uSpine","uLens","uMorph","uInsideTop","uInsideBottom","uTabRatio","uGutter","uBevel","uStrength","uSplit","uTint","uHaze","uDim","uGlint","uShine","uLight"]);if(!s||!r||!n)return null;const f=e.createVertexArray(),x=e.createBuffer();e.bindVertexArray(f),e.bindBuffer(e.ARRAY_BUFFER,x),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);const m=()=>({texture:e.createTexture(),frame:e.createFramebuffer()}),y=[m(),m(),m()],R={width:0,height:0},I=new Map,k=(M,T)=>{e.uniform1f(M.uniforms.uDepth,T.depth),e.uniform2f(M.uniforms.uOrigin,T.origin[0],T.origin[1]),e.uniform4f(M.uniforms.uView,T.view.x,T.view.y,T.view.width,T.view.height)},O=(M,T)=>{t.width!==M&&(t.width=M),t.height!==T&&(t.height=T),!(R.width===M&&R.height===T)&&(R.width=M,R.height=T,y.forEach(_=>{e.bindTexture(e.TEXTURE_2D,_.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,M,T,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,_.frame),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,_.texture,0)}))},$=(M,T,_,ve,pe)=>{e.bindFramebuffer(e.FRAMEBUFFER,T.frame),e.clear(e.COLOR_BUFFER_BIT),e.bindTexture(e.TEXTURE_2D,M.texture),e.uniform2f(r.uniforms.uStep,_,ve),e.uniform1f(r.uniforms.uSigma,pe),e.drawArrays(e.TRIANGLE_STRIP,0,4)};return{upload(M,T){let _=I.get(M);_||(_=e.createTexture(),I.set(M,_)),e.bindTexture(e.TEXTURE_2D,_),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,T),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)},prune(M){I.forEach((T,_)=>{M.has(_)||(e.deleteTexture(T),I.delete(_))})},render(M){if(e.isContextLost())return;const T=Math.max(1,Math.round(M.view.width*M.dpr)),_=Math.max(1,Math.round(M.view.height*M.dpr));O(T,_);const[ve,pe,ue]=y;e.bindVertexArray(f),e.activeTexture(e.TEXTURE0),e.viewport(0,0,T,_),e.clearColor(0,0,0,0),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.bindFramebuffer(e.FRAMEBUFFER,ve.frame),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(s.program),k(s,M),e.uniform1i(s.uniforms.uImage,0),e.uniform1f(s.uniforms.uBleed,0),M.layers.forEach(fe=>{const j=I.get(fe.key);j&&(e.bindTexture(e.TEXTURE_2D,j),e.uniformMatrix4fv(s.uniforms.uModel,!1,fe.matrix),e.uniform2f(s.uniforms.uSize,fe.width,fe.height),e.uniform1f(s.uniforms.uAlpha,fe.alpha),e.drawArrays(e.TRIANGLE_STRIP,0,4))});const G=M.glass,me=G.frost*M.dpr;let te=ve;me>.35&&(e.disable(e.BLEND),e.useProgram(r.program),e.uniform1i(r.uniforms.uImage,0),$(ve,pe,1/T,0,me),$(pe,ue,0,1/_,me),e.enable(e.BLEND),te=ue),e.bindFramebuffer(e.FRAMEBUFFER,null),e.clear(e.COLOR_BUFFER_BIT);const Z=n.uniforms;e.useProgram(n.program),k(n,M),e.bindTexture(e.TEXTURE_2D,te.texture),e.uniform1i(Z.uBehind,0),e.uniformMatrix4fv(Z.uModel,!1,G.matrix),e.uniform2f(Z.uSize,G.width,G.height),e.uniform1f(Z.uBleed,G.bleed),e.uniform4fv(Z.uRadii,G.radii),e.uniform1f(Z.uSpine,G.spine),e.uniform1f(Z.uLens,G.lens),e.uniform1f(Z.uMorph,G.morph),e.uniform3fv(Z.uInsideTop,G.insideTop),e.uniform3fv(Z.uInsideBottom,G.insideBottom),e.uniform1f(Z.uTabRatio,G.tabRatio),e.uniform2fv(Z.uGutter,G.gutter),e.uniform1f(Z.uBevel,G.bevel),e.uniform1f(Z.uStrength,G.strength),e.uniform1f(Z.uSplit,G.split),e.uniform4fv(Z.uTint,G.tint),e.uniform1f(Z.uHaze,G.haze),e.uniform1f(Z.uDim,G.dim),e.uniform1f(Z.uGlint,G.glint),e.uniform1f(Z.uShine,G.shine),e.uniform2fv(Z.uLight,G.light),e.drawArrays(e.TRIANGLE_STRIP,0,4)},dispose(){I.forEach(M=>e.deleteTexture(M)),I.clear(),y.forEach(M=>{e.deleteTexture(M.texture),e.deleteFramebuffer(M.frame)}),e.deleteBuffer(x),e.deleteVertexArray(f),e.deleteProgram(s.program),e.deleteProgram(r.program),e.deleteProgram(n.program)}}},Ur=(t,e,s,r,n,f)=>{const x=Math.max(0,Math.min(f,r/2,n/2));t.beginPath(),t.moveTo(e+x,s),t.arcTo(e+r,s,e+r,s+n,x),t.arcTo(e+r,s+n,e,s+n,x),t.arcTo(e,s+n,e,s,x),t.arcTo(e,s,e+r,s,x),t.closePath()},Vo=(t,e)=>{let s=0,r=0,n=t;for(;n&&n!==e;)s+=n.offsetLeft,r+=n.offsetTop,n=n.offsetParent;return n===e?[s,r]:null},Ko=t=>!t||t==="transparent"||/rgba?\([^)]*[,/]\s*0\s*\)$/.test(t),Zo=(t,e,s,r,n,f)=>{const x=Array.from(e.childNodes).filter(T=>T.nodeType===3).map(T=>T.textContent).join("").trim();if(!x)return;const m=parseFloat(f.fontSize)||12,y=parseFloat(f.lineHeight)||m*1.2,R=s+(parseFloat(f.paddingLeft)||0),I=r+(parseFloat(f.paddingTop)||0),k=n-(parseFloat(f.paddingLeft)||0)-(parseFloat(f.paddingRight)||0);t.font=`${f.fontStyle} ${f.fontWeight} ${f.fontSize} ${f.fontFamily}`,t.fillStyle=f.color,t.textBaseline="middle";const O=T=>{if(t.measureText(T).width<=k)return T;let _=T;for(;_.length>1&&t.measureText(`${_}…`).width>k;)_=_.slice(0,-1);return`${_.trimEnd()}…`};if(f.whiteSpace==="nowrap"){t.fillText(O(x),R,I+y/2);return}let $="",M=0;x.split(/\s+/).forEach(T=>{const _=$?`${$} ${T}`:T;$&&t.measureText(_).width>k?(t.fillText($,R,I+y*(M+.5)),M+=1,$=T):$=_}),$&&t.fillText($,R,I+y*(M+.5))},Hr=(t,e,s)=>{const r=Math.max(1,t.offsetWidth),n=Math.max(1,t.offsetHeight),f=document.createElement("canvas");f.width=Math.max(1,Math.round(r*e)),f.height=Math.max(1,Math.round(n*e));const x=[],m=f.getContext("2d");if(!m)return{canvas:f,pending:x};m.scale(e,e);const y=(R,I,k)=>{const O=getComputedStyle(R);if(O.display==="none"||O.visibility==="hidden")return;const $=R.offsetWidth,M=R.offsetHeight,T=parseFloat(O.borderTopLeftRadius)||0,_=R!==t&&Number.isFinite(parseFloat(O.opacity))?parseFloat(O.opacity):1;if(m.save(),m.globalAlpha*=_,Ko(O.backgroundColor)||(m.fillStyle=O.backgroundColor,Ur(m,I,k,$,M,T),m.fill()),O.overflow!=="visible"&&(Ur(m,I,k,$,M,T),m.clip()),R instanceof HTMLImageElement){if(!R.complete||!R.naturalWidth)x.push(R);else if(!s){const ve=Math.max($/R.naturalWidth,M/R.naturalHeight),pe=$/ve,ue=M/ve;m.drawImage(R,(R.naturalWidth-pe)/2,(R.naturalHeight-ue)/2,pe,ue,I,k,$,M)}}else Zo(m,R,I,k,$,O),Array.from(R.children).forEach(ve=>{const pe=Vo(ve,t);pe&&y(ve,pe[0],pe[1])});m.restore()};return y(t,0,0),{canvas:f,pending:x}},Qo=(t,e,s,r)=>{const n=document.createElement("canvas");n.width=Math.max(1,Math.round(t.w*r)),n.height=Math.max(1,Math.round((t.tabH+t.h)*r));const f=n.getContext("2d");if(!f)return n;f.scale(r,r);const x=f.createLinearGradient(0,0,0,t.tabH+t.h);return x.addColorStop(0,e),x.addColorStop(1,s),f.fillStyle=x,f.fill(new Path2D(Jr(t))),n},xr=({title:t,description:e})=>d.jsxs("div",{className:"folder-doc",children:[t?d.jsx("span",{className:"folder-doc-title",children:t}):d.jsx("span",{className:"folder-doc-heading"}),e&&d.jsx("span",{className:"folder-doc-text",children:e}),d.jsx("span",{className:"folder-doc-line",style:{width:"92%"}}),d.jsx("span",{className:"folder-doc-line",style:{width:"84%"}}),d.jsx("span",{className:"folder-doc-line",style:{width:"88%"}}),d.jsx("span",{className:"folder-doc-block"}),d.jsx("span",{className:"folder-doc-line",style:{width:"80%"}}),d.jsx("span",{className:"folder-doc-line",style:{width:"62%"}})]}),Jo=t=>v.isValidElement(t)?t:typeof t=="string"||typeof t=="number"?d.jsx(xr,{title:String(t)}):t&&typeof t=="object"?t.image?d.jsx("div",{className:"folder-photo",children:d.jsx("img",{src:t.image,alt:t.alt??t.title??"",draggable:!1})}):t.content?t.content:d.jsx(xr,{title:t.title,description:t.description}):d.jsx(xr,{}),en=(t,e,s,r,n)=>{const f=n.w/2,x=n.frontTop+n.frontH/2;if(s==="open"){if(r==="row"){const O=10*n.scale,$=Math.min(.8,(n.w*1.86-O*(e-1))/(e*n.docW)),M=n.docW*$+O;return{x:n.w/2+(t-(e-1)/2)*M,y:x,z:0,r:0,ry:0,s:$}}if(r==="stack"){const $=Math.min(26*n.scale,n.h*.36/Math.max(1,e-1)),M=n.frontTop+14*n.scale+(e-1)*$;return{x:n.w,y:M+n.docH*.74/2-t*$,z:0,r:0,ry:0,s:.74}}const R=e>4?.58:e>3?.64:.72,I=e===2?n.w:Math.min(n.w*1.3,n.w*.6*(e-1)),k=e>1?I/2-t*I/(e-1):n.w*.5;return{x:n.w/2+k,y:x+Qr[t]*n.h,z:0,r:Zr[t],ry:0,s:R}}const y=(s==="rest"?_o:Co)[t]??{x:.06,y:0,r:No[t]??0};return{x:f+y.x*n.w,y:x+y.y*n.h+t*.8*n.scale,z:0,r:y.r,ry:0,s:1}},tn=(t,e,s,r,n,f)=>{const x=dr[t]??dr[dr.length-1],m=n.tabH+n.h-5*n.scale-n.docH/2,y=(e-1)/2;if(s==="open"){const $=n.tabH-n.h*.02;if(r==="stack"){const pe=Math.min(30*n.scale,n.h*.62/Math.max(1,e-1)),ue=1.04-t*.05;return{x:n.w/2,y:n.tabH+n.h*.1-t*pe-n.docH*(1.04-ue)/2,z:-t*18*n.scale,r:0,ry:0,s:ue}}const M=12*n.scale,T=Math.min(.94,(n.w*2.3-M*(e-1))/(e*n.docW)),_=n.docW*T+M,ve=r==="row";return{x:n.w/2+(t-y)*_,y:$+(ve?0:Qr[t]*n.h*.7),z:0,r:ve?0:Zr[t]*.55,ry:0,s:T}}const R=s==="receive"?1.7:s==="peek"?1.3:1,I=n.w/2+x.x*n.w*R;if(s==="rest")return{x:I,y:m-x.rise*n.h,z:0,r:x.r,ry:0,s:1};const k=s==="peek"&&f!=null?Math.max(0,1-Math.abs(f-I)/(n.w*.32)):0,O=x.rise+(s==="receive"?.03:.1);return{x:I,y:m-O*n.h-k*k*n.h*.09,z:0,r:x.r*1.6,ry:0,s:1}},Sn=({items:t,label:e,mode:s="flap",variant:r="solid",color:n="#3d8bff",paperColor:f="#ffffff",tabPosition:x="right",layout:m="spread",size:y=1,openOn:R="click",open:I,defaultOpen:k=!1,onOpenChange:O,onItemClick:$,onItemDrop:M,draggable:T=!0,zoomOnClick:_=!0,peek:ve=!0,intro:pe=!0,tilt:ue=.5,bounce:G=.4,speed:me=1,frost:te=.25,closeOnOutsideClick:Z=!0,theme:fe="dark",className:j="",style:ne,children:u})=>{const B=v.useRef(null),H=v.useRef(null),ke=v.useRef(null),W=v.useRef(null),z=v.useRef(null),X=v.useRef(null),l=v.useRef(null),w=v.useRef([]),P=v.useRef(null),re=v.useRef(null),se=v.useRef(null),[ae,ge]=v.useState(k),[ye,de]=v.useState(0),[Se,A]=v.useState([]),[Q,V]=v.useState(!1),Fe=I!==void 0,Re=Fe?!!I:ae,Ce=s==="book",D=r==="glass",ie=v.useMemo(()=>{const p=v.Children.toArray(u).filter(v.isValidElement);return(p.length?p:t!=null&&t.length?t:Fo).slice(0,$o)},[u,t]),he=ie.length,Le=Math.max(.3,Number(y)||1),b=Uo(Ce,Le,ye,!!e,x),c=b.tabH+b.h,g=Ce?{x:-.75*b.w,y:-.25*c,width:2.5*b.w,height:1.5*c}:{x:-.25*b.w,y:-.1*c,width:1.5*b.w,height:1.3*c};Oo(()=>{var o;const p=P.current;if(!p)return;let U=!0;const J=()=>{U&&de(p.offsetWidth)};return J(),(o=document.fonts)==null||o.ready.then(J),()=>{U=!1}},[e,Le]);const S=v.useCallback(p=>{const U=typeof p=="function"?p(Re):p;Fe||ge(U),U!==Re&&(O==null||O(U))},[Fe,Re,O]),C=v.useRef(S);C.current=S;const q=Br(n),Ne=Br(f),_e=ht(q,[0,0,0],.16),je=it(ht(q,[0,0,0],.08)),F=it(_e),N=v.useRef(null);N.current={open:Re,layout:m,openOn:R,peek:ve,intro:pe,draggable:T,zoomOnClick:_,closeOnOutsideClick:Z,onItemClick:$,onItemDrop:M,tilt:Ae(ue,0,1.5),bounce:Ae(G,0,1),speed:Ae(me,.2,3),frost:Ae(te,0,1),count:he,entries:ie,glass:D,light:fe==="light",tint:q,insideTop:je,insideBottom:F,insideTone:[ht(q,[0,0,0],.08).map(p=>p/255),_e.map(p=>p/255)],content:`${s}|${Le}|${f}|${n}|${b.tabX}|${b.tabW}`,depth:Math.round(Math.max(b.w,b.h)*5),view:g,g:b},v.useEffect(()=>{var Tr,Ar;const p=B.current;if(!p)return;const U=((Tr=window.matchMedia)==null?void 0:Tr.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,J=a=>({value:a,velocity:0}),o={raf:0,last:0,ready:!1,hovered:!1,pressed:!1,pointerX:0,pointerY:0,deskX:0,deskY:0,hoveredItem:-1,phase:"rest",previous:"rest",changedAt:0,front:J(0),rx:J(0),ry:J(0),lift:J(0),squash:J(1),items:[],focus:-1,drag:null,receiving:!1,receiveUntil:0,suppressClick:!1,dropCount:0,intro:{phase:"done",start:0,opening:!1},anchor:J(0),appear:1,content:{key:"",entries:null,renderer:null}},Ue=a=>{for(;o.items.length<a;)o.items.push({x:J(0),y:J(0),z:J(0),r:J(0),ry:J(0),s:J(1),hover:J(0),mx:J(0),my:J(0),alpha:J(1),place:"inside",rank:0,layer:"inside",elevated:!1,insertUntil:0,insertFrom:null,outX:0,outY:0,outR:0,outS:1,outOrder:0,localX:0,localY:0,fresh:!0});o.items.length>a&&(o.items.length=a,o.focus>=a&&(o.focus=-1),pt())},pt=()=>{const a=[];o.items.forEach((i,h)=>{i.place==="out"&&a.push(h)}),A(i=>i.length===a.length&&i.every((h,E)=>h===a[E])?i:a)},Ee=(a,i,h,E,Y)=>{const Ie=h*h,De=2*E*h,we=Math.max(1,Math.ceil(Y/Po)),Me=Y/we;for(let le=0;le<we;le++)a.velocity+=(Ie*(i-a.value)-De*a.velocity)*Me,a.value+=a.velocity*Me;return Math.abs(i-a.value)>.01||Math.abs(a.velocity)>.01},ze=(a,i)=>{a.value=i,a.velocity=0},Xt=()=>{const{g:a}=N.current;return a.book?a.w/2*Ae(-o.front.value/180,0,1):0},mt=(a,i)=>{const h=p.getBoundingClientRect(),E=p.offsetWidth/(h.width||1),Y=p.offsetHeight/(h.height||1);return[(a-h.left)*E,(i-h.top)*Y]},It=()=>{const a=p.getBoundingClientRect();let i=0,h=0,E=window.innerWidth,Y=window.innerHeight;for(let we=p.parentElement;we&&we!==document.body;we=we.parentElement){const Me=getComputedStyle(we);if(/(hidden|clip|auto|scroll)/.test(`${Me.overflowX} ${Me.overflowY}`)){const le=we.getBoundingClientRect();i=Math.max(i,le.left),h=Math.max(h,le.top),E=Math.min(E,le.right),Y=Math.min(Y,le.bottom);break}}const Ie=p.offsetWidth/(a.width||1),De=p.offsetHeight/(a.height||1);return{left:(i-a.left)*Ie,top:(h-a.top)*De,right:(E-a.left)*Ie,bottom:(Y-a.top)*De}},zt=(a,i)=>{const{g:h}=N.current,E=Xt();if(h.book){const Y=o.front.value<-90?E-h.w:E;return a>=Y&&a<=E+h.w&&i>=h.tabH*.5&&i<=h.tabH+h.h}return a>=0&&a<=h.w&&i>=0&&i<=h.tabH+h.h},Pt=a=>{const{g:i}=N.current,h=i.docW*a.s.value/2,E=i.docH*a.s.value/2;if(i.book){if(o.front.value<-60)return!1;const Y=Xt();return a.x.value-h<Y+i.w&&a.x.value+h>Y&&a.y.value+E>i.tabH&&a.y.value-E<i.tabH+i.h}return o.front.value<-45?!1:a.y.value+E>i.frontTop+4*i.scale&&a.x.value+h>0&&a.x.value-h<i.w},Ut=a=>{if(a.length<2)return[0,0];const i=a[0],h=a[a.length-1],E=Math.max(.016,(h[0]-i[0])/1e3);return[(h[1]-i[1])/E,(h[2]-i[2])/E]},or=(a,i)=>{var h;return a.open?"open":o.receiving||i<o.receiveUntil?"receive":a.peek&&o.hovered&&!((h=o.drag)!=null&&h.active)?"peek":"rest"},Mt=(a,i,h,E)=>{if(E.g.book)return en(a,i,h,E.layout,E.g);const Y=o.hovered?(o.pointerX+1)/2*E.g.w:null;return tn(a,i,h,E.layout,E.g,Y)},nr=(a,i,h)=>{const{g:E}=h;return a.insertFrom==="side"?{...i,x:Math.max(i.x,E.w+E.docW*.54*i.s)}:{...i,y:Math.min(i.y,E.frontTop-E.docH*.5*i.s-8*E.scale)}},Ht=a=>{var Ye,dt,Vt;o.raf=0;const i=N.current,{g:h}=i;Ue(i.count);const E=a/1e3,Y=o.last?Math.min(.05,(a-o.last)/1e3):1/60;o.last=a;const Ie=U?1:1-.72*i.bounce,De=St*(h.book?1.55:2)*i.speed,we=St*2.1*i.speed,Me=St*1.6*i.speed,le=or(i,E);le!==o.phase&&(o.previous=o.phase,o.phase=le,o.changedAt=a);const He=(a-o.changedAt)/1e3;let ee=E<o.receiveUntil;const We=[];o.items.forEach((L,xe)=>{L.place==="inside"&&We.push(xe)});const Be=We.length;We.forEach((L,xe)=>{o.items[L].rank=xe}),o.focus>=0&&le!=="open"&&((Ye=o.items[o.focus])==null?void 0:Ye.place)==="inside"&&(o.focus=-1);const Pe=o.intro;o.ready||(Pe.opening=i.open),Pe.phase==="run"&&!Pe.opening&&(i.open||(dt=o.drag)!=null&&dt.active)&&(Pe.phase="done");const tt=Pe.phase==="run"?E-Pe.start:0,qe=Pe.phase!=="done"&&!Pe.opening,gt=(.16+Be*.085+.3)/i.speed,rt=qe&&tt<gt,ot=L=>(.16+(Be-1-L)*.085)/i.speed,_t=(L,xe)=>h.book?{...xe,r:xe.r+(L.rank%2?7:-6),s:xe.s*1.12}:{...xe,y:xe.y-(h.h*.8+h.docH*.5),r:xe.r+(L.rank%2?9:-7)};Pe.phase==="run"&&(ee=!0,tt>(Pe.opening?1.4:gt+1)/i.speed&&(Pe.phase="done"));const qt=Pe.phase==="wait"?0:Pe.phase==="run"?Ae(tt/(.34/i.speed),0,1):1;o.appear=1-(1-qt)**3;const Ct=o.previous==="open"&&le!=="open"&&!U?((h.book?.1:.06)+.035*Be)/i.speed:0,Yt=He<Ct?o.previous:le,jt=rt?h.book?-150:-42:(h.book?Bo:Do)[Yt];if(!o.ready){o.ready=!0;const L=Pe.phase!=="done"&&Pe.opening;L&&(o.phase="rest",o.previous="rest"),ze(o.front,L?0:jt),ze(o.anchor,qe?1:0),o.items.forEach(xe=>{const $e=Mt(xe.rank,Be,L?"rest":le,i),Ke=qe?_t(xe,$e):$e;ze(xe.x,Ke.x),ze(xe.y,Ke.y),ze(xe.z,Ke.z),ze(xe.r,Ke.r),ze(xe.ry,Ke.ry),ze(xe.s,Ke.s),ze(xe.alpha,qe?0:1),ze(xe.hover,qe&&h.book?3:0),xe.fresh=!1})}if(Pe.phase==="wait"){lt(),o.last=0;return}ee=Ee(o.front,jt,De,Ie,Y)||ee;const nt=.2+.35*i.bounce;h.book&&o.front.value<-180?(o.front.value=-360-o.front.value,o.front.velocity=-o.front.velocity*nt):o.front.value>0&&(o.front.value=-o.front.value,o.front.velocity=-o.front.velocity*nt),He<Ct&&(ee=!0),ee=Ee(o.anchor,qe?1:0,De,1,Y)||ee;const et=o.hovered&&!U;ee=Ee(o.rx,et?-o.pointerY*8*i.tilt:0,Me,1,Y)||ee,ee=Ee(o.ry,et?o.pointerX*10*i.tilt:0,Me,1,Y)||ee,ee=Ee(o.lift,o.hovered&&le!=="open"?1:0,Me,1,Y)||ee,ee=Ee(o.squash,o.pressed?.975:1,St*3.2,.6,Y)||ee;const Gt=le==="open"&&o.previous!=="open",Ve=(Vt=o.drag)!=null&&Vt.active?o.drag:null,st=o.hoveredItem,yt=!Ve&&st>=0&&o.items[st]?o.items[st]:null,Rt=yt&&yt.place==="inside"&&le==="open"?Mt(yt.rank,Be,"open",i):null,ir=Ae((h.tabH+h.h)*1.18/h.docH,1.2,2.2),ce=h.book?h.tabH+h.h/2:h.tabH+h.h*.36;o.items.forEach((L,xe)=>{if(L.fresh){const Ze=Mt(L.rank,Be,"rest",i);ze(L.x,Ze.x),ze(L.y,Ze.y),ze(L.r,Ze.r),L.fresh=!1}let $e,Ke=we,Kt=Ie,at=0,Sr=1,Zt=!1;if(o.focus===xe)$e={x:h.w/2,y:ce,z:0,r:0,ry:0,s:ir},at=2.4,L.layer="focus";else if(Ve&&Ve.index===xe){const[Ze]=Ut(Ve.samples);$e={x:o.deskX+Ve.grabX,y:o.deskY+Ve.grabY,z:0,r:Ae(Ze*.012,-14,14),ry:0,s:Ve.scale*1.05},Ke=St*5,Kt=.78,at=1.4,!L.elevated&&!Pt(L)&&(L.elevated=!0),L.layer=L.elevated?"drag":"inside"}else if(L.place==="out")$e={x:L.outX,y:L.outY,z:0,r:L.outR,ry:0,s:L.outS},at=st===xe?1:.15,Zt=st===xe,L.layer="out";else{const Ze=Gt&&h.book?Be-1-L.rank:L.rank,Qt=U?0:Gt?((h.book?.16:.05)+Ze*(h.book?.055:.045))/i.speed:Ze*.03/i.speed,Tt=He>=Qt?le:o.previous;if($e=Mt(L.rank,Be,Tt,i),He<Qt&&(ee=!0),qe&&tt<ot(L.rank))$e=_t(L,$e),Sr=0,at=h.book?3:0,L.layer="inside";else if(L.insertUntil>E)ee=!0,$e=nr(L,$e,i),L.layer="drag",at=.6;else if(L.insertUntil=0,L.elevated=!1,L.layer="inside",Rt&&Tt==="open")if(st===xe)$e={...$e,y:$e.y-6*h.scale,r:$e.r*.2,ry:0,s:$e.s*1.05},at=1,Zt=!0;else{const Lr=$e.x-Rt.x;$e={...$e,x:$e.x+Math.sign(Lr)*12*h.scale*Math.max(0,1-Math.abs(Lr)/(h.w*1.1))},at=.2}else Tt==="open"&&(at=.2)}if(ee=Ee(L.x,$e.x,Ke,Kt,Y)||ee,ee=Ee(L.y,$e.y,Ke,Kt,Y)||ee,!h.book&&L.layer==="inside"){const Ze=L.r.value*Math.PI/180,Qt=(h.docW*Math.abs(Math.sin(Ze))+h.docH*Math.abs(Math.cos(Ze)))*L.s.value/2,Tt=h.tabH+h.h-2*h.scale-Qt;L.y.value>Tt&&(L.y.value=Tt,L.y.velocity>0&&(L.y.velocity*=-.25))}ee=Ee(L.z,$e.z,we,Ie,Y)||ee,ee=Ee(L.r,$e.r,Ke,Kt,Y)||ee,ee=Ee(L.ry,$e.ry,we,Ie,Y)||ee,ee=Ee(L.s,$e.s,we,Ie,Y)||ee,ee=Ee(L.hover,at,we,Ie,Y)||ee,ee=Ee(L.alpha,Sr,St*3*i.speed,1,Y)||ee,ee=Ee(L.mx,Zt?L.localX*7*h.scale:0,Me,.85,Y)||ee,ee=Ee(L.my,Zt?L.localY*7*h.scale:0,Me,.85,Y)||ee}),lt(),ee||Ve?o.raf=requestAnimationFrame(Ht):o.last=0},Wt=(a,i)=>{if(o.content.key===i.content&&o.content.entries===i.entries&&o.content.renderer===a)return;o.content={key:i.content,entries:i.entries,renderer:a};const h=Math.min(window.devicePixelRatio||1,2),E=new Set(["back"]);a.upload("back",Qo(i.g,i.insideTop,i.insideBottom,h)),w.current.slice(0,i.count).forEach((Y,Ie)=>{if(!Y)return;const De=`item-${Ie}`;E.add(De);let we=Hr(Y,h,!1);try{a.upload(De,we.canvas)}catch{we=Hr(Y,h,!0),a.upload(De,we.canvas)}we.pending.forEach(Me=>Me.addEventListener("load",xt,{once:!0}))}),a.prune(E)},lt=()=>{const a=N.current,{w:i,h,tabH:E,frontTop:Y,frontH:Ie,docW:De,docH:we,scale:Me,book:le}=a.g,He=i/2,ee=E+h/2,We=o.front.value,Be=We*Math.PI/180,Pe=le?Ae(-We/180,0,1):0,tt=i/2*Pe*(1-o.anchor.value),qe=(1+o.lift.value*.012)*o.squash.value*(.94+.06*o.appear);p.style.opacity=o.appear<.999?o.appear.toFixed(3):"";const gt=Lt(Qe(He,ee),Dr(o.rx.value),pr(o.ry.value),tr(qe,qe),Qe(-He,-ee)),rt=wr(gt,Qe(tt,0)),ot=le&&We<-90,_t=ot?"3":"40";H.current&&(H.current.style.transform=kt(rt),H.current.style.setProperty("--folder-gutter",Pe.toFixed(3)),H.current.style.setProperty("--folder-label",(le?1:1-Ae((-We-18)/26,0,1)).toFixed(3)));const qt=le?Lt(rt,Qe(0,Y,2*Me*(1-Pe)),pr(We)):Lt(rt,Qe(0,E+h,2*Me),Dr(We),Qe(0,-Ie)),ar=le?Math.sin(Be)*-.42+Math.cos(Be)*.9:Math.sin(Be)*.5+Math.cos(Be)*.86,Ct=(ot?-ar:ar)/(le?.9:.86),Yt=Ae((Ct-1)*.9,0,.18),jt=Ae((1-Ct)*(le?.5:.22),0,.5),nt=ke.current;nt&&(nt.style.transform=kt(qt),nt.style.zIndex=_t,nt.dataset.face=ot?"inner":"outer",nt.style.setProperty("--folder-glint",Yt.toFixed(3)),nt.style.setProperty("--folder-dim",jt.toFixed(3)));const et=le?Math.max(0,Math.sin(-Be)):0;if(W.current&&(W.current.style.transform=kt(wr(rt,Qe(0,le?E:E+h))),W.current.style.opacity=(.75+o.lift.value*.25).toFixed(3)),z.current&&(z.current.style.transform=kt(Lt(rt,Qe(i*et*.12,Y+h*et*.04),tr(Math.cos(Be),1))),z.current.style.opacity=(ot?1-et*.7:0).toFixed(3)),X.current){const ce=i*Math.cos(Be)+i*et*.36;X.current.style.transform=kt(Lt(rt,Qe(0,Y+h*et*.03),tr(ce/i,1))),X.current.style.zIndex=ce>0?"39":"2",X.current.style.opacity=(Ae(et*4,0,1)*(1-et*.45)).toFixed(3)}const Gt=o.items.map((ce,Ye)=>[ce,Ye]).filter(([ce])=>ce.layer==="out").sort((ce,Ye)=>ce[0].outOrder-Ye[0].outOrder).map(([,ce])=>ce),Ve=[];o.items.forEach((ce,Ye)=>{const dt=w.current[Ye],Vt=3*Me+ce.z.value+ce.hover.value*26*Me,L=Lt(gt,Qe(ce.x.value+ce.mx.value,ce.y.value+ce.my.value,Vt),pr(ce.ry.value),zo(ce.r.value),tr(ce.s.value,ce.s.value),Qe(-De/2,-we/2));let xe=10+a.count-ce.rank;ce.layer==="inside"&&o.phase==="open"&&o.hoveredItem===Ye&&(xe=30),ce.layer==="out"&&(xe=hr.out+Gt.indexOf(Ye)),ce.layer==="drag"&&(xe=hr.drag),ce.layer==="focus"&&(xe=hr.focus),Ve.push({index:Ye,matrix:L,layer:xe,alpha:Ae(ce.alpha.value,0,1),inside:ce.layer==="inside"}),dt&&(dt.style.transform=kt(L),dt.style.zIndex=String(xe),dt.style.setProperty("--folder-lift",Ae(ce.hover.value,0,2.4).toFixed(3)),dt.style.opacity=ce.alpha.value<.995?Math.max(0,ce.alpha.value).toFixed(3):"")});const st=l.current,yt=se.current;if(!st||!yt||!a.glass)return;st.style.zIndex=_t,Wt(yt,a);const Rt=[];ot||(Rt.push({key:"back",matrix:rt,width:i,height:E+h,alpha:1}),Ve.filter(ce=>ce.inside).sort((ce,Ye)=>ce.layer-Ye.layer).forEach(ce=>Rt.push({key:`item-${ce.index}`,matrix:ce.matrix,width:De,height:we,alpha:ce.alpha})));const ir=Math.min(window.devicePixelRatio||1,2);yt.render({dpr:ir,depth:a.depth,origin:[He,ee],view:a.view,layers:Rt,glass:{matrix:qt,width:i,height:Ie,radii:le?[0,a.g.r,a.g.r,0]:[a.g.r,a.g.r,a.g.r,a.g.r],spine:le?i*2:0,bleed:ot?2:0,morph:le?Ae((Pe-.55)/.45,0,1)**2:0,insideTop:a.insideTone[0],insideBottom:a.insideTone[1],tabRatio:E/(E+h),gutter:[12*Me,le?.12*Pe:0],bevel:12*Me,strength:14*Me,split:.26,lens:.02,frost:a.frost*6*Me,tint:[a.tint[0]/255,a.tint[1]/255,a.tint[2]/255,a.light?.1:.14],haze:.04+a.frost*.1,dim:jt*.8,glint:Yt,shine:a.light?.72:.85,light:ot?[.55,-.83]:[-.55,-.83]}})},Oe=()=>{o.raf||(o.raf=requestAnimationFrame(Ht))},Et=()=>{o.intro.phase==="wait"&&(o.intro.phase="run",o.intro.start=performance.now()/1e3,Oe())},xt=()=>{o.content.key="",Oe()},vt=()=>{const a=o.drag,i=a?o.items[a.index]:null;o.receiving=!!(a!=null&&a.active&&i&&(i.place==="out"||i.elevated)&&zt(o.deskX,o.deskY))},$t=a=>{const i=o.items[a.index];i&&(a.active=!0,a.grabX=i.x.value-a.downX,a.grabY=i.y.value-a.downY,a.scale=i.place==="out"?i.outS:i.s.value,a.clip=It(),o.suppressClick=!0,o.focus===a.index&&(o.focus=-1),i.elevated=i.place==="out"||!Pt(i),p.dataset.dragging="")},sr=(a,i)=>{var tt,qe;const h=N.current,E=o.items[a.index];if(o.receiving=!1,delete p.dataset.dragging,!E)return;const Y=performance.now()/1e3,[Ie,De]=i?[0,0]:Ut(a.samples);if(zt(o.deskX,o.deskY)){const gt=E.place==="out"||E.elevated;E.place="inside",gt&&!U&&(E.insertUntil=Y+.24/h.speed,E.insertFrom=h.g.book?o.front.value<-90?null:"side":"top",E.insertFrom||(E.insertUntil=0),o.receiveUntil=E.insertUntil?E.insertUntil+.14/h.speed:0),E.elevated=!1,pt(),(tt=h.onItemDrop)==null||tt.call(h,h.entries[a.index],a.index,!0);return}const we=a.clip??It(),Me=h.g.docW*a.scale/2,le=h.g.docH*a.scale/2,He=o.deskX+a.grabX+Ae(Ie,-2400,2400)*.09,ee=o.deskY+a.grabY+Ae(De,-2400,2400)*.09;E.place="out",E.elevated=!0;const We=8*h.g.scale,Be=Me*1.08+We,Pe=le*1.08+We;E.outX=Ae(He,we.left+Be,Math.max(we.left+Be,we.right-Be)),E.outY=Ae(ee,we.top+Pe,Math.max(we.top+Pe,we.bottom-Pe)),E.outR=Ae(E.r.value*.5+Ae(Ie,-2400,2400)*.003+jo[a.index%6]*.6,-12,12),E.outS=a.scale,o.dropCount+=1,E.outOrder=o.dropCount,pt(),(qe=h.onItemDrop)==null||qe.call(h,h.entries[a.index],a.index,!1)},ct=a=>{var Ie,De,we;const i=o.drag;if(i&&a.pointerId===i.id){const[Me,le]=mt(a.clientX,a.clientY);o.deskX=Me,o.deskY=le;const He=performance.now();for(i.samples.push([He,Me,le]);i.samples.length>2&&He-i.samples[0][0]>100;)i.samples.shift();if(!i.active){const ee=a.pointerType==="touch"?8:4;Math.hypot(a.clientX-i.clientX,a.clientY-i.clientY)>ee&&$t(i)}i.active&&vt(),Oe()}if(a.pointerType==="touch")return;const h=p.getBoundingClientRect();o.pointerX=Ae((a.clientX-h.left)/h.width*2-1,-1.5,1.5),o.pointerY=Ae((a.clientY-h.top)/h.height*2-1,-1.5,1.5);const E=(De=(Ie=a.target).closest)==null?void 0:De.call(Ie,"[data-folder-item]"),Y=E&&p.contains(E)?Number(E.getAttribute("data-folder-item")):-1;if(o.hoveredItem=Y,E&&Y>=0&&!((we=o.drag)!=null&&we.active)){const Me=E.getBoundingClientRect(),le=o.items[Y];le&&(le.localX=Ae((a.clientX-Me.left)/Me.width*2-1,-1,1),le.localY=Ae((a.clientY-Me.top)/Me.height*2-1,-1,1))}o.hovered||(o.hovered=!0,N.current.openOn==="hover"&&C.current(!0)),Oe()},ut=a=>{var i;a.pointerType==="touch"||(i=o.drag)!=null&&i.active||(o.hovered=!1,o.pressed=!1,o.hoveredItem=-1,N.current.openOn==="hover"&&C.current(!1),Oe())},Ft=a=>{var h,E;if(a.button>0)return;o.suppressClick=!1;const i=(E=(h=a.target).closest)==null?void 0:E.call(h,"[data-folder-item]");if(i&&p.contains(i)&&N.current.draggable){const[Y,Ie]=mt(a.clientX,a.clientY);o.deskX=Y,o.deskY=Ie,o.drag={index:Number(i.getAttribute("data-folder-item")),id:a.pointerId,clientX:a.clientX,clientY:a.clientY,downX:Y,downY:Ie,grabX:0,grabY:0,scale:1,clip:null,active:!1,samples:[[performance.now(),Y,Ie]]};try{i.setPointerCapture(a.pointerId)}catch{o.drag.id=a.pointerId}}else o.pressed=!0;Oe()},Nt=a=>{o.pressed=!1;const i=o.drag;i&&a.pointerId===i.id&&(o.drag=null,i.active&&sr(i,a.type==="pointercancel")),Oe()},Er=a=>{if(p.contains(a.target))return;const i=N.current;o.focus>=0&&(o.focus=-1,Oe()),i.open&&i.closeOnOutsideClick&&C.current(!1)},Rr=a=>{if(a.key!=="Escape")return;if(o.focus>=0){o.focus=-1,Oe();return}const i=N.current;i.open&&i.closeOnOutsideClick&&C.current(!1)};p.addEventListener("pointermove",ct),p.addEventListener("pointerleave",ut),p.addEventListener("pointerdown",Ft),window.addEventListener("pointerup",Nt),window.addEventListener("pointercancel",Nt),document.addEventListener("pointerdown",Er),document.addEventListener("keydown",Rr),(Ar=document.fonts)==null||Ar.ready.then(xt);let ft=null;return N.current.intro&&!U&&(o.intro.phase="wait",p.style.opacity="0",typeof IntersectionObserver>"u"?Et():(ft=new IntersectionObserver(a=>{a.some(i=>i.isIntersecting)&&(ft==null||ft.disconnect(),Et())},{threshold:.2}),ft.observe(p))),re.current={wake:Oe,invalidate:xt,consumeClick:()=>o.suppressClick?(o.suppressClick=!1,!0):!1,interactive:a=>{var i;return N.current.open||((i=o.items[a])==null?void 0:i.place)==="out"||o.focus===a},select:a=>{var h;const i=N.current;i.zoomOnClick&&(o.focus=o.focus===a?-1:a),(h=i.onItemClick)==null||h.call(i,i.entries[a],a),Oe()},blur:()=>o.focus<0?!1:(o.focus=-1,Oe(),!0)},Oe(),()=>{cancelAnimationFrame(o.raf),p.removeEventListener("pointermove",ct),p.removeEventListener("pointerleave",ut),p.removeEventListener("pointerdown",Ft),window.removeEventListener("pointerup",Nt),window.removeEventListener("pointercancel",Nt),document.removeEventListener("pointerdown",Er),document.removeEventListener("keydown",Rr),ft==null||ft.disconnect(),re.current=null}},[]),v.useEffect(()=>{var o;if(!D)return;const p=l.current;if(!p)return;const U=Go(p);if(!U)return;se.current=U,V(!0);const J=Ue=>{Ue.preventDefault(),se.current=null,V(!1)};return p.addEventListener("webglcontextlost",J),(o=re.current)==null||o.invalidate(),()=>{p.removeEventListener("webglcontextlost",J),U.dispose(),se.current===U&&(se.current=null),V(!1)}},[D]),v.useEffect(()=>{var p;(p=re.current)==null||p.wake()});const K=()=>{var p;(p=re.current)!=null&&p.blur()||R!=="hover"&&S(!Re)},oe=(p,U)=>{const J=re.current;if(J){if(J.consumeClick()){p.stopPropagation();return}J.interactive(U)&&(p.stopPropagation(),J.select(U))}},be={"--folder-rgb":q.join(", "),"--folder-base":it(q),"--folder-front-top":it(ht(q,[255,255,255],.12)),"--folder-front-bottom":it(ht(q,[0,0,0],.06)),"--folder-inside-top":je,"--folder-inside-bottom":F,"--folder-tab-ink":Xo(_e)>.6?"rgba(0, 0, 0, 0.72)":"rgba(255, 255, 255, 0.92)","--folder-paper":it(Ne),"--folder-paper-ink":it(ht(Ne,[0,0,0],.11)),"--folder-paper-ink-strong":it(ht(Ne,[0,0,0],.28)),"--folder-paper-text":it(ht(Ne,[0,0,0],.72)),"--folder-w":`${b.w}px`,"--folder-h":`${b.h}px`,"--folder-tab-h":`${b.tabH}px`,"--folder-front-y":`${b.frontTop}px`,"--folder-front-h":`${b.frontH}px`,"--folder-r":`${b.r}px`,"--folder-front-radius":Ce?`0 ${b.r}px ${b.r}px 0`:`${b.r}px`,"--folder-doc-w":`${b.docW}px`,"--folder-doc-h":`${b.docH}px`,"--folder-frost":`${(1.5+Ae(te,0,1)*10)*Le}px`,"--folder-depth":`${N.current.depth}px`,"--folder-scale":Le,...ne},Te=Jr(b);return d.jsxs("div",{ref:B,className:`folder-root${j?` ${j}`:""}`,"data-mode":Ce?"book":"flap","data-variant":r,"data-theme":fe==="light"?"light":"dark","data-open":Re?"":void 0,"data-gl":D&&Q?"":void 0,"data-draggable":T?"":void 0,style:be,children:[d.jsxs("div",{className:"folder-stage",role:"button",tabIndex:0,"aria-expanded":Re,"aria-label":e?`${e} folder`:"Folder",onClick:K,onKeyDown:p=>{p.target===p.currentTarget&&(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),K())},children:[d.jsx("span",{ref:W,className:"folder-layer folder-ground","aria-hidden":"true"}),Ce&&d.jsx("span",{ref:z,className:"folder-layer folder-cast","aria-hidden":"true"}),d.jsxs("div",{ref:H,className:"folder-layer folder-back","aria-hidden":"true",children:[d.jsx("div",{className:"folder-back-fill",style:{clipPath:`path('${Te}')`},children:Ce&&d.jsx("span",{className:"folder-gutter"})}),d.jsx("svg",{className:"folder-back-rim",width:b.w,height:c,viewBox:`0 0 ${b.w} ${c}`,children:d.jsx("path",{className:"folder-focus",d:Te})}),e&&d.jsx("span",{className:"folder-tab-text",style:{left:b.tabX,width:b.tabW},children:e})]}),ie.map((p,U)=>{const J=Re||Se.includes(U);return d.jsx("div",{ref:o=>{w.current[U]=o},className:"folder-layer folder-item","data-folder-item":U,role:J?"button":void 0,tabIndex:J?0:-1,onClick:o=>oe(o,U),onKeyDown:o=>{var Ue;!J||o.key!=="Enter"&&o.key!==" "||(o.preventDefault(),o.stopPropagation(),(Ue=re.current)==null||Ue.select(U))},children:Jo(p)},v.isValidElement(p)&&p.key!=null?p.key:U)}),Ce&&d.jsx("span",{ref:X,className:"folder-layer folder-shade","aria-hidden":"true"}),d.jsxs("div",{ref:ke,className:"folder-layer folder-front","data-face":"outer","aria-hidden":"true",children:[d.jsx("div",{className:"folder-face folder-face-outer"}),Ce&&d.jsx("div",{className:"folder-face folder-face-inner",children:d.jsx("span",{className:"folder-inner-gutter"})})]}),D&&d.jsx("canvas",{ref:l,className:"folder-glass","aria-hidden":"true",style:{left:g.x,top:g.y,width:g.width,height:g.height}})]}),e&&d.jsx("span",{ref:P,className:"folder-tab-text folder-measure","aria-hidden":"true",children:e})]})};Ot.registerPlugin(ao);const rn=typeof window<"u"?v.useLayoutEffect:v.useEffect,on=t=>typeof t=="string"&&!t.startsWith("clamp(")?`clamp(${t})`:t,Mr=t=>Math.min(Math.max(t,0),1),vr=(t,e,s)=>{const r=Mr((s-t)/(e-t));return r*r*(3-2*r)},wt=(t,e)=>{const s=Math.sin((t+1)*12.9898+e*78.233)*43758.5453;return s-Math.floor(s)},nn=(t,e,s)=>{const r=(t-1)/2,n=Array.from({length:t},(x,m)=>e==="end"?t-1-m:e==="center"?Math.abs(m-r):e==="edges"?r-Math.abs(m-r):m);e==="random"&&n.map((m,y)=>y).sort((m,y)=>wt(m,9)-wt(y,9)).forEach((m,y)=>{n[m]=y});const f=Math.min(...n);return n.map(x=>(x-f)*Math.max(0,s))},Ln=({children:t,scrollContainerRef:e,containerClassName:s="",textClassName:r="",effect:n="float",splitBy:f="chars",direction:x="up",order:m="start",fromColor:y="currentColor",animationDuration:R=1,ease:I="back.inOut(2)",scrollStart:k="center bottom+=50%",scrollEnd:O="bottom bottom-=40%",stagger:$=.03,distance:M=120,stretch:T=2.3,smoothing:_=0})=>{const ve=v.useRef(null),pe=v.useRef(null),ue=v.useMemo(()=>{const j=v.Children.toArray(t);return j.every(ne=>typeof ne=="string"||typeof ne=="number")?j.join(""):null},[t]),G=y&&y!=="currentColor"?y:null,me=v.useMemo(()=>G?{color:`color-mix(in oklab, ${G} calc(var(--scroll-float-mix, 0) * 100%), currentColor)`}:void 0,[G]),te=v.useMemo(()=>ue===null?null:ue.split(/(\s+)/).map((j,ne)=>j.trim()===""?j:d.jsx("span",{className:"scroll-float-word",children:Array.from(j).map((u,B)=>d.jsx("span",{className:"scroll-float-char",style:me,children:u},B))},ne)),[ue,me]),[Z,fe]=v.useState(!1);return v.useEffect(()=>fe(!0),[]),rn(()=>{const j=ve.current,ne=pe.current;if(!j||!ne||e&&!e.current)return;const u=(e==null?void 0:e.current)||window,B=j.querySelectorAll(f==="words"?".scroll-float-word":".scroll-float-char"),H=B.length?Array.from(B):[ne],ke=new Map(H.map((A,Q)=>[A,Q])),W=A=>(Q,V)=>A(ke.get(V)??0),z=(H.length-1)/2,X=A=>z>0?(A-z)/z:0,l=nn(H.length,m,$),w=x==="down"?-1:1,P=Math.max(0,Number(M)||0)/120,re=T>0?T**-.43:1,se=Ot.parseEase(I)||(A=>A),ae=A=>Mr(se(A)),ge=()=>parseFloat(getComputedStyle(ne).fontSize)||16,ye=A=>{const Q=ae(A);return 1-Math.cos(Q*Math.PI*2.5)*Math.pow(1-Q,2.6)},de=A=>{const Q=ae(A);return Math.sin(Q*Math.PI*2.5)*Math.pow(1-Q,2.6)},Se=Ot.matchMedia();return Se.add("(prefers-reduced-motion: no-preference)",()=>{const A=Ot.timeline({scrollTrigger:{trigger:j,scroller:u,start:k,end:on(O),scrub:_>0?_:!0,invalidateOnRefresh:!0}}),Q=(V,Fe)=>(Ot.set(H,{willChange:"opacity, transform",...V}),A.fromTo(H,{willChange:"opacity, transform",...V},{duration:R,stagger:Re=>l[Re]||0,...Fe},0));n==="flip"?(Q({rotationX:-90*w,transformPerspective:()=>ge()*4,transformOrigin:()=>`50% 50% ${(-ge()*.55*P).toFixed(2)}`,backfaceVisibility:"hidden"},{ease:I,rotationX:0}),Q({opacity:0},{ease:V=>vr(.05,.55,ae(V)),opacity:1})):n==="scatter"?(Q({x:W(V=>((wt(V,1)*2-1)*1.3-X(V)*.9)*ge()*P),y:W(V=>w*(.35+wt(V,2))*ge()*1.1*P),rotation:W(V=>(wt(V,3)<.5?-1:1)*(40+wt(V,4)*120)),scale:W(V=>.35+wt(V,5)*.9),transformOrigin:"50% 50%"},{ease:I,x:0,y:0,rotation:0,scale:1}),Q({opacity:0},{ease:V=>vr(0,.4,ae(V)),opacity:1})):n==="blur"?Q({willChange:"opacity, transform, filter",opacity:0,y:()=>w*ge()*.3*P,scale:1.45,filter:()=>`blur(${(ge()*.2).toFixed(2)}px)`,transformOrigin:"50% 50%"},{ease:I,opacity:1,y:0,scale:1,filter:"blur(0px)"}):n==="wave"?(Q({yPercent:120*P*w,scaleY:T,scaleX:re,transformOrigin:w>0?"50% 100%":"50% 0%"},{ease:ye,yPercent:0,scaleY:1,scaleX:1}),Q({rotation:0},{ease:de,rotation:-16*w}),Q({opacity:0},{ease:V=>Mr(ae(V)*2.5),opacity:1})):Q({opacity:0,yPercent:120*P*w,scaleY:T,scaleX:re,transformOrigin:w>0?"50% 0%":"50% 100%"},{ease:I,opacity:1,yPercent:0,scaleY:1,scaleX:1}),G&&Q({"--scroll-float-mix":1},{ease:V=>vr(.5,1,ae(V)),"--scroll-float-mix":0})}),()=>Se.revert()},[Z,e,ue,n,f,x,m,G,R,I,k,O,$,M,T,_]),d.jsxs("h2",{ref:ve,className:`scroll-float ${n==="float"?"":"scroll-float--open"} ${s}`,children:[ue!==null&&d.jsx("span",{className:"scroll-float-sr",children:ue}),d.jsx("span",{ref:pe,className:`scroll-float-text ${r}`,style:ue===null?me:void 0,"aria-hidden":ue!==null?!0:void 0,children:te??t})]})};function kn({course:t,branchCount:e=4,className:s=""}){const r=encodeURIComponent(`Hello Infodesk Computer Education, I am interested in the ${t.title} (${t.duration}) course. Could you share batch timings, fee details, and book a free demo session?`);return d.jsxs("div",{className:`bg-surface border border-line/80 rounded-panel p-6 sm:p-7 shadow-card space-y-6 ${s}`,children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-xs font-bold text-muted",children:"Course overview"}),d.jsx("p",{className:"text-xl font-bold text-deep mt-1",children:t.title})]}),d.jsxs("div",{className:"space-y-3 py-3 border-y border-line/60 text-sm",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-muted",children:"Duration"}),d.jsx("span",{className:"font-semibold text-deep",children:t.duration})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-muted",children:"Format"}),d.jsx("span",{className:"font-semibold text-deep",children:"Small batches, in-person"})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-muted",children:"Locations"}),d.jsxs("span",{className:"font-semibold text-deep",children:[e," Mumbai branches"]})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-muted",children:"Placement Support"}),d.jsx("span",{className:"font-semibold text-emerald-600",children:"100% job assistance"})]})]}),d.jsxs("div",{className:"space-y-3",children:[d.jsx(kr,{to:"/contact",size:"md",variant:"primary",className:"w-full",children:"Book a free demo"}),d.jsx(kr,{href:`https://wa.me/919769445334?text=${r}`,size:"md",variant:"ghost",className:"w-full",icon:d.jsx(io,{size:18,className:"text-[#25D366]"}),children:"Chat on WhatsApp"}),d.jsxs("a",{href:"/assets/Infodesk_Computer_Education.pdf",target:"_blank",rel:"noopener noreferrer",className:"w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold text-muted hover:text-deep hover:bg-soft/40 transition-colors border border-line/50",children:[d.jsx(lo,{size:15}),d.jsx("span",{children:"Download official brochure (PDF)"})]})]}),d.jsxs("div",{className:"pt-2 border-t border-line/40 text-xs text-muted space-y-2",children:[d.jsxs("p",{className:"flex items-center gap-2",children:[d.jsx(lr,{size:14,className:"text-emerald-500 shrink-0"}),d.jsx("span",{children:"Flexible morning, evening & weekend timings"})]}),d.jsxs("p",{className:"flex items-center gap-2",children:[d.jsx(lr,{size:14,className:"text-emerald-500 shrink-0"}),d.jsx("span",{children:"Extra practice lab hours with mentor guidance"})]}),d.jsxs("p",{className:"flex items-center gap-2",children:[d.jsx(lr,{size:14,className:"text-emerald-500 shrink-0"}),d.jsx("span",{children:"Personalized 1-on-1 doubt clearing sessions"})]})]})]})}const sn=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,an=`#version 300 es
precision highp float;
out vec4 outColor;
uniform vec2 uResolution;
uniform float uDpr;
uniform float uScale;
uniform float uTime;
uniform float uBeamX;
uniform vec4 uSurface;
uniform float uRadius;
uniform vec3 uIntro;
uniform vec4 uPour;
uniform vec2 uRun;
uniform vec4 uLens;
uniform sampler2D uReveal;
uniform vec4 uRevealMap;
uniform vec2 uRevealInfo;
uniform float uAtmosphere;
uniform vec4 uAmount;
uniform vec4 uShape;
uniform vec4 uExtra;
uniform float uTheme;
uniform vec3 uTint[16];

#define BEAM uTint[0]
#define LEFT uTint[1]
#define RIGHT uTint[2]
#define CYAN uTint[3]
#define PINK uTint[4]
#define LILAC uTint[5]
#define SKY uTint[6]
#define PURPLE uTint[7]
#define DEEP uTint[8]
#define MIST uTint[9]
#define NAVY uTint[10]
#define WARM uTint[11]
#define EMBER uTint[12]
#define WHITE uTint[13]
#define HAZE uTint[14]
#define LAVENDER uTint[15]

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = m * p;
    a *= 0.5;
  }
  return v;
}

float sq(float x) {
  return x * x;
}

float roundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

vec3 spill(float e, float fall, float strength, float front, float t, out vec3 glow) {
  glow = vec3(0.0);
  if (strength < 0.0005) return vec3(0.0);
  float f = max(fall, 0.0);
  float d = max(e, 0.0);
  float u = d / (6.0 + 0.28 * f);
  float start = smoothstep(-6.0, 12.0, fall);
  float fade = exp(-sq(max(f - 125.0, 0.0) / 40.0));
  float streak = 0.88 + 0.24 * noise(vec2(u * 6.0, f / 22.0 - t * 1.7));
  float bright = pow(strength, 1.5);
  float soft = sqrt(strength);
  float warmth = smoothstep(90.0, 130.0, f);
  vec3 coreK = mix(WHITE, WARM, warmth * exp(-d / 9.0));
  float core = mix(9.0, 2.6, warmth) * exp(-sq(d / (3.5 + 0.04 * f))) * exp(-sq(max(f - 130.0, 0.0) / 38.0));
  float wall = 24.0 * exp(-sq(d / 1.1)) * exp(-sq(max(f - 100.0, 0.0) / 30.0));
  float bandCenter = 0.7 - 0.3 * smoothstep(30.0, 110.0, f);
  float offset = u - bandCenter;
  float decay = (1.05 - bandCenter) / 1.31;
  float profile = offset < 0.0 ? exp(-sq(offset / 0.3)) : exp(-offset / decay);
  profile *= 1.0 - smoothstep(1.0, 1.4, u);
  vec3 bandA = mix(CYAN, PINK, smoothstep(50.0, 75.0, f));
  bandA = mix(bandA, LILAC, smoothstep(100.0, 125.0, f));
  vec3 bandB = mix(SKY, PURPLE, smoothstep(50.0, 75.0, f));
  vec3 fanK = mix(bandA, bandB, smoothstep(0.06, 0.18, offset));
  fanK = mix(fanK, DEEP, smoothstep(0.22, 0.42, offset));
  vec3 thread = WHITE * wall * bright + coreK * core * streak * bright;
  glow += fanK * 4.5 * profile * fade * streak * bright;
  glow += MIST * 0.7 * exp(-max(u - 1.0, 0.0) / 0.9) * smoothstep(0.7, 1.2, u) * fade * soft;
  glow += EMBER * 0.35 * exp(-sq((f - 165.0) / 22.0)) * exp(-d / 25.0) * bright;
  float lag = u * (6.0 + 0.28 * f) * 0.35;
  float reveal = 1.0 - smoothstep(front - 70.0, front + 8.0, f + lag);
  glow *= start * reveal;
  return thread * start * reveal;
}

vec3 easeLight(vec3 light, float amount) {
  return -log(max(1.0 - amount * (1.0 - exp(-light)), vec3(0.0001)));
}

void main() {
  vec2 frag = vec2(gl_FragCoord.x, uResolution.y * uDpr - gl_FragCoord.y) / uDpr;
  vec2 p = frag / uScale;
  float t = uTime;
  float bx = uBeamX / uScale;
  float sl = uSurface.x / uScale;
  float sy = uSurface.y / uScale;
  float sr = uSurface.z / uScale;
  float sb = uSurface.w / uScale;
  float radius = uRadius / uScale;
  float dx = p.x - bx;
  float adx = abs(dx);
  float h = sy - p.y;
  float hp = max(h, 0.0);
  float above = smoothstep(-0.5, 0.5, h);
  float side = smoothstep(-24.0, 24.0, dx);
  vec3 sideK = mix(mix(LAVENDER, LEFT, smoothstep(40.0, 140.0, adx)), RIGHT, side);
  float beamWidth = uShape.x;
  float flare = uShape.y;
  float spread = 250.0 * uShape.z;
  float reachL = max(bx - sl, 1.0);
  float reachR = max(sr - bx, 1.0);
  float reach = dx < 0.0 ? reachL : reachR;
  float layerLen = clamp(0.29 * reach, 20.0, 100.0) * sqrt(uShape.z);
  float run = uRun.x;
  float runMask = 1.0 - smoothstep(run - 34.0, run + 6.0, adx);
  float bead = exp(-sq((adx - run + 16.0) / (18.0 + 0.04 * run))) * uRun.y;
  float flowMask = (1.0 - smoothstep(0.75 * spread, 1.1 * spread, adx)) * runMask;
  float edgeMask = (1.0 - smoothstep(0.8 * spread, 1.25 * spread, adx)) * runMask;
  float bloom = uIntro.y;
  vec2 center = vec2((sl + sr) * 0.5, (sy + sb) * 0.5);
  vec2 halfSize = vec2((sr - sl) * 0.5, (sb - sy) * 0.5);
  float sd = roundBox(p - center, halfSize, radius);
  float outline = max(sd, 0.0);
  float below = max(p.y - sy - radius, 0.0);
  float hug = smoothstep(-0.5, 0.5, sd) * exp(-sq(below / 14.0));
  float hugWide = smoothstep(-0.5, 0.5, sd) * exp(-sq(below / 40.0));

  vec3 col = vec3(0.0);

  float breathe = 1.0 + uExtra.x * (0.12 * sin(t * 1.5708) + 0.08 * (noise(vec2(t * 0.5, 3.0)) - 0.5));

  float front = uIntro.x / uScale;
  float drop = smoothstep(front + 10.0, front - 110.0, p.y);
  float falling = 1.0 - smoothstep(sy - 24.0, sy, front);
  float top = mix(0.3, 1.0, smoothstep(0.0, 0.3 * sy, p.y));
  float beamCore = 24.0 * exp(-adx / (2.0 * beamWidth));
  float beamHalo = 1.3 * exp(-adx / (6.0 * beamWidth)) + 0.3 * exp(-adx / (22.0 * beamWidth));
  vec3 haloK = mix(BEAM, sideK, exp(-hp / 80.0));
  col += (BEAM * beamCore + haloK * beamHalo) * top * above * drop;
  float head = exp(-sq((p.y - front) / 24.0)) * falling;
  col += mix(WHITE, BEAM, 0.35) * head * (7.0 * exp(-adx / (2.6 * beamWidth)) + 1.0 * exp(-adx / (14.0 * beamWidth)));

  float psi = adx * (outline + 1.0);
  float rise = max(hp - 17.9 * flare, 0.0);
  float skirtAmp = 16.6 * (exp(-sq(rise / (11.8 * flare))) + 0.3 * exp(-rise / (60.0 * flare)));
  float skirtSpread = mix(134.0, 155.0, side) * breathe * flare * flare * mix(0.35, 1.0, min(bloom, 1.0)) * max(bloom, 1.0);
  float skirt = skirtAmp * exp(-psi / skirtSpread) * exp(-sq(adx / (max(layerLen, 60.0 * sqrt(uShape.z)) * 1.48))) * hug;
  col += sideK * skirt * flowMask * min(bloom, 1.0);

  float layer = 12.0 * exp(-adx / layerLen) * exp(-outline / (0.19 * layerLen)) * (1.0 + 0.4 * bead);
  col += sideK * layer * hug * flowMask * min(bloom, 1.0);
  float washMask = smoothstep(sl - 60.0, sl + 6.0, p.x) * (1.0 - smoothstep(sr - 6.0, sr + 45.0, p.x));
  float wash = 1.4 * exp(-adx / 100.0) * exp(-outline / 30.0);
  col += mix(BEAM, sideK, 0.25) * wash * hugWide * washMask * flowMask * min(bloom, 1.0);
  float highWash = 0.7 * exp(-adx / 140.0) * exp(-outline / 60.0);
  col += mix(BEAM, NAVY, 0.5) * highWash * hugWide * washMask * runMask * min(bloom, 1.0);

  float sideSign = dx < 0.0 ? 0.0 : 1.0;
  float along = 0.5 * log((hp + 1.0) / (adx + 1.0));
  float lineScale = 6.0;
  float lp = log(max(psi, 1.0) / (120.0 * flare * flare)) * lineScale;
  float lineIndex = floor(lp) + sideSign * 97.0;
  float wobble = 0.22 * (noise(vec2(lineIndex * 3.7, t * 0.4 + along)) - 0.5);
  float lf = fract(lp + wobble) - 0.5;
  float gradient = lineScale * length(vec2(hp + 1.0, adx)) / max(psi, 1.0) / uScale;
  float halfWidth = max(0.35 * gradient, 0.0001);
  float drawWidth = max(halfWidth, 0.6 * gradient);
  float lineShape = exp(-lf * lf / (drawWidth * drawWidth)) * (halfWidth / drawWidth);
  float lineOn = step(0.3, hash(vec2(lineIndex, 1.3)));
  float lineFlow = smoothstep(0.25, 0.85, noise(vec2(lineIndex * 5.3 + 2.0, along * 3.0 + t * 1.1)));
  float flareArea = 120.0 * flare * flare;
  float lineEnvelope = smoothstep(0.85 * flareArea, 1.4 * flareArea, psi) * (1.0 - smoothstep(3.2 * flareArea, 7.5 * flareArea, psi));
  lineEnvelope *= exp(-adx / (layerLen * 1.5)) * hug * flowMask * (1.0 - smoothstep(35.0 * flare, 80.0 * flare, hp));
  float lineBright = mix(0.35, 1.0, hash(vec2(lineIndex, 4.0)));
  col += mix(sideK, WHITE, 0.6) * lineShape * lineOn * lineFlow * lineEnvelope * lineBright * 2.6 * uAmount.w * min(bloom, 1.0);

  float edgeGlow = 22.8 * exp(-sq(adx / (150.0 * uShape.z))) * edgeMask * (1.0 + 0.9 * bead);
  float onTop = 1.0 - smoothstep(sy + radius, sy + radius + 10.0, p.y);
  float edgeLine = (exp(-sq(max(sd, 0.0) / 0.9)) + 0.12 * exp(-max(sd, 0.0) / 3.0)) * edgeGlow * onTop;
  col += mix(sideK, WHITE, 0.6) * edgeLine * min(bloom, 1.0);

  float pour = uShape.w;
  float baseline = exp(-sq(130.0 / 150.0));
  float strengthR = exp(-sq(reachR / (150.0 * uShape.z))) * (1.0 - smoothstep(0.8 * spread, 1.25 * spread, reachR)) / baseline * pour;
  float strengthL = exp(-sq(reachL / (150.0 * uShape.z))) * (1.0 - smoothstep(0.8 * spread, 1.25 * spread, reachL)) / baseline * pour;
  float fallY = p.y - sy - 0.3 * radius;
  float rightHalf = smoothstep(center.x - 4.0, center.x + 4.0, p.x);
  float haloR = exp(-length(p - vec2(sr - 0.3 * radius, sy + 0.3 * radius)) / 40.0) * sqrt(strengthR);
  float haloL = exp(-length(p - vec2(sl + 0.3 * radius, sy + 0.3 * radius)) / 40.0) * sqrt(strengthL);
  vec3 glowR;
  vec3 glowL;
  col += spill(sd, fallY, strengthR, uPour.y, t, glowR) * rightHalf;
  col += spill(sd, fallY, strengthL, uPour.x, t, glowL) * (1.0 - rightHalf);
  col += easeLight(glowR * rightHalf + NAVY * 0.9 * haloR, uPour.w);
  col += easeLight(glowL * (1.0 - rightHalf) + NAVY * 0.9 * haloL, uPour.z);

  vec2 toLens = frag - uLens.xy;
  float lens = exp(-dot(toLens, toLens) / sq(uLens.z)) * uLens.w;
  col *= 1.0 + 0.35 * lens * hug;
  float fogAmount = uAmount.y * uAtmosphere;
  float near = exp(-adx / 150.0);
  float envelope = near * (0.3 + 0.4 * exp(-hp / 50.0) + 1.2 * exp(-p.y / 120.0));
  if (fogAmount > 0.001 && h > -2.0 && envelope * max(0.25, 6.0 * exp(-adx / 50.0)) > 0.002) {
    vec2 fq = vec2(dx / 1.7, h) / 85.0 + vec2(t * 0.012, -t * 0.03) + uExtra.zw;
    vec2 fw = vec2(fbm(fq * 1.3 + vec2(1.7, 9.2) + t * 0.03), fbm(fq * 1.3 + vec2(8.3, 2.8) - t * 0.025));
    float cloud = fbm(fq + 1.4 * fw);
    float density = smoothstep(0.5, 0.78, cloud);
    float lit = exp(-adx / 50.0);
    float fogMask = smoothstep(-2.0, 20.0, h);
    float reached = smoothstep(front + 80.0, front - 40.0, p.y);
    vec3 fog = (HAZE * 0.45 + BEAM * 6.0 * lit * reached) * density * envelope * fogMask;
    float surfaceLit = exp(-adx / (layerLen * 1.3)) * exp(-outline / 28.0) * hugWide * flowMask * washMask * min(bloom, 1.0);
    fog += sideK * 2.2 * surfaceLit * (smoothstep(0.38, 0.72, cloud) - 0.35) * fogMask;
    float smoke = smoothstep(0.3, 0.75, cloud);
    fog += BEAM * 0.35 * exp(-adx / (22.0 * beamWidth)) * (0.35 + 0.9 * smoke) * fogMask * top * drop;
    col += fog * fogAmount * (1.0 + 1.2 * lens) * mix(1.0, 0.45, uTheme);
  }

  if (uRevealInfo.y > 0.001 && uLens.w > 0.002) {
    vec2 toReveal = frag - uLens.xy;
    float reveal = exp(-dot(toReveal, toReveal) / sq(uRevealInfo.x)) * uLens.w;
    vec2 uv = frag * uRevealMap.xy + uRevealMap.zw;
    float onImage = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
    vec4 ui = texture(uReveal, uv);
    float ink = max(ui.r, max(ui.g, ui.b)) * onImage;
    float lit = clamp(col.b * 0.9, 0.0, 1.0) * (1.0 - smoothstep(0.9, 2.2, col.b));
    float clearance = smoothstep(60.0 * sqrt(beamWidth), 150.0 * sqrt(beamWidth), adx);
    col += mix(BEAM, WHITE, 0.4) * ink * reveal * lit * clearance * uRevealInfo.y * 2.2;
  }

  float haze = col.b;
  float dotGrid = 1.0 - smoothstep(0.16, 0.32, length(fract(frag / 3.0) - 0.5));
  col += BEAM * dotGrid * clamp(haze, 0.0, 1.5) * (1.0 - smoothstep(1.5, 4.0, haze)) * (0.18 + 0.3 * lens) * uExtra.y;
  if (lens > 0.002) {
    vec2 drift = frag - vec2(0.0, t * 14.0);
    vec2 sparkCell = floor(drift / 7.0);
    vec2 sparkPos = (sparkCell + 0.2 + 0.6 * vec2(hash(sparkCell + 5.1), hash(sparkCell + 2.3))) * 7.0;
    float sparkDist = length(drift - sparkPos);
    float sparkOn = step(0.8, hash(sparkCell + 8.8));
    float sparkTwinkle = 0.5 + 0.5 * sin(t * 5.0 + hash(sparkCell + 3.7) * 6.283);
    col += WHITE * exp(-sparkDist * sparkDist / 0.35) * sparkOn * sparkTwinkle * lens * clamp(haze * 1.5, 0.0, 1.0) * 1.6 * uAmount.z;
  }

  float dustAmount = uAmount.z;
  if (dustAmount > 0.001) {
    float dustLp = log(max(psi, 1.0) / (120.0 * flare * flare)) * 2.2;
    vec2 flowCell = vec2(dustLp / 1.1, (along + t * 0.22) / 0.06);
    vec2 cellId = floor(flowCell) + vec2(sideSign * 131.0, 0.0);
    vec2 cellJitter = vec2(hash(cellId + 1.7), hash(cellId + 8.3));
    vec2 particleFlow = (floor(flowCell) + 0.1 + cellJitter * 0.8) * vec2(1.1, 0.06);
    float particlePsi = 120.0 * flare * flare * exp(particleFlow.x / 2.2);
    float particleAlong = particleFlow.y - t * 0.22;
    float particleX = sqrt(particlePsi * exp(-2.0 * particleAlong)) - 1.0;
    float particleH = sqrt(particlePsi * exp(2.0 * particleAlong)) - 1.0;
    float particleDist = length(vec2(adx - particleX, hp - particleH)) * uScale;
    float particleOn = step(0.62, hash(cellId + 3.1));
    float particleTwinkle = 0.5 + 0.5 * sin(t * 5.0 + hash(cellId + 9.2) * 6.283);
    float dustZone = exp(-sq(log(max(psi, 1.0) / (200.0 * flare * flare)) / 0.55)) * hug * flowMask * smoothstep(0.0, 6.0, outline);
    col += WHITE * exp(-particleDist * particleDist / 0.3) * particleOn * particleTwinkle * dustZone * 3.0 * dustAmount * min(bloom, 1.0);

    vec2 glitterCell = vec2(dx / 3.0, (p.y - t * 26.0) / 9.0);
    vec2 glitterId = floor(glitterCell);
    vec2 glitterJitter = vec2(hash(glitterId + 4.4), hash(glitterId + 2.9));
    vec2 glitterPos = (glitterId + 0.15 + glitterJitter * 0.7) * vec2(3.0, 9.0);
    float glitterDist = length(vec2(dx, p.y - t * 26.0) - glitterPos) * uScale;
    float glitterOn = step(0.7, hash(glitterId + 6.6));
    float glitterTwinkle = 0.5 + 0.5 * sin(t * 6.0 + hash(glitterId + 1.1) * 6.283);
    float glitterZone = exp(-adx / (5.0 * beamWidth)) * smoothstep(1.5, 4.0, adx / beamWidth) * above * smoothstep(25.0, 70.0, hp) * top * drop;
    col += WHITE * exp(-glitterDist * glitterDist / 0.25) * glitterOn * glitterTwinkle * glitterZone * 2.2 * dustAmount * uAtmosphere;
  }

  col *= uAmount.x * (1.0 + uIntro.z * 0.9 * exp(-length(vec2(dx, h * 1.6)) / 70.0));
  col *= smoothstep(-0.75, 0.25, sd * uScale);

  vec3 emit = 1.0 - exp(-col * mix(1.0, 0.6, uTheme));
  float peak = max(emit.r, max(emit.g, emit.b));
  if (uTheme > 0.5) {
    float low = min(emit.r, min(emit.g, emit.b));
    float chroma = peak - low;
    vec3 hue = (emit - low) / max(chroma, 0.0001);
    float alpha = clamp(pow(chroma, 1.35) * 1.3, 0.0, 1.0) * 0.9;
    outColor = vec4((hue * 0.82 + 0.06) * alpha, alpha);
  } else {
    outColor = vec4(emit, peak);
  }
}`,Wr=[[0,1],[-11.5,.77],[9.5,.95],[-53.5,.79],[39.5,.77],[16,.81],[-16.3,.92],[13.3,.96],[3,1.01],[1,.68],[1,1.15],[142.5,.51],[113.6,.28],[-7.5,.13],[-2.7,.32],[7.5,.81]],qr=.78,Yr=2048,gr=1.25,rr=5,Je=(t,e,s)=>Math.min(s,Math.max(e,t)),ln=t=>1-Math.pow(1-Je(t,0,1),3),cn=t=>{const r=8*Math.sqrt(.6155999999999999);return 1-Math.exp(-.62*8*t)*(Math.cos(r*t)+.62*8/r*Math.sin(r*t))},un=([t,e,s])=>{const r=Math.max(t,e,s),n=Math.min(t,e,s),f=r-n;let x=0;return f>0&&(r===t?x=(e-s)/f%6:r===e?x=(s-t)/f+2:x=(t-e)/f+4),[(x*60+360)%360,r>0?f/r:0]},fn=(t,e)=>{const s=(t%360+360)%360/60,r=e,n=r*(1-Math.abs(s%2-1)),f=1-r,[x,m,y]=s<1?[r,n,0]:s<2?[n,r,0]:s<3?[0,r,n]:s<4?[0,n,r]:s<5?[n,0,r]:[r,0,n];return[x+f,m+f,y+f]},Gr=t=>{const[e,s]=un(t),r=s/qr,n=new Float32Array(Wr.length*3);return Wr.forEach(([f,x],m)=>{n.set(fn(e+f,Je(qr*x*r,0,1)),m*3)}),n},Vr=(t,e,s)=>{const r=t.createShader(e);return r?(t.shaderSource(r,s),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(t.deleteShader(r),null)):null},dn=(t,e,s)=>{const r=Vr(t,t.VERTEX_SHADER,e),n=Vr(t,t.FRAGMENT_SHADER,s),f=t.createProgram();return!r||!n||!f?null:(t.attachShader(f,r),t.attachShader(f,n),t.linkProgram(f),t.deleteShader(r),t.deleteShader(n),t.getProgramParameter(f,t.LINK_STATUS)?f:(t.deleteProgram(f),null))},hn=(t,e,s)=>{const r={};for(const n of s)r[n]=t.getUniformLocation(e,n);return r},pn=({surfaceRef:t,beamPosition:e=.6,surfaceLevel:s=1,color:r="#3847ff",intensity:n=1.8,beamWidth:f=1.5,flare:x=1.5,spread:m=1.5,spill:y=1,fog:R=.2,dust:I=1.6,streaks:k=1.5,dots:O=1,pulse:$=1.5,speed:M=1.5,seed:T=3,mouseInteraction:_=!0,revealImage:ve,revealRadius:pe=220,revealOpacity:ue=.6,intro:G=!0,theme:me="dark",paused:te=!1,dpr:Z,...fe})=>{const j=v.useRef(null),ne=v.useRef(null),u=v.useRef(null),B={surfaceRef:t,beamPosition:Je(e,0,1),surfaceLevel:Je(s,0,1),color:String(r),intensity:Math.max(0,n),beamWidth:Je(f,.2,5),flare:Je(x,.2,4),spread:Je(m,.1,4),spill:Math.max(0,y),fog:Math.max(0,R),dust:Math.max(0,I),streaks:Math.max(0,k),dots:Math.max(0,O),pulse:Math.max(0,$),speed:M,seed:T,mouseInteraction:_,revealImage:ve,revealRadius:Math.max(1,pe),revealOpacity:Je(ue,0,1),intro:G,theme:me,paused:te,dpr:Z},H=v.useRef(B);H.current=B,v.useEffect(()=>{var je;const z=j.current,X=ne.current,l=X==null?void 0:X.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!z||!X||!l)return;const w=dn(l,sn,an);if(!w)return;const P=hn(l,w,["uResolution","uDpr","uScale","uTime","uBeamX","uSurface","uRadius","uIntro","uPour","uRun","uLens","uReveal","uRevealMap","uRevealInfo","uAtmosphere","uAmount","uShape","uExtra","uTheme","uTint"]),re=l.createVertexArray(),se=l.createBuffer();l.bindVertexArray(re),l.bindBuffer(l.ARRAY_BUFFER,se),l.bufferData(l.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),l.STATIC_DRAW);const ae=l.getAttribLocation(w,"aPosition");l.enableVertexAttribArray(ae),l.vertexAttribPointer(ae,2,l.FLOAT,!1,0,0),l.bindVertexArray(null);const ge=l.createTexture();l.bindTexture(l.TEXTURE_2D,ge),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,1,1,0,l.RGBA,l.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE);const ye=document.createElement("canvas");ye.width=1,ye.height=1;const de=ye.getContext("2d",{willReadFrequently:!0}),Se=((je=window.matchMedia)==null?void 0:je.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,A={time:0,introTime:H.current.intro&&!Se?0:rr,width:1,height:1,ratio:1,colorKey:"",tints:Gr([.22,.28,1]),observed:null,pointer:{x:0,y:0,inside:!1},lens:{x:0,y:0,vx:0,vy:0,strength:0,placed:!1},reveal:{src:"",ready:!1,width:1,height:1,image:null}};let Q=0,V=0,Fe=!0,Re=!0;const Ce=F=>{if(!de)return[.22,.28,1];de.clearRect(0,0,1,1),de.fillStyle="#3847ff",de.fillStyle=F,de.fillRect(0,0,1,1);const[N,K,oe]=de.getImageData(0,0,1,1).data;return[N/255,K/255,oe/255]},D=F=>{F.color!==A.colorKey&&(A.colorKey=F.color,A.tints=Gr(Ce(F.color)))},ie=F=>{const N=F.revealImage?String(F.revealImage):"",K=A.reveal;if(N===K.src||(K.src=N,K.ready=!1,K.image&&(K.image.onload=null),!N))return;const oe=new Image;oe.crossOrigin="anonymous",oe.decoding="async",oe.onload=()=>{var J,o;if(!Re||K.src!==N)return;const be=oe.naturalWidth||oe.width||1,Te=oe.naturalHeight||oe.height||1,p=Math.min(1,2048/Math.max(be,Te)),U=document.createElement("canvas");U.width=Math.max(1,Math.round(be*p)),U.height=Math.max(1,Math.round(Te*p)),(J=U.getContext("2d"))==null||J.drawImage(oe,0,0,U.width,U.height),l.bindTexture(l.TEXTURE_2D,ge),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,U),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),K.width=U.width,K.height=U.height,K.ready=!0,(o=u.current)==null||o.call(u)},oe.src=N,K.image=oe},he=(F,N,K)=>{var be;const oe=((be=F.surfaceRef)==null?void 0:be.current)??null;if(oe!==A.observed&&(A.observed&&Ne.unobserve(A.observed),oe&&Ne.observe(oe),A.observed=oe),oe){const Te=z.getBoundingClientRect(),p=oe.getBoundingClientRect();if(p.width>0){const U=getComputedStyle(oe),J=Math.max(parseFloat(U.borderTopLeftRadius)||0,parseFloat(U.borderTopRightRadius)||0);return{left:p.left-Te.left,top:p.top-Te.top,right:p.right-Te.left,bottom:p.bottom-Te.top,radius:Math.min(J,p.width/2,p.height/2),real:!0}}}return{left:-N*2,top:F.surfaceLevel*K,right:N*3,bottom:K*3,radius:0,real:!1}},Le=()=>{const F=Math.max(1,z.clientWidth),N=Math.max(1,z.clientHeight),K=H.current,oe=Math.min(K.dpr||window.devicePixelRatio||1,2),be=Math.max(F,N)*oe,Te=be>Yr?oe*Yr/be:oe,p=Math.max(1,Math.round(F*Te)),U=Math.max(1,Math.round(N*Te));(X.width!==p||X.height!==U)&&(X.width=p,X.height=U),A.width=F,A.height=N,A.ratio=X.width/F,b()},b=()=>{const F=H.current;D(F);const{width:N,height:K}=A,oe=Math.max(.2,Math.min(N/585,K/507));let be=he(F,N,K),Te=F.beamPosition*N;if(be.real){const vt=be.radius+6;Te>=be.left&&Te<=be.right?Te=Je(Te,be.left+vt,be.right-vt):be={left:-N*2,top:K,right:N*3,bottom:K*3,radius:0,real:!1}}const p=-.15*K,U=be.top-p+.3*K,J=A.introTime,o=J>=rr,Ue=o?be.top+.3*K:p+U*Math.pow(Je(J/gr,0,1),1.3),pt=gr*Math.pow(Math.max(0,be.top-p)/U,1/1.3),Ee=J-pt,ze=o?1:Ee<=0?0:cn(Ee),Xt=o||Ee<=0?0:Math.exp(-Ee/.35)*(1-Math.exp(-Ee/.05)),mt=F.spread*250*1.3+80,It=o?1e5:Ee<=0?-40:mt*(1-Math.exp(-1.15*Ee)),zt=o||Ee<=0?0:Math.exp(-1.15*Ee)*(1-Math.exp(-Ee/.08)),Pt=vt=>{if(o)return[1e3,1];if(Ee<=0)return[-vt,0];const $t=Math.min(vt,mt*.97),sr=-Math.log(1-$t/mt)/1.15,ct=Ee-sr,ut=Je((ct+.15)/.8,0,1),Ft=ut*ut*ut*(ut*(ut*6-15)+10);return ct<=0?[It-$t,Ft]:[1.15*(mt-$t)*ct+260*ct*ct,Ft]},[Ut,or]=Pt((Te-be.left)/oe),[Mt,nr]=Pt((be.right-Te)/oe),Ht=o?1:Ee<=0?.3*ln(J/gr):.3+.7*(1-Math.exp(-1.3*Ee)),Wt=Number(F.seed)||0;l.viewport(0,0,X.width,X.height),l.clearColor(0,0,0,0),l.clear(l.COLOR_BUFFER_BIT),l.useProgram(w),l.uniform2f(P.uResolution,N,K),l.uniform1f(P.uDpr,A.ratio),l.uniform1f(P.uScale,oe),l.uniform1f(P.uTime,A.time),l.uniform1f(P.uBeamX,Te),l.uniform4f(P.uSurface,be.left,be.top,be.right,be.bottom),l.uniform1f(P.uRadius,be.radius),l.uniform3f(P.uIntro,Ue,ze,Xt),l.uniform4f(P.uPour,Ut,Mt,or,nr),l.uniform2f(P.uRun,It,zt),l.uniform4f(P.uLens,A.lens.x,A.lens.y,95*oe,A.lens.strength),ie(F);const{reveal:lt}=A,Oe=Math.max(N/lt.width,K/lt.height),Et=lt.width*Oe,xt=lt.height*Oe;l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,ge),l.uniform1i(P.uReveal,0),l.uniform4f(P.uRevealMap,1/Et,1/xt,(Et-N)/2/Et,(xt-K)/2/xt),l.uniform2f(P.uRevealInfo,F.revealRadius,lt.ready?F.revealOpacity:0),l.uniform1f(P.uAtmosphere,Ht),l.uniform4f(P.uAmount,F.intensity,F.fog,F.dust,F.streaks),l.uniform4f(P.uShape,F.beamWidth,F.flare,F.spread,F.spill),l.uniform4f(P.uExtra,F.pulse,F.dots,34.34+Wt*7.31,11.58+Wt*3.17),l.uniform1f(P.uTheme,F.theme==="light"?1:0),l.uniform3fv(P.uTint,A.tints),l.bindVertexArray(re),l.drawArrays(l.TRIANGLES,0,3),l.bindVertexArray(null)},c=F=>{if(Q=0,!Re||!Fe||document.hidden)return;const N=H.current,K=V?Math.min(.05,(F-V)/1e3):1/60;V=F;const oe=!N.paused&&!Se;oe&&(A.time+=K*N.speed);const be=A.introTime<rr;be&&(A.introTime=Math.min(rr,A.introTime+K));const{pointer:Te,lens:p}=A,U=N.mouseInteraction&&Te.inside&&!Se;U&&!p.placed&&(p.x=Te.x,p.y=Te.y,p.vx=0,p.vy=0,p.placed=!0);const J=120*(Te.x-p.x)-19*p.vx,o=120*(Te.y-p.y)-19*p.vy;p.vx+=J*K,p.vy+=o*K,p.x+=p.vx*K,p.y+=p.vy*K;const Ue=U?1:0;p.strength+=(Ue-p.strength)*(1-Math.exp(-K/(Ue>p.strength?.3:.55))),p.strength<.001&&!U&&(p.placed=!1),b();const pt=Math.abs(A.lens.strength-(N.mouseInteraction&&A.pointer.inside?1:0))>.002||Math.hypot(A.lens.vx,A.lens.vy)>.5;oe||be||pt?Q=requestAnimationFrame(c):V=0},g=()=>{!Q&&Re&&Fe&&!document.hidden&&(Q=requestAnimationFrame(c))},S=F=>{const N=z.getBoundingClientRect(),K=F.clientX-N.left,oe=F.clientY-N.top;A.pointer.x=K,A.pointer.y=oe,A.pointer.inside=K>=0&&oe>=0&&K<=N.width&&oe<=N.height,g()},C=()=>{A.pointer.inside=!1,g()},q=()=>{V=0,g()},Ne=new ResizeObserver(Le);Ne.observe(z);const _e=new IntersectionObserver(F=>{Fe=F.some(N=>N.isIntersecting),Fe&&(V=0,g())});return _e.observe(z),window.addEventListener("pointermove",S,{passive:!0}),document.documentElement.addEventListener("pointerleave",C),document.addEventListener("visibilitychange",q),Le(),g(),u.current=()=>{Q||b(),g()},()=>{Re=!1,cancelAnimationFrame(Q),u.current=null,Ne.disconnect(),_e.disconnect(),window.removeEventListener("pointermove",S),document.documentElement.removeEventListener("pointerleave",C),document.removeEventListener("visibilitychange",q),l.deleteTexture(ge),l.deleteBuffer(se),l.deleteVertexArray(re),l.deleteProgram(w)}},[]),v.useEffect(()=>{var z;(z=u.current)==null||z.call(u)});const{className:ke="",...W}=fe;return d.jsx("div",{ref:j,className:`laser-flow-container${ke?` ${ke}`:""}`,...W,children:d.jsx("canvas",{ref:ne,className:"laser-flow-canvas","aria-hidden":"true"})})};function In({title:t="Try a free demo class.",description:e="Experience our hands-on data labs, mentor guidance, and production curriculums in-person at any of our 4 Mumbai centers.",buttonText:s="Book your free demo session",className:r="",id:n="enquire"}){const f=ro.digitalMarketingLaserFlow&&!oo&&!no&&!so;return d.jsx("section",{id:n,className:`max-w-content mx-auto px-6 py-12 ${r}`,children:d.jsxs("div",{className:"relative rounded-[32px] bg-gradient-to-br from-[#13266f] via-[#0b1a52] to-[#071138] text-white p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10",children:[f&&d.jsx(co,{isCanvasOrWebGL:!0,fallback:d.jsx("div",{className:"absolute inset-0 bg-[#13266f]/40 pointer-events-none","aria-hidden":"true"}),className:"absolute inset-0 pointer-events-none",children:d.jsx(pn,{color:"#4a6df0",intensity:.7,speed:.4,mouseInteraction:!1,className:"absolute inset-0 w-full h-full pointer-events-none opacity-40"})}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#0b1a52]/90 via-[#13266f]/70 to-[#071138]/90 pointer-events-none"}),d.jsxs("div",{className:"space-y-3 max-w-xl text-center md:text-left relative z-10",children:[d.jsx("h3",{className:"text-2xl sm:text-3xl font-bold tracking-tight text-white font-heading",children:t}),d.jsx("p",{className:"text-[#c3cbf2] text-sm sm:text-base leading-relaxed",children:e})]}),d.jsx("div",{className:"shrink-0 relative z-10",children:d.jsx(uo,{as:eo,to:"/contact",backgroundColor:"#f6f5f1",textColor:"#13266f",color:"#4a6df0",trailColor:"#a5d8ff",radius:999,duration:5,glow:.6,className:"inline-flex items-center justify-center font-bold text-sm sm:text-base px-8 py-3.5 min-h-[48px] rounded-full shadow-lg hover:shadow-xl transition-all",children:s})})]})})}export{Mn as A,An as C,Sn as F,Tn as G,Ln as S,Rn as T,En as a,kn as b,In as c};
