'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'

// -- Tipos --
type StepType = 'text' | 'textarea' | 'options' | 'email' | 'scale'

type Step = {
    id: string
    question: string
    type: StepType
    placeholder?: string
    options?: { label: string; value: string }[]
    field: keyof FormData
    action?: (value: string) => void
}

type FormData = {
    name: string
    projectName: string
    status: string
    // Optimization path
    noise?: string
    friction?: number
    userComplaint?: string
    featureToRemove?: string
    // Creation path
    purpose?: string
    usersAndAdjectives?: string
    digitalReference?: string
    riskFactors?: string
    // Strategy path
    visualQuality?: string
    manualTask?: string
    brandCoherence?: string
    // Final
    email: string
}

// -- Configuración de Bloques y Preguntas --

const BLOCK_1: Step[] = [
    {
        id: 'name',
        question: 'Hola. Para que esta charla tenga un propósito claro, ¿cómo te llamas?',
        type: 'text',
        placeholder: 'Escribe tu nombre...',
        field: 'name',
    },
    {
        id: 'projectName',
        question: 'Un placer, {name}. ¿Cuál es el nombre de tu empresa o proyecto?',
        type: 'text',
        placeholder: 'Nombre del proyecto...',
        field: 'projectName',
    },
    {
        id: 'status',
        question: 'Cuéntame, ¿en qué punto se encuentra {projectName} hoy?',
        type: 'options',
        options: [
            { label: 'Tengo algo funcionando, pero genera ruido o frustración.', value: 'optimizacion' },
            { label: 'Tengo una idea clara y quiero empezar con buen pie.', value: 'creacion' },
            { label: 'Busco coherencia visual y eficiencia operativa.', value: 'estrategia' },
        ],
        field: 'status',
    },
]

const ROUTE_OPTIMIZATION: Step[] = [
    {
        id: 'noise',
        question: '¿Cuál es el "ruido" principal? Cuéntame qué parte de tu software actual te quita el sueño.',
        type: 'textarea',
        placeholder: 'Descríbenos el problema...',
        field: 'noise',
    },
    {
        id: 'friction',
        question: 'En una escala del 1 al 10, ¿cuánta fricción sientes que genera esta herramienta en el día a día de tu equipo?',
        type: 'scale',
        field: 'friction' as keyof FormData,
    },
    {
        id: 'userComplaint',
        question: '¿Cuál es la queja más común que recibes de tus usuarios finales?',
        type: 'textarea',
        placeholder: 'Lo que más repiten es...',
        field: 'userComplaint',
    },
    {
        id: 'featureToRemove',
        question: 'Si pudieras eliminar una sola funcionalidad innecesaria hoy mismo para ganar claridad, ¿cuál sería?',
        type: 'text',
        placeholder: 'Eliminaría...',
        field: 'featureToRemove',
    },
]

const ROUTE_CREATION: Step[] = [
    {
        id: 'purpose',
        question: '¿Cuál es el propósito esencial de este nuevo producto? ¿Qué problema viene a resolver?',
        type: 'textarea',
        placeholder: 'El problema principal es...',
        field: 'purpose',
    },
    {
        id: 'usersAndAdjectives',
        question: '¿Quiénes serán los usuarios principales y qué tres adjetivos deberían definir su experiencia al usarlo?',
        type: 'textarea',
        placeholder: 'Usuarios y adjetivos...',
        field: 'usersAndAdjectives',
    },
    {
        id: 'digitalReference',
        question: '¿Existe algún referente digital cuya sencillez o flujo admires especialmente?',
        type: 'text',
        placeholder: 'Ej: Notion, Airbnb...',
        field: 'digitalReference',
    },
    {
        id: 'riskFactors',
        question: '¿Cuál es el mayor riesgo o miedo que ves en el lanzamiento de este proyecto?',
        type: 'textarea',
        placeholder: 'Me preocupa que...',
        field: 'riskFactors',
    },
]

const ROUTE_STRATEGY: Step[] = [
    {
        id: 'visualQuality',
        question: '¿Sientes que tu imagen visual actual comunica la misma calidad que la de tu servicio real?',
        type: 'textarea',
        placeholder: 'Siento que mi imagen...',
        field: 'visualQuality',
    },
    {
        id: 'manualTask',
        question: '¿Qué tarea manual o repetitiva te consume más tiempo a ti o a tu equipo cada semana?',
        type: 'textarea',
        placeholder: 'Perdemos mucho tiempo en...',
        field: 'manualTask',
    },
    {
        id: 'brandCoherence',
        question: '¿Dónde sientes que tu marca pierde fuerza o coherencia cuando un cliente interactúa contigo?',
        type: 'textarea',
        placeholder: 'En el momento en que...',
        field: 'brandCoherence',
    },
]

