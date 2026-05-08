export default function FeaturesPage({ isArabic }) {
  return (
    <>
      <section className="bg-[#e9e9e9] px-5 py-16 sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1440px] space-y-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="order-2 text-center lg:order-1 lg:text-right">
              <h1 className="mb-5 text-[clamp(2rem,4.8vw,3.8rem)] leading-tight text-[#8f3247]">
                {isArabic ? 'تحكم كامل من واجهة واحدة' : 'Total control from one dashboard'}
              </h1>
              <p className="mx-auto max-w-xl text-[#2d2338]/70 lg:mx-0">
                {isArabic
                  ? 'استمتع برؤية شاملة لأعمالك، من الحجوزات إلى التقارير المالية. كل ما تحتاجه في واجهة واحدة مصممة لتعكس الفخامة وتضمن الكفاءة.'
                  : 'Get a full operational view from bookings to reports in one premium interface designed for clarity and efficiency.'}
              </p>
              <button type="button" className="mt-6 border-b border-[#8f3247] pb-1 text-sm text-[#8f3247]">
                {isArabic ? 'اكتشف المزايا ←' : 'Explore features →'}
              </button>
            </div>
            <div className="order-1 overflow-hidden rounded-lg border border-[#8f3247]/12 bg-white lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury hall interior"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-[#8f3247]/12 bg-white">
              <img
                src="https://images.unsplash.com/photo-1613977257592-487ecd136cc3?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury chalet"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center lg:text-right">
              <h2 className="mb-5 text-[clamp(2rem,4.8vw,3.8rem)] leading-tight text-[#8f3247]">
                {isArabic ? 'تجربة عملاء لا تُضاهى' : 'Unmatched client experience'}
              </h2>
              <p className="mx-auto max-w-xl text-[#2d2338]/70 lg:mx-0">
                {isArabic
                  ? 'قدّم لعملائك تجربة حجز سلسة وراقية تعكس مستوى خدماتك، من لحظة اختيار القاعة وحتى تأكيد الحجز.'
                  : 'Deliver a seamless premium booking journey from discovery to confirmation with a lasting first impression.'}
              </p>
              <button type="button" className="mt-6 border-b border-[#8f3247] pb-1 text-sm text-[#8f3247]">
                {isArabic ? 'كيف يعمل ←' : 'How it works →'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-b from-[#101320] via-[#271b44] to-[#4c2a74] px-5 py-16 sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-[clamp(1.9rem,4vw,3.4rem)] text-white">{isArabic ? 'مزايا تعيد تعريف الفخامة' : 'Features redefining luxury'}</h2>
            <p className="text-white/70">
              {isArabic
                ? 'اكتشف كيف تحول الوريا الإدارة المعقدة إلى تجربة سلسة وراقية.'
                : 'Discover how Alworya turns complex operations into a smooth premium journey.'}
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div className="relative flex justify-center">
              <div className="absolute bottom-6 right-4 rounded-xl border border-cyan-300/35 bg-[#1b2438]/80 px-4 py-3 text-xs text-white/85 shadow-xl">
                {isArabic ? 'أي حجز ينجح' : 'Every booking succeeds'}
              </div>
              <div className="rounded-[2rem] border border-[#00c2d6]/28 bg-[#111a2d]/70 p-3 shadow-[0_0_40px_rgba(0,180,255,0.2)]">
                <img
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80"
                  alt="App mobile mockup"
                  className="h-[430px] w-[240px] rounded-[1.6rem] object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <article className="rounded-2xl border border-cyan-300/45 bg-white/8 p-6 text-white backdrop-blur-sm">
                <h3 className="mb-2 text-3xl">{isArabic ? 'البحث الذكي' : 'Smart search'}</h3>
                <p className="mb-4 text-sm text-white/80">
                  {isArabic
                    ? 'محرك بحث متقدم يمنحك العثور على القاعة المثالية بناءً على السعة والموقع والميزانية.'
                    : 'Advanced search engine to find the ideal venue based on capacity, location, and budget.'}
                </p>
                <ul className="space-y-1 text-sm text-cyan-200">
                  <li>{isArabic ? 'فلترة دقيقة ومخصصة' : 'Precise custom filters'}</li>
                  <li>{isArabic ? 'نتائج فورية' : 'Instant results'}</li>
                </ul>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/7 p-6 text-white/92 backdrop-blur-sm">
                <h3 className="text-3xl">{isArabic ? 'الخرائط التفاعلية' : 'Interactive maps'}</h3>
              </article>

              <article className="rounded-2xl border border-white/10 bg-white/7 p-6 text-white/92 backdrop-blur-sm">
                <h3 className="text-3xl">{isArabic ? 'الحجز السريع' : 'Instant booking'}</h3>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ebe2] px-5 py-16 sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-[clamp(1.9rem,4vw,3.2rem)] text-[#8f3247]">
              {isArabic ? 'التحول الرقمي مع الوريا' : 'Digital transformation with Alworya'}
            </h2>
            <p className="text-[#2d2338]/65">
              {isArabic
                ? 'مقارنة واضحة بين الطرق التقليدية والإدارة الذكية'
                : 'A clear comparison between traditional methods and smart management'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-[#2f8e94] bg-white p-7 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-[2rem] font-semibold text-[#2f8e94]">{isArabic ? 'مع الوريا' : 'With Alworya'}</h3>
                <span className="rounded-full bg-[#e8f4f4] px-3 py-1 text-xs text-[#2f8e94]">{isArabic ? 'إدارة ذكية' : 'Smart management'}</span>
              </div>
              <ul className="space-y-4 text-[#2d2338]/85">
                <li className="flex items-start justify-between gap-3">
                  <span>{isArabic ? 'نظام سحابي آمن يحفظ بياناتك ويسهل الوصول إليها من أي مكان.' : 'Secure cloud platform that protects data and enables access anywhere.'}</span>
                  <span className="mt-1 text-[#2f8e94]">✓</span>
                </li>
                <li className="flex items-start justify-between gap-3">
                  <span>{isArabic ? 'تقويم ذكي يمنع التداخل وينظم المواعيد تلقائيًا.' : 'Smart calendar that prevents overlap and organizes bookings automatically.'}</span>
                  <span className="mt-1 text-[#2f8e94]">✓</span>
                </li>
                <li className="flex items-start justify-between gap-3">
                  <span>{isArabic ? 'تقارير مالية دقيقة ومفصلة بضغطة زر واحدة.' : 'Accurate and detailed financial reports in one click.'}</span>
                  <span className="mt-1 text-[#2f8e94]">✓</span>
                </li>
              </ul>
            </article>

            <article className="rounded-3xl border border-[#e4e0de] bg-white p-7 shadow-[0_8px_18px_rgba(0,0,0,0.04)]">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-[2rem] font-semibold text-[#6f6a6f]">{isArabic ? 'قبل الوريا' : 'Before Alworya'}</h3>
                <span className="rounded-full bg-[#f3f1f1] px-3 py-1 text-xs text-[#9c9397]">{isArabic ? 'إدارة تقليدية' : 'Traditional management'}</span>
              </div>
              <ul className="space-y-4 text-[#6d676b]">
                <li className="flex items-start justify-between gap-3">
                  <span>{isArabic ? 'الاعتماد على الدفاتر الورقية المعرّضة للتلف والضياع.' : 'Reliance on paper records vulnerable to damage and loss.'}</span>
                  <span className="mt-1 text-[#d08b93]">✕</span>
                </li>
                <li className="flex items-start justify-between gap-3">
                  <span>{isArabic ? 'تكرار مواعيد الحجوزات بسبب الأخطاء البشرية.' : 'Repeated booking conflicts caused by manual errors.'}</span>
                  <span className="mt-1 text-[#d08b93]">✕</span>
                </li>
                <li className="flex items-start justify-between gap-3">
                  <span>{isArabic ? 'صعوبة في تتبع المدفوعات وإصدار التقارير المالية.' : 'Difficulty tracking payments and generating financial reports.'}</span>
                  <span className="mt-1 text-[#d08b93]">✕</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#efefef] px-5 py-16 sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <article className="rounded-3xl border border-[#a792d3]/35 bg-linear-to-b from-[#cbbce8] to-[#6d4aa5] p-8 text-white shadow-[0_10px_26px_rgba(76,42,116,0.25)]">
            <div className="mx-auto mb-8 grid h-48 w-48 place-items-center rounded-[2rem] bg-linear-to-b from-[#9e8ad0] to-[#6b48a2] text-7xl">
              🏔
            </div>
            <h3 className="text-center text-[2rem] font-semibold">{isArabic ? 'معتمد وآمن' : 'Certified & secure'}</h3>
            <p className="mt-2 text-center text-sm text-white/90">
              {isArabic ? 'نظام متوافق مع أعلى معايير حماية البيانات' : 'Built to meet top-tier data security standards'}
            </p>
          </article>

          <div className="text-center lg:text-right">
            <h2 className="mb-4 text-[clamp(1.8rem,4vw,3.3rem)] leading-tight text-[#8f3247]">
              {isArabic ? 'أمان وموثوقية لا مساومة عليها' : 'Security and reliability with no compromise'}
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-[#2d2338]/70 lg:mx-0">
              {isArabic
                ? 'نحن ندرك أن بيانات عملائك هي أثمن ما تملك، لذلك بنينا الوريا على بنية تحتية قوية تعتمد أحدث معايير التشفير العالمية لضمان سرية وأمان معلوماتك على مدار الساعة.'
                : 'Your customer data is your most valuable asset, so Alworya is built on strong infrastructure with modern encryption standards to protect it 24/7.'}
            </p>

            <div className="space-y-4">
              <article className="flex items-center justify-between rounded-2xl bg-[#f2ebe4] p-5">
                <div>
                  <h3 className="text-xl text-[#8f3247]">{isArabic ? 'تشفير متقدم' : 'Advanced encryption'}</h3>
                  <p className="text-sm text-[#2d2338]/65">
                    {isArabic ? 'حماية شاملة للبيانات والمدفوعات' : 'Comprehensive protection for data and payments'}
                  </p>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-xl text-[#5b2e82]">🔒</span>
              </article>

              <article className="flex items-center justify-between rounded-2xl bg-[#f2ebe4] p-5">
                <div>
                  <h3 className="text-xl text-[#8f3247]">{isArabic ? 'استضافة سحابية موثوقة' : 'Reliable cloud hosting'}</h3>
                  <p className="text-sm text-[#2d2338]/65">
                    {isArabic ? 'توفر الخدمة بنسبة 99.9% بدون انقطاع' : '99.9% uptime with no interruptions'}
                  </p>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-xl text-[#31767a]">🖧</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#912b3b] px-5 py-20 text-center sm:px-8 sm:py-24 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-linear-to-br from-[#9a2d43] to-[#7f2031] px-6 py-12 shadow-[0_16px_35px_rgba(73,15,30,0.35)] sm:px-10">
          <h2 className="mb-4 text-[clamp(2rem,4.2vw,3.4rem)] leading-tight text-white">
            {isArabic ? 'اختبر الفخامة في الإدارة اليوم' : 'Experience luxury management today'}
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-white/85">
            {isArabic
              ? 'لا تدع التعقيد يعيق نمو أعمالك. ابدأ تجربة الوريا واكتشف الفرق بنفسك.'
              : 'Do not let complexity limit your growth. Start Alworya today and discover the difference.'}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button type="button" className="w-full min-w-[220px] border border-white/50 px-8 py-3 text-white transition-colors hover:bg-white/10 sm:w-auto">
              {isArabic ? 'اطلب عرض توضيحي (ديمو)' : 'Request a demo'}
            </button>
            <button type="button" className="w-full min-w-[220px] bg-white px-8 py-3 text-[#8f3247] transition-colors hover:bg-[#f6ecef] sm:w-auto">
              {isArabic ? 'جرّب التطبيق مجانًا' : 'Try the app for free'}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
