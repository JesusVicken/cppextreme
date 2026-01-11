'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarCheck, Map, TicketCheck, Users } from 'lucide-react'

export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0)

    const carouselItems = [
        {
            subtitle: 'PASSEIOS EXCLUSIVOS',
            title: 'VIVA O LAGO PARANOÁ',
        },
        {
            subtitle: 'NASCEER DO SOL',
            title: 'COMECE O DIA REMANDO',
        },
        {
            subtitle: 'TURISMO E ESPORTE',
            title: 'EXPERIÊNCIAS ÚNICAS EM BSB',
        },
        {
            subtitle: 'RESERVE AGORA',
            title: 'SUA AVENTURA NA ÁGUA',
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % carouselItems.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [carouselItems.length])

    // Configuração dos Botões com Links Específicos
    const ctaButtons = [
        {
            label: 'Remadas Regulares',
            icon: CalendarCheck,
            // Link direto para WhatsApp com mensagem
            href: 'https://wa.me/556198219177?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20checkin%20para%20remadas%20regulares.'
        },
        {
            label: 'Passeios',
            icon: Map,
            // Link do Grupo de Passeios
            href: 'https://chat.whatsapp.com/KM0KWPFhgvH2ivlof8QndE'
        },
        {
            label: 'Checkin GymPass',
            icon: TicketCheck,
            // Link do Grupo de Checkin
            href: 'https://chat.whatsapp.com/ElKFPv6LWna91T5acf887I'
        },
        {
            label: 'Team Building',
            icon: Users,
            // Link direto para WhatsApp com mensagem
            href: 'https://wa.me/556198219177?text=Ol%C3%A1%2C%20gostaria%20de%20cotar%20um%20Team%20Building%20para%20minha%20empresa.'
        }
    ]

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <Image
                src="/canoa1.jpg"
                alt="Imagem da canoa"
                fill
                priority
                className="absolute inset-0 object-cover object-center -z-10"
            />
            <div className="absolute inset-0 bg-black/40 z-0" />

            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="text-center px-4 w-full max-w-4xl pointer-events-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <div className="banner-section-content -mt-80 md:-mt-20 lg:-mt-28">
                                <div className="banner-section-wrapper">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                                        {carouselItems[activeIndex].subtitle}
                                    </h3>
                                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
                                        {carouselItems[activeIndex].title}
                                    </h1>
                                    <figure className="mb-10 w-24 md:w-32 mx-auto">
                                        <div className="h-1 w-full bg-white"></div>
                                    </figure>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="flex flex-col items-center"
                                    >
                                        <span className="relative z-10 text-base md:text-xl font-bold text-white uppercase tracking-[0.2em] drop-shadow-md leading-none">
                                            Agora aceitamos
                                        </span>
                                        <div className="-mt-14 md:-mt-20 transition-transform duration-300 hover:scale-110 cursor-pointer">
                                            <Image
                                                src="/wellhub-logo.svg"
                                                alt="Wellhub"
                                                width={500}
                                                height={150}
                                                className="object-contain drop-shadow-2xl h-50 md:h-62 w-auto -mt-4"
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* --- BOTÕES MENORES E MAIS ELEGANTES --- */}
            <div className="absolute bottom-0 left-0 w-full z-20 pb-6 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {ctaButtons.map((btn, index) => (
                            <a
                                key={index}
                                href={btn.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group flex flex-col items-center justify-center 
                                    py-2 px-2 border border-white/80 transition-all duration-300
                                    hover:bg-white hover:border-white cursor-pointer
                                "
                            >
                                <btn.icon className="w-5 h-5 md:w-6 md:h-6 text-white mb-1.5 transition-colors group-hover:text-black" />
                                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest text-center leading-tight transition-colors group-hover:text-black">
                                    {btn.label}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}