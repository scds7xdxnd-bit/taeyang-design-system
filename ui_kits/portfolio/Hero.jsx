// Hero — "Game Start Screen": player-profile panel + current-quests panel + build strip.
const { Panel: HPanel, Badge: HBadge, Button: HButton, QuestRow: HQuestRow } = window.TaeyangHanDesignSystem_01d505;
const HIcon = window.TaeyangHanDesignSystem_01d505.Icon || (({ name, size = 24, style }) => {
  const p = window.TaeyangHanDesignSystem_01d505.ICON_PATHS[name];
  return p ? <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: 'block', ...style }} dangerouslySetInnerHTML={{ __html: p }} /> : null;
});

const heroStyles = {
  wrap: { position: 'relative', padding: '40px 24px 48px', overflow: 'hidden' },
  bg: { position: 'absolute', inset: 0, zIndex: 0, backgroundImage: 'linear-gradient(180deg, color-mix(in srgb, var(--sky) 22%, var(--bg-primary)) 0%, var(--bg-primary) 55%)', },
  inner: { position: 'relative', zIndex: 1, maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24, alignItems: 'start' },
  top: { display: 'flex', gap: 16, alignItems: 'flex-start' },
  avatar: { position: 'relative', flexShrink: 0 },
  img: { width: 96, height: 96, borderRadius: 'var(--radius-md)', border: 'var(--border-thick)', objectFit: 'cover', display: 'block' },
  lvl: { position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-pixel)', fontSize: 8, background: 'var(--ink)', color: 'var(--sunshine)', padding: '3px 6px', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap' },
  hello: { fontFamily: 'var(--font-hand)', fontSize: 22, color: 'var(--grey-dark)', lineHeight: 1 },
  greeting: { fontFamily: 'var(--font-game)', fontSize: 'clamp(1.35rem, 3vw, 1.75rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', margin: '2px 0 6px', color: 'var(--ink)' },
  name: { color: 'var(--coral)' },
  roles: { display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 10 },
  role: { fontFamily: 'var(--font-game)', fontSize: 13, fontWeight: 600, color: 'var(--grey-dark)' },
  stats: { display: 'flex', gap: 22, margin: '4px 0 4px' },
  stat: { display: 'flex', flexDirection: 'column' },
  statLabel: { fontSize: 11, color: 'var(--grey-dark)' },
  statVal: { fontFamily: 'var(--font-game)', fontWeight: 800, fontSize: 20, color: 'var(--ink)' },
  speech: { position: 'relative', background: 'var(--bg-panel)', border: 'var(--border-thick)', borderRadius: 'var(--radius-md)', padding: '14px 16px', boxShadow: 'var(--shadow-offset-sm)' },
  speechP: { fontFamily: 'var(--font-hand)', fontSize: 20, fontWeight: 600, lineHeight: 1.4, color: 'var(--ink)', margin: 0 },
  actions: { display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 4 },
  strip: { position: 'relative', zIndex: 1, maxWidth: 'var(--container-max)', margin: '28px auto 0', padding: '14px 20px', textAlign: 'center', fontFamily: 'var(--font-pixel)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--ink)', borderTop: 'var(--border-thin)', borderBottom: 'var(--border-thin)' },
  stripChip: { display: 'inline-block', padding: '2px 10px', background: 'var(--sunshine)', border: '2px solid var(--ink)', borderRadius: 'var(--radius-pill)', margin: '0 4px' },
};

function PortfolioHero({ onCopyEmail, copied }) {
  const quests = window.PORTFOLIO.quests;
  return (
    <header id="hero" style={heroStyles.wrap}>
      <div style={heroStyles.bg} aria-hidden="true" />
      <div style={heroStyles.inner}>
        <HPanel title="Player Profile" headerRight={<HBadge tone="mint">Building</HBadge>}>
          <div style={heroStyles.top}>
            <div style={heroStyles.avatar}>
              <img style={heroStyles.img} src="../../assets/img/hero-sm.webp" alt="Portrait of Taeyang Han" />
              <span style={heroStyles.lvl}>LVL.24</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <span style={heroStyles.hello}>👋 Hi</span>
              <h1 style={heroStyles.greeting}>I'm <span style={heroStyles.name}>Taeyang Han</span></h1>
              <div style={heroStyles.roles}>
                <span style={heroStyles.role}>Systems Builder</span>
                <span style={heroStyles.role}>Language Explorer</span>
                <span style={heroStyles.role}>Life Designer</span>
              </div>
              <div style={heroStyles.stats}>
                <span style={heroStyles.stat}><span style={heroStyles.statVal}>5</span><span style={heroStyles.statLabel}>Languages</span></span>
                <span style={heroStyles.stat}><span style={heroStyles.statVal}>30+</span><span style={heroStyles.statLabel}>Certificates</span></span>
                <span style={heroStyles.stat}><span style={heroStyles.statVal}>5yrs</span><span style={heroStyles.statLabel}>Building</span></span>
              </div>
            </div>
          </div>
          <div style={heroStyles.speech}>
            <p style={heroStyles.speechP}>I build fun, practical systems that help people learn, live better, and chase big goals.</p>
          </div>
          <div style={heroStyles.actions}>
            <HButton variant="primary" onClick={() => document.querySelector('#specializations').scrollIntoView({ behavior: 'smooth' })}>Start Quest</HButton>
            <HButton variant="secondary" onClick={onCopyEmail}>{copied ? 'Copied ✓' : 'Copy Email'}</HButton>
            <HButton variant="ghost">Download CV</HButton>
          </div>
        </HPanel>

        <aside>
          <HPanel title="Current Quests" variant="quests">
            {quests.map((q) => (
              <HQuestRow key={q.title} href={q.href} icon={<HIcon name={q.icon} size={16} />}
                title={q.title} desc={q.desc} proof={q.proof}
                onClick={(e) => { e.preventDefault(); const el = document.querySelector(q.href); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} />
            ))}
          </HPanel>
        </aside>
      </div>
      <div style={heroStyles.strip}>
        <span style={heroStyles.stripChip}>BUILD</span>→<span style={heroStyles.stripChip}>TEST</span>→<span style={heroStyles.stripChip}>IMPROVE</span>→<span style={heroStyles.stripChip}>REPEAT</span>
      </div>
    </header>
  );
}
window.PortfolioHero = PortfolioHero;
