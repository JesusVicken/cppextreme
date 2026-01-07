'use client'

import { useState, useMemo, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { format, isSameDay, parse, isValid } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import {
    Card,
    CardContent
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar as CalendarIcon, Clock, X, ChevronRight, MapPin } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'

// --- TIPO DE EVENTO ---
type Evento = {
    id: string
    dateObj: Date
    dataDisplay: string
    horario: string
    atividade: string
    badge: string
    imagem: string
    descricao: string
}

// --- DADOS ORIGINAIS ---
const rawData = [
    {
        mes: 'Outubro 2025',
        year: 2025,
        eventos: [
            {
                dataStr: '08/10',
                diaSemana: '(Qua)',
                horario: '19:00',
                atividade: '3ª EDIÇÃO LUAU FLUIR ✨🌕',
                badge: 'Especial',
                imagem: '/fluir2.jpg',
                descricao: `Em parceria com o CPP Extreme, venha vivenciar uma noite sensorial de conexão...
                
🧘‍♀️ Candle Yoga + Cacau + Sound Healing (70 vagas)
Uma prática para despertar o corpo...
🌊 Remada da Lua Cheia – Lago Paranoá (24 vagas)`
            }
        ]
    },
    {
        mes: 'Setembro 2025',
        year: 2025,
        eventos: [
            {
                dataStr: '07/09',
                diaSemana: '(Dom)',
                horario: '17:00',
                atividade: 'Remada da Lua Cheia',
                badge: 'Natureza',
                imagem: '/lualua.jpg',
                descricao: 'Remada especial para contemplar o nascer da lua às 18:10 no Lago Paranoá.'
            },
            {
                dataStr: '08/09',
                diaSemana: '(Seg)',
                horario: '18:00',
                atividade: 'Remada da Lua Cheia',
                badge: 'Natureza',
                imagem: '/lualua2.jpg',
                descricao: 'Experiência mágica remando durante o nascer da lua às 19:07 no Lago Paranoá.'
            },
            {
                dataStr: '09/09',
                diaSemana: '(Ter)',
                horario: '19:00',
                atividade: 'Remada da Lua Cheia',
                badge: 'Natureza',
                imagem: '/cpplua.jpeg',
                descricao: 'Última oportunidade para ver a lua cheia nascendo às 20:05 no Lago Paranoá.'
            }
        ]
    }
]

// --- NORMALIZAÇÃO DOS DADOS ---
const getNormalizedEvents = (): Evento[] => {
    const events: Evento[] = []

    rawData.forEach(grupo => {
        grupo.eventos.forEach((ev, idx) => {
            const dateString = `${ev.dataStr}/${grupo.year}`
            const dateObj = parse(dateString, 'dd/MM/yyyy', new Date())

            if (isValid(dateObj)) {
                events.push({
                    id: `${grupo.mes}-${idx}`,
                    dateObj,
                    dataDisplay: `${ev.dataStr} ${ev.diaSemana}`,
                    horario: ev.horario,
                    atividade: ev.atividade,
                    badge: ev.badge,
                    imagem: ev.imagem,
                    descricao: ev.descricao
                })
            }
        })
    })

    return events.sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime())
}

const allEvents = getNormalizedEvents()

const redirectToWhatsApp = (evento: Evento) => {
    const phoneNumber = '556198219177'
    const message = `Olá! Gostaria de mais informações sobre: ${evento.atividade} (${evento.dataDisplay} às ${evento.horario}). Como posso participar?`
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
}

