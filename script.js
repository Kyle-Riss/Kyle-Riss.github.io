(() => {
  const root = document.documentElement;
  const btn = document.querySelector('[data-theme-toggle]');
  const STORAGE_KEY = 'yh-theme';

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const stored = (() => {
    try { return localStorage.getItem(STORAGE_KEY); }
    catch { return null; }
  })();

  let theme = stored || (prefersDark.matches ? 'dark' : 'light');

  const render = () => {
    root.setAttribute('data-theme', theme);
    if (!btn) return;
    const icon = btn.querySelector('.theme-icon');
    if (icon) icon.textContent = theme === 'dark' ? '☀' : '◐';
    btn.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
    );
  };

  render();

  btn?.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(STORAGE_KEY, theme); } catch { /* ignore */ }
    render();
  });

  if (prefersDark.addEventListener) {
    prefersDark.addEventListener('change', (e) => {
      if (stored) return;
      theme = e.matches ? 'dark' : 'light';
      render();
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
