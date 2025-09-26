


'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Clock,
    Users,
    Activity,
    Calendar,
    MessageCircle,
    Info,
    ChevronRight,
    Instagram,
} from 'lucide-react'
import Image from 'next/image'

export default function ExtremePage() {
    useEffect(() => {
        AOS.init({ duration: 700, once: true })
    }, [])

    const niveis = [
        {
            nivel: 'Nível 1',
            titulo: 'Básico',
            descricao: 'Ideal para iniciantes em aventuras verticais',
            caracteristicas: [
                'Duração: até 2 horas',
                'Trilhas leves e cachoeiras pequenas',
                'Sem necessidade de experiência',
                'Equipamentos básicos fornecidos',
            ],
            cor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
            corBadge: 'bg-green-500',
        },
        {
            nivel: 'Nível 2',
            titulo: 'Moderado',
            descricao: 'Requer condicionamento físico básico',
            caracteristicas: [
                'Duração: 2-4 horas',
                'Descidas em cachoeiras médias',
                'Exige noções básicas de rapel',
                'Alguns trechos desafiadores',
            ],
            cor: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
            corBadge: 'bg-blue-500',
        },
        {
            nivel: 'Nível 3',
            titulo: 'Avançado',
            descricao: 'Para aventureiros com boa condição física',
            caracteristicas: [
                'Duração: 4-6 horas',
                'Cachoeiras de grande porte',
                'Exige técnica intermediária de rapel',
                'Terrenos mais técnicos e exigentes',
            ],
            cor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
            corBadge: 'bg-yellow-500',
        },
        {
            nivel: 'Nível 4',
            titulo: 'Expert',
            descricao: 'Exige preparo físico e experiência avançada',
            caracteristicas: [
                'Duração: 6+ horas',
                'Grandes cânions e descidas complexas',
                'Necessário domínio de técnicas avançadas',
                'Condições físicas e técnicas elevadas',
            ],
            cor: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
            corBadge: 'bg-orange-500',
        },
    ]

    const canionismo = {
        titulo: 'CANIONISMO',
        detalhes: [
            { icone: <Users className="w-5 h-5" />, texto: 'Até 5 pessoas por grupo' },
            { icone: <Clock className="w-5 h-5" />, texto: 'Horários flexíveis (a combinar)' },
            { icone: <Calendar className="w-5 h-5" />, texto: 'Duração variável conforme destino' },
            {
                icone: <Activity className="w-5 h-5" />,
                texto: 'Equipamentos inclusos: Capacete, neoprene, cadeirinha, mosquetões',
            },
        ],
        valores: [
            { tipo: 'Expedições', mobilizadores: 'R$ 400', individual: 'R$ 500' },
            { tipo: 'Treinamento', mobilizadores: 'R$ 300', individual: 'R$ 400' },
        ],
        destinos: [
            { nome: 'Cânion Barra do Dia', nivel: 'Nível 2' },
            { nome: 'Cânion Dom Giuseppe', nivel: 'Nível 4' },
            { nome: 'Cânion Cerrado', nivel: 'Nível 3' },
            { nome: 'Cânion das Andorinhas', nivel: 'Nível 3' },
        ],
    }

    const professores = [
        {
            nome: 'Kadu Aragão',
            instagram: 'https://www.instagram.com/kadu.aragao/',
            foto: '/kadu.jpg',
        },
        {
            nome: 'Leandro Bainy Valente',
            instagram: 'https://www.instagram.com/leandrobainyvalente/',
            foto: '/Leandro.jpg',
        },
    ]

    const whatsappNumber = '61998219177'
    const whatsappMessage = 'Olá! Gostaria de saber mais sobre as experiências de Canionismo.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`

    return (
        <div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
            {/* Faixa de Destaque */}
            <div className="relative h-64 md:h-96 w-full mb-16 rounded-lg overflow-hidden shadow-lg">
                <Image
                    src="/barra.png"
                    alt="Aventuras de Canionismo"
                    fill
                    className="object-cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center px-6 md:px-12">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-5"
                        >
                            Aventuras Verticais
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-white/90 text-sm md:text-lg"
                        >
                            Explore cânions deslumbrantes com nossa equipe especializada
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Seção Normas e Segurança */}
            <div data-aos="fade-up" className="mb-12 px-4 md:px-0">
                <Card className="border-0 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 p-6 md:p-8">
                    <CardHeader>
                        <CardTitle className="text-lg md:text-2xl flex items-center gap-2">
                            <Info className="w-5 h-5" />
                            Segurança e Normas
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm md:text-base space-y-2">
                        <p>
                            Todos os nossos passeios seguem as normas técnicas brasileiras para esportes
                            de aventura, conforme as diretrizes da{' '}
                            <strong>ABNT NBR ISO 21101</strong> (Gestão de segurança em atividades de
                            aventura) e <strong>ABNT NBR 15265</strong> (Guias e instrutores de
                            atividades de aventura). Nosso objetivo é garantir a máxima segurança,
                            conforto e experiência para todos os participantes.
                        </p>
                        <p>
                            Utilizamos equipamentos certificados, equipes treinadas e protocolos de
                            segurança rigorosos para todas as aventuras.
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Seção de Níveis de Experiência */}
            <div data-aos="fade-up" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" />
                    Níveis de Experiência em Canionismo
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {niveis.map((nivel, index) => (
                        <Card
                            key={index}
                            className={`h-full border-0 ${nivel.cor} shadow hover:scale-105 transition-transform duration-300`}
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <span>{nivel.nivel}</span>
                                    <Badge variant="outline" className="text-xs">
                                        {nivel.titulo}
                                    </Badge>
                                </CardTitle>
                                <CardDescription className="text-current">
                                    {nivel.descricao}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm">
                                    {nivel.caracteristicas.map((c, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Seção Vídeo */}
            <div data-aos="fade-up" className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Veja como é o Canionismo</h2>
                <div className="w-full rounded-lg overflow-hidden shadow-lg">
                    <video
                        src="/canionismo.mp4"
                        controls
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* Professores */}
            <div data-aos="fade-up" className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Nossos Instrutores de Canionismo</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {professores.map((prof, index) => (
                        <Card
                            key={index}
                            className="p-4 md:p-6 flex items-center gap-4 shadow hover:scale-105 transition-transform duration-300"
                        >
                            <Image
                                src={prof.foto}
                                alt={prof.nome}
                                width={80}
                                height={80}
                                className="rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-base md:text-lg">{prof.nome}</p>
                                <a
                                    href={prof.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary flex items-center gap-1 text-sm md:text-base mt-1"
                                >
                                    <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                                    Instagram
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Conteúdo Canionismo */}
            <div data-aos="fade-up" className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{canionismo.titulo}</h2>
                <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
                <p className="text-muted-foreground max-w-3xl mb-12 text-sm md:text-base">
                    Experiências verticais em cânions com equipamentos profissionais e guias especializados.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    {/* Detalhes */}
                    <Card data-aos="fade-up" className="shadow hover:shadow-md transition-shadow duration-300">
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
                    <Card
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="shadow hover:shadow-md transition-shadow duration-300"
                    >
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
                    <Card
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="shadow hover:shadow-md transition-shadow duration-300"
                    >
                        <CardHeader>
                            <CardTitle>Destinos Disponíveis</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {canionismo.destinos.map((destino, index) => {
                                const nivelDestino =
                                    niveis.find((n) => n.nivel === destino.nivel) || niveis[0]
                                return (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center"
                                    >
                                        <span>{destino.nome}</span>
                                        <Badge className={nivelDestino.corBadge}>
                                            {destino.nivel}
                                        </Badge>
                                    </div>
                                )
                            })}
                        </CardContent>
                    </Card>
                </div>

                {/* Botão de Contato */}
                <div className="text-center">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Button className="gap-2 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base hover:scale-105 transition-transform duration-300">
                            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                            Entrar em Contato via WhatsApp
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}
