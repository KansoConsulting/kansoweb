'use client'

import { useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface HeaderProps {
  forceDark?: boolean
}

export default function Header({ forceDark = false }: HeaderProps) {
  const { scrollY } = useScroll()
  const [bgOpacity, setBgOpacity] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: '¿Quién?', href: '/#sobre-nosotros' },
    { label: '¿Qué?', href: '/#servicios' },
    { label: '¿Cómo?', href: '/#metodologia' },
    { label: 'Experiencias', href: '/#trabajos' },
    { label: 'Contacto', href: '/#contacto' },
  ]

  useEffect(() => {
    if (forceDark) {
      setBgOpacity(1)
      return
    }

    const unsubscribe = scrollY.on('change', (latest) => {
      // Cambiar opacidad basada en el scroll (0-100px de scroll = 0-1 de opacidad)
      const opacity = Math.min(latest / 100, 1)
      setBgOpacity(opacity)
    })

    return () => unsubscribe()
  }, [scrollY, forceDark])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-4 md:px-8 transition-all duration-300"
        style={{
          backgroundColor: `rgba(26, 28, 29, ${forceDark ? 1 : bgOpacity})`,
          backdropFilter: (forceDark || bgOpacity > 0) ? 'blur(10px)' : 'none'
        }}
      >
        <a
          href="/"
          className="flex items-center h-full cursor-pointer"
        >
          <Image
            src="/images/logo_header.png"
            alt="Logo Kanso"
            width={130}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#F5F2ED]/80 hover:text-[#F5F2ED] text-sm uppercase tracking-wider transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <a
            href="/#contacto"
            className="bg-[#4A7C77] text-[#F5F2ED] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#4A7C77]/90 transition-colors uppercase"
          >
            Diseña tu solución
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#F5F2ED] hover:text-[#F5F2ED]/80 transition-colors flex items-center h-full"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <nav
          className="md:hidden fixed top-20 left-0 right-0 z-40 py-4 px-4 transition-all duration-300"
          style={{
            backgroundColor: `rgba(26, 28, 29, ${bgOpacity})`,
            backdropFilter: bgOpacity > 0 ? 'blur(10px)' : 'none'
          }}
        >
          <div className="flex flex-col items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#F5F2ED] text-base hover:text-[#F5F2ED]/80 transition-colors uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#contacto"
              className="bg-[#4A7C77] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#4A7C77]/90 transition-colors uppercase mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Diseña tu solución
            </a>
          </div>
        </nav>
      )}
    </>
  )
}

