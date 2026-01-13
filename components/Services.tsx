'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section
      ref={ref}
      id="servicios"
      className="relative min-h-screen flex items-center justify-center py-12 md:py-20 px-4 overflow-hidden"
      style={{ backgroundColor: '#1e1e1e' }}
    >
      {/* Imagen de fondo con parallax */}
      <motion.div
        className="absolute inset-0 z-0 opacity-30"
        style={{ y: isMobile ? 0 : backgroundY }}
      >
        <Image
          src="/images/fondo_kanso.png"
          alt="Fondo"
          fill
          className="object-cover"
          style={{ objectFit: 'cover' }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full"
        style={{ y: isMobile ? 0 : contentY }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ fontFamily: 'var(--font-playfair), serif', color: '#4A7C77' }}
        >
          Soluciones para la Claridad Digital.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Columna 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#F5F2ED]/10 backdrop-blur-lg rounded-xl p-6 border border-[#F5F2ED]/20"
          >
            <h3 className="text-xl font-bold text-[#F5F2ED] mb-4">
              Consultoría y Optimización de Plataformas
            </h3>
            <div className="text-[#F5F2ED]/90 space-y-3 text-sm leading-relaxed">
              <p>
                Si ya posees una aplicación o plataforma en funcionamiento, te ayudamos a maximizar su rendimiento. Diagnosticamos y resolvemos los puntos de fricción que frenan a tus usuarios, elevando la satisfacción y las tasas de conversión.
              </p>
              <p className="font-semibold text-[#F5F2ED]">Nuestros entregables clave en esta área son:</p>
              <ul className="space-y-2 list-disc list-inside ml-2 text-xs md:text-sm">
                <li>
                  <strong>Auditorías de Usabilidad:</strong> Identificamos fallos de diseño y errores que le están costando dinero.
                </li>
                <li>
                  <strong>Optimización de Conversión (CRO):</strong> Implementamos cambios rápidos (quick-wins) para aumentar directamente sus ventas o registros.
                </li>
                <li>
                  <strong>Sistemas de Diseño (Design Systems):</strong> Aseguramos la coherencia total de su marca y aceleramos el trabajo de sus equipos de desarrollo futuro.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Columna 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#F5F2ED]/10 backdrop-blur-lg rounded-xl p-6 border border-[#F5F2ED]/20"
          >
            <h3 className="text-xl font-bold text-[#F5F2ED] mb-4">
              Diseño y Desarrollo de Productos a Medida
            </h3>
            <div className="text-[#F5F2ED]/90 space-y-3 text-sm leading-relaxed">
              <p>
                Creamos nuevas soluciones digitales desde cero, garantizando que el diseño UX sea la base del proyecto. Construimos aplicaciones web, móviles o SaaS que son intuitivas, escalables y perfectamente alineadas con sus objetivos estratégicos.
              </p>
              <p className="font-semibold text-[#F5F2ED]">En el desarrollo a medida, usted obtendrá:</p>
              <ul className="space-y-2 list-disc list-inside ml-2 text-xs md:text-sm">
                <li>
                  <strong>Estrategia UX y Definición de MVP:</strong> Le ayudamos a ahorrar costes al enfocar el desarrollo solo en lo esencial y validado.
                </li>
                <li>
                  <strong>Diseño de Interfaces (UI) Limpias:</strong> Entregamos productos visualmente atractivos y fáciles de usar que destacan en el mercado.
                </li>
                <li>
                  <strong>Prototipos Interactivos y Testeos:</strong> Reducimos drásticamente los riesgos al validar la funcionalidad con usuarios antes de invertir en el código final.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Columna 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#F5F2ED]/10 backdrop-blur-lg rounded-xl p-6 border border-[#F5F2ED]/20"
          >
            <h3 className="text-xl font-bold text-[#F5F2ED] mb-4">
              Identidad de Marca y Eficiencia Operativa
            </h3>
            <div className="text-[#F5F2ED]/90 space-y-3 text-sm leading-relaxed">
              <p>
                La claridad debe ser tanto interna como externa. Definimos la esencia visual de su marca para que transmita confianza y optimizamos sus procesos internos mediante automatizaciones inteligentes, eliminando el ruido en su flujo de trabajo diario.
              </p>
              <p className="font-semibold text-[#F5F2ED]">Fortalezca su estructura mediante:</p>
              <ul className="space-y-2 list-disc list-inside ml-2 text-xs md:text-sm">
                <li>
                  <strong>Identidad Corporativa Estratégica:</strong> Creamos manuales de marca y sistemas visuales que garantizan una voz coherente en todos sus canales.
                </li>
                <li>
                  <strong>Automatización de Procesos (No-Code):</strong> Diseñamos flujos de trabajo que conectan sus herramientas actuales para ahorrar tiempo y reducir errores manuales.
                </li>
                <li>
                  <strong>Mentoría y Evolución UX:</strong> Acompañamos a su equipo en la toma de decisiones constantes, asegurando que el producto siga creciendo con empatía y orden.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

