import{$ as e,B as t,C as n,F as r,H as i,I as a,J as o,M as s,O as c,Q as l,R as u,S as d,T as f,U as p,X as m,Y as h,a as g,dt as _,et as v,f as y,ft as ee,g as b,i as x,k as te,l as ne,lt as re,n as ie,nt as ae,o as oe,ot as se,p as ce,q as le,rt as ue,t as de,tt as fe,u as pe,ut as S,w as me,y as he}from"./three.module.B0izd2uC.js";import{i as ge,n as _e,r as ve,t as ye}from"./OutputPass.D60_Wpyh.js";var C=`
  float h2(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
  float nv(vec2 p){ return 0.55 * vn(p) + 0.3 * vn(p * 2.1 + 3.7) + 0.15 * vn(p * 4.3 + 1.1); }
`,w=`
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
`;function be(t,n){return new e({side:1,depthWrite:!1,uniforms:{uT:t,uClaro:n},vertexShader:`varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:C+w+`uniform float uT; varying vec3 vD; void main(){ vec3 d = normalize(vD); gl_FragColor = vec4(ceu(vec3(d.x, max(d.y, 0.0), d.z), uT), 1.0); }`})}function xe(t,n,r,i){return new e({uniforms:{uT:t,uCam:n,uLuzes:r,uClaro:i},vertexShader:`varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:C+w+`uniform float uT; uniform vec3 uCam; uniform vec4 uLuzes[6]; varying vec3 vW;
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
      }`})}var T=`
  float crista(vec2 p){ float s = 0.0, a = 0.55; for (int i = 0; i < 5; i++){ float n = 1.0 - abs(vn(p) * 2.0 - 1.0); s += a * n * n; p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return s; }
`;function Se(n,r,i,{modo:a=`corredor`,centro:o=[0,0],livre:s=26,alto:l=46,base:u=-8,tam:d=900,seg:f=220}={}){let p=new t(d,d,f,f);p.rotateX(-Math.PI/2);let m=a===`arena`?`float mascara(vec2 p){ return smoothstep(${s.toFixed(1)}, ${(s+70).toFixed(1)}, length(p - vec2(${o[0].toFixed(1)}, ${o[1].toFixed(1)}))); }`:`float mascara(vec2 p){ return smoothstep(${s.toFixed(1)}, ${(s+60).toFixed(1)}, abs(p.x + sin(p.y * 0.012) * 18.0)); }`,h=C+T+m+`
    float altura(vec2 p){ return (crista(p * 0.011) * 1.7 - 0.45) * mascara(p) * ${l.toFixed(1)} + ${u.toFixed(1)}; }`,g=new e({uniforms:{uT:n,uCam:r,uClaro:i},vertexShader:h+`varying vec3 vW; varying vec3 vN; varying float vH;
      void main(){
        vec3 p = position; vec4 w0 = modelMatrix * vec4(p, 1.0);
        float h = altura(w0.xz), e = 2.0;
        float hx = altura(w0.xz + vec2(e, 0.0)), hz = altura(w0.xz + vec2(0.0, e));
        vN = normalize(vec3(h - hx, e, h - hz)); vH = h;
        w0.y += h; vW = w0.xyz;
        gl_Position = projectionMatrix * viewMatrix * w0;
      }`,fragmentShader:C+w+`uniform float uT; uniform vec3 uCam; varying vec3 vW; varying vec3 vN; varying float vH;
      void main(){
        vec3 n = normalize(vN), v = normalize(uCam - vW);
        float dist = length(uCam - vW);
        vec3 L = normalize(vec3(-0.35, 0.55, -0.75));
        float dif = max(dot(n, L), 0.0), rim = pow(1.0 - max(dot(n, v), 0.0), 3.0);
        float gr = vn(vW.xz * 0.6) * 0.5 + vn(vW.xz * 2.3) * 0.5;
        vec3 c = vec3(0.016, 0.017, 0.02) * (0.7 + 0.6 * gr) + vec3(0.42, 0.45, 0.5) * dif * 0.09;
        // prata nas encostas altas e voltadas para cima (como a areia molhada do hero, sem neve de cartão-postal)
        c = mix(c, vec3(0.5, 0.53, 0.58) * (0.5 + 0.7 * dif), smoothstep(0.62, 0.9, n.y) * smoothstep(${(l*.25).toFixed(1)}, ${(l*.7).toFixed(1)}, vH) * 0.12);
        c += vec3(0.7, 0.76, 0.85) * rim * 0.12;
        // código e luz: linhas topográficas finas que sobem devagar pela rocha
        float nivel = vW.y * 0.32 - uT * 0.08;
        float linha = smoothstep(0.03, 0.0, 0.5 - abs(fract(nivel) - 0.5)) * smoothstep(-2.0, 6.0, vH);
        c += vec3(0.75, 0.84, 1.0) * linha * 0.55 * exp(-dist * 0.004) / max(uClaro * 1.2, 0.3);
        // névoa: as montanhas de longe viram céu
        vec3 hz = normalize(vec3(vW.x - uCam.x, max(vW.y - uCam.y, 0.0) * 0.4, vW.z - uCam.z));
        c = mix(ceu(hz, uT), c * uClaro * 1.2, exp(-dist * 0.0028));
        gl_FragColor = vec4(c, 1.0);
      }`}),_=new c(p,g);return _.frustumCulled=!1,_}function E(t,n={value:0}){return new e({uniforms:{uT:t,uBrilho:n},vertexShader:`varying vec3 vN; varying vec3 vV; varying vec3 vL;
      void main(){
        #ifdef USE_INSTANCING
          mat4 mi = modelMatrix * instanceMatrix;
        #else
          mat4 mi = modelMatrix;
        #endif
        vec4 w = mi * vec4(position, 1.0);
        vN = normalize(mat3(mi) * normal); vV = normalize(cameraPosition - w.xyz); vL = position;
        gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform float uT, uBrilho; varying vec3 vN; varying vec3 vV; varying vec3 vL;
      void main(){
        float fr = pow(1.0 - abs(dot(normalize(vN), vV)), 2.4);
        vec3 c = vec3(0.02, 0.022, 0.026) + vec3(0.62, 0.68, 0.78) * fr * 0.55;
        c += vec3(0.5, 0.52, 0.56) * pow(max(dot(normalize(vN), normalize(vec3(-0.3, 0.8, 0.4))), 0.0), 8.0) * 0.4;
        // uma costura de luz que corre pelo corpo, como código passando
        float costura = exp(-pow((fract(vL.y * 0.9 - uT * 0.25) - 0.5) * 22.0, 2.0));
        c += vec3(0.8, 0.88, 1.0) * costura * (0.35 + uBrilho * 1.2);
        c += vec3(0.85, 0.9, 1.0) * fr * uBrilho * 0.8;
        gl_FragColor = vec4(c, 1.0); }`})}function D(e,t,n,{escala:i=1,nC:o=null}={}){let s=new b,l=E(e),u=new a(1,0);u.scale(.55,1.6,.55);let f=new d(u,l,t),p=[];for(let e=0;e<t;e++){let t=null;for(let r=0;r<30&&!t;r++)t=n(Math.random,e);t||=[0,-999,0],p.push({p:t,s:(.4+Math.random()*1.6)*i,gira:new S((Math.random()-.5)*.4,(Math.random()-.5)*.6,(Math.random()-.5)*.3),fase:Math.random()*6.28,rot0:new ce(Math.random(),Math.random()*6,Math.random())})}f.frustumCulled=!1,s.add(f),o??=Math.max(3,Math.round(t/5));let m=[];for(let e=0;e<o;e++){let r=null;for(let i=0;i<30&&!r;i++)r=n(Math.random,e+t);if(!r)continue;let a=new c(new se((.9+Math.random()*1.4)*i,.025*i,6,64,Math.PI*2-.7),new te({color:15134200,transparent:!0,opacity:.55,blending:2,depthWrite:!1}));a.position.set(...r),a.rotation.set(Math.random()*3,Math.random()*3,0),a.userData={y0:r[1],fase:Math.random()*6.28,v:(Math.random()-.5)*.5},s.add(a),m.push(a)}let h=new r;function g(e){for(let n=0;n<t;n++){let t=p[n];h.position.set(t.p[0],t.p[1]+Math.sin(e*.5+t.fase)*.6*i,t.p[2]),h.rotation.set(t.rot0.x+e*t.gira.x,t.rot0.y+e*t.gira.y,t.rot0.z+e*t.gira.z),h.scale.setScalar(t.s),h.updateMatrix(),f.setMatrixAt(n,h.matrix)}f.instanceMatrix.needsUpdate=!0,m.forEach(t=>{t.position.y=t.userData.y0+Math.sin(e*.4+t.userData.fase)*.8*i,t.rotation.z+=.004+t.userData.v*.01,t.rotation.x=Math.sin(e*.2+t.userData.fase)*.6,t.material.opacity=.35+.25*Math.sin(e*.9+t.userData.fase)})}return g(0),{grupo:s,anima:g}}var Ce=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),O=e=>(e=Ce(e),e*e*(3-2*e)),we=`
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
`;function Te(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.18,`rgba(255,255,255,.45)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new oe(e)}var Ee=[{nome:`Design`,linha:`A vitrine com a cara do seu negócio.`,tipo:0,pos:[-26,3.2,-34]},{nome:`Governança Digital`,linha:`Cada cliente e cada dado num lugar só, com dono.`,tipo:1,pos:[30,3.6,-22]},{nome:`Automações`,linha:`O repetitivo roda sozinho, sobre uma base arrumada.`,tipo:2,pos:[4,3.4,-58]}];function De(r,a={}){let d=r.querySelector(`canvas`),se=r.querySelector(`[data-card]`),ce=r.querySelector(`[data-lista]`),C=r.querySelector(`[data-aviso]`);r.querySelector(`[data-fim]`);let w=matchMedia(`(max-width: 860px), (pointer: coarse)`).matches,T=new ie({canvas:d,antialias:!1,powerPreference:`high-performance`});T.setPixelRatio(Math.min(devicePixelRatio||1,w?1.3:1.6)),T.toneMapping=4,T.toneMappingExposure=1;let E=new l,D=new u(62,1,.05,3e3),De=Te(),k={value:0},Oe={value:new S},ke={value:.42},Ae={value:[,,,,,,].fill(0).map(()=>new _(0,0,0,0))},je=new c(new fe(300,48,24),be(k,ke));E.add(je);let Me=new c(new t(500,500),xe(k,Oe,Ae,ke));Me.rotation.x=-Math.PI/2,E.add(Me);let Ne=Se(k,Oe,ke,{modo:`arena`,centro:[0,-25],livre:96,alto:62,base:-8,tam:620,seg:w?160:240});Ne.position.set(0,0,-25),E.add(Ne);let Pe=(()=>{let t=w?700:1600,n=new Float32Array(t*220*2*3),r=0;for(let e=0;e<t;e++){let e=Math.random(),t=Math.random();for(let i=0;i<220;i++)for(let a=0;a<2;a++)n.set([(i+a)/220,e,t],r*3),r++}let i=new g;i.setAttribute(`position`,new x(n,3));let a=new f(i,new e({uniforms:{uT:k},transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT; varying float vA;
        void main(){ float s = position.x, u = position.y, o = position.z;
          float th = s * 6.2831853, R = 760.0;
          // a fita: larga de um lado, estreita do outro, e torcida meia volta ao longo do anel
          float larg = 90.0 + 70.0 * sin(th + 0.6), tor = th * 0.5 + 0.3 * sin(uT * 0.1);
          float d = (u - 0.5) * larg;
          vec3 radial = vec3(cos(th), 0.0, sin(th));
          vec3 p = radial * (R + d * cos(tor)) + vec3(0.0, d * sin(tor) + 8.0 * sin(th * 3.0 + uT * 0.2 + u * 4.0), 0.0);
          vA = (0.25 + 0.75 * pow(abs(u - 0.5) * 2.0, 2.0)) * (0.5 + 0.5 * o) * (0.6 + 0.4 * sin(th * 2.0 - uT * 0.3 + o * 6.0));
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,fragmentShader:`varying float vA; void main(){ gl_FragColor = vec4(vec3(0.9, 0.93, 1.0) * vA * 0.011, 1.0); }`}));return a.frustumCulled=!1,a.position.set(0,280,-1300),a.rotation.set(1.32,0,.16),E.add(a),a})(),Fe=w?9e3:22e3,Ie=new Float32Array(Fe*3),Le=new Float32Array(Fe);for(let e=0;e<Fe;e++)Ie[e*3]=(Math.random()-.5)*140,Ie[e*3+1]=Math.random()*16-1,Ie[e*3+2]=(Math.random()-.5)*140-20,Le[e]=Math.random();let Re=new g;Re.setAttribute(`position`,new x(Ie,3)),Re.setAttribute(`aS`,new x(Le,1));let ze=new i(Re,new e({transparent:!0,depthWrite:!1,blending:2,uniforms:{uT:k,uCam:Oe,uPx:{value:T.getPixelRatio()}},vertexShader:we+`attribute float aS; uniform float uT, uPx; uniform vec3 uCam; varying float vA;
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
      }`,fragmentShader:`varying float vA; void main(){ vec2 c = gl_PointCoord - .5; float d = length(c); if (d > .5) discard; gl_FragColor = vec4(vec3(0.85, 0.88, 0.95) * vA * smoothstep(.5, 0., d), 1.0); }`}));ze.frustumCulled=!1,E.add(ze);let A=Ee.map((t,r)=>{let a=new b;a.position.set(...t.pos);let o={uT:k,uTipo:{value:t.tipo},uVivo:{value:0},uPerto:{value:0},uDorme:{value:+(t.tipo===2)}},s=w?3800:9e3,l=new Float32Array(s*3),u=new Float32Array(s*3),d=new Float32Array(s);for(let e=0;e<s;e++){let t=new S().randomDirection();l.set([t.x,t.y,t.z],e*3),u.set([Math.random(),Math.random(),Math.random()],e*3),d[e]=+(Math.random()<.16)}let f=new g;f.setAttribute(`position`,new x(l,3)),f.setAttribute(`aRnd`,new x(u,3)),f.setAttribute(`aRastro`,new x(d,1)),o.uDispersa={value:0},o.uPx={value:T.getPixelRatio()};let m=new i(f,new e({uniforms:o,transparent:!0,depthWrite:!0,vertexShader:we+`uniform float uT, uTipo, uVivo, uPerto, uDorme, uDispersa, uPx, uRevela; attribute vec3 aRnd; attribute float aRastro; varying float vA; varying float vLuz;
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
        }`}));a.add(m),o.uRevela={value:0};let h=new c(new he(2.1,w?24:48),new e({uniforms:o,transparent:!0,depthWrite:!1,blending:2,vertexShader:we+`uniform float uT, uTipo, uVivo, uPerto; varying vec3 vN; varying vec3 vV; varying float vD;
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
        }`}));h.visible=!1,a.add(h);let _=new b;a.add(_),t.tipo===1?[2.9,3.6].forEach((e,t)=>{let r=new b;for(let i=0;i<5;i++){let a=Array.from({length:97},(t,n)=>{let r=n/96*Math.PI*2;return new S(Math.cos(r)*e,Math.sin(r)*e,0)}),o=new n(new g().setFromPoints(a),new me({color:14673648,transparent:!0,opacity:.35,depthWrite:!1,blending:2}));o.rotation.set(i/5*Math.PI,(i*.7+t)%Math.PI,0),r.add(o)}r.material=r.children[0].material,r.children.forEach(e=>e.material=r.material),r.userData.v=t?-.12:.18,_.add(r)}):t.tipo===2&&[0,1,2].forEach(e=>{let t=new Float32Array(780);for(let n=0;n<260;n++){let r=n/260*Math.PI*2,i=3.1+e*.5;t.set([Math.cos(r)*i,(Math.random()-.5)*.12,Math.sin(r)*i],n*3)}let n=new g;n.setAttribute(`position`,new x(t,3));let r=new i(n,new p({map:De,size:.22,transparent:!0,opacity:.4,depthWrite:!1,blending:2,color:15265528}));r.rotation.set(.5+e*.7,e*1.1,e*.4),r.userData.k=e,_.add(r)});let v=new ae(new ue({map:De,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));v.scale.setScalar(3.2),a.add(v);let ee=new c(new y(.06,.9,80,16,1,!0),new e({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uT:k,uA:{value:t.tipo===2?.08:.25}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,fragmentShader:`uniform float uT, uA; varying vec2 vUv; void main(){ float a = (1.0 - vUv.y) * smoothstep(0.0, 0.08, vUv.y) * (0.8 + 0.2 * sin(uT * 1.5 + vUv.y * 20.0)); gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * a * uA, 1.0); }`}));return ee.geometry.translate(0,40,0),ee.scale.y=.001,ee.visible=!1,E.add(a),{...t,g:a,u:o,nucleo:v,facho:ee,enxame:null,extra:_,corpoLuz:h,vivo:0,segura:0,aceso:!1,achado:!1}}),Be=new ge(T);Be.addPass(new ve(E,D)),Be.addPass(new _e(new re(1,1),.75,.6,.62)),Be.addPass(new ye);function Ve(){let e=r.clientWidth,t=r.clientHeight;T.setSize(e,t,!1),Be.setSize(e,t),D.aspect=e/t,D.updateProjectionMatrix()}Ve(),new ResizeObserver(Ve).observe(r);let He=0,Ue=0;function j(e,t,n=3800){se.innerHTML=`${e}${t?`<small>${t}</small>`:``}`,se.classList.add(`ve`),clearTimeout(He),n&&(He=setTimeout(()=>se.classList.remove(`ve`),n))}function We(e){C.textContent=e,C.classList.add(`ve`),clearTimeout(Ue),Ue=setTimeout(()=>C.classList.remove(`ve`),3400)}let Ge=[`Design`,`Governança`,`Automação`];function Ke(){ce.innerHTML=A.map((e,t)=>`<li class="${e.achado?`achado`:``} ${e.aceso?`ok`:``} ${a.explorados?.[t]?`visto`:``}" aria-label="${e.nome}: ${e.aceso?`aceso`:e.achado?`encontrado`:`não encontrado`}"><i></i>${Ge[t]}</li>`).join(``)}Ke();let M=new S(0,1.7,8),N=.42,P=.05,F=0,I=.05,qe=0,L=!1,R=!1,Je=0,z=0,B={x:0,y:0,dentro:!1},V=new Set,H=!1,U=null,Ye=new le,Xe=new re,W=null;d.addEventListener(`pointermove`,e=>{let t=d.getBoundingClientRect();B.x=(e.clientX-t.left)/t.width*2-1,B.y=-((e.clientY-t.top)/t.height)*2+1,B.dentro=!0,U&&e.pointerType!==`mouse`&&(N-=(e.clientX-U.x)*.005,I=Ce(I+(e.clientY-U.y)*.003,-.5,.6),U={x:e.clientX,y:e.clientY})}),d.addEventListener(`pointerleave`,()=>B.dentro=!1);let Ze=new v(new S,4.2);d.addEventListener(`pointerdown`,e=>{if(L&&!R){if(K.visible&&!$e&&k.value-Qe>1.2){let t=d.getBoundingClientRect();if(Xe.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),Ye.setFromCamera(Xe,D),Ze.center.copy(K.position),Ye.ray.intersectsSphere(Ze)){z||=k.value;return}}H=!0,U={x:e.clientX,y:e.clientY},d.setPointerCapture(e.pointerId)}}),addEventListener(`pointerup`,()=>{H=!1,U=null}),addEventListener(`keydown`,e=>{L&&!R&&(V.add(e.key.toLowerCase()),[`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,` `].includes(e.key.toLowerCase())&&e.preventDefault())}),addEventListener(`keyup`,e=>V.delete(e.key.toLowerCase()));let G={value:0},K=new b;{let t=w?220:480,n=new Float32Array(t*120*2*3),r=0;for(let e=0;e<t;e++){let t=Math.random()**1.6,i=Math.random(),a=e%2;for(let e=0;e<120;e++)for(let o=0;o<2;o++)n.set([(e+o)/120,t,a+i*.5],r*3),r++}let a=new g;a.setAttribute(`position`,new x(n,3));let o=new f(a,new e({uniforms:{uT:k,uPortal:G},transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT, uPortal; varying float vA;
        void main(){ float s = position.x, u = position.y, anel = floor(position.z), o = fract(position.z) * 2.0;
          float w = uT * 1.4;
          float fenda = 0.62, c0 = anel < 0.5 ? -1.57 + 0.5 * sin(uT * 0.25) : -1.15 + 0.7 * sin(uT * 0.33 + 1.7);
          float th = c0 + fenda * 0.5 + s * (6.2831 - fenda);
          float r = 3.4 * (1.0 + (anel * 0.04) + u * (0.19 * sin(2.0 * th + w + u * 2.6) + 0.11 * sin(3.0 * th - w + 1.9 + u * 2.6) + 0.06 * sin(th + w + 3.1)));
          vec2 der = vec2(cos(uT * 0.3), sin(uT * 0.4)) * 0.07 * 3.4 * u;
          vA = (1.15 - 0.75 * u) * (0.5 + 0.5 * o) * smoothstep(0.0, 0.05, s) * smoothstep(1.0, 0.95, s);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(cos(th) * r + der.x, sin(th) * r + der.y, (u - 0.5) * 0.6 * sin(th * 2.0 + w), 1.0); }`,fragmentShader:`uniform float uPortal; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * vA * 0.016 * min(uPortal, 1.3), 1.0); }`}));o.frustumCulled=!1,K.add(o);let s=document.createElement(`video`);s.src=`/cicclos-site/v3/vida-loop.mp4`,s.muted=!0,s.loop=!0,s.playsInline=!0,s.crossOrigin=`anonymous`;let l=new ee(s);l.colorSpace=m,K.userData.vid=s;let u=new c(new ne(3.1,96),new e({uniforms:{uT:k,uPortal:G,uV:{value:l},uVid:{value:0},uGl:{value:0},uChama:{value:0}},transparent:!0,depthWrite:!1,side:2,vertexShader:`varying vec2 vP; void main(){ vP = position.xy / 3.1; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uT, uPortal, uVid, uGl, uChama; uniform sampler2D uV; varying vec2 vP;
        float hs(float n){ return fract(sin(n) * 43758.5453); }
        void main(){ float r = length(vP), a = atan(vP.y, vP.x);
          float giro = 0.0;                                                  // o vídeo fica parado (sem giro)
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
          gl_FragColor = vec4(c, (borda * 0.95 + aro * 0.6) * min(1.0, uPortal)); }`}));u.position.z=-.4,K.add(u),K.userData.janela=u;let d=[];for(let e=1;e<=6;e++){let t=new c(new h(2.9-e*.12,3-e*.12,96),new te({color:15134200,transparent:!0,opacity:0,depthWrite:!1,blending:2,side:2}));t.position.z=-.6-e*.9,t.scale.setScalar(1-e*.1),K.add(t),d.push(t)}K.userData.fundo=d,s.preload=`auto`,s.load();let _=w?120:300,v=new Float32Array(_*3);for(let e=0;e<_;e++){let t=Math.random()*6.283,n=3.6+Math.random()*2.6,r=(Math.random()-.5)*2.4;v.set([Math.cos(t)*n,Math.sin(t)*n,r],e*3)}let y=new g;y.setAttribute(`position`,new x(v,3));let b=new i(y,new p({color:15265528,size:.05,transparent:!0,opacity:.35,depthWrite:!1,blending:2}));K.add(b),K.userData.poeira=b}let q=new c(new ne(1,96),new e({uniforms:{uT:k,uA:{value:0},uR:{value:.5}},transparent:!0,depthWrite:!1,blending:2,side:2,vertexShader:`varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uT, uA, uR; varying vec2 vP;
      float h2(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
      void main(){ float r = length(vP), a = atan(vP.y, vP.x);
        float anel = exp(-pow((r - uR) * 7.0, 2.0)) * (0.5 + 0.5 * vn(vec2(a * 4.0, r * 6.0 - uT * 0.4)));
        gl_FragColor = vec4(vec3(0.82, 0.86, 0.92) * anel * uA, 1.0); }`}));q.rotation.x=-Math.PI/2,E.add(q),K.position.set(0,3.3,-92),K.visible=!1,E.add(K);let Qe=0,$e=!1;function et(e){let t=document.createElement(`canvas`);t.width=512,t.height=256;let n=t.getContext(`2d`),r=n.createImageData(512,256),i=new Float32Array(131072),a=new Float32Array(131072),s=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},c=(e,t,n)=>{let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,c=a*a*(3-2*a),l=o*o*(3-2*o),u=s(r%n,i),d=s((r+1)%n,i),f=s(r%n,i+1),p=s((r+1)%n,i+1);return u+(d-u)*c+(f-u)*l+(u-d-f+p)*c*l},l=(e,t,n,r)=>{let i=0,a=.5,o=1;for(let s=0;s<n;s++)i+=a*c(e*o,t*o,r*o),a*=.5,o*=2;return i};for(let t=0;t<256;t++)for(let n=0;n<512;n++){let r=n/512,o=t/256,s;if(e===`obsidiana`){let e=l(r*6,o*3,4,6)*.35,i=0;for(let[t,n,a]of[[.2,.35,38],[.62,.6,30],[.9,.25,44]]){let s=Math.min(Math.abs(r-t),1-Math.abs(r-t))*2,c=o-n,l=Math.hypot(s,c);i+=Math.sin((l+e)*a)*Math.exp(-l*2.2)}s=i*.5+l(r*40,o*20,3,40)*.25,a[t*512+n]=.5+.5*Math.sin((o+l(r*3,o*2,3,3)*.25)*34)}else s=l(r*5,o*2.5,4,5)*.8+Math.sin(o*60+l(r*4,o*2,3,4)*6)*.05+l(r*90,o*45,2,90)*.08,a[t*512+n]=l(r*3,o*1.5,3,3);i[t*512+n]=s}let u=e===`obsidiana`?3.2:2.2;for(let e=0;e<256;e++)for(let t=0;t<512;t++){let n=e*512+t,a=i[e*512+(t+1)%512]-i[e*512+(t-1+512)%512],o=i[Math.min(255,e+1)*512+t]-i[Math.max(0,e-1)*512+t],s=-a*u,c=-o*u,l=1,d=Math.hypot(s,c,l);s/=d,c/=d,l/=d,r.data[n*4]=(s*.5+.5)*255,r.data[n*4+1]=(c*.5+.5)*255,r.data[n*4+2]=(l*.5+.5)*255,r.data[n*4+3]=255}n.putImageData(r,0,0);let d=new oe(t);d.wrapS=o,d.anisotropy=4;let f=document.createElement(`canvas`);f.width=512,f.height=256;let p=f.getContext(`2d`),m=p.createImageData(512,256),h=document.createElement(`canvas`);h.width=512,h.height=256;let g=h.getContext(`2d`),_=g.createImageData(512,256);for(let t=0;t<131072;t++){let n=a[t],r=(e===`obsidiana`?.1+n*.35:.08+n*.22)*255;m.data[t*4]=m.data[t*4+1]=m.data[t*4+2]=r,m.data[t*4+3]=255,_.data[t*4]=_.data[t*4+1]=_.data[t*4+2]=n*255,_.data[t*4+3]=255}p.putImageData(m,0,0),g.putImageData(_,0,0);let v=new oe(f),y=new oe(h);return v.wrapS=y.wrapS=o,{normal:d,mapa:v,filme:y}}let tt=null;function nt(){let t=new URLSearchParams(location.search).get(`ovo`)===`obsidiana`?`obsidiana`:`perola`;if(!tt){let t=new l;t.add(new c(new fe(10,64,32),new e({side:1,vertexShader:`varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`varying vec3 vD; void main(){ float y = vD.y;
          vec3 c = mix(vec3(0.012), vec3(0.05, 0.052, 0.058), smoothstep(-0.6, 0.0, y));
          c += vec3(0.55, 0.58, 0.64) * exp(-pow((y - 0.04) * 9.0, 2.0));                     // faixa do horizonte
          c += vec3(2.2) * pow(max(dot(vD, normalize(vec3(-0.5, 0.75, 0.45))), 0.0), 60.0);   // luz macia no alto
          c += vec3(0.6) * pow(max(dot(vD, normalize(vec3(0.7, 0.3, -0.6))), 0.0), 30.0);      // contraluz fraca
          gl_FragColor = vec4(c, 1.0); }`})));let n=new de(T);tt=n.fromScene(t,.02).texture,n.dispose()}let{normal:n,mapa:r,filme:i}=et(t),a=t===`perola`,o=new s({color:a?921362:197380,metalness:0,roughness:a?.3:.08,roughnessMap:r,normalMap:n,normalScale:new re(a?.35:.6,a?.35:.6),clearcoat:a?.7:1,clearcoatRoughness:a?.12:.03,iridescence:a?.85:1,iridescenceIOR:a?1.55:1.8,iridescenceThicknessRange:a?[280,620]:[150,900],iridescenceThicknessMap:i,sheen:a?.5:0,sheenColor:new pe(9213869),sheenRoughness:.35,specularIntensity:.6,envMap:tt,envMapIntensity:a?.9:1.1,emissive:new pe(14673652),emissiveIntensity:0});return o.userData.tipo=t,o}let J=new S(-34,0,-82),rt={value:0},Y={g:new b,estado:0,segura:0,sobe:0,abre:0,coleta:0};{let e=nt();Y.mat=e;let t=new c(new fe(.85,96,48,0,Math.PI*2,0,Math.PI/2),e);t.scale.set(1,1.45,1);let n=new c(new fe(.85,96,48,0,Math.PI*2,Math.PI/2,Math.PI/2),e);n.scale.set(1,1.15,1);let r=new ae(new ue({map:De,transparent:!0,opacity:0,depthWrite:!1,blending:2}));r.scale.setScalar(1.2);let i=new b;i.add(t,n),Y.g.add(i,r),Y.cima=t,Y.baixo=n,Y.corpo=i,Y.nucleo=r,Y.g.position.copy(J).setY(-3),Y.g.visible=!1,E.add(Y.g)}let X=new c(new ne(1,96),q.material.clone());X.rotation.x=-Math.PI/2,X.position.set(J.x,.05,J.z),X.scale.setScalar(5),X.material.uniforms.uT=k,E.add(X);let it=A.map(()=>{let t=new Float32Array(3780),n=0;for(let e=0;e<7;e++){let r=Math.random();for(let i=0;i<90;i++)for(let a=0;a<2;a++)t.set([(i+a)/90,e/6,r],n*3),n++}let r=new g;r.setAttribute(`position`,new x(t,3));let i={uT:k,uA:{value:0},uDe:{value:new S},uPara:{value:new S},uCresce:{value:0}},a=new f(r,new e({uniforms:i,transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT, uCresce; uniform vec3 uDe, uPara; varying float vS; varying float vO;
        void main(){ float s = position.x * uCresce, f = position.y, o = position.z;
          vec3 meio = (uDe + uPara) * 0.5 + vec3(0.0, 1.6 + f * 0.6, 0.0);
          vec3 p = mix(mix(uDe, meio, s), mix(meio, uPara, s), s);
          p += vec3(sin(s * 9.0 + uT + f * 5.0), cos(s * 7.0 - uT * 0.8 + f * 4.0), sin(s * 8.0 + f * 3.0)) * (f - 0.5) * 0.5 * sin(s * 3.14159);
          vS = s; vO = o;
          gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0); }`,fragmentShader:`uniform float uT, uA; varying float vS; varying float vO; void main(){ float pulso = pow(0.5 + 0.5 * sin(vS * 30.0 - uT * 5.0 + vO * 6.0), 8.0); gl_FragColor = vec4(vec3(0.88, 0.92, 1.0) * (0.08 + pulso * 0.35) * uA, 1.0); }`}));return a.frustumCulled=!1,a.visible=!1,a.userData.u=i,E.add(a),a});new S(0,1,0),new S;let Z=new S,at=new S,ot=performance.now(),st=!0,Q=0,$=!1,ct=0;new IntersectionObserver(e=>{st=e[0].isIntersecting,st&&!Q&&(Q=requestAnimationFrame(lt))}).observe(r);function lt(e){Q=0;let t=Ce((e-ot)/1e3,0,.05);ot=e;let n=e/1e3;k.value=n;let r=!!z||$&&Y.estado<=1&&Y.sobe<1||Y.estado>=2&&Y.estado<4||K.visible&&!K.userData.pronto;if(r!==R&&(R=r,R&&(H=!1,U=null,V.clear()),a.aoAuto?.(R)),L&&!R&&B.dentro&&!w){let e=Math.sign(B.x)*Math.max(0,Math.abs(B.x)-.25)/.75;F+=(-e*1.3-F)*(1-Math.exp(-t*5)),I=Ce(B.y*.45,-.4,.5)}else F*=.9;if(R){let e=K.visible?K.position:Y.g.visible||$?J:null;if(e){let n=Math.atan2(-(e.x-M.x),-(e.z-M.z))-N;n=Math.atan2(Math.sin(n),Math.cos(n)),N+=n*(1-Math.exp(-t*2.2)),F=0,I=K.visible?.08:-.08}}N+=F*t,P+=(I-P)*(1-Math.exp(-t*4)),Xe.set(L&&!w?B.x:0,L&&!w?B.y:0),Ye.setFromCamera(Xe,D),W=null;for(let e of A)Ye.ray.distanceToPoint(e.g.position)<2.8&&e.g.position.distanceTo(M)<16&&(W=e);Y.estado===1&&Y.sobe>.8&&Ye.ray.distanceToPoint(Y.g.position)<2.4&&Y.g.position.distanceTo(M)<14&&(W=Y);let i=Y.estado>=1?O((n-ct-.6)/1.8)*(1-O(Y.coleta)):0,o=H&&!W||V.has(`w`)||V.has(`arrowup`),s=V.has(`s`)||V.has(`arrowdown`);if((V.has(`a`)||V.has(`arrowleft`))&&(N+=t*1.4),(V.has(`d`)||V.has(`arrowright`))&&(N-=t*1.4),qe+=((L?R?0:o?7.5:s?-4:0:.9)-qe)*(1-Math.exp(-t*2.5)),at.set(-Math.sin(N),0,-Math.cos(N)),M.addScaledVector(at,qe*t),z&&K.visible){Z.copy(K.position).sub(M),Z.y=0;let e=Z.length();e>.01&&M.addScaledVector(Z.normalize(),Math.min(e,t*(5+(n-z)*26)))}if(!$)for(let e of A){Z.copy(M).sub(e.g.position),Z.y=0;let t=Z.length();t<4.2&&M.addScaledVector(Z.normalize(),4.2-t)}let c=Math.hypot(M.x,M.z+25);c>85&&(M.x*=85/c,M.z=(M.z+25)*85/c-25);let l=Math.sin(n*7)*.04*Math.min(1,Math.abs(qe)/6);Je*=Math.exp(-t*1.8);let u=Je*.12;D.position.set(M.x+(Math.random()-.5)*u,1.7+l+(Math.random()-.5)*u,M.z),Z.set(M.x-Math.sin(N)*Math.cos(P),1.7+Math.sin(P),M.z-Math.cos(N)*Math.cos(P)),D.lookAt(Z),Oe.value.copy(M);let d=A[1];if(A.forEach((e,r)=>{Ce(1-(e.g.position.distanceTo(M)-5)/14)>.5&&!e.achado&&(e.achado=!0,Ke(),j(e.nome,e.tipo===2&&!d.aceso?`Adormecido. Automação só roda sobre base arrumada.`:`Segure sobre o orbe para acordá-lo.`,7500));let o=e.tipo===2&&!d.aceso;L&&H&&W===e&&!e.aceso?o?e._av||(We(`Automação só roda sobre base arrumada. Acorde a Governança Digital primeiro.`),e._av=1,setTimeout(()=>e._av=0,2500)):(e.segura=Math.min(1,e.segura+t/1.6),e.segura>=1&&(e.aceso=!0,Ke(),a.aoAcender?setTimeout(()=>a.aoAcender(r),900):j(e.nome,e.linha,8e3),e===d&&We(`Algo acordou ao longe: Automações.`))):e.aceso||(e.segura=Math.max(0,e.segura-t*.8)),e.vivo+=((e.aceso?1:e.segura*.7)-e.vivo)*(1-Math.exp(-t*3)),e.u.uVivo.value=e.vivo,e.u.uPerto.value=+(W===e)*!e.aceso,e.u.uDorme.value+=(+!!o-e.u.uDorme.value)*.05,e.g.rotation.y+=t*(.08+e.vivo*.25),e.g.rotation.x=Math.sin(n*.3+r)*.15,K.visible||(e.g.position.y=Ee[r].pos[1]+Math.sin(n*.6+r*2)*.35),e.nucleo.material.opacity=e.vivo*.35+(W===e?.08:0),e.nucleo.scale.setScalar(2.6+e.vivo*3+e.segura*1.5*Math.sin(n*12)*.2),e.acendeFacho=Math.min(1,(e.acendeFacho||0)+(e.aceso?t*.8:0)),e.facho.scale.y=Math.max(.001,O(e.acendeFacho)),e.facho.material.uniforms.uA.value=.65*O(e.acendeFacho)*(1-i),e.u.uDispersa.value=e.segura*(1-e.vivo)*1.2*(1-e.u.uRevela.value),L&&H&&W===e&&(e.revelou=!0),e.u.uRevela.value+=(+!!e.revelou-e.u.uRevela.value)*(1-Math.exp(-t*.9)),e.corpoLuz.visible=e.u.uRevela.value>.01,e.extra.children.forEach(r=>{if(e.tipo===1)r.rotation.y+=t*r.userData.v*(1+e.vivo*2),r.rotation.x+=t*r.userData.v*.5,r.material.opacity=(o?.1:.18)+e.vivo*.45;else{let i=(n*1.6-r.userData.k*.7)%2.1;r.material.opacity=(o?.06:.12+e.vivo*.25)+Math.max(0,1-Math.abs(i-.4)*2.5)*(o?.1:.5+e.vivo*.4),r.rotation.y+=t*(.3+r.userData.k*.15)*(o?.2:1+e.vivo)}})}),A.filter(e=>e.aceso).length/3,!$&&A.every(e=>e.aceso)&&(!a.explorados||a.explorados.every(Boolean))&&($=!0,setTimeout(()=>{ct=k.value,Y.estado=1,Y.g.visible=!0,j(`As três orbes apontam para um lugar.`,w?`Siga a luz até o artefato e segure sobre ele para abrir.`:`Siga a luz até o artefato e segure o clique sobre ele para abrir.`,6e3),a.aoFinal?.()},1200)),Y.estado>=1){Y.sobe=Math.min(1,Y.sobe+t/2.4),Y.g.position.set(J.x,-3+O(Y.sobe)*4.5+Math.sin(n*.9)*.15,J.z),Y.corpo.rotation.y+=t*(.4+Y.segura*2),it.forEach((e,t)=>{let n=A[t],r=e.userData.u;r.uDe.value.copy(n.g.position),r.uPara.value.copy(Y.g.position),r.uCresce.value=i,r.uA.value=i,e.visible=i>.001&&n.g.visible});let e=n%3.2/3.2;if(X.material.uniforms.uR.value=.15+e*.8,X.material.uniforms.uA.value=(1-e)*.12*O(Y.sobe)*(Y.estado<3),Y.estado===1&&(L&&H&&W===Y?(Y.segura=Math.min(1,Y.segura+t/1.4),Y.segura>=1&&(Y.estado=2,a.aoAbrir?.())):Y.segura=Math.max(0,Y.segura-t*.8)),rt.value=Y.segura*.6+O(Y.abre)*.8,Y.mat.emissiveIntensity=rt.value*.08,Y.estado>=2){Y.estado===2&&(Y.abre=Math.min(1,Y.abre+t/1.6),Y.abre>=1&&(Y.estado=3));let e=O(Y.abre);Y.cima.position.y=e*1.7,Y.cima.rotation.z=e*.7,Y.baixo.position.y=-e*.6,Y.baixo.rotation.z=-e*.4,Y.nucleo.material.opacity=e*(1-O((Y.coleta-.6)/.4)),Y.nucleo.scale.setScalar(1.2+e*2.4)}Y.estado===3&&(Y.coleta=Math.min(1,Y.coleta+t/1.3),Z.copy(D.position),Y.g.worldToLocal(Z),Y.nucleo.position.lerpVectors(new S(0,0,0),Z,O(Y.coleta)*.92),Y.coleta>=1&&(Y.estado=4,Y.g.visible=!1,X.material.uniforms.uA.value=0,it.forEach(e=>e.visible=!1),j(`Artefato guardado.`,`Ele abre o convite final. O portal da sala se abriu.`,5200),a.aoArtefato?.()))}if($&&!K.userData.veio&&Y.estado===4&&(K.userData.veio=!0,Qe=n,K.position.set(M.x-Math.sin(N)*20,3.3,M.z-Math.cos(N)*20),K.visible=!0,Je=1,a.aoPortalSurge?.()),K.visible){let e=n-Qe,t=O(e/1.4);K.scale.setScalar(Math.max(.001,t*(1+Math.sin(Math.min(1,e/1.4)*Math.PI)*.25))),G.value=Math.max(Math.min(1.6,t+Math.max(0,1-e/.6)*2),G.value*.95),K.lookAt(M.x,3.3,M.z),e%2.6/2.6,q.position.set(K.position.x,.05,K.position.z),q.scale.setScalar(6),q.material.uniforms.uR.value=.15+e%4.5/4.5*.8,q.material.uniforms.uA.value=(1-e%4.5/4.5)*.07*t,K.userData.poeira.rotation.z=n*.15;let r=K.userData.janela.material.uniforms,i=e-4.8;i>-.3&&K.userData.vid.paused&&K.userData.vid.play().catch(()=>{}),r.uVid.value=i<0?0:O(i/.6),r.uGl.value=i>0&&i<.6?1-i/.6:Math.random()<.012&&i>.6?.5:0,r.uChama.value=.5+.5*Math.sin(n*2),K.userData.fundo.forEach((e,r)=>{e.material.opacity=t*(.22-r*.03)*(.7+.3*Math.sin(n*2-r*.7))}),i>0&&!K.userData.pronto&&(K.userData.pronto=!0,Je=Math.max(Je,.5),j(`A sala está arrumada.`,w?`Toque no portal para atravessar.`:`Clique no portal para atravessar.`,0),a.aoPortalPronto?.())}{Z.copy(K.position).sub(M),Z.y=0;let e=Z.length();K.visible&&e<4.5&&L&&!$e&&($e=!0,a.aoPortal?.(innerWidth/2,innerHeight/2))}if($&&K.visible){let e=n-Qe;A.forEach((t,n)=>{let r=e-2.4;if(r<0||t.entrou)return;t.de||=t.g.position.clone();let i=O(r/2.2),o=[-1,1,0][n];Z.lerpVectors(t.de,K.position,i),Z.y+=Math.sin(i*Math.PI)*4,Z.x+=Math.sin(i*Math.PI)*o*5,t.g.position.copy(Z),t.g.scale.setScalar(Math.max(.001,1-O((i-.75)/.25))),i>=.999&&(t.entrou=!0,t.g.visible=!1,G.value=1.6,a.aoOrbeEntra?.(n))})}if(A.forEach((e,t)=>Ae.value[t].set(e.g.position.x,e.g.position.y,e.g.position.z,.05+e.vivo*.35+e.u.uRevela.value*.05)),K.visible?Ae.value[3].set(K.position.x,3.3,K.position.z,.5*Math.min(1,G.value)):Ae.value[3].w=0,a.aoQuadro&&L){let e=Math.cos(N),t=-Math.sin(N);a.aoQuadro({orbes:A.map(n=>{Z.copy(n.g.position).sub(M),Z.y=0;let r=Z.length(),i=(Z.x*e+Z.z*t)/(r||1);return Z.copy(n.g.position).project(D),{d:r,pan:i,segura:n.segura,aceso:n.aceso,dorme:n.u.uDorme.value>.5,sx:(Z.x+1)/2*innerWidth,sy:(1-Z.y)/2*innerHeight,naTela:Z.z<1&&Math.abs(Z.x)<.95&&Math.abs(Z.y)<.95}}),proxima:A.findIndex(e=>!e.aceso)<0?null:A.findIndex(e=>!e.aceso),artefato:Y.estado>=1&&Y.estado<4?(Z.copy(Y.g.position).project(D),{d:Y.g.position.distanceTo(M),segura:Y.segura,pronto:Y.estado===1&&Y.sobe>.8,sx:(Z.x+1)/2*innerWidth,sy:(1-Z.y)/2*innerHeight,naTela:Z.z<1&&Math.abs(Z.x)<.95&&Math.abs(Z.y)<.95,x:J.x,z:J.z}):null,eu:[M.x,M.z],yaw:N,mapa:A.map(e=>[e.g.position.x,e.g.position.z,e.aceso?2:+!!e.achado,e.g.visible]),portal:K.visible?[K.position.x,K.position.z]:null,portalTela:K.visible&&K.userData.pronto?(Z.copy(K.position).project(D),{sx:(Z.x+1)/2*innerWidth,sy:(1-Z.y)/2*innerHeight,frente:Z.z<1,naTela:Z.z<1&&Math.abs(Z.x)<.9&&Math.abs(Z.y)<.9}):null})}Pe.rotation.z=.18+Math.sin(n*.05)*.05,Be.render(),(st||L)&&(Q=requestAnimationFrame(lt))}return Q=requestAnimationFrame(lt),{atualiza(){Ke()},reinicia(){A.forEach((e,t)=>{e.entrou=!1,e.de=null,e.g.visible=!0,e.g.scale.setScalar(1),e.aceso=e.achado=e.revelou=!1,e.segura=e.vivo=0,e.acendeFacho=0,e.u.uRevela.value=0,e.g.position.set(...Ee[t].pos)}),$=!1,ct=0,$e=!1,Qe=0,Object.assign(Y,{estado:0,segura:0,sobe:0,abre:0,coleta:0}),Y.g.visible=!1,Y.g.position.copy(J).setY(-3),Y.cima.position.set(0,0,0),Y.cima.rotation.set(0,0,0),Y.baixo.position.set(0,0,0),Y.baixo.rotation.set(0,0,0),Y.nucleo.position.set(0,0,0),Y.nucleo.material.opacity=0,it.forEach(e=>e.visible=!1),X.material.uniforms.uA.value=0,z=0,K.visible=!1,K.userData.veio=!1,K.userData.pronto=!1,G.value=0,q.material.uniforms.uA.value=0,K.userData.vid.pause(),M.set(0,1.7,8),N=.42,P=I=.05,qe=0,F=0,Ke(),j(`Arrumar a sala`,`Encontre as três orbes e segure sobre cada uma para acendê-la.`,4200)},entra(){L=!0,$e=!1,z=0,r.classList.add(`explorando`),document.documentElement.style.overflow=`hidden`,a.lenis?.()?.stop(),Ve(),j(`Arrumar a sala`,w?`Arraste para olhar. Segure para andar. Encontre os três orbes.`:`Mova o mouse para olhar. Segure o clique para andar. Encontre os três orbes.`,4600),Q||=requestAnimationFrame(lt)},sai(){L=!1,H=!1,r.classList.remove(`explorando`),document.documentElement.style.overflow=``,a.lenis?.()?.start(),Ve()}}}export{C as a,w as i,D as n,be as o,Se as r,De as t};