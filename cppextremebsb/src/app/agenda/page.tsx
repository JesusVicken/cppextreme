'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar as CalendarIcon, Clock, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Dados atualizados da agenda
const eventosPorMes = [
    {
        mes: 'Setembro 2025 - Remada da Lua Cheia',
        eventos: [
            {
                data: '07/09 (Dom)',
                horario: '17:00',
                atividade: 'Remada da Lua Cheia - Setembro',
                badge: 'Natureza',
                imagem: '/cpplua.jpeg',
                descricao: 'Remada especial para contemplar o nascer da lua às 18:10 no Lago Paranoá.'
            },
            {
                data: '08/09 (Seg)',
                horario: '18:00',
                atividade: 'Remada da Lua Cheia - Setembro',
                badge: 'Natureza',
                imagem: '/cpplua.jpeg',
                descricao: 'Experiência mágica remando durante o nascer da lua às 19:07 no Lago Paranoá.'
            },
            {
                data: '09/09 (Ter)',
                horario: '19:00',
                atividade: 'Remada da Lua Cheia - Setembro',
                badge: 'Natureza',
                imagem: '/cpplua.jpeg',
                descricao: 'Última oportunidade para ver a lua cheia nascendo às 20:05 no Lago Paranoá.'
            }
        ]
    },
    {
        mes: 'Agosto 2025 - Experiências e Passeios',
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
                imagem: '/noite.jpg',
                descricao: 'Pacote especial para pais e filhos aproveitarem a lua cheia juntos.'
            }
        ]
    }
]

// Função para redirecionar para o WhatsApp
const redirectToWhatsApp = (evento: { atividade: string; data: string; horario: string }) => {
    const phoneNumber = '556198219177';
    const message = `Olá! Gostaria de mais informações sobre: ${evento.atividade} (${evento.data} às ${evento.horario}). Como posso participar?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

export default function AgendaCompleta() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">

            {/* Faixa de Destaque */}
            <div className="relative h-64 w-full overflow-hidden rounded-lg mb-12">
                <Image
                    src="/lualua.jpg"
                    alt="Destaque Lua Cheia"
                    fill
                    className="object-cover object-center"
                    quality={100}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-10">
                    <div className="max-w-2xl">
                        {/* <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="hidden sm:block text-3xl sm:text-4xl font-bold text-white mb-4"
                        >
                            Confira nossa Agenda
                        </motion.h2> */}
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-white/90 absolute left-4 bottom-8 md:left-12 md:bottom-16 max-w-md"
                        >
                            Viva experiências únicas sob a luz da lua no Lago Paranoá
                        </motion.p>

                    </div>
                </div>
            </div>

            {/* Cabeçalho */}
            <div data-aos="fade-down" className="text-center mb-12">
                <h1 className="py-10 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-primary to-black bg-clip-text text-transparent">
                    Confira nossa programação Especial da CPP EXTREME BSB
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
                    Quer viver experiências marcantes e únicas? A CPP Extreme BSB te leva lá. Inscreva-se no nosso próximo evento e sinta essa energia!
                </p>
            </div>

            {/* Agenda por mês */}
            {eventosPorMes.map((mes, index) => (
                <div key={index} data-aos="fade-up" className="mb-16">
                    {/* Título do mês */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                        <CalendarIcon className="h-6 w-6 text-primary" />
                        <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-300">
                            {mes.mes}
                        </span>
                    </h2>

                    {/* Grid de eventos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mes.eventos.map((evento, eventIndex) => {
                            const isLuaCheia = evento.imagem === '/cpplua.jpeg';
                            return (
                                <div
                                    key={`${index}-${eventIndex}`}
                                    data-aos="zoom-in"
                                    data-aos-delay={eventIndex * 100}
                                >
                                    <Card className="h-full border-border hover:border-primary/40 transition-all flex flex-col group overflow-hidden rounded-2xl shadow-md hover:shadow-xl">
                                        {/* Imagem com overlay e badge */}
                                        <div
                                            className={`relative w-full overflow-hidden 
                                            ${isLuaCheia ? 'h-48 sm:h-52 md:h-60 lg:h-72' : 'h-40 sm:h-52 md:h-60 lg:h-72'}
                                        `}
                                        >
                                            <Image
                                                src={evento.imagem}
                                                alt={evento.atividade}
                                                fill
                                                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                            <Badge
                                                variant="outline"
                                                className="absolute top-3 right-3 backdrop-blur-sm bg-white/30 dark:bg-black/30 border-white/30 text-white dark:text-gray-100"
                                            >
                                                {evento.badge}
                                            </Badge>
                                        </div>

                                        {/* Conteúdo do card */}
                                        <CardHeader className="pb-2">
                                            <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
                                                {evento.atividade}
                                            </CardTitle>
                                            <p className="text-sm sm:text-base text-muted-foreground line-clamp-2">
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
                                                onClick={() => redirectToWhatsApp(evento)}
                                                variant="outline"
                                                className="w-full group-hover:border-primary group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300"
                                                size="sm"
                                            >
                                                <span>Mais informações</span>
                                                <ChevronRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ))}

            {/* Rodapé */}
            <div data-aos="fade-in" className="text-center mt-12 text-sm text-muted-foreground italic">
                <p>Programação sujeita a adaptações conforme demanda dos grupos</p>
            </div>
        </div>
    )
}
