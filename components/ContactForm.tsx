'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { useState } from 'react'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Aquí puedes integrar con un servicio como Formspree, EmailJS, o una API route
      // Ejemplo con Formspree (necesitarás crear una cuenta en formspree.io):
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })

      // Por ahora, simulamos el envío
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log('Form data:', data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contacto"
      className="relative min-h-screen flex items-center justify-center py-12 md:py-20 px-4"
      style={{ backgroundColor: '#1e1e1e' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A7C77] mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            El inicio de una conversación honesta.
          </h2>
          <p className="text-xl text-[#F5F2ED]/80 font-light">
            Antes de diseñar, escuchamos. Elige cómo quieres empezar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Columna izquierda - Diagnóstico */}
          <div className="flex flex-col justify-center space-y-8">
            <h3 className="text-3xl font-bold text-[#F5F2ED]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              El primer paso hacia la sencillez.
            </h3>
            <div className="text-[#F5F2ED]/90 space-y-6 text-lg leading-relaxed font-light">
              <p>
                Diseñar con empatía significa sumergirnos en tu realidad antes de trazar un solo wireframe o tocar una sola línea de código. Creemos que la verdadera eficiencia no nace de añadir más funciones, sino de eliminar las barreras que te impiden avanzar.
              </p>
              <p>
                Hemos preparado un breve diagnóstico diseñado para que nos cuentes, con tus propias palabras, qué procesos interrumpen tu flujo de trabajo o en qué puntos sientes que tu software actual ha dejado de ser una herramienta para convertirse en ruido. Queremos entender no solo lo que necesitas construir, sino cómo quieres sentirte al usarlo.
              </p>
              <p>
                Nos tomaremos el tiempo de analizar tus respuestas con la calma necesaria para que, cuando nos sentemos a hablar por primera vez, lo hagamos con un propósito claro y una visión compartida de lo que el orden puede hacer por tu proyecto.
              </p>
              <p className="text-sm text-[#F5F2ED]/60 italic">
                Te llevará menos de 3 minutos. Prometido.
              </p>
            </div>

            <div className="flex justify-center">
              <a
                href="/diagnostico"
                className="inline-block bg-[#4A7C77] text-[#F5F2ED] font-medium py-4 px-8 rounded-lg hover:bg-[#4A7C77]/90 transition-colors text-center w-full md:w-fit"
              >
                Iniciar diagnóstico de mi proyecto
              </a>
            </div>
          </div>

          {/* Columna derecha - Formulario Vía Rápida */}
          <div className="bg-[#F5F2ED]/5 rounded-2xl p-8 border border-[#F5F2ED]/10">
            <div className="mb-8">
              <h3 className="text-xl font-medium text-[#F5F2ED] mb-2">
                ¿Prefieres algo más directo?
              </h3>
              <p className="text-[#F5F2ED]/60">
                Cuéntanos tu duda aquí.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#F5F2ED]/80 mb-2">
                  Nombre
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-transparent border border-[#F5F2ED]/20 rounded-lg focus:ring-1 focus:ring-[#4A7C77] focus:border-[#4A7C77] outline-none transition-all text-[#F5F2ED] placeholder:text-[#F5F2ED]/30"
                  placeholder="Ej: Tu nombre..."
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-300">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#F5F2ED]/80 mb-2">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-transparent border border-[#F5F2ED]/20 rounded-lg focus:ring-1 focus:ring-[#4A7C77] focus:border-[#4A7C77] outline-none transition-all text-[#F5F2ED] placeholder:text-[#F5F2ED]/30"
                  placeholder="Ej: tu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-300">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#F5F2ED]/80 mb-2">
                  Mensaje
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={8}
                  className="w-full px-4 py-3 bg-transparent border border-[#F5F2ED]/20 rounded-lg focus:ring-1 focus:ring-[#4A7C77] focus:border-[#4A7C77] outline-none transition-all resize-none text-[#F5F2ED] placeholder:text-[#F5F2ED]/30"
                  placeholder="Ej: ¿En qué podemos ayudarte hoy?"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-300">{errors.message.message}</p>
                )}
              </div>

              <div className="flex justify-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full md:w-auto bg-transparent border border-[#F5F2ED]/40 text-[#F5F2ED] font-medium py-3 px-8 rounded-lg hover:bg-[#F5F2ED]/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </motion.button>
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-900/30 border border-green-800 text-green-300 rounded-lg text-sm"
                >
                  ¡Mensaje enviado con éxito! Te responderemos pronto.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-900/30 border border-red-800 text-red-300 rounded-lg text-sm"
                >
                  Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

