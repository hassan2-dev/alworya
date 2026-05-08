import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { content, routeMap } from './content/siteContent'
import AboutPage from './pages/AboutPage'
import AppPreviewPage from './pages/AppPreviewPage'
import ContactPage from './pages/ContactPage'
import FeaturesPage from './pages/FeaturesPage'
import HomePage from './pages/HomePage'
import HowItWorksPage from './pages/HowItWorksPage'
import OwnersPage from './pages/OwnersPage'
import TestimonialsPage from './pages/TestimonialsPage'

function App() {
  const [language, setLanguage] = useState('ar')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const isArabic = language === 'ar'
  const t = content[language]

  useEffect(() => {
    document.documentElement.lang = isArabic ? 'ar' : 'en'
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr'
  }, [isArabic])

  return (
    <Layout
      t={t}
      isArabic={isArabic}
      mobileNavOpen={mobileNavOpen}
      setMobileNavOpen={setMobileNavOpen}
      routeMap={routeMap}
      setLanguage={setLanguage}
    >
        <Routes>
          <Route path="/" element={<HomePage t={t} isArabic={isArabic} />} />
          <Route path="/about" element={<AboutPage t={t} isArabic={isArabic} />} />
          <Route path="/features" element={<FeaturesPage isArabic={isArabic} />} />
          <Route path="/how-it-works" element={<HowItWorksPage t={t} isArabic={isArabic} />} />
          <Route path="/app-preview" element={<AppPreviewPage isArabic={isArabic} />} />
          <Route path="/owners" element={<OwnersPage t={t} isArabic={isArabic} />} />
          <Route path="/testimonials" element={<TestimonialsPage t={t} isArabic={isArabic} />} />
          <Route path="/contact" element={<ContactPage isArabic={isArabic} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </Layout>
  )
}

export default App
