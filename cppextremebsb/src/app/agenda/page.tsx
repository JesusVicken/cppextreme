'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { format, isSameDay } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

// --- IMPORTAÇÃO DOS DADOS (Aqui está a mágica da limpeza) ---
// Certifique-se que o caminho '@/' está configurado no seu tsconfig.json
// Caso contrário, use: '../../constants/agenda-data'
import { allEvents, type Evento } from '@/constants/agenda-data'

import {
    Card,
    CardContent
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar as CalendarIcon, Clock, X, ChevronRight } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'

// Função auxiliar de redirecionamento (Pode ficar aqui ou em um arquivo utils)
const redirectToWhatsApp = (evento: Evento) => {
    const phoneNumber = '556198219177'
    const message = `Olá! Gostaria de mais informações sobre: ${evento.atividade} (${evento.dataDisplay} às ${evento.horario}). Como posso participar?`
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
}

export default function AgendaPage() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
    const [selectedEventoModal, setSelectedEventoModal] = useState<Evento | null>(null)

    // Filtra eventos baseado na data selecionada no calendário
    const filteredEvents = useMemo(() => {
        if (!selectedDate) return allEvents
        return allEvents.filter(ev => isSameDay(ev.dateObj, selectedDate))
    }, [selectedDate])

    // Mapeia os dias que têm eventos para destacar no calendário
    const daysWithEvents = useMemo(() => {
        return allEvents.map(ev => ev.dateObj)
    }, [])

    // Estilização customizada do DayPicker via CSS-in-JS para integrar com Tailwind
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

                {/* --- HEADER COM VÍDEO --- */}
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
                            Treinos diários e Experiências incríveis no Lago Paranoá.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* --- COLUNA 1: CALENDÁRIO (STICKY) --- */}
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
                                    // Força o calendário a abrir em Janeiro de 2026
                                    defaultMonth={new Date(2026, 0)}
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
                                        <X className="w-4 h-4 mr-2" /> Ver todos os eventos
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* --- COLUNA 2: LISTA DE EVENTOS --- */}
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

                        <div className="space-y-4">
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
                                                    {/* Imagem do Card */}
                                                    <div className="relative w-full sm:w-40 h-32 sm:h-auto shrink-0 overflow-hidden">
                                                        <Image
                                                            src={evento.imagem}
                                                            alt={evento.atividade}
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                        {/* Badge no canto da imagem (amarelo para Especial, senão não mostra no card para limpar o visual) */}
                                                        {evento.badge !== 'Treino' && (
                                                            <div className="absolute top-2 left-2">
                                                                <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white border-none shadow-md text-[10px]">
                                                                    {evento.badge}
                                                                </Badge>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Informações do Card */}
                                                    <CardContent className="flex-1 p-4 flex flex-col justify-center">
                                                        <div className="flex justify-between items-start mb-1">
                                                            <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                                                                <CalendarIcon className="w-3 h-3" />
                                                                {evento.dataDisplay}
                                                            </div>
                                                            {/* Badge de Rotina apenas para treinos */}
                                                            {evento.badge === 'Treino' && (
                                                                <Badge variant="outline" className="text-[10px] text-muted-foreground border-border">
                                                                    Rotina
                                                                </Badge>
                                                            )}
                                                        </div>

                                                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                                            {evento.atividade}
                                                        </h3>

                                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                                            <Clock className="w-4 h-4 text-primary" />
                                                            <span>{evento.horario}</span>
                                                        </div>

                                                        {/* Descrição curta (exceto treinos para economizar espaço) */}
                                                        {evento.badge !== 'Treino' && (
                                                            <p className="text-xs text-muted-foreground line-clamp-1">
                                                                {evento.descricao}
                                                            </p>
                                                        )}
                                                    </CardContent>

                                                    <div className="px-4 flex items-center justify-center border-l border-border/50">
                                                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                                    </div>
                                                </div>
                                            </Card>
                                        </motion.div>
                                    ))
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-center py-16 bg-muted/20 rounded-xl border border-dashed border-border"
                                    >
                                        <div className="bg-background w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                                            <CalendarIcon className="w-6 h-6 text-muted-foreground/50" />
                                        </div>
                                        <p className="text-muted-foreground">Nenhum evento encontrado para esta data.</p>
                                        <Button variant="link" onClick={() => setSelectedDate(undefined)} className="mt-2 text-primary">
                                            Ver programação completa
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MODAL (DIALOG) DE DETALHES --- */}
            <Dialog.Root open={!!selectedEventoModal} onOpenChange={(open) => !open && setSelectedEventoModal(null)}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 animate-in fade-in duration-300" />
                    <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-background p-0 shadow-2xl duration-200 sm:rounded-2xl overflow-hidden animate-in zoom-in-95 border border-border">
                        {selectedEventoModal && (
                            <>
                                <div className="relative h-56 w-full">
                                    <Image
                                        src={selectedEventoModal.imagem}
                                        alt={selectedEventoModal.atividade}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                    <Button variant="ghost" size="icon" className="absolute right-4 top-4 text-white hover:bg-white/20 rounded-full" onClick={() => setSelectedEventoModal(null)}>
                                        <X className="h-6 w-6" />
                                    </Button>
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <Badge className="mb-2 bg-primary text-white border-none shadow-lg">{selectedEventoModal.badge}</Badge>
                                        <h2 className="text-2xl font-bold text-white leading-tight">{selectedEventoModal.atividade}</h2>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-muted/50 p-3 rounded-lg flex items-center gap-3 border border-border/50">
                                            <CalendarIcon className="h-5 w-5 text-primary" />
                                            <div><p className="text-xs uppercase text-muted-foreground">Data</p><p className="font-semibold text-sm">{selectedEventoModal.dataDisplay}</p></div>
                                        </div>
                                        <div className="bg-muted/50 p-3 rounded-lg flex items-center gap-3 border border-border/50">
                                            <Clock className="h-5 w-5 text-primary" />
                                            <div><p className="text-xs uppercase text-muted-foreground">Horário</p><p className="font-semibold text-sm">{selectedEventoModal.horario}</p></div>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold mb-2 text-sm uppercase text-muted-foreground tracking-wide">Sobre</h4>
                                        <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
                                            {selectedEventoModal.descricao}
                                        </p>
                                    </div>

                                    <div className="flex gap-3 pt-4 border-t border-border">
                                        <Button variant="outline" className="flex-1" onClick={() => setSelectedEventoModal(null)}>Fechar</Button>
                                        <Button
                                            className="flex-[2] text-white font-semibold shadow-lg shadow-primary/20"
                                            onClick={() => redirectToWhatsApp(selectedEventoModal)}
                                        >
                                            {selectedEventoModal.badge === 'Treino' ? 'Agendar Aula Experimental' : 'Garantir minha vaga'}
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