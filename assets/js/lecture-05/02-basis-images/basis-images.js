(() => {
  const host = document.querySelector('[data-basis-image-board]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const readout = panel.querySelector('[data-basis-matrix-readout]');
  const VIEW = [-6, 6, 6, -6];
  const fixed = { fixed: true, highlight: false };

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

  const e1Image = board.create('point', [2, 0], {
    name: 'A e₁',
    size: 5,
    fillColor: '#b1782b',
    strokeColor: '#b1782b',
    snapToGrid: true,
    snapSizeX: 0.5,
    snapSizeY: 0.5,
    label: window.LectureJSX?.pointLabelStyle?.({ offset: [10, 12], fontSize: 17 }) || {
      display: 'html', cssClass: 'vector-label-chip', offset: [10, 12], fontSize: 17
    }
  });

  const e2Image = board.create('point', [1, 1], {
    name: 'A e₂',
    size: 5,
    fillColor: '#7c8f3d',
    strokeColor: '#7c8f3d',
    snapToGrid: true,
    snapSizeX: 0.5,
    snapSizeY: 0.5,
    label: window.LectureJSX?.pointLabelStyle?.({ offset: [10, 12], fontSize: 17 }) || {
      display: 'html', cssClass: 'vector-label-chip', offset: [10, 12], fontSize: 17
    }
  });

  const matrix = () => ({
    a: e1Image.X(),
    b: e2Image.X(),
    c: e1Image.Y(),
    d: e2Image.Y()
  });

  const transform = (x, y) => {
    const { a, b, c, d } = matrix();
    return [a * x + b * y, c * x + d * y];
  };

  for (let k = -5; k <= 5; k += 1) {
    board.create('segment', [[k, -5], [k, 5]], {
      strokeColor: '#d9dee5',
      strokeWidth: 1,
      ...fixed
    });
    board.create('segment', [[-5, k], [5, k]], {
      strokeColor: '#d9dee5',
      strokeWidth: 1,
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

  const squarePoints = [
    board.create('point', [() => transform(0, 0)[0], () => transform(0, 0)[1]], { visible: false, ...fixed }),
    board.create('point', [() => transform(1, 0)[0], () => transform(1, 0)[1]], { visible: false, ...fixed }),
    board.create('point', [() => transform(1, 1)[0], () => transform(1, 1)[1]], { visible: false, ...fixed }),
    board.create('point', [() => transform(0, 1)[0], () => transform(0, 1)[1]], { visible: false, ...fixed })
  ];

  board.create('polygon', squarePoints, {
    fillColor: '#2f6f9f',
    fillOpacity: 0.18,
    borders: { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed },
    vertices: { visible: false },
    ...fixed
  });

  board.create('arrow', [[0, 0], () => [e1Image.X(), e1Image.Y()]], {
    strokeColor: '#b1782b',
    strokeWidth: 4,
    ...fixed
  });
  board.create('arrow', [[0, 0], () => [e2Image.X(), e2Image.Y()]], {
    strokeColor: '#7c8f3d',
    strokeWidth: 4,
    ...fixed
  });

  const fmt = value => {
    const rounded = Math.round(value * 2) / 2;
    return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  };

  function update() {
    const { a, b, c, d } = matrix();
    readout.textContent = `A = [[${fmt(a)}, ${fmt(b)}], [${fmt(c)}, ${fmt(d)}]]`;
    board.fullUpdate();
  }

  e1Image.on('drag', update);
  e2Image.on('drag', update);
  update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();
