import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/documentacion-tecnica-login/', '/private/'],
    },
    sitemap: 'https://kanso.consulting/sitemap.xml',
  }
}
