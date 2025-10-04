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
      'home.services.mobapp.desc': ' Custom mobile applications designed for iOS and Android to enhance user engagement and streamline business processes.',

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
       //ai automation page
      'ser.title':'AI Workflow Automation Services',
      'ser.subtitle':'Simplify your business operations and boost productivity with our expert AI workflow automation solutions designed to streamline processes, cut costs, and deliver measurable results for organizations of every size.',
      'ser.icon':'Custom AI Workflow Automation',
      'ser.content1':'Our AI workflow automation services help businesses design and implement intelligent workflows that integrate seamlessly across departments. From marketing and sales pipelines to HR, finance, and customer support, we eliminate manual tasks, reduce human error, and ensure efficiency at every stage. With real-time analytics and adaptive process orchestration, your business gains the flexibility to scale faster and operate smarter.',
      'ser.content2':'AI workflow automation helps businesses streamline operations by combining process automation tools with intelligent decision-making. From CRM and helpdesk integrations through Zapier, Make, or APIs to human-in-the-loop safety guardrails, AI-driven workflows reduce manual effort, eliminate errors, and ensure seamless collaboration across teams. Organizations can map processes, orchestrate tasks, and optimize operations with real-time insights—saving time and cutting costs.  With advanced analytics and continuous optimization, AI workflow automation goes beyond simple task automation to deliver smarter, adaptive processes. Businesses can enhance efficiency, improve customer experiences, and scale effortlessly across departments like sales, support, HR, and operations. By adopting the right automation tools, companies future-proof their workflows and unlock a powerful competitive advantage.',
      'ser.list1':'Process mapping and orchestration',
      'ser.list2':'CRM/helpdesk integrations (Zapier/Make/APIs)',
      'ser.list3':'Human-in-the-loop and safety guardrails',
      'ser.list4':'Analytics and continuous optimization',
      'ser.det':'Our AI Workflow Automation Services',
      'ser.det1':'Custom Workflow Design',
      'ser.det2':'AI Chatbot Integration',
      'ser.det3':'Process Orchestration Tools',
      'ser.det4':'Analytics and Optimization',
      'ser.cont1':'We design end-to-end AI workflow automation systems that align with your unique business requirements. From mapping existing processes to building intelligent workflows, we ensure your organization saves time and achieves measurable ROI.',
      'ser.cont2':'Combine conversational AI with AI workflow automation to deliver customer support, lead generation, and onboarding at scale. Our chatbots connect directly to your workflows, reducing response times and improving customer satisfaction.',
      'ser.cont3':'With platforms like Zapier, Make, and API-driven systems, we orchestrate complex workflows that bring together multiple apps and services. These tools enhance your AI workflow automation by ensuring smooth integration across departments.',
      'ser.cont4':'We don’t just automate processes—we continuously optimize them. Our AI workflow automation includes monitoring tools and performance dashboards that provide real-time insights into efficiency, bottlenecks, and ROI.',
      'ser.val.head':'Our Core Values in AI Workflow Automation',
      'ser.val1':'Innovation',
      'ser.val2':'Collaboration',
      'ser.val3':'Impact',
      'ser.val1.cont':'We deliver cutting-edge AI workflow automation strategies that adapt to your evolving business needs.',
      'ser.val2.cont':'Our solutions empower both AI and human teams to work together for maximum efficiency.',
      'ser.val3.cont':'Every AI workflow automation system we deploy is designed to deliver measurable business results.',
      'cta.content1':'Ready to Automate Your Workflows?',
      'cta.content2':'Schedule a free consultation and discover how AI workflow automation can transform your business operations, boost efficiency, and reduce costs.',
      'cta.bfc':'Book Free Consultation',

      // website development
      'p.title':'Responsive Web Design Services',
      'p.subtitle':'Build fast, mobile-friendly, and scalable websites tailored for your business growth.',
      'p.service':'Professional Website Development',
      'p.ser.cont1':'At AI Agency, we specialize in Responsive Web Design that ensures your website looks stunning and performs flawlessly across desktops, tablets, and smartphones. With more than half of web traffic coming from mobile devices, a responsive layout is no longer optional—it is essential for conversions, SEO, and user satisfaction.',
      'p.ser.cont2':'We build secure, scalable web applications and dashboards designed to meet your business needs. With a focus on performance, usability, and security, our solutions are tailored to handle everything from data-heavy platforms to customer-facing apps.By leveraging authentication/SSO, RBAC (role-based access control), automated testing, and monitoring, we ensure reliability, compliance, and smooth user experiences.',
      'p.ser.cont3':'Our approach prioritizes API-first architecture and data modeling, enabling seamless integrations, future scalability, and faster feature development. Combined with cloud-native deployments, CI/CD pipelines, and modern frameworks, we deliver web apps that are not only powerful and flexible but also optimized for growth and long-term success.',
      'p.li1':'Mobile-first, Responsive Web Design for all devices',
      'p.li2':'SEO-optimized layouts that improve visibility',
      'p.li3':'Design system and scalable component libraries',
      'p.li4':'Integration with CDNs, caching, and CI/CD pipelines',
      'p.li5':'Accessibility-first approach following WCAG guidelines',
      'p.sec.title':'Our Core Values in Responsive Web Design',
      'p.sec.subtitle':'The foundation behind every website we create',
      'p.st1':'Innovation',
      'p.st2':'Collaboration',
      'p.st3':'Impact',
      'p.st1.cont':'We constantly explore new technologies to deliver innovative Responsive Web Design solutions. From advanced animations to AI-driven personalization, we ensure your site stands out.',
      'p.st2.cont':'Your business goals guide our process. By collaborating closely with you, we craft Responsive Web Design strategies that align with your brand identity and user needs.',
      'p.st3.cont':'Our mission is not just to design websites but to create lasting impact. With Responsive Web Design , we ensure your digital presence grows revenue, builds trust, and scales with your vision.',
      'p.cont1':'Ready to Elevate Your Business with Responsive Web Design?',
      'p.cont2':'Our experts can help you identify gaps, plan a strategy, and build a website that grows with your business. Schedule a free consultation and see how Responsive Web Design can transform your online presence.',

      // web application
      'q.title':'Web Application Development Services',
      'q.subtitle':'Empower your business with scalable, secure, and high-performance web application development tailored to your goals.',
      'q.service':'Web Application Development',
      'q.ser.cont1':'In today’s digital-first world, Web Application Development is the backbone of business transformation. Our agency specializes in building intuitive, secure, and scalable web applications—ranging from custom CRMs and client portals to enterprise-grade solutions—that help you streamline workflows, engage customers, and scale efficiently.',
      'q.ser.cont2':'We build secure, scalable web applications and dashboards designed to meet your business needs.With a focus on performance, usability, and security, our solutions are tailored to handle everything from data-heavy platforms to customer-facing apps. By leveraging authentication/SSO,RBAC (role-based access control), automated testing, and monitoring, we ensure reliability,compliance, and smooth user experiences.',
      'q.ser.cont3':'Our approach prioritizes API-first architecture and data modeling, enabling seamless integrations,future scalability, and faster feature development. Combined with cloud-native deployments, CI/CD pipelines, and modern frameworks, we deliver web apps that are not only powerful and flexible but also optimized for growth and long-term success.',
      'q.ser.cont4':' By leveraging modern frameworks and AI-driven enhancements, we ensure your applications stay future-ready, delivering measurable business value while reducing manual work and improving productivity.',
      'q.li1':'Custom solutions aligned with your business goals',
      'q.li2':'API-first architecture with seamless integrations',
      'q.li3':'Authentication, SSO, and role-based access control',
      'q.li4':'Cloud-native deployment, monitoring, and automation',
      'q.li5':'Enhanced security, compliance, and automated QA testing',
      'q.li6':'Seamless user experiences across all devices',
      'q.cont':'Our Core Values in Web Application Development',
      'q.cont.det':'Every project we deliver is guided by values that ensure long-term success. When choosing our Web Application Development services, you gain a partner committed to excellence, innovation, and impact.',
      'q.card1':'Innovation',
      'q.card2':'Collaboration',
      'q.card3':'Scalability',
      'q.card4':'Impact',
      'q.card1.det':'We embrace new technologies and frameworks to create Web Application Development solutions that drive innovation and set you apart in the market.',
      'q.card2.det':'Our team works hand-in-hand with your stakeholders, ensuring that every Web Application Development project is customized to fit your business needs.',
      'q.card3.det':' We design applications with future growth in mind, ensuring that our Web Application Development services support your evolving goals.',
      'q.card4.det':'Beyond code, we focus on delivering measurable business impact, making Web Application Development a true driver of ROI.',
      'q.cont1':'Ready to Build Powerful Web Applications?',
      'q.cont2':'Book a free consultation today and explore how our custom web application solutions can streamline your business, boost efficiency, and enhance user experience.',

      // chatbots page
      'r.title':'AI Chatbot Development Services',
      'r.subtitle':'Transform your customer interactions with our AI-powered chatbots.Deliver 24/7 support, automate repetitive queries, qualify leads, and streamline workflows across websites, WhatsApp, and CRM platforms for businesses of every size.',
      'r.service':'Custom AI Chatbots',
      'r.ser.cont1':'We design AI-powered chatbots that act as 24/7 assistants for customer support,lead qualification, and guided workflows. Using intent detection, knowledge grounding, and natural language understanding, our bots deliver accurate, context-aware responses across channels like websites, WhatsApp, and CRMs.',
      'r.ser.cont2':'They handle FAQs, automate repetitive queries, and escalate to human agents when needed, ensuring seamless service. With analytics-driven optimization and continuous learning, our chatbots reduce response times, improve customer satisfaction, and stay aligned with your business goals.',
      'r.ser.cont3':'We specialize in AI chatbot development services that empower businesses with 24/7 virtual assistants for customer support, lead generation, and guided workflows. Our AI chatbots use advanced intent detection, knowledge grounding, and natural language understanding (NLU) to deliver accurate, context-aware responses across industries.',
      'r.ser.cont4':'Our customer support chatbots are designed to provide seamless service while maintaining a human touch. With features like live agent handoffs, escalation paths, and analytics-driven optimization, these AI-powered chatbots go beyond answering FAQs. They continuously learn, adapt, and deliver smarter  conversations over time.By combining automation with human-in-the-loop chatbot controls, we ensure your support system stays reliable, efficient, and aligned with your business goals. From reducing operational costs to improving service availability, our chatbot solutions transform how businesses interact with customers.',
      'r.li1':'End-to-end workflow mapping and optimization',
      'r.li2':'Integration with CRMs, ERPs, and third-party APIs',
      'r.li3':'Automated notifications, approvals, and reporting',
      'r.li4':'Human-in-the-loop guardrails for secure decision making',
      'r.li5':'Performance dashboards with real-time insights',
      'r.ser.title':'Our Core Values',
      'r.ser.subtitle':'The foundation of our AI chatbot development approach.',
      'r.card1':'Innovation',
      'r.card2':'Collaboration',
      'r.card3':'Impact',
      'r.card1.det':'We constantly experiment with new frameworks, algorithms, and design methods to deliver the most advanced AI chatbot development solutions.',
      'r.card2.det':'Our clients are partners. We involve you at every step of the AI chatbot development process to ensure solutions align with your goals.',
      'r.card3.det':'We believe AI chatbot development should do more than save costs. Our solutions enhance customer experiences and create long-lasting value.',
      'r.cont1':'Not Sure if AI Chatbot Development is Right for You?',
      'r.cont2':'Schedule a free consultation with our team of experts. We’ll assess your business challenges and create a roadmap for a tailored chatbot solution.',
      
      //vibe marketing
      's.title':'Vibe Marketing Services',
      's.subtitle':'Transform your brand presence with AI-powered Vibe Marketing strategies designed for growth, engagement, and measurable success.',
      's.service':'Vibe Marketing', 
      's.det1':'Vibe Marketing is our signature service at VIBEBUILD, where creativity meets technology. Unlike traditional digital marketing, it blends psychology, storytelling, artificial intelligence, and real-time analytics to create campaigns that resonate emotionally with your audience.',
      's.det2':'By focusing on vibes—your brand’s mood, energy, and impact—we ensure every touchpoint is consistent, memorable, and powerful. From AI-powered ads and social campaigns to influencer collaborations and customer journey automation, our framework adapts to your business goals.',
      's.det3':' We help brands grow with data-driven marketing strategies that combine SEO, ads, content, and funnel optimization. From technical SEO, content creation, and authority building to  Google and Meta ads with advanced conversion tracking, our approach ensures measurable  results. We focus on driving qualified traffic, improving visibility, and converting clicks into loyal customers.',
      's.det4':'With the power of AI marketing, we optimize campaigns through automation, personalization, and data insights.Our solutions include content and email automations, funnel testing, and CRO (conversion rate optimization) experiments to maximize ROI. By blending creativity  with intelligent automation, we deliver marketing strategies that adapt, scale, and  consistently drive growth.',
      's.li1':'AI-Powered Social Media CampaignAI-Powered Social Media Campaigns – Trend-driven campaigns to boost engagement and recall.',
      's.li2':'Influencer & Community Vibe Marketing – Partnering with creators who match your brand’s energy.',
      's.li3':'Customer Journey Automation – AI-driven emails, chatbots, and personalized flows.',
      's.li4':'Performance Ads – Conversion-optimized Facebook, Instagram, and Google Ads.',
      's.li5':'Storytelling & Content Creation – Content that embodies your unique brand vibe.',
      'cta.syvmj':'Start Your Vibe Marketing Journey',
      's.sec.title':'Our Core Vibe Marketing Values',
      's.sec.subtitle':'These values ensure every Vibe Marketing campaign we build delivers impact and authenticity.',
      's.card1':'Authenticity',
      's.card2':'Creativity',
      's.card3':'Innovation',
      's.card4':'Engagement',
      's.card5':'Impact',
      's.card1.det':'We craft campaigns that reflect your brand’s true identity, ensuring every message feels genuine and connects deeply with your audience.',
      's.card2.det':'Our Vibe Marketing approach thrives on storytelling, unique designs, and innovative campaigns that cut through digital noise.',
      's.card3.det':'By integrating AI tools, automation, and real-time analytics, we deliver smarter, more efficient campaigns for maximum results.',
      's.card4.det':'We prioritize conversations over clicks, ensuring your audience feels valued and part of your brand’s community.',
      's.card5.det':'Every Vibe Marketing strategy is built to drive measurable growth, from sales and leads to customer loyalty and advocacy.',
      's.cont1':'Ready to Elevate Your Brand with Vibe Marketing?',
      's.cont2':'Book a free consultation today to discover how our Vibe Marketing strategies can transform your digital presence.',

      // mobile application
      't.title':'Mobile App Development',
      't.subtitle':'Future-ready mobile applications designed for performance, scalability, and user engagement.',
      't.service':'Why Mobile App Development Matters',
      't.det1':'In today’s digital-first world, Mobile App Development is not just about creating an app,but about building seamless, intelligent, and secure digital experiences that elevate your brand. Whether you are a startup, enterprise, or eCommerce business, mobile apps serve as the bridge between your customers and your business objectives. With billions of smartphone users globally, businesses that invest in <strong>Mobile App Development</strong> unlock growth, customer loyalty, and operational efficiency.',
      't.det2':'At our AI Agency, we specialize in designing and developing feature-rich mobile applications for both Android and iOS platforms. From ideation to launch, our Mobile App Development services ensure intuitive design, smooth performance, and integration with cutting-edge technologies. We don’t just code apps—we craft experiences that align with your brand’s vision and users’ expectations.',
      't.det3':'Our expertise in Android app development ensures apps that are optimized for performance, security,and scalability. By leveraging the latest frameworks, SDKs, and Google Play best practices, we build apps that deliver seamless experiences while meeting your customers’ needs and driving business growth',
      't.li1':'Custom iOS and Android Mobile App Development',
      't.li2':'AI-powered app features like chatbots, personalization, and analytics',
      't.li3':'Integration with CRMs, eCommerce platforms, and APIs',
      't.li4':'Secure, scalable, and cloud-native mobile solutions',
      't.li5':'End-to-end support: strategy, design, development, and maintenance',
      't.sec.title':'Our Core Values in Mobile App Development',
      't.sec.subtitle':'We follow a value-driven approach to ensure every mobile application we build creates real impact.',
      't.card1':'Innovation',
      't.card2':'Collaboration',
      't.card3':'Impact',
      't.card1.det':'We bring creativity and cutting-edge technology into every Mobile App Development project, ensuring your app stands out in a crowded market.',
      't.card2.det':'Our process involves close communication with your team to deliver Mobile App Development solutions tailored to your unique business needs.',
      't.card3.det':'We measure success not by downloads but by the lasting value and  business outcomes generated through our <strong>Mobile App Development</strong> expertise.',
      't.cont1':'Ready to Build Your Mobile App?',
      't.cont2':'Let’s transform your vision into reality with our expert Mobile App Development services. Schedule a free consultation to discover the right strategy, features, and technologies for your project.',
      

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
      'home.services.marketing.title': 'Marketing delle vibrazioni',
      'home.services.marketing.desc': 'SEO, advertising, contenuti e ottimizzazione funnel per crescita misurabile.',
      'home.services.mobapp.title': 'Applicazioni mobili',
      'home.services.mobapp.desc': 'Applicazioni mobili personalizzate progettate per iOS e Android per migliorare il coinvolgimento degli utenti e semplificare i processi aziendali.',

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
      'contact.submit': 'Invia',
      //ai automation
      'ser.title':'Servizi di automazione del flusso di lavoro AI',
      'ser.subtitle':'Semplifica le tue operazioni aziendali e aumenta la produttività con le nostre soluzioni di automazione del flusso di lavoro basate sull intelligenza artificiale, progettate per ottimizzare i processi, ridurre i costi e fornire risultati misurabili per organizzazioni di ogni dimensione.',
      'ser.icon':'Automazione del flusso di lavoro AI personalizzato',
      'ser.content1':"I nostri servizi di automazione dei flussi di lavoro basati sull'intelligenza artificiale aiutano le aziende a progettare e implementare flussi di lavoro intelligenti che si integrano perfettamente tra i vari reparti. Dalle pipeline di marketing e vendita alle risorse umane, dalla finanza all'assistenza clienti, eliminiamo le attività manuali, riduciamo gli errori umani e garantiamo l'efficienza in ogni fase. Grazie all'analisi in tempo reale e all'orchestrazione adattiva dei processi, la tua azienda acquisisce la flessibilità necessaria per crescere più rapidamente e operare in modo più intelligente.",
      'ser.content2':"L'automazione del flusso di lavoro basata sull'intelligenza artificiale aiuta le aziende a semplificare le operazioni combinando strumenti di automazione dei processi con un processo decisionale intelligente. Dalle integrazioni CRM e helpdesk tramite Zapier, Make o API ai sistemi di sicurezza human-in-the-loop, i flussi di lavoro basati sull'intelligenza artificiale riducono lo sforzo manuale, eliminano gli errori e garantiscono una collaborazione fluida tra i team. Le organizzazioni possono mappare i processi, orchestrare le attività e ottimizzare le operazioni con informazioni in tempo reale, risparmiando tempo e riducendo i costi. Grazie all'analisi avanzata e all'ottimizzazione continua, l'automazione del flusso di lavoro basata sull'intelligenza artificiale va oltre la semplice automazione delle attività per offrire processi più intelligenti e adattivi. Le aziende possono aumentare l'efficienza, migliorare l'esperienza dei clienti e scalare senza sforzo tra reparti come vendite, supporto, risorse umane e operazioni. Adottando i giusti strumenti di automazione, le aziende rendono i propri flussi di lavoro a prova di futuro e sbloccano un potente vantaggio competitivo.",
      'ser.list1':'Mappatura e orchestrazione dei processi',
      'ser.list2':'Integrazioni CRM/helpdesk (Zapier/Make/API)',
      'ser.list3':'Human-in-the-loop e barriere di sicurezza',
      'ser.list4':'Analisi e ottimizzazione continua',
      'ser.det':'I nostri servizi di automazione del flusso di lavoro AI',
      'ser.det1':'Progettazione del flusso di lavoro personalizzato',
      'ser.det2':'Integrazione di chatbot con intelligenza artificiale',
      'ser.det3':'Strumenti di orchestrazione dei processi',
      'ser.det4':'Analisi e ottimizzazione',
      'ser.cont1':"Progettiamo sistemi di automazione dei flussi di lavoro basati sull'intelligenza artificiale end-to-end, in linea con le specifiche esigenze aziendali. Dalla mappatura dei processi esistenti alla creazione di flussi di lavoro intelligenti, garantiamo alla vostra organizzazione risparmi tempo e un ROI misurabile.",
      'ser.cont2':"Combina l'intelligenza artificiale conversazionale con l'automazione dei flussi di lavoro basati sull'intelligenza artificiale per offrire supporto clienti, generazione di lead e onboarding su larga scala. I nostri chatbot si collegano direttamente ai tuoi flussi di lavoro, riducendo i tempi di risposta e migliorando la soddisfazione del cliente.",
      'ser.cont3':"Con piattaforme come Zapier, Make e sistemi basati su API, orchestramo flussi di lavoro complessi che combinano più app e servizi. Questi strumenti migliorano l'automazione del flusso di lavoro basato sull'intelligenza artificiale garantendo un'integrazione fluida tra i reparti.",
      'ser.cont4':"Non ci limitiamo ad automatizzare i processi, li ottimizziamo costantemente. La nostra automazione del flusso di lavoro basata sull'intelligenza artificiale include strumenti di monitoraggio e dashboard delle prestazioni che forniscono informazioni in tempo reale su efficienza, colli di bottiglia e ROI.",
      'ser.val.head':"I nostri valori fondamentali nell'automazione del flusso di lavoro AI",
      'ser.val1':'Innovazione',
      'ser.val2':'Collaborazione',
      'ser.val3':'Impatto',
      'ser.val1.cont':"Forniamo strategie di automazione del flusso di lavoro basate sull'intelligenza artificiale all'avanguardia, che si adattano alle mutevoli esigenze della tua azienda.",
      'ser.val2.cont':'Le nostre soluzioni consentono sia ai team di intelligenza artificiale che a quelli umani di lavorare insieme per la massima efficienza.',
      'ser.val3.cont':"Ogni sistema di automazione del flusso di lavoro basato sull'intelligenza artificiale che implementiamo è progettato per fornire risultati aziendali misurabili.",
      'cta.content1':'Pronti ad automatizzare i vostri flussi di lavoro?',
      'cta.content2':"Prenota una consulenza gratuita e scopri come l'automazione del flusso di lavoro basata sull'intelligenza artificiale può trasformare le tue operazioni aziendali, aumentare l'efficienza e ridurre i costi.",
      'cta.bfc':'Prenota una consulenza gratuita',
      

      // website development
      'p.title':'Servizi di progettazione web reattiva',
      'p.subtitle':'Crea siti web veloci, ottimizzati per i dispositivi mobili e scalabili, pensati su misura per la crescita della tua attività.',
      'p.service':'Sviluppo di siti Web professionali',
      'p.ser.cont1':'Noi di AI Agency siamo specializzati nel Responsive Web Design, che garantisce al tuo sito web un aspetto accattivante e prestazioni impeccabili su desktop, tablet e smartphone. Con oltre la metà del traffico web proveniente da dispositivi mobili, un layout responsive non è più un optional: è essenziale per le conversioni, la SEO e la soddisfazione degli utenti.',
      'p.ser.cont2':"Sviluppiamo applicazioni web e dashboard sicure e scalabili, progettate per soddisfare le esigenze aziendali. Con un'attenzione particolare a prestazioni, usabilità e sicurezza, le nostre soluzioni sono progettate per gestire qualsiasi tipo di applicazione, dalle piattaforme ad alto contenuto di dati alle app rivolte al cliente. Sfruttando autenticazione/SSO, RBAC (controllo degli accessi basato sui ruoli), test automatizzati e monitoraggio, garantiamo affidabilità, conformità e un'esperienza utente fluida.",
      'p.ser.cont3':"Il nostro approccio privilegia l'architettura API-first e la modellazione dei dati, consentendo integrazioni fluide, scalabilità futura e sviluppo più rapido delle funzionalità. Grazie a implementazioni cloud-native, pipeline CI/CD e framework moderni, forniamo applicazioni web non solo potenti e flessibili, ma anche ottimizzate per la crescita e il successo a lungo termine.",
      'p.li1':'Web design reattivo e mobile-first per tutti i dispositivi',
      'p.li2':'Layout ottimizzati per SEO che migliorano la visibilità',
      'p.li3':'Sistema di progettazione e librerie di componenti scalabili',
      'p.li4':'Integrazione con CDN, caching e pipeline CI/CD',
      'p.li5':"Approccio basato sull'accessibilità secondo le linee guida WCAG",
      'p.sec.title':'I nostri valori fondamentali nel web design reattivo',
      'p.sec.subtitle':'Le fondamenta dietro ogni sito web che creiamo',
      'p.st1':'Innovazione',
      'p.st2':'Collaborazione',
      'p.st3':'Impatto',
      'p.st1.cont':"Esploriamo costantemente nuove tecnologie per offrire soluzioni innovative di Responsive Web Design. Dalle animazioni avanzate alla personalizzazione basata sull'intelligenza artificiale, garantiamo che il tuo sito si distingua.",
      'p.st2.cont':"I tuoi obiettivi aziendali guidano il nostro processo. Collaborando a stretto contatto con te, creiamo strategie di Responsive Web Design in linea con l'identità del tuo brand e le esigenze degli utenti.",
      'p.st3.cont':'La nostra missione non è solo progettare siti web, ma creare un impatto duraturo. Con il Responsive Web Design, garantiamo che la tua presenza digitale aumenti il ​​fatturato, crei fiducia e si adatti alla tua visione.',
      'p.cont1':'Pronto a far crescere la tua attività con il responsive web design?',
      'p.cont2':'I nostri esperti possono aiutarti a individuare le lacune, pianificare una strategia e creare un sito web che cresca con la tua attività. Prenota una consulenza gratuita e scopri come il Responsive Web Design può trasformare la tua presenza online.',

      // web application
      'q.title':'Servizi di sviluppo di applicazioni Web',
      'q.subtitle':'Potenzia la tua attività con uno sviluppo di applicazioni web scalabili, sicure e ad alte prestazioni, su misura per i tuoi obiettivi.',
      'q.service':'Sviluppo di applicazioni Web',
      'q.ser.cont1':'Nel mondo digitale di oggi, lo sviluppo di applicazioni web è la spina dorsale della trasformazione aziendale. La nostra agenzia è specializzata nella creazione di applicazioni web intuitive, sicure e scalabili, che spaziano da CRM e portali clienti personalizzati a soluzioni di livello enterprise, che aiutano a semplificare i flussi di lavoro, coinvolgere i clienti e scalare in modo efficiente.',
      'q.ser.cont2':"Sviluppiamo applicazioni web e dashboard sicure e scalabili, progettate per soddisfare le esigenze aziendali. Con un'attenzione particolare a prestazioni, usabilità e sicurezza, le nostre soluzioni sono progettate per gestire qualsiasi tipo di applicazione, dalle piattaforme ad alto contenuto di dati alle app rivolte al cliente. Sfruttando autenticazione/SSO, RBAC (controllo degli accessi basato sui ruoli), test automatizzati e monitoraggio, garantiamo affidabilità, conformità e un'esperienza utente fluida.",
      'q.ser.cont3':"Il nostro approccio privilegia l'architettura API-first e la modellazione dei dati, consentendo integrazioni fluide, scalabilità futura e sviluppo più rapido delle funzionalità. Grazie a implementazioni cloud-native, pipeline CI/CD e framework moderni, forniamo applicazioni web non solo potenti e flessibili, ma anche ottimizzate per la crescita e il successo a lungo termine.",
      'q.ser.cont4':"Sfruttando framework moderni e miglioramenti basati sull'intelligenza artificiale, garantiamo che le tue applicazioni siano pronte per il futuro, offrendo un valore aziendale misurabile e riducendo al contempo il lavoro manuale e migliorando la produttività.",
      'q.li1':'Soluzioni personalizzate in linea con i tuoi obiettivi aziendali',
      'q.li2':'Architettura API-first con integrazioni fluide',
      'q.li3':'Autenticazione, SSO e controllo degli accessi basato sui ruoli',
      'q.li4':'Distribuzione, monitoraggio e automazione cloud-native',
      'q.li5':'Sicurezza avanzata, conformità e test QA automatizzati',
      'q.li6':'Esperienze utente fluide su tutti i dispositivi',
      'q.cont':'I nostri valori fondamentali nello sviluppo di applicazioni Web',
      'q.cont.det':"Ogni progetto che realizziamo è guidato da valori che garantiscono il successo a lungo termine. Scegliendo i nostri servizi di sviluppo di applicazioni web, avrete a disposizione un partner impegnato nell'eccellenza, nell'innovazione e nell'impatto.",
      'q.card1':'Innovazione',
      'q.card2':'Collaborazione',
      'q.card3':'Scalabilità',
      'q.card4':'Impatto',
      'q.card1.det':"Adottiamo nuove tecnologie e framework per creare soluzioni di sviluppo di applicazioni Web che stimolano l'innovazione e ti distinguono sul mercato.",
      'q.card2.det':'Il nostro team lavora a stretto contatto con i tuoi stakeholder, assicurando che ogni progetto di sviluppo di applicazioni Web sia personalizzato in base alle esigenze della tua azienda.',
      'q.card3.det':'Progettiamo applicazioni tenendo conto della crescita futura, assicurandoci che i nostri servizi di sviluppo di applicazioni Web supportino i tuoi obiettivi in ​​continua evoluzione.',
      'q.card4.det':'Oltre al codice, ci concentriamo sulla realizzazione di un impatto aziendale misurabile, rendendo lo sviluppo di applicazioni Web un vero e proprio motore del ROI.',
      'q.cont1':'Pronti a creare potenti applicazioni Web?',
      'q.cont2':"Prenota oggi stesso una consulenza gratuita e scopri come le nostre soluzioni personalizzate per applicazioni web possono semplificare la tua attività, aumentare l'efficienza e migliorare l'esperienza utente.",

      // chatbots page
      'r.title':'Servizi di sviluppo di chatbot AI',
      'r.subtitle':"Trasforma le interazioni con i tuoi clienti con i nostri chatbot basati sull'intelligenza artificiale. Offri supporto 24 ore su 24, 7 giorni su 7, automatizza le query ripetitive, qualifica i lead e semplifica i flussi di lavoro su siti web, WhatsApp e piattaforme CRM per aziende di ogni dimensione.",
      'r.service':'Chatbot AI personalizzati',
      'r.ser.cont1':"Progettiamo chatbot basati sull'intelligenza artificiale che fungono da assistenti 24 ore su 24, 7 giorni su 7 per l'assistenza clienti, la qualificazione dei lead e i flussi di lavoro guidati. Utilizzando il rilevamento degli intenti, la knowledge base e la comprensione del linguaggio naturale, i nostri bot forniscono risposte accurate e contestuali su canali come siti web, WhatsApp e CRM.",
      'r.ser.cont2':"Gestiscono le FAQ, automatizzano le richieste ripetitive e le inoltrano agli operatori quando necessario, garantendo un servizio impeccabile. Grazie all'ottimizzazione basata sull'analisi dei dati e all'apprendimento continuo, i nostri chatbot riducono i tempi di risposta, migliorano la soddisfazione del cliente e rimangono in linea con i tuoi obiettivi aziendali.",
      'r.ser.cont3':"Siamo specializzati nello sviluppo di chatbot basati sull'intelligenza artificiale, che forniscono alle aziende assistenti virtuali 24 ore su 24, 7 giorni su 7 per l'assistenza clienti, la generazione di lead e flussi di lavoro guidati. I nostri chatbot basati sull'intelligenza artificiale utilizzano tecnologie avanzate di rilevamento degli intenti, knowledge grounding e comprensione del linguaggio naturale (NLU) per fornire risposte accurate e contestuali in tutti i settori.",
      'r.ser.cont4':"I nostri chatbot per l'assistenza clienti sono progettati per fornire un servizio impeccabile, mantenendo al contempo un tocco umano. Con funzionalità come il passaggio di consegne tra operatori in tempo reale, percorsi di escalation e ottimizzazione basata sull'analisi dei dati, questi chatbot basati sull'intelligenza artificiale vanno oltre la semplice risposta alle FAQ. Imparano, si adattano e offrono conversazioni sempre più intelligenti nel tempo. Combinando l'automazione con i controlli dei chatbot con intervento umano, garantiamo che il tuo sistema di supporto rimanga affidabile, efficiente e allineato ai tuoi obiettivi aziendali. Dalla riduzione dei costi operativi al miglioramento della disponibilità del servizio, le nostre soluzioni di chatbot trasformano il modo in cui le aziende interagiscono con i clienti.",
      'r.li1':'Mappatura e ottimizzazione del flusso di lavoro end-to-end',
      'r.li2':'Integrazione con CRM, ERP e API di terze parti',
      'r.li3':'Notifiche, approvazioni e report automatici',
      'r.li4':"Sistemi di protezione che coinvolgono l'uomo per un processo decisionale sicuro",
      'r.li5':'Dashboard delle prestazioni con informazioni in tempo reale',
      'r.ser.title':'I nostri valori fondamentali',
      'r.ser.subtitle':"Il fondamento del nostro approccio allo sviluppo di chatbot basati sull'intelligenza artificiale.",
      'r.card1':'Innovazione',
      'r.card2':'Collaborazione',
      'r.card3':'Impatto',
      'r.card1.det':"Sperimentiamo costantemente nuovi framework, algoritmi e metodi di progettazione per offrire le soluzioni di sviluppo di chatbot basati sull'intelligenza artificiale più avanzate.",
      'r.card2.det':'I nostri clienti sono partner. Ti coinvolgiamo in ogni fase del processo di sviluppo del chatbot AI per garantire che le soluzioni siano in linea con i tuoi obiettivi.',
      'r.card3.det':"Crediamo che lo sviluppo di chatbot basati sull'intelligenza artificiale debba fare molto di più che risparmiare sui costi. Le nostre soluzioni migliorano l'esperienza dei clienti e creano valore duraturo.",
      'r.cont1':"Non sei sicuro che lo sviluppo di chatbot basati sull'intelligenza artificiale sia adatto a te?",
      'r.cont2':'Prenota una consulenza gratuita con il nostro team di esperti. Valuteremo le sfide della tua azienda e creeremo una roadmap per una soluzione chatbot su misura.',

      //vibe marketing
      's.title':'Servizi di marketing delle vibrazioni',
      's.subtitle':"Trasforma la presenza del tuo marchio con strategie di Vibe Marketing basate sull'intelligenza artificiale, progettate per la crescita, il coinvolgimento e il successo misurabile.",
      's.service':'Marketing delle vibrazioni', 
      's.det1':'Vibe Marketing è il nostro servizio di punta presso VIBEBUILD, dove la creatività incontra la tecnologia. A differenza del marketing digitale tradizionale, unisce psicologia, storytelling, intelligenza artificiale e analisi in tempo reale per creare campagne che colpiscono emotivamente il tuo pubblico.',
      's.det2':"Concentrandoci sulle vibrazioni, ovvero l'umore, l'energia e l'impatto del tuo brand, garantiamo che ogni touchpoint sia coerente, memorabile e potente. Dagli annunci basati sull'intelligenza artificiale e dalle campagne social alle collaborazioni con gli influencer e all'automazione del customer journey, il nostro framework si adatta ai tuoi obiettivi aziendali.",
      's.det3':"Aiutiamo i brand a crescere con strategie di marketing basate sui dati che combinano SEO, pubblicità, contenuti e ottimizzazione del funnel. Dalla SEO tecnica, alla creazione di contenuti e all'authority building, fino agli annunci Google e Meta con monitoraggio avanzato delle conversioni, il nostro approccio garantisce risultati misurabili. Ci concentriamo sulla generazione di traffico qualificato, sul miglioramento della visibilità e sulla conversione dei clic in clienti fidelizzati.",
      's.det4':"Grazie alla potenza del marketing basato sull'intelligenza artificiale, ottimizziamo le campagne attraverso l'automazione, la personalizzazione e l'analisi dei dati. Le nostre soluzioni includono automazioni di contenuti ed email, test di funnel marketing ed esperimenti di CRO (ottimizzazione del tasso di conversione) per massimizzare il ROI. Combinando creatività e automazione intelligente, realizziamo strategie di marketing che si adattano, scalano e stimolano costantemente la crescita.",
      's.li1':"Campagna sui social media basata sull'intelligenza artificialeCampagne sui social media basate sull'intelligenza artificiale: campagne basate sulle tendenze per aumentare il coinvolgimento e il ricordo.",
      's.li2':"Marketing di influencer e community vibe: collaborare con creatori che rispecchiano l'energia del tuo brand.",
      's.li3':"Automazione del percorso del cliente: e-mail, chatbot e flussi personalizzati basati sull'intelligenza artificiale.",
      's.li4':'Annunci sulle prestazioni: annunci Facebook, Instagram e Google ottimizzati per le conversioni.',
      's.li5':"Storytelling e creazione di contenuti: contenuti che incarnano l'atmosfera unica del tuo marchio.",
      'cta.syvmj':'Inizia il tuo viaggio nel Vibe Marketing',
      's.sec.title':'I nostri valori fondamentali di Vibe Marketing',
      's.sec.subtitle':'Questi valori garantiscono che ogni campagna Vibe Marketing che realizziamo abbia impatto e autenticità.',
      's.card1':'Autenticità',
      's.card2':'Creatività',
      's.card3':'Innovazione',
      's.card4':'Impegno nel marketing',
      's.card5':'Impatto',
      's.card1.det':'Realizziamo campagne che riflettono la vera identità del tuo marchio, assicurandoci che ogni messaggio sia autentico e crei un legame profondo con il tuo pubblico.',
      's.card2.det':'Our Vibe Marketing approach thrives on storytelling, unique designs, and innovative campaigns that cut through digital noise.',
      's.card3.det':'Integrando strumenti di intelligenza artificiale, automazione e analisi in tempo reale, realizziamo campagne più intelligenti ed efficienti per ottenere i massimi risultati.',
      's.card4.det':'Diamo priorità alle conversazioni rispetto ai clic, assicurandoci che il tuo pubblico si senta valorizzato e parte della community del tuo marchio.',
      's.card5.det':'Ogni strategia di Vibe Marketing è concepita per generare una crescita misurabile, dalle vendite e dai lead alla fidelizzazione e al sostegno dei clienti.',
      's.cont1':'Pronto a valorizzare il tuo brand con Vibe Marketing?',
      's.cont2':'Prenota oggi stesso una consulenza gratuita per scoprire come le nostre strategie di Vibe Marketing possono trasformare la tua presenza digitale.',

      // mobile application
      't.title':'Sviluppo di app mobili',
      't.subtitle':"Applicazioni mobili pronte per il futuro, progettate per garantire prestazioni, scalabilità e coinvolgimento dell'utente.",
      't.service':'Perché lo sviluppo di app mobili è importante',
      't.det1':"Nel mondo digitale di oggi, lo sviluppo di app per dispositivi mobili non significa solo creare un'app, ma anche creare esperienze digitali fluide, intelligenti e sicure che valorizzino il tuo brand. Che tu sia una startup, un'azienda o un'attività di e-commerce, le app per dispositivi mobili fungono da ponte tra i tuoi clienti e i tuoi obiettivi aziendali. Con miliardi di utenti di smartphone in tutto il mondo, le aziende che investono nello sviluppo di app per dispositivi mobili favoriscono la crescita, la fidelizzazione dei clienti e l'efficienza operativa.",
      't.det2':"Presso la nostra agenzia di intelligenza artificiale, siamo specializzati nella progettazione e nello sviluppo di applicazioni mobili ricche di funzionalità per piattaforme Android e iOS. Dall'ideazione al lancio, i nostri servizi di sviluppo di app mobili garantiscono un design intuitivo, prestazioni fluide e integrazione con tecnologie all'avanguardia. Non ci limitiamo a programmare app: creiamo esperienze in linea con la visione del tuo brand e le aspettative degli utenti.",
      't.det3':'La nostra competenza nello sviluppo di app Android garantisce app ottimizzate per prestazioni, sicurezza e scalabilità. Sfruttando i framework, gli SDK e le best practice di Google Play più recenti, creiamo app che offrono esperienze fluide, soddisfacendo al contempo le esigenze dei clienti e stimolando la crescita aziendale.',
      't.li1':'Sviluppo di app mobili personalizzate per iOS e Android',
      't.li2':"Funzionalità dell'app basate sull'intelligenza artificiale come chatbot, personalizzazione e analisi",
      't.li3':'Integrazione con CRM, piattaforme di e-commerce e API',
      't.li4':'Soluzioni mobili sicure, scalabili e cloud-native',
      't.li5':'Supporto end-to-end: strategia, progettazione, sviluppo e manutenzione',
      't.sec.title':'I nostri valori fondamentali nello sviluppo di app mobili',
      't.sec.subtitle':'Adottiamo un approccio basato sul valore per garantire che ogni applicazione mobile che realizziamo abbia un impatto reale.',
      't.card1':'Innovazione',
      't.card2':'Collaborazione',
      't.card3':'Impatto',
      't.card1.det':"In ogni progetto di sviluppo di app per dispositivi mobili apportiamo creatività e tecnologia all'avanguardia, garantendo che la tua app si distingua in un mercato affollato.",
      't.card2.det':'Il nostro processo prevede una stretta comunicazione con il tuo team per fornire soluzioni di sviluppo di app mobili su misura per le specifiche esigenze della tua azienda.',
      't.card3.det':'Non misuriamo il successo in base ai download, ma in base al valore duraturo e ai risultati aziendali generati attraverso la nostra competenza nello sviluppo di app per dispositivi mobili.',
      't.cont1':'Pronto a creare la tua app mobile?',
      't.cont2':'Trasformiamo la tua visione in realtà con i nostri servizi di sviluppo di app mobile. Prenota una consulenza gratuita per scoprire la strategia, le funzionalità e le tecnologie più adatte al tuo progetto.'

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


