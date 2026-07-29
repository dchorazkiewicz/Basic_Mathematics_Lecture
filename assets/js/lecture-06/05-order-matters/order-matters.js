(() => {
  const host = document.querySelector('[data-order-matters-board]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const buttons = [...panel.querySelectorAll('[data-order-mode]')];
  const title = panel.querySelector('[data-order-title]');
  const matrixReadout = panel.querySelector('[data-order-matrix]');
  const VIEW = [-7, 6, 7, -6];
  const fixed = { fixed: true, highlight: false };

  const A = [[0, -1], [1, 0]];
  const B = [[1, 1], [0, 1]];
  const state = { mode: 'AB' };

  const multiply = (L, R) => [
    [L[0][0] * R[0][0] + L[0][1] * R[1][0], L[0][0] * R[0][1] + L[0][1] * R[1][1]],
    [L[1][0] * R[0][0] + L[1][1] * R[1][0], L[1][0] * R[0][1] + L[1][1] * R[1][1]]
  ];
  const apply = (M, [x, y]) => [
    M[0][0] * x + M[0][1] * y,
    M[1][0] * x + M[1][1] * y
  ];
  const currentMatrix = () => state.mode === 'AB' ? multiply(A, B) : multiply(B, A);

  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: VIEW, axis: true, grid: false, keepAspectRatio: true,
    showNavigation: false, showCopyright: false,
    pan: { enabled: false }, zoom: { enabled: false }
  });

  for (let k = -5; k <= 5; k += 1) {
    board.create('segment', [[k, -5], [k, 5]], {
      strokeColor: '#d9dee5', strokeWidth: 1, dash: 2, ...fixed
    });
    board.create('segment', [[-5, k], [5, k]], {
      strokeColor: '#d9dee5', strokeWidth: 1, dash: 2, ...fixed
    });
    board.create('curve', [
      t => apply(currentMatrix(), [k, t])[0],
      t => apply(currentMatrix(), [k, t])[1],
      -5, 5
    ], { strokeColor: '#7fa9c8', strokeWidth: k === 0 ? 3 : 1.5, ...fixed });
    board.create('curve', [
      t => apply(currentMatrix(), [t, k])[0],
      t => apply(currentMatrix(), [t, k])[1],
      -5, 5
    ], { strokeColor: '#7fa9c8', strokeWidth: k === 0 ? 3 : 1.5, ...fixed });
  }

  const house = [
    [-1.5, -1.5], [1.5, -1.5], [1.5, 1], [0, 2.5],
    [-1.5, 1], [-1.5, -1.5], [1.5, 1], [-1.5, 1]
  ];
  for (let i = 0; i < house.length - 1; i += 1) {
    board.create('segment', [house[i], house[i + 1]], {
      strokeColor: '#aeb7c1', strokeWidth: 2, dash: 2, ...fixed
    });
    board.create('segment', [
      () => apply(currentMatrix(), house[i]),
      () => apply(currentMatrix(), house[i + 1])
    ], { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed });
  }

  const update = () => {
    const M = currentMatrix();
    buttons.forEach(button => {
      button.classList.toggle('is-active', button.dataset.orderMode === state.mode);
    });
    title.textContent = state.mode === 'AB'
      ? 'first shear, then rotate'
      : 'first rotate, then shear';
    window.LectureMath.set(matrixReadout, window.LectureMath.matrix(state.mode, M));
    board.fullUpdate();
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      state.mode = button.dataset.orderMode;
      update();
    });
  });

  update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();