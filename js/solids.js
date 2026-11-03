// Nuvemath — 3D geometrik jismlar (Three.js): parametrlar, hajm/sirt formulalari, karkas va yoyilma (SVG).
(function (root) {
  'use strict';
  var KINDS = ['cube', 'box', 'prism', 'pyramid', 'cylinder', 'cone', 'frustum', 'sphere'];
  var PARAMS = {
    cube: [['a', 1, 6, 3]], box: [['a', 1, 6, 4], ['b', 1, 6, 3], ['c', 1, 6, 2.5]],
    prism: [['n', 3, 10, 6, 1], ['a', 1, 5, 2], ['h', 1, 6, 4]], pyramid: [['n', 3, 10, 4, 1], ['a', 1, 6, 4], ['h', 1, 6, 4]],
    cylinder: [['r', 0.5, 4, 2], ['h', 1, 6, 4]], cone: [['r', 0.5, 4, 2.5], ['h', 1, 6, 4]],
    frustum: [['R', 1, 4, 3], ['r', 0.5, 4, 1.5], ['h', 1, 6, 3]], sphere: [['r', 0.5, 4, 2.5]]
  };
  var st = { kind: 'cube', v: {}, wire: false, rotate: true, net: false };
  KINDS.forEach(function (k) { st.v[k] = {}; PARAMS[k].forEach(function (p) { st.v[k][p[0]] = p[3]; }); });

  function n2(x) { return (Math.round(x * 100) / 100).toString(); }

  // ---------- Hisob-kitob ----------
  function calc(kind, v) {
    var PI = Math.PI, r = [];
    switch (kind) {
      case 'cube':
        r.push(['sol.volume', 'V = a³', Math.pow(v.a, 3)], ['sol.total', 'S = 6a²', 6 * v.a * v.a], ['sol.diag', 'd = a√3', v.a * Math.sqrt(3)]); break;
      case 'box':
        r.push(['sol.volume', 'V = abc', v.a * v.b * v.c], ['sol.lateral', 'S<sub>yon</sub> = 2c(a + b)', 2 * v.c * (v.a + v.b)],
          ['sol.total', 'S = 2(ab + bc + ac)', 2 * (v.a * v.b + v.b * v.c + v.a * v.c)], ['sol.diag', 'd = √(a² + b² + c²)', Math.sqrt(v.a * v.a + v.b * v.b + v.c * v.c)]); break;
      case 'prism':
        var Sb = v.n * v.a * v.a / (4 * Math.tan(PI / v.n));
        r.push(['sol.volume', 'V = S<sub>asos</sub>·h, &nbsp;S<sub>asos</sub> = na² / (4·tg(π/n)) = ' + n2(Sb), Sb * v.h],
          ['sol.lateral', 'S<sub>yon</sub> = n·a·h', v.n * v.a * v.h], ['sol.total', 'S = S<sub>yon</sub> + 2S<sub>asos</sub>', v.n * v.a * v.h + 2 * Sb]); break;
      case 'pyramid':
        var Sp = v.n * v.a * v.a / (4 * Math.tan(PI / v.n)), rin = v.a / (2 * Math.tan(PI / v.n)), ap = Math.sqrt(v.h * v.h + rin * rin);
        r.push(['sol.volume', 'V = ⅓·S<sub>asos</sub>·h, &nbsp;S<sub>asos</sub> = ' + n2(Sp), Sp * v.h / 3],
          ['sol.slant', 'l = √(h² + r<sub>ichki</sub>²)', ap], ['sol.lateral', 'S<sub>yon</sub> = ½·n·a·l', v.n * v.a * ap / 2], ['sol.total', 'S = S<sub>yon</sub> + S<sub>asos</sub>', v.n * v.a * ap / 2 + Sp]); break;
      case 'cylinder':
        r.push(['sol.volume', 'V = πr²h', PI * v.r * v.r * v.h], ['sol.lateral', 'S<sub>yon</sub> = 2πrh', 2 * PI * v.r * v.h], ['sol.total', 'S = 2πr(r + h)', 2 * PI * v.r * (v.r + v.h)]); break;
      case 'cone':
        var L = Math.sqrt(v.r * v.r + v.h * v.h);
        r.push(['sol.volume', 'V = ⅓πr²h', PI * v.r * v.r * v.h / 3], ['sol.slant', 'l = √(r² + h²)', L], ['sol.lateral', 'S<sub>yon</sub> = πrl', PI * v.r * L], ['sol.total', 'S = πr(r + l)', PI * v.r * (v.r + L)]); break;
      case 'frustum':
        var Lf = Math.sqrt(Math.pow(v.R - v.r, 2) + v.h * v.h);
        r.push(['sol.volume', 'V = ⅓πh(R² + Rr + r²)', PI * v.h * (v.R * v.R + v.R * v.r + v.r * v.r) / 3], ['sol.slant', 'l = √((R − r)² + h²)', Lf],
          ['sol.lateral', 'S<sub>yon</sub> = πl(R + r)', PI * Lf * (v.R + v.r)], ['sol.total', 'S = π(l(R + r) + R² + r²)', PI * (Lf * (v.R + v.r) + v.R * v.R + v.r * v.r)]); break;
      case 'sphere':
        r.push(['sol.volume', 'V = ⁴⁄₃πr³', 4 / 3 * PI * Math.pow(v.r, 3)], ['sol.total', 'S = 4πr²', 4 * PI * v.r * v.r]); break;
    }
    return r;
  }

  // ---------- 3D ----------
  var three = null;
  function init3D(box) {
    if (!root.THREE) { box.innerHTML = '<p class="muted pad">' + T('sol.no3d') + '</p>'; return null; }
    var THREE = root.THREE;
    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    box.appendChild(renderer.domElement);
    var scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(40, 1, 0.1, 200);
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    var d1 = new THREE.DirectionalLight(0xffffff, 0.8); d1.position.set(6, 10, 8); scene.add(d1);
    var d2 = new THREE.DirectionalLight(0x8fb4ff, 0.45); d2.position.set(-8, -4, -6); scene.add(d2);
    var grid = new THREE.GridHelper(16, 16, 0x3a4a7a, 0x1d2747); grid.position.y = -0.001; scene.add(grid);
    var group = new THREE.Group(); scene.add(group);
    var ctl = { rx: -0.45, ry: 0.6, dist: 16, drag: null };
    var el = renderer.domElement;
    el.addEventListener('pointerdown', function (e) { ctl.drag = { x: e.clientX, y: e.clientY, rx: ctl.rx, ry: ctl.ry }; el.setPointerCapture(e.pointerId); });
    el.addEventListener('pointermove', function (e) { if (!ctl.drag) return; ctl.ry = ctl.drag.ry + (e.clientX - ctl.drag.x) * 0.01; ctl.rx = Math.max(-1.45, Math.min(1.45, ctl.drag.rx + (e.clientY - ctl.drag.y) * 0.01)); });
    el.addEventListener('pointerup', function () { ctl.drag = null; });
    el.addEventListener('wheel', function (e) { e.preventDefault(); ctl.dist = Math.max(6, Math.min(40, ctl.dist * Math.exp(e.deltaY * 0.001))); }, { passive: false });
    function size() { var r = box.getBoundingClientRect(); if (!r.width) return; renderer.setSize(r.width, r.height); cam.aspect = r.width / r.height; cam.updateProjectionMatrix(); }
    if (root.ResizeObserver) new ResizeObserver(size).observe(box);
    var alive = true;
    function loop() {
      if (!alive) return;
      if (!el.isConnected) { alive = false; renderer.dispose(); return; }
      requestAnimationFrame(loop);
      if (st.rotate && !ctl.drag) ctl.ry += 0.004;
      cam.position.set(ctl.dist * Math.cos(ctl.rx) * Math.sin(ctl.ry), -ctl.dist * Math.sin(ctl.rx) + 2, ctl.dist * Math.cos(ctl.rx) * Math.cos(ctl.ry));
      cam.lookAt(0, 2, 0);
      renderer.render(scene, cam);
    }
    size(); loop();
    return { THREE: THREE, group: group, size: size };
  }

  function build() {
    if (!three) return;
    var THREE = three.THREE, g = three.group, v = st.v[st.kind], geo;
    while (g.children.length) { var c = g.children.pop(); if (c.geometry) c.geometry.dispose(); }
    switch (st.kind) {
      case 'cube': geo = new THREE.BoxGeometry(v.a, v.a, v.a); geo.translate(0, v.a / 2, 0); break;
      case 'box': geo = new THREE.BoxGeometry(v.a, v.c, v.b); geo.translate(0, v.c / 2, 0); break;
      case 'prism': geo = new THREE.CylinderGeometry(rc(v), rc(v), v.h, v.n, 1); geo.translate(0, v.h / 2, 0); break;
      case 'pyramid': geo = new THREE.ConeGeometry(rc(v), v.h, v.n, 1); geo.translate(0, v.h / 2, 0); break;
      case 'cylinder': geo = new THREE.CylinderGeometry(v.r, v.r, v.h, 64, 1); geo.translate(0, v.h / 2, 0); break;
      case 'cone': geo = new THREE.ConeGeometry(v.r, v.h, 64, 1); geo.translate(0, v.h / 2, 0); break;
      case 'frustum': geo = new THREE.CylinderGeometry(v.r, v.R, v.h, 64, 1); geo.translate(0, v.h / 2, 0); break;
      case 'sphere': geo = new THREE.SphereGeometry(v.r, 48, 32); geo.translate(0, v.r, 0); break;
    }
    var mat = new THREE.MeshPhongMaterial({ color: 0x5b9dff, transparent: true, opacity: st.wire ? 0.08 : 0.55, shininess: 60, side: THREE.DoubleSide, depthWrite: false });
    g.add(new THREE.Mesh(geo, mat));
    var edgeAngle = /cylinder|cone|frustum|sphere/.test(st.kind) ? 30 : 1;
    g.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo, edgeAngle), new THREE.LineBasicMaterial({ color: 0xcfe0ff })));
    if (st.wire) g.add(new THREE.LineSegments(new THREE.WireframeGeometry(geo), new THREE.LineBasicMaterial({ color: 0x5b9dff, transparent: true, opacity: 0.35 })));
    // balandlik chizig'i
    var hgt = { cube: v.a, box: v.c, sphere: 0 }[st.kind]; if (hgt === undefined) hgt = v.h;
    if (hgt && /prism|pyramid|cylinder|cone|frustum/.test(st.kind)) {
      var hg = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, hgt, 0)]);
      var hl = new THREE.Line(hg, new THREE.LineDashedMaterial({ color: 0xffb547, dashSize: 0.2, gapSize: 0.15 })); hl.computeLineDistances(); g.add(hl);
    }
    if (st.kind === 'sphere') {
      var rg = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, v.r, 0), new THREE.Vector3(v.r, v.r, 0)]);
      var rl = new THREE.Line(rg, new THREE.LineDashedMaterial({ color: 0xffb547, dashSize: 0.2, gapSize: 0.15 })); rl.computeLineDistances(); g.add(rl);
    }
  }
  // Muntazam n-burchakning tashqi aylana radiusi
  function rc(v) { return v.a / (2 * Math.sin(Math.PI / v.n)); }

  // ---------- Yoyilma (SVG) ----------
  function net(kind, v) {
    var shapes = [], PI = Math.PI;
    function poly(pts, cls) { shapes.push({ t: 'poly', pts: pts, cls: cls || '' }); }
    function rect(x, y, w, h, cls) { poly([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], cls); }
    function ngon(cx, cy, n, a, rot, cls) { var R = a / (2 * Math.sin(PI / n)), pts = []; for (var i = 0; i < n; i++) { var t = rot + i * 2 * PI / n; pts.push([cx + R * Math.cos(t), cy + R * Math.sin(t)]); } poly(pts, cls); }
    function circ(cx, cy, r, cls) { shapes.push({ t: 'circle', cx: cx, cy: cy, r: r, cls: cls || '' }); }
    function sector(cx, cy, R, r0, a0, a1, cls) { shapes.push({ t: 'sector', cx: cx, cy: cy, R: R, r0: r0, a0: a0, a1: a1, cls: cls || '' }); }
    switch (kind) {
      case 'cube': case 'box':
        var a = v.a, b = kind === 'cube' ? v.a : v.b, c = kind === 'cube' ? v.a : v.c;
        // yon yoqlar qatori (balandligi c), ustki va pastki asoslar (a×b) birinchi yoqqa yopishgan
        rect(0, b, a, c, 'side'); rect(a, b, b, c, 'side'); rect(a + b, b, a, c, 'side'); rect(2 * a + b, b, b, c, 'side');
        rect(0, 0, a, b, 'base'); rect(0, b + c, a, b, 'base');
        break;
      case 'prism':
        for (var i = 0; i < v.n; i++) rect(i * v.a, 0, v.a, v.h, 'side');
        var rin = v.a / (2 * Math.tan(PI / v.n));
        // asoslar birinchi to'rtburchakka yopishgan holda
        ngon(v.a / 2, -rin, v.n, v.a, PI / 2 + PI / v.n * (v.n % 2 ? 0 : 1), 'base');
        ngon(v.a / 2, v.h + rin, v.n, v.a, -PI / 2 + PI / v.n * (v.n % 2 ? 0 : 1), 'base');
        break;
      case 'pyramid':
        var ri = v.a / (2 * Math.tan(PI / v.n)), ap = Math.sqrt(v.h * v.h + ri * ri), R = v.a / (2 * Math.sin(PI / v.n));
        var base = []; for (var k = 0; k < v.n; k++) { var t = -PI / 2 + PI / v.n + k * 2 * PI / v.n; base.push([R * Math.cos(t), R * Math.sin(t)]); }
        poly(base, 'base');
        for (k = 0; k < v.n; k++) {
          var p1 = base[k], p2 = base[(k + 1) % v.n], mx = (p1[0] + p2[0]) / 2, my = (p1[1] + p2[1]) / 2, L = Math.hypot(mx, my);
          poly([p1, p2, [mx + mx / L * ap, my + my / L * ap]], 'side');
        }
        break;
      case 'cylinder':
        var w = 2 * PI * v.r; rect(0, 0, w, v.h, 'side'); circ(v.r, -v.r, v.r, 'base'); circ(v.r, v.h + v.r, v.r, 'base');
        break;
      case 'cone':
        var Lc = Math.sqrt(v.r * v.r + v.h * v.h), ang = 2 * PI * v.r / Lc;
        sector(0, 0, Lc, 0, PI / 2 - ang / 2, PI / 2 + ang / 2, 'side'); circ(0, Lc + v.r, v.r, 'base');
        break;
      case 'frustum':
        if (Math.abs(v.R - v.r) < 1e-6) return net('cylinder', { r: v.r, h: v.h });
        var big = Math.max(v.R, v.r), small = Math.min(v.R, v.r), Lf = Math.sqrt(Math.pow(big - small, 2) + v.h * v.h);
        var outer = Lf * big / (big - small), inner = outer - Lf, af = 2 * PI * big / outer;
        sector(0, 0, outer, inner, PI / 2 - af / 2, PI / 2 + af / 2, 'side');
        circ(0, outer + big, big, 'base'); circ(0, inner - small, small, 'base');
        break;
      default: return null;
    }
    // chegaralar
    var xs = [], ys = [];
    shapes.forEach(function (s) {
      if (s.t === 'poly') s.pts.forEach(function (p) { xs.push(p[0]); ys.push(p[1]); });
      else if (s.t === 'circle') { xs.push(s.cx - s.r, s.cx + s.r); ys.push(s.cy - s.r, s.cy + s.r); }
      else { for (var q = 0; q <= 32; q++) { var tt = s.a0 + (s.a1 - s.a0) * q / 32; [s.R, s.r0].forEach(function (rr) { xs.push(s.cx + rr * Math.cos(tt)); ys.push(s.cy + rr * Math.sin(tt)); }); } }
    });
    var x0 = Math.min.apply(0, xs), x1 = Math.max.apply(0, xs), y0 = Math.min.apply(0, ys), y1 = Math.max.apply(0, ys), pad = (x1 - x0 + y1 - y0) * 0.04;
    var svg = '<svg viewBox="' + [x0 - pad, y0 - pad, x1 - x0 + 2 * pad, y1 - y0 + 2 * pad].map(n2).join(' ') + '" class="net-svg" preserveAspectRatio="xMidYMid meet">';
    var sw = (x1 - x0 + y1 - y0) / 300;
    shapes.forEach(function (s) {
      var attr = ' class="' + s.cls + '" stroke-width="' + n2(sw) + '"';
      if (s.t === 'poly') svg += '<polygon points="' + s.pts.map(function (p) { return n2(p[0]) + ',' + n2(p[1]); }).join(' ') + '"' + attr + '/>';
      else if (s.t === 'circle') svg += '<circle cx="' + n2(s.cx) + '" cy="' + n2(s.cy) + '" r="' + n2(s.r) + '"' + attr + '/>';
      else {
        var large = s.a1 - s.a0 > PI ? 1 : 0;
        var o0 = [s.cx + s.R * Math.cos(s.a0), s.cy + s.R * Math.sin(s.a0)], o1 = [s.cx + s.R * Math.cos(s.a1), s.cy + s.R * Math.sin(s.a1)];
        var i1 = [s.cx + s.r0 * Math.cos(s.a1), s.cy + s.r0 * Math.sin(s.a1)], i0 = [s.cx + s.r0 * Math.cos(s.a0), s.cy + s.r0 * Math.sin(s.a0)];
        var d = 'M' + o0.map(n2) + ' A' + n2(s.R) + ',' + n2(s.R) + ' 0 ' + large + ' 1 ' + o1.map(n2);
        d += s.r0 > 0 ? ' L' + i1.map(n2) + ' A' + n2(s.r0) + ',' + n2(s.r0) + ' 0 ' + large + ' 0 ' + i0.map(n2) + ' Z' : ' L' + n2(s.cx) + ',' + n2(s.cy) + ' Z';
        svg += '<path d="' + d + '"' + attr + '/>';
      }
    });
    return svg + '</svg>';
  }

  // ---------- UI ----------
  var els = {};
  function renderControls() {
    var ps = PARAMS[st.kind], v = st.v[st.kind];
    els.params.innerHTML = ps.map(function (p) {
      var key = p[0], step = p[4] || 0.1;
      return '<label class="lbl">' + T('sol.' + (key === 'c' ? 'c' : key)) + ' = <b data-val="' + key + '">' + v[key] + '</b></label>' +
        '<input type="range" data-p="' + key + '" min="' + p[1] + '" max="' + p[2] + '" step="' + step + '" value="' + v[key] + '">';
    }).join('');
    els.params.querySelectorAll('[data-p]').forEach(function (inp) {
      inp.oninput = function () { var k = inp.getAttribute('data-p'); v[k] = +inp.value; els.params.querySelector('[data-val="' + k + '"]').textContent = v[k]; update(); };
    });
  }
  function update() {
    var v = st.v[st.kind];
    els.calc.innerHTML = '<h4>' + T('sol.' + st.kind) + '</h4>' + calc(st.kind, v).map(function (r) {
      return '<div class="kv col"><span>' + T(r[0]) + '</span><div class="f">' + r[1] + '</div><b>= ' + n2(r[2]) + '</b></div>';
    }).join('');
    var svg = st.net ? net(st.kind, v) : null;
    els.net.hidden = !st.net; els.net.innerHTML = svg || (st.net ? '<p class="muted pad">' + T('sol.noNet') + '</p>' : '');
    build();
  }
  function mount(el) {
    el.innerHTML = '<div class="tabs" id="s-tabs">' + KINDS.map(function (k) { return '<button class="tab" data-k="' + k + '">' + T('sol.' + k) + '</button>'; }).join('') + '</div>' +
      '<div class="sol-wrap"><aside class="card sol-side"><div id="s-params"></div>' +
      '<label class="chk"><input type="checkbox" id="s-rot"> <span data-t="sol.rotate"></span></label>' +
      '<label class="chk"><input type="checkbox" id="s-wire"> <span data-t="sol.wire"></span></label>' +
      '<label class="chk"><input type="checkbox" id="s-net"> <span data-t="sol.unfold"></span></label>' +
      '<div id="s-calc" class="an"></div></aside>' +
      '<div class="card sol-main"><div class="sol-view"><div id="s-3d" class="sol-3d"></div><div id="s-net-box" class="sol-net" hidden></div></div><p class="hint" data-t="sol.hint"></p></div></div>';
    I18n.apply(el);
    els = { params: el.querySelector('#s-params'), calc: el.querySelector('#s-calc'), net: el.querySelector('#s-net-box') };
    three = init3D(el.querySelector('#s-3d'));
    var rot = el.querySelector('#s-rot'), wire = el.querySelector('#s-wire'), nt = el.querySelector('#s-net');
    rot.checked = st.rotate; wire.checked = st.wire; nt.checked = st.net;
    rot.onchange = function () { st.rotate = rot.checked; };
    wire.onchange = function () { st.wire = wire.checked; build(); };
    nt.onchange = function () { st.net = nt.checked; update(); };
    function setKind(k) {
      st.kind = k;
      el.querySelectorAll('#s-tabs .tab').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-k') === k); });
      renderControls(); update();
    }
    el.querySelectorAll('#s-tabs .tab').forEach(function (b) { b.onclick = function () { setKind(b.getAttribute('data-k')); }; });
    setKind(st.kind);
  }

  root.Solids = { mount: mount, calc: calc, net: net, preset: function (k) { if (KINDS.indexOf(k) >= 0) st.kind = k; } };
})(this);
