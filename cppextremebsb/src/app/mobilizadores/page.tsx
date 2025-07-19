'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Rocket, Users, Handshake, ShieldCheck, TrendingUp, Star } from 'lucide-react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function MobilizadoresPage() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out'
        })
    }, [])

    const features = [
        {
            icon: <Users className="w-8 h-8" />,
            title: "O que são Mobilizadores?",
            description: "Profissionais que organizam grupos e promovem experiências únicas em contato com a natureza."
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Experiências Sob Medida",
            description: "Personalizadas para seu público com atividades exclusivas."
        },
        {
            icon: <Handshake className="w-8 h-8" />,
            title: "Valores Especiais",
            description: "Preços diferenciados para grupos e parcerias."
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Suporte Completo",
            description: "Organização total desde o planejamento até a execução."
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Aumento de Lucros",
            description: "Parcerias sólidas que geram resultados para todos."
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Treinamento Especial",
            description: "Capacitação para mobilizadores com certificação."
        }
    ]

    return (
        <main className="min-h-screen">
            <section id="mobilizadores" className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <Badge
                            variant="outline"
                            className="px-4 py-1.5 text-sm font-semibold border-black/20 bg-black/5"
                            data-aos="fade-up"
                        >
                            Programa de Parceria
                        </Badge>
                        <h2
                            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            Mobilizadores CPP Extreme
                        </h2>
                        <p
                            className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Transforme sua rede de contatos em experiências inesquecíveis na natureza com nosso programa exclusivo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="group border-black/20 hover:border-black/40 transition-all duration-300 hover:shadow-lg"
                                data-aos="fade-up"
                                data-aos-delay={300 + (index * 100)}
                            >
                                <CardHeader>
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 rounded-full bg-black/5 group-hover:bg-black/10 transition-all">
                                            {feature.icon}
                                        </div>
                                        <CardTitle className="text-lg font-bold text-black">
                                            {feature.title}
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div
                        className="mt-16 flex flex-col items-center gap-4"
                        data-aos="fade-up"
                        data-aos-delay="900"
                    >
                        <Button
                            size="lg"
                            className="bg-black text-white hover:bg-gray-900 px-8 py-6 text-lg font-bold transition-all hover:scale-105"
                        >
                            Quero ser um Mobilizador
                        </Button>
                        <p className="text-sm text-gray-500">
                            Cadastre-se e receba nosso material completo
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}