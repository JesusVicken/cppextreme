'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar as CalendarIcon, Clock, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

// Dados completos da agenda
const eventosPorMes = [
    {
        mes: 'Julho 2025',
        eventos: [
            {
                data: '05/07 (Sáb)',
                horario: '09:30',
                atividade: 'Remada Festiva - Soul do Morro',
                badge: 'Especial',
                imagem: '/soul.jpg',
                descricao: 'Remada musical com DJ ao vivo e celebração da cultura local no Lago Paranoá.'
            },
            {
                data: '09/07 (Qua)',
                horario: '18:00',
                atividade: 'Luau Fluir - Sound Healing + Yoga',
                badge: 'Wellness',
                imagem: '/lual.png',
                descricao: 'Experiência de relaxamento com yoga e terapia sonora sob as estrelas.'
            },
            {
                data: '10-13/07',
                horario: 'Variados',
                atividade: 'Remada da Lua Cheia (4 dias)',
                badge: 'Natureza',
                imagem: '/noite.jpg',
                descricao: 'Remadas noturnas para contemplar a lua cheia em diferentes pontos do lago.'
            },
            {
                data: '17/07 (Qua)',
                horario: '17:40',
                atividade: 'Remada Solidária - Proteção das Florestas',
                badge: 'Social',
                imagem: '/iniciante.jpg',
                descricao: 'Evento beneficente com parte da renda revertida para preservação ambiental.'
            },
            {
                data: '18/07 (Sex)',
                horario: '17:40',
                atividade: 'Pôr do Sol Especial',
                badge: 'Especial',
                imagem: '/por.jpg',
                descricao: 'Remada no horário mágico do pôr do sol com direito a fotos profissionais.'
            }
        ]
    },
    {
        mes: 'Agosto 2025',
        eventos: [
            {
                data: '01, 15, 22/08',
                horario: '17:40',
                atividade: 'Pôr do Sol (Sextas)',
                badge: 'Recorrente',
                imagem: '/regular.jpg',
                descricao: 'Nossas tradicionais remadas de sexta-feira no pôr do sol.'
            },
            {
                data: '02, 16, 23/08',
                horario: '09:30',
                atividade: 'Remadas Matinais (Sábados)',
                badge: 'Recorrente',
                imagem: '/cpp-sol.jpg',
                descricao: 'Comece o final de semana com energia remando ao nascer do sol.'
            },
            {
                data: '08-11/08',
                horario: 'Variados',
                atividade: 'Lua Cheia + Dia dos Pais',
                badge: 'Combo',
                imagem: '/canoa4.jpg',
                descricao: 'Pacote especial para pais e filhos aproveitarem a lua cheia juntos.'
            }
        ]
    }
]

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

const imageHover = {
    scale: 1.05,
    transition: {
        duration: 0.5,
        ease: 'easeOut'
    }
}

export default function AgendaCompleta() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            {/* Cabeçalho */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h1 className=" py-10 text-3xl md:text-4xl font-bold tracking-tight mb-3 bg-gradient-to-r from-primary to-black bg-clip-text text-transparent">
                    Programação Especial da CPP EXTREME BSB
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    Quer viver experiências marcantes e únicas? A CPP Extreme BSB te leva lá. Inscreva-se no nosso próximo evento e sinta essa energia!
                </p>
            </motion.div>

            {/* Agenda por mês */}
            {eventosPorMes.map((mes, index) => (
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={container}
                    className="mb-16"
                >
                    {/* Título do mês */}
                    <motion.h2
                        className="text-2xl font-bold mb-8 flex items-center gap-3"
                        variants={item}
                    >
                        <CalendarIcon className="h-6 w-6 text-primary" />
                        <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-300">
                            {mes.mes}
                        </span>
                    </motion.h2>

                    {/* Grid de eventos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mes.eventos.map((evento, eventIndex) => (
                            <motion.div
                                key={`${index}-${eventIndex}`}
                                variants={item}
                                whileHover={hoverCard}
                            >
                                <Card className="h-full border-border hover:border-primary/40 transition-all flex flex-col group overflow-hidden">
                                    {/* Imagem com overlay e badge */}
                                    <motion.div
                                        className="relative h-52 w-full overflow-hidden"
                                        whileHover={imageHover}
                                    >
                                        <Image
                                            src={evento.imagem}
                                            alt={evento.atividade}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority={eventIndex < 3}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                                        <Badge
                                            variant="outline"
                                            className="absolute top-3 right-3 backdrop-blur-sm bg-white/30 dark:bg-black/30 border-white/30 text-white dark:text-gray-100"
                                        >
                                            {evento.badge}
                                        </Badge>
                                    </motion.div>

                                    {/* Conteúdo do card */}
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                                            {evento.atividade}
                                        </CardTitle>
                                        <p className="text-sm text-muted-foreground line-clamp-2">
                                            {evento.descricao}
                                        </p>
                                    </CardHeader>

                                    <CardContent className="flex-1 pt-0">
                                        <div className="flex flex-wrap gap-4 text-sm">
                                            <div className="flex items-center gap-2">
                                                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                                                <span>{evento.data}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-muted-foreground" />
                                                <span>{evento.horario}</span>
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardContent>
                                        <Button
                                            variant="outline"
                                            className="w-full group-hover:border-primary group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300"
                                            size="sm"
                                        >
                                            <span>Mais informações</span>
                                            <ChevronRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}

            {/* Rodapé */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center mt-12 text-sm text-muted-foreground italic"
            >
                <p>Programação sujeita a adaptações conforme demanda dos grupos</p>
            </motion.div>
        </div>
    )
}