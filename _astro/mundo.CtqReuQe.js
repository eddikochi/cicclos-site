import{D as e,F as t,I as n,L as r,M as i,O as a,R as ee,S as o,T as te,U as s,W as c,f as ne,i as l,j as u,k as re,l as ie,m as ae,n as d,o as oe,q as se,r as f,t as p,v as ce,x as m,y as le,z as ue}from"./three.module.D_WuOOwP.js";import{i as de,n as h,r as g,t as _}from"./OutputPass.DaIaBrAd.js";var v=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),y=e=>(e=v(e),e*e*(3-2*e)),b=`
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
`;function fe(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.18,`rgba(255,255,255,.45)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new l(e)}var pe=[{nome:`Design`,linha:`A vitrine com a cara do seu negócio.`,tipo:0,pos:[-26,3.2,-34]},{nome:`Governança Digital`,linha:`Cada cliente e cada dado num lugar só, com dono.`,tipo:1,pos:[30,3.6,-22]},{nome:`Automações`,linha:`O repetitivo roda sozinho, sobre uma base arrumada.`,tipo:2,pos:[4,3.4,-58]}];function x(l,x={}){let S=l.querySelector(`canvas`),me=l.querySelector(`[data-card]`),he=l.querySelector(`[data-lista]`),ge=l.querySelector(`[data-aviso]`);l.querySelector(`[data-fim]`);let C=matchMedia(`(max-width: 860px), (pointer: coarse)`).matches,w=new p({canvas:S,antialias:!1,powerPreference:`high-performance`});w.setPixelRatio(Math.min(devicePixelRatio||1,C?1.3:1.6)),w.toneMapping=4,w.toneMappingExposure=1;let T=new t,E=new te(62,1,.05,400),_e=fe(),D={value:0},ve={value:new c},ye={value:0},be=new m(new r(300,48,24),new n({side:1,depthWrite:!1,uniforms:{uT:D,uAcesos:ye},vertexShader:`varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,fragmentShader:b+`uniform float uT, uAcesos; varying vec3 vD;
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
      }`}));T.add(be);let xe=new m(new e(400,400,1,1),new n({transparent:!0,depthWrite:!1,uniforms:{uT:D,uCam:ve,uAcesos:ye},vertexShader:`varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:b+`uniform float uT, uAcesos; uniform vec3 uCam; varying vec3 vW;
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
      }`}));xe.rotation.x=-Math.PI/2,T.add(xe);let Se=C?9e3:22e3,O=new Float32Array(Se*3),Ce=new Float32Array(Se);for(let e=0;e<Se;e++)O[e*3]=(Math.random()-.5)*140,O[e*3+1]=Math.random()*16-1,O[e*3+2]=(Math.random()-.5)*140-20,Ce[e]=Math.random();let we=new f;we.setAttribute(`position`,new d(O,3)),we.setAttribute(`aS`,new d(Ce,1));let Te=new a(we,new n({transparent:!0,depthWrite:!1,blending:2,uniforms:{uT:D,uCam:ve,uPx:{value:w.getPixelRatio()}},vertexShader:b+`attribute float aS; uniform float uT, uPx; uniform vec3 uCam; varying float vA;
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
      }`,fragmentShader:`varying float vA; void main(){ vec2 c = gl_PointCoord - .5; float d = length(c); if (d > .5) discard; gl_FragColor = vec4(vec3(0.85, 0.88, 0.95) * vA * smoothstep(.5, 0., d), 1.0); }`}));Te.frustumCulled=!1,T.add(Te);let k=pe.map((e,t)=>{let r=new ne;r.position.set(...e.pos);let i={uT:D,uTipo:{value:e.tipo},uVivo:{value:0},uPerto:{value:0},uDorme:{value:+(e.tipo===2)}},o=C?3800:9e3,te=new Float32Array(o*3),s=new Float32Array(o*3),l=new Float32Array(o);for(let e=0;e<o;e++){let t=new c().randomDirection();te.set([t.x,t.y,t.z],e*3),s.set([Math.random(),Math.random(),Math.random()],e*3),l[e]=+(Math.random()<.16)}let u=new f;u.setAttribute(`position`,new d(te,3)),u.setAttribute(`aRnd`,new d(s,3)),u.setAttribute(`aRastro`,new d(l,1)),i.uDispersa={value:0},i.uPx={value:w.getPixelRatio()};let oe=new a(u,new n({uniforms:i,transparent:!0,depthWrite:!0,vertexShader:b+`uniform float uT, uTipo, uVivo, uPerto, uDorme, uDispersa, uPx, uRevela; attribute vec3 aRnd; attribute float aRastro; varying float vA; varying float vLuz;
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
        }`}));r.add(oe),i.uRevela={value:0};let p=new m(new ae(2.1,C?24:48),new n({uniforms:i,transparent:!0,depthWrite:!1,blending:2,vertexShader:b+`uniform float uT, uTipo, uVivo, uPerto; varying vec3 vN; varying vec3 vV; varying float vD;
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
        }`}));p.visible=!1,r.add(p);let de=new le(new se(new ae(3.5,2)),new ce({color:13620960,transparent:!0,opacity:.07,depthWrite:!1}));r.add(de);let h=new ne;r.add(h),e.tipo===1?[2.9,3.6].forEach((e,t)=>{let n=new le(new se(new ae(e,t)),new ce({color:14673648,transparent:!0,opacity:.35,depthWrite:!1,blending:2}));n.userData.v=t?-.12:.18,h.add(n)}):e.tipo===2&&[0,1,2].forEach(e=>{let t=new Float32Array(780);for(let n=0;n<260;n++){let r=n/260*Math.PI*2,i=3.1+e*.5;t.set([Math.cos(r)*i,(Math.random()-.5)*.12,Math.sin(r)*i],n*3)}let n=new f;n.setAttribute(`position`,new d(t,3));let r=new a(n,new re({map:_e,size:.22,transparent:!0,opacity:.4,depthWrite:!1,blending:2,color:15265528}));r.rotation.set(.5+e*.7,e*1.1,e*.4),r.userData.k=e,h.add(r)});let g=new ee(new ue({map:_e,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));g.scale.setScalar(3.2),r.add(g);let _=new m(new ie(.06,.9,80,16,1,!0),new n({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uT:D,uA:{value:e.tipo===2?.08:.25}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,fragmentShader:`uniform float uT, uA; varying vec2 vUv; void main(){ float a = (1.0 - vUv.y) * smoothstep(0.0, 0.08, vUv.y) * (0.8 + 0.2 * sin(uT * 1.5 + vUv.y * 20.0)); gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * a * uA, 1.0); }`}));return _.geometry.translate(0,40,0),_.scale.y=.001,r.add(_),T.add(r),{...e,g:r,u:i,nucleo:g,facho:_,enxame:null,extra:h,corpoLuz:p,vivo:0,segura:0,aceso:!1,achado:!1}}),A=new de(w);A.addPass(new g(T,E)),A.addPass(new h(new s(1,1),.75,.6,.62)),A.addPass(new _);function j(){let e=l.clientWidth,t=l.clientHeight;w.setSize(e,t,!1),A.setSize(e,t),E.aspect=e/t,E.updateProjectionMatrix()}j(),new ResizeObserver(j).observe(l);let Ee=0,De=0;function M(e,t,n=3800){me.innerHTML=`${e}${t?`<small>${t}</small>`:``}`,me.classList.add(`ve`),clearTimeout(Ee),n&&(Ee=setTimeout(()=>me.classList.remove(`ve`),n))}function Oe(e){ge.textContent=e,ge.classList.add(`ve`),clearTimeout(De),De=setTimeout(()=>ge.classList.remove(`ve`),3400)}let ke=[`Design`,`Governança`,`Automação`];function N(){he.innerHTML=k.map((e,t)=>`<li class="${e.achado?`achado`:``} ${e.aceso?`ok`:``} ${x.explorados?.[t]?`visto`:``}" aria-label="${e.nome}: ${e.aceso?`aceso`:e.achado?`encontrado`:`não encontrado`}"><i></i>${ke[t]}</li>`).join(``)}N();let P=new c(0,1.7,8),F=.42,I=.05,L=0,R=.05,z=0,B=!1,V={x:0,y:0,dentro:!1},H=new Set,U=!1,W=null,Ae=new u,je=new s,G=null;S.addEventListener(`pointermove`,e=>{let t=S.getBoundingClientRect();V.x=(e.clientX-t.left)/t.width*2-1,V.y=-((e.clientY-t.top)/t.height)*2+1,V.dentro=!0,W&&e.pointerType!==`mouse`&&(F-=(e.clientX-W.x)*.005,R=v(R+(e.clientY-W.y)*.003,-.5,.6),W={x:e.clientX,y:e.clientY})}),S.addEventListener(`pointerleave`,()=>V.dentro=!1),S.addEventListener(`pointerdown`,e=>{B&&(U=!0,W={x:e.clientX,y:e.clientY},S.setPointerCapture(e.pointerId))}),addEventListener(`pointerup`,()=>{U=!1,W=null}),addEventListener(`keydown`,e=>{B&&(H.add(e.key.toLowerCase()),[`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,` `].includes(e.key.toLowerCase())&&e.preventDefault())}),addEventListener(`keyup`,e=>H.delete(e.key.toLowerCase()));let K={value:0},q=new ne;{let e=C?180:380,t=new Float32Array(e*90*2*3),r=0;for(let n=0;n<e;n++){let e=Math.random(),n=Math.random();for(let i=0;i<90;i++)for(let a=0;a<2;a++)t.set([(i+a)/90,e,n],r*3),r++}let i=new f;i.setAttribute(`position`,new d(t,3));let a=new le(i,new n({uniforms:{uT:D,uPortal:K},transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT, uPortal; varying float vA;
        void main(){ float s = position.x, u = position.y, o = position.z;
          float th = 0.21 + uT * (0.15 + uPortal * 0.5) + s * (6.2831 - 0.42), w = uT * 0.8;
          float r = 3.4 * (1.0 + u * 0.1 * sin(2.0 * th + w + u * 3.0) + u * 0.05 * sin(3.0 * th - w));
          vA = sin(3.14159 * s) * (1.1 - 0.6 * u) * (0.5 + 0.5 * o) * smoothstep(0.0, 0.03, s) * smoothstep(1.0, 0.97, s);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(cos(th) * r, sin(th) * r, (u - 0.5) * 0.5 * sin(th * 2.0 + w), 1.0); }`,fragmentShader:`uniform float uPortal; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.9, 0.93, 1.0) * vA * (0.02 + uPortal * 0.05), 1.0); }`}));a.frustumCulled=!1,q.add(a);let ee=new m(new oe(3.3,64),new n({uniforms:{uT:D,uPortal:K},transparent:!0,depthWrite:!1,blending:2,side:2,vertexShader:`varying vec2 vP; void main(){ vP = position.xy / 3.3; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uT, uPortal; varying vec2 vP;
        void main(){ float r = length(vP), a = atan(vP.y, vP.x);
          float giro = sin(a * 2.0 + log(r + 0.01) * 6.0 - uT * (1.5 + uPortal * 3.0)) * 0.5 + 0.5;
          float c = pow(giro, 3.0) * (1.0 - r) * 0.5 + exp(-r * 6.0) * 0.8;
          gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * c * uPortal * smoothstep(1.0, 0.85, r), 1.0); }`}));q.add(ee)}let J=new m(new i(.96,1,96),new o({color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:2,side:2}));J.rotation.x=-Math.PI/2,T.add(J);let Y=new m(new ie(.5,2.2,60,32,1,!0),new n({uniforms:{uA:{value:0}},transparent:!0,depthWrite:!1,blending:2,side:2,vertexShader:`varying float vY; void main(){ vY = uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uA; varying float vY; void main(){ gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * uA * pow(1.0 - vY, 2.0) * 0.5, 1.0); }`}));T.add(Y),q.position.set(0,3.3,-92),q.visible=!1,T.add(q);let Me=0,X=!1,Z=new c,Ne=new c,Pe=performance.now(),Fe=!0,Q=0,$=!1,Ie=0;new IntersectionObserver(e=>{Fe=e[0].isIntersecting,Fe&&!Q&&(Q=requestAnimationFrame(Le))}).observe(l);function Le(e){Q=0;let t=v((e-Pe)/1e3,0,.05);Pe=e;let n=e/1e3;if(D.value=n,B&&V.dentro&&!C){let e=Math.sign(V.x)*Math.max(0,Math.abs(V.x)-.25)/.75;L+=(-e*1.3-L)*(1-Math.exp(-t*5)),R=v(V.y*.45,-.4,.5)}else L*=.9;F+=L*t,I+=(R-I)*(1-Math.exp(-t*4)),je.set(B&&!C?V.x:0,B&&!C?V.y:0),Ae.setFromCamera(je,E),G=null;for(let e of k)Ae.ray.distanceToPoint(e.g.position)<2.8&&e.g.position.distanceTo(P)<16&&(G=e);let r=U&&!G||H.has(`w`)||H.has(`arrowup`),i=H.has(`s`)||H.has(`arrowdown`);if((H.has(`a`)||H.has(`arrowleft`))&&(F+=t*1.4),(H.has(`d`)||H.has(`arrowright`))&&(F-=t*1.4),z+=((B?r?7.5:i?-4:0:.9)-z)*(1-Math.exp(-t*2.5)),Ne.set(-Math.sin(F),0,-Math.cos(F)),P.addScaledVector(Ne,z*t),!$)for(let e of k){Z.copy(P).sub(e.g.position),Z.y=0;let t=Z.length();t<4.2&&P.addScaledVector(Z.normalize(),4.2-t)}let a=Math.hypot(P.x,P.z+25);a>85&&(P.x*=85/a,P.z=(P.z+25)*85/a-25);let ee=Math.sin(n*7)*.04*Math.min(1,Math.abs(z)/6);E.position.set(P.x,1.7+ee,P.z),Z.set(P.x-Math.sin(F)*Math.cos(I),1.7+Math.sin(I),P.z-Math.cos(F)*Math.cos(I)),E.lookAt(Z),ve.value.copy(P);let o=k[1];if(k.forEach((e,r)=>{let i=e.g.position.distanceTo(P);v(1-(i-5)/14)>.5&&!e.achado&&(e.achado=!0,N(),M(e.nome,e.tipo===2&&!o.aceso?`Adormecido. Automação só roda sobre base arrumada.`:`Segure sobre o orbe para acordá-lo.`));let a=e.tipo===2&&!o.aceso;B&&U&&G===e&&!e.aceso?a?e._av||(Oe(`Automação só roda sobre base arrumada. Acorde a Governança Digital primeiro.`),e._av=1,setTimeout(()=>e._av=0,2500)):(e.segura=Math.min(1,e.segura+t/1.6),e.segura>=1&&(e.aceso=!0,N(),x.aoAcender?setTimeout(()=>x.aoAcender(r),900):M(e.nome,e.linha,5200),e===o&&Oe(`Algo acordou ao longe: Automações.`))):e.aceso||(e.segura=Math.max(0,e.segura-t*.8)),e.vivo+=((e.aceso?1:e.segura*.7)-e.vivo)*(1-Math.exp(-t*3)),e.u.uVivo.value=e.vivo,e.u.uPerto.value=+(G===e)*!e.aceso,e.u.uDorme.value+=(+!!a-e.u.uDorme.value)*.05,e.g.rotation.y+=t*(.08+e.vivo*.25),e.g.rotation.x=Math.sin(n*.3+r)*.15,$||(e.g.position.y=pe[r].pos[1]+Math.sin(n*.6+r*2)*.35),e.nucleo.material.opacity=e.vivo*.35+(G===e?.08:0),e.nucleo.scale.setScalar(2.6+e.vivo*3+e.segura*1.5*Math.sin(n*12)*.2),e.acendeFacho=Math.min(1,(e.acendeFacho||0)+(e.aceso?t*.8:0)),e.facho.scale.y=Math.max(.001,y(e.acendeFacho)),e.facho.material.uniforms.uA.value=.65*y(e.acendeFacho),e.u.uDispersa.value=e.segura*(1-e.vivo)*1.2*(1-e.u.uRevela.value),i<11&&(e.revelou=!0),e.u.uRevela.value+=(+!!e.revelou-e.u.uRevela.value)*(1-Math.exp(-t*.9)),e.corpoLuz.visible=e.u.uRevela.value>.01,e.extra.children.forEach(r=>{if(e.tipo===1)r.rotation.y+=t*r.userData.v*(1+e.vivo*2),r.rotation.x+=t*r.userData.v*.5,r.material.opacity=(a?.1:.18)+e.vivo*.45;else{let i=(n*1.6-r.userData.k*.7)%2.1;r.material.opacity=(a?.06:.12+e.vivo*.25)+Math.max(0,1-Math.abs(i-.4)*2.5)*(a?.1:.5+e.vivo*.4),r.rotation.y+=t*(.3+r.userData.k*.15)*(a?.2:1+e.vivo)}})}),ye.value=k.filter(e=>e.aceso).length/3,!$&&k.every(e=>e.aceso)&&(!x.explorados||x.explorados.every(Boolean))&&($=!0,setTimeout(()=>{M(`A sala está arrumada.`,`Atravesse o portal para seguir.`,0),x.aoFinal?.()},1200)),$&&!q.userData.veio&&(q.userData.veio=!0,Me=n,q.position.set(P.x-Math.sin(F)*20,3.3,P.z-Math.cos(F)*20),q.visible=!0,Oe(`Um portal se abriu à sua frente.`),x.aoPortalSurge?.()),q.visible){let e=n-Me,t=y(e/1.4);q.scale.setScalar(Math.max(.001,t*(1+Math.sin(Math.min(1,e/1.4)*Math.PI)*.25))),K.value=Math.min(1.6,t+Math.max(0,1-e/.6)*2),q.lookAt(P.x,3.3,P.z);let r=e%2.6/2.6;J.position.set(q.position.x,.05,q.position.z),J.scale.setScalar(1+r*22),J.material.opacity=(1-r)*.5*t,Y.position.set(q.position.x,30,q.position.z),Y.material.uniforms.uA.value=t*(.6+.4*Math.sin(n*2))}{Z.copy(q.position).sub(P),Z.y=0;let e=Z.length();q.visible&&e<4.5&&B&&!X&&(X=!0,x.aoPortal?.())}if($){Ie=Math.min(1,Ie+t*.18);let e=y(Ie);k.forEach((t,r)=>{let i=n*.2+r/3*Math.PI*2;Z.set(P.x-Math.sin(F)*16+Math.cos(i)*5,8+Math.sin(n+r)*.4,P.z-Math.cos(F)*16+Math.sin(i)*5),t.g.position.lerp(Z,.03*e)})}if(x.aoQuadro&&B){let e=Math.cos(F),t=-Math.sin(F);x.aoQuadro({orbes:k.map(n=>{Z.copy(n.g.position).sub(P),Z.y=0;let r=Z.length();return{d:r,pan:(Z.x*e+Z.z*t)/(r||1),segura:n.segura,aceso:n.aceso}}),proxima:k.findIndex(e=>!e.aceso)<0?null:k.findIndex(e=>!e.aceso)})}A.render(),(Fe||B)&&(Q=requestAnimationFrame(Le))}return Q=requestAnimationFrame(Le),{atualiza(){N()},reinicia(){k.forEach((e,t)=>{e.aceso=e.achado=e.revelou=!1,e.segura=e.vivo=0,e.acendeFacho=0,e.u.uRevela.value=0,e.g.position.set(...pe[t].pos)}),$=!1,Ie=0,X=!1,Me=0,q.visible=!1,q.userData={},K.value=0,J.material.opacity=0,Y.material.uniforms.uA.value=0,P.set(0,1.7,8),F=.42,I=R=.05,z=0,L=0,N(),M(`Arrumar a sala`,`Encontre as três orbes e segure sobre cada uma para acendê-la.`,4200)},entra(){B=!0,X=!1,l.classList.add(`explorando`),document.documentElement.style.overflow=`hidden`,x.lenis?.()?.stop(),j(),M(`Arrumar a sala`,C?`Arraste para olhar. Segure para andar. Encontre os três orbes.`:`Mova o mouse para olhar. Segure o clique para andar. Encontre os três orbes.`,4600),Q||=requestAnimationFrame(Le)},sai(){B=!1,U=!1,l.classList.remove(`explorando`),document.documentElement.style.overflow=``,x.lenis?.()?.start(),j()}}}export{x as t};