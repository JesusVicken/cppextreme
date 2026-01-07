'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

export default function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0)

    const carouselItems = [
        {
            subtitle: 'CPP EXTREME',
            title: 'SUPERE-SE TODOS OS DIAS',
        },
        {
            subtitle: 'AVENTURA',
            title: 'CONEXÃO COM A NATUREZA',
        },
        {
            subtitle: 'ESPORTES',
            title: 'EXPERIÊNCIAS VAA',
        },
        {
            subtitle: 'DESAFIO',
            title: 'SUPERAÇÃO DE LIMITES',
        },
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % carouselItems.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [carouselItems.length])

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Imagem de fundo */}
            <Image
                src="/canoa1.jpg"
                alt="Imagem da canoa"
                fill
                priority
                className="absolute inset-0 object-cover object-center -z-10"
            />

            {/* Overlay escuro para contraste */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Conteúdo Central */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center px-4 w-full max-w-4xl">
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

                                    {/* --- ÁREA DO WELLHUB --- */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="flex flex-col items-center"
                                    >
                                        {/* Adicionei 'relative z-10' para garantir que o texto fique sobre a imagem se houver sobreposição excessiva */}
                                        <span className="relative z-10 text-base md:text-xl font-bold text-white uppercase tracking-[0.2em] drop-shadow-md leading-none">
                                            Agora aceitamos
                                        </span>

                                        {/* ALTERAÇÃO AQUI: 
                                            Adicionei margem negativa no topo (-mt-4 no mobile, -mt-8 no desktop)
                                            Isso força a imagem a subir e ignorar o espaçamento padrão
                                        */}
                                        <div className="-mt-4 md:-mt-20 transition-transform duration-300 hover:scale-110 cursor-pointer">
                                            <Image
                                                src="/wellhub-logo.svg"
                                                alt="Wellhub"
                                                width={500}
                                                height={150}
                                                className="object-contain drop-shadow-2xl h-20 md:h-62 w-auto"
                                            />
                                        </div>
                                    </motion.div>
                                    {/* ----------------------- */}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}