const BLOCK_3: Step[] = [
    {
        id: 'email',
        question: 'Gracias por tu honestidad, {name}. Por último, déjanos tu email. Analizaremos tus respuestas con la calma que merecen para que nuestra primera charla sea productiva.',
        type: 'email',
        placeholder: 'tu@email.com',
        field: 'email',
    },
]

export default function DiagnosticPage() {
    const [stepsQueue, setStepsQueue] = useState<Step[]>(BLOCK_1)
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const [answers, setAnswers] = useState<Partial<FormData>>({})

    const [isTransitioningBlock, setIsTransitioningBlock] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')

    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

    // Focus input on step change
    useEffect(() => {
        if (!isTransitioningBlock && !isSubmitted && inputRef.current) {
            setTimeout(() => {
                inputRef.current?.focus()
            }, 500)
        }
    }, [currentStepIndex, isTransitioningBlock, isSubmitted])

    // Helpers
    const currentStep = stepsQueue[currentStepIndex]
    const progress = ((currentStepIndex + 1) / stepsQueue.length) * 100

    const getQuestion = () => {
        return currentStep.question
            .replace('{name}', answers.name || 'amigo')
            .replace('{projectName}', answers.projectName || 'tu proyecto')
    }

    const handleNext = async (overrideValue?: string | number) => {
        const value = overrideValue !== undefined ? overrideValue : answers[currentStep.field as keyof FormData]

        // Validation
        if (currentStep.type === 'email' && value && String(value).trim() !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(String(value))) {
                setError('Por favor, introduce un email válido.')
                return
            }
        }
        setError('')

        // Update answer if override provided (e.g. scale/options click)
        if (overrideValue !== undefined) {
            setAnswers(prev => ({ ...prev, [currentStep.field]: overrideValue }))
        }

        // Logic: If we are at the last step of the current queue...
        // Check if we need to load more steps or submit
        if (currentStep.id === 'status' && typeof value === 'string') {
            // We just answered Q3 (The Filter)
            // Determine route
            let routeSteps: Step[] = []
            if (value === 'optimizacion') routeSteps = ROUTE_OPTIMIZATION
            else if (value === 'creacion') routeSteps = ROUTE_CREATION
            else if (value === 'estrategia') routeSteps = ROUTE_STRATEGY

            // Show transition logic?
            setIsTransitioningBlock(true)
            setTimeout(() => {
                setIsTransitioningBlock(false)
                // Extend queue: Current answers + Route Steps + Layout Closing
                // Ideally we preserve answers and just append steps to queue?
                // The queue is currently just BLOCK_1. We append Route + Block 3.
                setStepsQueue([...BLOCK_1, ...routeSteps, ...BLOCK_3])
                setCurrentStepIndex(prev => prev + 1)
            }, 2000)
            return
        }

        if (currentStepIndex < stepsQueue.length - 1) {
            setCurrentStepIndex(prev => prev + 1)
        } else {
            handleSubmit()
        }
    }

    const handleSubmit = async () => {
        console.log('Final Answers:', answers)
        setIsSubmitted(true)
    }

    const handleChange = (value: string | number) => {
        setAnswers(prev => ({
            ...prev,
            [currentStep.field]: value
        }))
        if (error) setError('')
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleNext()
        }
    }

    const handleBack = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(prev => prev - 1)
            if (error) setError('')
        }
    }

    // Animation variants
    const slideVariants = {
        enter: { opacity: 0, y: 20 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    }

    if (isSubmitted) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-[#1A1C1D] px-6 text-center font-sans">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <h1 className="text-3xl md:text-5xl font-serif text-[#F5F2ED] mb-8 leading-tight">
                        Respira, el camino hacia la sencillez ya ha comenzado.
                    </h1>
                    <p className="text-[#F5F2ED]/80 text-lg mb-12">
                        Te escribiremos en 24-48h.
                    </p>
                    <Link
                        href="/"
                        className="inline-block border duration-300 border-[#F5F2ED]/30 text-[#F5F2ED] px-8 py-3 rounded-full hover:bg-[#F5F2ED]/10 transition-colors"
                    >
                        Volver al inicio
                    </Link>
                </motion.div>
            </main>
        )
    }

    return (
        <main className="min-h-screen flex flex-col bg-[#1A1C1D] relative overflow-hidden font-sans">
            <Header />
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#F5F2ED]/10">
                <motion.div
                    className="h-full bg-[#4A7C77]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col justify-center px-6 md:px-20 max-w-5xl mx-auto w-full">
                <AnimatePresence mode="wait">
                    {isTransitioningBlock ? (
                        <motion.div
                            key="transition"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex justify-center items-center w-full"
                        >
                            <h2 className="text-2xl md:text-3xl font-light text-[#F5F2ED] text-center italic"
                                style={{ fontFamily: 'var(--font-playfair), serif' }}>
                                Estamos preparando tu camino de simplicidad...
                            </h2>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={currentStep.id}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="w-full"
                        >
                            <h2
                                className="text-2xl md:text-4xl font-light text-[#F5F2ED] mb-12 leading-relaxed"
                                style={{ fontFamily: 'var(--font-playfair), serif' }}
                            >
                                {getQuestion()}
                            </h2>

                            <div className="space-y-8">
                                {/* Text Input */}
                                {currentStep.type === 'text' || currentStep.type === 'email' ? (
                                    <input
                                        ref={inputRef as React.RefObject<HTMLInputElement>}
                                        type={currentStep.type}
                                        value={answers[currentStep.field as keyof FormData] as string || ''}
                                        onChange={(e) => handleChange(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder={currentStep.placeholder}
                                        className="w-full bg-transparent border-b border-[#F5F2ED] text-[#F5F2ED] text-2xl md:text-3xl py-4 focus:border-[#4A7C77] focus:outline-none placeholder:text-[#F5F2ED]/20 transition-colors caret-[#4A7C77]"
                                        autoFocus
                                    />
                                ) : null}

                                {/* Textarea */}
                                {currentStep.type === 'textarea' ? (
                                    <textarea
                                        ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                                        value={answers[currentStep.field as keyof FormData] as string || ''}
                                        onChange={(e) => handleChange(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && !e.shiftKey) {
                                                e.preventDefault()
                                                handleNext()
                                            }
                                        }}
                                        rows={3}
                                        placeholder={currentStep.placeholder}
                                        className="w-full bg-transparent border-b border-[#F5F2ED] text-[#F5F2ED] text-xl md:text-2xl py-4 focus:border-[#4A7C77] focus:outline-none placeholder:text-[#F5F2ED]/20 transition-colors caret-[#4A7C77] resize-none"
                                        autoFocus
                                    />
                                ) : null}

                                {/* Options */}
                                {currentStep.type === 'options' ? (
                                    <div className="grid grid-cols-1 gap-4">
                                        {currentStep.options?.map((option) => (
                                            <button
                                                key={option.value}
                                                onClick={() => {
                                                    const val = option.value
                                                    handleChange(val)
                                                    // Trigger next with explicit val
                                                    handleNext(val)
                                                }}
                                                className={`text-left p-6 rounded-lg border transition-all duration-300 ${answers[currentStep.field as keyof FormData] === option.value
                                                    ? 'border-[#4A7C77] bg-[#4A7C77]/10 text-[#F5F2ED]'
                                                    : 'border-[#F5F2ED]/20 text-[#F5F2ED]/60 hover:border-[#4A7C77] hover:text-[#F5F2ED]'
                                                    }`}
                                            >
                                                <span className="text-xl">{option.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                ) : null}

                                {/* Scale 1-10 */}
                                {currentStep.type === 'scale' ? (
                                    <div className="flex flex-wrap gap-2 md:gap-4 justify-start">
                                        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                                            <button
                                                key={num}
                                                onClick={() => {
                                                    handleChange(num)
                                                    handleNext(num)
                                                }}
                                                className={`w-12 h-12 md:w-16 md:h-16 rounded-full border flex items-center justify-center text-xl transition-all duration-300 ${answers[currentStep.field as keyof FormData] === num
                                                    ? 'border-[#4A7C77] bg-[#4A7C77] text-[#F5F2ED]'
                                                    : 'border-[#F5F2ED]/20 text-[#F5F2ED]/60 hover:border-[#4A7C77] hover:text-[#F5F2ED]'
                                                    }`}
                                            >
                                                {num}
                                            </button>
                                        ))}
                                    </div>
                                ) : null}

                                {error && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-400 text-sm"
                                    >
                                        {error}
                                    </motion.p>
                                )}

                                <div className="flex items-center gap-4 pt-8">
                                    {currentStepIndex > 0 && (
                                        <button
                                            onClick={handleBack}
                                            className="group flex items-center gap-2 text-[#F5F2ED]/60 hover:text-[#F5F2ED] transition-colors text-lg mr-6"
                                        >
                                            <svg
                                                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                            </svg>
                                            Volver
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handleNext()}
                                        className="group flex items-center gap-2 text-[#F5F2ED] hover:text-[#4A7C77] transition-colors text-lg"
                                    >
                                        <span>
                                            {currentStep.id === 'status' ? 'Siguiente' // Specific label for fork?
                                                : currentStepIndex === stepsQueue.length - 1 ? 'Finalizar'
                                                    : 'Continuar'}
                                        </span>
                                        <svg
                                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                    {currentStep.type !== 'options' && currentStep.type !== 'scale' && (
                                        <span className="text-[#F5F2ED]/30 text-sm hidden md:inline-block ml-4">
                                            o presiona Enter ↵
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    )
}
