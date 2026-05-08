export default function TestimonialsPage({ t, isArabic }) {
  return (
    <>
      <section className="relative overflow-hidden px-5 py-20 text-center sm:px-8 sm:py-24 xl:px-14 2xl:px-20">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury hall background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1d2740]/68" />

        <div className="relative mx-auto max-w-5xl">
          <h1 className="mb-3 text-[clamp(2.1rem,5vw,4.3rem)] text-[#f0d6dd]">
            {isArabic ? 'تجارب استثنائية' : 'Exceptional experiences'}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-white/80">
            {isArabic
              ? 'استمع لآراء العملاء حول تجربتهم الحقيقية مع الوريا.'
              : 'Hear real customer stories about their Alworya experience.'}
          </p>

          <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-center gap-3 rounded-full border border-white/25 bg-white/85 px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.25)] backdrop-blur">
            <button type="button" className="rounded-full bg-[#4d286f] px-6 py-2 text-sm text-white">
              {isArabic ? 'الكل' : 'All'}
            </button>
            <button type="button" className="rounded-full px-6 py-2 text-sm text-[#2d2338]/80">
              {isArabic ? 'أصحاب القاعات' : 'Venue owners'}
            </button>
            <button type="button" className="rounded-full px-6 py-2 text-sm text-[#2d2338]/80">
              {isArabic ? 'المستخدمون' : 'Customers'}
            </button>
            <button type="button" className="rounded-full border border-[#4d286f]/35 bg-white px-6 py-2 text-sm text-[#2d2338]/80">
              {isArabic ? 'بغداد' : 'Baghdad'}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#efefef] px-5 py-14 sm:px-8 sm:py-16 xl:px-14 2xl:px-20">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-[#d8d2cc] bg-white">
            <img
              src="https://images.unsplash.com/photo-1613977257592-487ecd136cc3?auto=format&fit=crop&w=1100&q=80"
              alt="Luxury chalet"
              className="h-[340px] w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl border border-[#d8d2cc] bg-white">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1100&q=80"
              alt="Luxury hall interior"
              className="h-[340px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#efefef] px-5 pb-20 sm:px-8 sm:pb-24 xl:px-14 2xl:px-20">
        <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-5 lg:grid-cols-3">
          {[
            {
              nameAr: 'جمال الدوري',
              roleAr: 'مالك قاعة - بغداد',
              textAr: 'منذ استخدام الوريا ارتاحت حجوزاتنا بنسبة 40%، لوحة التحكم ممتازة والتقارير المالية دقيقة.',
            },
            {
              nameAr: 'سارة محمد',
              roleAr: 'إدارة فعاليات - أربيل',
              textAr: 'تجربة الحجز سلسة جدًا، تمكنا من زيادة عدد العملاء وتقليل وقت التأكيد.',
            },
            {
              nameAr: 'علي حسن',
              roleAr: 'مدير قاعة - البصرة',
              textAr: 'نظام إدارة المواعيد منع أي تعارض في الحجوزات، والدفع الإلكتروني سريع جدًا.',
            },
          ].map((item) => (
            <article key={item.nameAr} className="rounded-xl border border-[#ddd6d0] bg-white p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[#31767a]">★★★★★</span>
                <div className="text-right">
                  <h3 className="text-lg text-[#4d286f]">{isArabic ? item.nameAr : item.nameAr}</h3>
                  <p className="text-xs text-[#2d2338]/65">{isArabic ? item.roleAr : item.roleAr}</p>
                </div>
              </div>
              <p className="text-[#2d2338]/75">{isArabic ? item.textAr : item.textAr}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#912b3b] px-5 py-20 text-center sm:px-8 sm:py-24 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-[clamp(2rem,4.4vw,3.4rem)] leading-tight text-[#f6e8e2]">
            {isArabic ? 'قصتك القادمة تبدأ مع الوريا' : 'Your next success story starts with Alworya'}
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-[#f6e8e2]/85">
            {isArabic
              ? 'انضم إلى مئات العملاء الذين طوروا تجربة الحجز ورفعوا كفاءة أعمالهم.'
              : 'Join hundreds of customers who improved booking quality and business efficiency.'}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" className="rounded-md bg-white px-8 py-3 font-semibold text-[#8f3247] transition-colors hover:bg-[#f8eff2]">
              {isArabic ? 'ابدأ الآن' : 'Start now'}
            </button>
            <button type="button" className="rounded-md border border-[#f6e8e2]/55 px-8 py-3 font-semibold text-[#f6e8e2] transition-colors hover:bg-white/10">
              {isArabic ? 'تواصل معنا' : 'Contact us'}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ebe2] px-5 py-16 text-center sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-[#e9f2f1] text-2xl text-[#31767a]">💬</div>
          <h2 className="mb-4 text-[clamp(2rem,4vw,3.2rem)] text-[#4d286f]">
            {isArabic ? 'كن قصة النجاح التالية' : 'Be the next success story'}
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-[#2d2338]/72">
            {isArabic
              ? 'انضم إلى مئات القاعات والشاليهات التي اختارت الوريا كشريك نجاحها. ابدأ اليوم ولاحظ الفرق في إدارة أعمالك.'
              : 'Join hundreds of venues that chose Alworya as their success partner and feel the difference today.'}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" className="rounded-md border border-[#4d286f]/45 px-8 py-3 font-semibold text-[#4d286f] transition-colors hover:bg-[#ede5f6]">
              {isArabic ? 'تواصل مع المبيعات' : 'Contact sales'}
            </button>
            <button type="button" className="rounded-md bg-[#912b3b] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#7f2232]">
              {isArabic ? 'ابدأ تجربتك المجانية' : 'Start free trial'}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
