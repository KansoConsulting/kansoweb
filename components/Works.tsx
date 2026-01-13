'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Works() {
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


  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={ref}
      id="trabajos"
      className="relative min-h-screen flex items-center justify-center py-12 md:py-20 px-4 overflow-hidden"
      style={{ backgroundColor: '#F5F2ED' }}
    >

      <motion.div
        style={{ y: isMobile ? 0 : contentY }}
        className="w-full relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4 px-4"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Experiencias que Funcionan
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#1A1C1D]/70 text-center max-w-3xl mx-auto mb-12 px-4 leading-relaxed"
        >
          Soluciones digitales diseñadas desde la empatía para generar un impacto real en el día a día.
        </motion.p>

        {/* Grid de 6 cards en 2 filas, 3 por fila */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {[
            {
              title: 'La Huella de la Confianza: Simplificando el Registro Horario',
              description: 'Simplificando el Registro Horario',
              hoverTitle: 'El peso de lo invisible: transformando la burocracia en un ritual digital invisible.',
              summary: 'Transformamos un proceso de fichaje manual y disperso en una experiencia de un solo toque. Diseñamos una solución nativa para entornos de alta movilidad, eliminando el ruido administrativo y reduciendo el tiempo de gestión de RRHH en un 94%.',
              tags: ['UX Strategy', 'Optimización', 'Mobile Design'],
              image: '/images/fichaje.png',
              link: '/casos/el-silencio-del-registro'
            },
            {
              title: 'Seguridad sin Fricción: Digitalizando el Protocolo APPCC en la Cocina',
              description: 'Digitalizando el Protocolo APPCC en la Cocina',
              hoverTitle: 'Cumplimiento Normativo: De la obligación burocrática al hábito digital.',
              summary: 'Reemplazamos las carpetas de registros sanitarios por una interfaz táctil intuitiva en cocina. Simplificamos el control de puntos críticos (APPCC) para que la seguridad alimentaria sea parte del flujo natural de trabajo, no una interrupción.',
              tags: ['FoodTech', 'Compliance', 'UX Industrial'],
              image: '/images/appcc.png'
            },
            {
              title: 'Cerca, estés donde estés: Transformando la Experiencia Digital de las Familias',
              description: 'Transformando la Experiencia Digital de las Familias',
              hoverTitle: 'Conexión Emocional: Reduciendo la ansiedad de la separación.',
              summary: 'Diseñamos un puente digital entre escuelas infantiles y familias. Más que una agenda digital, creamos una ventana de tranquilidad que permite a los padres sentirse presentes, transformando la ansiedad de la separación en confianza y cercanía diaria.',
              tags: ['EdTech', 'Emotional UX', 'Mobile First'],
              image: '/images/babylog.png'
            },
            {
              title: 'De la Gestión al Destino: Optimizando el Flujo Operativo en Agencias de Viaje',
              description: 'Optimizando el Flujo Operativo en Agencias de Viaje',
              hoverTitle: 'Claridad en Ruta: Unificando la complejidad del viaje.',
              summary: 'Centralizamos múltiples proveedores y confirmaciones en un dashboard unificado. Transformamos horas de gestión administrativa y correos dispersos en un flujo de cotización y reserva ágil, permitiendo a los agentes centrarse en diseñar experiencias memorables.',
              tags: ['TravelTech', 'B2B', 'Dashboard Design'],
              image: '/images/viajes.png'
            },
            {
              title: 'Gestión Logística: De la saturación a la precisión',
              description: 'De la saturación a la precisión',
              hoverTitle: 'El pulso acelerado del centro logístico: transformando el ruido en precisión quirúrgica.',
              summary: 'Rediseño de un sistema de gestión de almacén (WMS) para reducir la carga cognitiva de los operarios. Logramos un 0% de errores de picking mediante una arquitectura de información orientada a la tarea.',
              tags: ['Industrial UX', 'Eficiencia', 'Dashboard'],
              image: '/images/logistica.png',
              link: '/casos/gestion-logistica'
            },
            {
              title: 'Serenidad Operativa: Silenciando la Gestión de Citas',
              description: 'Silenciando la Gestión de Citas',
              hoverTitle: 'El refugio donde el tiempo se detuvo: eliminando la fricción administrativa en un entorno de relajación.',
              summary: 'Eliminamos la fricción administrativa en un entorno de relajación. Diseñamos un sistema de reservas que sustituye las interrupciones telefónicas por un flujo digital automatizado y silencioso. Logramos que la tecnología sea invisible, permitiendo que el equipo se enfoque exclusivamente en el bienestar del cliente sin distracciones.',
              tags: ['Calma Digital', 'Booking UX', 'Minimalismo'],
              image: '/images/masajes.png',
              link: '/casos/serenidad-operativa'
            },
          ].map((work, index) => {
            const CardContent = (
              <div
                className="relative rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow group cursor-pointer w-full border-4 border-[#F5F2ED] h-full"
                style={{ aspectRatio: '16/9' }}
              >
                {/* Imagen de fondo */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Título visible por defecto (desaparece en hover) */}
                <div className="absolute inset-0 flex items-end p-6 z-10 transition-opacity duration-300 opacity-100 group-hover:opacity-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <h3 className="text-lg font-bold text-[#F5F2ED]">{work.title}</h3>
                </div>

                {/* Overlay oscuro que aparece en hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 z-10 transition-all duration-300" />
                {/* Contenido que aparece en hover */}
                <div className="absolute inset-0 z-20 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-[#1e1e1e]/90 backdrop-blur-md w-full h-full flex flex-col justify-center items-start p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-left">
                    {/* Tags */}
                    {work.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {work.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] uppercase tracking-wider bg-[#4A7C77]/20 text-[#4A7C77] px-2 py-1 rounded-full font-medium border border-[#4A7C77]/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="text-xl md:text-2xl font-bold text-[#F5F2ED] mb-3 leading-tight">
                      {work.hoverTitle || work.title}
                    </h3>

                    <p className="text-[#F5F2ED]/80 text-sm leading-relaxed mb-6 line-clamp-4">
                      {work.summary || work.description}
                    </p>

                    <div className="mt-auto flex items-center text-[#4A7C77] font-medium text-sm group/btn">
                      Ver caso de estudio
                      <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )

            if (work.link) {
              return (
                <Link key={index} href={work.link} className="block w-full">
                  {CardContent}
                </Link>
              )
            }

            return (
              <div key={index} className="w-full">
                {CardContent}
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

