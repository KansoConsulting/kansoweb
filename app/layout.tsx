import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})


export const metadata: Metadata = {
  metadataBase: new URL('https://kanso.consulting'),
  title: 'Kansō | Consultoría UX y Estrategia de Diseño Minimalista',
  description: 'En Kansō eliminamos el ruido operativo. Consultoría UX estratégica para transformar la complejidad en claridad. Diseñamos soluciones digitales que funcionan.',
  keywords: ['Kansō', 'Kanso UX', 'diseño UX estratégico', 'consultoría diseño producto', 'minimalismo digital', 'optimización procesos B2B', 'diseño interfaces'],
  authors: [{ name: 'Kanso' }],
  openGraph: {
    type: 'website',
    url: 'https://kanso.consulting',
    title: 'Kansō | Consultoría UX y Estrategia de Diseño',
    description: 'Diseñamos la claridad que tu negocio necesita. Especialistas en UX estratégica y optimización de procesos.',
    images: ['/images/logo_kanso.png'],
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kansō | Consultoría UX',
    description: 'Eliminamos el ruido operativo. Soluciones de diseño minimalista para problemas complejos.',
    images: ['/images/logo_kanso.png'],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: '/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Kansō Consulting",
    "image": "https://kanso.consulting/images/logo_kanso.png",
    "description": "Consultoría de diseño UX estratégico especializada en la optimización de procesos y minimalismo digital.",
    "url": "https://kanso.consulting",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "España"
    },
    "serviceType": ["UX Design", "Product Strategy", "Process Optimization"]
  }

  return (
    <html lang="es" className={`${montserrat.variable} ${playfairDisplay.variable}`}>
      <body className={`${montserrat.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}

