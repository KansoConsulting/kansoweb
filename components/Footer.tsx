'use client'

import Image from 'next/image'
import { IoLogoWhatsapp, IoLogoLinkedin, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-[#F5F2ED] py-12 px-4" style={{ backgroundColor: '#4A7C77' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Kansō</h3>
            <p className="text-[#F5F2ED]/80">
              Menos ruido, más precisión. Transformamos la complejidad operativa en flujos de trabajo invisibles que devuelven el tiempo y la calma a las organizaciones.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-[#F5F2ED]/80">
              <li>
                <a href="#sobre-nosotros" className="hover:text-white transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-[#F5F2ED]/80">
              <strong>MÉTODO KANSŌ SL</strong><br />
              Calle Hermosilla 48
              <br />
              28001 Madrid
              <br />
              hola@kanso.consulting
              <br />
              Tel: 910 62 65 58
            </p>
          </div>

          {/* Social / WhatsApp Column */}
          <div>
            {/* Desktop: WhatsApp QR */}
            {/* Desktop: WhatsApp QR & Socials */}
            <div className="hidden md:flex gap-4">
              <div>
                <h4 className="text-lg font-semibold mb-4">WhatsApp</h4>
                <div className="w-32 bg-white p-2 rounded-lg">
                  <Image
                    src="/images/qr_whatsapp.png"
                    alt="QR WhatsApp"
                    width={150}
                    height={150}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-end gap-3 pb-1">
                <a href="https://www.linkedin.com/company/kans%C5%8D" target="_blank" className="text-white hover:text-[#F5F2ED]/80 transition-colors" title="LinkedIn">
                  <IoLogoLinkedin size={28} />
                </a>
                <a href="https://www.instagram.com/kanso.consulting" target="_blank" className="text-white hover:text-[#F5F2ED]/80 transition-colors" title="Instagram">
                  <IoLogoInstagram size={28} />
                </a>
              </div>
            </div>

            {/* Mobile: Social Icons */}
            <div className="md:hidden">
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex gap-6">
                <a href="https://wa.me/34910626558" target="_blank" className="text-white hover:text-[#F5F2ED]/80 transition-colors">
                  <IoLogoWhatsapp size={32} />
                </a>
                <a href="https://www.linkedin.com/company/kans%C5%8D" target="_blank" className="text-white hover:text-[#F5F2ED]/80 transition-colors">
                  <IoLogoLinkedin size={32} />
                </a>
                <a href="https://www.instagram.com/kanso.consulting" target="_blank" className="text-white hover:text-[#F5F2ED]/80 transition-colors">
                  <IoLogoInstagram size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#F5F2ED]/20 pt-8 text-center text-[#F5F2ED]/60">
          <p>&copy; {currentYear} Kansō. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

