// Nuvemath — birinchi tashrif uchun animatsion intro (mustaqil komponent).
// Ssenariy: matematik olam ochiladi → ko'zoynakli odamcha aylanayotgan formulalarni kuzatadi →
// π orbitadan ajralib uchadi, odamcha uni ushlaydi → π logotipdagi joyiga uchadi va logotip qismma-qism yig'iladi.
// Ulash: <head> dagi kichik qo'riqchi skript + css/intro.css + Three.js + GSAP + shu fayl.
// API: NuvemathIntro.play({ force }) — introni qo'lda ishga tushirish; NuvemathIntro.reset() — "ko'rilgan" belgisini o'chirish.
(function (root) {
  'use strict';
  var KEY = 'nm-intro-seen';
  var html = document.documentElement;
  var FORMULAS = ['π', '∑', '√x', '∫ f(x) dx', 'x²', 'a² + b² = c²', 'f(x)', 'sin(x)', 'cos(x)', 'v = (2, −1, 3)',
    'Δ = b² − 4ac', 'S = πr²', 'V = ⁴⁄₃πr³', 'sin²α + cos²α = 1', '∞', 'θ', 'log₂ 8 = 3', '∠ABC = 90°', 'y = kx + b', '∂f/∂x', 'e^{iπ} + 1 = 0', 'n!'];
  var TAGLINE = 'See Math. Explore Dimensions.';
  // Logotip qatlamlaridagi π joyi (emblem-dark.png 768×448 piksellarida)
  var PI_SLOT = { cx: 384.5 / 768, cy: 212 / 448, h: 178 / 448 };

  function seen() { try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; } }
  function markSeen() { try { localStorage.setItem(KEY, '1'); } catch (e) {} }
  function tr(k, fb) { var s = root.T ? root.T(k) : k; return s === k ? fb : s; }
  function reducedMotion() { return !!(root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches); }
  function smooth(a, b, x) { var t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); }
  function center(el) { var r = el.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2, w: r.width, h: r.height }; }

  var running = null;

  // Ko'zoynakli matematik-odamcha (SVG, neon chiziqli uslub)
  var CHAR_SVG =
    '<svg viewBox="0 0 140 220" class="nm-char-svg" aria-hidden="true">' +
    '<ellipse cx="70" cy="212" rx="38" ry="5" class="ch-shadow"/>' +
    '<g class="ch-body">' +
    '<path d="M60 150 L56 200" class="ch-limb"/><path d="M80 150 L84 200" class="ch-limb"/>' +
    '<ellipse cx="52" cy="203" rx="9" ry="4.5" class="ch-fill"/><ellipse cx="88" cy="203" rx="9" ry="4.5" class="ch-fill"/>' +
    '<g class="ch-armL"><path d="M47 94 Q36 114 35 133" class="ch-limb"/><circle cx="35" cy="136" r="5.5" class="ch-fill"/></g>' +
    '<rect x="44" y="82" width="52" height="74" rx="25" class="ch-fill ch-torso"/>' +
    '<path d="M56 90 Q70 101 84 90" class="ch-scarf"/><path d="M80 95 L86 116" class="ch-scarf"/>' +
    '<text x="70" y="132" class="ch-sym">∑</text>' +
    '<g class="ch-armR"><path d="M93 94 Q104 114 105 133" class="ch-limb"/><circle cx="105" cy="136" r="5.5" class="ch-fill ch-hand"/></g>' +
    '<g class="ch-head">' +
    '<circle cx="70" cy="50" r="27" class="ch-fill"/>' +
    '<path d="M46 42 Q52 18 72 21 Q90 22 95 40 Q84 30 70 33 Q58 30 46 42 Z" class="ch-hair"/>' +
    '<g class="ch-eyes"><ellipse cx="61" cy="52" rx="5.6" ry="6.4" class="ch-eye"/><ellipse cx="80" cy="52" rx="5.6" ry="6.4" class="ch-eye"/>' +
    '<g class="ch-pupils"><circle cx="61" cy="53" r="2.7" class="ch-pupil"/><circle cx="80" cy="53" r="2.7" class="ch-pupil"/></g></g>' +
    '<circle cx="61" cy="52" r="9" class="ch-glass"/><circle cx="80" cy="52" r="9" class="ch-glass"/><path d="M70 51 L71 51" class="ch-glass"/>' +
    '<path d="M54 39 Q61 35 67 39" class="ch-brow ch-browL"/><path d="M74 39 Q80 35 87 39" class="ch-brow ch-browR"/>' +
    '<path d="M63 66 Q70.5 72 78 66" class="ch-mouth ch-smile"/><ellipse cx="70.5" cy="68" rx="3.4" ry="4.2" class="ch-mouth ch-o"/>' +
    '</g></g></svg>';

  function buildDOM() {
    var el = document.createElement('div');
    el.id = 'nm-intro'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', 'Nuvemath');
    var name = 'NUVEMATH'.split('').map(function (c, i) { return '<span class="nm-l' + (i < 4 ? ' a' : ' b') + '">' + c + '</span>'; }).join('');
    var trail = ''; for (var i = 0; i < 7; i++) trail += '<span class="nm-pi ghost" aria-hidden="true">π</span>';
    el.innerHTML =
      '<div class="nm-grid" aria-hidden="true"></div>' +
      '<canvas class="nm-canvas" aria-hidden="true"></canvas>' +
      '<div class="nm-beam" aria-hidden="true"></div>' +
      '<div class="nm-flash" aria-hidden="true"></div>' +
      '<div class="nm-brand">' +
      '<div class="nm-emblem-wrap"><div class="nm-glow" aria-hidden="true"></div>' +
      '<img class="nm-layer book" src="assets/intro/book.png" alt="" aria-hidden="true">' +
      '<img class="nm-layer arc" src="assets/intro/arc.png" alt="" aria-hidden="true">' +
      '<img class="nm-layer pi" src="assets/intro/pi.png" alt="" aria-hidden="true">' +
      '<img class="nm-layer star" src="assets/intro/star.png" alt="" aria-hidden="true">' +
      '<img class="nm-emblem" src="assets/emblem-dark.png" alt="Nuvemath"></div>' +
      '<h1 class="nm-name" aria-label="NUVEMATH">' + name + '</h1>' +
      '<p class="nm-tag">' + TAGLINE + '</p></div>' +
      '<div class="nm-char">' + CHAR_SVG + '</div>' +
      trail + '<span class="nm-pi main" aria-hidden="true">π</span><div class="nm-catch" aria-hidden="true"></div>' +
      '<button type="button" class="nm-skip">' + tr('intro.skip', 'Skip intro') + ' ⏭</button>';
    document.body.appendChild(el);
    return el;
  }

  // Formulani matnli teksturaga chizish (yorug'lik "glow" bilan)
  function textTexture(THREE, text, color) {
    var c = document.createElement('canvas'), g = c.getContext('2d'), fs = 72;
    var font = 'italic 500 ' + fs + 'px "Cambria Math", "STIX Two Math", "Times New Roman", serif';
    g.font = font;
    var sup = text.match(/^(.*)\^\{(.*)\}(.*)$/); // e^{iπ} + 1 = 0 — daraja kichik va yuqorida
    var w = sup ? g.measureText(sup[1]).width + g.measureText(sup[2]).width * 0.62 + g.measureText(sup[3]).width : g.measureText(text).width;
    c.width = Math.ceil(w + 60); c.height = fs + 60;
    g.font = font; g.textBaseline = 'middle'; g.fillStyle = color; g.shadowColor = color; g.shadowBlur = 18;
    var y = c.height / 2 + 4;
    if (sup) {
      var x = 30; g.fillText(sup[1], x, y); x += g.measureText(sup[1]).width;
      g.font = 'italic 500 ' + Math.round(fs * 0.62) + 'px "Cambria Math", "Times New Roman", serif'; g.fillText(sup[2], x, y - fs * 0.32); x += g.measureText(sup[2]).width;
      g.font = font; g.fillText(sup[3], x, y);
    } else {
      g.fillText(text, 30, y); g.shadowBlur = 6; g.fillText(text, 30, y);
      if (/^[a-z] = \(/.test(text)) { // vektor: harf ustiga strelka chizamiz (birlashtiruvchi ⃗ belgisi kanvasda siljib ketadi)
        var vw = g.measureText(text[0]).width, ax = 30 + 4, ay = y - fs * 0.42;
        g.lineWidth = 4; g.strokeStyle = color; g.beginPath(); g.moveTo(ax, ay); g.lineTo(ax + vw, ay);
        g.moveTo(ax + vw - 10, ay - 7); g.lineTo(ax + vw, ay); g.lineTo(ax + vw - 10, ay + 7); g.stroke();
      }
    }
    var tex = new THREE.CanvasTexture(c); tex.minFilter = THREE.LinearFilter;
    return { tex: tex, aspect: c.width / c.height };
  }
  function dotTexture(THREE) {
    var c = document.createElement('canvas'); c.width = c.height = 64; var g = c.getContext('2d');
    var gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.25, 'rgba(150,200,255,.85)'); gr.addColorStop(1, 'rgba(60,120,255,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  }

  // ---------- Odamcha boshqaruvi: ko'z va bosh nishonga qaraydi ----------
  function makeCharacter(el, gsap) {
    var root_ = el.querySelector('.nm-char'), head = el.querySelector('.ch-head'), pupils = el.querySelector('.ch-pupils');
    var hand = el.querySelector('.ch-hand'), armR = el.querySelector('.ch-armR'), armL = el.querySelector('.ch-armL');
    var cur = { px: 0, py: 0, rot: 0 }, target = null, headC = null, frame = 0;
    gsap.set(el.querySelector('.ch-o'), { opacity: 0 });
    return {
      el: root_, hand: hand, armR: armR, armL: armL,
      look: function (fn) { target = fn; },
      update: function () {
        if (!target) return;
        var p = target(); if (!p) return;
        if (!headC || frame++ % 20 === 0) headC = center(head);
        var dx = p.x - headC.x, dy = p.y - headC.y, d = Math.hypot(dx, dy) || 1;
        if (!isFinite(dx) || !isFinite(dy)) return;
        var tx = dx / d * 3.1, ty = dy / d * 2.6, tr_ = Math.max(-16, Math.min(16, dx / innerWidth * 46));
        cur.px += (tx - cur.px) * 0.18; cur.py += (ty - cur.py) * 0.18; cur.rot += (tr_ - cur.rot) * 0.08;
        pupils.setAttribute('transform', 'translate(' + cur.px.toFixed(2) + ' ' + cur.py.toFixed(2) + ')');
        head.setAttribute('transform', 'rotate(' + cur.rot.toFixed(2) + ' 70 80)');
      },
      mood: function (m, tl, at) { // 'o' — hayratda, 'smile' — xursand
        tl.to(el.querySelector('.ch-o'), { opacity: m === 'o' ? 1 : 0, duration: 0.15 }, at)
          .to(el.querySelector('.ch-smile'), { opacity: m === 'o' ? 0 : 1, duration: 0.15 }, at)
          .to(el.querySelectorAll('.ch-brow'), { y: m === 'o' ? -3.5 : 0, duration: 0.2 }, at);
      },
      blink: function (tl, at) { tl.to(el.querySelector('.ch-eyes'), { scaleY: 0.08, transformOrigin: '50% 50%', duration: 0.07, yoyo: true, repeat: 1 }, at); }
    };
  }

  // ---------- To'liq (3D) versiya ----------
  function playFull(el, done) {
    var THREE = root.THREE, gsap = root.gsap;
    var canvas = el.querySelector('.nm-canvas');
    var small = Math.min(innerWidth, innerHeight) < 700;
    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: !small, alpha: false, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(root.devicePixelRatio || 1, small ? 1.25 : 1.5));
    renderer.setClearColor(0x050b1d, 1);
    var scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    cam.position.set(0, 0, 15);
    var disposables = [];
    function track(o) { disposables.push(o); return o; }
    var dot = track(dotTexture(THREE));

    // Zarrachalar (sekin suzuvchi yulduz changi)
    var N = small ? 380 : 850, pg = track(new THREE.BufferGeometry()), pp = new Float32Array(N * 3);
    for (var i = 0; i < N; i++) { pp[i * 3] = (Math.random() - 0.5) * 44; pp[i * 3 + 1] = (Math.random() - 0.5) * 26; pp[i * 3 + 2] = (Math.random() - 0.5) * 24 - 4; }
    pg.setAttribute('position', new THREE.BufferAttribute(pp, 3));
    var pm = track(new THREE.PointsMaterial({ size: 0.16, map: dot, color: 0x7fb4ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    var points = new THREE.Points(pg, pm); scene.add(points);

    // Formulalar orbitada (birinchisi — π, keyin u orbitadan ajralib chiqadi)
    var palette = ['#e6eeff', '#8fd3ff', '#5b9dff', '#3fd0e0', '#9ab8ff'];
    var forms = FORMULAS.slice(0, small ? 15 : FORMULAS.length).map(function (txt, k) {
      var t = textTexture(THREE, txt, palette[k % palette.length]); track(t.tex);
      var mat = track(new THREE.SpriteMaterial({ map: t.tex, transparent: true, opacity: 0, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending }));
      var s = new THREE.Sprite(mat), h = (txt.length > 6 ? 0.62 : 0.95) * (0.75 + Math.random() * 0.5) * (small ? 0.8 : 1);
      if (k === 0) h = small ? 1.05 : 1.35; // π kattaroq — tomoshabin uni oldindan payqasin
      s.scale.set(h * t.aspect, h, 1); scene.add(s);
      return { s: s, r: 3.2 + Math.random() * 4.6, w: (0.16 + Math.random() * 0.22) * (k % 2 ? 1 : -1), phase: Math.random() * Math.PI * 2,
        tilt: (Math.random() - 0.5) * 1.1, yOff: (Math.random() - 0.5) * 3.2, alpha: 0.65 + Math.random() * 0.35, trail: null, gone: false };
    });
    forms[0].r = 4.2; forms[0].tilt = 0.25; forms[0].alpha = 1;
    // Tanlangan formulalar ortidan yorug' iz
    var TL = 46;
    forms.filter(function (f, k) { return k % 4 === 0; }).forEach(function (f, k) {
      var g = track(new THREE.BufferGeometry()), pos = new Float32Array(TL * 3), col = new Float32Array(TL * 3);
      var c = new THREE.Color(k % 2 ? 0x3fd0e0 : 0x3f7dff);
      for (var j = 0; j < TL; j++) { var a = Math.pow(1 - j / TL, 1.6); col[j * 3] = c.r * a; col[j * 3 + 1] = c.g * a; col[j * 3 + 2] = c.b * a; }
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3));
      var m = track(new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
      var line = new THREE.Line(g, m); line.frustumCulled = false; scene.add(line);
      f.trail = { pos: pos, g: g, m: m, filled: false };
    });

    // Aylanayotgan 3D jismlar (kub, sfera, piramida, uchburchak)
    var objDefs = [
      [new THREE.BoxGeometry(1.4, 1.4, 1.4), 'edges', [-6.2, 2.9, -3]],
      [new THREE.SphereGeometry(0.95, 14, 10), 'wire', [6.4, -2.2, -2]],
      [new THREE.ConeGeometry(1.0, 1.5, 4), 'edges', [5.6, 3.1, -5]],
      [new THREE.TetrahedronGeometry(1.0), 'edges', [-2.6, 4.2, -6]]
    ];
    var objs = objDefs.map(function (d, k) {
      var geo = track(d[0]);
      var lg = track(d[1] === 'wire' ? new THREE.WireframeGeometry(geo) : new THREE.EdgesGeometry(geo));
      var lm = track(new THREE.LineBasicMaterial({ color: k % 2 ? 0x3fd0e0 : 0x6aa4ff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false }));
      var fm = track(new THREE.MeshBasicMaterial({ color: 0x2a5cff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
      var grp = new THREE.Group(); grp.add(new THREE.LineSegments(lg, lm)); grp.add(new THREE.Mesh(geo, fm));
      if (small) { d[2][0] *= 0.6; d[2][1] *= 1.35; }
      grp.position.set(d[2][0], d[2][1], d[2][2]); scene.add(grp);
      return { g: grp, lm: lm, fm: fm, home: d[2].slice(), rs: [0.3 + Math.random() * 0.4, 0.4 + Math.random() * 0.5] };
    });

    // Formulalar eriganda chiqadigan mayda zarrachalar
    var BPER = small ? 16 : 26, BN = forms.length * BPER, bg = track(new THREE.BufferGeometry()), bp = new Float32Array(BN * 3), bv = new Float32Array(BN * 3);
    bg.setAttribute('position', new THREE.BufferAttribute(bp, 3));
    var bm = track(new THREE.PointsMaterial({ size: 0.11, map: dot, color: 0x8fd3ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    var burst = new THREE.Points(bg, bm); burst.visible = false; burst.frustumCulled = false; scene.add(burst);
    function dissolve() {
      forms.forEach(function (f, k) {
        for (var j = 0; j < BPER; j++) {
          var i3 = (k * BPER + j) * 3, p = f.s.position;
          bp[i3] = f.gone ? 0 : p.x + (Math.random() - 0.5) * 0.6; bp[i3 + 1] = f.gone ? -99 : p.y + (Math.random() - 0.5) * 0.3; bp[i3 + 2] = p.z;
          var a = Math.random() * Math.PI * 2, sp = 1.5 + Math.random() * 4.5;
          bv[i3] = Math.cos(a) * sp; bv[i3 + 1] = Math.sin(a) * sp; bv[i3 + 2] = (Math.random() - 0.5) * 3;
        }
      });
      bg.attributes.position.needsUpdate = true; burst.visible = true; state.burstOp = 1;
    }

    var state = { pOp: 0, fOp: 0, trailOp: 0, objOp: 0, conv: 1, spin: 1, burstOp: 0 };
    function resize() {
      var w = innerWidth, h = innerHeight;
      renderer.setSize(w, h, false); cam.aspect = w / h;
      cam.fov = w / h < 0.8 ? 68 : 50; cam.updateProjectionMatrix();
    }
    resize(); addEventListener('resize', resize);

    var tmp = new THREE.Vector3();
    function screenOf(obj) { tmp.copy(obj.position).project(cam); return { x: (tmp.x + 1) / 2 * innerWidth, y: (1 - tmp.y) / 2 * innerHeight, z: obj.position.z }; }

    // ---- Odamcha va uchuvchi π ----
    var ch = makeCharacter(el, gsap);
    var piEl = el.querySelector('.nm-pi.main'), ghosts = [].slice.call(el.querySelectorAll('.nm-pi.ghost')), hist = [];
    var pi = { x: 0, y: 0, s: 1, o: 0, mode: 'off' }; // mode: off | fly | hold | slot
    var flight = { t: 0 }, start = null, watchIdx = 1, watchT = 0;
    function handPos() { var c = center(ch.hand); return { x: c.x, y: c.y - c.h * 1.4 }; }
    function slotPos() {
      var r = el.querySelector('.nm-emblem-wrap').getBoundingClientRect();
      return { x: r.left + r.width * PI_SLOT.cx, y: r.top + r.height * PI_SLOT.cy, h: r.height * PI_SLOT.h };
    }
    function piFont() { return parseFloat(getComputedStyle(piEl).fontSize) || 80; }
    // Formulalar orasida eng oldindagisini tanlab kuzatadi
    function watchFormula() {
      if (performance.now() - watchT > 1300) {
        watchT = performance.now(); var best = -1, bz = -99;
        forms.forEach(function (f, k) { if (!f.gone && k && f.s.position.z > bz && f.s.material.opacity > 0.2) { bz = f.s.position.z; best = k; } });
        if (best > 0) watchIdx = best;
      }
      return screenOf(forms[watchIdx].s);
    }
    ch.look(function () { return state.fOp > 0.05 ? watchFormula() : { x: innerWidth / 2, y: innerHeight * 0.4 }; });

    function updatePi() {
      if (pi.mode === 'off') return;
      if (pi.mode === 'fly') {
        var t = flight.t, W = innerWidth, H = innerHeight;
        var a = start.a + t * Math.PI * 2 * 1.15, cx = W / 2, cy = H * 0.42, rx = Math.min(W * 0.36, 520), ry = Math.min(H * 0.27, 260);
        var ox = cx + Math.cos(a) * rx, oy = cy + Math.sin(a) * ry;
        var hp = handPos(), k1 = smooth(0, 0.14, t), k2 = smooth(0.66, 1, t);
        var x = start.x + (ox - start.x) * k1, y = start.y + (oy - start.y) * k1;
        pi.x = x + (hp.x - x) * k2; pi.y = y + (hp.y - y) * k2;
        pi.s = (0.55 + 0.55 * (0.5 + 0.5 * Math.sin(a))) * (1 - k2) + 0.9 * k2; // orbitada yaqinlashib-uzoqlashadi
      } else if (pi.mode === 'hold') { var h = handPos(); pi.x = h.x; pi.y = h.y; }
      piEl.style.transform = 'translate(' + (pi.x | 0) + 'px,' + (pi.y | 0) + 'px) translate(-50%,-50%) scale(' + pi.s.toFixed(3) + ')';
      piEl.style.opacity = pi.o;
      hist.unshift([pi.x, pi.y, pi.s]); if (hist.length > 40) hist.pop();
      ghosts.forEach(function (g, i) {
        var hh = hist[(i + 1) * 4]; if (!hh) { g.style.opacity = 0; return; }
        g.style.transform = 'translate(' + (hh[0] | 0) + 'px,' + (hh[1] | 0) + 'px) translate(-50%,-50%) scale(' + (hh[2] * (1 - i * 0.07)).toFixed(3) + ')';
        g.style.opacity = pi.mode === 'fly' ? (0.42 * (1 - i / ghosts.length) * pi.o).toFixed(3) : 0;
      });
    }

    var raf = 0, last = performance.now(), time = 0, stopped = false;
    function frame(now) {
      if (stopped) return;
      raf = requestAnimationFrame(frame);
      var dt = Math.min(0.05, (now - last) / 1000); last = now; time += dt * state.spin;
      pm.opacity = state.pOp * 0.85;
      points.rotation.y += dt * 0.012; points.rotation.x = Math.sin(time * 0.05) * 0.04;
      forms.forEach(function (f) {
        var th = f.phase + time * f.w, r = f.r * state.conv;
        var x = r * Math.cos(th), z = r * Math.sin(th), y = (f.yOff + Math.sin(th * 2 + f.phase) * 0.35) * state.conv;
        var c = Math.cos(f.tilt), s = Math.sin(f.tilt), y2 = y * c - z * s, z2 = y * s + z * c;
        f.s.position.set(x, y2, z2);
        var depth = smooth(-9, -1.5, z2) * (1 - smooth(8, 11.5, z2)); // uzoqlashganda xira, kameraga juda yaqinlashganda yo'qoladi
        f.s.material.opacity = f.gone ? 0 : state.fOp * f.alpha * (0.22 + 0.78 * depth);
        if (f.trail) {
          var P = f.trail.pos;
          if (!f.trail.filled) { for (var j = 0; j < TL; j++) { P[j * 3] = x; P[j * 3 + 1] = y2; P[j * 3 + 2] = z2; } f.trail.filled = true; }
          P.copyWithin(3, 0, (TL - 1) * 3); P[0] = x; P[1] = y2; P[2] = z2;
          f.trail.g.attributes.position.needsUpdate = true; f.trail.m.opacity = f.gone ? 0 : state.trailOp * 0.9;
        }
      });
      objs.forEach(function (o, k) {
        o.g.rotation.x += dt * o.rs[0]; o.g.rotation.y += dt * o.rs[1];
        var cv = 0.25 + 0.75 * state.conv;
        o.g.position.set(o.home[0] * cv, o.home[1] * cv + Math.sin(time * 0.6 + k) * 0.25, o.home[2]);
        o.g.scale.setScalar(0.4 + 0.6 * state.conv);
        o.lm.opacity = state.objOp * 0.85; o.fm.opacity = state.objOp * 0.06;
      });
      if (burst.visible) {
        for (var i = 0; i < BN * 3; i++) { bp[i] += bv[i] * dt; bv[i] *= 0.955; }
        bg.attributes.position.needsUpdate = true; bm.opacity = state.burstOp;
        if (state.burstOp <= 0.001) burst.visible = false;
      }
      renderer.render(scene, cam);
      updatePi(); ch.update();
    }
    raf = requestAnimationFrame(frame);
    function onVis() { if (document.hidden) { cancelAnimationFrame(raf); } else if (!stopped) { last = performance.now(); raf = requestAnimationFrame(frame); } }
    document.addEventListener('visibilitychange', onVis);

    var q = function (s) { return el.querySelector(s); };
    var letters = el.querySelectorAll('.nm-l');
    gsap.set([q('.nm-emblem'), q('.nm-glow'), q('.nm-tag'), letters, el.querySelectorAll('.nm-layer')], { opacity: 0 });
    gsap.set(q('.nm-layer.arc'), { '--a': '0deg' });
    gsap.set(q('.nm-char'), { opacity: 0, y: 40 });

    // π orbitadan ajraladi va DOM π ga aylanadi
    function launchPi() {
      var f = forms[0], p = screenOf(f.s);
      f.gone = true;
      start = { x: p.x, y: p.y, a: Math.atan2(p.y - innerHeight * 0.42, p.x - innerWidth / 2) };
      pi.x = p.x; pi.y = p.y; pi.s = 0.6; pi.mode = 'fly'; flight.t = 0; hist = [];
      ch.look(function () { return { x: pi.x, y: pi.y }; });
    }
    function catchPi() {
      pi.mode = 'hold'; pi.s = 0.9;
      var h = handPos(), fl = q('.nm-catch');
      gsap.fromTo(fl, { x: h.x, y: h.y, xPercent: -50, yPercent: -50, scale: 0.2, opacity: 1 }, { scale: 2.4, opacity: 0, duration: 0.7, ease: 'power2.out' });
    }
    function toSlot() {
      var sp = slotPos(), F = piFont();
      pi.mode = 'slot';
      ch.look(function () { return { x: pi.x, y: pi.y }; });
      // π ning ko'rinadigan balandligi taxminan shriftning 0.5 qismi
      gsap.to(pi, { x: sp.x, y: sp.y, s: sp.h / (F * 0.52), duration: 1.0, ease: 'power3.inOut', onUpdate: updatePi });
    }

    var tl = gsap.timeline({ onComplete: function () { done(); } });
    tl.to(state, { pOp: 1, duration: 1.4, ease: 'power1.out' }, 0)
      .fromTo(q('.nm-grid'), { opacity: 0, scale: 1.18 }, { opacity: 1, scale: 1, duration: 2.6, ease: 'power2.out' }, 0)
      .to(state, { fOp: 1, duration: 1.8, ease: 'power2.out' }, 0.35)
      .to(state, { objOp: 1, duration: 1.6, ease: 'power1.out' }, 0.6)
      .to(state, { trailOp: 1, duration: 1.4 }, 0.9)
      .to(cam.position, { z: 12.5, duration: 7, ease: 'sine.inOut' }, 0.2)
      // odamcha paydo bo'ladi va formulalarni kuzatadi
      .to(q('.nm-char'), { opacity: 1, y: 0, duration: 1.0, ease: 'back.out(1.6)' }, 1.0);
    ch.blink(tl, 2.4); ch.blink(tl, 4.3);
    tl.to(ch.armL, { rotation: 118, svgOrigin: '47 94', duration: 0.55, ease: 'power2.out' }, 3.0)       // formulaga ishora qiladi
      .to(ch.armL, { rotation: 0, svgOrigin: '47 94', duration: 0.6, ease: 'power2.inOut' }, 4.1)
      .to(forms[0].s.scale, { x: forms[0].s.scale.x * 1.35, y: forms[0].s.scale.y * 1.35, duration: 0.35, yoyo: true, repeat: 1, ease: 'sine.inOut' }, 4.75) // π "uyg'onadi"
      .add(launchPi, 5.3)
      .to(pi, { o: 1, duration: 0.25 }, 5.3)
      .to(flight, { t: 1, duration: 3.1, ease: 'sine.inOut' }, 5.3);
    ch.mood('o', tl, 5.4);
    tl.to(ch.armR, { rotation: -140, svgOrigin: '93 94', duration: 0.55, ease: 'back.out(1.8)' }, 7.75)       // qo'lini cho'zadi
      .add(catchPi, 8.4);
    ch.mood('smile', tl, 8.45);
    tl.to(q('.nm-char'), { y: -16, duration: 0.22, yoyo: true, repeat: 1, ease: 'power2.out' }, 8.45)     // xursand sakraydi
      .to(ch.armR, { rotation: -168, svgOrigin: '93 94', duration: 0.5, ease: 'power2.out' }, 8.7)          // π ni baland ko'taradi
      // qolgan formulalar markazga yig'ilib zarrachaga aylanadi
      .to(state, { conv: 0.05, spin: 3.4, duration: 1.3, ease: 'power3.in' }, 8.3)
      .to(state, { objOp: 0, duration: 0.9, ease: 'power1.in' }, 8.4)
      .add(dissolve, 9.55)
      .to(state, { fOp: 0, trailOp: 0, duration: 0.3 }, 9.55)
      .add(toSlot, 9.5)
      .to(ch.armR, { rotation: -95, svgOrigin: '93 94', duration: 0.7, ease: 'power2.inOut' }, 9.6)          // logotip tomonga ko'rsatadi
      .fromTo(q('.nm-beam'), { xPercent: -130, opacity: 0 }, { xPercent: 130, opacity: 1, duration: 1.25, ease: 'power2.inOut' }, 9.6)
      // logotip qismma-qism yig'iladi: π → kitob → orbita → yulduz
      .to(q('.nm-layer.pi'), { opacity: 1, duration: 0.3 }, 10.4)
      .to(pi, { o: 0, duration: 0.3 }, 10.45)
      .fromTo(q('.nm-flash'), { opacity: 0, scale: 0.3 }, { opacity: 0.7, scale: 1.2, duration: 0.45, ease: 'power2.out' }, 10.4)
      .to(q('.nm-flash'), { opacity: 0, duration: 0.9 }, 10.85)
      .fromTo(q('.nm-glow'), { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' }, 10.4)
      .fromTo(q('.nm-layer.book'), { opacity: 0, scaleY: 0.05, y: 30, transformOrigin: '50% 85%' }, { opacity: 1, scaleY: 1, y: 0, duration: 0.85, ease: 'back.out(1.5)' }, 10.65)
      .to(q('.nm-layer.arc'), { opacity: 1, duration: 0.15 }, 11.15)
      .to(q('.nm-layer.arc'), { '--a': '360deg', duration: 0.85, ease: 'power2.inOut' }, 11.15)
      .fromTo(q('.nm-layer.star'), { opacity: 0, scale: 0, rotation: -120, transformOrigin: '81% 8%' }, { opacity: 1, scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(2.4)' }, 11.85)
      .to(q('.nm-emblem'), { opacity: 1, duration: 0.35 }, 12.3)                                          // aniq asl logotip
      .to(el.querySelectorAll('.nm-layer'), { opacity: 0, duration: 0.35 }, 12.35)
      .to(state, { burstOp: 0, duration: 1.8, ease: 'power1.in' }, 10.0)
      .to(state, { pOp: 0.4, duration: 1.6 }, 10.6)
      .fromTo(letters, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.75, stagger: 0.055, ease: 'power3.out' }, 12.3)
      .fromTo(q('.nm-tag'), { opacity: 0, letterSpacing: '0.7em' }, { opacity: 1, letterSpacing: '0.3em', duration: 1.2, ease: 'power2.out' }, 12.85)
      .to(q('.nm-glow'), { opacity: 0.55, duration: 1.2, ease: 'sine.inOut' }, 12.6)
      // odamcha qo'l silkitib xayrlashadi
      .to(ch.armR, { rotation: 0, svgOrigin: '93 94', duration: 0.5 }, 12.6)
      .to(ch.armL, { rotation: 140, svgOrigin: '47 94', duration: 0.4, ease: 'power2.out' }, 12.9)
      .to(ch.armL, { rotation: 118, svgOrigin: '47 94', duration: 0.22, yoyo: true, repeat: 3, ease: 'sine.inOut' }, 13.3)
      .add(function () { ch.look(function () { return { x: innerWidth / 2, y: innerHeight * 0.55 }; }); }, 12.6)
      .to({}, { duration: 0.9 });

    // sinov uchun: introni istalgan soniyaga o'tkazib, bitta kadr chizish (brauzer yashirin bo'lsa ham)
    el._seek = function (t) { tl.seek(t, false); time = t; updatePi(); ch.update(); frame(performance.now()); };

    return function stop() {
      tl.kill(); gsap.killTweensOf(pi); stopped = true; cancelAnimationFrame(raf);
      removeEventListener('resize', resize); document.removeEventListener('visibilitychange', onVis);
      disposables.forEach(function (d) { if (d && d.dispose) d.dispose(); });
      renderer.dispose(); if (renderer.forceContextLoss) renderer.forceContextLoss();
    };
  }

  // ---------- Yengil versiya (reduced motion yoki kutubxonalar yuklanmasa): faqat yumshoq paydo bo'lish ----------
  function playSimple(el, done) {
    el.classList.add('nm-simple');
    requestAnimationFrame(function () { el.classList.add('nm-show'); });
    var t = setTimeout(done, reducedMotion() ? 1800 : 2600);
    return function stop() { clearTimeout(t); };
  }

  function play(opts) {
    opts = opts || {};
    if (running) return;
    if (!opts.force && seen()) { html.classList.remove('nm-intro-on'); return; }
    var el = buildDOM(), stop = null, finished = false;
    function finish(fast) {
      if (finished) return; finished = true;
      markSeen();
      clearTimeout(guard);
      document.removeEventListener('keydown', onKey);
      // sahifani qayta yuklamasdan bosh sahifani ochamiz
      html.classList.add('nm-reveal'); html.classList.remove('nm-intro-on');
      el.classList.add('nm-out'); if (fast) el.classList.add('nm-fast');
      setTimeout(function () {
        if (stop) stop(); el.remove(); running = null; html.classList.remove('nm-reveal');
        var focus = document.querySelector('.hero a, main a, main button'); if (focus && opts.focus !== false) try { focus.focus({ preventScroll: true }); } catch (e) {}
      }, fast ? 450 : 1000);
    }
    function onKey(e) { if (e.key === 'Escape') finish(true); }
    document.addEventListener('keydown', onKey);
    el.querySelector('.nm-skip').addEventListener('click', function () { finish(true); });
    var guard = setTimeout(function () { finish(false); }, 24000); // hech qachon saytni to'sib qo'ymaslik uchun
    running = { finish: finish };
    try {
      var canFull = !reducedMotion() && root.THREE && root.gsap && !!document.createElement('canvas').getContext('webgl');
      stop = canFull ? playFull(el, function () { finish(false); }) : playSimple(el, function () { finish(false); });
    } catch (e) {
      if (root.console) console.warn('Nuvemath intro:', e);
      finish(true);
    }
  }

  root.NuvemathIntro = {
    play: play,
    skip: function () { if (running) running.finish(true); },
    reset: function () { try { localStorage.removeItem(KEY); } catch (e) {} },
    shouldPlay: function () { return !seen() || /[?&]intro\b/.test(location.search); }
  };

  // Avtomatik: <head> dagi qo'riqchi "nm-intro-on" klassini qo'ygan bo'lsa ijro etamiz
  if (html.classList.contains('nm-intro-on')) play({ force: true });
})(this);
