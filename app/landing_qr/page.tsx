'use client'

import Image from 'next/image'
import Link from 'next/link'

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
                <p className="text-[#F5F2ED]/60 text-xs uppercase tracking-widest max-w-xs">
                    Conectamos tecnología y personas con sencillez
                </p>
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
                    className="group flex items-center justify-center gap-4 bg-[#4A7C77] text-[#F5F2ED] p-5 rounded-xl text-xl font-medium shadow-lg hover:bg-[#3d6662] transition-colors"
                >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.43-5.15-3.75-6.58-6.59l1.97-1.57c.26-.26.35-.63.24-1.01a17.9 17.9 0 00-.56-3.53C8.82 3.51 7.98 3 7.18 3H4.25C3.56 3 3 3.56 3 4.25c0 9.77 7.96 17.75 17.75 17.75.69 0 1.25-.56 1.25-1.25v-2.93c0-.8-.51-1.64-1.34-1.79l-.65-.65z" />
                    </svg>
                    Llamar
                </Link>

                {/* Email Button */}
                <Link
                    href="mailto:hola@kanso.consulting"
                    className="group flex items-center justify-center gap-4 bg-[#4A7C77] text-[#F5F2ED] p-5 rounded-xl text-xl font-medium shadow-lg hover:bg-[#3d6662] transition-colors"
                >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    eMail
                </Link>

                {/* WhatsApp Button */}
                <Link
                    href="https://wa.me/34910626558"
                    target="_blank"
                    className="group flex items-center justify-center gap-4 bg-[#4A7C77] text-[#F5F2ED] p-5 rounded-xl text-xl font-medium shadow-lg hover:bg-[#3d6662] transition-colors"
                >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zM12.05 19.43c-1.44 0-2.85-.38-4.1-1.11l-.29-.17-3.03.79.81-2.95-.19-.31c-.79-1.28-1.21-2.76-1.21-4.28.02-4.41 3.61-8 8.03-8 2.14 0 4.15.83 5.66 2.34 1.51 1.51 2.34 3.53 2.34 5.66.01 4.43-3.58 8.03-8.02 8.03zm4.41-6c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.17.25-.64.8-.79.95-.14.16-.29.18-.53.06-.24-.12-1-.37-1.9-1.17-.69-.62-1.16-1.38-1.3-1.61-.14-.24-.01-.36.11-.48.11-.11.24-.29.35-.43.12-.14.16-.24.23-.4.08-.16.03-.3-.02-.42-.04-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.4h-.45c-.16 0-.41.06-.63.3-.22.24-.85.83-.85 2.03s.87 2.36 1.0.2.69 3.59 2.04 5.76 6.02 2.15 3.03 1.93 4.88c-.14 1.17 0 1.96-1.13 2.08-1.13.12 1.43-.54 1.65s-.74 1.3-.85 1.52c-.12.22-.44.27-.68.15z" />
                    </svg>
                    WhatsApp
                </Link>

                {/* Add to Contact Button */}
                <a
                    href="https://vcard.link/card/Iv2U"
                    target="_blank"
                    className="group flex items-center justify-center gap-4 bg-[#4A7C77] text-[#F5F2ED] p-5 rounded-xl text-xl font-medium shadow-lg hover:bg-[#3d6662] transition-colors"
                >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    Añadir a agenda
                </a>
            </div>
        </main>
    )
}
