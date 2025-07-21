'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, Moon, Sun, Sunrise, Activity, Users, Calendar, Clock, AlertCircle, Info, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

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
            'Equipamentos básicos fornecidos'
        ],
        cor: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
        corBadge: 'bg-green-500'
    },
    {
        nivel: 'Nível 2',
        titulo: 'Intermediário',
        descricao: 'Exige condicionamento físico básico',
        caracteristicas: [
            'Duração: 2-3 horas',
            'Remada com pequenas ondulações',
            'Experiência básica recomendada',
            'Pequenos desafios técnicos'
        ],
        cor: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
        corBadge: 'bg-blue-500'
    },
    {
        nivel: 'Nível 3',
        titulo: 'Avançado',
        descricao: 'Exige boa condição física e experiência',
        caracteristicas: [
            'Duração: 3-4 horas',
            'Remada em águas abertas',
            'Experiência intermediária obrigatória',
            'Desafios técnicos consideráveis'
        ],
        cor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
        corBadge: 'bg-yellow-500'
    },
    {
        nivel: 'Nível 4',
        titulo: 'Expert',
        descricao: 'Para remadores experientes e atléticos',
        caracteristicas: [
            'Duração: 4+ horas',
            'Condições de água variáveis',
            'Experiência avançada obrigatória',
            'Grandes desafios técnicos e físicos'
        ],
        cor: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
        corBadge: 'bg-orange-500'
    },
    {
        nivel: 'Nível 5',
        titulo: 'Extremo',
        descricao: 'Excepcional condicionamento físico necessário',
        caracteristicas: [
            'Expedições multi-dia',
            'Condições desafiadoras',
            'Experiência comprovada obrigatória',
            'Teste físico prévio exigido'
        ],
        cor: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
        corBadge: 'bg-red-500'
    }
]

// Dados das modalidades
const modalidades = [
    {
        nivel: 'Nível 1',
        titulo: 'Experiências Contemplativas',
        icone: <Moon className="w-5 h-5" />,
        experiencias: [
            {
                nome: 'Remada da Lua Cheia',
                descricao: 'Remadas noturnas sob o luar com vista privilegiada do céu estrelado',
                imagem: '/noite.jpg'
            },
            {
                nome: 'Remada Pôr do Sol',
                descricao: 'Aprecie o pôr do sol no lago com cores deslumbrantes',
                imagem: '/por.jpg'
            },
            {
                nome: 'Remada Nascer do Sol',
                descricao: 'Comece o dia com energia renovada acompanhando o nascer do sol',
                imagem: '/corporativo.jpg'
            },
            {
                nome: 'Remada com Meditação',
                descricao: 'Prática de mindfulness na canoa com instrutor especializado',
                imagem: '/iniciante.jpg'
            },
            {
                nome: 'Remada Festiva/Temática',
                descricao: 'Eventos especiais com música, cultura e temas sazonais',
                imagem: '/sol.jpg'
            },
            {
                nome: 'Remada 60+',
                descricao: 'Atividade adaptada para participantes acima de 60 anos',
                imagem: '/remadalinda.jpg'
            }
        ]
    },
    {
        nivel: 'Nível 2',
        titulo: 'Experiências Wellness',
        icone: <Activity className="w-5 h-5" />,
        experiencias: [
            {
                nome: 'Remada com Picnic',
                descricao: 'Remada + piquenique gourmet em ilha privativa',
                imagem: '/experimental.jpg'
            },
            {
                nome: 'Remada com Yoga',
                descricao: 'Prática de yoga em plataforma flutuante com instrutor',
                imagem: '/regular.jpg'
            },
            {
                nome: 'Remada até Ponte JK',
                descricao: 'Trajeto urbano com vista icônica da ponte mais famosa de Brasília',
                imagem: '/canoa1.jpg'
            }
        ]
    },
    {
        nivel: 'Nível 3',
        titulo: 'Aventuras Avançadas',
        icone: <Sun className="w-5 h-5" />,
        experiencias: [
            {
                nome: 'Remada até a Ermida',
                descricao: 'Trajeto de 12km até o santuário com parada para contemplação',
                imagem: '/canoa3.jpg'
            },
            {
                nome: 'Remada até a Barragem',
                descricao: 'Desafio de 18km com vistas impressionantes da barragem do Lago Paranoá',
                imagem: '/canoa5.jpg'
            }
        ]
    },
    {
        nivel: 'Níveis 3-5',
        titulo: 'Expedições',
        icone: <Users className="w-5 h-5" />,
        experiencias: [
            {
                nome: 'Arraial à Corumbá (Nível 4)',
                descricao: 'Expedição de 2 dias com pernoite em acampamento rústico',
                imagem: '/corumba.jpg'
            },
            {
                nome: 'Porto Seguro à Arraial (Nível 2)',
                descricao: 'Trajeto costeiro de 15km com paradas estratégicas',
                imagem: '/porto.jpg'
            },
            {
                nome: 'Abrolhos (Nível 3)',
                descricao: 'Remada em águas abertas com possibilidade de avistamento de vida marinha',
                imagem: '/abrolhos.jpg'
            },
            {
                nome: 'Praia do Forte (Nível 2)',
                descricao: 'Trajeto com parada em praia isolada para banho e descanso',
                imagem: '/forte.jpg'
            }
        ]
    }
]

