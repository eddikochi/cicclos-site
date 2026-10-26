import{$ as e,A as t,B as n,C as r,F as i,H as a,I as o,J as s,M as c,N as l,O as u,Q as d,R as f,S as p,T as m,U as h,V as g,W as _,X as v,Y as y,a as b,dt as x,et as S,f as ee,ft as te,g as C,i as w,k as ne,l as T,lt as re,m as ie,n as ae,nt as oe,o as se,ot as ce,p as le,q as ue,r as E,rt as de,t as fe,tt as pe,u as me,ut as D,w as he,y as ge}from"./three.module.B0izd2uC.js";import{i as _e,n as ve,r as ye,t as be}from"./OutputPass.D60_Wpyh.js";var O=`
  float h2(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
  float nv(vec2 p){ return 0.55 * vn(p) + 0.3 * vn(p * 2.1 + 3.7) + 0.15 * vn(p * 4.3 + 1.1); }
`,k=`
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
`;function xe(t,n){return new e({side:1,depthWrite:!1,uniforms:{uT:t,uClaro:n},vertexShader:`varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:O+k+`uniform float uT; varying vec3 vD; void main(){ vec3 d = normalize(vD); gl_FragColor = vec4(ceu(vec3(d.x, max(d.y, 0.0), d.z), uT), 1.0); }`})}function Se(t,n,r,i){return new e({uniforms:{uT:t,uCam:n,uLuzes:r,uClaro:i},vertexShader:`varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:O+k+`uniform float uT; uniform vec3 uCam; uniform vec4 uLuzes[6]; varying vec3 vW;
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
      }`})}var A=`
  float crista(vec2 p){ float s = 0.0, a = 0.55; for (int i = 0; i < 5; i++){ float n = 1.0 - abs(vn(p) * 2.0 - 1.0); s += a * n * n; p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return s; }
`;function Ce(t,r,i,{modo:a=`corredor`,centro:o=[0,0],livre:s=26,alto:c=46,base:l=-8,tam:d=900,seg:f=220}={}){let p=new n(d,d,f,f);p.rotateX(-Math.PI/2);let m=a===`arena`?`float mascara(vec2 p){ return smoothstep(${s.toFixed(1)}, ${(s+70).toFixed(1)}, length(p - vec2(${o[0].toFixed(1)}, ${o[1].toFixed(1)}))); }`:`float mascara(vec2 p){ return smoothstep(${s.toFixed(1)}, ${(s+60).toFixed(1)}, abs(p.x + sin(p.y * 0.012) * 18.0)); }`,h=O+A+m+`
    float altura(vec2 p){ return (crista(p * 0.011) * 1.7 - 0.45) * mascara(p) * ${c.toFixed(1)} + ${l.toFixed(1)}; }`,g=new e({uniforms:{uT:t,uCam:r,uClaro:i,uRacha:{value:new x(0,0,0,0)}},vertexShader:h+`varying vec3 vW; varying vec3 vN; varying float vH;
      void main(){
        vec3 p = position; vec4 w0 = modelMatrix * vec4(p, 1.0);
        float h = altura(w0.xz), e = 2.0;
        float hx = altura(w0.xz + vec2(e, 0.0)), hz = altura(w0.xz + vec2(0.0, e));
        vN = normalize(vec3(h - hx, e, h - hz)); vH = h;
        w0.y += h; vW = w0.xyz;
        gl_Position = projectionMatrix * viewMatrix * w0;
      }`,fragmentShader:O+k+`uniform float uT; uniform vec3 uCam; uniform vec4 uRacha; varying vec3 vW; varying vec3 vN; varying float vH;
      void main(){
        vec3 n = normalize(vN), v = normalize(uCam - vW);
        float dist = length(uCam - vW);
        vec3 L = normalize(vec3(-0.35, 0.55, -0.75));
        float dif = max(dot(n, L), 0.0), rim = pow(1.0 - max(dot(n, v), 0.0), 3.0);
        float gr = vn(vW.xz * 0.6) * 0.5 + vn(vW.xz * 2.3) * 0.5;
        vec3 c = vec3(0.016, 0.017, 0.02) * (0.7 + 0.6 * gr) + vec3(0.42, 0.45, 0.5) * dif * 0.09;
        // prata nas encostas altas e voltadas para cima (como a areia molhada do hero, sem neve de cartão-postal)
        c = mix(c, vec3(0.5, 0.53, 0.58) * (0.5 + 0.7 * dif), smoothstep(0.62, 0.9, n.y) * smoothstep(${(c*.25).toFixed(1)}, ${(c*.7).toFixed(1)}, vH) * 0.12);
        c += vec3(0.7, 0.76, 0.85) * rim * 0.12;
        // código e luz: linhas topográficas finas que sobem devagar pela rocha
        float nivel = vW.y * 0.32 - uT * 0.08;
        float linha = smoothstep(0.03, 0.0, 0.5 - abs(fract(nivel) - 0.5)) * smoothstep(-2.0, 6.0, vH);
        c += vec3(0.75, 0.84, 1.0) * linha * 0.55 * exp(-dist * 0.004) / max(uClaro * 1.2, 0.3);
        vec3 rachaLuz = vec3(0.0); float rachaCore = 0.0, rachaParede = 0.0, rachaParedeLuz = 0.0, rachaAO = 0.0;
        // rachadura (uRacha = x, z, início, ligado): uma fenda que desce a encosta a partir do cume, com borda de luz
        if (uRacha.w > 0.0) {
          vec2 rd = vW.xz - uRacha.xy; vec2 rad = normalize(uRacha.xy - vec2(0.0, -25.0)), tg = vec2(-rad.y, rad.x);
          float lat = dot(rd, tg), ao = dot(rd, rad), idade = uT - uRacha.z;
          float meio = (vn(vec2(vW.y * 0.12, 2.0)) - 0.5) * 16.0 + (vn(vec2(vW.y * 0.55, 7.0)) - 0.5) * 5.0;
          float galho = (vn(vec2(vW.y * 0.2, 11.0)) - 0.5) * 22.0 + 9.0;
          float d = min(abs(lat - meio), abs(lat - galho) + 1.2 + max(0.0, 30.0 - vW.y) * 0.2);
          // galhos diagonais: a fenda se abre para os dois lados da encosta, longe do anel (para ser vista em volta dele)
          float abre = max(0.0, 52.0 - vW.y);
          d = min(d, abs(lat - (abre * 1.5 + (vn(vec2(vW.y * 0.3, 21.0)) - 0.5) * 8.0)) + 0.6);
          d = min(d, abs(lat + (abre * 1.3 + (vn(vec2(vW.y * 0.3, 31.0)) - 0.5) * 8.0)) + 0.6);
          float desceu = smoothstep(${(c*.9).toFixed(1)} - idade * 55.0, ${(c*.9).toFixed(1)} - idade * 55.0 + 4.0, vW.y);
          float perto = smoothstep(90.0, 30.0, abs(ao)) * smoothstep(110.0, 70.0, abs(lat)) * desceu;
          float larg = (1.0 + 2.6 * smoothstep(0.0, 1.5, idade)) * smoothstep(-6.0, 20.0, vW.y);
          float jag = larg * (0.5 + 0.9 * vn(vec2(vW.y * 1.4, lat * 0.25)));          // borda serrilhada, de rocha partida
          float lado = sign(lat - meio);                                                 // uma parede pega a luz, a outra fica na sombra
          rachaCore = smoothstep(jag * 0.55, jag * 0.15, d) * perto;                     // o fundo da fenda: negro
          rachaParede = (smoothstep(jag, jag * 0.6, d) - smoothstep(jag * 0.55, jag * 0.15, d)) * perto;
          rachaParedeLuz = lado > 0.0 ? 0.16 + 0.12 * vn(vW.xz * 2.0) : 0.02;
          rachaAO = smoothstep(jag * 4.0, jag, d) * perto;                               // a rocha em volta escurece
          float brilho = 1.8 * exp(-max(idade - 0.3, 0.0) * 1.1) + 0.18;
          rachaLuz = vec3(0.72, 0.82, 1.0) * exp(-pow(d / max(jag * 0.12, 0.05), 2.0)) * brilho * perto;   // um fio de luz lá no fundo
        }
        // névoa: as montanhas de longe viram céu
        vec3 hz = normalize(vec3(vW.x - uCam.x, max(vW.y - uCam.y, 0.0) * 0.4, vW.z - uCam.z));
        c = mix(ceu(hz, uT), c * uClaro * 1.2, exp(-dist * 0.0028));
        c *= 1.0 - rachaAO * 0.55;
        c = mix(c, vec3(rachaParedeLuz) * vec3(0.95, 0.97, 1.0), rachaParede);
        c = mix(c, vec3(0.002), rachaCore);
        c += rachaLuz;   // a fenda vem depois da névoa: lê de longe, com profundidade
        gl_FragColor = vec4(c, 1.0);
      }`}),_=new u(p,g);return _.frustumCulled=!1,_}function we(t,n={value:0}){return new e({uniforms:{uT:t,uBrilho:n},vertexShader:`varying vec3 vN; varying vec3 vV; varying vec3 vL;
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
        gl_FragColor = vec4(c, 1.0); }`})}function Te(e,t,n,{escala:r=1,nC:a=null}={}){let s=new C,c=we(e),l=new o(1,0);l.scale(.55,1.6,.55);let d=new p(l,c,t),f=[];for(let e=0;e<t;e++){let t=null;for(let r=0;r<30&&!t;r++)t=n(Math.random,e);t||=[0,-999,0],f.push({p:t,s:(.4+Math.random()*1.6)*r,gira:new D((Math.random()-.5)*.4,(Math.random()-.5)*.6,(Math.random()-.5)*.3),fase:Math.random()*6.28,rot0:new le(Math.random(),Math.random()*6,Math.random())})}d.frustumCulled=!1,s.add(d),a??=Math.max(3,Math.round(t/5));let m=[];for(let e=0;e<a;e++){let i=null;for(let r=0;r<30&&!i;r++)i=n(Math.random,e+t);if(!i)continue;let a=new u(new ce((.9+Math.random()*1.4)*r,.025*r,6,64,Math.PI*2-.7),new ne({color:15134200,transparent:!0,opacity:.55,blending:2,depthWrite:!1}));a.position.set(...i),a.rotation.set(Math.random()*3,Math.random()*3,0),a.userData={y0:i[1],fase:Math.random()*6.28,v:(Math.random()-.5)*.5},s.add(a),m.push(a)}let h=new i;function g(e){for(let n=0;n<t;n++){let t=f[n];h.position.set(t.p[0],t.p[1]+Math.sin(e*.5+t.fase)*.6*r,t.p[2]),h.rotation.set(t.rot0.x+e*t.gira.x,t.rot0.y+e*t.gira.y,t.rot0.z+e*t.gira.z),h.scale.setScalar(t.s),h.updateMatrix(),d.setMatrixAt(n,h.matrix)}d.instanceMatrix.needsUpdate=!0,m.forEach(t=>{t.position.y=t.userData.y0+Math.sin(e*.4+t.userData.fase)*.8*r,t.rotation.z+=.004+t.userData.v*.01,t.rotation.x=Math.sin(e*.2+t.userData.fase)*.6,t.material.opacity=.35+.25*Math.sin(e*.9+t.userData.fase)})}return g(0),{grupo:s,anima:g}}function Ee(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c={},l={},u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=[`setX`,`setY`,`setZ`,`setW`];for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.attributes[n];c[n]=new r.constructor(new r.array.constructor(r.count*r.itemSize),r.itemSize,r.normalized);let i=e.morphAttributes[n];i&&(l[n]||(l[n]=[]),i.forEach((e,t)=>{let r=new e.array.constructor(e.count*e.itemSize);l[n][t]=new e.constructor(r,e.itemSize,e.normalized)}))}let p=t*.5,m=10**Math.log10(1/t),h=p*m;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*m+h)},`}if(a in n)u.push(n[a]);else{for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),a=e.morphAttributes[n],u=r.itemSize,p=c[n],m=l[n];for(let e=0;e<u;e++){let t=d[e],n=f[e];if(p[n](o,r[t](i)),a)for(let e=0,r=a.length;e<r;e++)m[e][n](o,a[e][t](i))}}n[a]=o,u.push(o),o++}}let g=e.clone();for(let t in e.attributes){let e=c[t];if(g.setAttribute(t,new e.constructor(e.array.slice(0,o*e.itemSize),e.itemSize,e.normalized)),t in l)for(let e=0;e<l[t].length;e++){let n=l[t][e];g.morphAttributes[t][e]=new n.constructor(n.array.slice(0,o*n.itemSize),n.itemSize,n.normalized)}}return g.setIndex(u),g}var De=class extends d{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new E;e.deleteAttribute(`uv`);let t=new l({side:1}),n=new l,r=new g(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let a=new u(e,t);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let o=new p(e,n,6),s=new i;s.position.set(-10.906,2.009,1.846),s.rotation.set(0,-.195,0),s.scale.set(2.328,7.905,4.651),s.updateMatrix(),o.setMatrixAt(0,s.matrix),s.position.set(-5.607,-.754,-.758),s.rotation.set(0,.994,0),s.scale.set(1.97,1.534,3.955),s.updateMatrix(),o.setMatrixAt(1,s.matrix),s.position.set(6.167,.857,7.803),s.rotation.set(0,.561,0),s.scale.set(3.927,6.285,3.687),s.updateMatrix(),o.setMatrixAt(2,s.matrix),s.position.set(-2.017,.018,6.124),s.rotation.set(0,.333,0),s.scale.set(2.002,4.566,2.064),s.updateMatrix(),o.setMatrixAt(3,s.matrix),s.position.set(2.291,-.756,-2.621),s.rotation.set(0,-.286,0),s.scale.set(1.546,1.552,1.496),s.updateMatrix(),o.setMatrixAt(4,s.matrix),s.position.set(-2.193,-.369,-5.547),s.rotation.set(0,.516,0),s.scale.set(3.875,3.487,2.986),s.updateMatrix(),o.setMatrixAt(5,s.matrix),this.add(o);let c=new u(e,j(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let d=new u(e,j(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let f=new u(e,j(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let m=new u(e,j(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let h=new u(e,j(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let _=new u(e,j(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function j(e){return new t({color:0,emissive:16777215,emissiveIntensity:e})}var Oe=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),M=e=>(e=Oe(e),e*e*(3-2*e)),ke=`
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
`;function Ae(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.18,`rgba(255,255,255,.45)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),new se(e)}var je=[{nome:`Design`,linha:`A vitrine com a cara do seu negócio.`,tipo:0,pos:[-26,3.2,-34]},{nome:`Governança Digital`,linha:`Cada cliente e cada dado num lugar só, com dono.`,tipo:1,pos:[30,3.6,-22]},{nome:`Automações`,linha:`O repetitivo roda sozinho, sobre uma base arrumada.`,tipo:2,pos:[4,3.4,-58]}];function Me(t,o={}){let l=t.querySelector(`canvas`),g=t.querySelector(`[data-card]`),ce=t.querySelector(`[data-lista]`),le=t.querySelector(`[data-aviso]`);t.querySelector(`[data-fim]`);let E=matchMedia(`(max-width: 860px), (pointer: coarse)`).matches,O=new ae({canvas:l,antialias:!1,powerPreference:`high-performance`});O.setPixelRatio(Math.min(devicePixelRatio||1,E?1.3:1.6)),O.toneMapping=4,O.toneMappingExposure=1;let k=new d,A=new f(62,1,.05,3e3),Te=Ae(),j={value:0},Me={value:new D},Ne={value:.42},Pe={value:[,,,,,,].fill(0).map(()=>new x(0,0,0,0))},Fe=new u(new pe(300,48,24),xe(j,Ne));k.add(Fe);let Ie=new u(new n(500,500),Se(j,Me,Pe,Ne));Ie.rotation.x=-Math.PI/2,k.add(Ie);let Le=Ce(j,Me,Ne,{modo:`arena`,centro:[0,-25],livre:96,alto:62,base:-8,tam:620,seg:E?160:240});Le.position.set(0,0,-25),k.add(Le);let N=(()=>{let t=E?700:1600,n=new Float32Array(t*220*2*3),r=0;for(let e=0;e<t;e++){let e=Math.random(),t=Math.random();for(let i=0;i<220;i++)for(let a=0;a<2;a++)n.set([(i+a)/220,e,t],r*3),r++}let i=new b;i.setAttribute(`position`,new w(n,3));let a=new m(i,new e({uniforms:{uT:j,uAnelA:{value:1}},transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT; varying float vA;
        void main(){ float s = position.x, u = position.y, o = position.z;
          float th = s * 6.2831853, R = 760.0;
          // a fita: larga de um lado, estreita do outro, e torcida meia volta ao longo do anel
          float larg = 90.0 + 70.0 * sin(th + 0.6), tor = th * 0.5 + 0.3 * sin(uT * 0.1);
          float d = (u - 0.5) * larg;
          vec3 radial = vec3(cos(th), 0.0, sin(th));
          vec3 p = radial * (R + d * cos(tor)) + vec3(0.0, d * sin(tor) + 8.0 * sin(th * 3.0 + uT * 0.2 + u * 4.0), 0.0);
          vA = (0.25 + 0.75 * pow(abs(u - 0.5) * 2.0, 2.0)) * (0.5 + 0.5 * o) * (0.6 + 0.4 * sin(th * 2.0 - uT * 0.3 + o * 6.0));
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,fragmentShader:`uniform float uAnelA; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.9, 0.93, 1.0) * vA * 0.011 * uAnelA, 1.0); }`}));return a.frustumCulled=!1,a.position.set(0,280,-1300),a.rotation.set(1.32,0,.16),k.add(a),a.userData.pos0=a.position.clone(),a.userData.q0=a.quaternion.clone(),a})(),Re=E?9e3:22e3,ze=new Float32Array(Re*3),Be=new Float32Array(Re);for(let e=0;e<Re;e++)ze[e*3]=(Math.random()-.5)*140,ze[e*3+1]=Math.random()*16-1,ze[e*3+2]=(Math.random()-.5)*140-20,Be[e]=Math.random();let Ve=new b;Ve.setAttribute(`position`,new w(ze,3)),Ve.setAttribute(`aS`,new w(Be,1));let He=new a(Ve,new e({transparent:!0,depthWrite:!1,blending:2,uniforms:{uT:j,uCam:Me,uPx:{value:O.getPixelRatio()}},vertexShader:ke+`attribute float aS; uniform float uT, uPx; uniform vec3 uCam; varying float vA;
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
      }`,fragmentShader:`varying float vA; void main(){ vec2 c = gl_PointCoord - .5; float d = length(c); if (d > .5) discard; gl_FragColor = vec4(vec3(0.85, 0.88, 0.95) * vA * smoothstep(.5, 0., d), 1.0); }`}));He.frustumCulled=!1,k.add(He);let P=je.map((t,n)=>{let i=new C;i.position.set(...t.pos);let o={uT:j,uTipo:{value:t.tipo},uVivo:{value:0},uPerto:{value:0},uDorme:{value:+(t.tipo===2)},uPulso:{value:0}},s=E?3800:9e3,c=new Float32Array(s*3),l=new Float32Array(s*3),d=new Float32Array(s);for(let e=0;e<s;e++){let t=new D().randomDirection();c.set([t.x,t.y,t.z],e*3),l.set([Math.random(),Math.random(),Math.random()],e*3),d[e]=+(Math.random()<.16)}let f=new b;f.setAttribute(`position`,new w(c,3)),f.setAttribute(`aRnd`,new w(l,3)),f.setAttribute(`aRastro`,new w(d,1)),o.uDispersa={value:0},o.uPx={value:O.getPixelRatio()};let p=new a(f,new e({uniforms:o,transparent:!0,depthWrite:!0,vertexShader:ke+`uniform float uT, uTipo, uVivo, uPerto, uDorme, uDispersa, uPx, uRevela; attribute vec3 aRnd; attribute float aRastro; varying float vA; varying float vLuz;
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
        }`}));p.visible=!1,i.add(p),o.uRevela={value:0};let m=E?14:26,g=6.5,_=new u(new pe(g,32,20),new e({uniforms:o,transparent:!0,depthWrite:!1,side:1,blending:5,blendSrc:201,blendDst:205,vertexShader:`varying vec3 vP; varying vec3 vC; void main(){ vP = position; vC = (inverse(modelMatrix) * vec4(cameraPosition, 1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uT, uTipo, uVivo, uDorme, uDispersa, uRevela, uPulso; varying vec3 vP; varying vec3 vC;
        float h3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
        float vn3(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
                     mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
        float fbm3(vec3 p, int o){ float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { if (i >= o) break; s += a * vn3(p); p = p * 2.07 + vec3(1.7, 9.2, 3.1); a *= 0.5; } return s; }
        const vec3 VENTO = vec3(-0.6, -0.35, 0.25);
        // barata: só a forma grande (para a sombra própria e para pular o vazio)
        float densB(vec3 p){
          p.y += uRevela * uRevela * 4.0; float abre = 1.0 + uDispersa * 0.9 + uRevela * 0.6; vec3 q = p / abre;
          return smoothstep(0.0, 1.2, 2.4 - length(q) + (vn3(q * 0.9 + vec3(0.0, -uT * 0.3, 0.0)) - 0.5) * 2.0) * (1.0 - smoothstep(0.3, 0.95, uRevela));
        }
        float dens(vec3 p, int o){
          p.y += uRevela * uRevela * 4.0;                                   // ao revelar, a fumaça cai e se abre
          float abre = 1.0 + uDispersa * 0.9 + uRevela * 0.6;
          vec3 q = p / abre;
          if (length(q) > 4.3) { vec3 vd0 = normalize(VENTO); float ao0 = dot(p, vd0); if (ao0 < 0.0 || length(p - vd0 * ao0) > 2.2) return 0.0; }   // vazio: nem fumaça nem rastro
          // turbulência: o ruído empurra o próprio ponto (dobras de fumaça de verdade, não bolas)
          vec3 tq = q * 0.7 + vec3(0.0, -uT * 0.22, uT * 0.08);
          vec3 w = vec3(vn3(tq), vn3(tq + 5.2), vn3(tq + 11.7)) - 0.5;
          q += w * (1.3 + uDispersa * 1.5 + uDorme * 0.8);
          float n = fbm3(q * 1.25 + vec3(0.0, -uT * 0.35, 0.0), o);
          float forma;
          if (uTipo < 0.5) forma = 2.2 - length(q) + (n - 0.5) * 2.4;                          // Design: macia, ondulada
          else if (uTipo < 1.5) forma = 2.1 - length(q) + (abs(n - 0.5) * 2.0 - 0.5) * 2.0;     // Governança: dobras mais marcadas
          else forma = 2.0 - length(q) + (n - 0.5) * 2.0 + 0.35 * sin(length(q) * 5.0 - uT * 2.5);   // Automações: pulsos
          float d = smoothstep(0.0, 0.9, forma);
          // o rastro: fiapos que escorrem com o vento
          vec3 vd = normalize(VENTO); float ao = dot(p, vd); vec3 pr = p - vd * ao;
          float fio = step(0.0, ao) * smoothstep(5.5, 1.5, ao) * smoothstep(1.3, 0.0, length(pr) + (fbm3(p * 0.9 - vd * uT * 0.9, 2) - 0.5) * 2.2 - ao * 0.12);
          d = max(d, fio * 0.45 * smoothstep(0.35, 0.65, n));
          return d * (1.0 - uDispersa * 0.55) * (1.0 - uDorme * 0.35) * (1.0 - smoothstep(0.3, 0.95, uRevela));
        }
        void main(){
          vec3 ro = vC, rd = normalize(vP - vC);
          float b = dot(ro, rd), c = dot(ro, ro) - ${(g*g).toFixed(2)}, h = b * b - c; if (h < 0.0) discard;
          h = sqrt(h); float t0 = max(0.0, -b - h), t1 = -b + h; if (t1 <= 0.0) discard;
          float dt = (t1 - t0) / float(${m});
          float j = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))) + floor(uT * 60.0) * 0.618034);   // pontilhado estável (gradiente intercalado): sem faixas e sem chuvisco
          float T = 1.0; vec3 col = vec3(0.0);
          vec3 L = normalize(vec3(-0.4, 0.8, 0.45));
          vec3 claro = mix(vec3(0.5, 0.53, 0.58), vec3(0.78, 0.81, 0.86), uVivo), escuro = vec3(0.07, 0.075, 0.085);
          for (int i = 0; i < ${m}; i++) {
            float t = t0 + (float(i) + j) * dt; vec3 p = ro + rd * t;
            float d = dens(p, 3); if (d < 0.004) continue;
            // luz: duas amostras baratas rumo à luz (sombra própria)
            float sh = densB(p + L * 0.55) + densB(p + L * 1.3);
            float luz = exp(-sh * 1.6);
            float pow_ = 1.0 - exp(-d * 2.2 * 2.0);                                  // efeito "pó de prata" na borda iluminada
            vec3 c = mix(escuro, claro, luz) * (0.55 + 0.45 * pow_) + vec3(0.03, 0.033, 0.036);
            c += vec3(1.0, 0.97, 0.93) * uPulso * 1.6 * exp(-length(p) * 0.85) * (0.4 + 0.6 * luz);   // o pulso: a luz de dentro acende a fumaça no ritmo (o tempo de clicar)
            float a = 1.0 - exp(-d * 1.9 * dt);
            col += T * a * c; T *= 1.0 - a;
            if (T < 0.02) break;
          }
          float A = 1.0 - T; if (A < 0.003) discard;
          gl_FragColor = vec4(col * (1.0 - uDorme * 0.45), A);
        }`}));_.frustumCulled=!1,_.renderOrder=2,i.add(_);let v=new u(new ge(2.1,E?24:48),new e({uniforms:o,transparent:!0,depthWrite:!1,blending:2,vertexShader:ke+`uniform float uT, uTipo, uVivo, uPerto; varying vec3 vN; varying vec3 vV; varying float vD;
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
        }`}));v.visible=!1,i.add(v);let y=new C;i.add(y),t.tipo===1?[2.9,3.6].forEach((e,t)=>{let n=new C;for(let i=0;i<5;i++){let a=Array.from({length:97},(t,n)=>{let r=n/96*Math.PI*2;return new D(Math.cos(r)*e,Math.sin(r)*e,0)}),o=new r(new b().setFromPoints(a),new he({color:14673648,transparent:!0,opacity:.35,depthWrite:!1,blending:2}));o.rotation.set(i/5*Math.PI,(i*.7+t)%Math.PI,0),n.add(o)}n.material=n.children[0].material,n.children.forEach(e=>e.material=n.material),n.userData.v=t?-.12:.18,y.add(n)}):t.tipo===2&&[0,1,2].forEach(e=>{let t=new Float32Array(780);for(let n=0;n<260;n++){let r=n/260*Math.PI*2,i=3.1+e*.5;t.set([Math.cos(r)*i,(Math.random()-.5)*.12,Math.sin(r)*i],n*3)}let n=new b;n.setAttribute(`position`,new w(t,3));let r=new a(n,new h({map:Te,size:.22,transparent:!0,opacity:.4,depthWrite:!1,blending:2,color:15265528}));r.rotation.set(.5+e*.7,e*1.1,e*.4),r.userData.k=e,y.add(r)});let x=new oe(new de({map:Te,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));x.scale.setScalar(3.2),i.add(x);let S=new u(new ee(.06,.9,80,16,1,!0),new e({transparent:!0,depthWrite:!1,blending:2,side:2,uniforms:{uT:j,uA:{value:t.tipo===2?.08:.25}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,fragmentShader:`uniform float uT, uA; varying vec2 vUv; void main(){ float a = (1.0 - vUv.y) * smoothstep(0.0, 0.08, vUv.y) * (0.8 + 0.2 * sin(uT * 1.5 + vUv.y * 20.0)); gl_FragColor = vec4(vec3(0.85, 0.9, 1.0) * a * uA, 1.0); }`}));return S.geometry.translate(0,40,0),S.scale.y=.001,S.visible=!1,k.add(i),{...t,g:i,u:o,nucleo:x,facho:S,enxame:null,extra:y,corpoLuz:v,vivo:0,segura:0,aceso:!1,achado:!1}}),Ue=new _e(O);Ue.addPass(new ye(k,A)),Ue.addPass(new ve(new re(1,1),.75,.6,.62)),Ue.addPass(new be);function We(){let e=t.clientWidth,n=t.clientHeight;O.setSize(e,n,!1),Ue.setSize(e,n),A.aspect=e/n,A.updateProjectionMatrix()}We(),new ResizeObserver(We).observe(t);let Ge=0,Ke=0;function qe(e,t,n=3800){g.innerHTML=`${e}${t?`<small>${t}</small>`:``}`,g.classList.add(`ve`),clearTimeout(Ge),n&&(Ge=setTimeout(()=>g.classList.remove(`ve`),n))}function Je(e){le.textContent=e,le.classList.add(`ve`),clearTimeout(Ke),Ke=setTimeout(()=>le.classList.remove(`ve`),3400)}let Ye=[`Design`,`Governança`,`Automação`];function Xe(){ce.innerHTML=P.map((e,t)=>`<li class="${e.achado?`achado`:``} ${e.aceso?`ok`:``} ${o.explorados?.[t]?`visto`:``}">${e.aceso?`<button type="button" data-reler="${t}" aria-label="Reler: ${e.nome}">`:`<span aria-label="${e.nome}: ${e.achado?`encontrado`:`não encontrado`}">`}<i></i>${Ye[t]}${e.aceso?`</button>`:`</span>`}</li>`).join(``)}ce.addEventListener(`pointerdown`,e=>e.stopPropagation()),ce.addEventListener(`click`,e=>{let t=e.target.closest(`[data-reler]`);t&&o.aoReler?.(+t.dataset.reler)}),Xe();let F=new D(0,1.7,8),I=.42,Ze=.05,Qe=0,$e=.05,et=0,L=!1,R=!1,z=0,tt=0,B={x:0,y:0,dentro:!1},V=new Set,nt=!1,rt=null,it=1.8,at=(e,t)=>(t+e.tipo*.6)%it/it,ot=(e,t)=>{let n=at(e,t);return n>.88||n<.12},st=new ue,ct=new re,H=null;l.addEventListener(`pointermove`,e=>{let t=l.getBoundingClientRect();B.x=(e.clientX-t.left)/t.width*2-1,B.y=-((e.clientY-t.top)/t.height)*2+1,B.dentro=!0,rt&&e.pointerType!==`mouse`&&(I-=(e.clientX-rt.x)*.005,$e=Oe($e+(e.clientY-rt.y)*.003,-.5,.6),rt={x:e.clientX,y:e.clientY})}),l.addEventListener(`pointerleave`,()=>B.dentro=!1);let lt=new S(new D,4.2);l.addEventListener(`pointerdown`,e=>{if(L&&!R){{let t=l.getBoundingClientRect();ct.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),st.setFromCamera(ct,A);let n=P.findIndex(e=>e.aceso&&e.g.visible&&st.ray.distanceToPoint(e.g.position)<2.8&&e.g.position.distanceTo(F)<26);if(n>=0&&!W.visible){o.aoReler?.(n);return}}if(W.visible&&!Ct&&j.value-St>1.2){let t=l.getBoundingClientRect();if(ct.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),st.setFromCamera(ct,A),lt.center.copy(W.position),st.ray.intersectsSphere(lt)){tt||(tt=j.value,o.aoAtravessa?.());return}}nt=!0,rt={x:e.clientX,y:e.clientY},l.setPointerCapture(e.pointerId),L&&H&&H.u&&!H.revelou&&(H.tipo!==2||P[1].aceso)&&(ot(H,j.value)?(H.revelou=!0,o.aoSincronia?.(!0)):(H.erro=j.value,o.aoSincronia?.(!1),H._dica||(H._dica=1,Je(`Clique quando a luz de dentro acender.`),setTimeout(()=>H&&(H._dica=0),2600))))}}),addEventListener(`pointerup`,()=>{nt=!1,rt=null}),addEventListener(`keydown`,e=>{L&&!R&&(V.add(e.key.toLowerCase()),[`arrowup`,`arrowdown`,`arrowleft`,`arrowright`,` `].includes(e.key.toLowerCase())&&e.preventDefault())}),addEventListener(`keyup`,e=>V.delete(e.key.toLowerCase()));let U={value:0},ut={value:0},W=new C;{let t=E?220:480,n=new Float32Array(t*120*2*3),r=0;for(let e=0;e<t;e++){let t=Math.random()**1.6,i=Math.random(),a=e%2;for(let e=0;e<120;e++)for(let o=0;o<2;o++)n.set([(e+o)/120,t,a+i*.5],r*3),r++}let i=new b;i.setAttribute(`position`,new w(n,3));let o=new m(i,new e({uniforms:{uT:j,uPortal:U,uVid:ut},transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT, uPortal; varying float vA;
        void main(){ float s = position.x, u = position.y, anel = floor(position.z), o = fract(position.z) * 2.0;
          float w = uT * 1.4;
          float fenda = 0.62, c0 = anel < 0.5 ? -1.57 + 0.5 * sin(uT * 0.25) : -1.15 + 0.7 * sin(uT * 0.33 + 1.7);
          float th = c0 + fenda * 0.5 + s * (6.2831 - fenda);
          float r = 3.4 * (1.0 + (anel * 0.04) + u * (0.19 * sin(2.0 * th + w + u * 2.6) + 0.11 * sin(3.0 * th - w + 1.9 + u * 2.6) + 0.06 * sin(th + w + 3.1)));
          vec2 der = vec2(cos(uT * 0.3), sin(uT * 0.4)) * 0.07 * 3.4 * u;
          vA = (1.15 - 0.75 * u) * (0.5 + 0.5 * o) * smoothstep(0.0, 0.05, s) * smoothstep(1.0, 0.95, s);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(cos(th) * r + der.x, sin(th) * r + der.y, (u - 0.5) * 0.6 * sin(th * 2.0 + w), 1.0); }`,fragmentShader:`uniform float uPortal, uVid; varying float vA; void main(){ gl_FragColor = vec4(vec3(0.92, 0.95, 1.0) * vA * 0.016 * min(uPortal, 1.3) * (0.3 + 0.7 * uVid), 1.0); }`}));o.frustumCulled=!1,W.add(o);let s=document.createElement(`video`);s.src=`/cicclos-site/v3/vida-loop.mp4`,s.muted=!0,s.loop=!0,s.playsInline=!0,s.crossOrigin=`anonymous`;let c=new te(s);c.colorSpace=v,W.userData.vid=s;let l=new u(new T(3.1,96),new e({uniforms:{uT:j,uPortal:U,uV:{value:c},uVid:ut,uGl:{value:0},uChama:{value:0}},transparent:!0,depthWrite:!1,side:2,vertexShader:`varying vec2 vP; void main(){ vP = position.xy / 3.1; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uT, uPortal, uVid, uGl, uChama; uniform sampler2D uV; varying vec2 vP;
        float hs(float n){ return fract(sin(n) * 43758.5453); }
        float h2b(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
        float vn2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h2b(i), h2b(i + vec2(1, 0)), f.x), mix(h2b(i + vec2(0, 1)), h2b(i + vec2(1, 1)), f.x), f.y); }
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
          // 26/10 (referência do Eddi): depois do pouso o portal é um buraco negro — sombra preta no centro, o anel de
          // fótons fino e brilhante na borda dela e o disco de luz curvada girando em volta (mais rápido perto do centro).
          // Quando as orbes passam, o vídeo nasce do centro preto e cresce até a borda.
          float rr = max(r, 1e-3), giroD = a + uT * 0.55 / (rr * rr + 0.12);
          float st = vn2(vec2(giroD * 2.5, rr * 9.0 - uT * 0.25)) * 0.6 + vn2(vec2(giroD * 7.0, rr * 26.0)) * 0.4;
          float disco = smoothstep(0.54, 0.64, r) * smoothstep(1.0, 0.66, r) * (0.18 + 0.82 * pow(st, 1.6)) * (0.75 + 0.25 * sin(a * 1.0 + uT * 0.4));
          float foton = exp(-pow((r - 0.565) * 55.0, 2.0)) * 1.3 + exp(-pow((r - 0.6) * 14.0, 2.0)) * 0.35;
          vec3 bh = vec3(0.74, 0.8, 0.9) * (disco * 1.5 + foton * 1.3) * (0.85 + 0.15 * uChama);
          float abreVid = smoothstep(0.08 + 0.92 * uVid, 0.92 * uVid, r) * step(0.001, uVid);   // o vídeo cresce do centro
          c = bh * (1.0 - uVid * 0.75) * (1.0 - abreVid) + c * abreVid;
          // aberração na borda, como uma lente grossa
          c *= 1.0 + 0.25 * smoothstep(0.6, 0.95, r);
          float borda = smoothstep(1.0, 0.72, r);
          float aro = exp(-pow((r - 0.93) * 14.0, 2.0));
          c = c * borda * 0.85 + vec3(0.9, 0.94, 1.0) * aro * 0.35;
          gl_FragColor = vec4(c, max(borda * 0.95 + aro * 0.6, smoothstep(0.6, 0.5, r)) * min(1.0, uPortal)); }`}));l.position.z=-.4,W.add(l),W.userData.janela=l;let d=[];for(let e=1;e<=6;e++){let t=new u(new y(2.9-e*.12,3-e*.12,96),new ne({color:15134200,transparent:!0,opacity:0,depthWrite:!1,blending:2,side:2}));t.position.z=-.6-e*.9,t.scale.setScalar(1-e*.1),W.add(t),d.push(t)}W.userData.fundo=d,s.preload=`auto`,s.load();let f=E?120:300,p=new Float32Array(f*3);for(let e=0;e<f;e++){let t=Math.random()*6.283,n=3.6+Math.random()*2.6,r=(Math.random()-.5)*2.4;p.set([Math.cos(t)*n,Math.sin(t)*n,r],e*3)}let g=new b;g.setAttribute(`position`,new w(p,3));let _=new a(g,new h({color:15265528,size:.05,transparent:!0,opacity:.35,depthWrite:!1,blending:2}));W.add(_),W.userData.poeira=_}let G=new u(new T(1,96),new e({uniforms:{uT:j,uA:{value:0},uR:{value:.5}},transparent:!0,depthWrite:!1,blending:2,side:2,vertexShader:`varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uT, uA, uR; varying vec2 vP;
      float h2(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
      void main(){ float r = length(vP), a = atan(vP.y, vP.x);
        float anel = exp(-pow((r - uR) * 7.0, 2.0)) * (0.5 + 0.5 * vn(vec2(a * 4.0, r * 6.0 - uT * 0.4)));
        gl_FragColor = vec4(vec3(0.82, 0.86, 0.92) * anel * uA, 1.0); }`}));G.rotation.x=-Math.PI/2,k.add(G);let K=new u(new T(1,128),G.material.clone());K.material.uniforms.uT=j,K.rotation.x=-Math.PI/2,K.visible=!1,k.add(K);let dt=E?260:600,ft=new Float32Array(dt*3),pt=new Float32Array(dt*3),mt=new Float32Array(dt).fill(9),ht=new b;ht.setAttribute(`position`,new w(ft,3));let gt=new a(ht,new h({color:15265535,size:.5,map:Te,transparent:!0,opacity:0,depthWrite:!1,blending:2,sizeAttenuation:!0}));gt.frustumCulled=!1,k.add(gt);let _t=new D,vt=(()=>{let t=new C;t.visible=!1,k.add(t);let n=[],r=0;for(let e=0;e<=26;e++){let t=e/26;r+=(Math.random()-.5)*4.2,n.push([r,46*(1-t),t])}let o=(e,t,r)=>{let i=[],a=n[e][0],o=n[e][1];for(let s=0;s<=t;s++)a+=r*(1+Math.random()*1.6),o-=1.2+Math.random()*1.2,i.push([a,o,n[e][2]+s*.03]);return i},s=[n,o(7,7,1),o(15,6,-1)],c=[],l=[];s.forEach((e,t)=>{for(let n=0;n<e.length-1;n++){let[r,i,a]=e[n],[o,s,u]=e[n+1],d=(t?.35:.8)*(1.2-a);c.push(r-d,i,0,r+d,i,0,o+d,s,0,r-d,i,0,o+d,s,0,o-d,s,0),l.push(a,a,u,a,u,u)}});let d=new b;d.setAttribute(`position`,new ie(c,3)),d.setAttribute(`aV`,new ie(l,1));let f={uK:{value:0},uI:{value:0}},m=new u(d,new e({uniforms:f,transparent:!0,depthWrite:!1,depthTest:!1,blending:2,side:2,vertexShader:`attribute float aV; varying float vV; void main(){ vV = aV; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uK, uI; varying float vV; void main(){ float a = smoothstep(uK, uK - 0.06, vV); gl_FragColor = vec4(vec3(0.9, 0.95, 1.0) * a * uI, 1.0); }`}));m.renderOrder=5,t.add(m);let g=new p(new ge(1,0),we(j),46),_=new i,v=Array.from({length:46},()=>({p:new D,v:new D,r:new D,s:.35+Math.random()*1,w:new D(Math.random(),Math.random(),Math.random()).multiplyScalar(3)}));g.frustumCulled=!1,k.add(g),g.visible=!1;let y=new Float32Array(1080),x=new Float32Array(1080),S=new b;S.setAttribute(`position`,new w(y,3));let ee=new a(S,new h({color:12107464,size:3,map:Te,transparent:!0,opacity:0,depthWrite:!1,blending:2}));ee.frustumCulled=!1,ee.visible=!1,k.add(ee);let te={uT:j,uK:{value:0}},ne=E?16:28,T=new u(new pe(1,32,20),new e({uniforms:te,transparent:!0,depthWrite:!1,side:1,blending:5,blendSrc:201,blendDst:205,vertexShader:`varying vec3 vP; varying vec3 vC; void main(){ vP = position; vC = (inverse(modelMatrix) * vec4(cameraPosition, 1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uT, uK; varying vec3 vP; varying vec3 vC;
        float h3(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
        float vn3(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
                     mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
        float fbm3(vec3 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 3; i++) { s += a * vn3(p); p = p * 2.07 + vec3(1.7, 9.2, 3.1); a *= 0.5; } return s; }
        float dens(vec3 p){
          float k = uK, R = 0.18 + 0.62 * (1.0 - exp(-k * 1.1));
          vec3 q = p - vec3(0.0, k * 0.05 - 0.2, 0.0);                          // a nuvem sobe devagar
          q.y *= 1.6;                                                            // poeira de deslizamento: larga e baixa, não uma bola
          q.y += 0.25 * smoothstep(0.0, 0.8, length(q.xz)) * smoothstep(0.0, 2.0, k);   // escorre encosta abaixo nas pontas
          vec3 tq = q * 2.6 + vec3(0.0, -k * 0.3, k * 0.05);
          q += (vec3(vn3(tq), vn3(tq + 5.2), vn3(tq + 11.7)) - 0.5) * 0.6;     // dobras que rolam
          float n = fbm3(q * 5.0 + vec3(0.0, -k * 0.45, k * 0.1));
          float d = smoothstep(0.0, 0.45, R - length(q) + (n - 0.55) * 1.1) * (0.35 + 0.65 * n);   // borda rala e esfiapada
          return d * smoothstep(0.0, 0.25, k) * exp(-k * 0.32);
        }
        void main(){
          vec3 ro = vC, rd = normalize(vP - vC);
          float b = dot(ro, rd), c = dot(ro, ro) - 1.0, h = b * b - c; if (h < 0.0) discard;
          h = sqrt(h); float t0 = max(0.0, -b - h), t1 = -b + h; if (t1 <= 0.0) discard;
          float dt = (t1 - t0) / float(${ne}), j = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))) + floor(uT * 60.0) * 0.618034);
          vec3 L = normalize(vec3(-0.4, 0.8, 0.45)); float T = 1.0; vec3 col = vec3(0.0);
          for (int i = 0; i < ${ne}; i++) {
            vec3 p = ro + rd * (t0 + (float(i) + j) * dt);
            float d = dens(p); if (d < 0.004) continue;
            float luz = exp(-(dens(p + L * 0.08) + dens(p + L * 0.2)) * 2.2);
            vec3 cc = mix(vec3(0.045, 0.046, 0.05), vec3(0.33, 0.33, 0.34), luz) + vec3(0.02);   // poeira de rocha: grafite
            cc += vec3(1.0, 0.97, 0.92) * exp(-uK * 1.8) * 2.2 * exp(-length(p) * 4.0);   // a fenda acende a poeira por dentro no estalo
            float a = 1.0 - exp(-d * 20.0 * dt);
            col += T * a * cc; T *= 1.0 - a; if (T < 0.02) break;
          }
          float A = 1.0 - T; if (A < 0.003) discard;
          gl_FragColor = vec4(col, A);
        }`}));T.frustumCulled=!1,T.visible=!1,T.renderOrder=3,k.add(T);let re=0,ae=new D;return{dispara(e,n){re=n,ae.copy(e),t.visible=!1,g.visible=!0,T.position.copy(e).add(new D(0,4,0)),T.scale.setScalar(46),T.visible=!0,te.uK.value=0,Le.material.uniforms.uRacha.value.set(e.x,e.z,n,1);let r=new D(e.x,0,e.z+25).normalize();v.forEach(t=>{t.p.copy(e).add(new D((Math.random()-.5)*6,-6+Math.random()*40,(Math.random()-.5)*6));let n=new D(-r.z,0,r.x).multiplyScalar((Math.random()-.5)*10);t.v.copy(r).multiplyScalar(2+Math.random()*6).add(n).add(new D(0,-2+Math.random()*8,0)),t.r.set(Math.random()*6,Math.random()*6,Math.random()*6)});for(let t=0;t<360;t++){y.set([e.x+(Math.random()-.5)*10,e.y+(Math.random()-.5)*30,e.z+(Math.random()-.5)*10],t*3);let n=Math.random()*6.283;x.set([Math.cos(n)*(3+Math.random()*8),1+Math.random()*4,Math.sin(n)*(3+Math.random()*8)],t*3)}},passo(e,t){if(!re)return;let n=e-re;f.uK.value=Math.min(1.1,n/.7),f.uI.value=n<.15?3:Math.max(.35,3*Math.exp(-(n-.15)*1.4)),v.forEach((e,n)=>{e.v.y-=22*t,e.p.addScaledVector(e.v,t),e.r.addScaledVector(e.w,t),_.position.copy(e.p),_.rotation.set(e.r.x,e.r.y,e.r.z),_.scale.setScalar(e.p.y<-10?1e-4:e.s),_.updateMatrix(),g.setMatrixAt(n,_.matrix)}),g.instanceMatrix.needsUpdate=!0;for(let e=0;e<360;e++)y[e*3]+=x[e*3]*t,y[e*3+1]+=x[e*3+1]*t,y[e*3+2]+=x[e*3+2]*t,x[e*3]*=.985,x[e*3+2]*=.985;S.attributes.position.needsUpdate=!0,te.uK.value=n,n>11&&(T.visible=!1),n>6&&(g.visible=!1)},apaga(){re=0,t.visible=!1,g.visible=!1,ee.material.opacity=0,T.visible=!1,f.uK.value=0,Le.material.uniforms.uRacha.value.set(0,0,0,0)}}})();W.position.set(0,3.3,-92),W.visible=!1,k.add(W);let yt=new d,bt={uA:{value:0}},xt=new u(new T(1.95,96),new e({uniforms:bt,transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:`varying vec2 vP; void main(){ vP = position.xy / 1.95; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform float uA; varying vec2 vP; void main(){ float r = length(vP); gl_FragColor = vec4(0.0, 0.0, 0.0, smoothstep(1.0, 0.82, r) * uA); }`}));yt.add(xt);let St=0,Ct=!1;function wt(e){let t=document.createElement(`canvas`);t.width=512,t.height=256;let n=t.getContext(`2d`),r=n.createImageData(512,256),i=new Float32Array(131072),a=new Float32Array(131072),o=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)},c=(e,t,n)=>{let r=Math.floor(e),i=Math.floor(t),a=e-r,s=t-i,c=a*a*(3-2*a),l=s*s*(3-2*s),u=o(r%n,i),d=o((r+1)%n,i),f=o(r%n,i+1),p=o((r+1)%n,i+1);return u+(d-u)*c+(f-u)*l+(u-d-f+p)*c*l},l=(e,t,n,r)=>{let i=0,a=.5,o=1;for(let s=0;s<n;s++)i+=a*c(e*o,t*o,r*o),a*=.5,o*=2;return i};for(let t=0;t<256;t++)for(let n=0;n<512;n++){let r=n/512,s=t/256,c;if(e===`carvao`){let e=r*96,i=s*48,u=Math.floor(e),d=Math.floor(i),f=9,p=0,m=0,h=0;for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++){let r=((u+n)%96+96)%96,a=d+t,s=u+n+o(r,a),c=a+o(a+7.1,r+3.3),l=(e-s)**2+(i-c)**2;l<f&&(f=l,p=r*131+a,m=s,h=c)}let g=(o(p,1.7)-.5)*.9,_=(o(p,9.3)-.5)*.9;c=g*(e-m)*.06+_*(i-h)*.06+l(r*5,s*2.5,3,5)*.25,a[t*512+n]=o(p,4.4)}else if(e===`obsidiana`){let e=l(r*6,s*3,4,6)*.35,i=0;for(let[t,n,a]of[[.2,.35,38],[.62,.6,30],[.9,.25,44]]){let o=Math.min(Math.abs(r-t),1-Math.abs(r-t))*2,c=s-n,l=Math.hypot(o,c);i+=Math.sin((l+e)*a)*Math.exp(-l*2.2)}c=i*.5+l(r*40,s*20,3,40)*.25,a[t*512+n]=.5+.5*Math.sin((s+l(r*3,s*2,3,3)*.25)*34)}else c=l(r*5,s*2.5,4,5)*.8+Math.sin(s*60+l(r*4,s*2,3,4)*6)*.05+l(r*90,s*45,2,90)*.08,a[t*512+n]=l(r*3,s*1.5,3,3);i[t*512+n]=c}let u=e===`obsidiana`?3.2:e===`carvao`?6:2.2;for(let e=0;e<256;e++)for(let t=0;t<512;t++){let n=e*512+t,a=i[e*512+(t+1)%512]-i[e*512+(t-1+512)%512],o=i[Math.min(255,e+1)*512+t]-i[Math.max(0,e-1)*512+t],s=-a*u,c=-o*u,l=1,d=Math.hypot(s,c,l);s/=d,c/=d,l/=d,r.data[n*4]=(s*.5+.5)*255,r.data[n*4+1]=(c*.5+.5)*255,r.data[n*4+2]=(l*.5+.5)*255,r.data[n*4+3]=255}n.putImageData(r,0,0);let d=new se(t);d.wrapS=s,d.anisotropy=4;let f=document.createElement(`canvas`);f.width=512,f.height=256;let p=f.getContext(`2d`),m=p.createImageData(512,256),h=document.createElement(`canvas`);h.width=512,h.height=256;let g=h.getContext(`2d`),_=g.createImageData(512,256);for(let t=0;t<131072;t++){let n=a[t],r=(e===`obsidiana`?.1+n*.35:.08+n*.22)*255;m.data[t*4]=m.data[t*4+1]=m.data[t*4+2]=r,m.data[t*4+3]=255,_.data[t*4]=_.data[t*4+1]=_.data[t*4+2]=n*255,_.data[t*4+3]=255}p.putImageData(m,0,0),g.putImageData(_,0,0);let v=new se(f),y=new se(h);return v.wrapS=y.wrapS=s,{normal:d,mapa:v,filme:y}}let Tt=null,Et=null;function Dt(t=`casca`){if(!Tt){let t=new d;t.add(new u(new pe(10,64,32),new e({side:1,vertexShader:`varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`varying vec3 vD; void main(){ float y = vD.y;
          vec3 c = mix(vec3(0.012), vec3(0.05, 0.052, 0.058), smoothstep(-0.6, 0.0, y));
          c += vec3(0.32, 0.36, 0.44) * exp(-pow((y - 0.04) * 9.0, 2.0));                     // faixa do horizonte
          c += vec3(2.0, 2.1, 2.3) * pow(max(dot(vD, normalize(vec3(-0.5, 0.75, 0.45))), 0.0), 40.0);   // luz macia no alto
          // recorte frio dos dois lados, por trás (o azul que contorna as arestas no print de obsidiana)
          c += vec3(0.9, 1.6, 4.2) * pow(max(dot(vD, normalize(vec3(-0.85, 0.25, -0.5))), 0.0), 9.0);
          c += vec3(0.7, 1.3, 3.4) * pow(max(dot(vD, normalize(vec3(0.9, 0.1, -0.4))), 0.0), 12.0);
          gl_FragColor = vec4(c, 1.0); }`})));let n=new fe(O);Tt=n.fromScene(t,.02).texture,n.dispose()}if(t===`gema`){if(!Et){let e=new fe(O);Et=e.fromScene(new De,.02).texture,e.dispose()}return new c({color:16777215,metalness:0,roughness:.02,transmission:1,thickness:1.1,ior:2.42,dispersion:6,attenuationColor:new me(15660031),attenuationDistance:2.5,iridescence:.45,iridescenceIOR:1.3,clearcoat:1,clearcoatRoughness:0,specularIntensity:1,envMap:Et,envMapIntensity:2.4})}let{normal:n,mapa:r,filme:i}=wt(`perola`),a=new c({color:723727,metalness:.3,roughness:.17,roughnessMap:r,normalMap:n,normalScale:new re(.22,.22),clearcoat:1,clearcoatRoughness:.05,iridescence:.75,iridescenceIOR:1.55,iridescenceThicknessRange:[260,640],iridescenceThicknessMap:i,sheen:.3,sheenColor:new me(9213869),sheenRoughness:.35,envMap:Tt,envMapIntensity:1.5,emissive:new me(14673652),emissiveIntensity:0});return a.userData.uRacha={value:0},a.onBeforeCompile=e=>{e.uniforms.uRacha=a.userData.uRacha,e.vertexShader=`attribute float aBorda; varying float vBorda;
`+e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
  vBorda = aBorda;`),e.fragmentShader=`uniform float uRacha; varying float vBorda;
`+e.fragmentShader.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
  totalEmissiveRadiance += vec3(0.78, 0.88, 1.0) * uRacha * 2.4 * smoothstep(0.025, 0.0, vBorda);`)},a}function Ot(e,t=`rocha`){let n=t===`gema`,r=.9,i=n?.95:1.2,a=(()=>{let e=n?23:7;return()=>(e=e*16807%2147483647,(e-1)/2147483646)})(),o=()=>{let e=a()*2-1,t=a()*Math.PI*2,n=Math.sqrt(1-e*e);return new D(n*Math.cos(t),e,n*Math.sin(t))},s=Array.from({length:n?24:38},()=>{let e=.3+a()*.75;return{c:o().clone().multiplyScalar(e+r*(.7+a()*.2)).multiply(new D(1,i,1)),R:e}}),c=Array.from({length:8},()=>o()),l=new ge(1,44);l.deleteAttribute(`normal`),l.deleteAttribute(`uv`),l=Ee(l);let d=l.attributes.position,f=new D,p=new Float32Array(d.count);for(let e=0;e<d.count;e++){f.fromBufferAttribute(d,e).normalize();let t=r/Math.sqrt(f.x*f.x+(f.y/i)**2+f.z*f.z);t*=1+Math.sin(f.x*2.3+1.1)*Math.sin(f.y*1.9-.4)*Math.sin(f.z*2.7+2)*.18;for(let e of s){let n=f.dot(e.c),r=n*n-(e.c.lengthSq()-e.R*e.R);if(r>0){let e=n-Math.sqrt(r);e>0&&(t=Math.min(t,e))}}t*=1+Math.sin(f.x*23+f.y*17)*Math.sin(f.z*19-f.y*11)*.006,d.setXYZ(e,f.x*t,f.y*t,f.z*t);let n=9,a=9;for(let e of c){let t=f.distanceTo(e);t<n?(a=n,n=t):t<a&&(a=t)}p[e]=a-n}l.setAttribute(`aBorda`,new w(p,1)),l.computeVertexNormals();let m=new Float32Array(d.count*2);for(let e=0;e<d.count;e++)f.fromBufferAttribute(d,e).normalize(),m[e*2]=.5+Math.atan2(f.z,f.x)/(Math.PI*2),m[e*2+1]=.5+Math.asin(f.y)/Math.PI;if(l.setAttribute(`uv`,new w(m,2)),n)return new u(l,e);let h=l.toNonIndexed(),g=h.attributes.position,_=h.attributes.normal,v=h.attributes.aBorda,y=h.attributes.uv,x=c.map(()=>({p:[],n:[],b:[],u:[]})),S=new D;for(let e=0;e<g.count;e+=3){S.set(0,0,0);for(let t=0;t<3;t++)S.add(f.fromBufferAttribute(g,e+t));S.normalize();let t=0,n=9;c.forEach((e,r)=>{let i=S.distanceTo(e);i<n&&(n=i,t=r)});for(let n=0;n<3;n++)x[t].p.push(g.getX(e+n),g.getY(e+n),g.getZ(e+n)),x[t].n.push(_.getX(e+n),_.getY(e+n),_.getZ(e+n)),x[t].b.push(v.getX(e+n)),x[t].u.push(y.getX(e+n),y.getY(e+n))}let ee=new ne({color:6122114,side:1}),te=new C;return{grupo:te,cacos:x.filter(e=>e.p.length).map(t=>{let n=new b;n.setAttribute(`position`,new ie(t.p,3)),n.setAttribute(`normal`,new ie(t.n,3)),n.setAttribute(`aBorda`,new ie(t.b,1)),n.setAttribute(`uv`,new ie(t.u,2));let r=new C,i=new u(n,e),s=new u(n,ee);return s.scale.setScalar(.9),r.add(i,s),n.computeBoundingSphere(),r.userData={dir:n.boundingSphere.center.clone().normalize(),eixo:o(),giro:.5+a()*1.2,vel:.8+a()*.8},te.add(r),r})}}let q=new D(-34,0,-82),kt={value:0},J={g:new C,estado:0,segura:0,sobe:0,abre:0,coleta:0};{let e=Dt();J.mat=e;let t=Ot(e,`rocha`);J.cacos=t.cacos;let n=Ot(Dt(`gema`),`gema`);n.scale.setScalar(.45),J.gema=n;let r=new oe(new de({map:Te,transparent:!0,opacity:0,depthWrite:!1,blending:2}));r.scale.setScalar(1.2);let i=new C;i.add(t.grupo,n),J.g.add(i,r),J.corpo=i,J.nucleo=r,J.g.position.copy(q).setY(-3),J.g.visible=!1,k.add(J.g)}let Y=new u(new T(1,96),G.material.clone());Y.rotation.x=-Math.PI/2,Y.position.set(q.x,.05,q.z),Y.scale.setScalar(5),Y.material.uniforms.uT=j,k.add(Y);let At=P.map(()=>{let t=new Float32Array(3780),n=0;for(let e=0;e<7;e++){let r=Math.random();for(let i=0;i<90;i++)for(let a=0;a<2;a++)t.set([(i+a)/90,e/6,r],n*3),n++}let r=new b;r.setAttribute(`position`,new w(t,3));let i={uT:j,uA:{value:0},uDe:{value:new D},uPara:{value:new D},uCresce:{value:0}},a=new m(r,new e({uniforms:i,transparent:!0,depthWrite:!1,blending:2,vertexShader:`uniform float uT, uCresce; uniform vec3 uDe, uPara; varying float vS; varying float vO;
        void main(){ float s = position.x * uCresce, f = position.y, o = position.z;
          vec3 meio = (uDe + uPara) * 0.5 + vec3(0.0, 1.6 + f * 0.6, 0.0);
          vec3 p = mix(mix(uDe, meio, s), mix(meio, uPara, s), s);
          p += vec3(sin(s * 9.0 + uT + f * 5.0), cos(s * 7.0 - uT * 0.8 + f * 4.0), sin(s * 8.0 + f * 3.0)) * (f - 0.5) * 0.5 * sin(s * 3.14159);
          vS = s; vO = o;
          gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0); }`,fragmentShader:`uniform float uT, uA; varying float vS; varying float vO; void main(){ float pulso = pow(0.5 + 0.5 * sin(vS * 30.0 - uT * 5.0 + vO * 6.0), 8.0); gl_FragColor = vec4(vec3(0.88, 0.92, 1.0) * (0.08 + pulso * 0.35) * uA, 1.0); }`}));return a.frustumCulled=!1,a.visible=!1,a.userData.u=i,k.add(a),a}),jt=new D(0,1,0);new D;let X=new D,Mt=new D,Nt=performance.now(),Pt=!0,Ft=0,Z=!1,It=0,Q=0,$=0,Lt=0,Rt=!1,zt=!1,Bt=new _,Vt=new _;new IntersectionObserver(e=>{Pt=e[0].isIntersecting,Pt&&!Ft&&(Ft=requestAnimationFrame(Ht))}).observe(t);function Ht(e){Ft=0;let t=Oe((e-Nt)/1e3,0,.05);Nt=e;let n=e/1e3;j.value=n;let r=!!tt||Q&&!W.visible||Z&&J.estado<=1&&J.sobe<1||J.estado>=2&&J.estado<4||W.visible&&!W.userData.pronto;if(r!==R&&(R=r,R&&(nt=!1,rt=null,V.clear()),o.aoAuto?.(R)),L&&!R&&B.dentro&&!E){let e=Math.sign(B.x)*Math.max(0,Math.abs(B.x)-.25)/.75;Qe+=(-e*1.3-Qe)*(1-Math.exp(-t*5)),$e=Oe(B.y*.45,-.4,.5)}else Qe*=.9;if(R){let e=W.visible?W.position:Q?N.position:J.g.visible||Z?q:null;if(e){let n=Math.atan2(-(e.x-F.x),-(e.z-F.z))-I;n=Math.atan2(Math.sin(n),Math.cos(n)),I+=n*(1-Math.exp(-t*2.2)),Qe=0,$e=W.visible?.08:Q?Oe(Math.atan2(N.position.y-1.7,Math.hypot(N.position.x-F.x,N.position.z-F.z)),-.1,.55):-.08}}I+=Qe*t,Ze+=($e-Ze)*(1-Math.exp(-t*4)),ct.set(L&&!E?B.x:0,L&&!E?B.y:0),st.setFromCamera(ct,A),H=null;for(let e of P)st.ray.distanceToPoint(e.g.position)<2.8&&e.g.position.distanceTo(F)<16&&(H=e);J.estado===1&&J.sobe>.8&&st.ray.distanceToPoint(J.g.position)<2.4&&J.g.position.distanceTo(F)<14&&(H=J);let i=J.estado>=1?M((n-It-.6)/1.8)*(1-M(J.coleta)):0,a=nt&&!H||V.has(`w`)||V.has(`arrowup`),s=V.has(`s`)||V.has(`arrowdown`);if((V.has(`a`)||V.has(`arrowleft`))&&(I+=t*1.4),(V.has(`d`)||V.has(`arrowright`))&&(I-=t*1.4),et+=((L?R?0:a?7.5:s?-4:0:.9)-et)*(1-Math.exp(-t*2.5)),Mt.set(-Math.sin(I),0,-Math.cos(I)),F.addScaledVector(Mt,et*t),tt&&W.visible){U.value=Math.min(3,U.value+t*2.5),X.copy(W.position).sub(F),X.y=0;let e=X.length();e>.01&&F.addScaledVector(X.normalize(),Math.min(e,t*(5+(n-tt)*26)))}if(!Z)for(let e of P){X.copy(F).sub(e.g.position),X.y=0;let t=X.length();t<4.2&&F.addScaledVector(X.normalize(),4.2-t)}let c=Math.hypot(F.x,F.z+25);c>85&&(F.x*=85/c,F.z=(F.z+25)*85/c-25);let l=Math.sin(n*7)*.04*Math.min(1,Math.abs(et)/6);z*=Math.exp(-t*1.8);let u=z*.07;A.position.set(F.x+(Math.random()-.5)*u,1.7+l+(Math.random()-.5)*u,F.z),X.set(F.x-Math.sin(I)*Math.cos(Ze),1.7+Math.sin(Ze),F.z-Math.cos(I)*Math.cos(Ze)),A.lookAt(X),Me.value.copy(F);let d=P[1];if(P.forEach((e,r)=>{Oe(1-(e.g.position.distanceTo(F)-5)/14)>.5&&!e.achado&&(e.achado=!0,Xe(),qe(e.nome,e.tipo===2&&!d.aceso?`Adormecido. Automação só roda sobre base arrumada.`:`Segure sobre o orbe para acordá-lo.`,7500));let a=e.tipo===2&&!d.aceso;L&&nt&&H===e&&!e.aceso&&(e.revelou||a)?a?e._av||(Je(`Automação só roda sobre base arrumada. Acorde a Governança Digital primeiro.`),e._av=1,setTimeout(()=>e._av=0,2500)):(e.segura=Math.min(1,e.segura+t/1.6),e.segura>=1&&(e.aceso=!0,Xe(),o.aoAcender?setTimeout(()=>o.aoAcender(r),900):qe(e.nome,e.linha,8e3),e===d&&Je(`Algo acordou ao longe: Automações.`))):e.aceso||(e.segura=Math.max(0,e.segura-t*.8)),e.vivo+=((e.aceso?1:e.segura*.7)-e.vivo)*(1-Math.exp(-t*3)),e.u.uVivo.value=e.vivo,e.u.uPerto.value=+(H===e)*!e.aceso,e.u.uDorme.value+=(+!!a-e.u.uDorme.value)*.05,e.g.rotation.y+=t*(.08+e.vivo*.25),e.g.rotation.x=Math.sin(n*.3+r)*.15,W.visible||(e.g.position.y=je[r].pos[1]+Math.sin(n*.6+r*2)*.35),e.nucleo.material.opacity=e.vivo*.35+(H===e?.08:0),e.nucleo.scale.setScalar(2.6+e.vivo*3+e.segura*1.5*Math.sin(n*12)*.2),e.acendeFacho=Math.min(1,(e.acendeFacho||0)+(e.aceso?t*.8:0)),e.facho.scale.y=Math.max(.001,M(e.acendeFacho)),e.facho.material.uniforms.uA.value=.65*M(e.acendeFacho)*(1-i),e.u.uDispersa.value=e.segura*(1-e.vivo)*1.2*(1-e.u.uRevela.value);{let t=at(e,n),r=Math.max(Math.exp(-((t*9)**2)),Math.exp(-(((1-t)*9)**2)));if(e.u.uPulso.value=e.revelou||a?0:r*(.55+.45*(H===e)),e.erro){let t=n-e.erro;e.u.uDispersa.value=Math.max(e.u.uDispersa.value,.6*Math.exp(-t*3)*Math.sin(Math.min(t*14,Math.PI))),t>1.5&&(e.erro=0)}}e.u.uRevela.value+=(+!!e.revelou-e.u.uRevela.value)*(1-Math.exp(-t*.9)),e.corpoLuz.visible=e.u.uRevela.value>.01,e.extra.children.forEach(r=>{if(e.tipo===1)r.rotation.y+=t*r.userData.v*(1+e.vivo*2),r.rotation.x+=t*r.userData.v*.5,r.material.opacity=(a?.1:.18)+e.vivo*.45;else{let i=(n*1.6-r.userData.k*.7)%2.1;r.material.opacity=(a?.06:.12+e.vivo*.25)+Math.max(0,1-Math.abs(i-.4)*2.5)*(a?.1:.5+e.vivo*.4),r.rotation.y+=t*(.3+r.userData.k*.15)*(a?.2:1+e.vivo)}})}),P.filter(e=>e.aceso).length/3,!Z&&P.every(e=>e.aceso)&&(!o.explorados||o.explorados.every(Boolean))&&(Z=!0,setTimeout(()=>{It=j.value,J.estado=1,J.g.visible=!0,qe(`As três orbes apontam para um lugar.`,E?`Siga a luz até o artefato e segure sobre ele para abrir.`:`Siga a luz até o artefato e segure o clique sobre ele para abrir.`,6e3),o.aoFinal?.()},1200)),J.estado>=1){J.sobe=Math.min(1,J.sobe+t/2.4),J.g.position.set(q.x,-3+M(J.sobe)*4.5+Math.sin(n*.9)*.15,q.z),J.corpo.rotation.y+=t*(.4+J.segura*2),At.forEach((e,t)=>{let n=P[t],r=e.userData.u;r.uDe.value.copy(n.g.position),r.uPara.value.copy(J.g.position),r.uCresce.value=i,r.uA.value=i,e.visible=i>.001&&n.g.visible});let e=n%3.2/3.2;if(Y.material.uniforms.uR.value=.15+e*.8,Y.material.uniforms.uA.value=(1-e)*.12*M(J.sobe)*(J.estado<3),J.estado===1&&(L&&nt&&H===J?(J.segura=Math.min(1,J.segura+t/1.4),J.segura>=1&&(J.estado=2,o.aoCarga?.(0),o.aoAbrir?.())):J.segura=Math.max(0,J.segura-t*.8),J.estado===1&&o.aoCarga?.(J.segura)),kt.value=J.segura*.6+M(J.abre)*.8,J.mat.emissiveIntensity=kt.value*.08,J.estado>=2){J.estado===2&&(J.abre=Math.min(1,J.abre+t/2.6),J.abre>=1&&(J.estado=3)),M(J.abre);let e=M(J.abre/.35),r=M((J.abre-.32)/.68);J.mat.userData.uRacha.value=e*(1-r*.6);let i=e*(1-r)*.025;J.cacos.forEach(e=>{let t=e.userData,n=r*t.vel;e.position.copy(t.dir).multiplyScalar(n*1.5).add(X.set((Math.random()-.5)*i,(Math.random()-.5)*i-n*n*.5,(Math.random()-.5)*i)),e.setRotationFromAxisAngle(t.eixo,n*t.giro)}),J.nucleo.material.opacity=Math.max(e*.2,r*.5)*(1-M((J.coleta-.6)/.4)),J.nucleo.scale.setScalar(1+r*1.4),r>.02&&!J.quebrou&&(J.quebrou=!0,o.aoQuebra?.()),J.estado===2&&(J.gema.position.set(0,r*.55,0),J.gema.scale.setScalar(.45+r*.2),J.gema.rotation.y+=t*(.4+r*1.6),J.gema.rotation.x=Math.sin(n*.7)*.25*r),J.cacos.forEach(e=>{e.scale.setScalar(Math.max(.001,1-M((r-.7)/.3)))})}J.estado===3&&(J.coleta=Math.min(1,J.coleta+t/1.3),X.copy(A.position),J.g.worldToLocal(X),J.nucleo.position.lerpVectors(new D(0,0,0),X,M(J.coleta)*.92),X.copy(A.position),J.corpo.worldToLocal(X),J.gema.position.lerpVectors(new D(0,.55,0),X,M(J.coleta)*.85),J.gema.rotation.y+=t*2,J.coleta>=1&&(J.estado=4,J.g.visible=!1,Y.material.uniforms.uA.value=0,At.forEach(e=>e.visible=!1),qe(`Artefato guardado.`,`Ele abre o convite final. O portal da sala se abriu.`,5200),o.aoArtefato?.()))}if(Z&&!W.userData.veio&&!Q&&J.estado===4&&(Q=n,W.position.set(F.x-Math.sin(I)*20,3.3,F.z-Math.cos(I)*20),z=.4,o.aoPortalSurge?.()),Q){let e=Oe((n-Q)/6.5),r=e*e*e*(e*(e*6-15)+10),i=r**.55;X.copy(F).sub(W.position),X.y=0,X.normalize(),Bt.setFromUnitVectors(jt,X),N.position.lerpVectors(N.userData.pos0,W.position,r),N.position.y+=Math.sin(r*Math.PI)*40*(1-r),Lt+=t*($?Math.max(.15,2.6*Math.exp(-(n-$)*1.2)):.15+r*2.6),Vt.setFromAxisAngle(jt,Lt),N.quaternion.copy(N.userData.q0).slerp(Bt,M(r*1.3)).multiply(Vt);let a=N.position.distanceTo(A.position),s=4.6/Math.max(1,W.position.distanceTo(F)),c=Math.exp(Math.log(.6)*(1-i)+Math.log(s)*i);N.scale.setScalar(Math.min(1,c*a/760));let l=$?Math.exp(-(n-$)*2.2)*6:0;N.material.uniforms.uAnelA.value=1+i*5+l+Math.sin(n*9)*.6*r*!$,r>.62&&!Rt&&(Rt=!0,o.aoAnelPassa?.(),z=Math.max(z,.3)),zt||Math.hypot(N.position.x,N.position.z+25)<150&&(zt=!0,X.set(N.position.x,0,N.position.z+25).normalize().multiplyScalar(140),X.set(X.x,30,X.z-25),vt.dispara(X,n),z=Math.max(z,.55),o.aoRacha?.());let u=760*N.scale.x,d=$?0:12+r*40,f=Math.floor(d*t*10);for(let e=0;e<dt;e++){if(mt[e]>1.6&&f>0){f--;let t=Math.random()*Math.PI*2;_t.set(Math.cos(t)*760,(Math.random()-.5)*40,Math.sin(t)*760),N.localToWorld(_t),ft.set([_t.x,_t.y,_t.z],e*3),pt.set([(Math.random()-.5)*u*.08,-u*(.05+Math.random()*.1),(Math.random()-.5)*u*.08],e*3),mt[e]=0}mt[e]<=1.6&&(mt[e]+=t,ft[e*3]+=pt[e*3]*t,ft[e*3+1]+=pt[e*3+1]*t,ft[e*3+2]+=pt[e*3+2]*t,pt[e*3+1]-=u*.05*t)}if(ht.attributes.position.needsUpdate=!0,gt.material.opacity=$?Math.max(0,1-(n-$)):.9,gt.material.size=Math.min(.9,Math.max(.25,u*.006)),r>=1&&!$&&($=n,z=.6,o.aoPouso?.(),K.position.set(W.position.x,.06,W.position.z),K.visible=!0),$){let e=Oe((n-$)/2.4);K.scale.setScalar(3+e*70),K.material.uniforms.uR.value=.92,K.material.uniforms.uA.value=(1-e)*.9,e>=1&&(K.visible=!1),n-$>.9&&!W.userData.veio&&(W.userData.veio=!0,St=n,W.visible=!0)}}if(W.visible){let e=n-St,t=M(e/1.4);W.scale.setScalar(Math.max(.001,t*(1+Math.sin(Math.min(1,e/1.4)*Math.PI)*.25))),U.value=Math.max(Math.min(1.6,t+Math.max(0,1-e/.6)*2),U.value*.95),W.lookAt(F.x,3.3,F.z),e%2.6/2.6,G.position.set(W.position.x,.05,W.position.z),G.scale.setScalar(6),G.material.uniforms.uR.value=.15+e%4.5/4.5*.8,G.material.uniforms.uA.value=(1-e%4.5/4.5)*.07*t,W.userData.poeira.rotation.z=n*.15;let r=W.userData.janela.material.uniforms,i=e-4.8;i>-.3&&W.userData.vid.paused&&W.userData.vid.play().catch(()=>{}),r.uVid.value=i<0?0:M(i/.6),r.uGl.value=i>0&&i<.6?1-i/.6:Math.random()<.012&&i>.6?.5:0,r.uChama.value=.5+.5*Math.sin(n*2),W.userData.fundo.forEach((e,i)=>{e.material.opacity=t*r.uVid.value*(.22-i*.03)*(.7+.3*Math.sin(n*2-i*.7))}),i>0&&!W.userData.pronto&&(W.userData.pronto=!0,z=Math.max(z,.15),qe(`A sala está arrumada.`,E?`Toque no portal para atravessar.`:`Clique no portal para atravessar.`,0),o.aoPortalPronto?.())}{X.copy(W.position).sub(F),X.y=0;let e=X.length();W.visible&&e<(tt?11:4.5)&&L&&!Ct&&(Ct=!0,o.aoPortal?.(innerWidth/2,innerHeight/2))}if(Z&&W.visible){let e=n-St;P.forEach((t,n)=>{let r=e-2.4;if(r<0||t.entrou)return;t.de||=t.g.position.clone();let i=M(r/2.2),a=[-1,1,0][n];X.lerpVectors(t.de,W.position,i),X.y+=Math.sin(i*Math.PI)*4,X.x+=Math.sin(i*Math.PI)*a*5,t.g.position.copy(X),t.g.scale.setScalar(Math.max(.001,1-M((i-.75)/.25))),i>=.999&&(t.entrou=!0,t.g.visible=!1,U.value=1.6,o.aoOrbeEntra?.(n))})}if(P.forEach((e,t)=>Pe.value[t].set(e.g.position.x,e.g.position.y,e.g.position.z,.05+e.vivo*.35+e.u.uRevela.value*.05)),W.visible?Pe.value[3].set(W.position.x,3.3,W.position.z,.5*Math.min(1,U.value)):Pe.value[3].w=0,o.aoQuadro&&L){let e=Math.cos(I),t=-Math.sin(I);o.aoQuadro({orbes:P.map(n=>{X.copy(n.g.position).sub(F),X.y=0;let r=X.length(),i=(X.x*e+X.z*t)/(r||1);return X.copy(n.g.position).project(A),{d:r,pan:i,segura:n.segura,aceso:n.aceso,revelou:!!n.revelou,fase:at(n,j.value),dorme:n.u.uDorme.value>.5,sx:(X.x+1)/2*innerWidth,sy:(1-X.y)/2*innerHeight,naTela:X.z<1&&Math.abs(X.x)<.95&&Math.abs(X.y)<.95}}),proxima:P.findIndex(e=>!e.aceso)<0?null:P.findIndex(e=>!e.aceso),artefato:J.estado>=1&&J.estado<4?(X.copy(J.g.position).project(A),{d:J.g.position.distanceTo(F),segura:J.segura,pronto:J.estado===1&&J.sobe>.8,sx:(X.x+1)/2*innerWidth,sy:(1-X.y)/2*innerHeight,naTela:X.z<1&&Math.abs(X.x)<.95&&Math.abs(X.y)<.95,x:q.x,z:q.z}):null,eu:[F.x,F.z],yaw:I,mapa:P.map(e=>[e.g.position.x,e.g.position.z,e.aceso?2:+!!e.achado,e.g.visible]),portal:W.visible?[W.position.x,W.position.z]:null,portalTela:W.visible&&W.userData.pronto?(X.copy(W.position).project(A),{sx:(X.x+1)/2*innerWidth,sy:(1-X.y)/2*innerHeight,frente:X.z<1,naTela:X.z<1&&Math.abs(X.x)<.9&&Math.abs(X.y)<.9}):null})}if(Q||(N.rotation.z=.18+Math.sin(n*.05)*.05),vt.passo(n,t),Ue.render(),W.visible&&(bt.uA.value=(1-ut.value)*Math.min(1,U.value),bt.uA.value>.01)){W.updateMatrixWorld(),xt.matrix.copy(W.matrixWorld),xt.matrixAutoUpdate=!1,xt.matrixWorldNeedsUpdate=!0;let e=O.autoClear;O.autoClear=!1,O.render(yt,A),O.autoClear=e}(Pt||L)&&(Ft=requestAnimationFrame(Ht))}return Ft=requestAnimationFrame(Ht),{atalho(){return!L||Z||J.estado>0?!1:(Z=!0,qe(`Atalho secreto.`,`A semente acordou sem as orbes. Siga a luz e segure sobre ela.`,5200),setTimeout(()=>{It=j.value,J.estado=1,J.g.visible=!0,o.aoFinal?.()},600),!0)},atualiza(){Xe()},reinicia(){P.forEach((e,t)=>{e.entrou=!1,e.de=null,e.g.visible=!0,e.g.scale.setScalar(1),e.aceso=e.achado=e.revelou=!1,e.segura=e.vivo=0,e.acendeFacho=0,e.u.uRevela.value=0,e.g.position.set(...je[t].pos)}),Z=!1,It=0,Ct=!1,St=0,Object.assign(J,{estado:0,segura:0,sobe:0,abre:0,coleta:0}),J.g.visible=!1,J.g.position.copy(q).setY(-3),J.cacos.forEach(e=>{e.position.set(0,0,0),e.rotation.set(0,0,0),e.scale.setScalar(1)}),J.quebrou=!1,J.gema.position.set(0,0,0),J.gema.scale.setScalar(.45),J.mat.userData.uRacha.value=0,J.nucleo.position.set(0,0,0),J.nucleo.material.opacity=0,At.forEach(e=>e.visible=!1),Y.material.uniforms.uA.value=0,Q=0,$=0,Lt=0,Rt=!1,zt=!1,vt.apaga(),K.visible=!1,gt.material.opacity=0,mt.fill(9),N.position.copy(N.userData.pos0),N.quaternion.copy(N.userData.q0),N.scale.setScalar(1),N.material.uniforms.uAnelA.value=1,tt=0,W.visible=!1,W.userData.veio=!1,W.userData.pronto=!1,U.value=0,G.material.uniforms.uA.value=0,W.userData.vid.pause(),F.set(0,1.7,8),I=.42,Ze=$e=.05,et=0,Qe=0,Xe(),qe(`Arrumar a sala`,`Encontre as três orbes e segure sobre cada uma para acendê-la.`,4200)},entra(){W.visible&&(X.copy(F).sub(W.position),X.y=0,X.lengthSq()<.01&&X.set(0,0,1),X.normalize(),F.copy(W.position).addScaledVector(X,16),F.y=1.7,I=Math.atan2(X.x,X.z)),L=!0,Ct=!1,tt=0,t.classList.add(`explorando`),document.documentElement.style.overflow=`hidden`,o.lenis?.()?.stop(),We(),qe(`Arrumar a sala`,E?`Arraste para olhar. Segure para andar. Encontre os três orbes.`:`Mova o mouse para olhar. Segure o clique para andar. Encontre os três orbes.`,4600),Ft||=requestAnimationFrame(Ht)},sai(){L=!1,nt=!1,t.classList.remove(`explorando`),document.documentElement.style.overflow=``,o.lenis?.()?.start(),We()}}}export{Ce as a,xe as c,Te as i,De as n,k as o,Ee as r,O as s,Me as t};