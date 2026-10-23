import{D as e,F as t,I as n,L as r,M as i,O as a,R as o,S as s,T as ee,U as c,W as l,f as te,i as u,j as d,k as ne,l as re,m as ie,n as f,o as ae,q as oe,r as p,t as m,v as se,x as h,y as ce,z as le}from"./three.module.D_WuOOwP.js";import{i as ue,n as g,r as _,t as v}from"./OutputPass.DaIaBrAd.js";var y=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),b=e=>(e=y(e),e*e*(3-2*e)),x=`
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
`;function de(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.18,`rgba(255,255,255,.45)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new u(e)}var fe=[{nome:`Design`,linha:`A vitrine com a cara do seu negócio.`,tipo:0,pos:[-26,3.2,-34]},{nome:`Governança Digital`,linha:`Cada cliente e cada dado num lugar só, com dono.`,tipo:1,pos:[30,3.6,-22]},{nome:`Automações`,linha:`O repetitivo roda sozinho, sobre uma base arrumada.`,tipo:2,pos:[4,3.4,-58]}];function S(u,S={}){let C=u.querySelector(`canvas`),pe=u.querySelector(`[data-card]`),me=u.querySelector(`[data-lista]`),he=u.querySelector(`[data-aviso]`);u.querySelector(`[data-fim]`);let w=matchMedia(`(max-width: 860px), (pointer: coarse)`).matches,T=new m({canvas:C,antialias:!1,powerPreference:`high-performance`});T.setPixelRatio(Math.min(devicePixelRatio||1,w?1.3:1.6)),T.toneMapping=4,T.toneMappingExposure=1;let E=new t,D=new ee(62,1,.05,400),ge=de(),O={value:0},k={value:new l},_e={value:0},ve=new h(new r(300,48,24),new n({side:1,depthWrite:!1,uniforms:{uT:O,uAcesos:_e},vertexShader:`varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,fragmentShader:x+`uniform float uT, uAcesos; varying vec3 vD;
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
      }`}));E.add(ve);let ye=new h(new e(400,400,1,1),new n({transparent:!0,depthWrite:!1,uniforms:{uT:O,uCam:k,uAcesos:_e},vertexShader:`varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:x+`uniform float uT, uAcesos; uniform vec3 uCam; varying vec3 vW;
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
      }`}));ye.rotation.x=-Math.PI/2,E.add(ye);let be=w?9e3:22e3,A=new Float32Array(be*3),xe=new Float32Array(be);for(let e=0;e<be;e++)A[e*3]=(Math.random()-.5)*140,A[e*3+1]=Math.random()*16-1,A[e*3+2]=(Math.random()-.5)*140-20,xe[e]=Math.random();let Se=new p;Se.setAttribute(`position`,new f(A,3)),Se.setAttribute(`aS`,new f(xe,1));let Ce=new a(Se,new n({transparent:!0,depthWrite:!1,blending:2,uniforms:{uT:O,uCam:k,uPx:{value:T.getPixelRatio()}},vertexShader:x+`attribute float aS; uniform float uT, uPx; uniform vec3 uCam; varying float vA;
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
      }`,fragmentShader:`varying float vA; void main(){ vec2 c = gl_PointCoord - .5; float d = length(c); if (d > .5) discard; gl_FragColor = vec4(vec3(0.85, 0.88, 0.95) * vA * smoothstep(.5, 0., d), 1.0); }`}));Ce.frustumCulled=!1,E.add(Ce);let j=fe.map((e,t)=>{let r=new te;r.position.set(...e.pos);let i={uT:O,uTipo:{value:e.tipo},uVivo:{value:0},uPerto:{value:0},uDorme:{value:+(e.tipo===2)}},s=w?3800:9e3,ee=new Float32Array(s*3),c=new Float32Array(s*3),u=new Float32Array(s);for(let e=0;e<s;e++){let t=new l().randomDirection();ee.set([t.x,t.y,t.z],e*3),c.set([Math.random(),Math.random(),Math.random()],e*3),u[e]=+(Math.random()<.16)}let d=new p;d.setAttribute(`position`,new f(ee,3)),d.setAttribute(`aRnd`,new f(c,3)),d.setAttribute(`aRastro`,new f(u,1)),i.uDispersa={value:0},i.uPx={value:T.getPixelRatio()};let ae=new a(d,new n({uniforms:i,transparent:!0,depthWrite:!0,vertexShader:x+`uniform float uT, uTipo, uVivo, uPerto, uDorme, uDispersa, uPx, uRevela; attribute vec3 aRnd; attribute float aRastro; varying float vA; varying float vLuz;
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
        }`}));r.add(ae),i.uRevela={value:0};let m=new h(new ie(2.1,w?24:48),new n({uniforms:i,transparent:!0,depthWrite:!1,blending:2,vertexShader:x+`uniform float uT, uTipo, uVivo, uPerto; varying vec3 vN; varying vec3 vV; varying float vD;
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
        }`}));m.visible=!1,r.add(m);let ue=new ce(new oe(new ie(3.5,2)),new se({color:13620960,transparent:!0,opacity:.07,depthWrite:!1}));r.add(ue);let g=new te;r.add(g),e.tipo===1?[2.9,3.6].forEach((e,t)=>{let n=new ce(new oe(new ie(e,t)),new se({color:14673648,transparent:!0,opacity:.35,depthWrite:!1,blending:2}));n.userData.v=t?-.12:.18,g.add(n)}):e.tipo===2&&[0,1,2].forEach(e=>{let t=new Float32Array(780);for(let n=0;n<260;n++){let r=n/260*Math.PI*2,i=3.1+e*.5;t.set([Math.cos(r)*i,(Math.random()-.5)*.12,Math.sin(r)*i],n*3)}let n=new p;n.setAttribute(`position`,new f(t,3));let r=new a(n,new ne({map:ge,size:.22,transparent:!0,opacity:.4,depthWrite:!1,blending:2,color:15265528}));r.rotation.set(.5+e*.7,e*1.1,e*.4),r.userData.k=e,g.add(r)});let _=new o(new le({map:ge,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));_.scale.setScalar(3.2),r.add(_);let v=new h(new re(.06,.9,80,16,1,!0),new n({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uT:O,uA:{value:e.tipo===2?.08:.25}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,fragmentShader:`uniform float uT, uA; varying vec2 vUv; void main(){ float a = (1.0 - vUv.y) * smoothstep(0.0, 0.08, vUv.y) * (0.8 + 0.2 * sin(uT * 1.5 + vUv.y * 20.0)); gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * a * uA, 1.0); }`}));return v.geometry.translate(0,40,0),v.scale.y=.001,r.add(v),E.add(r),{...e,g:r,u:i,nucleo:_,facho:v,enxame:null,extra:g,corpoLuz:m,vivo:0,segura:0,aceso:!1,achado:!1}}),M=new ue(T);M.addPass(new _(E,D)),M.addPass(new g(new c(1,1),.75,.6,.62)),M.addPass(new v);function N(){let e=u.clientWidth,t=u.clientHeight;T.setSize(e,t,!1),M.setSize(e,t),D.aspect=e/t,D.updateProjectionMatrix()}N(),new ResizeObserver(N).observe(u);let we=0,Te=0;function P(e,t,n=3800){pe.innerHTML=`${e}${t?`<small>${t}</small>`:``}`,pe.classList.add(`ve`),clearTimeout(we),n&&(we=setTimeout(()=>pe.classList.remove(`ve`),n))}function Ee(e){he.textContent=e,he.classList.add(`ve`),clearTimeout(Te),Te=setTimeout(()=>he.classList.remove(`ve`),3400)}let De=[`Design`,`Governança`,`Automação`];function F(){me.innerHTML=j.map((e,t)=>`<li class="${e.achado?`achado`:``} ${e.aceso?`ok`:``} ${S.explorados?.[t]?`visto`:``}" aria-label="${e.nome}: ${e.aceso?`aceso`:e.achado?`encontrado`:`não encontrado`}"><i></i>${De[t]}</li>`).join(``)}F();let I=new l(0,1.7,8),L=.42,R=.05,z=0,B=.05,V=0,H=!1,U={x:0,y:0,dentro:!1},W=new Set,G=!1,K=null,Oe=new d,ke=new c,q=null;C.addEventListener(`pointermove`,e=>{let t=C.getBoundingClientRect();U.x=(e.clientX-t.left)/t.width*2-1,U.y=-((e.clientY-t.top)/t.height)*2+1,U.dentro=!0,K&&e.pointerType!==`mouse`&&(L-=(e.clientX-K.x)*.005,B=y(B+(e.clientY-K.y)*.003,-.5,.6),K={x:e.clientX,y:e.clientY})}),C.addEventListener(`pointerleave`,()=>U.dentro=!1),C.addEventListener(`pointerdown`,e=>{H&&(G=!0,K={x:e.clientX,y:e.clientY},C.setPointerCapture(e.pointerId))}),addEventListener(`pointerup`,()=>{G=!1,K=null}),addEventListener(`keydown`,e=>{H&&(W.add(e.key.toLowerCase()),[`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,` `].includes(e.key.toLowerCase())&&e.preventDefault())}),addEventListener(`keyup`,e=>W.delete(e.key.toLowerCase()));let Ae={value:0},J=new te;{let e=w?180:380,t=new Float32Array(e*90*2*3),r=0;for(let n=0;n<e;n++){let e=Math.random(),n=Math.random();for(let i=0;i<90;i++)for(let a=0;a<2;a++)t.set([(i+a)/90,e,n],r*3),r++}let i=new p;i.setAttribute(`position`,new f(t,3));let a=new ce(i,new n({uniforms:{uT:O,uPortal:Ae},transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT, uPortal; varying float vA;
        void main(){ float s = position.x, u = position.y, o = position.z;
          float th = 0.21 + uT * (0.15 + uPortal * 0.5) + s * (6.2831 - 0.42), w = uT * 0.8;
          float r = 3.4 * (1.0 + u * 0.1 * sin(2.0 * th + w + u * 3.0) + u * 0.05 * sin(3.0 * th - w));
          vA = sin(3.14159 * s) * (1.1 - 0.6 * u) * (0.5 + 0.5 * o) * smoothstep(0.0, 0.03, s) * smoothstep(1.0, 0.97, s);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(cos(th) * r, sin(th) * r, (u - 0.5) * 0.5 * sin(th * 2.0 + w), 1.0); }`,fragmentShader:`uniform float uPortal; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.9, 0.93, 1.0) * vA * (0.02 + uPortal * 0.05), 1.0); }`}));a.frustumCulled=!1,J.add(a);let o=new h(new ae(3.3,64),new n({uniforms:{uT:O,uPortal:Ae},transparent:!0,depthWrite:!1,blending:2,side:2,vertexShader:`varying vec2 vP; void main(){ vP = position.xy / 3.3; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uT, uPortal; varying vec2 vP;
        void main(){ float r = length(vP), a = atan(vP.y, vP.x);
          float giro = sin(a * 2.0 + log(r + 0.01) * 6.0 - uT * (1.5 + uPortal * 3.0)) * 0.5 + 0.5;
          float c = pow(giro, 3.0) * (1.0 - r) * 0.5 + exp(-r * 6.0) * 0.8;
          gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * c * uPortal * smoothstep(1.0, 0.85, r), 1.0); }`}));J.add(o)}let Y=new h(new i(.96,1,96),new s({color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:2,side:2}));Y.rotation.x=-Math.PI/2,E.add(Y);let je=new h(new re(.5,2.2,60,32,1,!0),new n({uniforms:{uA:{value:0}},transparent:!0,depthWrite:!1,blending:2,side:2,vertexShader:`varying float vY; void main(){ vY = uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uA; varying float vY; void main(){ gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * uA * pow(1.0 - vY, 2.0) * 0.5, 1.0); }`}));E.add(je),J.position.set(0,3.3,-92),J.visible=!1,E.add(J);let Me=0,Ne=!1,X=new l,Pe=new l,Fe=performance.now(),Ie=!0,Z=0,Q=!1,Le=0;new IntersectionObserver(e=>{Ie=e[0].isIntersecting,Ie&&!Z&&(Z=requestAnimationFrame($))}).observe(u);function $(e){Z=0;let t=y((e-Fe)/1e3,0,.05);Fe=e;let n=e/1e3;if(O.value=n,H&&U.dentro&&!w){let e=Math.sign(U.x)*Math.max(0,Math.abs(U.x)-.25)/.75;z+=(-e*1.3-z)*(1-Math.exp(-t*5)),B=y(U.y*.45,-.4,.5)}else z*=.9;L+=z*t,R+=(B-R)*(1-Math.exp(-t*4)),ke.set(H&&!w?U.x:0,H&&!w?U.y:0),Oe.setFromCamera(ke,D),q=null;for(let e of j)Oe.ray.distanceToPoint(e.g.position)<2.8&&e.g.position.distanceTo(I)<16&&(q=e);let r=G&&!q||W.has(`w`)||W.has(`arrowup`),i=W.has(`s`)||W.has(`arrowdown`);if((W.has(`a`)||W.has(`arrowleft`))&&(L+=t*1.4),(W.has(`d`)||W.has(`arrowright`))&&(L-=t*1.4),V+=((H?r?7.5:i?-4:0:.9)-V)*(1-Math.exp(-t*2.5)),Pe.set(-Math.sin(L),0,-Math.cos(L)),I.addScaledVector(Pe,V*t),!Q)for(let e of j){X.copy(I).sub(e.g.position),X.y=0;let t=X.length();t<4.2&&I.addScaledVector(X.normalize(),4.2-t)}let a=Math.hypot(I.x,I.z+25);a>85&&(I.x*=85/a,I.z=(I.z+25)*85/a-25);let o=Math.sin(n*7)*.04*Math.min(1,Math.abs(V)/6);D.position.set(I.x,1.7+o,I.z),X.set(I.x-Math.sin(L)*Math.cos(R),1.7+Math.sin(R),I.z-Math.cos(L)*Math.cos(R)),D.lookAt(X),k.value.copy(I);let s=j[1];if(j.forEach((e,r)=>{let i=e.g.position.distanceTo(I);y(1-(i-5)/14)>.5&&!e.achado&&(e.achado=!0,F(),P(e.nome,e.tipo===2&&!s.aceso?`Adormecido. Automação só roda sobre base arrumada.`:`Segure sobre o orbe para acordá-lo.`));let a=e.tipo===2&&!s.aceso;H&&G&&q===e&&!e.aceso?a?e._av||(Ee(`Automação só roda sobre base arrumada. Acorde a Governança Digital primeiro.`),e._av=1,setTimeout(()=>e._av=0,2500)):(e.segura=Math.min(1,e.segura+t/1.6),e.segura>=1&&(e.aceso=!0,F(),S.aoAcender?setTimeout(()=>S.aoAcender(r),900):P(e.nome,e.linha,5200),e===s&&Ee(`Algo acordou ao longe: Automações.`))):e.aceso||(e.segura=Math.max(0,e.segura-t*.8)),e.vivo+=((e.aceso?1:e.segura*.7)-e.vivo)*(1-Math.exp(-t*3)),e.u.uVivo.value=e.vivo,e.u.uPerto.value=+(q===e)*!e.aceso,e.u.uDorme.value+=(+!!a-e.u.uDorme.value)*.05,e.g.rotation.y+=t*(.08+e.vivo*.25),e.g.rotation.x=Math.sin(n*.3+r)*.15,Q||(e.g.position.y=fe[r].pos[1]+Math.sin(n*.6+r*2)*.35),e.nucleo.material.opacity=e.vivo*.35+(q===e?.08:0),e.nucleo.scale.setScalar(2.6+e.vivo*3+e.segura*1.5*Math.sin(n*12)*.2),e.acendeFacho=Math.min(1,(e.acendeFacho||0)+(e.aceso?t*.8:0)),e.facho.scale.y=Math.max(.001,b(e.acendeFacho)),e.facho.material.uniforms.uA.value=.65*b(e.acendeFacho),e.u.uDispersa.value=e.segura*(1-e.vivo)*1.2*(1-e.u.uRevela.value),i<11&&(e.revelou=!0),e.u.uRevela.value+=(+!!e.revelou-e.u.uRevela.value)*(1-Math.exp(-t*.9)),e.corpoLuz.visible=e.u.uRevela.value>.01,e.extra.children.forEach(r=>{if(e.tipo===1)r.rotation.y+=t*r.userData.v*(1+e.vivo*2),r.rotation.x+=t*r.userData.v*.5,r.material.opacity=(a?.1:.18)+e.vivo*.45;else{let i=(n*1.6-r.userData.k*.7)%2.1;r.material.opacity=(a?.06:.12+e.vivo*.25)+Math.max(0,1-Math.abs(i-.4)*2.5)*(a?.1:.5+e.vivo*.4),r.rotation.y+=t*(.3+r.userData.k*.15)*(a?.2:1+e.vivo)}})}),_e.value=j.filter(e=>e.aceso).length/3,!Q&&j.every(e=>e.aceso)&&(!S.explorados||S.explorados.every(Boolean))&&(Q=!0,setTimeout(()=>{P(`A sala está arrumada.`,`Atravesse o portal para seguir.`,0),S.aoFinal?.()},1200)),Q&&!J.userData.veio&&(J.userData.veio=!0,Me=n,J.position.set(I.x-Math.sin(L)*20,3.3,I.z-Math.cos(L)*20),J.visible=!0,Ee(`Um portal se abriu à sua frente.`),S.aoPortalSurge?.()),J.visible){let e=n-Me,t=b(e/1.4);J.scale.setScalar(Math.max(.001,t*(1+Math.sin(Math.min(1,e/1.4)*Math.PI)*.25))),Ae.value=Math.min(1.6,t+Math.max(0,1-e/.6)*2),J.lookAt(I.x,3.3,I.z);let r=e%2.6/2.6;Y.position.set(J.position.x,.05,J.position.z),Y.scale.setScalar(1+r*22),Y.material.opacity=(1-r)*.5*t,je.position.set(J.position.x,30,J.position.z),je.material.uniforms.uA.value=t*(.6+.4*Math.sin(n*2))}{X.copy(J.position).sub(I),X.y=0;let e=X.length();J.visible&&e<4.5&&H&&!Ne&&(Ne=!0,S.aoPortal?.())}if(Q){Le=Math.min(1,Le+t*.18);let e=b(Le);j.forEach((t,r)=>{let i=n*.2+r/3*Math.PI*2;X.set(I.x-Math.sin(L)*16+Math.cos(i)*5,8+Math.sin(n+r)*.4,I.z-Math.cos(L)*16+Math.sin(i)*5),t.g.position.lerp(X,.03*e)})}M.render(),(Ie||H)&&(Z=requestAnimationFrame($))}return Z=requestAnimationFrame($),{atualiza(){F()},entra(){H=!0,Ne=!1,u.classList.add(`explorando`),document.documentElement.style.overflow=`hidden`,S.lenis?.()?.stop(),N(),P(`Arrumar a sala`,w?`Arraste para olhar. Segure para andar. Encontre os três orbes.`:`Mova o mouse para olhar. Segure o clique para andar. Encontre os três orbes.`,4600),Z||=requestAnimationFrame($)},sai(){H=!1,G=!1,u.classList.remove(`explorando`),document.documentElement.style.overflow=``,S.lenis?.()?.start(),N()}}}export{S as t};