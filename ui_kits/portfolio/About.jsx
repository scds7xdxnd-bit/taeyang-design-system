// Manifesto band + journey timeline.
const { Pill: AbPill } = window.TaeyangHanDesignSystem_01d505;

const abStyles = {
  manifesto: { background: 'var(--surface-invert)', color: '#fff', padding: '40px 24px' },
  mInner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 28 },
  label: { fontFamily: 'var(--font-pixel)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sunshine)', margin: '0 0 12px' },
  story: { fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.88)', margin: 0 },
  list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 },
  li: { fontSize: 14, color: 'rgba(255,255,255,0.88)', display: 'flex', gap: 8, alignItems: 'center' },
  dot: { color: 'var(--mint)' },
  pills: { display: 'flex', flexWrap: 'wrap', gap: 8 },
  techPill: { display: 'inline-flex', alignItems: 'center', minHeight: 30, padding: '0 12px', fontSize: 12, fontWeight: 600, borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,0.12)', color: '#fff', border: '2px solid rgba(255,255,255,0.2)' },
  journey: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 24px' },
  jLabel: { fontFamily: 'var(--font-pixel)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--grey-dark)', margin: '0 0 20px' },
  track: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: 0, overflowX: 'auto' },
  stop: { flex: 1, minWidth: 150, position: 'relative', paddingTop: 22, paddingRight: 14 },
  line: { position: 'absolute', top: 6, left: 0, right: 0, height: 2, background: 'var(--grey-light)' },
  jdot: { position: 'absolute', top: 0, left: 0, width: 13, height: 13, borderRadius: '50%', background: 'var(--sunshine)', border: '2px solid var(--ink)' },
  jdotNow: { background: 'var(--coral)' },
  year: { fontFamily: 'var(--font-game)', fontWeight: 800, fontSize: 15, color: 'var(--ink)' },
  event: { fontSize: 12, color: 'var(--grey-dark)', lineHeight: 1.5, marginTop: 4, display: 'block', maxWidth: 160 },
};

function PortfolioAbout() {
  const stack = ['Claude Code', 'Next.js', 'Python', 'Flask', 'PostgreSQL', 'TypeScript'];
  const beliefs = ['Systems beat willpower', 'Build to understand', 'Real proof, not self-score'];
  const j = window.PORTFOLIO.journey;
  return (
    <>
      <section style={abStyles.manifesto} aria-label="About">
        <div style={abStyles.mInner}>
          <div>
            <p style={abStyles.label}>The Short Version</p>
            <p style={abStyles.story}>Malaysian, based in Seoul. I study chemical engineering at Sogang, build software, and interpret Korean–English–Malay — three things I do because they genuinely interest me.</p>
          </div>
          <div>
            <p style={abStyles.label}>What I Believe</p>
            <ul style={abStyles.list}>
              {beliefs.map((b) => <li key={b} style={abStyles.li}><span style={abStyles.dot}>◆</span>{b}</li>)}
            </ul>
          </div>
          <div>
            <p style={abStyles.label}>Daily Stack</p>
            <div style={abStyles.pills}>
              {stack.map((s) => <span key={s} style={abStyles.techPill}>{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section style={abStyles.journey} aria-label="Journey">
        <p style={abStyles.jLabel}>Journey</p>
        <ol style={abStyles.track}>
          {j.map((s) => (
            <li key={s.year} style={abStyles.stop}>
              <span style={abStyles.line} />
              <span style={{ ...abStyles.jdot, ...(s.now ? abStyles.jdotNow : {}) }} />
              <span style={abStyles.year}>{s.year}</span>
              <span style={abStyles.event}>{s.event}</span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
window.PortfolioAbout = PortfolioAbout;
