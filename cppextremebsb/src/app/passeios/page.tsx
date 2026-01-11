'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import { motion } from 'framer-motion'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
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
    AlertTriangle,
} from 'lucide-react'
import Image from 'next/image'

export default function CppPage() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' })
    }, [])

    // Sistema de Níveis
    const niveis = [
        {
            nivel: 'Nível 1',
            titulo: 'Iniciante',
            descricao: 'Para todos os públicos, sem exigência física.',
            caracteristicas: ['Duração: 1-2 horas', 'Águas calmas', 'Sem experiência prévia'],
            cor: 'bg-emerald-50 border-emerald-200 text-emerald-800',
            corBadge: 'bg-emerald-500',
        },
        {
            nivel: 'Nível 2',
            titulo: 'Intermediário',
            descricao: 'Exige condicionamento físico básico.',
            caracteristicas: ['Duração: 2-3 horas', 'Pequenas ondulações', 'Desafios leves'],
            cor: 'bg-blue-50 border-blue-200 text-blue-800',
            corBadge: 'bg-blue-500',
        },
        {
            nivel: 'Nível 3',
            titulo: 'Avançado',
            descricao: 'Exige boa condição física e experiência.',
            caracteristicas: ['Duração: 3-4 horas', 'Águas abertas', 'Técnica exigida'],
            cor: 'bg-amber-50 border-amber-200 text-amber-800',
            corBadge: 'bg-amber-500',
        },
        {
            nivel: 'Nível 4',
            titulo: 'Expert',
            descricao: 'Para remadores experientes e atléticos.',
            caracteristicas: ['Duração: 4+ horas', 'Condições variáveis', 'Desafios físicos'],
            cor: 'bg-orange-50 border-orange-200 text-orange-800',
            corBadge: 'bg-orange-500',
        },
        {
            nivel: 'Nível 5',
            titulo: 'Extremo',
            descricao: 'Excepcional condicionamento físico necessário.',
            caracteristicas: ['Expedições multi-dia', 'Condições severas', 'Teste prévio'],
            cor: 'bg-rose-50 border-rose-200 text-rose-800',
            corBadge: 'bg-rose-600',
        },
    ]

    // Modalidades Canoagem
    const modalidades = [
        {
            titulo: 'Experiências Contemplativas',
            subtitulo: 'Conexão e Natureza',
            nivelLabel: 'Nível 1',
            icone: <Moon className="w-6 h-6" />,
            corTema: 'text-indigo-600',
            experiencias: [
                {
                    nome: 'Remada da Lua Cheia',
                    descricao: 'Remadas noturnas sob o luar com vista privilegiada do céu estrelado.',
                    imagem: '/noite.jpg',
                },
                {
                    nome: 'Remada Pôr do Sol',
                    descricao: 'Aprecie o pôr do sol no lago com cores deslumbrantes.',
                    imagem: '/por.jpg',
                },
                {
                    nome: 'Remada Nascer do Sol',
                    descricao: 'Comece o dia com energia renovada acompanhando o nascer do sol.',
                    imagem: '/corporativo.jpg',
                },
                {
                    nome: 'Remada com Meditação',
                    descricao: 'Prática de mindfulness na canoa com instrutor especializado.',
                    imagem: '/iniciante.jpg',
                },
                {
                    nome: 'Remada Festiva',
                    descricao: 'Eventos especiais com música, cultura e temas sazonais.',
                    imagem: '/sol.jpg',
                },
                {
                    nome: 'Remada 60+',
                    descricao: 'Atividade segura e adaptada para participantes acima de 60 anos.',
                    imagem: '/remadalinda.jpg',
                },
            ],
        },
        {
            titulo: 'Experiências Wellness',
            subtitulo: 'Saúde e Bem-estar',
            nivelLabel: 'Nível 2',
            icone: <Activity className="w-6 h-6" />,
            corTema: 'text-teal-600',
            experiencias: [
                {
                    nome: 'Remada com Picnic',
                    descricao: 'Remada + piquenique gourmet em ilha privativa.',
                    imagem: '/experimental.jpg',
                },
                {
                    nome: 'Remada com Yoga',
                    descricao: 'Prática de yoga em plataforma flutuante com instrutor.',
                    imagem: '/regular.jpg',
                },
                {
                    nome: 'Remada até Ponte JK',
                    descricao: 'Trajeto urbano com vista icônica da ponte mais famosa de Brasília.',
                    imagem: '/canoa1.jpg',
                },
            ],
        },
        {
            titulo: 'Aventuras Avançadas',
            subtitulo: 'Desafio e Superação',
            nivelLabel: 'Nível 3',
            icone: <Sun className="w-6 h-6" />,
            corTema: 'text-amber-600',
            experiencias: [
                {
                    nome: 'Remada até a Ermida',
                    descricao: 'Trajeto de 12km até o santuário com parada para contemplação.',
                    imagem: '/canoa3.jpg',
                },
                {
                    nome: 'Remada até a Barragem',
                    descricao: 'Desafio de 18km com vistas impressionantes da barragem.',
                    imagem: '/canoa5.jpg',
                },
            ],
        },
        {
            titulo: 'Expedições',
            subtitulo: 'Jornadas Épicas',
            nivelLabel: 'Níveis 3-5',
            icone: <Users className="w-6 h-6" />,
            corTema: 'text-rose-600',
            experiencias: [
                {
                    nome: 'Arraial à Corumbá',
                    descricao: 'Expedição de 2 dias com pernoite em acampamento rústico (Nível 4).',
                    imagem: '/corumba.jpg',
                },
                {
                    nome: 'Porto Seguro à Arraial',
                    descricao: 'Trajeto costeiro de 15km com paradas estratégicas (Nível 2).',
                    imagem: '/porto.jpg',
                },
                {
                    nome: 'Abrolhos',
                    descricao: 'Remada em águas abertas com vida marinha (Nível 3).',
                    imagem: '/abrolhos.jpg',
                },
                {
                    nome: 'Praia do Forte',
                    descricao: 'Trajeto com parada em praia isolada para banho e descanso (Nível 2).',
                    imagem: '/forte.jpg',
                },
            ],
        },
    ]

    const whatsappNumber = '556198219177'
    const whatsappLink = (msg: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`

    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 py-12 md:py-20">

            {/* --- HERO SECTION --- */}
            <div className="max-w-7xl mx-auto mb-20">
                <div
                    className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                    data-aos="fade-up"
                >
                    <video
                        src="/cpp.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transform scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Badge className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border-white/40 uppercase tracking-widest mb-4 px-4 py-1">
                                Experiências CPP
                            </Badge>
                            {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
                                Conecte-se com <br /> a essência da água.
                            </h1> */}
                            <p className="text-white/80 text-lg md:text-xl max-w-2xl font-medium">
                                Descubra Brasília sob uma nova perspectiva em nossas canoas polinésias no Lago Paranoá.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- INTRODUÇÃO (TEXTO SOLICITADO) --- */}
            <div className="max-w-4xl mx-auto text-center mb-24 space-y-6" data-aos="fade-up">
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                    Nossos Passeios
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Nossos passeios são experiências guiadas de canoa polinésia que conectam <span className="font-bold text-foreground">corpo, água e coletivo</span>.
                    Cada saída é pensada para respeitar o ritmo do grupo, as condições do dia e o nível de experiência dos remadores.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Para garantir segurança, fluidez e uma boa formação de canoa, todos os passeios são classificados por níveis, que indicam o grau de exigência física, técnica e o tempo de remada.
                </p>
            </div>

            {/* --- MODALIDADES (LOOP) --- */}
            <div className="space-y-32">
                {modalidades.map((modalidade, index) => (
                    <div key={index} id={`modalidade-${index}`} className="scroll-mt-24">
                        {/* Cabeçalho da Seção */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 max-w-7xl mx-auto" data-aos="fade-up">
                            <div className="flex items-start gap-4">
                                <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-zinc-900 ${modalidade.corTema}`}>
                                    {modalidade.icone}
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-3xl md:text-4xl font-black tracking-tight uppercase">
                                            {modalidade.titulo}
                                        </h3>
                                    </div>
                                    <p className="text-lg text-muted-foreground font-medium">
                                        {modalidade.subtitulo}
                                    </p>
                                </div>
                            </div>
                            <Badge variant="secondary" className="self-start md:self-auto text-sm px-4 py-1">
                                {modalidade.nivelLabel}
                            </Badge>
                        </div>

                        {/* Grid de Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                            {modalidade.experiencias.map((exp, expIndex) => (
                                <motion.div
                                    key={expIndex}
                                    whileHover={{ y: -8 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    data-aos="fade-up"
                                    data-aos-delay={expIndex * 100}
                                >
                                    <Card className="h-full border-none shadow-lg bg-card overflow-hidden rounded-3xl flex flex-col group">
                                        {/* Imagem */}
                                        <div className="relative h-64 w-full overflow-hidden">
                                            <Image
                                                src={exp.imagem}
                                                alt={exp.nome}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                        </div>

                                        {/* Conteúdo */}
                                        <CardContent className="flex-1 flex flex-col p-6 md:p-8 relative">
                                            <div className="mb-4">
                                                <h4 className="text-2xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                                                    {exp.nome}
                                                </h4>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {exp.descricao}
                                                </p>
                                            </div>

                                            <div className="mt-auto pt-6">
                                                <a
                                                    href={whatsappLink(`Olá! Gostaria de agendar a experiência: *${exp.nome}*`)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block w-full"
                                                >
                                                    <Button className="w-full rounded-xl py-6 font-bold text-md shadow-md hover:shadow-xl transition-all gap-2 cursor-pointer">
                                                        <MessageCircle className="w-5 h-5" />
                                                        Agendar Experiência
                                                    </Button>
                                                </a>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* --- CTA FINAL ---
            <div className="mt-32 mb-20 max-w-7xl mx-auto" data-aos="zoom-in">
                <div className="relative rounded-[2.5rem] bg-zinc-900 text-white overflow-hidden p-8 md:p-16 text-center shadow-2xl">
                    <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 p-32 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                        <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full backdrop-blur-sm mb-4">
                            <Sparkles className="w-8 h-8 text-yellow-300" />
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                            Sua aventura começa agora.
                        </h2>
                        <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                            Não sabe qual nível escolher ou quer montar um grupo personalizado?
                            Fale com nossa equipe.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <a href={whatsappLink('Olá! Gostaria de saber mais sobre as modalidades da CPP Extreme.')} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto px-10 py-8 rounded-2xl text-lg font-bold bg-white text-black hover:bg-zinc-200 cursor-pointer">
                                    Falar no WhatsApp
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* --- NÍVEIS DE EXPERIÊNCIA (REFERÊNCIA NO FINAL) --- */}
            <div className="border-t border-border pt-20 pb-10 max-w-7xl mx-auto" id="niveis-info" data-aos="fade-up">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4">Informação Técnica</Badge>
                    <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                        <Info className="w-6 h-6 text-primary" />
                        Entenda os Níveis
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Utilize este guia para entender onde você se encaixa melhor.
                        A segurança é nossa prioridade número um.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {niveis.map((nivel, index) => (
                        <Card
                            key={index}
                            className={`border transition-all hover:shadow-md ${nivel.cor} bg-opacity-30 dark:bg-opacity-10`}
                        >
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-sm uppercase tracking-wider opacity-70">
                                        {nivel.nivel}
                                    </span>
                                </div>
                                <CardTitle className="text-lg font-bold">
                                    {nivel.titulo}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm font-medium mb-4 min-h-[40px]">
                                    {nivel.descricao}
                                </p>
                                <ul className="space-y-2">
                                    {nivel.caracteristicas.map((c, i) => (
                                        <li key={i} className="text-xs flex items-start gap-1.5 opacity-90">
                                            <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground bg-gray-50 dark:bg-zinc-900 py-3 rounded-lg border border-dashed border-gray-200 dark:border-zinc-800">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    <span>A classificação dos níveis pode ser alterada conforme as condições climáticas do dia.</span>
                </div>
            </div>

        </div>
    )
}