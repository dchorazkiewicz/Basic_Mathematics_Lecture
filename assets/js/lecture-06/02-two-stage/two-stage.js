(() => {
  const host = document.querySelector('[data-two-stage-board]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const presetButtons = [...panel.querySelectorAll('[data-two-stage-preset]')];
  const stepButtons = [...panel.querySelectorAll('[data-two-stage-step]')];
  const title = panel.querySelector('[data-two-stage-title]');
  const matrixReadout = panel.querySelector('[data-two-stage-matrices]');
  const VIEW = [-7, 6, 7, -6];
  const fixed = { fixed: true, highlight: false };

  const presets = {
    'shear-rotate': {
      B: [[1, 1], [0, 1]],
      A: [[0, -1], [1, 0]],
      title: 'first shear, then rotate'
    },
    'stretch-shear': {
      B: [[2, 0], [0, 1]],
      A: [[1, 1], [0, 1]],
      title: 'first stretch, then shear'
    },
    'reflect-rotate': {
      B: [[-1, 0], [0, 1]],
      A: [[0, -1], [1, 0]],
      title: 'first reflect, then rotate'
    }
  };

  const state = { preset: 'shear-rotate', step: 0 };

  const multiply = (A, B) => [
    [A[0][0] * B[0][0] + A[0][1] * B[1][0], A[0][0] * B[0][1] + A[0][1] * B[1][1]],
    [A[1][0] * B[0][0] + A[1][1] * B[1][0], A[1][0] * B[0][1] + A[1][1] * B[1][1]]
  ];

  const apply = (M, [x, y]) => [
    M[0][0] * x + M[0][1] * y,
    M[1][0] * x + M[1][1] * y
  ];

  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: VIEW, axis: true, grid: false, keepAspectRatio: true,
    showNavigation: false, showCopyright: false,
    pan: { enabled: false }, zoom: { enabled: false }
  });

  const matrixAtStep = () => {
    const { A, B } = presets[state.preset];
    if (state.step === 0) return [[1, 0], [0, 1]];
    if (state.step === 1) return B;
    return multiply(A, B);
  };

  for (let k = -5; k <= 5; k += 1) {
    board.create('segment', [[k, -5], [k, 5]], {
      strokeColor: '#d9dee5', strokeWidth: 1, dash: 2, ...fixed
    });
    board.create('segment', [[-5, k], [5, k]], {
      strokeColor: '#d9dee5', strokeWidth: 1, dash: 2, ...fixed
    });
    board.create('curve', [
      t => apply(matrixAtStep(), [k, t])[0],
      t => apply(matrixAtStep(), [k, t])[1],
      -5, 5
    ], {
      strokeColor: () => state.step === 1 ? '#b1782b' : state.step === 2 ? '#2f6f9f' : '#aeb7c1',
      strokeWidth: k === 0 ? 3 : 1.5, ...fixed
    });
    board.create('curve', [
      t => apply(matrixAtStep(), [t, k])[0],
      t => apply(matrixAtStep(), [t, k])[1],
      -5, 5
    ], {
      strokeColor: () => state.step === 1 ? '#b1782b' : state.step === 2 ? '#2f6f9f' : '#aeb7c1',
      strokeWidth: k === 0 ? 3 : 1.5, ...fixed
    });
  }

  const house = [
    [-1.5, -1.5], [1.5, -1.5], [1.5, 1], [0, 2.5],
    [-1.5, 1], [-1.5, -1.5], [1.5, 1], [-1.5, 1]
  ];

  for (let i = 0; i < house.length - 1; i += 1) {
    board.create('segment', [
      () => apply(matrixAtStep(), house[i]),
      () => apply(matrixAtStep(), house[i + 1])
    ], {
      strokeColor: () => state.step === 1 ? '#b1782b' : state.step === 2 ? '#2f6f9f' : '#17324d',
      strokeWidth: 4, ...fixed
    });
  }

  const update = () => {
    const { A, B, title: presetTitle } = presets[state.preset];
    const AB = multiply(A, B);
    title.textContent = presetTitle;
    presetButtons.forEach(button => {
      button.classList.toggle('is-active', button.dataset.twoStagePreset === state.preset);
    });
    stepButtons.forEach(button => {
      button.classList.toggle('is-active', Number(button.dataset.twoStageStep) === state.step);
    });
    const latex = `${window.LectureMath.matrix('B', B)},\\qquad ${window.LectureMath.matrix('A', A)},\\qquad ${window.LectureMath.matrix('AB', AB)}`;
    window.LectureMath.set(matrixReadout, latex);
    board.fullUpdate();
  };

  presetButtons.forEach(button => {
    button.addEventListener('click', () => {
      state.preset = button.dataset.twoStagePreset;
      update();
    });
  });
  stepButtons.forEach(button => {
    button.addEventListener('click', () => {
      state.step = Number(button.dataset.twoStageStep);
      update();
    });
  });

  update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();