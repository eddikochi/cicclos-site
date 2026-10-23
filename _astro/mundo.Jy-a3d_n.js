import{A as e,B as t,C as n,D as r,F as i,H as a,I as o,J as s,P as c,Q as ee,R as l,V as te,X as ne,b as re,h as u,i as d,j as ie,k as f,n as p,p as ae,q as oe,r as m,s as se,t as ce,u as le,w as h,y as ue,z as g}from"./three.module.BosVRqpK.js";import{i as _,n as v,r as de,t as fe}from"./OutputPass.BA4a3ySJ.js";var y=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),b=e=>(e=y(e),e*e*(3-2*e)),x=`
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
`;function pe(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.18,`rgba(255,255,255,.45)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new d(e)}var me=[{nome:`Design`,linha:`A vitrine com a cara do seu negócio.`,tipo:0,pos:[-26,3.2,-34]},{nome:`Governança Digital`,linha:`Cada cliente e cada dado num lugar só, com dono.`,tipo:1,pos:[30,3.6,-22]},{nome:`Automações`,linha:`O repetitivo roda sozinho, sobre uma base arrumada.`,tipo:2,pos:[4,3.4,-58]}];function S(d,S={}){let C=d.querySelector(`canvas`),he=d.querySelector(`[data-card]`),ge=d.querySelector(`[data-lista]`),_e=d.querySelector(`[data-aviso]`);d.querySelector(`[data-fim]`);let w=matchMedia(`(max-width: 860px), (pointer: coarse)`).matches,T=new ce({canvas:C,antialias:!1,powerPreference:`high-performance`});T.setPixelRatio(Math.min(devicePixelRatio||1,w?1.3:1.6)),T.toneMapping=4,T.toneMappingExposure=1;let E=new l,D=new r(62,1,.05,400),ve=pe(),O={value:0},ye={value:new s},be={value:0},xe=new n(new t(300,48,24),new g({side:1,depthWrite:!1,uniforms:{uT:O,uAcesos:be},vertexShader:`varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,fragmentShader:x+`uniform float uT, uAcesos; varying vec3 vD;
      void main(){
        vec3 d = normalize(vD);
        float h = d.y;
        float n = fbm(vec3(d.xz * 2.2 / (abs(h) + 0.35), uT * 0.025));
        float veu = smoothstep(-0.1, 0.9, n) * smoothstep(-0.15, 0.35, h) * (1.0 - smoothstep(0.55, 1.0, h));
        float facho = pow(max(0.0, snoise(vec3(atan(d.z, d.x) * 3.0, h * 0.6, uT * 0.03))), 3.0) * smoothstep(0.0, 0.5, h);
        vec3 base = mix(vec3(0.010, 0.011, 0.013), vec3(0.045, 0.048, 0.055), smoothstep(-0.2, 0.15, h));
        vec3 c = base + vec3(0.55, 0.6, 0.68) * veu * 0.06 + vec3(0.7, 0.72, 0.8) * facho * 0.08 * (1.0 + uAcesos * 0.4);
        c += vec3(0.04, 0.0, 0.06) * veu * smoothstep(0.2, 0.6, n) * 0.25;
        gl_FragColor = vec4(c, 1.0);
      }`}));E.add(xe);let Se=new n(new f(400,400,1,1),new g({transparent:!0,depthWrite:!1,uniforms:{uT:O,uCam:ye,uAcesos:be},vertexShader:`varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:x+`uniform float uT, uAcesos; uniform vec3 uCam; varying vec3 vW;
      void main(){
        vec2 p = vW.xz * 0.06;
        float n = fbm(vec3(p, uT * 0.05));
        float caust = pow(abs(snoise(vec3(vW.xz * 0.22, uT * 0.18))), 0.35);
        float liq = smoothstep(0.55, 1.0, 1.0 - caust) * 0.6 + smoothstep(0.1, 0.8, n) * 0.25;
        float d = length(vW.xz - uCam.xz);
        float perto = exp(-d * d / 180.0);
        float longe = exp(-d * 0.02);
        vec3 c = vec3(0.6, 0.64, 0.7) * liq * (0.05 + 0.25 * perto) * longe;
        gl_FragColor = vec4(c, 0.9 * longe);
      }`}));Se.rotation.x=-Math.PI/2,E.add(Se);let Ce=w?9e3:22e3,k=new Float32Array(Ce*3),we=new Float32Array(Ce);for(let e=0;e<Ce;e++)k[e*3]=(Math.random()-.5)*140,k[e*3+1]=Math.random()*16-1,k[e*3+2]=(Math.random()-.5)*140-20,we[e]=Math.random();let Te=new m;Te.setAttribute(`position`,new p(k,3)),Te.setAttribute(`aS`,new p(we,1));let Ee=new e(Te,new g({transparent:!0,depthWrite:!1,blending:2,uniforms:{uT:O,uCam:ye,uPx:{value:T.getPixelRatio()}},vertexShader:x+`attribute float aS; uniform float uT, uPx; uniform vec3 uCam; varying float vA;
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
      }`,fragmentShader:`varying float vA; void main(){ vec2 c = gl_PointCoord - .5; float d = length(c); if (d > .5) discard; gl_FragColor = vec4(vec3(0.85, 0.88, 0.95) * vA * smoothstep(.5, 0., d), 1.0); }`}));Ee.frustumCulled=!1,E.add(Ee);let A=me.map((t,r)=>{let i=new ae;i.position.set(...t.pos);let o={uT:O,uTipo:{value:t.tipo},uVivo:{value:0},uPerto:{value:0},uDorme:{value:+(t.tipo===2)}},c=w?3800:9e3,l=new Float32Array(c*3),ne=new Float32Array(c*3),d=new Float32Array(c);for(let e=0;e<c;e++){let t=new s().randomDirection();l.set([t.x,t.y,t.z],e*3),ne.set([Math.random(),Math.random(),Math.random()],e*3),d[e]=+(Math.random()<.16)}let f=new m;f.setAttribute(`position`,new p(l,3)),f.setAttribute(`aRnd`,new p(ne,3)),f.setAttribute(`aRastro`,new p(d,1)),o.uDispersa={value:0},o.uPx={value:T.getPixelRatio()};let oe=new e(f,new g({uniforms:o,transparent:!0,depthWrite:!0,vertexShader:x+`uniform float uT, uTipo, uVivo, uPerto, uDorme, uDispersa, uPx, uRevela; attribute vec3 aRnd; attribute float aRastro; varying float vA; varying float vLuz;
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
        }`}));i.add(oe),o.uRevela={value:0};let se=new n(new u(2.1,w?24:48),new g({uniforms:o,transparent:!0,depthWrite:!1,blending:2,vertexShader:x+`uniform float uT, uTipo, uVivo, uPerto; varying vec3 vN; varying vec3 vV; varying float vD;
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
        }`}));se.visible=!1,i.add(se);let ce=new re(new ee(new u(3.5,2)),new ue({color:13620960,transparent:!0,opacity:.07,depthWrite:!1}));i.add(ce);let h=new ae;i.add(h),t.tipo===1?[2.9,3.6].forEach((e,t)=>{let n=new re(new ee(new u(e,t)),new ue({color:14673648,transparent:!0,opacity:.35,depthWrite:!1,blending:2}));n.userData.v=t?-.12:.18,h.add(n)}):t.tipo===2&&[0,1,2].forEach(t=>{let n=new Float32Array(780);for(let e=0;e<260;e++){let r=e/260*Math.PI*2,i=3.1+t*.5;n.set([Math.cos(r)*i,(Math.random()-.5)*.12,Math.sin(r)*i],e*3)}let r=new m;r.setAttribute(`position`,new p(n,3));let i=new e(r,new ie({map:ve,size:.22,transparent:!0,opacity:.4,depthWrite:!1,blending:2,color:15265528}));i.rotation.set(.5+t*.7,t*1.1,t*.4),i.userData.k=t,h.add(i)});let _=new te(new a({map:ve,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));_.scale.setScalar(3.2),i.add(_);let v=new n(new le(.06,.9,80,16,1,!0),new g({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uT:O,uA:{value:t.tipo===2?.08:.25}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,fragmentShader:`uniform float uT, uA; varying vec2 vUv; void main(){ float a = (1.0 - vUv.y) * smoothstep(0.0, 0.08, vUv.y) * (0.8 + 0.2 * sin(uT * 1.5 + vUv.y * 20.0)); gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * a * uA, 1.0); }`}));return v.geometry.translate(0,40,0),v.scale.y=.001,i.add(v),E.add(i),{...t,g:i,u:o,nucleo:_,facho:v,enxame:null,extra:h,corpoLuz:se,vivo:0,segura:0,aceso:!1,achado:!1}}),j=new _(T);j.addPass(new de(E,D)),j.addPass(new v(new oe(1,1),.75,.6,.62)),j.addPass(new fe);function M(){let e=d.clientWidth,t=d.clientHeight;T.setSize(e,t,!1),j.setSize(e,t),D.aspect=e/t,D.updateProjectionMatrix()}M(),new ResizeObserver(M).observe(d);let De=0,Oe=0;function N(e,t,n=3800){he.innerHTML=`${e}${t?`<small>${t}</small>`:``}`,he.classList.add(`ve`),clearTimeout(De),n&&(De=setTimeout(()=>he.classList.remove(`ve`),n))}function ke(e){_e.textContent=e,_e.classList.add(`ve`),clearTimeout(Oe),Oe=setTimeout(()=>_e.classList.remove(`ve`),3400)}let Ae=[`Design`,`Governança`,`Automação`];function P(){ge.innerHTML=A.map((e,t)=>`<li class="${e.achado?`achado`:``} ${e.aceso?`ok`:``} ${S.explorados?.[t]?`visto`:``}" aria-label="${e.nome}: ${e.aceso?`aceso`:e.achado?`encontrado`:`não encontrado`}"><i></i>${Ae[t]}</li>`).join(``)}P();let F=new s(0,1.7,8),I=.42,L=.05,R=0,z=.05,B=0,V=!1,H={x:0,y:0,dentro:!1},U=new Set,W=!1,G=null,je=new c,Me=new oe,K=null;C.addEventListener(`pointermove`,e=>{let t=C.getBoundingClientRect();H.x=(e.clientX-t.left)/t.width*2-1,H.y=-((e.clientY-t.top)/t.height)*2+1,H.dentro=!0,G&&e.pointerType!==`mouse`&&(I-=(e.clientX-G.x)*.005,z=y(z+(e.clientY-G.y)*.003,-.5,.6),G={x:e.clientX,y:e.clientY})}),C.addEventListener(`pointerleave`,()=>H.dentro=!1),C.addEventListener(`pointerdown`,e=>{V&&(W=!0,G={x:e.clientX,y:e.clientY},C.setPointerCapture(e.pointerId))}),addEventListener(`pointerup`,()=>{W=!1,G=null}),addEventListener(`keydown`,e=>{V&&(U.add(e.key.toLowerCase()),[`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,` `].includes(e.key.toLowerCase())&&e.preventDefault())}),addEventListener(`keyup`,e=>U.delete(e.key.toLowerCase()));let Ne={value:0},q=new ae;{let t=w?220:480,r=new Float32Array(t*120*2*3),i=0;for(let e=0;e<t;e++){let t=Math.random()**1.6,n=Math.random(),a=e%2;for(let e=0;e<120;e++)for(let o=0;o<2;o++)r.set([(e+o)/120,t,a+n*.5],i*3),i++}let a=new m;a.setAttribute(`position`,new p(r,3));let s=new re(a,new g({uniforms:{uT:O,uPortal:Ne},transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT, uPortal; varying float vA;
        void main(){ float s = position.x, u = position.y, anel = floor(position.z), o = fract(position.z) * 2.0;
          float w = uT * 1.4;
          float fenda = 0.62, c0 = anel < 0.5 ? -1.57 + 0.5 * sin(uT * 0.25) : -1.15 + 0.7 * sin(uT * 0.33 + 1.7);
          float th = c0 + fenda * 0.5 + s * (6.2831 - fenda);
          float r = 3.4 * (1.0 + (anel * 0.04) + u * (0.19 * sin(2.0 * th + w + u * 2.6) + 0.11 * sin(3.0 * th - w + 1.9 + u * 2.6) + 0.06 * sin(th + w + 3.1)));
          vec2 der = vec2(cos(uT * 0.3), sin(uT * 0.4)) * 0.07 * 3.4 * u;
          vA = (1.15 - 0.75 * u) * (0.5 + 0.5 * o) * smoothstep(0.0, 0.05, s) * smoothstep(1.0, 0.95, s);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(cos(th) * r + der.x, sin(th) * r + der.y, (u - 0.5) * 0.6 * sin(th * 2.0 + w), 1.0); }`,fragmentShader:`uniform float uPortal; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * vA * 0.016 * min(uPortal, 1.3), 1.0); }`}));s.frustumCulled=!1,q.add(s);let c=document.createElement(`video`);c.src=`/v3/vida-loop.mp4`,c.muted=!0,c.loop=!0,c.playsInline=!0,c.crossOrigin=`anonymous`;let ee=new ne(c);ee.colorSpace=o,q.userData.vid=c;let l=new n(new se(3.1,96),new g({uniforms:{uT:O,uPortal:Ne,uV:{value:ee}},transparent:!0,depthWrite:!1,side:2,vertexShader:`varying vec2 vP; void main(){ vP = position.xy / 3.1; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uT, uPortal; uniform sampler2D uV; varying vec2 vP;
        void main(){ float r = length(vP), a = atan(vP.y, vP.x);
          float giro = 0.35 * (1.0 - r) * sin(uT * 0.4);
          vec2 q = vec2(cos(a + giro), sin(a + giro)) * pow(r, 1.25);          // lente: o centro fica mais perto
          vec2 uv = q * vec2(0.42, 0.75) + 0.5;
          vec3 c = texture2D(uV, uv).rgb;
          c = mix(vec3(dot(c, vec3(0.3, 0.59, 0.11))), c, 0.35) * 1.15;      // quase preto e branco, com um pouco de cor
          float borda = smoothstep(1.0, 0.72, r);
          float aro = exp(-pow((r - 0.93) * 14.0, 2.0));
          c = c * borda * 0.85 + vec3(0.9, 0.94, 1.0) * aro * 0.35;
          gl_FragColor = vec4(c, (borda * 0.95 + aro * 0.6) * min(1.0, uPortal)); }`}));l.position.z=-.4,q.add(l);let te=w?500:1400,u=new Float32Array(te*3);for(let e=0;e<te;e++){let t=Math.random()*6.283,n=3.6+Math.random()*2.6,r=(Math.random()-.5)*2.4;u.set([Math.cos(t)*n,Math.sin(t)*n,r],e*3)}let d=new m;d.setAttribute(`position`,new p(u,3));let f=new e(d,new ie({color:15265528,size:.06,transparent:!0,opacity:.7,depthWrite:!1,blending:2}));q.add(f),q.userData.poeira=f}let J=new n(new i(.96,1,128),new h({color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:2,side:2}));J.rotation.x=-Math.PI/2,E.add(J),q.position.set(0,3.3,-92),q.visible=!1,E.add(q);let Pe=0,Y=!1,X=new s,Fe=new s,Ie=performance.now(),Le=!0,Z=0,Q=!1,Re=0;new IntersectionObserver(e=>{Le=e[0].isIntersecting,Le&&!Z&&(Z=requestAnimationFrame($))}).observe(d);function $(e){Z=0;let t=y((e-Ie)/1e3,0,.05);Ie=e;let n=e/1e3;if(O.value=n,V&&H.dentro&&!w){let e=Math.sign(H.x)*Math.max(0,Math.abs(H.x)-.25)/.75;R+=(-e*1.3-R)*(1-Math.exp(-t*5)),z=y(H.y*.45,-.4,.5)}else R*=.9;I+=R*t,L+=(z-L)*(1-Math.exp(-t*4)),Me.set(V&&!w?H.x:0,V&&!w?H.y:0),je.setFromCamera(Me,D),K=null;for(let e of A)je.ray.distanceToPoint(e.g.position)<2.8&&e.g.position.distanceTo(F)<16&&(K=e);let r=W&&!K||U.has(`w`)||U.has(`arrowup`),i=U.has(`s`)||U.has(`arrowdown`);if((U.has(`a`)||U.has(`arrowleft`))&&(I+=t*1.4),(U.has(`d`)||U.has(`arrowright`))&&(I-=t*1.4),B+=((V?r?7.5:i?-4:0:.9)-B)*(1-Math.exp(-t*2.5)),Fe.set(-Math.sin(I),0,-Math.cos(I)),F.addScaledVector(Fe,B*t),!Q)for(let e of A){X.copy(F).sub(e.g.position),X.y=0;let t=X.length();t<4.2&&F.addScaledVector(X.normalize(),4.2-t)}let a=Math.hypot(F.x,F.z+25);a>85&&(F.x*=85/a,F.z=(F.z+25)*85/a-25);let o=Math.sin(n*7)*.04*Math.min(1,Math.abs(B)/6);D.position.set(F.x,1.7+o,F.z),X.set(F.x-Math.sin(I)*Math.cos(L),1.7+Math.sin(L),F.z-Math.cos(I)*Math.cos(L)),D.lookAt(X),ye.value.copy(F);let s=A[1];if(A.forEach((e,r)=>{let i=e.g.position.distanceTo(F);y(1-(i-5)/14)>.5&&!e.achado&&(e.achado=!0,P(),N(e.nome,e.tipo===2&&!s.aceso?`Adormecido. Automação só roda sobre base arrumada.`:`Segure sobre o orbe para acordá-lo.`));let a=e.tipo===2&&!s.aceso;V&&W&&K===e&&!e.aceso?a?e._av||(ke(`Automação só roda sobre base arrumada. Acorde a Governança Digital primeiro.`),e._av=1,setTimeout(()=>e._av=0,2500)):(e.segura=Math.min(1,e.segura+t/1.6),e.segura>=1&&(e.aceso=!0,P(),S.aoAcender?setTimeout(()=>S.aoAcender(r),900):N(e.nome,e.linha,5200),e===s&&ke(`Algo acordou ao longe: Automações.`))):e.aceso||(e.segura=Math.max(0,e.segura-t*.8)),e.vivo+=((e.aceso?1:e.segura*.7)-e.vivo)*(1-Math.exp(-t*3)),e.u.uVivo.value=e.vivo,e.u.uPerto.value=+(K===e)*!e.aceso,e.u.uDorme.value+=(+!!a-e.u.uDorme.value)*.05,e.g.rotation.y+=t*(.08+e.vivo*.25),e.g.rotation.x=Math.sin(n*.3+r)*.15,Q||(e.g.position.y=me[r].pos[1]+Math.sin(n*.6+r*2)*.35),e.nucleo.material.opacity=e.vivo*.35+(K===e?.08:0),e.nucleo.scale.setScalar(2.6+e.vivo*3+e.segura*1.5*Math.sin(n*12)*.2),e.acendeFacho=Math.min(1,(e.acendeFacho||0)+(e.aceso?t*.8:0)),e.facho.scale.y=Math.max(.001,b(e.acendeFacho)),e.facho.material.uniforms.uA.value=.65*b(e.acendeFacho),e.u.uDispersa.value=e.segura*(1-e.vivo)*1.2*(1-e.u.uRevela.value),i<11&&(e.revelou=!0),e.u.uRevela.value+=(+!!e.revelou-e.u.uRevela.value)*(1-Math.exp(-t*.9)),e.corpoLuz.visible=e.u.uRevela.value>.01,e.extra.children.forEach(r=>{if(e.tipo===1)r.rotation.y+=t*r.userData.v*(1+e.vivo*2),r.rotation.x+=t*r.userData.v*.5,r.material.opacity=(a?.1:.18)+e.vivo*.45;else{let i=(n*1.6-r.userData.k*.7)%2.1;r.material.opacity=(a?.06:.12+e.vivo*.25)+Math.max(0,1-Math.abs(i-.4)*2.5)*(a?.1:.5+e.vivo*.4),r.rotation.y+=t*(.3+r.userData.k*.15)*(a?.2:1+e.vivo)}})}),be.value=A.filter(e=>e.aceso).length/3,!Q&&A.every(e=>e.aceso)&&(!S.explorados||S.explorados.every(Boolean))&&(Q=!0,setTimeout(()=>{N(`A sala está arrumada.`,`Atravesse o portal para seguir.`,0),S.aoFinal?.()},1200)),Q&&!q.userData.veio&&(q.userData.veio=!0,Pe=n,q.position.set(F.x-Math.sin(I)*20,3.3,F.z-Math.cos(I)*20),q.visible=!0,ke(`Um portal se abriu à sua frente.`),S.aoPortalSurge?.()),q.visible){let e=n-Pe,t=b(e/1.4);q.scale.setScalar(Math.max(.001,t*(1+Math.sin(Math.min(1,e/1.4)*Math.PI)*.25))),Ne.value=Math.min(1.6,t+Math.max(0,1-e/.6)*2),q.lookAt(F.x,3.3,F.z);let r=e%2.6/2.6;J.position.set(q.position.x,.05,q.position.z),J.scale.setScalar(1+r*22),J.material.opacity=(1-r)*.5*t,q.userData.poeira.rotation.z=n*.15,q.userData.vid.paused&&q.userData.vid.play().catch(()=>{})}{X.copy(q.position).sub(F),X.y=0;let e=X.length();q.visible&&e<4.5&&V&&!Y&&(Y=!0,S.aoPortal?.())}if(Q){Re=Math.min(1,Re+t*.18);let e=b(Re);A.forEach((t,r)=>{let i=n*.2+r/3*Math.PI*2;X.set(F.x-Math.sin(I)*16+Math.cos(i)*5,8+Math.sin(n+r)*.4,F.z-Math.cos(I)*16+Math.sin(i)*5),t.g.position.lerp(X,.03*e)})}if(S.aoQuadro&&V){let e=Math.cos(I),t=-Math.sin(I);S.aoQuadro({orbes:A.map(n=>{X.copy(n.g.position).sub(F),X.y=0;let r=X.length();return{d:r,pan:(X.x*e+X.z*t)/(r||1),segura:n.segura,aceso:n.aceso}}),proxima:A.findIndex(e=>!e.aceso)<0?null:A.findIndex(e=>!e.aceso)})}j.render(),(Le||V)&&(Z=requestAnimationFrame($))}return Z=requestAnimationFrame($),{atualiza(){P()},reinicia(){A.forEach((e,t)=>{e.aceso=e.achado=e.revelou=!1,e.segura=e.vivo=0,e.acendeFacho=0,e.u.uRevela.value=0,e.g.position.set(...me[t].pos)}),Q=!1,Re=0,Y=!1,Pe=0,q.visible=!1,q.userData={},Ne.value=0,J.material.opacity=0,q.userData.vid.pause(),F.set(0,1.7,8),I=.42,L=z=.05,B=0,R=0,P(),N(`Arrumar a sala`,`Encontre as três orbes e segure sobre cada uma para acendê-la.`,4200)},entra(){V=!0,Y=!1,d.classList.add(`explorando`),document.documentElement.style.overflow=`hidden`,S.lenis?.()?.stop(),M(),N(`Arrumar a sala`,w?`Arraste para olhar. Segure para andar. Encontre os três orbes.`:`Mova o mouse para olhar. Segure o clique para andar. Encontre os três orbes.`,4600),Z||=requestAnimationFrame($)},sai(){V=!1,W=!1,d.classList.remove(`explorando`),document.documentElement.style.overflow=``,S.lenis?.()?.start(),M()}}}export{S as t};