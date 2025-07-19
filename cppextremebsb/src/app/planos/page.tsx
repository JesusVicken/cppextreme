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
            nome: 'Plano Anual',
            descricao: 'Para quem quer consistência e economia',
            preco: 'R$ 279',
            periodo: '/mês',
            destaque: true,
            imagem: '/canoa4.jpg', // ← Substitua pelo nome do arquivo
            beneficios: [
                'Acesso ilimitado às aulas',
                'Remadas com instrutor 3x por semana',
                'Equipamentos inclusos (colete, remo e canoa)',
                'Participação gratuita em eventos mensais',
                'Acompanhamento técnico contínuo',
            ],
        },
        {
            nome: 'Plano Semestral',
            descricao: 'Equilíbrio entre flexibilidade e foco',
            preco: 'R$ 298',
            periodo: '/mês',
            destaque: false,
            imagem: '/canoa3.jpg', // ← Substitua pelo nome do arquivo
            beneficios: [
                '8 remadas mensais com agendamento',
                'Uso de equipamentos compartilhados',
                'Participação em eventos mensais',
                'Treinos em grupo com acompanhamento',
                'Desconto em workshops e viagens',
            ],
        },
        {
            nome: 'Plano Trimestral',
            descricao: 'Para quem quer experimentar com liberdade',
            preco: 'R$ 333',
            periodo: '/mês',
            destaque: false,
            imagem: '/canoa2.jpg', // ← Substitua pelo nome do arquivo
            beneficios: [
                '4 remadas mensais',
                'Uso de equipamentos básicos inclusos',
                'Participação em eventos locais',
                'Treinos nos fins de semana',
                'Suporte técnico inicial',
            ],
        },
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {planos.map((plano, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={200 + index * 100}>
                            <Card
                                className={`h-full flex flex-col border-2 transition-all duration-300 hover:shadow-lg overflow-hidden ${plano.destaque ? 'border-primary shadow-md' : 'border-gray-200'}`}
                            >
                                {/* Imagem do plano */}
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
                                            <p className="text-gray-600">{plano.descricao}</p>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="flex-1">
                                    <div className="mb-6">
                                        <span className="text-4xl font-bold text-gray-900">{plano.preco}</span>
                                        <span className="text-gray-600">{plano.periodo}</span>
                                    </div>

                                    <ul className="space-y-3">
                                        {plano.beneficios.map((beneficio, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <Check className="h-4 w-4 text-primary" />
                                                <span className="text-gray-700">{beneficio}</span>
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

                <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="500">
                    <p className="text-gray-600 mb-4">Tem dúvidas ou precisa de um plano personalizado?</p>
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