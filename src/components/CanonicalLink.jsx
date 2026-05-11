import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_ORIGIN = 'https://www.alworya.com'

export default function CanonicalLink() {
  const { pathname } = useLocation()

  useEffect(() => {
    const href = `${SITE_ORIGIN}${pathname === '/' ? '/' : pathname}`

    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', href)
  }, [pathname])

  return null
}
