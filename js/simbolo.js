/* Cicclos · símbolo animado em repouso
 * Recriação em código do GIF de referência (site-cicclos/producao/fonte/simbolo-original.gif), sem o azul:
 * uma fita de fios de luz que formam o anel; cada fio é um círculo com ondas de 2 e 3 lóbulos,
 * com a fase deslocada em relação ao vizinho. Os fios se abrem e se juntam, e a crista gira.
 * Não é um loop fixo: um "humor" lento alterna momentos calmos (fios juntos, onda lenta) e
 * intensos (leque aberto, onda rápida), como respiração. Período de referência: 4,44 s (o do GIF).
 *
 * Uso: <cicclos-simbolo></cicclos-simbolo>  (ocupa o tamanho do pai; quadrado)
 * Atributos: tom="claro" (fios escuros) · estatico (quadro fixo) · k (intensidade 0–1 fixa) · vel (velocidade fixa) · fechado (sem as fendas)
 * CC (decisão do Eddi, 22/10, revista): a fita de vários fios continua inteira, igual ao símbolo original.
 * Junto dela correm dois anéis abertos em C (um perto do núcleo, outro na borda da fita), destacados só por
 * luz e movimento: mais brilho, uma crista de luz que percorre o arco e fendas que derivam em ritmos
 * diferentes. Às vezes as fendas se alinham, às vezes se afastam: o "CC" aparece sutil, sem quebrar o anel.
 * Os parâmetros de onda ficam em CICCLOS_ONDA para as formas da LP herdarem o mesmo movimento.
 */
