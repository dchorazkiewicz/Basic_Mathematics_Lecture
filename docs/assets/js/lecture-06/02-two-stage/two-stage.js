(() => {
  const host = document.querySelector('[data-two-stage-board]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const buttons = [...panel.querySelectorAll('[data-two-stage-mode]')];
  const title = panel.querySelector('[data-two-stage-title]');
  const equation = panel.querySelector('[data-two-stage-equation]');

  const VIEW = [-3.5, 4.5, 4.5, -2.5];
  const fixed = { fixed: true, highlight: false };
  const state = { mode: 'input' };

  const stages = {
    input: {
      vector: [2, 1],
      color: '#17324d',
      label: 'x = (2, 1)',
      title: 'Start with the input vector',
      latex: '\\mathbf x=\\begin{bmatrix}2\\\\1\\end{bmatrix}'
    },
    middle: {
      vector: [3, 1],
      color: '#b1782b',
      label: 'Bx = (3, 1)',
      title: 'Apply B: the intermediate vector is now the input for A',
      latex: 'B\\mathbf x=\\begin{bmatrix}3\\\\1\\end{bmatrix}'
    },
    final: {
      vector: [-1, 3],
      color: '#2f6f9f',
      label: 'A(Bx) = (-1, 3)',
      title: 'Apply A to Bx: this is the final output',
      latex: 'A(B\\mathbf x)=\\begin{bmatrix}-1\\\\3\\end{bmatrix}'
    }
  };

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

  const labelStyle = options => window.LectureJSX?.pointLabelStyle?.(options) || {
    display: 'html',
    cssClass: 'vector-label-chip',
    offset: [10, 10],
    fontSize: 15,
    ...options
  };

  const objects = {};

  Object.entries(stages).forEach(([key, stage]) => {
    const [x, y] = stage.vector;
    const vertical = board.create('segment', [[x, 0], [x, y]], {
      strokeColor: stage.color,
      strokeWidth: 2,
      dash: 2,
      ...fixed
    });
    const horizontal = board.create('segment', [[0, y], [x, y]], {
      strokeColor: stage.color,
      strokeWidth: 2,
      dash: 2,
      ...fixed
    });
    const arrow = board.create('arrow', [[0, 0], stage.vector], {
      strokeColor: stage.color,
      strokeWidth: 5,
      ...fixed
    });
    const point = board.create('point', stage.vector, {
      name: stage.label,
      size: 4,
      fillColor: stage.color,
      strokeColor: stage.color,
      ...fixed,
      label: labelStyle({ offset: [10, 12], fontSize: 15 })
    });

    objects[key] = { vertical, horizontal, arrow, point };
  });

  const order = ['input', 'middle', 'final'];

  const appearance = (key) => {
    if (state.mode === 'all') {
      return key === 'final'
        ? { visible: true, opacity: 1, width: 5, label: true }
        : { visible: true, opacity: 0.55, width: 4, label: true };
    }

    const selectedIndex = order.indexOf(state.mode);
    const keyIndex = order.indexOf(key);
    if (keyIndex > selectedIndex) {
      return { visible: false, opacity: 0, width: 3, label: false };
    }
    if (keyIndex === selectedIndex) {
      return { visible: true, opacity: 1, width: 6, label: true };
    }
    return { visible: true, opacity: 0.24, width: 3, label: false };
  };

  const updateObject = (key) => {
    const view = appearance(key);
    const { vertical, horizontal, arrow, point } = objects[key];

    [vertical, horizontal].forEach(line => line.setAttribute({
      visible: view.visible,
      strokeOpacity: view.opacity * 0.7,
      strokeWidth: 2
    }));
    arrow.setAttribute({
      visible: view.visible,
      strokeOpacity: view.opacity,
      strokeWidth: view.width
    });
    point.setAttribute({
      visible: view.visible,
      fillOpacity: view.opacity,
      strokeOpacity: view.opacity
    });
    point.label?.setAttribute({ visible: view.label });
  };

  const update = () => {
    order.forEach(updateObject);
    buttons.forEach(button => {
      button.classList.toggle('is-active', button.dataset.twoStageMode === state.mode);
    });

    if (state.mode === 'all') {
      title.textContent = 'All three stages on one coordinate system';
      window.LectureMath?.set(
        equation,
        `${stages.input.latex},\\qquad ${stages.middle.latex},\\qquad ${stages.final.latex}`
      );
    } else {
      title.textContent = stages[state.mode].title;
      window.LectureMath?.set(equation, stages[state.mode].latex);
    }

    board.update();
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      state.mode = button.dataset.twoStageMode;
      update();
    });
  });

  update();
  window.LectureJSX?.keepBoardFitted?.({ board, host, boundingBox: VIEW });
})();