// Portfolio UI-kit content — lifted from the live site (profile.json / specializations.js).
window.PORTFOLIO = {
  quests: [
    { icon: 'dashboard', title: 'LifeOS', desc: 'Build my personal operating system', proof: 'LIVE', href: '#builder' },
    { icon: 'flask', title: 'Reaction Simulator', desc: 'Interactive CSTR/PFR reactor network', proof: 'LIVE', href: '#engineer' },
    { icon: 'users', title: 'PALS Mentoring', desc: '150+ students. Still growing.', proof: '150+', href: '#community' },
    { icon: 'globe', title: 'Language Learning', desc: '5 languages. One adventure.', proof: 'TOPIK 6', href: '#linguist' },
    { icon: 'book', title: 'Case Studies', desc: 'Projects & field notes', proof: '↗', href: '#opinions' },
  ],
  journey: [
    { year: '2021', event: 'First app shipped — personal accounting system (still running)' },
    { year: '2022', event: 'Sogang University — dual degree + full-tuition scholarship' },
    { year: '2023', event: "Interpreter for Supreme Prosecutors' Office · TOPIK 6 (265/300)" },
    { year: '2024', event: 'PALS Co-President · Samsung Dream Scholar · 4 apps deployed' },
    { year: '2025', event: 'APEC interpreter (Yonhap News) · LifeOS launched · 6 apps live' },
    { year: '2026 →', event: 'BLCU exchange · TA at Sogang · Building in public', now: true },
  ],
  domains: [
    {
      id: 'linguist', tab: 'Linguist', icon: 'globe', emoji: '🌐', accent: 'sky', mastery: 90,
      headline: 'Official Korean–English–Malay interpreter',
      blurb: 'Diplomatic-level interpretation for government and institutional clients. Work covered by Yonhap News Agency.',
      featured: { title: 'APEC Cooperation Dialogue', meta: 'Gyeongbuk Governor ↔ Malaysian Ambassador · Feb 2025', img: 'apec_cooperation_dialogue', tag: 'Yonhap News ↗' },
      items: ['Gyeongbuk Provincial Government', "Supreme Prosecutors' Office", 'Anti-Corruption & Civil Rights Commission', 'Sogang University OIA', 'Malaysian Embassy Seoul'],
    },
    {
      id: 'engineer', tab: 'Engineer', icon: 'flask', emoji: '⚗️', accent: 'coral', mastery: 85,
      headline: 'Tools that make process engineering tangible',
      blurb: 'Chemical Engineering + Business dual degree at Sogang. Teaching Assistant ×3. I build interactive simulators for things textbooks only describe.',
      featured: { title: 'Reaction Simulator', meta: 'CSTR/PFR network · Levenspiel plots · thermal diagram', img: 'reaction_simulator', tag: 'Live ↗' },
      items: ['Fugacity Simulator — Peng-Robinson EOS', 'Process Game', 'Apple SCM Analysis', 'LP Diet Optimization'],
    },
    {
      id: 'builder', tab: 'Builder', icon: 'code', emoji: '💻', accent: 'mint', mastery: 87,
      headline: '6 deployed systems across full-stack & ML',
      blurb: '5 years building. First app shipped 2021, still in production. Next.js, Flask, PostgreSQL, TensorFlow.',
      featured: { title: 'LifeOS', meta: 'Unified life OS · 6 domains · LP macro optimizer', img: 'lifeos', tag: 'Live ↗' },
      items: ['Bullwhip Effect Simulator', 'Personal Accounting System (5+ yrs)', 'CNN Emotion Classifier', 'Scholarship writing system'],
    },
    {
      id: 'community', tab: 'Community', icon: 'users', emoji: '🤝', accent: 'purple', mastery: 92,
      headline: 'PALS President · 150+ mentees',
      blurb: 'Led an international peer-mentoring org across 4 semesters. Authored its first constitution. Samsung Dream Scholars President for a 210+ scholar camp.',
      featured: { title: 'PALS Co-President', meta: 'Peer Assisted Learning System · Sogang University', img: 'pals_copresident', tag: 'Award ↗' },
      items: ['Samsung Dream Scholars President', 'SEA Study Club President', 'Event Host / Emcee ×7', 'Rainbow Stepping Stone mentor'],
    },
    {
      id: 'scholar', tab: 'Scholar', icon: 'cap', emoji: '📊', accent: 'sunshine', mastery: 88,
      headline: '7 scholarships across 4 institutions',
      blurb: 'Samsung Dream Scholarship (Global Hope), Lee & Won Excellence Award, Sogang full-tuition admission scholarship, and recurring alumni awards.',
      featured: { title: 'Samsung Dream Scholarship', meta: 'Global Hope · 5 semesters · panel selection', img: 'samsung_dream_scholars_president', tag: 'Webzine ↗' },
      items: ['Lee & Won Asian Fellowship — Excellence', 'Sogang 1st-Class Admission — full tuition', 'Sogang Alumni Scholarship ×4', 'TOPIK 6 (265/300)'],
    },
  ],
};
