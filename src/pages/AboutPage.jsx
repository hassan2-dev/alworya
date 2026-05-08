export default function AboutPage({ t, isArabic }) {
  return (
    <>
      <section className="bg-[#e9e9e9] px-5 py-16 sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-[#8f3247]/12 bg-white">
            <img
              src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1600&q=80"
              alt="Alworya office interior"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="text-center lg:text-right">
            <h1 className="mb-5 text-[clamp(2rem,5vw,4rem)] leading-[1.05] text-[#8f3247]">
              {t.aboutTitle}
            </h1>
            <p className="mx-auto max-w-xl text-[1.05rem] leading-8 text-[#2d2338]/75 lg:mx-0">{t.aboutText}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ebe2] px-5 py-16 sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-3 text-center text-sm font-semibold tracking-[0.2em] text-[#8f3247]/80">
            {isArabic ? 'تحديات الـ سوق' : 'MARKET CHALLENGES'}
          </p>
          <h2 className="mx-auto mb-12 max-w-5xl text-center text-[clamp(1.8rem,4vw,3.3rem)] leading-tight text-[#1f1f1f]">
            {`"${isArabic
              ? 'كانت إدارة القاعات تعتمد على الدفاتر الورقية والاتصالات العشوائية. نحن هنا لننهي هذه الفوضى ونرتقي بتجربة الإدارة إلى مستوى الفن.'
              : 'Hall management depended on paper logs and random calls. We are here to end this chaos and elevate management into an art form.'
            }"`}
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-[#8f3247]/10 bg-white p-6 text-center">
              <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#f8f0f2] text-2xl text-[#8f3247]">📈</div>
              <h3 className="mb-2 text-xl text-[#8f3247]">{isArabic ? 'تقارير غير دقيقة' : 'Inaccurate reports'}</h3>
              <p className="text-sm leading-7 text-[#2d2338]/65">
                {isArabic
                  ? 'غياب الرؤية المالية الواضحة يعطل متابعة الإيرادات والمصاريف اليومية.'
                  : 'Lack of clear financial visibility weakens daily revenue and expense tracking.'}
              </p>
            </article>

            <article className="rounded-2xl border border-[#8f3247]/10 bg-white p-6 text-center">
              <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#f4eef8] text-2xl text-[#6f3d94]">📅</div>
              <h3 className="mb-2 text-xl text-[#8f3247]">{isArabic ? 'أزمة تضارب الحجوزات' : 'Booking conflicts'}</h3>
              <p className="text-sm leading-7 text-[#2d2338]/65">
                {isArabic
                  ? 'تداخل المواعيد يسبب إرباكًا للعملاء ويؤثر على كفاءة التشغيل.'
                  : 'Overlapping bookings create customer frustration and operational friction.'}
              </p>
            </article>

            <article className="rounded-2xl border border-[#8f3247]/10 bg-white p-6 text-center">
              <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-[#edf4f3] text-2xl text-[#2e7a72]">📖</div>
              <h3 className="mb-2 text-xl text-[#8f3247]">{isArabic ? 'وداعًا للدفاتر' : 'Goodbye notebooks'}</h3>
              <p className="text-sm leading-7 text-[#2d2338]/65">
                {isArabic
                  ? 'تخلّص من أخطاء الإدخال اليدوي وفقدان البيانات عبر نظام سحابي آمن.'
                  : 'Eliminate manual entry errors and data loss through a secure cloud platform.'}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#e9e9e9] px-5 py-16 sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-[clamp(1.9rem,4vw,3.2rem)] text-[#8f3247]">
              {isArabic ? 'رؤيتنا ورسالتنا' : 'Our Vision & Mission'}
            </h2>
            <p className="text-[#2d2338]/60">{isArabic ? 'بوصلتنا نحو التميز' : 'Our compass toward excellence'}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-2xl border-s-4 border-[#8f3247] bg-[#f2ebe4] p-7 text-center shadow-[0_6px_20px_rgba(0,0,0,0.04)]">
              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#f7e7e8] text-2xl text-[#8f3247]">◎</div>
              <h3 className="mb-4 text-[2rem] text-[#8f3247]">{isArabic ? 'الرسالة' : 'Mission'}</h3>
              <p className="text-[#2d2338]/70">
                {isArabic
                  ? 'تمكين أصحاب القاعات والشاليهات من إدارة أعمالهم بكفاءة استثنائية، عبر تجربة حجز رقمية وثقة عالية، من خلال منصة سحابية متكاملة وسهلة الاستخدام.'
                  : 'Empower venue owners to run operations with exceptional efficiency through a trusted and seamless digital experience.'}
              </p>
            </article>

            <article className="rounded-2xl border-s-4 border-[#5b2e82] bg-[#f2ebe4] p-7 text-center shadow-[0_6px_20px_rgba(0,0,0,0.04)]">
              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#eee7f7] text-2xl text-[#5b2e82]">◉</div>
              <h3 className="mb-4 text-[2rem] text-[#5b2e82]">{isArabic ? 'الرؤية' : 'Vision'}</h3>
              <p className="text-[#2d2338]/70">
                {isArabic
                  ? 'أن نكون الخيار الأول لإدارة قطاع الضيافة والمناسبات في العراق والمنطقة، من خلال حلول تقنية لا تساوم على الجودة أو الفخامة.'
                  : 'Become the first choice for hospitality and event management in Iraq and the region through premium technology solutions.'}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#efefef] px-5 py-16 sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-[clamp(1.8rem,4vw,3rem)] text-[#8f3247]">
              {isArabic ? 'قيمنا الأساسية' : 'Our Core Values'}
            </h2>
            <p className="text-[#2d2338]/60">
              {isArabic ? 'المبادئ التي تقود كل قرار نتخذه' : 'Principles behind every decision we make'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <article className="text-center">
              <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-[#f5ebef] text-3xl text-[#8f3247]">⌕</div>
              <h3 className="mb-3 text-[2rem] text-[#8f3247]">{isArabic ? 'الشفافية المطلقة' : 'Full Transparency'}</h3>
              <p className="text-[#2d2338]/70">
                {isArabic
                  ? 'لا تكاليف خفية ولا وعود مبهمة، نبني على الوضوح التام مع شركائنا.'
                  : 'No hidden costs and no vague promises, only clear transparent collaboration.'}
              </p>
            </article>

            <article className="text-center">
              <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-[#e9f1f1] text-3xl text-[#31767a]">⚡</div>
              <h3 className="mb-3 text-[2rem] text-[#8f3247]">{isArabic ? 'السرعة والفعالية' : 'Speed & Efficiency'}</h3>
              <p className="text-[#2d2338]/70">
                {isArabic
                  ? 'تصميم مبسط يضمن إنجاز المهام المعقدة في ثوانٍ معدودة بدون الحاجة لتدريب معقد.'
                  : 'A streamlined experience that completes complex tasks in seconds without heavy training.'}
              </p>
            </article>

            <article className="text-center">
              <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-[#eee9f6] text-3xl text-[#5b2e82]">🛡</div>
              <h3 className="mb-3 text-[2rem] text-[#8f3247]">{isArabic ? 'الثقة والأمن' : 'Trust & Security'}</h3>
              <p className="text-[#2d2338]/70">
                {isArabic
                  ? 'بياناتك وعملاؤك في أمان تام، نعتمد أعلى معايير التشفير لضمان سرية معلوماتك.'
                  : 'Your data and customers stay safe with enterprise-grade security and encryption.'}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#e9e9e9] px-5 py-16 sm:px-8 sm:py-20 xl:px-14 2xl:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-xl border border-[#8f3247]/10 bg-white">
              <img
                src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=900&q=80"
                alt="Technology dashboard"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-[#8f3247]/10 bg-white">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                alt="Expert team meeting"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="text-center lg:text-right">
            <h2 className="mb-5 text-[clamp(1.8rem,4vw,3.2rem)] leading-tight text-[#8f3247]">
              {isArabic ? 'فريق من الخبراء، شغف بالتميز' : 'Expert team, passion for excellence'}
            </h2>
            <p className="mx-auto mb-5 max-w-2xl leading-8 text-[#2d2338]/72 lg:mx-0">
              {isArabic
                ? 'تأسست الوريا على يد نخبة من المهندسين وخبراء إدارة الأعمال الذين أدركوا الفجوة الكبيرة في السوق العراقي، فجمعنا بين أحدث التقنيات العالمية والفهم العميق لاحتياجات السوق المحلي.'
                : 'Alworya was founded by elite engineers and business experts who recognized a major market gap and combined global technology with local insight.'}
            </p>
            <p className="mx-auto max-w-2xl leading-8 text-[#2d2338]/72 lg:mx-0">
              {isArabic
                ? 'نحن لسنا مجرد مزود خدمة، بل شركاء في نجاحك. وفريق الدعم الفني لدينا متواجد على مدار الساعة لضمان استمرارية أعمالك بلا انقطاع.'
                : 'We are not just a service provider, we are your success partner with 24/7 support to keep your operations running.'}
            </p>

            <div className="mt-8 flex items-center justify-center gap-3 lg:justify-end">
              <span className="text-sm text-[#2d2338]/70">{isArabic ? '+15 خبير تقني وإداري' : '+15 technical & management experts'}</span>
              <div className="flex -space-x-2 rtl:space-x-reverse">
                <img className="h-9 w-9 rounded-full border-2 border-[#e9e9e9] object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="team member" />
                <img className="h-9 w-9 rounded-full border-2 border-[#e9e9e9] object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg" alt="team member" />
                <img className="h-9 w-9 rounded-full border-2 border-[#e9e9e9] object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" alt="team member" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#912b3b] px-5 py-20 text-center sm:px-8 sm:py-24 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-5 text-[clamp(1.9rem,4.2vw,3.5rem)] leading-tight text-[#f6e8e2]">
            {isArabic ? 'جاهز للارتقاء بأعمالك إلى مستوى جديد؟' : 'Ready to elevate your business to a new level?'}
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-[#f6e8e2]/85">
            {isArabic
              ? 'انضم إلى نخبة القاعات والشاليهات التي تدير أعمالها بكفاءة وفخامة مع الوريا.'
              : 'Join elite venues that run operations with premium efficiency and elegance through Alworya.'}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="w-full min-w-[180px] border border-[#f6e8e2]/45 px-8 py-3 text-[#f6e8e2] transition-colors hover:bg-[#f6e8e2]/10 sm:w-auto"
            >
              {isArabic ? 'تواصل معنا الآن' : 'Contact us now'}
            </button>
            <button
              type="button"
              className="w-full min-w-[180px] bg-[#f6e8e2] px-8 py-3 text-[#8f3247] transition-colors hover:bg-white sm:w-auto"
            >
              {isArabic ? 'استكشف المزايا' : 'Explore features'}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
