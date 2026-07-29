(() => {
  const host = document.querySelector('[data-collapse-board]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const buttons = [...panel.querySelectorAll('[data-collapse-mode]')];
  const readout = panel.querySelector('[data-collapse-readout]');
  const matrixReadout = panel.querySelector('[data-collapse-matrix]');
  const VIEW = [-6, 6, 6, -6];
  const fixed = { fixed: true, highlight: false };

  const presets = {
    projection: {
      matrix: [[1, 0], [0, 0]],
      title: 'projection onto the horizontal axis'
    },
    'same-line': {
      matrix: [[1, 2], [1, 2]],
      title: 'both columns point along the same line'
    },
    zero: {
      matrix: [[0, 0], [0, 0]],
      title: 'the zero matrix sends everything to the origin'
    }
  };

  const state = { matrix: presets.projection.matrix };

  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: VIEW,
    axis: true,
    grid: false,
    keepAspectRatio: true,
    showNavigation: false,
    showCopyright: false,
    pan: { enabled: false },
    zoom: { enabled: false }
  });

  const transform = (x, y) => {
    const [[a, b], [c, d]] = state.matrix;
    return [a * x + b * y, c * x + d * y];
  };

  for (let k = -4; k <= 4; k += 1) {
    board.create('segment', [[k, -4], [k, 4]], {
      strokeColor: '#dde2e8',
      strokeWidth: 1,
      dash: 2,
      ...fixed
    });
    board.create('segment', [[-4, k], [4, k]], {
      strokeColor: '#dde2e8',
      strokeWidth: 1,
      dash: 2,
      ...fixed
    });
    board.create('curve', [
      t => transform(k, t)[0],
      t => transform(k, t)[1],
      -4,
      4
    ], {
      strokeColor: '#7fa9c8',
      strokeWidth: 1.5,
      ...fixed
    });
    board.create('curve', [
      t => transform(t, k)[0],
      t => transform(t, k)[1],
      -4,
      4
    ], {
      strokeColor: '#7fa9c8',
      strokeWidth: 1.5,
      ...fixed
    });
  }

  const triangle = [[-2, -1], [2, -1], [0, 3]];
  const originalPoints = triangle.map(([x, y]) =>
    board.create('point', [x, y], { visible: false, ...fixed })
  );
  board.create('polygon', originalPoints, {
    fillColor: '#aeb7c1',
    fillOpacity: 0.08,
    borders: { strokeColor: '#aeb7c1', strokeWidth: 2, dash: 2, ...fixed },
    vertices: { visible: false },
    ...fixed
  });

  const imagePoints = triangle.map(([x, y]) =>
    board.create('point', [() => transform(x, y)[0], () => transform(x, y)[1]], {
      visible: false,
      ...fixed
    })
  );
  board.create('polygon', imagePoints, {
    fillColor: '#2f6f9f',
    fillOpacity: 0.24,
    borders: { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed },
    vertices: { visible: true, size: 3, fillColor: '#2f6f9f', strokeColor: '#2f6f9f', ...fixed },
    ...fixed
  });

  board.create('arrow', [[0, 0], () => transform(1, 0)], {
    strokeColor: '#b1782b',
    strokeWidth: 4,
    ...fixed
  });
  board.create('arrow', [[0, 0], () => transform(0, 1)], {
    strokeColor: '#7c8f3d',
    strokeWidth: 4,
    ...fixed
  });

  function matrixText(matrix) {
    const [[a, b], [c, d]] = matrix;
    return `A = [[${a}, ${b}], [${c}, ${d}]]`;
  }

  function setMode(mode) {
    state.matrix = presets[mode].matrix;
    buttons.forEach(button => {
      button.classList.toggle('is-active', button.dataset.collapseMode === mode);
    });
    readout.textContent = presets[mode].title;
    matrixReadout.textContent = matrixText(state.matrix);
    board.fullUpdate();
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => setMode(button.dataset.collapseMode));
  });

  setMode('projection');
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
