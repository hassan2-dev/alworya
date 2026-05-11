import { NavLink } from 'react-router-dom'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: (
      <path d="M5.75 7.5H3.5v8.25h2.25V7.5ZM4.63 3.75a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Zm5.2 3.75H7.68v8.25h2.2v-4.28c0-1.13.22-2.22 1.6-2.22 1.37 0 1.39 1.28 1.39 2.29v4.21h2.2V11c0-2.34-.5-3.7-2.9-3.7-1.15 0-1.92.63-2.24 1.23h-.03l-.07-1.03Z" />
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <path d="M15.55 5.72c-.42.19-.87.31-1.35.37.49-.29.86-.75 1.03-1.3-.45.27-.96.47-1.5.57a2.35 2.35 0 0 0-4.07 1.6c0 .18.02.36.06.53A6.67 6.67 0 0 1 4.9 5.04a2.34 2.34 0 0 0 .73 3.13c-.38 0-.74-.11-1.05-.28v.03a2.35 2.35 0 0 0 1.88 2.3c-.2.06-.4.08-.62.08-.15 0-.3-.01-.44-.04a2.36 2.36 0 0 0 2.2 1.63 4.72 4.72 0 0 1-2.92 1c-.19 0-.38-.01-.56-.03a6.66 6.66 0 0 0 3.6 1.05c4.33 0 6.7-3.59 6.7-6.7v-.3c.46-.33.86-.74 1.17-1.2Z" />
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com',
    icon: (
      <path d="M6.7 3.8h5.6a2.9 2.9 0 0 1 2.9 2.9v5.6a2.9 2.9 0 0 1-2.9 2.9H6.7a2.9 2.9 0 0 1-2.9-2.9V6.7a2.9 2.9 0 0 1 2.9-2.9Zm0 1.25A1.65 1.65 0 0 0 5.05 6.7v5.6c0 .91.74 1.65 1.65 1.65h5.6c.91 0 1.65-.74 1.65-1.65V6.7c0-.91-.74-1.65-1.65-1.65H6.7Zm2.8 2.1a2.35 2.35 0 1 1 0 4.7 2.35 2.35 0 0 1 0-4.7Zm0 1.25a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Zm2.5-1.72a.58.58 0 1 1 1.16 0 .58.58 0 0 1-1.16 0Z" />
    ),
  },
]

export default function Layout({ t, isArabic, mobileNavOpen, setMobileNavOpen, routeMap, setLanguage, children }) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-50 w-full border-b border-[#80202b]/12 bg-[#f5f1e9]/97 shadow-[0_4px_20px_rgba(64,45,45,0.05)] backdrop-blur-md">
        <nav className="flex w-full flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8 xl:px-14 2xl:px-20 lg:gap-6">
          <NavLink to="/" onClick={() => setMobileNavOpen(false)} className="-ms-2 flex shrink-0 items-center gap-2 rounded-lg p-2">
            <img src="/mpbile icon.png" alt="Alworya" className="h-8 w-auto min-[980px]:hidden" />
            <img src="/Alworya horizontal logo.svg" alt="Alworya" className="hidden h-8 w-auto sm:h-9 min-[980px]:block" />
          </NavLink>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:gap-2 min-[980px]:flex">
            {t.navLinks.map(({ id, label }) => (
              <NavLink
                key={id}
                to={routeMap[id]}
                className={({ isActive }) =>
                  `rounded-md border-b-2 px-2.5 py-2 text-[0.8125rem] font-medium transition-colors xl:text-[0.875rem] ${
                    isActive
                      ? 'border-[#80202b] text-[#80202b]'
                      : 'border-transparent text-[#4a4543] hover:bg-[#80202b]/6 hover:text-[#80202b]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="hidden cursor-pointer px-3 py-2 text-[0.8125rem] font-medium text-[#4a4543] hover:text-[#80202b] sm:block"
              onClick={() => setLanguage(isArabic ? 'en' : 'ar')}
            >
              {isArabic ? 'EN' : 'عربي'}
            </button>
            <button
              type="button"
              className="-me-2 flex h-11 w-11 items-center justify-center rounded-lg border border-[#80202b]/20 text-[#80202b] min-[980px]:hidden"
              aria-expanded={mobileNavOpen}
              aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileNavOpen((o) => !o)}
            >
              <span className="text-xl leading-none">{mobileNavOpen ? '×' : '≡'}</span>
            </button>
          </div>

          {mobileNavOpen && (
            <div className="flex w-full basis-full flex-col gap-1 border-t border-[#80202b]/10 pt-3 pb-1 min-[980px]:hidden">
              {t.navLinks.map(({ id, label }) => (
                <NavLink
                  key={id}
                  to={routeMap[id]}
                  onClick={() => setMobileNavOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-3 text-start text-[0.9rem] font-medium ${
                      isActive ? 'bg-[#80202b]/8 text-[#80202b]' : 'text-[#4a4543]'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main>{children}</main>

      <footer className="w-full bg-[#e9e9e9] px-5 pt-20 pb-7 text-[#9c9899] sm:px-8 xl:px-14 2xl:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <section className="max-w-sm text-center lg:text-start">
            <h2 className="mb-4 text-[2rem] font-extrabold tracking-[0.06em] text-[#912b3b]">ALWORYA</h2>
            <p className="text-sm leading-7 text-[#a7a1a2]">{t.footer.brandText}</p>
            <div className="mt-6 flex justify-center gap-4 lg:justify-start">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-[#aaa6a8] transition-colors hover:text-[#912b3b]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg aria-hidden="true" className="h-4 w-4 fill-current" viewBox="0 0 19 19">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </section>

          <nav aria-label={t.footer.quickTitle} className="text-center lg:text-start">
            <h3 className="mb-5 text-sm font-bold text-[#912b3b]">{t.footer.quickTitle}</h3>
            <ul className="space-y-3 text-sm">
              {t.footer.quickLinks.map(({ id, label }) => (
                <li key={id}>
                  <NavLink className="transition-colors hover:text-[#912b3b]" to={routeMap[id]}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.footer.legalTitle} className="text-center lg:text-start">
            <h3 className="mb-5 text-sm font-bold text-[#912b3b]">{t.footer.legalTitle}</h3>
            <ul className="space-y-3 text-sm">
              {t.footer.legalLinks.map(({ label, href }) => (
                <li key={href}>
                  <a className="transition-colors hover:text-[#912b3b]" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 border-t border-[#d2cccc] pt-7 text-xs text-[#b7b1b3] sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright}</p>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-2 sm:justify-start">
            <a className="transition-colors hover:text-[#912b3b]" href={`tel:${t.footer.phone.replaceAll(' ', '')}`}>
              {t.footer.phone}
            </a>
            <a className="transition-colors hover:text-[#912b3b]" href={`mailto:${t.footer.email}`}>
              {t.footer.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
