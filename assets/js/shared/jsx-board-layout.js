(() => {
  const nextFrame = () => new Promise(resolve => requestAnimationFrame(resolve));

  window.LectureJSX = window.LectureJSX || {};

  window.LectureJSX.keepBoardFitted = ({ board, host, boundingBox }) => {
    const isMiniBoard = host.classList.contains('stage-mini-board');
    const stage = host.closest('.jsx-stage') || host.parentElement;
    const observerTarget = isMiniBoard
      ? (host.closest('.stage-card') || host.parentElement)
      : stage;

    let scheduled = false;
    let resizing = false;
    let lastWidth = 0;
    let lastHeight = 0;

    /* JSXGraph may alter a bounding-box array while preserving aspect ratio.
       Clone every box before passing it to JSXGraph so lecture constants are
       never mutated between updates. */
    if (!board.__lectureBoundingBoxGuard) {
      const setBoundingBox = board.setBoundingBox.bind(board);
      board.setBoundingBox = (box, ...args) =>
        setBoundingBox(Array.isArray(box) ? [...box] : box, ...args);
      board.__lectureBoundingBoxGuard = true;
    }

    const getBoundingBox = () => {
      const value = typeof boundingBox === 'function' ? boundingBox() : boundingBox;
      return Array.isArray(value) ? [...value] : value;
    };

    const measure = () => {
      host.style.removeProperty('width');
      host.style.removeProperty('height');

      if (isMiniBoard) {
        const rect = host.getBoundingClientRect();
        return {
          width: rect.width,
          height: rect.height
        };
      }

      const rect = stage.getBoundingClientRect();
      const styles = getComputedStyle(stage);
      return {
        width: rect.width - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight),
        height: rect.height - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom)
      };
    };

    const fit = async () => {
      if (scheduled || resizing) return;
      scheduled = true;
      await nextFrame();
      scheduled = false;

      if (!stage || !host.isConnected) return;
      resizing = true;

      try {
        const measured = measure();
        const maximumWidth = isMiniBoard ? 900 : 2200;
        const maximumHeight = isMiniBoard ? 420 : 1400;
        const minimumHeight = isMiniBoard ? 180 : 240;

        const width = Math.round(Math.min(maximumWidth, Math.max(120, measured.width)));
        const height = Math.round(Math.min(maximumHeight, Math.max(minimumHeight, measured.height)));

        /* A one-pixel tolerance prevents ResizeObserver from feeding the size
           written by JSXGraph straight back into another resize operation. */
        if (Math.abs(width - lastWidth) <= 1 && Math.abs(height - lastHeight) <= 1) return;

        lastWidth = width;
        lastHeight = height;
        board.resizeContainer(width, height);
        board.setBoundingBox(getBoundingBox(), true);
        board.update();
      } finally {
        resizing = false;
      }
    };

    const observer = new ResizeObserver(() => fit());
    if (observerTarget) observer.observe(observerTarget);
    window.addEventListener('resize', fit, { passive: true });
    document.addEventListener('fullscreenchange', fit);

    fit();
    return fit;
  };
})();