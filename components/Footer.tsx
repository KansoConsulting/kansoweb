'use client'

import Image from 'next/image'

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
        </div>
        <div className="border-t border-[#F5F2ED]/20 pt-8 text-center text-[#F5F2ED]/60">
          <p>&copy; {currentYear} Kansō. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

