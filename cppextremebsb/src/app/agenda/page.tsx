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
import { Calendar as CalendarIcon, Clock, X, ArrowRight, MousePointerClick } from 'lucide-react'
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
            staggerChildren: 0.05
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
}

export default function AgendaPage() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
    const [selectedEventoModal, setSelectedEventoModal] = useState<Evento | null>(null)

    const filteredEvents = useMemo(() => {
        if (!selectedDate) return []
        return allEvents.filter(ev => isSameDay(ev.dateObj, selectedDate))
    }, [selectedDate])

    // Dias com eventos para o calendário (apenas datas para marcação visual)
    const daysWithEvents = useMemo(() => allEvents.map(ev => ev.dateObj), [])

    // CSS Customizado do DayPicker (Preto e Branco)
    const css = `
        .rdp { 
            --rdp-cell-size: 44px; 
            --rdp-accent-color: #000000; /* Preto */
            --rdp-background-color: rgba(0,0,0,0.05); /* Cinza bem claro */
            margin: 0; 
        }
        .rdp-month { width: 100%; }
        .rdp-table { max-width: 100%; width: 100%; }
        
        /* Estado Selecionado - Preto Sólido */
        .rdp-day_selected:not([disabled]), .rdp-day_selected:focus:not([disabled]), .rdp-day_selected:active:not([disabled]), .rdp-day_selected:hover:not([disabled]) { 
            background-color: black; 
            color: white; 
            font-weight: bold;
            box-shadow: 0 4px 12px rgba(0,0,0, 0.3);
            border-radius: 8px;
        }

        /* Hover no dia */
        .rdp-button:hover:not([disabled]):not(.rdp-day_selected) { 
            background-color: #f1f5f9; /* slate-100 */
            color: black;
            border-radius: 8px;
        }

        /* Cabeçalho dos dias (SEG, TER...) */
        .rdp-head_cell { 
            color: #64748b; /* slate-500 */
            font-weight: 700; 
            font-size: 0.85rem; 
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        /* Mês e Ano */
        .rdp-caption_label { 
            font-size: 1.2rem; 
            font-weight: 900; 
            color: black; 
            text-transform: uppercase;
        }
        .rdp-nav_button { color: black; opacity: 0.7; }
        .rdp-nav_button:hover { opacity: 1; background-color: transparent; }
    `

    return (
        // Mudei o background base para branco/preto puro em vez de slate-50/950
        <section className="min-h-screen py-20 lg:py-28 bg-white dark:bg-black transition-colors duration-300">
            <style>{css}</style>

            <div className="container mx-auto px-4 md:px-6 lg:px-8">

                {/* --- HEADER COM IMAGEM ESTÁTICA (BANNER CPP) --- */}
                {/* Altura ajustada para acomodar melhor a imagem vertical */}
                <div className="relative rounded-[2rem] overflow-hidden mb-12 lg:mb-20 shadow-2xl h-[450px] lg:h-[550px] group bg-black">
                    <Image
                        src="/canoa6.jpg" // Nova imagem
                        alt="Banner CPP Extreme"
                        fill
                        // object-cover e object-center garantem que a imagem preencha o espaço sem distorcer, focando no meio.
                        className="object-cover object-center transition-transform duration-[2s] group-hover:scale-105 opacity-90"
                        priority
                    />
                    {/* Overlay Gradiente Preto */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col items-center justify-center text-center p-6 md:p-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl space-y-6"
                        >
                            <Badge className="bg-white text-black border-none px-4 py-1.5 text-xs md:text-sm font-extrabold tracking-widest uppercase mb-4">
                                Calendário Oficial 2026
                            </Badge>
                            <h1 className="text-4xl md:text-6xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-lg">
                                CPP EXTREME<span className="text-white underline decoration-4 underline-offset-4 decoration-white/30">BSB</span>
                            </h1>
                            
                        </motion.div>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-8 lg:gap-16 items-start">

                    {/* --- COLUNA 1: CALENDÁRIO --- */}
                    <motion.div
                        className="w-full xl:w-[420px] xl:flex-shrink-0"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="xl:sticky xl:top-28 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-zinc-800 p-6 md:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-black text-black dark:text-white flex items-center gap-2 uppercase tracking-tight">
                                    <CalendarIcon className="w-6 h-6 text-black dark:text-white" />
                                    Filtrar por Data
                                </h3>
                                {selectedDate && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        // Botão Limpar agora é cinza/preto
                                        className="text-slate-500 hover:text-black hover:bg-slate-100 dark:hover:bg-zinc-800 dark:text-slate-400 dark:hover:text-white h-8 px-3 text-xs font-bold uppercase"
                                        onClick={() => setSelectedDate(undefined)}
                                    >
                                        Limpar
                                    </Button>
                                )}
                            </div>

                            <div className="flex justify-center bg-slate-50 dark:bg-zinc-950 rounded-2xl p-4 border border-slate-200 dark:border-zinc-800">
                                <DayPicker
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={setSelectedDate}
                                    locale={ptBR}
                                    modifiers={{ hasEvent: daysWithEvents }}
                                    modifiersStyles={{
                                        hasEvent: {
                                            fontWeight: '900',
                                            textDecoration: 'underline',
                                            textDecorationColor: 'black', // Sublinhado preto
                                            textUnderlineOffset: '4px'
                                        }
                                    }}
                                    defaultMonth={new Date(2026, 0)}
                                    disabled={[{ before: new Date(2026, 0, 1) }, { after: new Date(2026, 11, 31) }]}
                                />
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-zinc-800">
                                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 font-medium justify-center">
                                    <div className="flex items-center gap-2">
                                        {/* Bolinha preta */}
                                        <span className="w-3 h-3 rounded-full bg-black dark:bg-white shadow-sm" />
                                        <span>Selecionado</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full border-2 border-slate-300 dark:border-zinc-600" />
                                        <span>Dias disponíveis</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- COLUNA 2: LISTA DE EVENTOS --- */}
                    <div className="flex-1 w-full min-h-[500px]">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-slate-100 dark:border-zinc-800 pb-6">
                            <div>
                                <h2 className="text-3xl font-black text-black dark:text-white tracking-tight uppercase">
                                    {selectedDate ? (
                                        // Destaque da data em preto
                                        <>Eventos em <span className="text-black dark:text-white underline decoration-4 decoration-slate-300">{format(selectedDate, "dd 'de' MMMM", { locale: ptBR })}</span></>
                                    ) : (
                                        'Agenda de Treinos'
                                    )}
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 mt-2 font-medium">
                                    {selectedDate
                                        ? `Confira a programação detalhada para este dia.`
                                        : `Selecione um dia no calendário para ver a programação.`}
                                </p>
                            </div>
                            {selectedDate && (
                                // Badge monocromático
                                <Badge variant="outline" className="w-fit px-4 py-2 text-sm font-bold border-2 border-black text-black bg-white dark:bg-black dark:text-white dark:border-white shadow-sm">
                                    {filteredEvents.length} {filteredEvents.length === 1 ? 'evento' : 'eventos'}
                                </Badge>
                            )}
                        </div>

                        {/* ANIMAÇÃO DE TROCA DE CONTEÚDO */}
                        <AnimatePresence mode="wait">
                            {!selectedDate ? (
                                // ESTADO 1: NENHUMA DATA SELECIONADA
                                <motion.div
                                    key="instruction"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col items-center justify-center py-24 bg-slate-50/50 dark:bg-zinc-900/50 rounded-3xl border-2 border-dashed border-slate-300 dark:border-zinc-700 text-center"
                                >
                                    <div className="bg-white dark:bg-zinc-800 p-6 rounded-full mb-6 animate-pulse shadow-md border border-slate-100 dark:border-zinc-700">
                                        {/* Ícone preto */}
                                        <MousePointerClick className="w-10 h-10 text-black dark:text-white" />
                                    </div>
                                    <h3 className="text-xl font-black text-black dark:text-white mb-2 uppercase">
                                        Comece selecionando uma data
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 max-w-sm font-medium">
                                        Clique nos dias sublinhados no calendário ao lado para visualizar a agenda.
                                    </p>
                                </motion.div>

                            ) : filteredEvents.length === 0 ? (
                                // ESTADO 2: DATA SELECIONADA, MAS SEM EVENTOS
                                <motion.div
                                    key="empty"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="flex flex-col items-center justify-center py-24 bg-white dark:bg-zinc-900 rounded-3xl border border-slate-200 dark:border-zinc-800 text-center"
                                >
                                    <div className="bg-slate-100 dark:bg-zinc-800 p-6 rounded-full mb-6">
                                        <CalendarIcon className="w-10 h-10 text-slate-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">Dia Livre!</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                                        Nenhum evento da CPP programado para esta data.
                                    </p>
                                    <Button variant="outline" onClick={() => setSelectedDate(undefined)} className="border-2 border-slate-300 font-bold hover:bg-slate-100 text-black">
                                        Escolher outra data
                                    </Button>
                                </motion.div>

                            ) : (
                                // ESTADO 3: LISTA DE EVENTOS (Monocromática)
                                <motion.div
                                    key="list"
                                    className="space-y-5"
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                >
                                    {filteredEvents.map((evento) => (
                                        <motion.div
                                            key={evento.id}
                                            layout
                                            variants={itemVariants}
                                        >
                                            <Card
                                                className="group relative overflow-hidden border-0 bg-white dark:bg-zinc-900 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ring-1 ring-slate-200 dark:ring-zinc-800"
                                                onClick={() => setSelectedEventoModal(evento)}
                                            >
                                                <div className="flex flex-col md:flex-row h-full">

                                                    {/* Imagem do Card */}
                                                    <div className="relative w-full md:w-64 h-48 md:h-auto md:min-h-[180px] shrink-0 overflow-hidden">
                                                        <Image
                                                            src={evento.imagem}
                                                            alt={evento.atividade}
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale" // Adicionei grayscale para forçar P&B nas fotos dos cards se desejar, remova se quiser as fotos coloridas.
                                                        />
                                                        {/* Gradiente preto */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:bg-gradient-to-r" />

                                                        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                                                            <div className="md:hidden bg-white rounded-lg px-3 py-1 text-xs font-black text-black shadow-lg">
                                                                {evento.dataDisplay}
                                                            </div>
                                                            {evento.badge !== 'Treino' && (
                                                                // Badge Preto Sólido
                                                                <Badge className="bg-black text-white border-none shadow-lg text-[10px] font-bold uppercase tracking-wide w-fit">
                                                                    {evento.badge}
                                                                </Badge>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Conteúdo do Card */}
                                                    <CardContent className="flex-1 p-6 flex flex-col justify-center relative">
                                                        {/* Data em preto */}
                                                        <div className="hidden md:flex items-center gap-2 mb-2 text-xs font-black text-black dark:text-white uppercase tracking-widest">
                                                            <CalendarIcon className="w-3.5 h-3.5" />
                                                            {evento.dataDisplay}
                                                        </div>

                                                        <div className="flex items-start justify-between gap-4">
                                                            {/* Título em preto, sem hover azul */}
                                                            <h3 className="text-xl font-black text-black dark:text-white mb-2 transition-colors line-clamp-1 leading-tight uppercase">
                                                                {evento.atividade}
                                                            </h3>
                                                            <div className="md:hidden text-black dark:text-white">
                                                                <ArrowRight className="w-5 h-5" />
                                                            </div>
                                                        </div>

                                                        {/* Ícones e texto em cinza escuro/preto */}
                                                        <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300 mb-4">
                                                            <Clock className="w-4 h-4 text-black dark:text-white" />
                                                            <span>{evento.horario}</span>
                                                            {evento.badge === 'Treino' && (
                                                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400 mx-2" />
                                                            )}
                                                            {evento.badge === 'Treino' && <span className="uppercase text-xs tracking-wider text-slate-500">Rotina</span>}
                                                        </div>

                                                        {evento.badge !== 'Treino' && (
                                                            <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed font-medium">
                                                                {evento.descricao}
                                                            </p>
                                                        )}

                                                        {/* Botão "Ver detalhes" em preto */}
                                                        <div className="hidden md:flex items-center gap-2 mt-4 text-sm font-bold text-black dark:text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 uppercase tracking-wider">
                                                            Ver detalhes <ArrowRight className="w-4 h-4" />
                                                        </div>
                                                    </CardContent>
                                                </div>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* --- MODAL (DIALOG) DE DETALHES P&B --- */}
            <Dialog.Root open={!!selectedEventoModal} onOpenChange={(open) => !open && setSelectedEventoModal(null)}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-in fade-in duration-300" />
                    <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] bg-white dark:bg-zinc-950 p-0 shadow-2xl duration-300 sm:rounded-3xl overflow-hidden animate-in zoom-in-95 border border-slate-100 dark:border-zinc-800">
                        {selectedEventoModal && (
                            <>
                                <div className="relative h-64 md:h-72 w-full group">
                                    <Image
                                        src={selectedEventoModal.imagem}
                                        alt={selectedEventoModal.atividade}
                                        fill
                                        className="object-cover transition-transform duration-[10s] group-hover:scale-110 grayscale" // Grayscale no modal também
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                    <Button variant="ghost" size="icon" className="absolute right-4 top-4 text-white/80 hover:text-white hover:bg-black/50 rounded-full backdrop-blur-sm transition-all" onClick={() => setSelectedEventoModal(null)}>
                                        <X className="h-6 w-6" />
                                    </Button>

                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                        <div className="flex items-center gap-3 mb-3">
                                            {/* Badge Preta */}
                                            <Badge className="bg-black text-white border-none px-3 py-1 text-xs font-bold uppercase shadow-lg">{selectedEventoModal.badge}</Badge>
                                            <span className="text-white font-bold text-sm flex items-center gap-1.5 backdrop-blur-md bg-black/30 px-3 py-1 rounded-full">
                                                <CalendarIcon className="w-3.5 h-3.5" />
                                                {selectedEventoModal.dataDisplay}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-md uppercase">
                                            {selectedEventoModal.atividade}
                                        </h2>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 space-y-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        {/* Ícones P&B no Grid */}
                                        <div className="bg-slate-50 dark:bg-zinc-900 p-4 rounded-2xl flex items-center gap-4 border border-slate-100 dark:border-zinc-800">
                                            <div className="bg-white dark:bg-zinc-800 p-3 rounded-xl text-black dark:text-white border border-slate-200 dark:border-zinc-700 shadow-sm">
                                                <CalendarIcon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Data</p>
                                                <p className="font-black text-black dark:text-white text-sm">{selectedEventoModal.dataDisplay}</p>
                                            </div>
                                        </div>
                                        <div className="bg-slate-50 dark:bg-zinc-900 p-4 rounded-2xl flex items-center gap-4 border border-slate-100 dark:border-zinc-800">
                                            <div className="bg-white dark:bg-zinc-800 p-3 rounded-xl text-black dark:text-white border border-slate-200 dark:border-zinc-700 shadow-sm">
                                                <Clock className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Horário</p>
                                                <p className="font-black text-black dark:text-white text-sm">{selectedEventoModal.horario}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-black text-black dark:text-white mb-3 text-lg flex items-center gap-2 uppercase">Sobre o evento</h4>
                                        <div className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-sm md:text-base whitespace-pre-line bg-slate-50 dark:bg-zinc-900/50 p-5 rounded-2xl border border-slate-100 dark:border-zinc-800">
                                            {selectedEventoModal.descricao}
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                        <Button variant="outline" className="flex-1 h-12 rounded-xl border-2 border-slate-300 hover:bg-slate-100 text-black font-bold uppercase" onClick={() => setSelectedEventoModal(null)}>Fechar</Button>
                                        {/* Botão de Ação Preto */}
                                        <Button className="flex-[2] h-12 rounded-xl text-white font-black text-base bg-black hover:bg-zinc-800 shadow-lg shadow-black/20 transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide" onClick={() => redirectToWhatsApp(selectedEventoModal)}>
                                            {selectedEventoModal.badge === 'Treino' ? 'Agendar Aula' : 'Garantir Vaga'}
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