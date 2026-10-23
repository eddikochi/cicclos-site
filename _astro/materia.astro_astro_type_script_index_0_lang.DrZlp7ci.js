import{Q as e,R as t,T as n,Z as r,a as i,ct as a,i as o,lt as s,n as ee,q as te,z as c}from"./three.module.CV1ZUFdv.js";import{i as l,n as ne,r as u,t as re}from"./OutputPass.CnmD7TFY.js";var d=matchMedia(`(max-width: 860px)`).matches,ie=matchMedia(`(prefers-reduced-motion: reduce)`).matches,f=d?900:1800,p=48,ae=document.querySelector(`canvas.materia`),m=new ee({canvas:ae,antialias:!0,powerPreference:`high-performance`});m.setPixelRatio(Math.min(devicePixelRatio||1,d?1.5:2));var h=new r,g=new t(42,1,.1,50);g.position.set(0,0,3.4);var _=new Float32Array(f*p*2*3),v=new Float32Array(f*p*2*4),y=new Float32Array(f*p*2),b=new Float32Array(f*p*2),x=0;for(let e=0;e<f;e++){let t=[Math.random(),Math.random(),Math.random(),Math.random()];for(let n=0;n<p;n++)for(let r=0;r<2;r++)v.set(t,x*4),y[x]=(n+r)/p,b[x]=e,x++}var S=new i;S.setAttribute(`position`,new o(_,3)),S.setAttribute(`aSeed`,new o(v,4)),S.setAttribute(`aS`,new o(y,1)),S.setAttribute(`aIdx`,new o(b,1));var C={uT:{value:0},uK:{value:.6},uW:{value:Array(7).fill(0)},uAlma:{value:0},uOrb:{value:new s},uGanho:{value:d?.3:.16},uN:{value:f},uAspect:{value:1},uTrava:{value:0},uFlor:{value:0}};C.uW.value[0]=1;var w=new e({uniforms:C,transparent:!0,depthWrite:!1,depthTest:!1,blending:2,vertexShader:`
    #define TAU 6.2831853
    attribute vec4 aSeed; attribute float aS; attribute float aIdx;
    uniform float uT, uK, uW[7], uAlma, uN, uAspect, uTrava, uFlor; uniform vec3 uOrb;
    varying float vA; varying vec3 vCor;

    float onda(float th, float u, float k, float w){
      float tor = 2.6 * (0.75 + 0.5 * k);
      float s = 1.0 + 0.02 * sin(2.0 * th + w);
      s += u * (0.5 + 0.5 * k) * (0.19 * sin(2.0 * th + w + u * tor) + 0.11 * sin(3.0 * th - w + 1.9 + u * tor) + 0.06 * sin(th + w + 3.1 + u * tor));
      return s;
    }
    // 0 · o símbolo: fita de fios + dois Cs de luz
    vec3 simbolo(out float a, out float isC){
      float w = TAU * uT / 4.44, u = aSeed.x, k = uK;
      isC = step(0.988, aSeed.w);
      float th, esc = 1.0;
      if (isC > 0.5) {
        float interno = step(aSeed.x, 0.5);
        u = interno > 0.5 ? 0.0 : 1.0; esc = interno > 0.5 ? 0.9 : 1.075;
        float hw = 3.14159 * (0.11 + 0.05 * k);
        float gc = interno > 0.5 ? -1.5708 + 0.55 * sin(w / 6.3) : -1.5708 + 0.42 + 0.7 * sin(w / 4.1 + 1.7);
        th = gc + hw + aS * (TAU - 2.0 * hw);
        float crista = mod(w * (interno > 0.5 ? 0.7 : -0.5), TAU);
        float d = abs(mod(th - crista + 9.42478, TAU) - 3.14159);
        a = (0.35 + 0.9 * exp(-d * d * 2.2)) * smoothstep(0.0, 0.06, aS) * smoothstep(1.0, 0.94, aS);
      } else {
        th = aSeed.y * TAU + aS * (0.45 + 0.55 * aSeed.z) * TAU;
        a = 0.07 * sin(3.14159 * aS) * (1.15 - 0.5 * u);
      }
      float s = onda(th, u, k, w) * esc;
      vec2 o = vec2(cos(w + 0.6), sin(w + 0.6) * 0.8) * 0.07 * k * u;
      return vec3(o + vec2(cos(th), sin(th) * 0.985) * s * 0.78, (u - 0.5) * 0.3);
    }
    // 1 · semente: os fios espiralam para um ponto que pulsa
    vec3 semente(out float a){
      float bate = pow(abs(sin(uT * 2.2)), 12.0) + 0.6 * pow(abs(sin(uT * 2.2 + 0.5)), 12.0);
      float th = aSeed.y * TAU + aS * 2.0 + (1.0 - aS) * 5.0 + uT * 0.5;
      float rho = mix(0.015, 0.55 + 0.35 * aSeed.z, pow(aS, 1.6)) * (1.0 + 0.18 * bate);
      a = (0.12 + 0.6 * pow(1.0 - aS, 3.0)) * (0.8 + 0.6 * bate);
      return vec3(cos(th) * rho, sin(th) * rho, (aSeed.x - 0.5) * 0.4 * aS);
    }
    // 2 · anéis de crescimento: ondas concêntricas, internas vivas, externas apagando
    vec3 aneis(out float a){
      float k = floor(aSeed.w * 14.0);
      float th = aSeed.y * TAU + aS * (0.5 + 0.5 * aSeed.z) * TAU;
      float r = 0.08 + k * 0.075 + 0.012 * sin(th * 3.0 + k * 1.7) + 0.006 * sin(th * 7.0 + uT * 1.5 + k);
      r *= 1.0 + 0.02 * sin(uT * 1.2 - k * 0.6);
      a = 0.22 * sin(3.14159 * aS) * (1.2 - k / 14.0);
      return vec3(cos(th) * r, sin(th) * r, -k * 0.02);
    }
    // 3/4 · o mundo parado: círculos cinzas idênticos em grade; um ainda tem alma
    vec3 parado(out float a, out float alma){
      float cel = mod(aIdx, 96.0);
      float col = mod(cel, 12.0), lin = floor(cel / 12.0);
      vec2 c = vec2((col - 5.5) * 0.36, (lin - 3.5) * 0.36);
      float th = aSeed.y * TAU + aS * TAU;
      alma = 1.0 - step(0.5, abs(cel - 52.0));
      float r = 0.12 + alma * uAlma * 0.01 * sin(uT * 3.0 + th * 4.0);
      a = 0.05 * sin(3.14159 * aS) + alma * uAlma * 0.3;
      return vec3(c + vec2(cos(th), sin(th)) * r, 0.0);
    }
    // 5 · florescer: cinco células de fios (membrana como uma esfera de anéis), respirando
    vec3 celulas(out float a){
      float c = mod(aIdx, 5.0);
      float ang = 1.5708 + c * TAU / 5.0 + uT * 0.04;
      vec2 cc = vec2(cos(ang), sin(ang)) * 0.68 * uFlor;
      float R = 0.3 + 0.015 * sin(uT * 1.6 + c);
      float phi = (aSeed.z - 0.5) * 3.0;
      float th = aSeed.y * TAU + aS * TAU;
      vec3 p = vec3(cos(phi) * cos(th), sin(phi) * 0.9 + cos(phi) * sin(th) * 0.3, cos(phi) * sin(th)) * R;
      a = 0.12 * sin(3.14159 * aS);
      return vec3(cc + p.xy, p.z);
    }
    // 6 · o jogo: caos (enxame) → três órbitas penteadas
    vec3 jogo(out float a){
      float k = floor(aSeed.w * 3.0);
      float ok = k < 0.5 ? uOrb.x : (k < 1.5 ? uOrb.y : uOrb.z);
      vec2 p0 = vec2((aSeed.y * 2.0 - 1.0) * 1.7 * uAspect * 0.62, (aSeed.z * 2.0 - 1.0) * 1.0);
      vec2 caos = p0 + 0.28 * vec2(sin(aS * 9.0 + aSeed.x * 20.0 + uT * 0.7), cos(aS * 7.0 + aSeed.y * 20.0 + uT * 0.6));
      float r = k < 0.5 ? 1.2 : (k < 1.5 ? 0.86 : 0.52);
      float th = aSeed.y * TAU + aS * (0.25 + 0.35 * aSeed.z) * TAU + uT * 0.12 * (k + 1.0);
      vec2 orb = vec2(cos(th), sin(th)) * (r + 0.015 * sin(th * 6.0 + uT));
      float tr = (k > 1.5 ? uTrava : 0.0);
      caos += tr * 0.08 * vec2(sin(uT * 40.0 + aSeed.x * 9.0), cos(uT * 37.0));
      float e = smoothstep(0.0, 1.0, ok);
      a = mix(0.07, 0.38, e) * sin(3.14159 * aS);
      return vec3(mix(caos, orb, e), 0.0);
    }
    void main(){
      float a0, a1, a2, a3, a5, a6, alma, isC;
      vec3 p0 = simbolo(a0, isC), p1 = semente(a1), p2 = aneis(a2), p3 = parado(a3, alma), p5 = celulas(a5), p6 = jogo(a6);
      vec3 p = p0 * uW[0] + p1 * uW[1] + p2 * uW[2] + p3 * (uW[3] + uW[4]) + p5 * uW[5] + p6 * uW[6];
      vA = a0 * uW[0] + a1 * uW[1] + a2 * uW[2] + a3 * (uW[3] + uW[4]) + a5 * uW[5] + a6 * uW[6];
      // os Cs só existem como Cs no símbolo; nas outras formas são fios comuns
      float cinza = (uW[3] + uW[4]) * (1.0 - alma * uAlma);
      vCor = mix(vec3(1.0), vec3(0.55, 0.56, 0.58), cinza);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }`,fragmentShader:`
    varying float vA; varying vec3 vCor;
    uniform float uGanho; void main(){ gl_FragColor = vec4(vCor * vA * uGanho, 1.0); }`}),T=new n(S,w);T.frustumCulled=!1,h.add(T);var E=new l(m);E.addPass(new u(h,g));var D=new ne(new a(1,1),.55,.4,.12);E.addPass(D),E.addPass(new re);function O(){let e=innerWidth,t=innerHeight;m.setSize(e,t,!1),E.setSize(e,t),g.aspect=e/t,g.position.z=e/t<.8?4.6:3.4,g.updateProjectionMatrix(),C.uAspect.value=Math.max(.6,e/t)}O(),addEventListener(`resize`,O);var k=[...document.querySelectorAll(`[data-cena]`)],A=document.querySelector(`[data-jogo]`),j=0,M=0;function N(){let e=k.map(e=>e.offsetTop).concat(A.offsetTop),t=scrollY+innerHeight*.3,n=0;for(let r=0;r<e.length-1;r++)t>=e[r]&&(n=r+Math.min(1,(t-e[r])/(e[r+1]-e[r])));t>=e[e.length-1]&&(n=6),M=Math.min(6,n)}addEventListener(`scroll`,N,{passive:!0}),N();var P=new IntersectionObserver(e=>e.forEach(e=>e.target.classList.toggle(`ve`,e.isIntersecting)),{threshold:.5});k.forEach(e=>P.observe(e));var oe=[1.2,.86,.52],F=[[`Design`,`A vitrine com a cara do seu negócio.`],[`Governança Digital`,`Cada cliente e cada dado num lugar só, com dono.`],[`Automações`,`O repetitivo roda sozinho, sobre uma base arrumada.`]],I=[0,0,0],L=document.querySelector(`[data-card]`),se=document.querySelector(`[data-cont]`),R=document.querySelector(`[data-cta]`),z=null,B=0,V=0,H=new te,U=new c(new s(0,0,1),0),W=new s,G=new a;function K(e){return G.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1),H.setFromCamera(G,g),H.ray.intersectPlane(U,W)?W.clone():null}function q(e,t){L.innerHTML=`${e}${t?`<small>${t}</small>`:``}`,L.style.opacity=1,clearTimeout(V),V=setTimeout(()=>L.style.opacity=+(J()===3),3200)}var J=()=>I.filter(e=>e>=1).length;addEventListener(`pointerdown`,e=>{j>5.6&&(z=K(e))}),addEventListener(`pointerup`,()=>z=null),addEventListener(`pointermove`,e=>{if(Y.x=e.clientX/innerWidth-.5,Y.y=e.clientY/innerHeight-.5,!z||j<5.6)return;let t=K(e);if(!t)return;let n=t.length(),r=Math.atan2(t.y,t.x)-Math.atan2(z.y,z.x),i=Math.abs((r+Math.PI*3)%(Math.PI*2)-Math.PI);z=t;let a=-1,o=.22;oe.forEach((e,t)=>{Math.abs(n-e)<o&&(o=Math.abs(n-e),a=t)}),!(a<0||I[a]>=1)&&(a===2&&I[1]<1?(B=1,q(`Automação só roda sobre base arrumada.`,`Penteie a Governança Digital primeiro.`)):(I[a]=Math.min(1,I[a]+i/(Math.PI*2*1.1)),I[a]>=1&&(se.textContent=J(),q(F[a][0],F[a][1]),J()===3&&setTimeout(()=>{q(`A sala está arrumada.`),R.classList.add(`ve`)},1400))))});var Y={x:0,y:0,sx:0,sy:0},X=[0,0,0],Z=performance.now(),Q=Z;function $(e){let t=Math.min(.1,(e-Q)/1e3);Q=e;let n=ie?3:(e-Z)/1e3;j+=(M-j)*(1-Math.exp(-t*3.2));let r=C.uW.value;for(let e=0;e<7;e++){let t=Math.abs(j-e);r[e]=Math.max(0,1-t)}let i=r.reduce((e,t)=>e+t,0)||1;for(let e=0;e<7;e++)r[e]/=i;let a=.5+.22*Math.sin(n/11.3*6.283)+.16*Math.sin(n/7.1*6.283+1.3);C.uK.value=.2+.8*Math.max(0,Math.min(1,a)),C.uT.value=n,C.uAlma.value=Math.min(1,Math.max(0,(j-3.3)/.6)),C.uFlor.value=Math.min(1,Math.max(0,(j-4.6)/.4));for(let e=0;e<3;e++)X[e]+=(I[e]-X[e])*(1-Math.exp(-t*4));C.uOrb.value.set(X[0],X[1],X[2]),B=Math.max(0,B-t*1.5),C.uTrava.value=B,Y.sx+=(Y.x-Y.sx)*.05,Y.sy+=(Y.y-Y.sy)*.05;let o=1-Math.min(1,Math.max(0,(j-5.3)/.4));T.rotation.y=Y.sx*.35*o,T.rotation.x=Y.sy*.25*o,E.render(),requestAnimationFrame($)}requestAnimationFrame($);