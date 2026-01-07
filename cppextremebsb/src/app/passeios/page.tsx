'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import { motion } from 'framer-motion'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    ChevronRight,
    Moon,
    Sun,
    Activity,
    Users,
    Info,
    MessageCircle,
    ArrowRight,
    Sparkles,
    AlertTriangle
} from 'lucide-react'
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

export default function CppPage() {
    useEffect(() => {
        // Se já tiver o AosInit global, pode remover esse useEffect também
        AOS.init({ duration: 700, once: true, easing: 'ease-out' })
    }, [])

    // Sistema de Níveis
    const niveis = [
        {
            nivel: 'Nível 1',
            titulo: 'Iniciante',
            descricao: 'Para todos os públicos, sem exigência física',
            caracteristicas: [
                'Duração: 1-2 horas',
                'Remada tranquila em águas calmas',
                'Sem necessidade de experiência prévia',
                'Equipamentos básicos fornecidos',
            ],
            cor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
            corBadge: 'bg-green-500',
        },
        {
            nivel: 'Nível 2',
            titulo: 'Intermediário',
            descricao: 'Exige condicionamento físico básico',
            caracteristicas: [
                'Duração: 2-3 horas',
                'Remada com pequenas ondulações',
                'Experiência básica recomendada',
                'Pequenos desafios técnicos',
            ],
            cor: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
            corBadge: 'bg-blue-500',
        },
        {
            nivel: 'Nível 3',
            titulo: 'Avançado',
            descricao: 'Exige boa condição física e experiência',
            caracteristicas: [
                'Duração: 3-4 horas',
                'Remada em águas abertas',
                'Experiência intermediária obrigatória',
                'Desafios técnicos consideráveis',
            ],
            cor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
            corBadge: 'bg-yellow-500',
        },
        {
            nivel: 'Nível 4',
            titulo: 'Expert',
            descricao: 'Para remadores experientes e atléticos',
            caracteristicas: [
                'Duração: 4+ horas',
                'Condições de água variáveis',
                'Experiência avançada obrigatória',
                'Grandes desafios técnicos e físicos',
            ],
            cor: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
            corBadge: 'bg-orange-500',
        },
        {
            nivel: 'Nível 5',
            titulo: 'Extremo',
            descricao: 'Excepcional condicionamento físico necessário',
            caracteristicas: [
                'Expedições multi-dia',
                'Condições desafiadoras',
                'Experiência comprovada obrigatória',
                'Teste físico prévio exigido',
            ],
            cor: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
            corBadge: 'bg-red-500',
        },
    ]

    // Modalidades Canoagem
    const modalidades = [
        {
            nivel: 'Nível 1',
            titulo: 'Experiências Contemplativas',
            icone: <Moon className="w-5 h-5" />,
            experiencias: [
                {
                    nome: 'Remada da Lua Cheia',
                    descricao: 'Remadas noturnas sob o luar com vista privilegiada do céu estrelado',
                    imagem: '/noite.jpg',
                },
                {
                    nome: 'Remada Pôr do Sol',
                    descricao: 'Aprecie o pôr do sol no lago com cores deslumbrantes',
                    imagem: '/por.jpg',
                },
                {
                    nome: 'Remada Nascer do Sol',
                    descricao: 'Comece o dia com energia renovada acompanhando o nascer do sol',
                    imagem: '/corporativo.jpg',
                },
                {
                    nome: 'Remada com Meditação',
                    descricao: 'Prática de mindfulness na canoa com instrutor especializado',
                    imagem: '/iniciante.jpg',
                },
                {
                    nome: 'Remada Festiva/Temática',
                    descricao: 'Eventos especiais com música, cultura e temas sazonais',
                    imagem: '/sol.jpg',
                },
                {
                    nome: 'Remada 60+',
                    descricao: 'Atividade adaptada para participantes acima de 60 anos',
                    imagem: '/remadalinda.jpg',
                },
            ],
        },
        {
            nivel: 'Nível 2',
            titulo: 'Experiências Wellness',
            icone: <Activity className="w-5 h-5" />,
            experiencias: [
                {
                    nome: 'Remada com Picnic',
                    descricao: 'Remada + piquenique gourmet em ilha privativa',
                    imagem: '/experimental.jpg',
                },
                {
                    nome: 'Remada com Yoga',
                    descricao: 'Prática de yoga em plataforma flutuante com instrutor',
                    imagem: '/regular.jpg',
                },
                {
                    nome: 'Remada até Ponte JK',
                    descricao: 'Trajeto urbano com vista icônica da ponte mais famosa de Brasília',
                    imagem: '/canoa1.jpg',
                },
            ],
        },
        {
            nivel: 'Nível 3',
            titulo: 'Aventuras Avançadas',
            icone: <Sun className="w-5 h-5" />,
            experiencias: [
                {
                    nome: 'Remada até a Ermida',
                    descricao: 'Trajeto de 12km até o santuário com parada para contemplação',
                    imagem: '/canoa3.jpg',
                },
                {
                    nome: 'Remada até a Barragem',
                    descricao: 'Desafio de 18km com vistas impressionantes da barragem do Lago Paranoá',
                    imagem: '/canoa5.jpg',
                },
            ],
        },
        {
            nivel: 'Níveis 3-5',
            titulo: 'Expedições',
            icone: <Users className="w-5 h-5" />,
            experiencias: [
                {
                    nome: 'Arraial à Corumbá (Nível 4)',
                    descricao: 'Expedição de 2 dias com pernoite em acampamento rústico',
                    imagem: '/corumba.jpg',
                },
                {
                    nome: 'Porto Seguro à Arraial (Nível 2)',
                    descricao: 'Trajeto costeiro de 15km com paradas estratégicas',
                    imagem: '/porto.jpg',
                },
                {
                    nome: 'Abrolhos (Nível 3)',
                    descricao: 'Remada em águas abertas com possibilidade de avistamento de vida marinha',
                    imagem: '/abrolhos.jpg',
                },
                {
                    nome: 'Praia do Forte (Nível 2)',
                    descricao: 'Trajeto com parada em praia isolada para banho e descanso',
                    imagem: '/forte.jpg',
                },
            ],
        },
    ]

    const whatsappNumber = '61998219177'
    const whatsappMessage = 'Olá! Gostaria de saber mais sobre as modalidades da CPP Extreme.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    return (
        <div className="container mx-auto px-4 py-20 md:py-16 lg:py-20">

            {/* Vídeo de destaque */}
            <div
                className="relative h-72 md:h-96 w-full mb-16 rounded-lg overflow-hidden"
                data-aos="fade-up"
            >
                <video
                    src="/cpp.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-white max-w-2xl"
                    >
                        <p className="text-lg md:text-xl text-white/90">
                            Descubra nossas experiências exclusivas na CPP Extreme BSB
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* --- NOVA SEÇÃO: INTRODUÇÃO E AVISOS --- */}
            <div className="max-w-4xl mx-auto mb-20 text-center space-y-8" data-aos="fade-up">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-6">
                        Passeios CPP
                    </h1>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>
                </div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        Nossos passeios são experiências guiadas de canoa polinésia que conectam <strong className="text-foreground">corpo, água e coletivo</strong>.
                        Cada saída é pensada para respeitar o ritmo do grupo, as condições do dia e o nível de experiência dos remadores.
                    </p>
                    <p>
                        Para garantir segurança, fluidez e uma boa formação de canoa, todos os passeios são classificados por níveis, que indicam o grau de exigência física, técnica e o tempo de remada.
                    </p>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-6 rounded-xl flex flex-col items-center gap-4 mt-8">
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-500 font-bold uppercase tracking-wide">
                        <AlertTriangle className="w-5 h-5" />
                        <span>Atenção</span>
                    </div>
                    <p className="text-base text-foreground font-medium max-w-2xl">
                        Antes de escolher seu passeio, observe atentamente o nível indicado.
                        Respeitar essa classificação é fundamental para a experiência individual e para a harmonia da tripulação.
                    </p>
                </div>

                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground pt-4">
                    Abaixo você encontra os níveis de 1 a 5 — do primeiro contato com a canoa até expedições extremas
                </p>
            </div>

            {/* Seção de Níveis - Accordion */}
            <div data-aos="fade-up">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" />
                    Níveis de Experiência
                </h2>

                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="niveis">
                        <AccordionTrigger className="text-lg font-semibold hover:no-underline hover:bg-muted/50 px-4 rounded-lg transition-colors">
                            Clique para ver os detalhes dos níveis (1 ao 5)
                        </AccordionTrigger>
                        <AccordionContent className="px-1 pt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {niveis.map((nivel, index) => (
                                    <Card
                                        key={index}
                                        className={`h-full border-0 shadow-sm ${nivel.cor}`}
                                    >
                                        <CardHeader className="pb-3">
                                            <CardTitle className="flex items-center justify-between mb-2">
                                                <span className="font-bold">{nivel.nivel}</span>
                                                <Badge
                                                    variant="secondary"
                                                    className={`${nivel.corBadge} text-white hover:${nivel.corBadge} border-none`}
                                                >
                                                    {nivel.titulo}
                                                </Badge>
                                            </CardTitle>
                                            <CardDescription className="text-current/80 font-medium text-xs leading-snug">
                                                {nivel.descricao}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-xs">
                                                {nivel.caracteristicas.map((c, i) => (
                                                    <li key={i} className="flex items-start gap-1.5">
                                                        <ChevronRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 opacity-70" />
                                                        <span>{c}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Modalidades */}
            {modalidades.map((modalidade, index) => {
                const nivelPrincipal = modalidade.nivel.split('-')[0]
                const nivelInfo = niveis.find((n) => n.nivel === nivelPrincipal) || niveis[0]

                return (
                    <div key={index} data-aos="fade-up" className="mt-24 border-t pt-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className={`p-3 rounded-full ${nivelInfo.corBadge} text-white shadow-lg`}>
                                {modalidade.icone}
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h2 className="text-3xl font-bold">{modalidade.titulo}</h2>
                                    <Badge variant="outline" className="text-muted-foreground border-foreground/20">
                                        {modalidade.nivel}
                                    </Badge>
                                </div>
                                <p className="text-muted-foreground text-sm">Explore as opções disponíveis para este nível</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {modalidade.experiencias.map((exp, expIndex) => (
                                <Card
                                    key={expIndex}
                                    className="h-full border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col group overflow-hidden"
                                    data-aos="fade-up"
                                    data-aos-delay={expIndex * 100}
                                >
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <Image
                                            src={exp.imagem}
                                            alt={exp.nome}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                                        <Badge className={`absolute top-4 right-4 ${nivelInfo.corBadge} text-white border-none shadow-md`}>
                                            {modalidade.nivel}
                                        </Badge>
                                    </div>

                                    <CardHeader className="-mt-16 relative z-10">
                                        <CardTitle className="text-xl text-white font-bold mb-1 leading-tight group-hover:text-primary-foreground transition-colors">
                                            {exp.nome}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="flex-1 flex flex-col pt-4 bg-card relative z-10">
                                        <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                                            {exp.descricao}
                                        </p>

                                        <a
                                            href={whatsappLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full"
                                        >
                                            <Button
                                                className="w-full gap-2 font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                                                variant="outline"
                                            >
                                                <MessageCircle className="w-4 h-4" />
                                                Saber Mais e Agendar
                                            </Button>
                                        </a>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                )
            })}

            {/* Seção de Call-to-Action Final */}
            <div className="text-center mt-24 mb-10" data-aos="zoom-in">
                <div className="bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-black border border-border rounded-3xl p-10 md:p-16 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
                    {/* Elemento decorativo de fundo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6 text-primary">
                            <Sparkles className="w-8 h-8" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
                            Pronto para viver <br className="hidden md:block" /> experiências incríveis?
                        </h2>

                        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Não importa seu nível, temos um lugar na canoa para você.
                            Entre em contato e descubra qual modalidade se encaixa no seu momento.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    size="lg"
                                    className="gap-2 px-10 py-7 text-lg font-bold shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-1"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    Falar no WhatsApp
                                    <ArrowRight className="w-5 h-5 ml-1" />
                                </Button>
                            </a>

                            <a href="tel:+556198219177">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="gap-2 px-10 py-7 text-lg font-bold border-2 hover:bg-accent"
                                >
                                    📞 Ligar Agora
                                </Button>
                            </a>
                        </div>

                        <p className="text-xs font-medium text-muted-foreground mt-8 uppercase tracking-widest opacity-70">
                            Respondemos rapidamente em horário comercial
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}