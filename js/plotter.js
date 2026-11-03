// Nuvemath — funksiya grafiklari: bir nechta funksiya, siljitish/kattalashtirish (sichqoncha va sensor),
// koordinata ko'rsatkichi, nollar / ekstremumlar / kesishishlar tahlili, hosila, a parametri.
(function (root) {
  'use strict';
  var COLORS = ['#5b9dff', '#ff6b8b', '#3ddc97', '#ffb547', '#b48cff', '#3fd0e0'];
  var EXAMPLES = ['x^2 - 4', 'sin(x)', '1/x', 'sqrt(x)', '2^x', 'ln(x)', 'abs(x) - 2', 'a*x^2', 'x^3 - 3x', 'tan(x)'];

  var st = { fns: [], view: { cx: 0, cy: 0, scale: 50 }, a: 1, deriv: false, hover: null, mounted: false };
  var cv, ctx, listEl, infoEl, dpr = 1;

  function parseFn(src) {
    var s = String(src).trim().replace(/^\s*(y|f\s*\(\s*x\s*\))\s*=\s*/i, '');
    if (!s) return null;
    var tree = Expr.parse(s);
    var vars = Expr.variables(tree);
    Object.keys(vars).forEach(function (v) { if (v !== 'x' && v !== 'a') throw new Error(T('err.manyVar') + ' ' + v); });
    return function (x) { try { return Expr.evaluate(tree, { x: x, a: st.a }); } catch (e) { return NaN; } };
  }

  function addFn(src) {
    st.fns.push({ src: src || '', color: COLORS[st.fns.length % COLORS.length], f: null, err: '', on: true });
    compileAll(); renderList(); draw();
  }
  function compileAll() {
    st.fns.forEach(function (o) {
      o.err = ''; o.f = null;
      if (!o.src.trim()) return;
      try { o.f = parseFn(o.src); } catch (e) { o.err = e instanceof Expr.ParseError ? T('err.parse') : e.message; }
    });
  }

  function renderList() {
    listEl.innerHTML = '';
    st.fns.forEach(function (o, i) {
      var row = document.createElement('div'); row.className = 'fn-row';
      row.innerHTML = '<button class="fn-dot" title="on/off" style="--c:' + o.color + '"' + (o.on ? '' : ' data-off') + '></button>' +
        '<span class="fn-lbl">y =</span><input class="fn-in" spellcheck="false" autocomplete="off" value="' + o.src.replace(/"/g, '&quot;') + '">' +
        '<button class="fn-del" title="×">×</button><div class="fn-err"></div>';
      var inp = row.querySelector('input'), err = row.querySelector('.fn-err');
      err.textContent = o.err;
      inp.addEventListener('input', function () { o.src = inp.value; compileAll(); err.textContent = o.err; usesA(); draw(); });
      row.querySelector('.fn-dot').addEventListener('click', function (e) { o.on = !o.on; e.target.toggleAttribute('data-off', !o.on); draw(); });
      row.querySelector('.fn-del').addEventListener('click', function () { st.fns.splice(i, 1); if (!st.fns.length) addFn(''); else { renderList(); draw(); } });
      listEl.appendChild(row);
    });
    usesA();
  }
  function usesA() {
    var any = st.fns.some(function (o) { return /(^|[^a-z])a([^a-z]|$)/i.test(o.src.replace(/\b(abs|tan|atan|asin|acos|arcsin|arccos|arctg|cbrt|sign|pi)\b/g, '')); });
    var box = document.getElementById('pl-param'); if (box) box.hidden = !any;
  }

  // ---------- Koordinatalar ----------
  function W() { return cv.width / dpr; } function H() { return cv.height / dpr; }
  function sx(x) { return W() / 2 + (x - st.view.cx) * st.view.scale; }
  function sy(y) { return H() / 2 - (y - st.view.cy) * st.view.scale; }
  function wx(px) { return st.view.cx + (px - W() / 2) / st.view.scale; }
  function wy(py) { return st.view.cy - (py - H() / 2) / st.view.scale; }

  function niceStep(raw) {
    var p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p;
    return (m < 1.5 ? 1 : m < 3.5 ? 2 : m < 7.5 ? 5 : 10) * p;
  }
  function fmtTick(v, step) {
    if (Math.abs(v) < step / 1e6) return '0';
    var d = Math.max(0, -Math.floor(Math.log10(step)) + (niceStep(step) / step > 1.9 ? 1 : 0));
    return (v < 0 ? '−' : '') + Math.abs(v).toFixed(Math.min(d, 8)).replace(/\.?0+$/, '');
  }

  function css(v) { return getComputedStyle(document.documentElement).getPropertyValue(v).trim(); }

  function draw() {
    if (!cv) return;
    var w = W(), h = H();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = css('--plot-bg') || '#0b1022'; ctx.fillRect(0, 0, w, h);
    var step = niceStep(80 / st.view.scale), x0 = wx(0), x1 = wx(w), y0 = wy(h), y1 = wy(0);
    // mayda to'r
    ctx.lineWidth = 1;
    ctx.strokeStyle = css('--grid2') || 'rgba(255,255,255,.035)';
    ctx.beginPath();
    var sub = step / 5;
    for (var gx = Math.ceil(x0 / sub) * sub; gx <= x1; gx += sub) { ctx.moveTo(Math.round(sx(gx)) + .5, 0); ctx.lineTo(Math.round(sx(gx)) + .5, h); }
    for (var gy = Math.ceil(y0 / sub) * sub; gy <= y1; gy += sub) { ctx.moveTo(0, Math.round(sy(gy)) + .5); ctx.lineTo(w, Math.round(sy(gy)) + .5); }
    ctx.stroke();
    ctx.strokeStyle = css('--grid') || 'rgba(255,255,255,.09)';
    ctx.beginPath();
    for (gx = Math.ceil(x0 / step) * step; gx <= x1; gx += step) { ctx.moveTo(Math.round(sx(gx)) + .5, 0); ctx.lineTo(Math.round(sx(gx)) + .5, h); }
    for (gy = Math.ceil(y0 / step) * step; gy <= y1; gy += step) { ctx.moveTo(0, Math.round(sy(gy)) + .5); ctx.lineTo(w, Math.round(sy(gy)) + .5); }
    ctx.stroke();
    // o'qlar
    var ax = Math.min(Math.max(sy(0), 0), h), ay = Math.min(Math.max(sx(0), 0), w);
    ctx.strokeStyle = css('--axis') || 'rgba(220,230,255,.6)'; ctx.lineWidth = 1.4;
    ctx.beginPath(); ctx.moveTo(0, ax); ctx.lineTo(w, ax); ctx.moveTo(ay, 0); ctx.lineTo(ay, h); ctx.stroke();
    ctx.fillStyle = css('--muted') || '#8a96b8'; ctx.font = '11px "IBM Plex Mono", monospace';
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    var ly = ax + 4 > h - 14 ? ax - 16 : ax + 4;
    for (gx = Math.ceil(x0 / step) * step; gx <= x1; gx += step) if (Math.abs(gx) > step / 2) ctx.fillText(fmtTick(gx, step), sx(gx), ly);
    ctx.textAlign = ay + 6 > w - 40 ? 'right' : 'left'; ctx.textBaseline = 'middle';
    var lx = ay + 6 > w - 40 ? ay - 6 : ay + 6;
    for (gy = Math.ceil(y0 / step) * step; gy <= y1; gy += step) if (Math.abs(gy) > step / 2) ctx.fillText(fmtTick(gy, step), lx, sy(gy));
    ctx.textAlign = 'left'; ctx.fillText('x', w - 12, ax - 10); ctx.fillText('y', ay + 8, 10);

    // funksiyalar
    st.fns.forEach(function (o) {
      if (!o.on || !o.f) return;
      plot(o.f, o.color, 2.4, []);
      if (st.deriv) plot(derivative(o.f), o.color, 1.4, [6, 5]);
    });
    // maxsus nuqtalar (tahlil og'ir — ko'rinish to'xtagach hisoblanadi va keshlanadi)
    var key = JSON.stringify([st.view, st.a, st.fns.map(function (o) { return [o.src, o.on]; })]);
    if (key !== cache.key) {
      cache.key = key; clearTimeout(cache.t);
      cache.t = setTimeout(function () { cache.A = analyse(); draw(); }, 140);
    }
    var A = cache.A || { per: [], inter: [], points: [] };
    A.points.forEach(function (p) {
      ctx.beginPath(); ctx.arc(sx(p.x), sy(p.y), 4.5, 0, 7);
      ctx.fillStyle = p.color; ctx.fill(); ctx.lineWidth = 2; ctx.strokeStyle = css('--plot-bg') || '#0b1022'; ctx.stroke();
    });
    renderInfo(A);
    // sichqoncha ko'rsatkichi
    if (st.hover) {
      var best = null;
      st.fns.forEach(function (o) {
        if (!o.on || !o.f) return;
        var y = o.f(st.hover.x);
        if (isFinite(y) && Math.abs(sy(y) - st.hover.py) < 40 && (!best || Math.abs(sy(y) - st.hover.py) < best.d)) best = { y: y, c: o.color, d: Math.abs(sy(y) - st.hover.py) };
      });
      var hx = st.hover.x, hy = best ? best.y : wy(st.hover.py);
      ctx.setLineDash([3, 4]); ctx.strokeStyle = 'rgba(200,215,255,.35)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(sx(hx), 0); ctx.lineTo(sx(hx), h); ctx.stroke(); ctx.setLineDash([]);
      if (best) { ctx.beginPath(); ctx.arc(sx(hx), sy(hy), 5, 0, 7); ctx.fillStyle = best.c; ctx.fill(); }
      var label = '(' + round(hx) + '; ' + round(hy) + ')';
      ctx.font = '600 12px "IBM Plex Mono", monospace';
      var tw = ctx.measureText(label).width + 14, bx = Math.min(sx(hx) + 10, w - tw - 4), by = Math.max(sy(hy) - 30, 4);
      ctx.fillStyle = 'rgba(8,12,28,.88)'; roundRect(bx, by, tw, 22, 6); ctx.fill();
      ctx.fillStyle = '#e8eeff'; ctx.textBaseline = 'middle'; ctx.textAlign = 'left'; ctx.fillText(label, bx + 7, by + 11);
    }
  }
  function roundRect(x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
  function round(v) { var r = Math.abs(v) >= 1000 ? Math.round(v) : Math.round(v * 1000) / 1000; return String(r).replace('-', '−'); }

  function derivative(f) { return function (x) { var hh = 1e-5 * Math.max(1, Math.abs(x)); return (f(x + hh) - f(x - hh)) / (2 * hh); }; }

  function plot(f, color, width, dash) {
    var w = W(), h = H();
    ctx.strokeStyle = color; ctx.lineWidth = width; ctx.setLineDash(dash); ctx.lineJoin = 'round';
    ctx.beginPath();
    var pen = false, prevY = null, N = Math.ceil(w * 2);
    for (var i = 0; i <= N; i++) {
      var px = i / 2, x = wx(px), y = f(x);
      if (!isFinite(y)) { pen = false; prevY = null; continue; }
      var py = sy(y);
      // uzilish (asimptota): qo'shni nuqtalar orasidagi juda katta sakrash — chiziqni uzamiz
      if (prevY !== null && Math.abs(py - prevY) > h * 1.5) {
        var mid = f(wx(px - .25));
        if (!isFinite(mid) || Math.abs(sy(mid) - (py + prevY) / 2) > h / 2) pen = false;
      }
      py = Math.max(-1e4, Math.min(1e4, py));
      if (pen) ctx.lineTo(px, py); else { ctx.moveTo(px, py); pen = true; }
      prevY = py;
    }
    ctx.stroke(); ctx.setLineDash([]);
  }

  // Ko'rinib turgan oraliqdagi nollar, ekstremumlar va kesishishlar
  function analyse() {
    var lo = wx(0), hi = wx(W()), pts = [], res = [];
    var active = st.fns.filter(function (o) { return o.on && o.f; });
    active.forEach(function (o, k) {
      var roots = Solver.numericRoots(o.f, lo, hi).filter(function (r) { return Math.abs(o.f(r)) < 1e-6; });
      var df = derivative(o.f);
      var ext = Solver.numericRoots(df, lo, hi).map(function (x) {
        var y = o.f(x), l = o.f(x - 1e-3), r = o.f(x + 1e-3);
        if (!isFinite(y) || !isFinite(l) || !isFinite(r)) return null;
        var kind = y <= l && y <= r ? 'min' : y >= l && y >= r ? 'max' : null;
        return kind && { x: x, y: y, kind: kind };
      }).filter(Boolean);
      roots.slice(0, 20).forEach(function (r) { pts.push({ x: r, y: 0, color: o.color }); });
      ext.slice(0, 20).forEach(function (e) { pts.push({ x: e.x, y: e.y, color: o.color }); });
      res.push({ o: o, roots: roots, ext: ext });
    });
    var inter = [];
    for (var i = 0; i < active.length; i++) for (var j = i + 1; j < active.length; j++) {
      var f = active[i].f, g = active[j].f;
      Solver.numericRoots(function (x) { return f(x) - g(x); }, lo, hi).forEach(function (x) {
        var y = f(x); if (isFinite(y) && Math.abs(y - g(x)) < 1e-6 * Math.max(1, Math.abs(y))) { inter.push({ x: x, y: y, a: active[i], b: active[j] }); pts.push({ x: x, y: y, color: '#ffffff' }); }
      });
    }
    return { per: res, inter: inter, points: pts };
  }

  // Tahlil uchun qisqa son: kasr/π ko'rinishi bo'lmasa 4 xonagacha yaxlitlanadi
  function fx(x) { var t = Solver.fmtNum(x); return /\d\.\d{5,}/.test(t) ? String(+x.toFixed(4)).replace('-', '−') : t; }
  var lastInfo = '', cache = { key: '', A: null, t: 0 };
  function renderInfo(A) {
    var html = '<h4>' + T('plot.analysis') + '</h4>';
    A.per.forEach(function (r) {
      html += '<div class="an-fn"><span class="sw" style="background:' + r.o.color + '"></span><b>y = ' + esc(r.o.src) + '</b>';
      html += '<div><span class="k">' + T('plot.roots') + ':</span> ' + (r.roots.length ? r.roots.slice(0, 8).map(function (x) { return 'x = ' + fx(x); }).join(', ') + (r.roots.length > 8 ? ' …' : '') : '<span class="muted">' + T('plot.none') + '</span>') + '</div>';
      html += '<div><span class="k">' + T('plot.ext') + ':</span> ' + (r.ext.length ? r.ext.slice(0, 6).map(function (e) { return T('plot.' + e.kind) + ' (' + fx(e.x) + '; ' + fx(e.y) + ')'; }).join(', ') + (r.ext.length > 6 ? ' …' : '') : '<span class="muted">' + T('plot.none') + '</span>') + '</div></div>';
    });
    if (A.inter.length) html += '<div class="an-fn"><span class="k">' + T('plot.inter') + ':</span> ' + A.inter.slice(0, 8).map(function (p) { return '(' + fx(p.x) + '; ' + fx(p.y) + ')'; }).join(', ') + '</div>';
    if (html !== lastInfo) { infoEl.innerHTML = html; lastInfo = html; }
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  // ---------- Hodisalar ----------
  var raf = 0;
  function redraw() { if (!raf) raf = requestAnimationFrame(function () { raf = 0; draw(); }); }
  function resize() {
    if (!cv || !cv.isConnected) return;
    var r = cv.parentElement.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.max(1, Math.round(r.width * dpr)); cv.height = Math.max(1, Math.round(r.height * dpr));
    draw();
  }
  function zoomAt(px, py, k) {
    var x = wx(px), y = wy(py);
    st.view.scale = Math.max(0.5, Math.min(20000, st.view.scale * k));
    st.view.cx = x - (px - W() / 2) / st.view.scale; st.view.cy = y + (py - H() / 2) / st.view.scale;
    redraw();
  }
  function bind() {
    var drag = null, pinch = null, pointers = {};
    cv.addEventListener('wheel', function (e) { e.preventDefault(); var r = cv.getBoundingClientRect(); zoomAt(e.clientX - r.left, e.clientY - r.top, Math.exp(-e.deltaY * 0.0015)); }, { passive: false });
    cv.addEventListener('pointerdown', function (e) {
      cv.setPointerCapture(e.pointerId); pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      var ids = Object.keys(pointers);
      if (ids.length === 2) { var a = pointers[ids[0]], b = pointers[ids[1]]; pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), s: st.view.scale }; drag = null; }
      else drag = { x: e.clientX, y: e.clientY, cx: st.view.cx, cy: st.view.cy };
    });
    cv.addEventListener('pointermove', function (e) {
      var r = cv.getBoundingClientRect();
      if (pointers[e.pointerId]) pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
      var ids = Object.keys(pointers);
      if (pinch && ids.length === 2) {
        var a = pointers[ids[0]], b = pointers[ids[1]], d = Math.hypot(a.x - b.x, a.y - b.y);
        var mx = (a.x + b.x) / 2 - r.left, my = (a.y + b.y) / 2 - r.top;
        zoomAt(mx, my, (pinch.s * d / pinch.d) / st.view.scale); return;
      }
      if (drag) { st.view.cx = drag.cx - (e.clientX - drag.x) / st.view.scale; st.view.cy = drag.cy + (e.clientY - drag.y) / st.view.scale; }
      st.hover = { x: wx(e.clientX - r.left), py: e.clientY - r.top };
      redraw();
    });
    function up(e) { delete pointers[e.pointerId]; if (Object.keys(pointers).length < 2) pinch = null; if (!Object.keys(pointers).length) drag = null; }
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
    cv.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') { st.hover = null; redraw(); } });
    window.addEventListener('resize', resize);
    if (root.ResizeObserver) new ResizeObserver(resize).observe(cv.parentElement);
  }

  function mount(el) {
    el.innerHTML =
      '<div class="plot-wrap">' +
      '<aside class="plot-side card">' +
      '<div id="pl-list"></div>' +
      '<div class="row gap"><button class="btn sm" id="pl-add" data-t="plot.add"></button><button class="btn sm ghost" id="pl-reset" data-t="plot.reset"></button></div>' +
      '<label class="chk"><input type="checkbox" id="pl-deriv"> <span data-t="plot.deriv"></span></label>' +
      '<div id="pl-param" hidden><label class="lbl"><span data-t="plot.param"></span> = <b id="pl-aval">1</b></label><input type="range" id="pl-a" min="-5" max="5" step="0.1" value="1"></div>' +
      '<div class="examples"><span class="muted" data-t="plot.examples"></span> ' + EXAMPLES.map(function (x) { return '<button class="chip" data-ex="' + x + '">' + x + '</button>'; }).join('') + '</div>' +
      '<div id="pl-info" class="an"></div>' +
      '</aside>' +
      '<div class="plot-main card"><div class="plot-canvas"><canvas id="pl-cv"></canvas></div><p class="hint" data-t="plot.hint"></p></div>' +
      '</div>';
    I18n.apply(el);
    cv = el.querySelector('#pl-cv'); ctx = cv.getContext('2d'); listEl = el.querySelector('#pl-list'); infoEl = el.querySelector('#pl-info');
    if (!st.fns.length) { st.fns = []; addFn('x^2 - 4'); addFn('sin(x)'); }
    else { compileAll(); renderList(); }
    el.querySelector('#pl-add').onclick = function () { addFn(''); var ins = listEl.querySelectorAll('input'); ins[ins.length - 1].focus(); };
    el.querySelector('#pl-reset').onclick = function () { st.view = { cx: 0, cy: 0, scale: 50 }; draw(); };
    var dch = el.querySelector('#pl-deriv'); dch.checked = st.deriv; dch.onchange = function () { st.deriv = dch.checked; draw(); };
    var ain = el.querySelector('#pl-a'), aval = el.querySelector('#pl-aval'); ain.value = st.a; aval.textContent = st.a;
    ain.oninput = function () { st.a = +ain.value; aval.textContent = st.a; draw(); };
    el.querySelectorAll('[data-ex]').forEach(function (b) { b.onclick = function () { addFn(b.getAttribute('data-ex')); }; });
    bind();
    lastInfo = ''; cache.key = ''; cache.A = null;
    requestAnimationFrame(resize);
  }

  // Tashqaridan funksiyalarni o'rnatish (darslik/yechuvchidan "Grafikda ochish")
  function setFunctions(list, view) {
    st.fns = list.map(function (s, i) { return { src: s, color: COLORS[i % COLORS.length], f: null, err: '', on: true }; });
    if (view) st.view = view;
  }

  root.Plotter = { mount: mount, setFunctions: setFunctions, redraw: function () { resize(); }, _state: st };
})(this);
