import{j as f}from"./vendor-motion-DJJiVLHx.js";import{r as g,L as Do}from"./vendor-react-6YCBRoeX.js";import{B as go,e as jo,p as Bo,j as Uo,n as Xo}from"./index-CTZy0XB8.js";import{c as zo,F as Ho,d as eo}from"./vendor-icons-CyNvKEFQ.js";import{L as Wo,S as Oo}from"./SpotlightCard-BwG3DoLk.js";const he=1440,bo=120,yo=4e3,wo=960,to=2.2,co=Math.PI*2,Yt=typeof window<"u"?g.useLayoutEffect:g.useEffect,oo=(t,e)=>e>0?(t%e+e)%e-e:t,Yo=t=>Math.atan2(Math.sin(t),Math.cos(t)),qo=(t,e)=>{const i=Math.min(Math.max(t,0),1)*50*e;if(i<=0)return;const s=50-e*50,a=10,d=[],p=[];for(let v=0;v<=a;v++){const b=v/a,y=(b*b*b*(b*(b*6-15)+10)).toFixed(3);d.push(`rgba(0, 0, 0, ${y}) ${(s+b*i).toFixed(2)}%`),p.unshift(`rgba(0, 0, 0, ${y}) ${(100-s-b*i).toFixed(2)}%`)}return`linear-gradient(to right, ${[...d,...p].join(", ")})`},Go=(t,e)=>{const s=he+100,a=co/wo,d=S=>e+t*Math.cos(a*(S-he/2)),p=S=>-t*a*Math.sin(a*(S-he/2)),v=Math.ceil((s- -100)/(wo/8)),b=(s- -100)/v,y=S=>S.toFixed(2);let $=`M${y(-100)},${y(d(-100))}`;for(let S=0;S<v;S++){const N=-100+S*b,_=N+b;$+=` C${y(N+b/3)},${y(d(N)+p(N)*b/3)} ${y(_-b/3)},${y(d(_)-p(_)*b/3)} ${y(_)},${y(d(_))}`}return $},Vo=(t,e,i,s)=>{if(t==="circle"){const p=s>0?Math.max(1,Math.round(co*i*to/s)):1,v=s>0?p*s/co:i*to,b=v+i;return{d:`M${-v},0 A${v},${v} 0 1,1 ${v},0 A${v},${v} 0 1,1 ${-v},0`,viewBox:`${-b} ${-b} ${b*2} ${b*2}`,radius:v,repeats:p,span:Math.min(1,i*(to+1)*2/he)}}const a={viewBox:`0 0 ${he} ${bo}`,radius:0,repeats:0,span:1},d=bo/2+i*.36;return t==="line"?{...a,d:`M-100,${d} L${he+100},${d}`}:t==="wave"?{...a,d:Go(e*.25,d)}:{...a,d:`M-100,40 Q500,${40+e} 1540,40`}},Cr=({marqueeText:t="",speed:e=2,className:i,curveAmount:s=400,direction:a="left",interactive:d=!0,pauseOnHover:p=!1,color:v="currentColor",edgeFade:b=0,shape:y="arc",fontSize:$=96,fontWeight:S=700,letterSpacing:N=0,outline:_=!1,separator:w="",separatorColor:M,scrollBoost:j=0})=>{const ne=g.useMemo(()=>t.replace(/\s+$/,""),[t]),ae=String(w??"").trim(),fe=ae?`${ne} ${ae} `:`${ne} `,z=`curve-${g.useId().replace(/[^a-zA-Z0-9_-]/g,"")}`,Pe=g.useRef(null),xe=g.useRef(null),V=g.useRef(null),ve=g.useRef(null),we=g.useRef([]),[Ce,Ee]=g.useState(0),[ut,Re]=g.useState(0),[ft,Ye]=g.useState(!1),ie=g.useRef(0),Q=g.useRef(0),u=g.useRef(0),Te=g.useRef(a),J=g.useRef(!1),ge=g.useRef({speed:e,pauseOnHover:p,scrollBoost:j}),Ne=g.useRef({distance:0,level:0}),qe=g.useRef({active:!1,x:0,time:0,scale:1,velocity:0,ring:!1,radius:0,angle:0,cx:0,cy:0}),He=y==="circle",Me=Vo(y,s,$,Ce),le=Ce>0,ot=le?He?Me.repeats+1:Math.ceil((ut||1800)/Ce)+2:1,U=qo(b,Me.span),Fe=`${z}-outline`,be=!!(ae&&M),_e=fe.repeat(ot),ue=m=>Array.from({length:ot},(E,C)=>f.jsxs(g.Fragment,{children:[`${ne} `,f.jsx("tspan",{...m,children:ae})," "]},C)),$e=()=>{const m=`${Q.current}px`;for(const E of we.current)E.setAttribute("startOffset",m)};g.useEffect(()=>{ge.current={speed:e,pauseOnHover:p,scrollBoost:j}},[e,p,j]),g.useEffect(()=>{Te.current=a},[a]),Yt(()=>{var re;const m=()=>{V.current&&Ee(V.current.getComputedTextLength())};m();let E=!0;const C=document.fonts;C==null||C.ready.then(()=>E&&m()),(re=C==null?void 0:C.addEventListener)==null||re.call(C,"loadingdone",m);const q=typeof ResizeObserver<"u"?new ResizeObserver(m):null;return q&&xe.current&&q.observe(xe.current),()=>{var K;E=!1,(K=C==null?void 0:C.removeEventListener)==null||K.call(C,"loadingdone",m),q==null||q.disconnect()}},[fe,i,$,S,N]),Yt(()=>{ve.current&&Re(ve.current.getTotalLength())},[Me.d]),Yt(()=>{le&&(ie.current=Ce,Q.current=oo(Q.current,Ce))},[le,Ce]),Yt(()=>{we.current=xe.current?Array.from(xe.current.querySelectorAll("textPath")):[];const m=`${Q.current}px`;for(const E of we.current)E.setAttribute("startOffset",m)}),g.useEffect(()=>{if(!j)return;const m=new Map([[window,window.scrollY]]),E=C=>{const q=C.target instanceof Element?C.target:window;if(q instanceof Element&&!q.contains(Pe.current))return;const re=q instanceof Element?q.scrollTop:window.scrollY,K=m.get(q);m.set(q,re),K!==void 0&&(Ne.current.distance+=Math.abs(re-K))};return window.addEventListener("scroll",E,{passive:!0,capture:!0}),()=>window.removeEventListener("scroll",E,{capture:!0})},[j]),g.useEffect(()=>{var pe;if(!le)return;const m=((pe=window.matchMedia)==null?void 0:pe.call(window,"(prefers-reduced-motion: reduce)").matches)??!1;let E=0,C=0,q=!0;const re=ye=>{if(E=0,!q)return;const De=C?Math.min((ye-C)/1e3,.05):0;C=ye;const T=Ne.current,R=De>0?T.distance/De:0;if(T.distance=0,T.level+=(R-T.level)*(1-Math.exp(-De*(R>T.level?10:2.4))),!qe.current.active){const{speed:k,pauseOnHover:B,scrollBoost:H}=ge.current,G=Te.current==="right"?1:-1,c=m||B&&J.current,A=c?0:G*k*60,I=c?0:G*T.level*H*.3;u.current+=(A-u.current)*(1-Math.exp(-De*3));const o=(u.current+I)*De;if(Math.abs(o)>1e-4){Q.current=oo(Q.current+o,ie.current);for(const Ae of we.current)Ae.setAttribute("startOffset",`${Q.current}px`)}}E=requestAnimationFrame(re)},K=typeof IntersectionObserver<"u"?new IntersectionObserver(([ye])=>{q=ye.isIntersecting,q&&!E&&(C=0,Ne.current.level=0,E=requestAnimationFrame(re))}):null;return K&&Pe.current&&K.observe(Pe.current),E=requestAnimationFrame(re),()=>{cancelAnimationFrame(E),K==null||K.disconnect()}},[le]);const Ge=m=>{var K,pe,ye;if(!d||!le)return;const E=(K=xe.current)==null?void 0:K.getBoundingClientRect(),C=(E==null?void 0:E.width)||he,q=E?E.left+E.width/2:m.clientX,re=E?E.top+E.height/2:m.clientY;qe.current={active:!0,x:m.clientX,time:performance.now(),scale:he/C,velocity:0,ring:He,radius:Me.radius,angle:Math.atan2(m.clientY-re,m.clientX-q),cx:q,cy:re},u.current=0,Ye(!0),(ye=(pe=m.currentTarget).setPointerCapture)==null||ye.call(pe,m.pointerId)},dt=m=>{const E=qe.current;if(!E.active)return;const C=performance.now();let q=(m.clientX-E.x)*E.scale;if(E.ring){const K=Math.atan2(m.clientY-E.cy,m.clientX-E.cx);q=Yo(K-E.angle)*E.radius,E.angle=K}const re=Math.max(C-E.time,1)/1e3;E.x=m.clientX,E.time=C,E.velocity=E.velocity*.5+q/re*.5,Q.current=oo(Q.current+q,ie.current),$e()},rt=()=>{const m=qe.current;if(!m.active)return;m.active=!1,Ye(!1);const E=performance.now()-m.time>100?0:Math.max(-yo,Math.min(yo,m.velocity));u.current=E,Math.abs(E)>60&&(Te.current=E>0?"right":"left")},We=()=>{J.current=!1,rt()};return f.jsx("div",{ref:Pe,className:"curved-loop-jacket",style:{visibility:le?"visible":"hidden",cursor:d?ft?"grabbing":"grab":"auto",touchAction:d?"pan-y":"auto",maskImage:U,WebkitMaskImage:U},onPointerDown:Ge,onPointerMove:dt,onPointerUp:rt,onPointerCancel:rt,onLostPointerCapture:rt,onPointerEnter:()=>{J.current=!0},onPointerLeave:We,children:f.jsxs("svg",{ref:xe,className:"curved-loop-svg",viewBox:Me.viewBox,style:{fontSize:$,fontWeight:S,letterSpacing:N,...He?{width:`${(Me.span*100).toFixed(3)}%`,aspectRatio:"1"}:null},role:"img","aria-label":t,children:[f.jsx("text",{ref:V,xmlSpace:"preserve",className:i,style:{visibility:"hidden",opacity:0,pointerEvents:"none"},children:fe}),f.jsxs("defs",{children:[f.jsx("path",{ref:ve,id:z,d:Me.d,fill:"none",stroke:"transparent"}),le&&_&&f.jsxs("mask",{id:Fe,maskUnits:"userSpaceOnUse",x:-he,y:-he,width:he*3,height:he*3,children:[f.jsx("rect",{x:-he,y:-he,width:he*3,height:he*3,fill:"#fff"}),f.jsx("text",{xmlSpace:"preserve",className:i,fill:"#000",children:f.jsx("textPath",{href:`#${z}`,xmlSpace:"preserve",children:_e})})]})]}),le&&(_?f.jsx("text",{xmlSpace:"preserve",className:i,fill:"none",stroke:v,strokeWidth:$*.05,strokeLinejoin:"round",mask:`url(#${Fe})`,children:f.jsx("textPath",{href:`#${z}`,xmlSpace:"preserve",children:be?ue({stroke:"none"}):_e})}):f.jsx("text",{xmlSpace:"preserve",className:i,fill:v,children:f.jsx("textPath",{href:`#${z}`,xmlSpace:"preserve",children:be?ue({fill:M}):_e})})),le&&_&&be&&f.jsx("text",{xmlSpace:"preserve",className:i,fill:"none","aria-hidden":"true",children:f.jsx("textPath",{href:`#${z}`,xmlSpace:"preserve",children:ue({fill:M})})})]})})},Rt=Math.PI*2,Ko=1/240,Zo=6,Qo=[{title:"Brand guidelines"},{title:"Launch plan"},{title:"Moodboard"}],Jo=[.5,-1.1,1.5,-.7,1.2,-1.6],er=[{x:.14,y:-.004,r:1.4},{x:.115,y:.008,r:-1.1},{x:.09,y:0,r:.6}],tr=[{x:.27,y:-.016,r:4.5},{x:.2,y:.014,r:1.2},{x:.14,y:0,r:-1.2}],ro=[{x:.16,rise:0,r:3},{x:-.17,rise:.05,r:-3.5},{x:0,rise:.1,r:.5},{x:.25,rise:.08,r:5},{x:-.25,rise:.09,r:-5.5},{x:.08,rise:.12,r:1.5}],$o=[4,-5,3,-6,5,-3],Co=[.03,-.04,.05,-.02,.04,-.05],or=[-6,4,-3,7,-5,3],rr={open:-180,receive:-24,peek:-13,rest:0},nr={open:-64,receive:-30,peek:-15,rest:0},no={out:50,drag:80,focus:90},ar=typeof window>"u"?g.useEffect:g.useLayoutEffect,Z=(t,e,i)=>Math.min(i,Math.max(e,t)),Eo=(()=>{let t=null;const e=new Map;return i=>{const s=String(i);if(e.has(s))return e.get(s);let a=[61,139,255];return typeof document<"u"&&(t??(t=document.createElement("canvas").getContext("2d",{willReadFrequently:!0})),t&&(t.clearRect(0,0,1,1),t.fillStyle="#3d8bff",t.fillStyle=s,t.fillRect(0,0,1,1),a=Array.from(t.getImageData(0,0,1,1).data.slice(0,3)))),e.set(s,a),a}})(),ct=(t,e,i)=>t.map((s,a)=>Math.round(s+(e[a]-s)*i)),tt=t=>`rgb(${t[0]}, ${t[1]}, ${t[2]})`,sr=t=>(.2126*t[0]+.7152*t[1]+.0722*t[2])/255,uo=(t,e)=>{const i=new Array(16);for(let s=0;s<4;s++)for(let a=0;a<4;a++)i[s*4+a]=t[a]*e[s*4]+t[4+a]*e[s*4+1]+t[8+a]*e[s*4+2]+t[12+a]*e[s*4+3];return i},Tt=(...t)=>t.reduce(uo),Xe=(t,e,i=0)=>[1,0,0,0,0,1,0,0,0,0,1,0,t,e,i,1],qt=(t,e)=>[t,0,0,0,0,e,0,0,0,0,1,0,0,0,0,1],Ro=t=>{const e=t*Math.PI/180,i=Math.cos(e),s=Math.sin(e);return[1,0,0,0,0,i,s,0,0,-s,i,0,0,0,0,1]},ao=t=>{const e=t*Math.PI/180,i=Math.cos(e),s=Math.sin(e);return[i,0,-s,0,0,1,0,0,s,0,i,0,0,0,0,1]},ir=t=>{const e=t*Math.PI/180,i=Math.cos(e),s=Math.sin(e);return[i,s,0,0,-s,i,0,0,0,0,1,0,0,0,0,1]},Mt=t=>`matrix3d(${t.map(e=>Math.abs(e)<1e-7?0:Number(e.toFixed(6))).join(", ")})`,lr=(t,e,i,s,a)=>{const d=(t?180:224)*e,p=(t?232:176)*e,v=20*e,b=12*e,y=v*.75,$=t?v:v+p*.3,S=t?[0,b,b,0]:[b,b,b,b],N=d-S[0]-S[1]-y*2-10*e,_=Z(s?i+14*e+y:d*.34,Math.min(d*.3,N),N),w=a==="left"?S[0]+5*e+y:a==="center"?(d-_)/2:d-S[1]-5*e-y-_,M=t?d*.8:d*.54;return{book:t,scale:e,w:d,h:p,tabH:v,r:b,shoulder:y,corners:S,tabW:_,tabX:w,frontTop:$,frontH:v+p-$,docW:M,docH:M*(t?1.28:1.22)}},Fo=t=>{const{w:e,h:i,tabX:s,tabW:a,tabH:d,shoulder:p}=t,[v,b,y,$]=t.corners,S=d,N=d+i;return[`M 0 ${S+v}`,`Q 0 ${S} ${v} ${S}`,`L ${s-p} ${S}`,`C ${s} ${S} ${s} 0 ${s+p} 0`,`L ${s+a-p} 0`,`C ${s+a} 0 ${s+a} ${S} ${s+a+p} ${S}`,`L ${e-b} ${S}`,`Q ${e} ${S} ${e} ${S+b}`,`L ${e} ${N-y}`,`Q ${e} ${N} ${e-y} ${N}`,`L ${$} ${N}`,`Q 0 ${N} 0 ${N-$}`,"Z"].join(" ")},To=`#version 300 es
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
}`,cr=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uImage;
uniform float uAlpha;
out vec4 outColor;
void main() {
  outColor = texture(uImage, vUv) * uAlpha;
}`,ur=`#version 300 es
layout(location = 0) in vec2 aCorner;
out vec2 vUv;
void main() {
  vUv = aCorner;
  gl_Position = vec4(aCorner * 2.0 - 1.0, 0.0, 1.0);
}`,fr=`#version 300 es
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
}`,dr=`#version 300 es
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
}`,Mo=(t,e,i)=>{const s=t.createShader(e);return s?(t.shaderSource(s,i),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS)?s:(t.deleteShader(s),null)):null},so=(t,e,i,s)=>{const a=Mo(t,t.VERTEX_SHADER,e),d=Mo(t,t.FRAGMENT_SHADER,i),p=t.createProgram();if(!a||!d||!p)return null;if(t.attachShader(p,a),t.attachShader(p,d),t.linkProgram(p),t.deleteShader(a),t.deleteShader(d),!t.getProgramParameter(p,t.LINK_STATUS))return t.deleteProgram(p),null;const v={};return s.forEach(b=>{v[b]=t.getUniformLocation(p,b)}),{program:p,uniforms:v}},Ao=["uModel","uSize","uDepth","uOrigin","uView","uBleed"],hr=t=>{const e=t.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!0});if(!e)return null;const i=so(e,To,cr,[...Ao,"uImage","uAlpha"]),s=so(e,ur,fr,["uImage","uStep","uSigma"]),a=so(e,To,dr,[...Ao,"uBehind","uRadii","uSpine","uLens","uMorph","uInsideTop","uInsideBottom","uTabRatio","uGutter","uBevel","uStrength","uSplit","uTint","uHaze","uDim","uGlint","uShine","uLight"]);if(!i||!s||!a)return null;const d=e.createVertexArray(),p=e.createBuffer();e.bindVertexArray(d),e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);const v=()=>({texture:e.createTexture(),frame:e.createFramebuffer()}),b=[v(),v(),v()],y={width:0,height:0},$=new Map,S=(w,M)=>{e.uniform1f(w.uniforms.uDepth,M.depth),e.uniform2f(w.uniforms.uOrigin,M.origin[0],M.origin[1]),e.uniform4f(w.uniforms.uView,M.view.x,M.view.y,M.view.width,M.view.height)},N=(w,M)=>{t.width!==w&&(t.width=w),t.height!==M&&(t.height=M),!(y.width===w&&y.height===M)&&(y.width=w,y.height=M,b.forEach(j=>{e.bindTexture(e.TEXTURE_2D,j.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,w,M,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,j.frame),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,j.texture,0)}))},_=(w,M,j,ne,ae)=>{e.bindFramebuffer(e.FRAMEBUFFER,M.frame),e.clear(e.COLOR_BUFFER_BIT),e.bindTexture(e.TEXTURE_2D,w.texture),e.uniform2f(s.uniforms.uStep,j,ne),e.uniform1f(s.uniforms.uSigma,ae),e.drawArrays(e.TRIANGLE_STRIP,0,4)};return{upload(w,M){let j=$.get(w);j||(j=e.createTexture(),$.set(w,j)),e.bindTexture(e.TEXTURE_2D,j),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,M),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)},prune(w){$.forEach((M,j)=>{w.has(j)||(e.deleteTexture(M),$.delete(j))})},render(w){if(e.isContextLost())return;const M=Math.max(1,Math.round(w.view.width*w.dpr)),j=Math.max(1,Math.round(w.view.height*w.dpr));N(M,j);const[ne,ae,fe]=b;e.bindVertexArray(d),e.activeTexture(e.TEXTURE0),e.viewport(0,0,M,j),e.clearColor(0,0,0,0),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.bindFramebuffer(e.FRAMEBUFFER,ne.frame),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(i.program),S(i,w),e.uniform1i(i.uniforms.uImage,0),e.uniform1f(i.uniforms.uBleed,0),w.layers.forEach(ve=>{const we=$.get(ve.key);we&&(e.bindTexture(e.TEXTURE_2D,we),e.uniformMatrix4fv(i.uniforms.uModel,!1,ve.matrix),e.uniform2f(i.uniforms.uSize,ve.width,ve.height),e.uniform1f(i.uniforms.uAlpha,ve.alpha),e.drawArrays(e.TRIANGLE_STRIP,0,4))});const z=w.glass,Pe=z.frost*w.dpr;let xe=ne;Pe>.35&&(e.disable(e.BLEND),e.useProgram(s.program),e.uniform1i(s.uniforms.uImage,0),_(ne,ae,1/M,0,Pe),_(ae,fe,0,1/j,Pe),e.enable(e.BLEND),xe=fe),e.bindFramebuffer(e.FRAMEBUFFER,null),e.clear(e.COLOR_BUFFER_BIT);const V=a.uniforms;e.useProgram(a.program),S(a,w),e.bindTexture(e.TEXTURE_2D,xe.texture),e.uniform1i(V.uBehind,0),e.uniformMatrix4fv(V.uModel,!1,z.matrix),e.uniform2f(V.uSize,z.width,z.height),e.uniform1f(V.uBleed,z.bleed),e.uniform4fv(V.uRadii,z.radii),e.uniform1f(V.uSpine,z.spine),e.uniform1f(V.uLens,z.lens),e.uniform1f(V.uMorph,z.morph),e.uniform3fv(V.uInsideTop,z.insideTop),e.uniform3fv(V.uInsideBottom,z.insideBottom),e.uniform1f(V.uTabRatio,z.tabRatio),e.uniform2fv(V.uGutter,z.gutter),e.uniform1f(V.uBevel,z.bevel),e.uniform1f(V.uStrength,z.strength),e.uniform1f(V.uSplit,z.split),e.uniform4fv(V.uTint,z.tint),e.uniform1f(V.uHaze,z.haze),e.uniform1f(V.uDim,z.dim),e.uniform1f(V.uGlint,z.glint),e.uniform1f(V.uShine,z.shine),e.uniform2fv(V.uLight,z.light),e.drawArrays(e.TRIANGLE_STRIP,0,4)},dispose(){$.forEach(w=>e.deleteTexture(w)),$.clear(),b.forEach(w=>{e.deleteTexture(w.texture),e.deleteFramebuffer(w.frame)}),e.deleteBuffer(p),e.deleteVertexArray(d),e.deleteProgram(i.program),e.deleteProgram(s.program),e.deleteProgram(a.program)}}},So=(t,e,i,s,a,d)=>{const p=Math.max(0,Math.min(d,s/2,a/2));t.beginPath(),t.moveTo(e+p,i),t.arcTo(e+s,i,e+s,i+a,p),t.arcTo(e+s,i+a,e,i+a,p),t.arcTo(e,i+a,e,i,p),t.arcTo(e,i,e+s,i,p),t.closePath()},pr=(t,e)=>{let i=0,s=0,a=t;for(;a&&a!==e;)i+=a.offsetLeft,s+=a.offsetTop,a=a.offsetParent;return a===e?[i,s]:null},mr=t=>!t||t==="transparent"||/rgba?\([^)]*[,/]\s*0\s*\)$/.test(t),xr=(t,e,i,s,a,d)=>{const p=Array.from(e.childNodes).filter(M=>M.nodeType===3).map(M=>M.textContent).join("").trim();if(!p)return;const v=parseFloat(d.fontSize)||12,b=parseFloat(d.lineHeight)||v*1.2,y=i+(parseFloat(d.paddingLeft)||0),$=s+(parseFloat(d.paddingTop)||0),S=a-(parseFloat(d.paddingLeft)||0)-(parseFloat(d.paddingRight)||0);t.font=`${d.fontStyle} ${d.fontWeight} ${d.fontSize} ${d.fontFamily}`,t.fillStyle=d.color,t.textBaseline="middle";const N=M=>{if(t.measureText(M).width<=S)return M;let j=M;for(;j.length>1&&t.measureText(`${j}…`).width>S;)j=j.slice(0,-1);return`${j.trimEnd()}…`};if(d.whiteSpace==="nowrap"){t.fillText(N(p),y,$+b/2);return}let _="",w=0;p.split(/\s+/).forEach(M=>{const j=_?`${_} ${M}`:M;_&&t.measureText(j).width>S?(t.fillText(_,y,$+b*(w+.5)),w+=1,_=M):_=j}),_&&t.fillText(_,y,$+b*(w+.5))},Lo=(t,e,i)=>{const s=Math.max(1,t.offsetWidth),a=Math.max(1,t.offsetHeight),d=document.createElement("canvas");d.width=Math.max(1,Math.round(s*e)),d.height=Math.max(1,Math.round(a*e));const p=[],v=d.getContext("2d");if(!v)return{canvas:d,pending:p};v.scale(e,e);const b=(y,$,S)=>{const N=getComputedStyle(y);if(N.display==="none"||N.visibility==="hidden")return;const _=y.offsetWidth,w=y.offsetHeight,M=parseFloat(N.borderTopLeftRadius)||0,j=y!==t&&Number.isFinite(parseFloat(N.opacity))?parseFloat(N.opacity):1;if(v.save(),v.globalAlpha*=j,mr(N.backgroundColor)||(v.fillStyle=N.backgroundColor,So(v,$,S,_,w,M),v.fill()),N.overflow!=="visible"&&(So(v,$,S,_,w,M),v.clip()),y instanceof HTMLImageElement){if(!y.complete||!y.naturalWidth)p.push(y);else if(!i){const ne=Math.max(_/y.naturalWidth,w/y.naturalHeight),ae=_/ne,fe=w/ne;v.drawImage(y,(y.naturalWidth-ae)/2,(y.naturalHeight-fe)/2,ae,fe,$,S,_,w)}}else xr(v,y,$,S,_,N),Array.from(y.children).forEach(ne=>{const ae=pr(ne,t);ae&&b(ne,ae[0],ae[1])});v.restore()};return b(t,0,0),{canvas:d,pending:p}},vr=(t,e,i,s)=>{const a=document.createElement("canvas");a.width=Math.max(1,Math.round(t.w*s)),a.height=Math.max(1,Math.round((t.tabH+t.h)*s));const d=a.getContext("2d");if(!d)return a;d.scale(s,s);const p=d.createLinearGradient(0,0,0,t.tabH+t.h);return p.addColorStop(0,e),p.addColorStop(1,i),d.fillStyle=p,d.fill(new Path2D(Fo(t))),a},io=({title:t,description:e})=>f.jsxs("div",{className:"folder-doc",children:[t?f.jsx("span",{className:"folder-doc-title",children:t}):f.jsx("span",{className:"folder-doc-heading"}),e&&f.jsx("span",{className:"folder-doc-text",children:e}),f.jsx("span",{className:"folder-doc-line",style:{width:"92%"}}),f.jsx("span",{className:"folder-doc-line",style:{width:"84%"}}),f.jsx("span",{className:"folder-doc-line",style:{width:"88%"}}),f.jsx("span",{className:"folder-doc-block"}),f.jsx("span",{className:"folder-doc-line",style:{width:"80%"}}),f.jsx("span",{className:"folder-doc-line",style:{width:"62%"}})]}),gr=t=>g.isValidElement(t)?t:typeof t=="string"||typeof t=="number"?f.jsx(io,{title:String(t)}):t&&typeof t=="object"?t.image?f.jsx("div",{className:"folder-photo",children:f.jsx("img",{src:t.image,alt:t.alt??t.title??"",draggable:!1})}):t.content?t.content:f.jsx(io,{title:t.title,description:t.description}):f.jsx(io,{}),br=(t,e,i,s,a)=>{const d=a.w/2,p=a.frontTop+a.frontH/2;if(i==="open"){if(s==="row"){const N=10*a.scale,_=Math.min(.8,(a.w*1.86-N*(e-1))/(e*a.docW)),w=a.docW*_+N;return{x:a.w/2+(t-(e-1)/2)*w,y:p,z:0,r:0,ry:0,s:_}}if(s==="stack"){const _=Math.min(26*a.scale,a.h*.36/Math.max(1,e-1)),w=a.frontTop+14*a.scale+(e-1)*_;return{x:a.w,y:w+a.docH*.74/2-t*_,z:0,r:0,ry:0,s:.74}}const y=e>4?.58:e>3?.64:.72,$=e===2?a.w:Math.min(a.w*1.3,a.w*.6*(e-1)),S=e>1?$/2-t*$/(e-1):a.w*.5;return{x:a.w/2+S,y:p+Co[t]*a.h,z:0,r:$o[t],ry:0,s:y}}const b=(i==="rest"?er:tr)[t]??{x:.06,y:0,r:Jo[t]??0};return{x:d+b.x*a.w,y:p+b.y*a.h+t*.8*a.scale,z:0,r:b.r,ry:0,s:1}},yr=(t,e,i,s,a,d)=>{const p=ro[t]??ro[ro.length-1],v=a.tabH+a.h-5*a.scale-a.docH/2,b=(e-1)/2;if(i==="open"){const _=a.tabH-a.h*.02;if(s==="stack"){const ae=Math.min(30*a.scale,a.h*.62/Math.max(1,e-1)),fe=1.04-t*.05;return{x:a.w/2,y:a.tabH+a.h*.1-t*ae-a.docH*(1.04-fe)/2,z:-t*18*a.scale,r:0,ry:0,s:fe}}const w=12*a.scale,M=Math.min(.94,(a.w*2.3-w*(e-1))/(e*a.docW)),j=a.docW*M+w,ne=s==="row";return{x:a.w/2+(t-b)*j,y:_+(ne?0:Co[t]*a.h*.7),z:0,r:ne?0:$o[t]*.55,ry:0,s:M}}const y=i==="receive"?1.7:i==="peek"?1.3:1,$=a.w/2+p.x*a.w*y;if(i==="rest")return{x:$,y:v-p.rise*a.h,z:0,r:p.r,ry:0,s:1};const S=i==="peek"&&d!=null?Math.max(0,1-Math.abs(d-$)/(a.w*.32)):0,N=p.rise+(i==="receive"?.03:.1);return{x:$,y:v-N*a.h-S*S*a.h*.09,z:0,r:p.r*1.6,ry:0,s:1}},Fr=({items:t,label:e,mode:i="flap",variant:s="solid",color:a="#3d8bff",paperColor:d="#ffffff",tabPosition:p="right",layout:v="spread",size:b=1,openOn:y="click",open:$,defaultOpen:S=!1,onOpenChange:N,onItemClick:_,onItemDrop:w,draggable:M=!0,zoomOnClick:j=!0,peek:ne=!0,intro:ae=!0,tilt:fe=.5,bounce:z=.4,speed:Pe=1,frost:xe=.25,closeOnOutsideClick:V=!0,theme:ve="dark",className:we="",style:Ce,children:Ee})=>{const ut=g.useRef(null),Re=g.useRef(null),ft=g.useRef(null),Ye=g.useRef(null),ie=g.useRef(null),Q=g.useRef(null),u=g.useRef(null),Te=g.useRef([]),J=g.useRef(null),ge=g.useRef(null),Ne=g.useRef(null),[qe,He]=g.useState(S),[Me,le]=g.useState(0),[ot,U]=g.useState([]),[Fe,be]=g.useState(!1),_e=$!==void 0,ue=_e?!!$:qe,$e=i==="book",Ge=s==="glass",dt=g.useMemo(()=>{const c=g.Children.toArray(Ee).filter(g.isValidElement);return(c.length?c:t!=null&&t.length?t:Qo).slice(0,Zo)},[Ee,t]),rt=dt.length,We=Math.max(.3,Number(b)||1),m=lr($e,We,Me,!!e,p),E=m.tabH+m.h,C=$e?{x:-.75*m.w,y:-.25*E,width:2.5*m.w,height:1.5*E}:{x:-.25*m.w,y:-.1*E,width:1.5*m.w,height:1.3*E};ar(()=>{var o;const c=J.current;if(!c)return;let A=!0;const I=()=>{A&&le(c.offsetWidth)};return I(),(o=document.fonts)==null||o.ready.then(I),()=>{A=!1}},[e,We]);const q=g.useCallback(c=>{const A=typeof c=="function"?c(ue):c;_e||He(A),A!==ue&&(N==null||N(A))},[_e,ue,N]),re=g.useRef(q);re.current=q;const K=Eo(a),pe=Eo(d),ye=ct(K,[0,0,0],.16),De=tt(ct(K,[0,0,0],.08)),T=tt(ye),R=g.useRef(null);R.current={open:ue,layout:v,openOn:y,peek:ne,intro:ae,draggable:M,zoomOnClick:j,closeOnOutsideClick:V,onItemClick:_,onItemDrop:w,tilt:Z(fe,0,1.5),bounce:Z(z,0,1),speed:Z(Pe,.2,3),frost:Z(xe,0,1),count:rt,entries:dt,glass:Ge,light:ve==="light",tint:K,insideTop:De,insideBottom:T,insideTone:[ct(K,[0,0,0],.08).map(c=>c/255),ye.map(c=>c/255)],content:`${i}|${We}|${d}|${a}|${m.tabX}|${m.tabW}`,depth:Math.round(Math.max(m.w,m.h)*5),view:C,g:m},g.useEffect(()=>{var po,mo;const c=ut.current;if(!c)return;const A=((po=window.matchMedia)==null?void 0:po.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,I=r=>({value:r,velocity:0}),o={raf:0,last:0,ready:!1,hovered:!1,pressed:!1,pointerX:0,pointerY:0,deskX:0,deskY:0,hoveredItem:-1,phase:"rest",previous:"rest",changedAt:0,front:I(0),rx:I(0),ry:I(0),lift:I(0),squash:I(1),items:[],focus:-1,drag:null,receiving:!1,receiveUntil:0,suppressClick:!1,dropCount:0,intro:{phase:"done",start:0,opening:!1},anchor:I(0),appear:1,content:{key:"",entries:null,renderer:null}},Ae=r=>{for(;o.items.length<r;)o.items.push({x:I(0),y:I(0),z:I(0),r:I(0),ry:I(0),s:I(1),hover:I(0),mx:I(0),my:I(0),alpha:I(1),place:"inside",rank:0,layer:"inside",elevated:!1,insertUntil:0,insertFrom:null,outX:0,outY:0,outR:0,outS:1,outOrder:0,localX:0,localY:0,fresh:!0});o.items.length>r&&(o.items.length=r,o.focus>=r&&(o.focus=-1),ht())},ht=()=>{const r=[];o.items.forEach((n,l)=>{n.place==="out"&&r.push(l)}),U(n=>n.length===r.length&&n.every((l,h)=>l===r[h])?n:r)},Y=(r,n,l,h,L)=>{const ee=l*l,ce=2*h*l,W=Math.max(1,Math.ceil(L/Ko)),O=L/W;for(let F=0;F<W;F++)r.velocity+=(ee*(n-r.value)-ce*r.velocity)*O,r.value+=r.velocity*O;return Math.abs(n-r.value)>.01||Math.abs(r.velocity)>.01},me=(r,n)=>{r.value=n,r.velocity=0},$t=()=>{const{g:r}=R.current;return r.book?r.w/2*Z(-o.front.value/180,0,1):0},pt=(r,n)=>{const l=c.getBoundingClientRect(),h=c.offsetWidth/(l.width||1),L=c.offsetHeight/(l.height||1);return[(r-l.left)*h,(n-l.top)*L]},At=()=>{const r=c.getBoundingClientRect();let n=0,l=0,h=window.innerWidth,L=window.innerHeight;for(let W=c.parentElement;W&&W!==document.body;W=W.parentElement){const O=getComputedStyle(W);if(/(hidden|clip|auto|scroll)/.test(`${O.overflowX} ${O.overflowY}`)){const F=W.getBoundingClientRect();n=Math.max(n,F.left),l=Math.max(l,F.top),h=Math.min(h,F.right),L=Math.min(L,F.bottom);break}}const ee=c.offsetWidth/(r.width||1),ce=c.offsetHeight/(r.height||1);return{left:(n-r.left)*ee,top:(l-r.top)*ce,right:(h-r.left)*ee,bottom:(L-r.top)*ce}},Ct=(r,n)=>{const{g:l}=R.current,h=$t();if(l.book){const L=o.front.value<-90?h-l.w:h;return r>=L&&r<=h+l.w&&n>=l.tabH*.5&&n<=l.tabH+l.h}return r>=0&&r<=l.w&&n>=0&&n<=l.tabH+l.h},St=r=>{const{g:n}=R.current,l=n.docW*r.s.value/2,h=n.docH*r.s.value/2;if(n.book){if(o.front.value<-60)return!1;const L=$t();return r.x.value-l<L+n.w&&r.x.value+l>L&&r.y.value+h>n.tabH&&r.y.value-h<n.tabH+n.h}return o.front.value<-45?!1:r.y.value+h>n.frontTop+4*n.scale&&r.x.value+l>0&&r.x.value-l<n.w},Ft=r=>{if(r.length<2)return[0,0];const n=r[0],l=r[r.length-1],h=Math.max(.016,(l[0]-n[0])/1e3);return[(l[1]-n[1])/h,(l[2]-n[2])/h]},Vt=(r,n)=>{var l;return r.open?"open":o.receiving||n<o.receiveUntil?"receive":r.peek&&o.hovered&&!((l=o.drag)!=null&&l.active)?"peek":"rest"},bt=(r,n,l,h)=>{if(h.g.book)return br(r,n,l,h.layout,h.g);const L=o.hovered?(o.pointerX+1)/2*h.g.w:null;return yr(r,n,l,h.layout,h.g,L)},Kt=(r,n,l)=>{const{g:h}=l;return r.insertFrom==="side"?{...n,x:Math.max(n.x,h.w+h.docW*.54*n.s)}:{...n,y:Math.min(n.y,h.frontTop-h.docH*.5*n.s-8*h.scale)}},Dt=r=>{var Ie,lt,zt;o.raf=0;const n=R.current,{g:l}=n;Ae(n.count);const h=r/1e3,L=o.last?Math.min(.05,(r-o.last)/1e3):1/60;o.last=r;const ee=A?1:1-.72*n.bounce,ce=Rt*(l.book?1.55:2)*n.speed,W=Rt*2.1*n.speed,O=Rt*1.6*n.speed,F=Vt(n,h);F!==o.phase&&(o.previous=o.phase,o.phase=F,o.changedAt=r);const Se=(r-o.changedAt)/1e3;let P=h<o.receiveUntil;const Le=[];o.items.forEach((x,X)=>{x.place==="inside"&&Le.push(X)});const se=Le.length;Le.forEach((x,X)=>{o.items[x].rank=X}),o.focus>=0&&F!=="open"&&((Ie=o.items[o.focus])==null?void 0:Ie.place)==="inside"&&(o.focus=-1);const te=o.intro;o.ready||(te.opening=n.open),te.phase==="run"&&!te.opening&&(n.open||(lt=o.drag)!=null&&lt.active)&&(te.phase="done");const Ve=te.phase==="run"?h-te.start:0,ke=te.phase!=="done"&&!te.opening,vt=(.16+se*.085+.3)/n.speed,Ke=ke&&Ve<vt,Ze=x=>(.16+(se-1-x)*.085)/n.speed,Pt=(x,X)=>l.book?{...X,r:X.r+(x.rank%2?7:-6),s:X.s*1.12}:{...X,y:X.y-(l.h*.8+l.docH*.5),r:X.r+(x.rank%2?9:-7)};te.phase==="run"&&(P=!0,Ve>(te.opening?1.4:vt+1)/n.speed&&(te.phase="done"));const Bt=te.phase==="wait"?0:te.phase==="run"?Z(Ve/(.34/n.speed),0,1):1;o.appear=1-(1-Bt)**3;const Nt=o.previous==="open"&&F!=="open"&&!A?((l.book?.1:.06)+.035*se)/n.speed:0,Ut=Se<Nt?o.previous:F,_t=Ke?l.book?-150:-42:(l.book?rr:nr)[Ut];if(!o.ready){o.ready=!0;const x=te.phase!=="done"&&te.opening;x&&(o.phase="rest",o.previous="rest"),me(o.front,x?0:_t),me(o.anchor,ke?1:0),o.items.forEach(X=>{const oe=bt(X.rank,se,x?"rest":F,n),Be=ke?Pt(X,oe):oe;me(X.x,Be.x),me(X.y,Be.y),me(X.z,Be.z),me(X.r,Be.r),me(X.ry,Be.ry),me(X.s,Be.s),me(X.alpha,ke?0:1),me(X.hover,ke&&l.book?3:0),X.fresh=!1})}if(te.phase==="wait"){nt(),o.last=0;return}P=Y(o.front,_t,ce,ee,L)||P;const Qe=.2+.35*n.bounce;l.book&&o.front.value<-180?(o.front.value=-360-o.front.value,o.front.velocity=-o.front.velocity*Qe):o.front.value>0&&(o.front.value=-o.front.value,o.front.velocity=-o.front.velocity*Qe),Se<Nt&&(P=!0),P=Y(o.anchor,ke?1:0,ce,1,L)||P;const Oe=o.hovered&&!A;P=Y(o.rx,Oe?-o.pointerY*8*n.tilt:0,O,1,L)||P,P=Y(o.ry,Oe?o.pointerX*10*n.tilt:0,O,1,L)||P,P=Y(o.lift,o.hovered&&F!=="open"?1:0,O,1,L)||P,P=Y(o.squash,o.pressed?.975:1,Rt*3.2,.6,L)||P;const Xt=F==="open"&&o.previous!=="open",je=(zt=o.drag)!=null&&zt.active?o.drag:null,Je=o.hoveredItem,gt=!je&&Je>=0&&o.items[Je]?o.items[Je]:null,wt=gt&&gt.place==="inside"&&F==="open"?bt(gt.rank,se,"open",n):null,Jt=Z((l.tabH+l.h)*1.18/l.docH,1.2,2.2),D=l.book?l.tabH+l.h/2:l.tabH+l.h*.36;o.items.forEach((x,X)=>{if(x.fresh){const Ue=bt(x.rank,se,"rest",n);me(x.x,Ue.x),me(x.y,Ue.y),me(x.r,Ue.r),x.fresh=!1}let oe,Be=W,Ht=ee,et=0,xo=1,Wt=!1;if(o.focus===X)oe={x:l.w/2,y:D,z:0,r:0,ry:0,s:Jt},et=2.4,x.layer="focus";else if(je&&je.index===X){const[Ue]=Ft(je.samples);oe={x:o.deskX+je.grabX,y:o.deskY+je.grabY,z:0,r:Z(Ue*.012,-14,14),ry:0,s:je.scale*1.05},Be=Rt*5,Ht=.78,et=1.4,!x.elevated&&!St(x)&&(x.elevated=!0),x.layer=x.elevated?"drag":"inside"}else if(x.place==="out")oe={x:x.outX,y:x.outY,z:0,r:x.outR,ry:0,s:x.outS},et=Je===X?1:.15,Wt=Je===X,x.layer="out";else{const Ue=Xt&&l.book?se-1-x.rank:x.rank,Ot=A?0:Xt?((l.book?.16:.05)+Ue*(l.book?.055:.045))/n.speed:Ue*.03/n.speed,Et=Se>=Ot?F:o.previous;if(oe=bt(x.rank,se,Et,n),Se<Ot&&(P=!0),ke&&Ve<Ze(x.rank))oe=Pt(x,oe),xo=0,et=l.book?3:0,x.layer="inside";else if(x.insertUntil>h)P=!0,oe=Kt(x,oe,n),x.layer="drag",et=.6;else if(x.insertUntil=0,x.elevated=!1,x.layer="inside",wt&&Et==="open")if(Je===X)oe={...oe,y:oe.y-6*l.scale,r:oe.r*.2,ry:0,s:oe.s*1.05},et=1,Wt=!0;else{const vo=oe.x-wt.x;oe={...oe,x:oe.x+Math.sign(vo)*12*l.scale*Math.max(0,1-Math.abs(vo)/(l.w*1.1))},et=.2}else Et==="open"&&(et=.2)}if(P=Y(x.x,oe.x,Be,Ht,L)||P,P=Y(x.y,oe.y,Be,Ht,L)||P,!l.book&&x.layer==="inside"){const Ue=x.r.value*Math.PI/180,Ot=(l.docW*Math.abs(Math.sin(Ue))+l.docH*Math.abs(Math.cos(Ue)))*x.s.value/2,Et=l.tabH+l.h-2*l.scale-Ot;x.y.value>Et&&(x.y.value=Et,x.y.velocity>0&&(x.y.velocity*=-.25))}P=Y(x.z,oe.z,W,ee,L)||P,P=Y(x.r,oe.r,Be,Ht,L)||P,P=Y(x.ry,oe.ry,W,ee,L)||P,P=Y(x.s,oe.s,W,ee,L)||P,P=Y(x.hover,et,W,ee,L)||P,P=Y(x.alpha,xo,Rt*3*n.speed,1,L)||P,P=Y(x.mx,Wt?x.localX*7*l.scale:0,O,.85,L)||P,P=Y(x.my,Wt?x.localY*7*l.scale:0,O,.85,L)||P}),nt(),P||je?o.raf=requestAnimationFrame(Dt):o.last=0},jt=(r,n)=>{if(o.content.key===n.content&&o.content.entries===n.entries&&o.content.renderer===r)return;o.content={key:n.content,entries:n.entries,renderer:r};const l=Math.min(window.devicePixelRatio||1,2),h=new Set(["back"]);r.upload("back",vr(n.g,n.insideTop,n.insideBottom,l)),Te.current.slice(0,n.count).forEach((L,ee)=>{if(!L)return;const ce=`item-${ee}`;h.add(ce);let W=Lo(L,l,!1);try{r.upload(ce,W.canvas)}catch{W=Lo(L,l,!0),r.upload(ce,W.canvas)}W.pending.forEach(O=>O.addEventListener("load",mt,{once:!0}))}),r.prune(h)},nt=()=>{const r=R.current,{w:n,h:l,tabH:h,frontTop:L,frontH:ee,docW:ce,docH:W,scale:O,book:F}=r.g,Se=n/2,P=h+l/2,Le=o.front.value,se=Le*Math.PI/180,te=F?Z(-Le/180,0,1):0,Ve=n/2*te*(1-o.anchor.value),ke=(1+o.lift.value*.012)*o.squash.value*(.94+.06*o.appear);c.style.opacity=o.appear<.999?o.appear.toFixed(3):"";const vt=Tt(Xe(Se,P),Ro(o.rx.value),ao(o.ry.value),qt(ke,ke),Xe(-Se,-P)),Ke=uo(vt,Xe(Ve,0)),Ze=F&&Le<-90,Pt=Ze?"3":"40";Re.current&&(Re.current.style.transform=Mt(Ke),Re.current.style.setProperty("--folder-gutter",te.toFixed(3)),Re.current.style.setProperty("--folder-label",(F?1:1-Z((-Le-18)/26,0,1)).toFixed(3)));const Bt=F?Tt(Ke,Xe(0,L,2*O*(1-te)),ao(Le)):Tt(Ke,Xe(0,h+l,2*O),Ro(Le),Xe(0,-ee)),Qt=F?Math.sin(se)*-.42+Math.cos(se)*.9:Math.sin(se)*.5+Math.cos(se)*.86,Nt=(Ze?-Qt:Qt)/(F?.9:.86),Ut=Z((Nt-1)*.9,0,.18),_t=Z((1-Nt)*(F?.5:.22),0,.5),Qe=ft.current;Qe&&(Qe.style.transform=Mt(Bt),Qe.style.zIndex=Pt,Qe.dataset.face=Ze?"inner":"outer",Qe.style.setProperty("--folder-glint",Ut.toFixed(3)),Qe.style.setProperty("--folder-dim",_t.toFixed(3)));const Oe=F?Math.max(0,Math.sin(-se)):0;if(Ye.current&&(Ye.current.style.transform=Mt(uo(Ke,Xe(0,F?h:h+l))),Ye.current.style.opacity=(.75+o.lift.value*.25).toFixed(3)),ie.current&&(ie.current.style.transform=Mt(Tt(Ke,Xe(n*Oe*.12,L+l*Oe*.04),qt(Math.cos(se),1))),ie.current.style.opacity=(Ze?1-Oe*.7:0).toFixed(3)),Q.current){const D=n*Math.cos(se)+n*Oe*.36;Q.current.style.transform=Mt(Tt(Ke,Xe(0,L+l*Oe*.03),qt(D/n,1))),Q.current.style.zIndex=D>0?"39":"2",Q.current.style.opacity=(Z(Oe*4,0,1)*(1-Oe*.45)).toFixed(3)}const Xt=o.items.map((D,Ie)=>[D,Ie]).filter(([D])=>D.layer==="out").sort((D,Ie)=>D[0].outOrder-Ie[0].outOrder).map(([,D])=>D),je=[];o.items.forEach((D,Ie)=>{const lt=Te.current[Ie],zt=3*O+D.z.value+D.hover.value*26*O,x=Tt(vt,Xe(D.x.value+D.mx.value,D.y.value+D.my.value,zt),ao(D.ry.value),ir(D.r.value),qt(D.s.value,D.s.value),Xe(-ce/2,-W/2));let X=10+r.count-D.rank;D.layer==="inside"&&o.phase==="open"&&o.hoveredItem===Ie&&(X=30),D.layer==="out"&&(X=no.out+Xt.indexOf(Ie)),D.layer==="drag"&&(X=no.drag),D.layer==="focus"&&(X=no.focus),je.push({index:Ie,matrix:x,layer:X,alpha:Z(D.alpha.value,0,1),inside:D.layer==="inside"}),lt&&(lt.style.transform=Mt(x),lt.style.zIndex=String(X),lt.style.setProperty("--folder-lift",Z(D.hover.value,0,2.4).toFixed(3)),lt.style.opacity=D.alpha.value<.995?Math.max(0,D.alpha.value).toFixed(3):"")});const Je=u.current,gt=Ne.current;if(!Je||!gt||!r.glass)return;Je.style.zIndex=Pt,jt(gt,r);const wt=[];Ze||(wt.push({key:"back",matrix:Ke,width:n,height:h+l,alpha:1}),je.filter(D=>D.inside).sort((D,Ie)=>D.layer-Ie.layer).forEach(D=>wt.push({key:`item-${D.index}`,matrix:D.matrix,width:ce,height:W,alpha:D.alpha})));const Jt=Math.min(window.devicePixelRatio||1,2);gt.render({dpr:Jt,depth:r.depth,origin:[Se,P],view:r.view,layers:wt,glass:{matrix:Bt,width:n,height:ee,radii:F?[0,r.g.r,r.g.r,0]:[r.g.r,r.g.r,r.g.r,r.g.r],spine:F?n*2:0,bleed:Ze?2:0,morph:F?Z((te-.55)/.45,0,1)**2:0,insideTop:r.insideTone[0],insideBottom:r.insideTone[1],tabRatio:h/(h+l),gutter:[12*O,F?.12*te:0],bevel:12*O,strength:14*O,split:.26,lens:.02,frost:r.frost*6*O,tint:[r.tint[0]/255,r.tint[1]/255,r.tint[2]/255,r.light?.1:.14],haze:.04+r.frost*.1,dim:_t*.8,glint:Ut,shine:r.light?.72:.85,light:Ze?[.55,-.83]:[-.55,-.83]}})},de=()=>{o.raf||(o.raf=requestAnimationFrame(Dt))},yt=()=>{o.intro.phase==="wait"&&(o.intro.phase="run",o.intro.start=performance.now()/1e3,de())},mt=()=>{o.content.key="",de()},xt=()=>{const r=o.drag,n=r?o.items[r.index]:null;o.receiving=!!(r!=null&&r.active&&n&&(n.place==="out"||n.elevated)&&Ct(o.deskX,o.deskY))},Lt=r=>{const n=o.items[r.index];n&&(r.active=!0,r.grabX=n.x.value-r.downX,r.grabY=n.y.value-r.downY,r.scale=n.place==="out"?n.outS:n.s.value,r.clip=At(),o.suppressClick=!0,o.focus===r.index&&(o.focus=-1),n.elevated=n.place==="out"||!St(n),c.dataset.dragging="")},Zt=(r,n)=>{var Ve,ke;const l=R.current,h=o.items[r.index];if(o.receiving=!1,delete c.dataset.dragging,!h)return;const L=performance.now()/1e3,[ee,ce]=n?[0,0]:Ft(r.samples);if(Ct(o.deskX,o.deskY)){const vt=h.place==="out"||h.elevated;h.place="inside",vt&&!A&&(h.insertUntil=L+.24/l.speed,h.insertFrom=l.g.book?o.front.value<-90?null:"side":"top",h.insertFrom||(h.insertUntil=0),o.receiveUntil=h.insertUntil?h.insertUntil+.14/l.speed:0),h.elevated=!1,ht(),(Ve=l.onItemDrop)==null||Ve.call(l,l.entries[r.index],r.index,!0);return}const W=r.clip??At(),O=l.g.docW*r.scale/2,F=l.g.docH*r.scale/2,Se=o.deskX+r.grabX+Z(ee,-2400,2400)*.09,P=o.deskY+r.grabY+Z(ce,-2400,2400)*.09;h.place="out",h.elevated=!0;const Le=8*l.g.scale,se=O*1.08+Le,te=F*1.08+Le;h.outX=Z(Se,W.left+se,Math.max(W.left+se,W.right-se)),h.outY=Z(P,W.top+te,Math.max(W.top+te,W.bottom-te)),h.outR=Z(h.r.value*.5+Z(ee,-2400,2400)*.003+or[r.index%6]*.6,-12,12),h.outS=r.scale,o.dropCount+=1,h.outOrder=o.dropCount,ht(),(ke=l.onItemDrop)==null||ke.call(l,l.entries[r.index],r.index,!1)},at=r=>{var ee,ce,W;const n=o.drag;if(n&&r.pointerId===n.id){const[O,F]=pt(r.clientX,r.clientY);o.deskX=O,o.deskY=F;const Se=performance.now();for(n.samples.push([Se,O,F]);n.samples.length>2&&Se-n.samples[0][0]>100;)n.samples.shift();if(!n.active){const P=r.pointerType==="touch"?8:4;Math.hypot(r.clientX-n.clientX,r.clientY-n.clientY)>P&&Lt(n)}n.active&&xt(),de()}if(r.pointerType==="touch")return;const l=c.getBoundingClientRect();o.pointerX=Z((r.clientX-l.left)/l.width*2-1,-1.5,1.5),o.pointerY=Z((r.clientY-l.top)/l.height*2-1,-1.5,1.5);const h=(ce=(ee=r.target).closest)==null?void 0:ce.call(ee,"[data-folder-item]"),L=h&&c.contains(h)?Number(h.getAttribute("data-folder-item")):-1;if(o.hoveredItem=L,h&&L>=0&&!((W=o.drag)!=null&&W.active)){const O=h.getBoundingClientRect(),F=o.items[L];F&&(F.localX=Z((r.clientX-O.left)/O.width*2-1,-1,1),F.localY=Z((r.clientY-O.top)/O.height*2-1,-1,1))}o.hovered||(o.hovered=!0,R.current.openOn==="hover"&&re.current(!0)),de()},st=r=>{var n;r.pointerType==="touch"||(n=o.drag)!=null&&n.active||(o.hovered=!1,o.pressed=!1,o.hoveredItem=-1,R.current.openOn==="hover"&&re.current(!1),de())},kt=r=>{var l,h;if(r.button>0)return;o.suppressClick=!1;const n=(h=(l=r.target).closest)==null?void 0:h.call(l,"[data-folder-item]");if(n&&c.contains(n)&&R.current.draggable){const[L,ee]=pt(r.clientX,r.clientY);o.deskX=L,o.deskY=ee,o.drag={index:Number(n.getAttribute("data-folder-item")),id:r.pointerId,clientX:r.clientX,clientY:r.clientY,downX:L,downY:ee,grabX:0,grabY:0,scale:1,clip:null,active:!1,samples:[[performance.now(),L,ee]]};try{n.setPointerCapture(r.pointerId)}catch{o.drag.id=r.pointerId}}else o.pressed=!0;de()},It=r=>{o.pressed=!1;const n=o.drag;n&&r.pointerId===n.id&&(o.drag=null,n.active&&Zt(n,r.type==="pointercancel")),de()},fo=r=>{if(c.contains(r.target))return;const n=R.current;o.focus>=0&&(o.focus=-1,de()),n.open&&n.closeOnOutsideClick&&re.current(!1)},ho=r=>{if(r.key!=="Escape")return;if(o.focus>=0){o.focus=-1,de();return}const n=R.current;n.open&&n.closeOnOutsideClick&&re.current(!1)};c.addEventListener("pointermove",at),c.addEventListener("pointerleave",st),c.addEventListener("pointerdown",kt),window.addEventListener("pointerup",It),window.addEventListener("pointercancel",It),document.addEventListener("pointerdown",fo),document.addEventListener("keydown",ho),(mo=document.fonts)==null||mo.ready.then(mt);let it=null;return R.current.intro&&!A&&(o.intro.phase="wait",c.style.opacity="0",typeof IntersectionObserver>"u"?yt():(it=new IntersectionObserver(r=>{r.some(n=>n.isIntersecting)&&(it==null||it.disconnect(),yt())},{threshold:.2}),it.observe(c))),ge.current={wake:de,invalidate:mt,consumeClick:()=>o.suppressClick?(o.suppressClick=!1,!0):!1,interactive:r=>{var n;return R.current.open||((n=o.items[r])==null?void 0:n.place)==="out"||o.focus===r},select:r=>{var l;const n=R.current;n.zoomOnClick&&(o.focus=o.focus===r?-1:r),(l=n.onItemClick)==null||l.call(n,n.entries[r],r),de()},blur:()=>o.focus<0?!1:(o.focus=-1,de(),!0)},de(),()=>{cancelAnimationFrame(o.raf),c.removeEventListener("pointermove",at),c.removeEventListener("pointerleave",st),c.removeEventListener("pointerdown",kt),window.removeEventListener("pointerup",It),window.removeEventListener("pointercancel",It),document.removeEventListener("pointerdown",fo),document.removeEventListener("keydown",ho),it==null||it.disconnect(),ge.current=null}},[]),g.useEffect(()=>{var o;if(!Ge)return;const c=u.current;if(!c)return;const A=hr(c);if(!A)return;Ne.current=A,be(!0);const I=Ae=>{Ae.preventDefault(),Ne.current=null,be(!1)};return c.addEventListener("webglcontextlost",I),(o=ge.current)==null||o.invalidate(),()=>{c.removeEventListener("webglcontextlost",I),A.dispose(),Ne.current===A&&(Ne.current=null),be(!1)}},[Ge]),g.useEffect(()=>{var c;(c=ge.current)==null||c.wake()});const k=()=>{var c;(c=ge.current)!=null&&c.blur()||y!=="hover"&&q(!ue)},B=(c,A)=>{const I=ge.current;if(I){if(I.consumeClick()){c.stopPropagation();return}I.interactive(A)&&(c.stopPropagation(),I.select(A))}},H={"--folder-rgb":K.join(", "),"--folder-base":tt(K),"--folder-front-top":tt(ct(K,[255,255,255],.12)),"--folder-front-bottom":tt(ct(K,[0,0,0],.06)),"--folder-inside-top":De,"--folder-inside-bottom":T,"--folder-tab-ink":sr(ye)>.6?"rgba(0, 0, 0, 0.72)":"rgba(255, 255, 255, 0.92)","--folder-paper":tt(pe),"--folder-paper-ink":tt(ct(pe,[0,0,0],.11)),"--folder-paper-ink-strong":tt(ct(pe,[0,0,0],.28)),"--folder-paper-text":tt(ct(pe,[0,0,0],.72)),"--folder-w":`${m.w}px`,"--folder-h":`${m.h}px`,"--folder-tab-h":`${m.tabH}px`,"--folder-front-y":`${m.frontTop}px`,"--folder-front-h":`${m.frontH}px`,"--folder-r":`${m.r}px`,"--folder-front-radius":$e?`0 ${m.r}px ${m.r}px 0`:`${m.r}px`,"--folder-doc-w":`${m.docW}px`,"--folder-doc-h":`${m.docH}px`,"--folder-frost":`${(1.5+Z(xe,0,1)*10)*We}px`,"--folder-depth":`${R.current.depth}px`,"--folder-scale":We,...Ce},G=Fo(m);return f.jsxs("div",{ref:ut,className:`folder-root${we?` ${we}`:""}`,"data-mode":$e?"book":"flap","data-variant":s,"data-theme":ve==="light"?"light":"dark","data-open":ue?"":void 0,"data-gl":Ge&&Fe?"":void 0,"data-draggable":M?"":void 0,style:H,children:[f.jsxs("div",{className:"folder-stage",role:"button",tabIndex:0,"aria-expanded":ue,"aria-label":e?`${e} folder`:"Folder",onClick:k,onKeyDown:c=>{c.target===c.currentTarget&&(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),k())},children:[f.jsx("span",{ref:Ye,className:"folder-layer folder-ground","aria-hidden":"true"}),$e&&f.jsx("span",{ref:ie,className:"folder-layer folder-cast","aria-hidden":"true"}),f.jsxs("div",{ref:Re,className:"folder-layer folder-back","aria-hidden":"true",children:[f.jsx("div",{className:"folder-back-fill",style:{clipPath:`path('${G}')`},children:$e&&f.jsx("span",{className:"folder-gutter"})}),f.jsx("svg",{className:"folder-back-rim",width:m.w,height:E,viewBox:`0 0 ${m.w} ${E}`,children:f.jsx("path",{className:"folder-focus",d:G})}),e&&f.jsx("span",{className:"folder-tab-text",style:{left:m.tabX,width:m.tabW},children:e})]}),dt.map((c,A)=>{const I=ue||ot.includes(A);return f.jsx("div",{ref:o=>{Te.current[A]=o},className:"folder-layer folder-item","data-folder-item":A,role:I?"button":void 0,tabIndex:I?0:-1,onClick:o=>B(o,A),onKeyDown:o=>{var Ae;!I||o.key!=="Enter"&&o.key!==" "||(o.preventDefault(),o.stopPropagation(),(Ae=ge.current)==null||Ae.select(A))},children:gr(c)},g.isValidElement(c)&&c.key!=null?c.key:A)}),$e&&f.jsx("span",{ref:Q,className:"folder-layer folder-shade","aria-hidden":"true"}),f.jsxs("div",{ref:ft,className:"folder-layer folder-front","data-face":"outer","aria-hidden":"true",children:[f.jsx("div",{className:"folder-face folder-face-outer"}),$e&&f.jsx("div",{className:"folder-face folder-face-inner",children:f.jsx("span",{className:"folder-inner-gutter"})})]}),Ge&&f.jsx("canvas",{ref:u,className:"folder-glass","aria-hidden":"true",style:{left:C.x,top:C.y,width:C.width,height:C.height}})]}),e&&f.jsx("span",{ref:J,className:"folder-tab-text folder-measure","aria-hidden":"true",children:e})]})};function Dr({course:t,branchCount:e=4,className:i=""}){const s=encodeURIComponent(`Hello Infodesk Computer Education, I am interested in the ${t.title} (${t.duration}) course. Could you share batch timings, fee details, and book a free demo session?`);return f.jsxs("div",{className:`bg-surface border border-line/80 rounded-panel p-6 sm:p-7 shadow-card space-y-6 ${i}`,children:[f.jsxs("div",{children:[f.jsx("span",{className:"text-xs font-bold text-muted",children:"Course overview"}),f.jsx("p",{className:"text-xl font-bold text-deep mt-1",children:t.title})]}),f.jsxs("div",{className:"space-y-3 py-3 border-y border-line/60 text-sm",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-muted",children:"Duration"}),f.jsx("span",{className:"font-semibold text-deep",children:t.duration})]}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-muted",children:"Format"}),f.jsx("span",{className:"font-semibold text-deep",children:"Small batches, in-person"})]}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-muted",children:"Locations"}),f.jsxs("span",{className:"font-semibold text-deep",children:[e," Mumbai branches"]})]}),f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-muted",children:"Placement Support"}),f.jsx("span",{className:"font-semibold text-emerald-600",children:"100% job assistance"})]})]}),f.jsxs("div",{className:"space-y-3",children:[f.jsx(go,{to:"/contact",size:"md",variant:"primary",className:"w-full",children:"Book a free demo"}),f.jsx(go,{href:`https://wa.me/919769445334?text=${s}`,size:"md",variant:"ghost",className:"w-full",icon:f.jsx(zo,{size:18,className:"text-[#25D366]"}),children:"Chat on WhatsApp"}),f.jsxs("a",{href:"/assets/Infodesk_Computer_Education.pdf",target:"_blank",rel:"noopener noreferrer",className:"w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold text-muted hover:text-deep hover:bg-soft/40 transition-colors border border-line/50",children:[f.jsx(Ho,{size:15}),f.jsx("span",{children:"Download official brochure (PDF)"})]})]}),f.jsxs("div",{className:"pt-2 border-t border-line/40 text-xs text-muted space-y-2",children:[f.jsxs("p",{className:"flex items-center gap-2",children:[f.jsx(eo,{size:14,className:"text-emerald-500 shrink-0"}),f.jsx("span",{children:"Flexible morning, evening & weekend timings"})]}),f.jsxs("p",{className:"flex items-center gap-2",children:[f.jsx(eo,{size:14,className:"text-emerald-500 shrink-0"}),f.jsx("span",{children:"Extra practice lab hours with mentor guidance"})]}),f.jsxs("p",{className:"flex items-center gap-2",children:[f.jsx(eo,{size:14,className:"text-emerald-500 shrink-0"}),f.jsx("span",{children:"Personalized 1-on-1 doubt clearing sessions"})]})]})]})}const wr=`#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`,Er=`#version 300 es
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
}`,ko=[[0,1],[-11.5,.77],[9.5,.95],[-53.5,.79],[39.5,.77],[16,.81],[-16.3,.92],[13.3,.96],[3,1.01],[1,.68],[1,1.15],[142.5,.51],[113.6,.28],[-7.5,.13],[-2.7,.32],[7.5,.81]],Io=.78,Po=2048,lo=1.25,Gt=5,ze=(t,e,i)=>Math.min(i,Math.max(e,t)),Rr=t=>1-Math.pow(1-ze(t,0,1),3),Tr=t=>{const s=8*Math.sqrt(.6155999999999999);return 1-Math.exp(-.62*8*t)*(Math.cos(s*t)+.62*8/s*Math.sin(s*t))},Mr=([t,e,i])=>{const s=Math.max(t,e,i),a=Math.min(t,e,i),d=s-a;let p=0;return d>0&&(s===t?p=(e-i)/d%6:s===e?p=(i-t)/d+2:p=(t-e)/d+4),[(p*60+360)%360,s>0?d/s:0]},Ar=(t,e)=>{const i=(t%360+360)%360/60,s=e,a=s*(1-Math.abs(i%2-1)),d=1-s,[p,v,b]=i<1?[s,a,0]:i<2?[a,s,0]:i<3?[0,s,a]:i<4?[0,a,s]:i<5?[a,0,s]:[s,0,a];return[p+d,v+d,b+d]},No=t=>{const[e,i]=Mr(t),s=i/Io,a=new Float32Array(ko.length*3);return ko.forEach(([d,p],v)=>{a.set(Ar(e+d,ze(Io*p*s,0,1)),v*3)}),a},_o=(t,e,i)=>{const s=t.createShader(e);return s?(t.shaderSource(s,i),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS)?s:(t.deleteShader(s),null)):null},Sr=(t,e,i)=>{const s=_o(t,t.VERTEX_SHADER,e),a=_o(t,t.FRAGMENT_SHADER,i),d=t.createProgram();return!s||!a||!d?null:(t.attachShader(d,s),t.attachShader(d,a),t.linkProgram(d),t.deleteShader(s),t.deleteShader(a),t.getProgramParameter(d,t.LINK_STATUS)?d:(t.deleteProgram(d),null))},Lr=(t,e,i)=>{const s={};for(const a of i)s[a]=t.getUniformLocation(e,a);return s},kr=({surfaceRef:t,beamPosition:e=.6,surfaceLevel:i=1,color:s="#3847ff",intensity:a=1.8,beamWidth:d=1.5,flare:p=1.5,spread:v=1.5,spill:b=1,fog:y=.2,dust:$=1.6,streaks:S=1.5,dots:N=1,pulse:_=1.5,speed:w=1.5,seed:M=3,mouseInteraction:j=!0,revealImage:ne,revealRadius:ae=220,revealOpacity:fe=.6,intro:z=!0,theme:Pe="dark",paused:xe=!1,dpr:V,...ve})=>{const we=g.useRef(null),Ce=g.useRef(null),Ee=g.useRef(null),ut={surfaceRef:t,beamPosition:ze(e,0,1),surfaceLevel:ze(i,0,1),color:String(s),intensity:Math.max(0,a),beamWidth:ze(d,.2,5),flare:ze(p,.2,4),spread:ze(v,.1,4),spill:Math.max(0,b),fog:Math.max(0,y),dust:Math.max(0,$),streaks:Math.max(0,S),dots:Math.max(0,N),pulse:Math.max(0,_),speed:w,seed:M,mouseInteraction:j,revealImage:ne,revealRadius:Math.max(1,ae),revealOpacity:ze(fe,0,1),intro:z,theme:Pe,paused:xe,dpr:V},Re=g.useRef(ut);Re.current=ut,g.useEffect(()=>{var De;const ie=we.current,Q=Ce.current,u=Q==null?void 0:Q.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!ie||!Q||!u)return;const Te=Sr(u,wr,Er);if(!Te)return;const J=Lr(u,Te,["uResolution","uDpr","uScale","uTime","uBeamX","uSurface","uRadius","uIntro","uPour","uRun","uLens","uReveal","uRevealMap","uRevealInfo","uAtmosphere","uAmount","uShape","uExtra","uTheme","uTint"]),ge=u.createVertexArray(),Ne=u.createBuffer();u.bindVertexArray(ge),u.bindBuffer(u.ARRAY_BUFFER,Ne),u.bufferData(u.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),u.STATIC_DRAW);const qe=u.getAttribLocation(Te,"aPosition");u.enableVertexAttribArray(qe),u.vertexAttribPointer(qe,2,u.FLOAT,!1,0,0),u.bindVertexArray(null);const He=u.createTexture();u.bindTexture(u.TEXTURE_2D,He),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,1,1,0,u.RGBA,u.UNSIGNED_BYTE,new Uint8Array([0,0,0,0])),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MIN_FILTER,u.LINEAR),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_MAG_FILTER,u.LINEAR),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_S,u.CLAMP_TO_EDGE),u.texParameteri(u.TEXTURE_2D,u.TEXTURE_WRAP_T,u.CLAMP_TO_EDGE);const Me=document.createElement("canvas");Me.width=1,Me.height=1;const le=Me.getContext("2d",{willReadFrequently:!0}),ot=((De=window.matchMedia)==null?void 0:De.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,U={time:0,introTime:Re.current.intro&&!ot?0:Gt,width:1,height:1,ratio:1,colorKey:"",tints:No([.22,.28,1]),observed:null,pointer:{x:0,y:0,inside:!1},lens:{x:0,y:0,vx:0,vy:0,strength:0,placed:!1},reveal:{src:"",ready:!1,width:1,height:1,image:null}};let Fe=0,be=0,_e=!0,ue=!0;const $e=T=>{if(!le)return[.22,.28,1];le.clearRect(0,0,1,1),le.fillStyle="#3847ff",le.fillStyle=T,le.fillRect(0,0,1,1);const[R,k,B]=le.getImageData(0,0,1,1).data;return[R/255,k/255,B/255]},Ge=T=>{T.color!==U.colorKey&&(U.colorKey=T.color,U.tints=No($e(T.color)))},dt=T=>{const R=T.revealImage?String(T.revealImage):"",k=U.reveal;if(R===k.src||(k.src=R,k.ready=!1,k.image&&(k.image.onload=null),!R))return;const B=new Image;B.crossOrigin="anonymous",B.decoding="async",B.onload=()=>{var I,o;if(!ue||k.src!==R)return;const H=B.naturalWidth||B.width||1,G=B.naturalHeight||B.height||1,c=Math.min(1,2048/Math.max(H,G)),A=document.createElement("canvas");A.width=Math.max(1,Math.round(H*c)),A.height=Math.max(1,Math.round(G*c)),(I=A.getContext("2d"))==null||I.drawImage(B,0,0,A.width,A.height),u.bindTexture(u.TEXTURE_2D,He),u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,A),u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),k.width=A.width,k.height=A.height,k.ready=!0,(o=Ee.current)==null||o.call(Ee)},B.src=R,k.image=B},rt=(T,R,k)=>{var H;const B=((H=T.surfaceRef)==null?void 0:H.current)??null;if(B!==U.observed&&(U.observed&&pe.unobserve(U.observed),B&&pe.observe(B),U.observed=B),B){const G=ie.getBoundingClientRect(),c=B.getBoundingClientRect();if(c.width>0){const A=getComputedStyle(B),I=Math.max(parseFloat(A.borderTopLeftRadius)||0,parseFloat(A.borderTopRightRadius)||0);return{left:c.left-G.left,top:c.top-G.top,right:c.right-G.left,bottom:c.bottom-G.top,radius:Math.min(I,c.width/2,c.height/2),real:!0}}}return{left:-R*2,top:T.surfaceLevel*k,right:R*3,bottom:k*3,radius:0,real:!1}},We=()=>{const T=Math.max(1,ie.clientWidth),R=Math.max(1,ie.clientHeight),k=Re.current,B=Math.min(k.dpr||window.devicePixelRatio||1,2),H=Math.max(T,R)*B,G=H>Po?B*Po/H:B,c=Math.max(1,Math.round(T*G)),A=Math.max(1,Math.round(R*G));(Q.width!==c||Q.height!==A)&&(Q.width=c,Q.height=A),U.width=T,U.height=R,U.ratio=Q.width/T,m()},m=()=>{const T=Re.current;Ge(T);const{width:R,height:k}=U,B=Math.max(.2,Math.min(R/585,k/507));let H=rt(T,R,k),G=T.beamPosition*R;if(H.real){const xt=H.radius+6;G>=H.left&&G<=H.right?G=ze(G,H.left+xt,H.right-xt):H={left:-R*2,top:k,right:R*3,bottom:k*3,radius:0,real:!1}}const c=-.15*k,A=H.top-c+.3*k,I=U.introTime,o=I>=Gt,Ae=o?H.top+.3*k:c+A*Math.pow(ze(I/lo,0,1),1.3),ht=lo*Math.pow(Math.max(0,H.top-c)/A,1/1.3),Y=I-ht,me=o?1:Y<=0?0:Tr(Y),$t=o||Y<=0?0:Math.exp(-Y/.35)*(1-Math.exp(-Y/.05)),pt=T.spread*250*1.3+80,At=o?1e5:Y<=0?-40:pt*(1-Math.exp(-1.15*Y)),Ct=o||Y<=0?0:Math.exp(-1.15*Y)*(1-Math.exp(-Y/.08)),St=xt=>{if(o)return[1e3,1];if(Y<=0)return[-xt,0];const Lt=Math.min(xt,pt*.97),Zt=-Math.log(1-Lt/pt)/1.15,at=Y-Zt,st=ze((at+.15)/.8,0,1),kt=st*st*st*(st*(st*6-15)+10);return at<=0?[At-Lt,kt]:[1.15*(pt-Lt)*at+260*at*at,kt]},[Ft,Vt]=St((G-H.left)/B),[bt,Kt]=St((H.right-G)/B),Dt=o?1:Y<=0?.3*Rr(I/lo):.3+.7*(1-Math.exp(-1.3*Y)),jt=Number(T.seed)||0;u.viewport(0,0,Q.width,Q.height),u.clearColor(0,0,0,0),u.clear(u.COLOR_BUFFER_BIT),u.useProgram(Te),u.uniform2f(J.uResolution,R,k),u.uniform1f(J.uDpr,U.ratio),u.uniform1f(J.uScale,B),u.uniform1f(J.uTime,U.time),u.uniform1f(J.uBeamX,G),u.uniform4f(J.uSurface,H.left,H.top,H.right,H.bottom),u.uniform1f(J.uRadius,H.radius),u.uniform3f(J.uIntro,Ae,me,$t),u.uniform4f(J.uPour,Ft,bt,Vt,Kt),u.uniform2f(J.uRun,At,Ct),u.uniform4f(J.uLens,U.lens.x,U.lens.y,95*B,U.lens.strength),dt(T);const{reveal:nt}=U,de=Math.max(R/nt.width,k/nt.height),yt=nt.width*de,mt=nt.height*de;u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,He),u.uniform1i(J.uReveal,0),u.uniform4f(J.uRevealMap,1/yt,1/mt,(yt-R)/2/yt,(mt-k)/2/mt),u.uniform2f(J.uRevealInfo,T.revealRadius,nt.ready?T.revealOpacity:0),u.uniform1f(J.uAtmosphere,Dt),u.uniform4f(J.uAmount,T.intensity,T.fog,T.dust,T.streaks),u.uniform4f(J.uShape,T.beamWidth,T.flare,T.spread,T.spill),u.uniform4f(J.uExtra,T.pulse,T.dots,34.34+jt*7.31,11.58+jt*3.17),u.uniform1f(J.uTheme,T.theme==="light"?1:0),u.uniform3fv(J.uTint,U.tints),u.bindVertexArray(ge),u.drawArrays(u.TRIANGLES,0,3),u.bindVertexArray(null)},E=T=>{if(Fe=0,!ue||!_e||document.hidden)return;const R=Re.current,k=be?Math.min(.05,(T-be)/1e3):1/60;be=T;const B=!R.paused&&!ot;B&&(U.time+=k*R.speed);const H=U.introTime<Gt;H&&(U.introTime=Math.min(Gt,U.introTime+k));const{pointer:G,lens:c}=U,A=R.mouseInteraction&&G.inside&&!ot;A&&!c.placed&&(c.x=G.x,c.y=G.y,c.vx=0,c.vy=0,c.placed=!0);const I=120*(G.x-c.x)-19*c.vx,o=120*(G.y-c.y)-19*c.vy;c.vx+=I*k,c.vy+=o*k,c.x+=c.vx*k,c.y+=c.vy*k;const Ae=A?1:0;c.strength+=(Ae-c.strength)*(1-Math.exp(-k/(Ae>c.strength?.3:.55))),c.strength<.001&&!A&&(c.placed=!1),m();const ht=Math.abs(U.lens.strength-(R.mouseInteraction&&U.pointer.inside?1:0))>.002||Math.hypot(U.lens.vx,U.lens.vy)>.5;B||H||ht?Fe=requestAnimationFrame(E):be=0},C=()=>{!Fe&&ue&&_e&&!document.hidden&&(Fe=requestAnimationFrame(E))},q=T=>{const R=ie.getBoundingClientRect(),k=T.clientX-R.left,B=T.clientY-R.top;U.pointer.x=k,U.pointer.y=B,U.pointer.inside=k>=0&&B>=0&&k<=R.width&&B<=R.height,C()},re=()=>{U.pointer.inside=!1,C()},K=()=>{be=0,C()},pe=new ResizeObserver(We);pe.observe(ie);const ye=new IntersectionObserver(T=>{_e=T.some(R=>R.isIntersecting),_e&&(be=0,C())});return ye.observe(ie),window.addEventListener("pointermove",q,{passive:!0}),document.documentElement.addEventListener("pointerleave",re),document.addEventListener("visibilitychange",K),We(),C(),Ee.current=()=>{Fe||m(),C()},()=>{ue=!1,cancelAnimationFrame(Fe),Ee.current=null,pe.disconnect(),ye.disconnect(),window.removeEventListener("pointermove",q),document.documentElement.removeEventListener("pointerleave",re),document.removeEventListener("visibilitychange",K),u.deleteTexture(He),u.deleteBuffer(Ne),u.deleteVertexArray(ge),u.deleteProgram(Te)}},[]),g.useEffect(()=>{var ie;(ie=Ee.current)==null||ie.call(Ee)});const{className:ft="",...Ye}=ve;return f.jsx("div",{ref:we,className:`laser-flow-container${ft?` ${ft}`:""}`,...Ye,children:f.jsx("canvas",{ref:Ce,className:"laser-flow-canvas","aria-hidden":"true"})})};function jr({title:t="Try a free demo class.",description:e="Experience our hands-on data labs, mentor guidance, and production curriculums in-person at any of our 4 Mumbai centers.",buttonText:i="Book your free demo session",className:s="",id:a="enquire"}){const d=jo.digitalMarketingLaserFlow&&!Bo&&!Uo&&!Xo;return f.jsx("section",{id:a,className:`max-w-content mx-auto px-6 py-12 ${s}`,children:f.jsxs("div",{className:"relative rounded-[32px] bg-gradient-to-br from-[#13266f] via-[#0b1a52] to-[#071138] text-white p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10",children:[d&&f.jsx(Wo,{isCanvasOrWebGL:!0,fallback:f.jsx("div",{className:"absolute inset-0 bg-[#13266f]/40 pointer-events-none","aria-hidden":"true"}),className:"absolute inset-0 pointer-events-none",children:f.jsx(kr,{color:"#4a6df0",intensity:.7,speed:.4,mouseInteraction:!1,className:"absolute inset-0 w-full h-full pointer-events-none opacity-40"})}),f.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#0b1a52]/90 via-[#13266f]/70 to-[#071138]/90 pointer-events-none"}),f.jsxs("div",{className:"space-y-3 max-w-xl text-center md:text-left relative z-10",children:[f.jsx("h3",{className:"text-2xl sm:text-3xl font-bold tracking-tight text-white font-heading",children:t}),f.jsx("p",{className:"text-[#c3cbf2] text-sm sm:text-base leading-relaxed",children:e})]}),f.jsx("div",{className:"shrink-0 relative z-10",children:f.jsx(Oo,{as:Do,to:"/contact",backgroundColor:"#f6f5f1",textColor:"#13266f",color:"#4a6df0",trailColor:"#a5d8ff",radius:999,duration:5,glow:.6,className:"inline-flex items-center justify-center font-bold text-sm sm:text-base px-8 py-3.5 min-h-[48px] rounded-full shadow-lg hover:shadow-xl transition-all",children:i})})]})})}export{Cr as C,Fr as F,Dr as a,jr as b};
