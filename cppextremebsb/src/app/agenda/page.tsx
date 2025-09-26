'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar as CalendarIcon, Clock, ChevronRight, X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'

// Dados da agenda
const eventosPorMes = [
    {
        mes: 'Outubro 2025 - 3ª EDIÇÃO LUAU FLUIR',
        eventos: [
            {
                data: '08/10 (Qua)',
                horario: '19:00',
                atividade: '3ª EDIÇÃO LUAU FLUIR ✨🌕',
                badge: 'Especial',
                imagem: '/fluir2.jpg',
                descricao: `Em parceria com o CPP Extreme, venha vivenciar uma noite sensorial de conexão, expansão e contemplação sob a energia da lua cheia 💫

🧘‍♀️ Candle Yoga + Cacau + Sound Healing (70 vagas)
Uma prática para despertar o corpo, abrir o coração e se entregar às vibrações sonoras que equilibram e elevam.
🌊 Remada da Lua Cheia – Lago Paranoá (24 vagas)
`
            }
        ]
    },
    {
        mes: 'Setembro 2025 - Remada da Lua Cheia',
        eventos: [
            {
                data: '07/09 (Dom)',
                horario: '17:00',
                atividade: 'Remada da Lua Cheia',
                badge: 'Natureza',
                imagem: '/lualua.jpg',
                descricao: 'Remada especial para contemplar o nascer da lua às 18:10 no Lago Paranoá.'
            },
            {
                data: '08/09 (Seg)',
                horario: '18:00',
                atividade: 'Remada da Lua Cheia',
                badge: 'Natureza',
                imagem: '/lualua2.jpg',
                descricao: 'Experiência mágica remando durante o nascer da lua às 19:07 no Lago Paranoá.'
            },
            {
                data: '09/09 (Ter)',
                horario: '19:00',
                atividade: 'Remada da Lua Cheia',
                badge: 'Natureza',
                imagem: '/cpplua.jpeg',
                descricao: 'Última oportunidade para ver a lua cheia nascendo às 20:05 no Lago Paranoá.'
            }
        ]
    }
]

// Função para redirecionar para WhatsApp
const redirectToWhatsApp = (evento: { atividade: string; data: string; horario: string }) => {
    const phoneNumber = '556198219177'
    const message = `Olá! Gostaria de mais informações sobre: ${evento.atividade} (${evento.data} às ${evento.horario}). Como posso participar?`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
}

export default function AgendaCompleta() {
    const [selectedEvento, setSelectedEvento] = useState<any>(null)

    return (
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            {/* Faixa de Destaque */}
            <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-lg mb-12">
                <video
                    src="/lua.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-10">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-white/90 absolute left-4 bottom-8 md:left-12 md:bottom-16 max-w-md"
                    >
                        Viva experiências únicas no Lago Paranoá
                    </motion.p>
                </div>
            </div>

            {/* Cabeçalho */}
            <div className="text-center mb-12">
                <h1 className="py-10 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-gradient-to-r from-primary to-black bg-clip-text text-transparent">
                    Confira nossa programação Especial da CPP EXTREME BSB
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
                    Quer viver experiências marcantes e únicas? A CPP Extreme BSB te leva lá. Inscreva-se no nosso próximo evento e sinta essa energia!
                </p>
            </div>

            {/* Agenda por mês */}
            {eventosPorMes.map((mes, index) => (
                <div key={index} className="mb-16">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                        <CalendarIcon className="h-6 w-6 text-primary" />
                        <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-300">
                            {mes.mes}
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mes.eventos.map((evento, eventIndex) => {
                            const isEspecial = evento.badge === 'Especial'
                            return (
                                <Card
                                    key={`${index}-${eventIndex}`}
                                    className={`h-full border-border hover:border-primary/40 transition-all flex flex-col group overflow-hidden rounded-2xl shadow-md hover:shadow-xl ${isEspecial ? 'ring-2 ring-primary/40' : ''}`}
                                    onClick={() => setSelectedEvento(evento)}
                                >
                                    <div
                                        className={`relative w-full overflow-hidden 
                                        ${isEspecial ? 'h-48 sm:h-52 md:h-60 lg:h-72' : 'h-40 sm:h-52 md:h-60 lg:h-72'}
                                    `}
                                    >
                                        <Image
                                            src={evento.imagem}
                                            alt={evento.atividade}
                                            fill
                                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        {isEspecial && (
                                            <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-2xl pointer-events-none mix-blend-overlay animate-pulse"></div>
                                        )}

                                        <Badge
                                            variant="outline"
                                            className="absolute top-3 right-3 backdrop-blur-sm bg-white/30 dark:bg-black/30 border-white/30 text-white dark:text-gray-100"
                                        >
                                            {evento.badge}
                                        </Badge>
                                    </div>

                                    <CardHeader className="pb-2">
                                        <CardTitle className={`text-lg sm:text-xl group-hover:text-primary transition-colors duration-300 ${isEspecial ? 'text-primary' : ''}`}>
                                            {evento.atividade}
                                        </CardTitle>
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
                                </Card>
                            )
                        })}
                    </div>
                </div>
            ))}

            {/* Modal de detalhes do evento */}
            <Dialog.Root open={!!selectedEvento} onOpenChange={(open) => !open && setSelectedEvento(null)}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
                    <Dialog.Content className="fixed top-1/2 left-1/2 max-w-lg w-[90%] md:w-2/3 bg-white dark:bg-gray-900 rounded-2xl shadow-xl -translate-x-1/2 -translate-y-1/2 p-6 z-50 overflow-y-auto max-h-[90vh]">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold">{selectedEvento?.atividade}</h3>
                            <Dialog.Close asChild>
                                <Button variant="ghost" className="p-1">
                                    <X className="h-5 w-5" />
                                </Button>
                            </Dialog.Close>
                        </div>
                        <div className="w-full mb-4 flex justify-center">
                            {selectedEvento && (
                                <Image
                                    src={selectedEvento.imagem}
                                    alt={selectedEvento.atividade}
                                    width={600}  // largura máxima que se adapta bem
                                    height={400} // altura proporcional
                                    className="object-contain rounded-xl"
                                />
                            )}
                        </div>
                        <div className="flex flex-wrap gap-4 mb-4 text-sm">
                            <div className="flex items-center gap-2">
                                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                                <span>{selectedEvento?.data}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>{selectedEvento?.horario}</span>
                            </div>
                        </div>
                        <p className="text-sm sm:text-base text-muted-foreground whitespace-pre-line mb-6">
                            {selectedEvento?.descricao}
                        </p>
                        <Button
                            onClick={() => selectedEvento && redirectToWhatsApp(selectedEvento)}
                            className="w-full"
                        >
                            Quero marcar minha remada!
                        </Button>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            {/* Rodapé */}
            <div className="text-center mt-12 text-sm text-muted-foreground italic">
                <p>Programação sujeita a adaptações conforme demanda dos grupos</p>
            </div>
        </div>
    )
}
