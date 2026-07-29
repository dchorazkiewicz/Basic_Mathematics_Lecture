(() => {
  const host = document.querySelector('[data-transformation-gallery]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const buttons = [...panel.querySelectorAll('[data-transform-mode]')];
  const readout = panel.querySelector('[data-gallery-readout]');
  const matrixReadout = panel.querySelector('[data-gallery-matrix]');
  const VIEW = [-7, 6, 7, -6];
  const fixed = { fixed: true, highlight: false };

  const presets = {
    identity: {
      matrix: [[1, 0], [0, 1]],
      title: 'identity — nothing changes'
    },
    stretch: {
      matrix: [[2, 0], [0, 1]],
      title: 'horizontal stretch — widths double'
    },
    shear: {
      matrix: [[1, 1], [0, 1]],
      title: 'shear — height produces sideways displacement'
    },
    reflection: {
      matrix: [[-1, 0], [0, 1]],
      title: 'reflection — left and right exchange places'
    },
    rotation: {
      matrix: [[0, -1], [1, 0]],
      title: 'rotation — every direction turns through 90°'
    }
  };

  const state = { mode: 'identity', matrix: presets.identity.matrix };

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

  for (let k = -5; k <= 5; k += 1) {
    board.create('segment', [[k, -5], [k, 5]], {
      strokeColor: '#dde2e8',
      strokeWidth: 1,
      dash: 2,
      ...fixed
    });
    board.create('segment', [[-5, k], [5, k]], {
      strokeColor: '#dde2e8',
      strokeWidth: 1,
      dash: 2,
      ...fixed
    });
    board.create('curve', [
      t => transform(k, t)[0],
      t => transform(k, t)[1],
      -5,
      5
    ], {
      strokeColor: '#7fa9c8',
      strokeWidth: k === 0 ? 3 : 1.5,
      ...fixed
    });
    board.create('curve', [
      t => transform(t, k)[0],
      t => transform(t, k)[1],
      -5,
      5
    ], {
      strokeColor: '#7fa9c8',
      strokeWidth: k === 0 ? 3 : 1.5,
      ...fixed
    });
  }

  const house = [
    [-1.5, -1.5],
    [1.5, -1.5],
    [1.5, 1],
    [0, 2.5],
    [-1.5, 1],
    [-1.5, -1.5],
    [1.5, 1],
    [-1.5, 1]
  ];

  for (let i = 0; i < house.length - 1; i += 1) {
    board.create('segment', [house[i], house[i + 1]], {
      strokeColor: '#aeb7c1',
      strokeWidth: 2,
      dash: 2,
      ...fixed
    });
    board.create('segment', [
      () => transform(...house[i]),
      () => transform(...house[i + 1])
    ], {
      strokeColor: '#2f6f9f',
      strokeWidth: 4,
      ...fixed
    });
  }

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
    state.mode = mode;
    state.matrix = presets[mode].matrix;
    buttons.forEach(button => {
      button.classList.toggle('is-active', button.dataset.transformMode === mode);
    });
    readout.textContent = presets[mode].title;
    matrixReadout.textContent = matrixText(state.matrix);
    board.fullUpdate();
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => setMode(button.dataset.transformMode));
  });

  setMode('identity');
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
