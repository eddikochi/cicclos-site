import{$ as e,B as t,C as n,F as r,H as i,I as a,J as o,O as s,Q as c,R as l,T as u,U as d,Y as f,Z as p,_ as m,a as h,at as g,b as _,ct as v,dt as ee,et as y,f as b,i as x,k as S,l as te,lt as C,m as ne,n as re,nt as ie,o as ae,p as oe,pt as se,q as ce,tt as le,ut as ue,w as de}from"./three.module.eP_L6Uz4.js";import{i as fe,n as pe,r as me,t as he}from"./OutputPass.C5rKfv1e.js";var w=`
  float h2(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
  float nv(vec2 p){ return 0.55 * vn(p) + 0.3 * vn(p * 2.1 + 3.7) + 0.15 * vn(p * 4.3 + 1.1); }
`,T=`
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
`;function ge(e,t){return new c({side:1,depthWrite:!1,uniforms:{uT:e,uClaro:t},vertexShader:`varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:w+T+`uniform float uT; varying vec3 vD; void main(){ vec3 d = normalize(vD); gl_FragColor = vec4(ceu(vec3(d.x, max(d.y, 0.0), d.z), uT), 1.0); }`})}function _e(e,t,n,r){return new c({uniforms:{uT:e,uCam:t,uLuzes:n,uClaro:r},vertexShader:`varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:w+T+`uniform float uT; uniform vec3 uCam; uniform vec4 uLuzes[6]; varying vec3 vW;
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
      }`})}var E=`
  float crista(vec2 p){ float s = 0.0, a = 0.55; for (int i = 0; i < 5; i++){ float n = 1.0 - abs(vn(p) * 2.0 - 1.0); s += a * n * n; p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return s; }
`;function ve(e,n,r,{modo:i=`corredor`,centro:a=[0,0],livre:o=26,alto:l=46,base:u=-8,tam:d=900,seg:f=220}={}){let p=new t(d,d,f,f);p.rotateX(-Math.PI/2);let m=i===`arena`?`float mascara(vec2 p){ return smoothstep(${o.toFixed(1)}, ${(o+70).toFixed(1)}, length(p - vec2(${a[0].toFixed(1)}, ${a[1].toFixed(1)}))); }`:`float mascara(vec2 p){ return smoothstep(${o.toFixed(1)}, ${(o+60).toFixed(1)}, abs(p.x + sin(p.y * 0.012) * 18.0)); }`,h=w+E+m+`
    float altura(vec2 p){ return (crista(p * 0.011) * 1.7 - 0.45) * mascara(p) * ${l.toFixed(1)} + ${u.toFixed(1)}; }`,g=new c({uniforms:{uT:e,uCam:n,uClaro:r},vertexShader:h+`varying vec3 vW; varying vec3 vN; varying float vH;
      void main(){
        vec3 p = position; vec4 w0 = modelMatrix * vec4(p, 1.0);
        float h = altura(w0.xz), e = 2.0;
        float hx = altura(w0.xz + vec2(e, 0.0)), hz = altura(w0.xz + vec2(0.0, e));
        vN = normalize(vec3(h - hx, e, h - hz)); vH = h;
        w0.y += h; vW = w0.xyz;
        gl_Position = projectionMatrix * viewMatrix * w0;
      }`,fragmentShader:w+T+`uniform float uT; uniform vec3 uCam; varying vec3 vW; varying vec3 vN; varying float vH;
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
      }`}),_=new s(p,g);return _.frustumCulled=!1,_}function ye(e,t={value:0}){return new c({uniforms:{uT:e,uBrilho:t},vertexShader:`varying vec3 vN; varying vec3 vV; varying vec3 vL;
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
        gl_FragColor = vec4(c, 1.0); }`})}function D(e,t,i,{escala:o=1}={}){let c=new m,l=ye(e),u=new a(1,0);u.scale(.55,1.6,.55);let d=new n(u,l,t),f=[];for(let e=0;e<t;e++){let t=null;for(let n=0;n<30&&!t;n++)t=i(Math.random,e);t||=[0,-999,0],f.push({p:t,s:(.4+Math.random()*1.6)*o,gira:new C((Math.random()-.5)*.4,(Math.random()-.5)*.6,(Math.random()-.5)*.3),fase:Math.random()*6.28,rot0:new ne(Math.random(),Math.random()*6,Math.random())})}d.frustumCulled=!1,c.add(d);let p=Math.max(3,Math.round(t/5)),h=[];for(let e=0;e<p;e++){let n=null;for(let r=0;r<30&&!n;r++)n=i(Math.random,e+t);if(!n)continue;let r=new s(new g((.9+Math.random()*1.4)*o,.025*o,6,64,Math.PI*2-.7),new S({color:15134200,transparent:!0,opacity:.55,blending:2,depthWrite:!1}));r.position.set(...n),r.rotation.set(Math.random()*3,Math.random()*3,0),r.userData={y0:n[1],fase:Math.random()*6.28,v:(Math.random()-.5)*.5},c.add(r),h.push(r)}let _=new r;function v(e){for(let n=0;n<t;n++){let t=f[n];_.position.set(t.p[0],t.p[1]+Math.sin(e*.5+t.fase)*.6*o,t.p[2]),_.rotation.set(t.rot0.x+e*t.gira.x,t.rot0.y+e*t.gira.y,t.rot0.z+e*t.gira.z),_.scale.setScalar(t.s),_.updateMatrix(),d.setMatrixAt(n,_.matrix)}d.instanceMatrix.needsUpdate=!0,h.forEach(t=>{t.position.y=t.userData.y0+Math.sin(e*.4+t.userData.fase)*.8*o,t.rotation.z+=.004+t.userData.v*.01,t.rotation.x=Math.sin(e*.2+t.userData.fase)*.6,t.material.opacity=.35+.25*Math.sin(e*.9+t.userData.fase)})}return v(0),{grupo:c,anima:v}}var be=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),O=e=>(e=be(e),e*e*(3-2*e));function xe(e,t,{fios:n=200,forca:r=1,fenda:i=.5}={}){let a=new Float32Array(n*120*2*3),o=0;for(let e=0;e<n;e++){let e=Math.random()**1.5,t=Math.random();for(let n=0;n<120;n++)for(let r=0;r<2;r++)a.set([(n+r)/120,e,t],o*3),o++}let s=new h;s.setAttribute(`position`,new x(a,3));let l={uT:t,uR:{value:e},uF:{value:0},uFenda:{value:i},uNasce:{value:0}},d=new u(s,new c({uniforms:l,transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT, uR, uFenda, uNasce; varying float vA;
      void main(){ float s = position.x, u = position.y, o = position.z;
        float th = uFenda * 0.5 + s * (6.2831 - uFenda) + 1.5708, w = uT * 1.1;
        // nascendo: os fios chegam abertos (raio maior, mais soltos) e se fecham no desenho do anel
        float solto = 1.0 - uNasce;
        float r = uR * (1.0 + solto * (0.6 + u * 0.8) + u * (0.12 * sin(2.0 * th + w + u * 2.6) + 0.07 * sin(3.0 * th - w + 1.9 + u * 2.6)));
        th += solto * (1.2 + u * 2.0);
        vA = (1.1 - 0.7 * u) * (0.5 + 0.5 * o) * smoothstep(0.0, 0.05, s) * smoothstep(1.0, 0.95, s);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(cos(th) * r, sin(th) * r, (u - 0.5) * uR * 0.12 * sin(th * 2.0 + w), 1.0); }`,fragmentShader:`uniform float uF; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * vA * 0.045 * uF, 1.0); }`}));return d.frustumCulled=!1,{l:d,u:l,forca:r}}function Se(e,t,i,a,{fenda:o=.6,giro:s=0,escala:c=[.62,1.05,.7]}={}){let l=new n(e,t,a),u=new r,d=Array.from({length:a},(e,t)=>({a:o*.5+t/(a-1)*(Math.PI*2-o)+Math.PI/2+s,atraso:Math.random()*.35,gira:(.8+Math.random()*1.6)*(Math.random()<.5?-1:1),abre:.6+Math.random()*1.4,z:(Math.random()-.5)*2,tomb:new C(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(6)}));function f(e){for(let t=0;t<a;t++){let n=d[t],r=O((e-n.atraso)/.65),a=n.a+r*n.gira,o=i*(1+r*n.abre);u.position.set(Math.cos(a)*o,Math.sin(a)*o,r*n.z*i*.5),u.rotation.set(r*n.tomb.x,r*n.tomb.y,a+r*n.tomb.z);let s=(1-r)**1.4;u.scale.set(c[0]*s+1e-4,c[1]*s+1e-4,c[2]*s+1e-4),u.updateMatrix(),l.setMatrixAt(t,u.matrix)}l.instanceMatrix.needsUpdate=!0,l.visible=e<.999}return f(0),{inst:l,desfaz:f}}function Ce(e,t,n,r,i,{gatilho:a=16,dura:o=1.1,fios:s=200,forca:c=1,fenda:l=.6,giro:u=0,escala:d}={}){let f=new m,p=Se(e,t,n,r,{fenda:l,giro:u,escala:d}),h=xe(n,i,{fios:s,forca:c,fenda:l});f.add(p.inst),f.add(h.l);let g=0,_=!1;return{g:f,bl:p,luz:h,vivo(e,t){return!_&&e<a&&(_=!0),_&&g<1&&(g=Math.min(1,g+t/o),p.desfaz(g)),h.u.uNasce.value=O((g-.15)/.75),h.u.uF.value=c*O((g-.05)/.5),g},reinicia(){g=0,_=!1,p.desfaz(0),h.u.uF.value=0,h.u.uNasce.value=0},get e(){return g}}}var we=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),k=e=>(e=we(e),e*e*(3-2*e)),Te=`
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
`;function Ee(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.18,`rgba(255,255,255,.45)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new ae(e)}var De=[{nome:`Design`,linha:`A vitrine com a cara do seu negócio.`,tipo:0,pos:[-26,3.2,-34]},{nome:`Governança Digital`,linha:`Cada cliente e cada dado num lugar só, com dono.`,tipo:1,pos:[30,3.6,-22]},{nome:`Automações`,linha:`O repetitivo roda sozinho, sobre uma base arrumada.`,tipo:2,pos:[4,3.4,-58]}];function A(n,r={}){let a=n.querySelector(`canvas`),g=n.querySelector(`[data-card]`),ne=n.querySelector(`[data-lista]`),ae=n.querySelector(`[data-aviso]`);n.querySelector(`[data-fim]`);let w=matchMedia(`(max-width: 860px), (pointer: coarse)`).matches,T=new re({canvas:a,antialias:!1,powerPreference:`high-performance`});T.setPixelRatio(Math.min(devicePixelRatio||1,w?1.3:1.6)),T.toneMapping=4,T.toneMappingExposure=1;let E=new p,D=new l(62,1,.05,400),be=Ee(),O={value:0},Se={value:new C},Ce={value:.42},A={value:[,,,,,,].fill(0).map(()=>new ue(0,0,0,0))},Oe=new s(new y(300,48,24),ge(O,Ce));E.add(Oe);let ke=new s(new t(500,500),_e(O,Se,A,Ce));ke.rotation.x=-Math.PI/2,E.add(ke);let Ae=ve(O,Se,Ce,{modo:`arena`,centro:[0,-25],livre:96,alto:62,base:-8,tam:620,seg:w?160:240});Ae.position.set(0,0,-25),E.add(Ae);let je=(()=>{let e=w?700:1600,t=new Float32Array(e*220*2*3),n=0;for(let r=0;r<e;r++){let e=Math.random(),r=Math.random();for(let i=0;i<220;i++)for(let a=0;a<2;a++)t.set([(i+a)/220,e,r],n*3),n++}let r=new h;r.setAttribute(`position`,new x(t,3));let i=new u(r,new c({uniforms:{uT:O},transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT; varying float vA;
        void main(){ float s = position.x, u = position.y, o = position.z;
          float th = s * 6.2831853, R = 80.0;
          // a fita: larga de um lado, estreita do outro, e torcida meia volta ao longo do anel
          float larg = 12.0 + 9.0 * sin(th + 0.6), tor = th * 0.5 + 0.3 * sin(uT * 0.1);
          float d = (u - 0.5) * larg;
          vec3 radial = vec3(cos(th), 0.0, sin(th));
          vec3 p = radial * (R + d * cos(tor)) + vec3(0.0, d * sin(tor) + 1.2 * sin(th * 3.0 + uT * 0.4 + u * 4.0), 0.0);
          vA = (0.25 + 0.75 * pow(abs(u - 0.5) * 2.0, 2.0)) * (0.5 + 0.5 * o) * (0.6 + 0.4 * sin(th * 2.0 - uT * 0.3 + o * 6.0));
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,fragmentShader:`varying float vA; void main(){ gl_FragColor = vec4(vec3(0.9, 0.93, 1.0) * vA * 0.045, 1.0); }`}));return i.frustumCulled=!1,i.position.set(0,62,-175),i.rotation.set(.62,0,.18),E.add(i),i})(),Me=w?9e3:22e3,Ne=new Float32Array(Me*3),Pe=new Float32Array(Me);for(let e=0;e<Me;e++)Ne[e*3]=(Math.random()-.5)*140,Ne[e*3+1]=Math.random()*16-1,Ne[e*3+2]=(Math.random()-.5)*140-20,Pe[e]=Math.random();let Fe=new h;Fe.setAttribute(`position`,new x(Ne,3)),Fe.setAttribute(`aS`,new x(Pe,1));let Ie=new i(Fe,new c({transparent:!0,depthWrite:!1,blending:2,uniforms:{uT:O,uCam:Se,uPx:{value:T.getPixelRatio()}},vertexShader:Te+`attribute float aS; uniform float uT, uPx; uniform vec3 uCam; varying float vA;
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
      }`,fragmentShader:`varying float vA; void main(){ vec2 c = gl_PointCoord - .5; float d = length(c); if (d > .5) discard; gl_FragColor = vec4(vec3(0.85, 0.88, 0.95) * vA * smoothstep(.5, 0., d), 1.0); }`}));Ie.frustumCulled=!1,E.add(Ie);let j=De.map((e,t)=>{let n=new m;n.position.set(...e.pos);let r={uT:O,uTipo:{value:e.tipo},uVivo:{value:0},uPerto:{value:0},uDorme:{value:+(e.tipo===2)}},a=w?3800:9e3,o=new Float32Array(a*3),l=new Float32Array(a*3),f=new Float32Array(a);for(let e=0;e<a;e++){let t=new C().randomDirection();o.set([t.x,t.y,t.z],e*3),l.set([Math.random(),Math.random(),Math.random()],e*3),f[e]=+(Math.random()<.16)}let p=new h;p.setAttribute(`position`,new x(o,3)),p.setAttribute(`aRnd`,new x(l,3)),p.setAttribute(`aRastro`,new x(f,1)),r.uDispersa={value:0},r.uPx={value:T.getPixelRatio()};let g=new i(p,new c({uniforms:r,transparent:!0,depthWrite:!0,vertexShader:Te+`uniform float uT, uTipo, uVivo, uPerto, uDorme, uDispersa, uPx, uRevela; attribute vec3 aRnd; attribute float aRastro; varying float vA; varying float vLuz;
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
        }`}));n.add(g),r.uRevela={value:0};let v=new s(new _(2.1,w?24:48),new c({uniforms:r,transparent:!0,depthWrite:!1,blending:2,vertexShader:Te+`uniform float uT, uTipo, uVivo, uPerto; varying vec3 vN; varying vec3 vV; varying float vD;
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
        }`}));v.visible=!1,n.add(v);let ee=new u(new se(new _(3.5,2)),new de({color:13620960,transparent:!0,opacity:.07,depthWrite:!1}));n.add(ee);let y=new m;n.add(y),e.tipo===1?[2.9,3.6].forEach((e,t)=>{let n=new u(new se(new _(e,t)),new de({color:14673648,transparent:!0,opacity:.35,depthWrite:!1,blending:2}));n.userData.v=t?-.12:.18,y.add(n)}):e.tipo===2&&[0,1,2].forEach(e=>{let t=new Float32Array(780);for(let n=0;n<260;n++){let r=n/260*Math.PI*2,i=3.1+e*.5;t.set([Math.cos(r)*i,(Math.random()-.5)*.12,Math.sin(r)*i],n*3)}let n=new h;n.setAttribute(`position`,new x(t,3));let r=new i(n,new d({map:be,size:.22,transparent:!0,opacity:.4,depthWrite:!1,blending:2,color:15265528}));r.rotation.set(.5+e*.7,e*1.1,e*.4),r.userData.k=e,y.add(r)});let b=new le(new ie({map:be,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));b.scale.setScalar(3.2),n.add(b);let S=new s(new oe(.06,.9,80,16,1,!0),new c({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uT:O,uA:{value:e.tipo===2?.08:.25}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,fragmentShader:`uniform float uT, uA; varying vec2 vUv; void main(){ float a = (1.0 - vUv.y) * smoothstep(0.0, 0.08, vUv.y) * (0.8 + 0.2 * sin(uT * 1.5 + vUv.y * 20.0)); gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * a * uA, 1.0); }`}));return S.geometry.translate(0,40,0),S.scale.y=.001,n.add(S),E.add(n),{...e,g:n,u:r,nucleo:b,facho:S,enxame:null,extra:y,corpoLuz:v,vivo:0,segura:0,aceso:!1,achado:!1}}),M=new fe(T);M.addPass(new me(E,D)),M.addPass(new pe(new v(1,1),.75,.6,.62)),M.addPass(new he);function Le(){let e=n.clientWidth,t=n.clientHeight;T.setSize(e,t,!1),M.setSize(e,t),D.aspect=e/t,D.updateProjectionMatrix()}Le(),new ResizeObserver(Le).observe(n);let Re=0,ze=0;function N(e,t,n=3800){g.innerHTML=`${e}${t?`<small>${t}</small>`:``}`,g.classList.add(`ve`),clearTimeout(Re),n&&(Re=setTimeout(()=>g.classList.remove(`ve`),n))}function Be(e){ae.textContent=e,ae.classList.add(`ve`),clearTimeout(ze),ze=setTimeout(()=>ae.classList.remove(`ve`),3400)}let Ve=[`Design`,`Governança`,`Automação`];function P(){ne.innerHTML=j.map((e,t)=>`<li class="${e.achado?`achado`:``} ${e.aceso?`ok`:``} ${r.explorados?.[t]?`visto`:``}" aria-label="${e.nome}: ${e.aceso?`aceso`:e.achado?`encontrado`:`não encontrado`}"><i></i>${Ve[t]}</li>`).join(``)}P();let F=new C(0,1.7,8),I=.42,L=.05,He=0,Ue=.05,We=0,R=!1,z={x:0,y:0,dentro:!1},B=new Set,V=!1,H=null,Ge=new ce,Ke=new v,U=null;a.addEventListener(`pointermove`,e=>{let t=a.getBoundingClientRect();z.x=(e.clientX-t.left)/t.width*2-1,z.y=-((e.clientY-t.top)/t.height)*2+1,z.dentro=!0,H&&e.pointerType!==`mouse`&&(I-=(e.clientX-H.x)*.005,Ue=we(Ue+(e.clientY-H.y)*.003,-.5,.6),H={x:e.clientX,y:e.clientY})}),a.addEventListener(`pointerleave`,()=>z.dentro=!1);let qe=new e(new C,4.2);a.addEventListener(`pointerdown`,e=>{if(R){if(G.visible&&!q&&O.value-Je>1.2){let t=a.getBoundingClientRect();if(Ke.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),Ge.setFromCamera(Ke,D),qe.center.copy(G.position),Ge.ray.intersectsSphere(qe)){q=!0,r.aoPortal?.();return}}V=!0,H={x:e.clientX,y:e.clientY},a.setPointerCapture(e.pointerId)}}),addEventListener(`pointerup`,()=>{V=!1,H=null}),addEventListener(`keydown`,e=>{R&&(B.add(e.key.toLowerCase()),[`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,` `].includes(e.key.toLowerCase())&&e.preventDefault())}),addEventListener(`keyup`,e=>B.delete(e.key.toLowerCase()));let W={value:0},G=new m;{let e=w?220:480,t=new Float32Array(e*120*2*3),n=0;for(let r=0;r<e;r++){let e=Math.random()**1.6,i=Math.random(),a=r%2;for(let r=0;r<120;r++)for(let o=0;o<2;o++)t.set([(r+o)/120,e,a+i*.5],n*3),n++}let r=new h;r.setAttribute(`position`,new x(t,3));let a=new u(r,new c({uniforms:{uT:O,uPortal:W},transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT, uPortal; varying float vA;
        void main(){ float s = position.x, u = position.y, anel = floor(position.z), o = fract(position.z) * 2.0;
          float w = uT * 1.4;
          float fenda = 0.62, c0 = anel < 0.5 ? -1.57 + 0.5 * sin(uT * 0.25) : -1.15 + 0.7 * sin(uT * 0.33 + 1.7);
          float th = c0 + fenda * 0.5 + s * (6.2831 - fenda);
          float r = 3.4 * (1.0 + (anel * 0.04) + u * (0.19 * sin(2.0 * th + w + u * 2.6) + 0.11 * sin(3.0 * th - w + 1.9 + u * 2.6) + 0.06 * sin(th + w + 3.1)));
          vec2 der = vec2(cos(uT * 0.3), sin(uT * 0.4)) * 0.07 * 3.4 * u;
          vA = (1.15 - 0.75 * u) * (0.5 + 0.5 * o) * smoothstep(0.0, 0.05, s) * smoothstep(1.0, 0.95, s);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(cos(th) * r + der.x, sin(th) * r + der.y, (u - 0.5) * 0.6 * sin(th * 2.0 + w), 1.0); }`,fragmentShader:`uniform float uPortal; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * vA * 0.016 * min(uPortal, 1.3), 1.0); }`}));a.frustumCulled=!1,G.add(a);let l=document.createElement(`video`);l.src=`/cicclos-site/v3/vida-loop.mp4`,l.muted=!0,l.loop=!0,l.playsInline=!0,l.crossOrigin=`anonymous`;let p=new ee(l);p.colorSpace=f,G.userData.vid=l;let m=new s(new te(3.1,96),new c({uniforms:{uT:O,uPortal:W,uV:{value:p},uVid:{value:0},uGl:{value:0},uChama:{value:0}},transparent:!0,depthWrite:!1,side:2,vertexShader:`varying vec2 vP; void main(){ vP = position.xy / 3.1; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uT, uPortal, uVid, uGl, uChama; uniform sampler2D uV; varying vec2 vP;
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
          gl_FragColor = vec4(c, (borda * 0.95 + aro * 0.6) * min(1.0, uPortal)); }`}));m.position.z=-.4,G.add(m),G.userData.janela=m;let g=[];for(let e=1;e<=6;e++){let t=new s(new o(2.9-e*.12,3-e*.12,96),new S({color:15134200,transparent:!0,opacity:0,depthWrite:!1,blending:2,side:2}));t.position.z=-.6-e*.9,t.scale.setScalar(1-e*.1),G.add(t),g.push(t)}G.userData.fundo=g,l.preload=`auto`,l.load();let _=w?120:300,v=new Float32Array(_*3);for(let e=0;e<_;e++){let t=Math.random()*6.283,n=3.6+Math.random()*2.6,r=(Math.random()-.5)*2.4;v.set([Math.cos(t)*n,Math.sin(t)*n,r],e*3)}let y=new h;y.setAttribute(`position`,new x(v,3));let b=new i(y,new d({color:15265528,size:.05,transparent:!0,opacity:.35,depthWrite:!1,blending:2}));G.add(b),G.userData.poeira=b}let K=new s(new te(1,96),new c({uniforms:{uT:O,uA:{value:0},uR:{value:.5}},transparent:!0,depthWrite:!1,blending:2,side:2,vertexShader:`varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uT, uA, uR; varying vec2 vP;
      float h2(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
      void main(){ float r = length(vP), a = atan(vP.y, vP.x);
        float anel = exp(-pow((r - uR) * 7.0, 2.0)) * (0.5 + 0.5 * vn(vec2(a * 4.0, r * 6.0 - uT * 0.4)));
        gl_FragColor = vec4(vec3(0.82, 0.86, 0.92) * anel * uA, 1.0); }`}));K.rotation.x=-Math.PI/2,E.add(K),G.position.set(0,3.3,-92),G.visible=!1,E.add(G);let Je=0,q=!1,J=new C(-34,0,-82),Ye={value:0},Y={g:new m,estado:0,segura:0,sobe:0,abre:0,coleta:0};{let e=ye(O,Ye),t=new s(new b(.8,1.5,6,1),e);t.position.y=.75;let n=new s(new b(.8,1.5,6,1),e);n.rotation.x=Math.PI,n.position.y=-.75;let r=xe(1.7,O,{fios:w?60:120,fenda:.6});r.u.uNasce.value=1,r.u.uF.value=1.4;let i=new le(new ie({map:be,transparent:!0,opacity:0,depthWrite:!1,blending:2}));i.scale.setScalar(1.2);let a=new m;a.add(t,n),Y.g.add(a,r.l,i),Y.cima=t,Y.baixo=n,Y.corpo=a,Y.anel=r,Y.nucleo=i,Y.g.position.copy(J).setY(-3),Y.g.visible=!1,E.add(Y.g)}let X=new s(new te(1,96),K.material.clone());X.rotation.x=-Math.PI/2,X.position.set(J.x,.05,J.z),X.scale.setScalar(5),X.material.uniforms.uT=O,E.add(X);let Xe=j.map(()=>{let e=new oe(.035,.035,1,8,1,!0);e.translate(0,.5,0);let t=new s(e,new c({uniforms:{uT:O,uA:{value:0}},transparent:!0,depthWrite:!1,blending:2,side:2,vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uT, uA; varying vec2 vUv; void main(){ float pulso = pow(0.5 + 0.5 * sin(vUv.y * 40.0 - uT * 6.0), 6.0); gl_FragColor = vec4(vec3(0.88, 0.92, 1.0) * (0.35 + pulso) * uA, 1.0); }`}));return t.visible=!1,E.add(t),t}),Ze=new C(0,1,0),Qe=new C,Z=new C,$e=new C,et=performance.now(),tt=!0,Q=0,$=!1,nt=0;new IntersectionObserver(e=>{tt=e[0].isIntersecting,tt&&!Q&&(Q=requestAnimationFrame(rt))}).observe(n);function rt(e){Q=0;let t=we((e-et)/1e3,0,.05);et=e;let n=e/1e3;if(O.value=n,R&&z.dentro&&!w){let e=Math.sign(z.x)*Math.max(0,Math.abs(z.x)-.25)/.75;He+=(-e*1.3-He)*(1-Math.exp(-t*5)),Ue=we(z.y*.45,-.4,.5)}else He*=.9;I+=He*t,L+=(Ue-L)*(1-Math.exp(-t*4)),Ke.set(R&&!w?z.x:0,R&&!w?z.y:0),Ge.setFromCamera(Ke,D),U=null;for(let e of j)Ge.ray.distanceToPoint(e.g.position)<2.8&&e.g.position.distanceTo(F)<16&&(U=e);Y.estado===1&&Y.sobe>.8&&Ge.ray.distanceToPoint(Y.g.position)<2.4&&Y.g.position.distanceTo(F)<14&&(U=Y);let i=Y.estado>=1?k((n-nt-.6)/1.8)*(1-k(Y.coleta)):0,a=V&&!U||B.has(`w`)||B.has(`arrowup`),o=B.has(`s`)||B.has(`arrowdown`);if((B.has(`a`)||B.has(`arrowleft`))&&(I+=t*1.4),(B.has(`d`)||B.has(`arrowright`))&&(I-=t*1.4),We+=((R?a?7.5:o?-4:0:.9)-We)*(1-Math.exp(-t*2.5)),$e.set(-Math.sin(I),0,-Math.cos(I)),F.addScaledVector($e,We*t),!$)for(let e of j){Z.copy(F).sub(e.g.position),Z.y=0;let t=Z.length();t<4.2&&F.addScaledVector(Z.normalize(),4.2-t)}let s=Math.hypot(F.x,F.z+25);s>85&&(F.x*=85/s,F.z=(F.z+25)*85/s-25);let c=Math.sin(n*7)*.04*Math.min(1,Math.abs(We)/6);D.position.set(F.x,1.7+c,F.z),Z.set(F.x-Math.sin(I)*Math.cos(L),1.7+Math.sin(L),F.z-Math.cos(I)*Math.cos(L)),D.lookAt(Z),Se.value.copy(F);let l=j[1];if(j.forEach((e,a)=>{we(1-(e.g.position.distanceTo(F)-5)/14)>.5&&!e.achado&&(e.achado=!0,P(),N(e.nome,e.tipo===2&&!l.aceso?`Adormecido. Automação só roda sobre base arrumada.`:`Segure sobre o orbe para acordá-lo.`));let o=e.tipo===2&&!l.aceso;R&&V&&U===e&&!e.aceso?o?e._av||(Be(`Automação só roda sobre base arrumada. Acorde a Governança Digital primeiro.`),e._av=1,setTimeout(()=>e._av=0,2500)):(e.segura=Math.min(1,e.segura+t/1.6),e.segura>=1&&(e.aceso=!0,P(),r.aoAcender?setTimeout(()=>r.aoAcender(a),900):N(e.nome,e.linha,5200),e===l&&Be(`Algo acordou ao longe: Automações.`))):e.aceso||(e.segura=Math.max(0,e.segura-t*.8)),e.vivo+=((e.aceso?1:e.segura*.7)-e.vivo)*(1-Math.exp(-t*3)),e.u.uVivo.value=e.vivo,e.u.uPerto.value=+(U===e)*!e.aceso,e.u.uDorme.value+=(+!!o-e.u.uDorme.value)*.05,e.g.rotation.y+=t*(.08+e.vivo*.25),e.g.rotation.x=Math.sin(n*.3+a)*.15,G.visible||(e.g.position.y=De[a].pos[1]+Math.sin(n*.6+a*2)*.35),e.nucleo.material.opacity=e.vivo*.35+(U===e?.08:0),e.nucleo.scale.setScalar(2.6+e.vivo*3+e.segura*1.5*Math.sin(n*12)*.2),e.acendeFacho=Math.min(1,(e.acendeFacho||0)+(e.aceso?t*.8:0)),e.facho.scale.y=Math.max(.001,k(e.acendeFacho)),e.facho.material.uniforms.uA.value=.65*k(e.acendeFacho)*(1-i),e.u.uDispersa.value=e.segura*(1-e.vivo)*1.2*(1-e.u.uRevela.value),R&&V&&U===e&&(e.revelou=!0),e.u.uRevela.value+=(+!!e.revelou-e.u.uRevela.value)*(1-Math.exp(-t*.9)),e.corpoLuz.visible=e.u.uRevela.value>.01,e.extra.children.forEach(r=>{if(e.tipo===1)r.rotation.y+=t*r.userData.v*(1+e.vivo*2),r.rotation.x+=t*r.userData.v*.5,r.material.opacity=(o?.1:.18)+e.vivo*.45;else{let i=(n*1.6-r.userData.k*.7)%2.1;r.material.opacity=(o?.06:.12+e.vivo*.25)+Math.max(0,1-Math.abs(i-.4)*2.5)*(o?.1:.5+e.vivo*.4),r.rotation.y+=t*(.3+r.userData.k*.15)*(o?.2:1+e.vivo)}})}),j.filter(e=>e.aceso).length/3,!$&&j.every(e=>e.aceso)&&(!r.explorados||r.explorados.every(Boolean))&&($=!0,setTimeout(()=>{nt=O.value,Y.estado=1,Y.g.visible=!0,N(`As três orbes apontam para um lugar.`,w?`Siga a luz até o artefato e segure sobre ele para abrir.`:`Siga a luz até o artefato e segure o clique sobre ele para abrir.`,6e3),r.aoFinal?.()},1200)),Y.estado>=1){Y.sobe=Math.min(1,Y.sobe+t/2.4),Y.g.position.set(J.x,-3+k(Y.sobe)*4.5+Math.sin(n*.9)*.15,J.z),Y.corpo.rotation.y+=t*(.4+Y.segura*2),Y.anel.l.rotation.z+=t*.35,Y.anel.l.lookAt(D.position),Xe.forEach((e,t)=>{let n=j[t];Qe.copy(Y.g.position).sub(n.g.position);let r=Qe.length();e.position.copy(n.g.position),e.quaternion.setFromUnitVectors(Ze,Qe.normalize()),e.scale.set(1,Math.max(.001,r*i),1),e.material.uniforms.uA.value=.9*i,e.visible=i>.001&&n.g.visible});let e=n%3.2/3.2;if(X.material.uniforms.uR.value=.15+e*.8,X.material.uniforms.uA.value=(1-e)*.12*k(Y.sobe)*(Y.estado<3),Y.estado===1&&(R&&V&&U===Y?(Y.segura=Math.min(1,Y.segura+t/1.4),Y.segura>=1&&(Y.estado=2,r.aoAbrir?.())):Y.segura=Math.max(0,Y.segura-t*.8)),Ye.value=Y.segura*.6+k(Y.abre)*.8,Y.estado>=2){Y.estado===2&&(Y.abre=Math.min(1,Y.abre+t/1.6),Y.abre>=1&&(Y.estado=3));let e=k(Y.abre);Y.cima.position.y=.75+e*1.7,Y.cima.rotation.z=e*.7,Y.baixo.position.y=-.75-e*.6,Y.baixo.rotation.z=Math.PI-e*.4,Y.nucleo.material.opacity=e*(1-k((Y.coleta-.6)/.4)),Y.nucleo.scale.setScalar(1.2+e*2.4)}Y.estado===3&&(Y.coleta=Math.min(1,Y.coleta+t/1.3),Z.copy(D.position),Y.g.worldToLocal(Z),Y.nucleo.position.lerpVectors(new C(0,0,0),Z,k(Y.coleta)*.92),Y.coleta>=1&&(Y.estado=4,Y.g.visible=!1,X.material.uniforms.uA.value=0,Xe.forEach(e=>e.visible=!1),N(`Artefato guardado.`,`Ele abre o convite final. O portal da sala se abriu.`,5200),r.aoArtefato?.()))}if($&&!G.userData.veio&&Y.estado===4&&(G.userData.veio=!0,Je=n,G.position.set(F.x-Math.sin(I)*20,3.3,F.z-Math.cos(I)*20),G.visible=!0,Be(w?`Um portal se abriu à sua frente. Toque nele para atravessar.`:`Um portal se abriu à sua frente. Clique nele para atravessar.`),r.aoPortalSurge?.()),G.visible){let e=n-Je,t=k(e/1.4);G.scale.setScalar(Math.max(.001,t*(1+Math.sin(Math.min(1,e/1.4)*Math.PI)*.25))),W.value=Math.max(Math.min(1.6,t+Math.max(0,1-e/.6)*2),W.value*.95),G.lookAt(F.x,3.3,F.z),e%2.6/2.6,K.position.set(G.position.x,.05,G.position.z),K.scale.setScalar(6),K.material.uniforms.uR.value=.15+e%4.5/4.5*.8,K.material.uniforms.uA.value=(1-e%4.5/4.5)*.07*t,G.userData.poeira.rotation.z=n*.15;let i=G.userData.janela.material.uniforms,a=e-7.4;a>-.3&&G.userData.vid.paused&&G.userData.vid.play().catch(()=>{}),i.uVid.value=a<0?0:k(a/.6),i.uGl.value=a>0&&a<.6?1-a/.6:Math.random()<.012&&a>.6?.5:0,i.uChama.value=.5+.5*Math.sin(n*2),G.userData.fundo.forEach((e,r)=>{e.material.opacity=t*(.22-r*.03)*(.7+.3*Math.sin(n*2-r*.7))}),a>0&&!G.userData.pronto&&(G.userData.pronto=!0,N(`A sala está arrumada.`,w?`Toque no portal para atravessar.`:`Clique no portal para atravessar.`,0),r.aoPortalPronto?.())}{Z.copy(G.position).sub(F),Z.y=0;let e=Z.length();G.visible&&e<4.5&&R&&!q&&(q=!0,r.aoPortal?.())}if($&&G.visible){let e=n-Je,t=Math.cos(G.rotation.y),i=-Math.sin(G.rotation.y);j.forEach((a,o)=>{let s=e-(5+o*.8);if(s<0){let e=[-1,1,0][o],r=[3.3,3.3,7.4][o];Z.set(G.position.x+t*e*6.5,r+Math.sin(n*.8+o*2)*.35,G.position.z+i*e*6.5),a.g.position.lerp(Z,.03)}else if(!a.entrou){let e=k(s/.8);a.g.position.lerp(G.position,.08+e*.2),a.g.scale.setScalar(Math.max(.001,1-e)),e>=.99&&(a.entrou=!0,a.g.visible=!1,W.value=1.6,r.aoOrbeEntra?.(o))}})}if(j.forEach((e,t)=>A.value[t].set(e.g.position.x,e.g.position.y,e.g.position.z,.05+e.vivo*.35+e.u.uRevela.value*.05)),G.visible?A.value[3].set(G.position.x,3.3,G.position.z,.5*Math.min(1,W.value)):A.value[3].w=0,r.aoQuadro&&R){let e=Math.cos(I),t=-Math.sin(I);r.aoQuadro({orbes:j.map(n=>{Z.copy(n.g.position).sub(F),Z.y=0;let r=Z.length(),i=(Z.x*e+Z.z*t)/(r||1);return Z.copy(n.g.position).project(D),{d:r,pan:i,segura:n.segura,aceso:n.aceso,dorme:n.u.uDorme.value>.5,sx:(Z.x+1)/2*innerWidth,sy:(1-Z.y)/2*innerHeight,naTela:Z.z<1&&Math.abs(Z.x)<.95&&Math.abs(Z.y)<.95}}),proxima:j.findIndex(e=>!e.aceso)<0?null:j.findIndex(e=>!e.aceso),artefato:Y.estado>=1&&Y.estado<4?(Z.copy(Y.g.position).project(D),{d:Y.g.position.distanceTo(F),segura:Y.segura,pronto:Y.estado===1&&Y.sobe>.8,sx:(Z.x+1)/2*innerWidth,sy:(1-Z.y)/2*innerHeight,naTela:Z.z<1&&Math.abs(Z.x)<.95&&Math.abs(Z.y)<.95,x:J.x,z:J.z}):null,eu:[F.x,F.z],yaw:I,mapa:j.map(e=>[e.g.position.x,e.g.position.z,e.aceso?2:+!!e.achado,e.g.visible]),portal:G.visible?[G.position.x,G.position.z]:null})}je.rotation.z=.18+Math.sin(n*.05)*.05,M.render(),(tt||R)&&(Q=requestAnimationFrame(rt))}return Q=requestAnimationFrame(rt),{atualiza(){P()},reinicia(){j.forEach((e,t)=>{e.entrou=!1,e.g.visible=!0,e.g.scale.setScalar(1),e.aceso=e.achado=e.revelou=!1,e.segura=e.vivo=0,e.acendeFacho=0,e.u.uRevela.value=0,e.g.position.set(...De[t].pos)}),$=!1,nt=0,q=!1,Je=0,Object.assign(Y,{estado:0,segura:0,sobe:0,abre:0,coleta:0}),Y.g.visible=!1,Y.g.position.copy(J).setY(-3),Y.cima.position.set(0,.75,0),Y.cima.rotation.set(0,0,0),Y.baixo.position.set(0,-.75,0),Y.baixo.rotation.set(Math.PI,0,0),Y.nucleo.position.set(0,0,0),Y.nucleo.material.opacity=0,Xe.forEach(e=>e.visible=!1),X.material.uniforms.uA.value=0,G.visible=!1,G.userData.veio=!1,G.userData.pronto=!1,W.value=0,K.material.uniforms.uA.value=0,G.userData.vid.pause(),F.set(0,1.7,8),I=.42,L=Ue=.05,We=0,He=0,P(),N(`Arrumar a sala`,`Encontre as três orbes e segure sobre cada uma para acendê-la.`,4200)},entra(){R=!0,q=!1,n.classList.add(`explorando`),document.documentElement.style.overflow=`hidden`,r.lenis?.()?.stop(),Le(),N(`Arrumar a sala`,w?`Arraste para olhar. Segure para andar. Encontre os três orbes.`:`Mova o mouse para olhar. Segure o clique para andar. Encontre os três orbes.`,4600),Q||=requestAnimationFrame(rt)},sai(){R=!1,V=!1,n.classList.remove(`explorando`),document.documentElement.style.overflow=``,r.lenis?.()?.start(),Le()}}}export{ve as a,ge as c,D as i,Ce as n,T as o,xe as r,w as s,A as t};