(function () {
  var T = 4.44; // segundos por ciclo
  var ONDA = window.CICCLOS_ONDA = {
    periodo: T,
    fios: 30,
    raio: 0.285,            // raio do anel em fração do lado (deixa folga para o brilho não cortar)
    // fio 0 = núcleo quase circular; os demais se abrem para fora dele como uma mola.
    // [lóbulos, amplitude no fio mais aberto, voltas da crista por ciclo, fase inicial]
    ondas: [[2, 0.19, 1, 0.0], [3, 0.11, -1, 1.9], [1, 0.06, 1, 3.1]],
    nucleo: 0.02,         // ondulação do próprio núcleo (quase nada: o anel segue redondo)
    torcao: 2.6,           // quanto a fase avança de um fio para o outro (abre o leque)
    deriva: 0.07,          // deslocamento do centro dos fios abertos: a sensação de profundidade
    // fendas(t,k): os dois Cs. Centro do vão (rad, -π/2 = 12h) e meia-abertura, para o anel interno e o externo
    fendas: function (t, k) {
      var w = 2 * Math.PI * t / T, hw = Math.PI * (0.11 + 0.05 * k);
      return [
        { c: -Math.PI / 2 + 0.55 * Math.sin(w / 6.3), hw: hw },
        { c: -Math.PI / 2 + 0.42 + 0.7 * Math.sin(w / 4.1 + 1.7), hw: hw * 0.9 }
      ];
    },
    // humor(t): intensidade k (0 calmo → 1 intenso) e velocidade da onda, variando sem repetir
    humor: function (t) {
      var n = 0.5 + 0.22 * Math.sin(t / 11.3 * 6.283) + 0.16 * Math.sin(t / 7.1 * 6.283 + 1.3) + 0.12 * Math.sin(t / 17.9 * 6.283 + 2.1);
      var k = Math.max(0, Math.min(1, n)); k = k * k * (3 - 2 * k);           // suaviza os extremos
      return { k: 0.2 + 0.8 * k, vel: 0.6 + 0.8 * k };
    },
    // r(θ,f,u,k): raio relativo de um fio u∈[0,1] no ângulo θ, fase f (s) e intensidade k
    r: function (th, f, u, k) {
      if (k == null) k = 1;
      var w = 2 * Math.PI * f / T, s = 1 + this.nucleo * Math.sin(2 * th + w), tor = this.torcao * (0.75 + 0.5 * k);
      for (var j = 0; j < this.ondas.length; j++) {
        var o = this.ondas[j];
        s += u * (0.5 + 0.5 * k) * o[1] * Math.sin(o[0] * th + o[2] * w + o[3] + u * tor);
      }
      return s;
    }
  };

  var reduz = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function Simbolo() { return Reflect.construct(HTMLElement, [], Simbolo); }
  Simbolo.prototype = Object.create(HTMLElement.prototype);
  Simbolo.prototype.constructor = Simbolo;
  Object.setPrototypeOf(Simbolo, HTMLElement);

  Simbolo.prototype.connectedCallback = function () {
    if (this._c) return;
    var el = this;
    el.style.display = el.style.display || 'block';
    el.style.position = 'relative';
    el.setAttribute('role', 'img');
    if (!el.hasAttribute('aria-label')) el.setAttribute('aria-label', 'Símbolo da Cicclos: anel de luz em movimento');
    var c = el._c = document.createElement('canvas');
    el.appendChild(c);
    var g = el._g = document.createElement('canvas'); // camada de brilho (baixa resolução + blur)
    el._vis = true;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { el._vis = es[0].isIntersecting; if (el._vis) el._loop(); }).observe(el);
    }
    if ('ResizeObserver' in window) new ResizeObserver(function () { el._fit(); }).observe(el);
    el._t0 = performance.now() - Math.random() * 20000;
    el._f = Math.random() * T; el._last = null;
    el._fit();
    el._loop();
  };

  Simbolo.prototype._fit = function () {
    var r = this.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
    var s = Math.max(40, Math.min(r.width, r.height || r.width));
    this._s = s;
    this._c.style.cssText = 'position:absolute;width:' + s + 'px;height:' + s + 'px;left:50%;top:50%;transform:translate(-50%,-50%)';
    this._c.width = this._c.height = Math.round(s * dpr);
    this._g.width = this._g.height = Math.round(s / 3);
    this._dpr = dpr;
    if (reduz || this.hasAttribute('estatico')) this._draw(parseFloat(this.getAttribute('t')) || 0.9, this.hasAttribute('k') ? parseFloat(this.getAttribute('k')) : 0.6);
  };

  Simbolo.prototype._loop = function () {
    var el = this;
    if (reduz || el.hasAttribute('estatico') || el._raf) return;
    var tick = function (now) {
      el._raf = null;
      if (!el.isConnected || !el._vis) { el._last = null; return; }
      var dt = el._last == null ? 0 : Math.min(0.1, (now - el._last) / 1000); el._last = now;
      var h = ONDA.humor((now - el._t0) / 1000);
      if (el.hasAttribute('k')) h.k = parseFloat(el.getAttribute('k'));        // intensidade fixa (demonstração)
      if (el.hasAttribute('vel')) h.vel = parseFloat(el.getAttribute('vel'));  // velocidade fixa (demonstração)
      el._k = h.k;
      el._f = (el._f + dt * h.vel) % (T * 1000);
      el._draw(el._f, h.k);
      el._raf = requestAnimationFrame(tick);
    };
    el._raf = requestAnimationFrame(tick);
  };

  Simbolo.prototype._fios = function (ctx, S, t, k, lw, alpha, cor) {
    var cx = S / 2, cy = S / 2, R = ONDA.raio * S, N = ONDA.fios, w = 2 * Math.PI * t / T;
    var fe = this.hasAttribute('fechado') ? null : ONDA.fendas(t, k);
    ctx.lineCap = 'round';
    var cs = [];
    for (var i = 0; i < N; i++) {
      var u = i / (N - 1);
      // fio central mais forte (núcleo do anel), bordas da fita mais fracas
      var a = alpha * (i === 0 ? 2 : i < 3 ? 1.4 : (1.2 - 0.45 * u) * (0.85 + 0.3 * k));
      ctx.strokeStyle = 'rgba(' + cor + ',' + Math.min(1, a).toFixed(3) + ')';
      ctx.lineWidth = i === 0 ? lw * 1.7 : i < 3 ? lw * 1.25 : lw;
      var ox = Math.cos(w + 0.6) * ONDA.deriva * k * R * u, oy = Math.sin(w + 0.6) * ONDA.deriva * k * R * u * 0.8;
      ctx.beginPath();
      for (var j = 0; j <= 160; j++) {
        var th = j / 160 * Math.PI * 2, rr = R * ONDA.r(th, t, u, k);
        var x = cx + ox + rr * Math.cos(th), y = cy + oy + rr * Math.sin(th) * 0.985;
        j ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
      if (fe && (i === 0 || i === N - 1)) cs.push({ u: u, ox: ox, oy: oy, f: fe[i === 0 ? 0 : 1], esc: i === 0 ? 0.9 : 1.075 });
    }
    // os dois Cs: mesmo desenho dos fios, mas abertos, mais claros e com uma crista de luz correndo
    ctx.lineCap = 'butt';
    for (var c = 0; c < cs.length; c++) {
      var o = cs[c], a0 = o.f.c + o.f.hw, arc = Math.PI * 2 - 2 * o.f.hw, M = 120;
      var crista = ((w * (c ? -0.5 : 0.7)) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
      for (var j = 0; j < M; j++) {
        var th0 = a0 + j / M * arc, th1 = a0 + (j + 1) / M * arc;
        var d = Math.abs(((th0 - crista) % (Math.PI * 2) + Math.PI * 3) % (Math.PI * 2) - Math.PI);
        var luz = 0.35 + 0.65 * Math.exp(-d * d * 2.2);
        var ponta = Math.min(1, j / 8, (M - 1 - j) / 8);             // as pontas do C se apagam suave
        ctx.strokeStyle = 'rgba(' + cor + ',' + Math.min(1, alpha * 2.6 * luz * ponta).toFixed(3) + ')';
        ctx.lineWidth = lw * (1.6 + 1.2 * luz);
        var r0 = o.esc * R * ONDA.r(th0, t, o.u, k), r1 = o.esc * R * ONDA.r(th1, t, o.u, k);
        ctx.beginPath();
        ctx.moveTo(cx + o.ox + r0 * Math.cos(th0), cy + o.oy + r0 * Math.sin(th0) * 0.985);
        ctx.lineTo(cx + o.ox + r1 * Math.cos(th1), cy + o.oy + r1 * Math.sin(th1) * 0.985);
        ctx.stroke();
      }
    }
  };

  Simbolo.prototype._draw = function (t, k) {
    var claro = this.getAttribute('tom') === 'claro' || (!this.hasAttribute('tom') && document.documentElement.getAttribute('data-theme') === 'light'), cor = claro ? '10,10,12' : '255,255,255';
    var c = this._c, ctx = c.getContext('2d'), S = c.width, g = this._g, gx = g.getContext('2d'), G = g.width;
    ctx.clearRect(0, 0, S, S);
    // halo difuso (a "névoa de luz" em volta do anel no GIF)
    var h = ctx.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S * 0.46);
    var hk = 0.6 + 0.4 * k;
    h.addColorStop(0, 'rgba(' + cor + ',0)');
    h.addColorStop(0.55, 'rgba(' + cor + ',' + ((claro ? .08 : .15) * hk).toFixed(3) + ')');
    h.addColorStop(0.78, 'rgba(' + cor + ',' + ((claro ? .03 : .06) * hk).toFixed(3) + ')');
    h.addColorStop(1, 'rgba(' + cor + ',0)');
    ctx.fillStyle = h; ctx.fillRect(0, 0, S, S);
    // brilho: fios grossos em baixa resolução, ampliados com blur
    gx.clearRect(0, 0, G, G);
    gx.globalCompositeOperation = claro ? 'source-over' : 'lighter';
    this._fios(gx, G, t, k, G / 120, 0.065, cor);
    ctx.save();
    ctx.globalCompositeOperation = claro ? 'source-over' : 'lighter';
    ctx.filter = 'blur(' + Math.max(2, Math.round(S / 55)) + 'px)';
    ctx.drawImage(g, 0, 0, S, S);
    ctx.filter = 'none';
    // fios nítidos
    this._fios(ctx, S, t, k, Math.max(0.7, S / 560), claro ? 0.34 : 0.3, cor);
    ctx.restore();
  };

  if (!customElements.get('cicclos-simbolo')) customElements.define('cicclos-simbolo', Simbolo);
})();
