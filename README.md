# Kanso - Sitio Web Moderno

Sitio web moderno con efectos parallax, formulario de contacto y optimización SEO.

## 🚀 Características

- ✨ **Efectos Parallax** - Implementados con Framer Motion
- 📧 **Formulario de Contacto** - Con validación usando React Hook Form y Zod
- 🔍 **SEO Optimizado** - Meta tags, sitemap, robots.txt
- 📱 **Responsive Design** - Diseño adaptable a todos los dispositivos
- 🎨 **Diseño Moderno** - UI elegante con Tailwind CSS
- ⚡ **Performance** - Next.js 14 con App Router

## 🛠️ Tecnologías

- **Next.js 14** - Framework React con SSR/SSG
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones y parallax
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas

## 📦 Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📧 Configuración del Formulario de Contacto

El formulario de contacto actualmente está en modo de demostración. Para activar el envío de emails, tienes varias opciones:

### Opción 1: Formspree (Recomendado)

1. Crea una cuenta en [formspree.io](https://formspree.io)
2. Crea un nuevo formulario y obtén tu Form ID
3. Edita `components/ContactForm.tsx` y descomenta las líneas del fetch:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
```

### Opción 2: EmailJS

1. Crea una cuenta en [emailjs.com](https://www.emailjs.com)
2. Configura tu servicio de email
3. Integra el SDK de EmailJS en el componente

### Opción 3: API Route de Next.js

Crea una API route en `app/api/contact/route.ts` y usa un servicio como SendGrid, Resend, o Nodemailer.

## 🎨 Personalización

- **Colores**: Edita los gradientes en los componentes o modifica `tailwind.config.ts`
- **Contenido**: Edita los textos directamente en los componentes
- **SEO**: Modifica los meta tags en `app/layout.tsx`

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🚀 Despliegue

Puedes desplegar este proyecto en:

- **Vercel** (recomendado para Next.js) - [vercel.com](https://vercel.com)
- **Netlify** - [netlify.com](https://netlify.com)
- **AWS Amplify** - [aws.amazon.com/amplify](https://aws.amazon.com/amplify)

## 📄 Licencia

MIT

