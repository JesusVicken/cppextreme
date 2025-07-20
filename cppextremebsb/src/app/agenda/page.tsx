'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

// Dados da agenda com imagens
const eventosPorMes = [
    {
        mes: 'Julho 2025',
        eventos: [
            {
                data: '05/07 (Sáb)',
                horario: '09:30',
                atividade: 'Remada Festiva - Soul do Morro',
                badge: 'Especial',
                imagem: '/soul.jpg' // Nome fictício - você pode alterar
            },
            {
                data: '09/07 (Qua)',
                horario: '18:00',
                atividade: 'Luau Fluir - Sound Healing + Yoga',
                badge: 'Wellness',
                imagem: '/lual.png' // Nome fictício
            },
            {
                data: '10-13/07',
                horario: 'Variados',
                atividade: 'Remada da Lua Cheia (4 dias)',
                badge: 'Natureza',
                imagem: '/noite.jpg' // Nome fictício
            },
            {
                data: '17/07 (Qua)',
                horario: '17:40',
                atividade: 'Remada Solidária - Proteção das Florestas',
                badge: 'Social',
                imagem: '/iniciante.jpg' // Nome fictício
            },
            {
                data: '18/07 (Sex)',
                horario: '17:40',
                atividade: 'Pôr do Sol Especial',
                badge: 'Especial',
                imagem: '/por.jpg' // Nome fictício
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
                imagem: '/regular.jpg' // Nome fictício
            },
            {
                data: '02, 16, 23/08',
                horario: '09:30',
                atividade: 'Remadas Matinais (Sábados)',
                badge: 'Recorrente',
                imagem: '/cpp-sol.jpg' // Nome fictício
            },
            {
                data: '08-11/08',
                horario: 'Variados',
                atividade: 'Lua Cheia + Dia dos Pais',
                badge: 'Combo',
                imagem: '/canoa4.jpg' // Nome fictício
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
    show: { opacity: 1, y: 0 }
}

const hoverCard = {
    scale: 1.03,
    transition: { duration: 0.3 }
}

const imageHover = {
    scale: 1.05,
    transition: { duration: 0.4 }
}

export default function AgendaPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                    Programação Especial
                </h1>
                <p className="text-muted-foreground">
                    Eventos marcantes e experiências únicas que a CPP proporciona para o público
                </p>
            </motion.div>

            {eventosPorMes.map((mes, index) => (
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={container}
                    className="mb-16"
                >
                    <motion.h2
                        className="text-2xl font-bold mb-6 flex items-center gap-2"
                        variants={item}
                    >
                        <Calendar className="h-6 w-6 text-primary" />
                        {mes.mes}
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mes.eventos.map((evento, eventIndex) => (
                            <motion.div
                                key={eventIndex}
                                variants={item}
                                whileHover={hoverCard}
                            >
                                <Card className="h-full border-primary/20 hover:border-primary/40 transition-all flex flex-col">
                                    {/* Imagem do evento */}
                                    <motion.div
                                        className="relative h-48 w-full overflow-hidden"
                                        whileHover={imageHover}
                                    >
                                        <Image
                                            src={evento.imagem}
                                            alt={evento.atividade}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority={eventIndex < 3} // Prioriza o carregamento das primeiras imagens
                                        />
                                    </motion.div>

                                    <CardHeader>
                                        <div className="flex justify-between items-start gap-2">
                                            <CardTitle className="text-lg">{evento.atividade}</CardTitle>
                                            <Badge variant="outline" className="text-xs">
                                                {evento.badge}
                                            </Badge>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="flex-1">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                                <span>{evento.data}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock className="h-4 w-4 text-muted-foreground" />
                                                <span>{evento.horario}</span>
                                            </div>
                                        </div>
                                    </CardContent>

                                    <CardContent>
                                        <Button variant="outline" className="w-full" size="sm">
                                            Mais informações
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center mt-12 text-sm text-muted-foreground"
            >
                <p>Programação sujeita a adaptações conforme demanda dos grupos</p>
            </motion.div>
        </div>
    )
}