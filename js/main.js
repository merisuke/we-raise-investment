/* =============================
   We Raise Investment — main.js
   ============================= */

/* ── Language toggle ── */
const TRANSLATIONS = {
  en: {
    'nav.aboutus':    'ABOUT US',
    'nav.strategy':   'INVESTMENT STRATEGY',
    'nav.focus':      'FOCUS AREAS',
    'nav.portfolio':  'PORTFOLIO',
    'nav.contact':    'CONTACT',
    'nav.login':      'INVESTOR LOGIN',
    'nav.philosophy': 'Philosophy',
    'nav.services':   'Services',
    'nav.numbers':    'Track Record',
    'nav.about':      'About',
    'nav.company':    'Company',
    'hero.tagline':   'FUELING AMBITION. BUILDING VALUE.<br>FROM DUBAI TO THE WORLD.',
    'hero.desc':      'We Raise Investment is an investment fund based in Dubai. Leveraging global perspectives and local insights, we create sustainable value alongside companies building the future.',
    'hero.btn':       'DISCOVER MORE',
    'badge.1.en':     'GLOBAL PERSPECTIVE',
    'badge.1.ja':     '世界を見据えた投資',
    'badge.2.en':     'DUBAI BASED',
    'badge.2.ja':     'ドバイ発のグローバルファンド',
    'badge.3.en':     'LONG-TERM VALUE',
    'badge.3.ja':     '長期的な価値創出',
    'hero.label':     'Dubai · UAE',
    'hero.title1':    'Elevating Capital,',
    'hero.title2':    'Empowering Growth.',
    'hero.btn1':      'Our Services',
    'hero.btn2':      'Contact Us',
    'hero.scroll':    'Scroll',
    'phil.label':     'Our Foundation',
    'phil.title':     'Investment Philosophy',
    'phil.desc':      'Built on three decades of collective expertise, our philosophy guides every capital decision we make.',
    'phil.1.title':   'Disciplined Strategy',
    'phil.1.desc':    'Rigorous due diligence and systematic risk management underpin every investment we pursue.',
    'phil.2.title':   'Long-Term Vision',
    'phil.2.desc':    'We look beyond short-term volatility to identify and capture compounding value over time.',
    'phil.3.title':   'Trusted Partnerships',
    'phil.3.desc':    'Transparent communication and aligned interests define our relationships with every investor.',
    'svc.label':      'What We Do',
    'svc.title':      'Investment Services',
    'svc.desc':       'A comprehensive suite of investment solutions designed for sophisticated investors seeking superior risk-adjusted returns.',
    'svc.1.title':    'Fund Management',
    'svc.1.desc':     'Actively managed portfolios across equities, fixed income, and alternative assets with dynamic allocation strategies.',
    'svc.2.title':    'Direct Investment',
    'svc.2.desc':     'Strategic co-investment opportunities in high-growth private companies across MENA, Asia, and global markets.',
    'svc.3.title':    'Capital Raising',
    'svc.3.desc':     'End-to-end fundraising advisory connecting innovative businesses with the right institutional and HNW capital.',
    'svc.4.title':    'Portfolio Advisory',
    'svc.4.desc':     'Bespoke wealth structuring and portfolio optimisation for family offices and institutional investors.',
    'num.label':      'Track Record',
    'num.title':      'Performance by Numbers',
    'num.1.label':    'Assets Under Management',
    'num.2.label':    'Portfolio Companies',
    'num.3.label':    'Years of Experience',
    'num.4.label':    'Markets Covered',
    'about.label':    'Who We Are',
    'about.title':    'About We Raise Investment',
    'about.desc':     'Founded in Dubai International Financial Centre, We Raise Investment LLC operates as a licensed investment management firm under the regulatory framework of the Dubai Financial Services Authority (DFSA).',
    'about.li1':      'Licensed investment management firm — Dubai Free Zone',
    'about.li2':      'Global network across UAE, Asia, Europe and Americas',
    'about.li3':      'Dedicated to high-net-worth and institutional investors',
    'about.li4':      'ESG-integrated investment framework',
    'about.btn':      'Company Profile',
    'about.badge':    'Since',
    'contact.label':  'Get In Touch',
    'contact.title':  'Contact Us',
    'contact.desc':   'Ready to explore opportunities? Our team is available to discuss your investment objectives.',
    'contact.h3':     'Our Office',
    'contact.addr':   'Dubai International Financial Centre\nDubai, United Arab Emirates',
    'contact.email':  'info@weraiseinvestment.com',
    'contact.phone':  '+971 4 XXX XXXX',
    'form.name':      'Full Name',
    'form.email':     'Email Address',
    'form.inquiry':   'Inquiry Type',
    'form.opt0':      'Select inquiry type',
    'form.opt1':      'Fund Investment',
    'form.opt2':      'Capital Raising',
    'form.opt3':      'Portfolio Advisory',
    'form.opt4':      'General Inquiry',
    'form.message':   'Message',
    'form.submit':    'Send Message',
    'footer.copy':    '© 2025 We Raise Investment LLC. All rights reserved.',
    'team.label':     'Our People',
    'team.title':     'Team Members',
    'team.max.role':     'Chief Investment &amp; Trading Officer (CITO)',
    'team.max.profile':  '<li>20+ years of expertise in financial markets</li><li>Advanced risk management and systematic trading strategies</li><li>Proven track record of performance</li><li>Market cycle &amp; trend analysis specialist</li><li>Top Mortgage Salesperson — 5 years</li><li>Real Estate Agent — 5 years</li><li>Real Estate Investment — Since 2016</li><li>Forex &amp; Gold Trading — Since 2020</li>',
    'team.ayaka.role':   'CEO',
    'team.ayaka.profile':'<li>Entrepreneur</li><li>Regenerative Medicine Clinic Advisor</li><li>Beauty product development, manufacturing, sales &amp; export</li><li>Mother of 3 — preparing to establish an NPO &amp; public interest foundation for next-generation education</li>',
    'team.eriko.role':   'CTO &amp; Operations Management',
    'team.eriko.profile':'<li>10 years as a systems engineer at a major foreign IT company</li><li>Management of 2 companies</li><li>Studying crypto asset investment since 2022, investing personal assets in crypto</li>',
    'team.keisuke.role':    'Enterprise Services Consultant',
    'team.keisuke.profile': '<li>10+ years living in Dubai</li><li>Established a trading company in Dubai in 2021</li><li>Supported ~10 Japanese companies in corporate establishment</li><li>Running a wholesale business for knives, tableware &amp; cooking utensils</li><li>Business support &amp; translation services</li>',
  },
  ja: {
    'nav.aboutus':    'ABOUT US',
    'nav.strategy':   '投資戦略',
    'nav.focus':      '注力領域',
    'nav.portfolio':  'ポートフォリオ',
    'nav.contact':    'お問い合わせ',
    'nav.login':      '投資家ログイン',
    'nav.philosophy': '投資哲学',
    'nav.services':   'サービス',
    'nav.numbers':    '実績',
    'nav.about':      '会社概要',
    'nav.company':    '会社情報',
    'hero.tagline':   'FUELING AMBITION. BUILDING VALUE.<br>FROM DUBAI TO THE WORLD.',
    'hero.desc':      'We Raise Investmentは、ドバイを拠点とする投資ファンドです。グローバルな視点とローカルの知見を活かし、未来を創る企業と共に持続的な価値を創出します。',
    'hero.btn':       'DISCOVER MORE',
    'badge.1.en':     'GLOBAL PERSPECTIVE',
    'badge.1.ja':     '世界を見据えた投資',
    'badge.2.en':     'DUBAI BASED',
    'badge.2.ja':     'ドバイ発のグローバルファンド',
    'badge.3.en':     'LONG-TERM VALUE',
    'badge.3.ja':     '長期的な価値創出',
    'hero.label':     'ドバイ · UAE',
    'hero.title1':    '資本の可能性を高め、',
    'hero.title2':    '成長を後押しする。',
    'hero.btn1':      'サービス一覧',
    'hero.btn2':      'お問い合わせ',
    'hero.scroll':    'スクロール',
    'phil.label':     '私たちの基盤',
    'phil.title':     '投資哲学',
    'phil.desc':      '30年超の集合的な経験に基づいた哲学が、私たちのすべての投資判断を導きます。',
    'phil.1.title':   '規律ある戦略',
    'phil.1.desc':    '厳格なデューデリジェンスと体系的なリスク管理があらゆる投資の基盤です。',
    'phil.2.title':   '長期的視点',
    'phil.2.desc':    '短期的な変動を超え、時間をかけて複利効果を生む価値を見極めます。',
    'phil.3.title':   '信頼のパートナーシップ',
    'phil.3.desc':    '透明性の高いコミュニケーションと利益の一致が、投資家との関係を定義します。',
    'svc.label':      'サービス内容',
    'svc.title':      '投資サービス',
    'svc.desc':       '優れたリスク調整後リターンを求める洗練された投資家向けの包括的なソリューション。',
    'svc.1.title':    'ファンド運用',
    'svc.1.desc':     '株式・債券・オルタナティブ資産にわたるアクティブ運用ポートフォリオ。',
    'svc.2.title':    'ダイレクト投資',
    'svc.2.desc':     'MENA・アジア・グローバル市場の高成長プライベート企業へのco-investment機会。',
    'svc.3.title':    '資金調達支援',
    'svc.3.desc':     '革新的な企業と適切な機関投資家・富裕層をつなぐ総合的なファンドレイジング。',
    'svc.4.title':    'ポートフォリオ・アドバイザリー',
    'svc.4.desc':     'ファミリーオフィス・機関投資家向けのオーダーメイドの資産構築・最適化。',
    'num.label':      '運用実績',
    'num.title':      '数字で見る実績',
    'num.1.label':    '運用資産残高',
    'num.2.label':    'ポートフォリオ企業数',
    'num.3.label':    '経験年数',
    'num.4.label':    'カバー市場数',
    'about.label':    '私たちについて',
    'about.title':    'We Raise Investmentについて',
    'about.desc':     'ドバイ国際金融センターに設立されたWe Raise Investment LLCは、DFSA（ドバイ金融サービス局）の規制のもとで運営するライセンス取得済みの投資運用会社です。',
    'about.li1':      'ドバイ・フリーゾーン認可投資運用会社',
    'about.li2':      'UAE・アジア・欧米にわたるグローバルネットワーク',
    'about.li3':      '富裕層・機関投資家専門',
    'about.li4':      'ESG統合型投資フレームワーク',
    'about.btn':      '会社概要を見る',
    'about.badge':    '設立',
    'contact.label':  'お問い合わせ',
    'contact.title':  'ご連絡ください',
    'contact.desc':   '投資機会についてのご相談は、お気軽にお問い合わせください。',
    'contact.h3':     'オフィス',
    'contact.addr':   'ドバイ国際金融センター\nアラブ首長国連邦・ドバイ',
    'contact.email':  'info@weraiseinvestment.com',
    'contact.phone':  '+971 4 XXX XXXX',
    'form.name':      'お名前',
    'form.email':     'メールアドレス',
    'form.inquiry':   'お問い合わせ種別',
    'form.opt0':      '種別を選択',
    'form.opt1':      'ファンド投資',
    'form.opt2':      '資金調達支援',
    'form.opt3':      'ポートフォリオ・アドバイザリー',
    'form.opt4':      'その他',
    'form.message':   'メッセージ',
    'form.submit':    '送信する',
    'footer.copy':    '© 2025 We Raise Investment LLC. All rights reserved.',
    'team.label':     'チーム',
    'team.title':     'チームメンバー',
    'team.max.role':     '最高投資・トレーディング責任者（CITO）',
    'team.max.profile':  '<li>20年以上の金融市場における専門知識</li><li>高度なリスク管理と体系的なトレーディング戦略</li><li>実績あるパフォーマンス</li><li>市場サイクル・トレンド分析のスペシャリスト</li><li>トップ住宅ローン営業 — 5年</li><li>不動産エージェント — 5年</li><li>不動産投資 — 2016年より</li><li>外国為替・金トレーディング — 2020年より</li>',
    'team.ayaka.role':   'CEO',
    'team.ayaka.profile':'<li>起業家</li><li>再生医療クリニック顧問</li><li>美容商材開発・製造販売・輸出</li><li>3児の母。子育て経験をもとにした次世代の教育のためのNPO法人、公益財団法人の設立準備中</li>',
    'team.eriko.role':   'CTO・オペレーション管理',
    'team.eriko.profile':'<li>大手外資系IT企業で10年システムエンジニアとして勤務</li><li>法人2社経営</li><li>2022年より暗号資産投資を学び、個人資産を暗号資産に投資</li>',
    'team.keisuke.role':    'エンタープライズ・サービス・コンサルタント',
    'team.keisuke.profile': '<li>ドバイ在住10年以上</li><li>2021年に現地で貿易会社を設立</li><li>日本企業約10社の法人設立支援</li><li>包丁・食器・調理器具を卸す専門商社を経営</li><li>ビジネス支援や翻訳にも対応</li>',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = TRANSLATIONS[lang][key];
    if (text !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.innerHTML = text.replace(/\n/g, '<br>');
      }
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* ── Sticky header ── */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Active nav link ── */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  if (!sections.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ── Scroll reveal ── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}

/* ── Counter animation ── */
function animateCounters() {
  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = target * ease;
      el.textContent = (Number.isInteger(target) ? Math.round(value) : value.toFixed(1)) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

function initCounters() {
  const section = document.getElementById('numbers');
  if (!section) return;
  let triggered = false;

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !triggered) {
      triggered = true;
      animateCounters();
    }
  }, { threshold: 0.3 });

  observer.observe(section);
}

/* ── Mobile nav ── */
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav  = document.querySelector('.mobile-nav');
  const closeBtn   = document.querySelector('.mobile-nav-close');
  if (!hamburger || !mobileNav) return;

  const open  = () => { mobileNav.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const close = () => { mobileNav.classList.remove('open'); document.body.style.overflow = ''; };

  hamburger.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

/* ── Contact form ── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = currentLang === 'ja' ? '送信しました！' : 'Message Sent!';
    btn.disabled = true;
    btn.style.opacity = '.7';
    setTimeout(() => {
      btn.textContent = TRANSLATIONS[currentLang]['form.submit'];
      btn.disabled = false;
      btn.style.opacity = '';
      form.reset();
    }, 3000);
  });
}

/* ── Lang toggle buttons ── */
function initLangToggle() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initActiveNav();
  initReveal();
  initCounters();
  initMobileNav();
  initContactForm();
  initLangToggle();
  applyLang(currentLang);
});
