(() => {
  if (!window.JXG) return;

  const A = [[0, -1], [1, 0]];
  const B = [[1, 1], [0, 1]];
  const input = [1, 1];
  const VIEW = [-2.5, 3, 3, -1.5];
  const fixed = { fixed: true, highlight: false };

  const multiply = (L, R) => [
    [L[0][0] * R[0][0] + L[0][1] * R[1][0], L[0][0] * R[0][1] + L[0][1] * R[1][1]],
    [L[1][0] * R[0][0] + L[1][1] * R[1][0], L[1][0] * R[0][1] + L[1][1] * R[1][1]]
  ];

  const apply = (M, [x, y]) => [
    M[0][0] * x + M[0][1] * y,
    M[1][0] * x + M[1][1] * y
  ];

  const labelStyle = options => window.LectureJSX?.pointLabelStyle?.(options) || {
    display: 'html',
    cssClass: 'vector-label-chip',
    offset: [10, 10],
    fontSize: 14,
    ...options
  };

  const createComparison = ({ host, matrix, resultName, color }) => {
    if (!host) return;

    const result = apply(matrix, input);
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

    board.create('arrow', [[0, 0], input], {
      strokeColor: '#aeb7c1',
      strokeWidth: 3,
      dash: 2,
      ...fixed
    });
    board.create('point', input, {
      name: 'x = (1, 1)',
      size: 3,
      fillColor: '#aeb7c1',
      strokeColor: '#aeb7c1',
      ...fixed,
      label: labelStyle({ offset: [10, -18], fontSize: 13 })
    });

    board.create('segment', [[result[0], 0], result], {
      strokeColor: '#aeb7c1',
      strokeWidth: 2,
      dash: 2,
      ...fixed
    });
    board.create('segment', [[0, result[1]], result], {
      strokeColor: '#aeb7c1',
      strokeWidth: 2,
      dash: 2,
      ...fixed
    });
    board.create('arrow', [[0, 0], result], {
      strokeColor: color,
      strokeWidth: 5,
      ...fixed
    });
    board.create('point', result, {
      name: `${resultName} = (${result[0]}, ${result[1]})`,
      size: 5,
      fillColor: color,
      strokeColor: color,
      ...fixed,
      label: labelStyle({ offset: [10, 12], fontSize: 14 })
    });

    window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
  };

  createComparison({
    host: document.querySelector('[data-order-ab-board]'),
    matrix: multiply(A, B),
    resultName: 'ABx',
    color: '#2f6f9f'
  });

  createComparison({
    host: document.querySelector('[data-order-ba-board]'),
    matrix: multiply(B, A),
    resultName: 'BAx',
    color: '#b1782b'
  });
})();