(() => {
  if (!window.JXG) return;

  const B = [[1, 1], [0, 1]];
  const A = [[0, -1], [1, 0]];
  const VIEW = [-2.5, 2.5, 2.5, -2.5];
  const fixed = { fixed: true, highlight: false };

  const apply = (M, [x, y]) => [
    M[0][0] * x + M[0][1] * y,
    M[1][0] * x + M[1][1] * y
  ];

  const sameVector = ([x1, y1], [x2, y2]) => x1 === x2 && y1 === y2;
  const labelStyle = options => window.LectureJSX?.pointLabelStyle?.(options) || {
    display: 'html',
    cssClass: 'vector-label-chip',
    offset: [10, 10],
    fontSize: 14,
    ...options
  };

  const createJourney = ({ host, basis, basisName, finalColor, finalName }) => {
    if (!host) return;

    const intermediate = apply(B, basis);
    const finalVector = apply(A, intermediate);
    const board = JXG.JSXGraph.initBoard(host.id, {
      boundingbox: VIEW,
      axis: true,
      grid: false,
      keepAspectRatio: true,
      showNavigation: false,
      showCopyright: false,
      showInfobox: false,
      pan: { enabled: false },
      zoom: { enabled: false }
    });

    if (!sameVector(basis, intermediate)) {
      board.create('arrow', [[0, 0], basis], {
        strokeColor: '#aeb7c1',
        strokeWidth: 3,
        dash: 2,
        ...fixed
      });
      board.create('point', basis, {
        name: basisName,
        size: 3,
        fillColor: '#aeb7c1',
        strokeColor: '#aeb7c1',
        ...fixed,
        label: labelStyle({ offset: [8, -18], fontSize: 13 })
      });
    }

    board.create('arrow', [[0, 0], intermediate], {
      strokeColor: '#b1782b',
      strokeWidth: 4,
      dash: 2,
      ...fixed
    });
    board.create('point', intermediate, {
      name: sameVector(basis, intermediate) ? `B${basisName} = ${basisName}` : `B${basisName}`,
      size: 4,
      fillColor: '#b1782b',
      strokeColor: '#b1782b',
      ...fixed,
      label: labelStyle({ offset: [10, 12], fontSize: 14 })
    });

    board.create('arrow', [[0, 0], finalVector], {
      strokeColor: finalColor,
      strokeWidth: 5,
      ...fixed
    });
    board.create('point', finalVector, {
      name: finalName,
      size: 5,
      fillColor: finalColor,
      strokeColor: finalColor,
      ...fixed,
      label: labelStyle({ offset: [10, 12], fontSize: 14 })
    });

    window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
  };

  createJourney({
    host: document.querySelector('[data-basis-journey-e1-board]'),
    basis: [1, 0],
    basisName: 'e₁',
    finalColor: '#2f6f9f',
    finalName: '(AB)e₁'
  });

  createJourney({
    host: document.querySelector('[data-basis-journey-e2-board]'),
    basis: [0, 1],
    basisName: 'e₂',
    finalColor: '#7c8f3d',
    finalName: '(AB)e₂'
  });
})();