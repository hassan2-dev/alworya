import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

function App() {
  const [language, setLanguage] = useState('ar')
  const [activeStep, setActiveStep] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const isArabic = language === 'ar'
  const dragX = useMotionValue(0)
  const smoothDragX = useSpring(dragX, { stiffness: 120, damping: 20 })
  const rotateY = useTransform(smoothDragX, [-160, 160], [-6, 6])
  const ease = [0.22, 1, 0.36, 1]
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [activeNavId, setActiveNavId] = useState('hero')

  useEffect(() => {
    document.documentElement.lang = isArabic ? 'ar' : 'en'
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr'
  }, [isArabic])

  useEffect(() => {
    document.title = isArabic
      ? 'الوريا | Alworya - منصة حجز القاعات والشاليهات في العراق'
      : 'Alworya | الوريا — Luxury hall & chalet booking in Iraq'
  }, [isArabic])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveNavId(id)
    setMobileNavOpen(false)
  }

  const content = {
    en: {
      navLinks: [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About Alworya' },
        { id: 'features', label: 'Features' },
        { id: 'how', label: 'How It Works' },
        { id: 'app', label: 'App Preview' },
        { id: 'owners', label: 'For Venue Owners' },
        { id: 'testimonials', label: 'Reviews' },
        { id: 'contact', label: 'Contact' },
      ],
      loginLabel: 'Login',
      startNowLabel: 'Start Now',
      heroTitle: 'Exceptional management for halls and chalets',
      heroSubtitle:
        'An integrated SaaS platform that blends luxury and efficiency to turn your business into an unforgettable experience.',
      heroCtaPrimary: 'Start now for free',
      heroCtaSecondary: 'Request a demo for venue owners',
      download: 'Download App',
      explore: 'Explore Venues',
      aboutTitle: 'About Alworya',
      aboutText:
        'Alworya (الوريا) is an Iraqi booking platform for wedding halls and chalets — a smart way to reserve venues across Iraq, including Baghdad and Basrah. Find spaces on the map, book instantly with OTP, and chat with owners from one elegant app.',
      featuresTitle: 'Smart Features Crafted for Premium Events',
      features: [
        'Smart search system',
        'Map-based discovery',
        'Instant booking with OTP',
        'Real-time chat with owners',
        'Favorites system',
        'Notifications system',
      ],
      howTitle: 'How It Works',
      steps: ['Search venue', 'View details', 'Book instantly', 'Verify via OTP', 'Chat & confirm deal'],
      appPreview: 'App Experience Preview',
      appCards: ['Booking Flow', 'Live Map View', 'Owner Chat'],
      ownerTitle: 'For Venue Owners',
      ownerStats: [
        { label: 'Bookings / Month', value: 280 },
        { label: 'Active Clients', value: 1200 },
        { label: 'Revenue Growth', value: 67, suffix: '%' },
      ],
      ownerItems: [
        'Manage bookings from one dashboard',
        'Chat instantly with potential clients',
        'Track analytics and revenue growth',
        'Control profile details and availability',
      ],
      testimonialsTitle: 'Trusted by Families and Venue Owners',
      testimonials: [
        {
          name: 'Sara A.',
          role: 'Bride, Baghdad',
          text: 'Alworya made our wedding planning feel premium and stress-free. We found our hall in minutes.',
        },
        {
          name: 'Noor Palace',
          role: 'Venue Owner',
          text: 'The chat and instant booking tools brought more qualified clients than any traditional ads.',
        },
        {
          name: 'Yousef H.',
          role: 'Event Planner',
          text: 'The quality of venues and verification flow creates trust for high-value event bookings.',
        },
      ],
      ctaTitle: 'Join Alworya - Where Luxury Meets Smart Booking',
      ctaSubtitle: 'Built for emotional celebrations and high-end hospitality experiences.',
      footerTagline: 'Luxury wedding experience meets smart technology platform.',
    },
    ar: {
      navLinks: [
        { id: 'hero', label: 'الرئيسية' },
        { id: 'about', label: 'عن الوريا' },
        { id: 'features', label: 'المزايا' },
        { id: 'how', label: 'كيف يعمل' },
        { id: 'app', label: 'استعراض التطبيق' },
        { id: 'owners', label: 'لأصحاب القاعات' },
        { id: 'testimonials', label: 'آراء العملاء' },
        { id: 'contact', label: 'تواصل معنا' },
      ],
      loginLabel: 'تسجيل الدخول',
      startNowLabel: 'ابدأ الآن',
      heroTitle: 'إدارة القاعات والشاليهات بمستوى استثنائي',
      heroSubtitle:
        'نظام SaaS متكامل يجمع بين الفخامة والفعالية لتحويل أعمالك إلى تجربة لا تُنسى.',
      heroCtaPrimary: 'ابدأ الآن مجاناً',
      heroCtaSecondary: 'اطلب عرضاً لأصحاب القاعات',
      download: 'حمّل التطبيق',
      explore: 'استكشف الأماكن',
      aboutTitle: 'عن الوريا',
      aboutText:
        'الوريا (Alworya) منصة حجز عراقية لقاعات الأعراس والشاليهات في عموم العراق — من بغداد إلى البصرة وأبعد. استكشف الأماكن على الخريطة، واحجز فوراً مع التحقق عبر OTP، وتواصل مباشرة مع أصحاب القاعات أو الشاليهات.',
      featuresTitle: 'مزايا ذكية مصممة للمناسبات الفاخرة',
      features: [
        'نظام بحث ذكي',
        'استكشاف عبر الخرائط',
        'حجز فوري مع OTP',
        'محادثة مباشرة مع المالك',
        'نظام المفضلة',
        'نظام الإشعارات',
      ],
      howTitle: 'كيف يعمل',
      steps: ['ابحث عن المكان', 'اطلع على التفاصيل', 'احجز فوراً', 'تحقق عبر OTP', 'دردش وأكد الاتفاق'],
      appPreview: 'معاينة تجربة التطبيق',
      appCards: ['رحلة الحجز', 'عرض الخريطة المباشر', 'محادثة المالك'],
      ownerTitle: 'لأصحاب القاعات والشاليهات',
      ownerStats: [
        { label: 'حجز شهري', value: 280 },
        { label: 'عميل نشط', value: 1200 },
        { label: 'نمو الإيراد', value: 67, suffix: '%' },
      ],
      ownerItems: [
        'إدارة الحجوزات من لوحة واحدة',
        'محادثة العملاء المحتملين مباشرة',
        'متابعة التحليلات ونمو الإيرادات',
        'إدارة الملف الشخصي والتوفر',
      ],
      testimonialsTitle: 'موثوق من العائلات وأصحاب الأماكن',
      testimonials: [
        {
          name: 'سارة',
          role: 'عروس - بغداد',
          text: 'الوريا خلّت تجربة تنظيم زفافنا راقية وسهلة جداً، ولقينا القاعة بسرعة.',
        },
        {
          name: 'قصر النور',
          role: 'صاحب قاعة',
          text: 'ميزة المحادثة والحجز الفوري جابت لنا عملاء جادين أكثر من الإعلانات التقليدية.',
        },
        {
          name: 'يوسف',
          role: 'منظم فعاليات',
          text: 'جودة الأماكن مع التحقق الفوري تعطي ثقة عالية للحجوزات الكبيرة.',
        },
      ],
      ctaTitle: 'انضم إلى الوريا - حيث الفخامة تلتقي بالحجز الذكي',
      ctaSubtitle: 'مصممة لذكريات الاحتفال المميزة وتجارب الضيافة الراقية.',
      footerTagline: 'تجربة زفاف فاخرة تلتقي مع التكنولوجيا الذكية.',
    },
  }

  const t = content[language]

  return (
    <>
      {/* Top marketing bar — cream + burgundy (matches reference SaaS shell) */}
      <header className="sticky top-0 z-100 w-full border-b border-[#80202b]/12 bg-[#f5f1e9]/97 shadow-[0_4px_20px_rgba(64,45,45,0.05)] backdrop-blur-md supports-backdrop-filter:bg-[#f5f1e9]/93">
        <nav className="flex w-full max-w-none flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8 xl:px-14 2xl:px-20 lg:gap-6">
          <button
            type="button"
            className="-ms-2 flex shrink-0 items-center gap-2 rounded-lg p-2 text-start transition-opacity hover:opacity-90 lg:ms-0"
            onClick={() => scrollToSection('hero')}
            aria-label="Alworya home"
          >
            <img
              src="/mpbile%20icon.png"
              alt="Alworya"
              className="h-9 w-9 object-contain object-start min-[880px]:hidden"
            />
            <img
              src="/Alworya horizontal logo.svg"
              alt="Alworya"
              className="hidden h-8 w-auto max-w-[min(14rem,52vw)] object-contain object-start sm:h-9 md:max-w-none min-[880px]:block"
            />
          </button>

          {/* Desktop navigation */}
          <div className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:gap-2 min-[880px]:flex">
            {t.navLinks.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className={`rounded-md border-b-2 px-2.5 py-2 text-[0.8125rem] font-medium transition-colors xl:text-[0.875rem] ${
                  activeNavId === id
                    ? 'border-[#80202b] text-[#80202b]'
                    : 'border-transparent text-[#4a4543] hover:bg-[#80202b]/06 hover:text-[#80202b]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <motion.button
              type="button"
              className="hidden cursor-pointer px-3 py-2 text-[0.8125rem] font-medium text-[#4a4543] hover:text-[#80202b] sm:block"
              onClick={() => setLanguage(isArabic ? 'en' : 'ar')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {isArabic ? 'EN' : 'عربي'}
            </motion.button>
            <button
              type="button"
              className="hidden cursor-pointer whitespace-nowrap px-2 py-2 text-[0.8125rem] font-semibold text-[#4a4543] underline-offset-4 hover:text-[#80202b] hover:underline sm:block"
              onClick={() => scrollToSection('contact')}
            >
              {t.loginLabel}
            </button>
            <motion.button
              type="button"
              className="hidden cursor-pointer rounded-md bg-[#80202b] px-4 py-2.5 text-[0.8125rem] font-semibold text-white shadow-md shadow-[#80202b]/28 transition sm:inline-flex whitespace-nowrap"
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              {t.startNowLabel}
            </motion.button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="-me-2 flex h-11 w-11 items-center justify-center rounded-lg border border-[#80202b]/20 text-[#80202b] min-[880px]:hidden"
              aria-expanded={mobileNavOpen}
              aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileNavOpen((o) => !o)}
            >
              <span className="text-xl leading-none">{mobileNavOpen ? '×' : '≡'}</span>
            </button>
          </div>

          {/* Mobile dropdown */}
          {mobileNavOpen && (
            <div className="flex w-full basis-full flex-col gap-1 border-t border-[#80202b]/10 pt-3 pb-1 min-[880px]:hidden">
              <div className="flex justify-center gap-2 pb-2">
                <button
                  type="button"
                  className="rounded-md px-4 py-2 text-[0.8125rem] font-medium text-[#2d2338]"
                  onClick={() => setLanguage(isArabic ? 'en' : 'ar')}
                >
                  {isArabic ? 'English' : 'العربية'}
                </button>
              </div>
              {t.navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  className={`rounded-lg px-3 py-3 text-start text-[0.9rem] font-medium ${
                    activeNavId === id ? 'bg-[#80202b]/08 text-[#80202b]' : 'text-[#4a4543]'
                  }`}
                  onClick={() => scrollToSection(id)}
                >
                  {label}
                </button>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-[#80202b]/10 pt-3">
                <button
                  type="button"
                  className="rounded-lg py-3 text-[0.9rem] font-semibold text-[#4a4543]"
                  onClick={() => scrollToSection('contact')}
                >
                  {t.loginLabel}
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-[#80202b] py-3 text-[0.9rem] font-semibold text-white"
                  onClick={() => scrollToSection('hero')}
                >
                  {t.startNowLabel}
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <div className="relative w-full min-w-0 max-w-none overflow-x-hidden">
      <header
        id="hero"
        className="hero-gradient relative scroll-mt-19 flex min-h-[88vh] w-full flex-col justify-end px-5 pb-10 pt-4 text-[#f9f2ea] sm:px-8 sm:pb-12 xl:px-14 2xl:px-20"
      >
        <div className="noise-layer" />
        <div className="hero-particle hero-particle-1" />
        <div className="hero-particle hero-particle-2" />
        <div className="hero-particle hero-particle-3" />
        <motion.div
          className="relative z-10 mx-auto w-full max-w-[min(1120px,calc(100%-2rem))] text-center lg:max-w-[min(90rem,calc(100%-4rem))]"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p
            className="text-sm font-medium uppercase tracking-[0.08em]"
            variants={{ hidden: { opacity: 0, y: 30, filter: 'blur(7px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)' } }}
            transition={{ duration: 1, ease }}
          >
            {isArabic ? 'فخامة + ثقة + بساطة' : 'Luxury + Trust + Simplicity'}
          </motion.p>
          <motion.h1
            className="mb-3 mt-4 text-[clamp(1.85rem,4.5vw,3.25rem)] leading-tight text-[#f9f2ea]"
            variants={{ hidden: { opacity: 0, y: 30, filter: 'blur(10px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)' } }}
            transition={{ duration: 1.2, ease }}
          >
            الوريا | Alworya
          </motion.h1>
          <motion.p
            className="mx-auto mb-2 max-w-[min(56rem,100%)] text-[clamp(1.05rem,2.4vw,1.55rem)] font-semibold leading-snug text-[#f9f2ea]/95"
            variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, ease }}
            role="doc-subtitle"
          >
            {t.heroTitle}
          </motion.p>
          <motion.p
            className="mx-auto max-w-[min(56rem,100%)] text-[#f9f2ea]/90 lg:text-lg"
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, ease }}
          >
            {t.heroSubtitle}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, ease }}
          >
            <motion.button
              type="button"
              className="cursor-pointer rounded-full bg-[#f9f2ea] px-6 py-3 text-sm font-semibold text-[#80202b] shadow-[0_8px_28px_rgba(0,0,0,.2)]"
              whileHover={{ y: -5, boxShadow: '0 14px 40px rgba(0,0,0,.28)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
            >
              {t.download}
            </motion.button>
            <motion.button
              type="button"
              className="cursor-pointer rounded-full border-2 border-[#f9f2ea]/85 bg-transparent px-6 py-3 text-sm font-semibold text-[#f9f2ea] backdrop-blur-sm"
              whileHover={{ y: -5, boxShadow: '0 0 28px rgba(249,242,234,.35)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(isArabic ? 'owners' : 'app')}
            >
              {t.explore}
            </motion.button>
          </motion.div>
        </motion.div>
      </header>

      <main>
        <RevealSection id="about" className="w-full px-5 py-24 sm:px-8 xl:px-14 2xl:px-20">
          <h2 className="mb-4 text-[clamp(1.5rem,3vw,2.4rem)]">{t.aboutTitle}</h2>
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <motion.p
              className="text-center md:text-start"
              initial={{ opacity: 0, x: isArabic ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 1, ease }}
            >
              {t.aboutText}
            </motion.p>
            <motion.div
              className="about-tilt relative h-[280px] overflow-hidden rounded-3xl border border-[#4d286f]/20 bg-white/55 p-4 shadow-[0_14px_34px_rgba(49,46,66,0.12)]"
              initial={{ opacity: 0, x: isArabic ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 1.1, ease }}
              whileHover={{ rotateY: isArabic ? -8 : 8, rotateX: 5 }}
            >
              <div className="morph-a absolute inset-0 opacity-30" />
              <div className="absolute inset-4 rounded-2xl bg-linear-to-br from-[#4d286f] via-[#31767a] to-[#912b3b] p-6 text-[#f9f2ea]">
                <p className="text-sm">{isArabic ? 'تجربة حجز ذكية' : 'Smart booking flow'}</p>
                <p className="mt-3 text-2xl font-semibold">{isArabic ? 'فاخر وموثوق' : 'Luxury + Trusted'}</p>
              </div>
            </motion.div>
          </div>
        </RevealSection>

        <RevealSection id="features" className="w-full px-5 py-24 sm:px-8 xl:px-14 2xl:px-20">
          <h2 className="mb-4 text-center text-[clamp(1.5rem,3vw,2.4rem)]">{t.featuresTitle}</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((feature, index) => (
              <motion.article
                key={feature}
                className="rounded-2xl border border-[#4d286f]/15 bg-white/55 p-5 shadow-[0_14px_34px_rgba(49,46,66,0.12)] backdrop-blur-sm"
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease }}
                whileHover={{ y: -10, boxShadow: '0 26px 46px rgba(49,46,66,.2)' }}
              >
                <motion.span
                  className="mb-3 inline-grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-[#4d286f] to-[#912b3b] text-sm text-white"
                  animate={{ boxShadow: ['0 0 0 rgba(77,40,111,0)', '0 0 18px rgba(77,40,111,.45)', '0 0 0 rgba(77,40,111,0)'] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.18 }}
                >
                  A
                </motion.span>
                <p>{feature}</p>
              </motion.article>
            ))}
          </div>
        </RevealSection>

        <RevealSection id="how" className="w-full px-5 py-24 sm:px-8 xl:px-14 2xl:px-20">
          <h2 className="mb-4 text-center text-[clamp(1.5rem,3vw,2.4rem)]">{t.howTitle}</h2>
          <div className="mx-auto mt-10 max-w-[760px]">
            <div className="timeline-line relative ms-4">
              {t.steps.map((step, index) => (
                <motion.div
                  key={step}
                  onViewportEnter={() => setActiveStep(index)}
                  viewport={{ amount: 0.5, once: false }}
                  className={`mb-5 flex items-center gap-3 rounded-xl border p-4 transition ${
                    activeStep >= index ? 'border-[#31767a]/50 bg-white shadow-[0_10px_24px_rgba(49,46,66,0.12)]' : 'border-[#eadfda] bg-white/75'
                  }`}
                  initial={{ opacity: 0, x: isArabic ? -35 : 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, ease }}
                >
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-full text-xs text-white ${
                      activeStep >= index ? 'bg-[#31767a]' : 'bg-[#4d286f]/60'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {step}
                </motion.div>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection id="app" className="w-full px-5 py-24 sm:px-8 xl:px-14 2xl:px-20">
          <h2 className="mb-4 text-center text-[clamp(1.5rem,3vw,2.4rem)]">{t.appPreview}</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.appCards.map((card, index) => (
              <motion.div
                key={card}
                className="float-loop rounded-2xl bg-linear-to-b from-white to-[#f4ebe2] p-3 shadow-[0_14px_34px_rgba(49,46,66,0.12)]"
                style={{ rotateY }}
                drag="x"
                dragConstraints={{ left: -28, right: 28 }}
                onDrag={(_, info) => dragX.set(info.offset.x)}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: index * 0.1, ease }}
                whileHover={{ y: -8, rotateY: isArabic ? -5 : 5 }}
              >
                <div className="mx-auto mb-4 h-2 w-2/5 rounded-full bg-[#2e2e2e]" />
                <div className="grid min-h-[180px] place-items-center rounded-xl bg-linear-to-br from-[#4d286f] to-[#31767a] text-[#f9f2ea]">
                  {card}
                </div>
              </motion.div>
            ))}
          </div>
        </RevealSection>

        <RevealSection id="owners" className="w-full px-5 py-24 text-center sm:px-8 xl:px-14 2xl:px-20">
          <h2 className="mb-4 text-[clamp(1.5rem,3vw,2.4rem)]">{t.ownerTitle}</h2>
          <div className="mb-8 mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {t.ownerStats.map((item, index) => (
              <motion.div
                key={item.label}
                className="rounded-2xl border border-[#4d286f]/15 bg-white/70 p-5"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease, delay: index * 0.1 }}
              >
                <Counter value={item.value} suffix={item.suffix ?? ''} className="text-3xl font-semibold text-[#4d286f]" />
                <p className="mt-1 text-sm text-[#2d2338]/80">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <ul className="mt-8 grid list-none gap-3 p-0">
            {t.ownerItems.map((item) => (
              <motion.li
                key={item}
                className="rounded-xl border border-[#eadfda] bg-white p-4"
                initial={{ opacity: 0, x: isArabic ? -35 : 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.75, ease }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </RevealSection>

        <RevealSection id="testimonials" className="w-full px-5 py-24 sm:px-8 xl:px-14 2xl:px-20">
          <h2 className="mb-4 text-center text-[clamp(1.5rem,3vw,2.4rem)]">{t.testimonialsTitle}</h2>
          <motion.div
            className="mx-auto mt-8 w-full max-w-[min(52rem,calc(100%-1rem))] overflow-hidden lg:max-w-[min(64rem,calc(100%-2rem))]"
            drag="x"
            dragConstraints={{ left: -120, right: 120 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -40) setActiveTestimonial((prev) => (prev + 1) % t.testimonials.length)
              if (info.offset.x > 40) setActiveTestimonial((prev) => (prev - 1 + t.testimonials.length) % t.testimonials.length)
            }}
          >
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, scale: 0.96, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease }}
              className="rounded-3xl border border-[#4d286f]/15 bg-white/70 p-8 text-center shadow-[0_20px_40px_rgba(49,46,66,0.16)] backdrop-blur-sm"
            >
              <p>{t.testimonials[activeTestimonial].text}</p>
              <h3 className="mb-1 mt-4">{t.testimonials[activeTestimonial].name}</h3>
              <span>{t.testimonials[activeTestimonial].role}</span>
            </motion.div>
          </motion.div>
        </RevealSection>

        <RevealSection
          id="contact"
          className="mx-5 mb-16 rounded-3xl border border-[#4d286f]/20 bg-linear-to-br from-[#4d286f]/12 to-[#912b3b]/14 px-6 py-20 text-center sm:mx-8 sm:px-10 xl:mx-14 xl:px-14 2xl:mx-20 2xl:px-16"
        >
          <h2 className="mb-4 text-[clamp(1.5rem,3vw,2.4rem)]">{t.ctaTitle}</h2>
          <p>{t.ctaSubtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.button
              type="button"
              className="cursor-pointer rounded-full bg-[#912b3b] px-6 py-3 text-sm text-white shadow-[0_10px_24px_rgba(145,43,59,0.34)]"
              whileHover={{ y: -5, boxShadow: '0 0 30px rgba(145,43,59,.55)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button
              type="button"
              className="cursor-pointer rounded-full border border-[#4d286f]/35 bg-white/45 px-6 py-3 text-sm text-[#4d286f] backdrop-blur-sm"
              whileHover={{ y: -5, boxShadow: '0 0 24px rgba(77,40,111,.35)' }}
              whileTap={{ scale: 0.95 }}
            >
              {t.download}
            </motion.button>
          </div>
        </RevealSection>
      </main>

      <footer className="w-full border-t border-[#80202b]/10 bg-[#f5f1e9]/90 px-5 py-10 text-center sm:px-10 xl:px-14 2xl:px-20">
        <div className="mb-3 flex flex-wrap justify-center gap-4">
          <a className="text-[#80202b] no-underline hover:underline" href="https://www.alworya.com">www.alworya.com</a>
          <a className="text-[#80202b] no-underline hover:underline" href="/privacy-policy">
            Privacy Policy
          </a>
          <a className="text-[#80202b] no-underline hover:underline" href="/delete-account">
            Delete Account
          </a>
          <a className="text-[#80202b] no-underline hover:underline" href="mailto:support@alworya.com">support@alworya.com</a>
          <a className="text-[#80202b] no-underline hover:underline" href="https://instagram.com">Instagram</a>
          <a className="text-[#80202b] no-underline hover:underline" href="https://facebook.com">Facebook</a>
        </div>
        <p>{t.footerTagline}</p>
      </footer>
    </div>
    </>
  )
}

function RevealSection({ children, className, id }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.24 })
  return (
    <motion.section
      ref={ref}
      id={id}
      className={`scroll-mt-19 ${className ?? ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}

function Counter({ value, suffix, className }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const spring = useSpring(0, { stiffness: 80, damping: 25 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) spring.set(value)
  }, [isInView, spring, value])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => setDisplay(Math.round(latest)))
    return () => unsubscribe()
  }, [spring])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}

export default App
