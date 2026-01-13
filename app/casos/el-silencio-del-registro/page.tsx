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
                        src="/images/fichaje.png"
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
                            La Huella de la Confianza: <br className="hidden md:block" />
                            Simplificando el Registro Horario
                        </h1>
                        <p className="text-xl md:text-2xl text-[#F5F2ED]/90 font-light max-w-2xl leading-relaxed drop-shadow-md mb-8">
                            El peso de lo invisible: transformando la burocracia en un ritual digital invisible.
                        </p>

                        {/* Client Profile Tags */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#F5F2ED]/20 pt-6 w-full max-w-5xl">
                            <div className="md:border-r border-[#4A7C77]/30 pr-6">
                                <span className="block text-[#4A7C77] text-xs uppercase tracking-wider mb-2 font-bold">Sector</span>
                                <span className="block text-[#F5F2ED] text-base">Logística y Servicios</span>
                            </div>
                            <div className="md:border-r border-[#4A7C77]/30 pr-6">
                                <span className="block text-[#4A7C77] text-xs uppercase tracking-wider mb-2 font-bold">Tamaño</span>
                                <span className="block text-[#F5F2ED] text-base">+50 Empleados</span>
                            </div>
                            <div className="md:border-r border-[#4A7C77]/30 pr-6">
                                <span className="block text-[#4A7C77] text-xs uppercase tracking-wider mb-2 font-bold">Servicios</span>
                                <span className="block text-[#F5F2ED] text-base">UX/UI, Desarrollo</span>
                            </div>
                            <div>
                                <span className="block text-[#4A7C77] text-xs uppercase tracking-wider mb-2 font-bold">Tiempo de implementación</span>
                                <span className="block text-[#F5F2ED] text-base">3 semanas</span>
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
                            01. Introducción: El peso invisible de la burocracia
                        </h2>
                        <p>
                            Para muchos, el inicio de la jornada laboral debería ser un momento de enfoque y preparación. Sin embargo, en muchas organizaciones, este comienzo se ve empañado por una carga burocrática necesaria pero tediosa: el fichaje. Para nuestro cliente, una empresa con más de 50 empleados operando en múltiples ubicaciones, la gestión de presencia se había convertido en un ruido de fondo ensordecedor.
                        </p>
                        <p>
                            Lo que sobre el papel parecía un trámite simple, en la realidad era un laberinto de hojas de papel arrugadas, mensajes de WhatsApp perdidos en grupos infinitos y cierres de mes agónicos donde el departamento de Recursos Humanos debía jugar a ser detective para cuadrar horas y ausencias.
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
                            02. Desafío: El reto de convertir el control en acompañamiento
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed text-[#F5F2ED]/90">
                            <p>
                                El problema no era la falta de voluntad, sino la fricción del proceso. Los empleados percibían el registro como un acto de vigilancia, una desconfianza sistemática que robaba segundos valiosos. Por otro lado, la administración sufría la "parálisis del dato sucio": información fragmentada, ilegible o directamente inexistente.
                            </p>
                            <p>
                                El reto no era simplemente programar una app; era diseñar un ritual digital. Necesitábamos algo tan absurdamente sencillo que resultara invisible para el trabajador, eliminando la sensación de "fichar" para sustituirla por la seguridad de estar registrado de forma justa y transparente.
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
                        03. Estrategia: La claridad como base del compromiso laboral
                    </h2>
                    <p className="text-left w-full mb-12 text-lg text-[#F5F2ED]/90">
                        Nuestra intervención se alejó radicalmente de los softwares de gestión de personal convencionales, saturados de pestañas, perfiles y gráficos innecesarios. Bajo el principio Kansō de "Acción Única", decidimos que la interfaz debía ser un reflejo del momento de uso: rápido, directo y sin distracciones.
                    </p>
                    <p className="text-left w-full mb-12 text-lg text-[#F5F2ED]/90">
                        La estrategia consistió en transformar la percepción del dato. El registro horario no debía ser una herramienta de control para la empresa, sino una garantía de transparencia para el empleado. Al simplificar la interfaz al máximo, eliminamos la resistencia al uso y convertimos la herramienta en un aliado del trabajador.
                    </p>
                </motion.section>

                {/* La Solución */}
                <section className="mb-24">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#F5F2ED] mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                                04. Solución: Un gesto de dos segundos para toda una jornada
                            </h2>
                            <div className="space-y-6 text-lg leading-relaxed text-[#F5F2ED]/90">
                                <p>
                                    Creamos una solución de alta fidelidad técnica con una fachada de simplicidad absoluta, optimizada para entornos de movilidad donde no hay tiempo para navegar por menús:
                                </p>
                                <ul className="space-y-6 mt-8">
                                    <li className="pl-6 border-l-2 border-[#4A7C77]">
                                        <strong className="block text-[#F5F2ED] mb-1">Interfaz de Impacto Cero</strong>
                                        <span className="text-base">Un diseño donde un único botón central domina la pantalla. Utilizando geolocalización inteligente, la app reconoce el punto de trabajo y permite el marcaje con un solo toque, validando la presencia sin requerir formularios ni comprobaciones manuales.</span>
                                    </li>
                                    <li className="pl-6 border-l-2 border-[#4A7C77]">
                                        <strong className="block text-[#F5F2ED] mb-1">El Dashboard de la Calma (Admin)</strong>
                                        <span className="text-base">Rediseñamos la vista de Recursos Humanos para que dejara de ser una tabla infinita. Ahora, el sistema utiliza "gestión por excepción": solo muestra alertas cuando algo no cuadra, permitiendo que el administrador ignore el 99% de los datos que son correctos.</span>
                                    </li>
                                    <li className="pl-6 border-l-2 border-[#4A7C77]">
                                        <strong className="block text-[#F5F2ED] mb-1">Sincronización Orgánica</strong>
                                        <span className="text-base">El flujo de información es bidireccional y transparente. El empleado puede consultar su histórico de horas con la misma facilidad con la que mira la hora, eliminando las dudas y las consultas constantes a administración.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Visual Placeholder for Solution */}
                        <div className="relative aspect-square md:aspect-[4/5] bg-gradient-to-br from-[#1A1C1D] to-[#2C3032] rounded-2xl overflow-hidden border border-[#F5F2ED]/10 flex items-center justify-center p-8">
                            <div className="absolute inset-0 bg-[#4A7C77]/5"></div>
                            {/* Abstract Representation of UI */}
                            <div className="relative w-full max-w-sm bg-[#1A1C1D] rounded-xl shadow-2xl border border-[#F5F2ED]/5 p-6">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="w-20 h-2 bg-[#F5F2ED]/10 rounded"></div>
                                    <div className="w-8 h-8 rounded-full bg-[#4A7C77]/20"></div>
                                </div>
                                <div className="flex justify-center my-12">
                                    <div className="w-32 h-32 rounded-full border-4 border-[#4A7C77] flex items-center justify-center shadow-[0_0_30px_rgba(74,124,119,0.2)]">
                                        <div className="w-3 h-3 bg-[#4A7C77] rounded"></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-full h-2 bg-[#F5F2ED]/5 rounded"></div>
                                    <div className="w-2/3 h-2 bg-[#F5F2ED]/5 rounded mx-auto"></div>
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
                        05. El Resultado: Del control administrativo al flujo organizacional
                    </h2>
                    <p className="text-center w-full mx-auto mb-12 text-lg opacity-90">
                        El impacto fue cultural antes que tecnológico. Al eliminar la fricción, la adopción del sistema fue total desde el primer día, desapareciendo por completo las hojas de papel y los registros manuales.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-[#1A1C1D]/20 p-8 rounded-xl border border-[#F5F2ED]/10 text-left">
                            <strong className="block text-[#F5F2ED] mb-2 text-xl font-bold text-center">Para el equipo humano</strong>
                            <p className="text-sm opacity-90 text-center">El "ritual del fichaje" se ha convertido en un gesto de dos segundos que aporta seguridad y reconocimiento a su jornada.</p>
                        </div>
                        <div className="bg-[#1A1C1D]/20 p-8 rounded-xl border border-[#F5F2ED]/10 text-left">
                            <strong className="block text-[#F5F2ED] mb-2 text-xl font-bold text-center">Para la estructura empresarial</strong>
                            <p className="text-sm opacity-90 text-center">Se han eliminado los "viernes de pánico" en el departamento de RR.HH. Las auditorías son ahora procesos instantáneos y el margen de error se ha reducido a cero.</p>
                        </div>
                    </div>

                    <p className="text-center mt-12 text-lg italic opacity-90">
                        "Hemos demostrado que cuando la tecnología es verdaderamente simple, deja de ser una carga para convertirse en una infraestructura silenciosa que sostiene y libera a la organización."
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
                                ¿Buscamos la claridad en tu empresa?
                            </h2>
                            <p className="text-[#F5F2ED]/70 text-lg mb-10 w-full text-left">
                                Cada proceso complejo esconde una solución simple esperando ser diseñada. Si tu software actual genera más preguntas que respuestas, es hora de encontrar el orden.
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
