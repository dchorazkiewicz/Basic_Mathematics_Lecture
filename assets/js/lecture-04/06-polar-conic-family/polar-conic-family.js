(() => {
  const host = document.querySelector('[data-polar-conic-family]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const pSlider = panel.querySelector('[data-conic-p-slider]');
  const eSlider = panel.querySelector('[data-conic-e-slider]');
  const thetaSlider = panel.querySelector('[data-conic-theta-slider]');
  const pOut = panel.querySelector('[data-conic-p]');
  const eOut = panel.querySelector('[data-conic-e]');
  const thetaOut = panel.querySelector('[data-conic-theta]');
  const radiusOut = panel.querySelector('[data-conic-radius]');
  const readout = panel.querySelector('[data-conic-family-readout]');
  const VIEW = [-8, 6, 8, -6];
  const fixed = { fixed: true, highlight: false };
  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: VIEW,
    axis: true,
    grid: true,
    keepAspectRatio: true,
    showNavigation: false,
    showCopyright: false,
    pan: { enabled: false },
    zoom: { enabled: false }
  });

  let p = Number(pSlider.value);
  let e = Number(eSlider.value);
  let theta = thetaSlider ? Number(thetaSlider.value) : 0;

  const radiusAt = angle => {
    const denominator = 1 + e * Math.cos(angle);
    if (denominator <= 0.025) return NaN;
    const r = p / denominator;
    return r >= 0 && r < 30 ? r : NaN;
  };

  const curve = board.create('curve', [
    angle => {
      const r = radiusAt(angle);
      return Number.isFinite(r) ? r * Math.cos(angle) : NaN;
    },
    angle => {
      const r = radiusAt(angle);
      return Number.isFinite(r) ? r * Math.sin(angle) : NaN;
    },
    0,
    2 * Math.PI
  ], { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed });

  board.create('point', [0, 0], {
    name: 'focus',
    size: 4,
    fillColor: '#b1782b',
    strokeColor: '#b1782b',
    ...fixed,
    label: window.LectureJSX?.pointLabelStyle?.({ offset: [12, 10], fontSize: 17 }) || {
      display: 'html', cssClass: 'vector-label-chip', offset: [12, 10], fontSize: 17
    }
  });

  const point = board.create('point', [
    () => radiusAt(theta) * Math.cos(theta),
    () => radiusAt(theta) * Math.sin(theta)
  ], {
    name: 'P(θ)',
    size: 6,
    fillColor: '#7c8f3d',
    strokeColor: '#7c8f3d',
    ...fixed,
    label: window.LectureJSX?.pointLabelStyle?.({ offset: [12, 10], fontSize: 17 }) || {
      display: 'html', cssClass: 'vector-label-chip', offset: [12, 10], fontSize: 17
    }
  });

  board.create('segment', [[0, 0], point], {
    strokeColor: '#b1782b', strokeWidth: 3, ...fixed
  });

  const fmt = value => Number(value).toFixed(2).replace(/\.00$/, '');

  const update = () => {
    p = Number(pSlider.value);
    e = Number(eSlider.value);
    theta = thetaSlider ? Number(thetaSlider.value) : 0;
    pOut.value = Number(p).toFixed(1);
    eOut.value = Number(e).toFixed(2);
    if (thetaOut) thetaOut.value = fmt(theta);
    const r = radiusAt(theta);
    if (radiusOut) radiusOut.textContent = Number.isFinite(r) ? fmt(r) : 'not finite in this direction';
    const type = e < 0.999 ? (e < 0.02 ? 'circle' : 'ellipse') : e < 1.001 ? 'parabola' : 'hyperbola branch';
    readout.textContent = `${type}: r = ${Number(p).toFixed(1)}/(1 + ${Number(e).toFixed(2)} cos θ)`;
    curve.updateCurve();
    board.fullUpdate();
  };

  pSlider.addEventListener('input', update);
  eSlider.addEventListener('input', update);
  thetaSlider?.addEventListener('input', update);
  update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