export default function AgendaCompleta() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
    const [selectedEventoModal, setSelectedEventoModal] = useState<Evento | null>(null)

    // Filtra eventos
    const filteredEvents = useMemo(() => {
        if (!selectedDate) return allEvents
        return allEvents.filter(ev => isSameDay(ev.dateObj, selectedDate))
    }, [selectedDate])

    const daysWithEvents = useMemo(() => allEvents.map(ev => ev.dateObj), [])

    // CSS Customizado para o DayPicker ficar bonito com Tailwind
    const css = `
        .rdp { --rdp-cell-size: 40px; --rdp-accent-color: hsl(var(--primary)); --rdp-background-color: hsl(var(--primary) / 0.1); margin: 0; }
        .rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]) { 
            background-color: hsl(var(--primary)); color: white; 
        }
        .rdp-button:hover:not([disabled]):not(.rdp-day_selected) { background-color: hsl(var(--secondary)); }
        .rdp-head_cell { color: hsl(var(--muted-foreground)); font-weight: 500; font-size: 0.875rem; }
        .rdp-caption_label { font-size: 1rem; font-weight: 700; color: hsl(var(--foreground)); }
        .rdp-nav_button { color: hsl(var(--foreground)); }
    `

    return (
        <section className="py-20 bg-gradient-to-b from-background to-secondary/5 overflow-hidden">
            <style>{css}</style>

            <div className="container mx-auto px-4">

                {/* --- HEADER COM VÍDEO (AOS) --- */}
                <div className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl h-[300px] md:h-[400px]" data-aos="fade-up">
                    <video
                        src="/lua.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
                        <Badge data-aos="zoom-in" data-aos-delay="200" className="mb-4 bg-primary/80 backdrop-blur-md text-white border-none px-4 py-1 text-sm uppercase tracking-wider">
                            Agenda 2026
                        </Badge>
                        <h1 data-aos="fade-up" data-aos-delay="300" className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
                            PROGRAMAÇÃO <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">CPP EXTREME</span>
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="400" className="text-gray-200 text-lg md:text-xl max-w-2xl">
                            Conecte-se com a natureza e supere seus limites nas águas do Lago Paranoá.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* --- CALENDÁRIO (STICKY) --- */}
                    <div className="w-full lg:w-[380px] lg:flex-shrink-0" data-aos="fade-right">
                        <div className="lg:sticky lg:top-24 bg-card border border-border/50 shadow-xl rounded-2xl p-6 backdrop-blur-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <CalendarIcon className="w-5 h-5 text-primary" />
                                Selecione uma data
                            </h3>

                            <div className="flex justify-center">
                                <DayPicker
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                    locale={ptBR}
                                    modifiers={{ hasEvent: daysWithEvents }}
                                    modifiersStyles={{
                                        hasEvent: {
                                            fontWeight: 'bold',
                                            textDecoration: 'underline',
                                            textDecorationColor: 'hsl(var(--primary))',
                                            textUnderlineOffset: '4px'
                                        }
                                    }}
                                />
                            </div>

                            <div className="mt-6 pt-6 border-t border-border flex flex-col gap-3">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span className="w-2 h-2 rounded-full bg-primary block" /> Dias com eventos
                                </div>
                                {selectedDate && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full"
                                        onClick={() => setSelectedDate(undefined)}
                                    >
                                        <X className="w-4 h-4 mr-2" /> Limpar filtro
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* --- LISTA DE EVENTOS --- */}
                    <div className="flex-1 min-h-[500px]" data-aos="fade-left">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold">
                                {selectedDate ? (
                                    <>Eventos em <span className="text-primary">{format(selectedDate, "dd 'de' MMMM", { locale: ptBR })}</span></>
                                ) : (
                                    'Próximos Eventos'
                                )}
                            </h2>
                            <Badge variant="secondary">{filteredEvents.length} eventos</Badge>
                        </div>

                        <div className="space-y-6">
                            <AnimatePresence mode="popLayout">
                                {filteredEvents.length > 0 ? (
                                    filteredEvents.map((evento) => (
                                        <motion.div
                                            key={evento.id}
                                            layout
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Card
                                                className="group overflow-hidden border-border/60 hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer bg-card/50"
                                                onClick={() => setSelectedEventoModal(evento)}
                                            >
                                                <div className="flex flex-col sm:flex-row h-full">
                                                    {/* Imagem */}
                                                    <div className="relative w-full sm:w-56 h-48 sm:h-auto shrink-0 overflow-hidden">
                                                        <Image
                                                            src={evento.imagem}
                                                            alt={evento.atividade}
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                        <div className="absolute top-3 left-3">
                                                            <Badge className={`${evento.badge === 'Especial' ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-primary hover:bg-primary/90'} text-white border-none shadow-md`}>
                                                                {evento.badge}
                                                            </Badge>
                                                        </div>
                                                    </div>

                                                    {/* Conteúdo */}
                                                    <CardContent className="flex-1 p-6 flex flex-col justify-between">
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-primary uppercase tracking-wider">
                                                                <CalendarIcon className="w-3 h-3" />
                                                                {format(evento.dateObj, "MMMM yyyy", { locale: ptBR })}
                                                            </div>

                                                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                                {evento.atividade}
                                                            </h3>

                                                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
                                                                <div className="flex items-center gap-1.5">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                                    <span className="font-medium text-foreground">{evento.dataDisplay}</span>
                                                                </div>
                                                                <div className="flex items-center gap-1.5">
                                                                    <Clock className="w-4 h-4 text-primary" />
                                                                    <span>{evento.horario}</span>
                                                                </div>
                                                            </div>

                                                            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                                                {evento.descricao}
                                                            </p>
                                                        </div>

                                                        <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-end text-primary text-sm font-semibold opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                                                            Ver detalhes <ChevronRight className="w-4 h-4 ml-1" />
                                                        </div>
                                                    </CardContent>
                                                </div>
                                            </Card>
                                        </motion.div>
                                    ))
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-center py-16 bg-muted/30 rounded-2xl border border-dashed border-border"
                                    >
                                        <div className="bg-background w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                            <CalendarIcon className="w-8 h-8 text-muted-foreground/50" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-foreground">Dia livre!</h3>
                                        <p className="text-muted-foreground mt-2 max-w-xs mx-auto">
                                            Não há eventos programados para esta data. Que tal escolher outro dia?
                                        </p>
                                        <Button variant="link" onClick={() => setSelectedDate(undefined)} className="mt-4 text-primary">
                                            Ver programação completa
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MODAL DE DETALHES --- */}
            <Dialog.Root open={!!selectedEventoModal} onOpenChange={(open) => !open && setSelectedEventoModal(null)}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 animate-in fade-in duration-300" />
                    <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-background p-0 shadow-2xl duration-200 sm:rounded-2xl overflow-hidden animate-in zoom-in-95 border border-border">

                        {selectedEventoModal && (
                            <>
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={selectedEventoModal.imagem}
                                        alt={selectedEventoModal.atividade}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-4 top-4 text-white hover:bg-white/20 rounded-full"
                                        onClick={() => setSelectedEventoModal(null)}
                                    >
                                        <X className="h-6 w-6" />
                                    </Button>

                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <Badge className="mb-3 bg-primary text-white border-none">
                                            {selectedEventoModal.badge}
                                        </Badge>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                            {selectedEventoModal.atividade}
                                        </h2>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-muted/50 p-3 rounded-lg flex items-center gap-3 border border-border/50">
                                            <div className="bg-primary/10 p-2 rounded-full text-primary">
                                                <CalendarIcon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground font-medium uppercase">Data</p>
                                                <p className="font-semibold text-sm">{selectedEventoModal.dataDisplay}</p>
                                            </div>
                                        </div>
                                        <div className="bg-muted/50 p-3 rounded-lg flex items-center gap-3 border border-border/50">
                                            <div className="bg-primary/10 p-2 rounded-full text-primary">
                                                <Clock className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground font-medium uppercase">Horário</p>
                                                <p className="font-semibold text-sm">{selectedEventoModal.horario}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <h4 className="font-semibold text-lg flex items-center gap-2">
                                            Sobre o evento
                                        </h4>
                                        <div className="prose prose-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                                            {selectedEventoModal.descricao}
                                        </div>
                                    </div>

                                    <div className="flex gap-3 pt-4 border-t border-border">
                                        <Button variant="outline" className="flex-1" onClick={() => setSelectedEventoModal(null)}>
                                            Fechar
                                        </Button>
                                        <Button
                                            className="flex-[2] font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                                            onClick={() => redirectToWhatsApp(selectedEventoModal)}
                                        >
                                            Garantir minha vaga
                                        </Button>
                                    </div>
                                </div>
                            </>
                        )}
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </section>
    )
}