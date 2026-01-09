'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Calendar, ChevronRight, MessageCircle, MapPin } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'
import AOS from 'aos'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const weeklySchedule = [
    {
        day: "Segunda-feira",
        description: "Remada Regular",
        schedules: ["06:00", "07:30", "12:15", "16:00", "17:40"],
        linkText: "Olá, gostaria de agendar uma aula na Segunda-feira"
    },
    {
        day: "Terça-feira",
        description: "Remada Regular",
        schedules: ["06:00", "07:30", "16:00", "17:40"],
        linkText: "Olá, gostaria de agendar uma aula na Terça-feira"
    },
    {
        day: "Quarta-feira",
        description: "Remada Regular",
        schedules: ["06:00", "07:30", "12:15", "16:00", "17:40"],
        linkText: "Olá, gostaria de agendar uma aula na Quarta-feira"
    },
    {
        day: "Quinta-feira",
        description: "Remada Regular",
        schedules: ["06:00", "07:30", "16:00", "17:40"],
        linkText: "Olá, gostaria de agendar uma aula na Quinta-feira"
    },
    {
        day: "Sexta-feira",
        description: "Remada Regular",
        schedules: ["06:00", "07:30", "12:15", "16:00", "17:40"],
        linkText: "Olá, gostaria de agendar uma aula na Sexta-feira"
    },
    {
        day: "Sábado",
        description: "Remada Regular",
        schedules: ["07:20", "09:40"],
        linkText: "Olá, gostaria de agendar uma aula no Sábado"
    }
]

// Número corrigido para redirecionamento
const WHATSAPP_NUMBER = '556198219177'

export default function SchedulesPage() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out-cubic'
        })
    }, [])

    return (
        <main className="min-h-screen bg-neutral-50 pb-20">

            {/* --- HERO BANNER --- */}
            {/* Ajuste de altura para valorizar imagem 1600x900 */}
            <section className="relative h-[50vh] min-h-[400px] md:h-[600px] w-full flex items-center justify-center overflow-hidden bg-zinc-950">

                {/* Background Image com Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bannerHorarios.jpeg"
                        alt="Banner Horários CPP Extreme"
                        fill
                        className="object-cover opacity-60" // Opacidade ajustada para o texto branco sobressair
                        priority
                        quality={100}
                    />
                </div>

                {/* Gradiente para garantir leitura do texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-0" />

                {/* Conteúdo do Banner */}
                <div className="relative z-10 container mx-auto px-4 text-center mt-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        {/* Logos */}
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-20 h-20 md:w-24 md:h-24 relative bg-white/5 rounded-full p-2 backdrop-blur-md border border-white/10 shadow-2xl">
                                <Image
                                    src="/logo3.png"
                                    alt="Logo CPP Extreme Símbolo"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <div className="h-16 w-px bg-white/20" />
                            <div className="w-32 h-16 relative opacity-100">
                                <Image
                                    src="/logocpp.png"
                                    alt="Logo CPP Texto"
                                    fill
                                    className="object-contain filter brightness-0 invert" // Garante que a logo fique branca
                                />
                            </div>
                        </div>

                        <Badge variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-md mb-6 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em]">
                            Grade Semanal
                        </Badge>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter drop-shadow-lg">
                            HORÁRIOS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500 pr-2">TURMAS</span>
                        </h1>

                        <div className="flex items-center gap-2 text-zinc-300 text-sm md:text-base font-light bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                            <MapPin className="w-4 h-4" />
                            Clube ASCADE - Lago Paranoá
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- LISTA DE HORÁRIOS --- */}
            <section className="container mx-auto px-4 -mt-24 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {weeklySchedule.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full border-zinc-200 hover:border-zinc-900 hover:shadow-2xl transition-all duration-300 group bg-white overflow-hidden">
                                <CardHeader className="pb-4 border-b border-zinc-100 bg-zinc-50/50">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-2xl font-black text-zinc-900 mb-1 uppercase tracking-tight">
                                                {item.day}
                                            </CardTitle>
                                            <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                                                <Calendar className="w-3 h-3" />
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="bg-white border border-zinc-200 p-2 rounded-xl group-hover:bg-zinc-900 group-hover:border-zinc-900 group-hover:text-white transition-colors shadow-sm">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <div className="grid grid-cols-3 gap-2 mb-8">
                                        {item.schedules.map((time, idx) => (
                                            <div
                                                key={idx}
                                                className="bg-zinc-50 border border-zinc-200 rounded-lg py-2.5 px-1 text-center text-sm font-bold text-zinc-700 group-hover:border-zinc-300 transition-colors cursor-default"
                                            >
                                                {time}
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(item.linkText)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full block"
                                    >
                                        <Button className="w-full bg-zinc-900 hover:bg-black text-white font-bold h-12 rounded-xl shadow-lg shadow-zinc-900/10 hover:shadow-zinc-900/30 transition-all flex items-center justify-between px-6 group/btn">
                                            <span className="flex items-center gap-2">
                                                <WhatsappLogo className="w-5 h-5" weight="fill" />
                                                Agendar Aula
                                            </span>
                                            <ChevronRight className="w-4 h-4 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* --- CARD INFORMATIVO EXTRA --- */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 mb-12"
                >
                    {/* Removido 'bg-zinc-900' e adicionado a estrutura de imagem de fundo */}
                    <div className="rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl">

                        {/* 1. Imagem de Fundo */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/cppgopro.jpg"
                                alt="Turma CPP Extreme na Canoa"
                                fill
                                className="object-cover"
                                quality={90}
                            />
                        </div>

                        {/* 2. Overlay Escuro para garantir leitura do texto branco */}
                        {/* Ajuste a opacidade (ex: bg-black/60 ou bg-black/80) conforme a necessidade */}
                        <div className="absolute inset-0 bg-black/70 z-0" />

                        {/* Conteúdo (z-10 para ficar acima da imagem e do overlay) */}
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white mb-6 backdrop-blur-sm border border-white/20">
                                <MessageCircle className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                                Qual é a turma ideal para você?
                            </h3>
                            <p className="text-zinc-300 mb-8 max-w-lg text-lg leading-relaxed font-medium">
                                Nossos instrutores avaliam seu nível técnico e condicionamento para indicar a melhor turma. Comece do jeito certo.
                            </p>
                            <Link href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank">
                                <Button variant="outline" className="h-12 px-8 rounded-xl border-white/20 bg-white/10 text-white hover:bg-white hover:text-zinc-900 font-bold tracking-wide transition-all uppercase text-sm backdrop-blur-sm">
                                    Falar com um Instrutor
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    )
}