import Image from 'next/image'
import Link from 'next/link'
import { PhoneForwarded, MailPlus } from 'lucide-react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { IoPersonAddSharp } from 'react-icons/io5'

export default function LandingQR() {
    return (
        <main className="min-h-screen bg-[#1A1C1D] flex flex-col items-center justify-center p-6 text-center font-sans">
            {/* Brand Section */}
            <div className="mb-12 flex flex-col items-center">
                <div className="relative w-64 h-24 mb-6">
                    <Image
                        src="/images/logo_header.png"
                        alt="Kansō"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Profile Section */}
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-[#F5F2ED] tracking-widest mb-2 font-sans">
                    NOEL LAZUÉN
                </h1>
                <p className="text-xl text-[#F5F2ED]/50 font-light italic uppercase tracking-wider">
                    Consultoría UX
                </p>
            </div>

            {/* Actions Section */}
            <div className="flex flex-col gap-4 w-full max-w-sm">
                {/* Call Button */}
                <Link
                    href="tel:+34910626558"
                    className="relative flex items-center justify-center bg-[#4A7C77] text-[#F5F2ED] p-5 rounded-xl text-xl font-medium shadow-lg hover:bg-[#3d6662] transition-colors"
                >
                    <PhoneForwarded className="absolute left-6 w-6 h-6" />
                    <span>Llamar</span>
                </Link>

                {/* Email Button */}
                <Link
                    href="mailto:hola@kanso.consulting"
                    className="relative flex items-center justify-center bg-[#4A7C77] text-[#F5F2ED] p-5 rounded-xl text-xl font-medium shadow-lg hover:bg-[#3d6662] transition-colors"
                >
                    <MailPlus className="absolute left-6 w-6 h-6" />
                    <span>eMail</span>
                </Link>

                {/* WhatsApp Button */}
                <Link
                    href="https://wa.me/34910626558"
                    target="_blank"
                    className="relative flex items-center justify-center bg-[#4A7C77] text-[#F5F2ED] p-5 rounded-xl text-xl font-medium shadow-lg hover:bg-[#3d6662] transition-colors"
                >
                    <IoLogoWhatsapp className="absolute left-6 w-6 h-6" />
                    <span>WhatsApp</span>
                </Link>

                {/* Add to Contact Button */}
                <a
                    href="https://vcard.link/card/Iv2U.vcf"
                    target="_blank"
                    className="relative flex items-center justify-center bg-[#4A7C77] text-[#F5F2ED] p-5 rounded-xl text-xl font-medium shadow-lg hover:bg-[#3d6662] transition-colors"
                >
                    <IoPersonAddSharp className="absolute left-6 w-6 h-6" />
                    <span>Añadir a agenda</span>
                </a>
            </div>

            <p className="text-[#F5F2ED]/60 text-xs uppercase tracking-widest max-w-xs mt-20">
                Conectamos tecnología y personas con sencillez
            </p>
        </main>
    )
}
