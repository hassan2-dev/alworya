export default function ContactPage({ isArabic }) {
  return (
    <>
      <section className="bg-[#f4ebe2] px-5 py-20 text-center sm:px-8 sm:py-24 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-5 text-[clamp(2.1rem,5vw,4.3rem)] leading-tight text-[#4d286f]">
            {isArabic ? 'نحن هنا لمساعدتك' : 'We are here to help'}
          </h1>
          <p className="mx-auto max-w-3xl text-[1.05rem] leading-8 text-[#2d2338]/72">
            {isArabic
              ? 'فريق دعم الوريا متاح دائمًا للإجابة على استفساراتك وتقديم المساعدة اللازمة لضمان تجربة سلسة.'
              : 'Alworya support team is always available to answer your questions and provide the help you need.'}
          </p>
        </div>
      </section>

      <section className="bg-[#efefef] px-5 pb-20 sm:px-8 sm:pb-24 xl:px-14 2xl:px-20">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <article className="rounded-xl bg-[#5b2e82] p-6 text-white">
                <p className="mb-2 text-xl">WhatsApp</p>
                <p className="text-sm text-white/85">+964 3210 654 987</p>
                <p className="mt-2 text-xs text-white/75">{isArabic ? 'رد سريع' : 'Quick response'}</p>
              </article>
              <article className="rounded-xl bg-[#31767a] p-6 text-white">
                <p className="mb-2 text-xl">{isArabic ? 'اتصل بنا' : 'Call us'}</p>
                <p className="text-sm text-white/85">+964 7890 456 123</p>
                <p className="mt-2 text-xs text-white/75">{isArabic ? 'متاح 24/7' : 'Available 24/7'}</p>
              </article>
              <article className="rounded-xl bg-[#171a1f] p-6 text-white">
                <p className="mb-2 text-xl">{isArabic ? 'ساعات العمل' : 'Working hours'}</p>
                <p className="text-sm text-white/85">{isArabic ? 'الأحد - الخميس' : 'Sun - Thu'}</p>
                <p className="mt-1 text-sm text-white/85">9:00 AM - 6:00 PM</p>
              </article>
              <article className="rounded-xl bg-[#912b3b] p-6 text-white">
                <p className="mb-2 text-xl">{isArabic ? 'البريد الإلكتروني' : 'Email'}</p>
                <p className="text-sm text-white/85">support@alworya.com</p>
              </article>
            </div>

            <article className="relative overflow-hidden rounded-xl border border-[#d9d2cc] bg-[#f5ead8] p-8">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                alt="Map background"
                className="absolute inset-0 h-full w-full object-cover opacity-20"
              />
              <div className="relative mx-auto max-w-[240px] rounded-lg bg-white p-5 text-center shadow-[0_8px_18px_rgba(0,0,0,0.1)]">
                <h3 className="mb-2 text-xl text-[#4d286f]">{isArabic ? 'المقر الرئيسي' : 'Head office'}</h3>
                <p className="text-sm text-[#2d2338]/70">{isArabic ? 'بغداد - الكرادة' : 'Baghdad - Karrada'}</p>
                <button type="button" className="mt-3 border-b border-[#8f3247] pb-1 text-sm text-[#8f3247]">
                  {isArabic ? 'عرض على الخريطة' : 'View on map'}
                </button>
              </div>
            </article>
          </div>

          <form className="rounded-xl border border-[#ddd6d0] bg-[#f7f4f1] p-6 sm:p-8" onSubmit={(e) => e.preventDefault()}>
            <h2 className="mb-6 text-[2rem] text-[#4d286f]">{isArabic ? 'أرسل رسالة' : 'Send a message'}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input className="rounded-lg border border-[#ddd5ce] bg-white px-4 py-3 text-sm outline-none focus:border-[#912b3b]" placeholder={isArabic ? 'الاسم الكامل *' : 'Full name *'} />
              <input className="rounded-lg border border-[#ddd5ce] bg-white px-4 py-3 text-sm outline-none focus:border-[#912b3b]" placeholder={isArabic ? 'رقم الهاتف / البريد *' : 'Phone / email *'} />
            </div>
            <select className="mt-4 w-full rounded-lg border border-[#ddd5ce] bg-white px-4 py-3 text-sm outline-none focus:border-[#912b3b]">
              <option>{isArabic ? 'نوع الاستفسار' : 'Inquiry type'}</option>
              <option>{isArabic ? 'المبيعات والاشتراك' : 'Sales and subscriptions'}</option>
              <option>{isArabic ? 'الدعم الفني' : 'Technical support'}</option>
            </select>
            <textarea className="mt-4 min-h-[140px] w-full rounded-lg border border-[#ddd5ce] bg-white px-4 py-3 text-sm outline-none focus:border-[#912b3b]" placeholder={isArabic ? 'الرسالة *' : 'Message *'} />
            <button type="submit" className="mt-5 w-full rounded-lg bg-[#5b2e82] px-6 py-3 font-semibold text-white transition hover:bg-[#4d286f]">
              {isArabic ? 'إرسال الرسالة' : 'Send message'}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[#f4ebe2] px-5 pb-20 sm:px-8 sm:pb-24 xl:px-14 2xl:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-[clamp(1.8rem,4vw,3rem)] text-[#4d286f]">
              {isArabic ? 'الأسئلة الشائعة' : 'Frequently asked questions'}
            </h2>
            <p className="text-[#2d2338]/65">
              {isArabic ? 'قد تجد إجابة لاستفسارك هنا قبل التواصل معنا.' : 'You may find your answer here before contacting us.'}
            </p>
          </div>

          <div className="space-y-3">
            {[
              isArabic ? 'كيف يمكنني إضافة قاعتي إلى تطبيق الوريا؟' : 'How can I add my venue to Alworya?',
              isArabic ? 'هل يوجد رسوم على الحجوزات؟' : 'Are there fees on bookings?',
              isArabic ? 'كيف يتم الدفع لأصحاب القاعات؟' : 'How are venue owners paid?',
            ].map((q) => (
              <details key={q} className="rounded-md border border-[#ddd6d0] bg-white px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[#4d286f]">
                  <span className="text-lg">{q}</span>
                  <span className="text-2xl text-[#31767a]">+</span>
                </summary>
                <p className="mt-3 text-sm text-[#2d2338]/70">
                  {isArabic
                    ? 'يمكنك التواصل مع فريقنا وسيقوم بإرشادك خطوة بخطوة لإتمام العملية بسهولة.'
                    : 'You can contact our team and we will guide you step by step through the process.'}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
