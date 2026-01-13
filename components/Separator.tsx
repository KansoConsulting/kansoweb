'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function Separator() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={ref} className="relative py-12 md:py-16 px-4 overflow-hidden" style={{ backgroundColor: '#1e1e1e' }}>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <blockquote
          className="text-2xl md:text-3xl font-light text-[#F5F2ED] italic leading-relaxed"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          &quot;Haz solo lo esencial. Pregúntate en cada momento:
          <br />
          ¿Es esto necesario?&quot;
        </blockquote>
        <p className="text-[#F5F2ED]/70 text-sm md:text-base mt-4">
          — Marco Aurelio, <em>Meditaciones</em>
        </p>
      </div>
    </section>
  )
}

