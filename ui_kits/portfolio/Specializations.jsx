// Specializations — sticky tab bar + interactive domain panel (the core "Work" section).
const { Panel: SPanel, Pill: SPill, Badge: SBadge, Button: SButton, ProgressBar: SProgress } = window.TaeyangHanDesignSystem_01d505;
const SIcon = window.TaeyangHanDesignSystem_01d505.Icon || (({ name, size = 24, style }) => {
  const p = window.TaeyangHanDesignSystem_01d505.ICON_PATHS[name];
  return p ? <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: 'block', ...style }} dangerouslySetInnerHTML={{ __html: p }} /> : null;
});

const spStyles = {
  section: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '8px 24px 56px' },
  title: { fontFamily: 'var(--font-game)', fontWeight: 800, fontSize: 'clamp(1.35rem, 3.5vw, 1.75rem)', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '12px 0 6px', color: 'var(--ink)' },
  sub: { fontSize: 15, color: 'var(--grey-dark)', margin: '0 0 22px' },
  tabs: { display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 22, position: 'sticky', top: 60, zIndex: 20, background: 'var(--bg-primary)', padding: '10px 0' },
  tab: { display: 'inline-flex', alignItems: 'center', gap: 7, cursor: 'pointer' },
  panelGrid: { display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 20, alignItems: 'start' },
  domainHead: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 },
  emoji: { fontSize: 26 },
  dTitle: { fontFamily: 'var(--font-game)', fontWeight: 800, fontSize: 20, color: 'var(--ink)', letterSpacing: '-0.02em' },
  headline: { fontFamily: 'var(--font-game)', fontWeight: 700, fontSize: 16, color: 'var(--ink)', margin: '8px 0 6px' },
  blurb: { fontSize: 14, lineHeight: 1.6, color: 'var(--grey-dark)', margin: '0 0 14px' },
  masteryRow: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 },
  masteryLabel: { fontFamily: 'var(--font-pixel)', fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--grey-dark)', whiteSpace: 'nowrap' },
  pct: { fontFamily: 'var(--font-pixel)', fontSize: 11, color: 'var(--ink)' },
  items: { display: 'flex', flexDirection: 'column', gap: 8 },
  item: { display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: 'var(--ink)' },
  check: { color: 'var(--mint)', flexShrink: 0 },
  shot: { width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: 'var(--radius-sm)', border: '2px solid var(--ink)', display: 'block', marginBottom: 10 },
  fTitle: { fontFamily: 'var(--font-game)', fontWeight: 700, fontSize: 15, color: 'var(--ink)', margin: '2px 0' },
  fMeta: { fontSize: 12, color: 'var(--grey-dark)', lineHeight: 1.5, marginBottom: 10 },
};

function PortfolioSpecs() {
  const domains = window.PORTFOLIO.domains;
  const [active, setActive] = React.useState(domains[0].id);
  const d = domains.find((x) => x.id === active);
  return (
    <section id="specializations" style={spStyles.section}>
      <SBadge tone="ghost">★ Specializations</SBadge>
      <h2 style={spStyles.title}>What I Build &amp; Why It Matters</h2>
      <p style={spStyles.sub}>Five domains. Five years of deliberate practice. One integrated story.</p>

      <div style={spStyles.tabs}>
        {domains.map((x) => (
          <SPill key={x.id} interactive active={x.id === active} as="button" onClick={() => setActive(x.id)}>
            <span style={spStyles.tab}><SIcon name={x.icon} size={16} /> {x.tab}</span>
          </SPill>
        ))}
      </div>

      <div id={d.id} style={spStyles.panelGrid}>
        <div>
          <div style={spStyles.domainHead}>
            <span style={spStyles.emoji}>{d.emoji}</span>
            <span style={spStyles.dTitle}>{d.tab}</span>
          </div>
          <p style={spStyles.headline}>{d.headline}</p>
          <p style={spStyles.blurb}>{d.blurb}</p>
          <div style={spStyles.masteryRow}>
            <span style={spStyles.masteryLabel}>Mastery</span>
            <SProgress value={d.mastery} color={d.accent} />
            <span style={spStyles.pct}>{d.mastery}%</span>
          </div>
          <div style={spStyles.items}>
            {d.items.map((it) => (
              <span key={it} style={spStyles.item}>
                <span style={spStyles.check}><SIcon name="check" size={16} /></span>{it}
              </span>
            ))}
          </div>
        </div>

        <SPanel hoverable>
          <SBadge tone={d.accent === 'sunshine' ? 'star' : d.accent}>Featured</SBadge>
          <img style={spStyles.shot} src={`../../assets/projects/${d.featured.img}.webp`} alt={d.featured.title} />
          <p style={spStyles.fTitle}>{d.featured.title}</p>
          <p style={spStyles.fMeta}>{d.featured.meta}</p>
          <SButton variant="coral" size="small" icon={<SIcon name="external" size={15} />} iconRight>{d.featured.tag}</SButton>
        </SPanel>
      </div>
    </section>
  );
}
window.PortfolioSpecs = PortfolioSpecs;
