'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

export default function About() {
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

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={ref}
      id="sobre-nosotros"
      className="relative min-h-screen flex items-center justify-center py-12 md:py-20 px-4 overflow-hidden bg-[#F5F2ED]"
    >
      {/* Imagen de fondo con parallax */}
      <motion.div
        className="absolute left-0 w-full z-0 h-[120%] -top-[10%]"
        style={{ y: isMobile ? 0 : backgroundY }}
      >
        <Image
          src="/images/fondo_quien.jpg"
          alt="Textura de fondo"
          fill
          className="object-cover opacity-40"
        />
      </motion.div>

      <motion.div
        style={{ opacity, y: isMobile ? 0 : contentY }}
        className="max-w-7xl mx-auto relative z-10 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-8 gap-4 md:gap-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-8 text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Empatía Profunda, Diseño Funcional.
          </motion.h2>
          {/* Columna izquierda - 5 columnas */}
          <div className="col-span-8 md:col-span-5 text-base md:text-lg text-gray-600 leading-relaxed space-y-6">
            <div className="flex justify-start mb-6">
              <Image
                src="/images/logo_kanso.png"
                alt="Logo Kanso"
                width={200}
                height={80}
                className="h-auto object-contain"
              />
            </div>
            <p>
              Somos <strong>kansō</strong>, una consultoría de experiencia de usuario que se erige sobre la base de la empatía. Respaldados por más de dos décadas de experiencia en diseño, nuestra misión es ir más allá de la pantalla y comprender auténticamente el mundo de sus usuarios.
            </p>
            <p>
              Nuestra formación inicial en el diseño gráfico nos legó un alto valor por la estética y la coherencia visual. Sin embargo, descubrimos que el diseño más efectivo nace al priorizar el alma del usuario. Por ello, evolucionamos para hacer de la empatía nuestro principio rector: nos sumergimos en sus contextos utilizando la sociología y la psicología cognitiva para entender cómo piensan, por qué se frustran y qué esperan.
            </p>
            <p>
              Este compromiso empático nos permite crear productos que, aunque tienen un alto valor estético, se centran principalmente en reducir la carga mental y evitar la frustración. El diseño en <strong>kansō</strong> no tiene que gustar superficialmente; tiene que ser percibido como simple y claro por el cerebro. Aplicamos la filosofía <strong>kansō</strong> para transformar esa comprensión profunda en soluciones digitales funcionales que generan resultados tangibles para su negocio.
            </p>
          </div>

          {/* Columna derecha - 3 columnas */}
          <div className="col-span-8 md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <Image
                src="/images/quienes_somos.png"
                alt="Quienes somos"
                width={400}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
                style={{ maxWidth: '400px' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

