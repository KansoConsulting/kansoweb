'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

export default function Methodology() {
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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={ref}
      id="metodologia"
      className="relative min-h-screen flex items-center justify-center pt-8 pb-16 md:pb-32 px-4 overflow-hidden"
      style={{ backgroundColor: '#EAF1FF' }}
    >
      {/* Imagen de fondo con parallax */}
      <motion.div
        className="absolute left-0 w-full z-0 opacity-20 h-[120%] -top-[10%]"
        style={{ y: isMobile ? 0 : backgroundY }}
      >
        <Image
          src="/images/metodologia_fondo.jpg"
          alt="Fondo Metodología"
          fill
          className="object-cover"
          style={{ objectFit: 'cover' }}
        />
      </motion.div>

      <motion.div
        style={{ y: isMobile ? 0 : contentY }}
        className="w-full relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 px-4"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Diseño Centrado en lo Simple.
        </motion.h2>

        {/* Grid de 6 cards en 2 filas, 3 por fila */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {[
            {
              title: 'Empatizar',
              description: 'Nuestro trabajo comienza eliminando las suposiciones. A través de la investigación de usuarios y auditorías exhaustivas, nos sumergimos en el contexto de su cliente. Así, definimos quién es su usuario, cuáles son sus verdaderas necesidades, y dónde fallan sus plataformas actuales en el día a día.',
              icon: 'empatia_icon.png',
              color: '#FF5161'
            },
            {
              title: 'Definir',
              description: 'Con el conocimiento profundo obtenido, aplicamos el rigor analítico para crear una base estratégica sólida. Definimos el problema real a resolver, creando perfiles de usuario, sus viajes y las métricas clave de éxito. Esto nos permite enfocar el diseño solo en lo esencial, asegurando que el problema que resolvemos es el correcto y evitando la inversión en funcionalidades que no aportan valor real al negocio ni al usuario.',
              icon: 'definir_icon.png',
              color: '#FF6426'
            },
            {
              title: 'Idear',
              description: 'Aplicamos el principio <strong>kansō</strong> para transformar la solución definida en una estructura lógica y eficiente. Diseñamos la Arquitectura de la Información y los flujos de interacción, asegurando que la navegación sea siempre intuitiva y que el usuario encuentre lo que busca sin esfuerzo. A través de la ideación creativa, la complejidad se gestiona para ofrecer simpleza.',
              icon: 'idear_icon.png',
              color: '#FFBB59'
            },
            {
              title: 'Prototipar',
              description: 'Materializamos las ideas y la estructura definida a partir de wireframes y prototipos interactivos. Damos forma a interfaces visuales (UI) limpias y coherentes. Nuestro enfoque en la simpleza culmina en el desarrollo de Sistemas de Diseño escalables, activos clave que garantizan la uniformidad de marca y optimizan el tiempo de desarrollo de sus equipos.',
              icon: 'prototipar_icon.png',
              color: '#4CC8B9'
            },
            {
              title: 'Evaluar',
              description: 'La simpleza solo es útil si funciona para el usuario. Antes de la implementación final, realizamos pruebas de usabilidad exhaustivas para validar los prototipos con usuarios reales. Observamos el comportamiento y el feedback para asegurar que el diseño es intuitivo y que hemos resuelto el problema central. Esto garantiza que la versión final esté libre de fricciones y lista para el mercado.',
              icon: 'evaluar_icon.png',
              color: '#3D88C4'
            },
            {
              title: 'Implementar',
              description: 'Llevamos el diseño validado a la realidad funcional, ya sea optimizando plataformas existentes o desarrollando soluciones desde cero. Nos centramos en la eficacia pura para asegurar productos rápidos, robustos y fáciles de usar. Nuestro objetivo es generar resultados tangibles, incluyendo la Optimización de Conversión (CRO), para impactar positivamente en sus métricas de negocio.',
              icon: 'implementar_icon.png',
              color: '#7F6AB6'
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              {card.icon && (
                <div className="flex justify-center mb-4">
                  <div
                    className="rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: card.color,
                      width: '72px',
                      height: '72px'
                    }}
                  >
                    <Image
                      src={`/images/${card.icon}`}
                      alt={card.title}
                      width={40}
                      height={40}
                      className="object-contain"
                      style={{ width: '40px', height: '40px', maxWidth: '40px', maxHeight: '40px' }}
                    />
                  </div>
                </div>
              )}
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center uppercase">{card.title}</h3>
              <p
                className="text-gray-600 text-xs md:text-sm leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: card.description.replace(/kanso/gi, '<strong>kansō</strong>')
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

