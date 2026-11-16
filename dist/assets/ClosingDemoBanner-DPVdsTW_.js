import{j as d}from"./vendor-motion-iuFgYMdS.js";import{r as v,L as Qo}from"./vendor-react-6YCBRoeX.js";import{d as Jo,m as Qt,B as ko,e as er,p as tr,i as or,j as rr}from"./index-BdEaDnWm.js";import{g as Dt}from"./vendor-gsap-CnPRBKv6.js";import{a as nr}from"./ScrollReveal-N1Bb1aPF.js";import{c as ar,F as sr,d as io}from"./vendor-icons-CyNvKEFQ.js";import{L as ir,S as lr}from"./SpotlightCard-BQqjXSZb.js";const yo=5,Go=3,cr=2.4,ur=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,fr=`#version 300 es
precision highp float;
precision highp int;
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uStops[${yo}];
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
  for (int k = 0; k < ${Go}; k++) {
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
}`,jt=(t,e,s)=>Math.min(s,Math.max(e,t)),dr=t=>{const[e,s,r]=t.map(y=>y<=.04045?y/12.92:Math.pow((y+.055)/1.055,2.4)),n=Math.cbrt(.4122214708*e+.5363325363*s+.0514459929*r),c=Math.cbrt(.2119034982*e+.6806995451*s+.1073969566*r),x=Math.cbrt(.0883024619*e+.2817188376*s+.6299787005*r),m=[.2104542553*n+.793617785*c-.0040720468*x,1.9779984951*n-2.428592205*c+.4505937099*x,.0259040371*n+.7827717662*c-.808675766*x];return[m[0],Math.hypot(m[1],m[2]),Math.atan2(m[2],m[1])]},hr=t=>{const e=t.findIndex(n=>n[1]>.02);let r=e===-1?0:t[e][2];return t.map(n=>{let c=n[1]>.02?n[2]:r;for(;c-r>Math.PI;)c-=Math.PI*2;for(;c-r<-Math.PI;)c+=Math.PI*2;return r=c,[n[0],n[1],c]})},Io=(t,e,s)=>{const r=t.createShader(e);return r?(t.shaderSource(r,s),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(t.deleteShader(r),null)):null},pr=t=>{const e=Io(t,t.VERTEX_SHADER,ur),s=Io(t,t.FRAGMENT_SHADER,fr),r=t.createProgram();if(!e||!s||!r)return null;if(t.attachShader(r,e),t.attachShader(r,s),t.bindAttribLocation(r,0,"aPosition"),t.linkProgram(r),t.deleteShader(e),t.deleteShader(s),!t.getProgramParameter(r,t.LINK_STATUS))return t.deleteProgram(r),null;const n={},c=t.getProgramParameter(r,t.ACTIVE_UNIFORMS);for(let x=0;x<c;x++){const m=t.getActiveUniform(r,x);m&&(n[m.name.replace("[0]","")]=t.getUniformLocation(r,m.name))}return{program:r,uniforms:n}},vn=({colorStops:t=["#5227FF","#7cff67","#5227FF"],amplitude:e=1,blend:s=.5,speed:r=1,time:n,height:c=.45,scale:x=1,glow:m=.6,brightness:y=1,layers:E=1,direction:S="top",mouseInteraction:A=!0,intro:C=!0,opacity:k=1,lightMode:M=!1,paused:T=!1,dpr:P,className:ve="",style:pe})=>{const ie=v.useRef(null),H=v.useRef(null),ge=v.useRef(null),ee=(Array.isArray(t)?t:[]).filter(Boolean).map(String).slice(0,yo),V={stops:ee.length>=2?ee:ee.length===1?[ee[0],ee[0]]:["#5227FF","#7cff67"],amplitude:Math.max(0,e),blend:jt(s,0,1),speed:r,time:n,height:jt(c,0,1),scale:Math.max(.1,x),glow:Math.max(0,m),brightness:Math.max(0,y),layers:jt(Math.round(E),1,Go),flip:S==="bottom"?1:0,mouseInteraction:A,intro:C,opacity:jt(k,0,1),lightMode:M,paused:T,dpr:P},ue=v.useRef(V);return ue.current=V,v.useEffect(()=>{var g;const _=ie.current,ne=H.current,l=ne==null?void 0:ne.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!_||!ne||!l)return;const B=pr(l);if(!B)return;const O=B.uniforms,Ie=l.createBuffer(),Ee=l.createVertexArray();l.bindVertexArray(Ee),l.bindBuffer(l.ARRAY_BUFFER,Ie),l.bufferData(l.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),l.STATIC_DRAW),l.enableVertexAttribArray(0),l.vertexAttribPointer(0,2,l.FLOAT,!1,0,0);const X=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),D=((g=window.matchMedia)==null?void 0:g.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,u=new Map,te=p=>{if(u.has(p))return u.get(p);let w=[1,1,1];if(X){X.clearRect(0,0,1,1),X.fillStyle="#ffffff",X.fillStyle=p,X.fillRect(0,0,1,1);const[U,K,Z]=X.getImageData(0,0,1,1).data;w=[U/255,K/255,Z/255]}return u.set(p,w),w},I=new Float32Array(yo*3),ae={width:1,height:1},le={x:0,y:0,inside:!1},se={clock:0,px:0,py:.5,reach:0,reveal:ue.current.intro&&!D?0:1};let be=0,Re=0,de=!0;const $e=()=>{const p=ue.current;hr(p.stops.map(U=>dr(te(U)))).forEach((U,K)=>I.set(U,K*3));const w=se.reveal;l.viewport(0,0,ne.width,ne.height),l.useProgram(B.program),l.bindVertexArray(Ee),l.uniform2f(O.uResolution,ne.width,ne.height),l.uniform1f(O.uTime,p.time!==void 0?p.time*p.speed*.1:se.clock),l.uniform3fv(O.uStops,I),l.uniform1i(O.uStopCount,p.stops.length),l.uniform1f(O.uAmplitude,p.amplitude),l.uniform1f(O.uBlend,p.blend),l.uniform1f(O.uHeight,p.height),l.uniform1f(O.uScale,p.scale),l.uniform1f(O.uGlow,p.glow),l.uniform1f(O.uBrightness,p.brightness),l.uniform1i(O.uLayers,p.layers),l.uniform1f(O.uFlip,p.flip),l.uniform3f(O.uPointer,se.px,se.py,se.reach),l.uniform1f(O.uReveal,1-Math.pow(1-w,3)),l.uniform1f(O.uOpacity,p.opacity),l.uniform1f(O.uLightMode,p.lightMode?1:0),l.drawArrays(l.TRIANGLES,0,3)},L=p=>{if(be=0,!de||document.hidden)return;const w=ue.current,U=Re?jt((p-Re)/1e3,5e-4,.05):1/60;if(Re=p,w.paused){se.reveal=1,$e(),Re=0;return}const K=D?0:1;se.clock+=U*w.speed*K;const Z=w.mouseInteraction&&le.inside&&!D,Ne=1-Math.exp(-U/.6);if(Z){const Be=(le.x-ae.width/2)/ae.height,De=w.flip?1-le.y/ae.height:le.y/ae.height;se.px+=(Be-se.px)*Ne,se.py+=(De-se.py)*Ne}se.reach+=((Z?1:0)-se.reach)*(1-Math.exp(-U/(Z?.9:1.4))),!w.intro||D?se.reveal=1:se.reveal<1&&(se.reveal=Math.min(1,se.reveal+U/cr)),$e(),be=requestAnimationFrame(L)},oe=()=>{!be&&de&&!document.hidden&&(be=requestAnimationFrame(L))},G=()=>{const p=ue.current,w=Math.max(1,_.clientWidth),U=Math.max(1,_.clientHeight),K=Math.min(p.dpr||window.devicePixelRatio||1,2);ae.width=w,ae.height=U,ne.width=Math.max(1,Math.round(w*K)),ne.height=Math.max(1,Math.round(U*K)),$e(),oe()},Fe=p=>{const w=_.getBoundingClientRect();le.x=p.clientX-w.left,le.y=p.clientY-w.top;const U=le.inside;if(le.inside=le.x>=0&&le.y>=0&&le.x<=w.width&&le.y<=w.height,le.inside&&!U){const K=ue.current;se.px=(le.x-w.width/2)/Math.max(1,w.height),se.py=K.flip?1-le.y/Math.max(1,w.height):le.y/Math.max(1,w.height)}ue.current.paused||oe()},Ae=p=>{p.pointerType!=="mouse"&&(le.inside=!1)},je=()=>{le.inside=!1},N=()=>{Re=0,oe()},ce=new ResizeObserver(G);ce.observe(_);const he=new IntersectionObserver(p=>{de=p.some(w=>w.isIntersecting),de&&(Re=0,oe())});he.observe(_),window.addEventListener("pointermove",Fe,{passive:!0}),window.addEventListener("pointerdown",Fe,{passive:!0}),window.addEventListener("pointerup",Ae,{passive:!0}),window.addEventListener("pointercancel",Ae,{passive:!0}),document.documentElement.addEventListener("pointerleave",je),document.addEventListener("visibilitychange",N),G();let Pe=ue.current.dpr;return ge.current=()=>{const p=ue.current;if(p.dpr!==Pe){Pe=p.dpr,G();return}be||$e(),oe()},()=>{var p;cancelAnimationFrame(be),ge.current=null,ce.disconnect(),he.disconnect(),window.removeEventListener("pointermove",Fe),window.removeEventListener("pointerdown",Fe),window.removeEventListener("pointerup",Ae),window.removeEventListener("pointercancel",Ae),document.documentElement.removeEventListener("pointerleave",je),document.removeEventListener("visibilitychange",N),l.deleteProgram(B.program),l.deleteBuffer(Ie),l.deleteVertexArray(Ee),(p=l.getExtension("WEBGL_lose_context"))==null||p.loseContext()}},[]),v.useEffect(()=>{var _;(_=ge.current)==null||_.call(ge)}),d.jsx("div",{ref:ie,className:`aurora-container${ve?` ${ve}`:""}`,style:pe,children:d.jsx("canvas",{ref:H,className:"aurora-canvas","aria-hidden":"true"})})},Po={linear:t=>t,smooth:t=>.5-Math.cos(Math.PI*t)/2,snappy:t=>t<.5?16*Math.pow(t,5):1-Math.pow(-2*t+2,5)/2},mr=["loop","hover","view"],xr=[0,.2,.4,.6,.8,1],Bt=(t,e,s)=>Math.min(s,Math.max(e,t));let Tt=null;const $o=t=>{if(typeof document>"u"||(Tt||(Tt=document.createElement("canvas").getContext("2d")),!Tt))return null;Tt.fillStyle="#000000",Tt.fillStyle=t;const e=String(Tt.fillStyle);if(e.startsWith("#"))return[1,3,5].map(r=>parseInt(e.slice(r,r+2),16)).concat(1);const s=e.match(/[\d.]+/g);return!s||s.length<3?null:[Number(s[0]),Number(s[1]),Number(s[2]),s.length>3?Number(s[3]):1]},lo=(t,e,s)=>{const r=(E,S)=>Math.round(Math.pow(Math.pow(E/255,2.2)*(1-s)+Math.pow(S/255,2.2)*s,.45454545454545453)*255),n=t[3]*(1-s)+e[3]*s;if(n<=0)return"rgba(0, 0, 0, 0)";const c=(E,S)=>(E*t[3]*(1-s)+S*e[3]*s)/n,x=t[3]===e[3]?r(t[0],e[0]):Math.round(c(t[0],e[0])),m=t[3]===e[3]?r(t[1],e[1]):Math.round(c(t[1],e[1])),y=t[3]===e[3]?r(t[2],e[2]):Math.round(c(t[2],e[2]));return`rgba(${x}, ${m}, ${y}, ${Math.round(n*1e3)/1e3})`},gn=({text:t,children:e,color:s="#b5b5b5",shineColor:r="#ffffff",speed:n=2,delay:c=0,angle:x=120,shineWidth:m=40,softness:y=.8,bands:E=1,glow:S=0,direction:A="left",easing:C="smooth",trigger:k="loop",yoyo:M=!1,followPointer:T=!1,pauseOnHover:P=!1,disabled:ve=!1,className:pe="",style:ie})=>{const H=v.useRef(null),ge=v.useRef(null),ee=v.useRef(null),V=v.useRef(null),ue=e??t;return ee.current={color:s,shineColor:r,speed:Math.max(.1,n),delay:Math.max(0,c),angle:x,shineWidth:Bt(m,2,200),softness:Bt(y,0,1),bands:Bt(Math.round(E),1,3),glow:Bt(S,0,1),sign:A==="right"?1:-1,ease:Po[C]??Po.smooth,trigger:mr.includes(k)?k:"loop",yoyo:M,followPointer:T,pauseOnHover:P,disabled:ve},v.useEffect(()=>{var _;(_=V.current)==null||_.call(V)}),v.useEffect(()=>{var je;const _=H.current;if(!_)return;const ne=((je=window.matchMedia)==null?void 0:je.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,l={pos:null,vel:0,phase:"idle",from:0,to:0,start:0,duration:1,resume:0,flip:!1,inside:!1,target:0,visible:!0,seen:!1,colors:""};let B=null,O=null,Ie=null,Ee=0,X=0,D=0,u=!0;const te=()=>{const N=ee.current;return N.shineWidth/2+(N.bands-1)*N.shineWidth*1.3+2},I=()=>ee.current.sign>0?-te():100+te(),ae=()=>ee.current.sign>0?100+te():-te(),le=()=>l.target<50?-te():100+te(),se=(N,ce)=>{const he=ee.current,Pe=he.shineWidth/2,g=Pe*(1-he.softness),p=Pe-g,w=[];for(let K=0;K<he.bands;K++){const Z=N-he.sign*K*he.shineWidth*1.3,Ne=1-K*.28;for(const Be of[-1,1])for(const De of xr){const F=Z+Be*(g+p*(1-De)),$=De*De*(3-2*De)*Ne;w.push([F,$])}}w.sort((K,Z)=>K[0]-Z[0]);const U=w.map(([K,Z])=>`${lo(ce,O,Z)} ${K.toFixed(2)}%`);return`linear-gradient(${he.angle}deg, ${lo(ce,O,0)} 0%, ${U.join(", ")}, ${lo(ce,O,0)} 100%)`},be=()=>{const N=ee.current,ce=`${N.color}|${N.shineColor}`;if(ce!==l.colors&&(l.colors=ce,B=$o(N.color),O=$o(N.shineColor),Ie=O?[O[0],O[1],O[2],0]:null),!B||!O){_.style.backgroundImage=`linear-gradient(${N.color}, ${N.color})`;return}if(l.pos===null||N.disabled){_.style.backgroundImage=`linear-gradient(${N.color}, ${N.color})`,ge.current&&(ge.current.style.backgroundImage="none");return}_.style.backgroundImage=se(l.pos,B),ge.current&&(ge.current.style.backgroundImage=se(l.pos,Ie),ge.current.style.opacity=String(N.glow))},Re=(N,ce,he)=>{const Pe=ee.current,g=Math.abs(ae()-I())||1;l.phase="sweep",l.from=N,l.to=ce,l.start=he,l.duration=Pe.speed*1e3*Math.max(.15,Math.abs(ce-N)/g)},de=()=>{Ee||!u||(window.clearTimeout(X),X=0,D=performance.now(),Ee=requestAnimationFrame($e))},$e=N=>{if(Ee=0,!u)return;const ce=ee.current,he=Math.min(.05,Math.max(0,(N-D)/1e3));if(D=N,ce.disabled){l.pos=null,l.phase="idle",be();return}if(ce.followPointer&&l.inside){l.pos===null&&(l.pos=le());const g=220;l.vel+=((l.target-l.pos)*g-l.vel*2*Math.sqrt(g))*he,l.pos+=l.vel*he,l.phase="follow",be(),Ee=requestAnimationFrame($e);return}if(l.phase==="follow"&&(l.vel=0,Re(l.pos??le(),le(),N)),l.phase==="sweep"){if(ce.pauseOnHover&&l.inside){l.start+=he*1e3,Ee=requestAnimationFrame($e);return}const g=Bt((N-l.start)/l.duration,0,1);if(l.pos=l.from+(l.to-l.from)*ce.ease(g),be(),g<1){Ee=requestAnimationFrame($e);return}if(ce.trigger!=="loop"||ne){l.phase="idle",l.pos=null,be();return}l.phase="wait",l.resume=N+ce.delay*1e3}if(l.phase==="wait"){if(!l.visible)return;if(N<l.resume){window.clearTimeout(X),X=window.setTimeout(de,l.resume-N);return}ce.yoyo?(l.flip=!l.flip,Re(l.flip?ae():I(),l.flip?I():ae(),N)):Re(I(),ae(),N),Ee=requestAnimationFrame($e);return}l.phase==="idle"&&ce.trigger==="loop"&&!ne&&l.visible&&(l.flip=!1,Re(I(),ae(),N),Ee=requestAnimationFrame($e))},L=N=>{const ce=ee.current,he=_.getBoundingClientRect(),Pe=ce.angle*Math.PI/180,g=Math.sin(Pe),p=-Math.cos(Pe),w=Math.abs(he.width*g)+Math.abs(he.height*p)||1;return 50+((N.clientX-he.left-he.width/2)*g+(N.clientY-he.top-he.height/2)*p)/w*100},oe=N=>{const ce=ee.current;l.inside=!0,l.target=L(N),!ce.disabled&&(ce.followPointer?l.pos===null&&(l.pos=le()):ce.trigger==="hover"&&l.phase==="idle"&&!ne&&Re(I(),ae(),performance.now()),de())},G=N=>{l.target=L(N),ee.current.followPointer&&de()},Fe=()=>{l.inside=!1,de()},Ae=new IntersectionObserver(N=>{const ce=N.some(Pe=>Pe.isIntersecting);l.visible=ce;const he=ee.current;ce&&(he.trigger==="view"&&!l.seen&&!ne&&!he.disabled&&(l.seen=!0,Re(I(),ae(),performance.now())),de())});return Ae.observe(_),_.addEventListener("pointerenter",oe),_.addEventListener("pointermove",G),_.addEventListener("pointerleave",Fe),V.current=()=>{const N=ee.current;N.disabled?(l.pos=null,l.phase="idle"):N.trigger!=="loop"&&l.phase==="wait"&&(l.phase="idle",l.pos=null),be(),de()},be(),de(),()=>{u=!1,cancelAnimationFrame(Ee),window.clearTimeout(X),Ae.disconnect(),_.removeEventListener("pointerenter",oe),_.removeEventListener("pointermove",G),_.removeEventListener("pointerleave",Fe),V.current=null}},[]),d.jsxs("span",{ref:H,className:`shiny-text${pe?` ${pe}`:""}`,style:{backgroundImage:`linear-gradient(${s}, ${s})`,...ie},children:[ue,S>0?d.jsx("span",{ref:ge,className:"shiny-text__glow","aria-hidden":"true",children:ue}):null]})},vr=["top-left","top-right","bottom-left","bottom-right"],Ge=10,gr=[.65,0,.35,1],yr="cubic-bezier(0.65, 0, 0.35, 1)",br="cubic-bezier(0.34, 1.56, 0.64, 1)",wr=typeof window<"u"?v.useLayoutEffect:v.useEffect,yn=({sentence:t="True Focus",separator:e=" ",manualMode:s=!1,focusStyle:r="brackets",order:n="sequential",easing:c="smooth",blurAmount:x=5,focusScale:m=1,borderColor:y="green",highlightColor:E,glowColor:S="transparent",animationDuration:A=.5,pauseBetweenAnimations:C=1,cornerSize:k=16,borderWidth:M=3,unfocusedOpacity:T=1})=>{const P=t.split(e).filter(X=>X.trim()!==""),[ve,pe]=v.useState(0),[ie,H]=v.useState(null),ge=v.useRef(null),ee=v.useRef([]),V=Jo(),ue=V?0:A,_=P.length?ve%P.length:-1,ne=c==="spring"&&!V,l=ne?{type:"spring",visualDuration:ue,bounce:.38}:{duration:ue,ease:gr};v.useEffect(()=>{if(s||P.length<2)return;const X=setInterval(()=>{const D=Math.random();pe(u=>{const te=u%P.length;if(n!=="random")return(te+1)%P.length;const I=Math.floor(D*(P.length-1));return I>=te?I+1:I})},(A+C)*1e3);return()=>clearInterval(X)},[s,A,C,P.length,n]),wr(()=>{const X=ge.current,D=ee.current[_];if(!X||!D)return;const u=()=>{const I={x:D.offsetLeft,y:D.offsetTop,width:D.offsetWidth,height:D.offsetHeight};H(ae=>ae&&ae.x===I.x&&ae.y===I.y&&ae.width===I.width&&ae.height===I.height?ae:I)};if(u(),typeof ResizeObserver>"u")return;const te=new ResizeObserver(u);return te.observe(X),ee.current.forEach(I=>I&&te.observe(I)),()=>te.disconnect()},[_,t,e]);const B=ie&&{x:ie.x-ie.width*(m-1)/2,y:ie.y-ie.height*(m-1)/2,width:ie.width*m,height:ie.height*m},O=B&&{"top-left":{x:B.x-Ge,y:B.y-Ge},"top-right":{x:B.x+B.width+Ge-k,y:B.y-Ge},"bottom-left":{x:B.x-Ge,y:B.y+B.height+Ge-k},"bottom-right":{x:B.x+B.width+Ge-k,y:B.y+B.height+Ge-k}},Ie=B&&{box:{x:B.x-Ge,y:B.y-Ge,width:B.width+Ge*2,height:B.height+Ge*2},underline:{x:B.x,y:B.y+B.height+Ge*.4,width:B.width,height:M},highlight:{x:B.x-B.height*.14,y:B.y+B.height*.04,width:B.width+B.height*.28,height:B.height*.92}},Ee={"--border-color":y,"--highlight-color":`color-mix(in srgb, ${E??y} 30%, transparent)`,"--glow-color":S,"--corner-size":`${k}px`,"--border-width":`${M}px`};return d.jsxs("div",{className:"focus-container",ref:ge,style:Ee,children:[r==="highlight"&&Ie&&d.jsx(Qt.span,{className:"focus-highlight","aria-hidden":"true",initial:{...Ie.highlight,opacity:0},animate:{...Ie.highlight,opacity:1},transition:l}),P.map((X,D)=>{const u=D===_;return d.jsx("span",{ref:te=>{ee.current[D]=te},className:`focus-word ${s?"manual":""} ${u&&!s?"active":""}`,style:{filter:`blur(${u?0:x}px)`,opacity:u?1:T,transform:m!==1?`scale(${u?m:1})`:void 0,transition:`filter ${ue}s ease, opacity ${ue}s ease, transform ${ue}s ${ne?br:yr}`},onMouseEnter:()=>{s&&pe(D)},children:X},D)}),Ie&&O&&r!=="highlight"&&d.jsxs("div",{className:"focus-frame","aria-hidden":"true",children:[r==="box"&&d.jsx(Qt.span,{className:"focus-box",initial:{...Ie.box,opacity:0},animate:{...Ie.box,opacity:1},transition:l}),r==="underline"&&d.jsx(Qt.span,{className:"focus-underline",initial:{...Ie.underline,opacity:0},animate:{...Ie.underline,opacity:1},transition:l}),r!=="box"&&r!=="underline"&&vr.map(X=>d.jsx(Qt.span,{className:`corner ${X}`,initial:{...O[X],opacity:0},animate:{...O[X],opacity:1},transition:l},X))]})]})},Xe=1440,Fo=120,No=4e3,Co=960,co=2.2,bo=Math.PI*2,Jt=typeof window<"u"?v.useLayoutEffect:v.useEffect,uo=(t,e)=>e>0?(t%e+e)%e-e:t,Er=t=>Math.atan2(Math.sin(t),Math.cos(t)),Mr=(t,e)=>{const s=Math.min(Math.max(t,0),1)*50*e;if(s<=0)return;const r=50-e*50,n=10,c=[],x=[];for(let m=0;m<=n;m++){const y=m/n,E=(y*y*y*(y*(y*6-15)+10)).toFixed(3);c.push(`rgba(0, 0, 0, ${E}) ${(r+y*s).toFixed(2)}%`),x.unshift(`rgba(0, 0, 0, ${E}) ${(100-r-y*s).toFixed(2)}%`)}return`linear-gradient(to right, ${[...c,...x].join(", ")})`},Rr=(t,e)=>{const r=Xe+100,n=bo/Co,c=A=>e+t*Math.cos(n*(A-Xe/2)),x=A=>-t*n*Math.sin(n*(A-Xe/2)),m=Math.ceil((r- -100)/(Co/8)),y=(r- -100)/m,E=A=>A.toFixed(2);let S=`M${E(-100)},${E(c(-100))}`;for(let A=0;A<m;A++){const C=-100+A*y,k=C+y;S+=` C${E(C+y/3)},${E(c(C)+x(C)*y/3)} ${E(k-y/3)},${E(c(k)-x(k)*y/3)} ${E(k)},${E(c(k))}`}return S},Tr=(t,e,s,r)=>{if(t==="circle"){const x=r>0?Math.max(1,Math.round(bo*s*co/r)):1,m=r>0?x*r/bo:s*co,y=m+s;return{d:`M${-m},0 A${m},${m} 0 1,1 ${m},0 A${m},${m} 0 1,1 ${-m},0`,viewBox:`${-y} ${-y} ${y*2} ${y*2}`,radius:m,repeats:x,span:Math.min(1,s*(co+1)*2/Xe)}}const n={viewBox:`0 0 ${Xe} ${Fo}`,radius:0,repeats:0,span:1},c=Fo/2+s*.36;return t==="line"?{...n,d:`M-100,${c} L${Xe+100},${c}`}:t==="wave"?{...n,d:Rr(e*.25,c)}:{...n,d:`M-100,40 Q500,${40+e} 1540,40`}},bn=({marqueeText:t="",speed:e=2,className:s,curveAmount:r=400,direction:n="left",interactive:c=!0,pauseOnHover:x=!1,color:m="currentColor",edgeFade:y=0,shape:E="arc",fontSize:S=96,fontWeight:A=700,letterSpacing:C=0,outline:k=!1,separator:M="",separatorColor:T,scrollBoost:P=0})=>{const ve=v.useMemo(()=>t.replace(/\s+$/,""),[t]),pe=String(M??"").trim(),ie=pe?`${ve} ${pe} `:`${ve} `,H=`curve-${v.useId().replace(/[^a-zA-Z0-9_-]/g,"")}`,ge=v.useRef(null),ee=v.useRef(null),V=v.useRef(null),ue=v.useRef(null),_=v.useRef([]),[ne,l]=v.useState(0),[B,O]=v.useState(0),[Ie,Ee]=v.useState(!1),X=v.useRef(0),D=v.useRef(0),u=v.useRef(0),te=v.useRef(n),I=v.useRef(!1),ae=v.useRef({speed:e,pauseOnHover:x,scrollBoost:P}),le=v.useRef({distance:0,level:0}),se=v.useRef({active:!1,x:0,time:0,scale:1,velocity:0,ring:!1,radius:0,angle:0,cx:0,cy:0}),be=E==="circle",Re=Tr(E,r,S,ne),de=ne>0,$e=de?be?Re.repeats+1:Math.ceil((B||1800)/ne)+2:1,L=Mr(y,Re.span),oe=`${H}-outline`,G=!!(pe&&T),Fe=ie.repeat($e),Ae=g=>Array.from({length:$e},(p,w)=>d.jsxs(v.Fragment,{children:[`${ve} `,d.jsx("tspan",{...g,children:pe})," "]},w)),je=()=>{const g=`${D.current}px`;for(const p of _.current)p.setAttribute("startOffset",g)};v.useEffect(()=>{ae.current={speed:e,pauseOnHover:x,scrollBoost:P}},[e,x,P]),v.useEffect(()=>{te.current=n},[n]),Jt(()=>{var K;const g=()=>{V.current&&l(V.current.getComputedTextLength())};g();let p=!0;const w=document.fonts;w==null||w.ready.then(()=>p&&g()),(K=w==null?void 0:w.addEventListener)==null||K.call(w,"loadingdone",g);const U=typeof ResizeObserver<"u"?new ResizeObserver(g):null;return U&&ee.current&&U.observe(ee.current),()=>{var Z;p=!1,(Z=w==null?void 0:w.removeEventListener)==null||Z.call(w,"loadingdone",g),U==null||U.disconnect()}},[ie,s,S,A,C]),Jt(()=>{ue.current&&O(ue.current.getTotalLength())},[Re.d]),Jt(()=>{de&&(X.current=ne,D.current=uo(D.current,ne))},[de,ne]),Jt(()=>{_.current=ee.current?Array.from(ee.current.querySelectorAll("textPath")):[];const g=`${D.current}px`;for(const p of _.current)p.setAttribute("startOffset",g)}),v.useEffect(()=>{if(!P)return;const g=new Map([[window,window.scrollY]]),p=w=>{const U=w.target instanceof Element?w.target:window;if(U instanceof Element&&!U.contains(ge.current))return;const K=U instanceof Element?U.scrollTop:window.scrollY,Z=g.get(U);g.set(U,K),Z!==void 0&&(le.current.distance+=Math.abs(K-Z))};return window.addEventListener("scroll",p,{passive:!0,capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})},[P]),v.useEffect(()=>{var Ne;if(!de)return;const g=((Ne=window.matchMedia)==null?void 0:Ne.call(window,"(prefers-reduced-motion: reduce)").matches)??!1;let p=0,w=0,U=!0;const K=Be=>{if(p=0,!U)return;const De=w?Math.min((Be-w)/1e3,.05):0;w=Be;const F=le.current,$=De>0?F.distance/De:0;if(F.distance=0,F.level+=($-F.level)*(1-Math.exp(-De*($>F.level?10:2.4))),!se.current.active){const{speed:W,pauseOnHover:re,scrollBoost:me}=ae.current,Me=te.current==="right"?1:-1,h=g||re&&I.current,j=h?0:Me*W*60,q=h?0:Me*F.level*me*.3;u.current+=(j-u.current)*(1-Math.exp(-De*3));const o=(u.current+q)*De;if(Math.abs(o)>1e-4){D.current=uo(D.current+o,X.current);for(const Ue of _.current)Ue.setAttribute("startOffset",`${D.current}px`)}}p=requestAnimationFrame(K)},Z=typeof IntersectionObserver<"u"?new IntersectionObserver(([Be])=>{U=Be.isIntersecting,U&&!p&&(w=0,le.current.level=0,p=requestAnimationFrame(K))}):null;return Z&&ge.current&&Z.observe(ge.current),p=requestAnimationFrame(K),()=>{cancelAnimationFrame(p),Z==null||Z.disconnect()}},[de]);const N=g=>{var Z,Ne,Be;if(!c||!de)return;const p=(Z=ee.current)==null?void 0:Z.getBoundingClientRect(),w=(p==null?void 0:p.width)||Xe,U=p?p.left+p.width/2:g.clientX,K=p?p.top+p.height/2:g.clientY;se.current={active:!0,x:g.clientX,time:performance.now(),scale:Xe/w,velocity:0,ring:be,radius:Re.radius,angle:Math.atan2(g.clientY-K,g.clientX-U),cx:U,cy:K},u.current=0,Ee(!0),(Be=(Ne=g.currentTarget).setPointerCapture)==null||Be.call(Ne,g.pointerId)},ce=g=>{const p=se.current;if(!p.active)return;const w=performance.now();let U=(g.clientX-p.x)*p.scale;if(p.ring){const Z=Math.atan2(g.clientY-p.cy,g.clientX-p.cx);U=Er(Z-p.angle)*p.radius,p.angle=Z}const K=Math.max(w-p.time,1)/1e3;p.x=g.clientX,p.time=w,p.velocity=p.velocity*.5+U/K*.5,D.current=uo(D.current+U,X.current),je()},he=()=>{const g=se.current;if(!g.active)return;g.active=!1,Ee(!1);const p=performance.now()-g.time>100?0:Math.max(-No,Math.min(No,g.velocity));u.current=p,Math.abs(p)>60&&(te.current=p>0?"right":"left")},Pe=()=>{I.current=!1,he()};return d.jsx("div",{ref:ge,className:"curved-loop-jacket",style:{visibility:de?"visible":"hidden",cursor:c?Ie?"grabbing":"grab":"auto",touchAction:c?"pan-y":"auto",maskImage:L,WebkitMaskImage:L},onPointerDown:N,onPointerMove:ce,onPointerUp:he,onPointerCancel:he,onLostPointerCapture:he,onPointerEnter:()=>{I.current=!0},onPointerLeave:Pe,children:d.jsxs("svg",{ref:ee,className:"curved-loop-svg",viewBox:Re.viewBox,style:{fontSize:S,fontWeight:A,letterSpacing:C,...be?{width:`${(Re.span*100).toFixed(3)}%`,aspectRatio:"1"}:null},role:"img","aria-label":t,children:[d.jsx("text",{ref:V,xmlSpace:"preserve",className:s,style:{visibility:"hidden",opacity:0,pointerEvents:"none"},children:ie}),d.jsxs("defs",{children:[d.jsx("path",{ref:ue,id:H,d:Re.d,fill:"none",stroke:"transparent"}),de&&k&&d.jsxs("mask",{id:oe,maskUnits:"userSpaceOnUse",x:-Xe,y:-Xe,width:Xe*3,height:Xe*3,children:[d.jsx("rect",{x:-Xe,y:-Xe,width:Xe*3,height:Xe*3,fill:"#fff"}),d.jsx("text",{xmlSpace:"preserve",className:s,fill:"#000",children:d.jsx("textPath",{href:`#${H}`,xmlSpace:"preserve",children:Fe})})]})]}),de&&(k?d.jsx("text",{xmlSpace:"preserve",className:s,fill:"none",stroke:m,strokeWidth:S*.05,strokeLinejoin:"round",mask:`url(#${oe})`,children:d.jsx("textPath",{href:`#${H}`,xmlSpace:"preserve",children:G?Ae({stroke:"none"}):Fe})}):d.jsx("text",{xmlSpace:"preserve",className:s,fill:m,children:d.jsx("textPath",{href:`#${H}`,xmlSpace:"preserve",children:G?Ae({fill:T}):Fe})})),de&&k&&G&&d.jsx("text",{xmlSpace:"preserve",className:s,fill:"none","aria-hidden":"true",children:d.jsx("textPath",{href:`#${H}`,xmlSpace:"preserve",children:Ae({fill:T})})})]})})},At=Math.PI*2,Ar=1/240,Sr=6,Lr=[{title:"Brand guidelines"},{title:"Launch plan"},{title:"Moodboard"}],kr=[.5,-1.1,1.5,-.7,1.2,-1.6],Ir=[{x:.14,y:-.004,r:1.4},{x:.115,y:.008,r:-1.1},{x:.09,y:0,r:.6}],Pr=[{x:.27,y:-.016,r:4.5},{x:.2,y:.014,r:1.2},{x:.14,y:0,r:-1.2}],fo=[{x:.16,rise:0,r:3},{x:-.17,rise:.05,r:-3.5},{x:0,rise:.1,r:.5},{x:.25,rise:.08,r:5},{x:-.25,rise:.09,r:-5.5},{x:.08,rise:.12,r:1.5}],Vo=[4,-5,3,-6,5,-3],Ko=[.03,-.04,.05,-.02,.04,-.05],$r=[-6,4,-3,7,-5,3],Fr={open:-180,receive:-24,peek:-13,rest:0},Nr={open:-64,receive:-30,peek:-15,rest:0},ho={out:50,drag:80,focus:90},Cr=typeof window>"u"?v.useEffect:v.useLayoutEffect,Te=(t,e,s)=>Math.min(s,Math.max(e,t)),_o=(()=>{let t=null;const e=new Map;return s=>{const r=String(s);if(e.has(r))return e.get(r);let n=[61,139,255];return typeof document<"u"&&(t??(t=document.createElement("canvas").getContext("2d",{willReadFrequently:!0})),t&&(t.clearRect(0,0,1,1),t.fillStyle="#3d8bff",t.fillStyle=r,t.fillRect(0,0,1,1),n=Array.from(t.getImageData(0,0,1,1).data.slice(0,3)))),e.set(r,n),n}})(),ht=(t,e,s)=>t.map((r,n)=>Math.round(r+(e[n]-r)*s)),it=t=>`rgb(${t[0]}, ${t[1]}, ${t[2]})`,_r=t=>(.2126*t[0]+.7152*t[1]+.0722*t[2])/255,wo=(t,e)=>{const s=new Array(16);for(let r=0;r<4;r++)for(let n=0;n<4;n++)s[r*4+n]=t[n]*e[r*4]+t[4+n]*e[r*4+1]+t[8+n]*e[r*4+2]+t[12+n]*e[r*4+3];return s},St=(...t)=>t.reduce(wo),Qe=(t,e,s=0)=>[1,0,0,0,0,1,0,0,0,0,1,0,t,e,s,1],eo=(t,e)=>[t,0,0,0,0,e,0,0,0,0,1,0,0,0,0,1],jo=t=>{const e=t*Math.PI/180,s=Math.cos(e),r=Math.sin(e);return[1,0,0,0,0,s,r,0,0,-r,s,0,0,0,0,1]},po=t=>{const e=t*Math.PI/180,s=Math.cos(e),r=Math.sin(e);return[s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1]},jr=t=>{const e=t*Math.PI/180,s=Math.cos(e),r=Math.sin(e);return[s,r,0,0,-r,s,0,0,0,0,1,0,0,0,0,1]},Lt=t=>`matrix3d(${t.map(e=>Math.abs(e)<1e-7?0:Number(e.toFixed(6))).join(", ")})`,Br=(t,e,s,r,n)=>{const c=(t?180:224)*e,x=(t?232:176)*e,m=20*e,y=12*e,E=m*.75,S=t?m:m+x*.3,A=t?[0,y,y,0]:[y,y,y,y],C=c-A[0]-A[1]-E*2-10*e,k=Te(r?s+14*e+E:c*.34,Math.min(c*.3,C),C),M=n==="left"?A[0]+5*e+E:n==="center"?(c-k)/2:c-A[1]-5*e-E-k,T=t?c*.8:c*.54;return{book:t,scale:e,w:c,h:x,tabH:m,r:y,shoulder:E,corners:A,tabW:k,tabX:M,frontTop:S,frontH:m+x-S,docW:T,docH:T*(t?1.28:1.22)}},Zo=t=>{const{w:e,h:s,tabX:r,tabW:n,tabH:c,shoulder:x}=t,[m,y,E,S]=t.corners,A=c,C=c+s;return[`M 0 ${A+m}`,`Q 0 ${A} ${m} ${A}`,`L ${r-x} ${A}`,`C ${r} ${A} ${r} 0 ${r+x} 0`,`L ${r+n-x} 0`,`C ${r+n} 0 ${r+n} ${A} ${r+n+x} ${A}`,`L ${e-y} ${A}`,`Q ${e} ${A} ${e} ${A+y}`,`L ${e} ${C-E}`,`Q ${e} ${C} ${e-E} ${C}`,`L ${S} ${C}`,`Q 0 ${C} 0 ${C-S}`,"Z"].join(" ")},Bo=`#version 300 es
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
}`,Dr=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uImage;
uniform float uAlpha;
out vec4 outColor;
void main() {
  outColor = texture(uImage, vUv) * uAlpha;
}`,Or=`#version 300 es
layout(location = 0) in vec2 aCorner;
out vec2 vUv;
void main() {
  vUv = aCorner;
  gl_Position = vec4(aCorner * 2.0 - 1.0, 0.0, 1.0);
}`,Xr=`#version 300 es
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
}`,zr=`#version 300 es
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
}`,Do=(t,e,s)=>{const r=t.createShader(e);return r?(t.shaderSource(r,s),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(t.deleteShader(r),null)):null},mo=(t,e,s,r)=>{const n=Do(t,t.VERTEX_SHADER,e),c=Do(t,t.FRAGMENT_SHADER,s),x=t.createProgram();if(!n||!c||!x)return null;if(t.attachShader(x,n),t.attachShader(x,c),t.linkProgram(x),t.deleteShader(n),t.deleteShader(c),!t.getProgramParameter(x,t.LINK_STATUS))return t.deleteProgram(x),null;const m={};return r.forEach(y=>{m[y]=t.getUniformLocation(x,y)}),{program:x,uniforms:m}},Oo=["uModel","uSize","uDepth","uOrigin","uView","uBleed"],Ur=t=>{const e=t.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!0});if(!e)return null;const s=mo(e,Bo,Dr,[...Oo,"uImage","uAlpha"]),r=mo(e,Or,Xr,["uImage","uStep","uSigma"]),n=mo(e,Bo,zr,[...Oo,"uBehind","uRadii","uSpine","uLens","uMorph","uInsideTop","uInsideBottom","uTabRatio","uGutter","uBevel","uStrength","uSplit","uTint","uHaze","uDim","uGlint","uShine","uLight"]);if(!s||!r||!n)return null;const c=e.createVertexArray(),x=e.createBuffer();e.bindVertexArray(c),e.bindBuffer(e.ARRAY_BUFFER,x),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);const m=()=>({texture:e.createTexture(),frame:e.createFramebuffer()}),y=[m(),m(),m()],E={width:0,height:0},S=new Map,A=(M,T)=>{e.uniform1f(M.uniforms.uDepth,T.depth),e.uniform2f(M.uniforms.uOrigin,T.origin[0],T.origin[1]),e.uniform4f(M.uniforms.uView,T.view.x,T.view.y,T.view.width,T.view.height)},C=(M,T)=>{t.width!==M&&(t.width=M),t.height!==T&&(t.height=T),!(E.width===M&&E.height===T)&&(E.width=M,E.height=T,y.forEach(P=>{e.bindTexture(e.TEXTURE_2D,P.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,M,T,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,P.frame),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,P.texture,0)}))},k=(M,T,P,ve,pe)=>{e.bindFramebuffer(e.FRAMEBUFFER,T.frame),e.clear(e.COLOR_BUFFER_BIT),e.bindTexture(e.TEXTURE_2D,M.texture),e.uniform2f(r.uniforms.uStep,P,ve),e.uniform1f(r.uniforms.uSigma,pe),e.drawArrays(e.TRIANGLE_STRIP,0,4)};return{upload(M,T){let P=S.get(M);P||(P=e.createTexture(),S.set(M,P)),e.bindTexture(e.TEXTURE_2D,P),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,T),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)},prune(M){S.forEach((T,P)=>{M.has(P)||(e.deleteTexture(T),S.delete(P))})},render(M){if(e.isContextLost())return;const T=Math.max(1,Math.round(M.view.width*M.dpr)),P=Math.max(1,Math.round(M.view.height*M.dpr));C(T,P);const[ve,pe,ie]=y;e.bindVertexArray(c),e.activeTexture(e.TEXTURE0),e.viewport(0,0,T,P),e.clearColor(0,0,0,0),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.bindFramebuffer(e.FRAMEBUFFER,ve.frame),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(s.program),A(s,M),e.uniform1i(s.uniforms.uImage,0),e.uniform1f(s.uniforms.uBleed,0),M.layers.forEach(ue=>{const _=S.get(ue.key);_&&(e.bindTexture(e.TEXTURE_2D,_),e.uniformMatrix4fv(s.uniforms.uModel,!1,ue.matrix),e.uniform2f(s.uniforms.uSize,ue.width,ue.height),e.uniform1f(s.uniforms.uAlpha,ue.alpha),e.drawArrays(e.TRIANGLE_STRIP,0,4))});const H=M.glass,ge=H.frost*M.dpr;let ee=ve;ge>.35&&(e.disable(e.BLEND),e.useProgram(r.program),e.uniform1i(r.uniforms.uImage,0),k(ve,pe,1/T,0,ge),k(pe,ie,0,1/P,ge),e.enable(e.BLEND),ee=ie),e.bindFramebuffer(e.FRAMEBUFFER,null),e.clear(e.COLOR_BUFFER_BIT);const V=n.uniforms;e.useProgram(n.program),A(n,M),e.bindTexture(e.TEXTURE_2D,ee.texture),e.uniform1i(V.uBehind,0),e.uniformMatrix4fv(V.uModel,!1,H.matrix),e.uniform2f(V.uSize,H.width,H.height),e.uniform1f(V.uBleed,H.bleed),e.uniform4fv(V.uRadii,H.radii),e.uniform1f(V.uSpine,H.spine),e.uniform1f(V.uLens,H.lens),e.uniform1f(V.uMorph,H.morph),e.uniform3fv(V.uInsideTop,H.insideTop),e.uniform3fv(V.uInsideBottom,H.insideBottom),e.uniform1f(V.uTabRatio,H.tabRatio),e.uniform2fv(V.uGutter,H.gutter),e.uniform1f(V.uBevel,H.bevel),e.uniform1f(V.uStrength,H.strength),e.uniform1f(V.uSplit,H.split),e.uniform4fv(V.uTint,H.tint),e.uniform1f(V.uHaze,H.haze),e.uniform1f(V.uDim,H.dim),e.uniform1f(V.uGlint,H.glint),e.uniform1f(V.uShine,H.shine),e.uniform2fv(V.uLight,H.light),e.drawArrays(e.TRIANGLE_STRIP,0,4)},dispose(){S.forEach(M=>e.deleteTexture(M)),S.clear(),y.forEach(M=>{e.deleteTexture(M.texture),e.deleteFramebuffer(M.frame)}),e.deleteBuffer(x),e.deleteVertexArray(c),e.deleteProgram(s.program),e.deleteProgram(r.program),e.deleteProgram(n.program)}}},Xo=(t,e,s,r,n,c)=>{const x=Math.max(0,Math.min(c,r/2,n/2));t.beginPath(),t.moveTo(e+x,s),t.arcTo(e+r,s,e+r,s+n,x),t.arcTo(e+r,s+n,e,s+n,x),t.arcTo(e,s+n,e,s,x),t.arcTo(e,s,e+r,s,x),t.closePath()},Hr=(t,e)=>{let s=0,r=0,n=t;for(;n&&n!==e;)s+=n.offsetLeft,r+=n.offsetTop,n=n.offsetParent;return n===e?[s,r]:null},Wr=t=>!t||t==="transparent"||/rgba?\([^)]*[,/]\s*0\s*\)$/.test(t),qr=(t,e,s,r,n,c)=>{const x=Array.from(e.childNodes).filter(T=>T.nodeType===3).map(T=>T.textContent).join("").trim();if(!x)return;const m=parseFloat(c.fontSize)||12,y=parseFloat(c.lineHeight)||m*1.2,E=s+(parseFloat(c.paddingLeft)||0),S=r+(parseFloat(c.paddingTop)||0),A=n-(parseFloat(c.paddingLeft)||0)-(parseFloat(c.paddingRight)||0);t.font=`${c.fontStyle} ${c.fontWeight} ${c.fontSize} ${c.fontFamily}`,t.fillStyle=c.color,t.textBaseline="middle";const C=T=>{if(t.measureText(T).width<=A)return T;let P=T;for(;P.length>1&&t.measureText(`${P}…`).width>A;)P=P.slice(0,-1);return`${P.trimEnd()}…`};if(c.whiteSpace==="nowrap"){t.fillText(C(x),E,S+y/2);return}let k="",M=0;x.split(/\s+/).forEach(T=>{const P=k?`${k} ${T}`:T;k&&t.measureText(P).width>A?(t.fillText(k,E,S+y*(M+.5)),M+=1,k=T):k=P}),k&&t.fillText(k,E,S+y*(M+.5))},zo=(t,e,s)=>{const r=Math.max(1,t.offsetWidth),n=Math.max(1,t.offsetHeight),c=document.createElement("canvas");c.width=Math.max(1,Math.round(r*e)),c.height=Math.max(1,Math.round(n*e));const x=[],m=c.getContext("2d");if(!m)return{canvas:c,pending:x};m.scale(e,e);const y=(E,S,A)=>{const C=getComputedStyle(E);if(C.display==="none"||C.visibility==="hidden")return;const k=E.offsetWidth,M=E.offsetHeight,T=parseFloat(C.borderTopLeftRadius)||0,P=E!==t&&Number.isFinite(parseFloat(C.opacity))?parseFloat(C.opacity):1;if(m.save(),m.globalAlpha*=P,Wr(C.backgroundColor)||(m.fillStyle=C.backgroundColor,Xo(m,S,A,k,M,T),m.fill()),C.overflow!=="visible"&&(Xo(m,S,A,k,M,T),m.clip()),E instanceof HTMLImageElement){if(!E.complete||!E.naturalWidth)x.push(E);else if(!s){const ve=Math.max(k/E.naturalWidth,M/E.naturalHeight),pe=k/ve,ie=M/ve;m.drawImage(E,(E.naturalWidth-pe)/2,(E.naturalHeight-ie)/2,pe,ie,S,A,k,M)}}else qr(m,E,S,A,k,C),Array.from(E.children).forEach(ve=>{const pe=Hr(ve,t);pe&&y(ve,pe[0],pe[1])});m.restore()};return y(t,0,0),{canvas:c,pending:x}},Yr=(t,e,s,r)=>{const n=document.createElement("canvas");n.width=Math.max(1,Math.round(t.w*r)),n.height=Math.max(1,Math.round((t.tabH+t.h)*r));const c=n.getContext("2d");if(!c)return n;c.scale(r,r);const x=c.createLinearGradient(0,0,0,t.tabH+t.h);return x.addColorStop(0,e),x.addColorStop(1,s),c.fillStyle=x,c.fill(new Path2D(Zo(t))),n},xo=({title:t,description:e})=>d.jsxs("div",{className:"folder-doc",children:[t?d.jsx("span",{className:"folder-doc-title",children:t}):d.jsx("span",{className:"folder-doc-heading"}),e&&d.jsx("span",{className:"folder-doc-text",children:e}),d.jsx("span",{className:"folder-doc-line",style:{width:"92%"}}),d.jsx("span",{className:"folder-doc-line",style:{width:"84%"}}),d.jsx("span",{className:"folder-doc-line",style:{width:"88%"}}),d.jsx("span",{className:"folder-doc-block"}),d.jsx("span",{className:"folder-doc-line",style:{width:"80%"}}),d.jsx("span",{className:"folder-doc-line",style:{width:"62%"}})]}),Gr=t=>v.isValidElement(t)?t:typeof t=="string"||typeof t=="number"?d.jsx(xo,{title:String(t)}):t&&typeof t=="object"?t.image?d.jsx("div",{className:"folder-photo",children:d.jsx("img",{src:t.image,alt:t.alt??t.title??"",draggable:!1})}):t.content?t.content:d.jsx(xo,{title:t.title,description:t.description}):d.jsx(xo,{}),Vr=(t,e,s,r,n)=>{const c=n.w/2,x=n.frontTop+n.frontH/2;if(s==="open"){if(r==="row"){const C=10*n.scale,k=Math.min(.8,(n.w*1.86-C*(e-1))/(e*n.docW)),M=n.docW*k+C;return{x:n.w/2+(t-(e-1)/2)*M,y:x,z:0,r:0,ry:0,s:k}}if(r==="stack"){const k=Math.min(26*n.scale,n.h*.36/Math.max(1,e-1)),M=n.frontTop+14*n.scale+(e-1)*k;return{x:n.w,y:M+n.docH*.74/2-t*k,z:0,r:0,ry:0,s:.74}}const E=e>4?.58:e>3?.64:.72,S=e===2?n.w:Math.min(n.w*1.3,n.w*.6*(e-1)),A=e>1?S/2-t*S/(e-1):n.w*.5;return{x:n.w/2+A,y:x+Ko[t]*n.h,z:0,r:Vo[t],ry:0,s:E}}const y=(s==="rest"?Ir:Pr)[t]??{x:.06,y:0,r:kr[t]??0};return{x:c+y.x*n.w,y:x+y.y*n.h+t*.8*n.scale,z:0,r:y.r,ry:0,s:1}},Kr=(t,e,s,r,n,c)=>{const x=fo[t]??fo[fo.length-1],m=n.tabH+n.h-5*n.scale-n.docH/2,y=(e-1)/2;if(s==="open"){const k=n.tabH-n.h*.02;if(r==="stack"){const pe=Math.min(30*n.scale,n.h*.62/Math.max(1,e-1)),ie=1.04-t*.05;return{x:n.w/2,y:n.tabH+n.h*.1-t*pe-n.docH*(1.04-ie)/2,z:-t*18*n.scale,r:0,ry:0,s:ie}}const M=12*n.scale,T=Math.min(.94,(n.w*2.3-M*(e-1))/(e*n.docW)),P=n.docW*T+M,ve=r==="row";return{x:n.w/2+(t-y)*P,y:k+(ve?0:Ko[t]*n.h*.7),z:0,r:ve?0:Vo[t]*.55,ry:0,s:T}}const E=s==="receive"?1.7:s==="peek"?1.3:1,S=n.w/2+x.x*n.w*E;if(s==="rest")return{x:S,y:m-x.rise*n.h,z:0,r:x.r,ry:0,s:1};const A=s==="peek"&&c!=null?Math.max(0,1-Math.abs(c-S)/(n.w*.32)):0,C=x.rise+(s==="receive"?.03:.1);return{x:S,y:m-C*n.h-A*A*n.h*.09,z:0,r:x.r*1.6,ry:0,s:1}},wn=({items:t,label:e,mode:s="flap",variant:r="solid",color:n="#3d8bff",paperColor:c="#ffffff",tabPosition:x="right",layout:m="spread",size:y=1,openOn:E="click",open:S,defaultOpen:A=!1,onOpenChange:C,onItemClick:k,onItemDrop:M,draggable:T=!0,zoomOnClick:P=!0,peek:ve=!0,intro:pe=!0,tilt:ie=.5,bounce:H=.4,speed:ge=1,frost:ee=.25,closeOnOutsideClick:V=!0,theme:ue="dark",className:_="",style:ne,children:l})=>{const B=v.useRef(null),O=v.useRef(null),Ie=v.useRef(null),Ee=v.useRef(null),X=v.useRef(null),D=v.useRef(null),u=v.useRef(null),te=v.useRef([]),I=v.useRef(null),ae=v.useRef(null),le=v.useRef(null),[se,be]=v.useState(A),[Re,de]=v.useState(0),[$e,L]=v.useState([]),[oe,G]=v.useState(!1),Fe=S!==void 0,Ae=Fe?!!S:se,je=s==="book",N=r==="glass",ce=v.useMemo(()=>{const h=v.Children.toArray(l).filter(v.isValidElement);return(h.length?h:t!=null&&t.length?t:Lr).slice(0,Sr)},[l,t]),he=ce.length,Pe=Math.max(.3,Number(y)||1),g=Br(je,Pe,Re,!!e,x),p=g.tabH+g.h,w=je?{x:-.75*g.w,y:-.25*p,width:2.5*g.w,height:1.5*p}:{x:-.25*g.w,y:-.1*p,width:1.5*g.w,height:1.3*p};Cr(()=>{var o;const h=I.current;if(!h)return;let j=!0;const q=()=>{j&&de(h.offsetWidth)};return q(),(o=document.fonts)==null||o.ready.then(q),()=>{j=!1}},[e,Pe]);const U=v.useCallback(h=>{const j=typeof h=="function"?h(Ae):h;Fe||be(j),j!==Ae&&(C==null||C(j))},[Fe,Ae,C]),K=v.useRef(U);K.current=U;const Z=_o(n),Ne=_o(c),Be=ht(Z,[0,0,0],.16),De=it(ht(Z,[0,0,0],.08)),F=it(Be),$=v.useRef(null);$.current={open:Ae,layout:m,openOn:E,peek:ve,intro:pe,draggable:T,zoomOnClick:P,closeOnOutsideClick:V,onItemClick:k,onItemDrop:M,tilt:Te(ie,0,1.5),bounce:Te(H,0,1),speed:Te(ge,.2,3),frost:Te(ee,0,1),count:he,entries:ce,glass:N,light:ue==="light",tint:Z,insideTop:De,insideBottom:F,insideTone:[ht(Z,[0,0,0],.08).map(h=>h/255),Be.map(h=>h/255)],content:`${s}|${Pe}|${c}|${n}|${g.tabX}|${g.tabW}`,depth:Math.round(Math.max(g.w,g.h)*5),view:w,g},v.useEffect(()=>{var To,Ao;const h=B.current;if(!h)return;const j=((To=window.matchMedia)==null?void 0:To.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,q=a=>({value:a,velocity:0}),o={raf:0,last:0,ready:!1,hovered:!1,pressed:!1,pointerX:0,pointerY:0,deskX:0,deskY:0,hoveredItem:-1,phase:"rest",previous:"rest",changedAt:0,front:q(0),rx:q(0),ry:q(0),lift:q(0),squash:q(1),items:[],focus:-1,drag:null,receiving:!1,receiveUntil:0,suppressClick:!1,dropCount:0,intro:{phase:"done",start:0,opening:!1},anchor:q(0),appear:1,content:{key:"",entries:null,renderer:null}},Ue=a=>{for(;o.items.length<a;)o.items.push({x:q(0),y:q(0),z:q(0),r:q(0),ry:q(0),s:q(1),hover:q(0),mx:q(0),my:q(0),alpha:q(1),place:"inside",rank:0,layer:"inside",elevated:!1,insertUntil:0,insertFrom:null,outX:0,outY:0,outR:0,outS:1,outOrder:0,localX:0,localY:0,fresh:!0});o.items.length>a&&(o.items.length=a,o.focus>=a&&(o.focus=-1),pt())},pt=()=>{const a=[];o.items.forEach((i,f)=>{i.place==="out"&&a.push(f)}),L(i=>i.length===a.length&&i.every((f,b)=>f===a[b])?i:a)},we=(a,i,f,b,z)=>{const Se=f*f,_e=2*b*f,xe=Math.max(1,Math.ceil(z/Ar)),ye=z/xe;for(let Q=0;Q<xe;Q++)a.velocity+=(Se*(i-a.value)-_e*a.velocity)*ye,a.value+=a.velocity*ye;return Math.abs(i-a.value)>.01||Math.abs(a.velocity)>.01},ze=(a,i)=>{a.value=i,a.velocity=0},Ot=()=>{const{g:a}=$.current;return a.book?a.w/2*Te(-o.front.value/180,0,1):0},mt=(a,i)=>{const f=h.getBoundingClientRect(),b=h.offsetWidth/(f.width||1),z=h.offsetHeight/(f.height||1);return[(a-f.left)*b,(i-f.top)*z]},kt=()=>{const a=h.getBoundingClientRect();let i=0,f=0,b=window.innerWidth,z=window.innerHeight;for(let xe=h.parentElement;xe&&xe!==document.body;xe=xe.parentElement){const ye=getComputedStyle(xe);if(/(hidden|clip|auto|scroll)/.test(`${ye.overflowX} ${ye.overflowY}`)){const Q=xe.getBoundingClientRect();i=Math.max(i,Q.left),f=Math.max(f,Q.top),b=Math.min(b,Q.right),z=Math.min(z,Q.bottom);break}}const Se=h.offsetWidth/(a.width||1),_e=h.offsetHeight/(a.height||1);return{left:(i-a.left)*Se,top:(f-a.top)*_e,right:(b-a.left)*Se,bottom:(z-a.top)*_e}},Xt=(a,i)=>{const{g:f}=$.current,b=Ot();if(f.book){const z=o.front.value<-90?b-f.w:b;return a>=z&&a<=b+f.w&&i>=f.tabH*.5&&i<=f.tabH+f.h}return a>=0&&a<=f.w&&i>=0&&i<=f.tabH+f.h},It=a=>{const{g:i}=$.current,f=i.docW*a.s.value/2,b=i.docH*a.s.value/2;if(i.book){if(o.front.value<-60)return!1;const z=Ot();return a.x.value-f<z+i.w&&a.x.value+f>z&&a.y.value+b>i.tabH&&a.y.value-b<i.tabH+i.h}return o.front.value<-45?!1:a.y.value+b>i.frontTop+4*i.scale&&a.x.value+f>0&&a.x.value-f<i.w},zt=a=>{if(a.length<2)return[0,0];const i=a[0],f=a[a.length-1],b=Math.max(.016,(f[0]-i[0])/1e3);return[(f[1]-i[1])/b,(f[2]-i[2])/b]},oo=(a,i)=>{var f;return a.open?"open":o.receiving||i<o.receiveUntil?"receive":a.peek&&o.hovered&&!((f=o.drag)!=null&&f.active)?"peek":"rest"},wt=(a,i,f,b)=>{if(b.g.book)return Vr(a,i,f,b.layout,b.g);const z=o.hovered?(o.pointerX+1)/2*b.g.w:null;return Kr(a,i,f,b.layout,b.g,z)},ro=(a,i,f)=>{const{g:b}=f;return a.insertFrom==="side"?{...i,x:Math.max(i.x,b.w+b.docW*.54*i.s)}:{...i,y:Math.min(i.y,b.frontTop-b.docH*.5*i.s-8*b.scale)}},Ut=a=>{var Ye,dt,Gt;o.raf=0;const i=$.current,{g:f}=i;Ue(i.count);const b=a/1e3,z=o.last?Math.min(.05,(a-o.last)/1e3):1/60;o.last=a;const Se=j?1:1-.72*i.bounce,_e=At*(f.book?1.55:2)*i.speed,xe=At*2.1*i.speed,ye=At*1.6*i.speed,Q=oo(i,b);Q!==o.phase&&(o.previous=o.phase,o.phase=Q,o.changedAt=a);const He=(a-o.changedAt)/1e3;let Y=b<o.receiveUntil;const We=[];o.items.forEach((R,fe)=>{R.place==="inside"&&We.push(fe)});const Ce=We.length;We.forEach((R,fe)=>{o.items[R].rank=fe}),o.focus>=0&&Q!=="open"&&((Ye=o.items[o.focus])==null?void 0:Ye.place)==="inside"&&(o.focus=-1);const Le=o.intro;o.ready||(Le.opening=i.open),Le.phase==="run"&&!Le.opening&&(i.open||(dt=o.drag)!=null&&dt.active)&&(Le.phase="done");const tt=Le.phase==="run"?b-Le.start:0,qe=Le.phase!=="done"&&!Le.opening,gt=(.16+Ce*.085+.3)/i.speed,ot=qe&&tt<gt,rt=R=>(.16+(Ce-1-R)*.085)/i.speed,Nt=(R,fe)=>f.book?{...fe,r:fe.r+(R.rank%2?7:-6),s:fe.s*1.12}:{...fe,y:fe.y-(f.h*.8+f.docH*.5),r:fe.r+(R.rank%2?9:-7)};Le.phase==="run"&&(Y=!0,tt>(Le.opening?1.4:gt+1)/i.speed&&(Le.phase="done"));const Wt=Le.phase==="wait"?0:Le.phase==="run"?Te(tt/(.34/i.speed),0,1):1;o.appear=1-(1-Wt)**3;const Ct=o.previous==="open"&&Q!=="open"&&!j?((f.book?.1:.06)+.035*Ce)/i.speed:0,qt=He<Ct?o.previous:Q,_t=ot?f.book?-150:-42:(f.book?Fr:Nr)[qt];if(!o.ready){o.ready=!0;const R=Le.phase!=="done"&&Le.opening;R&&(o.phase="rest",o.previous="rest"),ze(o.front,R?0:_t),ze(o.anchor,qe?1:0),o.items.forEach(fe=>{const ke=wt(fe.rank,Ce,R?"rest":Q,i),Ke=qe?Nt(fe,ke):ke;ze(fe.x,Ke.x),ze(fe.y,Ke.y),ze(fe.z,Ke.z),ze(fe.r,Ke.r),ze(fe.ry,Ke.ry),ze(fe.s,Ke.s),ze(fe.alpha,qe?0:1),ze(fe.hover,qe&&f.book?3:0),fe.fresh=!1})}if(Le.phase==="wait"){lt(),o.last=0;return}Y=we(o.front,_t,_e,Se,z)||Y;const nt=.2+.35*i.bounce;f.book&&o.front.value<-180?(o.front.value=-360-o.front.value,o.front.velocity=-o.front.velocity*nt):o.front.value>0&&(o.front.value=-o.front.value,o.front.velocity=-o.front.velocity*nt),He<Ct&&(Y=!0),Y=we(o.anchor,qe?1:0,_e,1,z)||Y;const et=o.hovered&&!j;Y=we(o.rx,et?-o.pointerY*8*i.tilt:0,ye,1,z)||Y,Y=we(o.ry,et?o.pointerX*10*i.tilt:0,ye,1,z)||Y,Y=we(o.lift,o.hovered&&Q!=="open"?1:0,ye,1,z)||Y,Y=we(o.squash,o.pressed?.975:1,At*3.2,.6,z)||Y;const Yt=Q==="open"&&o.previous!=="open",Ve=(Gt=o.drag)!=null&&Gt.active?o.drag:null,at=o.hoveredItem,yt=!Ve&&at>=0&&o.items[at]?o.items[at]:null,Mt=yt&&yt.place==="inside"&&Q==="open"?wt(yt.rank,Ce,"open",i):null,so=Te((f.tabH+f.h)*1.18/f.docH,1.2,2.2),J=f.book?f.tabH+f.h/2:f.tabH+f.h*.36;o.items.forEach((R,fe)=>{if(R.fresh){const Ze=wt(R.rank,Ce,"rest",i);ze(R.x,Ze.x),ze(R.y,Ze.y),ze(R.r,Ze.r),R.fresh=!1}let ke,Ke=xe,Vt=Se,st=0,So=1,Kt=!1;if(o.focus===fe)ke={x:f.w/2,y:J,z:0,r:0,ry:0,s:so},st=2.4,R.layer="focus";else if(Ve&&Ve.index===fe){const[Ze]=zt(Ve.samples);ke={x:o.deskX+Ve.grabX,y:o.deskY+Ve.grabY,z:0,r:Te(Ze*.012,-14,14),ry:0,s:Ve.scale*1.05},Ke=At*5,Vt=.78,st=1.4,!R.elevated&&!It(R)&&(R.elevated=!0),R.layer=R.elevated?"drag":"inside"}else if(R.place==="out")ke={x:R.outX,y:R.outY,z:0,r:R.outR,ry:0,s:R.outS},st=at===fe?1:.15,Kt=at===fe,R.layer="out";else{const Ze=Yt&&f.book?Ce-1-R.rank:R.rank,Zt=j?0:Yt?((f.book?.16:.05)+Ze*(f.book?.055:.045))/i.speed:Ze*.03/i.speed,Rt=He>=Zt?Q:o.previous;if(ke=wt(R.rank,Ce,Rt,i),He<Zt&&(Y=!0),qe&&tt<rt(R.rank))ke=Nt(R,ke),So=0,st=f.book?3:0,R.layer="inside";else if(R.insertUntil>b)Y=!0,ke=ro(R,ke,i),R.layer="drag",st=.6;else if(R.insertUntil=0,R.elevated=!1,R.layer="inside",Mt&&Rt==="open")if(at===fe)ke={...ke,y:ke.y-6*f.scale,r:ke.r*.2,ry:0,s:ke.s*1.05},st=1,Kt=!0;else{const Lo=ke.x-Mt.x;ke={...ke,x:ke.x+Math.sign(Lo)*12*f.scale*Math.max(0,1-Math.abs(Lo)/(f.w*1.1))},st=.2}else Rt==="open"&&(st=.2)}if(Y=we(R.x,ke.x,Ke,Vt,z)||Y,Y=we(R.y,ke.y,Ke,Vt,z)||Y,!f.book&&R.layer==="inside"){const Ze=R.r.value*Math.PI/180,Zt=(f.docW*Math.abs(Math.sin(Ze))+f.docH*Math.abs(Math.cos(Ze)))*R.s.value/2,Rt=f.tabH+f.h-2*f.scale-Zt;R.y.value>Rt&&(R.y.value=Rt,R.y.velocity>0&&(R.y.velocity*=-.25))}Y=we(R.z,ke.z,xe,Se,z)||Y,Y=we(R.r,ke.r,Ke,Vt,z)||Y,Y=we(R.ry,ke.ry,xe,Se,z)||Y,Y=we(R.s,ke.s,xe,Se,z)||Y,Y=we(R.hover,st,xe,Se,z)||Y,Y=we(R.alpha,So,At*3*i.speed,1,z)||Y,Y=we(R.mx,Kt?R.localX*7*f.scale:0,ye,.85,z)||Y,Y=we(R.my,Kt?R.localY*7*f.scale:0,ye,.85,z)||Y}),lt(),Y||Ve?o.raf=requestAnimationFrame(Ut):o.last=0},Ht=(a,i)=>{if(o.content.key===i.content&&o.content.entries===i.entries&&o.content.renderer===a)return;o.content={key:i.content,entries:i.entries,renderer:a};const f=Math.min(window.devicePixelRatio||1,2),b=new Set(["back"]);a.upload("back",Yr(i.g,i.insideTop,i.insideBottom,f)),te.current.slice(0,i.count).forEach((z,Se)=>{if(!z)return;const _e=`item-${Se}`;b.add(_e);let xe=zo(z,f,!1);try{a.upload(_e,xe.canvas)}catch{xe=zo(z,f,!0),a.upload(_e,xe.canvas)}xe.pending.forEach(ye=>ye.addEventListener("load",xt,{once:!0}))}),a.prune(b)},lt=()=>{const a=$.current,{w:i,h:f,tabH:b,frontTop:z,frontH:Se,docW:_e,docH:xe,scale:ye,book:Q}=a.g,He=i/2,Y=b+f/2,We=o.front.value,Ce=We*Math.PI/180,Le=Q?Te(-We/180,0,1):0,tt=i/2*Le*(1-o.anchor.value),qe=(1+o.lift.value*.012)*o.squash.value*(.94+.06*o.appear);h.style.opacity=o.appear<.999?o.appear.toFixed(3):"";const gt=St(Qe(He,Y),jo(o.rx.value),po(o.ry.value),eo(qe,qe),Qe(-He,-Y)),ot=wo(gt,Qe(tt,0)),rt=Q&&We<-90,Nt=rt?"3":"40";O.current&&(O.current.style.transform=Lt(ot),O.current.style.setProperty("--folder-gutter",Le.toFixed(3)),O.current.style.setProperty("--folder-label",(Q?1:1-Te((-We-18)/26,0,1)).toFixed(3)));const Wt=Q?St(ot,Qe(0,z,2*ye*(1-Le)),po(We)):St(ot,Qe(0,b+f,2*ye),jo(We),Qe(0,-Se)),ao=Q?Math.sin(Ce)*-.42+Math.cos(Ce)*.9:Math.sin(Ce)*.5+Math.cos(Ce)*.86,Ct=(rt?-ao:ao)/(Q?.9:.86),qt=Te((Ct-1)*.9,0,.18),_t=Te((1-Ct)*(Q?.5:.22),0,.5),nt=Ie.current;nt&&(nt.style.transform=Lt(Wt),nt.style.zIndex=Nt,nt.dataset.face=rt?"inner":"outer",nt.style.setProperty("--folder-glint",qt.toFixed(3)),nt.style.setProperty("--folder-dim",_t.toFixed(3)));const et=Q?Math.max(0,Math.sin(-Ce)):0;if(Ee.current&&(Ee.current.style.transform=Lt(wo(ot,Qe(0,Q?b:b+f))),Ee.current.style.opacity=(.75+o.lift.value*.25).toFixed(3)),X.current&&(X.current.style.transform=Lt(St(ot,Qe(i*et*.12,z+f*et*.04),eo(Math.cos(Ce),1))),X.current.style.opacity=(rt?1-et*.7:0).toFixed(3)),D.current){const J=i*Math.cos(Ce)+i*et*.36;D.current.style.transform=Lt(St(ot,Qe(0,z+f*et*.03),eo(J/i,1))),D.current.style.zIndex=J>0?"39":"2",D.current.style.opacity=(Te(et*4,0,1)*(1-et*.45)).toFixed(3)}const Yt=o.items.map((J,Ye)=>[J,Ye]).filter(([J])=>J.layer==="out").sort((J,Ye)=>J[0].outOrder-Ye[0].outOrder).map(([,J])=>J),Ve=[];o.items.forEach((J,Ye)=>{const dt=te.current[Ye],Gt=3*ye+J.z.value+J.hover.value*26*ye,R=St(gt,Qe(J.x.value+J.mx.value,J.y.value+J.my.value,Gt),po(J.ry.value),jr(J.r.value),eo(J.s.value,J.s.value),Qe(-_e/2,-xe/2));let fe=10+a.count-J.rank;J.layer==="inside"&&o.phase==="open"&&o.hoveredItem===Ye&&(fe=30),J.layer==="out"&&(fe=ho.out+Yt.indexOf(Ye)),J.layer==="drag"&&(fe=ho.drag),J.layer==="focus"&&(fe=ho.focus),Ve.push({index:Ye,matrix:R,layer:fe,alpha:Te(J.alpha.value,0,1),inside:J.layer==="inside"}),dt&&(dt.style.transform=Lt(R),dt.style.zIndex=String(fe),dt.style.setProperty("--folder-lift",Te(J.hover.value,0,2.4).toFixed(3)),dt.style.opacity=J.alpha.value<.995?Math.max(0,J.alpha.value).toFixed(3):"")});const at=u.current,yt=le.current;if(!at||!yt||!a.glass)return;at.style.zIndex=Nt,Ht(yt,a);const Mt=[];rt||(Mt.push({key:"back",matrix:ot,width:i,height:b+f,alpha:1}),Ve.filter(J=>J.inside).sort((J,Ye)=>J.layer-Ye.layer).forEach(J=>Mt.push({key:`item-${J.index}`,matrix:J.matrix,width:_e,height:xe,alpha:J.alpha})));const so=Math.min(window.devicePixelRatio||1,2);yt.render({dpr:so,depth:a.depth,origin:[He,Y],view:a.view,layers:Mt,glass:{matrix:Wt,width:i,height:Se,radii:Q?[0,a.g.r,a.g.r,0]:[a.g.r,a.g.r,a.g.r,a.g.r],spine:Q?i*2:0,bleed:rt?2:0,morph:Q?Te((Le-.55)/.45,0,1)**2:0,insideTop:a.insideTone[0],insideBottom:a.insideTone[1],tabRatio:b/(b+f),gutter:[12*ye,Q?.12*Le:0],bevel:12*ye,strength:14*ye,split:.26,lens:.02,frost:a.frost*6*ye,tint:[a.tint[0]/255,a.tint[1]/255,a.tint[2]/255,a.light?.1:.14],haze:.04+a.frost*.1,dim:_t*.8,glint:qt,shine:a.light?.72:.85,light:rt?[.55,-.83]:[-.55,-.83]}})},Oe=()=>{o.raf||(o.raf=requestAnimationFrame(Ut))},Et=()=>{o.intro.phase==="wait"&&(o.intro.phase="run",o.intro.start=performance.now()/1e3,Oe())},xt=()=>{o.content.key="",Oe()},vt=()=>{const a=o.drag,i=a?o.items[a.index]:null;o.receiving=!!(a!=null&&a.active&&i&&(i.place==="out"||i.elevated)&&Xt(o.deskX,o.deskY))},Pt=a=>{const i=o.items[a.index];i&&(a.active=!0,a.grabX=i.x.value-a.downX,a.grabY=i.y.value-a.downY,a.scale=i.place==="out"?i.outS:i.s.value,a.clip=kt(),o.suppressClick=!0,o.focus===a.index&&(o.focus=-1),i.elevated=i.place==="out"||!It(i),h.dataset.dragging="")},no=(a,i)=>{var tt,qe;const f=$.current,b=o.items[a.index];if(o.receiving=!1,delete h.dataset.dragging,!b)return;const z=performance.now()/1e3,[Se,_e]=i?[0,0]:zt(a.samples);if(Xt(o.deskX,o.deskY)){const gt=b.place==="out"||b.elevated;b.place="inside",gt&&!j&&(b.insertUntil=z+.24/f.speed,b.insertFrom=f.g.book?o.front.value<-90?null:"side":"top",b.insertFrom||(b.insertUntil=0),o.receiveUntil=b.insertUntil?b.insertUntil+.14/f.speed:0),b.elevated=!1,pt(),(tt=f.onItemDrop)==null||tt.call(f,f.entries[a.index],a.index,!0);return}const xe=a.clip??kt(),ye=f.g.docW*a.scale/2,Q=f.g.docH*a.scale/2,He=o.deskX+a.grabX+Te(Se,-2400,2400)*.09,Y=o.deskY+a.grabY+Te(_e,-2400,2400)*.09;b.place="out",b.elevated=!0;const We=8*f.g.scale,Ce=ye*1.08+We,Le=Q*1.08+We;b.outX=Te(He,xe.left+Ce,Math.max(xe.left+Ce,xe.right-Ce)),b.outY=Te(Y,xe.top+Le,Math.max(xe.top+Le,xe.bottom-Le)),b.outR=Te(b.r.value*.5+Te(Se,-2400,2400)*.003+$r[a.index%6]*.6,-12,12),b.outS=a.scale,o.dropCount+=1,b.outOrder=o.dropCount,pt(),(qe=f.onItemDrop)==null||qe.call(f,f.entries[a.index],a.index,!1)},ct=a=>{var Se,_e,xe;const i=o.drag;if(i&&a.pointerId===i.id){const[ye,Q]=mt(a.clientX,a.clientY);o.deskX=ye,o.deskY=Q;const He=performance.now();for(i.samples.push([He,ye,Q]);i.samples.length>2&&He-i.samples[0][0]>100;)i.samples.shift();if(!i.active){const Y=a.pointerType==="touch"?8:4;Math.hypot(a.clientX-i.clientX,a.clientY-i.clientY)>Y&&Pt(i)}i.active&&vt(),Oe()}if(a.pointerType==="touch")return;const f=h.getBoundingClientRect();o.pointerX=Te((a.clientX-f.left)/f.width*2-1,-1.5,1.5),o.pointerY=Te((a.clientY-f.top)/f.height*2-1,-1.5,1.5);const b=(_e=(Se=a.target).closest)==null?void 0:_e.call(Se,"[data-folder-item]"),z=b&&h.contains(b)?Number(b.getAttribute("data-folder-item")):-1;if(o.hoveredItem=z,b&&z>=0&&!((xe=o.drag)!=null&&xe.active)){const ye=b.getBoundingClientRect(),Q=o.items[z];Q&&(Q.localX=Te((a.clientX-ye.left)/ye.width*2-1,-1,1),Q.localY=Te((a.clientY-ye.top)/ye.height*2-1,-1,1))}o.hovered||(o.hovered=!0,$.current.openOn==="hover"&&K.current(!0)),Oe()},ut=a=>{var i;a.pointerType==="touch"||(i=o.drag)!=null&&i.active||(o.hovered=!1,o.pressed=!1,o.hoveredItem=-1,$.current.openOn==="hover"&&K.current(!1),Oe())},$t=a=>{var f,b;if(a.button>0)return;o.suppressClick=!1;const i=(b=(f=a.target).closest)==null?void 0:b.call(f,"[data-folder-item]");if(i&&h.contains(i)&&$.current.draggable){const[z,Se]=mt(a.clientX,a.clientY);o.deskX=z,o.deskY=Se,o.drag={index:Number(i.getAttribute("data-folder-item")),id:a.pointerId,clientX:a.clientX,clientY:a.clientY,downX:z,downY:Se,grabX:0,grabY:0,scale:1,clip:null,active:!1,samples:[[performance.now(),z,Se]]};try{i.setPointerCapture(a.pointerId)}catch{o.drag.id=a.pointerId}}else o.pressed=!0;Oe()},Ft=a=>{o.pressed=!1;const i=o.drag;i&&a.pointerId===i.id&&(o.drag=null,i.active&&no(i,a.type==="pointercancel")),Oe()},Mo=a=>{if(h.contains(a.target))return;const i=$.current;o.focus>=0&&(o.focus=-1,Oe()),i.open&&i.closeOnOutsideClick&&K.current(!1)},Ro=a=>{if(a.key!=="Escape")return;if(o.focus>=0){o.focus=-1,Oe();return}const i=$.current;i.open&&i.closeOnOutsideClick&&K.current(!1)};h.addEventListener("pointermove",ct),h.addEventListener("pointerleave",ut),h.addEventListener("pointerdown",$t),window.addEventListener("pointerup",Ft),window.addEventListener("pointercancel",Ft),document.addEventListener("pointerdown",Mo),document.addEventListener("keydown",Ro),(Ao=document.fonts)==null||Ao.ready.then(xt);let ft=null;return $.current.intro&&!j&&(o.intro.phase="wait",h.style.opacity="0",typeof IntersectionObserver>"u"?Et():(ft=new IntersectionObserver(a=>{a.some(i=>i.isIntersecting)&&(ft==null||ft.disconnect(),Et())},{threshold:.2}),ft.observe(h))),ae.current={wake:Oe,invalidate:xt,consumeClick:()=>o.suppressClick?(o.suppressClick=!1,!0):!1,interactive:a=>{var i;return $.current.open||((i=o.items[a])==null?void 0:i.place)==="out"||o.focus===a},select:a=>{var f;const i=$.current;i.zoomOnClick&&(o.focus=o.focus===a?-1:a),(f=i.onItemClick)==null||f.call(i,i.entries[a],a),Oe()},blur:()=>o.focus<0?!1:(o.focus=-1,Oe(),!0)},Oe(),()=>{cancelAnimationFrame(o.raf),h.removeEventListener("pointermove",ct),h.removeEventListener("pointerleave",ut),h.removeEventListener("pointerdown",$t),window.removeEventListener("pointerup",Ft),window.removeEventListener("pointercancel",Ft),document.removeEventListener("pointerdown",Mo),document.removeEventListener("keydown",Ro),ft==null||ft.disconnect(),ae.current=null}},[]),v.useEffect(()=>{var o;if(!N)return;const h=u.current;if(!h)return;const j=Ur(h);if(!j)return;le.current=j,G(!0);const q=Ue=>{Ue.preventDefault(),le.current=null,G(!1)};return h.addEventListener("webglcontextlost",q),(o=ae.current)==null||o.invalidate(),()=>{h.removeEventListener("webglcontextlost",q),j.dispose(),le.current===j&&(le.current=null),G(!1)}},[N]),v.useEffect(()=>{var h;(h=ae.current)==null||h.wake()});const W=()=>{var h;(h=ae.current)!=null&&h.blur()||E!=="hover"&&U(!Ae)},re=(h,j)=>{const q=ae.current;if(q){if(q.consumeClick()){h.stopPropagation();return}q.interactive(j)&&(h.stopPropagation(),q.select(j))}},me={"--folder-rgb":Z.join(", "),"--folder-base":it(Z),"--folder-front-top":it(ht(Z,[255,255,255],.12)),"--folder-front-bottom":it(ht(Z,[0,0,0],.06)),"--folder-inside-top":De,"--folder-inside-bottom":F,"--folder-tab-ink":_r(Be)>.6?"rgba(0, 0, 0, 0.72)":"rgba(255, 255, 255, 0.92)","--folder-paper":it(Ne),"--folder-paper-ink":it(ht(Ne,[0,0,0],.11)),"--folder-paper-ink-strong":it(ht(Ne,[0,0,0],.28)),"--folder-paper-text":it(ht(Ne,[0,0,0],.72)),"--folder-w":`${g.w}px`,"--folder-h":`${g.h}px`,"--folder-tab-h":`${g.tabH}px`,"--folder-front-y":`${g.frontTop}px`,"--folder-front-h":`${g.frontH}px`,"--folder-r":`${g.r}px`,"--folder-front-radius":je?`0 ${g.r}px ${g.r}px 0`:`${g.r}px`,"--folder-doc-w":`${g.docW}px`,"--folder-doc-h":`${g.docH}px`,"--folder-frost":`${(1.5+Te(ee,0,1)*10)*Pe}px`,"--folder-depth":`${$.current.depth}px`,"--folder-scale":Pe,...ne},Me=Zo(g);return d.jsxs("div",{ref:B,className:`folder-root${_?` ${_}`:""}`,"data-mode":je?"book":"flap","data-variant":r,"data-theme":ue==="light"?"light":"dark","data-open":Ae?"":void 0,"data-gl":N&&oe?"":void 0,"data-draggable":T?"":void 0,style:me,children:[d.jsxs("div",{className:"folder-stage",role:"button",tabIndex:0,"aria-expanded":Ae,"aria-label":e?`${e} folder`:"Folder",onClick:W,onKeyDown:h=>{h.target===h.currentTarget&&(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),W())},children:[d.jsx("span",{ref:Ee,className:"folder-layer folder-ground","aria-hidden":"true"}),je&&d.jsx("span",{ref:X,className:"folder-layer folder-cast","aria-hidden":"true"}),d.jsxs("div",{ref:O,className:"folder-layer folder-back","aria-hidden":"true",children:[d.jsx("div",{className:"folder-back-fill",style:{clipPath:`path('${Me}')`},children:je&&d.jsx("span",{className:"folder-gutter"})}),d.jsx("svg",{className:"folder-back-rim",width:g.w,height:p,viewBox:`0 0 ${g.w} ${p}`,children:d.jsx("path",{className:"folder-focus",d:Me})}),e&&d.jsx("span",{className:"folder-tab-text",style:{left:g.tabX,width:g.tabW},children:e})]}),ce.map((h,j)=>{const q=Ae||$e.includes(j);return d.jsx("div",{ref:o=>{te.current[j]=o},className:"folder-layer folder-item","data-folder-item":j,role:q?"button":void 0,tabIndex:q?0:-1,onClick:o=>re(o,j),onKeyDown:o=>{var Ue;!q||o.key!=="Enter"&&o.key!==" "||(o.preventDefault(),o.stopPropagation(),(Ue=ae.current)==null||Ue.select(j))},children:Gr(h)},v.isValidElement(h)&&h.key!=null?h.key:j)}),je&&d.jsx("span",{ref:D,className:"folder-layer folder-shade","aria-hidden":"true"}),d.jsxs("div",{ref:Ie,className:"folder-layer folder-front","data-face":"outer","aria-hidden":"true",children:[d.jsx("div",{className:"folder-face folder-face-outer"}),je&&d.jsx("div",{className:"folder-face folder-face-inner",children:d.jsx("span",{className:"folder-inner-gutter"})})]}),N&&d.jsx("canvas",{ref:u,className:"folder-glass","aria-hidden":"true",style:{left:w.x,top:w.y,width:w.width,height:w.height}})]}),e&&d.jsx("span",{ref:I,className:"folder-tab-text folder-measure","aria-hidden":"true",children:e})]})};Dt.registerPlugin(nr);const Zr=typeof window<"u"?v.useLayoutEffect:v.useEffect,Qr=t=>typeof t=="string"&&!t.startsWith("clamp(")?`clamp(${t})`:t,Eo=t=>Math.min(Math.max(t,0),1),vo=(t,e,s)=>{const r=Eo((s-t)/(e-t));return r*r*(3-2*r)},bt=(t,e)=>{const s=Math.sin((t+1)*12.9898+e*78.233)*43758.5453;return s-Math.floor(s)},Jr=(t,e,s)=>{const r=(t-1)/2,n=Array.from({length:t},(x,m)=>e==="end"?t-1-m:e==="center"?Math.abs(m-r):e==="edges"?r-Math.abs(m-r):m);e==="random"&&n.map((m,y)=>y).sort((m,y)=>bt(m,9)-bt(y,9)).forEach((m,y)=>{n[m]=y});const c=Math.min(...n);return n.map(x=>(x-c)*Math.max(0,s))},En=({children:t,scrollContainerRef:e,containerClassName:s="",textClassName:r="",effect:n="float",splitBy:c="chars",direction:x="up",order:m="start",fromColor:y="currentColor",animationDuration:E=1,ease:S="back.inOut(2)",scrollStart:A="center bottom+=50%",scrollEnd:C="bottom bottom-=40%",stagger:k=.03,distance:M=120,stretch:T=2.3,smoothing:P=0})=>{const ve=v.useRef(null),pe=v.useRef(null),ie=v.useMemo(()=>{const _=v.Children.toArray(t);return _.every(ne=>typeof ne=="string"||typeof ne=="number")?_.join(""):null},[t]),H=y&&y!=="currentColor"?y:null,ge=v.useMemo(()=>H?{color:`color-mix(in oklab, ${H} calc(var(--scroll-float-mix, 0) * 100%), currentColor)`}:void 0,[H]),ee=v.useMemo(()=>ie===null?null:ie.split(/(\s+)/).map((_,ne)=>_.trim()===""?_:d.jsx("span",{className:"scroll-float-word",children:Array.from(_).map((l,B)=>d.jsx("span",{className:"scroll-float-char",style:ge,children:l},B))},ne)),[ie,ge]),[V,ue]=v.useState(!1);return v.useEffect(()=>ue(!0),[]),Zr(()=>{const _=ve.current,ne=pe.current;if(!_||!ne||e&&!e.current)return;const l=(e==null?void 0:e.current)||window,B=_.querySelectorAll(c==="words"?".scroll-float-word":".scroll-float-char"),O=B.length?Array.from(B):[ne],Ie=new Map(O.map((L,oe)=>[L,oe])),Ee=L=>(oe,G)=>L(Ie.get(G)??0),X=(O.length-1)/2,D=L=>X>0?(L-X)/X:0,u=Jr(O.length,m,k),te=x==="down"?-1:1,I=Math.max(0,Number(M)||0)/120,ae=T>0?T**-.43:1,le=Dt.parseEase(S)||(L=>L),se=L=>Eo(le(L)),be=()=>parseFloat(getComputedStyle(ne).fontSize)||16,Re=L=>{const oe=se(L);return 1-Math.cos(oe*Math.PI*2.5)*Math.pow(1-oe,2.6)},de=L=>{const oe=se(L);return Math.sin(oe*Math.PI*2.5)*Math.pow(1-oe,2.6)},$e=Dt.matchMedia();return $e.add("(prefers-reduced-motion: no-preference)",()=>{const L=Dt.timeline({scrollTrigger:{trigger:_,scroller:l,start:A,end:Qr(C),scrub:P>0?P:!0,invalidateOnRefresh:!0}}),oe=(G,Fe)=>(Dt.set(O,{willChange:"opacity, transform",...G}),L.fromTo(O,{willChange:"opacity, transform",...G},{duration:E,stagger:Ae=>u[Ae]||0,...Fe},0));n==="flip"?(oe({rotationX:-90*te,transformPerspective:()=>be()*4,transformOrigin:()=>`50% 50% ${(-be()*.55*I).toFixed(2)}`,backfaceVisibility:"hidden"},{ease:S,rotationX:0}),oe({opacity:0},{ease:G=>vo(.05,.55,se(G)),opacity:1})):n==="scatter"?(oe({x:Ee(G=>((bt(G,1)*2-1)*1.3-D(G)*.9)*be()*I),y:Ee(G=>te*(.35+bt(G,2))*be()*1.1*I),rotation:Ee(G=>(bt(G,3)<.5?-1:1)*(40+bt(G,4)*120)),scale:Ee(G=>.35+bt(G,5)*.9),transformOrigin:"50% 50%"},{ease:S,x:0,y:0,rotation:0,scale:1}),oe({opacity:0},{ease:G=>vo(0,.4,se(G)),opacity:1})):n==="blur"?oe({willChange:"opacity, transform, filter",opacity:0,y:()=>te*be()*.3*I,scale:1.45,filter:()=>`blur(${(be()*.2).toFixed(2)}px)`,transformOrigin:"50% 50%"},{ease:S,opacity:1,y:0,scale:1,filter:"blur(0px)"}):n==="wave"?(oe({yPercent:120*I*te,scaleY:T,scaleX:ae,transformOrigin:te>0?"50% 100%":"50% 0%"},{ease:Re,yPercent:0,scaleY:1,scaleX:1}),oe({rotation:0},{ease:de,rotation:-16*te}),oe({opacity:0},{ease:G=>Eo(se(G)*2.5),opacity:1})):oe({opacity:0,yPercent:120*I*te,scaleY:T,scaleX:ae,transformOrigin:te>0?"50% 0%":"50% 100%"},{ease:S,opacity:1,yPercent:0,scaleY:1,scaleX:1}),H&&oe({"--scroll-float-mix":1},{ease:G=>vo(.5,1,se(G)),"--scroll-float-mix":0})}),()=>$e.revert()},[V,e,ie,n,c,x,m,H,E,S,A,C,k,M,T,P]),d.jsxs("h2",{ref:ve,className:`scroll-float ${n==="float"?"":"scroll-float--open"} ${s}`,children:[ie!==null&&d.jsx("span",{className:"scroll-float-sr",children:ie}),d.jsx("span",{ref:pe,className:`scroll-float-text ${r}`,style:ie===null?ge:void 0,"aria-hidden":ie!==null?!0:void 0,children:ee??t})]})};function Mn({course:t,branchCount:e=4,className:s=""}){const r=encodeURIComponent(`Hello Infodesk Computer Education, I am interested in the ${t.title} (${t.duration}) course. Could you share batch timings, fee details, and book a free demo session?`);return d.jsxs("div",{className:`bg-surface border border-line/80 rounded-panel p-6 sm:p-7 shadow-card space-y-6 ${s}`,children:[d.jsxs("div",{children:[d.jsx("span",{className:"text-xs font-bold text-muted",children:"Course overview"}),d.jsx("p",{className:"text-xl font-bold text-deep mt-1",children:t.title})]}),d.jsxs("div",{className:"space-y-3 py-3 border-y border-line/60 text-sm",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-muted",children:"Duration"}),d.jsx("span",{className:"font-semibold text-deep",children:t.duration})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-muted",children:"Format"}),d.jsx("span",{className:"font-semibold text-deep",children:"Small batches, in-person"})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-muted",children:"Locations"}),d.jsxs("span",{className:"font-semibold text-deep",children:[e," Mumbai branches"]})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-muted",children:"Placement Support"}),d.jsx("span",{className:"font-semibold text-emerald-600",children:"100% job assistance"})]})]}),d.jsxs("div",{className:"space-y-3",children:[d.jsx(ko,{to:"/contact",size:"md",variant:"primary",className:"w-full",children:"Book a free demo"}),d.jsx(ko,{href:`https://wa.me/919769445334?text=${r}`,size:"md",variant:"ghost",className:"w-full",icon:d.jsx(ar,{size:18,className:"text-[#25D366]"}),children:"Chat on WhatsApp"}),d.jsxs("a",{href:"/assets/Infodesk_Computer_Education.pdf",target:"_blank",rel:"noopener noreferrer",className:"w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold text-muted hover:text-deep hover:bg-soft/40 transition-colors border border-line/50",children:[d.jsx(sr,{size:15}),d.jsx("span",{children:"Download official brochure (PDF)"})]})]}),d.jsxs("div",{className:"pt-2 border-t border-line/40 text-xs text-muted space-y-2",children:[d.jsxs("p",{className:"flex items-center gap-2",children:[d.jsx(io,{size:14,className:"text-emerald-500 shrink-0"}),d.jsx("span",{children:"Flexible morning, evening & weekend timings"})]}),d.jsxs("p",{className:"flex items-center gap-2",children:[d.jsx(io,{size:14,className:"text-emerald-500 shrink-0"}),d.jsx("span",{children:"Extra practice lab hours with mentor guidance"})]}),d.jsxs("p",{className:"flex items-center gap-2",children:[d.jsx(io,{size:14,className:"text-emerald-500 shrink-0"}),d.jsx("span",{children:"Personalized 1-on-1 doubt clearing sessions"})]})]})]})}const en=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,tn=`#version 300 es
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
}`,Uo=[[0,1],[-11.5,.77],[9.5,.95],[-53.5,.79],[39.5,.77],[16,.81],[-16.3,.92],[13.3,.96],[3,1.01],[1,.68],[1,1.15],[142.5,.51],[113.6,.28],[-7.5,.13],[-2.7,.32],[7.5,.81]],Ho=.78,Wo=2048,go=1.25,to=5,Je=(t,e,s)=>Math.min(s,Math.max(e,t)),on=t=>1-Math.pow(1-Je(t,0,1),3),rn=t=>{const r=8*Math.sqrt(.6155999999999999);return 1-Math.exp(-.62*8*t)*(Math.cos(r*t)+.62*8/r*Math.sin(r*t))},nn=([t,e,s])=>{const r=Math.max(t,e,s),n=Math.min(t,e,s),c=r-n;let x=0;return c>0&&(r===t?x=(e-s)/c%6:r===e?x=(s-t)/c+2:x=(t-e)/c+4),[(x*60+360)%360,r>0?c/r:0]},an=(t,e)=>{const s=(t%360+360)%360/60,r=e,n=r*(1-Math.abs(s%2-1)),c=1-r,[x,m,y]=s<1?[r,n,0]:s<2?[n,r,0]:s<3?[0,r,n]:s<4?[0,n,r]:s<5?[n,0,r]:[r,0,n];return[x+c,m+c,y+c]},qo=t=>{const[e,s]=nn(t),r=s/Ho,n=new Float32Array(Uo.length*3);return Uo.forEach(([c,x],m)=>{n.set(an(e+c,Je(Ho*x*r,0,1)),m*3)}),n},Yo=(t,e,s)=>{const r=t.createShader(e);return r?(t.shaderSource(r,s),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(t.deleteShader(r),null)):null},sn=(t,e,s)=>{const r=Yo(t,t.VERTEX_SHADER,e),n=Yo(t,t.FRAGMENT_SHADER,s),c=t.createProgram();return!r||!n||!c?null:(t.attachShader(c,r),t.attachShader(c,n),t.linkProgram(c),t.deleteShader(r),t.deleteShader(n),t.getProgramParameter(c,t.LINK_STATUS)?c:(t.deleteProgram(c),null))},ln=(t,e,s)=>{const r={};for(const n of s)r[n]=t.getUniformLocation(e,n);return r},cn=({surfaceRef:t,beamPosition:e=.6,surfaceLevel:s=1,color:r="#3847ff",intensity:n=1.8,beamWidth:c=1.5,flare:x=1.5,spread:m=1.5,spill:y=1,fog:E=.2,dust:S=1.6,streaks:A=1.5,dots:C=1,pulse:k=1.5,speed:M=1.5,seed:T=3,mouseInteraction:P=!0,revealImage:ve,revealRadius:pe=220,revealOpacity:ie=.6,intro:H=!0,theme:ge="dark",paused:ee=!1,dpr:V,...ue})=>{const _=v.useRef(null),ne=v.useRef(null),l=v.useRef(null),B={surfaceRef:t,beamPosition:Je(e,0,1),surfaceLevel:Je(s,0,1),color:String(r),intensity:Math.max(0,n),beamWidth:Je(c,.2,5),flare:Je(x,.2,4),spread:Je(m,.1,4),spill:Math.max(0,y),fog:Math.max(0,E),dust:Math.max(0,S),streaks:Math.max(0,A),dots:Math.max(0,C),pulse:Math.max(0,k),speed:M,seed:T,mouseInteraction:P,revealImage:ve,revealRadius:Math.max(1,pe),revealOpacity:Je(ie,0,1),intro:H,theme:ge,paused:ee,dpr:V},O=v.useRef(B);O.current=B,v.useEffect(()=>{var De;const X=_.current,D=ne.current,u=D==null?void 0:D.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!X||!D||!u)return;const te=sn(u,en,tn);if(!te)return;const I=ln(u,te,["uResolution","uDpr","uScale","uTime","uBeamX","uSurface","uRadius","uIntro","uPour","uRun","uLens","uReveal","uRevealMap","uRevealInfo","uAtmosphere","uAmount","uShape","uExtra","uTheme","uTint"]),ae=u.createVertexArray(),le=u.createBuffer();u.bindVertexArray(ae),u.bindBuffer(u.ARRAY_BUFFER,le),u.bufferData(u.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),u.STATIC_DRAW);const se=u.getAttribLocation(te,"aPosition");u.enableVertexAttribArray(se),u.vertexAttribPointer(se,2,u.FLOAT,!1,0,0),u.bindVertexArray(null);const be=u.createTexture();u.bindTexture(u.TEXTURE_2D,be),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,1,1,0,u.RGBA,u.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,u.LINEAR),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,u.LINEAR),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE);const Re=document.createElement("canvas");Re.width=1,Re.height=1;const de=Re.getContext("2d",{willReadFrequently:!0}),$e=((De=window.matchMedia)==null?void 0:De.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,L={time:0,introTime:O.current.intro&&!$e?0:to,width:1,height:1,ratio:1,colorKey:"",tints:qo([.22,.28,1]),observed:null,pointer:{x:0,y:0,inside:!1},lens:{x:0,y:0,vx:0,vy:0,strength:0,placed:!1},reveal:{src:"",ready:!1,width:1,height:1,image:null}};let oe=0,G=0,Fe=!0,Ae=!0;const je=F=>{if(!de)return[.22,.28,1];de.clearRect(0,0,1,1),de.fillStyle="#3847ff",de.fillStyle=F,de.fillRect(0,0,1,1);const[$,W,re]=de.getImageData(0,0,1,1).data;return[$/255,W/255,re/255]},N=F=>{F.color!==L.colorKey&&(L.colorKey=F.color,L.tints=qo(je(F.color)))},ce=F=>{const $=F.revealImage?String(F.revealImage):"",W=L.reveal;if($===W.src||(W.src=$,W.ready=!1,W.image&&(W.image.onload=null),!$))return;const re=new Image;re.crossOrigin="anonymous",re.decoding="async",re.onload=()=>{var q,o;if(!Ae||W.src!==$)return;const me=re.naturalWidth||re.width||1,Me=re.naturalHeight||re.height||1,h=Math.min(1,2048/Math.max(me,Me)),j=document.createElement("canvas");j.width=Math.max(1,Math.round(me*h)),j.height=Math.max(1,Math.round(Me*h)),(q=j.getContext("2d"))==null||q.drawImage(re,0,0,j.width,j.height),u.bindTexture(u.TEXTURE_2D,be),u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,j),u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),W.width=j.width,W.height=j.height,W.ready=!0,(o=l.current)==null||o.call(l)},re.src=$,W.image=re},he=(F,$,W)=>{var me;const re=((me=F.surfaceRef)==null?void 0:me.current)??null;if(re!==L.observed&&(L.observed&&Ne.unobserve(L.observed),re&&Ne.observe(re),L.observed=re),re){const Me=X.getBoundingClientRect(),h=re.getBoundingClientRect();if(h.width>0){const j=getComputedStyle(re),q=Math.max(parseFloat(j.borderTopLeftRadius)||0,parseFloat(j.borderTopRightRadius)||0);return{left:h.left-Me.left,top:h.top-Me.top,right:h.right-Me.left,bottom:h.bottom-Me.top,radius:Math.min(q,h.width/2,h.height/2),real:!0}}}return{left:-$*2,top:F.surfaceLevel*W,right:$*3,bottom:W*3,radius:0,real:!1}},Pe=()=>{const F=Math.max(1,X.clientWidth),$=Math.max(1,X.clientHeight),W=O.current,re=Math.min(W.dpr||window.devicePixelRatio||1,2),me=Math.max(F,$)*re,Me=me>Wo?re*Wo/me:re,h=Math.max(1,Math.round(F*Me)),j=Math.max(1,Math.round($*Me));(D.width!==h||D.height!==j)&&(D.width=h,D.height=j),L.width=F,L.height=$,L.ratio=D.width/F,g()},g=()=>{const F=O.current;N(F);const{width:$,height:W}=L,re=Math.max(.2,Math.min($/585,W/507));let me=he(F,$,W),Me=F.beamPosition*$;if(me.real){const vt=me.radius+6;Me>=me.left&&Me<=me.right?Me=Je(Me,me.left+vt,me.right-vt):me={left:-$*2,top:W,right:$*3,bottom:W*3,radius:0,real:!1}}const h=-.15*W,j=me.top-h+.3*W,q=L.introTime,o=q>=to,Ue=o?me.top+.3*W:h+j*Math.pow(Je(q/go,0,1),1.3),pt=go*Math.pow(Math.max(0,me.top-h)/j,1/1.3),we=q-pt,ze=o?1:we<=0?0:rn(we),Ot=o||we<=0?0:Math.exp(-we/.35)*(1-Math.exp(-we/.05)),mt=F.spread*250*1.3+80,kt=o?1e5:we<=0?-40:mt*(1-Math.exp(-1.15*we)),Xt=o||we<=0?0:Math.exp(-1.15*we)*(1-Math.exp(-we/.08)),It=vt=>{if(o)return[1e3,1];if(we<=0)return[-vt,0];const Pt=Math.min(vt,mt*.97),no=-Math.log(1-Pt/mt)/1.15,ct=we-no,ut=Je((ct+.15)/.8,0,1),$t=ut*ut*ut*(ut*(ut*6-15)+10);return ct<=0?[kt-Pt,$t]:[1.15*(mt-Pt)*ct+260*ct*ct,$t]},[zt,oo]=It((Me-me.left)/re),[wt,ro]=It((me.right-Me)/re),Ut=o?1:we<=0?.3*on(q/go):.3+.7*(1-Math.exp(-1.3*we)),Ht=Number(F.seed)||0;u.viewport(0,0,D.width,D.height),u.clearColor(0,0,0,0),u.clear(u.COLOR_BUFFER_BIT),u.useProgram(te),u.uniform2f(I.uResolution,$,W),u.uniform1f(I.uDpr,L.ratio),u.uniform1f(I.uScale,re),u.uniform1f(I.uTime,L.time),u.uniform1f(I.uBeamX,Me),u.uniform4f(I.uSurface,me.left,me.top,me.right,me.bottom),u.uniform1f(I.uRadius,me.radius),u.uniform3f(I.uIntro,Ue,ze,Ot),u.uniform4f(I.uPour,zt,wt,oo,ro),u.uniform2f(I.uRun,kt,Xt),u.uniform4f(I.uLens,L.lens.x,L.lens.y,95*re,L.lens.strength),ce(F);const{reveal:lt}=L,Oe=Math.max($/lt.width,W/lt.height),Et=lt.width*Oe,xt=lt.height*Oe;u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,be),u.uniform1i(I.uReveal,0),u.uniform4f(I.uRevealMap,1/Et,1/xt,(Et-$)/2/Et,(xt-W)/2/xt),u.uniform2f(I.uRevealInfo,F.revealRadius,lt.ready?F.revealOpacity:0),u.uniform1f(I.uAtmosphere,Ut),u.uniform4f(I.uAmount,F.intensity,F.fog,F.dust,F.streaks),u.uniform4f(I.uShape,F.beamWidth,F.flare,F.spread,F.spill),u.uniform4f(I.uExtra,F.pulse,F.dots,34.34+Ht*7.31,11.58+Ht*3.17),u.uniform1f(I.uTheme,F.theme==="light"?1:0),u.uniform3fv(I.uTint,L.tints),u.bindVertexArray(ae),u.drawArrays(u.TRIANGLES,0,3),u.bindVertexArray(null)},p=F=>{if(oe=0,!Ae||!Fe||document.hidden)return;const $=O.current,W=G?Math.min(.05,(F-G)/1e3):1/60;G=F;const re=!$.paused&&!$e;re&&(L.time+=W*$.speed);const me=L.introTime<to;me&&(L.introTime=Math.min(to,L.introTime+W));const{pointer:Me,lens:h}=L,j=$.mouseInteraction&&Me.inside&&!$e;j&&!h.placed&&(h.x=Me.x,h.y=Me.y,h.vx=0,h.vy=0,h.placed=!0);const q=120*(Me.x-h.x)-19*h.vx,o=120*(Me.y-h.y)-19*h.vy;h.vx+=q*W,h.vy+=o*W,h.x+=h.vx*W,h.y+=h.vy*W;const Ue=j?1:0;h.strength+=(Ue-h.strength)*(1-Math.exp(-W/(Ue>h.strength?.3:.55))),h.strength<.001&&!j&&(h.placed=!1),g();const pt=Math.abs(L.lens.strength-($.mouseInteraction&&L.pointer.inside?1:0))>.002||Math.hypot(L.lens.vx,L.lens.vy)>.5;re||me||pt?oe=requestAnimationFrame(p):G=0},w=()=>{!oe&&Ae&&Fe&&!document.hidden&&(oe=requestAnimationFrame(p))},U=F=>{const $=X.getBoundingClientRect(),W=F.clientX-$.left,re=F.clientY-$.top;L.pointer.x=W,L.pointer.y=re,L.pointer.inside=W>=0&&re>=0&&W<=$.width&&re<=$.height,w()},K=()=>{L.pointer.inside=!1,w()},Z=()=>{G=0,w()},Ne=new ResizeObserver(Pe);Ne.observe(X);const Be=new IntersectionObserver(F=>{Fe=F.some($=>$.isIntersecting),Fe&&(G=0,w())});return Be.observe(X),window.addEventListener("pointermove",U,{passive:!0}),document.documentElement.addEventListener("pointerleave",K),document.addEventListener("visibilitychange",Z),Pe(),w(),l.current=()=>{oe||g(),w()},()=>{Ae=!1,cancelAnimationFrame(oe),l.current=null,Ne.disconnect(),Be.disconnect(),window.removeEventListener("pointermove",U),document.documentElement.removeEventListener("pointerleave",K),document.removeEventListener("visibilitychange",Z),u.deleteTexture(be),u.deleteBuffer(le),u.deleteVertexArray(ae),u.deleteProgram(te)}},[]),v.useEffect(()=>{var X;(X=l.current)==null||X.call(l)});const{className:Ie="",...Ee}=ue;return d.jsx("div",{ref:_,className:`laser-flow-container${Ie?` ${Ie}`:""}`,...Ee,children:d.jsx("canvas",{ref:ne,className:"laser-flow-canvas","aria-hidden":"true"})})};function Rn({title:t="Try a free demo class.",description:e="Experience our hands-on data labs, mentor guidance, and production curriculums in-person at any of our 4 Mumbai centers.",buttonText:s="Book your free demo session",className:r="",id:n="enquire"}){const c=er.digitalMarketingLaserFlow&&!tr&&!or&&!rr;return d.jsx("section",{id:n,className:`max-w-content mx-auto px-6 py-12 ${r}`,children:d.jsxs("div",{className:"relative rounded-[32px] bg-gradient-to-br from-[#13266f] via-[#0b1a52] to-[#071138] text-white p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10",children:[c&&d.jsx(ir,{isCanvasOrWebGL:!0,fallback:d.jsx("div",{className:"absolute inset-0 bg-[#13266f]/40 pointer-events-none","aria-hidden":"true"}),className:"absolute inset-0 pointer-events-none",children:d.jsx(cn,{color:"#4a6df0",intensity:.7,speed:.4,mouseInteraction:!1,className:"absolute inset-0 w-full h-full pointer-events-none opacity-40"})}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#0b1a52]/90 via-[#13266f]/70 to-[#071138]/90 pointer-events-none"}),d.jsxs("div",{className:"space-y-3 max-w-xl text-center md:text-left relative z-10",children:[d.jsx("h3",{className:"text-2xl sm:text-3xl font-bold tracking-tight text-white font-heading",children:t}),d.jsx("p",{className:"text-[#c3cbf2] text-sm sm:text-base leading-relaxed",children:e})]}),d.jsx("div",{className:"shrink-0 relative z-10",children:d.jsx(lr,{as:Qo,to:"/contact",backgroundColor:"#f6f5f1",textColor:"#13266f",color:"#4a6df0",trailColor:"#a5d8ff",radius:999,duration:5,glow:.6,className:"inline-flex items-center justify-center font-bold text-sm sm:text-base px-8 py-3.5 min-h-[48px] rounded-full shadow-lg hover:shadow-xl transition-all",children:s})})]})})}export{vn as A,bn as C,wn as F,En as S,yn as T,gn as a,Mn as b,Rn as c};
