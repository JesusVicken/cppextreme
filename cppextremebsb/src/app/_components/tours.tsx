"use client"

import useEmblaCarousel from "embla-carousel-react"
import {
    ChevronLeft,
    ChevronRight,
    Clock,
    Sunrise,
    Moon,
    Route,
    Handshake,
    Mountain,
    Users
} from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react"
import canoa3Img from '../../../public/canoa3.jpg'
import kidsImg from '../../../public/kids.png'
import noiteImg from '../../../public/noite.jpg'
import expImg from '../../../public/experimental.jpg'
import coportaivoImg from '../../../public/corporativo.jpg'
import experienciaImg from '../../../public/experienciacpp.jpg'

import Image from "next/image"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const services = [
    {
        title: "Remada ao Nascer do Sol",
        description: "Remada especial ao amanhecer, com paisagem incrível e conexão com a natureza, ideal para iniciantes ou quem busca uma experiência única.",
        duration: "Sob Consulta",
        icon: <Sunrise className="w-6 h-6 text-white" />,
        linkText: "Olá, vi no site sobre a Remada ao Nascer do Sol e gostaria de mais informações.",
        image: canoa3Img
    },
    {
        title: "Expedições e Viajens",
        description: "Passeios programados em grupo por rotas especiais com paradas em pontos turísticos, ideal para aventura e contato com a natureza.",
        duration: "Consultar disponibilidade",
        icon: <Route className="w-6 h-6 text-white" />,
        linkText: "Olá, vi no site sobre Expedições e gostaria de mais informações.",
        image: expImg
    },
    {
        title: "Saúde e Bem-estar Empresarial",
        description: " Através de técnicas de respiração e balanço rítmico da canoa, sua equipe viverá uma experiencia rítmica e sincrónica, promovendo um funcionamento mais coeso e eficiente.",
        duration: "Sob consulta",
        icon: <Handshake className="w-6 h-6 text-white" />,
        linkText: "Olá, vi no site sobre Eventos Corporativos e gostaria de mais informações.",
        image: coportaivoImg
    },
    {
        title: "Remada da Lua Cheia",
        description: "Experiência única de remar sob a lua cheia e as estrelas, com todo suporte e segurança. ideal para quem busca uma remada ao luar",
        duration: "Em dias de luas cheia",
        icon: <Moon className="w-6 h-6 text-white" />,
        linkText: "Olá, vi no site sobre a remada da lua cheia e gostaria de mais informações.",
        image: noiteImg
    },
    {
        title: "Experiências EXTREME",
        description: "Experiências de aventura com atividades como canionismo, trilhas, rapel e outras emocionantes atividades que estamos preparamos para você.",
        duration: "EM BREVE AS PROGRAMAÇÕES",
        icon: <Mountain className="w-6 h-6 text-white" />,
        linkText: "Olá, vi no site sobre a remada da lua cheia e gostaria de mais informações.",
        image: experienciaImg
    }
]

export function Tours() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        dragFree: true,
        containScroll: "trimSnaps"
    })

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        })
    }, [])

    return (
        <section className="bg-gradient-to-b from-zinc-900 to-black py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div
                    className="text-center mb-12"
                    data-aos="fade-up"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        PASSEIOS E EXPERIÊNCIAS
                    </h2>
                    <p className="text-zinc-300 max-w-2xl mx-auto">
                        Confira nossos horários disponíveis e venha viver a experiência da canoa havaiana no Lago Paranoá!
                    </p>
                </div>

                <div
                    className="relative max-w-4xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-2">
                            {services.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_calc(100%-1rem)] sm:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(33%-1rem)] min-w-0 px-1"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <article className="bg-zinc-900/80 text-white rounded-xl p-5 h-full flex flex-col space-y-4 border border-zinc-700 hover:border-zinc-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-white/10">
                                        <div className="relative w-full h-40 rounded-lg overflow-hidden mb-3">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>

                                        <div className="flex-1 flex items-start gap-3">
                                            <div className="p-2 bg-zinc-800 rounded-lg">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg md:text-xl mb-1 text-white">
                                                    {item.title}
                                                </h3>
                                                <p className="text-zinc-300 text-sm select-none">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="border-t border-zinc-700 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-zinc-400">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>

                                            {item.title !== "Experiências EXTREME" && (
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href={`https://wa.me/5561998219177?text=${encodeURIComponent(item.linkText)}`}
                                                    className="flex items-center gap-2 bg-white text-black px-3 py-1 rounded-lg transition-all text-sm font-medium hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/20"
                                                >
                                                    <WhatsappLogo className="w-4 h-4" />
                                                    Bora Remar!
                                                </a>
                                            )}
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={scrollPrev}
                        className="hidden sm:flex items-center justify-center rounded-full shadow-lg w-8 h-8 md:w-10 md:h-10 absolute left-0 md:-left-5 -translate-y-1/2 top-1/2 z-10 bg-white hover:bg-zinc-200 transition-all"
                        aria-label="Slide anterior"
                    >
                        <ChevronLeft className="w-5 h-5 text-black" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="hidden sm:flex items-center justify-center rounded-full shadow-lg w-8 h-8 md:w-10 md:h-10 absolute right-0 md:-right-5 -translate-y-1/2 top-1/2 z-10 bg-white hover:bg-zinc-200 transition-all"
                        aria-label="Próximo slide"
                    >
                        <ChevronRight className="w-5 h-5 text-black" />
                    </button>
                </div>

                <div className="flex justify-center mt-8 gap-2 sm:hidden" data-aos="fade-up" data-aos-delay="100">
                    <button
                        onClick={scrollPrev}
                        className="flex items-center justify-center rounded-full shadow-lg w-8 h-8 bg-white hover:bg-zinc-200 transition-all"
                        aria-label="Slide anterior"
                    >
                        <ChevronLeft className="w-5 h-5 text-black" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="flex items-center justify-center rounded-full shadow-lg w-8 h-8 bg-white hover:bg-zinc-200 transition-all"
                        aria-label="Próximo slide"
                    >
                        <ChevronRight className="w-5 h-5 text-black" />
                    </button>
                </div>
            </div>
        </section>
    )
}
