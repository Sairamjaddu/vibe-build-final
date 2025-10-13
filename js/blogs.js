(function() {
  var resizeHandler = null;
  const featuredEl = document.getElementById('featured-post');
  const categoryListEl = document.getElementById('category-list');
  const tagCloudEl = document.getElementById('tag-cloud');
  const gridEl = document.getElementById('blog-posts-grid');

  if (!categoryListEl || !gridEl) return;

  const POSTS = [];

  const categories = [
    { key: 'ai', label: 'AI' },
    { key: 'nocode', label: 'No-code / Low-code' },
    { key: 'marketing', label: 'Digital Marketing' }
  ];

  function slugify(title) {
    return title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
  }

  // Deterministic pseudo-random helper using index seed
  function seededChoice(seed, arr) {
    return arr[(Math.abs(hashCode(seed + '')) % arr.length)];
  }
  function hashCode(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
    }
    return h >>> 0;
  }

  // Unsplash helper: return an Unsplash source URL for the given query
  function unsplashFor(query, w = 1200, h = 800) {
    // fallback safe query
    var q = (query || 'technology').toString().replace(/\s*,\s*/g, ',');
    return `https://source.unsplash.com/${w}x${h}/?${encodeURIComponent(q)}`;
  }

  // Generate long SEO content (>= ~1000 words) for a post based on category/title/keywords/seed
  function generateLongContent(opts) {
    // opts: { title, category, keywords: [..], seed }
    const title = opts.title || 'Article';
    const category = opts.category || 'general';
    const keywords = (opts.keywords || []).slice(0, 12);
    const seed = opts.seed || title;

    // Section templates
    const intros = [
      `${title} is a critical topic for modern ${category} teams. In this article we explore practical approaches, strategic frameworks, and hands-on tactics that help teams implement and scale ${category} initiatives successfully.`,
      `To stay competitive, businesses must master the principles behind ${title}. This guide covers the foundations, measured outcomes, technical considerations, and organizational changes needed for success.`,
      `This long-form guide on ${title} dives deep into why ${category} matters, how to operationalize it, and concrete steps to produce measurable impact. We'll cover architecture, people, process, and tooling.`
    ];

    const conceptOpeners = [
      'At its core, this topic combines technology, process, and people.',
      'The following core concepts provide the framing to approach this problem methodically.',
      'Understanding these building blocks will help you make pragmatic tradeoffs during design and implementation.'
    ];

    const caseOpeners = [
      'Real-world examples often clarify ambiguous tradeoffs; below are representative case studies and scenarios.',
      'To ground the ideas, we discuss practical examples and the lessons learned from them.',
      'Case studies show how different organizations approached similar problems and the outcomes they achieved.'
    ];

    const bestPracticeOpeners = [
      'These best practices have been battle-tested across teams and projects.',
      'Follow these pragmatic rules of thumb to improve reliability and ROI.',
      'Adopt these patterns to reduce risk while increasing speed of delivery.'
    ];

    const conclusionOpeners = [
      'In summary, this area is not just a technical exercise but an organizational capability.',
      'To wrap up, the path from prototyping to production is paved with measurable milestones and disciplined process.',
      'Final thought: invest in the foundations and measure the outcomes you care about.'
    ];

    // Paragraph templates that reference keywords (to boost SEO)
    const paragraphTemplates = [
      (kw) => `One of the most important elements is ${kw}. When ${kw} is applied correctly it improves relevance, reduces error, and helps teams scale predictable outcomes.`,
      (kw) => `A well-architected approach to ${kw} considers latency, cost, and maintainability. Thoughtful design choices here can significantly lower total cost of ownership.`,
      (kw) => `Teams often underestimate the importance of observability around ${kw}. Instrumentation, traces, and clear metrics are essential for continuous improvement.`,
      (kw) => `Integrating ${kw} with existing systems (APIs, webhooks, or data lakes) requires clear contracts and robust retry/error handling to be production-ready.`,
      (kw) => `Security and privacy considerations for ${kw} must be surfaced early. Design for least privilege, secrets management, and compliance to avoid rework.`,
      (kw) => `From a user-experience perspective, ${kw} should be validated with real users. Rapid prototyping helps discover edge cases and usage patterns.`,
      (kw) => `When measuring impact, use KPI-oriented metrics tied to ${kw} such as conversion lift, time saved, or reduction in manual steps.`,
      (kw) => `Operational cost of ${kw} includes compute, storage (e.g. vector DBs for retrieval), and engineering time for maintenance.`,
      (kw) => `Automations around ${kw} should support graceful degradation and fallbacks to manual processes when necessary.`,
      (kw) => `Vendor selection for ${kw} should be guided by roadmap fit, SLAs, integration capability, and total cost rather than feature checklists alone.`
    ];

    // Build content blocks
    const blocks = [];

    // Overview
    blocks.push(`Overview:\n${seededChoice(seed + 'intro', intros)}`);
    // Add an extended multi-paragraph overview (2-4 paragraphs)
    for (let i = 0; i < 3; i++) {
      const kw = keywords[(hashCode(seed + 'o' + i) % keywords.length) || 0] || keywords[0] || category;
      const tmpl = paragraphTemplates[(hashCode(seed + 'op' + i) % paragraphTemplates.length)];
      blocks.push(tmpl ? tmpl(kw) : `This section covers ${kw} in detail and why it matters.`);
    }

    // Key Concepts
    blocks.push(`Key Concepts:\n${seededChoice(seed + 'concept', conceptOpeners)}`);
    const conceptBullets = [];
    const concepts = [
      'Architecture and system design',
      'Data strategy and storage',
      'Operational observability',
      'Security and governance',
      'User experience and feedback loops',
      'Measurement and KPIs',
      'Cost optimization and scalability'
    ];
    // choose 5 concepts deterministically
    for (let i = 0; i < 5; i++) {
      const c = concepts[(hashCode(seed + 'c' + i) % concepts.length)];
      const kw = keywords[(hashCode(seed + 'ck' + i) % keywords.length) || 0] || category;
      conceptBullets.push(`- ${c}: practical considerations for ${c.toLowerCase()} with emphasis on ${kw}.`);
    }
    blocks.push(conceptBullets.join('\n'));

    // Deep-dive paragraphs (6-8 paragraphs)
    for (let i = 0; i < 8; i++) {
      const kw = keywords[(hashCode(seed + 'd' + i) % keywords.length) || 0] || keywords[0] || category;
      const tmpl = paragraphTemplates[(hashCode(seed + 'dt' + i) % paragraphTemplates.length)];
      blocks.push(tmpl ? tmpl(kw) : `This paragraph expands on ${kw} and offers tactical guidance.`);
    }

    // Case Studies
    blocks.push(`Case Studies:\n${seededChoice(seed + 'case', caseOpeners)}`);
    // Compose 3 case-study style paragraphs
    for (let i = 0; i < 3; i++) {
      const company = ['A fast-growing startup', 'An enterprise sales org', 'A mid-market platform'][i % 3];
      const outcome = ['reduced time-to-resolution by 30%', 'increased lead qualification by 2x', 'cut operational costs by half'][i % 3];
      const kw = keywords[(hashCode(seed + 'cs' + i) % keywords.length) || 0] || keywords[0] || category;
      blocks.push(`${company} implemented solutions centered on ${kw} and ${outcome}. The lessons learned included careful instrumentation, gradual rollout, and strong cross-functional ownership.`);
    }

    // Best Practices: bullets + explanatory paragraphs
    blocks.push(`Best Practices:\n${seededChoice(seed + 'best', bestPracticeOpeners)}`);
    const best = [
      '- Start small with clear success metrics and iterate.',
      '- Build observability into the system from day one.',
      '- Use feature flags and staged rollouts to reduce risk.',
      '- Prioritize data quality and governance.',
      '- Automate repetitive tasks but design human-in-the-loop for edge cases.'
    ];
    blocks.push(best.join('\n'));

    for (let i = 0; i < 4; i++) {
      const kw = keywords[(hashCode(seed + 'bp' + i) % keywords.length) || 0] || category;
      blocks.push(`A practical tip for ${kw}: prioritize early validation and monitor key signals rather than trusting synthetic tests alone.`);
    }

    // Implementation notes (more detailed actionable steps)
    blocks.push(`Implementation Notes:\nPlan, prototype, and then productionize. The typical path includes:\n- Discovery and hypothesis definition\n- Prototype and user validation\n- Instrumentation and metrics\n- Gradual rollout and SLA definition`);
    for (let i = 0; i < 4; i++) {
      const kw = keywords[(hashCode(seed + 'imp' + i) % keywords.length) || 0] || category;
      blocks.push(`When implementing ${kw}, ensure you have appropriate rollback strategies and cost caps to avoid runaway spend.`);
    }

    // Advanced considerations
    blocks.push('Advanced Considerations:\nScalability, governance, and lifecycle management are long-term concerns. Plan for data drift, model retraining (if applicable), and vendor lock-in scenarios.');

    // Add several paragraphs that interweave many keywords to reach word target
    let fillerIndex = 0;
    while (true) {
      // Compose one paragraph referencing 2-3 keywords
      const kw1 = keywords[(hashCode(seed + 'f' + fillerIndex) % keywords.length) || 0] || category;
      const kw2 = keywords[(hashCode(seed + 'f2' + fillerIndex) % keywords.length) || 0] || category;
      const kw3 = keywords[(hashCode(seed + 'f3' + fillerIndex) % keywords.length) || 0] || category;
      blocks.push(`Practical integration of ${kw1}, ${kw2}, and ${kw3} involves creating small, testable interfaces that can be monitored and iterated on without large refactors. Focus on observable metrics like latency, error rate, throughput, and business KPIs such as conversion or time saved.`);
      fillerIndex++;
      // check current approximate word count
      const current = blocks.join('\n\n').split(/\s+/).filter(Boolean).length;
      if (current >= 1000 || fillerIndex >= 30) break; // safety cap
    }

    // Conclusion
    blocks.push(`Conclusion:\n${seededChoice(seed + 'con', conclusionOpeners)}`);
    blocks.push(`Invest in the fundamentals: measurement, governance, and gradual rollouts. By treating ${title} as a product and tracking business outcomes, teams can move from prototypes to predictable production value.`);

    return blocks.join('\n\n');
  }

  // Specific post factories that call generateLongContent with relevant keywords and images
  function makeAI(i) {
    const titles = [
      'AI Agents in Production: Orchestration, Guardrails, and ROI',
      'Grounded Generation: Vector DBs, Retrieval, and Hallucination Control',
      'Prompt Engineering to Tooling: Building Reliable AI Workflows',
      'Latency, Cost, and Accuracy: Optimizing LLM Systems at Scale',
      'From Chatbots to Copilots: Designing Human-in-the-loop Systems',
      'Enterprise AI Governance: Privacy, Compliance, and Security',
      'Analytics on LLMs: Evaluations, Traces, and Continuous Tuning',
      'Multimodal AI: Vision, Speech, and Context Fusion for UX',
      'Fine-tuning vs RAG: When to Choose Which for Your Data',
      'AI Roadmaps: Pilot to Production with Measurable Milestones'
    ];
    const keywords = ['AI agents', 'orchestration', 'guardrails', 'RAG', 'vector database', 'embeddings', 'retrieval', 'observability', 'prompt engineering', 'latency', 'cost', 'accuracy'];
    const title = titles[i];
    const slug = slugify(title);
    const seed = `ai-${i}`;
    const content = generateLongContent({ title, category: 'AI', keywords, seed });
    // choose a keyword-based unsplash query to get a relevant image
    const imgQuery = keywords[i % keywords.length] || 'artificial-intelligence';
    const image = unsplashFor(imgQuery + ',technology');
    const imageAlt = `${title} - illustration of ${imgQuery}`;
    return { id: `ai-${i+1}`, category: 'ai', title, slug, excerpt: 'Production-ready AI agents with orchestration and guardrails.', content, image, imageAlt };
  }

  function makeNC(i) {
    const titles = [
      'No-code Automations: From Zapier to Advanced Workflows',
      'Low-code Apps: Shipping Internal Tools in Days, Not Months',
      'Scaling No-code: Governance, Security, and Maintainability',
      'APIs + No-code: Bridging Systems with Webhooks and Adapters',
      'Rapid Prototyping: Validate Ideas with No-code MVPs',
      'Data Pipelines with No-code: ETL, Syncs, and Quality',
      'No-code Chatbots: Forms to AI Assistants without Heavy Dev',
      'Low-code UX: Components, Theming, and Accessibility',
      'From Siloed Tools to Unified Workflows with No-code',
      'Choosing No-code vs Custom Dev: A Practical Framework'
    ];
    const keywords = ['no-code', 'low-code', 'Zapier', 'Make', 'webhooks', 'automation', 'MVP', 'ETL', 'internal tools', 'governance', 'security', 'integrations'];
    const title = titles[i];
    const slug = slugify(title);
    const seed = `nc-${i}`;
    const content = generateLongContent({ title, category: 'No-code / Low-code', keywords, seed });
    const imgQuery = keywords[i % keywords.length] || 'no-code';
    const image = unsplashFor(imgQuery + ',automation');
    const imageAlt = `${title} - ${imgQuery} illustration`;
    return { id: `nocode-${i+1}`, category: 'nocode', title, slug, excerpt: 'Ship faster with robust no-code/low-code workflows.', content, image, imageAlt };
  }

  function makeMK(i) {
    const titles = [
      'SEO in 2025: E-E-A-T, Topical Authority, and AI Content',
      'Performance Marketing: Full-funnel Measurement and ROAS',
      'Content Strategy: Pillars, Clusters, and Conversion Paths',
      'Email Automation: Welcome, Nurture, and Reactivation Flows',
      'Social Ads: Creative Iteration Loops and UGC at Scale',
      'CRO: Hypothesis-Driven A/B Tests and UX Heuristics',
      'Attribution: GA4, Server-side Tracking, and Privacy',
      'Local SEO: GBP, Reviews, and Intent-packed Pages',
      'B2B Demand Gen: LinkedIn, Webinars, and Lead Scoring',
      'Analytics: Dashboards, North-star Metrics, and QA'
    ];
    const keywords = ['SEO', 'E-E-A-T', 'topical authority', 'ROAS', 'CRO', 'GA4', 'server-side tracking', 'UGC', 'conversion rate', 'email automation', 'local SEO', 'analytics'];
    const title = titles[i];
    const slug = slugify(title);
    const seed = `mk-${i}`;
    const content = generateLongContent({ title, category: 'Digital Marketing', keywords, seed });
    const imgQuery = keywords[i % keywords.length] || 'marketing';
    const image = unsplashFor(imgQuery + ',marketing');
    const imageAlt = `${title} - ${imgQuery} visual`;
    return { id: `marketing-${i+1}`, category: 'marketing', title, slug, excerpt: 'Modern SEO, ads, content, and CRO with reliable analytics.', content, image, imageAlt };
  }

  for (let i = 0; i < 10; i++) POSTS.push(makeAI(i));
  for (let i = 0; i < 10; i++) POSTS.push(makeNC(i));
  for (let i = 0; i < 10; i++) POSTS.push(makeMK(i));

  function setRoute(slug) { location.hash = `#/blog/${slug}`; }
  function getRouteSlug() {
    const m = location.hash.match(/^#\/blog\/([a-z0-9-]+)/);
    return m ? m[1] : '';
  }

  function categoryLabel(key) { return ({ ai: 'AI', nocode: 'No-code / Low-code', marketing: 'Digital Marketing' }[key]) || key; }

  function formatContentToHTML(text) {
    const blocks = (text || '').split(/\n\n+/);
    const html = [];
    blocks.forEach(block => {
      const lines = block.split(/\n/);
      if (!lines.length) return;
      const first = lines[0];
      const rest = lines.slice(1);
      if (/^\w[\w\s/&-]*:\s*$/.test(first)) {
        const heading = first.replace(/:\s*$/, '').trim();
        html.push(`<h4>${heading}</h4>`);
        const listItems = rest.filter(l => /^-\s+/.test(l)).map(l => `<li>${l.replace(/^-\s+/, '')}</li>`);
        const paragraphs = rest.filter(l => !/^-\s+/.test(l) && l.trim().length > 0);
        if (listItems.length) html.push(`<ul>${listItems.join('')}</ul>`);
        if (paragraphs.length) html.push(`<p>${paragraphs.join(' ')}</p>`);
      } else if (/^-\s+/.test(first)) {
        const allItems = lines.map(l => `<li>${l.replace(/^-\s+/, '')}</li>`).join('');
        html.push(`<ul>${allItems}</ul>`);
      } else {
        html.push(`<p>${lines.join(' ')}</p>`);
      }
    });
    return html.join('');
  }

  function renderCategories(active) {
    categoryListEl.innerHTML = '';
    const all = document.createElement('li');
    all.innerHTML = `<a href="#" class="${active==='all'?'active':''}">All Posts (${POSTS.length})</a>`;
    all.querySelector('a').addEventListener('click', (e)=>{ e.preventDefault(); renderGrid('all'); });
    categoryListEl.appendChild(all);
    categories.forEach(cat => {
      const count = POSTS.filter(p=>p.category===cat.key).length;
      const li = document.createElement('li');
      li.innerHTML = `<a href="#" class="${active===cat.key?'active':''}">${categoryLabel(cat.key)} (${count})</a>`;
      li.querySelector('a').addEventListener('click', (e)=>{ e.preventDefault(); renderGrid(cat.key); });
      categoryListEl.appendChild(li);
    });
  }

  function renderTags() {
    const tagCloudEl = document.getElementById('tag-cloud');
    if (!tagCloudEl) return;
    const tags = ['AI agents','RAG','Vector DB','No-code','Low-code','Zapier','GA4','SEO','CRO','ROAS'];
    tagCloudEl.innerHTML = '';
    tags.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = t;
      tagCloudEl.appendChild(span);
    });
  }

  function renderGrid(filter) {
    renderCategories(filter||'all');
    renderTags();
    document.querySelector('.blog-grid-section').classList.add('single-post');
    gridEl.innerHTML = '';
    document.querySelector('.blog-grid-section').classList.remove('single-post');
    const list = (filter && filter!=='all') ? POSTS.filter(p=>p.category===filter) : POSTS;
    list.forEach(post => gridEl.appendChild(card(post)));
  }

  function card(post) {
    const art = document.createElement('article');
    art.className = 'blog-post-card';
    art.innerHTML = `
      <div class="post-image-placeholder">
        <img src="${post.image}" alt="${post.imageAlt}" loading="lazy" />
        <span class="post-category-badge">${categoryLabel(post.category)}</span>
      </div>
      <div class="post-content">
        <div class="post-meta">
          <span class="post-date">${new Date().toLocaleDateString()}</span>
          <span class="read-time">6 min read</span>
        </div>
        <h3><a href="#/blog/${post.slug}">${post.title}</a></h3>
        <p>${post.excerpt}</p>
        <div class="post-author-mini">
          <span>By Editorial Team</span>
        </div>
        <button class="read-more btn btn-primary" aria-expanded="false">Read More →</button>
      </div>
    `;
    const btn = art.querySelector('.read-more');
    btn.addEventListener('click', () => { setRoute(post.slug); });
    return art;
  }
  

  function renderPost(slug) {
    const post = POSTS.find(p => p.slug === slug);
    gridEl.innerHTML = '';
    document.querySelector('.blog-grid-section').classList.add('single-post');
    if (!post) {
      const nf = document.createElement('div');
      nf.className = 'blog-post-card';
      nf.innerHTML = `<div class="post-content"><h3>Post not found</h3><p>The article you are looking for does not exist.</p><p><a href="#/blog" class="btn-link">← Back to all posts</a></p></div>`;
      gridEl.appendChild(nf);
      window.scrollTo(0, 0);   // ⬅ scroll to top even on "not found"
      return;
    }
    const art = document.createElement('article');
    art.className = 'blog-post-card';
    art.innerHTML = `
      <div class="post-image-placeholder">
        <img src="${post.image}" alt="${post.imageAlt}" loading="lazy" />
        <span class="post-category-badge">${categoryLabel(post.category)}</span>
      </div>
      <div class="post-content">
        <div class="post-meta">
          <span class="post-date">${new Date().toLocaleDateString()}</span>
          <span class="read-time">8 min read</span>
        </div>
        <h2>${post.title}</h2>
        <div class="post-author-mini"><span>By Editorial Team</span></div>
        <div class="margin-16">
          <button type="button" class="btn btn-primary return-to-blogs">← Return to Blogs</button>
        </div>
        <div class="post-full">${formatContentToHTML(post.content)}</div>
        <div class="margin-top-16">
          <button type="button" class="btn btn-primary return-to-blogs">← Return to Blogs</button>
        </div>
      </div>
    `;
    gridEl.appendChild(art);
    // Wire up return buttons
    const returnButtons = art.querySelectorAll('.return-to-blogs');
    returnButtons.forEach(function(btn){
      btn.addEventListener('click', function(){ location.hash = '#/blog'; });
    });
    // Natural vertical scrolling; no transforms applied
    art.style.transform = '';
    art.style.transformOrigin = '';
    // ✅ Force top when a post is loaded
    window.scrollTo({ top: 400, behavior: 'smooth' });
  }

  function route() {
    const slug = getRouteSlug();
    if (slug) {
      // Hide sidebar via CSS class and skip rendering categories/tags for single post view
      document.querySelector('.blog-grid-section')?.classList.add('single-post');
      renderPost(slug);
      return;
    }
    // Leaving single-post view → show sidebar and render lists
    document.querySelector('.blog-grid-section')?.classList.remove('single-post');
    if (resizeHandler) { window.removeEventListener('resize', resizeHandler); resizeHandler = null; }
    renderCategories('all');
    renderTags();
    renderGrid('all');
  }

  window.addEventListener('hashchange', route);
  route();
})();
