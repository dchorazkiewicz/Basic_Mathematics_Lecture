(() => {
  const host = document.querySelector('[data-basis-journey-board]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const buttons = [...panel.querySelectorAll('[data-basis-journey-preset]')];
  const title = panel.querySelector('[data-basis-journey-title]');
  const matrixReadout = panel.querySelector('[data-basis-journey-matrices]');
  const VIEW = [-6, 6, 6, -6];
  const fixed = { fixed: true, highlight: false };

  const presets = {
    'shear-rotate': { B: [[1, 1], [0, 1]], A: [[0, -1], [1, 0]] },
    'stretch-shear': { B: [[2, 0], [0, 1]], A: [[1, 1], [0, 1]] },
    'reflect-rotate': { B: [[-1, 0], [0, 1]], A: [[0, -1], [1, 0]] }
  };

  const state = { preset: 'shear-rotate' };
  const apply = (M, [x, y]) => [
    M[0][0] * x + M[0][1] * y,
    M[1][0] * x + M[1][1] * y
  ];
  const multiply = (A, B) => [
    [A[0][0] * B[0][0] + A[0][1] * B[1][0], A[0][0] * B[0][1] + A[0][1] * B[1][1]],
    [A[1][0] * B[0][0] + A[1][1] * B[1][0], A[1][0] * B[0][1] + A[1][1] * B[1][1]]
  ];

  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: VIEW, axis: true, grid: true, keepAspectRatio: true,
    showNavigation: false, showCopyright: false,
    pan: { enabled: false }, zoom: { enabled: false }
  });

  const Bcol = index => {
    const B = presets[state.preset].B;
    return [B[0][index], B[1][index]];
  };
  const ABcol = index => {
    const { A } = presets[state.preset];
    return apply(A, Bcol(index));
  };

  board.create('arrow', [[0, 0], () => Bcol(0)], {
    strokeColor: '#b1782b', strokeWidth: 4, dash: 2, ...fixed
  });
  board.create('arrow', [[0, 0], () => Bcol(1)], {
    strokeColor: '#b1782b', strokeWidth: 4, dash: 2, ...fixed
  });
  board.create('arrow', [[0, 0], () => ABcol(0)], {
    strokeColor: '#2f6f9f', strokeWidth: 5, ...fixed
  });
  board.create('arrow', [[0, 0], () => ABcol(1)], {
    strokeColor: '#7c8f3d', strokeWidth: 5, ...fixed
  });

  board.create('point', [() => Bcol(0)[0], () => Bcol(0)[1]], {
    name: 'B e₁', size: 4, fillColor: '#b1782b', strokeColor: '#b1782b', ...fixed
  });
  board.create('point', [() => Bcol(1)[0], () => Bcol(1)[1]], {
    name: 'B e₂', size: 4, fillColor: '#b1782b', strokeColor: '#b1782b', ...fixed
  });
  board.create('point', [() => ABcol(0)[0], () => ABcol(0)[1]], {
    name: 'AB e₁', size: 5, fillColor: '#2f6f9f', strokeColor: '#2f6f9f', ...fixed
  });
  board.create('point', [() => ABcol(1)[0], () => ABcol(1)[1]], {
    name: 'AB e₂', size: 5, fillColor: '#7c8f3d', strokeColor: '#7c8f3d', ...fixed
  });

  const update = () => {
    const { A, B } = presets[state.preset];
    const AB = multiply(A, B);
    buttons.forEach(button => {
      button.classList.toggle('is-active', button.dataset.basisJourneyPreset === state.preset);
    });
    title.textContent = 'orange: columns of B; blue and green: columns of AB';
    window.LectureMath.set(
      matrixReadout,
      `${window.LectureMath.matrix('B', B)},\\qquad ${window.LectureMath.matrix('A', A)},\\qquad ${window.LectureMath.matrix('AB', AB)}`
    );
    board.fullUpdate();
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      state.preset = button.dataset.basisJourneyPreset;
      update();
    });
  });

  update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();