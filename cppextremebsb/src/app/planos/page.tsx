'use client'

import { Check, ChevronRight, MessageCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'

export default function PlanosSection() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        })
    }, [])

    const whatsappNumber = '61998219177'
    const whatsappMessage = 'Olá! Gostaria de saber mais sobre os planos da CPP Extreme BSB.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    const planos = [
        {
            nome: '2X Semana',
            descricao: 'Ideal para quem está começando',
            preco: 'R$ 265',
            periodo: '/mês',
            destaque: false,
            imagem: '/canoa1.jpg',
            beneficios: [
                '2 remadas semanais',
                'Acesso aos horários regulares',
                'Equipamentos inclusos',
                'Participação em eventos',
                'Acompanhamento básico'
            ],
        },
        {
            nome: '3X Semana',
            descricao: 'Para evolução técnica acelerada',
            preco: 'R$ 285',
            periodo: '/mês',
            destaque: true,
            imagem: '/canoa2.jpg',
            beneficios: [
                '3 remadas semanais',
                'Todos os horários disponíveis',
                'Equipamentos premium',
                'Prioridade em eventos',
                'Acompanhamento técnico'
            ],
        },
        {
            nome: 'Plano Livre',
            descricao: 'Remadas ilimitadas',
            preco: 'R$ 350',
            periodo: '/mês',
            destaque: false,
            imagem: '/canoa3.jpg',
            beneficios: [
                'Remadas ilimitadas',
                'Todos os horários',
                'Equipamentos premium',
                'Participação gratuita em eventos',
                'Acompanhamento personalizado'
            ],
        },
    ]

    const planosAvulsos = [
        {
            nome: '5 Remadas Avulsas',
            preco: 'R$ 185',
            periodo: '/pacote',
            beneficios: ['Validade de 3 meses']
        },
        {
            nome: '10 Remadas Avulsas',
            preco: 'R$ 355',
            periodo: '/pacote',
            beneficios: ['Validade de 6 meses']
        },
        {
            nome: 'Youipe Kids',
            preco: 'R$ 200',
            periodo: '/mês',
            beneficios: ['Taxa de matrícula: R$ 70']
        }
    ]

    return (
        <section id="planos" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 mb-4" data-aos="fade-up">
                        Nossos Planos
                    </h2>
                    <p
                        className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Escolha o plano ideal para sua jornada na canoa havaiana
                    </p>
                </div>

                {/* Planos Principais */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {planos.map((plano, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={200 + index * 100}>
                            <Card
                                className={`h-full flex flex-col border-2 transition-all duration-300 hover:shadow-lg overflow-hidden ${plano.destaque ? 'border-primary shadow-md' : 'border-gray-200'}`}
                            >
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={plano.imagem}
                                        alt={`Imagem do ${plano.nome}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority={index === 0}
                                    />
                                    {plano.destaque && (
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm">
                                            <Star className="h-5 w-5 text-primary" />
                                        </div>
                                    )}
                                </div>

                                <CardHeader className="pb-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">{plano.nome}</h3>
                                            <p className="text-gray-600 text-sm">{plano.descricao}</p>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="flex-1">
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-gray-900">{plano.preco}</span>
                                        <span className="text-gray-600 text-lg">{plano.periodo}</span>
                                    </div>

                                    <ul className="space-y-3">
                                        {plano.beneficios.map((beneficio, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">{beneficio}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter>
                                    <Button
                                        size="lg"
                                        className={`w-full group ${plano.destaque ? 'bg-primary hover:bg-primary/90' : 'bg-gray-900 hover:bg-gray-800'}`}
                                        onClick={() => window.open(whatsappLink, '_blank')}
                                    >
                                        Matricule-se
                                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>

                {/* Planos Avulsos */}
                <div className="mb-16" data-aos="fade-up">
                    <h3 className="text-2xl font-bold text-center mb-8">Planos Avulsos e Kids</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {planosAvulsos.map((plano, index) => (
                            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{plano.nome}</h4>
                                <div className="mb-4 text-center">
                                    <span className="text-3xl font-bold text-gray-900">{plano.preco}</span>
                                    <span className="text-gray-600">{plano.periodo}</span>
                                </div>
                                <ul className="space-y-2 mb-6">
                                    {plano.beneficios.map((beneficio, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                            <Check className="h-4 w-4 text-primary" />
                                            {beneficio}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    size="sm"
                                    className="w-full mt-auto"
                                    onClick={() => window.open(whatsappLink, '_blank')}
                                >
                                    Contratar
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Horários */}
                <div className="mb-16" data-aos="fade-up">
                    <h3 className="text-2xl font-bold text-center mb-8">Nossos Horários</h3>
                    <div className="bg-white rounded-lg border border-gray-200 p-6 max-w-2xl mx-auto">
                        <div className="grid grid-cols-6 gap-2 text-sm">
                            {/* Dias */}
                            <div className="font-bold text-center">SEG</div>
                            <div className="font-bold text-center">TER</div>
                            <div className="font-bold text-center">QUA</div>
                            <div className="font-bold text-center">QUI</div>
                            <div className="font-bold text-center">SEX</div>
                            <div className="font-bold text-center">SÁB</div>

                            {/* Horários */}
                            <div className="text-center">6:20</div>
                            <div className="text-center">6:20</div>
                            <div className="text-center">6:20</div>
                            <div className="text-center">6:00</div>
                            <div className="text-center">6:20</div>
                            <div className="text-center">T.630</div>

                            <div className="text-center">7:40</div>
                            <div className="text-center">7:40</div>
                            <div className="text-center">7:40</div>
                            <div className="text-center">7:40</div>
                            <div className="text-center">7:40</div>
                            <div className="text-center">9:30</div>

                            <div className="text-center">12:15</div>
                            <div className="text-center">17:40</div>
                            <div className="text-center">12:15</div>
                            <div className="text-center">17:40</div>
                            <div className="text-center">12:15</div>
                            <div className="text-center">11:30</div>
                        </div>
                    </div>
                </div>

                {/* CTA Final */}
                <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="500">
                    <p className="text-gray-600 mb-4">Taxa de matrícula: R$ 70 (exceto para planos avulsos)</p>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-primary text-primary hover:bg-primary/10"
                        onClick={() => window.open(whatsappLink, '_blank')}
                    >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Fale conosco pelo WhatsApp
                    </Button>
                </div>
            </div>
        </section>
    )
}