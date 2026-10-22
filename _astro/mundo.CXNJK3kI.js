import{D as e,F as t,H as n,I as r,K as i,L as a,O as o,P as s,R as ee,T as c,U as l,f as te,i as u,j as ne,k as re,l as ie,m as d,n as f,o as ae,r as p,t as m,v as oe,x as h,y as se}from"./three.module.BqrXhFt7.js";import{i as ce,n as g,r as le,t as _}from"./OutputPass.C3P5kg6-.js";var v=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),y=e=>(e=v(e),e*e*(3-2*e)),b=`
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
`;function ue(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.18,`rgba(255,255,255,.45)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new u(e)}var de=[{nome:`Design`,linha:`A vitrine com a cara do seu negócio.`,tipo:0,pos:[-26,3.2,-34]},{nome:`Governança Digital`,linha:`Cada cliente e cada dado num lugar só, com dono.`,tipo:1,pos:[30,3.6,-22]},{nome:`Automações`,linha:`O repetitivo roda sozinho, sobre uma base arrumada.`,tipo:2,pos:[4,3.4,-58]}];function x(u,x={}){let S=u.querySelector(`canvas`),fe=u.querySelector(`[data-card]`),pe=u.querySelector(`[data-lista]`),me=u.querySelector(`[data-aviso]`),he=u.querySelector(`[data-fim]`),C=matchMedia(`(max-width: 860px), (pointer: coarse)`).matches,w=new m({canvas:S,antialias:!1,powerPreference:`high-performance`});w.setPixelRatio(Math.min(devicePixelRatio||1,C?1.3:1.6)),w.toneMapping=4,w.toneMappingExposure=1;let T=new s,E=new c(62,1,.05,400),ge=ue(),D={value:0},O={value:new l},_e={value:0},ve=new h(new r(300,48,24),new t({side:1,depthWrite:!1,uniforms:{uT:D,uAcesos:_e},vertexShader:`varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,fragmentShader:b+`uniform float uT, uAcesos; varying vec3 vD;
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
      }`}));T.add(ve);let ye=new h(new e(400,400,1,1),new t({transparent:!0,depthWrite:!1,uniforms:{uT:D,uCam:O,uAcesos:_e},vertexShader:`varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:b+`uniform float uT, uAcesos; uniform vec3 uCam; varying vec3 vW;
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
      }`}));ye.rotation.x=-Math.PI/2,T.add(ye);let be=C?9e3:22e3,k=new Float32Array(be*3),xe=new Float32Array(be);for(let e=0;e<be;e++)k[e*3]=(Math.random()-.5)*140,k[e*3+1]=Math.random()*16-1,k[e*3+2]=(Math.random()-.5)*140-20,xe[e]=Math.random();let A=new p;A.setAttribute(`position`,new f(k,3)),A.setAttribute(`aS`,new f(xe,1));let Se=new o(A,new t({transparent:!0,depthWrite:!1,blending:2,uniforms:{uT:D,uCam:O,uPx:{value:w.getPixelRatio()}},vertexShader:b+`attribute float aS; uniform float uT, uPx; uniform vec3 uCam; varying float vA;
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
      }`,fragmentShader:`varying float vA; void main(){ vec2 c = gl_PointCoord - .5; float d = length(c); if (d > .5) discard; gl_FragColor = vec4(vec3(0.85, 0.88, 0.95) * vA * smoothstep(.5, 0., d), 1.0); }`}));Se.frustumCulled=!1,T.add(Se);let j=de.map((e,n)=>{let r=new te;r.position.set(...e.pos);let s={uT:D,uTipo:{value:e.tipo},uVivo:{value:0},uPerto:{value:0},uDorme:{value:+(e.tipo===2)}},c=C?3800:9e3,u=new Float32Array(c*3),ne=new Float32Array(c*3),ae=new Float32Array(c);for(let e=0;e<c;e++){let t=new l().randomDirection();u.set([t.x,t.y,t.z],e*3),ne.set([Math.random(),Math.random(),Math.random()],e*3),ae[e]=+(Math.random()<.16)}let m=new p;m.setAttribute(`position`,new f(u,3)),m.setAttribute(`aRnd`,new f(ne,3)),m.setAttribute(`aRastro`,new f(ae,1)),s.uDispersa={value:0},s.uPx={value:w.getPixelRatio()};let ce=new o(m,new t({uniforms:s,transparent:!0,depthWrite:!0,vertexShader:b+`uniform float uT, uTipo, uVivo, uPerto, uDorme, uDispersa, uPx, uRevela; attribute vec3 aRnd; attribute float aRastro; varying float vA; varying float vLuz;
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
        }`}));r.add(ce),s.uRevela={value:0};let g=new h(new d(2.1,C?24:48),new t({uniforms:s,transparent:!0,depthWrite:!1,blending:2,vertexShader:b+`uniform float uT, uTipo, uVivo, uPerto; varying vec3 vN; varying vec3 vV; varying float vD;
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
        }`}));g.visible=!1,r.add(g);let le=new se(new i(new d(3.5,2)),new oe({color:13620960,transparent:!0,opacity:.07,depthWrite:!1}));r.add(le);let _=new te;r.add(_),e.tipo===1?[2.9,3.6].forEach((e,t)=>{let n=new se(new i(new d(e,t)),new oe({color:14673648,transparent:!0,opacity:.35,depthWrite:!1,blending:2}));n.userData.v=t?-.12:.18,_.add(n)}):e.tipo===2&&[0,1,2].forEach(e=>{let t=new Float32Array(780);for(let n=0;n<260;n++){let r=n/260*Math.PI*2,i=3.1+e*.5;t.set([Math.cos(r)*i,(Math.random()-.5)*.12,Math.sin(r)*i],n*3)}let n=new p;n.setAttribute(`position`,new f(t,3));let r=new o(n,new re({map:ge,size:.22,transparent:!0,opacity:.4,depthWrite:!1,blending:2,color:15265528}));r.rotation.set(.5+e*.7,e*1.1,e*.4),r.userData.k=e,_.add(r)});let v=new a(new ee({map:ge,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));v.scale.setScalar(3.2),r.add(v);let y=new h(new ie(.06,.9,80,16,1,!0),new t({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uT:D,uA:{value:e.tipo===2?.08:.25}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,fragmentShader:`uniform float uT, uA; varying vec2 vUv; void main(){ float a = (1.0 - vUv.y) * smoothstep(0.0, 0.08, vUv.y) * (0.8 + 0.2 * sin(uT * 1.5 + vUv.y * 20.0)); gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * a * uA, 1.0); }`}));return y.geometry.translate(0,40,0),y.scale.y=.001,r.add(y),T.add(r),{...e,g:r,u:s,nucleo:v,facho:y,enxame:null,extra:_,corpoLuz:g,vivo:0,segura:0,aceso:!1,achado:!1}}),M=new ce(w);M.addPass(new le(T,E)),M.addPass(new g(new n(1,1),.75,.6,.62)),M.addPass(new _);function N(){let e=u.clientWidth,t=u.clientHeight;w.setSize(e,t,!1),M.setSize(e,t),E.aspect=e/t,E.updateProjectionMatrix()}N(),new ResizeObserver(N).observe(u);let Ce=0,we=0;function P(e,t,n=3800){fe.innerHTML=`${e}${t?`<small>${t}</small>`:``}`,fe.classList.add(`ve`),clearTimeout(Ce),n&&(Ce=setTimeout(()=>fe.classList.remove(`ve`),n))}function Te(e){me.textContent=e,me.classList.add(`ve`),clearTimeout(we),we=setTimeout(()=>me.classList.remove(`ve`),3400)}function F(){pe.innerHTML=j.map(e=>`<li class="${e.aceso?`ok`:``}"><span>${e.nome}</span><b>${e.aceso?`aceso`:e.achado?`achado`:`·`}</b></li>`).join(``)}F();let I=new l(0,1.7,8),L=.42,R=.05,z=0,B=.05,V=0,H=!1,U={x:0,y:0,dentro:!1},W=new Set,G=!1,K=null,Ee=new ne,De=new n,q=null;S.addEventListener(`pointermove`,e=>{let t=S.getBoundingClientRect();U.x=(e.clientX-t.left)/t.width*2-1,U.y=-((e.clientY-t.top)/t.height)*2+1,U.dentro=!0,K&&e.pointerType!==`mouse`&&(L-=(e.clientX-K.x)*.005,B=v(B+(e.clientY-K.y)*.003,-.5,.6),K={x:e.clientX,y:e.clientY})}),S.addEventListener(`pointerleave`,()=>U.dentro=!1),S.addEventListener(`pointerdown`,e=>{H&&(G=!0,K={x:e.clientX,y:e.clientY},S.setPointerCapture(e.pointerId))}),addEventListener(`pointerup`,()=>{G=!1,K=null}),addEventListener(`keydown`,e=>{H&&(W.add(e.key.toLowerCase()),[`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,` `].includes(e.key.toLowerCase())&&e.preventDefault())}),addEventListener(`keyup`,e=>W.delete(e.key.toLowerCase()));let J={value:.2},Y=new te;{let e=C?180:380,n=new Float32Array(e*90*2*3),r=0;for(let t=0;t<e;t++){let e=Math.random(),t=Math.random();for(let i=0;i<90;i++)for(let a=0;a<2;a++)n.set([(i+a)/90,e,t],r*3),r++}let i=new p;i.setAttribute(`position`,new f(n,3));let a=new se(i,new t({uniforms:{uT:D,uPortal:J},transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT, uPortal; varying float vA;
        void main(){ float s = position.x, u = position.y, o = position.z;
          float th = 0.21 + uT * (0.15 + uPortal * 0.5) + s * (6.2831 - 0.42), w = uT * 0.8;
          float r = 3.4 * (1.0 + u * 0.1 * sin(2.0 * th + w + u * 3.0) + u * 0.05 * sin(3.0 * th - w));
          vA = sin(3.14159 * s) * (1.1 - 0.6 * u) * (0.5 + 0.5 * o) * smoothstep(0.0, 0.03, s) * smoothstep(1.0, 0.97, s);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(cos(th) * r, sin(th) * r, (u - 0.5) * 0.5 * sin(th * 2.0 + w), 1.0); }`,fragmentShader:`uniform float uPortal; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.9, 0.93, 1.0) * vA * (0.02 + uPortal * 0.05), 1.0); }`}));a.frustumCulled=!1,Y.add(a);let o=new h(new ae(3.3,64),new t({uniforms:{uT:D,uPortal:J},transparent:!0,depthWrite:!1,blending:2,side:2,vertexShader:`varying vec2 vP; void main(){ vP = position.xy / 3.3; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uT, uPortal; varying vec2 vP;
        void main(){ float r = length(vP), a = atan(vP.y, vP.x);
          float giro = sin(a * 2.0 + log(r + 0.01) * 6.0 - uT * (1.5 + uPortal * 3.0)) * 0.5 + 0.5;
          float c = pow(giro, 3.0) * (1.0 - r) * 0.5 + exp(-r * 6.0) * 0.8;
          gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * c * uPortal * smoothstep(1.0, 0.85, r), 1.0); }`}));Y.add(o)}Y.position.set(0,3.3,-92),T.add(Y);let Oe=!1,X=new l,ke=new l,Ae=performance.now(),je=!0,Z=0,Q=!1,Me=0;new IntersectionObserver(e=>{je=e[0].isIntersecting,je&&!Z&&(Z=requestAnimationFrame($))}).observe(u);function $(e){Z=0;let t=v((e-Ae)/1e3,0,.05);Ae=e;let n=e/1e3;if(D.value=n,H&&U.dentro&&!C){let e=Math.sign(U.x)*Math.max(0,Math.abs(U.x)-.25)/.75;z+=(-e*1.3-z)*(1-Math.exp(-t*5)),B=v(U.y*.45,-.4,.5)}else z*=.9;L+=z*t,R+=(B-R)*(1-Math.exp(-t*4)),De.set(H&&!C?U.x:0,H&&!C?U.y:0),Ee.setFromCamera(De,E),q=null;for(let e of j)Ee.ray.distanceToPoint(e.g.position)<2.8&&e.g.position.distanceTo(I)<16&&(q=e);let r=G&&!q||W.has(`w`)||W.has(`arrowup`),i=W.has(`s`)||W.has(`arrowdown`);if((W.has(`a`)||W.has(`arrowleft`))&&(L+=t*1.4),(W.has(`d`)||W.has(`arrowright`))&&(L-=t*1.4),V+=((H?r?7.5:i?-4:0:.9)-V)*(1-Math.exp(-t*2.5)),ke.set(-Math.sin(L),0,-Math.cos(L)),I.addScaledVector(ke,V*t),!Q)for(let e of j){X.copy(I).sub(e.g.position),X.y=0;let t=X.length();t<4.2&&I.addScaledVector(X.normalize(),4.2-t)}let a=Math.hypot(I.x,I.z+25);a>85&&(I.x*=85/a,I.z=(I.z+25)*85/a-25);let o=Math.sin(n*7)*.04*Math.min(1,Math.abs(V)/6);E.position.set(I.x,1.7+o,I.z),X.set(I.x-Math.sin(L)*Math.cos(R),1.7+Math.sin(R),I.z-Math.cos(L)*Math.cos(R)),E.lookAt(X),O.value.copy(I);let s=j[1];if(j.forEach((e,r)=>{let i=e.g.position.distanceTo(I);v(1-(i-5)/14)>.5&&!e.achado&&(e.achado=!0,F(),P(e.nome,e.tipo===2&&!s.aceso?`Adormecido. Automação só roda sobre base arrumada.`:`Segure sobre o orbe para acordá-lo.`));let a=e.tipo===2&&!s.aceso;H&&G&&q===e&&!e.aceso?a?e._av||(Te(`Automação só roda sobre base arrumada. Acorde a Governança Digital primeiro.`),e._av=1,setTimeout(()=>e._av=0,2500)):(e.segura=Math.min(1,e.segura+t/1.6),e.segura>=1&&(e.aceso=!0,F(),x.aoAcender?setTimeout(()=>x.aoAcender(r),900):P(e.nome,e.linha,5200),e===s&&Te(`Algo acordou ao longe: Automações.`))):e.aceso||(e.segura=Math.max(0,e.segura-t*.8)),e.vivo+=((e.aceso?1:e.segura*.7)-e.vivo)*(1-Math.exp(-t*3)),e.u.uVivo.value=e.vivo,e.u.uPerto.value=+(q===e)*!e.aceso,e.u.uDorme.value+=(+!!a-e.u.uDorme.value)*.05,e.g.rotation.y+=t*(.08+e.vivo*.25),e.g.rotation.x=Math.sin(n*.3+r)*.15,Q||(e.g.position.y=de[r].pos[1]+Math.sin(n*.6+r*2)*.35),e.nucleo.material.opacity=e.vivo*.35+(q===e?.08:0),e.nucleo.scale.setScalar(2.6+e.vivo*3+e.segura*1.5*Math.sin(n*12)*.2),e.acendeFacho=Math.min(1,(e.acendeFacho||0)+(e.aceso?t*.8:0)),e.facho.scale.y=Math.max(.001,y(e.acendeFacho)),e.facho.material.uniforms.uA.value=.65*y(e.acendeFacho),e.u.uDispersa.value=e.segura*(1-e.vivo)*1.2*(1-e.u.uRevela.value),i<11&&(e.revelou=!0),e.u.uRevela.value+=(+!!e.revelou-e.u.uRevela.value)*(1-Math.exp(-t*.9)),e.corpoLuz.visible=e.u.uRevela.value>.01,e.extra.children.forEach(r=>{if(e.tipo===1)r.rotation.y+=t*r.userData.v*(1+e.vivo*2),r.rotation.x+=t*r.userData.v*.5,r.material.opacity=(a?.1:.18)+e.vivo*.45;else{let i=(n*1.6-r.userData.k*.7)%2.1;r.material.opacity=(a?.06:.12+e.vivo*.25)+Math.max(0,1-Math.abs(i-.4)*2.5)*(a?.1:.5+e.vivo*.4),r.rotation.y+=t*(.3+r.userData.k*.15)*(a?.2:1+e.vivo)}})}),_e.value=j.filter(e=>e.aceso).length/3,!Q&&j.every(e=>e.aceso)&&(Q=!0,setTimeout(()=>{P(`A sala está arrumada.`,`Atravesse o portal para seguir.`,0),he.classList.add(`ve`),x.aoFinal?.()},1200)),J.value+=((Q?1:.2)-J.value)*(1-Math.exp(-t*1.2)),Q&&!Y.userData.veio&&(Y.userData.veio=!0,Y.userData.alvo=new l(I.x-Math.sin(L)*24,3.3,I.z-Math.cos(L)*24)),Y.userData.alvo&&Y.position.lerp(Y.userData.alvo,1-Math.exp(-t*.8)),Y.lookAt(I.x,3.3,I.z),X.copy(Y.position).sub(I),X.y=0,X.length()<4.5&&H&&!Oe&&(Oe=!0,x.aoPortal?.()),Q){Me=Math.min(1,Me+t*.18);let e=y(Me);j.forEach((t,r)=>{let i=n*.2+r/3*Math.PI*2;X.set(I.x-Math.sin(L)*16+Math.cos(i)*5,8+Math.sin(n+r)*.4,I.z-Math.cos(L)*16+Math.sin(i)*5),t.g.position.lerp(X,.03*e)})}M.render(),(je||H)&&(Z=requestAnimationFrame($))}return Z=requestAnimationFrame($),{entra(){H=!0,Oe=!1,u.classList.add(`explorando`),document.documentElement.style.overflow=`hidden`,x.lenis?.()?.stop(),N(),P(`Arrumar a sala`,C?`Arraste para olhar. Segure para andar. Encontre os três orbes.`:`Mova o mouse para olhar. Segure o clique para andar. Encontre os três orbes.`,4600),Z||=requestAnimationFrame($)},sai(){H=!1,G=!1,u.classList.remove(`explorando`),document.documentElement.style.overflow=``,x.lenis?.()?.start(),N()}}}export{x as t};