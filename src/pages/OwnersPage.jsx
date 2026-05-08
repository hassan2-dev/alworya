export default function OwnersPage({ t, isArabic }) {
  const stats = [
    {
      value: '50%+',
      label: t.ownerStats?.[2]?.label ?? 'Revenue growth',
    },
    {
      value: '0',
      label: t.ownerStats?.[0]?.label ?? 'Booking conflicts',
    },
  ]

  return (
    <>
      <section className="bg-[#31767a] px-5 py-16 sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-2xl border border-white/15 bg-[#0d2940] shadow-[0_12px_28px_rgba(0,0,0,0.25)] lg:order-1">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/561ae8df37-0dce186baa32b7629a54.png"
              alt="Owner dashboard"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="order-1 text-center lg:order-2 lg:text-right">
            <h1 className="mb-4 text-[clamp(2rem,4.8vw,4rem)] leading-tight text-white">{t.ownerTitle}</h1>
            <p className="mx-auto mb-8 max-w-2xl text-white/88 lg:mx-0">
              {t.aboutText}
            </p>

            <button
              type="button"
              className="mb-10 rounded-full bg-[#912b3b] px-8 py-3 text-white shadow-[0_8px_18px_rgba(111,26,44,0.45)] transition hover:bg-[#7f2232]"
            >
              {t.heroCtaSecondary}
            </button>

            <div className="grid grid-cols-2 gap-6 border-t border-white/18 pt-6">
              {stats.map((item) => (
                <div key={item.label}>
                  <p className="text-5xl font-bold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-white/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ebe2] px-5 py-16 sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-[clamp(1.9rem,4vw,3.3rem)] text-[#4d286f]">
              {isArabic ? 'تحكم كامل بلمسة واحدة' : 'Complete control with one touch'}
            </h2>
            <p className="text-[#2d2338]/70">
              {isArabic
                ? 'لوحة تحكم ذكية توفر لك كل ما تحتاجه لإدارة قاعاتك بكفاءة واحترافية عالية.'
                : 'A smart dashboard that gives you everything needed to run venues efficiently.'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr]">
            <article className="rounded-3xl border border-[#d9d1cb] bg-white p-6 shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-[#f5f1eb] px-3 py-1 text-xs text-[#7a7370]">
                  {isArabic ? 'هذا الشهر' : 'This month'}
                </span>
                <h3 className="text-[1.9rem] text-[#4d286f]">
                  {isArabic ? 'أداء الحجوزات والإيرادات' : 'Bookings and revenue performance'}
                </h3>
              </div>
              <div className="rounded-2xl bg-[#f8f8f8] p-4">
                <div className="h-64 w-full rounded-xl bg-linear-to-t from-[#31767a]/85 to-[#31767a]/40" />
              </div>
            </article>

            <div className="space-y-4">
              <article className="rounded-2xl border border-[#912b3b] bg-white p-5">
                <h4 className="mb-2 text-[1.5rem] text-[#4d286f]">{isArabic ? 'إدارة الحجوزات والتقويم' : 'Booking & calendar management'}</h4>
                <p className="text-sm text-[#2d2338]/68">
                  {isArabic
                    ? 'عرض تفاعلي للحجوزات، إضافة حجوزات جديدة، ومنع التعارض بسهولة.'
                    : 'Interactive booking view, add reservations, and prevent conflicts easily.'}
                </p>
              </article>
              <article className="rounded-2xl border border-[#e0d8d3] bg-white p-5">
                <h4 className="mb-2 text-[1.5rem] text-[#4d286f]">{isArabic ? 'العروض والأسعار' : 'Offers and pricing'}</h4>
                <p className="text-sm text-[#2d2338]/68">
                  {isArabic
                    ? 'تحكم فوري بالأسعار الموسمية وإطلاق عروض خاصة لزيادة الطلب.'
                    : 'Control seasonal pricing and launch offers to increase demand.'}
                </p>
              </article>
              <article className="rounded-2xl border border-[#e0d8d3] bg-white p-5">
                <h4 className="mb-2 text-[1.5rem] text-[#4d286f]">{isArabic ? 'إدارة الصور والخدمات' : 'Media and service management'}</h4>
                <p className="text-sm text-[#2d2338]/68">
                  {isArabic
                    ? 'تحديث الصور، وإدارة قوائم الخدمات والأسعار المتاحة للعملاء.'
                    : 'Update photos and manage services and packages for customers.'}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#efefef] px-5 py-16 sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-[clamp(1.9rem,4vw,3.2rem)] text-[#4d286f]">
              {isArabic ? 'انضم إلى النخبة بخطوات بسيطة' : 'Join the elite in simple steps'}
            </h2>
            <p className="text-[#2d2338]/68">
              {isArabic
                ? 'عملية انضمام سلسة تضمن لك البدء في استقبال الحجوزات في أسرع وقت.'
                : 'A smooth onboarding flow that helps you start receiving bookings quickly.'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-[#ded7d2] bg-white p-6 text-center">
              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-[#f6efe9] text-2xl text-[#31767a]">🪪</div>
              <h3 className="mb-2 text-[1.9rem] text-[#4d286f]">{isArabic ? 'التسجيل المبدئي' : 'Initial registration'}</h3>
              <p className="text-[#2d2338]/66">
                {isArabic
                  ? 'قدّم بيانات القاعة الأساسية وسيتواصل معك فريقنا مباشرة.'
                  : 'Submit your venue basics and our team will contact you directly.'}
              </p>
            </article>

            <article className="rounded-3xl border border-[#ded7d2] bg-white p-6 text-center shadow-[0_10px_20px_rgba(0,0,0,0.06)]">
              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-[#f6efe9] text-2xl text-[#8f3247]">✓</div>
              <h3 className="mb-2 text-[1.9rem] text-[#4d286f]">{isArabic ? 'التحقق والإعداد' : 'Verification and setup'}</h3>
              <p className="text-[#2d2338]/66">
                {isArabic
                  ? 'نراجع طلبك ونساعدك على إعداد القاعة والصور والأسعار بأفضل شكل.'
                  : 'We verify your account and help set up media, pricing, and packages.'}
              </p>
            </article>

            <article className="rounded-3xl border border-[#ded7d2] bg-white p-6 text-center">
              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-[#f6efe9] text-2xl text-[#4d286f]">🚀</div>
              <h3 className="mb-2 text-[1.9rem] text-[#4d286f]">{isArabic ? 'استقبال الحجوزات' : 'Start receiving bookings'}</h3>
              <p className="text-[#2d2338]/66">
                {isArabic
                  ? 'بمجرد تفعيل حسابك، ستكون جاهزًا لاستقبال الحجوزات فورًا.'
                  : 'Once activated, your venue is ready to receive bookings immediately.'}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <img
          src="https://images.unsplash.com/photo-1465800872432-83b1928fdb15?auto=format&fit=crop&w=1800&q=80"
          alt="Venue background"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#f4ebe2]/95" />

        <div className="relative mx-auto max-w-[1050px]">
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_16px_36px_rgba(0,0,0,0.12)]">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr]">
              <form className="space-y-4 p-6 sm:p-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input className="rounded-lg border border-[#ddd5ce] bg-[#f8f6f3] px-4 py-3 text-sm outline-none focus:border-[#912b3b]" placeholder={isArabic ? 'رقم هاتفك' : 'Phone number'} />
                  <input className="rounded-lg border border-[#ddd5ce] bg-[#f8f6f3] px-4 py-3 text-sm outline-none focus:border-[#912b3b]" placeholder={isArabic ? 'أدخل اسمك' : 'Your full name'} />
                </div>
                <input className="w-full rounded-lg border border-[#ddd5ce] bg-[#f8f6f3] px-4 py-3 text-sm outline-none focus:border-[#912b3b]" placeholder={isArabic ? 'اسم القاعة / الشركة' : 'Venue / company name'} />
                <select className="w-full rounded-lg border border-[#ddd5ce] bg-[#f8f6f3] px-4 py-3 text-sm outline-none focus:border-[#912b3b]">
                  <option>{isArabic ? 'اختر المدينة' : 'Choose city'}</option>
                  <option>{isArabic ? 'بغداد' : 'Baghdad'}</option>
                  <option>{isArabic ? 'البصرة' : 'Basrah'}</option>
                  <option>{isArabic ? 'أربيل' : 'Erbil'}</option>
                </select>
                <button type="submit" className="w-full rounded-lg bg-[#912b3b] px-6 py-3 font-semibold text-white transition hover:bg-[#7f2232]">
                  {isArabic ? 'إرسال الطلب' : 'Submit request'}
                </button>
              </form>

              <aside className="bg-linear-to-b from-[#1f6c7a] to-[#2f3e6b] p-8 text-white">
                <h3 className="mb-3 text-[2rem]">{isArabic ? 'جاهز للبدء؟' : 'Ready to start?'}</h3>
                <p className="mb-6 text-white/85">
                  {isArabic
                    ? 'تواصل معنا اليوم واحصل على عرض تجريبي مجاني يريك كيف يمكن للوريا تطوير إدارة أعمالك.'
                    : 'Contact us today and get a free demo showing how Alworya can elevate your operations.'}
                </p>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>✓ {isArabic ? 'دعم فني مخصص' : 'Dedicated support'}</li>
                  <li>✓ {isArabic ? 'تقارير أداء مفصلة' : 'Detailed performance reports'}</li>
                  <li>✓ {isArabic ? 'تسويق مخصص لعملك' : 'Tailored growth support'}</li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
