(() => {
  const host = document.querySelector('[data-focus-directrix]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const eSlider = panel.querySelector('[data-focus-e-slider]');
  const thetaSlider = panel.querySelector('[data-focus-theta-slider]');
  const eOut = panel.querySelector('[data-focus-e]');
  const thetaOut = panel.querySelector('[data-focus-theta]');
  const ratioOut = panel.querySelector('[data-focus-ratio]');
  const typeOut = panel.querySelector('[data-focus-type]');

  const VIEW = [-7, 5.5, 7, -5.5];
  const p = 2.4;
  const state = { e: 1, theta: 0.4 };
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

  const radius = () => p / (1 + state.e * Math.cos(state.theta));
  const px = () => radius() * Math.cos(state.theta);
  const py = () => radius() * Math.sin(state.theta);
  const directrixX = () => p / state.e;

  const curve = board.create('curve', [
    t => {
      const denominator = 1 + state.e * Math.cos(t);
      if (denominator <= 0.03) return NaN;
      const r = p / denominator;
      return r < 30 ? r * Math.cos(t) : NaN;
    },
    t => {
      const denominator = 1 + state.e * Math.cos(t);
      if (denominator <= 0.03) return NaN;
      const r = p / denominator;
      return r < 30 ? r * Math.sin(t) : NaN;
    },
    0,
    2 * Math.PI
  ], { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed });

  board.create('point', [0, 0], {
    name: 'F', size: 5, fillColor: '#b1782b', strokeColor: '#b1782b', ...fixed,
    label: window.LectureJSX?.pointLabelStyle?.({ offset: [12, 10], fontSize: 18 }) || {
      display: 'html', cssClass: 'vector-label-chip', offset: [12, 10], fontSize: 18
    }
  });

  const point = board.create('point', [px, py], {
    name: 'P', size: 6, fillColor: '#7c8f3d', strokeColor: '#7c8f3d', ...fixed,
    label: window.LectureJSX?.pointLabelStyle?.({ offset: [12, 10], fontSize: 18 }) || {
      display: 'html', cssClass: 'vector-label-chip', offset: [12, 10], fontSize: 18
    }
  });

  board.create('line', [
    () => [directrixX(), -1],
    () => [directrixX(), 1]
  ], { strokeColor: '#9aa7b2', strokeWidth: 3, dash: 2, ...fixed });

  const foot = board.create('point', [directrixX, py], {
    name: 'Q', size: 4, fillColor: '#9aa7b2', strokeColor: '#9aa7b2', ...fixed,
    label: window.LectureJSX?.pointLabelStyle?.({ offset: [10, -18], fontSize: 16 }) || {
      display: 'html', cssClass: 'vector-label-chip', offset: [10, -18], fontSize: 16
    }
  });

  board.create('segment', [[0, 0], point], {
    strokeColor: '#b1782b', strokeWidth: 4, ...fixed
  });
  board.create('segment', [point, foot], {
    strokeColor: '#7c8f3d', strokeWidth: 4, ...fixed
  });

  const fmt = value => Number(value).toFixed(2).replace(/\.00$/, '');

  function conicType(e) {
    if (e < 0.999) return 'ellipse';
    if (e < 1.001) return 'parabola';
    return 'hyperbola branch';
  }

  function update() {
    state.e = Number(eSlider.value);
    state.theta = Number(thetaSlider.value);
    const focalDistance = radius();
    const directrixDistance = directrixX() - px();
    eOut.value = fmt(state.e);
    thetaOut.value = fmt(state.theta);
    ratioOut.textContent = fmt(focalDistance / directrixDistance);
    typeOut.textContent = conicType(state.e);
    curve.updateCurve();
    board.fullUpdate();
  }

  eSlider.addEventListener('input', update);
  thetaSlider.addEventListener('input', update);
  update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
