'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function CaseStudyPage() {
    return (
        <main className="min-h-screen bg-[#1A1C1D] text-[#F5F2ED] font-sans selection:bg-[#4A7C77] selection:text-white">
            <Header forceDark={true} />

            {/* Header Full Width */}
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-16 mt-20"
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/masajes.png"
                        alt="Background"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1D] via-[#1A1C1D]/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <span className="text-[#4A7C77] font-medium tracking-widest uppercase text-sm mb-4 block shadow-black drop-shadow-md">
                            Caso de Estudio
                        </span>
                        <h1
                            className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-[#F5F2ED] drop-shadow-lg"
                            style={{ fontFamily: 'var(--font-playfair), serif' }}
                        >
                            Serenidad Operativa: <br className="hidden md:block" />
                            Silenciando la Gestión de Citas
                        </h1>
                        <p className="text-xl md:text-2xl text-[#F5F2ED]/90 font-light max-w-2xl leading-relaxed drop-shadow-md mb-8">
                            El refugio donde el tiempo se detuvo: eliminando la fricción administrativa en un entorno de relajación.
                        </p>

                        {/* Client Profile Tags */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#F5F2ED]/20 pt-6 w-full max-w-5xl">
                            <div className="md:border-r border-[#4A7C77]/30 pr-6">
                                <span className="block text-[#4A7C77] text-xs uppercase tracking-wider mb-2 font-bold">Sector</span>
                                <span className="block text-[#F5F2ED] text-base">Bienestar & Wellness</span>
                            </div>
                            <div className="md:border-r border-[#4A7C77]/30 pr-6">
                                <span className="block text-[#4A7C77] text-xs uppercase tracking-wider mb-2 font-bold">Tamaño</span>
                                <span className="block text-[#F5F2ED] text-base">Pequeña Empresa</span>
                            </div>
                            <div className="md:border-r border-[#4A7C77]/30 pr-6">
                                <span className="block text-[#4A7C77] text-xs uppercase tracking-wider mb-2 font-bold">Servicios</span>
                                <span className="block text-[#F5F2ED] text-base">Automatización, No-Code</span>
                            </div>
                            <div>
                                <span className="block text-[#4A7C77] text-xs uppercase tracking-wider mb-2 font-bold">Tiempo de implementación</span>
                                <span className="block text-[#F5F2ED] text-base">1 semana</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.header>

            <article className="py-20 px-6 md:px-20 max-w-7xl mx-auto">

                {/* Introducción */}
                <section className="mb-20">
                    <div className="w-full space-y-6 text-lg leading-relaxed text-[#F5F2ED]/90">
                        <h2 className="text-3xl font-bold text-[#F5F2ED] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                            01. Introducción
                        </h2>
                        <p>
                            Imagina un salón de masajes diseñado para la paz: luz tenue, aroma a sándalo y el suave eco de una fuente de agua. Sin embargo, en este refugio de serenidad, existía un intruso persistente: el sonido constante de las notificaciones de WhatsApp.
                        </p>
                        <p>
                            La dueña del salón se encontraba atrapada en una paradoja; vendía bienestar y desconexión, pero su propia jornada era una sucesión de interrupciones digitales para gestionar la agenda.
                        </p>
                    </div>
                </section>

                {/* El Desafío */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="w-full">
                        <h2 className="text-3xl font-bold text-[#F5F2ED] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                            02. Desafío: La paradoja del éxito y el ruido digital
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed text-[#F5F2ED]/90">
                            <p>
                                El caos no era por falta de clientes, sino por el éxito del canal de comunicación. &quot;Mis clientas no quieren una app ni registrarse en una web&quot;, nos confesó el cliente. Ellas buscaban la cercanía del chat, pero esa cercanía obligaba a la masajista a detener sus servicios para responder disponibilidad, confirmar horas y gestionar cancelaciones.
                            </p>
                            <p>
                                El reto Kansō era claro: ¿Cómo digitalizar un negocio artesanal sin añadir complejidad y, sobre todo, sin romper el silencio necesario para el tratamiento?
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* La Estrategia */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 py-12 border-y border-[#F5F2ED]/10"
                >
                    <h2 className="text-3xl font-bold text-[#F5F2ED] mb-8 text-left" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                        03. Estrategia: Diseñar para la invisibilidad
                    </h2>
                    <p className="text-left w-full mr-auto mb-12 text-lg text-[#F5F2ED]/90">
                        Fieles a nuestra filosofía de eliminar lo innecesario, decidimos no construir nada que el usuario tuviera que aprender. La estrategia no fue cambiar el hábito de las clientas, sino dotar de inteligencia al canal que ya amaban.
                    </p>

                    <div className="bg-[#F5F2ED]/5 p-8 rounded-xl border border-[#F5F2ED]/10">
                        <h3 className="text-xl font-bold text-[#4A7C77] mb-4">Tecnología Invisible</h3>
                        <p className="text-[#F5F2ED]/80">
                            Una solución robusta que opera en la sombra, permitiendo que la interfaz humana siga siendo un simple chat de WhatsApp, pero con un cerebro automatizado detrás.
                        </p>
                    </div>
                </motion.section>

                {/* La Solución */}
                <section className="mb-24">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-[#F5F2ED] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                                04. Solución: El engranaje oculto
                            </h2>
                            <div className="space-y-6 text-lg leading-relaxed text-[#F5F2ED]/90">
                                <p>
                                    Diseñamos un ecosistema de bajo rozamiento que conecta tres pilares sin que nadie note la costura:
                                </p>
                                <ul className="space-y-6 mt-8">
                                    <li className="pl-6 border-l-2 border-[#4A7C77]">
                                        <strong className="block text-[#F5F2ED] mb-1">La Recepción Inteligente (n8n)</strong>
                                        <span className="text-base">Implementamos un flujo lógico que actúa como un recepcionista 24/7. Lee la intención del mensaje, consulta huecos libres y ofrece opciones en segundos, todo de forma natural.</span>
                                    </li>
                                    <li className="pl-6 border-l-2 border-[#4A7C77]">
                                        <strong className="block text-[#F5F2ED] mb-1">El Almacén de Calma (Airtable)</strong>
                                        <span className="text-base">Sustituimos la agenda de papel por una base de datos visual y ultra sencilla. La masajista ahora tiene un espejo digital de su salón donde las citas aparecen mágicamente confirmadas.</span>
                                    </li>
                                    <li className="pl-6 border-l-2 border-[#4A7C77]">
                                        <strong className="block text-[#F5F2ED] mb-1">El Puente (WhatsApp API)</strong>
                                        <span className="text-base">Sin webs, sin contraseñas. La confirmación llega como un susurro al móvil de la clienta, cerrando el ciclo de reserva sin una sola intervención humana.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Visual Placeholder for Solution - Abstract Automation Flow */}
                        <div className="relative aspect-square md:aspect-[4/5] bg-gradient-to-br from-[#1A1C1D] to-[#2C3032] rounded-2xl overflow-hidden border border-[#F5F2ED]/10 flex items-center justify-center p-8">
                            <div className="absolute inset-0 bg-[#4A7C77]/5"></div>
                            <div className="relative w-full max-w-sm flex flex-col gap-4">
                                {/* Node 1 */}
                                <div className="bg-[#1A1C1D] border border-[#F5F2ED]/10 p-4 rounded-lg flex items-center gap-4 shadow-lg">
                                    <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                    </div>
                                    <div className="h-2 w-24 bg-[#F5F2ED]/20 rounded"></div>
                                </div>
                                {/* Connecting Line */}
                                <div className="h-8 w-px bg-[#4A7C77]/50 mx-auto"></div>
                                {/* Node 2 */}
                                <div className="bg-[#1A1C1D] border border-[#4A7C77] p-4 rounded-lg flex items-center gap-4 shadow-[0_0_20px_rgba(74,124,119,0.15)]">
                                    <div className="w-10 h-10 rounded-full bg-[#4A7C77] flex items-center justify-center text-white">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-32 bg-[#F5F2ED]/40 rounded"></div>
                                        <div className="h-2 w-20 bg-[#F5F2ED]/20 rounded"></div>
                                    </div>
                                </div>
                                {/* Connecting Line */}
                                <div className="h-8 w-px bg-[#4A7C77]/50 mx-auto"></div>
                                {/* Node 3 */}
                                <div className="bg-[#1A1C1D] border border-[#F5F2ED]/10 p-4 rounded-lg flex items-center gap-4 shadow-lg opacity-70">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3zM21 9l-9 7-9-7" /></svg>
                                    </div>
                                    <div className="h-2 w-24 bg-[#F5F2ED]/20 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* El Resultado */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 bg-[#4A7C77] rounded-3xl p-8 md:p-16 text-[#F5F2ED]"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                        05. El Resultado: Manos que curan, tecnología que acompaña
                    </h2>
                    <p className="text-center w-full mx-auto mb-12 text-lg opacity-90">
                        Hoy, el teléfono ya no suena en mitad de un masaje de piedras volcánicas. El salón ha recuperado su activo más valioso: el tiempo de calidad.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold mb-2">+20%</div>
                            <div className="text-lg font-medium opacity-80 uppercase tracking-widest mb-4">Reservas</div>
                            <p className="text-sm opacity-70 max-w-xs mx-auto">Aumento gracias a la respuesta inmediata y disponibilidad 24/7.</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold mb-2">15h</div>
                            <div className="text-lg font-medium opacity-80 uppercase tracking-widest mb-4">Mensuales Recuperadas</div>
                            <p className="text-sm opacity-70 max-w-xs mx-auto">Tiempo que antes se perdía &quot;picando&quot; datos y gestionando la agenda manualmente.</p>
                        </div>
                    </div>

                    <p className="text-center mt-12 text-lg italic opacity-90">
                        &quot;En este salón, ahora la única conexión que importa es la de las manos con la piel; del resto, se encarga el silencio de la automatización.&quot;
                    </p>
                </motion.section>

                {/* Footer Grid: Curious & CTA */}
                <section className="py-12 md:py-24 border-t border-[#F5F2ED]/10 mb-20">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
                        {/* Para curiosos */}
                        <div>
                            <h3 className="text-3xl font-bold text-[#F5F2ED] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                                Para curiosos y profesionales del diseño
                            </h3>
                            <p className="text-[#F5F2ED]/80 text-lg mb-8 leading-relaxed">
                                Si hablas nuestro idioma, hemos preparado una documentación extendida donde detallamos el proceso de investigación, la arquitectura de datos y el sistema de diseño que sostiene esta solución. Transparencia técnica para mentes analíticas.
                            </p>

                            <div className="flex flex-col gap-4 bg-[#F5F2ED]/5 p-6 rounded-xl border border-[#F5F2ED]/10">
                                <button className="bg-transparent border border-[#4A7C77] text-[#4A7C77] hover:bg-[#4A7C77] hover:text-[#F5F2ED] px-6 py-3 rounded-full font-medium text-sm transition-all uppercase tracking-wider w-full md:w-auto">
                                    Explorar Proceso
                                </button>
                                <div className="text-sm text-[#F5F2ED]/60">
                                    <span className="text-[#4A7C77] font-bold mr-2">Contenido protegido.</span>
                                    Si eres un profesional del sector, puedes solicitar la contraseña vía LinkedIn o email.
                                </div>
                            </div>
                        </div>

                        {/* Cierre */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#F5F2ED] mb-6 text-left" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                                ¿Tu operativa necesita precisión?
                            </h2>
                            <p className="text-[#F5F2ED]/70 text-lg mb-10 w-full text-left">
                                Diseñamos ecosistemas digitales que trabajan para ti, no al revés. Recupera el control de tu tiempo.
                            </p>
                            <div className="text-center">
                                <Link
                                    href="/diagnostico"
                                    className="inline-block bg-[#4A7C77] text-[#F5F2ED] font-medium py-4 px-10 rounded-full hover:bg-[#4A7C77]/90 transition-all hover:scale-105 shadow-[0_4px_20px_rgba(74,124,119,0.3)]"
                                >
                                    Iniciar diagnóstico de mi proyecto
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </article>

            <Footer />
        </main>
    )
}
