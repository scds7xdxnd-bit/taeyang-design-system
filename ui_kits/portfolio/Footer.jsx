// Contact section + footer band with signature.
const { Panel: FPanel, Button: FButton } = window.TaeyangHanDesignSystem_01d505;

const ftStyles = {
  contact: { maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 24px' },
  badge: { fontFamily: 'var(--font-pixel)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--grey-dark)' },
  title: { fontFamily: 'var(--font-game)', fontWeight: 800, fontSize: 'clamp(1.35rem, 3.5vw, 1.75rem)', letterSpacing: '-0.02em', margin: '10px 0 6px', color: 'var(--ink)' },
  sub: { fontSize: 14, color: 'var(--grey-dark)', maxWidth: 560, margin: '0 0 24px', lineHeight: 1.6 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 },
  cardLabel: { fontFamily: 'var(--font-pixel)', fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--grey-dark)', margin: '0 0 10px' },
  response: { fontSize: 12, color: 'var(--grey-dark)', margin: '10px 0 0' },
  langs: { display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, color: 'var(--ink)' },
  findLinks: { display: 'flex', flexDirection: 'column', gap: 8 },
  findLink: { fontFamily: 'var(--font-game)', fontWeight: 600, fontSize: 14, color: 'var(--ink)', textDecoration: 'none', cursor: 'pointer' },
  footer: { background: 'var(--surface-invert)', color: '#fff', padding: '36px 24px' },
  fInner: { maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' },
  tagline: { fontFamily: 'var(--font-game)', fontWeight: 800, fontSize: 20, letterSpacing: '-0.02em', margin: 0 },
  sign: { fontFamily: 'var(--font-hand)', fontSize: 30, color: 'var(--sunshine)' },
  note: { fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 4 },
};

function PortfolioFooter() {
  return (
    <>
      <section id="contact" style={ftStyles.contact}>
        <p style={ftStyles.badge}>Contact</p>
        <h2 style={ftStyles.title}>Start a quest together</h2>
        <p style={ftStyles.sub}>I'm a student open to internships, collaborations, and interesting problems. Not available for full-time until 2027.</p>
        <div style={ftStyles.grid}>
          <FPanel>
            <p style={ftStyles.cardLabel}>Primary contact</p>
            <FButton variant="coral" size="small">Email me →</FButton>
            <p style={ftStyles.response}>Typically responds within 24 h</p>
          </FPanel>
          <FPanel>
            <p style={ftStyles.cardLabel}>Available to work in</p>
            <div style={ftStyles.langs}>
              <span>🇬🇧 English</span><span>🇰🇷 한국어</span><span>🇨🇳 中文</span><span>🇲🇾 Malay</span>
            </div>
          </FPanel>
          <FPanel>
            <p style={ftStyles.cardLabel}>Find me</p>
            <div style={ftStyles.findLinks}>
              <a style={ftStyles.findLink} href="#">GitHub ↗</a>
              <a style={ftStyles.findLink} href="#">LinkedIn ↗</a>
              <a style={ftStyles.findLink} href="#">小红书 ↗</a>
            </div>
          </FPanel>
        </div>
      </section>

      <footer style={ftStyles.footer}>
        <div style={ftStyles.fInner}>
          <div>
            <p style={ftStyles.tagline}>Build systems. Level up life.</p>
            <p style={ftStyles.note}>Thanks for stopping by — now go build something.</p>
          </div>
          <span style={ftStyles.sign}>Taeyang Han</span>
        </div>
      </footer>
    </>
  );
}
window.PortfolioFooter = PortfolioFooter;
