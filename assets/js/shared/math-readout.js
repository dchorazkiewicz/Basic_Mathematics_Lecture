(() => {
  const formatNumber = value => {
    const rounded = Math.abs(value) < 1e-10 ? 0 : Math.round(value * 100) / 100;
    if (Number.isInteger(rounded)) return String(rounded);
    return String(rounded).replace(/(\.\d*?[1-9])0+$/, '$1').replace(/\.0+$/, '');
  };

  const matrixBody = matrix => {
    const [[a, b], [c, d]] = matrix;
    return `\\begin{bmatrix}${formatNumber(a)}&${formatNumber(b)}\\\\${formatNumber(c)}&${formatNumber(d)}\\end{bmatrix}`;
  };

  const matrix = (name, values) => `${name}=${matrixBody(values)}`;

  const set = (target, latex, delay = 20) => {
    if (!target) return;
    target.dataset.mathSource = latex;
    window.clearTimeout(target._lectureMathTimer);
    target._lectureMathTimer = window.setTimeout(() => {
      const source = target.dataset.mathSource;
      if (!source) return;
      window.MathJax?.typesetClear?.([target]);
      target.textContent = `\\(${source}\\)`;
      const promise = window.MathJax?.typesetPromise?.([target]);
      promise?.catch?.(() => {
        target.textContent = source;
      });
    }, delay);
  };

  window.LectureMath = { formatNumber, matrixBody, matrix, set };
})();