import{A as e,B as t,C as n,F as r,H as i,I as a,L as o,M as s,O as c,Q as ee,U as te,V as l,X as u,Y as d,Z as f,b as ne,et as re,h as p,i as m,j as ie,n as h,p as g,r as _,s as ae,t as oe,u as se,w as v,y as ce,z as le}from"./three.module.CK0cdZnF.js";import{i as y,n as ue,r as de,t as fe}from"./OutputPass.CB6AD6Ha.js";var b=`
  float h2(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
  float nv(vec2 p){ return 0.55 * vn(p) + 0.3 * vn(p * 2.1 + 3.7) + 0.15 * vn(p * 4.3 + 1.1); }
`,x=`
  uniform float uClaro;
  vec3 ceu(vec3 d, float t){
    float h = d.y;
    float nevoa = nv(vec2(atan(d.x, -d.z) * 3.0 + t * 0.015, h * 6.0 - t * 0.01)) * 0.6 + nv(vec2(atan(d.x, -d.z) * 7.0 - t * 0.02, h * 11.0)) * 0.4;
    vec3 c = mix(vec3(0.40, 0.415, 0.44), vec3(0.075, 0.08, 0.09), smoothstep(0.0, 0.5, h));
    c += vec3(0.10) * smoothstep(0.4, 0.85, nevoa) * smoothstep(0.45, 0.02, h);
    float frente = max(0.0, -d.z);
    c += vec3(0.20, 0.21, 0.22) * pow(frente, 6.0) * smoothstep(0.35, 0.0, h);
    return c * uClaro;
  }
`;function pe(e,n){return new t({side:1,depthWrite:!1,uniforms:{uT:e,uClaro:n},vertexShader:`varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:b+x+`uniform float uT; varying vec3 vD; void main(){ vec3 d = normalize(vD); gl_FragColor = vec4(ceu(vec3(d.x, max(d.y, 0.0), d.z), uT), 1.0); }`})}function me(e,n,r,i){return new t({uniforms:{uT:e,uCam:n,uLuzes:r,uClaro:i},vertexShader:`varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:b+x+`uniform float uT; uniform vec3 uCam; uniform vec4 uLuzes[6]; varying vec3 vW;
      float altura(vec2 p){
        float a = (nv(p * vec2(0.9, 2.2) + vec2(uT * 0.12, 0.0)) - 0.5) * 0.05 + sin(p.x * 0.6 + p.y * 0.9 - uT * 0.8) * 0.012;
        for (int i = 0; i < 6; i++) { vec4 l = uLuzes[i]; if (l.w <= 0.0) continue; float r = length(p - l.xz); a += sin(r * 6.0 - uT * 1.6) * 0.02 * exp(-r * 0.12) * min(l.w, 1.0); }
        return a;
      }
      void main(){
        vec2 p = vW.xz; float dist = length(uCam - vW);
        float e = 0.03 + dist * 0.004;
        float h0 = altura(p), hx = altura(p + vec2(e, 0.0)), hz = altura(p + vec2(0.0, e));
        vec3 n = normalize(vec3(-(hx - h0) / e, 1.0, -(hz - h0) / e));
        float g = vn(p * 60.0) * 0.6 + vn(p * 190.0 + 3.1) * 0.4, gz = vn(p * 60.0 + 7.0) * 0.6 + vn(p * 190.0 + 9.7) * 0.4;
        n = normalize(n + vec3(g - 0.5, 0.0, gz - 0.5) * 0.16 * exp(-dist * 0.05));
        vec3 v = normalize(uCam - vW), R = reflect(-v, n);
        float fres = 0.04 + 0.96 * pow(1.0 - max(dot(n, v), 0.0), 5.0);
        vec3 cor = vec3(0.035, 0.037, 0.041) * uClaro * (0.75 + 0.5 * g) + ceu(vec3(R.x, max(R.y, 0.0), R.z), uT) * fres * 0.6;
        for (int i = 0; i < 6; i++) {
          vec4 l = uLuzes[i]; if (l.w <= 0.0) continue;
          vec3 L = l.xyz - vW; float dl = length(L); L /= dl;
          vec3 H = normalize(L + v);
          cor += vec3(0.95, 0.97, 1.0) * l.w * (pow(max(dot(n, H), 0.0), 160.0) * 2.0 + max(dot(n, L), 0.0) * 0.05) / (1.0 + dl * dl * 0.04);
        }
        vec3 horiz = normalize(vec3(vW.x - uCam.x, 0.0, vW.z - uCam.z));
        cor = mix(ceu(horiz, uT), cor, exp(-dist * 0.022));
        gl_FragColor = vec4(cor, 1.0);
      }`})}var S=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),C=e=>(e=S(e),e*e*(3-2*e)),he=`
vec3 m289(vec3 x){return x-floor(x*(1./289.))*289.;} vec4 m289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 perm(vec4 x){return m289(((x*34.)+1.)*x);} vec4 tis(vec4 r){return 1.79284291400159-.85373472095314*r;}
float snoise(vec3 v){const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
 vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;
 vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
 i=m289(i);vec4 p=perm(perm(perm(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
 float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
 vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
 vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
 vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
 vec4 nm=tis(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=nm.x;p1*=nm.y;p2*=nm.z;p3*=nm.w;
 vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
 return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}
float fbm(vec3 p){float f=0.,a=.5;for(int i=0;i<4;i++){f+=a*snoise(p);p*=2.03;a*=.5;}return f;}
`;function ge(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.18,`rgba(255,255,255,.45)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new m(e)}var _e=[{nome:`Design`,linha:`A vitrine com a cara do seu negócio.`,tipo:0,pos:[-26,3.2,-34]},{nome:`Governança Digital`,linha:`Cada cliente e cada dado num lugar só, com dono.`,tipo:1,pos:[30,3.6,-22]},{nome:`Automações`,linha:`O repetitivo roda sozinho, sobre uma base arrumada.`,tipo:2,pos:[4,3.4,-58]}];function ve(m,b={}){let x=m.querySelector(`canvas`),ve=m.querySelector(`[data-card]`),ye=m.querySelector(`[data-lista]`),be=m.querySelector(`[data-aviso]`);m.querySelector(`[data-fim]`);let w=matchMedia(`(max-width: 860px), (pointer: coarse)`).matches,T=new oe({canvas:x,antialias:!1,powerPreference:`high-performance`});T.setPixelRatio(Math.min(devicePixelRatio||1,w?1.3:1.6)),T.toneMapping=4,T.toneMappingExposure=1;let E=new le,D=new c(62,1,.05,400),xe=ge(),O={value:0},Se={value:new u},Ce={value:.42},k={value:[,,,,,,].fill(0).map(()=>new f(0,0,0,0))},we=new n(new l(300,48,24),pe(O,Ce));E.add(we);let Te=new n(new e(500,500),me(O,Se,k,Ce));Te.rotation.x=-Math.PI/2,E.add(Te);let Ee=w?9e3:22e3,A=new Float32Array(Ee*3),De=new Float32Array(Ee);for(let e=0;e<Ee;e++)A[e*3]=(Math.random()-.5)*140,A[e*3+1]=Math.random()*16-1,A[e*3+2]=(Math.random()-.5)*140-20,De[e]=Math.random();let Oe=new _;Oe.setAttribute(`position`,new h(A,3)),Oe.setAttribute(`aS`,new h(De,1));let ke=new ie(Oe,new t({transparent:!0,depthWrite:!1,blending:2,uniforms:{uT:O,uCam:Se,uPx:{value:T.getPixelRatio()}},vertexShader:he+`attribute float aS; uniform float uT, uPx; uniform vec3 uCam; varying float vA;
      void main(){
        vec3 p = position;
        float t = uT * (0.04 + aS * 0.03);
        vec3 q = p * 0.045;
        p += vec3(snoise(q + vec3(t, 0., 0.)), snoise(q + vec3(0., t, 3.1)) * 0.5, snoise(q + vec3(5.2, 0., t))) * 9.0;
        p.y += sin(uT * 0.2 + aS * 30.0) * 0.6;
        p.xz = uCam.xz + mod(p.xz - uCam.xz + 70.0, 140.0) - 70.0;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float dist = -mv.z;
        vA = (0.25 + 0.75 * aS) * smoothstep(90.0, 10.0, dist) * smoothstep(0.3, 2.5, dist);
        gl_PointSize = (1.2 + aS * 2.4) * uPx * (22.0 / max(dist, 1.0));
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`varying float vA; void main(){ vec2 c = gl_PointCoord - .5; float d = length(c); if (d > .5) discard; gl_FragColor = vec4(vec3(0.85, 0.88, 0.95) * vA * smoothstep(.5, 0., d), 1.0); }`}));ke.frustumCulled=!1,E.add(ke);let j=_e.map((e,r)=>{let a=new g;a.position.set(...e.pos);let o={uT:O,uTipo:{value:e.tipo},uVivo:{value:0},uPerto:{value:0},uDorme:{value:+(e.tipo===2)}},c=w?3800:9e3,ee=new Float32Array(c*3),l=new Float32Array(c*3),d=new Float32Array(c);for(let e=0;e<c;e++){let t=new u().randomDirection();ee.set([t.x,t.y,t.z],e*3),l.set([Math.random(),Math.random(),Math.random()],e*3),d[e]=+(Math.random()<.16)}let f=new _;f.setAttribute(`position`,new h(ee,3)),f.setAttribute(`aRnd`,new h(l,3)),f.setAttribute(`aRastro`,new h(d,1)),o.uDispersa={value:0},o.uPx={value:T.getPixelRatio()};let m=new ie(f,new t({uniforms:o,transparent:!0,depthWrite:!0,vertexShader:he+`uniform float uT, uTipo, uVivo, uPerto, uDorme, uDispersa, uPx, uRevela; attribute vec3 aRnd; attribute float aRastro; varying float vA; varying float vLuz;
        void main(){
          vec3 n = normalize(position);
          float d;
          if (uTipo < 0.5) d = fbm(n * 1.3 + vec3(0., uT * 0.3, uT * 0.2)) * (0.85 + 0.4 * uVivo);
          else if (uTipo < 1.5) { vec3 f = abs(fract(n * 4.0 + uT * 0.05) - 0.5); d = (0.18 - min(f.x, min(f.y, f.z))) * (1.1 + 0.6 * uVivo); }
          else { float r = sin(length(n.xy) * 18.0 - uT * 3.0) * 0.5 + 0.5; d = pow(r, 6.0) * (0.35 + 0.5 * uVivo); }
          float raio = 2.1 + d;
          if (aRnd.x < 0.22) raio *= 0.55 + aRnd.y * 0.45;                 // um pouco de miolo
          vec3 p = n * raio * (1.0 - uVivo * 0.04);
          // segurar dispersa a nuvem; dormir espalha e apaga
          p += n * uDispersa * (0.6 + aRnd.z * 2.8) + vec3(snoise(p + uT * 0.5), snoise(p.yzx - uT * 0.4), snoise(p.zxy + uT * 0.3)) * (0.15 * uDispersa + 0.3 * uDorme);
          // rastro: partículas que se soltam e escorrem com o vento, como o pinguim se desfazendo
          float prog = fract(uT * (0.08 + aRnd.y * 0.06) + aRnd.x);
          if (aRastro > 0.5) {
            vec3 vento = normalize(vec3(-0.6, -0.35, 0.25));
            p += vento * prog * prog * (4.0 + aRnd.z * 4.0) + vec3(sin(prog * 9.0 + aRnd.x * 20.0), cos(prog * 7.0 + aRnd.y * 20.0), 0.0) * prog * 0.6;
          }
          // chegar perto: a nuvem cai como poeira e some, revelando o orbe de luz
          float cai = uRevela * (0.6 + aRnd.y * 0.8);
          p.y -= cai * cai * 9.0; p.xz *= 1.0 + cai * 0.6;
          vec3 L = normalize(vec3(-0.4, 0.8, 0.45));
          vLuz = 0.55 + 0.45 * max(dot(n, L), 0.0) + 0.15 * pow(1.0 - abs(n.z), 3.0);
          vA = (1.0 - aRastro * prog) * (1.0 - uDorme * 0.6) * (1.0 - smoothstep(0.35, 0.95, uRevela));
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = (1.3 + aRnd.z * 1.4) * uPx * (34.0 / max(-mv.z, 1.0)) * (1.0 - aRastro * 0.35);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`uniform float uVivo, uDorme; varying float vA; varying float vLuz;
        void main(){
          vec2 c = gl_PointCoord - 0.5; if (dot(c, c) > 0.25) discard;
          vec3 base = vec3(0.34, 0.37, 0.41) * vLuz;
          vec3 col = mix(base, vec3(0.62, 0.66, 0.72) * vLuz, uVivo * 0.7);
          gl_FragColor = vec4(col * (1.0 - uDorme * 0.45), vA);
        }`}));a.add(m),o.uRevela={value:0};let ae=new n(new p(2.1,w?24:48),new t({uniforms:o,transparent:!0,depthWrite:!1,blending:2,vertexShader:he+`uniform float uT, uTipo, uVivo, uPerto; varying vec3 vN; varying vec3 vV; varying float vD;
        void main(){
          vec3 p = position; vec3 n = normalize(position);
          float d;
          if (uTipo < 0.5) { d = fbm(n * 1.3 + vec3(0., uT * 0.3, uT * 0.2)) * (0.95 + 0.5 * uVivo); }
          else if (uTipo < 1.5) { vec3 f = abs(fract(n * 4.0 + uT * 0.05) - 0.5); d = (0.18 - min(f.x, min(f.y, f.z))) * (0.9 + 0.6 * uVivo) + 0.05 * sin(uT * 2.0); }
          else { float r = sin(length(n.xy) * 18.0 - uT * 3.0) * 0.5 + 0.5; d = pow(r, 6.0) * (0.35 + 0.5 * uVivo); }
          d += uPerto * 0.12 * sin(uT * 6.0 + n.y * 10.0);
          p += n * d; vD = d;
          vec4 w = modelMatrix * vec4(p, 1.0);
          vN = normalize(mat3(modelMatrix) * n); vV = normalize(cameraPosition - w.xyz);
          gl_Position = projectionMatrix * viewMatrix * w;
        }`,fragmentShader:`uniform float uT, uTipo, uVivo, uDorme, uRevela; varying vec3 vN; varying vec3 vV; varying float vD;
        void main(){
          float fr = pow(1.0 - abs(dot(vN, vV)), 2.2);
          vec3 iris = 0.5 + 0.5 * cos(6.2831 * (fr * 0.9 + vD * 1.2 + vec3(0.0, 0.33, 0.67)) + uT * 0.3);
          float cheio = uTipo < 0.5 ? 0.22 : (uTipo < 1.5 ? 0.04 : 0.08);
          vec3 c = mix(vec3(0.85, 0.88, 0.95), iris, uTipo < 0.5 ? 0.6 : 0.25) * (fr + cheio) * (0.55 + 1.6 * uVivo);
          c += vec3(1.0) * smoothstep(0.25, 0.6, vD) * (0.15 + 0.8 * uVivo);
          c *= 1.0 - uDorme * 0.75;
          c *= smoothstep(0.2, 0.9, uRevela);
          gl_FragColor = vec4(c, 1.0);
        }`}));ae.visible=!1,a.add(ae);let oe=new ne(new re(new p(3.5,2)),new ce({color:13620960,transparent:!0,opacity:.07,depthWrite:!1}));a.add(oe);let v=new g;a.add(v),e.tipo===1?[2.9,3.6].forEach((e,t)=>{let n=new ne(new re(new p(e,t)),new ce({color:14673648,transparent:!0,opacity:.35,depthWrite:!1,blending:2}));n.userData.v=t?-.12:.18,v.add(n)}):e.tipo===2&&[0,1,2].forEach(e=>{let t=new Float32Array(780);for(let n=0;n<260;n++){let r=n/260*Math.PI*2,i=3.1+e*.5;t.set([Math.cos(r)*i,(Math.random()-.5)*.12,Math.sin(r)*i],n*3)}let n=new _;n.setAttribute(`position`,new h(t,3));let r=new ie(n,new s({map:xe,size:.22,transparent:!0,opacity:.4,depthWrite:!1,blending:2,color:15265528}));r.rotation.set(.5+e*.7,e*1.1,e*.4),r.userData.k=e,v.add(r)});let le=new i(new te({map:xe,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));le.scale.setScalar(3.2),a.add(le);let y=new n(new se(.06,.9,80,16,1,!0),new t({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uT:O,uA:{value:e.tipo===2?.08:.25}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,fragmentShader:`uniform float uT, uA; varying vec2 vUv; void main(){ float a = (1.0 - vUv.y) * smoothstep(0.0, 0.08, vUv.y) * (0.8 + 0.2 * sin(uT * 1.5 + vUv.y * 20.0)); gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * a * uA, 1.0); }`}));return y.geometry.translate(0,40,0),y.scale.y=.001,a.add(y),E.add(a),{...e,g:a,u:o,nucleo:le,facho:y,enxame:null,extra:v,corpoLuz:ae,vivo:0,segura:0,aceso:!1,achado:!1}}),M=new y(T);M.addPass(new de(E,D)),M.addPass(new ue(new d(1,1),.75,.6,.62)),M.addPass(new fe);function Ae(){let e=m.clientWidth,t=m.clientHeight;T.setSize(e,t,!1),M.setSize(e,t),D.aspect=e/t,D.updateProjectionMatrix()}Ae(),new ResizeObserver(Ae).observe(m);let je=0,Me=0;function N(e,t,n=3800){ve.innerHTML=`${e}${t?`<small>${t}</small>`:``}`,ve.classList.add(`ve`),clearTimeout(je),n&&(je=setTimeout(()=>ve.classList.remove(`ve`),n))}function Ne(e){be.textContent=e,be.classList.add(`ve`),clearTimeout(Me),Me=setTimeout(()=>be.classList.remove(`ve`),3400)}let Pe=[`Design`,`Governança`,`Automação`];function P(){ye.innerHTML=j.map((e,t)=>`<li class="${e.achado?`achado`:``} ${e.aceso?`ok`:``} ${b.explorados?.[t]?`visto`:``}" aria-label="${e.nome}: ${e.aceso?`aceso`:e.achado?`encontrado`:`não encontrado`}"><i></i>${Pe[t]}</li>`).join(``)}P();let F=new u(0,1.7,8),I=.42,L=.05,R=0,z=.05,B=0,V=!1,H={x:0,y:0,dentro:!1},U=new Set,W=!1,G=null,Fe=new r,Ie=new d,K=null;x.addEventListener(`pointermove`,e=>{let t=x.getBoundingClientRect();H.x=(e.clientX-t.left)/t.width*2-1,H.y=-((e.clientY-t.top)/t.height)*2+1,H.dentro=!0,G&&e.pointerType!==`mouse`&&(I-=(e.clientX-G.x)*.005,z=S(z+(e.clientY-G.y)*.003,-.5,.6),G={x:e.clientX,y:e.clientY})}),x.addEventListener(`pointerleave`,()=>H.dentro=!1),x.addEventListener(`pointerdown`,e=>{V&&(W=!0,G={x:e.clientX,y:e.clientY},x.setPointerCapture(e.pointerId))}),addEventListener(`pointerup`,()=>{W=!1,G=null}),addEventListener(`keydown`,e=>{V&&(U.add(e.key.toLowerCase()),[`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,` `].includes(e.key.toLowerCase())&&e.preventDefault())}),addEventListener(`keyup`,e=>U.delete(e.key.toLowerCase()));let q={value:0},J=new g;{let e=w?220:480,r=new Float32Array(e*120*2*3),i=0;for(let t=0;t<e;t++){let e=Math.random()**1.6,n=Math.random(),a=t%2;for(let t=0;t<120;t++)for(let o=0;o<2;o++)r.set([(t+o)/120,e,a+n*.5],i*3),i++}let c=new _;c.setAttribute(`position`,new h(r,3));let te=new ne(c,new t({uniforms:{uT:O,uPortal:q},transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT, uPortal; varying float vA;
        void main(){ float s = position.x, u = position.y, anel = floor(position.z), o = fract(position.z) * 2.0;
          float w = uT * 1.4;
          float fenda = 0.62, c0 = anel < 0.5 ? -1.57 + 0.5 * sin(uT * 0.25) : -1.15 + 0.7 * sin(uT * 0.33 + 1.7);
          float th = c0 + fenda * 0.5 + s * (6.2831 - fenda);
          float r = 3.4 * (1.0 + (anel * 0.04) + u * (0.19 * sin(2.0 * th + w + u * 2.6) + 0.11 * sin(3.0 * th - w + 1.9 + u * 2.6) + 0.06 * sin(th + w + 3.1)));
          vec2 der = vec2(cos(uT * 0.3), sin(uT * 0.4)) * 0.07 * 3.4 * u;
          vA = (1.15 - 0.75 * u) * (0.5 + 0.5 * o) * smoothstep(0.0, 0.05, s) * smoothstep(1.0, 0.95, s);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(cos(th) * r + der.x, sin(th) * r + der.y, (u - 0.5) * 0.6 * sin(th * 2.0 + w), 1.0); }`,fragmentShader:`uniform float uPortal; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * vA * 0.016 * min(uPortal, 1.3), 1.0); }`}));te.frustumCulled=!1,J.add(te);let l=document.createElement(`video`);l.src=`/v3/vida-loop.mp4`,l.muted=!0,l.loop=!0,l.playsInline=!0,l.crossOrigin=`anonymous`;let u=new ee(l);u.colorSpace=o,J.userData.vid=l;let d=new n(new ae(3.1,96),new t({uniforms:{uT:O,uPortal:q,uV:{value:u},uVid:{value:0},uGl:{value:0},uChama:{value:0}},transparent:!0,depthWrite:!1,side:2,vertexShader:`varying vec2 vP; void main(){ vP = position.xy / 3.1; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uT, uPortal, uVid, uGl, uChama; uniform sampler2D uV; varying vec2 vP;
        float hs(float n){ return fract(sin(n) * 43758.5453); }
        void main(){ float r = length(vP), a = atan(vP.y, vP.x);
          float giro = 0.35 * (1.0 - r) * sin(uT * 0.4) + uChama * 2.5 * (1.0 - r);
          vec2 q = vec2(cos(a + giro), sin(a + giro)) * pow(r, 1.25);          // lente: o centro fica mais perto
          // glitch: faixas que escorregam e cores que se separam
          float faixa = floor((vP.y + 1.0) * 18.0), corte = step(1.0 - uGl * 0.7, hs(faixa + floor(uT * 20.0)));
          q.x += (hs(faixa * 3.1 + floor(uT * 26.0)) - 0.5) * 0.5 * uGl * corte;
          vec2 uv = q * vec2(0.42, 0.75) + 0.5, sep = vec2(0.012 + 0.03 * uGl, 0.0);
          vec3 c = vec3(texture2D(uV, uv + sep).r, texture2D(uV, uv).g, texture2D(uV, uv - sep).b);
          c = mix(vec3(dot(c, vec3(0.3, 0.59, 0.11))), c, 0.35) * 1.15;      // quase preto e branco, com um pouco de cor
          c *= uVid * (1.0 - corte * uGl * 0.5);
          // antes do vídeo: um véu de luz parado, com respiração, como uma superfície d'água em pé
          float veu = (0.18 + 0.12 * sin(uT * 1.3 + r * 9.0)) * (1.0 - r) + exp(-r * 4.0) * 0.25;
          c += vec3(0.8, 0.85, 0.92) * veu * (1.0 - uVid) * (0.6 + 0.4 * uChama);
          // aberração na borda, como uma lente grossa
          c *= 1.0 + 0.25 * smoothstep(0.6, 0.95, r);
          float borda = smoothstep(1.0, 0.72, r);
          float aro = exp(-pow((r - 0.93) * 14.0, 2.0));
          c = c * borda * 0.85 + vec3(0.9, 0.94, 1.0) * aro * 0.35;
          gl_FragColor = vec4(c, (borda * 0.95 + aro * 0.6) * min(1.0, uPortal)); }`}));d.position.z=-.4,J.add(d),J.userData.janela=d;let f=[];for(let e=1;e<=6;e++){let t=new n(new a(2.9-e*.12,3-e*.12,96),new v({color:15134200,transparent:!0,opacity:0,depthWrite:!1,blending:2,side:2}));t.position.z=-.6-e*.9,t.scale.setScalar(1-e*.1),J.add(t),f.push(t)}J.userData.fundo=f,l.preload=`auto`,l.load();let re=w?500:1400,p=new Float32Array(re*3);for(let e=0;e<re;e++){let t=Math.random()*6.283,n=3.6+Math.random()*2.6,r=(Math.random()-.5)*2.4;p.set([Math.cos(t)*n,Math.sin(t)*n,r],e*3)}let m=new _;m.setAttribute(`position`,new h(p,3));let g=new ie(m,new s({color:15265528,size:.06,transparent:!0,opacity:.7,depthWrite:!1,blending:2}));J.add(g),J.userData.poeira=g}let Y=new n(new a(.96,1,128),new v({color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:2,side:2}));Y.rotation.x=-Math.PI/2,E.add(Y),J.position.set(0,3.3,-92),J.visible=!1,E.add(J);let Le=0,X=!1,Z=new u,Re=new u,ze=performance.now(),Be=!0,Q=0,$=!1;new IntersectionObserver(e=>{Be=e[0].isIntersecting,Be&&!Q&&(Q=requestAnimationFrame(Ve))}).observe(m);function Ve(e){Q=0;let t=S((e-ze)/1e3,0,.05);ze=e;let n=e/1e3;if(O.value=n,V&&H.dentro&&!w){let e=Math.sign(H.x)*Math.max(0,Math.abs(H.x)-.25)/.75;R+=(-e*1.3-R)*(1-Math.exp(-t*5)),z=S(H.y*.45,-.4,.5)}else R*=.9;I+=R*t,L+=(z-L)*(1-Math.exp(-t*4)),Ie.set(V&&!w?H.x:0,V&&!w?H.y:0),Fe.setFromCamera(Ie,D),K=null;for(let e of j)Fe.ray.distanceToPoint(e.g.position)<2.8&&e.g.position.distanceTo(F)<16&&(K=e);let r=W&&!K||U.has(`w`)||U.has(`arrowup`),i=U.has(`s`)||U.has(`arrowdown`);if((U.has(`a`)||U.has(`arrowleft`))&&(I+=t*1.4),(U.has(`d`)||U.has(`arrowright`))&&(I-=t*1.4),B+=((V?r?7.5:i?-4:0:.9)-B)*(1-Math.exp(-t*2.5)),Re.set(-Math.sin(I),0,-Math.cos(I)),F.addScaledVector(Re,B*t),!$)for(let e of j){Z.copy(F).sub(e.g.position),Z.y=0;let t=Z.length();t<4.2&&F.addScaledVector(Z.normalize(),4.2-t)}let a=Math.hypot(F.x,F.z+25);a>85&&(F.x*=85/a,F.z=(F.z+25)*85/a-25);let o=Math.sin(n*7)*.04*Math.min(1,Math.abs(B)/6);D.position.set(F.x,1.7+o,F.z),Z.set(F.x-Math.sin(I)*Math.cos(L),1.7+Math.sin(L),F.z-Math.cos(I)*Math.cos(L)),D.lookAt(Z),Se.value.copy(F);let s=j[1];if(j.forEach((e,r)=>{let i=e.g.position.distanceTo(F);S(1-(i-5)/14)>.5&&!e.achado&&(e.achado=!0,P(),N(e.nome,e.tipo===2&&!s.aceso?`Adormecido. Automação só roda sobre base arrumada.`:`Segure sobre o orbe para acordá-lo.`));let a=e.tipo===2&&!s.aceso;V&&W&&K===e&&!e.aceso?a?e._av||(Ne(`Automação só roda sobre base arrumada. Acorde a Governança Digital primeiro.`),e._av=1,setTimeout(()=>e._av=0,2500)):(e.segura=Math.min(1,e.segura+t/1.6),e.segura>=1&&(e.aceso=!0,P(),b.aoAcender?setTimeout(()=>b.aoAcender(r),900):N(e.nome,e.linha,5200),e===s&&Ne(`Algo acordou ao longe: Automações.`))):e.aceso||(e.segura=Math.max(0,e.segura-t*.8)),e.vivo+=((e.aceso?1:e.segura*.7)-e.vivo)*(1-Math.exp(-t*3)),e.u.uVivo.value=e.vivo,e.u.uPerto.value=+(K===e)*!e.aceso,e.u.uDorme.value+=(+!!a-e.u.uDorme.value)*.05,e.g.rotation.y+=t*(.08+e.vivo*.25),e.g.rotation.x=Math.sin(n*.3+r)*.15,$||(e.g.position.y=_e[r].pos[1]+Math.sin(n*.6+r*2)*.35),e.nucleo.material.opacity=e.vivo*.35+(K===e?.08:0),e.nucleo.scale.setScalar(2.6+e.vivo*3+e.segura*1.5*Math.sin(n*12)*.2),e.acendeFacho=Math.min(1,(e.acendeFacho||0)+(e.aceso?t*.8:0)),e.facho.scale.y=Math.max(.001,C(e.acendeFacho)),e.facho.material.uniforms.uA.value=.65*C(e.acendeFacho),e.u.uDispersa.value=e.segura*(1-e.vivo)*1.2*(1-e.u.uRevela.value),i<11&&(e.revelou=!0),e.u.uRevela.value+=(+!!e.revelou-e.u.uRevela.value)*(1-Math.exp(-t*.9)),e.corpoLuz.visible=e.u.uRevela.value>.01,e.extra.children.forEach(r=>{if(e.tipo===1)r.rotation.y+=t*r.userData.v*(1+e.vivo*2),r.rotation.x+=t*r.userData.v*.5,r.material.opacity=(a?.1:.18)+e.vivo*.45;else{let i=(n*1.6-r.userData.k*.7)%2.1;r.material.opacity=(a?.06:.12+e.vivo*.25)+Math.max(0,1-Math.abs(i-.4)*2.5)*(a?.1:.5+e.vivo*.4),r.rotation.y+=t*(.3+r.userData.k*.15)*(a?.2:1+e.vivo)}})}),j.filter(e=>e.aceso).length/3,!$&&j.every(e=>e.aceso)&&(!b.explorados||b.explorados.every(Boolean))&&($=!0,setTimeout(()=>{N(`A sala está arrumada.`,`As orbes vão até a porta.`,4200),b.aoFinal?.()},1200)),$&&!J.userData.veio&&(J.userData.veio=!0,Le=n,J.position.set(F.x-Math.sin(I)*20,3.3,F.z-Math.cos(I)*20),J.visible=!0,Ne(`Um portal se abriu à sua frente.`),b.aoPortalSurge?.()),J.visible){let e=n-Le,t=C(e/1.4);J.scale.setScalar(Math.max(.001,t*(1+Math.sin(Math.min(1,e/1.4)*Math.PI)*.25))),q.value=Math.max(Math.min(1.6,t+Math.max(0,1-e/.6)*2),q.value*.95),J.lookAt(F.x,3.3,F.z);let r=e%2.6/2.6;Y.position.set(J.position.x,.05,J.position.z),Y.scale.setScalar(1+r*22),Y.material.opacity=(1-r)*.5*t,J.userData.poeira.rotation.z=n*.15;let i=J.userData.janela.material.uniforms,a=e-7.4;a>-.3&&J.userData.vid.paused&&J.userData.vid.play().catch(()=>{}),i.uVid.value=a<0?0:C(a/.6),i.uGl.value=a>0&&a<.6?1-a/.6:Math.random()<.012&&a>.6?.5:0,i.uChama.value=.5+.5*Math.sin(n*2),J.userData.fundo.forEach((e,r)=>{e.material.opacity=t*(.22-r*.03)*(.7+.3*Math.sin(n*2-r*.7))}),a>0&&!J.userData.pronto&&(J.userData.pronto=!0,N(`A sala está arrumada.`,`Atravesse o portal para seguir.`,0),b.aoPortalPronto?.())}{Z.copy(J.position).sub(F),Z.y=0;let e=Z.length();J.visible&&J.userData.pronto&&e<4.5&&V&&!X&&(X=!0,b.aoPortal?.())}if($&&J.visible){let e=n-Le,t=Math.cos(J.rotation.y),r=-Math.sin(J.rotation.y);j.forEach((i,a)=>{let o=e-(5+a*.8);if(o<0){let e=[-1,1,0][a],o=[3.3,3.3,7.4][a];Z.set(J.position.x+t*e*6.5,o+Math.sin(n*.8+a*2)*.35,J.position.z+r*e*6.5),i.g.position.lerp(Z,.03)}else if(!i.entrou){let e=C(o/.8);i.g.position.lerp(J.position,.08+e*.2),i.g.scale.setScalar(Math.max(.001,1-e)),e>=.99&&(i.entrou=!0,i.g.visible=!1,q.value=1.6,b.aoOrbeEntra?.(a))}})}if(j.forEach((e,t)=>k.value[t].set(e.g.position.x,e.g.position.y,e.g.position.z,.05+e.vivo*.35+e.u.uRevela.value*.05)),J.visible?k.value[3].set(J.position.x,3.3,J.position.z,.5*Math.min(1,q.value)):k.value[3].w=0,b.aoQuadro&&V){let e=Math.cos(I),t=-Math.sin(I);b.aoQuadro({orbes:j.map(n=>{Z.copy(n.g.position).sub(F),Z.y=0;let r=Z.length(),i=(Z.x*e+Z.z*t)/(r||1);return Z.copy(n.g.position).project(D),{d:r,pan:i,segura:n.segura,aceso:n.aceso,dorme:n.u.uDorme.value>.5,sx:(Z.x+1)/2*innerWidth,sy:(1-Z.y)/2*innerHeight,naTela:Z.z<1&&Math.abs(Z.x)<.95&&Math.abs(Z.y)<.95}}),proxima:j.findIndex(e=>!e.aceso)<0?null:j.findIndex(e=>!e.aceso)})}M.render(),(Be||V)&&(Q=requestAnimationFrame(Ve))}return Q=requestAnimationFrame(Ve),{atualiza(){P()},reinicia(){j.forEach((e,t)=>{e.entrou=!1,e.g.visible=!0,e.g.scale.setScalar(1),e.aceso=e.achado=e.revelou=!1,e.segura=e.vivo=0,e.acendeFacho=0,e.u.uRevela.value=0,e.g.position.set(..._e[t].pos)}),$=!1,X=!1,Le=0,J.visible=!1,J.userData.veio=!1,J.userData.pronto=!1,q.value=0,Y.material.opacity=0,J.userData.vid.pause(),F.set(0,1.7,8),I=.42,L=z=.05,B=0,R=0,P(),N(`Arrumar a sala`,`Encontre as três orbes e segure sobre cada uma para acendê-la.`,4200)},entra(){V=!0,X=!1,m.classList.add(`explorando`),document.documentElement.style.overflow=`hidden`,b.lenis?.()?.stop(),Ae(),N(`Arrumar a sala`,w?`Arraste para olhar. Segure para andar. Encontre os três orbes.`:`Mova o mouse para olhar. Segure o clique para andar. Encontre os três orbes.`,4600),Q||=requestAnimationFrame(Ve)},sai(){V=!1,W=!1,m.classList.remove(`explorando`),document.documentElement.style.overflow=``,b.lenis?.()?.start(),Ae()}}}export{pe as n,me as r,ve as t};