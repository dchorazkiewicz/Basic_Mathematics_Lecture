(() => {
  const host = document.querySelector('[data-ellipse-parameters]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const sliders = {
    h: panel.querySelector('[data-ellipse-h-slider]'),
    k: panel.querySelector('[data-ellipse-k-slider]'),
    a: panel.querySelector('[data-ellipse-a-slider]'),
    b: panel.querySelector('[data-ellipse-b-slider]')
  };
  const outputs = {
    h: panel.querySelector('[data-ellipse-h]'),
    k: panel.querySelector('[data-ellipse-k]'),
    a: panel.querySelector('[data-ellipse-a]'),
    b: panel.querySelector('[data-ellipse-b]')
  };
  const readout = panel.querySelector('[data-ellipse-parameter-readout]');
  const VIEW = [-8, 6, 8, -6];
  const fixed = { fixed: true, highlight: false };

  const state = { h: 0, k: 0, a: 4, b: 2 };
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

  const ellipse = board.create('curve', [
    t => state.h + state.a * Math.cos(t),
    t => state.k + state.b * Math.sin(t),
    0,
    2 * Math.PI
  ], { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed });

  board.create('point', [() => state.h, () => state.k], {
    name: 'centre',
    size: 4,
    fillColor: '#b1782b',
    strokeColor: '#b1782b',
    ...fixed,
    label: window.LectureJSX?.pointLabelStyle?.({ offset: [12, 10], fontSize: 17 }) || {
      display: 'html', cssClass: 'vector-label-chip', offset: [12, 10], fontSize: 17
    }
  });

  board.create('segment', [
    () => [state.h, state.k],
    () => [state.h + state.a, state.k]
  ], { strokeColor: '#b1782b', strokeWidth: 3, ...fixed });

  board.create('segment', [
    () => [state.h, state.k],
    () => [state.h, state.k + state.b]
  ], { strokeColor: '#7c8f3d', strokeWidth: 3, ...fixed });

  const fmt = value => Number(value).toFixed(1).replace(/\.0$/, '');

  function update() {
    Object.keys(sliders).forEach(key => {
      state[key] = Number(sliders[key].value);
      outputs[key].value = fmt(state[key]);
    });
    readout.textContent = `centre (${fmt(state.h)}, ${fmt(state.k)}), horizontal scale ${fmt(state.a)}, vertical scale ${fmt(state.b)}`;
    ellipse.updateCurve();
    board.fullUpdate();
  }

  Object.values(sliders).forEach(slider => slider.addEventListener('input', update));
  update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
