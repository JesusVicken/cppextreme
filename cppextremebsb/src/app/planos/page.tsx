'use client'

import { Check, ChevronRight, MessageCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function PlanosSection() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out'
        })
    }, [])

    const whatsappNumber = '61998219177'
    const whatsappMessage = 'Olá! Gostaria de saber mais sobre os planos da CPP Extreme BSB.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    const planos = [
        {
            nome: "Iniciante",
            descricao: "Ideal para quem está começando na canoa havaiana",
            preco: "R$ 299",
            periodo: "/mês",
            destaque: false,
            beneficios: [
                "4 aulas por mês",
                "Equipamentos básicos inclusos",
                "Acesso ao clube 2x na semana",
                "Participação em eventos mensais"
            ]
        },
        {
            nome: "Intermediário",
            descricao: "Para quem quer evoluir no esporte",
            preco: "R$ 499",
            periodo: "/mês",
            destaque: true,
            beneficios: [
                "8 aulas por mês",
                "Equipamentos premium",
                "Acesso ilimitado ao clube",
                "Participação em eventos semanais",
                "Acompanhamento técnico básico"
            ]
        },
        {
            nome: "Avançado",
            descricao: "Para atletas dedicados",
            preco: "R$ 799",
            periodo: "/mês",
            destaque: false,
            beneficios: [
                "Aulas ilimitadas",
                "Equipamentos de competição",
                "Acesso 24/7 ao clube",
                "Participação em todos eventos",
                "Treinamento personalizado",
                "Preparação para competições"
            ]
        }
    ]

    return (
        <section id="planos" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <h2
                        className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 mb-4"
                        data-aos="fade-up"
                    >
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
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={200 + (index * 100)}
                        >
                            <Card className={`h-full flex flex-col border-2 transition-all duration-300 hover:shadow-lg ${plano.destaque ? 'border-primary shadow-md' : 'border-gray-200'}`}>
                                <CardHeader className="pb-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">{plano.nome}</h3>
                                            <p className="text-gray-600">{plano.descricao}</p>
                                        </div>
                                        {plano.destaque && (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                                <Star className="h-3 w-3" />
                                                Popular
                                            </span>
                                        )}
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
                                        Assinar agora
                                        <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>

                <div
                    className="mt-16 text-center"
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    <p className="text-gray-600 mb-4">
                        Tem dúvidas ou precisa de um plano personalizado?
                    </p>
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