'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Clock, Users, Activity, Calendar, MessageCircle, Info } from 'lucide-react'
import Image from 'next/image'

export default function ExtremePage() {
    useEffect(() => {
        AOS.init({ duration: 700, once: true })
    }, [])

    const niveis = [
        { nivel: 'Nível 1', titulo: 'Iniciante', corBadge: 'bg-green-500' },
        { nivel: 'Nível 2', titulo: 'Intermediário', corBadge: 'bg-blue-500' },
        { nivel: 'Nível 3', titulo: 'Avançado', corBadge: 'bg-yellow-500' },
        { nivel: 'Nível 4', titulo: 'Expert', corBadge: 'bg-orange-500' },
        { nivel: 'Nível 5', titulo: 'Extremo', corBadge: 'bg-red-500' }
    ]

    const canionismo = {
        titulo: 'CANIONISMO',
        detalhes: [
            { icone: <Users className="w-5 h-5" />, texto: 'Até 5 pessoas por grupo' },
            { icone: <Clock className="w-5 h-5" />, texto: 'Horários flexíveis (a combinar)' },
            { icone: <Calendar className="w-5 h-5" />, texto: 'Duração variável conforme destino' },
            { icone: <Activity className="w-5 h-5" />, texto: 'Equipamentos inclusos: Capacete, neoprene, cadeirinha, mosquetões' }
        ],
        valores: [
            { tipo: 'Expedições', mobilizadores: 'R$ 400', individual: 'R$ 500' },
            { tipo: 'Treinamento', mobilizadores: 'R$ 300', individual: 'R$ 400' }
        ],
        destinos: [
            { nome: 'Cânion Barra do Dia', nivel: 'Nível 2' },
            { nome: 'Cânion Dom Giuseppe', nivel: 'Nível 4' },
            { nome: 'Cânion Cerrado', nivel: 'Nível 4' },
            { nome: 'Cânion das Andorinhas', nivel: 'Nível 3' }
        ]
    }

    const whatsappNumber = '61998219177'
    const whatsappMessage = 'Olá! Gostaria de saber mais sobre as experiências de Canionismo.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    return (
        <div className="container mx-auto px-4 py-20 md:py-16 lg:py-20">

            {/* Faixa de Destaque */}
            <div className="relative h-72 md:h-96 w-full mb-16 rounded-lg overflow-hidden">
                <Image
                    src="/barra.png"
                    alt="Aventuras de Canionismo"
                    fill
                    className="object-cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl font-bold text-white mb-4"
                        >
                            Aventuras Verticais
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-white/90"
                        >
                            Explore cânions deslumbrantes com nossa equipe especializada
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Seção de Classificação de Níveis */}
            <div data-aos="fade-up" className="mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" /> Níveis de Experiência
                </h2>
                <div className="flex flex-wrap gap-4">
                    {niveis.map((nivel, index) => (
                        <Badge key={index} className={`${nivel.corBadge} text-white px-4 py-2`} data-aos="fade-up" data-aos-delay={index * 100}>
                            {nivel.nivel} - {nivel.titulo}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Conteúdo Canionismo */}
            <div data-aos="fade-up">
                <h2 className="text-2xl font-bold mb-2">{canionismo.titulo}</h2>
                <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
                <p className="text-muted-foreground max-w-3xl mb-12">
                    Experiências verticais em cânions com equipamentos profissionais e guias especializados.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* Detalhes */}
                    <Card data-aos="fade-up">
                        <CardHeader>
                            <CardTitle>Informações</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {canionismo.detalhes.map((detalhe, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="p-1 text-primary">{detalhe.icone}</div>
                                    <p>{detalhe.texto}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Valores */}
                    <Card data-aos="fade-up" data-aos-delay="100">
                        <CardHeader>
                            <CardTitle>Valores</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-2">Tipo</th>
                                            <th className="text-left py-2">Mobilizadores</th>
                                            <th className="text-left py-2">Individual</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {canionismo.valores.map((valor, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="py-3">{valor.tipo}</td>
                                                <td className="py-3">{valor.mobilizadores}</td>
                                                <td className="py-3">{valor.individual}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Destinos */}
                    <Card data-aos="fade-up" data-aos-delay="200">
                        <CardHeader>
                            <CardTitle>Destinos Disponíveis</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {canionismo.destinos.map((destino, index) => {
                                const nivelDestino = niveis.find(n => n.nivel === destino.nivel) || niveis[0]
                                return (
                                    <div key={index} className="flex justify-between items-center">
                                        <span>{destino.nome}</span>
                                        <Badge className={nivelDestino.corBadge}>{destino.nivel}</Badge>
                                    </div>
                                )
                            })}
                        </CardContent>
                    </Card>
                </div>

                {/* Botão de Contato */}
                <div className="text-center">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Button className="gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Entrar em Contato via WhatsApp
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}
