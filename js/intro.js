// Nuvemath — birinchi tashrif uchun animatsion intro (mustaqil komponent).
// Ulash: <head> dagi kichik qo'riqchi skript + css/intro.css + Three.js + GSAP + shu fayl.
// API: NuvemathIntro.play({ force }) — introni qo'lda ishga tushirish; NuvemathIntro.reset() — "ko'rilgan" belgisini o'chirish.
(function (root) {
  'use strict';
  var KEY = 'nm-intro-seen';
  var html = document.documentElement;
  var FORMULAS = ['π', '∑', '√x', '∫ f(x) dx', 'x²', 'a² + b² = c²', 'f(x)', 'sin(x)', 'cos(x)', 'v = (2, −1, 3)',
    'Δ = b² − 4ac', 'S = πr²', 'V = ⁴⁄₃πr³', 'sin²α + cos²α = 1', '∞', 'θ', 'log₂ 8 = 3', '∠ABC = 90°', 'y = kx + b', '∂f/∂x', 'e^{iπ} + 1 = 0', 'n!'];
  var TAGLINE = 'See Math. Explore Dimensions.';

  function seen() { try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; } }
  function markSeen() { try { localStorage.setItem(KEY, '1'); } catch (e) {} }
  function tr(k, fb) { var s = root.T ? root.T(k) : k; return s === k ? fb : s; }
  function reducedMotion() { return !!(root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches); }
  function smooth(a, b, x) { var t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); }

  var running = null;

  function buildDOM() {
    var el = document.createElement('div');
    el.id = 'nm-intro'; el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', 'Nuvemath');
    var name = 'NUVEMATH'.split('').map(function (c, i) { return '<span class="nm-l' + (i < 4 ? ' a' : ' b') + '">' + c + '</span>'; }).join('');
    el.innerHTML =
      '<div class="nm-grid" aria-hidden="true"></div>' +
      '<canvas class="nm-canvas" aria-hidden="true"></canvas>' +
      '<div class="nm-beam" aria-hidden="true"></div>' +
      '<div class="nm-flash" aria-hidden="true"></div>' +
      '<div class="nm-brand">' +
      '<div class="nm-emblem-wrap"><div class="nm-glow" aria-hidden="true"></div><img class="nm-emblem" src="assets/emblem-dark.png" alt="Nuvemath"></div>' +
      '<h1 class="nm-name" aria-label="NUVEMATH">' + name + '</h1>' +
      '<p class="nm-tag">' + TAGLINE + '</p></div>' +
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

    // Formulalar orbitada
    var palette = ['#8fd3ff', '#5b9dff', '#e6eeff', '#3fd0e0', '#9ab8ff'];
    var forms = FORMULAS.slice(0, small ? 15 : FORMULAS.length).map(function (txt, k) {
      var t = textTexture(THREE, txt, palette[k % palette.length]); track(t.tex);
      var mat = track(new THREE.SpriteMaterial({ map: t.tex, transparent: true, opacity: 0, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending }));
      var s = new THREE.Sprite(mat), h = (txt.length > 6 ? 0.62 : 0.95) * (0.75 + Math.random() * 0.5) * (small ? 0.8 : 1);
      s.scale.set(h * t.aspect, h, 1); scene.add(s);
      return { s: s, r: 3.2 + Math.random() * 4.6, w: (0.16 + Math.random() * 0.22) * (k % 2 ? 1 : -1), phase: Math.random() * Math.PI * 2,
        tilt: (Math.random() - 0.5) * 1.1, yOff: (Math.random() - 0.5) * 3.2, alpha: 0.65 + Math.random() * 0.35, trail: null };
    });
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
      [new THREE.BoxGeometry(1.4, 1.4, 1.4), 'edges', [-6.2, 2.6, -3]],
      [new THREE.SphereGeometry(0.95, 14, 10), 'wire', [6.4, -2.2, -2]],
      [new THREE.ConeGeometry(1.0, 1.5, 4), 'edges', [5.6, 3.1, -5]],
      [new THREE.TetrahedronGeometry(1.0), 'edges', [-5.4, -2.9, -1]]
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
          bp[i3] = p.x + (Math.random() - 0.5) * 0.6; bp[i3 + 1] = p.y + (Math.random() - 0.5) * 0.3; bp[i3 + 2] = p.z;
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
        f.s.material.opacity = state.fOp * f.alpha * (0.22 + 0.78 * depth);
        if (f.trail) {
          var P = f.trail.pos;
          if (!f.trail.filled) { for (var j = 0; j < TL; j++) { P[j * 3] = x; P[j * 3 + 1] = y2; P[j * 3 + 2] = z2; } f.trail.filled = true; }
          P.copyWithin(3, 0, (TL - 1) * 3); P[0] = x; P[1] = y2; P[2] = z2;
          f.trail.g.attributes.position.needsUpdate = true; f.trail.m.opacity = state.trailOp * 0.9;
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
    }
    raf = requestAnimationFrame(frame);
    function onVis() { if (document.hidden) { cancelAnimationFrame(raf); } else if (!stopped) { last = performance.now(); raf = requestAnimationFrame(frame); } }
    document.addEventListener('visibilitychange', onVis);

    var q = function (s) { return el.querySelector(s); };
    var letters = el.querySelectorAll('.nm-l');
    gsap.set([q('.nm-emblem'), q('.nm-glow'), q('.nm-tag'), letters], { opacity: 0 });
    var tl = gsap.timeline({ onComplete: function () { done(); } });
    tl.to(state, { pOp: 1, duration: 1.4, ease: 'power1.out' }, 0)
      .fromTo(q('.nm-grid'), { opacity: 0, scale: 1.18 }, { opacity: 1, scale: 1, duration: 2.6, ease: 'power2.out' }, 0)
      .to(state, { fOp: 1, duration: 1.8, ease: 'power2.out' }, 0.35)
      .to(state, { objOp: 1, duration: 1.6, ease: 'power1.out' }, 0.6)
      .to(state, { trailOp: 1, duration: 1.4 }, 0.9)
      .to(cam.position, { z: 12, duration: 4.4, ease: 'sine.inOut' }, 0.2)
      // simvollar markazga yig'iladi
      .to(state, { conv: 0.05, spin: 3.4, duration: 1.6, ease: 'power3.in' }, 3.3)
      .to(state, { objOp: 0, duration: 1.0, ease: 'power1.in' }, 3.6)
      .fromTo(q('.nm-beam'), { xPercent: -130, opacity: 0 }, { xPercent: 130, opacity: 1, duration: 1.25, ease: 'power2.inOut' }, 4.05)
      .add(dissolve, 4.85)
      .to(state, { fOp: 0, trailOp: 0, duration: 0.3 }, 4.85)
      .fromTo(q('.nm-flash'), { opacity: 0, scale: 0.3 }, { opacity: 0.85, scale: 1.3, duration: 0.45, ease: 'power2.out' }, 4.85)
      .to(q('.nm-flash'), { opacity: 0, duration: 1.0, ease: 'power1.out' }, 5.3)
      // logotip
      .fromTo(q('.nm-emblem'), { opacity: 0, scale: 0.8, filter: 'blur(12px) brightness(1.9)' }, { opacity: 1, scale: 1, filter: 'blur(0px) brightness(1)', duration: 1.3, ease: 'expo.out' }, 4.95)
      .fromTo(q('.nm-glow'), { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 1.6, ease: 'power2.out' }, 4.95)
      .to(q('.nm-glow'), { opacity: 0.55, duration: 1.2, ease: 'sine.inOut' }, 6.4)
      .fromTo(letters, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.75, stagger: 0.055, ease: 'power3.out' }, 5.5)
      .fromTo(q('.nm-tag'), { opacity: 0, letterSpacing: '0.7em' }, { opacity: 1, letterSpacing: '0.3em', duration: 1.2, ease: 'power2.out' }, 6.05)
      .to(state, { burstOp: 0, duration: 1.8, ease: 'power1.in' }, 5.2)
      .to(state, { pOp: 0.4, duration: 1.6 }, 5.6)
      .to({}, { duration: 1.4 }); // logotip qisqa vaqt markazda turadi

    return function stop() {
      tl.kill(); stopped = true; cancelAnimationFrame(raf);
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
    var guard = setTimeout(function () { finish(false); }, 16000); // hech qachon saytni to'sib qo'ymaslik uchun
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
