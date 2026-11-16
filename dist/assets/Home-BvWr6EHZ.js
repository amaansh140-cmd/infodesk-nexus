import{u as Zt,j as t,m as Rt}from"./vendor-motion-iuFgYMdS.js";import{r as C,L as Je}from"./vendor-react-6YCBRoeX.js";import{e as xe,B as Qe,b as St}from"./index-CHZFJ1gh.js";import{T as ia,d as At,S as ea,e as ta,E as Mt,f as la,g as aa,h as ca,D as da,G as ua,i as ma,j as fa,k as ha,L as xa,A as _t,U as pa,B as va,l as ga,m as ba}from"./vendor-icons-CyNvKEFQ.js";import{S as Ce}from"./ScrollReveal-BWxX0vM2.js";import{L as pt,S as Lt,C as Ze,a as ya,b as wa,c as Ea}from"./SpotlightCard-C3Psjj7n.js";import{t as Ta,G as ja,a as kt,b as Ft,c as Na,L as Ra}from"./LogoLoop-BQ9tvuKe.js";import{R as Sa}from"./RotatingText-CiP6v8Jg.js";import{S as Aa}from"./Stack-Cl1_GEq-.js";import{c as Ut}from"./courses-D5UAkos6.js";import"./vendor-gsap-CnPRBKv6.js";const vt=[{id:"science",tabLabel:"Data science",cmdBase:"infodesk $ learn --course",courseName:'"data science"',tools:"Loaded: Python, Scikit-Learn, GenAI, Alteryx, Informatica",duration:"Duration: 12 months comprehensive career program",level:"Status: Certified industrial faculties ✓"},{id:"analytics",tabLabel:"Analytics",cmdBase:"infodesk $ learn --course",courseName:'"data analytics"',tools:"Loaded: Excel, SQL, Python, Pandas, Power BI, Tableau",duration:"Duration: 6 months (hands-on industrial training)",level:"Status: 100% job assistance included ✓"},{id:"web",tabLabel:"Web",cmdBase:"infodesk $ learn --course",courseName:'"full stack web"',tools:"Loaded: HTML5, CSS3, JavaScript, PHP, SQL, WordPress",duration:"Duration: 6 months with real client capstone projects",level:"Status: Flexible small batch timings ✓"},{id:"marketing",tabLabel:"Marketing",cmdBase:"infodesk $ learn --course",courseName:'"digital marketing"',tools:"Loaded: SEO, Google Ads, SMM, Content, AI Tools",duration:"Duration: 6 months plus practical job training",level:"Status: Live ad spend & portfolio reviews ✓"},{id:"design",tabLabel:"Design",cmdBase:"infodesk $ learn --course",courseName:'"design & media"',tools:"Loaded: Photoshop, Illustrator, Figma, Premiere Pro, UI/UX",duration:"Duration: 6 months creative portfolio training",level:"Status: Live client design briefs ✓"}];function Ma(){const a=Zt(),[p,g]=C.useState(0),d=vt[p],n=`${d.cmdBase} ${d.courseName}`,[c,y]=C.useState(n.length),[N,R]=C.useState(!0);C.useEffect(()=>{if(a){y(n.length),R(!0);return}const O=setTimeout(()=>{g(Ee=>(Ee+1)%vt.length),y(0),R(!1);let K=0;const de=setInterval(()=>{K++,y(K),K>=n.length&&(clearInterval(de),setTimeout(()=>{R(!0)},200))},35)},6e3);return()=>{clearTimeout(O)}},[p,n,a]);const X=n.slice(0,c);return t.jsx("div",{className:"w-full max-w-full sm:max-w-md md:max-w-lg mx-auto md:[perspective:1200px]",children:t.jsxs(Rt.div,{className:"w-full relative bg-[#0b1437] border border-[#213275] rounded-panel p-5 sm:p-7 shadow-[0_22px_50px_-15px_rgba(11,20,55,0.7)] text-left select-none transition-transform duration-500 ease-out md:[transform:rotateY(-5deg)_rotateX(3deg)] md:hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1.02)]",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,ease:[.2,.7,.2,1]},children:[t.jsx("div",{className:"absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-bright to-transparent opacity-40 pointer-events-none"}),t.jsxs("div",{className:"flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-white/10 gap-2",children:[t.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[t.jsx("span",{className:"w-3 h-3 rounded-full bg-[#f87171] inline-block shadow-[0_0_8px_rgba(248,113,113,0.5)]"}),t.jsx("span",{className:"w-3 h-3 rounded-full bg-[#fbbf24] inline-block shadow-[0_0_8px_rgba(251,191,36,0.5)]"}),t.jsx("span",{className:"w-3 h-3 rounded-full bg-[#34d399] inline-block shadow-[0_0_8px_rgba(52,211,153,0.5)]"})]}),t.jsx("div",{className:"flex items-center gap-1 overflow-x-auto py-0.5 scrollbar-none",children:vt.map((O,K)=>{const de=K>=3;return t.jsx("button",{type:"button",onClick:()=>{g(K),y(`${O.cmdBase} ${O.courseName}`.length),R(!0)},className:`px-2 py-0.5 rounded text-[11px] font-mono whitespace-nowrap transition-colors ${de?"hidden sm:inline-block":"inline-block"} ${p===K?"bg-bright/20 text-white font-bold border border-bright/40":"text-white/50 hover:text-white/80"}`,children:O.tabLabel},O.id)})}),t.jsxs("div",{className:"hidden min-[480px]:flex items-center gap-1.5 text-[11px] font-mono text-white/50 shrink-0",children:[t.jsx(ia,{size:12,className:"text-bright"}),t.jsx("span",{children:"infodesk-cli"})]})]}),t.jsxs("div",{className:"font-mono text-xs sm:text-[14px] leading-relaxed space-y-3 min-h-[160px] sm:min-h-[175px]",children:[t.jsxs("div",{className:"text-white/95 font-semibold flex items-center flex-wrap break-all sm:break-normal",children:[t.jsx("span",{className:"text-[#4a6df0] mr-2",children:"infodesk"}),t.jsx("span",{className:"text-white/40 mr-2",children:"$"}),c>11&&t.jsx("span",{className:"text-emerald-400 mr-2",children:"learn"}),c>17&&t.jsx("span",{className:"text-indigo-300 mr-2",children:"--course"}),c>26&&t.jsx("span",{className:"text-amber-300 font-bold",children:X.slice(26)}),t.jsx("span",{className:"inline-block w-2 h-4 ml-1 bg-bright animate-pulse"})]}),N&&t.jsxs(Rt.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.3},className:"space-y-2.5 pt-2 border-t border-white/10",children:[t.jsxs("div",{className:"flex items-start gap-2.5 text-emerald-400",children:[t.jsx(At,{size:16,className:"shrink-0 mt-0.5 text-emerald-400"}),t.jsx("span",{className:"text-emerald-300/95 text-xs sm:text-[13px] leading-snug break-words font-medium",children:d.tools})]}),t.jsxs("div",{className:"flex items-start gap-2.5 text-emerald-400",children:[t.jsx(At,{size:16,className:"shrink-0 mt-0.5 text-emerald-400"}),t.jsx("span",{className:"text-emerald-300/95 text-xs sm:text-[13px] leading-snug break-words font-medium",children:d.duration})]}),t.jsxs("div",{className:"flex items-center gap-2 text-white/60 text-[11px] sm:text-xs pl-6",children:[t.jsx(ea,{size:12,className:"text-amber-400"}),t.jsx("span",{children:d.level})]})]})]}),t.jsxs("div",{className:"pt-3 sm:pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-white/40",children:[t.jsxs("span",{className:"flex items-center gap-1.5",children:[t.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping"}),t.jsx("span",{children:"small batches • 4 Mumbai branches"})]}),t.jsx("span",{className:"text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30",children:"ready for demo"})]})]})})}const Ct=8,gt=4,bt=24,It=1.2,Pt=.7,Dt=.015,_a=2.4,at=60,Xe=100,La=16,ka=.78,Gt=["#1e3fd8","#f6f8ff","#a5d8ff","#38bdf8"],zt=" =+xX0S8#@",Bt='"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',Fa={horizon:0,pinch:1,rise:2,eclipse:3},Ua={none:0,wave:1,burst:2},Ca=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,ra=`
float hash12(vec2 p) {
  vec3 q = fract(vec3(p.xyx) * 0.1031);
  q += dot(q, q.yzx + 33.33);
  return fract((q.x + q.y) * q.z);
}
`,Ia=`#version 300 es
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
${ra}
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
}`,sa=`
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
${ra}
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
`,Pa=`#version 300 es
precision highp float;
uniform float uDownscale;
in vec2 vUv;
out vec4 outColor;
${sa}
void main() {
  outColor = glyphAt(gl_FragCoord.xy * uDownscale);
}`,Da=`#version 300 es
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
}`,Ga=`#version 300 es
precision highp float;
uniform sampler2D uHalo;
uniform float uGlow;
uniform float uGradient;
uniform float uGrain;
uniform float uFrame;
in vec2 vUv;
out vec4 outColor;
${sa}
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
}`,re=(a,p,g)=>Math.min(g,Math.max(p,a)),yt=a=>a<=.04045?a/12.92:((a+.055)/1.055)**2.4,za=([a,p,g])=>{const d=yt(a),n=yt(p),c=yt(g),y=Math.cbrt(.4122214708*d+.5363325363*n+.0514459929*c),N=Math.cbrt(.2119034982*d+.6806995451*n+.1073969566*c),R=Math.cbrt(.0883024619*d+.2817188376*n+.6299787005*c);return[.2104542553*y+.793617785*N-.0040720468*R,1.9779984951*y-2.428592205*N+.4505937099*R,.0259040371*y+.7827717662*N-.808675766*R]},Xt=(a,p,g)=>{const d=a.createShader(p);return d?(a.shaderSource(d,g),a.compileShader(d),a.getShaderParameter(d,a.COMPILE_STATUS)?d:(a.deleteShader(d),null)):null},et=(a,p)=>{const g=Xt(a,a.VERTEX_SHADER,Ca),d=Xt(a,a.FRAGMENT_SHADER,p),n=a.createProgram();if(!g||!d||!n)return null;if(a.attachShader(n,g),a.attachShader(n,d),a.linkProgram(n),a.deleteShader(g),a.deleteShader(d),!a.getProgramParameter(n,a.LINK_STATUS))return a.deleteProgram(n),null;const c={},y=a.getProgramParameter(n,a.ACTIVE_UNIFORMS);for(let N=0;N<y;N++){const R=a.getActiveUniform(n,N);if(!R)continue;const X=R.name.replace(/\[0\]$/,"");c[X]=a.getUniformLocation(n,X)}return{program:n,uniforms:c}},wt=(a,p)=>({textures:Array.from({length:p},()=>{const d=a.createTexture();return a.bindTexture(a.TEXTURE_2D,d),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),d}),framebuffer:a.createFramebuffer(),width:0,height:0}),Et=(a,p,g,d)=>{p.width===g&&p.height===d||(p.width=g,p.height=d,a.bindFramebuffer(a.FRAMEBUFFER,p.framebuffer),p.textures.forEach((n,c)=>{a.bindTexture(a.TEXTURE_2D,n),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,g,d,0,a.RGBA,a.UNSIGNED_BYTE,null),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+c,a.TEXTURE_2D,n,0)}),a.bindFramebuffer(a.FRAMEBUFFER,null))},Ot=(a,p,g)=>{const d=[...new Set([...p].filter(O=>O!==`
`&&O!=="\r"))];d.length||d.push(" ");const n=`300 ${Math.round(Xe*ka)}px ${g}`,c=Math.min(La,d.length),y=Math.ceil(d.length/c),N=document.createElement("canvas");N.width=at*c,N.height=Xe*y;const R=N.getContext("2d");R&&(R.font=n,R.textAlign="center",R.textBaseline="middle",R.fillStyle="#fff",d.forEach((O,K)=>{const de=K%c,Ee=Math.floor(K/c);R.fillText(O,de*at+at/2,Ee*Xe+Xe/2+3)}));const X=a.createTexture();return a.bindTexture(a.TEXTURE_2D,X),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,a.RGBA,a.UNSIGNED_BYTE,N),a.generateMipmap(a.TEXTURE_2D),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR_MIPMAP_LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),{texture:X,count:d.length,grid:[c,y]}},Ht=({colors:a=Gt,shape:p="horizon",characters:g=zt,cellSize:d=18,density:n=.8,glyphOpacity:c=.85,glow:y=.2,depthOfField:N=0,flicker:R=.2,softness:X=.5,scale:O=1,flow:K=.5,speed:de=1,gradientOpacity:Ee=.9,grain:rt=.08,variation:st=0,mouseInteraction:nt=!0,scrambleRadius:ot=.1,clickEffect:it="wave",intro:lt=!0,lightMode:ct=!1,fontFamily:Oe=Bt,dpr:dt,className:He="",style:Ve,...qe})=>{const Ie=C.useRef(null),pe=C.useRef(null),ve=C.useRef(null),_=(Array.isArray(a)&&a.length?a:Gt).slice(0,Ct),J={colors:_.length>1?_:[_[0],_[0]],shape:Fa[p]??0,characters:g||zt,cellSize:re(d,6,64),density:re(n,0,1),glyphOpacity:re(c,0,1),glow:re(y,0,2),depthOfField:re(N,0,1),flicker:re(R,0,1),softness:re(X,0,1),scale:re(O,.4,2.5),flow:re(K,0,2),speed:Math.max(0,de),gradientOpacity:re(Ee,0,1),grain:re(rt,0,.4),variation:Math.max(0,st),mouseInteraction:nt,scrambleRadius:re(ot,.02,.4),clickEffect:Ua[it]??1,intro:lt,lightMode:ct,fontFamily:Oe||Bt,dpr:dt},k=C.useRef(J);return k.current=J,C.useEffect(()=>{var Se;const w=Ie.current,S=pe.current,e=S==null?void 0:S.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!1,depth:!1,stencil:!1});if(!w||!S||!e)return;const ne=et(e,Ia),oe=et(e,Pa),j=et(e,Da),te=et(e,Ga);if(!ne||!oe||!j||!te)return;const Te=e.createVertexArray(),ue=wt(e,2),H=wt(e,1),je=wt(e,1),me=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Ae=new Map,We=m=>{const u=String(m),l=Ae.get(u);if(l)return l;let b=[0,0,0];if(me){me.clearRect(0,0,1,1),me.fillStyle="#000000",me.fillStyle=u,me.fillRect(0,0,1,1);const[E,o,s]=me.getImageData(0,0,1,1).data;b=[E/255,o/255,s/255]}return Ae.set(u,b),b},le=((Se=window.matchMedia)==null?void 0:Se.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,Q={width:1,height:1,ratio:1},Z=new Float32Array(Ct*3),ce=new Float32Array(gt*4),I=[],Me=new Float32Array(bt*4),ee=[],P={x:0,y:0,inside:!1};let x=null,D="",V="",r=0,ge=0,se=k.current.intro&&!le?0:1,fe=0,Ne=0,be=0,ae=0,_e=!0,Re=!1;const Le=()=>{var l,b;const m=k.current,u=`${m.fontFamily}|${m.characters}`;u===D&&x||(D=u,x&&e.deleteTexture(x.texture),x=Ot(e,m.characters,m.fontFamily),(b=(l=document.fonts)==null?void 0:l.load)==null||b.call(l,`300 64px ${m.fontFamily}`,m.characters).then(()=>{Re||D!==u||(x&&e.deleteTexture(x.texture),x=Ot(e,m.characters,m.fontFamily),ye())},()=>{}))},ut=()=>{const m=k.current,u=m.colors.join(",");u!==V&&(V=u,m.colors.forEach((l,b)=>Z.set(za(We(l)),b*3)))},ke=(m,u,l)=>{if(!x)return;const b=k.current,E=m.uniforms,o=b.cellSize*Q.ratio,s=o*(at/Xe);e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,ue.textures[0]),e.uniform1i(E.uField,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,ue.textures[1]),e.uniform1i(E.uAux,1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,x.texture),e.uniform1i(E.uAtlas,2),e.uniform2f(E.uResolution,u,l),e.uniform2f(E.uCell,s,o),e.uniform2f(E.uOffset,(u-Math.ceil(u/s)*s)/2,(l-Math.ceil(l/o)*o)/2),e.uniform2f(E.uAtlasGrid,x.grid[0],x.grid[1]),e.uniform1f(E.uCount,x.count),e.uniform1f(E.uDensity,b.density),e.uniform1f(E.uOpacity,b.glyphOpacity),e.uniform1f(E.uFlicker,le?0:b.flicker),e.uniform1f(E.uDepth,b.depthOfField),e.uniform1f(E.uGlyphTime,ge),e.uniform1f(E.uSeedValue,b.variation),e.uniform1f(E.uLight,b.lightMode?1:0)},ye=()=>{const m=k.current,u=Q.width/Q.height;Le(),ut(),e.bindVertexArray(Te),e.disable(e.BLEND),e.bindFramebuffer(e.FRAMEBUFFER,ue.framebuffer),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]),e.viewport(0,0,ue.width,ue.height),e.useProgram(ne.program);const l=ne.uniforms;e.uniform1f(l.uAspect,u),e.uniform1f(l.uTime,r),e.uniform1i(l.uShape,m.shape),e.uniform3fv(l.uRamp,Z),e.uniform1i(l.uCount,m.colors.length),e.uniform1f(l.uScale,m.scale),e.uniform1f(l.uSoftness,m.softness),e.uniform1f(l.uFlow,m.flow),e.uniform2f(l.uSeed,m.variation*3.17,m.variation*1.91),e.uniform4fv(l.uTrail,Me),e.uniform1f(l.uRadius,m.scrambleRadius),e.uniform4fv(l.uClicks,ce),e.uniform1i(l.uClickEffect,m.clickEffect),e.uniform1f(l.uIntro,se),e.uniform1f(l.uFrame,fe),e.drawArrays(e.TRIANGLES,0,3);const b=m.glow>.001;b&&(e.bindFramebuffer(e.FRAMEBUFFER,H.framebuffer),e.drawBuffers([e.COLOR_ATTACHMENT0]),e.viewport(0,0,H.width,H.height),e.useProgram(oe.program),ke(oe,S.width,S.height),e.uniform1f(oe.uniforms.uDownscale,S.width/H.width),e.drawArrays(e.TRIANGLES,0,3),e.useProgram(j.program),e.activeTexture(e.TEXTURE0),e.uniform1i(j.uniforms.uSource,0),e.bindFramebuffer(e.FRAMEBUFFER,je.framebuffer),e.bindTexture(e.TEXTURE_2D,H.textures[0]),e.uniform2f(j.uniforms.uStep,1/H.width,0),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,H.framebuffer),e.bindTexture(e.TEXTURE_2D,je.textures[0]),e.uniform2f(j.uniforms.uStep,0,1/H.height),e.drawArrays(e.TRIANGLES,0,3)),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,S.width,S.height),e.useProgram(te.program),ke(te,S.width,S.height);const E=te.uniforms;e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,H.textures[0]),e.uniform1i(E.uHalo,3),e.uniform1f(E.uGlow,b?m.glow:0),e.uniform1f(E.uGradient,m.gradientOpacity),e.uniform1f(E.uGrain,m.grain),e.uniform1f(E.uFrame,fe),e.drawArrays(e.TRIANGLES,0,3)},Fe=()=>{const m=k.current;Q.width=Math.max(1,w.clientWidth),Q.height=Math.max(1,w.clientHeight),Q.ratio=Math.min(m.dpr||window.devicePixelRatio||1,2),S.width=Math.max(1,Math.round(Q.width*Q.ratio)),S.height=Math.max(1,Math.round(Q.height*Q.ratio)),Et(e,ue,Math.max(1,Math.round(S.width/2)),Math.max(1,Math.round(S.height/2)));const u=Math.max(1,Math.round(S.width/4)),l=Math.max(1,Math.round(S.height/4));Et(e,H,u,l),Et(e,je,u,l),ye(),he()},mt=m=>{for(ee.forEach(u=>{u.age+=m});ee.length&&ee[ee.length-1].age>Pt;)ee.pop();for(let u=0;u<bt;u++){const l=ee[u];if(!l){Me[u*4+2]=0;continue}const b=1-l.age/Pt;Me.set([l.x,l.y,b*b,0],u*4)}for(I.forEach(u=>{u.age+=m});I.length&&I[I.length-1].age>It;)I.pop();for(let u=0;u<gt;u++){const l=I[u];if(!l){ce[u*4+3]=0;continue}const b=l.age/It,E=Math.min(1,l.age/.08)*(1-b)*(1-b);ce.set([l.x,l.y,l.age,E],u*4)}},$e=m=>{if(be=0,Re||!_e||document.hidden)return;const u=k.current,l=ae?re((m-ae)/1e3,.001,.05):1/60;ae=m,le||(r+=l*u.speed*.5,ge+=l*Math.max(u.speed,.15)),se<1&&(se=Math.min(1,se+l/_a)),Ne+=l,!le&&Ne>1/24&&(Ne=0,fe=(fe+1)%97),mt(l),ye(),!le||se<1||I.length>0||ee.length>0?be=requestAnimationFrame($e):ae=0};function he(){!be&&!Re&&_e&&!document.hidden&&(be=requestAnimationFrame($e))}const q=m=>{const u=w.getBoundingClientRect(),l=(m.clientX-u.left)/Math.max(1,u.width),b=1-(m.clientY-u.top)/Math.max(1,u.height),E=u.width/Math.max(1,u.height);P.inside=l>=0&&l<=1&&b>=0&&b<=1,P.x=(l-.5)*E,P.y=b-.5},Ue=m=>{q(m);const u=k.current;if(!P.inside||!u.mouseInteraction||le)return;const l=ee[0],b=l?Math.hypot(P.x-l.x,P.y-l.y):1/0;if(!(b<Dt)){if(l&&l.age<.1){const E=Math.min(6,Math.floor(b/(Dt*2)));for(let o=1;o<=E;o++){const s=o/(E+1);ee.unshift({x:l.x+(P.x-l.x)*s,y:l.y+(P.y-l.y)*s,age:0})}}ee.unshift({x:P.x,y:P.y,age:0}),ee.length=Math.min(ee.length,bt),he()}},Pe=m=>{q(m);const u=k.current;!P.inside||!u.clickEffect||le||(I.unshift({x:P.x,y:P.y,age:0}),I.length>gt&&I.pop(),he())},De=()=>{ae=0,he()},Ge=new ResizeObserver(Fe);Ge.observe(w);const ze=new IntersectionObserver(m=>{_e=m.some(u=>u.isIntersecting),_e&&(ae=0,he())});return ze.observe(w),window.addEventListener("pointermove",Ue,{passive:!0}),window.addEventListener("pointerdown",Pe,{passive:!0}),document.addEventListener("visibilitychange",De),Fe(),ve.current=he,()=>{var m;Re=!0,cancelAnimationFrame(be),ve.current=null,Ge.disconnect(),ze.disconnect(),window.removeEventListener("pointermove",Ue),window.removeEventListener("pointerdown",Pe),document.removeEventListener("visibilitychange",De),[ue,H,je].forEach(u=>{u.textures.forEach(l=>e.deleteTexture(l)),e.deleteFramebuffer(u.framebuffer)}),x&&e.deleteTexture(x.texture),e.deleteVertexArray(Te),[ne,oe,j,te].forEach(u=>e.deleteProgram(u.program)),(m=e.getExtension("WEBGL_lose_context"))==null||m.loseContext()}},[]),C.useEffect(()=>{var w;(w=ve.current)==null||w.call(ve)}),t.jsx("div",{ref:Ie,className:`gradient-ascii-container${He?` ${He}`:""}`,style:Ve,...qe,children:t.jsx("canvas",{ref:pe,className:"gradient-ascii-canvas","aria-hidden":"true"})})},$=96,Tt=.18,Ba=1024,Vt=96,tt=260,Xa={gloss:0,matte:1,holo:2};let qt=1;const Oa=`#version 300 es
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
}`,Ha=`#version 300 es
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
}`,Va=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,qa=`#version 300 es
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
}`,Y=(a,p,g)=>Math.min(g,Math.max(p,a)),Wt=a=>Math.atan2(Math.sin(a),Math.cos(a)),$t=a=>a*Math.PI/180,jt=(a,p,g,d,n,c)=>{const y=2*Math.PI*d,N=`${p}V`;a[N]+=(y*y*(g-a[p])-2*n*y*a[N])*c,a[p]+=a[N]*c},Yt=(a,p,g)=>{const d=a.createShader(p);return d?(a.shaderSource(d,g),a.compileShader(d),a.getShaderParameter(d,a.COMPILE_STATUS)?d:(a.deleteShader(d),null)):null},Kt=(a,p,g)=>{const d=Yt(a,a.VERTEX_SHADER,p),n=Yt(a,a.FRAGMENT_SHADER,g),c=a.createProgram();if(!d||!n||!c)return null;if(a.attachShader(c,d),a.attachShader(c,n),a.bindAttribLocation(c,0,"aGrid"),a.linkProgram(c),a.deleteShader(d),a.deleteShader(n),!a.getProgramParameter(c,a.LINK_STATUS))return a.deleteProgram(c),null;const y={},N=a.getProgramParameter(c,a.ACTIVE_UNIFORMS);for(let R=0;R<N;R++){const X=a.getActiveUniform(c,R);X&&(y[X.name]=a.getUniformLocation(c,X.name))}return{program:c,uniforms:y}},Wa=a=>{const p=[...a].sort((c,y)=>c[0]-y[0]||c[1]-y[1]);if(p.length<3)return p;const g=(c,y,N)=>(y[0]-c[0])*(N[1]-c[1])-(y[1]-c[1])*(N[0]-c[0]),d=[];p.forEach(c=>{for(;d.length>=2&&g(d[d.length-2],d[d.length-1],c)<=0;)d.pop();d.push(c)});const n=[];for(let c=p.length-1;c>=0;c--){const y=p[c];for(;n.length>=2&&g(n[n.length-2],n[n.length-1],y)<=0;)n.pop();n.push(y)}return d.slice(0,-1).concat(n.slice(0,-1))},$a=({imageSrc:a,width:p=200,rotate:g=0,peelDirection:d=0,peelBackHoverPct:n=25,peelBackActivePct:c=40,curlRadius:y=12,finish:N="gloss",backColor:R="#d4d4d8",lightingIntensity:X=.5,shadowIntensity:O=.6,followPointer:K=!0,draggable:de=!0,swing:Ee=1,friction:rt=.5,bounce:st=.35,intro:nt=!0,initialPosition:ot="center",onDragStart:it,onDragEnd:lt,dpr:ct,className:Oe="",style:dt,...He})=>{const Ve=C.useRef(null),qe=C.useRef(null),Ie=C.useRef(null),pe=C.useRef(null),ve={imageSrc:a,width:Math.max(16,p),rotate:$t(g),peelDirection:$t(d),hoverPeel:Y(n,0,100)/100,activePeel:Y(c,0,100)/100,curlRadius:Math.max(2,y),finish:Xa[N]??0,backColor:R,lighting:Y(X,0,1),shadow:Y(O,0,1),followPointer:K,draggable:de,swing:Y(Ee,0,3),friction:Y(rt,0,1),bounce:Y(st,0,1),intro:nt,initialPosition:ot,onDragStart:it,onDragEnd:lt,dpr:ct},_=C.useRef(ve);return _.current=ve,C.useEffect(()=>{var E;const J=Ve.current,k=qe.current,w=Ie.current,S=J==null?void 0:J.parentElement,e=k==null?void 0:k.getContext("webgl2",{alpha:!0,premultipliedAlpha:!0,antialias:!0,depth:!0,stencil:!1});if(!J||!k||!w||!S||!e)return;const ne=Kt(e,Oa,Ha),oe=Kt(e,Va,qa);if(!ne||!oe)return;const j=ne.uniforms,te=oe.uniforms,Te=[0,1].map(()=>{const o=e.createTexture();e.bindTexture(e.TEXTURE_2D,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const s=e.createFramebuffer();return{texture:o,buffer:s,width:0,height:0}}),ue=()=>{const o=Math.max(1,Math.round(D.size/2)),s=o;Te.forEach(i=>{i.width===o&&i.height===s||(i.width=o,i.height=s,e.bindTexture(e.TEXTURE_2D,i.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,o,s,0,e.RGBA,e.UNSIGNED_BYTE,null),e.bindFramebuffer(e.FRAMEBUFFER,i.buffer),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i.texture,0))}),e.bindFramebuffer(e.FRAMEBUFFER,null)},H=new Float32Array(($+1)*($+1)*2);for(let o=0;o<=$;o++)for(let s=0;s<=$;s++){const i=(o*($+1)+s)*2;H[i]=s/$,H[i+1]=o/$}const je=new Uint16Array($*$*6);let me=0;for(let o=0;o<$;o++)for(let s=0;s<$;s++){const i=o*($+1)+s,f=i+1,h=i+$+1,v=h+1;je.set([i,f,v,i,v,h],me),me+=6}const Ae=e.createVertexArray();e.bindVertexArray(Ae);const We=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,We),e.bufferData(e.ARRAY_BUFFER,H,e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);const le=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,le),e.bufferData(e.ELEMENT_ARRAY_BUFFER,je,e.STATIC_DRAW);const Q=e.createTexture(),Z=document.createElement("canvas"),ce=Z.getContext("2d",{willReadFrequently:!0}),I=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),Me=new Map,ee=o=>{const s=String(o),i=Me.get(s);if(i)return i;let f=[.83,.83,.85];if(I){I.clearRect(0,0,1,1),I.fillStyle="#d4d4d8",I.fillStyle=s,I.fillRect(0,0,1,1);const[h,v,F]=I.getImageData(0,0,1,1).data;f=[h/255,v/255,F/255]}return Me.set(s,f),f},P=((E=window.matchMedia)==null?void 0:E.call(window,"(prefers-reduced-motion: reduce)").matches)??!1,x={ready:!1,aspect:1,meshX:1,meshY:1,texel:1,mask:null,maskW:1,maskH:1,hull:[]},D={ratio:1,size:1,density:0},V={width:1,height:1},r={x:0,y:0,vx:0,vy:0,placed:!1,swing:0,swingV:0,peel:0,peelV:0,lift:0,liftV:0,dir:_.current.peelDirection,hover:!1,local:{x:0,y:0},press:null,pivotV:{x:0,y:0},light:{x:0,y:0,z:tt},pointer:{x:0,y:0,inside:!1},intro:_.current.intro&&!P?0:1};r.intro<1&&(r.lift=1.5,r.peel=.3,r.swing=.1,r.dir+=.6);let ge=0,se=0,fe=!0,Ne=null,be=!0;const ae=()=>_.current.width*x.aspect,_e=(o,s)=>{const f=_.current.width,h=ae();if(!x.hull.length){const U=(Math.abs(o)*f+Math.abs(s)*h)/2;return[-U,U]}let v=1/0,F=-1/0;return x.hull.forEach(([U,G])=>{const T=U*f*o+G*h*s;T<v&&(v=T),T>F&&(F=T)}),[v,F]},Re=o=>{if(Ne=o,x.ready=!1,!o)return;const s=new Image;s.crossOrigin="anonymous",s.decoding="async",s.onload=()=>{if(!be||Ne!==o||!ce)return;const i=s.naturalWidth||1,f=s.naturalHeight||1,h=Math.min(1,Ba/(Math.max(i,f)*(1+2*Tt))),v=Math.max(1,Math.round(i*h)),F=Math.max(1,Math.round(f*h)),U=Math.round(v*Tt),G=Math.round(F*Tt);Z.width=v+U*2,Z.height=F+G*2,ce.clearRect(0,0,Z.width,Z.height),ce.drawImage(s,U,G,v,F),e.bindTexture(e.TEXTURE_2D,Q),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,Z),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.generateMipmap(e.TEXTURE_2D),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),x.aspect=f/i,x.meshX=Z.width/v,x.meshY=Z.height/F,x.texel=Z.width;const T=Math.max(8,Math.round(Vt*Math.min(1,i/f))),L=Math.max(8,Math.round(Vt*Math.min(1,f/i)));Z.width=T,Z.height=L,ce.clearRect(0,0,T,L),ce.drawImage(s,0,0,T,L);const Be=ce.getImageData(0,0,T,L).data,W=new Uint8Array(T*L).fill(255),ie=[],z=(A,M)=>{const B=M*T+A;W[B]===0||Be[B*4+3]>100||(W[B]=0,ie.push(B))};for(let A=0;A<T;A++)z(A,0),z(A,L-1);for(let A=0;A<L;A++)z(0,A),z(T-1,A);for(;ie.length;){const A=ie.pop(),M=A%T,B=(A-M)/T;M>0&&z(M-1,B),M<T-1&&z(M+1,B),B>0&&z(M,B-1),B<L-1&&z(M,B+1)}const we=[];for(let A=0;A<L;A++)for(let M=0;M<T;M++)Be[(A*T+M)*4+3]>127&&we.push([(M+.5)/T-.5,(A+.5)/L-.5]);x.mask=W,x.maskW=T,x.maskH=L,x.hull=Wa(we),x.ready=!0,Le(),q()},s.src=o},Le=()=>{const o=_.current;D.ratio=Math.min(o.dpr||window.devicePixelRatio||1,2),V.width=Math.max(1,S.clientWidth),V.height=Math.max(1,S.clientHeight);const s=ae(),i=Math.ceil(Math.hypot(o.width,s)*1.16+2*(36+o.curlRadius));if((i!==D.size||D.ratio!==D.density)&&(D.size=i,D.density=D.ratio,J.style.width=`${i}px`,J.style.height=`${i}px`,k.width=Math.round(i*D.ratio),k.height=Math.round(i*D.ratio)),w.style.width=`${o.width}px`,w.style.height=`${s}px`,!r.placed){const f=o.initialPosition,h=f&&typeof f=="object"?f:{x:0,y:0};r.x=V.width/2+(h.x||0),r.y=V.height/2+(h.y||0),r.light={x:r.x-o.width*.45,y:r.y-s*.9,z:tt*1.6},r.placed=!0}ke()},ut=()=>{const o=_.current,s=o.rotate+r.swing,i=1+.07*Math.max(0,r.lift),f=o.width/2*i,h=ae()/2*i,v=Math.abs(Math.cos(s)),F=Math.abs(Math.sin(s));return{x:f*v+h*F,y:f*F+h*v}},ke=()=>{const o=_.current,s=ut(),i=Math.min(s.x,V.width/2),f=Math.max(V.width-s.x,V.width/2),h=Math.min(s.y,V.height/2),v=Math.max(V.height-s.y,V.height/2);r.x<i?(r.x=i,r.vx<0&&(r.vx=-r.vx*o.bounce)):r.x>f&&(r.x=f,r.vx>0&&(r.vx=-r.vx*o.bounce)),r.y<h?(r.y=h,r.vy<0&&(r.vy=-r.vy*o.bounce)):r.y>v&&(r.y=v,r.vy>0&&(r.vy=-r.vy*o.bounce))},ye=o=>{const s=S.getBoundingClientRect();return{x:o.clientX-s.left-S.clientLeft,y:o.clientY-s.top-S.clientTop}},Fe=o=>{const i=-(_.current.rotate+r.swing),f=1+.07*Math.max(0,r.lift),h=o.x-r.x,v=o.y-r.y;return{x:(Math.cos(i)*h-Math.sin(i)*v)/f,y:(Math.sin(i)*h+Math.cos(i)*v)/f}},mt=o=>{if(!x.mask)return!1;const s=_.current,i=Math.floor((o.x/s.width+.5)*x.maskW),f=Math.floor((o.y/ae()+.5)*x.maskH);return i<0||f<0||i>=x.maskW||f>=x.maskH?!1:x.mask[f*x.maskW+i]>100},$e=()=>{const o=_.current,s=D.size;J.style.transform=`translate3d(${r.x-s/2}px, ${r.y-s/2}px, 0)`;const i=o.rotate+r.swing,f=1+.07*Math.max(0,r.lift);if(w.style.transform=`translate(-50%, -50%) rotate(${i}rad) scale(${f})`,e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,k.width,k.height),e.clearColor(0,0,0,0),e.clearDepth(1),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),!x.ready)return;const h=o.width,v=ae(),F=-Math.sin(r.dir),U=Math.cos(r.dir),[G,T]=_e(F,U),L=Y(r.peel,0,1),Be=G+L*(T-G),W=Math.max(0,r.lift),ie=s/2,z=$*$*6,we=L>.001;e.useProgram(ne.program),e.bindVertexArray(Ae),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,Q),e.uniform1i(j.uImage,0),e.uniform2f(j.uCanvas,s,s),e.uniform2f(j.uMesh,h*x.meshX,v*x.meshY),e.uniform2f(j.uCenter,ie,ie),e.uniform2f(j.uDir,F,U),e.uniform1f(j.uFold,Be),e.uniform1f(j.uRadius,o.curlRadius),e.uniform1f(j.uAngle,i),e.uniform1f(j.uScale,f),e.uniform1f(j.uLift,W*26),e.uniform2f(j.uShadowOffset,1.2,2.4),e.uniform2f(j.uShadowSlope,.28,.55),e.uniform1i(j.uFinish,o.finish),e.uniform3fv(j.uBack,ee(o.backColor)),e.uniform3f(j.uLight,r.light.x-(r.x-ie),r.light.y-(r.y-ie),r.light.z),e.uniform1f(j.uShine,o.lighting),e.uniform1f(j.uShadow,o.shadow*.55),e.uniform1f(j.uTexel,x.texel/(h*x.meshX)),e.uniform1f(j.uLod,Math.max(0,Math.log2(x.texel/(h*x.meshX*f*D.ratio))));const A=Fe(r.light);if(e.uniform2f(j.uGlint,A.x/(h*x.meshX)+.5,A.y/(v*x.meshY)+.5),e.disable(e.DEPTH_TEST),we){ue();const[M,B]=Te;e.bindFramebuffer(e.FRAMEBUFFER,M.buffer),e.viewport(0,0,M.width,M.height),e.clear(e.COLOR_BUFFER_BIT),e.disable(e.BLEND),e.uniform1i(j.uPass,2),e.drawElements(e.TRIANGLES,z,e.UNSIGNED_SHORT,0),e.useProgram(oe.program),e.uniform1i(te.uSource,1),e.uniform1i(te.uMode,0),e.uniform1f(te.uSigma,Math.min(4,(2.5+o.curlRadius*.15)/2)),e.activeTexture(e.TEXTURE1),e.bindFramebuffer(e.FRAMEBUFFER,B.buffer),e.bindTexture(e.TEXTURE_2D,M.texture),e.uniform2f(te.uStep,1/M.width,0),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,M.buffer),e.bindTexture(e.TEXTURE_2D,B.texture),e.uniform2f(te.uStep,0,1/M.height),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,k.width,k.height),e.useProgram(ne.program),e.activeTexture(e.TEXTURE0)}e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.uniform1i(j.uPass,0),e.drawElements(e.TRIANGLES,z,e.UNSIGNED_SHORT,0),e.uniform1i(j.uPass,1),e.drawElements(e.TRIANGLES,z,e.UNSIGNED_SHORT,0),we&&(e.useProgram(oe.program),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,Te[0].texture),e.uniform1i(te.uMode,1),e.uniform1f(te.uStrength,o.shadow*.6),e.drawArrays(e.TRIANGLES,0,3),e.useProgram(ne.program),e.activeTexture(e.TEXTURE0),e.enable(e.DEPTH_TEST),e.depthFunc(e.LESS),e.uniform1i(j.uPass,3),e.drawElements(e.TRIANGLES,z,e.UNSIGNED_SHORT,0),e.disable(e.DEPTH_TEST))},he=o=>{if(ge=0,!fe||document.hidden)return;const s=_.current,i=se?Y((o-se)/1e3,.001,1/30):1/60;se=o,s.imageSrc!==Ne&&Re(s.imageSrc);const f=ae();r.intro<1&&x.ready&&(r.intro=Math.min(1,r.intro+i/1.1));const h=r.press,v=h&&h.moving?h:null;if(v){const W=v.pointer,ie=v.pivot,z=1-Math.exp(-i/.045),we=r.pivotV.x+((W.x-ie.x)/i-r.pivotV.x)*z,A=r.pivotV.y+((W.y-ie.y)/i-r.pivotV.y)*z,M=(we-r.pivotV.x)/i,B=(A-r.pivotV.y)/i;r.pivotV.x=we,r.pivotV.y=A,v.pivot={x:W.x,y:W.y};const Ye=s.rotate+r.swing,ft=-(Math.cos(Ye)*v.grab.x-Math.sin(Ye)*v.grab.y),ht=-(Math.sin(Ye)*v.grab.x+Math.cos(Ye)*v.grab.y),na=(s.width*s.width+f*f)/12+ft*ft+ht*ht,oa=(ft*-Y(B,-24e3,24e3)-ht*-Y(M,-24e3,24e3))/na,xt=2*Math.PI*1.5;r.swingV+=(oa*1.1*s.swing-xt*xt*r.swing-2*.45*xt*r.swingV)*i,r.swing=Y(r.swing+r.swingV*i,-1.2,1.2);const Ke=s.rotate+r.swing,Nt=1+.07*Math.max(0,r.lift);r.x=W.x-(Math.cos(Ke)*v.grab.x-Math.sin(Ke)*v.grab.y)*Nt,r.y=W.y-(Math.sin(Ke)*v.grab.x+Math.cos(Ke)*v.grab.y)*Nt,ke()}else{jt(r,"swing",0,1.4,.32,i);const W=Math.exp(-i*(1.5+9*s.friction));r.vx*=W,r.vy*=W,Math.hypot(r.vx,r.vy)<4&&(r.vx=0,r.vy=0),r.x+=r.vx*i,r.y+=r.vy*i,ke()}const F=r.intro<.2,U=F?.3:h?s.activePeel:r.hover?s.hoverPeel:0;jt(r,"peel",U,h||r.hover?3:3.6,h||r.hover?.7:.62,i),jt(r,"lift",v?1:0,3.2,.55,i);let G=s.peelDirection;h&&Math.hypot(h.grab.x,h.grab.y)>Math.min(s.width,f)*.12?G=Math.atan2(h.grab.x,-h.grab.y):s.followPointer&&r.hover&&Math.hypot(r.local.x,r.local.y)>Math.min(s.width,f)*.12&&(G=Math.atan2(r.local.x,-r.local.y)),F||(r.dir+=Wt(G-r.dir)*(1-Math.exp(-i/.12)));const T=r.pointer.inside?{x:r.pointer.x,y:r.pointer.y,z:tt}:{x:r.x-s.width*.45,y:r.y-f*.9,z:tt*1.6},L=1-Math.exp(-i/.08);r.light.x+=(T.x-r.light.x)*L,r.light.y+=(T.y-r.light.y)*L,r.light.z+=(T.z-r.light.z)*L,k.style.opacity=String(Y(r.intro/.12,0,1)),$e(),r.intro<1&&x.ready||h||Math.abs(r.peel-U)>5e-4||Math.abs(r.peelV)>5e-4||Math.abs(r.lift-(v?1:0))>5e-4||Math.abs(r.liftV)>5e-4||Math.abs(r.swing)>5e-4||Math.abs(r.swingV)>5e-4||r.vx!==0||r.vy!==0||Math.abs(Wt(G-r.dir))>.002||Math.hypot(T.x-r.light.x,T.y-r.light.y,T.z-r.light.z)>.5?ge=requestAnimationFrame(he):se=0};function q(){!ge&&fe&&!document.hidden&&(ge=requestAnimationFrame(he))}const Ue=o=>{const s=ye(o);r.local=Fe(s);const i=mt(r.local);i!==r.hover&&(r.hover=i),w.style.cursor=i&&_.current.draggable?r.press?"grabbing":"grab":""},Pe=o=>{const s=ye(o);r.pointer.x=s.x,r.pointer.y=s.y,r.pointer.inside=s.x>=0&&s.y>=0&&s.x<=V.width&&s.y<=V.height,q()},De=o=>{var i,f;const s=r.press;if(!s)Ue(o);else if(s.id===o.pointerId){const h=ye(o);s.pointer=h,!s.moving&&Math.hypot(h.x-s.origin.x,h.y-s.origin.y)>3&&(s.moving=_.current.draggable,s.moving&&((f=(i=_.current).onDragStart)==null||f.call(i))),s.samples.push({x:h.x,y:h.y,t:performance.now()}),s.samples.length>8&&s.samples.shift()}q()},Ge=()=>{r.press||(r.hover=!1,w.style.cursor="",q())},ze=o=>{var f;const s=_.current;if(o.button!==0||!x.ready||(Ue(o),!r.hover))return;const i=ye(o);r.press={id:o.pointerId,grab:Fe(i),origin:i,pointer:i,pivot:i,moving:!1,samples:[]},r.pivotV={x:0,y:0},r.vx=0,r.vy=0,(f=w.setPointerCapture)==null||f.call(w,o.pointerId),s.draggable&&(w.style.cursor="grabbing",qt+=1,J.style.zIndex=String(qt)),o.preventDefault(),q()},Se=o=>{var h,v,F;const s=r.press;if(!s||s.id!==o.pointerId)return;r.press=null,(h=w.hasPointerCapture)!=null&&h.call(w,o.pointerId)&&w.releasePointerCapture(o.pointerId);const i=performance.now(),f=s.samples.filter(U=>i-U.t<90);if(s.moving&&f.length>1&&!P){const U=f[0],G=f[f.length-1],T=Math.max(G.t-U.t,16)/1e3,L=2600;r.vx=Y((G.x-U.x)/T,-L,L),r.vy=Y((G.y-U.y)/T,-L,L)}Ue(o),o.pointerType!=="mouse"&&(r.hover=!1),s.moving&&((F=(v=_.current).onDragEnd)==null||F.call(v)),q()},m=()=>{r.pointer.inside=!1,q()},u=()=>{se=0,q()},l=new ResizeObserver(()=>{Le(),q()});l.observe(S);const b=new IntersectionObserver(o=>{fe=o.some(s=>s.isIntersecting),fe&&(se=0,q())});return b.observe(S),window.addEventListener("pointermove",Pe,{passive:!0}),document.documentElement.addEventListener("pointerleave",m),document.addEventListener("visibilitychange",u),w.addEventListener("pointermove",De),w.addEventListener("pointerleave",Ge),w.addEventListener("pointerdown",ze),w.addEventListener("pointerup",Se),w.addEventListener("pointercancel",Se),Re(_.current.imageSrc),Le(),pe.current=()=>{Le(),q()},q(),()=>{var o;be=!1,cancelAnimationFrame(ge),pe.current=null,l.disconnect(),b.disconnect(),window.removeEventListener("pointermove",Pe),document.documentElement.removeEventListener("pointerleave",m),document.removeEventListener("visibilitychange",u),w.removeEventListener("pointermove",De),w.removeEventListener("pointerleave",Ge),w.removeEventListener("pointerdown",ze),w.removeEventListener("pointerup",Se),w.removeEventListener("pointercancel",Se),e.deleteTexture(Q),Te.forEach(s=>{e.deleteTexture(s.texture),e.deleteFramebuffer(s.buffer)}),e.deleteProgram(oe.program),e.deleteBuffer(We),e.deleteBuffer(le),e.deleteVertexArray(Ae),e.deleteProgram(ne.program),(o=e.getExtension("WEBGL_lose_context"))==null||o.loseContext()}},[]),C.useEffect(()=>{var J;(J=pe.current)==null||J.call(pe)}),t.jsxs("div",{ref:Ve,className:`sticker-peel${Oe?` ${Oe}`:""}`,style:dt,...He,children:[t.jsx("canvas",{ref:qe,className:"sticker-peel-canvas","aria-hidden":"true"}),t.jsx("div",{ref:Ie,className:"sticker-peel-hit"})]})},Ya=[{name:"Govt. Recognized",desc:"Authorized vocational board",icon:aa},{name:"ISO 9001:2015",desc:"Certified quality standards",icon:ca},{name:"Skill India",desc:"Kaushal Bharat certified",image:"/assets/recognition/skill-india.png"},{name:"Ministry of MSME",desc:"Govt. of India registered",image:"/assets/recognition/msme.png"},{name:"Digital India",desc:"Power to empower initiatives",image:"/assets/recognition/digital-india.png"}],Jt=[{title:"Data and AI",desc:"Data science, analytics, machine learning, generative AI, and advanced Excel modeling.",icon:da,color:"bg-blue-50 text-primary border-blue-200/60",count:"3 courses",link:"/courses?category=Data and AI"},{title:"Digital marketing",desc:"SEO, social media, Google Ads, content marketing, reputation, and AI ad suites.",icon:ua,color:"bg-emerald-50 text-emerald-600 border-emerald-200/60",count:"2 courses",link:"/courses?category=Digital marketing"},{title:"Web and software",desc:"Full stack web development, Android, Java, PHP, MySQL, C/C++, and software engineering.",icon:ma,color:"bg-indigo-50 text-indigo-600 border-indigo-200/60",count:"3 courses",link:"/courses?category=Web and software"},{title:"Design and video",desc:"Graphic design, UI/UX with Figma, video editing with Premiere Pro, and After Effects VFX.",icon:fa,color:"bg-rose-50 text-rose-600 border-rose-200/60",count:"4 courses",link:"/courses?category=Design and video"},{title:"Office and accounts",desc:"Digital office automation, Tally Prime with GST, taxation diplomas, and DCA programs.",icon:ha,color:"bg-amber-50 text-amber-600 border-amber-200/60",count:"5 courses",link:"/courses?category=Office and accounts"},{title:"Cyber security",desc:"Ethical hacking, network defense, footprinting, system auditing, and security protocols.",icon:xa,color:"bg-cyan-50 text-cyan-600 border-cyan-200/60",count:"1 course",link:"/courses?category=Cyber security"}],Ka=[{num:"01",title:"Industrial faculties",desc:"Learn directly from practicing IT professionals who bring real-world architecture into class.",icon:pa,tag:"Direct Mentorship"},{num:"02",title:"Quality teaching",desc:"Rigorous step-by-step pedagogy emphasizing practical problem solving over passive lectures.",icon:ea,tag:"Hands-on Labs"},{num:"03",title:"100% job assistance",desc:"Dedicated career guidance, resume building, mock interviews, and direct referral drives.",icon:va,tag:"Placement Cell"},{num:"04",title:"Flexible timing",desc:"Morning, afternoon, evening, and weekend slots suited for students and working professionals.",icon:ga,tag:"Flexible Slots"},{num:"05",title:"Extra practice hour",desc:"Unlimited lab access beyond standard lecture hours to practice code, models, and designs.",icon:aa,tag:"Free Lab Hours"},{num:"06",title:"Small batch",desc:"Strictly limited student numbers per batch ensuring personal attention and one-on-one code reviews.",icon:ta,tag:"Personalized Focus"}],Qt=[{name:"Python",cat:"Data & Dev"},{name:"Power BI",cat:"Analytics"},{name:"Tableau",cat:"Analytics"},{name:"SQL",cat:"Database"},{name:"Excel",cat:"Analytics"},{name:"Tally Prime",cat:"Finance"},{name:"Photoshop",cat:"Design"},{name:"Premiere Pro",cat:"Video"},{name:"After Effects",cat:"VFX"},{name:"Figma",cat:"UI/UX"},{name:"WordPress",cat:"Web"},{name:"Java",cat:"Backend"}];function lr(){const a=Zt(),[p,g]=C.useState(380);C.useEffect(()=>{const n=()=>{const c=typeof window<"u"?window.innerWidth-32:380;g(Math.min(400,Math.max(260,c)))};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const d=Ta.map(n=>{const c=n.source==="Google Review";return t.jsxs("div",{className:"w-full h-full bg-surface border border-line/80 rounded-card p-5 sm:p-7 flex flex-col justify-between shadow-card text-left select-none relative",children:[t.jsxs("div",{className:"space-y-2.5",children:[t.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-line/40 pb-2.5",children:[t.jsxs("div",{className:"flex items-center gap-1.5",children:[t.jsx(ja,{rating:n.rating||5,size:13}),t.jsx("span",{className:"text-[11px] font-bold text-deep font-mono",children:"5.0"})]}),c?t.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-soft text-[10px] font-semibold text-primary border border-primary/20",children:[t.jsx(kt,{className:"w-3 h-3"}),t.jsx("span",{children:"Google"})]}):t.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[10px] font-semibold text-emerald-700 border border-emerald-200",children:[t.jsx(ta,{size:10}),t.jsx("span",{children:"Alumni"})]})]}),(n.course||n.mentor)&&t.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[n.course&&t.jsx("span",{className:"text-[10px] font-semibold px-2 py-0.5 rounded bg-soft text-deep border border-line/60 truncate max-w-[200px]",children:n.course}),n.mentor&&t.jsx("span",{className:"text-[10px] font-medium px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200/60",children:n.mentor})]}),t.jsxs("p",{className:"text-deep text-xs sm:text-[13px] leading-relaxed line-clamp-4 italic",children:["“",n.quote.replace(/'/g,"’"),"”"]})]}),t.jsxs("div",{className:"flex items-center justify-between gap-3 pt-3 border-t border-line/50",children:[t.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[n.image?t.jsx("img",{src:n.image,alt:n.name,className:"w-10 h-10 rounded-full object-cover border border-line/80 shadow-sm shrink-0",loading:"lazy"}):t.jsx("div",{className:"w-10 h-10 rounded-full text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs",style:{backgroundColor:n.avatarBg||"#4285F4"},"aria-hidden":"true",children:n.initials||n.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"min-w-0",children:[t.jsx("p",{className:"text-sm font-bold text-deep truncate",children:n.name}),t.jsxs("p",{className:"text-[11px] text-muted truncate",children:[n.date?`${n.date} · `:"",n.role||"Student"]})]})]}),c&&t.jsx("a",{href:Ft.shareUrl,target:"_blank",rel:"noopener noreferrer","aria-label":`View ${n.name}'s review on Google`,className:"text-muted hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-soft",onClick:y=>y.stopPropagation(),children:t.jsx(Mt,{size:13})})]})]},n.id)});return t.jsxs("div",{className:"space-y-24 sm:space-y-32 w-full overflow-x-clip",children:[t.jsxs("section",{className:"relative pt-8 sm:pt-16 pb-12 overflow-x-clip w-full",children:[xe.heroBackground&&!a?t.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-25 sm:opacity-35 -z-10 overflow-hidden select-none",children:t.jsx(pt,{className:"pointer-events-none select-none",isCanvasOrWebGL:!0,fallback:t.jsx("div",{className:"w-full h-full bg-grid-dots opacity-40 pointer-events-none"}),children:t.jsx(Ht,{shape:"horizon",colors:["#1e3fd8","#f6f8ff","#a5d8ff","#38bdf8"],characters:" =+xX0S8#@",cellSize:18,density:.8,speed:.5,glyphOpacity:.4,className:"w-full h-full pointer-events-none"})})}):t.jsx("div",{className:"absolute inset-0 bg-grid-dots opacity-40 -z-10 pointer-events-none"}),t.jsx("div",{className:"w-full max-w-content mx-auto px-4 sm:px-6",children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center",children:[t.jsxs("div",{className:"lg:col-span-7 min-w-0 space-y-6 text-left",children:[t.jsx("div",{className:"flex items-center gap-3",children:t.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-line/90 shadow-sm text-xs font-semibold text-deep",children:[t.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot inline-block"}),t.jsx("span",{children:"Govt. Recognized · ISO 9001:2015 certified board"})]})}),t.jsxs("h1",{"aria-label":"Learn data, design, marketing, web and accounts skills Mumbai's teams hire for.",className:"text-3xl sm:text-5xl lg:text-7xl font-bold text-deep tracking-tight leading-[1.08] break-words",children:[t.jsx("span",{children:"Learn "}),xe.rotatingText&&!a?t.jsx("span",{className:"inline-block min-w-[9ch] text-left align-baseline","aria-hidden":"true",children:t.jsx(Sa,{texts:["data","design","marketing","web","accounts"],mainClassName:"inline-flex text-primary font-bold",rotationInterval:2400,staggerDuration:.03})}):t.jsx("span",{className:"text-primary font-bold",children:"data"})," ",t.jsx("br",{className:"sm:hidden"}),"skills Mumbai's teams ",t.jsx("br",{className:"sm:hidden"})," hire for."]}),t.jsx("p",{className:"text-muted text-base sm:text-lg sm:text-[19px] leading-relaxed max-w-xl",children:"Industry-led courses in data, digital marketing, web development, design and accounting, taught in small batches at four Mumbai branches."}),t.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2",children:[t.jsx(Lt,{as:"div",color:"#4a6df0",trailColor:"#2448c9",radius:9999,theme:"light",className:"!p-0 !bg-transparent !border-0 inline-block rounded-full shadow-button",children:t.jsx(Qe,{to:"/courses",size:"lg",variant:"primary",magnet:!0,children:"Explore courses"})}),t.jsx(Qe,{to:"/contact",size:"lg",variant:"ghost",children:"Book a free demo"})]}),t.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-2 text-xs text-muted",children:[t.jsxs("span",{className:"font-semibold text-deep flex items-center gap-1",children:[t.jsx(la,{size:13,className:"text-primary"}),t.jsx("span",{children:"4 Mumbai Branches:"})]}),t.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Goregaon West"}),t.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Behram Baug"}),t.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Jogeshwari West"}),t.jsx("span",{className:"bg-surface px-2.5 py-1 rounded-full border border-line/60",children:"Motilal Nagar"})]})]}),t.jsxs("div",{className:"lg:col-span-5 flex justify-center relative",children:[t.jsx(Ma,{}),xe.stickerPeel&&t.jsx("div",{className:"absolute -top-6 -right-6 hidden sm:block w-28 h-28 pointer-events-auto z-20",children:t.jsx(pt,{isCanvasOrWebGL:!0,fallback:t.jsx("div",{className:"w-24 h-24 rounded-[22px] bg-surface/95 backdrop-blur border border-line/80 shadow-md p-2 hover:rotate-3 transition-transform flex items-center justify-center",children:t.jsx("img",{src:"/assets/recognition/job-assistance-badge.png",alt:"100% job assistance",className:"w-full h-full object-contain"})}),children:t.jsx($a,{imageSrc:"/assets/recognition/job-assistance-badge.png",width:100,peelDirection:45,peelBackHoverPct:35,peelBackActivePct:50,finish:"gloss",draggable:!1,className:"cursor-pointer"})})})]})]})})]}),t.jsx("section",{className:"bg-soft/70 border-y border-line/70 py-8 sm:py-10",children:t.jsx("div",{className:"max-w-content mx-auto px-4 sm:px-6",children:t.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center",children:[t.jsxs("div",{className:"p-3",children:[t.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-deep font-display tracking-tight flex items-center justify-center",children:xe.countUp&&!a?t.jsx(Ze,{to:St.length,duration:1.6}):St.length}),t.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Mumbai branches"})]}),t.jsxs("div",{className:"p-3",children:[t.jsxs("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display tracking-tight flex items-center justify-center",children:[xe.countUp&&!a?t.jsx(Ze,{to:Ut.length,duration:1.8}):Ut.length,t.jsx("span",{children:"+"})]}),t.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Industry courses"})]}),t.jsxs("div",{className:"p-3",children:[t.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-deep font-display tracking-tight flex items-center justify-center",children:xe.countUp&&!a?t.jsx(Ze,{to:100,duration:2,suffix:"%"}):"100%"}),t.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Job assistance"})]}),t.jsxs("div",{className:"p-3",children:[t.jsx("p",{className:"text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-display tracking-tight flex items-center justify-center",children:xe.countUp&&!a?t.jsx(Ze,{to:6,duration:1.5}):6}),t.jsx("p",{className:"text-xs sm:text-sm font-semibold text-muted mt-1.5",children:"Educational pillars"})]})]})})}),t.jsx("section",{className:"max-w-content mx-auto px-4 sm:px-6",children:t.jsx(Ce,{children:t.jsxs("div",{className:"bg-surface border border-line/80 rounded-panel p-5 sm:p-8 shadow-card",children:[t.jsx("p",{className:"text-center text-xs font-bold uppercase tracking-wider text-muted mb-6",children:"Recognized and certified for vocational excellence"}),t.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-center",children:Ya.map(n=>t.jsxs("div",{className:"p-4 text-center rounded-2xl bg-background border border-line/70 hover:border-primary/40 hover:shadow-sm transition-all duration-300 flex flex-col items-center justify-center min-h-[105px] group",children:[n.image?t.jsx("img",{src:n.image,alt:n.name,className:"h-9 w-auto object-contain mb-2 group-hover:scale-105 transition-transform",loading:"lazy"}):n.icon?t.jsx("div",{className:"w-8 h-8 rounded-full bg-soft text-primary flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform",children:t.jsx(n.icon,{size:18})}):null,t.jsx("p",{className:"text-xs sm:text-sm font-bold text-deep leading-tight",children:n.name}),t.jsx("p",{className:"text-[11px] text-muted mt-0.5",children:n.desc})]},n.name))})]})})}),t.jsx("section",{className:"max-w-content mx-auto px-4 sm:px-6",children:t.jsx(Ce,{children:t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[t.jsxs("div",{className:"lg:col-span-5 space-y-6 text-left",children:[t.jsx("h2",{className:"text-[clamp(32px,4.4vw,52px)] font-bold text-deep tracking-tight leading-tight",children:"Pick your track."}),t.jsx("p",{className:"text-muted text-base sm:text-lg leading-relaxed",children:"Explore specialized technology tracks designed around real job requirements, hands-on lab projects, and direct Mumbai recruitment drives."}),t.jsx("div",{className:"pt-2",children:t.jsx(Qe,{to:"/courses",size:"lg",variant:"primary",children:"Explore courses"})})]}),t.jsx("div",{className:"lg:col-span-7 flex justify-center w-full overflow-hidden sm:overflow-visible",children:xe.cardSwap&&!a?t.jsx("div",{className:"relative w-full max-w-[480px] h-[340px] sm:h-[380px] flex items-center justify-center",children:t.jsx(ya,{width:p,height:260,cardRadius:22,visibleCards:4,theme:"light",autoplay:!0,pauseOnHover:!0,delay:3500,className:"w-full h-full",children:Jt.map(n=>{const c=n.icon;return t.jsx(wa,{children:t.jsxs("div",{className:"w-full h-full p-6 sm:p-7 flex flex-col justify-between bg-surface rounded-card border border-line/90 shadow-card text-left select-none",children:[t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("div",{className:`w-11 h-11 rounded-xl ${n.color} border flex items-center justify-center shadow-sm`,children:t.jsx(c,{size:22})}),t.jsx("span",{className:"text-xs font-semibold px-2.5 py-0.5 rounded-full bg-background border border-line/70 text-muted",children:n.count})]}),t.jsx("h3",{className:"text-xl font-bold text-deep mb-2",children:n.title}),t.jsx("p",{className:"text-xs sm:text-sm text-muted leading-relaxed line-clamp-3",children:n.desc})]}),t.jsx("div",{className:"pt-4 border-t border-line/50 flex items-center justify-between text-xs font-semibold text-primary",children:t.jsxs(Je,{to:n.link,className:"hover:underline flex items-center gap-1",children:[t.jsx("span",{children:"Browse track"}),t.jsx(_t,{size:14})]})})]})},n.title)})})}):t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full",children:Jt.map(n=>{const c=n.icon;return t.jsx(Je,{to:n.link,className:"bg-surface border border-line/80 rounded-card p-5 shadow-card hover:border-primary/40 transition-all flex flex-col justify-between",children:t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-3",children:[t.jsx("div",{className:`w-9 h-9 rounded-lg ${n.color} border flex items-center justify-center`,children:t.jsx(c,{size:18})}),t.jsx("span",{className:"text-xs text-muted font-medium",children:n.count})]}),t.jsx("h3",{className:"text-base font-bold text-deep",children:n.title}),t.jsx("p",{className:"text-xs text-muted mt-1 line-clamp-2",children:n.desc})]})},n.title)})})})]})})}),t.jsx("section",{className:"max-w-content mx-auto px-4 sm:px-6 content-auto",children:t.jsxs(Ce,{children:[t.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-14",children:[t.jsx("h2",{className:"text-[clamp(32px,4.4vw,52px)] font-bold text-deep",children:"Why Infodesk."}),t.jsx("p",{className:"text-muted text-base sm:text-lg mt-3",children:"Six foundational pillars taken directly from our educational charter to ensure every student succeeds."})]}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:Ka.map(n=>{const c=n.icon;return t.jsxs(Ea,{spotlightColor:"rgba(36, 72, 201, 0.16)",shape:"circle",intensity:.22,theme:"light",className:"!bg-surface !rounded-card p-6 transition-all duration-300",children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("div",{className:"w-10 h-10 rounded-xl bg-soft text-primary flex items-center justify-center shadow-sm",children:t.jsx(c,{size:20})}),t.jsx("span",{className:"font-mono text-xs font-bold text-muted/60 bg-background px-2 py-0.5 rounded-md border border-line/50",children:n.num})]}),t.jsx("div",{className:"flex items-center gap-2 mb-1.5",children:t.jsx("h3",{className:"text-lg font-bold text-deep",children:n.title})}),t.jsx("p",{className:"text-muted text-sm leading-relaxed mb-4",children:n.desc}),t.jsx("div",{className:"pt-3 border-t border-line/40",children:t.jsx("span",{className:"inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-soft/60 text-deep",children:n.tag})})]},n.title)})})]})}),t.jsx("section",{className:"max-w-content mx-auto px-4 sm:px-6 content-auto",children:t.jsxs(Ce,{children:[t.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-10",children:[t.jsx("div",{className:"flex justify-center mb-3.5",children:t.jsx(Na,{variant:"pill"})}),t.jsx("h2",{className:"text-[clamp(32px,4.4vw,52px)] font-bold text-deep",children:"Student voices."}),t.jsx("p",{className:"text-muted text-base sm:text-lg mt-3",children:"Hear verified feedback from students who transformed their technical careers through our Mumbai batches."})]}),t.jsx("div",{className:"w-full max-w-lg h-[340px] sm:h-[360px] mx-auto relative",children:t.jsx(Aa,{cards:d,layout:"fan",visible:4,spread:.3,depth:.4,radius:22,sendToBackOnClick:!0,autoplay:!a,autoplayDelay:4500,pauseOnHover:!0})}),t.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-6 mt-8",children:[t.jsxs(Je,{to:"/placements",className:"inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-bright transition-colors",children:[t.jsx("span",{children:"Read more placement stories"}),t.jsx(_t,{size:15})]}),t.jsx("span",{className:"hidden sm:inline text-line",children:"•"}),t.jsxs("a",{href:Ft.shareUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-deep hover:text-primary transition-colors group",children:[t.jsx(kt,{className:"w-3.5 h-3.5"}),t.jsx("span",{children:"Read all 122+ reviews on Google"}),t.jsx(Mt,{size:13,className:"text-muted group-hover:text-primary transition-colors"})]})]})]})}),t.jsx("section",{className:"max-w-content mx-auto px-4 sm:px-6 content-auto",children:t.jsx(Ce,{children:t.jsxs("div",{className:"bg-[#101f5c] text-white rounded-band p-5 sm:p-8 lg:p-14 shadow-signature overflow-hidden relative",children:[t.jsx("div",{className:"absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-bright/20 blur-3xl pointer-events-none"}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10",children:[t.jsxs("div",{className:"lg:col-span-7 space-y-5",children:[t.jsxs("span",{className:"inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/95 border border-white/20",children:[t.jsx(ba,{size:13,className:"text-amber-400 fill-amber-400"}),t.jsx("span",{children:"National Institutional Honor"})]}),t.jsx("h2",{className:"text-[clamp(28px,3.8vw,44px)] font-bold text-white tracking-tight leading-tight",children:"India's Best Institute award, honored by Ashneer Grover."}),t.jsx("p",{className:"text-white/80 text-base leading-relaxed max-w-xl",children:"Our institution was recognized nationally for educational excellence and quality career training, with the prestigious award presented personally by entrepreneur Ashneer Grover."}),t.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-4",children:[t.jsx(Qe,{to:"/about",size:"md",variant:"white",children:"Read the award story"}),t.jsx("span",{className:"text-xs text-white/60 font-mono",children:"Official ceremony · Delhi, India"})]})]}),t.jsxs("div",{className:"lg:col-span-5 grid grid-cols-2 gap-3.5",children:[t.jsx("div",{className:"rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/20 group",children:t.jsx("img",{src:"/assets/awards/ashneer-award-main.jpg",alt:"Ashneer Grover presenting India's Best Institute award to Infodesk Computer Education",className:"w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500",loading:"lazy"})}),t.jsx("div",{className:"rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-black/20 group",children:t.jsx("img",{src:"/assets/awards/ashneer-award-1.jpg",alt:"Infodesk team on stage at national award ceremony",className:"w-full h-48 sm:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-500",loading:"lazy"})})]})]})]})})}),t.jsxs("section",{className:"w-full max-w-full overflow-hidden py-8 border-y border-line/60 bg-surface",children:[t.jsx("div",{className:"max-w-content mx-auto px-4 sm:px-6 mb-4 text-center",children:t.jsx("p",{className:"text-xs uppercase font-bold tracking-wider text-muted",children:"Industry tools and technologies taught in our labs"})}),a?t.jsx("div",{className:"max-w-content mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-3",children:Qt.map(n=>t.jsxs("span",{className:"inline-flex items-center gap-2 text-sm font-semibold text-deep px-4 py-2 rounded-full bg-soft border border-primary/20 shadow-sm",children:[t.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-primary inline-block"}),t.jsx("span",{children:n.name}),t.jsx("span",{className:"text-[10px] text-muted font-normal bg-white/60 px-1.5 py-0.5 rounded",children:n.cat})]},n.name))}):t.jsx("div",{className:"w-full max-w-full overflow-hidden py-1",children:t.jsx(Ra,{logos:Qt,ariaLabel:"Industry tools and technologies",speed:60,direction:"left",gap:24,pauseOnHover:!0,fadeOut:!0,fadeOutWidth:.12,renderItem:n=>t.jsxs("span",{className:"inline-flex items-center gap-2 text-sm font-semibold text-deep px-4 py-2 rounded-full bg-soft border border-primary/25 shadow-sm transition-transform hover:scale-105 select-none",children:[t.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-primary inline-block"}),t.jsx("span",{children:n.name}),t.jsx("span",{className:"text-[10px] text-muted font-normal bg-white/70 px-1.5 py-0.5 rounded",children:n.cat})]},n.name)})})]}),t.jsx("section",{className:"max-w-content mx-auto px-4 sm:px-6",children:t.jsx(Ce,{children:t.jsxs("div",{className:"bg-deep rounded-band p-5 sm:p-8 lg:p-14 text-center text-white space-y-6 shadow-signature relative overflow-hidden",children:[xe.homeClosingBanner&&!a&&t.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-30 z-0 overflow-hidden",children:t.jsx(pt,{isCanvasOrWebGL:!0,fallback:t.jsx("div",{className:"w-full h-full bg-deep"}),children:t.jsx(Ht,{shape:"rise",cellSize:16,density:.6,glyphOpacity:.6,colors:["#10173a","#13266f","#2448c9","#4a6df0"],characters:" =+xX0S8#@",speed:.4,mouseInteraction:!1,className:"w-full h-full"})})}),t.jsxs("div",{className:"relative z-10 space-y-6",children:[t.jsx("h2",{className:"text-[clamp(30px,4.2vw,48px)] font-bold text-white tracking-tight",children:"Try a free demo class."}),t.jsx("p",{className:"text-white/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed",children:"Experience our teaching firsthand before enrolling. Visit any of our four Mumbai branches or attend a preview session with our faculty."}),t.jsx("div",{className:"pt-2 flex justify-center",children:t.jsx(Lt,{as:Je,to:"/contact",backgroundColor:"#f6f5f1",textColor:"#13266f",color:"#4a6df0",trailColor:"#a5d8ff",radius:999,duration:5,glow:.6,className:"inline-flex items-center justify-center font-bold text-sm sm:text-base px-8 py-3.5 min-h-[48px] rounded-full shadow-lg hover:shadow-xl transition-all",children:"Book your demo"})})]})]})})})]})}export{lr as default};
