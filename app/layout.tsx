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
  title: 'Kansō - Experiencia de Usuario',
  description: 'Sitio web moderno con efectos parallax y formulario de contacto. Diseño elegante y optimizado para SEO.',
  keywords: ['diseño web', 'parallax', 'contacto', 'moderno', 'minimalista'],
  authors: [{ name: 'Kanso' }],
  openGraph: {
    title: 'Kansō - Experiencia de Usuario',
    description: 'Sitio web moderno con efectos parallax y formulario de contacto.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kansō - Experiencia de Usuario',
    description: 'Sitio web moderno con efectos parallax y formulario de contacto.',
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
  return (
    <html lang="es" className={`${montserrat.variable} ${playfairDisplay.variable}`}>
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}

