(() => {
  const host = document.querySelector('[data-determinant-area-board]');
  if (!host || !window.JXG) return;

  const presets = {
    identity: {
      matrix: [[1, 0], [0, 1]],
      title: 'Identity: the area stays equal to 1',
      box: [-1.2, 2.4, 2.4, -1.2]
    },
    stretch: {
      matrix: [[2, 0], [0, 1]],
      title: 'Stretch: the unit square becomes a rectangle of area 2',
      box: [-1.2, 3.2, 2.4, -1.2]
    },
    shear: {
      matrix: [[1, 1], [0, 1]],
      title: 'Shear: the shape changes but the area stays equal to 1',
      box: [-1.2, 3.2, 2.4, -1.2]
    },
    general: {
      matrix: [[2, 1], [1, 3]],
      title: 'General example: base times perpendicular height gives area 5',
      box: [-1.2, 4.2, 4.8, -1.2]
    },
    reflection: {
      matrix: [[1, 0], [0, -1]],
      title: 'Reflection: area 1, but the orientation is reversed',
      box: [-1.2, 2.4, 1.8, -2.0]
    },
    collapse: {
      matrix: [[1, 1], [1, 1]],
      title: 'Collapse: the square is crushed to a segment of area 0',
      box: [-1.2, 3.0, 3.0, -1.2]
    }
  };

  let currentMode = 'identity';
  const current = () => presets[currentMode];
  const apply = ([x, y]) => {
    const [[a, b], [c, d]] = current().matrix;
    return [a * x + b * y, c * x + d * y];
  };
  const determinant = ([[a, b], [c, d]]) => a * d - b * c;

  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: current().box,
    axis: true,
    grid: false,
    keepaspectratio: true,
    showCopyright: false,
    showNavigation: false,
    pan: { enabled: false },
    zoom: { enabled: false }
  });

  const fixedPoint = (x, y) => board.create('point', [x, y], {
    visible: false,
    fixed: true,
    name: ''
  });

  const inputVertices = [
    fixedPoint(0, 0),
    fixedPoint(1, 0),
    fixedPoint(1, 1),
    fixedPoint(0, 1)
  ];
  const inputPolygon = board.create('polygon', inputVertices, {
    fillColor: '#7d8790',
    fillOpacity: 0.06,
    borders: { strokeColor: '#7d8790', strokeWidth: 2, dash: 2 },
    vertices: { visible: false }
  });
  inputPolygon.borders.forEach(border => border.setAttribute({ fixed: true }));

  const sourceVertices = [[0, 0], [1, 0], [1, 1], [0, 1]];
  const outputVertices = sourceVertices.map((source, index) => board.create('point', [
    () => apply(source)[0],
    () => apply(source)[1]
  ], {
    visible: false,
    fixed: true,
    name: `T${index}`
  }));

  const outputPolygon = board.create('polygon', outputVertices, {
    fillColor: '#2f6f9f',
    fillOpacity: 0.2,
    borders: { strokeColor: '#2f6f9f', strokeWidth: 3 },
    vertices: { visible: false }
  });
  outputPolygon.borders.forEach(border => border.setAttribute({ fixed: true }));

  const origin = fixedPoint(0, 0);
  const columnOnePoint = board.create('point', [
    () => current().matrix[0][0],
    () => current().matrix[1][0]
  ], { visible: false, fixed: true, name: '' });
  const columnTwoPoint = board.create('point', [
    () => current().matrix[0][1],
    () => current().matrix[1][1]
  ], { visible: false, fixed: true, name: '' });

  board.create('arrow', [origin, columnOnePoint], {
    strokeColor: '#b1782b',
    strokeWidth: 4,
    fixed: true
  });
  board.create('arrow', [origin, columnTwoPoint], {
    strokeColor: '#7c8f3d',
    strokeWidth: 4,
    fixed: true
  });

  board.create('text', [
    () => current().matrix[0][0] + 0.12,
    () => current().matrix[1][0] + 0.12,
    () => 'A e₁'
  ], {
    fixed: true,
    fontSize: 14,
    cssClass: 'vector-label-chip',
    color: '#7b511d'
  });
  board.create('text', [
    () => current().matrix[0][1] + 0.12,
    () => current().matrix[1][1] + 0.12,
    () => 'A e₂'
  ], {
    fixed: true,
    fontSize: 14,
    cssClass: 'vector-label-chip',
    color: '#536121'
  });

  const heightFoot = fixedPoint(2, 1);
  const heightTop = fixedPoint(1, 3);
  const heightSegment = board.create('segment', [heightFoot, heightTop], {
    strokeColor: '#8b5f9f',
    strokeWidth: 2,
    dash: 2,
    fixed: true,
    visible: false
  });
  const heightLabel = board.create('text', [1.38, 2.05, 'h'], {
    fixed: true,
    fontSize: 15,
    cssClass: 'vector-label-chip',
    color: '#654876',
    visible: false
  });

  const matrixReadout = document.querySelector('[data-area-factor-matrix]');
  const resultReadout = document.querySelector('[data-area-factor-result]');
  const title = document.querySelector('[data-area-factor-title]');
  const buttons = [...document.querySelectorAll('[data-area-factor-mode]')];

  let refit = () => {};
  if (window.LectureJSX?.keepBoardFitted) {
    refit = window.LectureJSX.keepBoardFitted({
      board,
      host,
      boundingBox: () => current().box
    });
  }

  const update = () => {
    const det = determinant(current().matrix);
    title.textContent = current().title;
    buttons.forEach(button => {
      button.classList.toggle('is-active', button.dataset.areaFactorMode === currentMode);
    });
    heightSegment.setAttribute({ visible: currentMode === 'general' });
    heightLabel.setAttribute({ visible: currentMode === 'general' });

    if (window.LectureMath) {
      LectureMath.set(matrixReadout, LectureMath.matrix('A', current().matrix));
      LectureMath.set(
        resultReadout,
        `\\det A=${LectureMath.formatNumber(det)},\\qquad |\\det A|=${LectureMath.formatNumber(Math.abs(det))}`
      );
    }

    board.setBoundingBox(current().box, true);
    board.update();
    refit();
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const mode = button.dataset.areaFactorMode;
      if (!presets[mode] || mode === currentMode) return;
      currentMode = mode;
      update();
    });
  });

  update();
})();