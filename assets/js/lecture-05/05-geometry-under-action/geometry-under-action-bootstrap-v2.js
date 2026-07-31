(() => {
  const host = document.querySelector('[data-geometry-action-board-v2]');
  if (!host) return;

  host.setAttribute('data-geometry-action-board', '');

  const script = document.createElement('script');
  script.src = '../../assets/js/lecture-05/05-geometry-under-action/geometry-under-action-v2.js?v=2';
  script.defer = true;
  document.head.appendChild(script);
})();