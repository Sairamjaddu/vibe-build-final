(function() {
  var STORAGE_KEY = 'lang';
  var DEFAULT_LANG = 'en';
  var SUPPORTED = ['en', 'it'];

  var translations = {
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.about': 'About',
      'nav.blog': 'Blog',
      'nav.contact': 'Contact',

      // Index - Hero
      'home.hero.title': 'Transform Your Business with AI Innovation',
      'home.hero.subtitle': 'We help companies leverage cutting-edge artificial intelligence to automate workflows, enhance customer experiences, and drive unprecedented growth.',
      'home.hero.cta.primary': 'Get Started Today',
      'home.hero.cta.secondary': 'Explore Services',

      // Index - Services Preview
      'home.services.title': 'Our AI Solutions',
      'home.services.subtitle': 'Discover how our AI services can transform your business operations',
      'home.services.ai_automation.title': 'AI Automation',
      'home.services.ai_automation.desc': 'Automate workflows and operations with intelligent, reliable AI-driven processes.',
      'home.services.website.title': 'Website Development',
      'home.services.website.desc': 'Modern, fast, and responsive websites optimized for SEO and conversions.',
      'home.services.webapp.title': 'Web Application',
      'home.services.webapp.desc': 'Secure, scalable web apps and dashboards tailored to your business needs.',
      'home.services.chatbots.title': 'Chatbots',
      'home.services.chatbots.desc': '24/7 assistants for support, lead qualification, and guided workflows.',
      'home.services.marketing.title': 'Vibe Marketing',
      'home.services.marketing.desc': 'SEO, ads, content, and funnel optimization to drive measurable growth.',
      'home.services.mobapp.title': 'Mobile Applications',
      'home.services.mobapp.desc': 'SEO, ads, content, and funnel optimization to drive measurable growth.',

      // Index - Tools
      'home.tools.title': 'Featured AI Tools',
      'home.tools.subtitle': 'Try our cutting-edge AI tools designed for modern businesses',
      'home.tools.assistant.title': 'AI Assistant Demo',
      'home.tools.explore': 'Explore All Tools',

      // Index - Testimonials
      'home.testimonials.title': 'What Our Clients Say',
      'home.testimonials.q1': '"AI Agency transformed our customer service with their intelligent chatbot. We\'ve seen a 40% reduction in support tickets."',
      'home.testimonials.q2': '"The workflow automation solution saved us 20 hours per week. ROI was achieved within the first month."',
      'home.testimonials.q3': '"Their AI content tools helped us scale our content production by 300% while maintaining quality."',

      // Index - CTA
      'home.cta.title': 'Ready to Transform Your Business?',
      'home.cta.subtitle': 'Join hundreds of companies already using our AI solutions to drive growth and efficiency.',
      'home.cta.button': 'Start Your AI Journey',

      // Index - Contact preview
      'home.contact.title': 'Get In Touch',
      'home.contact.subtitle': 'Ready to discuss your AI project? We\'re here to help.',
      'home.contact.lets_talk': "Let's Talk",
      'home.contact.desc': 'We\'d love to hear about your project and how we can help you achieve your goals with AI.',
      'home.contact.email': 'hello@aiagency.com',
      'home.contact.phone': '+1 (555) 123-4567',
      'home.contact.city': 'San Francisco, CA',
      'form.name.label': 'Name *',
      'form.email.label': 'Email *',
      'form.phone.label': 'Phone Number *',
      'form.subject.label': 'Subject *',
      'form.message.label': 'Message *',
      'form.submit': 'Send Message',
      'ph.name': 'Your name',
      'ph.email': 'Your email address',
      'ph.phone': 'Enter phone number',
      'ph.subject': 'What is this about?',
      'ph.message': 'Write your message...',

      // Page hero generic
      'page.services.title': 'Our Services',
      'page.services.subtitle': 'Focused, high-impact solutions tailored to your goals',

      // Services detail common
      'cta.consult.title': 'Not Sure Which Service is Right for You?',
      'cta.consult.subtitle': 'Schedule a free consultation to discuss your goals and roadmap.',
      'cta.consult.button': 'Book Free Consultation',
      'cta.get_started': 'Get Started',

      // About page
      'about.title': 'About Us',
      'about.subtitle': 'We are passionate innovators, helping businesses unlock the power of AI to automate, scale, and transform their operations.',
      'about.who.title': 'Who We Are',
      'about.who.p1': 'Our agency specializes in developing AI-driven solutions that empower organizations to stay ahead in the digital era. From predictive analytics to intelligent chatbots, we craft tools that solve real business challenges.',
      'about.who.p2': 'With a team of skilled engineers, data scientists, and designers, we blend creativity with technology to deliver impactful experiences. We believe AI should be accessible, practical, and human-centered.',
      'about.values.title': 'Our Core Values',
      'about.values.subtitle': 'The principles that guide our work and relationships.',
      'about.values.innovation': 'Innovation',
      'about.values.innovation.desc': 'We push boundaries, delivering cutting-edge AI solutions that inspire growth.',
      'about.values.collaboration': 'Collaboration',
      'about.values.collaboration.desc': 'We work closely with our clients, ensuring solutions are tailored to their needs.',
      'about.values.impact': 'Impact',
      'about.values.impact.desc': 'We create technology that not only benefits businesses but also society at large.',

      // Blogs page
      'blogs.title': 'AI Insights & Updates',
      'blogs.subtitle': 'Stay ahead of the curve with expert insights, industry trends, and practical guides from our specialists',
      'blogs.categories': 'Categories',
      'blogs.quicknav': 'Quick Navigation',
      'blogs.newsletter.title': 'Stay Updated with AI Trends',
      'blogs.newsletter.desc': 'Get the latest AI insights, industry updates, and exclusive content delivered to your inbox weekly.',
      'blogs.newsletter.cta': 'Subscribe',
      'blogs.newsletter.privacy': 'We respect your privacy. Unsubscribe at any time.',

      // Contact page
      'contact.title': 'Contact Us',
      'contact.subtitle': "We'd love to learn about your goals and how we can help",
      'contact.lets_talk': "Let's Talk",
      'contact.desc': 'Share a few details and our team will get back to you shortly.',
      'contact.submit': 'Submit',

      // Footer
      'footer.brand.title': 'AI Agency',
      'footer.brand.desc': 'Transforming businesses with cutting-edge artificial intelligence solutions.',
      'footer.quick_links': 'Quick Links',
      'footer.services': 'Services',
      'footer.follow': 'Follow Us',
      'footer.copyright': '© 2025 AI Agency. All rights reserved.'
    },
    it: {
      // Navigation
      'nav.home': 'Home',
      'nav.services': 'Servizi',
      'nav.about': 'Chi Siamo',
      'nav.blog': 'Blog',
      'nav.contact': 'Contatti',

      // Index - Hero
      'home.hero.title': 'Trasforma il tuo business con l’innovazione AI',
      'home.hero.subtitle': 'Aiutiamo le aziende a sfruttare l’intelligenza artificiale per automatizzare i processi, migliorare l’esperienza cliente e accelerare la crescita.',
      'home.hero.cta.primary': 'Inizia Oggi',
      'home.hero.cta.secondary': 'Scopri i Servizi',

      // Index - Services Preview
      'home.services.title': 'Le nostre soluzioni AI',
      'home.services.subtitle': 'Scopri come i nostri servizi AI possono trasformare le tue operazioni',
      'home.services.ai_automation.title': 'Automazione AI',
      'home.services.ai_automation.desc': 'Automatizza i flussi di lavoro con processi intelligenti e affidabili basati su AI.',
      'home.services.website.title': 'Sviluppo Siti Web',
      'home.services.website.desc': 'Siti moderni, veloci e responsive ottimizzati per SEO e conversioni.',
      'home.services.webapp.title': 'Applicazioni Web',
      'home.services.webapp.desc': 'App web sicure e scalabili su misura per il tuo business.',
      'home.services.chatbots.title': 'Chatbot',
      'home.services.chatbots.desc': 'Assistenti 24/7 per supporto, qualificazione lead e flussi guidati.',
      'home.services.marketing.title': 'Marketing Digitale',
      'home.services.marketing.desc': 'SEO, advertising, contenuti e ottimizzazione funnel per crescita misurabile.',
      'home.services.mobile.title': 'Applicazioni mobili',
      'home.services.mobile.desc': 'SEO, ads, content, and funnel optimization to drive measurable growth.',

      // Index - Tools
      'home.tools.title': 'Strumenti AI in evidenza',
      'home.tools.subtitle': 'Prova i nostri strumenti AI all’avanguardia per le aziende moderne',
      'home.tools.assistant.title': 'Demo Assistente AI',
      'home.tools.explore': 'Scopri tutti gli strumenti',

      // Index - Testimonials
      'home.testimonials.title': 'Cosa dicono i nostri clienti',
      'home.testimonials.q1': '"AI Agency ha trasformato il nostro supporto clienti con un chatbot intelligente. -40% ticket di assistenza."',
      'home.testimonials.q2': '"L’automazione dei flussi ci ha risparmiato 20 ore a settimana. ROI nel primo mese."',
      'home.testimonials.q3': '"I loro strumenti di contenuti AI hanno aumentato la produzione del 300% mantenendo la qualità."',

      // Index - CTA
      'home.cta.title': 'Pronto a trasformare il tuo business?',
      'home.cta.subtitle': 'Unisciti alle aziende che usano le nostre soluzioni AI per crescere ed essere efficienti.',
      'home.cta.button': 'Inizia il tuo percorso AI',

      // Index - Contact preview
      'home.contact.title': 'Contattaci',
      'home.contact.subtitle': 'Pronto a parlare del tuo progetto AI? Siamo qui per aiutarti.',
      'home.contact.lets_talk': 'Parliamone',
      'home.contact.desc': 'Raccontaci il tuo progetto e come possiamo aiutarti a raggiungere i tuoi obiettivi con l’AI.',
      'home.contact.email': 'hello@aiagency.com',
      'home.contact.phone': '+1 (555) 123-4567',
      'home.contact.city': 'San Francisco, CA',
      'form.name.label': 'Nome *',
      'form.email.label': 'Email *',
      'form.phone.label': 'Telefono *',
      'form.subject.label': 'Oggetto *',
      'form.message.label': 'Messaggio *',
      'form.submit': 'Invia Messaggio',
      'ph.name': 'Il tuo nome',
      'ph.email': 'La tua email',
      'ph.phone': 'Inserisci numero di telefono',
      'ph.subject': 'Di cosa si tratta?',
      'ph.message': 'Scrivi il tuo messaggio...',

      // Page hero generic
      'page.services.title': 'I Nostri Servizi',
      'page.services.subtitle': 'Soluzioni mirate, ad alto impatto per i tuoi obiettivi',

      // Services detail common
      'cta.consult.title': 'Non sai quale servizio fa per te?',
      'cta.consult.subtitle': 'Prenota una consulenza gratuita per discutere obiettivi e roadmap.',
      'cta.consult.button': 'Prenota consulenza gratuita',
      'cta.get_started': 'Inizia',

      // About page
      'about.title': 'Chi Siamo',
      'about.subtitle': 'Siamo innovatori appassionati: aiutiamo le aziende a sfruttare l’AI per automatizzare, scalare e trasformare le operazioni.',
      'about.who.title': 'Chi siamo',
      'about.who.p1': 'Sviluppiamo soluzioni AI che aiutano le organizzazioni a rimanere al passo. Dall’analisi predittiva ai chatbot intelligenti, realizziamo strumenti per problemi reali.',
      'about.who.p2': 'Con un team di ingegneri, data scientist e designer, uniamo creatività e tecnologia. Crediamo in un’AI accessibile, pratica e human-centered.',
      'about.values.title': 'I nostri valori',
      'about.values.subtitle': 'I principi che guidano il nostro lavoro e le relazioni.',
      'about.values.innovation': 'Innovazione',
      'about.values.innovation.desc': 'Spingiamo i limiti con soluzioni AI all’avanguardia che ispirano crescita.',
      'about.values.collaboration': 'Collaborazione',
      'about.values.collaboration.desc': 'Lavoriamo a stretto contatto con i clienti, su soluzioni su misura.',
      'about.values.impact': 'Impatto',
      'about.values.impact.desc': 'Creiamo tecnologia utile alle aziende e alla società.',

      // Blogs page
      'blogs.title': 'Approfondimenti e aggiornamenti AI',
      'blogs.subtitle': 'Rimani avanti con insight, trend di settore e guide pratiche dei nostri specialisti',
      'blogs.categories': 'Categorie',
      'blogs.quicknav': 'Navigazione rapida',
      'blogs.newsletter.title': 'Rimani aggiornato sulle tendenze AI',
      'blogs.newsletter.desc': 'Ricevi aggiornamenti settimanali con insight, novità e contenuti esclusivi.',
      'blogs.newsletter.cta': 'Iscriviti',
      'blogs.newsletter.privacy': 'Rispettiamo la tua privacy. Puoi disiscriverti in qualsiasi momento.',

      // Contact page
      'contact.title': 'Contatti',
      'contact.subtitle': 'Ci interessa conoscere i tuoi obiettivi e come possiamo aiutarti',
      'contact.lets_talk': 'Parliamone',
      'contact.desc': 'Raccontaci qualche dettaglio e ti ricontatteremo a breve.',
      'contact.submit': 'Invia'
    }
  };

  function getSavedLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    document.documentElement.setAttribute('lang', lang);
    applyTranslations(lang);
    updateButtons(lang);
    saveLang(lang);
  }

  function applyTranslations(lang) {
    var dict = translations[lang] || {};
    // Text content
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (dict[key]) {
        nodes[i].textContent = dict[key];
      } else {
        // Fallback to English if translation is missing
        if (lang !== 'en' && translations.en && translations.en[key]) {
          nodes[i].textContent = translations.en[key];
        } else {
          // Final fallback: use the key itself for debugging
          if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production') {
            console.warn('Translation missing for key:', key, 'in language:', lang);
          }
          // Keep the original content
        }
      }
    }
    // Attributes
    var attrMap = [
      { selector: '[data-i18n-placeholder]', attr: 'placeholder', data: 'data-i18n-placeholder' },
      { selector: '[data-i18n-aria-label]', attr: 'aria-label', data: 'data-i18n-aria-label' },
      { selector: '[data-i18n-title]', attr: 'title', data: 'data-i18n-title' }
    ];
    for (var a = 0; a < attrMap.length; a++) {
      var cfg = attrMap[a];
      var inputs = document.querySelectorAll(cfg.selector);
      for (var j = 0; j < inputs.length; j++) {
        var k = inputs[j].getAttribute(cfg.data);
        if (dict[k]) {
          inputs[j].setAttribute(cfg.attr, dict[k]);
        } else if (lang !== 'en' && translations.en && translations.en[k]) {
          // Fallback to English for attributes too
          inputs[j].setAttribute(cfg.attr, translations.en[k]);
        }
      }
    }
  }

  function updateButtons(lang) {
    var label = lang.toUpperCase();
    var desktop = document.getElementById('lang-toggle');
    var mobile = document.getElementById('lang-toggle-mobile');
    if (desktop) desktop.textContent = label;
    if (mobile) mobile.textContent = label;
  }

  function toggleLang() {
    var current = document.documentElement.getAttribute('lang') || getSavedLang();
    var next = current === 'en' ? 'it' : 'en';
    setLang(next);
  }

  function init() {
    var initial = getSavedLang();
    setLang(initial);
    var desktop = document.getElementById('lang-toggle');
    var mobile = document.getElementById('lang-toggle-mobile');
    if (desktop) desktop.addEventListener('click', toggleLang);
    if (mobile) mobile.addEventListener('click', toggleLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