// Dados do Canionismo
const canionismo = {
    titulo: 'CANIONISMO',
    detalhes: [
        { icone: <Users className="w-5 h-5" />, texto: 'Até 5 pessoas por grupo' },
        { icone: <Clock className="w-5 h-5" />, texto: 'Horários flexíveis (a combinar)' },
        { icone: <Calendar className="w-5 h-5" />, texto: 'Duração variável conforme destino' },
        {
            icone: <Activity className="w-5 h-5" />,
            texto: 'Equipamentos inclusos: Capacete, neoprene, cadeirinha, mosquetões'
        }
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

// Animations
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 10
        }
    }
}

const hoverCard = {
    y: -5,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
    }
}

export default function CppPage() {
    const whatsappNumber = '61998219177'
    const whatsappMessage = 'Olá! Gostaria de saber mais sobre as modalidades da CPP Extreme.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    return (
        <div className="container mx-auto px-4 py-20 md:py-16 lg:py-20">
            {/* Cabeçalho */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 bg-gradient-to-r from-primary to-black bg-clip-text text-transparent">
                    Modalidades CPP Extreme
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Descubra nossas experiências exclusivas na canoa havaiana e canionismo
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6"
                >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Button className="gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Entrar em Contato
                        </Button>
                    </a>
                </motion.div>
            </motion.div>

            {/* Seção de Níveis */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" />
                    Níveis de Experiência
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {niveis.map((nivel, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className={`h-full border-0 ${nivel.cor}`}>
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
                                        {nivel.caracteristicas.map((caracteristica, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                                {caracteristica}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Modalidades */}
            {modalidades.map((modalidade, index) => {
                const nivelPrincipal = modalidade.nivel.split('-')[0]
                const nivelInfo = niveis.find(n => n.nivel === nivelPrincipal) || niveis[0]

                return (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={container}
                        className="mb-20"
                    >
                        <motion.div variants={item} className="flex items-center gap-3 mb-6">
                            <div className={`p-2 rounded-full ${nivelInfo.corBadge}/10 text-${nivelInfo.corBadge.replace('bg-', 'text-')}`}>
                                {modalidade.icone}
                            </div>
                            <div>
                                <Badge className={`${nivelInfo.corBadge} hover:${nivelInfo.corBadge} text-white`}>
                                    {modalidade.nivel}
                                </Badge>
                                <h2 className="text-2xl font-bold mt-2">{modalidade.titulo}</h2>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {modalidade.experiencias.map((experiencia, expIndex) => (
                                <motion.div
                                    key={expIndex}
                                    variants={item}
                                    whileHover={hoverCard}
                                >
                                    <Card className="h-full border-border hover:border-primary/40 transition-all flex flex-col group overflow-hidden">
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image
                                                src={experiencia.imagem}
                                                alt={experiencia.nome}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority={index < 2 && expIndex < 2}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                                            <Badge className={`absolute top-3 right-3 ${nivelInfo.corBadge} text-white`}>
                                                {modalidade.nivel}
                                            </Badge>
                                        </div>

                                        <CardHeader>
                                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                                {experiencia.nome}
                                            </CardTitle>
                                        </CardHeader>

                                        <CardContent className="flex-1">
                                            <p className="text-muted-foreground text-sm mb-3">
                                                {experiencia.descricao}
                                            </p>

                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button variant="ghost" size="sm" className="text-primary pl-0">
                                                        <AlertCircle className="w-4 h-4 mr-2" />
                                                        Ver requisitos do nível
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-80">
                                                    <h4 className="font-bold mb-2">{nivelInfo.nivel} - {nivelInfo.titulo}</h4>
                                                    <ul className="space-y-2 text-sm">
                                                        {nivelInfo.caracteristicas.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </PopoverContent>
                                            </Popover>
                                        </CardContent>

                                        <CardContent>
                                            <Button
                                                variant="outline"
                                                className="w-full group-hover:border-primary group-hover:text-primary group-hover:bg-primary/10 transition-all"
                                                size="sm"
                                            >
                                                <span>Saber mais</span>
                                                <ChevronRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )
            })}

            {/* Seção de Canionismo com Faixa de Destaque */}
            <div className="relative mt-24">
                {/* Faixa de Destaque */}
                <div className="relative h-64 w-full overflow-hidden rounded-lg mb-12">
                    <Image
                        src="/barra.png" // Nome fictício da imagem
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

                {/* Conteúdo do Canionismo */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={container}
                >
                    <motion.div variants={item} className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">{canionismo.titulo}</h2>
                        <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
                        <p className="text-muted-foreground max-w-3xl">
                            Experiências verticais em cânions com equipamentos profissionais e guias especializados.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Detalhes */}
                        <motion.div variants={item}>
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle>Informações</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {canionismo.detalhes.map((detalhe, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="p-1 text-primary">
                                                {detalhe.icone}
                                            </div>
                                            <p>{detalhe.texto}</p>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Valores */}
                        <motion.div variants={item}>
                            <Card className="h-full">
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
                        </motion.div>

                        {/* Destinos */}
                        <motion.div variants={item}>
                            <Card className="h-full">
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
                        </motion.div>
                    </div>

                    {/* Botão de Contato no final da página */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            <Button className="gap-2">
                                <MessageCircle className="w-4 h-4" />
                                Entrar em Contato via WhatsApp
                            </Button>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}