export default function HowItWorksPage({ t, isArabic }) {
  const steps = [
    {
      id: 1,
      title: isArabic ? 'البحث والتصفية الدقيقة' : 'Search and smart filtering',
      text: isArabic
        ? 'استخدم محرك البحث المتقدم للعثور على القاعة المثالية حسب السعة والموقع والمناسبة بسرعة.'
        : 'Use advanced search to find ideal venues by capacity, location, and event type.',
      bullets: isArabic ? ['خيارات تصفية متعددة', 'نتائج فورية ودقيقة'] : ['Multiple filter options', 'Instant accurate results'],
      image:
        'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      title: isArabic ? 'استعراض القاعات على الخريطة' : 'Explore venues on map',
      text: isArabic
        ? 'تصفح مواقع القاعات المتاحة على خريطة تفاعلية واضحة وحدد الأنسب لموقعك.'
        : 'Browse available venues on an interactive map and pick the best location.',
      bullets: isArabic ? ['عرض تفاعلي واضح', 'تفاصيل سريعة للموقع'] : ['Clear interactive view', 'Quick location details'],
      image:
        'https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      title: isArabic ? 'اختيار الموعد والخدمات' : 'Choose date and services',
      text: isArabic
        ? 'حدد تاريخك ووقتك المناسب مع خيارات خدمات مرنة لتخصيص تجربتك بالكامل.'
        : 'Choose your preferred date/time and customize the package with flexible services.',
      bullets: isArabic ? ['تقويم ذكي ومرن', 'خيارات خدمات مرنة'] : ['Smart calendar', 'Flexible service options'],
      image:
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 4,
      title: isArabic ? 'تأكيد الحجز والدفع' : 'Confirm booking and payment',
      text: isArabic
        ? 'راجع التفاصيل، أتمم الدفع الآمن، واستلم تأكيد الحجز فورًا بالموعد المحدد.'
        : 'Review details, complete secure payment, and receive instant booking confirmation.',
      bullets: isArabic ? ['بوابات دفع آمنة', 'تأكيد فوري للحجز'] : ['Secure payment gateways', 'Instant confirmation'],
      image:
        'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  return (
    <>
      <section className="bg-[#f4ebe2] px-5 py-20 text-center sm:px-8 sm:py-24 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-5 text-[clamp(2.1rem,5vw,4.1rem)] leading-tight text-[#4d286f]">
            {isArabic ? 'رحلة حجز سلسة وراقية' : 'A smooth and elegant booking journey'}
          </h1>
          <p className="mx-auto max-w-3xl text-[1.05rem] leading-8 text-[#2d2338]/72">
            {isArabic
              ? 'اكتشف كيف يسهل الوريا عملية الحجز من البداية حتى النهاية، بخطوات بسيطة وواضحة تضمن لك تجربة استثنائية.'
              : 'Discover how Alworya simplifies booking from start to finish with clear and simple steps for an exceptional experience.'}
          </p>
        </div>
      </section>

      <section className="bg-[#efefef] px-5 py-10 sm:px-8 sm:py-14 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative">
            <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[#2f8e94]/25 lg:block" />
            <div className="space-y-10">
              {steps.map((step, index) => {
                const imageFirst = index % 2 === 0
                return (
                  <article key={step.id} className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
                    <div className={imageFirst ? 'order-1' : 'order-3 lg:order-1'}>
                      {imageFirst ? (
                        <div className="overflow-hidden rounded-2xl border border-[#8f3247]/10 bg-white p-3 shadow-[0_6px_16px_rgba(0,0,0,0.06)]">
                          <img src={step.image} alt={step.title} className="h-[260px] w-full rounded-xl object-cover" />
                        </div>
                      ) : (
                        <div className="text-center lg:text-right">
                          <p className="mb-2 text-[1.6rem] font-semibold text-[#31767a]">
                            {isArabic ? `الخطوة ${step.id}` : `Step ${step.id}`}
                          </p>
                          <h3 className="mb-3 text-[clamp(1.8rem,3.5vw,3rem)] text-[#4d286f]">{step.title}</h3>
                          <p className="mb-4 text-[#2d2338]/70">{step.text}</p>
                          <ul className="space-y-1 text-[#31767a]">
                            {step.bullets.map((item) => (
                              <li key={item}>✓ {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="order-2 mx-auto grid h-14 w-14 place-items-center rounded-full border-4 border-[#2f8e94] bg-[#efefef] text-2xl font-semibold text-[#2f8e94]">
                      {step.id}
                    </div>

                    <div className={imageFirst ? 'order-3' : 'order-1 lg:order-3'}>
                      {!imageFirst ? (
                        <div className="overflow-hidden rounded-2xl border border-[#8f3247]/10 bg-white p-3 shadow-[0_6px_16px_rgba(0,0,0,0.06)]">
                          <img src={step.image} alt={step.title} className="h-[260px] w-full rounded-xl object-cover" />
                        </div>
                      ) : (
                        <div className="text-center lg:text-right">
                          <p className="mb-2 text-[1.6rem] font-semibold text-[#31767a]">
                            {isArabic ? `الخطوة ${step.id}` : `Step ${step.id}`}
                          </p>
                          <h3 className="mb-3 text-[clamp(1.8rem,3.5vw,3rem)] text-[#4d286f]">{step.title}</h3>
                          <p className="mb-4 text-[#2d2338]/70">{step.text}</p>
                          <ul className="space-y-1 text-[#31767a]">
                            {step.bullets.map((item) => (
                              <li key={item}>✓ {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ebe2] px-5 py-16 sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-white text-4xl text-[#4d286f] shadow-[0_6px_16px_rgba(0,0,0,0.08)]">
              🗓
            </div>
            <h2 className="mb-4 text-[clamp(1.9rem,4vw,3.2rem)] text-[#4d286f]">
              {isArabic ? 'ماذا بعد الحجز؟' : 'What happens after booking?'}
            </h2>
            <p className="mx-auto max-w-3xl text-[#2d2338]/70">
              {isArabic
                ? 'بمجرد تأكيد حجزك، سيبدأ فريق القاعة بالتجهيز لاستقبالك. يمكنك تتبع حالة حجزك والتواصل المباشر مع إدارة القاعة من خلال لوحة التحكم الخاصة بك.'
                : 'Once your booking is confirmed, the venue team starts preparation. You can track status and communicate directly via your dashboard.'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-[#8f3247]/10 bg-white p-7 text-center shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
              <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full bg-[#f6efe7] text-2xl text-[#2f8e94]">🔔</div>
              <h3 className="mb-3 text-[2rem] text-[#4d286f]">{isArabic ? 'تذكيرات ذكية' : 'Smart reminders'}</h3>
              <p className="text-[#2d2338]/68">
                {isArabic
                  ? 'إشعارات وتذكيرات قبل موعد المناسبة لضمان سير كل شيء بانتظام.'
                  : 'Timely alerts and reminders before your event for smoother preparation.'}
              </p>
            </article>

            <article className="rounded-2xl border border-[#8f3247]/10 bg-white p-7 text-center shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
              <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full bg-[#f6efe7] text-2xl text-[#2f8e94]">💬</div>
              <h3 className="mb-3 text-[2rem] text-[#4d286f]">{isArabic ? 'تواصل مباشر' : 'Direct communication'}</h3>
              <p className="text-[#2d2338]/68">
                {isArabic
                  ? 'قناة اتصال مباشرة مع إدارة القاعة لأي استفسارات أو تعديلات.'
                  : 'A direct channel with venue management for questions and updates.'}
              </p>
            </article>

            <article className="rounded-2xl border border-[#8f3247]/10 bg-white p-7 text-center shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
              <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-full bg-[#f6efe7] text-2xl text-[#2f8e94]">🧾</div>
              <h3 className="mb-3 text-[2rem] text-[#4d286f]">{isArabic ? 'إيصال إلكتروني' : 'E-receipt'}</h3>
              <p className="text-[#2d2338]/68">
                {isArabic
                  ? 'استلام إيصال مفصل بكافة التكاليف والخدمات عبر البريد الإلكتروني.'
                  : 'Receive a detailed receipt with all costs and services by email.'}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-20 text-center sm:px-8 sm:py-24 xl:px-14 2xl:px-20">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury hall background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#912b3b]/88" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="mb-4 text-[clamp(2rem,4.5vw,3.6rem)] text-white">
            {isArabic ? 'شاهد التجربة بنفسك' : 'See the experience yourself'}
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-white/90">
            {isArabic
              ? 'اكتشف واجهة المستخدم الراقية والمميزات المتقدمة في استعراض شامل للتطبيق.'
              : 'Discover the elegant user interface and advanced capabilities in a full app walkthrough.'}
          </p>
          <button
            type="button"
            className="bg-white px-10 py-3 text-[#8f3247] transition-colors hover:bg-[#f3ecee]"
          >
            {isArabic ? 'استعراض التطبيق' : 'Preview app'}
          </button>
        </div>
      </section>
    </>
  )
}
