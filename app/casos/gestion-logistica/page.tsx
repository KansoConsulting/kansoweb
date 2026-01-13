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
                        src="/images/logistica.png"
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
                            Gestión Logística: <br className="hidden md:block" />
                            De la saturación a la precisión
                        </h1>
                        <p className="text-xl md:text-2xl text-[#F5F2ED]/90 font-light max-w-2xl leading-relaxed drop-shadow-md mb-8">
                            El pulso acelerado del centro logístico: transformando el ruido en precisión quirúrgica.
                        </p>

                        {/* Client Profile Tags */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#F5F2ED]/20 pt-6 w-full max-w-5xl">
                            <div className="md:border-r border-[#4A7C77]/30 pr-6">
                                <span className="block text-[#4A7C77] text-xs uppercase tracking-wider mb-2 font-bold">Sector</span>
                                <span className="block text-[#F5F2ED] text-base">Logística Industrial</span>
                            </div>
                            <div className="md:border-r border-[#4A7C77]/30 pr-6">
                                <span className="block text-[#4A7C77] text-xs uppercase tracking-wider mb-2 font-bold">Tamaño</span>
                                <span className="block text-[#F5F2ED] text-base">Centro de Distribución</span>
                            </div>
                            <div className="md:border-r border-[#4A7C77]/30 pr-6">
                                <span className="block text-[#4A7C77] text-xs uppercase tracking-wider mb-2 font-bold">Servicios</span>
                                <span className="block text-[#F5F2ED] text-base">Industrial UX, WMS</span>
                            </div>
                            <div>
                                <span className="block text-[#4A7C77] text-xs uppercase tracking-wider mb-2 font-bold">Tiempo de implementación</span>
                                <span className="block text-[#F5F2ED] text-base">5 semanas</span>
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
                            01. Introducción: El pulso acelerado del centro logístico
                        </h2>
                        <p>
                            En el corazón de un almacén de distribución masiva, el silencio es un lujo inexistente. El rugido metálico de las carretillas elevadoras, el pitido incesante de los escáneres y el movimiento coreografiado —pero a veces caótico— de la mercancía marcan el ritmo de cada segundo. Es un entorno donde el tiempo se mide en céntimos de euro.
                        </p>
                        <p>
                            Sin embargo, en medio de este dinamismo, los operarios se chocaban a diario contra un muro invisible: un software de gestión de almacenes (WMS) anclado en el pasado. Lo que debería haber sido la brújula del trabajador era, en realidad, un laberinto de menús grises, tablas infinitas y alertas confusas que aparecían en el momento menos oportuno. La tecnología no estaba al servicio del humano; el humano era un esclavo de la complejidad de la interfaz.
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
                            02. Desafío: El ruido visual que frena la cadena
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed text-[#F5F2ED]/90">
                            <p>
                                El problema crítico no radicaba en la falta de información, sino en la asfixia que provocaba el exceso de la misma. Los operarios recibían sus órdenes de picking en terminales portátiles con pantallas pequeñas, saturadas de datos técnicos irrelevantes para su tarea inmediata. "A veces tengo que leer diez líneas de texto pequeño, entre códigos de barras y SKUs, solo para entender qué caja debo coger y a qué palet llevarla", nos confesaba uno de los trabajadores con fatiga evidente.
                            </p>
                            <p>
                                Este "ruido visual" no era inofensivo: se traducía directamente en errores de envío que generaban devoluciones costosas, una fatiga cognitiva que mermaba la seguridad y una rotación de personal alarmante. El estrés de no poder cumplir con los tiempos de expedición por culpa de una herramienta ineficiente estaba minando la moral del equipo. El desafío era monumental: transformar un sistema de datos masivos en una herramienta de precisión quirúrgica que se pudiera manejar casi por instinto.
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
                        03. Estrategia: La eliminación como motor de velocidad absoluta
                    </h2>
                    <p className="text-left w-full mr-auto mb-12 text-lg text-[#F5F2ED]/90">
                        Nuestra intervención no buscaba añadir "parches" ni más funcionalidades. Aplicando los principios de Kansō, nuestra estrategia se centró en la reducción radical y la destilación de la esencia. Entendimos que en un almacén, cada segundo de duda es una pérdida de eficiencia.
                    </p>
                    <p className="text-left w-full mr-auto mb-12 text-lg text-[#F5F2ED]/90">
                        Decidimos "limpiar el camino" físico y mental del operario. Aplicamos una jerarquía visual estricta para separar lo crítico (la ubicación y la cantidad) de lo accesorio (metadatos del producto). En lugar de presentar una base de datos en miniatura, rediseñamos la experiencia para que la interfaz mostrara una única acción a la vez. No añadimos botones; eliminamos distracciones. El objetivo era que el operario pudiera entrar en un "estado de flujo", ese momento donde la mente y el cuerpo se mueven en armonía porque el siguiente paso es siempre obvio, natural y carente de duda.
                    </p>
                </motion.section>

                {/* La Solución */}
                <section className="mb-24">
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl font-bold text-[#F5F2ED] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                                04. Solución: Interfaz de alto contraste y baja fricción
                            </h2>
                            <div className="space-y-6 text-lg leading-relaxed text-[#F5F2ED]/90">
                                <p>
                                    Rediseñamos la experiencia de usuario centrándonos en el entorno físico del almacén (poca luz, movimiento, uso de guantes):
                                </p>
                                <ul className="space-y-6 mt-8">
                                    <li className="pl-6 border-l-2 border-[#4A7C77]">
                                        <strong className="block text-[#F5F2ED] mb-1">Foco en la Tarea (Single Task UI)</strong>
                                        <span className="text-base">La nueva interfaz muestra un solo código, un color y una ubicación en pantalla gigante. No hay lugar para la duda.</span>
                                    </li>
                                    <li className="pl-6 border-l-2 border-[#4A7C77]">
                                        <strong className="block text-[#F5F2ED] mb-1">Feedback Háptico y Visual</strong>
                                        <span className="text-base">Implementamos un sistema de colores (Teal para éxito, Carbono para espera) y vibraciones que confirman la acción sin necesidad de leer la pantalla.</span>
                                    </li>
                                    <li className="pl-6 border-l-2 border-[#4A7C77]">
                                        <strong className="block text-[#F5F2ED] mb-1">Arquitectura "Glanceable"</strong>
                                        <span className="text-base">Diseñamos el layout para que pudiera ser interpretado en menos de un segundo, permitiendo que el operario mantenga la vista en la carga.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Visual Placeholder for Solution - WMS Interface */}
                        <div className="relative aspect-square md:aspect-[4/5] bg-[#000000] rounded-2xl overflow-hidden border border-[#F5F2ED]/10 flex items-center justify-center p-8">
                            {/* Abstract High Contrast UI Representation */}
                            <div className="w-full h-full flex flex-col justify-between">
                                {/* Top Bar */}
                                <div className="flex justify-between items-center opacity-50">
                                    <div className="w-10 h-10 border border-[#F5F2ED] rounded-full"></div>
                                    <div className="h-2 w-20 bg-[#F5F2ED] rounded"></div>
                                </div>
                                {/* Center Focus Content */}
                                <div className="flex flex-col items-center justify-center gap-6">
                                    <div className="text-[80px] md:text-[120px] font-bold text-[#4A7C77] leading-none tracking-tighter">A-42</div>
                                    <div className="h-4 w-32 bg-[#F5F2ED] rounded opacity-80"></div>
                                </div>
                                {/* Bottom Action */}
                                <div className="w-full h-20 bg-[#F5F2ED] rounded-xl flex items-center justify-center">
                                    <div className="w-10 h-10 bg-[#1A1C1D] rounded-full"></div>
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
                        05. El Resultado: El baile perfecto de la mercancía
                    </h2>
                    <p className="text-center w-full mx-auto mb-12 text-lg opacity-90">
                        La transformación fue inmediata. Al eliminar la carga cognitiva, el margen de error en el picking cayó a niveles históricos.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold mb-2">-95%</div>
                            <div className="text-lg font-medium opacity-80 uppercase tracking-widest mb-4">Errores de Envío</div>
                            <p className="text-sm opacity-70 max-w-xs mx-auto">Reducción drástica de errores durante el primer mes de implementación.</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold mb-2">+30%</div>
                            <div className="text-lg font-medium opacity-80 uppercase tracking-widest mb-4">Velocidad</div>
                            <p className="text-sm opacity-70 max-w-xs mx-auto">Mejora en los tiempos de preparación de pedidos al eliminar clics innecesarios.</p>
                        </div>
                    </div>

                    <p className="text-center mt-12 text-lg italic opacity-90">
                        "La logística dejó de ser una lucha contra el software para convertirse en un flujo de precisión constante."
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
                                Diseñamos herramientas que potencian a tus equipos, no que los frenan. Convierte la complejidad industrial en simplicidad digital.
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
