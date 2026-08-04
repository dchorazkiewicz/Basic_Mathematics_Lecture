(() => {
  const host = document.querySelector('[data-singular-collapse-board]');
  if (!host || !window.JXG) return;

  const modes = {
    square: {
      title: 'The unit square collapses to a segment',
      equation: 'S\\begin{bmatrix}s\\\\t\\end{bmatrix}=(s+t)\\begin{bmatrix}1\\\\1\\end{bmatrix}',
      box: [-0.8, 2.8, 2.8, -0.8]
    },
    'same-output': {
      title: 'Two different inputs produce the same output',
      equation: 'S\\begin{bmatrix}1\\\\0\\end{bmatrix}=S\\begin{bmatrix}0\\\\1\\end{bmatrix}=\\begin{bmatrix}1\\\\1\\end{bmatrix}',
      box: [-0.8, 2.2, 2.2, -0.8]
    },
    kernel: {
      title: 'A nonzero direction disappears completely',
      equation: 'S\\begin{bmatrix}1\\\\-1\\end{bmatrix}=\\begin{bmatrix}0\\\\0\\end{bmatrix}',
      box: [-0.8, 2.2, 1.5, -1.8]
    }
  };

  let currentMode = 'square';
  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: modes[currentMode].box,
    axis: true,
    grid: false,
    keepaspectratio: true,
    showCopyright: false,
    showNavigation: false,
    pan: { enabled: false },
    zoom: { enabled: false }
  });

  const collections = {};
  const add = (mode, object) => {
    collections[mode] = collections[mode] || [];
    collections[mode].push(object);
    return object;
  };
  const point = (x, y, attributes = {}) => board.create('point', [x, y], {
    name: '',
    fixed: true,
    size: 3,
    ...attributes
  });
  const hiddenPoint = (x, y) => point(x, y, { visible: false });
  const text = (mode, x, y, value, color) => add(mode, board.create('text', [x, y, value], {
    fixed: true,
    fontSize: 14,
    cssClass: 'vector-label-chip',
    color,
    visible: false
  }));

  const s0 = hiddenPoint(0, 0);
  const s1 = hiddenPoint(1, 0);
  const s2 = hiddenPoint(1, 1);
  const s3 = hiddenPoint(0, 1);
  const squarePolygon = add('square', board.create('polygon', [s0, s1, s2, s3], {
    fillColor: '#7d8790',
    fillOpacity: 0.06,
    borders: { strokeColor: '#7d8790', strokeWidth: 2, dash: 2 },
    vertices: { visible: false },
    visible: false
  }));
  squarePolygon.borders.forEach(border => add('square', border));
  const segmentStart = hiddenPoint(0, 0);
  const segmentEnd = hiddenPoint(2, 2);
  add('square', board.create('segment', [segmentStart, segmentEnd], {
    strokeColor: '#2f6f9f',
    strokeWidth: 6,
    fixed: true,
    visible: false
  }));
  text('square', 0.28, 1.12, 'input square', '#59636d');
  text('square', 1.4, 1.65, 'image segment', '#244f73');

  const origin = hiddenPoint(0, 0);
  const p = hiddenPoint(1, 0);
  const q = hiddenPoint(0, 1);
  const common = hiddenPoint(1, 1);
  add('same-output', board.create('arrow', [origin, p], {
    strokeColor: '#b1782b', strokeWidth: 4, fixed: true, visible: false
  }));
  add('same-output', board.create('arrow', [origin, q], {
    strokeColor: '#7c8f3d', strokeWidth: 4, fixed: true, visible: false
  }));
  add('same-output', board.create('arrow', [origin, common], {
    strokeColor: '#2f6f9f', strokeWidth: 5, fixed: true, visible: false
  }));
  text('same-output', 1.08, -0.1, 'p', '#7b511d');
  text('same-output', -0.15, 1.08, 'q', '#536121');
  text('same-output', 1.1, 1.12, 'S p = S q', '#244f73');

  const kernelEnd = hiddenPoint(1, -1);
  add('kernel', board.create('arrow', [origin, kernelEnd], {
    strokeColor: '#b1782b', strokeWidth: 5, fixed: true, visible: false
  }));
  add('kernel', point(0, 0, {
    size: 6,
    face: 'o',
    fillColor: '#2f6f9f',
    strokeColor: '#2f6f9f',
    visible: false
  }));
  text('kernel', 1.1, -1.1, 'v ≠ 0', '#7b511d');
  text('kernel', 0.15, 0.2, 'S v = 0', '#244f73');

  const title = document.querySelector('[data-collapse-title]');
  const equation = document.querySelector('[data-collapse-equation]');
  const buttons = [...document.querySelectorAll('[data-collapse-mode]')];

  let refit = () => {};
  if (window.LectureJSX?.keepBoardFitted) {
    refit = window.LectureJSX.keepBoardFitted({
      board,
      host,
      boundingBox: () => modes[currentMode].box
    });
  }

  const update = () => {
    Object.entries(collections).forEach(([mode, objects]) => {
      objects.forEach(object => object.setAttribute({ visible: mode === currentMode }));
    });
    buttons.forEach(button => {
      button.classList.toggle('is-active', button.dataset.collapseMode === currentMode);
    });
    title.textContent = modes[currentMode].title;
    if (window.LectureMath) LectureMath.set(equation, modes[currentMode].equation);
    board.setBoundingBox(modes[currentMode].box, true);
    board.update();
    refit();
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const mode = button.dataset.collapseMode;
      if (!modes[mode] || mode === currentMode) return;
      currentMode = mode;
      update();
    });
  });

  update();
})();