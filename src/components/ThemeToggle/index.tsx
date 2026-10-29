import styles from './styles.module.scss';

function isDark() {
  const theme = document.documentElement.dataset.theme;
  if (theme) {
    return theme === 'dark';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function ThemeToggle() {
  function toggle() {
    const next = isDark() ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Sem localStorage o tema vale só para esta visita.
    }
  }

  return (
    <button type="button" className={styles.toggle} onClick={toggle} aria-label="Alternar tema claro e escuro">
      <svg className="theme-icon-moon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M21 14.5A9 9 0 0 1 9.5 3a7.5 7.5 0 1 0 11.5 11.5Z" />
      </svg>
      <svg className="theme-icon-sun" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4.5" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
        </g>
      </svg>
    </button>
  );
}
