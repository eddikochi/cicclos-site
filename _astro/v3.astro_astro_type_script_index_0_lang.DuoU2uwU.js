import{$ as e,B as t,D as n,E as r,Et as i,Ft as a,G as o,Gt as s,I as c,It as l,Jt as u,Kt as d,M as f,Mt as p,N as m,O as h,P as g,Q as _,Qt as v,Rt as y,S as b,St as x,T as S,Ut as C,V as w,Vt as T,W as E,Wt as D,Xt as O,Zt as k,_ as ee,_t as te,b as A,c as j,d as M,dt as N,et as P,f as ne,gt as re,ht as ie,i as ae,it as oe,j as F,jt as se,k as ce,kt as le,l as I,m as ue,mt as de,n as fe,ot as pe,pt as L,qt as R,r as me,t as he,tt as ge,u as _e,vt as ve,w as ye,wt as be,xt as xe,yt as Se,zt as Ce}from"./three.module.BiQ6ncGj.js";import{n as we,t as Te}from"./RoomEnvironment.C-CMcW2k.js";import{i as Ee,n as De,r as Oe,t as ke}from"./materiaViva.iet_E-Vv.js";import{i as Ae,n as je,r as Me,t as Ne}from"./OutputPass.Dncg2rVm.js";import{a as Pe,i as Fe,n as Ie,o as Le,r as Re,s as ze,t as Be}from"./mundo.v82RMOMl.js";var Ve=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),He=e=>(e=Ve(e),e*e*(3-2*e)),Ue=.7,We=(e,t)=>He((e-t*.35)/1.2),Ge=e=>.35+.35*He(1-(e-8)/60),Ke=`
  float hE(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float estrelas(vec3 d, float limiar){
    vec2 e = vec2(atan(d.x, -d.z), asin(clamp(d.y, -1.0, 1.0))) * 260.0; vec2 ce = floor(e), fe = fract(e) - 0.5;
    return step(limiar, hE(ce)) * (0.4 + 0.6 * hE(ce + 3.1)) * smoothstep(0.22, 0.0, length(fe)) * smoothstep(-0.05, 0.1, d.y);
  }`;function qe(e,t,{fios:n=200,forca:r=1,fenda:i=.5,semente:a=0}={}){let o=new Float32Array(n*120*2*3),s=0,c=a*2654435761+1013904223>>>0,l=a?()=>{c=c+1831565813>>>0;let e=c;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}:Math.random;for(let e=0;e<n;e++){let e=l()**1.5,t=l();for(let n=0;n<120;n++)for(let r=0;r<2;r++)o.set([(n+r)/120,e,t],s*3),s++}let u=new M;u.setAttribute(`position`,new _e(o,3));let d={uT:t,uR:{value:e},uF:{value:0},uFenda:{value:i},uNasce:{value:0}},f=new E(u,new p({uniforms:d,transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT, uR, uFenda, uNasce; varying float vA;
      void main(){ float s = position.x, u = position.y, o = position.z;
        float th = uFenda * 0.5 + s * (6.2831 - uFenda) + 1.5708, w = uT * 1.1;
        // nascendo: os fios chegam abertos (raio maior, mais soltos) e se fecham no desenho do anel
        float solto = 1.0 - uNasce;
        float r = uR * (1.0 + solto * (0.6 + u * 0.8) + u * (0.12 * sin(2.0 * th + w + u * 2.6) + 0.07 * sin(3.0 * th - w + 1.9 + u * 2.6)));
        th += solto * (1.2 + u * 2.0);
        vA = (1.1 - 0.7 * u) * (0.5 + 0.5 * o) * smoothstep(0.0, 0.05, s) * smoothstep(1.0, 0.95, s);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(cos(th) * r, sin(th) * r, (u - 0.5) * uR * 0.12 * sin(th * 2.0 + w), 1.0); }`,fragmentShader:`uniform float uF; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * vA * 0.045 * uF, 1.0); }`}));return f.frustumCulled=!1,{l:f,u:d,forca:r}}function Je(e,t,n,r,{fenda:i=.6,giro:a=0,escala:o=[.62,1.05,.7]}={}){let s=new g(e,t,r),c=new N,l=Array.from({length:r},(e,t)=>({a:i*.5+t/(r-1)*(Math.PI*2-i)+Math.PI/2+a,atraso:Math.random()*.35,gira:(.8+Math.random()*1.6)*(Math.random()<.5?-1:1),abre:.6+Math.random()*1.4,z:(Math.random()-.5)*2,tomb:new R(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(6)}));function u(e){for(let t=0;t<r;t++){let r=l[t],i=He((e-r.atraso)/.65),a=r.a+i*r.gira,u=n*(1+i*r.abre);c.position.set(Math.cos(a)*u,Math.sin(a)*u,i*r.z*n*.5),c.rotation.set(i*r.tomb.x,i*r.tomb.y,a+i*r.tomb.z);let d=(1-i)**1.4;c.scale.set(o[0]*d+1e-4,o[1]*d+1e-4,o[2]*d+1e-4),c.updateMatrix(),s.setMatrixAt(t,c.matrix)}s.instanceMatrix.needsUpdate=!0,s.visible=e<.999}return u(0),{inst:s,desfaz:u}}function Ye(e,t,n,i,a,{gatilho:o=16,dura:s=1.1,fios:c=200,forca:l=1,fenda:u=.6,giro:d=0,escala:f}={}){let p=new r,m=Je(e,t,n,i,{fenda:u,giro:d,escala:f}),h=qe(n,a,{fios:c,forca:l,fenda:u});p.add(m.inst),p.add(h.l);let g=0,_=!1;return{g:p,bl:m,luz:h,vivo(e,t){return!_&&e<o&&(_=!0),_&&g<1&&(g=Math.min(1,g+t/s),m.desfaz(g)),h.u.uNasce.value=He((g-.15)/.75),h.u.uF.value=l*He((g-.05)/.5),g},reinicia(){g=0,_=!1,m.desfaz(0),h.u.uF.value=0,h.u.uNasce.value=0},get e(){return g}}}function Xe(e,t){let n=matchMedia(`(max-width: 860px), (pointer: coarse)`).matches,r=new ae({canvas:e,antialias:!0,alpha:!0,powerPreference:`high-performance`});r.setPixelRatio(Math.min(devicePixelRatio||1,n?1.3:1.6)),r.setClearColor(263173,1),r.toneMapping=4,r.toneMappingExposure=1;let o=new se,s=new de(60,1,.1,400);o.environment=new he(r).fromScene(new Te,.04).texture;let c=[0,-55,-110],u={value:0},f=[0,1,2].map(e=>{let t=qe(21+e*2,u,{fios:n?320:700,fenda:.5,semente:11+e});return t.u.uNasce.value=1,t.l.position.z=c[e],o.add(t.l),t.giroInicial=[2.1,-1.4,.9][e],t});o.add(new h(9081762,328966,.35));let m=new P(new l(380,48,24),new p({side:1,depthWrite:!1,vertexShader:`varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:Ke+`varying vec3 vD; void main(){ gl_FragColor = vec4(vec3(0.0012, 0.0012, 0.0014) + vec3(0.9) * estrelas(vD, 0.9935), 1.0); }`}));m.rotation.x=-Ue,m.renderOrder=-1,o.add(m);let g=n?400:900,_=new Float32Array(g*3);for(let e=0;e<g;e++){let t=Math.random()*6.283,n=6+Math.random()*26;_.set([Math.cos(t)*n,Math.sin(t)*n,20-Math.random()*170],e*3)}let v=new M;v.setAttribute(`position`,new _e(_,3));let y=new ve(v,new Se({color:14673648,size:.08,transparent:!0,opacity:.1,depthWrite:!1,blending:2}));o.add(y);let S=new R(.42,-.24,.87).normalize(),C=t?new O(t):null;C&&(C.colorSpace=le);let w={uT:u,uVe:{value:0},uAbre:{value:0},uVid:{value:C},uVidMix:{value:0},uMira:{value:new R(0,0,1)},uRaioX:{value:0},uPulso:{value:0},uPorta:{value:S},uAchou:{value:0}},T=new P(new ce(16,n?32:64),new p({uniforms:w,transparent:!0,depthWrite:!1,vertexShader:`uniform float uT; varying vec3 vN; varying vec3 vP; varying vec3 vV;
      void main(){ vec3 n = normalize(position); float d = 0.25 * sin(n.x * 7.0 + uT * 0.2) * sin(n.y * 6.0 - uT * 0.15) * sin(n.z * 5.0);
        vec3 p = position + n * d; vP = n; vec4 w = modelMatrix * vec4(p, 1.0); vN = normalize(mat3(modelMatrix) * n); vV = normalize(cameraPosition - w.xyz);
        gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform float uT, uAbre, uVe, uVidMix, uRaioX, uAchou, uPulso; uniform sampler2D uVid; uniform vec3 uMira, uPorta; varying vec3 vN; varying vec3 vP; varying vec3 vV;
      float h2(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
      float vn(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(h2(i), h2(i + vec3(1,0,0)), f.x), mix(h2(i + vec3(0,1,0)), h2(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(h2(i + vec3(0,0,1)), h2(i + vec3(1,0,1)), f.x), mix(h2(i + vec3(0,1,1)), h2(i + vec3(1,1,1)), f.x), f.y), f.z); }
      void main(){
        float fr = pow(1.0 - abs(dot(vN, vV)), 2.5);
        // rocha escura: relevo fino e uma borda de luz (a luz vem de trás, contra a névoa)
        float rocha = vn(vP * 9.0) * 0.6 + vn(vP * 23.0) * 0.4;
        vec3 c = vec3(0.012, 0.013, 0.015) * (0.6 + 0.8 * rocha) + vec3(0.7, 0.75, 0.82) * pow(fr, 2.2) * 0.18;
        float sol = max(0.0, dot(vN, normalize(vec3(-0.4, 0.6, 0.5))));
        c += vec3(0.5, 0.52, 0.56) * pow(sol, 3.0) * 0.1 * rocha;
        // o vídeo aparece de dentro do planeta, numa janela redonda de bordas macias na face voltada para nós
        if (uVidMix > 0.001 && vP.z > 0.0) {
          vec2 q = vP.xy / 0.8; float r = length(q);
          vec3 v = texture2D(uVid, q * vec2(0.36, 0.5) + 0.5).rgb; v = mix(vec3(dot(v, vec3(0.3, 0.59, 0.11))), v, 0.45);
          // borda sem linha: some em transparência larga e irregular, como névoa entrando na rocha
          float bord = r + (vn(vP * 5.0 + uT * 0.15) - 0.5) * 0.28;
          float jan = smoothstep(0.95, 0.3, bord) * uVidMix;
          c = mix(c, v * 1.1, jan);
        }
        // raio-x: onde a luz do mouse passa, a rocha some e aparece o interior (camadas, meridianos, veios)
        float ang = acos(clamp(dot(vP, uMira), -1.0, 1.0));
        float raio = smoothstep(0.42, 0.3, ang) * uRaioX;
        if (raio > 0.001) {
          // linhas finas e muitas: meridianos, paralelos, camadas e veios, mais um choque elétrico que pisca e some
          float dLat = 0.5 - abs(fract(asin(vP.y) * 16.0) - 0.5), dLon = 0.5 - abs(fract(atan(vP.z, vP.x) * 5.0) - 0.5);
          float grade = smoothstep(0.018, 0.0, dLat) + smoothstep(0.018, 0.0, dLon);
          float camadas = pow(0.5 + 0.5 * sin(length(vP.xy) * 90.0 - uT * 3.0), 60.0);
          float veio = smoothstep(0.992, 1.0, sin(vP.x * 31.0 + sin(vP.y * 17.0) * 2.0) * sin(vP.y * 27.0 + vP.z * 13.0));
          float quadro = floor(uT * 18.0);
          float choque = smoothstep(0.012, 0.0, abs(vn(vP * 9.0 + vec3(quadro * 1.7, 0.0, quadro)) - 0.5)) * step(0.35, fract(sin(quadro * 12.9898) * 43758.5)) * uPulso;
          vec3 xr = vec3(0.01, 0.014, 0.018) + vec3(0.55, 0.75, 0.95) * (grade * 0.35 + camadas * 0.4 + veio * 0.8 + choque * 1.6) * (0.45 + 0.9 * uPulso);
          // a porta: um C de luz escondido; no raio-x ele acende
          float ap = acos(clamp(dot(vP, uPorta), -1.0, 1.0));
          vec3 ref = normalize(cross(uPorta, vec3(0.0, 1.0, 0.0))); vec3 cima = cross(ref, uPorta);
          float aa = atan(dot(vP - uPorta, cima), dot(vP - uPorta, ref));
          float aro = exp(-pow((ap - 0.09) * 220.0, 2.0)) * step(0.5, abs(aa + 1.57) ) ;
          xr += vec3(1.0) * (aro * 1.6 + exp(-ap * 45.0) * 0.6);
          c = mix(c, xr, raio);
          c += vec3(0.7, 0.85, 1.0) * exp(-pow((ang - 0.36) * 140.0, 2.0)) * uRaioX * 0.35;   // a borda da lente, fina
        }
        // achou a porta: ela fica acesa mesmo fora do raio-x
        { float ap = acos(clamp(dot(vP, uPorta), -1.0, 1.0)); c += vec3(1.0) * uAchou * (exp(-pow((ap - 0.09) * 70.0, 2.0)) * 1.2 + exp(-ap * 25.0) * 0.6) * (0.8 + 0.2 * sin(uT * 4.0)); }
        // entrar: a porta abre e a luz toma conta
        { float ap = acos(clamp(dot(vP, uPorta), -1.0, 1.0)); c += vec3(1.0) * smoothstep(0.1 + uAbre * 1.6, 0.0, ap) * uAbre * 2.0; }
        gl_FragColor = vec4(c, uVe);
      }`}));T.position.z=-150,o.add(T);let E=new P(new re(4,4),new ge({color:16777215,transparent:!0,opacity:0,depthTest:!1}));E.renderOrder=10,o.add(E);let D=new Ae(r);D.addPass(new Me(o,s)),D.addPass(new je(new d(1,1),.22,.4,.75)),D.addPass(new Ne);let k=0,ee=0;function te(){let t=e.clientWidth,n=e.clientHeight;!t||t===k&&n===ee||(k=t,ee=n,r.setSize(t,n,!1),D.setSize(t,n),s.aspect=t/n,s.updateProjectionMatrix())}te(),addEventListener(`resize`,te);let A=e=>(e=Math.min(1,Math.max(0,e)),e*e*(3-2*e)),j=0,N=0;addEventListener(`pointermove`,e=>{j=e.clientX/innerWidth-.5,N=e.clientY/innerHeight-.5});let ne=new i,ie=new d,oe=new a(new R,16),F=new R,I=0,ue=0,fe=new x,pe=new x().setFromUnitVectors(S,new R(0,0,1));function L(e,t,n){if(I=+!!n,!n)return 0;if(ie.set(e*2-1,-(t*2-1)),ne.setFromCamera(ie,s),oe.center.copy(T.position),!ne.ray.intersectSphere(oe,F))return I=0,0;let r=T.worldToLocal(F.clone()).normalize();return w.uPulso.value=Math.min(1,w.uPulso.value+w.uMira.value.distanceTo(r)*25),w.uMira.value.lerp(r,.35).normalize(),Math.max(0,1-r.angleTo(S)/.32)}function me(){let e=S.clone().multiplyScalar(16).applyMatrix4(T.matrixWorld).project(s);return[(e.x+1)/2,(1-e.y)/2]}function ye(e,t,n={}){u.value=t;let r=40-e*180,i=n.parallax??1;return s.position.set(j*2*i,-N*1.4*i,r),s.lookAt(j*1*i,-N*.7*i,r-30),s.rotation.z=Math.max(0,e)*.3,m.position.copy(s.position),f.forEach((e,t)=>{let r=s.position.z-c[t];A(1-(r-8)/60);let i=n.desceAneis??(n.desce==null?9:n.desce),a=A((i-t*.35)/1.4);e.l.position.y=(1-a)*70,e.l.rotation.z=0;let o=n.formaAneis==null?1:We(n.formaAneis,t);e.u.uNasce.value=o,e.u.uF.value=Ge(r)*a*o}),y.rotation.z=t*.015,y.material.opacity=.1*(n.parallax??1),w.uVe.value=n.desce==null||n.planetaJa?1:Math.min(1,Math.max(0,(n.desce-1.3)/.9)),w.uVidMix.value+=(+!!n.video-w.uVidMix.value)*.05,w.uRaioX.value+=(I-w.uRaioX.value)*(I>w.uRaioX.value?.2:.3),w.uPulso.value*=.86,w.uAchou.value+=(+!!n.achou-w.uAchou.value)*.08,ue+=(+!!n.entrando-ue)*.06,fe.setFromEuler(new b(0,Math.sin(t*.15)*.25,0)),T.quaternion.copy(fe).slerp(pe,ue),w.uAbre.value=A((e-.86)/.12),E.position.set(s.position.x,s.position.y,s.position.z-1),E.lookAt(s.position),E.material.opacity=A((e-.955)/.045),D.render(),f.map((e,t)=>({i:t,dist:s.position.z-c[t]}))}function be(){}return{render:ye,tamanho:te,raioX:L,portaNaTela:me,camera:s,Z:c,reinicia:be,pronto:Ie(r,o,s)}}var Ze=`
  float h2(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
  float nv(vec2 p){ return 0.55 * vn(p) + 0.3 * vn(p * 2.1 + 3.7) + 0.15 * vn(p * 4.3 + 1.1); }
`;function Qe(e){let t=matchMedia(`(max-width: 860px), (pointer: coarse)`).matches,r=new ae({canvas:e,antialias:!1,alpha:!0});r.setPixelRatio(Math.min(devicePixelRatio||1,1.5));let i=new re(2,2),a=new L(-1,1,1,-1,0,1),c=`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }`,l=t?192:256,f={type:n,format:be,minFilter:o,magFilter:o,depthBuffer:!1},m=new k(l,l,f),h=new k(l,l,f),g={uPrev:{value:null},uPx:{value:1/l},uGotas:{value:[,,,,].fill(0).map(()=>new u(0,0,0,0))}},_=new se;_.add(new P(i,new p({uniforms:g,vertexShader:c,fragmentShader:`uniform sampler2D uPrev; uniform float uPx; uniform vec4 uGotas[4]; varying vec2 vUv;
      void main(){
        vec4 c = texture2D(uPrev, vUv);
        float n = texture2D(uPrev, vUv + vec2(uPx, 0.0)).r + texture2D(uPrev, vUv - vec2(uPx, 0.0)).r
                + texture2D(uPrev, vUv + vec2(0.0, uPx)).r + texture2D(uPrev, vUv - vec2(0.0, uPx)).r;
        float h = (n * 0.5 - c.g) * 0.992;
        for (int i = 0; i < 4; i++) { vec4 g = uGotas[i]; if (g.w > 0.0) { vec2 d = (vUv - g.xy) / g.z; h += g.w * exp(-dot(d, d)); } }
        // borda amortecida: as ondas morrem antes de bater no fim da simulação
        vec2 e = min(vUv, 1.0 - vUv); h *= smoothstep(0.0, 0.06, min(e.x, e.y));
        gl_FragColor = vec4(h, c.r, 0.0, 1.0);
      }`})));let v=.62,y=.9,b=new k(4,4,{type:s,depthBuffer:!1}),x={uSimT:{value:null},uT:{value:0},uAsp:{value:1},uCw:{value:new d(0,4.3)},uLuz:{value:1},uMouse:{value:new d(.5,.5)},uBrilho:{value:0},uCamZ:{value:0},uCamY:{value:1},uPitch:{value:0},uRede:{value:0}},S=new se;S.add(new P(i,new p({uniforms:x,vertexShader:c,fragmentShader:Ze+`uniform sampler2D uSimT; uniform float uT, uAsp, uLuz, uBrilho, uCamZ, uCamY, uPitch, uRede; uniform vec2 uCw, uMouse; varying vec2 vUv;
      const float HORIZ = ${v.toFixed(2)}, ALT = ${1 .toFixed(2)}, FOV = ${y.toFixed(2)}, TAM = 16.0;
      // o redemoinho: a água gira em volta do ponto onde o anel tocou e afunda no centro
      vec2 gira(vec2 p){ vec2 q = p - uCw; float r = length(q); float an = uRede * (2.4 / (r + 0.35)) + uRede * uT * 1.5 / (r + 0.6); float c = cos(an), s = sin(an); return uCw + mat2(c, -s, s, c) * q; }
      float altura(vec2 p){
        p = gira(p);
        vec2 q = p - uCw; float r = length(q * vec2(1.0, 1.0));
        // marulho contínuo em anéis concêntricos em volta do anel (o desenho da imagem de antes)
        float an = sin(r * 7.0 - uT * 1.3) * 0.022 * exp(-r * 0.12) + sin(r * 13.0 - uT * 2.1 + 1.3) * 0.008 * exp(-r * 0.25);
        // vento: ondulação miúda e torta
        an += (nv(p * vec2(1.4, 3.2) + vec2(uT * 0.15, 0.0)) - 0.5) * 0.02;
        vec2 suv = q / TAM + 0.5;
        float sim = (suv.x > 0.0 && suv.x < 1.0 && suv.y > 0.0 && suv.y < 1.0) ? texture2D(uSimT, suv).r : 0.0;
        an -= uRede * 0.55 * exp(-r * 0.9);                              // o funil
        return an + sim * 0.06 * smoothstep(0.35, 0.9, uCamY);   // de perto (no mergulho) a simulação vira facetas quadradas: some
      }
      vec3 ceu(vec3 d){
        float h = d.y;
        float nevoa = nv(vec2(d.x * 2.0 + uT * 0.015, h * 6.0 - uT * 0.01)) * 0.6 + nv(vec2(d.x * 5.0 - uT * 0.02, h * 11.0)) * 0.4;
        vec3 c = mix(vec3(0.40, 0.415, 0.44), vec3(0.075, 0.08, 0.09), smoothstep(0.0, 0.5, h));
        c += vec3(0.10) * smoothstep(0.4, 0.85, nevoa) * smoothstep(0.45, 0.02, h);          // véus de névoa
        c += vec3(0.20, 0.21, 0.22) * exp(-pow(d.x * 1.8, 2.0)) * smoothstep(0.35, 0.0, h);   // claridade atrás do anel
        return c;
      }
      void main(){
        vec3 d = normalize(vec3((vUv.x - 0.5) * uAsp * FOV, (vUv.y - HORIZ) * FOV, -1.0));
        // a câmera da transição: avança pelo anel, inclina para baixo e desce até a superfície
        float cp = cos(uPitch), sp = sin(uPitch);
        d = normalize(vec3(d.x, d.y * cp + d.z * sp, -d.y * sp + d.z * cp));
        vec3 cor;
        if (d.y > -0.004) { cor = ceu(d); }
        else {
          float t = ALT * uCamY / -d.y; vec2 p = vec2(d.x * t, -d.z * t + uCamZ);
          float e = 0.02 + t * 0.004;
          float h0 = altura(p), hx = altura(p + vec2(e, 0.0)), hz = altura(p + vec2(0.0, e));
          vec3 n = normalize(vec3(-(hx - h0) / e, 1.0, -(hz - h0) / e));
          // grão de areia na normal e no tom
          // grão suave em duas escalas (de perto não vira pixel)
          float g = vn(p * 140.0) * 0.6 + vn(p * 430.0 + 3.1) * 0.4;
          float gz = vn(p * 140.0 + 7.0) * 0.6 + vn(p * 430.0 + 9.7) * 0.4;
          n = normalize(n + vec3(g - 0.5, 0.0, gz - 0.5) * 0.16 * exp(-t * 0.12) * smoothstep(0.35, 0.9, uCamY));   // areia: fosca
          vec3 v = -d, R = reflect(d, n);
          float fres = 0.04 + 0.96 * pow(1.0 - max(dot(n, v), 0.0), 5.0);
          vec3 base = vec3(0.035, 0.037, 0.041) * (0.75 + 0.5 * g);
          // a luz do símbolo, logo acima do ponto de contato
          vec3 L = vec3(uCw.x, 0.9, -uCw.y) - vec3(p.x, h0, -p.y); float dl = length(L); L /= dl;
          vec3 H = normalize(L + v);
          float esp = pow(max(dot(n, H), 0.0), 140.0) * 1.3 / (1.0 + dl * dl * 0.3) * uLuz;
          float dif = max(dot(n, L), 0.0) / (1.0 + dl * dl * 0.35) * uLuz;
          cor = base + ceu(R) * fres * 0.55 + vec3(0.95, 0.97, 1.0) * (esp + dif * 0.12);
          // os fios que entraram na água acendem o fundo: luz por baixo da superfície, mexida pelas ondas
          { float rr = length(p - uCw); cor += vec3(0.82, 0.88, 1.0) * uBrilho * (exp(-rr * 0.55) * 1.3 + exp(-rr * 0.12) * 0.25) * (0.75 + 0.5 * (n.x * 6.0 + n.z * 6.0)); }
          // braços claros do redemoinho
          if (uRede > 0.001) { vec2 qq = p - uCw; float rr = length(qq); float br = pow(0.5 + 0.5 * sin(atan(qq.y, qq.x) * 2.0 + log(rr + 0.05) * 6.0 - uT * 5.0 * uRede), 10.0); cor += vec3(0.85, 0.9, 1.0) * br * uRede * exp(-rr * 0.45) * 0.55; }
          // névoa: o chão some no horizonte
          cor = mix(ceu(vec3(d.x, 0.0, d.z)), cor, exp(-t * 0.06));
        }
        gl_FragColor = vec4(cor, 1.0);
      }`})));let C={uV:{value:b.texture},uT:{value:0},uRaio:{value:0},uSuga:{value:0},uGlitch:{value:0},uFlash:{value:0},uMouse:{value:new d(.5,.5)},uC:{value:new d(.5,.56)},uAsp:{value:1},uMerg:{value:0}},w=new se;w.add(new P(i,new p({uniforms:C,transparent:!0,vertexShader:c,fragmentShader:Ze+`uniform sampler2D uV; uniform float uT, uRaio, uSuga, uGlitch, uAsp, uFlash, uMerg; uniform vec2 uMouse, uC; varying vec2 vUv;
      float h(float n){ return fract(sin(n) * 43758.5453); }
      void main(){
        vec2 uv = vUv;
        float faixa = floor(uv.y * 46.0);
        float corte = step(1.0 - uGlitch * 0.55, h(faixa + floor(uT * 24.0)));
        uv.x += (h(faixa * 1.7 + floor(uT * 30.0)) - 0.5) * 0.12 * uGlitch * corte;
        // sem paralaxe (pedido do Eddi, 23/10)
        vec2 dir = uC - uv;
        vec3 col = vec3(0.0); float ab = 0.0015 + 0.004 * uGlitch + 0.006 * uSuga;
        for (int i = 0; i < 8; i++) {
          float f = float(i) / 7.0 * uSuga * 0.22;
          vec2 s = uv + dir * f;
          col += vec3(texture2D(uV, s + vec2(ab, 0.0)).r, texture2D(uV, s).g, texture2D(uV, s - vec2(ab, 0.0)).b);
        }
        col /= 8.0;
        vec2 dm = (vUv - uMouse) * vec2(uAsp, 1.0);
        float rs = length((vUv - uC) * vec2(uAsp, 1.0));
        float nn = nv(vUv * vec2(uAsp, 1.0) * 2.6 + vec2(uT * 0.04, -uT * 0.03));
        float limiar = rs * 0.55 + nn * 0.45;
        float emerge = smoothstep(limiar - 0.18, limiar + 0.08, uRaio * 1.35);
        float luz = max(emerge, exp(-dot(dm, dm) / 0.03) * 0.3 * smoothstep(0.0, 0.2, uRaio));
        col += vec3(0.85, 0.88, 0.95) * uFlash * 0.9;
        float a = clamp(max(luz, uFlash), 0.0, 1.0);
        // o mergulho: a linha d'água sobe pela tela; abaixo dela, o outro lado (a cena da pedra) aparece
        if (uMerg > 0.0) {
          float linha = mix(-0.12, 1.18, uMerg) + sin(vUv.x * 11.0 + uT * 3.0) * 0.018 + sin(vUv.x * 29.0 - uT * 5.0) * 0.007;
          float dy = vUv.y - linha;
          // refração logo acima da linha: a imagem treme e se curva
          float perto = exp(-abs(dy) * 22.0);
          col = mix(col, texture2D(uV, uv + vec2(sin(vUv.y * 90.0 + uT * 8.0) * 0.006, -0.02) * perto).rgb, perto);
          col += vec3(0.9, 0.94, 1.0) * exp(-pow(dy * 140.0, 2.0)) * 0.9;          // o menisco: um fio de luz na linha
          float acima = smoothstep(-0.004, 0.006, dy);
          a = max(a * acima, exp(-pow(dy * 140.0, 2.0)) * 0.8);
          col *= mix(1.0, 0.85, perto);
        }
        gl_FragColor = vec4(col * a, a);
      }`})));function T(){let n=e.clientWidth,i=e.clientHeight;if(!n)return;r.setSize(n,i,!1),C.uAsp.value=x.uAsp.value=n/i;let a=r.getPixelRatio()*(t?.6:.8);b.setSize(Math.round(n*a),Math.round(i*a))}T(),addEventListener(`resize`,T);function E(e,t){let n=(e-.5)*C.uAsp.value*y,r=(t-v)*y;if(r>-.01)return null;let i=1/-r;return[n*i,i]}let D=new d(.5,.5),O=new d(.5,.5),ee=0;function te(e,t){D.set(e,1-t),ee=1}let A=[0,4.3];function j(e,t){C.uC.value.set(e,1-t);let n=E(e,1-t-.2);n&&(A=n,x.uCw.value.set(n[0],n[1]))}let M=0,N=1,ne=0;function ie(e,t=1){M+=e,N+=(t-N)*.1}function oe(e,t,n,r,i){g.uGotas.value[e].set((t-A[0])/16+.5,(n-A[1])/16+.5,r,i)}let F=0;function ce(e=1){F=e}function le(e,t,n=0){C.uMerg.value=e,x.uBrilho.value=t,x.uRede.value=n}function I(e,t,n){x.uCamZ.value=e,x.uCamY.value=t,x.uPitch.value=n}function ue(e,t,n,i,o=0){C.uT.value=x.uT.value=e,C.uRaio.value=t,C.uSuga.value=n,C.uGlitch.value=i,C.uFlash.value=o,C.uMouse.value.lerp(D,.06),x.uMouse.value.copy(C.uMouse.value),x.uLuz.value=.6+N*.5,g.uGotas.value.forEach(e=>e.w=0);let s=Math.sin(M*2)*.35;oe(0,A[0]+s,A[1]+Math.cos(M*1.3)*.1,.012,.012*N),e>ne&&(ne=e+2.2-Math.min(1.4,N*.6),oe(1,A[0]+(Math.random()-.5)*.6,A[1],.018,.5*N));let c=C.uMouse.value.distanceTo(O);if(O.copy(C.uMouse.value),ee&&c>8e-4){let e=E(C.uMouse.value.x,C.uMouse.value.y);e&&oe(2,e[0],e[1],.01,Math.min(.25,c*25))}n>.05&&oe(3,A[0],A[1],.03,-.4*n),F&&=(oe(3,A[0],A[1]+.2,.03,.9*F),0);for(let e=0;e<2;e++)g.uPrev.value=m.texture,r.setRenderTarget(h),r.render(_,a),[m,h]=[h,m],e===0&&g.uGotas.value.forEach(e=>e.w=0);x.uSimT.value=m.texture,r.setRenderTarget(b),r.render(S,a),r.setRenderTarget(null),r.render(w,a)}return{render:ue,mouse:te,centro:j,tamanho:T,gira:ie,impacto:ce,mergulho:le,camera:I,get contato(){return A}}}function $e(e){let t=matchMedia(`(max-width: 860px), (pointer: coarse)`).matches,n=new ae({canvas:e,antialias:!1,powerPreference:`high-performance`});n.setPixelRatio(Math.min(devicePixelRatio||1,t?1.3:1.6)),n.setClearColor(394759,1);let i=new se,a=new de(50,1,.1,300),o={value:0},s={value:0},c={value:n.getPixelRatio()},l=new r;l.rotation.x=-1.12,i.add(l);let u=t?26e3:7e4,f=new Float32Array(u),m=new Float32Array(u),h=new Float32Array(u*3),g=new Float32Array(u);for(let e=0;e<u;e++){f[e]=e%2,m[e]=Math.random(),g[e]=Math.random();let t=()=>(Math.random()+Math.random()+Math.random()-1.5)/1.5;h.set([t(),t(),t()],e*3)}let _=new M;_.setAttribute(`position`,new _e(new Float32Array(u*3),3)),_.setAttribute(`aArm`,new _e(f,1)),_.setAttribute(`aT`,new _e(m,1)),_.setAttribute(`aOff`,new _e(h,3)),_.setAttribute(`aS`,new _e(g,1));let v=new ve(_,new p({uniforms:{uT:o,uPx:c},transparent:!0,depthWrite:!1,blending:2,vertexShader:`attribute float aArm, aT, aS; attribute vec3 aOff; uniform float uT, uPx; varying float vA;
      void main(){
        float t = fract(aT - uT * (0.008 + aS * 0.01));                 // escorre para dentro
        float r = 0.35 + 19.0 * pow(t, 1.35);
        float largura = 0.12 + r * 0.075;
        float ang = aArm * 3.14159 + log(r) * 2.4 + uT * 0.04 + aOff.x * largura / max(r, 0.5);
        vec3 p = vec3(cos(ang) * r, sin(ang) * r, 0.0);
        p.xy += aOff.xy * largura * 0.6;
        // ondas que correm na areia, mais altas perto do centro
        p.z = aOff.z * (0.12 + 1.2 * exp(-r * 0.35)) + sin(r * 1.6 - uT * 1.4) * 0.18 * exp(-r * 0.06);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = (0.8 + aS * 2.2) * uPx * (26.0 / -mv.z);
        float nucleo = exp(-r * 0.22);
        vA = (0.12 + 0.75 * nucleo) * smoothstep(0.0, 0.08, t) * smoothstep(1.0, 0.85, t) * (0.5 + 0.5 * aS);
        vA *= 1.0 - smoothstep(0.6, 1.4, abs(aOff.x));                 // grãos muito soltos, mais apagados
      }`,fragmentShader:`varying float vA;
      void main(){ vec2 c = gl_PointCoord - 0.5; float d = dot(c, c); if (d > 0.25) discard;
        gl_FragColor = vec4(vec3(0.86, 0.9, 1.0) * vA * (1.0 - d * 4.0), 1.0); }`}));v.frustumCulled=!1,l.add(v);let b=[3.2,6.2,9.4,12.8,16.6],x=t?1400:3200,S=new Float32Array(b.length*x*3),C=new Float32Array(b.length*x),w=new Float32Array(b.length*x);b.forEach((e,t)=>{for(let e=0;e<x;e++){let n=t*x+e;S.set([e/x,Math.random()-.5,Math.random()],n*3),C[n]=t,w[n]=Math.random()}});let T=new M;T.setAttribute(`position`,new _e(S,3)),T.setAttribute(`aAnel`,new _e(C,1)),T.setAttribute(`aS`,new _e(w,1));let E=new ve(T,new p({uniforms:{uT:o,uPasso:s,uPx:c,uR:{value:b}},transparent:!0,depthWrite:!1,blending:2,vertexShader:`attribute float aAnel, aS; uniform float uT, uPasso, uPx; uniform float uR[5]; varying float vA;
      void main(){
        float s = position.x, e = position.y, k = aAnel;
        float R = uR[int(k)];
        float sentido = mod(k, 2.0) < 0.5 ? 1.0 : -1.0;               // anéis vizinhos giram em sentidos opostos
        float fenda = 0.5;
        float ang = sentido * uT * (0.12 - k * 0.015) + k * 1.3 + fenda * 0.5 + s * (6.2831 - fenda);
        float vivo = 1.0 - smoothstep(0.0, 0.9, abs(k - uPasso));        // o anel do ciclo atual acende
        float r = R * (1.0 + e * (0.015 + 0.02 * vivo) + 0.012 * sin(ang * 3.0 + uT * 1.5 + k));
        vec4 mv = modelViewMatrix * vec4(cos(ang) * r, sin(ang) * r, e * 0.08 + 0.15 * sin(ang * 2.0 - uT), 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = (1.2 + aS * 1.8 + vivo * 2.2) * uPx * (26.0 / -mv.z);
        vA = (0.12 + 2.2 * vivo) * sin(3.14159 * s) * (0.4 + 0.6 * aS) * smoothstep(0.0, 0.04, s) * smoothstep(1.0, 0.96, s);
      }`,fragmentShader:`varying float vA;
      void main(){ vec2 c = gl_PointCoord - 0.5; float d = dot(c, c); if (d > 0.25) discard;
        gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * vA * (1.0 - d * 4.0), 1.0); }`}));E.frustumCulled=!1,l.add(E);let D=document.createElement(`canvas`);D.width=D.height=128;{let e=D.getContext(`2d`),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,`rgba(255,255,255,1)`),t.addColorStop(.2,`rgba(255,255,255,.35)`),t.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=t,e.fillRect(0,0,128,128)}let O=new y(new Ce({map:new ne(D),blending:2,depthWrite:!1,opacity:.7}));O.scale.setScalar(5),l.add(O);let k=t?1200:3e3,ee=new Float32Array(k*3);for(let e=0;e<k;e++)ee.set([(Math.random()-.5)*160,(Math.random()-.5)*90,-20-Math.random()*80],e*3);let te=new M;te.setAttribute(`position`,new _e(ee,3)),i.add(new ve(te,new Se({color:13620962,size:.14,transparent:!0,opacity:.4,depthWrite:!1,blending:2})));let A=null;t||(A=new Ae(n),A.addPass(new Me(i,a)),A.addPass(new je(new d(1,1),.42,.5,.28)),A.addPass(new Ne));function j(){let t=e.clientWidth,r=e.clientHeight;t&&(n.setSize(t,r,!1),A?.setSize(t,r),a.aspect=t/r,a.updateProjectionMatrix())}j(),addEventListener(`resize`,j);let N={d:46,alvoD:46,x:0,y:0},P=0;function re(e,t,r,c,u=0){o.value=e,P+=(t-P)*.04,s.value=P,N.alvoD=46-t*6.5,N.d+=(N.alvoD-N.d)*.035,N.x+=(r*6-N.x)*.04,N.y+=(-c*4-N.y)*.04;let d=a.aspect>1?4.5:0,f=u*u*(3-2*u),p=N.d*(1-f)+.6*f;a.position.set((N.x+d)*(1-f),(N.y+p*.32)*(1-f)+.5*f,p),a.lookAt(d*(1-f),-t*.6*(1-f),0),a.fov=50+f*40,a.updateProjectionMatrix(),A&&(A.passes[1].strength=.42+f*1.1),l.rotation.z=e*.015+P*.5,O.material.opacity=(.35+.15*Math.sin(e*1.7))*(1-f*.85),A?A.render():n.render(i,a)}function ie(){N.d=190,P=0}return{render:re,tamanho:j,expulsa:ie}}function et(){let e=null,t=null,n=null,r=null,i=!1,a=0,o=null,s=null,c=!1;function l(){e=new(window.AudioContext||window.webkitAudioContext),t=e.createGain(),t.gain.value=0,t.connect(e.destination);let i=e.createDynamicsCompressor();i.connect(t),o=i;let a=e.createDelay(1.2);a.delayTime.value=.42;let s=e.createGain();s.gain.value=.35;let c=e.createBiquadFilter();c.type=`lowpass`,c.frequency.value=1800,a.connect(c),c.connect(s),s.connect(a),s.connect(i);let l=e.createGain();l.connect(i),l.connect(a);let d=e.createBiquadFilter();d.type=`lowpass`,d.frequency.value=420,d.Q.value=.7;let f=e.createGain();f.gain.value=.16,d.connect(f),f.connect(l),[55,82.41,123.47,164.81].forEach((t,n)=>{[-6,5].forEach(r=>{let i=e.createOscillator();i.type=n===0?`sine`:`triangle`,i.frequency.value=t,i.detune.value=r;let a=e.createGain();a.gain.value=n===0?.5:.18/(n+1),i.connect(a),a.connect(d),i.start()})});let p=e.createOscillator();p.frequency.value=.07;let m=e.createGain();m.gain.value=180,p.connect(m),m.connect(d.frequency),p.start(),n={filtro:d,gPad:f};let h=e.createBuffer(1,e.sampleRate*3,e.sampleRate),g=h.getChannelData(0),_=0,v=0,y=0;for(let e=0;e<g.length;e++){let t=Math.random()*2-1;_=.997*_+t*.029,v=.985*v+t*.032,y=.95*y+t*.048,g[e]=(_+v+y)*.35}let b=e.createBufferSource();b.buffer=h,b.loop=!0;let x=e.createBiquadFilter();x.type=`bandpass`,x.frequency.value=600,x.Q.value=.8;let S=e.createGain();S.gain.value=.05,b.connect(x),x.connect(S),S.connect(l),b.start();let C=e.createOscillator();C.frequency.value=.05;let w=e.createGain();w.gain.value=350,C.connect(w),w.connect(x.frequency),C.start(),r={bp:x,gV:S,buf:h},u=l}let u=null,d=0;function f(n){if(n&&!e&&l(),!e)return;i=n,clearTimeout(d),n&&e.resume();let r=e.currentTime;t.gain.cancelScheduledValues(r),t.gain.setValueAtTime(t.gain.value,r),t.gain.linearRampToValueAtTime(n?.9:0,r+(n?1.6:.5)),n&&c&&!s&&N(!0),n?m(a):(A(null),d=setTimeout(()=>{i||e.suspend()},650))}let p=[300,420,520,260,700,900,640,560,820];function m(t){if(a=t,!e||!i)return;t!==5&&A(null);let o=e.currentTime;n.filtro.frequency.cancelScheduledValues(o),n.filtro.frequency.setTargetAtTime(p[t]??500,o,1.2),r.gV.gain.setTargetAtTime(t===3||t===4?.11:.05,o,.8)}function h(t=1){if(!e||!i)return;let n=e.currentTime,a=e.createBufferSource();a.buffer=r.buf;let o=e.createBiquadFilter();o.type=`bandpass`,o.Q.value=1.2,o.frequency.setValueAtTime(300,n),o.frequency.exponentialRampToValueAtTime(2600*t,n+.5),o.frequency.exponentialRampToValueAtTime(400,n+1.2);let s=e.createGain();s.gain.setValueAtTime(0,n),s.gain.linearRampToValueAtTime(.35*t,n+.25),s.gain.exponentialRampToValueAtTime(.001,n+1.3),a.connect(o),o.connect(s),s.connect(u),a.start(n,Math.random()*2),a.stop(n+1.4)}let g=[440,523.25,659.25,783.99,880,1046.5];function _(t=0){if(!e||!i)return;let n=e.currentTime,r=g[t%g.length];[1,2.76,5.4].forEach((t,i)=>{let a=e.createOscillator();a.type=`sine`,a.frequency.value=r*t;let o=e.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(.12/(i+1),n+.01),o.gain.exponentialRampToValueAtTime(8e-4,n+2.4/(i+1)),a.connect(o),o.connect(u),a.start(n),a.stop(n+2.5)})}function v(t=0,n=1){if(!e||!i)return;e.state!==`running`&&e.resume();let r=e.currentTime,a=e.createOscillator(),o=e.createBiquadFilter(),s=e.createGain();a.type=`square`,a.frequency.value=1900+t*900+Math.random()*500,o.type=`bandpass`,o.frequency.value=3200,o.Q.value=6,s.gain.setValueAtTime(1e-4,r),s.gain.linearRampToValueAtTime(.05*n,r+.002),s.gain.exponentialRampToValueAtTime(1e-4,r+.035),a.connect(o),o.connect(s),s.connect(u),a.start(r),a.stop(r+.05)}function y(){if(!e||!i)return;let t=e.currentTime,n=e.createBufferSource();n.buffer=r.buf;let a=e.createBiquadFilter();a.type=`lowpass`,a.frequency.value=110,a.Q.value=1.2;let o=e.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(1.4,t+.25),o.gain.exponentialRampToValueAtTime(1e-4,t+2.2);let s=e.createOscillator(),c=e.createGain();s.frequency.value=11,c.gain.value=.6,s.connect(c),c.connect(o.gain);let l=e.createOscillator(),d=e.createGain();l.frequency.setValueAtTime(42,t),l.frequency.exponentialRampToValueAtTime(28,t+2),d.gain.setValueAtTime(1e-4,t),d.gain.linearRampToValueAtTime(.5,t+.2),d.gain.exponentialRampToValueAtTime(1e-4,t+2.1),n.connect(a),a.connect(o),o.connect(u),l.connect(d),d.connect(u),n.start(t,Math.random()),n.stop(t+2.3),s.start(t),s.stop(t+2.3),l.start(t),l.stop(t+2.2)}function b(){if(!e||!i)return;e.state!==`running`&&e.resume();let t=e.currentTime+.02;[0,.07].forEach((n,r)=>{let i=e.createOscillator(),a=e.createBiquadFilter(),o=e.createGain();i.type=`square`,i.frequency.value=r?1400:900,a.type=`bandpass`,a.frequency.value=2200,a.Q.value=4,o.gain.setValueAtTime(1e-4,t+n),o.gain.linearRampToValueAtTime(.6,t+n+.003),o.gain.exponentialRampToValueAtTime(1e-4,t+n+.07),i.connect(a),a.connect(o),o.connect(u),i.start(t+n),i.stop(t+n+.08)});let n=e.createBufferSource();n.buffer=r.buf;let a=e.createBiquadFilter();a.type=`bandpass`,a.Q.value=3,a.frequency.setValueAtTime(300,t+.1),a.frequency.exponentialRampToValueAtTime(5200,t+.9);let o=e.createGain();o.gain.setValueAtTime(1e-4,t+.1),o.gain.linearRampToValueAtTime(.85,t+.75),o.gain.exponentialRampToValueAtTime(1e-4,t+1.1),n.connect(a),a.connect(o),o.connect(u),n.start(t+.1,Math.random()),n.stop(t+1.2);let s=e.createOscillator(),c=e.createGain();s.frequency.setValueAtTime(55,t+.9),s.frequency.exponentialRampToValueAtTime(110,t+1.6),c.gain.setValueAtTime(1e-4,t+.9),c.gain.linearRampToValueAtTime(1,t+.95),c.gain.exponentialRampToValueAtTime(1e-4,t+2.4),s.connect(c),c.connect(u),s.start(t+.9),s.stop(t+2.5),[220,330,440].forEach((n,r)=>{let i=e.createOscillator(),a=e.createGain();i.type=`sine`,i.frequency.setValueAtTime(n,t+.92),i.frequency.exponentialRampToValueAtTime(n*2,t+1.8),a.gain.setValueAtTime(1e-4,t+.92),a.gain.linearRampToValueAtTime(.14/(r+1),t+1.1),a.gain.exponentialRampToValueAtTime(1e-4,t+2.6),i.connect(a),a.connect(u),i.start(t+.92),i.stop(t+2.7)})}function x(){if(!e||!i)return;let t=e.currentTime,n=e.createBufferSource();n.buffer=r.buf;let a=e.createBiquadFilter();a.type=`bandpass`,a.Q.value=1.4,a.frequency.setValueAtTime(200,t),a.frequency.exponentialRampToValueAtTime(6e3,t+2.2);let o=e.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(.7,t+1.9),o.gain.exponentialRampToValueAtTime(1e-4,t+3.2),n.connect(a),a.connect(o),o.connect(u),n.start(t,Math.random()),n.stop(t+3.3),[110,164.81,220,329.63].forEach((n,r)=>{let i=e.createOscillator(),a=e.createGain();i.type=r?`triangle`:`sine`,i.frequency.setValueAtTime(n,t),i.frequency.exponentialRampToValueAtTime(n*1.5,t+2.2),a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(.12/(r+1),t+1.8),a.gain.exponentialRampToValueAtTime(1e-4,t+3.4),i.connect(a),a.connect(u),i.start(t),i.stop(t+3.5)}),[2637,3520,4186].forEach((n,r)=>{let i=e.createOscillator(),a=e.createGain(),o=t+1.4+r*.12;i.frequency.value=n,a.gain.setValueAtTime(1e-4,o),a.gain.linearRampToValueAtTime(.03,o+.05),a.gain.exponentialRampToValueAtTime(1e-4,o+1.6),i.connect(a),a.connect(u),i.start(o),i.stop(o+1.7)})}let S=null;function C(t){if(!e||!i)return;if(!S&&t>.01){let t=e.createOscillator(),n=e.createOscillator(),r=e.createBiquadFilter(),i=e.createGain();t.type=`sawtooth`,n.type=`sine`,r.type=`lowpass`,r.Q.value=6,i.gain.value=0,t.connect(r),n.connect(r),r.connect(i),i.connect(u),t.start(),n.start(),S={o:t,o2:n,f:r,g:i}}if(!S)return;let n=e.currentTime;if(S.o.frequency.setTargetAtTime(70+t*180,n,.05),S.o2.frequency.setTargetAtTime(140+t*520,n,.05),S.f.frequency.setTargetAtTime(200+t*2600,n,.05),S.g.gain.setTargetAtTime(t>.01?.05+t*.14:0,n,.06),t<=.01){let e=S;S=null,setTimeout(()=>{try{e.o.stop(),e.o2.stop()}catch{}},400)}}function w(){if(!e||!i)return;let t=e.currentTime;for(let n=0;n<46;n++){let n=e.createBufferSource();n.buffer=r.buf;let i=e.createBiquadFilter();i.type=`bandpass`,i.Q.value=8,i.frequency.value=1800+Math.random()*6500;let a=e.createGain(),o=t+Math.random()**1.8*1.1;a.gain.setValueAtTime(1e-4,o),a.gain.linearRampToValueAtTime(.45*Math.random()+.15,o+.002),a.gain.exponentialRampToValueAtTime(1e-4,o+.05+Math.random()*.12),n.connect(i),i.connect(a),a.connect(u),n.start(o,Math.random()*2),n.stop(o+.2)}let n=e.createOscillator(),a=e.createGain();n.frequency.setValueAtTime(90,t),n.frequency.exponentialRampToValueAtTime(32,t+.9),a.gain.setValueAtTime(.8,t),a.gain.exponentialRampToValueAtTime(1e-4,t+1.2),n.connect(a),a.connect(u),n.start(t),n.stop(t+1.3);let o=e.createBufferSource();o.buffer=r.buf;let s=e.createBiquadFilter();s.type=`highpass`,s.frequency.value=5e3;let c=e.createGain();c.gain.setValueAtTime(1e-4,t+.2),c.gain.linearRampToValueAtTime(.18,t+.5),c.gain.exponentialRampToValueAtTime(1e-4,t+2.4),o.connect(s),s.connect(c),c.connect(u),o.start(t+.2,Math.random()),o.stop(t+2.5)}function T(){if(!e||!i)return;let t=e.currentTime;for(let n=0;n<34;n++){let i=e.createBufferSource();i.buffer=r.buf;let a=e.createBiquadFilter();a.type=`highpass`,a.frequency.value=1500+Math.random()*3e3;let o=e.createGain(),s=t+n*.025+Math.random()*.03;o.gain.setValueAtTime(.55*(1-n/40),s),o.gain.exponentialRampToValueAtTime(.001,s+.16+Math.random()*.1),i.connect(a),a.connect(o),o.connect(u),i.start(s,Math.random()*2),i.stop(s+.15)}let n=e.createOscillator();n.frequency.setValueAtTime(120,t),n.frequency.exponentialRampToValueAtTime(30,t+1.4);let a=e.createGain();a.gain.setValueAtTime(.9,t),a.gain.exponentialRampToValueAtTime(.001,t+1.8),n.connect(a),a.connect(u),n.start(t),n.stop(t+1.6)}function E(){if(!e||!i)return;let t=e.currentTime,n=e.createOscillator();n.frequency.setValueAtTime(90,t),n.frequency.exponentialRampToValueAtTime(28,t+1.6);let r=e.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(1,t+.02),r.gain.exponentialRampToValueAtTime(.001,t+2),n.connect(r),r.connect(u),n.start(t),n.stop(t+2.1),h(1.8),_(5),setTimeout(()=>_(3),180)}let D=[523.25,659.25,783.99],O=null,k=[],ee=0;function te(t,n,r,i,a=1.6){let o=e.createOscillator();o.type=`sine`,o.frequency.value=t;let s=e.createOscillator();s.type=`triangle`,s.frequency.value=t*2;let c=e.createGain();c.gain.value=.25;let l=e.createGain();l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(r,n+.015),l.gain.exponentialRampToValueAtTime(8e-4,n+a);let d=e.createStereoPanner();d.pan.value=Math.max(-1,Math.min(1,i)),o.connect(l),s.connect(c),c.connect(l),l.connect(d),d.connect(u),o.start(n),s.start(n),o.stop(n+a+.05),s.stop(n+a+.05)}function A(t){if(!e)return;let n=e.currentTime;if(!t||!i){O&&O.g.gain.setTargetAtTime(0,n,.05),k.forEach(e=>e&&e.g.gain.setTargetAtTime(0,n,.4));return}if(!O){let t=e.createOscillator();t.type=`sawtooth`;let n=e.createBiquadFilter();n.type=`lowpass`,n.Q.value=6;let r=e.createOscillator();r.frequency.value=9;let i=e.createGain();i.gain.value=.35;let a=e.createGain();a.gain.value=0;let o=e.createGain();o.gain.value=1,r.connect(i),i.connect(o.gain),t.connect(n),n.connect(o),o.connect(a),a.connect(u),t.start(),r.start(),O={o:t,f:n,g:a,trem:r}}let r=Math.max(0,...t.orbes.map(e=>e.aceso?0:e.segura));O.g.gain.setTargetAtTime(r>.01?.05+r*.09:0,n,.05),O.o.frequency.setTargetAtTime(110+r*r*330,n,.05),O.f.frequency.setTargetAtTime(400+r*3200,n,.05),O.trem.frequency.setTargetAtTime(6+r*18,n,.1),t.orbes.forEach((t,r)=>{if(t.aceso&&!k[r]){let i=e.createOscillator();i.type=`sine`,i.frequency.value=D[r]/2;let a=e.createGain();a.gain.value=0;let o=e.createStereoPanner();i.connect(a),a.connect(o),o.connect(u),i.start(),k[r]={o:i,g:a,p:o};for(let e=0;e<=r;e++)te(D[e],n+e*.12,.12,t.pan,2.4)}k[r]&&(k[r].g.gain.setTargetAtTime(t.aceso?.035:0,n,.5),k[r].p.pan.setTargetAtTime(Math.max(-1,Math.min(1,t.pan)),n,.2))});let a=t.proxima;if(a!=null&&n>ee){let e=t.orbes[a],r=.03+.16*Math.max(0,1-e.d/70);for(let t=0;t<=a;t++)te(D[t],n+t*.22,r,e.pan);ee=n+2.6}}function j(){e&&(k.forEach(t=>{t&&(t.g.gain.setTargetAtTime(0,e.currentTime,.2),t.o.stop(e.currentTime+1))}),k=[],ee=0)}let M=null;function N(t){if(c=t,e){if(t&&!s){let t=e.createGain();t.gain.value=0;let n=e.createBiquadFilter();n.type=`lowpass`,n.frequency.value=2600,n.Q.value=.5,t.connect(n),n.connect(o),t.gain.setTargetAtTime(.5,e.currentTime,1);let r=e.sampleRate*2,i=e.createBuffer(1,r,e.sampleRate),a=i.getChannelData(0);for(let e=0;e<r;e++)a[e]=(Math.random()<9e-4?(Math.random()*2-1)*.6:0)+(Math.random()*2-1)*.012;let c=e.createBufferSource();c.buffer=i,c.loop=!0;let l=e.createGain();l.gain.value=.35,c.connect(l),l.connect(t),c.start();let u=e.createBuffer(1,e.sampleRate*.3,e.sampleRate),d=u.getChannelData(0);for(let e=0;e<d.length;e++)d[e]=Math.random()*2-1;let f=60/78/4,p=e.currentTime+.1,m=0,h=[[174.61,220,261.63,329.63,392],[164.81,196,246.94,293.66],[146.83,174.61,220,261.63,329.63],[130.81,164.81,196,246.94]],g=(n,r)=>{if(r===`bumbo`){let r=e.createOscillator(),i=e.createGain();r.frequency.setValueAtTime(110,n),r.frequency.exponentialRampToValueAtTime(42,n+.12),i.gain.setValueAtTime(.9,n),i.gain.exponentialRampToValueAtTime(.001,n+.35),r.connect(i),i.connect(t),r.start(n),r.stop(n+.4)}else{let i=e.createBufferSource();i.buffer=u;let a=e.createBiquadFilter(),o=e.createGain();r===`caixa`?(a.type=`bandpass`,a.frequency.value=1500,a.Q.value=.7,o.gain.setValueAtTime(.32,n),o.gain.exponentialRampToValueAtTime(.001,n+.18)):(a.type=`highpass`,a.frequency.value=7e3,o.gain.setValueAtTime(.07,n),o.gain.exponentialRampToValueAtTime(.001,n+.05)),i.connect(a),a.connect(o),o.connect(t),i.start(n),i.stop(n+.3)}},_=(n,r)=>r.forEach((r,i)=>{[0,7].forEach(a=>{let o=e.createOscillator(),s=e.createGain();o.type=i?`sine`:`triangle`,o.frequency.value=r,o.detune.value=a+(Math.random()-.5)*6,s.gain.setValueAtTime(0,n),s.gain.linearRampToValueAtTime(.045/(i*.25+1),n+.03+i*.012),s.gain.exponentialRampToValueAtTime(.001,n+f*15),o.connect(s),s.connect(t),o.start(n),o.stop(n+f*16)})}),v=()=>{for(;p<e.currentTime+.15;){let e=m%16,t=e%2?f*.18:0,n=p+t;(e===0||e===7||e===10)&&g(n,`bumbo`),(e===4||e===12)&&g(n,`caixa`),(e%2==0||Math.random()<.3)&&g(n,`chimbal`),e===0&&_(n,h[(m/16|0)%4]),p+=f,m++}};s={bus:t,vinil:c,timer:setInterval(v,25)},v()}else if(!t&&s){let t=s;s=null,t.bus.gain.setTargetAtTime(0,e.currentTime,.8),setTimeout(()=>{clearInterval(t.timer);try{t.vinil.stop()}catch{}t.bus.disconnect()},3500)}}}function P(){if(!e)return 0;M||(M=e.createAnalyser(),M.fftSize=2048,t.connect(M));let n=new Float32Array(M.fftSize);M.getFloatTimeDomainData(n);let r=0;for(let e of n)r+=e*e;return Math.sqrt(r/n.length)}return{liga:f,cena:m,sopro:h,sino:_,tique:v,tremor:y,acopla:b,nasce:x,cargaSemente:C,quebra:w,estalo:T,impacto:E,nivel:P,mundo:A,reiniciaMundo:j,batida:N,get ligado(){return i},get estado(){return e?.state??`sem contexto`}}}var tt=new R;function nt(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;tt.copy(t),tt[r]=0,tt.normalize();let l=.5*o/(o+s),u=1-tt.angleTo(e)/c;return Math.sign(tt[n])===1?u*l:s/(o+s)+l+l*(1-u)}var rt=class e extends I{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new R,c=new R,l=new R(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new R,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=nt(m,c,`z`,`y`,i,n),f[a+1]=1-nt(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-nt(m,c,`z`,`y`,i,n),f[a+1]=1-nt(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-nt(m,c,`x`,`z`,i,e),f[a+1]=nt(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-nt(m,c,`x`,`z`,i,e),f[a+1]=1-nt(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-nt(m,c,`x`,`y`,i,e),f[a+1]=1-nt(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=nt(m,c,`x`,`y`,i,e),f[a+1]=1-nt(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},it=(e,t,n)=>new R(e,t,n),at=new ue([it(0,-4,10),it(0,-.6,2),it(0,1.6,-8),it(.3,2.4,-20),it(.8,3.6,-30),it(1.2,5,-40),it(1.4,7.4,-54),it(.8,10.4,-68),it(0,13,-82),it(-.5,17,-94),it(-.4,25,-101),it(-.2,36,-104)],!1,`centripetal`,.5),ot=e=>{let t=0,n=1e9;for(let r=0;r<=800;r++){let i=at.getPointAt(r/800),a=Math.abs(i.z-e);a<n&&(n=a,t=r/800)}return t},st=[ot(-40),ot(-62),ot(-84)],ct=1/14,lt=.9;function ut(e){return e<=0?0:Math.min(1,ct*e+ct*1.2000000000000002*lt*(1-Math.exp(-e/lt)))}var dt=e=>(e=Math.min(1,Math.max(0,e)),e*e*(3-2*e));function ft(e){let t=matchMedia(`(max-width: 860px), (pointer: coarse)`).matches,n=new ae({canvas:e,antialias:!0,powerPreference:`high-performance`});n.setPixelRatio(Math.min(devicePixelRatio||1,t?1.2:1.5));let r=new se,i=new de(56,1,.05,900),a={value:0},o={value:.3},s={value:new R};r.environment=new he(n).fromScene(new Te,.04).texture,r.add(new P(new l(600,48,24),ze(a,o)));let c={value:[it(1.2,0,-40),it(1,0,-62),it(0,0,-84)].map(e=>new d(e.x,e.z))};function u(e,t){let n=new p({uniforms:{uT:a,uClaro:o,uCam:s,uCentros:c,uVeu:{value:t}},transparent:t>0,depthWrite:t===0,side:2,vertexShader:`varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:Le+Pe+`uniform float uT, uVeu; uniform vec3 uCam; uniform vec2 uCentros[3]; varying vec3 vW;
        void main(){
          vec2 p = vW.xz; float dist = length(uCam - vW);
          vec2 q = p * 0.045 + vec2(uT * 0.006, uT * 0.004);
          float d = nv(q) * 0.65 + nv(p * 0.13 - vec2(uT * 0.01, 0.0)) * 0.35;
          float dx = nv(q + vec2(0.03, 0.0)) - nv(q);
          float luz = 0.55 + dx * 14.0;                                    // relevo: luz de um lado, sombra do outro
          vec3 c = mix(vec3(0.03, 0.032, 0.036), vec3(0.42, 0.44, 0.47), smoothstep(0.3, 0.9, d)) * clamp(luz, 0.2, 1.2);
          // ondas de luz concêntricas em volta de cada anel, correndo para fora
          for (int i = 0; i < 3; i++) { float r = length(p - uCentros[i]); c += vec3(0.85, 0.9, 1.0) * pow(0.5 + 0.5 * cos(r * 1.1 - uT * 1.2), 28.0) * exp(-r * 0.045) * smoothstep(0.3, 0.75, d) * 0.55; }
          c *= uClaro * 1.6;
          vec3 h = normalize(vec3(vW.x - uCam.x, 0.0, vW.z - uCam.z));
          c = mix(ceu(h, uT), c, exp(-dist * 0.012));
          float a = uVeu > 0.0 ? smoothstep(0.55, 0.85, d) * uVeu * exp(-dist * 0.006) : 1.0;
          gl_FragColor = vec4(c, a);
        }`}),r=new P(new re(1400,1400),n);return r.rotation.x=-Math.PI/2,r.position.y=e,r}r.add(u(0,0)),r.add(u(1.1,.55));let f=new rt(1,1,1,3,.14),m=new oe({color:723982,roughness:.18,metalness:.35,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:.9}),g=[];[[st[0],3.2],[st[1],3.6],[st[2],4]].forEach(([e,n],i)=>{let o=at.getPointAt(e),s=Ye(f,m,n,22,a,{gatilho:0,dura:1.3,fios:t?320:700,forca:.9,fenda:.5,giro:i*.9});s.g.position.copy(o),s.g.lookAt(at.getPointAt(Math.min(1,e+.02))),s.ponto=new te(15265530,26,16,1.6),s.g.add(s.ponto),s.c=o,r.add(s.g),g.push(s)}),r.add(new h(10134450,658188,.5));let _=t?600:1500,v=new Float32Array(_*3);for(let e=0;e<_;e++)v.set([(Math.random()-.5)*60,Math.random()*30+1.5,-Math.random()*120],e*3);let y=new M;y.setAttribute(`position`,new _e(v,3)),r.add(new ve(y,new Se({color:14673390,size:.05,transparent:!0,opacity:.4,depthWrite:!1,blending:2})));let b=Fe(a,s,o,{modo:`corredor`,livre:20,alto:54,base:-12,seg:t?140:220});b.position.set(0,0,-70),r.add(b);let x=Re(a,0,e=>{let t=10-e()*170,n=(e()<.5?-1:1)*(7+e()*38),r=2+e()*26,i=at.getPointAt(Math.min(1,Math.max(0,-t/140)));return Math.hypot(n-i.x,r-i.y)<7?null:[n,r,t]},{nC:t?10:18});r.add(x.grupo);let S=new Ae(n);S.addPass(new Me(r,i)),S.addPass(new je(new d(1,1),.28,.5,.75)),S.addPass(new Ne);function C(){let t=e.clientWidth,r=e.clientHeight;t&&(n.setSize(t,r,!1),S.setSize(t,r),i.aspect=t/r,i.updateProjectionMatrix())}C(),addEventListener(`resize`,C);let w=new R,T=new R(0,.6,-12),E=0,D=0,O=new R,k=new R,ee=new R(1,0,0),A=new R,j=new R(0,1,0),N=0;function ne(e,t,n=0,r=0,o=0){a.value=t;let c=ut(e),l=at.getPointAt(c);i.position.copy(l),s.value.copy(l);let u=at.getTangentAt(Math.min(.999,c));w.copy(l).addScaledVector(u,12),w.x+=n*1.2,w.y-=r*.5+1*(1-dt((c-.55)/.3)),w.y+=Math.max(dt((c-.8)/.2),o)*40;let d=Math.min(.5,Math.max(0,t-D));D=t,T.lerp(w,1-Math.exp(-d*3.5));let f=at.getTangentAt(c),p=at.getTangentAt(Math.min(1,c+.03));E+=(Math.max(-.1,Math.min(.1,(f.x*p.z-f.z*p.x)*-8))-E)*.04,O.copy(T).sub(i.position).normalize(),k.crossVectors(O,j),k.lengthSq()<1e-4?k.copy(ee):(k.normalize(),ee.copy(k)),A.crossVectors(k,O).normalize().applyAxisAngle(O,E),i.up.copy(A),i.lookAt(T);let m=Math.min(.1,Math.max(0,t-N));return N=t,g.forEach((n,r)=>{n.vivo(e>1.7+r*.75?-1:999,m),n.g.rotation.z+=m*.05*(r%2?1:-1),n.ponto.intensity=(22+6*Math.sin(t*1.5+r))*(1-n.e*.6)}),x.anima(t),S.render(),{u:c,fim:c>=1}}function ie(){g.forEach(e=>e.reinicia()),D=N=0}return{render:ne,tamanho:C,reinicia:ie,u:ut}}var pt=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),mt=e=>(e=pt(e),e*e*(3-2*e));function ht(e,t,n,r){let i=n.getContext(`2d`),a=document.createElement(`canvas`),o=a.getContext(`2d`),s=document.createElement(`canvas`),c=s.getContext(`2d`),l=.19,u=.235,d=[[.55,.68,16],[.68,.8,20],[.8,.9,24],[.9,.98,28]],f=[],p=[],m=null;function h(){f=[],d.forEach(([e,t,n],r)=>{let i=Math.random()*.5;for(let a=0;a<n;a++){let o=(a+i)/n*Math.PI*2,s=(a+1+i)/n*Math.PI*2,c=()=>(Math.random()-.5)*.035,d=(e,t)=>[.5+Math.cos(t)*e*l,.5+Math.sin(t)*e*u],p=o+(s-o)*(.3+Math.random()*.4),m=e+(t-e)*(.3+Math.random()*.4),h=d(e+c(),o+c()),g=d(e+c(),s+c()),_=d(t+c(),s+c()),v=d(t+c(),o+c()),y=d(m,p);(Math.random()<.5?[[h,g,y],[g,_,y],[_,v,y],[v,h,y]]:[[h,g,_,y],[_,v,h,y]]).forEach(e=>f.push({pts:e,ordem:Math.random()*.8+r*.12,solta:!1}))}}),f.sort((e,t)=>t.ordem-e.ordem),p=[],m=null,a.width=360,a.height=414,o.fillStyle=`#fff`,o.fillRect(0,0,a.width,a.height),g()}function g(){let t=a.toDataURL(`image/png`);e.style.webkitMaskImage=e.style.maskImage=`url(${t})`,e.style.webkitMaskSize=e.style.maskSize=`100% 100%`}function _(){let n=e.getBoundingClientRect(),i=Math.min(devicePixelRatio||1,2);s.width=Math.round(n.width*i/2),s.height=Math.round(n.height*i/2);let a=t.readyState>=2?t:r&&r.complete&&r.naturalWidth?r:null;if(a){let e=a.videoWidth||a.naturalWidth,t=a.videoHeight||a.naturalHeight,n=Math.max(s.width/e,s.height/t);c.drawImage(a,(s.width-e*n)/2,(s.height-t*n)/2,e*n,t*n)}return n}function v(e){f.length||h();let t=Math.round(pt(e)*f.length);if(t<=p.length)return;_();let n=Math.min(devicePixelRatio||1,2);for(let e=p.length;e<t;e++){let t=f[e];t.solta=!0;let r=t.pts.reduce((e,t)=>e+t[0],0)/t.pts.length,i=t.pts.reduce((e,t)=>e+t[1],0)/t.pts.length,s=r-.5,c=i-.5,l=Math.hypot(s,c)||1;p.push({l:t,cx:r,cy:i,x:0,y:0,rot:0,vx:s/l*(6+Math.random()*20)*n,vy:c/l*(4+Math.random()*14)*n,vr:(Math.random()-.5)*2.4,atraso:Math.random()*.3,t:0}),o.fillStyle=`#000`,o.beginPath(),t.pts.forEach(([e,t],n)=>n?o.lineTo(e*a.width,t*a.height):o.moveTo(e*a.width,t*a.height)),o.closePath(),o.fill()}g()}function y(e=!1){m={t:0,semBranco:e}}Array.from({length:160},()=>({x:Math.random(),y:Math.random(),v:.2+Math.random()*.8,s:Math.random()}));function b(t){let r=Math.min(devicePixelRatio||1,2),a=Math.round(n.clientWidth*r),o=Math.round(n.clientHeight*r);(n.width!==a||n.height!==o)&&(n.width=a,n.height=o),i.clearRect(0,0,a,o);let c=520*r,d=e.getBoundingClientRect();i.save(),i.beginPath(),i.ellipse((d.left+d.width/2)*r,(d.top+d.height/2)*r,l*.99*d.width*r,u*.99*d.height*r,0,0,Math.PI*2),i.clip();for(let e of p){if(e.t+=t,e.t<e.atraso)continue;let n=t;e.vy+=c*n,e.x+=e.vx*n,e.y+=e.vy*n,e.rot+=e.vr*n;let a=(d.left+e.cx*d.width)*r+e.x,o=(d.top+e.cy*d.height)*r+e.y;if(o>(d.bottom+40)*r)continue;i.save(),i.translate(a,o),i.rotate(e.rot);let l=(t=0,n=0)=>{i.beginPath(),e.l.pts.forEach(([a,o],s)=>{let c=(a-e.cx)*d.width*r+t,l=(o-e.cy)*d.height*r+n;s?i.lineTo(c,l):i.moveTo(c,l)}),i.closePath()};l(Math.cos(-e.rot+.9)*2.2*r,Math.sin(-e.rot+.9)*2.2*r+1.6*r),i.fillStyle=`rgba(150,162,178,.75)`,i.fill(),l(),i.save(),i.clip(),i.drawImage(s,-e.cx*d.width*r,-e.cy*d.height*r,d.width*r,d.height*r);let u=i.createLinearGradient(-30*r,-30*r,30*r,30*r),f=.5+.5*Math.sin(e.rot*2);u.addColorStop(0,`rgba(255,255,255,${(.08+.22*f).toFixed(3)})`),u.addColorStop(1,`rgba(30,36,44,${(.1+.18*(1-f)).toFixed(3)})`),i.fillStyle=u,i.fillRect(-80*r,-80*r,160*r,160*r),i.restore(),l(),i.lineWidth=.7*r,i.strokeStyle=`rgba(255,255,255,${(.25+.4*f).toFixed(3)})`,i.stroke(),i.restore()}if(i.restore(),m){m.t+=t*1.8;let e=m.t,n=(d.left+d.width/2)*r,s=(d.top+d.height/2)*r,c=Math.min(a,o),l=mt(e/.6),u=mt((e-.35)/.9),f=mt((e-1.35)/.5);i.globalCompositeOperation=`lighter`;let p=c*(.04+l*.12+u*.5),h=i.createRadialGradient(n,s,0,n,s,p);h.addColorStop(0,`rgba(255,255,255,${(.95*l).toFixed(3)})`),h.addColorStop(.25,`rgba(240,245,255,${(.6*l).toFixed(3)})`),h.addColorStop(1,`rgba(230,238,255,0)`),i.fillStyle=h,i.fillRect(n-p,s-p,p*2,p*2),i.save(),i.translate(n,s),i.filter=`blur(${(2*r).toFixed(1)}px)`;for(let t=0;t<0;t++){let n=t/36*Math.PI*2+e*.25+Math.sin(t*7.3)*.08,a=c*(.15+u*(.6+.5*Math.sin(t*4.1+e*3))),o=(1+t%3)*r,s=i.createLinearGradient(0,0,Math.cos(n)*a,Math.sin(n)*a);s.addColorStop(0,`rgba(255,255,255,${(.35*l).toFixed(3)})`),s.addColorStop(1,`rgba(255,255,255,0)`),i.strokeStyle=s,i.lineWidth=o,i.beginPath(),i.moveTo(0,0),i.lineTo(Math.cos(n)*a,Math.sin(n)*a),i.stroke()}i.filter=`none`,i.restore(),f>0&&!m.semBranco&&(i.globalCompositeOperation=`source-over`,i.fillStyle=`rgba(246,248,251,${f.toFixed(3)})`,i.fillRect(0,0,a,o)),i.globalCompositeOperation=`source-over`}}function x(){h(),i.clearRect(0,0,n.width,n.height)}return{solta:v,final:y,desenha:b,reinicia:x,get fimFacho(){return m?m.t:0}}}function gt(e,t,{escurece:n=.55,fluxo:r=1,gira:i=0}={}){let a=new ae({canvas:e,antialias:!1,alpha:!1});a.setPixelRatio(Math.min(devicePixelRatio||1,1.25));let o=new T().load(t,e=>{s.uIAsp.value=e.image.width/e.image.height});o.colorSpace=le,o.wrapS=o.wrapT=pe;let s={uI:{value:o},uT:{value:0},uAsp:{value:1},uIAsp:{value:16/9},uM:{value:new d},uEsc:{value:n},uFluxo:{value:r},uGira:{value:i},uAvanco:{value:0}},c=new se,l=new L(-1,1,1,-1,0,1);c.add(new P(new re(2,2),new p({uniforms:s,vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }`,fragmentShader:`uniform sampler2D uI; uniform float uT, uAsp, uIAsp, uEsc, uFluxo, uGira, uAvanco; uniform vec2 uM; varying vec2 vUv;
      float h2(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
      float nv(vec2 p){ return 0.55 * vn(p) + 0.3 * vn(p * 2.1 + 3.7) + 0.15 * vn(p * 4.3 + 1.1); }
      vec2 cobre(vec2 uv){ vec2 s = uAsp > uIAsp ? vec2(1.0, uIAsp / uAsp) : vec2(uAsp / uIAsp, 1.0); return (uv - 0.5) * s + 0.5; }
      void main(){
        vec2 uv = vUv - 0.5;
        // respiração: zoom lento + avanço (quando a cena pede) + um giro bem leve em volta do centro
        float z = 1.06 + 0.03 * sin(uT * 0.11) + uAvanco;
        float an = uGira * uT * 0.02 + 0.01 * sin(uT * 0.07);
        uv = mat2(cos(an), -sin(an), sin(an), cos(an)) * uv / z + 0.5;
        vec2 base = cobre(uv);
        // parallax pela luminância: o claro (perto) anda mais com o mouse que o escuro (longe)
        float lum = dot(texture2D(uI, base).rgb, vec3(0.3, 0.59, 0.11));
        base += uM * (0.006 + 0.02 * lum);
        // a névoa corre: o ruído empurra os pixels como fumaça, mais nas partes claras
        vec2 f = vec2(nv(base * 3.0 + vec2(uT * 0.05, 0.0)), nv(base * 3.0 + vec2(0.0, -uT * 0.04) + 5.2)) - 0.5;
        base += f * 0.018 * uFluxo * (0.4 + lum);
        vec3 c = texture2D(uI, base).rgb;
        // brilho que respira nos realces
        c += c * smoothstep(0.55, 0.95, lum) * (0.12 + 0.08 * sin(uT * 0.6 + base.x * 6.0));
        c = mix(vec3(dot(c, vec3(0.3, 0.59, 0.11))), c, 0.25);                 // o tom da marca: quase preto e branco
        c *= 1.0 - uEsc;
        float vin = smoothstep(1.15, 0.35, length((vUv - 0.5) * vec2(uAsp, 1.0) * 0.8));
        c *= 0.55 + 0.45 * vin;
        c += (h2(vUv * 913.0 + fract(uT) * 37.0) - 0.5) * 0.025;               // grão
        gl_FragColor = vec4(c, 1.0);
      }`})));function u(){let t=e.clientWidth,n=e.clientHeight;t&&(a.setSize(t,n,!1),s.uAsp.value=t/n)}u(),addEventListener(`resize`,u);function f(e,t=0,n=0,r=0){s.uT.value=e,s.uM.value.x+=(t-s.uM.value.x)*.05,s.uM.value.y+=(-n-s.uM.value.y)*.05,s.uAvanco.value=r,a.render(c,l)}return{render:f,tamanho:u}}function _t(e){let t=matchMedia(`(prefers-reduced-motion: reduce)`).matches,n=document.createElement(`canvas`);n.className=`poeira`,n.setAttribute(`aria-hidden`,`true`),getComputedStyle(e).position===`static`&&(e.style.position=`relative`),e.appendChild(n);let r=n.getContext(`2d`),i=[],a=0,o=0,s=1,c=null,l=!1,u=0,d=0,f=``;function p(e){let t=Math.random()*6.2832,n=Math.sqrt(Math.random());return e.x=a/2+Math.cos(t)*n*a*.46,e.y=o/2+Math.sin(t)*n*o*.46,e}function m(){s=Math.min(devicePixelRatio||1,2);let t=e.getBoundingClientRect();a=Math.round((t.width+120)*s),o=Math.round((t.height+120)*s),n.width=a,n.height=o,n.style.left=`-60px`,n.style.top=`-60px`,n.style.width=`${a/s}px`,n.style.height=`${o/s}px`;let r=getComputedStyle(e),c=document.createElement(`canvas`);c.width=a,c.height=o;let l=c.getContext(`2d`);l.fillStyle=`#fff`,l.font=`${r.fontWeight} ${parseFloat(r.fontSize)*s}px ${r.fontFamily}`,l.textBaseline=`middle`,l.textAlign=`center`,f||=e.textContent.trim().toLowerCase(),l.fillText(f,a/2,o/2+parseFloat(r.fontSize)*s*.04);let u=l.getImageData(0,0,a,o).data,d=Math.max(2,Math.round(2.2*s)),m=i;i=[];for(let e=0;e<o;e+=d)for(let t=0;t<a;t+=d)if(u[(e*a+t)*4+3]>110){let n=m[i.length],r={tx:t,ty:e,x:0,y:0,vx:0,vy:0,a:.55+Math.random()*.45};n?(r.x=n.x,r.y=n.y):p(r),i.push(r)}}function h(){if(u=0,!l)return;r.clearRect(0,0,a,o);let e=Math.min(1,(performance.now()-d)/1800),t=.006+.03*e*e;for(let e of i){if(e.vx+=(e.tx-e.x)*t,e.vy+=(e.ty-e.y)*t,c){let t=e.x-c[0],n=e.y-c[1],r=t*t+n*n,i=70*s;if(r<i*i){let a=(1-Math.sqrt(r)/i)*3.2;e.vx+=t/(Math.sqrt(r)+1)*a,e.vy+=n/(Math.sqrt(r)+1)*a}}e.vx*=.84,e.vy*=.84,e.x+=e.vx,e.y+=e.vy;let n=(e.x-a/2)/(a*.5),i=(e.y-o/2)/(o*.5),l=n*n+i*i,u=1-Math.min(1,Math.hypot(e.x-e.tx,e.y-e.ty)/(24*s)),d=Math.min(1,Math.min(e.x,a-e.x,e.y,o-e.y)/(40*s),Math.max(u,(1-l)/.35));d<=0||(r.fillStyle=`rgba(236,235,231,${(e.a*d).toFixed(3)})`,r.fillRect(e.x,e.y,1.25*s,1.25*s))}u=requestAnimationFrame(h)}return addEventListener(`pointermove`,e=>{if(!l)return;let t=n.getBoundingClientRect();c=[(e.clientX-t.left)*s,(e.clientY-t.top)*s]},{passive:!0}),addEventListener(`resize`,()=>{l&&m()}),{prepara(){if(!(t||i.length))return(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>{i.length||m()})},liga(){t||(document.fonts&&document.fonts.status!==`loaded`?document.fonts.ready.then(()=>this.liga()):(i.length||m(),l=!0,d=performance.now(),e.classList.add(`com-poeira`),u||=requestAnimationFrame(h)))},desliga(){l=!1,e.classList.remove(`com-poeira`),r.clearRect(0,0,a,o),i.forEach(p)}}}var vt=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),yt=`
  uniform float uT, uAsp, uLente, uAnelF, uAnelR, uImp, uImpT, uFundo, uMascara, uLuzFundo;
  uniform vec3 uCamPos, uAnelC, uPedra; uniform mat4 uCamMat, uInvProj;
  varying vec2 vUv;
  float h2(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
  float nv(vec2 p){ return 0.55 * vn(p) + 0.3 * vn(p * 2.1 + 3.7) + 0.15 * vn(p * 4.3 + 1.1); }
  float ondas(vec2 p){
    vec2 q = p - uAnelC.xz; float r = length(q);
    // o marulho em anéis em volta do anel (o mesmo desenho do hero)
    float a = (sin(r * 7.0 - uT * 1.3) * 0.022 * exp(-r * 0.12) + sin(r * 13.0 - uT * 2.1 + 1.3) * 0.008 * exp(-r * 0.25)) * (0.35 + 0.65 * uAnelF);
    // o toque: uma onda que corre para fora do ponto onde o anel entrou
    float ti = uT - uImpT, fr = r - ti * 1.7;
    if (uImp > 0.0 && ti > 0.0) a += uImp * 0.06 * sin(fr * 8.0) * exp(-fr * fr * 2.0) * exp(-ti * 0.45);
    // vento e ondulação larga
    a += (nv(p * vec2(1.4, 3.2) + vec2(uT * 0.15, 0.0)) - 0.5) * 0.02;
    a += sin(dot(p, vec2(0.3, 0.95)) * 2.1 + uT * 0.9) * 0.011 + sin(dot(p, vec2(-0.7, 0.6)) * 3.4 - uT * 1.25) * 0.006;
    return a;
  }
  vec3 normal(vec2 p, float e){ float h = ondas(p); return normalize(vec3(-(ondas(p + vec2(e, 0.0)) - h) / e, 1.0, -(ondas(p + vec2(0.0, e)) - h) / e)); }
  vec3 ceu(vec3 d){
    float h = d.y;
    float nevoa = nv(vec2(d.x * 2.0 + uT * 0.015, h * 6.0 - uT * 0.01)) * 0.6 + nv(vec2(d.x * 5.0 - uT * 0.02, h * 11.0)) * 0.4;
    vec3 c = mix(vec3(0.40, 0.415, 0.44), vec3(0.075, 0.08, 0.09), smoothstep(0.0, 0.5, h));
    c += vec3(0.10) * smoothstep(0.4, 0.85, nevoa) * smoothstep(0.45, 0.02, h);
    c += vec3(0.20, 0.21, 0.22) * exp(-pow(d.x * 1.8, 2.0)) * smoothstep(0.35, 0.0, h);
    return c;
  }
  // o anel visto por um raio: (brilho, altura do ponto em que o raio cruza o plano do anel)
  vec2 anel(vec3 ro, vec3 rd, float w){
    if (abs(rd.z) < 1e-4) return vec2(0.0);
    float t = (uAnelC.z - ro.z) / rd.z; if (t < 0.0) return vec2(0.0);
    vec3 q = ro + rd * t; float d = abs(length(q.xy - uAnelC.xy) - uAnelR);
    return vec2(exp(-d * d / (w * w)), q.y);
  }
  // cáusticas: duas redes de cristas que se cruzam e derivam
  float causticas(vec2 p){
    float a = 1.0 - abs(2.0 * vn(p * 1.7 + vec2(uT * 0.21, uT * 0.13)) - 1.0);
    float b = 1.0 - abs(2.0 * vn(p * 2.3 - vec2(uT * 0.17, -uT * 0.19) + 5.0) - 1.0);
    return pow(max(a, b), 7.0);
  }
  vec3 acima(vec3 ro, vec3 rd){
    if (rd.y > -0.002) return ceu(rd);
    float t = ro.y / -rd.y; vec3 p = ro + rd * t;
    vec3 n = normal(p.xz, 0.02 + t * 0.004); n = normalize(mix(n, vec3(0.0, 1.0, 0.0), smoothstep(12.0, 70.0, t)));
    { float pe = exp(-t * 0.9); vec2 q = p.xz * 9.0; float e = 0.05;
      float m0 = nv(q + uT * 0.8), mx = nv(q + vec2(e, 0.0) + uT * 0.8), mz = nv(q + vec2(0.0, e) + uT * 0.8);
      n = normalize(n + vec3(-(mx - m0) / e, 0.0, -(mz - m0) / e) * 0.05 * pe); }   // de perto: a pele da água, miúda
    vec3 v = -rd, R = reflect(rd, n); R.y = abs(R.y);
    float fres = 0.04 + 0.96 * pow(1.0 - max(dot(n, v), 0.0), 5.0);
    vec3 refl = ceu(R);
    vec2 g = anel(p, R, 0.03 + t * 0.006); if (g.y > 0.0) refl += vec3(0.9, 0.94, 1.0) * g.x * 1.6 * uAnelF;
    // por dentro: água escura, a parte afundada do anel acesa e desfocada pela profundidade
    vec3 T = refract(rd, n, 0.75);
    vec3 dentro = mix(vec3(0.035, 0.037, 0.041), vec3(0.11, 0.12, 0.13), smoothstep(-0.2, -0.9, rd.y)) * (0.8 + 0.4 * nv(p.xz * 3.0));   // olhando para baixo, a água tem corpo (luz espalhada), não é preta
    vec2 gs = anel(p, T, 0.06 + 0.1 * max(0.0, -uAnelC.y + uAnelR)); if (gs.y < 0.0) dentro += vec3(0.8, 0.87, 1.0) * gs.x * exp(gs.y * 2.2) * 0.7 * uAnelF;
    dentro += vec3(0.5, 0.54, 0.58) * causticas(p.xz * 0.8) * 0.06 * smoothstep(-0.3, -0.9, rd.y);   // de cima, a luz que entra na água desenha redes no corpo dela
    float rr = length(p.xz - uAnelC.xz); dentro += vec3(0.82, 0.88, 1.0) * uAnelF * (exp(-rr * 0.9) * 0.35 + exp(-rr * 0.15) * 0.05) * (0.75 + 0.5 * (n.x + n.z) * 6.0);
    // o brilho do anel na água (especular de uma luz no centro dele)
    vec3 L = uAnelC - p; float dl = length(L); L /= dl; vec3 H = normalize(L + v);
    float esp = pow(max(dot(n, H), 0.0), 140.0) * 1.4 / (1.0 + dl * dl * 0.3) * uAnelF;
    vec3 c = dentro + refl * fres * 0.6 + vec3(0.95, 0.97, 1.0) * esp;
    return mix(ceu(vec3(rd.x, 0.0, rd.z)), c, exp(-t * 0.06));
  }
  vec3 abaixo(vec3 ro, vec3 rd){
    float prof = max(0.0, -ro.y);
    // a turbidez: clara olhando para a superfície, escura olhando para o fundo; mais fundo, mais escuro
    vec3 neb = mix(vec3(0.1, 0.108, 0.122), vec3(0.5, 0.53, 0.57), smoothstep(-0.75, 0.9, rd.y)) * mix(1.0, 0.7, smoothstep(0.0, 9.0, prof));
    neb += vec3(0.05) * (nv(vec2(rd.x * 3.0 + uT * 0.03, rd.y * 14.0 - uT * 0.05)) - 0.5);   // a seda do turvo, em fibras deitadas
    vec3 c; float tHit;
    if (rd.y > 0.0) {
      float t = prof / rd.y; tHit = t; vec3 p = ro + rd * t;
      vec3 n = normal(p.xz, 0.09 + t * 0.02); n = normalize(mix(n, vec3(0.0, 1.0, 0.0), 0.35 + 0.65 * smoothstep(6.0, 30.0, t)));
      // janela de Snell com borda macia: dentro dela o céu (refratado), fora a reflexão total, escura
      float ci = dot(rd, n), kk = 1.0 - 1.33 * 1.33 * (1.0 - ci * ci);
      vec3 T = kk > 0.0 ? normalize(1.33 * rd + (-1.33 * ci + sqrt(kk)) * n) : vec3(0.0, 1.0, 0.0);
      float janela = smoothstep(0.0, 0.35, kk);
      vec3 sup = mix(mix(neb, vec3(0.07, 0.076, 0.086), 0.5), ceu(T) * 1.2 + vec3(0.08), janela);
      { vec2 g = anel(p, T, 0.08); sup += vec3(0.9, 0.95, 1.0) * g.x * 0.8 * uAnelF * step(0.0, g.y) * janela; }
      float borda = smoothstep(0.62, 0.7, rd.y) * smoothstep(0.78, 0.7, rd.y);                       // a borda da janela acende
      sup += vec3(0.85, 0.9, 0.95) * (pow(max(n.x * 3.0 + n.z * 2.0, 0.0), 2.0) * 0.12 + borda * 0.18);
      // seda: as fibras esticadas da superfície vista de baixo (a textura do vídeo)
      sup += vec3(0.08) * (nv(vec2(p.x * 1.2 + uT * 0.05, p.z * 7.0 - uT * 0.08)) - 0.45);
      c = mix(neb, sup, exp(-t * 0.11));
    } else {
      float t = max(0.0, uFundo - prof) / max(-rd.y, 1e-3); tHit = t; vec3 p = ro + rd * t;
      float ca = causticas(p.xz);
      vec3 chao = vec3(0.1, 0.104, 0.112) * (0.55 + 0.7 * nv(p.xz * 1.1)) + vec3(0.7, 0.76, 0.84) * ca * 0.4 * exp(-uFundo * 0.05);
      c = mix(neb, chao, exp(-t * 0.13));
    }
    // feixes de luz: a cáustica da superfície projetada pela água (inclinada, como o sol baixo)
    float acc = 0.0, tmax = min(tHit, 26.0), j = h2(gl_FragCoord.xy + fract(uT) * 31.0);
    for (int i = 0; i < 14; i++) {
      float s = (float(i) + j) / 14.0 * tmax; vec3 q = ro + rd * s;
      vec2 pr = q.xz + vec2(0.32, 0.18) * q.y;
      acc += smoothstep(0.5, 0.82, nv(pr * vec2(0.42, 0.9) + vec2(uT * 0.04, -uT * 0.025))) * exp(q.y * 0.09);
    }
    c += vec3(0.72, 0.78, 0.86) * acc / 14.0 * 0.55 * smoothstep(0.0, 6.0, tmax) * smoothstep(-0.9, 0.2, rd.y);
    // partículas em suspensão, presas ao mundo em camadas horizontais (sobem e passam quando a câmera se move)
    const float S = 0.55;
    if (abs(rd.y) > 0.02) for (int i = 0; i < 7; i++) {
      float yk = (rd.y > 0.0 ? floor(ro.y / S) + 1.0 + float(i) : ceil(ro.y / S) - 1.0 - float(i)) * S;
      if (yk > -0.05 || yk < -uFundo) continue;
      float t = (yk - ro.y) / rd.y; if (t < 0.15 || t > 14.0) continue;
      vec2 dr = vec2(sin(uT * 0.21 + yk), cos(uT * 0.17 + yk * 1.3)) * 0.08;
      vec2 p = (ro + rd * t).xz + dr;
      vec2 ce = floor(p / 0.7), o = vec2(h2(ce + yk), h2(ce + yk + 9.1)) * 0.7;
      // distância do raio ao centro da partícula (em 3D): redonda na tela em qualquer ângulo (no plano ela esticava)
      vec3 w3 = vec3(ce * 0.7 + o - dr, yk).xzy - ro; float tp = dot(w3, rd);
      float d = length(w3 - rd * tp), r = 0.006 + 0.004 * h2(ce + 3.3) + t * 0.0012;
      c += vec3(0.86, 0.9, 0.96) * step(0.45, h2(ce - yk)) * exp(-d * d / (r * r)) * 0.5 * exp(-t * 0.2);
    }
    // a luz que ficou no fundo (a pedra)
    if (uLuzFundo > 0.0) { vec3 w = uPedra - ro; float tp = max(dot(w, rd), 0.0); float dd = length(w - rd * tp); c += vec3(0.95, 0.96, 1.0) * uLuzFundo * (exp(-dd * dd * 0.8) * 0.6 + exp(-dd * 0.6) * 0.08) * exp(-tp * 0.06); }
    return c;
  }
  void main(){
    vec4 v = uInvProj * vec4(vUv * 2.0 - 1.0, 1.0, 1.0);
    vec3 rd = normalize((uCamMat * vec4(v.xyz / v.w, 0.0)).xyz);
    vec3 dir = (uCamMat * vec4(1.0, 0.0, 0.0, 0.0)).xyz, cima = (uCamMat * vec4(0.0, 1.0, 0.0, 0.0)).xyz;
    // cada pixel nasce num ponto da lente: assim a linha d'água corta a imagem quando a câmera cruza a superfície
    vec2 l = (vUv - 0.5) * vec2(uAsp, 1.0) * uLente;
    vec3 ro = uCamPos + dir * l.x + cima * l.y;
    float hs = ondas(ro.xz) * 1.2 + sin(ro.x * 2.6 + uT * 3.2) * 0.012 + sin(ro.x * 7.1 - uT * 4.1) * 0.004;   // a linha na lente: quase reta, com um balanço miúdo
    float dy = ro.y - hs;
    bool emBaixo = dy < 0.0;
    vec3 c = emBaixo ? abaixo(ro, rd) : acima(ro, rd);
    // o menisco: um fio fino de luz na linha e uma sombra leve logo abaixo (a distorção fica na pós-imagem)
    float w = 0.0016 * uLente / 0.25;
    float men = exp(-pow(dy / w, 2.0)), sombra = exp(-pow((dy + w * 5.0) / (w * 4.0), 2.0));
    c = c * (1.0 - 0.22 * sombra) + vec3(0.92, 0.95, 1.0) * men * 0.35;
    float a = uMascara > 0.5 ? clamp((emBaixo ? 1.0 : 0.0) + men, 0.0, 1.0) : (emBaixo ? 1.0 : 0.0);
    gl_FragColor = vec4(c, a);
  }`;function bt({lente:t=.25,fundo:n=9}={}){let r={uT:{value:0},uAsp:{value:1},uLente:{value:t},uAnelF:{value:0},uAnelR:{value:1},uImp:{value:0},uImpT:{value:0},uFundo:{value:n},uMascara:{value:1},uLuzFundo:{value:0},uCamPos:{value:new R},uAnelC:{value:new R(0,-50,-50)},uPedra:{value:new R(0,-8.6,-5)},uCamMat:{value:new e},uInvProj:{value:new e}},i=new se,a=new L(-1,1,1,-1,0,1),o=new p({uniforms:r,transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:yt});i.add(new P(new re(2,2),o));function s(e,t,n,o,s=null){r.uT.value=n,r.uAsp.value=o,t.updateMatrixWorld(),r.uCamPos.value.copy(t.position),r.uCamMat.value.copy(t.matrixWorld),r.uInvProj.value.copy(t.projectionMatrixInverse);let c=e.autoClear;e.autoClear=!!s,e.setRenderTarget(s),e.render(i,a),e.autoClear=c}return{render:s,uni:r,mat:o}}var xt=`
  uniform sampler2D uC; uniform float uT, uImp, uVel, uAsp; uniform vec2 uPx; varying vec2 vUv;
  float h2(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  void main(){
    vec2 uv = vUv;
    float m = texture2D(uC, uv).a, mu = texture2D(uC, uv + vec2(0.0, uPx.y * 7.0)).a, md = texture2D(uC, uv - vec2(0.0, uPx.y * 7.0)).a;
    float borda = clamp(abs(mu - md) + abs(texture2D(uC, uv + vec2(uPx.x * 7.0, 0.0)).a - texture2D(uC, uv - vec2(uPx.x * 7.0, 0.0)).a), 0.0, 1.0);
    float ond = borda * 1.4 + m * uImp * 0.5;
    vec2 off = vec2(sin(uv.y * 48.0 + uT * 9.0) + 0.5 * sin(uv.y * 131.0 - uT * 13.0), cos(uv.x * 37.0 - uT * 7.0) + 0.5 * sin(uv.x * 97.0 + uT * 11.0)) * 0.006 * ond;
    vec3 c = vec3(0.0);
    for (int i = 0; i < 6; i++) { float f = float(i) / 5.0; c += texture2D(uC, uv + off + vec2(0.0, -f * uVel * 0.035)).rgb; }
    c /= 6.0;
    // água aerada: véu leitoso, mais forte embaixo d'água e logo depois da entrada
    c = mix(c, vec3(0.68, 0.72, 0.77), uImp * m * 0.42 * (0.7 + 0.3 * sin(uv.x * 7.0 + uT)));
    // bolhas subindo
    if (uImp > 0.01) {
      vec2 q = vec2(uv.x * uAsp, uv.y);
      for (int k = 0; k < 3; k++) {
        float esc = 9.0 + float(k) * 7.0, vel = 0.9 + float(k) * 0.5;
        vec2 g = q * esc; g.y -= uT * vel * esc * 0.35 + uVel * 3.0;
        vec2 ce = floor(g), f = fract(g) - 0.5;
        float r = h2(ce + float(k) * 7.1); if (r < 1.0 - uImp * (0.32 - float(k) * 0.06)) continue;   // poucas: a nuvem de ar é rala e irregular
        vec2 o = (vec2(h2(ce + 3.3), h2(ce + 9.7)) - 0.5) * 0.6; o.x += sin(uT * 6.0 + r * 30.0) * 0.06;
        vec2 fo = f - o;                                                                         // redondas (esticadas pareciam distorcidas)
        float rad = 0.05 + 0.32 * pow(h2(ce + 1.9), 3.0), d = length(fo) / rad;
        float aro = smoothstep(1.0, 0.82, d) * smoothstep(0.55, 0.85, d), brilho = smoothstep(0.35, 0.0, length(f - o - vec2(-0.3, 0.3) * rad) / rad);
        float a = uImp * m * (1.0 - float(k) * 0.25);
        c = mix(c, c * 0.8, smoothstep(1.0, 0.7, d) * 0.35 * a);
        c += vec3(0.9, 0.94, 1.0) * (aro * 0.45 + brilho * 0.6) * a;
      }
    }
    gl_FragColor = vec4(c, 1.0);
  }`;function St(e){let t=matchMedia(`(max-width: 860px), (pointer: coarse)`).matches,n=new ae({canvas:e,antialias:!1,alpha:!1,powerPreference:`high-performance`});n.setPixelRatio(Math.min(devicePixelRatio||1,1.5)*(t?.55:.7));let r=bt({lente:1.1});r.uni.uMascara.value=0,r.mat.transparent=!1,r.mat.blending=0;let i=new k(4,4,{depthBuffer:!1}),a={uC:{value:i.texture},uT:{value:0},uImp:{value:0},uVel:{value:0},uAsp:{value:1},uPx:{value:new d}},o=new se,s=new L(-1,1,1,-1,0,1);o.add(new P(new re(2,2),new p({uniforms:a,depthTest:!1,depthWrite:!1,vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:xt})));let c=new de(60,1,.05,100),l=.62,u=.9,f=(e,t,n)=>e+(t-e)*n,m=e=>(e=vt(e),e*e*(3-2*e)),h=l,g=u;function _(){let e=c.near,t=c.aspect;c.projectionMatrix.makePerspective(-.5*t*g*e,.5*t*g*e,(1-h)*g*e,-h*g*e,e,c.far),c.projectionMatrixInverse.copy(c.projectionMatrix).invert()}function v(e,t){(e!==h||t!==g)&&(h=e,g=t,_())}function y(){let t=e.clientWidth,r=e.clientHeight;if(!t)return;n.setSize(t,r,!1),c.aspect=t/r,_();let o=n.getPixelRatio();i.setSize(Math.round(t*o),Math.round(r*o)),a.uPx.value.set(1/(t*o),1/(r*o)),a.uAsp.value=t/r}y(),addEventListener(`resize`,y);let b=new R(0,.77,-4.27),x=.77;function S(e,t,n){let r=(1-(t+n)-l)*u;if(r>-.02)return;let i=1/-r,a=(1-t-l)*u;b.set((e-.5)*c.aspect*u*i,1+a*i,-i),x=Math.max(.1,b.y)}let C=1.2,w=2.6,T=Math.exp(w*C)-1,E=4.27*w*Math.exp(w*C)/T,D=.35;function O(e){if(e<=C)return{z:-ee()*(Math.exp(w*e)-1)/T,y:f(1,b.y,m(e/C)),pitch:0};let t=e-C;return{z:-ee()-E*D*(1-Math.exp(-t/D)),y:b.y-(b.y+6)*(1-Math.exp(-(t**1.8)/1)),pitch:-.95*m(t/.24)+.85*m((t-.55)/1.6)}}let ee=()=>-b.z,te=3.9,A=r.uni.uAnelC.value,j=new R,M=2.2,N=null,ne=1,ie=0;function oe(e,t,d=0,p=0,h=null){let g=t==null||t>=te,_=O(g?te:t),y=0,S=_.y,w=_.z,T=_.pitch,E=0;if(g){let t=1-m(h==null?0:h/1.2);S+=Math.sin(e*.5)*.08*t,y=(Math.sin(e*.23)*.12+d*.35)*t,T+=(-p*.05+Math.sin(e*.37)*.01)*t,E=-d*.05*t}if(h!=null){let e=m(h/M),t=m((h-.9)/1.3000000000000003);w-=4.5*e,S=f(S,-6,e),T=f(T,.32,t),v(f(l,.5,t),f(u,2*Math.tan(40*Math.PI/180),t))}else v(l,u);c.position.set(y,S,w),c.rotation.set(T,E,0,`YXZ`),c.updateMatrixWorld();let D=t??te;return A.copy(b),r.uni.uAnelR.value=x,r.uni.uAnelF.value=1-vt((D-C)/.35),r.uni.uImp.value=1,r.uni.uImpT.value=e-D+.08,r.uni.uLuzFundo.value=0,t!=null&&S<0&&N==null&&(N=t),t!=null&&t<.05&&(N=null),a.uImp.value=N==null||t==null?0:Math.exp(-(t-N)*2.6),a.uVel.value=t==null?0:vt((ne-S)/Math.max(.001,e-ie)/6),ne=S,ie=e,a.uT.value=e,r.render(n,c,e,c.aspect,i),n.setRenderTarget(null),n.render(o,s),{anelC:A,R:x,camera:c}}function F(t,n){j.copy(t).applyMatrix4(c.matrixWorldInverse);let r=-j.z;return j.copy(t).project(c),{x:(j.x+1)/2*e.clientWidth,y:(1-j.y)/2*e.clientHeight,prof:r,px:n/Math.max(r,.001)/g*e.clientHeight}}return{render:oe,tamanho:y,anelDaTela:S,naTela:F,FIM:te,SAIDA:M,camera:c,get anel(){return{C:A,R:x}}}}var Ct=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),wt=e=>(e=Ct(e),e*e*(3-2*e)),z=(e,t,n)=>e+(t-e)*n,Tt=`
  float h2(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
  float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * vn(p); p = p * 2.03 + 1.7; a *= 0.5; } return s; }
`;function Et(e,t,{SAI:n,FIM:i}){let a=t===`lago`,o=matchMedia(`(max-width: 860px), (pointer: coarse)`).matches,s=new ae({canvas:e,antialias:!0,powerPreference:`high-performance`});s.setPixelRatio(Math.min(devicePixelRatio||1,o?1.3:1.6)),s.toneMapping=4,s.toneMappingExposure=.8;let c=new se,u=new de(60,1,.05,3e3),f={value:0},m=new R(0,30,-420),h={uT:f,uSol:{value:m.clone().normalize()},uLuz:{value:1},uNoite:{value:0},uAgua:{value:0},uFimEst:{value:0}},_=new P(new l(1500,48,24),new p({uniforms:h,side:1,depthWrite:!1,vertexShader:`varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:Tt+Ke+`uniform float uT, uLuz, uNoite, uAgua, uFimEst; uniform vec3 uSol; varying vec3 vD;
      void main(){ float y = vD.y;
        vec3 c = mix(vec3(0.36, 0.38, 0.41), vec3(0.045, 0.05, 0.058), smoothstep(-0.02, 0.4, y));
        float sol = max(dot(vD, uSol), 0.0);
        c += vec3(0.95, 0.93, 0.9) * pow(sol, 24.0) * 0.4 + vec3(0.75, 0.78, 0.82) * pow(sol, 4.0) * 0.1;   // claridade em volta do anel
        float nevoa = fbm(vec2(atan(vD.x, -vD.z) * 3.0 + uT * 0.01, y * 9.0));
        c += vec3(0.12) * smoothstep(0.45, 0.8, nevoa) * smoothstep(0.25, 0.0, y);
        c *= uLuz; if (y < 0.0) c = mix(c, vec3(0.04, 0.045, 0.05), smoothstep(0.0, -0.3, y));
        // subindo, o céu vira espaço: o azul-grafite apaga e as estrelas aparecem
        float est = estrelas(vD, mix(0.9985, 0.9935, uNoite));   // escurecendo, aparecem mais estrelas; ficam até o túnel (o túnel tem o mesmo céu)
        c = mix(c, vec3(0.0012, 0.0012, 0.0014) + vec3(0.9) * est, uNoite);   // o mesmo preto do túnel
        c = mix(c, mix(vec3(0.13, 0.14, 0.155), vec3(0.3, 0.32, 0.35), smoothstep(-0.4, 0.6, y)), uAgua);   // embaixo d'água: turvo contínuo
        gl_FragColor = vec4(c, 1.0); }`}));c.add(_);let v={uT:f,uLuzDir:{value:new R(-.6,.45,.65).normalize()},uNoite:h.uNoite},b=new P(new ce(60,64),new p({uniforms:v,vertexShader:`uniform float uT; varying vec3 vN; varying vec3 vP; varying vec3 vV;
      void main(){ vec3 n = normalize(position); float d = ${(15/16).toFixed(3)} * sin(n.x * 7.0 + uT * 0.2) * sin(n.y * 6.0 - uT * 0.15) * sin(n.z * 5.0);
        vec3 p = position + n * d; vP = n; vec4 w = modelMatrix * vec4(p, 1.0); vN = normalize(mat3(modelMatrix) * n); vV = normalize(cameraPosition - w.xyz);
        gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform float uT; varying vec3 vN; varying vec3 vP; varying vec3 vV;
      float h2(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
      float vn(vec3 p){ vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(h2(i), h2(i + vec3(1,0,0)), f.x), mix(h2(i + vec3(0,1,0)), h2(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(h2(i + vec3(0,0,1)), h2(i + vec3(1,0,1)), f.x), mix(h2(i + vec3(0,1,1)), h2(i + vec3(1,1,1)), f.x), f.y), f.z); }
      void main(){
        float fr = pow(1.0 - abs(dot(vN, vV)), 2.5);
        float rocha = vn(vP * 9.0) * 0.6 + vn(vP * 23.0) * 0.4;
        vec3 c = vec3(0.012, 0.013, 0.015) * (0.6 + 0.8 * rocha) + vec3(0.7, 0.75, 0.82) * pow(fr, 2.2) * 0.18;
        float sol = max(0.0, dot(vN, normalize(vec3(-0.4, 0.6, 0.5))));
        c += vec3(0.5, 0.52, 0.56) * pow(sol, 3.0) * 0.1 * rocha;
        gl_FragColor = vec4(c, 1.0); }`}));new P(new l(60*1.08,64,48),new p({uniforms:v,side:1,transparent:!0,depthWrite:!1,blending:2,vertexShader:`varying vec3 vN; varying vec3 vV; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform vec3 uLuzDir; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(max(dot(-vN, vV), 0.0), 3.0); float l = smoothstep(-0.4, 0.5, dot(-vN, uLuzDir)); gl_FragColor = vec4(vec3(0.6, 0.68, 0.8) * f * (0.25 + 0.6 * l), 1.0); }`})),a&&c.add(b);let x=0,C=60/16,w=new R(0,300,-540),T=new R(0,Math.sin(Ue),-Math.cos(Ue)),E=w.clone().addScaledVector(T,199*C),D=.75,O=15.75,k=0,ee=0,te=new R(0,1,0),A=w.clone().addScaledVector(T,-15.75*C),j=new r;j.position.copy(w),j.rotation.x=Ue,a&&c.add(j);let ie=a?[0,1,2].map(e=>{let t=qe((21+e*2)*C,f,{fios:o?320:700,fenda:.5,semente:11+e});return t.u.uNasce.value=1,t.l.position.set(0,0,-(49+55*e)*C),j.add(t.l),t}):[],oe=qe(46,f,{fios:o?260:520,fenda:.5});oe.u.uNasce.value=0,oe.l.position.copy(m),a||c.add(oe.l);let le=[0,1,2,3].map(e=>{let t=qe(21,f,{fios:e===0?o?320:700:260,fenda:.5});return a||c.add(t.l),t}),I=-150,ue={uT:f,uDe:{value:0},uSol:{value:m.clone()},uNoite:h.uNoite},fe=new P(new re(3e3,3e3,1,1).rotateX(-Math.PI/2),new p({uniforms:ue,side:2,transparent:!1,vertexShader:`varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:Tt+(a?`uniform float uT, uNoite; uniform vec3 uSol; varying vec3 vW;
      vec3 ceu(vec3 d){ float y = d.y; vec3 c = mix(vec3(0.36, 0.38, 0.41), vec3(0.045, 0.05, 0.058), smoothstep(-0.02, 0.4, y)); float s = max(dot(d, normalize(uSol)), 0.0); return c + vec3(0.95) * pow(s, 24.0) * 0.4; }
      void main(){
        vec2 p = vW.xz; float e = 0.6;
        float h = fbm(p * 0.08 + vec2(uT * 0.05, uT * 0.03)) * 1.6 + fbm(p * 0.35 - uT * 0.12) * 0.35;
        float hx = fbm((p + vec2(e, 0.0)) * 0.08 + vec2(uT * 0.05, uT * 0.03)) * 1.6 + fbm((p + vec2(e, 0.0)) * 0.35 - uT * 0.12) * 0.35;
        float hz = fbm((p + vec2(0.0, e)) * 0.08 + vec2(uT * 0.05, uT * 0.03)) * 1.6 + fbm((p + vec2(0.0, e)) * 0.35 - uT * 0.12) * 0.35;
        vec3 n = normalize(vec3(-(hx - h) / e * 0.35, 1.0, -(hz - h) / e * 0.35));
        vec3 v = normalize(cameraPosition - vW);
        float dist = length(cameraPosition - vW);
        if (gl_FrontFacing) {
          // de cima: reflete o céu (fresnel) e o rastro do anel-sol na água
          vec3 r = reflect(-v, n); float fr = 0.03 + 0.97 * pow(1.0 - max(dot(n, v), 0.0), 5.0);
          vec3 c = mix(vec3(0.03, 0.035, 0.04), ceu(r), fr);
          c += vec3(0.9, 0.92, 0.95) * pow(max(dot(r, normalize(uSol - vW)), 0.0), 220.0) * 1.6;
          c = mix(c, vec3(0.3, 0.32, 0.35), smoothstep(250.0, 1200.0, dist));     // névoa no horizonte
          c = mix(c, vec3(0.0012, 0.0012, 0.0014), uNoite);                       // lá de cima, o lago some no mesmo preto do túnel (sem faixa na emenda)
          gl_FragColor = vec4(c, 1.0);
        } else {
          // de baixo: a janela de luz (Snell) acima da câmera, o resto espelhado e escuro, a superfície ondulando
          // vista de baixo, rente: um teto prateado que ondula, mais claro perto (como o vídeo do mergulho, ao contrário)
          float sobe = max(dot(-v, vec3(0.0, 1.0, 0.0)), 0.0);
          vec3 c = mix(vec3(0.2, 0.215, 0.23), vec3(0.55, 0.58, 0.62), smoothstep(0.05, 0.6, sobe));
          c += vec3(0.25) * pow(max(n.x * 3.0 + n.z * 2.0, 0.0), 2.0);
          c = mix(c, vec3(0.2, 0.215, 0.235), smoothstep(4.0, 40.0, dist));   // longe, o teto se perde no mesmo turvo
          gl_FragColor = vec4(c, 1.0);
        }
      }`:`uniform float uT, uDe; uniform vec3 uSol; varying vec3 vW;
      void main(){
        vec2 p = vW.xz; vec3 v = normalize(cameraPosition - vW); float dist = length(cameraPosition - vW);
        if (gl_FrontFacing) {
          // areia prateada: dunas suaves, marcas de vento e brilho de grão
          float duna = fbm(p * 0.015) * 1.0 + sin(p.x * 0.18 + fbm(p * 0.04) * 6.0) * 0.06;
          float e = 1.0, dx = fbm((p + vec2(e, 0.0)) * 0.015) - fbm(p * 0.015), dz = fbm((p + vec2(0.0, e)) * 0.015) - fbm(p * 0.015);
          vec3 n = normalize(vec3(-dx * 18.0 + cos(p.x * 0.18) * 0.04, 1.0, -dz * 18.0));
          float luz = max(dot(n, normalize(uSol - vW)), 0.0);
          vec3 c = vec3(0.34, 0.35, 0.37) * (0.45 + 0.75 * luz) * (0.85 + 0.3 * vn(p * 3.0));
          c += vec3(1.0) * step(0.985, h2(floor(p * 9.0))) * pow(luz, 4.0) * 0.6;        // grãos que pegam a luz
          c = mix(c, vec3(0.3, 0.32, 0.35), smoothstep(200.0, 1100.0, dist));
          gl_FragColor = vec4(c, 1.0);
        } else {
          // de baixo: a areia por cima da cabeça, escura, com a fenda de luz que se abre
          float fenda = abs(p.x * 0.6 + fbm(vec2(p.y * 0.4, 1.0)) * 4.0 - 2.0);
          float abre = 0.12 + pow(uDe, 3.0) * 6.0;   // a fenda abre devagar e só se escancara no fim da subida
          vec3 c = vec3(0.05, 0.05, 0.055) * (0.6 + 0.8 * fbm(p * 0.9));
          c += vec3(0.8, 0.8, 0.82) * smoothstep(abre, abre * 0.2, fenda) * (0.6 + 0.3 * uDe);
          c = mix(c, vec3(0.02), smoothstep(20.0, 60.0, dist));
          gl_FragColor = vec4(c, 1.0);
        }
      }`)}));c.add(fe);let pe=o?1500:3500,L=new Float32Array(pe*3);for(let e=0;e<pe;e++)L.set([(Math.random()-.5)*60,-Math.random()*40,(Math.random()-.5)*60-10],e*3);let me=new M;me.setAttribute(`position`,new _e(L,3));let he=new ve(me,new Se({color:a?14674162:12106948,size:a?.06:.09,transparent:!0,opacity:.6,depthWrite:!1,blending:2}));c.add(he);let ge=[];(()=>{let e=document.createElement(`canvas`);e.width=64,e.height=256;let t=e.getContext(`2d`),n=t.createLinearGradient(0,0,64,0);n.addColorStop(0,`rgba(255,255,255,0)`),n.addColorStop(.5,`rgba(255,255,255,1)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,256),t.globalCompositeOperation=`destination-in`;let r=t.createLinearGradient(0,0,0,256);return r.addColorStop(0,`rgba(0,0,0,1)`),r.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=r,t.fillRect(0,0,64,256),new ne(e)})();let ye=(()=>{let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.3,`rgba(235,240,255,.5)`),n.addColorStop(1,`rgba(235,240,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new ne(e)})(),be=new y(new Ce({map:ye,color:16773606,transparent:!0,depthWrite:!1,blending:2}));be.position.set(0,-60,-8),be.scale.setScalar(10);let xe=null,Te=null;if(!a){let e=new ce(1,12);e.deleteAttribute(`normal`),e.deleteAttribute(`uv`),e=we(e);let t=e.attributes.position,n=new R;for(let e=0;e<t.count;e++){n.fromBufferAttribute(t,e).normalize();let r=1+Math.sin(n.x*3.1+n.y*2.3)*.08+Math.sin(n.z*4.7-n.y*3.9)*.06+Math.sin(n.x*9-n.z*7)*.015;t.setXYZ(e,n.x*r,n.y*r*1.2,n.z*r)}e.computeVertexNormals();let r=o?28:48,i=new Float32Array(r);xe=new g(e,new p({uniforms:{uT:f,uSol:{value:m.clone()}},vertexShader:`attribute float aFase; varying vec3 vN; varying vec3 vV; varying float vF; varying vec3 vL;
        void main(){ vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix * instanceMatrix) * normal); vV = normalize(cameraPosition - w.xyz); vF = aFase; vL = position;
          gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform float uT; uniform vec3 uSol; varying vec3 vN; varying vec3 vV; varying float vF; varying vec3 vL;
        void main(){ float fr = pow(1.0 - abs(dot(vN, vV)), 2.2), dentro = pow(abs(dot(vN, vV)), 1.8);
          float bate = 0.45 + 0.55 * pow(0.5 + 0.5 * sin(uT * 1.3 + vF * 6.28), 4.0);
          vec3 c = vec3(0.035, 0.038, 0.045) + vec3(0.75, 0.8, 0.88) * fr * 0.5;              // casca escura, borda prateada
          float miolo = pow(dentro, 5.0) * smoothstep(-0.3, 0.5, vL.y + 0.2);
          c += vec3(1.0, 0.86, 0.72) * miolo * bate * 0.75;                                     // a luz morna só no miolo, como vista através da casca
          gl_FragColor = vec4(c, 1.0); }`}),r);let a=new N,s=(()=>{let e=11;return()=>(e=e*16807%2147483647,(e-1)/2147483646)})(),l=[];for(let e=0;e<r;e++){let t=(s()-.5)*2.4,n=12+s()**1.2*150,r=(1+s()*2.2)*Ct(n/35,.45,1),o=Math.sin(t)*n,c=-Math.cos(t)*n-4;n<50&&Math.abs(o)<9&&(o=(o<0?-1:1)*(9+s()*6)),a.position.set(o,r*.35,c),a.rotation.set((s()-.5)*.6,s()*6,(s()-.5)*.6),a.scale.setScalar(r),a.updateMatrix(),xe.setMatrixAt(e,a.matrix),i[e]=s(),l.push(new R(o,r*.6,c))}e.setAttribute(`aFase`,new F(i,1)),c.add(xe);let u=l.length*24,d=new Float32Array(u*3),h=new Float32Array(u*3),_=new Float32Array(u*3);for(let e=0;e<u;e++){let t=l[e%l.length];h.set([t.x,t.y,t.z],e*3);let n=e%4,r=Math.random()*Math.PI*2;_.set([Math.cos(r)*21,22+Math.sin(r)*21,I+n*-55],e*3)}let v=new M;v.setAttribute(`position`,new _e(d,3)),Te=new ve(v,new Se({color:16773862,size:.35,map:ye,transparent:!0,opacity:0,depthWrite:!1,blending:2})),Te.userData={orig:h,alvo:_,atraso:Float32Array.from({length:u},()=>Math.random()*.4)},Te.frustumCulled=!1,c.add(Te)}let Ee=new P(new re(2,2),new p({uniforms:{uT:f,uA:{value:0},uAsp:{value:1},uLinha:{value:2}},transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:`varying vec2 vU; void main(){ vU = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:Tt+`uniform float uA, uT, uAsp, uLinha; varying vec2 vU;
      void main(){ vec2 p = vec2(vU.x * uAsp, vU.y);
        // a linha d'água: abaixo dela, água; acima, o lago. Ela ondula e tem um fio de luz (o menisco)
        float onda = sin(vU.x * 9.0 + uT * 2.2) * 0.012 + sin(vU.x * 23.0 - uT * 3.1) * 0.005;
        float yl = vU.y - (uLinha + onda);
        float abaixo = smoothstep(0.004, -0.004, yl);
        float menisco = exp(-pow(yl * 140.0, 2.0)) + 0.35 * exp(-pow((yl + 0.012) * 60.0, 2.0));
        // fibras de seda: ruído esticado na horizontal, derivando devagar (a textura do vídeo embaixo d'água)
        float f = fbm(vec2(p.x * 2.2 + uT * 0.05, p.y * 9.0 - uT * 0.08)) * 0.7 + fbm(vec2(p.x * 5.0 - uT * 0.03, p.y * 22.0)) * 0.3;
        float luzCima = smoothstep(0.15, 1.0, vU.y);
        // cáustica: a rede de luz que a superfície ondulando projeta, mais forte perto do teto
        float caus = smoothstep(0.52, 0.78, fbm(p * vec2(3.0, 6.0) + vec2(uT * 0.09, -uT * 0.06))) * smoothstep(0.35, 0.95, vU.y);
        vec3 c = mix(vec3(0.1, 0.11, 0.125), vec3(0.62, 0.65, 0.7), clamp(f * 1.1 + luzCima * 0.4, 0.0, 1.0));
        c += vec3(0.85, 0.9, 0.95) * caus * 0.35;
        float a = uA * (0.6 + 0.3 * f) * abaixo;
        if (uLinha < 1.5) { a = max(a, menisco * 0.85); c = mix(c, vec3(0.92, 0.95, 1.0), clamp(menisco, 0.0, 1.0)); a = max(a, abaixo * 0.92); }
        gl_FragColor = vec4(c, a); }`}));Ee.renderOrder=98,Ee.frustumCulled=!1;let De=a?bt({lente:.25,fundo:9}):null;De&&(De.uni.uLuzFundo.value=.7);let Oe=new P(new re(2,2),new p({uniforms:{uA:{value:0},uT:f,uAsp:{value:1},uEscorre:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:`varying vec2 vU; void main(){ vU = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:Tt+`uniform float uA, uT, uAsp, uEscorre; varying vec2 vU;
      void main(){
        if (uEscorre > 0.0) {
          // escorrendo: algumas gotas descem pela lente deixando um rastro fino
          float col = floor(vU.x * 26.0), s = h2(vec2(col, 3.0));
          if (s < 0.42) { gl_FragColor = vec4(0.0); return; }
          float x = (fract(vU.x * 26.0) - 0.5 - (s - 0.7) * 0.4) * 26.0 / uAsp * 0.05;
          float y0 = 1.1 - fract(uEscorre * (0.6 + s) + s * 3.0) * 1.4;
          float dy = vU.y - y0;
          float gota = exp(-pow(x / 0.0045, 2.0) - pow(dy / 0.012, 2.0));
          float rastro = exp(-pow(x / 0.0018, 2.0)) * smoothstep(0.0, 0.01, dy) * exp(-dy * 9.0);
          gl_FragColor = vec4(vec3(0.94, 0.96, 1.0), (gota * 0.45 + rastro * 0.18) * uA); return;
        }
        vec2 p = vec2(vU.x * uAsp, vU.y) * 7.0; vec2 i = floor(p), f = fract(p) - 0.5;
        float r = 0.12 + 0.25 * h2(i), on = step(0.55, h2(i + 3.1));
        float d = length(f + (vec2(h2(i + 7.0), h2(i + 9.0)) - 0.5) * 0.4) / r;
        float gota = on * smoothstep(1.0, 0.7, d);
        float brilho = on * smoothstep(0.35, 0.0, abs(d - 0.75)) * 0.8;
        gl_FragColor = vec4(vec3(0.92, 0.95, 1.0), (gota * 0.18 + brilho * 0.5) * uA); }`}));Oe.renderOrder=99,Oe.frustumCulled=!1,c.add(Oe);let ke=new Ae(s);ke.addPass(new Me(c,u));let Pe=new je(new d(1,1),.32,.5,.86);ke.addPass(Pe),ke.addPass(new Ne);let Fe=0,Le=0;function Re(){let t=e.clientWidth,n=e.clientHeight;!t||t===Fe&&n===Le||(Fe=t,Le=n,s.setSize(t,n,!1),ke.setSize(t,n),u.aspect=t/n,u.updateProjectionMatrix(),Oe.material.uniforms.uAsp.value=Ee.material.uniforms.uAsp.value=t/n)}Re(),addEventListener(`resize`,Re);let ze=new R;new R;let Be=new S(a?2369581:328966,a?.06:.09);function Ve(e,t,r,o){let s=Ct(e/n),c=Ct((e-n)/(i-n)),l,d;if(a?(l=s<.8?z(-6,-.25,(e=>e*(1+e-e*e))(s/.8)):s<.93?z(-.25,.08,(s-.8)/.13):z(.08,1.4,wt((s-.93)/.07)),d=z(.32,.03,wt((s-.4)/.6))):(l=s<.7?z(-6,-.4,wt(s/.7)):z(-.4,1.8,wt((s-.7)/.3)),d=z(1,.05,wt((s-.55)/.45))),a&&c>0){let e=wt(c/.35),n=wt((c-.15)/.6),i=z(l,6,e)+n**1.3*(A.y-6),a=-420*e+(A.z+420)*n;if(c>D){let e=(c-D)/.25,t=O*C*(1-e*e);i=w.y-T.y*t,a=w.z-T.z*t}u.position.set(r*.6*(1-n),i,a);let o=He(c,t),d=wt((c-.1)/.5);return ze.set(0,z(i+2,o.y,d),z(a-100,o.z,d)),u.lookAt(ze),{sobe:s,voa:c,y:i}}let f=wt(c),p=z(l,22,f),m=z(0,-101,f**1.15),h=(1-f)*Math.sin(t*.7)*.06;u.position.set(r*.6*(1-f),p+h,m);let g=z(p+Math.sin(d)*10,22,f);return ze.set(r*2*(1-f),g-o*1.2*(1-f)+Math.sin(d)*(1-f)*0,m-Math.cos(d)*10*(1-f)-10*f),u.lookAt(ze),{sobe:s,voa:c,y:p}}function He(e,t){let n=6+wt(x?Ct((t-x)/10):0)*26,r=wt((e-.12)/.55);return{y:z(n,E.y,r),z:z(-1260,E.z,r)}}function Je(e,t,r=0,i=0){f.value=t,a&&e>=n-1e-4&&!x&&(x=t),a&&e<n-.01&&(x=0);let{sobe:o,voa:l,y:d}=Ve(e,t,r,i);if(a){let e=Math.min(.05,Math.max(0,t-(ee||t)));ee=t;let n=o>=.999&&l<.001?-Math.max(-1,Math.min(1,r*2))*Math.PI/6:0;k+=(n-k)*(1-Math.exp(-e*(n?2.2:1.4))),Math.abs(k)>1e-4&&(u.rotateOnWorldAxis(te,k),u.updateMatrixWorld())}if(_.position.copy(u.position),a){let e=l>D?z(80,60,wt((l-D)/.25)):80;Math.abs(u.fov-e)>1e-4&&(u.fov=e,u.updateProjectionMatrix())}if(a){let e=He(l,t);b.position.set(0,e.y,e.z),b.rotation.set(0,Math.sin(t*.15)*.25,0),b.visible=u.position.y>.05,h.uAgua.value=+(u.position.y<0);{let e=Ct((l-D)/.25),t=e*2.5,n=O*(1-e*e);ie.forEach((e,r)=>{let i=We(t,r);e.u.uNasce.value=i,e.u.uF.value=Ge(49+55*r+n)*i,e.l.visible=i>.001})}h.uNoite.value=wt((l-.3)/.6),s.toneMappingExposure=.8+h.uNoite.value*.2;let n=wt((l-.7)/.3);Pe.strength=z(.32,.22,n),Pe.radius=z(.5,.4,n),Pe.threshold=z(.86,.75,n)}let p=u.position.y<0;c.fog=p?Be:null,ue.uDe.value=o,oe.u.uNasce.value=wt((o-.85)/.4),oe.u.uF.value=wt((o-.8)/.3)*(1.6-l*1.2),oe.l.position.set(0,z(m.y,62,l),z(m.z,-425,l)),oe.l.lookAt(u.position),le.forEach((e,t)=>{let n=wt((l-.12-t*.1)/.45);e.l.position.set(0,z(-24,22,n),I+t*-55),e.l.rotation.set(0,0,0),e.u.uNasce.value=n,e.u.uF.value=n*(t===0?.7:.55)});let g=me.attributes.position;for(let e=0;e<pe;e++){let n=g.getY(e);a?n+=Math.sin(t*.3+e)*.003:(n-=.06+e%7*.01,n<-40&&(n=0)),g.setY(e,n)}g.needsUpdate=!0,he.material.opacity=p?a?.25:.6:0,ge.forEach(e=>{e.material.opacity=p?.09+.06*Math.sin(t*.8+e.userData.f):0}),be.material.opacity=p?.6+.3*Math.sin(t*1.5):0;let v=Ct(a?1-Math.abs(o-.86)/.12:1-Math.abs(o-.78)/.12);if(a){let e=Ct((o-.8)/.12);Ee.material.uniforms.uLinha.value=o<.8?2:o>=.92?-1:1.12-e*1.3,Ee.material.uniforms.uA.value=+(o<.92);let n=Ct((o-.9)/.1)*(1-Ct(l*3));Oe.material.uniforms.uEscorre.value=t*.35,Oe.material.uniforms.uA.value=o>.9?Math.min(1,n*3)*(1-wt((t-(x||t))/4)):0}else Oe.material.uniforms.uEscorre.value=0,Oe.material.uniforms.uA.value=v*(1-l);if(Te){let{orig:e,alvo:t,atraso:n}=Te.userData,r=Te.geometry.attributes.position;for(let i=0;i<n.length;i++){let a=wt((l-.05-n[i]*.4)/.5),o=i*3;r.setXYZ(i,z(e[o],t[o],a),z(e[o+1],t[o+1],a)+Math.sin(a*Math.PI)*18,z(e[o+2],t[o+2],a))}r.needsUpdate=!0,Te.material.opacity=Ct(l*6)*(1-wt((l-.75)/.25))}ke.render(),De&&u.position.y<.45&&De.render(s,u,t,u.aspect)}return{render:Je,tamanho:Re,VA:D,FOV_VR:80,pronto:Ie(s,c,u)}}var Dt=new j,Ot=new R,kt=class extends f{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new ye([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new ye([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new m(t,6,1);return this.setAttribute(`instanceStart`,new c(n,3,0)),this.setAttribute(`instanceEnd`,new c(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new m(t,6,1);return this.setAttribute(`instanceColorStart`,new c(n,3,0)),this.setAttribute(`instanceColorEnd`,new c(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new v(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new j);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Dt.setFromBufferAttribute(t),this.boundingBox.union(Dt))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new a),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)Ot.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(Ot)),Ot.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(Ot));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}};me.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new d},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},fe.line={uniforms:D.merge([me.common,me.fog,me.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var At=class extends p{constructor(e){super({type:`LineMaterial`,uniforms:D.clone(fe.line.uniforms),vertexShader:fe.line.vertexShader,fragmentShader:fe.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return`WORLD_UNITS`in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return`USE_DASH`in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return`USE_ALPHA_TO_COVERAGE`in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE=``:delete this.defines.USE_ALPHA_TO_COVERAGE)}},jt=new u,Mt=new R,Nt=new R,Pt=new u,Ft=new u,It=new u,Lt=new R,Rt=new e,zt=new w,Bt=new R,Vt=new j,Ht=new a,Ut=new u,Wt,Gt;function Kt(e,t,n){return Ut.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),Ut.multiplyScalar(1/Ut.w),Ut.x=Gt/n.width,Ut.y=Gt/n.height,Ut.applyMatrix4(e.projectionMatrixInverse),Ut.multiplyScalar(1/Ut.w),Math.abs(Math.max(Ut.x,Ut.y))}function qt(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){zt.start.fromBufferAttribute(i,r),zt.end.fromBufferAttribute(a,r),zt.applyMatrix4(n);let o=new R,s=new R;Wt.distanceSqToSegment(zt.start,zt.end,s,o),s.distanceTo(o)<Gt*.5&&t.push({point:s,pointOnLine:o,distance:Wt.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,uv1:null})}}function Jt(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;Wt.at(1,It),It.w=1,It.applyMatrix4(t.matrixWorldInverse),It.applyMatrix4(r),It.multiplyScalar(1/It.w),It.x*=i.x/2,It.y*=i.y/2,It.z=0,Lt.copy(It),Rt.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(Pt.fromBufferAttribute(s,t),Ft.fromBufferAttribute(c,t),Pt.w=1,Ft.w=1,Pt.applyMatrix4(Rt),Ft.applyMatrix4(Rt),Pt.z>u&&Ft.z>u)continue;if(Pt.z>u){let e=Pt.z-Ft.z,t=(Pt.z-u)/e;Pt.lerp(Ft,t)}else if(Ft.z>u){let e=Ft.z-Pt.z,t=(Ft.z-u)/e;Ft.lerp(Pt,t)}Pt.applyMatrix4(r),Ft.applyMatrix4(r),Pt.multiplyScalar(1/Pt.w),Ft.multiplyScalar(1/Ft.w),Pt.x*=i.x/2,Pt.y*=i.y/2,Ft.x*=i.x/2,Ft.y*=i.y/2,zt.start.copy(Pt),zt.start.z=0,zt.end.copy(Ft),zt.end.z=0;let o=zt.closestPointToPointParameter(Lt,!0);zt.at(o,Bt);let l=_.lerp(Pt.z,Ft.z,o),d=l>=-1&&l<=1,f=Lt.distanceTo(Bt)<Gt*.5;if(d&&f){zt.start.fromBufferAttribute(s,t),zt.end.fromBufferAttribute(c,t),zt.start.applyMatrix4(a),zt.end.applyMatrix4(a);let r=new R,i=new R;Wt.distanceSqToSegment(zt.start,zt.end,i,r),n.push({point:i,pointOnLine:r,distance:Wt.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,uv1:null})}}}var Yt=class extends P{constructor(e=new kt,t=new At({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)Mt.fromBufferAttribute(t,e),Nt.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+Mt.distanceTo(Nt);let i=new m(r,2,1);return e.setAttribute(`instanceDistanceStart`,new c(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new c(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;if(r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;Wt=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;Gt=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),Ht.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?Gt*.5:Kt(r,Math.max(r.near,Ht.distanceToPoint(Wt.origin)),s.resolution),Ht.radius+=c,Wt.intersectsSphere(Ht)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Vt.copy(o.boundingBox).applyMatrix4(a);let l;l=n?Gt*.5:Kt(r,Math.max(r.near,Vt.distanceToPoint(Wt.origin)),s.resolution),Vt.expandByScalar(l),Wt.intersectsBox(Vt)!==!1&&(n?qt(this,t):Jt(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(jt),this.material.uniforms.resolution.value.set(jt.z,jt.w))}},Xt=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),Zt=e=>(e=Xt(e),e*e*(3-2*e)),Qt=2,$t=-1,en=[0,.3],tn=[.05,.4],nn=[.2,1.4],rn=[.5,1.45],an=[.55,1.15],on=[1.15,1.6],sn=1.65,cn=[0,1.25],ln=.45,un=[.75,1.35],dn=[1.2,2.35],fn=[.7,2.2],pn=2.45;function mn(e,{avatares:n,aoRevelar:a,aoFoco:o}){let s=matchMedia(`(max-width: 760px), (pointer: coarse)`).matches,c=new ae({canvas:e,antialias:!s,alpha:!1,powerPreference:`high-performance`});c.setPixelRatio(Math.min(devicePixelRatio||1,s?1.2:1.6));let u=new se;u.background=new ee(658188);let f=new de(30,1,.05,80),m={value:0},h={value:new d},g={value:1};u.add(new P(new l(40,32,16),new p({side:1,depthWrite:!1,uniforms:{uLuz:g},vertexShader:`varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uLuz; varying vec3 vD; void main(){ float h = vD.y; vec3 c = mix(vec3(0.16, 0.17, 0.19), vec3(0.025, 0.027, 0.03), smoothstep(-0.05, 0.45, h)); c = mix(c, vec3(0.03), smoothstep(0.0, -0.3, h)); gl_FragColor = vec4(c * (0.25 + 0.75 * uLuz), 1.0); }`})));let _=new P(new re(30,30),new p({uniforms:{uT:m,uRevela:h,uLuz:g,uX:{value:new d(-.34,.34)},uDesloca:{value:0},uOnda:{value:-1},uGiro:{value:0},uGiroF:{value:0}},transparent:!0,depthWrite:!1,vertexShader:`varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:ke+`uniform float uT, uDesloca, uOnda, uLuz, uGiro, uGiroF; uniform vec2 uRevela, uX; varying vec2 vP;
      void main(){
        vec2 p = vec2(vP.x - uDesloca, -vP.y); float r = length(p * vec2(1.0, 1.6));
        float onda = 0.5 + 0.5 * sin(r * 9.0 - uT * 1.4); onda *= smoothstep(4.5, 0.2, r);
        float brilho = snoise(vec3(vP * 1.3, uT * 0.15)) * 0.5 + 0.5;
        vec3 c = (vec3(0.05, 0.055, 0.065) + vec3(0.16, 0.18, 0.21) * onda * 0.35 + vec3(0.1) * brilho * smoothstep(6.0, 0.0, r) * 0.4) * (0.3 + 0.7 * uLuz);
        // o fim do redemoinho: braços de espuma de luz em espiral, girando e se apagando até sobrar só as ondas
        if (uGiro > 0.001) { float ang = atan(p.y, p.x) + uGiroF, rr = length(p); c += vec3(0.8, 0.86, 0.94) * pow(0.5 + 0.5 * sin(ang * 3.0 - log(rr + 0.05) * 4.0), 8.0) * smoothstep(7.0, 0.6, rr) * uGiro * 0.5; c *= 1.0 - uGiro * 0.6 * smoothstep(1.4, 0.0, rr); }
        for (int i = 0; i < 2; i++) { float d = length((p - vec2(uX[i], 0.0)) * vec2(1.0, 2.2)); c += vec3(0.75, 0.82, 0.95) * exp(-d * d * 9.0) * (0.18 + 0.7 * uRevela[i]); }
        if (uOnda >= 0.0) { float rr = length(vec2(vP.x, vP.y) * vec2(1.0, 1.5)), ro = uOnda * 7.0; c += vec3(0.9, 0.95, 1.0) * (exp(-pow((rr - ro) * 1.8, 2.0)) * 0.55 * smoothstep(3.4, 2.2, ro) + exp(-rr * rr * 2.5) * 2.0 * exp(-uOnda * 4.0)) * max(0.0, 1.0 - uOnda / 1.6); }   // o impacto do feixe no lago (a frente da onda some quando vira o anel)
        float a = smoothstep(14.0, 4.0, length(vP));
        gl_FragColor = vec4(c, a);
      }`}));_.rotation.x=-Math.PI/2,_.position.y=$t,u.add(_);let v=new P(new C(2.4,.012,8,160),new ge({color:14673650,transparent:!0,opacity:.55,blending:2,depthWrite:!1}));v.position.set(0,.15,-3.2),u.add(v);let y={value:1},b=new P(new re(9,9),new p({transparent:!0,depthWrite:!1,blending:2,uniforms:{uHalo:y},vertexShader:`varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uHalo; varying vec2 vU; void main(){ float d = length(vU - 0.5) * 2.0; float a = exp(-pow((d - 0.53) * 9.0, 2.0)) * 0.35 + exp(-d * d * 3.0) * 0.06; gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * a * uHalo, 1.0); }`}));b.position.copy(v.position),u.add(b);let x=s?500:1400,S=new Float32Array(x*3);for(let e=0;e<x;e++)S.set([(Math.random()-.5)*12,Math.random()*5-1,(Math.random()-.5)*8-1],e*3);let w=new M;w.setAttribute(`position`,new _e(S,3));let T=new ve(w,new p({uniforms:{uT:m,uPx:{value:c.getPixelRatio()}},transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT, uPx; varying float vA; void main(){ vec3 p = position; p.y = mod(p.y + uT * 0.06 + 1.0, 5.0) - 1.0; p.x += sin(uT * 0.2 + p.z) * 0.2; vec4 mv = modelViewMatrix * vec4(p, 1.0); vA = 0.25 + 0.5 * fract(position.x * 13.0); gl_PointSize = uPx * (1.0 + fract(position.z * 7.0) * 1.6) * (5.0 / max(-mv.z, 1.0)); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying float vA; void main(){ vec2 c = gl_PointCoord - 0.5; if (dot(c, c) > 0.25) discard; gl_FragColor = vec4(vec3(0.9, 0.93, 1.0) * vA, 1.0); }`}));T.frustumCulled=!1,u.add(T);let E={linhas:new At({linewidth:1,vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!1,blending:2}),nos:new p({uniforms:{uCresce:{value:0},uPessoa:{value:0},uPx:{value:c.getPixelRatio()}},transparent:!0,depthWrite:!1,depthTest:!1,blending:2,vertexShader:`attribute float ordem, pessoa; uniform float uCresce, uPessoa, uPx; varying float vA; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0);
          float acende = smoothstep(ordem - 0.15, ordem + 0.25, uCresce), flash = exp(-pow(uCresce - ordem - 0.15, 2.0) * 10.0);
          vA = pessoa > 0.5 ? uPessoa : acende * (0.75 + 1.2 * flash);
          gl_PointSize = uPx * (pessoa > 0.5 ? 46.0 : 26.0 + 22.0 * flash) * (6.0 / max(-mv.z, 1.0)); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying float vA; void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c); float a = (exp(-d * d * 60.0) + exp(-d * d * 12.0) * 0.35) * vA; if (a < 0.003) discard; gl_FragColor = vec4(vec3(0.93, 0.96, 1.0) * a, 1.0); }`}),part:new p({uniforms:{uK:{value:0},uAlvoA:{value:new R},uAlvoB:{value:new R},uPx:{value:c.getPixelRatio()}},transparent:!0,depthWrite:!1,depthTest:!1,blending:2,vertexShader:`attribute float atraso, quem; uniform float uK, uPx; uniform vec3 uAlvoA, uAlvoB; varying float vA;
          void main(){ vec3 alvo = quem > 0.5 ? uAlvoB : uAlvoA; float k = clamp((uK - atraso) / (1.0 - atraso), 0.0, 1.0), e = pow(k, 2.2);
            vec3 d = position - alvo; float a = e * 2.4; d.xz = mat2(cos(a), -sin(a), sin(a), cos(a)) * d.xz; vec3 p = alvo + d * (1.0 - e);
            vA = smoothstep(0.0, 0.15, k) * (1.0 - smoothstep(0.85, 1.0, k)) * (0.5 + 0.8 * e);
            vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_PointSize = uPx * (1.6 + 2.0 * e) * (6.0 / max(-mv.z, 1.0)); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying float vA; void main(){ vec2 c = gl_PointCoord - 0.5; float a = exp(-dot(c, c) * 18.0) * vA; if (a < 0.004) discard; gl_FragColor = vec4(vec3(0.92, 0.96, 1.0) * a, 1.0); }`}),fio:new p({uniforms:{uFio:{value:0},uPulso:{value:0},uA:{value:1}},transparent:!0,depthWrite:!1,depthTest:!1,blending:2,vertexShader:`attribute float u; varying float vU; void main(){ vU = u; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uFio, uPulso, uA; varying float vU; void main(){ float m = min(vU, 1.0 - vU); if (m > uFio * 0.5 + 0.001) discard; float p = exp(-pow((m - (0.5 - uPulso * 0.5)) * 14.0, 2.0)) * step(0.001, uPulso) * (1.0 - uPulso); gl_FragColor = vec4(vec3(0.94, 0.97, 1.0) * (0.85 + 2.0 * p) * uA, 1.0); }`})};{let e=new kt;e.setPositions([0,0,0,0,.01,0]);let n=new M;n.setAttribute(`position`,new ye([0,0,0,0,.01,0],3)),[`ordem`,`pessoa`,`u`].forEach(e=>n.setAttribute(e,new ye([0,0],1))),n.setAttribute(`atraso`,new ye([0,0],1)),n.setAttribute(`quem`,new ye([0,0],1)),[new Yt(e,E.linhas),new ve(n,E.nos),new t(n,E.fio),new ve(n,E.part)].forEach(e=>{e.visible=!1,e.frustumCulled=!1,u.add(e)})}let D=new P(new ce(1,s?32:56),new p({uniforms:{uT:m,uLuz:g,uDesfaz:{value:0},uPulso:{value:0},uAcesa:{value:0},uSurge:{value:1}},side:2,vertexShader:ke+`uniform float uT, uPulso; varying vec3 vN; varying vec3 vV; varying vec3 vL; varying float vY;
      void main(){ vec3 p = position; float d = snoise(p * 1.7 + uT * 0.05) * 0.09 + snoise(p * 4.5) * 0.025; p += normal * (d + uPulso * 0.02);
        vL = position; vec4 w = modelMatrix * vec4(p, 1.0); vY = w.y; vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - w.xyz);
        gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:ke+`uniform float uT, uLuz, uDesfaz, uAcesa, uSurge; varying vec3 vN; varying vec3 vV; varying vec3 vL; varying float vY;
      void main(){
        if (vY < ${$t.toFixed(2)}) discard;   // nada da pedra abaixo da linha d'água (no celular a água longe é translúcida)
        float n = snoise(vL * 2.2) * 0.5 + 0.5, lim = uDesfaz * 1.15 - 0.05;
        if (n < lim) discard;
        float borda = 1.0 - smoothstep(0.0, 0.07, n - lim);
        vec3 N = normalize(vN); if (!gl_FrontFacing) N = -N;
        float fr = pow(1.0 - abs(dot(N, vV)), 2.2), luz = max(dot(N, normalize(vec3(-0.4, 0.8, 0.6))), 0.0);
        vec3 iris = 0.5 + 0.5 * cos(6.2831 * (fr * 1.6 + vec3(0.0, 0.33, 0.67)) + uT * 0.2);
        vec3 c = vec3(0.6, 0.62, 0.66) * (0.3 + 0.7 * luz) + mix(vec3(0.95), iris, 0.12) * fr * 0.6;
        c += vec3(0.85, 0.92, 1.0) * pow(1.0 - abs(snoise(vL * 6.0)), 14.0) * 0.35;
        c = mix(c, vec3(0.95, 0.98, 1.0) * 1.6, borda * step(0.001, uDesfaz));
        c = c * (0.45 + 0.55 * uLuz) + vec3(0.9, 0.95, 1.0) * fr * fr * uAcesa * 1.1;   // elo B: no escuro, só o contorno acende (a luz da água); a matéria aparece com o mundo
        gl_FragColor = vec4(c * uSurge, 1.0);   // elo B: a pedra surge do escuro do olho do redemoinho
      }`}));D.scale.set(1.08,1.14,.66),u.add(D);let O=new r;u.add(O);let k=n.map((e,t)=>({pivo:new r,mat:De(),x:(t-(n.length-1)/2)*.68,revelaT0:0,aceso:0,malhas:[]}));k.forEach(e=>{e.pivo.position.x=e.x,e.mat.uniforms.uFrente.value=9,O.add(e.pivo)});let te=new Ee().setMeshoptDecoder(Oe),A=n.map((e,t)=>new Promise(n=>te.load(e,e=>{let r=e.scene,i=new j().setFromObject(r),a=i.getSize(new R),o=i.getCenter(new R);r.position.sub(o),k[t].pivo.scale.setScalar(Qt/a.y),r.traverse(e=>{if(!e.isMesh)return;let n=e.material.map;n&&(n.colorSpace=``,n.needsUpdate=!0,k[t].mat.uniforms.uMapa.value=n,k[t].mat.uniforms.uTemMapa.value=1),e.material=k[t].mat,e.userData.fig=t,k[t].malhas.push(e)}),k[t].pivo.add(r),n()},void 0,t=>{console.warn(`avatar`,e,t),n()}))),N=Promise.all(A).then(()=>Ie(c,u,f)),ne=new i,oe=new d,F={x:0,y:0,dentro:!1},le=-1;e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect();F.x=(t.clientX-n.left)/n.width*2-1,F.y=-((t.clientY-n.top)/n.height)*2+1,F.dentro=!0}),e.addEventListener(`pointerleave`,()=>{F.dentro=!1}),e.addEventListener(`click`,()=>{le<0||(k[le].revelaT0?Ue.foca(le):Ue.revela(le))});let I=null,ue=null,fe=0,pe={wRolo:0,wFase:0,rolo:0},L=0,me=0,he=0,be=0,Se=0,Ce=null,we=0,Te=-1,Ae=0,je=new R,Me=new R,Ne=new R,Pe=new R,Fe=new R,Le=new R,Re=new R(0,.15,-3.2),ze=new R,Be=new R;function Ve(){let t=e.clientWidth,n=e.clientHeight;if(!t)return;c.setSize(t,n,!1),f.aspect=t/n,E.linhas.resolution.set(e.width,e.height);let r=Math.tan(15*Math.PI/180),i=Math.max(1.95/r,1.6/(r*f.aspect));je.set(0,t/n<1?-.1:.35,i),Me.set(0,t/n<1?-.45:-.05,0),f.position.copy(je),Ne.copy(Me),f.lookAt(Ne),f.updateProjectionMatrix()}Ve(),addEventListener(`resize`,Ve);function He(t,n=0,r=0){m.value=t;let i=L?(performance.now()-me)/1e3:0;D.material.uniforms.uDesfaz.value=L?Zt(i/1.6):0,D.material.uniforms.uPulso.value=L?0:.5+.5*Math.sin(t*2.2),D.visible=!L||i<1.7,D.rotation.y=Math.sin(t*.3)*.15+n*.2;let a=be?(performance.now()-be)/1e3:9,o=a<pn;{let e=o?Xt((a-dn[0])/(dn[1]-dn[0])):1,t=1-(1-e)**3;o&&a<dn[0]&&(D.visible=!1),D.scale.set(1.08,1.14,.66).multiplyScalar(.12+.88*t),D.position.set(Re.x*(1-t),Re.y*(1-t),Re.z*(1-t)),D.material.uniforms.uAcesa.value=o?1-Zt(e*1.2):0,D.material.uniforms.uSurge.value=1,be&&k.forEach(t=>{t.pivo.visible=e>=.99})}if(g.value=o?.12+.88*Zt((a-fn[0])/(fn[1]-fn[0])):1,be&&a>pn&&(be=0),L===1&&i>1.9&&(L=2),le=-1,L===2&&F.dentro){ne.setFromCamera(oe.set(F.x,F.y),f);let e=ne.intersectObjects(k.flatMap(e=>e.malhas))[0];e&&(le=e.object.userData.fig)}e.style.cursor=le>=0&&Te!==le?`pointer`:``,k.forEach((e,i)=>{let a=e.revelaT0?Xt((performance.now()-e.revelaT0)/2400):0;e.mat.uniforms.uT.value=t,e.mat.uniforms.uReal.value=e.revelaT0?-1.15+Zt(a)*2.4:-9,e.aceso+=(+(le===i&&!e.revelaT0)-e.aceso)*.12,e.mat.uniforms.uAceso.value=e.aceso,h.value.setComponent(i,Zt(a)),e.pivo.rotation.y=n*.6+Math.sin(t*.4+i*2)*.1*(1-Zt(a)),e.pivo.rotation.x=r*.08}),he+=(+(L===2)-he)*.04,f.aspect>=1?(O.position.set(he*.95,0,0),_.material.uniforms.uDesloca.value=he*.95,v.position.x=b.position.x=he*.95):(O.position.set(0,he*.95,0),O.scale.setScalar(1-he*.38));let s=O.position.x;_.material.uniforms.uX.value.set(s+k[0].x*O.scale.x,s+(k[1]?.x??0)*O.scale.x).subScalar(_.material.uniforms.uDesloca.value),v.rotation.z=t*.05,v.rotation.y=Math.sin(t*.2)*.15,_.material.uniforms.uOnda.value=we?(performance.now()-we)/1e3*.4:-1,we&&performance.now()-we>4e3&&(we=0);let l=f.aspect>=1;if(Te>=0&&k[Te]?(k[Te].pivo.getWorldPosition(Le),Le.y+=Qt*.36*O.scale.y,Fe.copy(Le).add(new R(l?-.3:0,l?-.06:-.26,0)),Pe.copy(Fe).add(new R(0,.04,l?1.55:2.2))):(Pe.copy(je),Fe.copy(Me)),o){let e=1-(1-Xt((a-cn[0])/(cn[1]-cn[0])))**2.6;f.position.set(0,je.y+5*(1-e),je.z*(.75+.25*e)),Ne.set(0,-.7+(Me.y-$t-.3)*e,0);let t=1-Math.exp(-a/ln),n=pe.rolo+pe.wRolo*ln*t,r=pe.rolo+pe.wRolo*ln;fe=n+(Math.round(r/(Math.PI*2))*Math.PI*2-r)*Zt(a/cn[1]),_.material.uniforms.uGiro.value=Math.exp(-a/.7),_.material.uniforms.uGiroF.value=-(pe.wFase*.7*(1-Math.exp(-a/.7)))}else if(I){let e=Zt(((performance.now()-Ae)/1e3-nn[0])/(nn[1]-nn[0]));f.position.lerpVectors(I.cam0,I.cam1,e),Ne.lerpVectors(I.olhar0,I.olhar1,e),Fe.copy(Ne),Pe.copy(f.position)}else f.position.lerp(Pe,.05);if(!o&&!I&&(Ne.lerp(Fe,.05),fe=0,_.material.uniforms.uGiro.value=0),f.lookAt(Ne),fe&&f.rotateZ(-fe),k.forEach((e,t)=>{let n=+(Te>=0&&Te!==t);e.mat.uniforms.uApaga.value+=(n-e.mat.uniforms.uApaga.value)*.08}),I){let e=(performance.now()-Ae)/1e3,t=(t,n)=>Xt((e-t)/(n-t)),n=t(...an),r=n**2.4,i=Math.max(.001,1-r);k.forEach(e=>{e.mat.uniforms.uReal.value=Math.min(e.mat.uniforms.uReal.value,-1.15+(1-Zt(t(...en)))*2.4),e.mat.uniforms.uAceso.value=Zt(t(0,.4))+r,e.mat.uniforms.uApaga.value=0,e.pivo.scale.setScalar(e.esc0*i),e.pivo.position.y=Qt*.22*(1-i),e.pivo.visible=n<.98}),I.part.material.uniforms.uK.value=n,I.fio.material.uniforms.uFio.value=Zt(t(...tn)),I.fio.material.uniforms.uPulso.value=t(tn[1],tn[1]+.35),I.fio.material.uniforms.uA.value=1-Zt(t(an[1]-.2,an[1]+.2));let a=t(...rn)*(I.niveis+1);I.nos.material.uniforms.uCresce.value=a;{let e=I.linhas.geometry.attributes.instanceColorStart.data,t=e.array;I.linhas.userData.ordem.forEach((e,n)=>{let r=Xt((a-e+.1)/.7),i=r*r*(3-2*r)*(.32+.9*Math.exp(-((a-e-.4)**2)*6))*(1-(I.apaga||0));for(let e=0;e<6;e++)t[n*6+e]=i*[.9,.94,1][e%3]}),e.needsUpdate=!0}I.nos.material.uniforms.uPessoa.value=.35*r+Zt(t(an[1]-.1,an[1]))*.65+1.6*Math.exp(-(((e-an[1]-.04)/.1)**2)),h.value.multiplyScalar(1-Zt(t(an[0]-.2,an[0]+.3)));let o=Zt(t(...on));if(g.value=Math.min(g.value,1-.95*o),I.esc=o,I.apaga=Zt(t(on[0]-.15,sn))*.85,e>=sn&&ue){let e=ue;ue=null,e()}}if(Se&&Ce){let t=Zt((performance.now()-Se)/1600),n=e.getBoundingClientRect(),r=n.height/2/Math.tan(f.fov*Math.PI/360);Be.set((Ce.x-n.left)/n.width*2-1,-((Ce.y-n.top)/n.height)*2+1,.5).unproject(f).sub(f.position).normalize(),ze.copy(f.position).addScaledVector(Be,2.4*r/Ce.r),v.position.lerpVectors(Re,ze,t),b.position.copy(v.position),v.rotation.y*=1-t,v.material.opacity=.55+.45*t,k.forEach(e=>{e.pivo.position.x=e.x*(1+Zt((t-.25)/.75)*3.2),e.mat.uniforms.uReal.value=Math.min(e.mat.uniforms.uReal.value,-1.15+(1-Xt(t*2.2))*2.4)}),O.position.y-=Zt((t-.35)/.65)*1.8}else v.position.copy(Re),f.aspect>=1&&(v.position.x=he*.95),b.position.copy(v.position),v.material.opacity=.55,k.forEach(e=>{e.pivo.position.x=e.x});if(o){let e=Zt((a-un[0])/(un[1]-un[0]));v.position.y=Re.y-.8*(1-e),b.position.copy(v.position),v.material.opacity=.55*e,y.value=e}else y.value=1;I&&(v.material.opacity*=1-I.esc,y.value*=1-I.esc),c.render(u,f)}let Ue={render:He,tamanho:Ve,pronto:N,quebra(){return!L&&(L=1,me=performance.now(),!0)},revela(e){let t=k[e];!t||L<2||(t.revelaT0||(t.revelaT0=performance.now(),a?.(e)),Ue.foca(e))},get estado(){return L},get revelados(){return k.map(e=>!!e.revelaT0)},chegada(e=!1,t=null){e&&(be=performance.now(),pe=t??{wRolo:0,wFase:0,rolo:0})},foca(e){L<2||!k[e]||(Te=e,o?.(e))},desfoca(){Te<0||(Te=-1,o?.(-1))},get foco(){return Te},desfaz(e,n=36){if(Ae)return!1;Te=-1,o?.(-1),Ae=performance.now(),ue=e;let r=O.position.x,a=f.aspect>=1,c=new R(r,$t+(a?5.2:7.5),a?4.3:5.2),l=new R(r,$t,a?-.5:-.3),p=f.clone();p.position.copy(c),p.lookAt(l),p.updateMatrixWorld(),p.updateProjectionMatrix(),k.forEach(e=>{e.esc0=e.pivo.scale.x});let m=new ie(new R(0,1,0),.98),h=new i,g=[],_=[];for(k.forEach(e=>{let t=new R;e.pivo.getWorldPosition(t),t.y+=Qt*.22*O.scale.y,_.push(t),g.push(t.clone())});g.length<n;){h.setFromCamera(new d(Math.random()*1.9-.95,Math.random()*1.8-.9),p);let e=new R;h.ray.intersectPlane(m,e)&&g.push(e)}let v=g.map(()=>new Set);v[0].add(1),v[1].add(0),g.forEach((e,t)=>g.map((t,n)=>[n,e.distanceTo(t)]).filter(([e])=>e!==t).sort((e,t)=>e[1]-t[1]).slice(0,2).forEach(([e])=>{v[t].add(e),v[e].add(t)}));let y=g.map(()=>99);y[0]=y[1]=0;let b=[0,1];for(;b.length;){let e=b.shift();v[e].forEach(t=>{y[t]>y[e]+1&&(y[t]=y[e]+1,b.push(t))})}g.forEach((e,t)=>{y[t]===99&&(y[t]=6)});let x=Math.max(...y),S=[],C=[],w=new R,T=new R;v.forEach((e,t)=>e.forEach(e=>{if(e<=t)return;let[n,r]=y[t]<=y[e]?[g[t],g[e]]:[g[e],g[t]],i=Math.max(y[t],y[e]),a=r.x-n.x,o=r.z-n.z,s=Math.hypot(a,o)||1,c=((t*73856093^e*19349663)>>>0)%7/7-.43,l=new R((n.x+r.x)/2-o/s*s*c*.6,(n.y+r.y)/2,(n.z+r.z)/2+a/s*s*c*.6),u=new xe(n,l,r);for(let e=0;e<12;e++)u.getPoint(e/12,w),u.getPoint((e+1)/12,T),S.push(w.x,w.y,w.z,T.x,T.y,T.z),C.push(i+e/12*.6,i)}));let D=new kt;D.setPositions(S),D.setColors(Array(S.length).fill(0));let ee=new Yt(D,E.linhas);ee.renderOrder=4,ee.userData.ordem=C.filter((e,t)=>t%2==0);let te=new M;te.setAttribute(`position`,new ye(g.flatMap(e=>[e.x,e.y,e.z]),3)),te.setAttribute(`ordem`,new ye(y,1)),te.setAttribute(`pessoa`,new ye(g.map((e,t)=>+(t<2)),1));let A=new ve(te,E.nos);E.nos.uniforms.uCresce.value=0,E.nos.uniforms.uPessoa.value=0,A.renderOrder=5;let j=_[0].clone().add(_[1]).multiplyScalar(.5);j.y+=.22;let N=new xe(_[0],j,_[1]).getPoints(60),P=new M().setFromPoints(N);P.setAttribute(`u`,new ye(N.map((e,t)=>t/60),1));let ne=new t(P,E.fio);[`uFio`,`uPulso`].forEach(e=>{E.fio.uniforms[e].value=0}),E.fio.uniforms.uA.value=1,ne.renderOrder=6;let re=[],ae=[],oe=[],F=new R;k.forEach((e,t)=>e.malhas.forEach(n=>{let r=n.geometry.attributes.position,i=Math.round((s?220:480)/e.malhas.length);for(let e=0;e<i;e++)F.fromBufferAttribute(r,Math.random()*r.count|0),n.localToWorld(F),re.push(F.x,F.y,F.z),ae.push(Math.random()*.45),oe.push(t)}));let se=new M;se.setAttribute(`position`,new ye(re,3)),se.setAttribute(`atraso`,new ye(ae,1)),se.setAttribute(`quem`,new ye(oe,1));let ce=new ve(se,E.part);return ce.frustumCulled=!1,ce.renderOrder=7,E.part.uniforms.uK.value=0,E.part.uniforms.uAlvoA.value.copy(_[0]),E.part.uniforms.uAlvoB.value.copy(_[1]??_[0]),u.add(ee,A,ne,ce),I={linhas:ee,nos:A,fio:ne,part:ce,pts:g,nivel:y,niveis:x,esc:0,cam0:f.position.clone(),olhar0:Ne.clone(),cam1:c,olhar1:l},!0},pontosNaTela(){if(!I)return[];let t=e.getBoundingClientRect(),n=new R;return I.pts.map((e,r)=>{n.copy(e).project(f);let i=f.position.distanceTo(e);return{x:t.left+(n.x+1)/2*t.width,y:t.top+(1-n.y)/2*t.height,z:Xt(1.6-i/9,.35,1),pessoa:r<2}})},refaz(){Ae=0,ue=null,I&&([I.linhas,I.nos,I.fio,I.part].forEach(e=>{u.remove(e),e.geometry.dispose()}),I=null,k.forEach(e=>{e.esc0&&e.pivo.scale.setScalar(e.esc0),e.pivo.position.y=0})),g.value=1,k.forEach(e=>{e.pivo.visible=!0,e.mat.uniforms.uAceso.value=0,e.mat.uniforms.uApaga.value=0})},sai(e){return L<2||Se?!1:(Ce=e,Se=performance.now(),!0)},reposiciona(){Se=0,Ce=null},reinicia(){L=0,Se=0,be=0,Te=-1,Ue.refaz(),he=0,O.position.set(0,0,0),O.scale.setScalar(1),k.forEach(e=>{e.revelaT0=0})}};return Ue}var hn=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),gn=e=>(e=hn(e),e*e*(3-2*e)),_n=.75,vn=.7,yn=[1.4,2.8],bn=2.3,xn=6,Sn=.35,Cn=[.05,.9],wn=[.45,.95],Tn=[.55,1.25],En=[1,1.85],Dn=1.6,On=.82,kn=1.05,An=2.1,jn=1.75,Mn=1.1;function Nn(e,{paineis:t,aoClicar:n}){let a=matchMedia(`(max-width: 760px), (pointer: coarse)`).matches,o=new ae({canvas:e,antialias:!0,alpha:!0,powerPreference:`high-performance`});o.setPixelRatio(Math.min(devicePixelRatio||1,a?1.25:1.6));let s=new se,c=new de(36,1,.1,80),l={value:0},u=new r;s.add(u);let f=t.length,m=-(f-1)*kn,h=new T().load(`/cicclos-site/v3/vitrine/coluna.webp`);h.colorSpace=``;let g={value:0},_={value:0},v={value:1},y={value:1},b={value:0},x={value:0},S={value:0},C={value:0},w={value:0},E=new P(new re(1,1),new p({uniforms:{uT:l,uProg:g,uRecolhe:_,uNasce:v,uDispara:y,uOlha:b,uGira:x,uFunil:S,uFase:C,uRolo:w,uMapa:{value:h},uTelaAsp:{value:1}},transparent:!0,depthWrite:!1,depthTest:!1,blending:5,blendSrc:201,blendDst:205,blendSrcAlpha:201,blendDstAlpha:205,vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:ke+`uniform sampler2D uMapa; uniform float uT, uProg, uTelaAsp, uRecolhe, uNasce, uDispara, uOlha, uGira, uFunil, uFase, uRolo; varying vec2 vUv;
      mat2 gira(float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
      const float ASP = 768.0 / 1376.0, LAGO = 0.255;
      void main(){
        // a tela mostra uma janela da imagem (60% da altura dela) que desce do alto da coluna até o lago
        // elo B · o redemoinho: a câmera roda (uRolo) e é puxada para o olho (uFunil); a água gira em volta do ponto do
        // feixe mais rápido perto do centro (como um vórtice de verdade: a velocidade cresce para dentro)
        vec2 sc0 = vec2((vUv.x - 0.5) * uTelaAsp, vUv.y - 0.5);
        vec2 sc = gira(uRolo) * sc0 / (1.0 + uFunil * 4.0);
        float r0 = length(sc);
        sc = gira(uFase * uGira / (1.0 + r0 * 9.0)) * sc;
        vec2 vU = vec2(sc.x / uTelaAsp, sc.y) + 0.5;
        // olhar para a água: a janela fecha no reflexo e a linha do lago sai por cima
        float jan = mix(0.6, 0.2, uOlha), y0 = mix(mix(0.4, 0.0, uProg), 0.025, uOlha);
        vec2 uv = vec2((vU.x - 0.5) * uTelaAsp * jan / ASP + 0.5, y0 + vU.y * jan);
        float onda = uOlha * 0.6 + uGira * 0.8;
        uv += vec2(sin(uv.y * 160.0 + uT * 2.2) * 0.0025, sin(uv.x * 90.0 + uT * 1.7) * 0.0015) * onda;
        float lado = abs(uv.x - 0.5), nucleo = smoothstep(0.035, 0.0, lado), fumaca = smoothstep(0.02, 0.06, lado) * smoothstep(0.32, 0.1, lado);
        // fluxo: a fumaça sobe e gira em volta do feixe; duas fases cruzadas para nunca reiniciar de uma vez
        vec2 fl = vec2(snoise(vec3(uv * vec2(7.0, 3.0), uT * 0.12)), 1.0) * vec2(0.012, 0.03);
        float f1 = fract(uT * 0.06), f2 = fract(uT * 0.06 + 0.5), m = abs(f1 - 0.5) * 2.0;
        vec2 dz = vec2(snoise(vec3(uv * 5.0 + vec2(0.0, -uT * 0.08), uT * 0.2)), snoise(vec3(uv * 4.0 + 3.1, uT * 0.15))) * 0.008 * fumaca;
        vec3 a = texture2D(uMapa, uv - fl * f1 * fumaca + dz).rgb, b = texture2D(uMapa, uv - fl * f2 * fumaca + dz).rgb;
        vec3 c = mix(a, b, m);
        // elo A (r3, 04/11): do ponto de luz dispara um feixe fino de bordas suaves, para cima e para baixo; só depois
        // o fundo (a imagem) abre a partir dele, de dentro para fora, com uma frente de luz leve
        float fino = exp(-pow(lado / 0.0045, 2.0)) * 1.25 + exp(-pow(lado / 0.025, 2.0)) * 0.1;
        float meia = uDispara * 0.56, dy = abs(vUv.y - 0.5);
        float ponta = smoothstep(meia, meia - 0.05, dy) + exp(-pow(length(vec2((vUv.x - 0.5) * uTelaAsp, vUv.y - 0.5)) / 0.012, 2.0)) * (1.0 - uDispara) * 1.5;
        vec3 disparo = vec3(0.92, 0.95, 1.0) * fino * clamp(ponta, 0.0, 1.5);
        float abre = uNasce * 1.3 - lado * 2.0 + (snoise(vec3(uv * vec2(6.0, 2.5), uT * 0.3)) * 0.22) * (1.0 - uNasce);   // a borda da abertura é fumaça, não uma linha reta
        c = mix(disparo, c, smoothstep(0.0, 1.0, abre));
        // o lago ondula (só abaixo da linha da água) e o reflexo tremula
        if (uv.y < LAGO) { float r = sin((LAGO - uv.y) * 220.0 - uT * 1.6) * 0.004 * smoothstep(0.0, 0.08, LAGO - uv.y); c = texture2D(uMapa, uv + vec2(r, r * 0.3)).rgb; }
        c *= 1.0 + nucleo * (0.08 * sin(uT * 1.7) + 0.05 * sin(uT * 4.3));
        // saída (Vitrine → Quem somos): o feixe se recolhe de cima para baixo para dentro do lago, e a luz fica na água
        float linha = LAGO + (1.0 - uRecolhe) * 0.9;
        c *= 1.0 - uRecolhe * 0.88 * smoothstep(linha, linha + 0.08, uv.y);
        c += vec3(0.9, 0.95, 1.0) * exp(-pow((uv.x - 0.5) * 26.0, 2.0) - pow((uv.y - LAGO) * 34.0, 2.0)) * uRecolhe * 1.3;
        // o olho do redemoinho afunda (escuro no meio) e a espuma de luz desenha os braços da espiral
        if (uGira > 0.0) {
          float ang = atan(sc.y, sc.x), rr = length(sc);
          float braco = pow(0.5 + 0.5 * sin(ang * 3.0 - log(rr + 0.002) * 7.0), 10.0) * smoothstep(0.7, 0.03, rr);
          c += vec3(0.82, 0.88, 0.95) * braco * uGira * (0.18 + 0.25 * uFunil);
          c *= 1.0 - uGira * 0.92 * smoothstep(0.03 + 0.16 * uGira, 0.0, rr);
          c *= 1.0 - 0.7 * smoothstep(0.55, 1.0, uFunil);
        }
        // as bordas somem no fundo da cena (nunca um retângulo)
        float aX = smoothstep(0.0, 0.16, uv.x) * smoothstep(1.0, 0.84, uv.x), aY = smoothstep(0.0, 0.06, vUv.y) * smoothstep(1.0, 0.94, vUv.y);
        float borda = aX * aY * (uv.x > 0.0 && uv.x < 1.0 ? 1.0 : 0.0); c = max(c - vec3(0.025), 0.0) * borda;   // o preto da imagem vira transparente
        gl_FragColor = vec4(c, clamp(max(c.r, max(c.g, c.b)) * 1.6, 0.0, 1.0));
      }`}));E.renderOrder=-1,E.frustumCulled=!1,c.add(E),s.add(c);let D=a?900:2200,k=new Float32Array(D*3);for(let e=0;e<D;e++)k.set([Math.random()*Math.PI*2,Math.random(),.25+Math.random()**1.6*1.4],e*3);let ee=new M;ee.setAttribute(`position`,new _e(k,3));let te=new ve(ee,new p({uniforms:{uT:l,uY0:{value:7},uH:{value:14-m},uPx:{value:o.getPixelRatio()},uAlfa:{value:1}},transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT, uY0, uH, uPx, uAlfa; varying float vA;
      void main(){ float a = position.x + uT * 0.35 + position.y * 40.0, r = position.z; float y = uY0 - mod(position.y * uH + uT * 0.55, uH);
        vec4 w = modelMatrix * vec4(cos(a) * r, y, sin(a) * r, 1.0), mv = viewMatrix * w; vA = (0.35 + 0.65 * fract(position.y * 97.0)) * exp(-w.y * w.y * 0.03) * uAlfa;
        gl_PointSize = uPx * (1.2 + fract(position.y * 31.0) * 2.0) * (6.0 / max(-mv.z, 1.0)); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying float vA; void main(){ vec2 c = gl_PointCoord - 0.5; if (dot(c, c) > 0.25) discard; gl_FragColor = vec4(vec3(0.9, 0.93, 1.0) * vA, 1.0); }`}));te.frustumCulled=!1,u.add(te);let j=new re(jn,Mn,1,1),N=new A(new Uint8Array([24,26,30,255]),1,1);N.needsUpdate=!0;let ne=new i,ie=new d,oe=t.map((e,t)=>{let n=N,i=null,a=N;e.imagem&&(n=new T().load(e.imagem),n.colorSpace=``),e.video&&(i=document.createElement(`video`),Object.assign(i,{muted:!0,loop:!0,playsInline:!0,preload:`none`}),i.dataset.src=e.video,a=new O(i),a.colorSpace=``,e.imagem||(n=a));let o=new p({uniforms:{uT:l,uMapa:{value:n},uVid:{value:a},uUsaVid:{value:0},uSemente:{value:t*3.7},uAparece:{value:1},uTem:{value:e.imagem||e.video?1:0},uHover:{value:0},uFoco:{value:0},uMx:{value:new d},uAsp:{value:jn/Mn}},transparent:!0,depthWrite:!1,side:2,vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:ke+`uniform sampler2D uMapa, uVid; uniform float uT, uTem, uHover, uFoco, uAsp, uUsaVid, uSemente, uAparece; uniform vec2 uMx; varying vec2 vUv;
        float caixa(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; }
        void main(){
          vec2 p = (vUv - 0.5) * vec2(uAsp, 1.0);
          float ang = atan(p.y, p.x);
          float onda = snoise(vec3(cos(ang) * 1.3, sin(ang) * 1.3, uT * 0.18 + uSemente)) * 0.05 + snoise(vec3(p * 3.0, uT * 0.12 + uSemente)) * 0.018;
          // a bolha (cantos muito redondos, borda viva); no hover ela toma forma de tela: retângulo limpo, sem ondular
          float h = smoothstep(0.0, 1.0, uHover);
          float d = caixa(p, vec2(uAsp * 0.5 - mix(0.07, 0.015, h), mix(0.43, 0.485, h)), mix(0.32, 0.05, h)) + onda * (1.0 - h);
          if (d > 0.0) discard;
          float borda = smoothstep(-0.014, 0.0, d), dentro = 1.0 - smoothstep(-0.026, -0.016, d);
          vec2 uv = (vUv - 0.5) * (0.92 - uHover * 0.04) + 0.5 + uMx * 0.015 * uHover + vec2(snoise(vec3(p * 4.0, uT * 0.2)), snoise(vec3(p * 4.0 + 5.0, uT * 0.2))) * 0.004 * (1.0 - uHover);
          vec3 img = mix(texture2D(uMapa, uv).rgb, texture2D(uVid, uv).rgb, uUsaVid) * uTem;
          float cinza = dot(img, vec3(0.299, 0.587, 0.114)); img = mix(vec3(cinza), img, 0.2 + 0.6 * uHover);
          // os veios bio-orgânicos (as cristas do ruído, como a matéria viva do Quem somos), mais fortes perto da borda
          vec3 q = vec3(p * 3.2, uT * 0.08 + uSemente);
          float veio = pow(1.0 - abs(snoise(q + snoise(q * 0.7) * 0.6)), 9.0), cel = pow(1.0 - abs(snoise(q * 2.4 + 2.0)), 14.0);
          float perto = smoothstep(-0.25, 0.0, d);
          vec3 c = img * (0.7 + 0.4 * uHover);
          c += vec3(0.72, 0.8, 0.92) * (veio * (0.18 + 0.3 * perto) + cel * 0.12) * (1.0 - h);   // no hover, nenhuma textura: só a imagem
          // a borda fina pega a luz; um brilho iridescente bem leve, como a borda da pedra
          vec2 n = normalize(p + 1e-4);
          vec3 iris = 0.5 + 0.5 * cos(6.2831 * (ang * 0.16 + vec3(0.0, 0.33, 0.67)) + uT * 0.3);
          c = mix(c, mix(vec3(0.92, 0.95, 1.0), iris, 0.2 * (1.0 - h)) * (0.55 + 0.45 * clamp(dot(n, normalize(vec2(-0.55, 0.85))), 0.0, 1.0)), borda * (0.7 - 0.25 * h));
          float faixa = vUv.x + vUv.y * 0.55 - (0.25 + uMx.x * 0.3 + fract(uT * 0.18) * 1.8 * uHover);
          c += vec3(1.0) * smoothstep(0.07, 0.0, abs(faixa)) * (0.05 + 0.14 * uHover) * dentro;
          // transparência: o conteúdo deixa o feixe passar; com o mouse, a tela fica quase sólida
          float alfa = mix(0.42 + 0.18 * veio, 1.0, h) * dentro + borda * 0.9;
          gl_FragColor = vec4(c * (0.4 + 0.6 * uFoco), alfa * (0.45 + 0.55 * uFoco) * uAparece);
        }`}),s=new P(j,o);s.renderOrder=2;let c=t*On,f=-t*kn,m=new r;return m.position.set(Math.sin(c)*An,f,Math.cos(c)*An),m.rotation.y=c,m.add(s),u.add(m),s.userData.i=t,{m:s,mat:o,base:m,video:i,hover:0,foco:0}}),F=0,ce=0,le=0,I=!1,ue=0,fe=0,pe=null,L=0,R=0,me=0,he={x:0,y:0,dentro:!1},ge=-1;function ye(){let t=e.clientWidth,n=e.clientHeight;if(!t)return;o.setSize(t,n,!1),c.aspect=t/n,c.position.set(0,.35,An+(t/n<1?7.4:5.6)),c.lookAt(0,-.1,0),c.updateProjectionMatrix();let r=40*Math.tan(c.fov*Math.PI/360);E.position.set(0,0,-20),E.scale.set(r*c.aspect,r,1),E.material.uniforms.uTelaAsp.value=c.aspect}ye(),addEventListener(`resize`,ye),e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect();he.x=(t.clientX-n.left)/n.width*2-1,he.y=-((t.clientY-n.top)/n.height)*2+1,he.dentro=!0}),e.addEventListener(`pointerleave`,()=>{he.dentro=!1}),e.addEventListener(`click`,()=>{ge>=0&&n?.(ge,ge===me)});function be(e,t){e.video&&(t?(e.video.src||(e.video.src=e.video.dataset.src),e.video.play().catch(()=>{})):e.video.paused||e.video.pause())}function xe(t,n=0,r=0){l.value=t;let i=L?(performance.now()-L)/1e3:9;i<bn||(R+=(me-R)*(ue?.05:I?.035:i<4?.022:.06)),ue||(_.value+=(+!!I-_.value)*.03),y.value=L?1-(1-hn((i-_n)/vn))**3:1,v.value=L?hn((i-yn[0])/(yn[1]-yn[0])):1,te.material.uniforms.uAlfa.value=L?hn((i-yn[0]-.4)/1.2):1,i>=xn&&(L=0),u.rotation.y=-R*On+Math.sin(t*.25)*.03,u.position.y=R*kn,g.value=f>1?hn(R/(f-1))*.55:0;let a=0;if(ue){let e=(performance.now()-ue)/1e3,t=gn((e-Cn[0])/(Cn[1]-Cn[0]));a=gn(e/Sn),g.value=fe+(1-fe)*t,b.value=gn((e-wn[0])/(wn[1]-wn[0])),x.value=gn((e-Tn[0])/(Tn[1]-Tn[0])),S.value=hn((e-En[0])/(En[1]-En[0]))**1.6;let n=Math.min(.05,(performance.now()-(F||performance.now()))/1e3);if(F=performance.now(),ce=4+16*x.value*x.value+10*S.value,le=1.6*gn(e/.6)+3.4*S.value,C.value+=ce*n,w.value+=le*n,te.material.uniforms.uAlfa.value=1-b.value,u.position.y+=2.5*t,e>=Dn&&pe){let e=pe;pe=null,e()}}u.position.x=n*-.15*(1-a),ne.setFromCamera(ie.set(he.x,he.y),c);let d=he.dentro?ne.intersectObjects(oe.map(e=>e.m))[0]:null;ge=d?d.object.userData.i:-1,e.style.cursor=ge>=0?`pointer`:``,oe.forEach((e,t)=>{let o=Math.abs(t-R);e.foco+=(hn(1-o*.75)-e.foco)*.1,e.hover+=(+(ge===t)-e.hover)*.04,e.mat.uniforms.uFoco.value=e.foco,e.mat.uniforms.uHover.value=e.hover,e.mat.uniforms.uAparece.value=hn((i-bn-t*.12)/1.3),e.mat.uniforms.uAparece.value*=1-a,e.mat.uniforms.uMx.value.set(n*2,-r*2),e.m.position.z=e.hover*.25+(t===me?.1:0),e.m.rotation.y=e.hover*n*.25,e.m.rotation.x=-e.hover*r*.18,be(e,t===me||ge===t);let s=e.video&&!e.video.paused&&e.video.readyState>=2?1:0;e.mat.uniforms.uUsaVid.value+=(s-e.mat.uniforms.uUsaVid.value)*.08}),o.render(s,c)}return{render:xe,tamanho:ye,pronto:Ie(o,s,c),vai(e){I=!1,me=hn(e,0,f-1)},pausa(){oe.forEach(e=>be(e,!1))},chegada(e=!1){I=!1,ue=0,pe=null,b.value=x.value=S.value=C.value=w.value=0,F=0,R=-2.6,me=0,_.value=0,e&&(L=performance.now(),R=-3.4)},sai(){I=!0,me=f-1+2.4},queda(e){ue=performance.now(),fe=g.value,pe=e,me=R,F=0,C.value=w.value=0},get giro(){return{wRolo:le,wFase:ce,rolo:w.value}},reseta(){ue=0,pe=null,I=!1,_.value=0,b.value=x.value=S.value=C.value=w.value=0,F=0},volta(){I=!1,ue=0,pe=null,b.value=x.value=S.value=C.value=w.value=0,F=0,R=f-1+1.6,me=f-1,_.value=0}}}var Pn=(()=>{let e=new URLSearchParams(location.search).get(`nascer`);return e===`video`?null:e===`campo`?`campo`:`lago`})(),Fn=null,In=1,Ln=matchMedia(`(prefers-reduced-motion: reduce)`).matches,Rn=matchMedia(`(pointer: coarse)`).matches,zn=document.querySelector(`[data-palco]`),B=[...document.querySelectorAll(`[data-cena]`)],Bn=[`Energia`,`A forma`,`Manifesto`,`Nascer`,`Valores`,`Arrumar a sala`,`Como funciona`,`Confiança`,`Convite`,`Vitrine`,`Quem somos`],Vn=[0,1,2,3,4,5,6,9,10,7,8],Hn=e=>Vn.indexOf(e),Un=(e,t)=>Vn[Hn(e)+t],Wn=document.querySelector(`[data-nome-cena]`),Gn=document.querySelector(`[data-num]`),Kn=document.querySelector(`[data-impulso]`),qn=document.querySelector(`#aberra`),Jn=qn.querySelector(`[data-dx="r"]`),Yn=qn.querySelector(`[data-dx="b"]`),V=document.getElementById(`simbolo-global`),H=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),U=e=>(e=H(e),e*e*(3-2*e));function Xn(e){e.querySelectorAll(`video[data-src]`).forEach(e=>{e.src||(e.src=e.dataset.src,e.hasAttribute(`data-espera`)?e.load():e.play?.().catch(()=>{}))})}var Zn=`abcdefghijklmnopqrstuvwxyz0123456789/_·`,Qn=_t(document.querySelector(`[data-poeira]`)),$n=_t(document.querySelector(`[data-q0]`)),er=_t(document.querySelector(`[data-rotanel="1"] .valor__f`)),tr=!1,nr=!1;function rr(e,t=!1){let n=e.dataset.alvo||e.textContent;if(e.dataset.alvo=n,Ln)return;let r=0,i=()=>{r++,t&&r%2==0&&r<24&&$.tique(r/24);let a=Math.floor(r/24*n.length);e.textContent=[...n].map((e,t)=>t<a||e===` `?e:Zn[Math.random()*39|0]).join(``),r<24?requestAnimationFrame(i):e.textContent=n};i()}var ir=(e,t=0)=>e.querySelectorAll(`[data-decode]`).forEach((e,n)=>setTimeout(()=>rr(e),t+n*180));ir(document.querySelector(`.hud--tl`),400);function ar(e){Jn.setAttribute(`dx`,(-e*14).toFixed(1)),Yn.setAttribute(`dx`,(e*14).toFixed(1))}var W=0,G=!1,or=0,sr=null,cr=null,lr=0,ur=!1,dr=!1,fr=!1,pr=0,mr=0,hr=document.createElement(`div`);hr.className=`iris-aro`,hr.setAttribute(`aria-hidden`,`true`),document.body.appendChild(hr);function gr(e,t,n,r=1300,i=0){t.style.transition=`none`,t.style.zIndex=6,t.style.clipPath=`circle(0px at 50% 50%)`,t.classList.add(`ativa`),requestAnimationFrame(()=>{let[a,o]=typeof n==`function`?n():n,s=Math.hypot(Math.max(a,innerWidth-a),Math.max(o,innerHeight-o))+40,c=`cubic-bezier(.65,0,.25,1)`,l=t.animate([{clipPath:`circle(${i}px at ${a}px ${o}px)`},{clipPath:`circle(${s}px at ${a}px ${o}px)`}],{duration:r,easing:c,fill:`forwards`});hr.style.left=`${a}px`,hr.style.top=`${o}px`,hr.animate([{width:`${i*2}px`,height:`${i*2}px`,opacity:1},{width:`${s*2}px`,height:`${s*2}px`,opacity:.9,offset:.85},{width:`${s*2}px`,height:`${s*2}px`,opacity:0}],{duration:r,easing:c,fill:`forwards`}),l.onfinish=()=>{e.style.transition=`none`,e.classList.remove(`ativa`),t.style.clipPath=``,t.style.zIndex=``,l.cancel(),requestAnimationFrame(()=>{e.style.transition=t.style.transition=``})}})}function _r(e){if(e==null||G||e===W||e<0||e>=B.length)return;G=!0,or=performance.now();let t=B[W],n=B[e],r=W;Xn(n),r===1&&e===2&&!di&&(sr={t0:performance.now()});let i=r===2&&e===3,a=r===3&&e===4,o=cr&&e===r+1,s=ur&&(r===4&&e===5||r===5&&e===6),c=r===8&&e===1||r===7&&e===8&&dr,l={"6-9":60,"9-10":350,"10-7":350},u=[`9-6`,`10-9`,`7-10`,`8-7`],d=`${r}-${e}`,f=fr&&l[d]!=null,p=f||u.includes(d),m=l[d]??900;if(fr=!1,dr=!1,p)n.style.transition=`none`,n.classList.add(`ativa`),t.style.zIndex=5,t.classList.add(`saiu`),setTimeout(()=>t.classList.remove(`saiu`),1300),t.animate(f?[{opacity:1},{opacity:0}]:[{opacity:1,transform:`scale(1)`,filter:`blur(0px)`},{opacity:0,transform:`scale(1.06)`,filter:`blur(5px)`}],{duration:f?m:1200,easing:`cubic-bezier(.45,0,.35,1)`,fill:`forwards`}).onfinish=e=>{t.style.transition=`none`,t.classList.remove(`ativa`),t.style.zIndex=``,e.target.cancel(),requestAnimationFrame(()=>{t.style.transition=n.style.transition=``})};else if(c)n.style.transition=`none`,n.classList.add(`ativa`),t.style.zIndex=5,t.classList.add(`saiu`),setTimeout(()=>t.classList.remove(`saiu`),1700),t.animate([{opacity:1,transform:`scale(1)`,filter:`blur(0px)`},{opacity:0,transform:`scale(1.08)`,filter:`blur(6px)`}],{duration:1600,easing:`cubic-bezier(.65,0,.35,1)`,fill:`forwards`}).onfinish=e=>{t.style.transition=`none`,t.classList.remove(`ativa`),t.style.zIndex=``,e.target.cancel(),requestAnimationFrame(()=>{t.style.transition=n.style.transition=``})};else if(s)ur=!1,n.style.transition=`none`,n.classList.add(`ativa`),t.style.zIndex=5,t.animate([{filter:`brightness(1)`,opacity:1},{filter:`brightness(4)`,opacity:1,offset:.4},{filter:`brightness(5)`,opacity:0}],{duration:r===5?1100:900,easing:`ease-out`,fill:`forwards`}).onfinish=e=>{t.style.transition=`none`,t.classList.remove(`ativa`),t.style.zIndex=``,e.target.cancel(),requestAnimationFrame(()=>{t.style.transition=n.style.transition=``})};else if(o)gr(t,n,cr,1300,lr),cr=null,lr=0;else if(a){t.style.zIndex=5,t.style.transition=`none`,Pn||X.pause();let e=Pn===`lago`?[{opacity:1},{opacity:0}]:[{transform:`scale(1)`,opacity:1,filter:`blur(0px)`},{transform:`scale(1.6)`,opacity:.6,filter:`blur(2px)`,offset:.55},{transform:`scale(2.2)`,opacity:0,filter:`blur(8px)`}];Pn===`lago`?t.classList.remove(`ativa`):t.animate(e,{duration:850,easing:`cubic-bezier(.45,0,.75,.7)`,fill:`forwards`}).onfinish=e=>{t.classList.remove(`ativa`),e.target.cancel()},n.style.transition=`none`,n.classList.add(`ativa`),setTimeout(()=>{t.style.zIndex=``,t.style.transform=``,t.style.transition=``,n.style.transition=``},1200)}else if(di)t.style.zIndex=5,n.style.transition=`none`,n.classList.add(`ativa`),requestAnimationFrame(()=>requestAnimationFrame(()=>{n.style.transition=``}));else if(i)t.style.transition=n.style.transition=`none`,t.classList.remove(`ativa`),n.classList.add(`ativa`),requestAnimationFrame(()=>requestAnimationFrame(()=>{t.style.transition=n.style.transition=``}));else{zn.classList.add(`trans`);let e=performance.now(),r=t=>{let n=(t-e)/900;ar(Math.sin(Math.min(1,n)*Math.PI)),n<1?requestAnimationFrame(r):(ar(0),zn.classList.remove(`trans`))};requestAnimationFrame(r),t.classList.remove(`ativa`),t.classList.add(`saiu`),setTimeout(()=>t.classList.remove(`saiu`),1200),n.classList.add(`ativa`)}let h=os.hidden?null:os.getBoundingClientRect();if(document.body.dataset.cena=e,ns(e),h){let e=os.getBoundingClientRect(),t=h.left-e.left,n=h.top-e.top;Math.abs(t)+Math.abs(n)>2&&os.animate?.([{transform:`translate(${t}px,${n}px)`},{transform:`none`}],{duration:1100,easing:`cubic-bezier(.65,0,.25,1)`})}cr=null,$.cena(e),!i&&!a&&$.sopro(e===4||e===6?1.2:.8),pc(e),W=e,Wn.textContent=Bn[e],Gn.textContent=String(Hn(e)).padStart(2,`0`),ir(n,500),Ho(e,r),setTimeout(()=>{G=!1,K=0},1e3)}var vr={2:5,6:5,7:1,8:1,9:6},yr={};function br(e,t){let n=B[e];n.dataset.passo=t,n.querySelectorAll(`[data-p]`).forEach(e=>e.classList.toggle(`ve`,e.dataset.p.split(`,`).map(Number).includes(t))),xr[e]?.(t)}var xr={};function Sr(e){let t=vr[W];if(!t)return!1;let n=(yr[W]??0)+e;return n<0||n>=t?!1:(yr[W]=n,br(W,n),K=0,Mr(),!0)}var Cr=0,wr=!1,Tr=e=>{Cr=Math.max(Cr,performance.now()+e)};function Er(){return!!(performance.now()<Cr||wr||W===3&&ka===`video`||W===3&&Pn===`lago`&&Fa===2&&Y>=Ba||W===4&&Ja||W===6&&lo||W===10&&Z?.estado===1||pr||mr||ko||Rs)}var K=0,Dr=240,Or=!1,kr=!1,Ar=0,jr=0;function Mr(){kr=!0,Ar=performance.now()}function Nr(){let e=performance.now();return kr&&e-jr>220&&e-Ar>(W===4?1500:500)&&(kr=!1),jr=e,!kr}function Pr(e){if(G||kr||Er())return;if(W===3){if(ka===`voo`&&(ja=Math.max(1,ja+e*.004)),ka===`codigo`&&Fa===0){e>0&&(In=Math.min(3,In+e*.012));return}if(ka===`scrub`&&Fa===0){e>0&&(X.playbackRate=Math.min(3,X.playbackRate+e*.012));return}if((ka===`scrub`||ka===`codigo`)&&Fa===1){if(e<0){K+=e,K<-240&&(Mr(),_r(2));return}if(performance.now()-Ia<700)return;K+=e,K>Dr&&(Fa=2,K=0,is(),$.sopro(1.2));return}(ka===`scrub`||ka===`codigo`)&&Fa===2&&(Ma=H(Ma+e*(ka===`codigo`&&Pn===`lago`?28e-5:5e-4),Pa,1));return}if(W===0||W===5&&!Or)return;if(W===4){if(e>0){xa===1&&(performance.now()-Sa)/1e3>wa&&(xa=2,Ca=performance.now()),va=Math.min(1.4,va+e/600),ya&&$a();return}K+=e,K<-384&&(Mr(),_r(2));return}K+=e;let t=W===4?Dr*1.6:Dr;if(K>t||K<-t){let e=K>0?1:-1;if(Mr(),W===2&&e>0){Ji(),K=0;return}if(W===1&&e>0){Si(),K=0;return}if(W===6&&e>0&&(yr[6]??0)===vr[6]-1){po(),K=0;return}if(W===9&&Co){Eo(),K=0;return}if(W===10&&e>0&&Z&&Z.estado<2){zo(),K=0;return}if(W===10&&Z&&Z.foco>=0){Z.desfoca(),K=0;return}if(W===9&&e>0&&(yr[9]??0)===vr[9]-1){Po(),K=0;return}if(W===10&&e>0&&Z?.estado===2){Lo(),K=0;return}if(W===7&&e>0){Ys(),K=0;return}if(Sr(e))return;if(W===5&&e<0){K=0;return}_r(Un(W,e))}}addEventListener(`wheel`,e=>{if(Er()){e.preventDefault();return}if(W===5&&!Or||(e.preventDefault(),!Nr()))return;let t=e.deltaY*(e.deltaMode?40:1);Pr(Math.sign(t)*Math.min(120,Math.abs(t)))},{passive:!1});var Fr=null,Ir=null,Lr=null;addEventListener(`touchstart`,e=>{Fr=Lr=e.touches[0].clientY,Ir=e.touches[0].clientX,performance.now()-Ar>450&&(kr=!1)},{passive:!0}),addEventListener(`touchmove`,e=>{if(Fr==null||W===5&&!Or)return;let t=e.touches[0].clientY,n=e.touches[0].clientX,r=(Fr-t)*2.5;Fr=t,(W===6||W===9)&&Math.abs(n-Ir)>Math.abs(t-Lr)?!kr&&Math.abs(n-Ir)>50&&(Mr(),Sr(n<Ir?1:-1)):(jr=performance.now(),Pr(r))},{passive:!0}),addEventListener(`keydown`,e=>{Er()?[`ArrowDown`,`PageDown`,` `,`ArrowUp`,`PageUp`].includes(e.key)&&e.preventDefault():W===5&&!Or||e.repeat||([`ArrowDown`,`PageDown`,` `].includes(e.key)&&!(e.key===` `&&e.target.closest?.(`button,a`))&&(e.preventDefault(),kr=!1,Pr(241)),[`ArrowUp`,`PageUp`].includes(e.key)&&(kr=!1,Pr(-241)))});var Rr=!1;addEventListener(`pointermove`,()=>{Rr=!0},{passive:!0});var zr=0,Br=0,Vr=0,Hr=0,Ur=0,Wr=0,Gr=0,Kr=0,qr=0;addEventListener(`pointermove`,e=>{if(Br=e.clientX/innerWidth-.5,Vr=e.clientY/innerHeight-.5,W===1&&ai){ai.mouse(e.clientX/innerWidth,e.clientY/innerHeight);let t=performance.now();t-Kr>260&&(Gr=0),Kr=t,Gr+=Math.hypot(e.movementX||0,e.movementY||0)/Math.max(innerWidth,innerHeight),Hr+=Math.hypot(e.movementX||0,e.movementY||0)/Math.max(innerWidth,innerHeight)}});var Jr=document.querySelector(`[data-energia]`),q=Jr.getContext(`2d`),Yr=document.querySelector(`[data-pct]`),Xr=performance.now(),Zr=0,Qr=Xr,$r=0,ei=1,ti=!1,ni=Array.from({length:90},()=>({a:Math.random()*Math.PI*2,v:.6+Math.random()*1.4,s:Math.random()}));function ri(e){if(W!==0)return;let t=Math.min(devicePixelRatio||1,2),n=Jr.clientWidth*t,r=Jr.clientHeight*t;Jr.width!==n&&(Jr.width=n,Jr.height=r);let i=Math.min(.25,(e-Qr)/1e3);Qr=e;let a=ti||e-Xr>15e3?9:.3+$r/ei*.52;Zr=Math.min(Zr+i/3.2,Math.max(Zr,a));let o=window.CICCLOS_ONDA,s=Zr,c=V.getBoundingClientRect(),l=c.width*t,u=o.raio*l,d=(c.left+c.width/2)*t,f=(c.top+c.height/2)*t;q.clearRect(0,0,n,r);let p=H(s/.6),m=H((s-.45)/.5),h=H((s-.95)/.2);V.style.opacity=U(H((s-.88)/.25)).toFixed(3);for(let n=0;n<22;n++){let r=n/21,i=H(p*1.4-r*.4)*Math.PI*2;q.beginPath();for(let t=0;t<=120;t++){let n=-Math.PI/2+t/120*i,a=u*o.r(n,e/1e3,r,.6+m*.4),s=d+a*Math.cos(n),c=f+a*Math.sin(n)*.985;t?q.lineTo(s,c):q.moveTo(s,c)}q.strokeStyle=`rgba(255,255,255,${((.12+m*.5*(1-r*.5))*(1-h)).toFixed(3)})`,q.lineWidth=t*(.6+m*.8),q.stroke()}if(m>0&&h<1){let i=-Math.PI/2+e/380%(Math.PI*2),a=u*o.r(i,e/1e3,0,1),s=d+a*Math.cos(i),c=f+a*Math.sin(i),l=q.createRadialGradient(s,c,0,s,c,70*t);l.addColorStop(0,`rgba(255,255,255,${m*(1-h)})`),l.addColorStop(1,`rgba(255,255,255,0)`),q.fillStyle=l,q.fillRect(0,0,n,r)}if(s>.85){let e=H((s-.85)/.3),n=u*(1+e*2.4);q.strokeStyle=`rgba(255,255,255,${(.6*(1-e)).toFixed(3)})`,q.lineWidth=t*(6*(1-e)+.5),q.beginPath(),q.arc(d,f,n,0,Math.PI*2),q.stroke(),ni.forEach(n=>{let r=u*(1+e*n.v*2.2);q.fillStyle=`rgba(255,255,255,${(.8*(1-e)*n.s).toFixed(3)})`,q.fillRect(d+Math.cos(n.a)*r,f+Math.sin(n.a)*r,2*t,2*t)})}q.fillStyle=`rgba(200,200,195,${(.6*(1-h)).toFixed(3)})`,q.font=`600 ${10*t}px Manrope Variable, sans-serif`,q.letterSpacing=`${2*t}px`;let g=H(p*1.4)*Math.PI*2;[[-.9,`perceber`],[.55,`ler`],[2.1,`arrumar`],[3.7,`soltar`]].forEach(([e,n])=>{let r=((e+Math.PI/2)%(Math.PI*2)+Math.PI*2)%(Math.PI*2),i=H((g-r)/.7)*(1-h);if(i<=0)return;let a=d+Math.cos(e)*u*1.5,o=f+Math.sin(e)*u*1.5;q.fillStyle=`rgba(225,225,220,${(.85*i).toFixed(3)})`,q.textAlign=Math.cos(e)<-.2?`right`:Math.cos(e)>.2?`left`:`center`,q.fillText(n.toUpperCase(),a,o+(1-i)*8*t),q.strokeStyle=`rgba(200,200,195,${(.3*i).toFixed(3)})`,q.lineWidth=t,q.beginPath(),q.moveTo(d+Math.cos(e)*u*1.12,f+Math.sin(e)*u*1.12),q.lineTo(d+Math.cos(e)*u*(1.12+.25*i),f+Math.sin(e)*u*(1.12+.25*i)),q.stroke()}),q.textAlign=`left`,Yr.textContent=String(Math.round(H(s)*100)).padStart(3,`0`),Yr.style.opacity=1-h,s>=1.18?_r(1):requestAnimationFrame(ri)}Xn(B[1]),requestAnimationFrame(ri),document.querySelector(`[data-raio]`);var ii=document.querySelector(`[data-herovid]`),ai=null,oi=.2,si=.6,ci=!1;V.addEventListener(`pointerenter`,()=>{ci=!0}),V.addEventListener(`pointerleave`,()=>{ci=!1});try{ai=Qe(document.querySelector(`[data-herogl]`),ii)}catch(e){console.warn(`hero sem WebGL`,e)}var li=0,ui=null,di=!1,fi=!1,pi=null,mi=null,hi=null,gi=3.9,_i=2.3,vi=1.2;try{pi=St(document.querySelector(`[data-agua]`)),document.querySelector(`.orbe`).classList.add(`com-agua`)}catch(e){console.warn(`água sem WebGL`,e)}var yi=new Image;yi.src=`/cicclos-site/v3/orbe-00.jpg`;var bi=document.createElement(`div`);bi.className=`veu-luz`,bi.setAttribute(`aria-hidden`,`true`),document.body.appendChild(bi);var xi=document.createElement(`div`);xi.className=`veu-preto`,xi.setAttribute(`aria-hidden`,`true`),document.body.appendChild(xi);function Si(){if(ui||W!==1||G)return;Qn.desliga(),$.sopro(1.6),is(),Tr(4200);let e=performance.now(),t=!1;fi=!0,B[1].classList.add(`mergulhando`),V.style.transition=`none`,V.style.pointerEvents=`none`;let n=B[1];if(pi){let e=V.getBoundingClientRect(),t=(window.CICCLOS_ONDA?.raio??.3)*e.width;pi.anelDaTela((e.left+e.width/2)/innerWidth,(e.top+e.height/2)/innerHeight,t/innerHeight),hi={w:e.width,h:e.height,R:t}}mi=0,di=!0,G=!1,_r(2),n.animate([{opacity:1},{opacity:0}],{duration:450,easing:`ease-out`,fill:`forwards`}),ui=r=>{let i=(r-e)/1e3;mi=i,i>=1.1199999999999999&&!t&&(t=!0,$.sopro(1.8),zn.animate?.([{filter:`brightness(1)`},{filter:`brightness(2.4)`,offset:.3},{filter:`brightness(1)`}],{duration:650,easing:`ease-out`})),i>=_i&&Qi>r+1e6&&(Qi=r-650),pi||(xi.style.opacity=(.8*U((i-1.1)/.5)*(1-U((i-1.6)/.9))).toFixed(3)),i>.5&&n.classList.contains(`ativa`)&&n.classList.remove(`ativa`),i<gi?requestAnimationFrame(ui):(ui=null,di=!1,fi=!1,xi.style.opacity=0,mi=null,ai?.mergulho(0,0),ai?.camera(0,1,0),n.classList.remove(`mergulhando`),n.style.zIndex=``,n.getAnimations().forEach(e=>e.cancel()),n.style.transform=``,requestAnimationFrame(()=>n.style.transition=``),V.style.transform=``,V.style.clipPath=``,V.style.filter=``,V.style.opacity=0,W===2&&ns(2))},requestAnimationFrame(ui)}V.addEventListener(`click`,Si);var Ci=B[2],wi=Ci.querySelector(`[data-pedra]`),Ti=Ci.querySelector(`[data-alvo]`),Ei=Ci.querySelector(`[data-vida]`),Di=Ei.querySelector(`video`),Oi=Ei.querySelector(`[data-pix]`),ki=Oi.getContext(`2d`),Ai=Ci.querySelector(`[data-pixluz]`),ji=Ci.querySelector(`[data-casca]`),Mi=[...Ci.querySelectorAll(`[data-rot]`)],Ni=0,Pi=0,Fi=50,Ii=50,Li=!1,Ri=0,zi=0,Bi=.76,Vi=200,Hi=240;function Ui(){let e=wi.offsetWidth,t=wi.offsetHeight;if(!e||!t)return;let n=Math.max(e/1600,t/900),r=294*n,i=355.5*n;Ei.style.width=`${(2*r).toFixed(1)}px`,Ei.style.height=`${(2*i).toFixed(1)}px`,Vi=r*Bi,Hi=i*Bi}addEventListener(`resize`,Ui),Ti.style.cursor=`crosshair`;function Wi(){W===2&&$i&&!Ki&&(Mi[0].classList.add(`ve`),Mi[0]._d||(Mi[0]._d=1,ir(Mi[0])))}Ti.addEventListener(`pointerenter`,()=>{Li=!0,Wi()}),Ti.addEventListener(`pointerleave`,()=>{Li=!1,(yr[2]??0)===0&&Mi[0].classList.remove(`ve`)}),Ti.addEventListener(`pointermove`,e=>{let t=Ei.getBoundingClientRect();Fi=(e.clientX-t.left)/t.width*100,Ii=(e.clientY-t.top)/t.height*100}),Ti.setAttribute(`role`,`button`),Ti.setAttribute(`tabindex`,`0`),Ti.setAttribute(`aria-label`,`Clique na pedra para continuar`);var Gi=null,Ki=0;function qi(){if(W!==2||G||Er()||performance.now()-Qi<700)return;ec=performance.now(),nc(),is();let e=yr[2]??0;e<vr[2]-1?(yr[2]=e+1,br(2,e+1),$.sino(e),Ei.animate?.([{filter:`brightness(2.2)`},{filter:`brightness(1)`}],{duration:700,easing:`ease-out`})):Ki||(Ki=performance.now(),nc(),$.nasce(),Tr(2600),Gi?.final(!!pi))}Ti.addEventListener(`click`,qi),Ti.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),qi())});function Ji(){Mi[1].classList.remove(`ve`),Mi[1].offsetWidth,Mi[1].classList.add(`ve`),Ti.animate?.([{transform:`translate(-50%,-50%) scale(1)`},{transform:`translate(-50%,-50%) scale(1.04)`},{transform:`translate(-50%,-50%) scale(1)`}],{duration:500}),wi.animate?.([{filter:`brightness(1)`},{filter:`brightness(1.25)`},{filter:`brightness(1)`}],{duration:600})}var Yi=[[`Ciclo_00 / Percepção`,`Ser visto como merece`],[`Ciclo_01 / Raio-X`,`Onde estão dados e gargalos`],[`Ciclo_02 / Arrumar a sala`,`Base organizada · IA no dia a dia`],[`Ciclo_03 / Órbita livre`,`O time segue sozinho`],[`Ciclo_04 / Renascer`,`Um novo ciclo espera por você`]];function Xi(e){let t=Mi[0].querySelectorAll(`[data-decode]`);Yi[e]&&(t[0].dataset.alvo=Yi[e][0],t[1].dataset.alvo=Yi[e][1],Mi[0].classList.add(`ve`),rr(t[0],!0),setTimeout(()=>rr(t[1],!0),160))}xr[2]=e=>{Xi(e),Ri=Math.min(e,4)/4,zi=+(e>=4),e<4?(Di.playbackRate=1,Di.play?.().catch(()=>{})):(Di.playbackRate=1,Di.currentTime=Zi-.42,Di.play?.().catch(()=>{})),Ci.classList.remove(`noite`),Ai.classList.remove(`ve`),e>=1&&Mi[1].classList.remove(`ve`)};var J={s:1,v:0,y:0,vy:0,b:0},Zi=4.7,Qi=0,$i=!1,ea=B[3],ta=ea.querySelector(`[data-queda]`),na=ta.getContext(`2d`),ra=ea.querySelector(`[data-q0]`),ia=ea.querySelector(`[data-q1]`),aa=ea.querySelector(`[data-q2]`),oa=Ci.querySelector(`.orbe__pedra video`),sa=null,ca=ea.querySelector(`[data-montanha]`),la=0,ua=15.75,da=2.5,fa=!1,pa=!1,ma=!1,ha=null,ga=-.05,_a=0,va=0,ya=!1,ba=0,xa=0,Sa=0,Ca=0,wa=2.8,Ta=3.8,Ea=[.144,.45,.756],Da=.07,Oa=0,ka=`voo`,Aa=1,ja=1,Y=0,Ma=0,Na=0,Pa=5/14.5,Fa=0,Ia=0,La=.018,Ra=2800,za=13.55/14.5,Ba=.7870689655172415,X=document.querySelector(`[data-voo]`),Va=document.querySelector(`[data-quebra]`),Ha=document.querySelector(`[data-veubranco]`),Ua=document.querySelector(`[data-telaflutua]`),Wa=Ua.querySelector(`video`);Ua.querySelector(`[data-telacv]`).getContext(`2d`);var Ga=0,Ka=!1,qa=0,Ja=!1;function Ya(){ya=!0,clearTimeout(Ga),Ka||(Ga=setTimeout(()=>{W===4&&ya&&!Ka&&es(Rn?`Arraste a luz sobre o planeta · achou a porta, você entra`:`Passe a luz sobre o planeta · achou a porta, você entra`,`porta`)},200))}var Xa=document.querySelector(`[data-fenda]`),Za=0;function Qa(){W===4&&ya&&!Za&&(Za=performance.now(),Xa.classList.remove(`ve`),$.impacto(),$.sopro(1.8),Ja=!0,setTimeout(()=>{_a=1.02},650),zn.animate?.([{filter:`brightness(1)`},{filter:`brightness(2.4)`},{filter:`brightness(1)`}],{duration:900,easing:`ease-out`}))}function $a(){ya&&Xa.animate?.([{transform:`translate(-50%,-50%) scale(1)`},{transform:`translate(-50%,-50%) scale(1.12)`},{transform:`translate(-50%,-50%) scale(1)`}],{duration:500})}Xa.addEventListener(`click`,Qa);var eo=[...document.querySelectorAll(`[data-rotanel]`)],to=null,no=[...document.querySelectorAll(`[data-servico]`)];no.forEach(e=>{let t=document.createElement(`button`);t.type=`button`,t.className=`fecha`,t.setAttribute(`aria-label`,`Fechar`),t.textContent=`×`,t.addEventListener(`click`,()=>e.classList.remove(`ve`)),e.appendChild(t),e.addEventListener(`pointerdown`,e=>e.stopPropagation())});var ro=[!1,!1,!1];function io(e){no.forEach((t,n)=>t.classList.toggle(`ve`,n===e)),ir(no[e]),setTimeout(()=>{ro[e]=!0,to?.atualiza()},1200)}document.querySelector(`[data-recomecar]`).addEventListener(`pointerdown`,e=>e.stopPropagation());var ao=``,oo=[];function so(){to?.atalho()&&($.sino(5),setTimeout(()=>$.sino(3),160),$.sopro(1.6),zn.animate?.([{filter:`brightness(1)`},{filter:`brightness(1.9)`},{filter:`brightness(1)`}],{duration:900,easing:`ease-out`}))}addEventListener(`keydown`,e=>{W===5&&e.key.length===1&&(ao=(ao+e.key.toLowerCase()).slice(-6),ao===`cicclo`&&(ao=``,so()))}),document.querySelector(`[data-mapa]`).addEventListener(`pointerdown`,e=>{e.stopPropagation();let t=performance.now();oo=oo.filter(e=>t-e<900).concat(t),oo.length>=3&&(oo=[],so())}),document.querySelector(`[data-recomecar]`).addEventListener(`click`,()=>{to&&!Er()&&(ro.fill(!1),Or=!1,no.forEach(e=>e.classList.remove(`ve`)),document.querySelector(`.pular`).style.display=``,$.reiniciaMundo(),$.batida(!1),to.reinicia())}),document.querySelectorAll(`[data-seguir]`).forEach(e=>{e.addEventListener(`pointerdown`,e=>e.stopPropagation()),e.addEventListener(`click`,()=>{Er()||(Or=!0,ur=!0,fo=!0,_r(6))})});var co=null,lo=0,uo=0,fo=!1;function po(){lo||!co?co||_r(7):(lo=performance.now(),$.sopro(1.4))}var mo=[...document.querySelectorAll(`.degrau`)],ho=document.querySelector(`[data-espbg]`),go=document.querySelector(`[data-espnum]`);xr[6]=e=>{let t=Math.min(innerWidth,900)*(innerWidth<760?.9:.42);mo.forEach((n,r)=>{let i=r-e,a=i*.85;n.style.transform=innerWidth<760?`translate3d(${(i*innerWidth*.88).toFixed(0)}px, 0, 0) scale(${i===0?1:.9})`:`translate3d(${(Math.sin(a)*t).toFixed(0)}px, ${(i*70).toFixed(0)}px, ${((Math.cos(a)-1)*t-Math.abs(i)*60).toFixed(0)}px) rotateY(${(-a*40).toFixed(0)}deg)`,n.style.opacity=i===0?1:Math.abs(i)===1?.3:0,n.style.filter=i===0?``:`blur(3px)`,n.style.pointerEvents=i===0?`auto`:`none`}),go.textContent=String(e+1).padStart(2,`0`)};var _o=[{titulo:`Fermenta · Pão e Cozinha`,ciclo:`Ciclo_00 · Percepção`,imagem:`/cicclos-site/v3/vitrine/fermenta.webp`,video:`/cicclos-site/v3/vitrine/fermenta.mp4`,link:`https://eddikochi.github.io/fermenta-prototipo/`,selo:`Protótipo · não é o site oficial`,texto:`Protótipo de vitrine imersiva para uma padaria de fermentação natural: da cozinha ainda escura ao croissant no balcão, enquanto você rola.`},{titulo:`Zephyr · Seafood & Nikkei`,ciclo:`Ciclo_00 · Percepção`,imagem:`/cicclos-site/v3/vitrine/zephyr.webp`,video:`/cicclos-site/v3/vitrine/zephyr.mp4`,link:`https://eddikochi.github.io/cicclos-demo-zx/`,selo:`Protótipo · não é o site oficial`,texto:`Protótipo de vitrine imersiva para um restaurante na marina: do mar ao prato, num só movimento.`},{titulo:`Projeto de exemplo`,ciclo:`Ciclo_00 · Percepção`,imagem:`/cicclos-site/v3/vitrine/exemplo.webp`,selo:`Imagem ilustrativa`,texto:`Aqui entram os projetos da Cicclos: o que o negócio pedia, o ciclo que destravou e o link para ver no ar.`},{titulo:`Espaço para projeto`,ciclo:`Ciclo_01 · Raio-X`,video:`/cicclos-site/v3/ciclos.mp4`,selo:`Imagem ilustrativa`,texto:`Espaço reservado para um projeto de Raio-X.`},{titulo:`Espaço para projeto`,ciclo:`Ciclo_02 · Arrumar a sala`,video:`/cicclos-site/v3/vida-loop.mp4`,selo:`Imagem ilustrativa`,texto:`Espaço reservado para um projeto de Arrumar a sala.`},{titulo:`O próximo ciclo pode ser o seu.`,ciclo:`Ciclo_∞`,cta:!0}],vo=document.querySelector(`[data-vitnum]`),yo=document.querySelector(`[data-vitficha]`),bo=document.querySelector(`[data-vitrotulo]`),xo=document.querySelector(`[data-vitcta]`),So=null,Co=!1;function wo(){if(!So)try{So=Nn(B[9].querySelector(`[data-vitcv]`),{paineis:_o,aoClicar:(e,t)=>{t?To(e):(yr[9]=e,br(9,e))}})}catch(e){console.warn(`vitrine`,e)}}xr[9]=e=>{So?.vai(e),vo.textContent=String(e+1).padStart(2,`0`);let t=_o[e];bo.classList.add(`troca`),xo.classList.toggle(`ve`,!!t.cta),setTimeout(()=>{bo.querySelector(`[data-vitciclo]`).textContent=``,bo.querySelector(`[data-vittitulo]`).textContent=t.titulo,bo.querySelector(`span`).textContent=t.cta?`Fale com a gente pelo WhatsApp`:`${t.selo} · clique para abrir`,bo.classList.remove(`troca`)},350)};function To(e=yr[9]??0){let t=_o[e];if(Co||t.cta)return;Co=!0,yo.querySelector(`[data-fichatitulo]`).textContent=t.titulo,yo.querySelector(`[data-fichameta]`).textContent=t.selo,yo.querySelector(`[data-fichatexto]`).textContent=t.texto,yo.querySelector(`figcaption`).textContent=t.selo;let n=yo.querySelector(`[data-fichaimg]`),r=yo.querySelector(`[data-fichavid]`),i=yo.querySelector(`[data-fichalink]`);i.hidden=!t.link,t.link&&(i.href=t.link),n.hidden=!!t.video,r.hidden=!t.video,t.imagem&&(n.src=t.imagem),t.video&&(r.getAttribute(`src`)!==t.video&&(r.src=t.video),r.play().catch(()=>{})),yo.hidden=!1,requestAnimationFrame(()=>yo.classList.add(`ve`)),$.sopro(.8),yo.querySelector(`[data-vitfecha]`).focus()}function Eo(){Co&&(Co=!1,yo.classList.remove(`ve`),yo.querySelector(`[data-fichavid]`).pause(),setTimeout(()=>{Co||(yo.hidden=!0)},600))}document.querySelector(`[data-vitfecha]`).addEventListener(`click`,Eo),addEventListener(`keydown`,e=>{e.key===`Escape`&&Co&&Eo(),e.key===`Enter`&&W===9&&!Co&&e.target===document.body&&To()});var Do=document.querySelector(`[data-elo]`),Oo=Do.getContext(`2d`),ko=0,Ao=0;function jo(){let e=Math.min(devicePixelRatio||1,2);return Do.width!==innerWidth*e&&(Do.width=innerWidth*e,Do.height=innerHeight*e),e}function Mo(){ko=performance.now(),Do.style.display=`block`,$.sopro(1.6),B[6].classList.add(`saindo`)}function No(e){let t=(e-ko)/1e3,n=jo(),r=Do.width,i=Do.height,a=r/2,o=i/2,s=Oo,c=Math.hypot(r,i)*.62;s.clearRect(0,0,r,i);let l=1-(1-H(t/.45))**2,u=U((t-.6)/.7),d=t<.6?c*(.12+1.4*l):Math.max(4*n,c*1.52*(1-u)**2.2),f=t<.6?.25+.5*l:.75*(1-u),p=s.createRadialGradient(a,o,0,a,o,d);p.addColorStop(0,`rgba(246,248,252,1)`),p.addColorStop(f,`rgba(244,247,252,1)`),p.addColorStop(1,`rgba(240,245,252,0)`),s.fillStyle=p,s.fillRect(0,0,r,i),t>=.4&&t<.6&&(s.fillStyle=`rgba(246,248,252,${U((t-.4)/.08).toFixed(3)})`,s.fillRect(0,0,r,i)),t>.5&&!Do.dataset.trocou&&(Do.dataset.trocou=`1`,G=!1,kr=!1,fr=!0,_r(9)),t>1.3&&(ko=0,Do.style.display=`none`,delete Do.dataset.trocou,s.clearRect(0,0,r,i),B[6].classList.remove(`saindo`),setTimeout(()=>$.sino(3),300))}function Po(){pr||(So?(pr=performance.now(),B[9].classList.add(`saindo`),Eo(),is(),$.sopro(1.8),So.queda(()=>{$.sopro(1.2),pr=0,G=!1,kr=!1,fr=!0,_r(10),setTimeout(()=>B[9].classList.remove(`saindo`),900),setTimeout(()=>$.sino(2),1600)})):(fr=!0,_r(10)))}function Fo(e){let t=(e-Ao)/1e3;jo();let n=Do.width,r=Do.height,i=Oo;i.clearRect(0,0,n,r);let a=i.createRadialGradient(n/2,r*.56,0,n/2,r*.56,Math.max(n,r)*(.2+t*1.4));a.addColorStop(0,`rgba(250,252,255,${Math.max(0,1-t/.55)})`),a.addColorStop(1,`rgba(250,252,255,0)`),i.fillStyle=a,i.fillRect(0,0,n,r),t>.6&&(Ao=0,Do.style.display=`none`,i.clearRect(0,0,n,r))}var Io=null;function Lo(){!mr&&Z&&Z.desfaz(()=>{Io=Z.pontosNaTela(),mr=0,G=!1,kr=!1,fr=!0,_r(7),setTimeout(()=>B[10].classList.remove(`saindo`),600)},Rn?20:36)&&(mr=performance.now(),B[10].classList.add(`saindo`),Ro(-1),is(),$.sino(3),$.sino(5),setTimeout(()=>$.sopro(1.4),350))}function Ro(e){document.querySelectorAll(`[data-qsficha]`).forEach(t=>t.classList.toggle(`ve`,+t.dataset.qsficha===e)),B[10].classList.toggle(`focado`,e>=0)}document.querySelectorAll(`[data-qsfecha]`).forEach(e=>e.addEventListener(`click`,()=>Z?.desfoca())),addEventListener(`keydown`,e=>{e.key===`Escape`&&W===10&&Z?.foco>=0&&Z.desfoca()});var Z=null;function zo(){W===10&&Z&&Z.quebra()&&(B[10].classList.add(`aberta`),is(),$.nasce?.(),$.sopro(1.6),zn.animate?.([{filter:`brightness(1)`},{filter:`brightness(1.9)`},{filter:`brightness(1)`}],{duration:1100,easing:`ease-out`}))}document.querySelector(`[data-qspedra]`).addEventListener(`click`,zo),document.querySelectorAll(`[data-qsrevela]`).forEach(e=>e.addEventListener(`click`,()=>Z?.revela(+e.dataset.qsrevela)));var Bo={8:[`convite`,`/cicclos-site/v3/atm/convite.webp`,{escurece:.5,fluxo:.8}]},Vo={};function Ho(e,t){if(Bo[e]&&!Vo[e])try{let[t,n,r]=Bo[e];Vo[e]=gt(B[e].querySelector(`[data-atm="${t}"]`),n,r)}catch(e){console.warn(`atmosfera`,e)}if(Vo[e]?.tamanho(),e===1?(setTimeout(()=>{W===1&&Qn.liga()},600),li=performance.now(),V.style.transition=t===8?`transform 1.8s cubic-bezier(.65,0,.25,1), opacity .8s, filter 1.8s`:`opacity .8s`,V.style.opacity=1,V.style.pointerEvents=`auto`,V.style.transform=``,V.style.filter=``,V.setAttribute(`k`,`0.2`),V.setAttribute(`vel`,`0.6`),oi=.2,si=.6):(t!==1||e!==2)&&(V.style.opacity=0,V.style.pointerEvents=`none`),t===1&&e!==1&&Qn.desliga(),vr[e]!=null&&(yr[e]=Hn(t)>Hn(e)?vr[e]-1:0,(e===2||e===4)&&(yr[e]=0),br(e,yr[e])),e===2&&!Pn&&Xn(B[3]),e===2&&Pn&&!Fn&&setTimeout(()=>{if(!Fn)try{Fn=Et(B[3].querySelector(`[data-nascergl]`),Pn,{SAI:Pa,FIM:za}),Fn.render(0,performance.now()/1e3)}catch(e){console.warn(`nascer em código`,e)}},1200),e===2&&!sa&&!Pn&&setTimeout(()=>{if(!sa)try{sa=ft(ca),sa.render(0,0)}catch{}},1500),e===2&&(Ui(),Gi||=ht(wi,oa,Ci.querySelector(`[data-casca]`),yi),Gi.reinicia(),Ki=0,bi.style.opacity=0,Ei.style.opacity=``,ji.style.opacity=``,J.s=1,J.v=0,J.y=t===1?.85:.5,J.vy=0,J.b=di?0:3,Mi.forEach(e=>{e.classList.remove(`ve`),e._d=0}),Qi=performance.now()+(di&&pi?1e7:di?150:0),$i=!1),e===3){if(!sa&&!(Pn&&Fn))try{sa=ft(ca)}catch(e){console.warn(`montanha sem WebGL`,e)}if(sa?.tamanho(),sa?.reinicia(),ca.style.opacity=1,la=performance.now(),ra.classList.remove(`ve`),ia.classList.remove(`ve`),aa.classList.remove(`ve`),Aa=ja=1,Y=Ma=0,Va.classList.remove(`foi`),X.classList.remove(`ve`),X.pause(),Ha.classList.remove(`ve`),Va.classList.add(`foi`),ka=`video`,Fa=t===2?0:1,Ia=performance.now(),t===2&&!pi&&Ha.classList.add(`ve`),t===2&&pi){let e=bi.animate([{opacity:1},{opacity:0}],{duration:1400,easing:`cubic-bezier(.3,0,.2,1)`,fill:`forwards`});e.onfinish=()=>{bi.style.opacity=0,e.cancel()}}if(ia._t0=aa._t0=null,Pn){if(!Fn)try{Fn=Et(B[3].querySelector(`[data-nascergl]`),Pn,{SAI:Pa,FIM:za})}catch(e){console.warn(`nascer em código`,e)}Fn&&(B[3].classList.add(`em-codigo`),Fn.tamanho(),ka=`codigo`,In=1,Y=Ma=Fa===1?Pa:0,Fa===1&&(ra.classList.add(`ve`),es(Rn?`Arraste para cima para voar`:`Role para voar`,3)),t===2&&requestAnimationFrame(()=>requestAnimationFrame(()=>Ha.classList.remove(`ve`))))}let e=Math.min(devicePixelRatio||1,2);ta.width=innerWidth*e,ta.height=innerHeight*e;let n=Math.min(ta.width,ta.height);Array.from({length:Rn?140:260},()=>({a:Math.random()*Math.PI*2,d:n*(.02+Math.random()*.5),v:.4+Math.random()})),na.fillStyle=`#070708`,na.fillRect(0,0,ta.width,ta.height)}if(e===7&&(Q=null,Rs=0,B[7].classList.remove(`convergindo`),t===10&&(B[7].classList.add(`chegando`),setTimeout(()=>B[7].classList.remove(`chegando`),900))),e===6&&!co)try{co=$e(ho.querySelector(`canvas`))}catch(e){console.warn(`espiral sem WebGL`,e)}if(e===6&&(co?.tamanho(),fo?(uo=performance.now(),fo=!1):uo=0),e===4&&!ha&&(ha=Xe(B[4].querySelector(`[data-tunel]`),Wa)),e===3&&!ha&&setTimeout(()=>{if(!ha)try{ha=Xe(B[4].querySelector(`[data-tunel]`),Wa),ha.render(0,performance.now()/1e3,{})}catch(e){console.warn(`túnel`,e)}},400),e===4&&(ma=t===3&&Pn===`lago`,ha.reinicia(),ga=t===3&&!ma?-.07:ma?-.05:-.05-ua/180,fa=t!==3,_a=0,va=t===3&&!ma?2.2:0,ya=!1,ba=performance.now(),pa=t===3&&!ma,xa=0,Ca=0,yr[4]=0,ha.tamanho(),Za=0,Ja=!1,Ka=!1,qa=0,Xa.classList.remove(`ve`),eo.forEach(e=>{e._d=0})),e===5&&(to||=Uo(),setTimeout(()=>to.entra(),60)),t===5&&$.batida(!1),t===5&&(wr=!1),t===5&&setTimeout(()=>B[5].classList.remove(`atravessando`),1200),t===5&&to&&(to.sai(),no.forEach(e=>e.classList.remove(`ve`))),e!==5&&e!==6&&e!==9||So||wo(),t===9&&So?.pausa(),(e===6||e===9||e===10)&&!Z)try{Z=mn(B[10].querySelector(`[data-qscv]`),{avatares:[`/cicclos-site/avatar/eddi-v2.glb`,`/cicclos-site/avatar/lucas-v2.glb`],aoFoco:e=>Ro(e),aoRevelar:e=>{$.sino(3+e),$.sopro(1.1);let t=document.querySelector(`[data-qsrevela="${e}"]`);t.classList.add(`ok`),t.querySelector(`em`).textContent=`revelado`,Z.revelados.every(Boolean)&&document.querySelector(`[data-qsdica]`).classList.add(`foi`)}})}catch(e){console.warn(`quem somos`,e)}e===10&&t===9&&(B[10].classList.add(`chegando`),setTimeout(()=>B[10].classList.remove(`chegando`),2500)),e===10&&(Z?.tamanho(),Z?.reposiciona(),Z?.refaz(),Z?.desfoca(),Ro(-1),Z?.estado===2?B[10].classList.add(`aberta`,`revelada`):(Z?.reinicia(),B[10].classList.remove(`aberta`,`revelada`),document.querySelectorAll(`[data-qsrevela]`).forEach(e=>{e.classList.remove(`ok`),e.querySelector(`em`).textContent=`revelar`}),document.querySelector(`[data-qsdica]`).classList.remove(`foi`)),t===9&&Z?.chegada(!0,So?.giro)),e===9&&(Eo(),t===6?(So?.chegada(!0),B[9].classList.add(`chegando`),setTimeout(()=>B[9].classList.remove(`chegando`),4700)):(B[9].classList.remove(`chegando`),t===10?So?.volta():So?.reseta())),e===8&&Ts(),e===8&&(V.style.transition=Us?`none`:`opacity 1.4s`,Us=!1,Hs=0,V.style.opacity=1,V.style.transform=`translate(-50%,-78%) scale(.62)`,V.style.filter=``,V.setAttribute(`k`,`0.6`),V.setAttribute(`vel`,`1`),V.style.pointerEvents=`none`)}function Uo(){return Be(B[5],{explorados:ro,aoQuadro:e=>{$.mundo(e),rc(e),Ns(e)},aoAnelPassa:()=>{$.sopro(2.2)},aoRacha:()=>{$.estalo(),$.impacto(),$.tremor()},aoPouso:()=>{$.impacto(),$.tremor(),setTimeout(()=>$.impacto(),140),$.sino(4),zn.animate?.([{filter:`brightness(1)`},{filter:`brightness(2.6) contrast(1.1)`},{filter:`brightness(1)`}],{duration:1200,easing:`ease-out`})},aoPortalSurge:()=>{$.tremor(),$.sopro(1.4),$.sino(4),no.forEach(e=>e.classList.remove(`ve`)),zn.animate?.([{filter:`brightness(1)`},{filter:`brightness(1.6)`},{filter:`brightness(1)`}],{duration:1100,easing:`ease-out`})},aoOrbeEntra:e=>{$.sino(e+3),$.sopro(.9)},aoPortalPronto:()=>$.impacto(),aoAcender:e=>{io(e),$.sino(e+2)},aoFinal:()=>{$.batida(!0),Or=!0,document.querySelector(`.pular`).style.display=`none`,no.forEach(e=>e.classList.remove(`ve`)),$.sino(4),setTimeout(()=>$.sino(5),260)},aoAbrir:()=>{$.estalo(),nc()},aoCarga:e=>$.cargaSemente(e),aoQuebra:()=>{$.quebra(),$.sopro(1.2)},aoArtefato:()=>gs(),aoAuto:e=>{wr=e},cardAberto:()=>no.some(e=>e.classList.contains(`ve`)),aoReler:e=>{io(e),$.sino(e+2)},aoSincronia:e=>{e?($.sino(3),setTimeout(()=>$.sino(5),120),$.sopro(1.1)):$.tique(.2,3)},aoAtravessa:()=>{B[5].classList.add(`atravessando`),$.sopro(1.6)},aoPortal:()=>{wr=!1,Or=!0,G=!1,fo=!0,ur=!0,_r(6)}})}var Wo=performance.now();function Go(e){let t=e/1e3,n=H((e-Wo)/1e3,0,.05);Wo=e,G&&e-or>1150&&(G=!1),ic(e),ts(e),ko?No(e):Ao&&Fo(e),document.body.classList.toggle(`auto`,Er());{let e=ra.classList.contains(`ve`)&&W===3;e!==tr&&(tr=e,e?$n.liga():$n.desliga())}{let e=eo[1],t=!!e&&e.classList.contains(`ve`)&&W===4;t!==nr&&(nr=t,t?er.liga():er.desliga())}Vo[W]&&Vo[W].render(t,Br,Vr,W===4?Math.max(0,ga)*.35:0),(W===7||B[7].classList.contains(`ativa`))&&Xs(t,n),K*=Math.exp(-n*2.4),Math.abs(K)<1&&(K=0);let r=H(Math.abs(K)/Dr);Kn.style.setProperty(`--p`,r.toFixed(3));let i=B[W];if(!G&&W!==1&&W!==2&&W!==8&&!B[8].classList.contains(`ativa`)&&(i.style.transform=r>.01?`scale(${1+r*.025})`:``,ar(r*.25),zn.classList.toggle(`trans`,r>.03)),!G&&W===2&&(ar(r*.25),zn.classList.toggle(`trans`,r>.05)),(W===1||fi||sr&&e-sr.t0<1400)&&ai){let i=(e-li)/1e3,a=V.getBoundingClientRect();fi||ai.centro((a.left+a.width/2)/innerWidth,(a.top+a.height/2)/innerHeight),W===1&&!zr&&Hr>.02&&(zr=e),qr=Math.max(qr,U((i-1.2)/5.8),zr?U((e-zr)/1600):0);let o=Math.max(Wr,W===1?r*.45:0);{let e=parseFloat(V.getAttribute(`vel`))||2;ai.gira(n*(.3+e*.45)*(1+Math.min(1,Hr)*.3),.8+e*.3)}ai.render(t,qr,Math.max(Ur,W===1?r*.3:0),o,0),W===1&&!ui&&(V.style.transform=`translate(-50%, -50%) scale(${(1+r*.25).toFixed(3)})`,oi+=((ci?1:.2)+r*.3-oi)*.05,si+=((ci?1.4:.6)-si)*.05,V.setAttribute(`k`,oi.toFixed(3)),V.setAttribute(`vel`,si.toFixed(3)),ar(r*.4),zn.classList.toggle(`trans`,r>.05))}if(sr){let t=H((e-sr.t0)/1100),n=t*t;V.style.transform=`translate(-50%,-50%) scale(${(3.5+n*8).toFixed(2)})`,V.style.opacity=(1-t).toFixed(3),V.style.filter=`blur(${(n*12).toFixed(1)}px) brightness(2)`,B[1].style.transform=`scale(${(1+n*1.4).toFixed(3)})`,B[1].style.filter=`blur(${(n*14).toFixed(1)}px)`,t>=1&&(sr=null,B[1].style.transform=``,B[1].style.filter=``,V.style.pointerEvents=`none`)}if(pi&&(W===2||mi!=null)&&(pi.render(t,mi,Br,Vr,W===2&&Ki?(e-Ki)/1e3:null),mi!=null&&hi)){let{C:e,R:t}=pi.anel,n=pi.naTela(e,t),r=n.px/hi.R;if(n.prof>.05&&r<40){let e=U(mi/vi);V.style.transform=`translate(${(n.x-innerWidth/2).toFixed(1)}px, ${(n.y-innerHeight*.44).toFixed(1)}px) translate(-50%, -50%) scale(${r.toFixed(4)})`,V.style.clipPath=``,V.style.filter=`brightness(${(1+e*e*1.6).toFixed(3)})`,V.setAttribute(`k`,(.2+e*2.4).toFixed(3)),V.setAttribute(`vel`,(.6+e*7).toFixed(3)),V.style.opacity=U((n.prof-.03)/.3).toFixed(3)}else V.style.opacity=0}if(W===2){let r=e-Qi<650;if(wi.style.opacity=+!r,r||(J.vy+=(-J.y*26-J.vy*5.2)*n,J.y+=J.vy*n),Ki){let t=(e-Ki)/1e3;if(Ci.querySelectorAll(`.fala, .rot`).forEach(e=>e.classList.remove(`ve`)),Ei.style.opacity=(1-U(t/.35)).toFixed(3),pi){J.s=1+U((t-.3)/1.2)**2.2*11,J.b=U((t-.6)/.8)*14;let e=1-U((t-.95)/.55);wi.style.opacity=e.toFixed(3),ji.style.opacity=e.toFixed(3),bi.style.opacity=U((t-1.25)/(pi.SAIDA-1.25)).toFixed(3),t>=pi.SAIDA&&W===2&&!G&&_r(3)}else J.s=1+U(t/1.5)**2*2.6,J.b=U((t-.4)/.9)*10,(Gi?.fimFacho??9)>1.9&&W===2&&!G&&_r(3)}J.b+=(0-J.b)*(1-Math.exp(-n*3)),!$i&&e-Qi>1500&&Math.abs(J.y)<.025&&Math.abs(J.vy)<.12&&($i=!0,Mi[1].classList.add(`ve`),ir(Mi[1]),Li&&Wi());let i=Math.sin(t*.9)*6;wi.style.transform=`translate(0px, ${(i+J.y*innerHeight).toFixed(1)}px) scale(${J.s.toFixed(4)})`,wi.style.filter=J.b>.2?`blur(${J.b.toFixed(1)}px)`:``,Ei.style.transform=`translate(-50%, calc(-50% + ${(i+J.y*innerHeight).toFixed(1)}px)) scale(${J.s.toFixed(4)})`,Ni=zi?1:Ri>0?Ri:Li?.15:0,zi?(Fi+=(50-Fi)*.08,Ii+=(50-Ii)*.08):Li||(Fi=50+Math.sin(t*.5)*8,Ii=50+Math.cos(t*.4)*6),Pi+=(Ni-Pi)*.07,Ei.style.visibility=Pi>.01?`visible`:`hidden`;{let e=Ei.offsetWidth,t=Ei.offsetHeight,n=Math.max(0,1-Pi),r=(Fi-50)/100*e/Vi,i=(Ii-50)/100*t/Hi,a=Math.hypot(r,i);a>n&&(r*=n/a,i*=n/a),Ei.style.setProperty(`--vrx`,`${Math.max(1,Pi*Vi).toFixed(1)}px`),Ei.style.setProperty(`--vry`,`${Math.max(1,Pi*Hi).toFixed(1)}px`),Ei.style.setProperty(`--lx`,`${(.6*e+r*Vi).toFixed(1)}px`),Ei.style.setProperty(`--ly`,`${(.6*t+i*Hi).toFixed(1)}px`)}Ei.classList.toggle(`trava`,!!zi),Gi?.desenha(n),zi&&(Di.playbackRate=Math.max(.0625,Di.playbackRate*.96),Di.playbackRate<.07&&!Di.paused&&(Di.pause(),Di.currentTime=Zi,Di.addEventListener(`seeked`,()=>{Di.readyState>=2&&ki.drawImage(Di,0,0,Oi.width,Oi.height)},{once:!0})));let a=Di.style,o=Oi.style;a.opacity=zi?Math.max(0,1-(1-Di.playbackRate)*1.2).toFixed(3):``,o.opacity=zi?.92:``,Di.readyState>=2&&Pi>.01&&!Di.paused&&ki.drawImage(Di,0,0,Oi.width,Oi.height)}if(W===3){if(na.clearRect(0,0,ta.width,ta.height),ka===`video`){if(Va.classList.add(`foi`),X.readyState>=2){ka=`scrub`,X.classList.add(`ve`);let t=Fa===1?Pa*X.duration:0;X.currentTime=t,Y=Ma=t/(X.duration||14.5),Na=e,Fa===1&&(X.pause(),es(Rn?`Arraste para cima para voar`:`Role para voar`,3)),Fa===0&&X.play().catch(()=>{}),X.animate?.([{filter:`brightness(3.4)`},{filter:`brightness(1)`}],{duration:1100,easing:`cubic-bezier(.2,.7,.3,1)`}),Ha.classList.add(`ve`),requestAnimationFrame(()=>requestAnimationFrame(()=>Ha.classList.remove(`ve`)))}else e-la>3e3&&(ka=`voo`,es(Rn?`Arraste para cima para voar`:`Role para voar`,3))}if(ka===`codigo`)Fa===0?(Y=Ma=Math.min(Pa,Y+n/1.8*Pa*In),In+=(1-In)*(1-Math.exp(-n*1.2)),Y>=Pa&&(Fa=1,Ia=e,K=0,ra.classList.add(`ve`),es(Rn?`Arraste para cima para voar`:`Role para voar`,3))):Fa===1?Y=Ma=Pa:Pn===`lago`&&Y>=Ba?Y=Ma=Math.min(1,Y+n*.14741379310344827/2.5):(Ma=Math.min(1,Ma+n*La*(Pn===`lago`?1.5:1)),Y+=(Ma-Y)*(1-Math.exp(-n*2.2)),Pn===`lago`&&(Y=Math.min(Y,Ba))),Fn.render(Y,t,Br,Vr),ra.classList.toggle(`ve`,Fa===1||Fa===2&&Y<.42),(Pn===`lago`?[[.45,.58],[.6,.73]]:[[.47,.64],[.7,.88]]).forEach(([t,n],r)=>{let i=[ia,aa][r],a=Y>t&&Y<n;i.classList.toggle(`ve`,a),a?(i._t0??=e,e-i._t0<Ra&&(Ma=Math.min(Ma,n-.012))):Y<=t&&(i._t0=null)}),Fa===2&&Y>.3748275862068966&&as(3),Y>za&&(zn.classList.remove(`trans`),ar(0),Oa=0,_r(4));else if(ka===`scrub`){let t=X.duration||15;Y<Pa&&Fa===0?(Y=Ma=Math.min(Pa,X.paused?(e-Na)/1e3/t:X.currentTime/t),X.playbackRate>1&&(X.playbackRate+=(1-X.playbackRate)*(1-Math.exp(-n*1.2))),Y>=Pa&&(X.pause(),X.playbackRate=1,K=0,Fa=1,Ia=e,ra.classList.add(`ve`),es(Rn?`Arraste para cima para voar`:`Role para voar`,3))):Fa===1?(Y=Ma=Pa,X.style.transform=`scale(${(1.015+Math.sin((e-Ia)/1400)*.012).toFixed(4)})`):(Ma=Math.min(1,Ma+n*La),Y+=(Ma-Y)*(1-Math.exp(-n*3)),X.style.transform=``);let r=Y*t;X.paused&&!X.seeking&&Math.abs(X.currentTime-r)>1/40&&(X.currentTime=r),ra.classList.toggle(`ve`,Fa===1||Fa===2&&Y<.42),[[.47,.64],[.7,.88]].forEach(([e,t],n)=>[ia,aa][n].classList.toggle(`ve`,Y>e&&Y<t)),Fa===2&&Y>.3748275862068966&&as(3),Y>za&&(zn.classList.remove(`trans`),ar(0),Oa=0,_r(4))}else{ka===`voo`&&(Aa+=(ja-Aa)*(1-Math.exp(-n*2.6)));let r=Aa,i=null,a=st[2];if(sa){let e=sa.u(r);i=sa.render(r,t,Br,Vr,U((e-(a+.02))/.09))}let o=i?i.u:0;ka===`voo`&&[ra,ia,aa].forEach((e,t)=>e.classList.toggle(`ve`,o>st[t]-.16&&o<st[t]+(t===2?.05:.02))),o>st[0]-.16&&as(3),(ka===`voo`&&o>a+.11||i&&i.fim||!sa&&e-la>4e3)&&(zn.classList.remove(`trans`),ar(0),Oa=e,_r(4))}}if((W===4||B[4].classList.contains(`ativa`))&&ha){if(va*=Math.exp(-n*1.1),fa){let t=H((e-ba)/1e3/da);ga=-.05-ua/180*(1-t*t),t>=1&&(fa=!1)}else if(Ja)_a>ga&&(ga+=(_a-ga)*(1-Math.exp(-n*1.6)));else if(xa<2&&ga<=Ea[1]){if(xa===1)(e-Sa)/1e3>Ta&&(xa=2,Ca=e);else{let t=Ea[1]-ga,r=Math.abs(ga-Ea[0])<.085,i=r?.5:1;ga+=n*Da*(1+(r?0:va))*H(t/.07,.05,1)*i,t<.003&&(ga=Ea[1],xa=1,Sa=e,va=0)}}else if(ga<Ea[2]){let t=Ea[2]-ga,r=Ca?U((e-Ca)/1100):1;ga+=n*Da*(1+va)*H(t/.09,.06,1)*Math.max(.04,r),t<.004&&(ga=Ea[2])}!ya&&ga>=Ea[2]-.12&&Ya(),sa&&e-Oa<1200&&sa.render(Aa,t,Br,Vr,1);let r=ga<.3?0:ga<.6?1:2;yr[4]=r,r>0&&as(4);let i=Math.abs(ga-Ea[1])<.09;i&&Wa.paused&&Wa.play?.().catch(()=>{});let a=ya&&!Ja,o=ha.raioX(Br+.5,Vr+.5,a&&(Rr||Rn));a&&!Ka&&(o>.55?(qa+=n,qa>.35&&(Ka=!0,$.sino(5),is(),setTimeout(Qa,900))):qa=Math.max(0,qa-n)),ha.render(ga+(xa===1?Math.sin((e-Sa)/700)*.004:0),t,{video:i,achou:Ka,entrando:Ja,desce:(e-ba)/1e3,desceAneis:9,formaAneis:ma||pa?null:(e-ba)/1e3,planetaJa:!pa,parallax:pa?1:U((e-ba)/2500)}),eo.forEach((e,t)=>{let n=!Ja&&(t<2?Math.abs(ga-Ea[t])<.085:ga>Ea[2]-.07);e.classList.toggle(`ve`,n),n&&!e._d&&(e._d=1,ir(e))}),Ja&&ga>.955&&!G?(Za=0,ur=!0,_r(5)):ga>.99&&(Za=0,_r(5))}if(W===6||B[6].classList.contains(`ativa`)){let n=lo?H((e-lo)/1600):uo?1-U((e-uo)/2200):0;if(co&&co.render(t,yr[6]??0,Br,Vr,n),uo){let e=document.querySelector(`.helice`),t=document.querySelector(`.espiral__cab`),r=document.querySelector(`.espiral__nav`);e.style.opacity=t.style.opacity=r.style.opacity=(1-U(n/.3)).toFixed(3),n<=0&&(uo=0,e.style.opacity=t.style.opacity=r.style.opacity=``)}if(lo){let e=document.querySelector(`.helice`),t=document.querySelector(`.espiral__cab`),r=document.querySelector(`.espiral__nav`);e.style.opacity=t.style.opacity=r.style.opacity=(1-U(n/.35)).toFixed(3),n>=.45&&W===6&&!ko&&(Mo(),setTimeout(()=>{lo=0,e.style.opacity=t.style.opacity=r.style.opacity=``},2600))}let r=mo[yr[6]??0]?.firstElementChild;r&&(r.style.setProperty(`--ty`,`${(Br*10).toFixed(2)}deg`),r.style.setProperty(`--tx`,`${(-Vr*8).toFixed(2)}deg`))}Z&&(W===10||B[10].classList.contains(`ativa`))&&(Z.render(t,Br,Vr),Z.estado===2&&!B[10].classList.contains(`revelada`)&&(B[10].classList.add(`revelada`),ir(B[10].querySelector(`.qs__txt`)))),So&&(W===9||B[9].classList.contains(`ativa`))&&So.render(t,Br,Vr),W===8&&!G&&(V.style.transform=`translate(calc(-50% + ${(Br*14).toFixed(1)}px), calc(-78% + ${(Vr*10).toFixed(1)}px)) scale(.62)`),requestAnimationFrame(Go)}requestAnimationFrame(Go);var Ko=document.querySelector(`[data-guia]`),qo=Rn?{1:`Ative o som · toque no símbolo para acionar · arraste para cima para entrar`,2:`Toque na pedra para acordar a vida`,4:`O voo segue sozinho · arraste para cima para acelerar`,9:`Deslize para o lado · toque no painel para abrir`,10:`Toque na pedra`}:{1:`Ative o som · mova o mouse · clique no símbolo para acionar · role para entrar`,2:`Passe a luz sobre a pedra · clique para acordar a vida`,4:`O voo segue sozinho · role para acelerar`,9:`Role para o próximo · clique no painel para abrir`,10:`Clique na pedra`},Jo=0,Yo=!1,Xo=0,Zo=0,Qo=3200,$o=null;function es(e,t=`extra`){Ko.textContent=e,$o=t,Jo=performance.now(),Yo=!0,Xo=0,Zo=0,Qo=Math.max(3200,e.split(/\s+/).length*330)}function ts(e){if(!Yo){Ko.style.opacity=0;return}let t=e-Jo,n=H(t/600),r=H((t-Qo-3500)/3e3),i=n*(1-Math.max(r,Xo));Zo&&(i=Math.min(i,1-H((e-Zo)/700))),Ko.style.opacity=i.toFixed(3),i<=.001&&t>700&&(Yo=!1)}function ns(e){Yo&&is(),qo[e]&&setTimeout(()=>{W!==e||fi||es(qo[e],e)},e===1?2200:e===2?2600:e===9?5e3:e===10?2700:900)}function rs(e){!Yo||performance.now()-Jo<Qo||(Xo=Math.min(1,Xo+e*.45))}addEventListener(`pointermove`,e=>rs(Math.hypot(e.movementX||0,e.movementY||0)/(innerWidth*3)),{passive:!0}),[`wheel`,`touchmove`,`keydown`,`pointerdown`].forEach(e=>addEventListener(e,()=>rs(.12),{passive:!0}));function is(){Yo&&!Zo&&(Zo=performance.now())}function as(e){$o===e&&performance.now()-Jo>Qo&&is()}var os=document.querySelector(`[data-inventario]`),ss=os.querySelector(`[data-slot]`),cs=os.querySelector(`[data-invrot]`),ls=os.querySelector(`[data-invsub]`),us=`ABCDEFGHJKLMNPQRSTUVWXYZ23456789`,ds=()=>{let e=`CICLO-`;for(let t=0;t<4;t++)e+=us[Math.random()*32|0];return e},fs=null,ps=!1,ms=null;try{ms=localStorage.getItem(`cicclos-artefato`)}catch{}function hs(e){os.hidden=!1,ls.textContent=`Raio-x · ${fs}`,cs.textContent=e?`Novo artefato`:`Artefato`,e&&(os.classList.remove(`novo`),os.offsetWidth,os.classList.add(`novo`),setTimeout(()=>os.classList.remove(`novo`),7e3))}function gs(){let e=document.createElement(`i`);e.className=`rastro-semente`,e.setAttribute(`aria-hidden`,`true`),document.body.appendChild(e),os.hidden=!1,ss.style.opacity=`0`;let t=ss.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2;e.animate([{transform:`translate(${innerWidth/2}px, ${innerHeight/2}px) scale(3)`,opacity:1},{transform:`translate(${n}px, ${r}px) scale(.6)`,opacity:1}],{duration:650,easing:`cubic-bezier(.6,0,.3,1)`,fill:`forwards`}).onfinish=()=>{e.remove(),ss.style.opacity=``,os.classList.remove(`novo`),os.classList.remove(`acende`),os.offsetWidth,os.classList.add(`acende`),$.tique(1),setTimeout(()=>os.classList.remove(`acende`),2400)},fs||=ms||ds();try{localStorage.setItem(`cicclos-artefato`,fs)}catch{}hs(!0),$.sino(4),setTimeout(()=>$.sino(5),220),setTimeout(()=>$.impacto(),500),Ts()}var _s=0;ss.addEventListener(`click`,()=>{ps||performance.now()-_s<400||(W===8?xs.textContent=`Arraste o artefato até o anel.`:(os.classList.add(`novo`),setTimeout(()=>os.classList.remove(`novo`),3500)))});var vs=document.querySelector(`[data-ritual]`),ys=vs.querySelector(`[data-encaixe]`),bs=vs.querySelector(`[data-ritualt]`),xs=vs.querySelector(`[data-ritualmsg]`),Ss=vs.querySelector(`[data-ritualcarga]`),Cs=vs.querySelector(`[data-buscaart]`),ws=document.querySelector(`.convite__cta .botao`);function Ts(){vs.classList.toggle(`sem`,!fs),Cs.hidden=!!fs||ps,!ps&&(bs.textContent=fs?`Inicie o seu cicclo com o artefato.`:`Falta o artefato para iniciar o cicclo.`,xs.textContent=fs?`Arraste o artefato do canto da tela até o anel para liberar a entrada.`:`Ele está escondido na sala: acenda as três orbes e siga a luz.`)}Ts(),Cs.addEventListener(`click`,()=>fc(5));function Es(){if(!fs||ps)return;ps=!0,vs.classList.add(`branco`),vs.classList.remove(`alvo`),os.classList.add(`usado`),cs.textContent=`Artefato usado`,setTimeout(()=>{vs.classList.add(`feito`),bs.textContent=`Acionar meu raio X`,xs.textContent=``},1250),setTimeout(()=>vs.classList.add(`pronto`),1400),Ss.style.strokeDashoffset=0,$.acopla();let e=getComputedStyle(vs),t=parseFloat(e.columnGap)||14,n=vs.clientWidth-parseFloat(e.paddingLeft)-5,r=ys.offsetWidth,i=vs.querySelector(`.ritual__txt`);setTimeout(()=>{ys.style.transform=`translateX(${(n-r).toFixed(0)}px)`,i.style.transform=`translateX(${-(r+t)/2}px)`,$.sopro(1.4),B[8].classList.add(`acionado`),Vo[8]?.tamanho?.()},450),vs.setAttribute(`role`,`link`),vs.setAttribute(`tabindex`,`0`),vs.setAttribute(`aria-label`,`Acionar meu raio x pelo WhatsApp`),V.setAttribute(`k`,`1`),V.setAttribute(`vel`,`4`),setTimeout(()=>{V.setAttribute(`k`,`0.8`),V.setAttribute(`vel`,`1.6`)},1800),ws.textContent=`Acionar meu raio x`,ws.href=`https://wa.me/5551991318945?text=${encodeURIComponent(`Oi! Iniciei o cicclo no site da Cicclos com o artefato ${fs} e quero acionar o meu raio-x.`)}`,ws.animate?.([{transform:`scale(1)`},{transform:`scale(1.08)`},{transform:`scale(1)`}],{duration:700,delay:300}),zn.animate?.([{filter:`brightness(1)`},{filter:`brightness(1.8)`},{filter:`brightness(1)`}],{duration:900,easing:`ease-out`})}var Ds=null;ss.addEventListener(`pointerdown`,e=>{fs&&!ps&&W===8&&(e.preventDefault(),ss.setPointerCapture?.(e.pointerId),Ds=document.createElement(`div`),Ds.className=`arrasto`,Ds.innerHTML=ss.innerHTML,document.body.appendChild(Ds),Ds.style.transform=`translate(${e.clientX}px, ${e.clientY}px)`,Ds.dataset.moveu=`0`,$.tique(.3,6))});var Os=(e,t)=>{let n=ys.getBoundingClientRect();return Math.hypot(e-(n.left+n.width/2),t-(n.top+n.height/2))<n.width*.9};ss.addEventListener(`pointermove`,e=>{if(!Ds)return;Ds.dataset.moveu=`1`,Ds.style.transform=`translate(${e.clientX}px, ${e.clientY}px)`;let t=Os(e.clientX,e.clientY);t&&!vs.classList.contains(`alvo`)&&$.tique(.8,4),vs.classList.toggle(`alvo`,t)});var ks=e=>{if(!Ds)return;_s=performance.now();let t=Ds.dataset.moveu===`1`;Ds.remove(),Ds=null,vs.classList.remove(`alvo`),t&&Os(e.clientX,e.clientY)?Es():t&&(xs.textContent=`Solte o artefato dentro do anel.`)};ss.addEventListener(`pointerup`,ks),ss.addEventListener(`pointercancel`,ks),ys.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),Es())});var As=()=>{ps&&window.open(ws.href,`_blank`,`noopener`)};vs.addEventListener(`click`,e=>{ps&&!e.target.closest(`[data-buscaart]`)&&As()}),vs.addEventListener(`keydown`,e=>{ps&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),As())});var js=document.querySelector(`[data-mapa]`),Ms=js.getContext(`2d`);function Ns(e){let t=js.width,n=t/2,r=t*.45/70,i=Ms;i.clearRect(0,0,t,t),i.strokeStyle=`rgba(255,255,255,.08)`,i.lineWidth=1,[.33,.66].forEach(e=>{i.beginPath(),i.arc(n,n,t*.45*e,0,Math.PI*2),i.stroke()});let[a,o]=e.eu,s=Math.cos(e.yaw),c=Math.sin(e.yaw),l=(e,t)=>{let i=e-a,l=t-o,u=i*s-l*c,d=i*c+l*s;return[n+u*r,n+d*r]},u=(e,r,a,o,s)=>{let c=Math.hypot(e-n,r-n),l=t*.45;c>l&&(e=n+(e-n)*l/c,r=n+(r-n)*l/c),i.beginPath(),i.arc(e,r,a,0,Math.PI*2),s?(i.fillStyle=`rgba(255,255,255,${o})`,i.fill()):(i.strokeStyle=`rgba(255,255,255,${o})`,i.stroke())},d=e.mapa.findIndex(([,,e])=>e!==2);if(d>=0&&e.mapa[d][3]){let[r,a]=l(e.mapa[d][0],e.mapa[d][1]),o=Math.hypot(r-n,a-n),s=t*.45;o>s&&(r=n+(r-n)*s/o,a=n+(a-n)*s/o);let c=performance.now()/1400%1;[0,.5].forEach(e=>{let t=(c+e)%1;i.strokeStyle=`rgba(255,255,255,${(.75*(1-t)).toFixed(3)})`,i.lineWidth=1.5,i.beginPath(),i.arc(r,a,4+t*13,0,Math.PI*2),i.stroke()}),i.lineWidth=1}if(e.mapa.forEach(([e,t,n,r])=>{if(!r)return;let[a,o]=l(e,t);u(a,o,n===2?5:4,n===0?.35:.9,n===2),n===2&&(i.shadowColor=`#fff`,i.shadowBlur=10,u(a,o,3,1,!0),i.shadowBlur=0)}),e.artefato){let[r,a]=l(e.artefato.x,e.artefato.z);i.fillStyle=`#fff`,i.save(),i.translate(Math.min(Math.max(r,n-t*.45),n+t*.45),Math.min(Math.max(a,n-t*.45),n+t*.45)),i.shadowColor=`#fff`,i.shadowBlur=10,i.beginPath(),i.ellipse(0,0,3.5,4.8,0,0,Math.PI*2),i.fill(),i.restore(),i.shadowBlur=0}if(e.portal){let[t,n]=l(e.portal[0],e.portal[1]);i.strokeStyle=`rgba(255,255,255,.95)`,i.lineWidth=2,i.beginPath(),i.arc(t,n,7,.4,Math.PI*2-.4),i.stroke(),i.lineWidth=1}i.fillStyle=`#fff`,i.beginPath(),i.moveTo(n,n-7),i.lineTo(n-5,n+5),i.lineTo(n+5,n+5),i.closePath(),i.fill()}var Ps=document.querySelector(`[data-fiosconf]`),Fs=Ps.getContext(`2d`),Is=`simbolo`,Q=null,Ls=0,Rs=0,zs=null,Bs=60,Vs=!1,Hs=0,Us=!1;function Ws(){let e=Math.min(devicePixelRatio||1,2),t=Ps.width=innerWidth*e,n=Ps.height=innerHeight*e,r=Array.from({length:Rn?20:36},()=>{let r=.35+Math.random()*.65,i=Math.random()*6.283,a=(4+Math.random()*9)*e*r,o=Array.from({length:4+(Math.random()*4|0)},()=>({a:Math.random()*6.283,l:(10+Math.random()*34)*e*r,c:(Math.random()-.5)*.9,f:Math.random()*6.28}));return{x:Math.random()*t,y:Math.random()*n,vx:Math.cos(i)*a,vy:Math.sin(i)*a,z:r,fase:Math.random()*6.28,luz:0,espera:0,dend:o}}).sort((e,t)=>e.z-t.z);if(Q={nos:r,impulsos:[],dpr:e,W:t,H:n,alcance:Math.min(t,n)*.32},Io?.length){Q.entra=performance.now();let t=Io;r.forEach((n,r)=>{let i=t[r%t.length];n.x=i.x*e,n.y=i.y*e,n.z=i.z,n.vx*=.4,n.vy*=.4,n.pessoa=i.pessoa,n.luz=i.pessoa?1:.5}),r.sort((e,t)=>e.z-t.z),Io=null,setTimeout(()=>r.forEach((e,t)=>{e.pessoa&&qs(t,1)}),120)}}function Gs(e,t,n){e>t&&([e,t]=[t,e],n=1-n);let r=Q.nos[e],i=Q.nos[t],a=(e*73856093^t*19349663)%7/7-.43,o=1-n,s=(r.x+i.x)/2-(i.y-r.y)*a*.6,c=(r.y+i.y)/2+(i.x-r.x)*a*.6;return[o*o*r.x+2*o*n*s+n*n*i.x,o*o*r.y+2*o*n*c+n*n*i.y]}var Ks=(e,t)=>{let n=Q.nos[e],r=Q.nos[t];return Math.abs(n.z-r.z)>.3?0:1-Math.hypot(n.x-r.x,n.y-r.y)/(Q.alcance*(n.z+r.z)*.5)};function qs(e,t=1){let n=Q.nos[e];n.espera>0||t<.2||(n.luz=Math.max(n.luz,t),n.espera=.45,Q.nos.forEach((n,r)=>{r!==e&&Ks(e,r)>.12&&Q.impulsos.push({a:e,b:r,s:0,forca:t*.74,v:1.3+Math.random()*.9})}))}var Js=null;addEventListener(`pointermove`,e=>{if(W!==7||!Q)return;let t=e.clientX*Q.dpr,n=e.clientY*Q.dpr,r=80*Q.dpr;Js=[t,n],Q.nos.forEach((e,i)=>{Math.hypot(e.x-t,e.y-n)<r*e.z&&qs(i,1)})},{passive:!0});function Ys(){if(Rs)return;if(!Q){_r(8);return}V.style.transition=`none`,V.style.opacity=0,V.style.transform=`translate(-50%,-78%) scale(.62)`,V.style.filter=``,V.setAttribute(`k`,`0.6`),V.setAttribute(`vel`,`1`);let e=V.getBoundingClientRect();zs=[e.left+e.width/2,e.top+e.height/2],e.width,Bs=(window.CICCLOS_ONDA?.raio??.3)*e.width,Rs=performance.now(),B[7].classList.add(`convergindo`),$.sopro(1.4),Q.nos.forEach((e,t,n)=>{e.x0=e.x,e.y0=e.y,e.atraso=Math.random()*.25,e.ang=t/n.length*Math.PI*2,t%3==0&&qs(t,1)})}function Xs(e,t){Q||Ws();let n=Fs,{W:r,H:i,dpr:a,nos:o}=Q;n.clearRect(0,0,r,i),n.lineCap=`round`;let s=Rs?H((performance.now()-Rs)/1500):0;for(let n of o)if(s){let e=U((s-n.atraso)/(1-n.atraso)),t=n.ang+s*1.2,r=Is===`feixe`?(zs[0]+n.jx)*a:(zs[0]+Math.cos(t)*Bs)*a,o=Is===`feixe`?n.fy*i:(zs[1]+Math.sin(t)*Bs)*a;n.x=n.x0+(r-n.x0)*e*e,n.y=n.y0+(o-n.y0)*e*e,n.luz=Math.max(n.luz,e*.8)}else{if(n.x+=(n.vx+Math.sin(e*.3+n.fase)*4*a*n.z)*t,n.y+=(n.vy+Math.cos(e*.27+n.fase)*4*a*n.z)*t,Js){let e=Js[0]-n.x,r=Js[1]-n.y,i=Math.hypot(e,r);i<220*a&&(n.x+=e/i*6*a*n.z*t,n.y+=r/i*6*a*n.z*t)}n.x<-60*a?n.x=r+60*a:n.x>r+60*a&&(n.x=-60*a),n.y<-60*a?n.y=i+60*a:n.y>i+60*a&&(n.y=-60*a)}!s&&e>Ls&&(Ls=e+.9+Math.random()*1.3,qs(Math.random()*o.length|0,.85));let c=Q.entra?U((performance.now()-Q.entra)/900):1;for(let e=0;e<o.length;e++)for(let t=e+1;t<o.length;t++){let r=Ks(e,t)*(1-U(s/.45))*c;if(r<=0)continue;let i=(o[e].z+o[t].z)*.5,l=Math.max(o[e].luz,o[t].luz)*r;n.lineWidth=(.35+i*.8)*a,n.strokeStyle=`rgba(214,224,242,${((.06+.16*r)*i+l*.3).toFixed(3)})`,n.beginPath();for(let r=0;r<=18;r++){let[i,a]=Gs(e,t,r/18);r?n.lineTo(i,a):n.moveTo(i,a)}n.stroke()}Q.impulsos=Q.impulsos.filter(e=>{if(e.s+=t*e.v,s>.3||!s&&Ks(e.a,e.b)<=0)return!1;if(e.s>=1)return qs(e.b,e.forca),!1;let r=o[e.b].z,i=Math.random()<.75?1:.4;n.shadowColor=`rgba(200,220,255,.95)`,n.shadowBlur=10*a*e.forca*r;for(let t=0;t<3;t++){n.lineWidth=(2.6-t*.9)*a*r,n.strokeStyle=`rgba(240,246,255,${(e.forca*i*[.18,.45,.95][t]).toFixed(3)})`,n.beginPath();let o=[.2,.12,.05][t];for(let t=0;t<=8;t++){let[r,i]=Gs(e.a,e.b,Math.max(0,e.s-o+t/8*o));t?n.lineTo(r,i):n.moveTo(r,i)}n.stroke()}return n.shadowBlur=0,!0});for(let r of o){r.luz*=Math.exp(-t*3.2),r.espera=Math.max(0,r.espera-t);let i=(.1+.18*r.z+r.luz*.6)*(1-U(s/.4));n.lineWidth=(.35+r.z*.5)*a,n.strokeStyle=`rgba(226,234,250,${i.toFixed(3)})`;for(let t of r.dend){let i=t.a+Math.sin(e*.8+t.f)*.12,a=r.x+Math.cos(i)*t.l,o=r.y+Math.sin(i)*t.l,s=r.x+Math.cos(i+t.c)*t.l*.55,c=r.y+Math.sin(i+t.c)*t.l*.55;n.beginPath(),n.moveTo(r.x,r.y),n.quadraticCurveTo(s,c,a,o),n.stroke()}let o=(9+r.luz*22)*r.z*a,c=n.createRadialGradient(r.x,r.y,0,r.x,r.y,o);c.addColorStop(0,`rgba(235,242,255,${(.4+r.luz*.6)*r.z})`),c.addColorStop(1,`rgba(235,242,255,0)`),n.fillStyle=c,n.beginPath(),n.arc(r.x,r.y,o,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(245,248,255,${(.35+r.luz*.65).toFixed(3)})`,n.beginPath(),n.arc(r.x,r.y,(1.1+r.luz*1.5)*r.z*a,0,Math.PI*2),n.fill()}let l=window.CICCLOS_ONDA;if(Is===`feixe`&&s>.4){let e=U((s-.4)/.6),t=zs[0]*a;[[90,.22],[26,.5],[5,.95]].forEach(([r,o])=>{let s=r*a*(.4+.6*e),c=n.createLinearGradient(t-s,0,t+s,0);c.addColorStop(0,`rgba(230,238,255,0)`),c.addColorStop(.5,`rgba(236,242,255,${(o*e).toFixed(3)})`),c.addColorStop(1,`rgba(230,238,255,0)`),n.fillStyle=c,n.fillRect(t-s,0,s*2,i)})}if(Is===`simbolo`&&s>.5&&l){let e=U((s-.5)/.5)*(Vs?1-H((performance.now()-Hs)/600):1),t=Bs*a,r=zs[0]*a,i=zs[1]*a,o=performance.now()/1e3;for(let s=0;s<22;s++){let c=s/21,u=H(e*1.4-c*.4)*Math.PI*2;n.beginPath();for(let e=0;e<=120;e++){let a=-Math.PI/2+e/120*u,s=t*l.r(a,o,c,.6),d=r+s*Math.cos(a),f=i+s*Math.sin(a)*.985;e?n.lineTo(d,f):n.moveTo(d,f)}n.strokeStyle=`rgba(255,255,255,${((.12+.5*(1-c*.5))*e).toFixed(3)})`,n.lineWidth=a*1.2,n.stroke()}}if(Is===`feixe`&&s>=1&&W===7&&!Vs&&(Vs=!0,Hs=performance.now(),$.sino(4),setTimeout(()=>{Rs=0,Vs=!1,Is=`simbolo`,G=!1,kr=!1,fr=!0,_r(9)},350)),Is===`simbolo`&&s>=1&&W===7&&!Vs&&(Vs=!0,Hs=performance.now(),V.style.pointerEvents=`none`,V.style.transition=`opacity .6s ease`,V.style.opacity=1,$.sino(4),setTimeout(()=>{Rs=0,Vs=!1,G=!1,kr=!1,dr=!0,Us=!0,_r(8)},1e3)),Vs&&(Q.nos.forEach(e=>{e.luz=0,e.x=-9999}),Is===`feixe`)){let e=zs[0]*a;[[90,.22],[26,.5],[5,.95]].forEach(([t,r])=>{let o=t*a,s=n.createLinearGradient(e-o,0,e+o,0);s.addColorStop(0,`rgba(230,238,255,0)`),s.addColorStop(.5,`rgba(236,242,255,${r})`),s.addColorStop(1,`rgba(230,238,255,0)`),n.fillStyle=s,n.fillRect(e-o,0,o*2,i)})}}var Zs=document.querySelector(`[data-acao]`),Qs=document.querySelector(`[data-carga]`),$s=document.querySelector(`[data-acaotxt]`),ec=0;function tc(e,t,n,r=null){Zs.classList.remove(`sinc`,`pico`),Zs.style.transform=`translate(${e.toFixed(0)}px, ${t.toFixed(0)}px)`,Zs.classList.add(`ve`),Zs.classList.toggle(`segura`,r!=null),r!=null&&(Qs.style.strokeDashoffset=(163.4*(1-r)).toFixed(1)),$s.textContent!==n&&($s.textContent=n)}function nc(){Zs.classList.remove(`ve`,`segura`,`sinc`,`pico`)}function rc(e){if(W!==5)return;let t=null;e.orbes.forEach(e=>{!e.aceso&&!e.dorme&&!e.bloq&&e.naTela&&e.d<45&&(!t||e.d<t.d)&&(t=e)});let n=e.artefato;if(n&&n.pronto&&n.naTela&&n.d<40)tc(n.sx,n.sy,n.segura>.02?`abrindo`:n.d>14?Rn?`toque para ir até ele`:`clique para ir até ele`:Rn?`toque e segure para abrir`:`segure o clique para abrir`,n.d>14?null:n.segura);else if(t)tc(t.sx,t.sy,t.segura>.02?`acordando`:e.indo===e.orbes.indexOf(t)?`indo até a orbe`:Rn?`toque na orbe`:`clique na orbe`,t.segura>.02?t.segura:null);else if(e.portalTela){let t=e.portalTela,n=t.sx,r=t.sy;t.frente||(n=innerWidth-n,r=innerHeight*.5),n=H(n,70,innerWidth-70),r=H(r,110,innerHeight-70-60),tc(n,r,t.naTela?Rn?`toque no portal`:`clique no portal`:n<innerWidth/2?`← o portal`:`o portal →`)}else{let t=null;e.orbes.forEach(e=>{e.aceso&&e.naTela&&e.d<14&&(!t||e.d<t.d)&&(t=e)}),t&&!no.some(e=>e.classList.contains(`ve`))?tc(t.sx,t.sy,Rn?`toque para reler`:`clique para reler`):nc()}}function ic(e){if(W===2&&!Ki&&!G&&!fi&&e-Qi>1800&&e-ec>3200){let e=Ti.getBoundingClientRect();tc(e.left+e.width/2,e.top+e.height*.45,Rn?`toque`:`clique`)}else W!==5&&nc()}var $=et(),ac=document.querySelector(`[data-som]`),oc=document.querySelector(`[data-somtxt]`);ac.addEventListener(`click`,()=>{let e=!$.ligado;$.liga(e),ac.setAttribute(`aria-pressed`,String(e)),ac.classList.remove(`som--chama`),oc.textContent=e?`Som ligado`:`Ativar som`});var sc=Vn.slice(1),cc=document.querySelector(`[data-linha]`);cc.innerHTML=sc.map(e=>`<li><button type="button" data-ir="${e}" aria-label="${Bn[e]}"></button></li>`).join(``);var lc=document.querySelector(`[data-menu]`),uc=document.querySelector(`[data-menubt]`);function dc(e){uc.setAttribute(`aria-expanded`,String(e)),e?(lc.hidden=!1,requestAnimationFrame(()=>lc.classList.add(`ve`)),lc.querySelector(`button`)?.focus()):(lc.classList.remove(`ve`),setTimeout(()=>{lc.classList.contains(`ve`)||(lc.hidden=!0)},500))}uc.addEventListener(`click`,()=>dc(uc.getAttribute(`aria-expanded`)!==`true`)),addEventListener(`keydown`,e=>{e.key===`Escape`&&!lc.hidden&&dc(!1)});function fc(e){dc(!1),e!==W&&(Er()||(G=!1,kr=!1,Hn(e)>Hn(5)&&(Or=!0),_r(e)))}document.querySelectorAll(`[data-ir]`).forEach(e=>e.addEventListener(`click`,()=>fc(+e.dataset.ir)));function pc(e){cc.querySelectorAll(`button`).forEach(t=>{let n=+t.dataset.ir;t.classList.toggle(`atual`,n===e),t.classList.toggle(`feito`,Hn(n)<Hn(e))}),lc.querySelectorAll(`button`).forEach(t=>t.classList.toggle(`atual`,+t.dataset.ir===e)),document.querySelector(`[data-navant]`).disabled=Hn(e)<=1,document.querySelector(`[data-navprox]`).disabled=Hn(e)>=Vn.length-1}document.querySelector(`[data-navprox]`).addEventListener(`click`,()=>{Er()||(W===2?qi():W===4&&ya?Qa():W===5?(fo=!0,ur=!0,fc(6)):W===10&&Z&&Z.estado===0?zo():(kr=!1,G=!1,Pr(241)))}),document.querySelector(`[data-navant]`).addEventListener(`click`,()=>{let e=Vn[Hn(W)-1];e&&fc(e)});var mc=[()=>Xn(B[2]),()=>$n.prepara(),()=>{pi&&(pi.render(0,0),pi.render(0,null))},()=>{if(Pn&&!Fn)return Fn=Et(B[3].querySelector(`[data-nascergl]`),Pn,{SAI:Pa,FIM:za}),Fn.pronto},()=>Fn?.render(0,performance.now()/1e3),()=>{if(!ha)return ha=Xe(B[4].querySelector(`[data-tunel]`),Wa),ha.pronto},()=>ha?.render(0,performance.now()/1e3,{}),()=>(to||=Uo(),to.pronto)];ei=mc.length;function hc(){if($r>=ei){ti=!0;return}let e;try{e=mc[$r]()}catch(e){console.warn(`preparo`,$r,e)}Promise.resolve(e).catch(()=>{}).then(()=>{$r++,setTimeout(hc,60)})}setTimeout(hc,250);