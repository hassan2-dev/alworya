export default function AppPreviewPage({ isArabic }) {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-20 text-center sm:px-8 sm:py-24 xl:px-14 2xl:px-20">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80"
          alt="App preview background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#173f4d]/78 via-[#2a365f]/72 to-[#43295f]/78" />

        <div className="relative mx-auto max-w-4xl">
          <h1 className="mb-4 text-[clamp(2rem,5vw,4.2rem)] leading-tight text-white">
            {isArabic ? 'احجز القاعة المثالية من هاتفك مباشرة' : 'Book your perfect venue right from your phone'}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-white/85">
            {isArabic
              ? 'تطبيق الوريا - تجربة حجز سلسة وفاخرة تدعم Android و iOS.'
              : 'Alworya app delivers a smooth premium booking experience on Android and iOS.'}
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" className="rounded-md bg-white px-7 py-3 text-sm font-semibold text-[#1f1f1f] shadow-lg">
              {isArabic ? 'Google Play' : 'Google Play'}
            </button>
            <button type="button" className="rounded-md bg-black px-7 py-3 text-sm font-semibold text-white shadow-lg">
              {isArabic ? 'App Store' : 'App Store'}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ebe2] px-5 py-16 sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1280px] space-y-14">
          <article className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="text-center lg:text-right">
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#f7ebed] px-3 py-1 text-xs text-[#8f3247]">
                {isArabic ? 'حجز سريع وآمن' : 'Fast & secure booking'}
              </p>
              <h2 className="mb-4 text-[clamp(2rem,4.2vw,3.6rem)] text-[#8f3247]">{isArabic ? 'احجز في دقائق معدودة' : 'Book in minutes'}</h2>
              <p className="mb-4 text-[#2d2338]/72">
                {isArabic
                  ? 'اختر التاريخ والخدمات وأكمل الدفع بخطوات سهلة من تطبيق واحد.'
                  : 'Choose date, services, and complete payment with simple steps in one app.'}
              </p>
              <ul className="space-y-2 text-[#8f3247]">
                <li>✓ {isArabic ? 'تقويم تفاعلي لاختيار التاريخ' : 'Interactive calendar selection'}</li>
                <li>✓ {isArabic ? 'دفع آمن ومؤكد بالكامل' : 'Secure verified payment'}</li>
                <li>✓ {isArabic ? 'تأكيد فوري وإشعارات ذكية' : 'Instant confirmation and alerts'}</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl border border-[#8f3247]/10 bg-white p-4 shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1100&q=80" alt="Booking phones" className="h-[330px] w-full rounded-2xl object-cover" />
            </div>
          </article>

          <article className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-[#4d286f]/10 bg-white p-4 shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
              <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1100&q=80" alt="Venue details phones" className="h-[330px] w-full rounded-2xl object-cover" />
            </div>
            <div className="text-center lg:text-right">
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#efe9f8] px-3 py-1 text-xs text-[#5b2e82]">
                {isArabic ? 'تفاصيل شاملة' : 'Complete details'}
              </p>
              <h2 className="mb-4 text-[clamp(2rem,4.2vw,3.6rem)] text-[#8f3247]">{isArabic ? 'كل ما تحتاجه في مكان واحد' : 'Everything in one place'}</h2>
              <p className="mb-4 text-[#2d2338]/72">
                {isArabic
                  ? 'تفاصيل دقيقة، صور حقيقية، تقييمات موثوقة، وآراء العملاء قبل اتخاذ القرار.'
                  : 'Detailed data, real photos, trusted reviews, and customer feedback before booking.'}
              </p>
              <ul className="space-y-2 text-[#5b2e82]">
                <li>● {isArabic ? 'صور حقيقية بجودة عالية' : 'High-quality real photos'}</li>
                <li>● {isArabic ? 'تقييمات وآراء العملاء' : 'Ratings and reviews'}</li>
                <li>● {isArabic ? 'تواصل فوري مع صاحب القاعة' : 'Instant owner chat'}</li>
              </ul>
            </div>
          </article>

          <article className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="text-center lg:text-right">
              <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#e7f2f1] px-3 py-1 text-xs text-[#31767a]">
                {isArabic ? 'البحث والاستكشاف' : 'Search & discovery'}
              </p>
              <h2 className="mb-4 text-[clamp(2rem,4.2vw,3.6rem)] text-[#8f3247]">{isArabic ? 'ابحث عن القاعة المثالية' : 'Find the perfect venue'}</h2>
              <p className="mb-4 text-[#2d2338]/72">
                {isArabic
                  ? 'اكتشف القاعات والشاليهات بسهولة عبر محرك بحث ذكي وخرائط تفاعلية.'
                  : 'Discover halls and chalets quickly using smart search and interactive maps.'}
              </p>
              <ul className="space-y-2 text-[#31767a]">
                <li>✓ {isArabic ? 'بحث حسب الموقع والسعة والسعر' : 'Search by location, capacity, and price'}</li>
                <li>✓ {isArabic ? 'عرض مباشر للنتائج على الخريطة' : 'Live map-based results'}</li>
                <li>✓ {isArabic ? 'مرونة عالية وخيارات افتراضية' : 'Flexible filtered options'}</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl border border-[#31767a]/12 bg-white p-4 shadow-[0_8px_18px_rgba(0,0,0,0.06)]">
              <img src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1100&q=80" alt="Search phones map" className="h-[330px] w-full rounded-2xl object-cover" />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-linear-to-r from-[#2f1b47] via-[#4a2468] to-[#5c2d80] px-5 py-16 text-center sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-3 text-[clamp(1.9rem,4vw,3.1rem)] text-white">
            {isArabic ? 'جرّب التطبيق الآن' : 'Try the app now'}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/80">
            {isArabic
              ? 'متوفر الآن على iOS و Android. ابدأ استكشاف القاعات أولاً من هاتفك الخاص.'
              : 'Available now on iOS and Android. Start discovering premium venues from your phone.'}
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" className="rounded-md bg-white px-7 py-3 text-sm font-semibold text-[#1f1f1f] shadow-lg">
              Google Play
            </button>
            <button type="button" className="rounded-md bg-black px-7 py-3 text-sm font-semibold text-white shadow-lg">
              App Store
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ebe2] px-5 py-16 text-center sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-[clamp(2rem,4.8vw,4.4rem)] leading-tight text-[#8f3247]">
            {isArabic
              ? 'من بين جميع الأنظمة، الوريا هو الوحيد الذي يرتقي بتجربة الإدارة إلى مستوى الفن، مُنهياً التعقيد ببساطة مطلقة.'
              : 'Among all systems, Alworya is the only one that elevates management into an art form with absolute simplicity.'}
          </h2>
          <p className="mt-6 text-sm text-[#2d2338]/65">
            {isArabic ? '— رؤية الوريا للإدارة الحديثة' : '— Alworya vision for modern management'}
          </p>
        </div>
      </section>

      <section className="bg-[#efefef] px-5 py-16 text-center sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="mb-10 text-[clamp(1.9rem,4vw,3rem)] text-[#4d286f]">
            {isArabic ? 'آراء العملاء' : 'Customer reviews'}
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                nameAr: 'ليلى، مديرة الحجوزات',
                nameEn: 'Layla, Booking Manager',
                textAr: 'الواجهة الذكية والمرونة العالية وفرّتا علينا أيامًا من العمل المتعب.',
                textEn: 'The smart interface and flexibility saved us days of manual work.',
              },
              {
                nameAr: 'أحمد، مدير العمليات',
                nameEn: 'Ahmed, Operations Manager',
                textAr: 'الدعم سريع والتطبيق ساعدنا على تقديم خدمة أكثر احترافية.',
                textEn: 'Support is fast and the app helped us deliver a more professional service.',
              },
              {
                nameAr: 'سارة، مديرة القاعة',
                nameEn: 'Sara, Venue Manager',
                textAr: 'البرنامج سهّل إدارة القاعة ورفع تجربة العميل بشكل ملحوظ.',
                textEn: 'The platform simplified venue management and improved customer experience.',
              },
            ].map((item) => (
              <article key={item.nameAr} className="rounded-2xl border border-[#8f3247]/10 bg-white p-6">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-[#efe9fb] text-2xl text-[#5b2e82]">◔</div>
                <h3 className="mb-2 text-xl text-[#8f3247]">{isArabic ? item.nameAr : item.nameEn}</h3>
                <p className="text-[#2d2338]/68">{isArabic ? item.textAr : item.textEn}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#912b3b] px-5 py-20 text-center sm:px-8 sm:py-24 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-[clamp(2rem,4.4vw,3.4rem)] leading-tight text-[#f6e8e2]">
            {isArabic ? 'ابدأ تجربتك مع تطبيق الوريا اليوم' : 'Start your Alworya app journey today'}
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-[#f6e8e2]/85">
            {isArabic
              ? 'حمّل التطبيق الآن وابدأ حجز القاعات والشاليهات بسهولة وفخامة من هاتفك.'
              : 'Download the app now and book halls and chalets with premium simplicity.'}
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" className="rounded-md bg-white px-8 py-3 font-semibold text-[#8f3247] transition-colors hover:bg-[#f9f2ee]">
              {isArabic ? 'تحميل التطبيق' : 'Download app'}
            </button>
            <button type="button" className="rounded-md border border-[#f6e8e2]/55 px-8 py-3 font-semibold text-[#f6e8e2] transition-colors hover:bg-white/10">
              {isArabic ? 'تواصل معنا' : 'Contact us'}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
