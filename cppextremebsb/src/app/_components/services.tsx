"use client"

import { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Clock, Waves } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react"
import canoa1Img from '../../../public/regular.jpg'
import canoa2Img from '../../../public/remadalinda.jpg'
import canoa3Img from '../../../public/canoa2.jpg'
import canoa4Img from '../../../public/canoa4.jpg'
import canoa5Img from '../../../public/competicao.jpg'
import canoa6Img from '../../../public/canoa6.jpg'


import Image from "next/image"
import AOS from "aos"

const weeklySchedule = [
    {
        day: "Segunda-feira",
        description: "Treinos Regulares",
        schedules: ["6:20", "7:40", "12:15"],
        image: canoa1Img,
        linkText: "Olá, gostaria de informações sobre os treinos de Segunda-feira"
    },
    {
        day: "Terça-feira",
        description: "Treinos Regulares",
        schedules: ["6:20", "7:40", "17:40" ],
        image: canoa2Img,
        linkText: "Olá, gostaria de informações sobre os treinos de Terça-feira"
    },
    {
        day: "Quarta-feira",
        description: "Treinos Regulares",
        schedules: ["6:20", "7:40", "12:15"],
        image: canoa3Img,
        linkText: "Olá, gostaria de informações sobre os treinos de Quarta-feira"
    },
    {
        day: "Quinta-feira",
        description: "Treinos Regulares + Competição",
        schedules: ["6:00 (Competição)", "7:40 (Regular)", "17:40 (Regular)" ],
        image: canoa5Img,
        linkText: "Olá, gostaria de informações sobre os treinos de Quinta-feira"
    },
    {
        day: "Sexta-feira",
        description: "Treinos Regulares",
        schedules: ["6:20", "7:40", "12:15"],
        image: canoa6Img,
        linkText: "Olá, gostaria de informações sobre os treinos de Sexta-feira"
    },
    {
        day: "Sábado",
        description: "Treinos + Turma Kids",
        schedules: ["7:30 (Competição)", "9:30 (Regular)", "11:30 (Kids)"],
        image: canoa4Img,
        linkText: "Olá, gostaria de informações sobre os treinos de Sábado"
    }
]

export function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        dragFree: true,
        containScroll: "trimSnaps"
    })

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out'
        })
    }, [])

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                        HORÁRIOS DAS AULAS
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Confira nossos horários disponíveis por dia da semana
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-4">
                            {weeklySchedule.map((daySchedule, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_calc(100%-1rem)] sm:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(33%-1rem)] min-w-0 px-1"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <article className="bg-white border border-gray-200 rounded-2xl p-5 h-full flex flex-col space-y-4 shadow-md hover:shadow-lg transition-all duration-300">
                                        <div className="relative w-full h-44 rounded-xl overflow-hidden">
                                            <Image
                                                src={daySchedule.image}
                                                alt={`Aula de canoa havaiana - ${daySchedule.day}`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            />
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <div className="p-2 bg-gray-100 rounded-xl">
                                                <Waves className="w-6 h-6 text-gray-700" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-xl text-gray-900">
                                                    {daySchedule.day}
                                                </h3>
                                                <p className="text-gray-500 text-sm">
                                                    {daySchedule.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <h4 className="font-medium text-gray-800">Horários:</h4>
                                            <ul className="space-y-1">
                                                {daySchedule.schedules.map((time, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-gray-700">
                                                        <Clock className="w-4 h-4 text-gray-500" />
                                                        <span>{time}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="border-t border-gray-200 pt-4 mt-auto">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={`https://wa.me/5561998219177?text=${encodeURIComponent(daySchedule.linkText)}`}
                                                className="w-full flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all"
                                            >
                                                <WhatsappLogo className="w-4 h-4" />
                                                Agendar para {daySchedule.day.split('-')[0]}
                                            </a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botões desktop */}
                    <button
                        onClick={scrollPrev}
                        className="hidden sm:flex items-center justify-center absolute left-0 md:-left-5 -translate-y-1/2 top-1/2 z-10 bg-white hover:bg-gray-100 w-10 h-10 rounded-full shadow-md transition-all border border-gray-200"
                        aria-label="Slide anterior"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="hidden sm:flex items-center justify-center absolute right-0 md:-right-5 -translate-y-1/2 top-1/2 z-10 bg-white hover:bg-gray-100 w-10 h-10 rounded-full shadow-md transition-all border border-gray-200"
                        aria-label="Próximo slide"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                </div>

                {/* Botões mobile */}
                <div className="flex justify-center mt-8 gap-3 sm:hidden">
                    <button
                        onClick={scrollPrev}
                        className="flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-100 rounded-full shadow-md border border-gray-200"
                        aria-label="Slide anterior"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-100 rounded-full shadow-md border border-gray-200"
                        aria-label="Próximo slide"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                </div>
            </div>
        </section>
    )
}
