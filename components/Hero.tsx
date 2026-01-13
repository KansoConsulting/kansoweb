'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const playVideo = () => {
        video.play().catch(() => {
          // Si falla el autoplay, intentar de nuevo
        })
      }

      const handlePause = () => {
        if (!video.ended) {
          playVideo()
        }
      }

      const handleTimeUpdate = () => {
        // Si el video se detiene cerca del inicio (posible problema de carga)
        if (video.paused && video.currentTime < 5) {
          playVideo()
        }
      }

      video.addEventListener('pause', handlePause)
      video.addEventListener('timeupdate', handleTimeUpdate)

      // Intentar reproducir
      playVideo()

      // Verificar periódicamente que esté reproduciéndose
      const interval = setInterval(() => {
        if (video.paused && !video.ended) {
          playVideo()
        }
      }, 1000)

      return () => {
        video.removeEventListener('pause', handlePause)
        video.removeEventListener('timeupdate', handleTimeUpdate)
        clearInterval(interval)
      }
    }
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 pb-8"
    >
      {/* Parallax background video */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full blur-[2px]"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ minWidth: '100%', minHeight: '100%' }}
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Fallback a imagen si el video no está disponible */}
        <Image
          src="/images/fondo_hero.jpg"
          alt="Fondo Hero"
          fill
          className="object-cover hidden"
          style={{ display: 'none' }}
          priority
        />
      </motion.div>

      {/* Overlay con color #1e1e1e y transparencia para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-[#1e1e1e]/60" />

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']), opacity }}
        className="relative z-10 text-center px-4 font-serif"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-bold mb-6 flex items-center justify-center gap-4 text-5xl md:text-7xl"
          style={{ fontFamily: "'Klee One', serif", color: '#F5F2ED' }}
        >
          簡素 <span className="text-5xl md:text-7xl font-bold" style={{ fontFamily: 'var(--font-playfair), serif', color: '#F5F2ED' }}>{'{ kansō }'}</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#F5F2ED]/90 max-w-4xl mx-auto space-y-6 leading-loose"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          <p>
            Concepto japonés que significa <span className="text-[#FFFFFF] font-bold">sencillez</span>. Representa el arte de la simpleza y la ausencia de elementos sobrantes, centrándose en lo esencial para lograr <span className="text-[#FFFFFF] font-bold">claridad y funcionalidad</span>.
          </p>
          <p>
            Aplicamos esta filosofía para transformar experiencias digitales complejas en <span className="text-[#FFFFFF] font-bold">soluciones intuitivas</span> y elegantes.
          </p>
          <p>
            Diseñamos productos UX/UI que funcionan: eliminamos la fricción y enfocamos la atención de sus usuarios en lo esencial: sus objetivos.
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#F5F2ED] rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-[#F5F2ED] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

