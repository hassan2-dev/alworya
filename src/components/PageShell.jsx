export default function PageShell({ title, subtitle, children }) {
  return (
    <section className="w-full px-5 py-16 sm:px-8 xl:px-14 2xl:px-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-3 text-[clamp(1.7rem,4vw,2.8rem)] text-[#4d286f]">{title}</h1>
        {subtitle ? <p className="mb-8 text-[#2d2338]/80">{subtitle}</p> : null}
        {children}
      </div>
    </section>
  )
}
