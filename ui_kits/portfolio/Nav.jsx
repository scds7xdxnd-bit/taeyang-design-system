// Portfolio nav — fixed bar, logo lockup, links, theme + lang toggles.
const navStyles = {
  bar: { position: 'sticky', top: 0, zIndex: 100, background: 'color-mix(in srgb, var(--bg-primary) 82%, transparent)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', borderBottom: 'var(--border-thick)' },
  inner: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', gap: 16 },
  brand: { display: 'flex', alignItems: 'center', gap: 10, marginRight: 'auto', textDecoration: 'none' },
  mark: { width: 34, height: 34, borderRadius: 8 },
  word: { fontFamily: 'var(--font-game)', fontWeight: 800, fontSize: 17, letterSpacing: '-0.02em', color: 'var(--ink)' },
  links: { display: 'flex', alignItems: 'center', gap: 26 },
  link: { fontFamily: 'var(--font-game)', fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', cursor: 'pointer', background: 'none', border: 'none', padding: 0 },
  toggle: { borderRadius: 'var(--radius-pill)', border: '2px solid var(--ink)', background: 'transparent', height: 34, padding: '0 12px', fontSize: 12, fontWeight: 700, color: 'var(--ink)', cursor: 'pointer', fontFamily: 'var(--font-body)' },
  iconBtn: { width: 34, height: 34, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-sm)', border: '2px solid var(--ink)', background: 'transparent', color: 'var(--ink)', cursor: 'pointer', fontSize: 15 },
};

function PortfolioNav({ theme, onToggleTheme }) {
  const links = [['About', '#hero'], ['Work', '#specializations'], ['Opinions', '#opinions'], ['Contact', '#contact']];
  const go = (h) => { const el = document.querySelector(h); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  return (
    <nav style={navStyles.bar}>
      <div style={navStyles.inner}>
        <a style={navStyles.brand} onClick={(e) => { e.preventDefault(); go('#hero'); }} href="#hero">
          <img style={navStyles.mark} src="../../assets/logo/favicon.svg" alt="" />
          <span style={navStyles.word}>Taeyang Han</span>
        </a>
        <div className="pf-nav-links" style={navStyles.links}>
          {links.map(([label, h]) => (
            <button key={h} style={navStyles.link} onClick={() => go(h)}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}>{label}</button>
          ))}
        </div>
        <button style={navStyles.iconBtn} aria-label="Toggle theme" onClick={onToggleTheme}>{theme === 'dark' ? '☀' : '◐'}</button>
        <button style={navStyles.toggle}>EN&nbsp;·&nbsp;中文&nbsp;·&nbsp;한국어</button>
      </div>
    </nav>
  );
}
window.PortfolioNav = PortfolioNav;
