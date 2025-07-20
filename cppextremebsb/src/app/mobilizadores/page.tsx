'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Rocket, Users, Handshake, ShieldCheck, TrendingUp, Star,
    ChevronRight, MessageCircle, Phone, Zap, Mail
} from 'lucide-react'
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

    const whatsappNumber = '61998219177'
    const whatsappMessage = 'Olá! Gostaria de saber mais sobre como ser um Mobilizador CPP Extreme.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    const features = [
        {
            icon: <Users className="w-8 h-8 text-blue-600" />,
            title: "O que são Mobilizadores?",
            description: "Embaixadores da aventura que criam comunidades em torno da canoa havaiana. Organizam grupos, lideram experiências e conectam pessoas à natureza."
        },
        {
            icon: <Star className="w-8 h-8 text-yellow-500" />,
            title: "Experiências Sob Medida",
            description: "Desenhamos juntos a atividade perfeita para seu grupo - desde remadas tranquilas até desafios extremos."
        },
        {
            icon: <Handshake className="w-8 h-8 text-green-600" />,
            title: "Vantagens Exclusivas",
            description: "Como mobilizador, você recebe comissões e acesso a oportunidades únicas no mercado de esportes aquáticos."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
            title: "Suporte Completo",
            description: "Estrutura profissional para você focar no que importa: criar experiências incríveis."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-pink-600" />,
            title: "Geração de Renda",
            description: "Monetize sua rede de contatos enquanto promove saúde, natureza e esporte."
        },
        {
            icon: <Rocket className="w-8 h-8 text-red-500" />,
            title: "Crescimento",
            description: "Desenvolva habilidades valiosas de liderança e gestão de eventos."
        }
    ]

    const benefits = [
        "Ganhe comissões por cada experiência organizada",
        "Aumente sua rede de contatos qualificados",
        "Tenha flexibilidade de horários e formatos",
        "Acesso a dados e insights do mercado",
        "Possibilidade de criar eventos temáticos",
        "Crescimento pessoal e profissional"
    ]

    return (
        <main className="min-h-screen">
            <section id="mobilizadores" className="w-full py-12 md:py-24 lg:py-32 bg-white">
                <div className="container px-4 md:px-6 mx-auto">

                    {/* Hero */}
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
                            Seja um Mobilizador CPP Extreme
                        </h2>
                        <p
                            className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Transforme sua paixão por canoa havaiana em experiências inesquecíveis e gere renda ajudando outros a descobrirem esse esporte incrível.
                        </p>
                    </div>

                    {/* Por que ser um mobilizador */}
                    <div className="mb-20" data-aos="fade-up">
                        <div className="bg-black/5 p-8 rounded-2xl border border-black/10">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Zap className="text-yellow-500" /> Por que ser um Mobilizador CPP Extreme?
                            </h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="mb-4 text-gray-700">
                                        Como <strong>Mobilizador Certificado</strong>, você se torna um agente transformador:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="text-black/50 mt-1 flex-shrink-0" />
                                            <span><strong>Monetize sua rede</strong>: Ganhe comissões por cada grupo que levar para as experiências</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="text-black/50 mt-1 flex-shrink-0" />
                                            <span><strong>Destaque-se</strong>: Seja reconhecido como líder comunitário no ecossistema de canoa havaiana</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ChevronRight className="text-black/50 mt-1 flex-shrink-0" />
                                            <span><strong>Cresça profissionalmente</strong>: Desenvolva habilidades de gestão de grupos e eventos</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-black/10 p-6 rounded-lg">
                                    <h4 className="font-bold mb-3 flex items-center gap-2">
                                        <MessageCircle className="text-blue-500" /> Seu Projeto, Nosso Suporte:
                                    </h4>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-start gap-2">• <strong>Autonomia</strong>: Defina seu ritmo e formato de atuação</li>
                                        <li className="flex items-start gap-2">• <strong>Visibilidade</strong>: Divulgamos seu trabalho em nossas redes</li>
                                        <li className="flex items-start gap-2">• <strong>Networking</strong>: Conexão com outros mobilizadores e parceiros</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="group border border-black/10 bg-white hover:border-black transition-all duration-300 hover:shadow-xl"
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
                                    <p className="text-gray-700">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Vantagens */}
                    <div className="mb-20" data-aos="fade-up">
                        <h3 className="text-2xl font-bold text-center mb-8">Vantagens de Ser um Mobilizador</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3 bg-white border border-black/10 p-4 rounded-lg">
                                    <div className="bg-black/10 p-2 rounded-full">
                                        <CheckIcon className="w-4 h-4 text-black/70" />
                                    </div>
                                    <span className="text-gray-800">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div
                        className="mt-16 flex flex-col items-center gap-6"
                        data-aos="fade-up"
                        data-aos-delay="900"
                    >
                        <h3 className="text-2xl font-bold text-center">Pronto para se tornar um Mobilizador?</h3>
                        <p className="text-gray-600 text-center max-w-2xl">
                            Junte-se ao nosso programa e comece a transformar vidas através da canoa havaiana enquanto gera renda fazendo o que ama.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Button
                                size="lg"
                                className="bg-black text-white hover:bg-gray-900 px-8 py-6 text-lg font-bold transition-all hover:scale-105 gap-2"
                                asChild
                            >
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                    <Phone className="w-5 h-5" /> Falar no WhatsApp
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="px-8 py-6 text-lg font-bold transition-all hover:scale-105 gap-2 border-black"
                            >
                                <Mail className="w-5 h-5" /> Receber Material Completo
                            </Button>
                        </div>

                        <p className="text-sm text-gray-500 mt-4">
                            Entraremos em contato em até 24h para explicar todo o processo
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}
