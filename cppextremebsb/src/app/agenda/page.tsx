'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { format, isSameDay } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import { allEvents, type Evento } from '@/constants/agenda-data'

import {
    Card,
    CardContent
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar as CalendarIcon, Clock, X, ArrowRight, MapPin } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'

const redirectToWhatsApp = (evento: Evento) => {
    const phoneNumber = '556198219177'
    const message = `Olá! Gostaria de mais informações sobre: ${evento.atividade} (${evento.dataDisplay} às ${evento.horario}). Como posso participar?`
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
}

// Animação de container para os cards (stagger)
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export default function AgendaPage() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
    const [selectedEventoModal, setSelectedEventoModal] = useState<Evento | null>(null)

    // Filtra eventos
    const filteredEvents = useMemo(() => {
        if (!selectedDate) return allEvents
        return allEvents.filter(ev => isSameDay(ev.dateObj, selectedDate))
    }, [selectedDate])

    // Dias com eventos para o calendário
    const daysWithEvents = useMemo(() => allEvents.map(ev => ev.dateObj), [])

    // CSS Customizado do DayPicker (Ainda mais moderno)
    const css = `
        .rdp { 
            --rdp-cell-size: 44px; /* Maior para toque em mobile/tablet */
            --rdp-accent-color: hsl(var(--primary)); 
            --rdp-background-color: hsl(var(--primary) / 0.15); 
            margin: 0; 
        }
        .rdp-month { width: 100%; }
        .rdp-table { max-width: 100%; width: 100%; }
        .rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]) { 
            background-color: hsl(var(--primary)); 
            color: white; 
            font-weight: bold;
            box-shadow: 0 4px 12px hsl(var(--primary) / 0.3);
        }
        .rdp-button:hover:not([disabled]):not(.rdp-day_selected) { 
            background-color: hsl(var(--secondary)); 
            color: hsl(var(--primary));
        }
        .rdp-head_cell { 
            color: hsl(var(--muted-foreground)); 
            font-weight: 600; 
            font-size: 0.9rem; 
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        .rdp-caption_label { 
            font-size: 1.1rem; 
            font-weight: 800; 
            color: hsl(var(--foreground)); 
            text-transform: capitalize;
        }
        .rdp-nav_button { color: hsl(var(--foreground)); opacity: 0.7; }
        .rdp-nav_button:hover { opacity: 1; background-color: transparent; }
    `

    return (
        <section className="min-h-screen py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <style>{css}</style>

            <div className="container mx-auto px-4 md:px-6 lg:px-8">

                {/* --- HEADER COM VÍDEO (Hero Section) --- */}
                <div className="relative rounded-[2.5rem] overflow-hidden mb-12 lg:mb-20 shadow-2xl h-[400px] lg:h-[500px] group">
                    <video
                        src="/lua.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    {/* Overlay Gradiente Moderno */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 flex flex-col items-center justify-center text-center p-6 md:p-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl space-y-6"
                        >
                            <Badge className="bg-white/10 backdrop-blur-md text-white border-white/20 px-4 py-1.5 text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                                Calendário Oficial 2026
                            </Badge>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
                                VIVA O <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">EXTRAORDINÁRIO</span>
                            </h1>
                            <p className="text-gray-200 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                                De treinos diários a expedições inesquecíveis. Encontre seu próximo desafio nas águas de Brasília.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-8 lg:gap-16 items-start">

                    {/* --- COLUNA 1: CALENDÁRIO (Sticky & Moderno) --- */}
                    <motion.div
                        className="w-full xl:w-[420px] xl:flex-shrink-0"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="xl:sticky xl:top-28 bg-white dark:bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-800 p-6 md:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                                    <CalendarIcon className="w-5 h-5 text-blue-600" />
                                    Filtrar por Data
                                </h3>
                                {selectedDate && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 h-8 px-2 text-xs"
                                        onClick={() => setSelectedDate(undefined)}
                                    >
                                        Limpar
                                    </Button>
                                )}
                            </div>

                            <div className="flex justify-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-2 border border-slate-100 dark:border-slate-800">
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
                                    defaultMonth={new Date(2026, 0)}
                                    disabled={[{ before: new Date(2026, 0, 1) }, { after: new Date(2026, 11, 31) }]}
                                />
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-sm shadow-blue-600/50" />
                                        <span className="font-medium">Selecionado</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full border-2 border-slate-300 dark:border-slate-600" />
                                        <span>Dias disponíveis</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- COLUNA 2: LISTA DE EVENTOS --- */}
                    <div className="flex-1 w-full min-h-[500px]">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                                    {selectedDate ? (
                                        <>Eventos em <span className="text-blue-600">{format(selectedDate, "dd 'de' MMMM", { locale: ptBR })}</span></>
                                    ) : (
                                        'Próximos Eventos'
                                    )}
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 mt-1">
                                    {selectedDate
                                        ? `Confira o que preparamos para este dia.`
                                        : `Explore nossa agenda completa para 2026.`}
                                </p>
                            </div>
                            <Badge variant="outline" className="w-fit px-4 py-2 text-sm border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 shadow-sm">
                                {filteredEvents.length} {filteredEvents.length === 1 ? 'evento encontrado' : 'eventos encontrados'}
                            </Badge>
                        </div>

                        <motion.div
                            className="space-y-5"
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                            key={selectedDate ? selectedDate.toISOString() : 'all'} // Reinicia animação ao filtrar
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredEvents.length > 0 ? (
                                    filteredEvents.map((evento) => (
                                        <motion.div
                                            key={evento.id}
                                            layout
                                            variants={itemVariants}
                                            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                                        >
                                            <Card
                                                className="group relative overflow-hidden border-0 bg-white dark:bg-slate-900 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer ring-1 ring-slate-100 dark:ring-slate-800"
                                                onClick={() => setSelectedEventoModal(evento)}
                                            >
                                                <div className="flex flex-col md:flex-row h-full">

                                                    {/* Imagem do Card */}
                                                    <div className="relative w-full md:w-64 h-48 md:h-auto md:min-h-[180px] shrink-0 overflow-hidden">
                                                        <Image
                                                            src={evento.imagem}
                                                            alt={evento.atividade}
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />

                                                        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                                                            {/* Data em destaque na imagem mobile */}
                                                            <div className="md:hidden bg-white/90 backdrop-blur rounded-lg px-3 py-1 text-xs font-bold text-slate-900 shadow-lg">
                                                                {evento.dataDisplay}
                                                            </div>
                                                            {evento.badge !== 'Treino' && (
                                                                <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-lg text-[10px] uppercase tracking-wide w-fit">
                                                                    {evento.badge}
                                                                </Badge>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Conteúdo do Card */}
                                                    <CardContent className="flex-1 p-6 flex flex-col justify-center relative">
                                                        <div className="hidden md:flex items-center gap-2 mb-2 text-xs font-bold text-blue-600 uppercase tracking-widest">
                                                            <CalendarIcon className="w-3.5 h-3.5" />
                                                            {evento.dataDisplay}
                                                        </div>

                                                        <div className="flex items-start justify-between gap-4">
                                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors line-clamp-1 leading-tight">
                                                                {evento.atividade}
                                                            </h3>
                                                            {/* Seta mobile */}
                                                            <div className="md:hidden text-slate-300">
                                                                <ArrowRight className="w-5 h-5" />
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                                                            <Clock className="w-4 h-4 text-blue-500" />
                                                            <span>{evento.horario}</span>
                                                            {evento.badge === 'Treino' && (
                                                                <span className="inline-block w-1 h-1 rounded-full bg-slate-300 mx-1" />
                                                            )}
                                                            {evento.badge === 'Treino' && <span>Rotina</span>}
                                                        </div>

                                                        {evento.badge !== 'Treino' && (
                                                            <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                                                                {evento.descricao}
                                                            </p>
                                                        )}

                                                        {/* Botão Desktop (aparece no hover do card pai via CSS ou sempre visível mas sutil) */}
                                                        <div className="hidden md:flex items-center gap-2 mt-4 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                                            Ver detalhes <ArrowRight className="w-4 h-4" />
                                                        </div>
                                                    </CardContent>
                                                </div>
                                            </Card>
                                        </motion.div>
                                    ))
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-24 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800"
                                    >
                                        <div className="bg-slate-50 dark:bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                                            <CalendarIcon className="w-10 h-10 text-slate-300 dark:text-slate-600" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Dia livre!</h3>
                                        <p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto mb-6">
                                            Nenhum evento programado para esta data específica.
                                        </p>
                                        <Button
                                            variant="outline"
                                            onClick={() => setSelectedDate(undefined)}
                                            className="border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all"
                                        >
                                            Ver agenda completa
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- MODAL (DIALOG) DE DETALHES --- */}
            <Dialog.Root open={!!selectedEventoModal} onOpenChange={(open) => !open && setSelectedEventoModal(null)}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300" />
                    <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-white dark:bg-slate-950 p-0 shadow-2xl duration-300 sm:rounded-3xl overflow-hidden animate-in zoom-in-95 border border-slate-100 dark:border-slate-800">
                        {selectedEventoModal && (
                            <>
                                <div className="relative h-64 md:h-72 w-full group">
                                    <Image
                                        src={selectedEventoModal.imagem}
                                        alt={selectedEventoModal.atividade}
                                        fill
                                        className="object-cover transition-transform duration-[10s] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute right-4 top-4 text-white/80 hover:text-white hover:bg-white/20 rounded-full backdrop-blur-sm transition-all"
                                        onClick={() => setSelectedEventoModal(null)}
                                    >
                                        <X className="h-6 w-6" />
                                    </Button>

                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                        <div className="flex items-center gap-3 mb-3">
                                            <Badge className="bg-blue-600 text-white border-none px-3 py-1 text-xs shadow-lg">
                                                {selectedEventoModal.badge}
                                            </Badge>
                                            <span className="text-white/80 text-sm font-medium flex items-center gap-1.5 backdrop-blur-sm bg-black/20 px-2 py-0.5 rounded-full">
                                                <CalendarIcon className="w-3.5 h-3.5" />
                                                {selectedEventoModal.dataDisplay}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-md">
                                            {selectedEventoModal.atividade}
                                        </h2>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 space-y-8">
                                    {/* Info Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl flex items-center gap-4 border border-slate-100 dark:border-slate-800">
                                            <div className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-xl text-blue-600 dark:text-blue-400">
                                                <CalendarIcon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Data</p>
                                                <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">{selectedEventoModal.dataDisplay}</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl flex items-center gap-4 border border-slate-100 dark:border-slate-800">
                                            <div className="bg-purple-100 dark:bg-purple-900/30 p-2.5 rounded-xl text-purple-600 dark:text-purple-400">
                                                <Clock className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Horário</p>
                                                <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">{selectedEventoModal.horario}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Descrição */}
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-3 text-lg flex items-center gap-2">
                                            Sobre o evento
                                        </h4>
                                        <div className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base whitespace-pre-line bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800/50">
                                            {selectedEventoModal.descricao}
                                        </div>
                                    </div>

                                    {/* Ações */}
                                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                        <Button
                                            variant="outline"
                                            className="flex-1 h-12 rounded-xl border-slate-200 hover:bg-slate-50 text-slate-600"
                                            onClick={() => setSelectedEventoModal(null)}
                                        >
                                            Fechar
                                        </Button>
                                        <Button
                                            className="flex-[2] h-12 rounded-xl text-white font-bold text-base bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                                            onClick={() => redirectToWhatsApp(selectedEventoModal)}
                                        >
                                            {selectedEventoModal.badge === 'Treino' ? 'Agendar Aula Experimental' : 'Garantir minha vaga'}
                                            <ArrowRight className="w-5 h-5 ml-2" />
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