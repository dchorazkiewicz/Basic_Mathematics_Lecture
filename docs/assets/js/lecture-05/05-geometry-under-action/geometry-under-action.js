(() => {
  const host = document.querySelector('[data-geometry-action-board]');
  if (!host || !window.JXG) return;

  const panel = host.closest('[data-fullscreen-panel]');
  const buttons = [...panel.querySelectorAll('[data-geometry-mode]')];
  const title = panel.querySelector('[data-geometry-title]');
  const equation = panel.querySelector('[data-geometry-equation]');
  const fixed = { fixed: true, highlight: false };
  const state = { mode: 'line' };

  const views = {
    line: [-4.5, 3.8, 4.8, -3.8],
    parallel: [-4.2, 3.6, 5.0, -3.6],
    triangle: [-4.2, 3.3, 3.8, -3.0],
    square: [-0.8, 2.4, 3.0, -0.8]
  };

  const apply = ([x, y]) => [x + y, y];
  const board = JXG.JSXGraph.initBoard(host.id, {
    boundingbox: views.line,
    axis: true,
    grid: false,
    keepAspectRatio: true,
    showNavigation: false,
    showCopyright: false,
    showInfobox: false,
    pan: { enabled: false },
    zoom: { enabled: false }
  });

  const groups = { line: [], parallel: [], triangle: [], square: [] };
  const add = (mode, object) => {
    groups[mode].push(object);
    return object;
  };

  const segment = (mode, p, q, attrs) => add(mode, board.create('segment', [p, q], {
    ...fixed,
    ...attrs
  }));

  const point = (mode, p, name, attrs) => add(mode, board.create('point', p, {
    name,
    size: 4,
    ...fixed,
    ...attrs,
    label: {
      display: 'html',
      cssClass: 'vector-label-chip',
      offset: [8, 10],
      fontSize: 14,
      ...(attrs.label || {})
    }
  }));

  const polygon = (mode, vertices, attrs) => {
    const constructionPoints = vertices.map(p => board.create('point', p, {
      visible: false,
      withLabel: false,
      ...fixed
    }));
    const poly = add(mode, board.create('polygon', constructionPoints, {
      ...fixed,
      vertices: { visible: false },
      ...attrs
    }));
    poly.borders.forEach(border => groups[mode].push(border));
    return poly;
  };

  // One input line and one transformed line.
  const p = [-2.2, -1.1];
  const v = [1, 1];
  const Ap = apply(p);
  const Av = apply(v);
  segment('line', [-4.2, -3.1], [2.8, 3.9], {
    strokeColor: '#aeb7c1', strokeWidth: 3, dash: 2
  });
  segment('line', [-4.2, -2.1], [4.8, 2.4], {
    strokeColor: '#2f6f9f', strokeWidth: 4
  });
  point('line', p, 'p', { fillColor: '#6f7882', strokeColor: '#6f7882' });
  point('line', Ap, 'Ap', { fillColor: '#2f6f9f', strokeColor: '#2f6f9f' });
  segment('line', p, [p[0] + v[0], p[1] + v[1]], {
    strokeColor: '#b1782b', strokeWidth: 4, lastArrow: true
  });
  segment('line', Ap, [Ap[0] + Av[0], Ap[1] + Av[1]], {
    strokeColor: '#7c8f3d', strokeWidth: 4, lastArrow: true
  });

  // Two representative parallel input lines and their two images.
  [-1.2, 1.2].forEach(offset => {
    const start = [-3.6, -2.6 + offset];
    const end = [2.4, 3.4 + offset];
    segment('parallel', start, end, {
      strokeColor: '#aeb7c1', strokeWidth: 2.8, dash: 2
    });
    segment('parallel', apply(start), apply(end), {
      strokeColor: '#2f6f9f', strokeWidth: 3.5
    });
  });
  segment('parallel', [0, 0], v, {
    strokeColor: '#b1782b', strokeWidth: 4, lastArrow: true
  });
  segment('parallel', [0, 0], Av, {
    strokeColor: '#7c8f3d', strokeWidth: 4, lastArrow: true
  });
  point('parallel', v, 'v', { fillColor: '#b1782b', strokeColor: '#b1782b' });
  point('parallel', Av, 'Av', { fillColor: '#7c8f3d', strokeColor: '#7c8f3d' });

  // Triangle and its image fill most of the viewport.
  const triangle = [[-3, -2], [-1.2, 2.2], [1.1, -2]];
  const transformedTriangle = triangle.map(apply);
  polygon('triangle', triangle, {
    fillColor: '#aeb7c1', fillOpacity: 0.1,
    borders: { strokeColor: '#aeb7c1', strokeWidth: 3, dash: 2, ...fixed }
  });
  polygon('triangle', transformedTriangle, {
    fillColor: '#2f6f9f', fillOpacity: 0.22,
    borders: { strokeColor: '#2f6f9f', strokeWidth: 4, ...fixed }
  });
  ['p', 'q', 'r'].forEach((name, i) => {
    point('triangle', triangle[i], name, { fillColor: '#6f7882', strokeColor: '#6f7882' });
    point('triangle', transformedTriangle[i], `A${name}`, {
      fillColor: '#2f6f9f', strokeColor: '#2f6f9f'
    });
  });

  // Tight view around the unit square and its image.
  const square = [[0, 0], [1, 0], [1, 1], [0, 1]];
  const transformedSquare = square.map(apply);
  polygon('square', square, {
    fillColor: '#aeb7c1', fillOpacity: 0.12,
    borders: { strokeColor: '#aeb7c1', strokeWidth: 3, dash: 2, ...fixed }
  });
  polygon('square', transformedSquare, {
    fillColor: '#b1782b', fillOpacity: 0.25,
    borders: { strokeColor: '#b1782b', strokeWidth: 4, ...fixed }
  });
  segment('square', [0, 0], apply([1, 0]), {
    strokeColor: '#2f6f9f', strokeWidth: 4, lastArrow: true
  });
  segment('square', [0, 0], apply([0, 1]), {
    strokeColor: '#7c8f3d', strokeWidth: 4, lastArrow: true
  });
  point('square', apply([1, 0]), 'Ae₁', {
    fillColor: '#2f6f9f', strokeColor: '#2f6f9f'
  });
  point('square', apply([0, 1]), 'Ae₂', {
    fillColor: '#7c8f3d', strokeColor: '#7c8f3d'
  });

  const descriptions = {
    line: {
      title: 'One input line and one transformed line',
      latex: 'A(\\mathbf p+t\\mathbf v)=A\\mathbf p+tA\\mathbf v'
    },
    parallel: {
      title: 'Two input lines receive the same new direction',
      latex: '\\mathbf v\\mapsto A\\mathbf v\\quad\\Longrightarrow\\quad\\text{parallel lines remain parallel}'
    },
    triangle: {
      title: 'Transform the three vertices, then reconnect them',
      latex: '(\\mathbf p,\\mathbf q,\\mathbf r)\\mapsto(A\\mathbf p,A\\mathbf q,A\\mathbf r)'
    },
    square: {
      title: 'The unit square becomes the parallelogram generated by the columns',
      latex: '\\mathbf e_1\\mapsto A\\mathbf e_1,\\qquad\\mathbf e_2\\mapsto A\\mathbf e_2'
    }
  };

  const update = mode => {
    state.mode = mode;
    Object.entries(groups).forEach(([groupMode, objects]) => {
      const visible = groupMode === mode;
      objects.forEach(object => object.setAttribute({ visible }));
    });
    buttons.forEach(button => {
      button.classList.toggle('is-active', button.dataset.geometryMode === mode);
    });
    title.textContent = descriptions[mode].title;
    window.LectureMath?.set(equation, descriptions[mode].latex);
    board.setBoundingBox([...views[mode]], true);
    board.update();
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => update(button.dataset.geometryMode));
  });

  update('line');
  window.LectureJSX?.keepBoardFitted?.({
    board,
    host,
    boundingBox: () => views[state.mode]
  });
})();