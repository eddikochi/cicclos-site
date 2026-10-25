import{$ as e,B as t,H as n,O as r,Q as i,R as a,U as o,a as s,b as c,i as ee,lt as te,n as ne,nt as re,o as ie,rt as l,ut as u,x as ae}from"./three.module.B0izd2uC.js";var d=(e,t=0,n=1)=>Math.min(n,Math.max(t,e)),f=(e,t,n)=>{let r=d((n-e)/(t-e));return r*r*(3-2*r)},p=(e,t,n)=>e+(t-e)*n;function oe(d,oe,se){let m=d.querySelector(`.hero__palco`),h=d.querySelector(`.hero__canvas`),g=d.querySelector(`.hero__simbolo`),_=d.querySelector(`.hero__repouso`),ce=d.querySelector(`.hero__clarao`),le=[...d.querySelectorAll(`.batida`)].map(e=>({el:e,de:+e.dataset.de,ate:+e.dataset.ate})),v=matchMedia(`(max-width: 860px)`).matches,y=new ne({canvas:h,antialias:!v,alpha:!1,powerPreference:`high-performance`});y.setPixelRatio(Math.min(devicePixelRatio||1,v?1.5:2)),y.setClearColor(0,1);let b=new i,x=new a(40,1,.1,200),S=v?21:33,C=v?23:19,w=2.25,T=1.55,ue=[{z:-9,f:.55,fundo:!0},{z:0,f:1}],E=new u(v?2.25:6.75,-1.55,0),D=[],O=[],k=[];ue.forEach((e,t)=>{for(let t=0;t<S;t++)for(let n=0;n<C;n++){if(e.fundo&&(t+n)%2)continue;let r=(t-(S-1)/2)*w+(e.fundo?w/2:0),i=(n-(C-1)/2)*T+(e.fundo?T/2:0);D.push(r,i,e.z),O.push(Math.random()),k.push(+(!e.fundo&&Math.abs(r-E.x)<.01&&Math.abs(i-E.y)<.01))}});let de=O.length,A=new ae;A.copy(new t(1.95,1.3)),A.instanceCount=de,A.setAttribute(`aOff`,new c(new Float32Array(D),3)),A.setAttribute(`aRnd`,new c(new Float32Array(O),1)),A.setAttribute(`aEmb`,new c(new Float32Array(k),1));let j={uT:{value:0},uRev:{value:0},uBrasa:{value:0},uAbre:{value:0},uApaga:{value:0},uCam:{value:new u},uFeixe:{value:new te(0,30)}},fe=new e({uniforms:j,transparent:!0,depthWrite:!1,vertexShader:`
      attribute vec3 aOff; attribute float aRnd; attribute float aEmb;
      varying vec2 vUv; varying float vRnd; varying float vEmb; varying float vDist; varying vec2 vPos;
      uniform float uAbre;
      void main(){
        vUv = uv; vRnd = aRnd; vEmb = aEmb;
        vec3 p = position;
        p.xy *= 1.0 + aEmb * uAbre * 0.35;
        vec4 w = modelMatrix * vec4(p + aOff, 1.0);
        vPos = aOff.xy;
        vec4 mv = viewMatrix * w;
        vDist = -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uT, uRev, uBrasa, uAbre, uApaga; uniform vec2 uFeixe;
      varying vec2 vUv; varying float vRnd; varying float vEmb; varying float vDist; varying vec2 vPos;
      float caixa(vec2 p, vec2 b, float r){ vec2 q = abs(p) - b + r; return length(max(q,0.)) + min(max(q.x,q.y),0.) - r; }
      float bloco(vec2 uv, vec4 r){ return step(r.x,uv.x)*step(uv.x,r.z)*step(r.y,uv.y)*step(uv.y,r.w); }
      void main(){
        vec2 p = vUv - 0.5;
        float d = caixa(p * vec2(1.95,1.3), vec2(0.975,0.65), 0.08);
        float a = 1.0 - smoothstep(0.0, 0.012, d);
        if (a < 0.01) discard;
        // o "template": barra, banner, três cards, linhas. Igual em todas.
        float t = 0.10;
        t += 0.10 * bloco(vUv, vec4(0.06,0.86,0.94,0.94));
        t += 0.07 * bloco(vUv, vec4(0.06,0.50,0.94,0.80));
        t += 0.06 * (bloco(vUv, vec4(0.06,0.22,0.33,0.44)) + bloco(vUv, vec4(0.37,0.22,0.63,0.44)) + bloco(vUv, vec4(0.67,0.22,0.94,0.44)));
        t += 0.05 * (bloco(vUv, vec4(0.06,0.10,0.70,0.14)) + bloco(vUv, vec4(0.06,0.04,0.50,0.07)));
        // a luz revela de dentro para fora; a brasa fica de fora até ser vista
        float r = length(vPos) / 34.0;
        float rev = smoothstep(r, r + 0.1, uRev * 1.25);
        float pisca = 0.9 + 0.1 * sin(uT * 2.0 + vRnd * 40.0);
        vec3 cor = vec3(t) * rev * pisca * (1.0 - uApaga * 0.75 * (1.0 - vEmb));
        // brasa: luz quente que respira por dentro de uma tela cinza
        float br = vEmb * uBrasa;
        float nucleo = exp(-dot(p*vec2(1.6,2.2), p*vec2(1.6,2.2)) * 9.0);
        float pulso = 0.75 + 0.25 * sin(uT * 2.6);
        cor += br * vec3(1.0,0.84,0.62) * (nucleo * 1.6 + 0.12) * pulso;
        float borda = smoothstep(-0.03, 0.0, d) * (1.0 - smoothstep(0.0, 0.012, d));
        cor += br * vec3(1.0,0.9,0.75) * borda * 0.0;
        cor = mix(cor, vec3(1.0,0.97,0.92), vEmb * uAbre);
        // feixe de luz vertical que desce no começo
        float fx = exp(-pow((vPos.x - uFeixe.x) * 0.9, 2.0)) * step(uFeixe.y, vPos.y + 0.7);
        cor += vec3(0.25) * fx * (1.0 - uRev) * 0.0;
        // névoa: some no escuro com a distância
        float neb = exp(-max(vDist - 8.0, 0.0) * 0.045);
        gl_FragColor = vec4(cor * neb, a);
      }`}),M=document.createElement(`canvas`);M.width=M.height=128;let N=M.getContext(`2d`),P=N.createRadialGradient(64,64,0,64,64,64);P.addColorStop(0,`rgba(255,226,190,.9)`),P.addColorStop(.3,`rgba(255,214,170,.28)`),P.addColorStop(1,`rgba(255,214,170,0)`),N.fillStyle=P,N.fillRect(0,0,128,128);let F=new re(new l({map:new ie(M),transparent:!0,depthWrite:!1,blending:2,opacity:0}));F.position.set(E.x,E.y,.15),F.scale.set(5,5,1);let I=new r(A,fe);I.frustumCulled=!1,b.add(I),b.add(F);let L=new e({uniforms:{uA:{value:0},uL:{value:0}},transparent:!0,depthWrite:!1,blending:2,vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,fragmentShader:`uniform float uA, uL; varying vec2 vUv;
      void main(){ float x = abs(vUv.x - .5) * 2.; float core = exp(-x*x*60.) + .35*exp(-x*x*6.);
        float y = smoothstep(1. - uL, 1. - uL + .25, vUv.y); float topo = smoothstep(0., .2, vUv.y);
        gl_FragColor = vec4(vec3(1.), core * y * topo * uA * .9); }`}),R=new r(new t(1.4,26),L);R.position.set(0,12.4,1.2),b.add(R);let z=v?300:700,B=new Float32Array(z*3);for(let e=0;e<z;e++)B[e*3]=(Math.random()-.5)*60,B[e*3+1]=(Math.random()-.5)*34,B[e*3+2]=Math.random()*30-6;let V=new s;V.setAttribute(`position`,new ee(B,3));let H=new n(V,new o({color:16777215,size:.05,transparent:!0,opacity:.35,depthWrite:!1,blending:2}));b.add(H);let U=new u;function pe(e){let t=f(.18,.46,e),n=f(.46,.64,e),r=f(.66,.95,e),i=v?40:32,a=p(0,E.x*.55,n),o=p(0,E.y*.55,n),s=p(5.5,i,t);return s=p(s,i*.62,n),a=p(a,E.x,r),o=p(o,E.y,r),s=p(s,1.15,r*r),U.set(p(0,E.x,Math.max(n*.7,r)),p(0,E.y,Math.max(n*.7,r)),0),{x:a,y:o,z:s}}let W=0,G=0,K=!0,q=0,J=0,Y=0,X={x:0,y:0,sx:0,sy:0};addEventListener(`pointermove`,e=>{X.x=e.clientX/innerWidth-.5,X.y=e.clientY/innerHeight-.5},{passive:!0});function Z(){J=m.clientWidth,Y=m.clientHeight,y.setSize(J,Y,!1),x.aspect=J/Y,x.fov=J/Y<.8?58:40,x.updateProjectionMatrix()}Z(),addEventListener(`resize`,Z);function Q(e){let t=1-f(.01,.06,e);_.style.opacity=t,_.style.transform=`translateY(${(1-t)*-30}px)`,_.style.visibility=t<.01?`hidden`:`visible`;let n=f(.02,.18,e),r=f(.18,.4,e),i=p(1,1.12,n)*p(1,.05,r);g.style.opacity=(1-f(.33,.42,e)).toFixed(3),g.style.transform=`translate(-50%,-50%) scale(${i.toFixed(4)}) rotate(${(n*40+r*140).toFixed(2)}deg)`,g.style.filter=`brightness(${(1+n*.8).toFixed(2)})`;for(let t of le){let n=f(t.de-.02,t.de+.012,e)*(1-f(t.ate-.012,t.ate+.02,e));t.el.style.opacity=n.toFixed(3),t.el.style.filter=n<.99?`blur(${((1-n)*8).toFixed(1)}px)`:`none`,t.el.style.transform=`translateY(calc(-50% + ${((1-n)*16).toFixed(1)}px))`}let a=f(.82,.9,e)*(1-f(.92,.985,e));ce.style.opacity=a.toFixed(3),h.style.opacity=(1-f(.9,.97,e)).toFixed(3)}function $(e){q=0;let t=e/1e3,n=Math.min(.1,(e-($._u||e))/1e3);$._u=e,W+=(G-W)*(1-Math.exp(-n*7));let r=W;X.sx+=(X.x-X.sx)*.04,X.sy+=(X.y-X.sy)*.04;let i=pe(r);x.position.set(i.x+X.sx*.8*(1-f(.7,.9,r)),i.y-X.sy*.5,i.z),x.lookAt(U),j.uT.value=t,j.uRev.value=f(.12,.42,r),j.uBrasa.value=f(.44,.52,r),j.uApaga.value=f(.5,.62,r),j.uAbre.value=f(.74,.9,r),F.material.opacity=j.uBrasa.value*(.75+.25*Math.sin(t*2.6))*(1-j.uAbre.value*.5),F.scale.setScalar(4+j.uAbre.value*10),L.uniforms.uA.value=f(.03,.08,r)*(1-f(.2,.3,r)),L.uniforms.uL.value=f(.03,.16,r),H.rotation.y=t*.01,y.render(b,x),Q(r),K&&(q=requestAnimationFrame($))}se.create({trigger:d,start:`top top`,end:`bottom bottom`,onUpdate:e=>{G=e.progress},onLeave:()=>{G=W=1,Q(1)},onLeaveBack:()=>{G=W=0,Q(0)},onToggle:e=>{K=e.isActive||e.progress<1,K&&!q&&(q=requestAnimationFrame($))}}),q=requestAnimationFrame($),d.classList.add(`com-3d`)}export{oe as iniciaHero};