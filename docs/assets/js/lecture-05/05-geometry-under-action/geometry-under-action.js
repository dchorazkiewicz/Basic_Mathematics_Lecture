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
    line: [-5.0, 3.5, 4.2, -3.5],
    parallel: [-4.5, 4.0, 5.0, -3.2],
    triangle: [-4.2, 3.3, 3.8, -3.0],
    square: [-0.8, 2.4, 3.0, -0.8]
  };

  const apply = ([x, y]) => [x + y, y];
  const add = ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2];
  const scale = (s, [x, y]) => [s * x, s * y];
  const linePoint = (base, direction, t) => add(base, scale(t, direction));

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
  const register = (mode, object) => {
    groups[mode].push(object);
    return object;
  };

  const segment = (mode, start, end, attrs = {}) => register(
    mode,
    board.create('segment', [start, end], { ...fixed, ...attrs })
  );

  const arrow = (mode, start, end, attrs = {}) => segment(mode, start, end, {
    lastArrow: true,
    ...attrs
  });

  const text = (mode, position, value, attrs = {}) => register(
    mode,
    board.create('text', [position[0], position[1], value], {
      ...fixed,
      display: 'html',
      cssClass: 'vector-label-chip',
      fontSize: 14,
      ...attrs
    })
  );

  const point = (mode, coordinates, name, attrs = {}) => register(
    mode,
    board.create('point', coordinates, {
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
    })
  );

  const polygon = (mode, vertices, attrs) => {
    const constructionPoints = vertices.map(coordinates => board.create('point', coordinates, {
      visible: false,
      withLabel: false,
      ...fixed
    }));
    const shape = register(mode, board.create('polygon', constructionPoints, {
      ...fixed,
      vertices: { visible: false },
      ...attrs
    }));
    shape.borders.forEach(border => groups[mode].push(border));
    return shape;
  };

  const drawParametricLine = ({ mode, base, direction, parameters, attrs }) => {
    const [from, to] = parameters;
    return segment(
      mode,
      linePoint(base, direction, from),
      linePoint(base, direction, to),
      attrs
    );
  };

  const inputStyle = { strokeColor: '#aeb7c1', strokeWidth: 3, dash: 2 };
  const outputStyle = { strokeColor: '#2f6f9f', strokeWidth: 4 };
  const inputPointStyle = { fillColor: '#6f7882', strokeColor: '#6f7882' };
  const outputPointStyle = { fillColor: '#2f6f9f', strokeColor: '#2f6f9f' };
  const directionStyle = { strokeColor: '#b1782b', strokeWidth: 5 };
  const transformedDirectionStyle = { strokeColor: '#7c8f3d', strokeWidth: 5 };

  const p = [-2, -1];
  const v = [1, 2];
  const Ap = apply(p);
  const Av = apply(v);
  const pPlusV = add(p, v);
  const ApPlusAv = add(Ap, Av);

  drawParametricLine({ mode: 'line', base: p, direction: v, parameters: [-1, 2], attrs: inputStyle });
  drawParametricLine({ mode: 'line', base: Ap, direction: Av, parameters: [-0.5, 1.7], attrs: outputStyle });
  point('line', p, 'p', { ...inputPointStyle, label: { offset: [10, -18] } });
  point('line', Ap, 'Ap', { ...outputPointStyle, label: { offset: [-36, -18] } });
  arrow('line', p, pPlusV, directionStyle);
  arrow('line', Ap, ApPlusAv, transformedDirectionStyle);
  point('line', pPlusV, 'p + v', {
    fillColor: '#b1782b', strokeColor: '#b1782b', label: { offset: [-54, 12] }
  });
  point('line', ApPlusAv, 'Ap + Av', {
    fillColor: '#7c8f3d', strokeColor: '#7c8f3d', label: { offset: [10, 12] }
  });

  /* Parallel-lines mode: only the two families and one direction sample per family. */
  const parallelBases = [[-3, -2], [-2, 1]];
  parallelBases.forEach(base => {
    drawParametricLine({
      mode: 'parallel',
      base,
      direction: v,
      parameters: [-0.55, 2.45],
      attrs: { strokeColor: '#aeb7c1', strokeWidth: 2.5, dash: 2 }
    });
    drawParametricLine({
      mode: 'parallel',
      base: apply(base),
      direction: Av,
      parameters: [-0.25, 1.95],
      attrs: { strokeColor: '#2f6f9f', strokeWidth: 3.5 }
    });
  });

  const vStart = [-3.75, -2.65];
  const vEnd = add(vStart, scale(0.58, v));
  arrow('parallel', vStart, vEnd, { strokeColor: '#8d969f', strokeWidth: 3.5 });
  text('parallel', add(vEnd, [0.08, 0.12]), 'v', { color: '#6f7882' });

  const AvStart = [1.55, -2.45];
  const AvEnd = add(AvStart, scale(0.45, Av));
  arrow('parallel', AvStart, AvEnd, { strokeColor: '#2f6f9f', strokeWidth: 3.5 });
  text('parallel', add(AvEnd, [0.08, 0.12]), 'Av', { color: '#2f6f9f' });

  const triangle = [[-3, -2], [-1.2, 2.2], [1.1, -2]];
  const transformedTriangle = triangle.map(apply);
  polygon('triangle', triangle, {
    fillColor: '#aeb7c1', fillOpacity: 0.1,
    borders: { ...fixed, ...inputStyle }
  });
  polygon('triangle', transformedTriangle, {
    fillColor: '#2f6f9f', fillOpacity: 0.22,
    borders: { ...fixed, ...outputStyle }
  });
  ['p', 'q', 'r'].forEach((name, index) => {
    point('triangle', triangle[index], name, inputPointStyle);
    point('triangle', transformedTriangle[index], `A${name}`, outputPointStyle);
  });

  const square = [[0, 0], [1, 0], [1, 1], [0, 1]];
  const transformedSquare = square.map(apply);
  const Ae1 = apply([1, 0]);
  const Ae2 = apply([0, 1]);
  polygon('square', square, {
    fillColor: '#aeb7c1', fillOpacity: 0.12,
    borders: { ...fixed, ...inputStyle }
  });
  polygon('square', transformedSquare, {
    fillColor: '#b1782b', fillOpacity: 0.25,
    borders: { ...fixed, strokeColor: '#b1782b', strokeWidth: 4 }
  });
  arrow('square', [0, 0], Ae1, { strokeColor: '#2f6f9f', strokeWidth: 4 });
  arrow('square', [0, 0], Ae2, { strokeColor: '#7c8f3d', strokeWidth: 4 });
  point('square', Ae1, 'Ae₁', { fillColor: '#2f6f9f', strokeColor: '#2f6f9f' });
  point('square', Ae2, 'Ae₂', { fillColor: '#7c8f3d', strokeColor: '#7c8f3d' });

  const descriptions = {
    line: {
      title: 'One point and one direction determine the complete line',
      latex: '(\\mathbf p+t\\mathbf v)\\mapsto A\\mathbf p+tA\\mathbf v'
    },
    parallel: {
      title: 'The same input direction becomes the same output direction',
      latex: '\\text{direction }\\mathbf v\\quad\\mapsto\\quad\\text{direction }A\\mathbf v'
    },
    triangle: {
      title: 'Every output vertex is the image of the matching input vertex',
      latex: '(\\mathbf p,\\mathbf q,\\mathbf r)\\mapsto(A\\mathbf p,A\\mathbf q,A\\mathbf r)'
    },
    square: {
      title: 'The image is generated by the two transformed basis vectors',
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