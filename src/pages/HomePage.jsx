import heroImage from '../assets/hero.png'

export default function HomePage({ t, isArabic }) {
  return (
    <>
      <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden px-5 py-16 text-center text-[#f9f2ea] sm:px-8 xl:px-14 2xl:px-20">
        <img src={heroImage} alt="Luxury hall" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-[#31767a]/70 via-[#4d286f]/60 to-[#912b3b]/50" />
        <div className="relative mx-auto max-w-4xl">
          <h1 className="mb-4 text-[clamp(2rem,5vw,4rem)] text-[#f9f2ea]">الوريا | Alworya</h1>
          <p className="mx-auto mb-3 max-w-3xl text-[clamp(1.1rem,2.4vw,1.7rem)] font-semibold">{t.heroTitle}</p>
          <p className="mx-auto max-w-3xl text-[#f9f2ea]/90">{t.heroSubtitle}</p>
        </div>
      </section>

      <section className="border-b border-[#912b3b]/15 bg-white py-10">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-8 px-5 text-center sm:px-8 md:grid-cols-4 xl:px-14 2xl:px-20">
          <div>
            <p className="text-5xl font-bold text-[#912b3b]">99.9%</p>
            <p className="mt-1 text-sm text-[#2d2338]/70">{isArabic ? 'وقت التشغيل' : 'Uptime'}</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-[#912b3b]">24/7</p>
            <p className="mt-1 text-sm text-[#2d2338]/70">{isArabic ? 'دعم فني' : 'Support'}</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-[#912b3b]">0%</p>
            <p className="mt-1 text-sm text-[#2d2338]/70">{isArabic ? 'زيادة في الكفاءة' : 'Efficiency increase'}</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-[#912b3b]">500+</p>
            <p className="mt-1 text-sm text-[#2d2338]/70">{isArabic ? 'قاعة وصالة' : 'Halls & venues'}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ebe2] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8 xl:px-14">
          <h2 className="text-[clamp(1.4rem,3.7vw,2.7rem)] leading-relaxed text-[#912b3b]">
            {isArabic
              ? 'من بين جميع الأنظمة، الوريا هو الوحيد الذي يرتقي بتجربة الإدارة إلى مستوى الفن، مُنهياً التعقيد ببساطة مطلقة.'
              : 'Among all systems, Alworya is the one that elevates management into an art with absolute simplicity.'}
          </h2>
          <p className="mt-5 text-sm tracking-[0.2em] text-[#2d2338]/55">
            {isArabic ? 'رؤية الوريا للإدارة الحديثة' : 'ALWORYA VISION FOR MODERN MANAGEMENT'}
          </p>
        </div>
      </section>

      <section className="bg-[#e9e9e9] py-16 sm:py-20">
        <div className="mx-auto max-w-[1440px] space-y-16 px-5 sm:px-8 xl:px-14 2xl:px-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="order-2 text-center lg:order-1 lg:text-right">
              <h3 className="mb-4 text-[clamp(1.6rem,3.6vw,3rem)] leading-tight text-[#8f3247]">
                {isArabic ? 'تحكم كامل من واجهة واحدة' : 'Total control from one dashboard'}
              </h3>
              <p className="mx-auto max-w-xl text-[#2d2338]/70 lg:mx-0">
                {isArabic
                  ? 'استمتع برؤية شاملة لأعمالك، من الحجوزات إلى التقارير المالية. كل ما تحتاجه متاح في واجهة مصممة بعناية.'
                  : 'Get a complete business view from bookings to reports in one elegant and focused interface.'}
              </p>
              <button type="button" className="mt-6 border-b border-[#8f3247] pb-1 text-sm text-[#8f3247]">
                {isArabic ? 'اكتشف المزايا ←' : 'Explore features →'}
              </button>
            </div>
            <div className="order-1 overflow-hidden rounded-lg border border-[#8f3247]/12 bg-white lg:order-2">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/561ae8df37-0dce186baa32b7629a54.png"
                alt="Dashboard preview"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-[#8f3247]/12 bg-white">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/69d7a729fa-ee41ff29c56a2c7eb003.png"
                alt="Chalet preview"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center lg:text-right">
              <h3 className="mb-4 text-[clamp(1.6rem,3.6vw,3rem)] leading-tight text-[#8f3247]">
                {isArabic ? 'تجربة عملاء لا تُضاهى' : 'Unmatched client experience'}
              </h3>
              <p className="mx-auto max-w-xl text-[#2d2338]/70 lg:mx-0">
                {isArabic
                  ? 'قدّم لعملائك تجربة حجز سلسة وراقية من لحظة الاختيار وحتى تأكيد الحجز، مع انطباع أول مثالي.'
                  : 'Deliver a smooth premium booking journey from discovery to confirmation and first impression.'}
              </p>
              <button type="button" className="mt-6 border-b border-[#8f3247] pb-1 text-sm text-[#8f3247]">
                {isArabic ? 'كيف يعمل ←' : 'How it works →'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ebe2] py-16 sm:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 xl:px-14 2xl:px-20">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-[clamp(1.7rem,4vw,3.1rem)] text-[#8f3247]">
              {isArabic ? 'نظرة داخل النظام' : 'Inside the system'}
            </h2>
            <p className="text-[#2d2338]/65">
              {isArabic ? 'تصميم يجمع بين الأناقة والوظيفة' : 'A design that blends elegance and function'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                titleAr: 'التقارير المالية',
                titleEn: 'Financial Reports',
                image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/20372a0d46-d1578522ce63ed521f64.png',
              },
              {
                titleAr: 'إدارة الحجوزات',
                titleEn: 'Booking Management',
                image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/20372a0d46-90ac8f2037714fb35bc7.png',
              },
              {
                titleAr: 'لوحة التحكم',
                titleEn: 'Dashboard',
                image: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/20372a0d46-b9c904a4d5f56906ed68.png',
              },
            ].map((card) => (
              <article key={card.titleAr} className="group">
                <div className="rounded-lg border border-[#8f3247]/12 bg-[#efefef] p-4">
                  <img src={card.image} alt={isArabic ? card.titleAr : card.titleEn} className="h-[340px] w-full object-contain" />
                </div>
                <div className="mt-4 flex items-center justify-between border-b border-[#8f3247]/15 pb-3 text-[#8f3247]">
                  <span className="text-sm">{isArabic ? card.titleAr : card.titleEn}</span>
                  <span className="text-sm transition-transform group-hover:-translate-x-1">{isArabic ? '←' : '→'}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111317] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8 xl:px-14">
          <p className="mb-4 text-4xl leading-none text-[#8f3247]">”</p>
          <h2 className="mx-auto max-w-3xl text-[clamp(1.5rem,3.8vw,3rem)] leading-tight text-[#f4ebe2]">
            {isArabic
              ? 'منذ انتقالنا إلى الوريا، ارتفعت كفاءة التشغيل لدينا بنسبة 40%. النظام ليس مجرد أداة، بل هو شريك حقيقي في النجاح.'
              : 'Since moving to Alworya, our operational efficiency increased by 40%. The system is not just a tool, it is a true partner in success.'}
          </h2>
          <div className="mt-10 flex items-center justify-center gap-4">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"
              alt={isArabic ? 'أحمد المحمد' : 'Ahmed Al-Mohammad'}
              className="h-11 w-11 rounded-full object-cover grayscale"
            />
            <div className="text-right">
              <p className="text-sm font-semibold text-white">{isArabic ? 'أحمد المحمد' : 'Ahmed Al-Mohammad'}</p>
              <p className="text-xs text-white/55">{isArabic ? 'مدير عام - قاعات القصر الملكي' : 'General Manager - Royal Palace Halls'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ebe2] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 xl:px-14">
          <h2 className="mb-10 text-center text-[clamp(1.6rem,3.8vw,2.8rem)] text-[#8f3247]">
            {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h2>

          <div className="space-y-5">
            {[
              isArabic ? 'هل يمكنني تجربة النظام قبل الاشتراك؟' : 'Can I try the system before subscribing?',
              isArabic ? 'كيف يتم تدريب فريقي على استخدام الوريا؟' : 'How is my team trained to use Alworya?',
              isArabic ? 'هل النظام يدعم الدفع الإلكتروني؟' : 'Does the system support online payments?',
            ].map((question) => (
              <details key={question} className="border-b border-[#8f3247]/18 pb-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[#8f3247]">
                  <span className="text-[1.15rem]">{question}</span>
                  <span className="text-2xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm text-[#2d2338]/70">
                  {isArabic
                    ? 'نعم، يتوفر شرح كامل وتجربة مبدئية لمساعدتك على البدء بسهولة.'
                    : 'Yes, we provide a guided walkthrough and an initial trial to help you get started.'}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
