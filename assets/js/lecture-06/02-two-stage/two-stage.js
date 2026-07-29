(() => {
  if (!window.JXG) return;

  const stages = [
    {
      host: document.querySelector('[data-two-stage-input-board]'),
      vector: [2, 1],
      color: '#17324d',
      label: 'x = (2, 1)'
    },
    {
      host: document.querySelector('[data-two-stage-middle-board]'),
      vector: [3, 1],
      color: '#b1782b',
      label: 'Bx = (3, 1)'
    },
    {
      host: document.querySelector('[data-two-stage-final-board]'),
      vector: [-1, 3],
      color: '#2f6f9f',
      label: 'A(Bx) = (-1, 3)'
    }
  ];

  const VIEW = [-3.5, 4.5, 4.5, -2.5];
  const fixed = { fixed: true, highlight: false };
  const labelStyle = options => window.LectureJSX?.pointLabelStyle?.(options) || {
    display: 'html',
    cssClass: 'vector-label-chip',
    offset: [10, 10],
    fontSize: 15,
    ...options
  };

  const createStage = ({ host, vector, color, label }) => {
    if (!host) return;

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

    const [x, y] = vector;

    board.create('segment', [[x, 0], [x, y]], {
      strokeColor: '#aeb7c1',
      strokeWidth: 2,
      dash: 2,
      ...fixed
    });
    board.create('segment', [[0, y], [x, y]], {
      strokeColor: '#aeb7c1',
      strokeWidth: 2,
      dash: 2,
      ...fixed
    });
    board.create('arrow', [[0, 0], vector], {
      strokeColor: color,
      strokeWidth: 5,
      ...fixed
    });
    board.create('point', vector, {
      name: label,
      size: 4,
      fillColor: color,
      strokeColor: color,
      ...fixed,
      label: labelStyle({ offset: [10, 12], fontSize: 15 })
    });

    window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
  };

  stages.forEach(createStage);
})();