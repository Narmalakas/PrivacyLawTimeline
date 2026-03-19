
    // ─── DATA ───────────────────────────────────────────────
    const milestones = [
    {
        year: "1890",
        title: "The Right to Privacy Concept",
        slug: "1890",
        shortDesc: "The concept of the 'right to be let alone' is introduced.",
        description: "In an era of newly invented portable cameras and sensationalist journalism, Samuel Warren and Louis Brandeis published a groundbreaking article in the Harvard Law Review. They argued that individuals have a fundamental 'right to be let alone', establishing the conceptual foundation for modern privacy rights.",
        points: [
        "Published in the Harvard Law Review",
        "Introduced the 'right to be let alone' as a legal concept",
        "Provided the first formal legal arguments for privacy protection in the US",
        "Strongly influenced modern laws on unauthorized photography, misuse of personal data, and surveillance"
        ],
        funFact: "Louis Brandeis later became one of the most famous Justices of the U.S. Supreme Court, serving from 1916 to 1939."
    },
    {
        year: "1948",
        title: "Universal Declaration of Human Rights",
        slug: "1948",
        shortDesc: "Privacy recognized as a fundamental human right globally.",
        description: "Following the devastating global impact of World War II and the severe abuses of state power, the United Nations adopted the Universal Declaration of Human Rights (UDHR). Article 12 explicitly protected individuals from arbitrary interference with their privacy, family, home, or correspondence.",
        points: [
        "Established Article 12 of the UDHR protecting privacy",
        "Created in response to the atrocities of WWII",
        "Heavily influenced national constitutions and international human rights laws globally",
        "Serves as the philosophical foundation for all modern data protection policies"
        ]
    },
    {
        year: "1974",
        title: "U.S. Privacy Act",
        slug: "1974",
        shortDesc: "First major law regulating government data collection.",
        description: "In the wake of the Watergate scandal and growing concerns over computerized databases, the US government passed the Privacy Act of 1974. This legislation established a code of fair information practices that governs the collection, maintenance, use, and dissemination of information about individuals maintained in systems of records by federal agencies.",
        points: [
        "Enacted after public concerns about secret government data collection",
        "Granted citizens the right to access government records about themselves",
        "Established the right to request corrections to inaccurate personal data",
        "Represented the first major step toward transparency in government data handling"
        ]
    },
    {
        year: "1981",
        title: "Convention 108",
        slug: "1981",
        shortDesc: "First legally binding international data protection treaty.",
        description: "The Council of Europe drafted Convention 108, officially known as the Convention for the Protection of Individuals with regard to Automatic Processing of Personal Data. It was the first international legally binding instrument to protect the individual against abuses which may accompany the collection and processing of personal data.",
        points: [
        "Drafted by the Council of Europe",
        "Established that personal data must be collected fairly, lawfully, and for legitimate purposes",
        "Solidified individuals' rights to know how their data is being used",
        "Served as the direct foundation for future international data protection frameworks, including the EU Directive"
        ]
    },
    {
        year: "1995",
        title: "EU Data Protection Directive",
        slug: "1995",
        shortDesc: "Harmonizing privacy regulations across Europe.",
        description: "As the internet began to take shape and cross-border data flows increased, the European Union implemented the Data Protection Directive (Directive 95/46/EC). It aimed to regulate the processing of personal data and the free movement of such data, setting a high standard that all member states had to implement into national law.",
        points: [
        "Designed to harmonize privacy regulations across all EU member states",
        "Protected individuals' personal data and fundamental privacy rights comprehensively",
        "Established rules for safe and secure data transfer within the EU and to third countries",
        "Acted as the direct predecessor and framework for the eventual creation of the GDPR"
        ]
    },
    {
        year: "2012",
        title: "Philippine Data Privacy Act",
        slug: "2012",
        shortDesc: "Comprehensive national privacy framework in Asia.",
        description: "The Republic of the Philippines enacted Republic Act No. 10173, known as the Data Privacy Act of 2012. It was designed to protect the fundamental human right of privacy of communication while ensuring free flow of information to promote innovation and growth.",
        points: [
        "Applies comprehensively to both government agencies and private organizations",
        "Mandates informed consent before personal data collection",
        "Created the National Privacy Commission to enforce the law",
        "Grants citizens the right to access, correct, and control their personal data"
        ]
    },
    {
        year: "2016",
        title: "GDPR Enactment",
        slug: "2016",
        shortDesc: "The most comprehensive data protection law in the world.",
        description: "The General Data Protection Regulation (GDPR) was adopted by the EU in 2016 (and became enforceable in 2018). It revolutionized data privacy by establishing strict rules on data processing, granting powerful rights to individuals, and imposing massive penalties for non-compliance, forcing a global shift in how companies handle data.",
        points: [
        "Recognized as the most comprehensive data protection law globally",
        "Applies to any organization anywhere in the world that processes EU citizens' data",
        "Codified the 'Right to access', 'Right to be forgotten', and 'Right to data portability'",
        "Introduced unprecedented fines: up to €20 million or 4% of global annual revenue"
        ]
    }
    ];

    const futureTrends = [
    {
        title: "AI and Automated Decision-Making",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
        description: "AI is increasingly processing personal data for personalized services, predictive analytics, and even law enforcement.",
        issues: "Lack of transparency (black box algorithms), difficulties in obtaining meaningful consent, and the risk of algorithmic bias and discrimination.",
        predicted: "We will see new 'explainability laws', guaranteed rights to opt-out from automated decisions, and mandatory algorithmic privacy impact assessments.",
        wide: true
    },
    {
        title: "Global Harmonization of Privacy Laws",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
        description: "Currently, laws differ drastically from country to country, creating a complex web of compliance challenges for global businesses.",
        predicted: "A push towards more GDPR-like frameworks globally, establishing broader international agreements, and implementing stricter regulations on cross-border data transfers."
    },
    {
        title: "Stronger Cybersecurity Requirements",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
        description: "With data breaches, ransomware attacks, and identity theft increasing exponentially, privacy and security are becoming inseparable.",
        predicted: "Laws will move beyond just 'protecting' data to mandating specific technical cybersecurity measures, instant breach reporting, and regular mandatory compliance audits."
    },
    {
        title: "Digital Identity and Personal Data Ownership",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-1"/><path d="M20.385 6.585a2.1 2.1 0 00-2.97-2.97L9 12v3h3l8.385-8.415z"/></svg>`,
        description: "Questions are mounting about who truly 'owns' the digital data generated on social media, e-commerce platforms, and government portals.",
        predicted: "Individuals will gain greater rights over their digital identity, including seamless transfer/delete/restrict rights across platforms, moving towards 'self-sovereign identity' models.",
        wide: true
    },
    {
        title: "Privacy in Emerging Technologies",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>`,
        description: "Blockchain, IoT devices, smart homes, and wearable tech are collecting unprecedented granular personal data, often 24/7.",
        predicted: "Strict 'data minimization' standards built specifically for connected devices, ensuring they only collect what is absolutely necessary to function."
    }
    ];

    const quizData = [
    { q: 'Who introduced the "Right to Privacy" concept in 1890?', opts: ["Alan Turing","Warren & Brandeis","Mark Zuckerberg","Bill Gates"], a: "Warren & Brandeis" },
    { q: 'Where was the article "The Right to Privacy" published?', opts: ["Harvard Law Review","New York Times","BBC","Washington Post"], a: "Harvard Law Review" },
    { q: "What organization created the Universal Declaration of Human Rights in 1948?", opts: ["United Nations","NATO","World Bank","ASEAN"], a: "United Nations" },
    { q: "Which article of the UDHR protects privacy?", opts: ["Article 12","Article 5","Article 1","Article 20"], a: "Article 12" },
    { q: "Which law regulates U.S. government handling of personal data?", opts: ["Privacy Act of 1974","GDPR","HIPAA","Freedom Act"], a: "Privacy Act of 1974" },
    { q: "What was the first international treaty focused on data protection?", opts: ["Convention 108","GDPR","Privacy Act","Cyber Law"], a: "Convention 108" },
    { q: "Which organization introduced Convention 108?", opts: ["Council of Europe","United Nations","NATO","ASEAN"], a: "Council of Europe" },
    { q: "Which directive unified data protection rules across Europe in 1995?", opts: ["EU Data Protection Directive","GDPR","Privacy Convention","Internet Act"], a: "EU Data Protection Directive" },
    { q: "What Philippine law protects personal data?", opts: ["Data Privacy Act of 2012","Cyber Security Law","Digital Rights Act","Internet Privacy Law"], a: "Data Privacy Act of 2012" },
    { q: "Which regulation strengthened data protection in Europe in 2016?", opts: ["GDPR","Privacy Act","HIPAA","Cyber Security Act"], a: "GDPR" }
    ];

    // ─── STATE ───────────────────────────────────────────────
    let currentPage = 'home';
    const quizAnswers = {};
    let quizSubmitted = false;

    // ─── BUILD UI ────────────────────────────────────────────
    function buildTimeline() {
    const sideNav = document.getElementById('timeline-nav');
    const mobileNav = document.getElementById('mobile-timeline-nav');
    const dots = document.getElementById('timeline-dots');
    const pages = document.getElementById('milestone-pages');

    milestones.forEach((m, i) => {
    // Sidebar nav
    const ni = document.createElement('div');
    ni.className = 'nav-item';
    ni.id = `nav-ms-${i}`;
    ni.onclick = () => showMilestone(i);
    ni.innerHTML = `
      <div class="nav-dot"></div>
      <div class="nav-item-text">
        <span class="nav-year">${m.year}</span>
        <span class="nav-title">${m.title}</span>
      </div>`;
    sideNav.appendChild(ni);

    // Mobile nav
    const mi = document.createElement('div');
    mi.className = 'mobile-nav-item';
    mi.id = `mnav-ms-${i}`;
    mi.onclick = () => { showMilestone(i); closeMobileMenu(); };
    mi.innerHTML = `<div class="m-year">${m.year}</div><div class="m-title">${m.title}</div>`;
    mobileNav.appendChild(mi);

    // Timeline dot
    if (i > 0) {
    const line = document.createElement('div');
    line.className = 'tl-line';
    dots.appendChild(line);
}
    const dot = document.createElement('div');
    dot.className = 'tl-item';
    dot.onclick = () => showMilestone(i);
    dot.innerHTML = `
      <div class="tl-dot"><div class="tl-inner"></div></div>
      <div class="tl-year">${m.year}</div>
      <div class="tl-caption">${m.title.split(' ').slice(0,3).join(' ')}</div>`;
    dots.appendChild(dot);

    // Milestone page
    const pg = document.createElement('div');
    pg.id = `page-ms-${i}`;
    pg.className = 'page';
    pg.innerHTML = `
      <div class="milestone-content">
        <button class="back-link" onclick="showPage('home')">
          <svg viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          Back to Timeline
        </button>
        <div class="milestone-header">
          <div class="milestone-year-badge">${m.year}</div>
          <div class="milestone-tag">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${m.year}
          </div>
          <h1 class="milestone-h1">${m.title}</h1>
          <p class="milestone-short">${m.shortDesc}</p>
        </div>
        <div class="milestone-divider"></div>
        <p class="milestone-desc">${m.description}</p>
        <div class="points-card">
          <h3>Key Points</h3>
          <ul class="points-list">
            ${m.points.map(p => `<li><div class="point-bullet"></div><span>${p}</span></li>`).join('')}
          </ul>
        </div>
        ${m.funFact ? `
        <div class="fun-fact-card">
          <div class="fun-fact-icon"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
          <p><strong>Fun Fact:</strong> ${m.funFact}</p>
        </div>` : ''}
        <div style="display:flex;gap:12px;margin-top:28px;flex-wrap:wrap;">
          ${i > 0 ? `<button class="btn-ghost" style="font-size:13px;padding:10px 20px" onclick="showMilestone(${i-1})">← Previous</button>` : ''}
          ${i < milestones.length-1 ? `<button class="btn-primary" style="font-size:13px;padding:10px 20px" onclick="showMilestone(${i+1})">Next →</button>` : `<button class="btn-primary" style="font-size:13px;padding:10px 20px" onclick="showPage('whats-next')">What's Next →</button>`}
        </div>
      </div>`;
    pages.appendChild(pg);
});
}

    function buildTrends() {
    const grid = document.getElementById('trends-grid');
    futureTrends.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = `trend-card${t.wide ? ' wide' : ''}`;
    card.innerHTML = `
      <div class="trend-icon">${t.icon}</div>
      <div class="trend-title">${t.title}</div>
      <div class="trend-desc">${t.description}</div>
      ${t.issues ? `<div class="trend-issue"><strong>Current Challenge:</strong>${t.issues}</div>` : ''}
      <div class="trend-prediction"><strong>Prediction:</strong>${t.predicted}</div>`;
    grid.appendChild(card);
});
}

    function buildQuiz() {
    const list = document.getElementById('quiz-list');
    const labels = ['A','B','C','D'];
    quizData.forEach((q, qi) => {
    const card = document.createElement('div');
    card.className = 'q-card';
    card.id = `q-card-${qi}`;
    card.innerHTML = `
      <div class="q-body">
        <div class="q-head">
          <div class="q-num">${qi+1}</div>
          <div class="q-text">${q.q}</div>
        </div>
        <div class="options-grid">
          ${q.opts.map((opt, oi) => `
            <button class="opt-btn" id="opt-${qi}-${oi}" onclick="selectOption(${qi},'${opt.replace(/'/g,"\\'")}',this)">
              <span class="opt-label">${labels[oi]}</span>
              <span>${opt}</span>
            </button>`).join('')}
        </div>
      </div>
      <div class="q-footer">
        <button class="show-ans-btn" onclick="toggleReveal(${qi},this)">
          <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
          Show Answer
        </button>
        <div class="ans-reveal" id="reveal-${qi}">
          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          Correct Answer: <strong style="margin-left:6px">${q.a}</strong>
        </div>
      </div>`;
    list.appendChild(card);
});
}

    // ─── QUIZ LOGIC ──────────────────────────────────────────
    function selectOption(qi, val, btn) {
    if (quizSubmitted) return;
    quizAnswers[qi] = val;

    // Reset all buttons in this question
    document.querySelectorAll(`[id^="opt-${qi}-"]`).forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    updateSubmitBtn();
}

    function updateSubmitBtn() {
    const count = Object.keys(quizAnswers).length;
    document.getElementById('answered-count').textContent = count;
    document.getElementById('submit-btn').disabled = count === 0;
}

    function toggleReveal(qi, btn) {
    const reveal = document.getElementById(`reveal-${qi}`);
    const isOpen = reveal.classList.toggle('open');
    const svg = btn.querySelector('svg');
    if (isOpen) {
    svg.innerHTML = '<polyline points="18 15 12 9 6 15"/>';
    btn.innerHTML = btn.innerHTML.replace('Show Answer','Hide Answer');
} else {
    svg.innerHTML = '<polyline points="6 9 12 15 18 9"/>';
    btn.innerHTML = btn.innerHTML.replace('Hide Answer','Show Answer');
}
}

    function submitQuiz() {
    quizSubmitted = true;
    let score = 0;

    quizData.forEach((q, qi) => {
    const userAns = quizAnswers[qi];
    const card = document.getElementById(`q-card-${qi}`);

    q.opts.forEach((opt, oi) => {
    const btn = document.getElementById(`opt-${qi}-${oi}`);
    if (opt === q.a) {
    btn.classList.add('show-correct');
    btn.innerHTML += `<span class="opt-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></span>`;
} else if (opt === userAns && opt !== q.a) {
    btn.classList.add('show-wrong');
    btn.innerHTML += `<span class="opt-icon"><svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>`;
} else if (opt !== userAns) {
    btn.classList.add('dimmed');
}
    btn.disabled = true;
});

    if (userAns === q.a) {
    score++;
    card.classList.add('correct');
} else if (userAns) {
    card.classList.add('wrong');
}

    // Show all answers
    document.getElementById(`reveal-${qi}`).classList.add('open');
});

    // Score banner
    const banner = document.getElementById('score-banner');
    let cls = score >= 8 ? 'great' : score >= 5 ? 'mid' : 'low';
    let label = score === 10 ? 'Perfect Score! 🎉' : score >= 8 ? 'Excellent!' : score >= 6 ? 'Good Job!' : score >= 4 ? 'Keep Studying!' : 'Try Again!';
    banner.innerHTML = `
    <div>
      <div class="score-label">Your Score</div>
      <div class="score-number ${cls}">${score} <span style="font-size:24px;color:var(--muted)">/ 10</span></div>
      <div class="score-desc">${label}</div>
    </div>
    <button class="btn-retake" onclick="retakeQuiz()">
      <svg viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>
      Retake Quiz
    </button>`;
    banner.style.display = 'flex';
    document.getElementById('submit-row').style.display = 'none';
    banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

    function retakeQuiz() {
    Object.keys(quizAnswers).forEach(k => delete quizAnswers[k]);
    quizSubmitted = false;

    document.getElementById('score-banner').style.display = 'none';
    document.getElementById('submit-row').style.display = 'flex';
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('answered-count').textContent = '0';

    const list = document.getElementById('quiz-list');
    list.innerHTML = '';
    buildQuiz();
}

    // ─── NAVIGATION ──────────────────────────────────────────
    function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${id}`).classList.add('active');
    document.getElementById('main').scrollTo(0, 0);

    // Update sidebar active states
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.nav-card-btn').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.mobile-nav-item').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.mobile-nav-btn').forEach(n => n.classList.remove('active'));

    if (id === 'whats-next') {
    document.getElementById('nav-whats-next')?.classList.add('active');
    document.getElementById('mnav-whats-next')?.classList.add('active');
} else if (id === 'quiz') {
    document.getElementById('nav-quiz')?.classList.add('active');
    document.getElementById('mnav-quiz')?.classList.add('active');
} else if (id === 'about') {
    document.getElementById('nav-about')?.classList.add('active');
    document.getElementById('mnav-about')?.classList.add('active');
}

    currentPage = id;
}

    function showMilestone(i) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-ms-${i}`).classList.add('active');
    document.getElementById('main').scrollTo(0, 0);

    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.nav-card-btn').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.mobile-nav-item').forEach(n => n.classList.remove('active'));
    document.querySelectorAll('.mobile-nav-btn').forEach(n => n.classList.remove('active'));

    document.getElementById(`nav-ms-${i}`)?.classList.add('active');
    document.getElementById(`mnav-ms-${i}`)?.classList.add('active');
    currentPage = `ms-${i}`;
}

    // ─── MOBILE MENU ─────────────────────────────────────────
    function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');
    const open = menu.classList.toggle('open');
    iconMenu.style.display = open ? 'none' : 'block';
    iconClose.style.display = open ? 'block' : 'none';
}

    function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.remove('open');
    document.getElementById('icon-menu').style.display = 'block';
    document.getElementById('icon-close').style.display = 'none';
}

    // ─── INIT ─────────────────────────────────────────────────
    buildTimeline();
    buildTrends();
    buildQuiz();
