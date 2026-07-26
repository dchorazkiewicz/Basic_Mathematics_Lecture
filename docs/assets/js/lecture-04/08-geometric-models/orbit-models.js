(() => {
  const host = document.querySelector('[data-orbit-models]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const buttons = [...panel.querySelectorAll('[data-orbit-mode]')];
  const slider = panel.querySelector('[data-orbit-theta-slider]');
  const thetaOut = panel.querySelector('[data-orbit-theta]');
  const typeOut = panel.querySelector('[data-orbit-type]');
  const motionOut = panel.querySelector('[data-orbit-motion-note]');

  const VIEW = [-8, 6, 8, -6];
  const p = 2.4;
  const modes = {
    ellipse: {
      e: 0.6,
      min: 0,
      max: 2 * Math.PI,
      label: 'ellipse — bounded geometric path',
      note: 'The slider chooses a point on the path; it is not yet a physical time law.'
    },
    parabola: {
      e: 1,
      min: -2.55,
      max: 2.55,
      label: 'parabola — threshold geometric path',
      note: 'The displayed motion is illustrative; no speed law has been derived.'
    },
    hyperbola: {
      e: 1.5,
      min: -1.9,
      max: 1.9,
      label: 'hyperbola branch — unbounded geometric path',
      note: 'The curve classifies the path, not the force law or the physical timing.'
    }
  };

  const state = { mode: 'ellipse', theta: 0 };
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

  const radiusAt = theta => {
    const e = modes[state.mode].e;
    const denominator = 1 + e * Math.cos(theta);
    if (denominator <= 0.03) return NaN;
    const r = p / denominator;
    return r < 30 ? r : NaN;
  };

  const curve = board.create('curve', [
    theta => {
      const r = radiusAt(theta);
      return Number.isFinite(r) ? r * Math.cos(theta) : NaN;
    },
    theta => {
      const r = radiusAt(theta);
      return Number.isFinite(r) ? r * Math.sin(theta) : NaN;
    },
    () => modes[state.mode].min,
    () => modes[state.mode].max
  ], { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed });

  board.create('point', [0, 0], {
    name: 'central body',
    size: 7,
    fillColor: '#b1782b',
    strokeColor: '#b1782b',
    ...fixed,
    label: window.LectureJSX?.pointLabelStyle?.({ offset: [12, 10], fontSize: 17 }) || {
      display: 'html', cssClass: 'vector-label-chip', offset: [12, 10], fontSize: 17
    }
  });

  const point = board.create('point', [
    () => {
      const r = radiusAt(state.theta);
      return r * Math.cos(state.theta);
    },
    () => {
      const r = radiusAt(state.theta);
      return r * Math.sin(state.theta);
    }
  ], {
    name: 'position',
    size: 6,
    fillColor: '#7c8f3d',
    strokeColor: '#7c8f3d',
    ...fixed,
    label: window.LectureJSX?.pointLabelStyle?.({ offset: [12, 10], fontSize: 17 }) || {
      display: 'html', cssClass: 'vector-label-chip', offset: [12, 10], fontSize: 17
    }
  });

  board.create('segment', [[0, 0], point], {
    strokeColor: '#9aa7b2', strokeWidth: 2, dash: 2, ...fixed
  });

  const fmt = value => Number(value).toFixed(2).replace(/\.00$/, '');

  function render() {
    const mode = modes[state.mode];
    thetaOut.value = fmt(state.theta);
    typeOut.textContent = mode.label;
    motionOut.textContent = mode.note;
    curve.updateCurve();
    board.fullUpdate();
  }

  function setMode(modeName) {
    state.mode = modeName;
    const mode = modes[modeName];
    slider.min = mode.min;
    slider.max = mode.max;
    slider.value = 0;
    state.theta = 0;
    buttons.forEach(button => button.classList.toggle('is-active', button.dataset.orbitMode === modeName));
    render();
  }

  buttons.forEach(button => button.addEventListener('click', () => setMode(button.dataset.orbitMode)));
  slider.addEventListener('input', () => {
    state.theta = Number(slider.value);
    render();
  });

  setMode('ellipse');
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
