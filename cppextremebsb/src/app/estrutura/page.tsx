'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    ParkingCircle,
    ShowerHead,
    Lock,
    MapPin,
    Utensils,
    Ship,
    AlarmClock,
    Handshake,
    GraduationCap,
    ArrowUpRight,
} from 'lucide-react'
import { motion } from 'framer-motion'

// Dados da estrutura
const estruturaData = [
    {
        icon: MapPin,
        title: 'Localização Privilegiada',
        description: 'Base localizada no Clube ASCADE, com acesso fácil, seguro e de frente para o lago.',
    },
    {
        icon: ParkingCircle,
        title: 'Estacionamento',
        description: 'Estacionamento interno e seguro disponível dentro do clube para sua tranquilidade.',
    },
    {
        icon: ShowerHead,
        title: 'Vestiários Completos',
        description: 'Estrutura com chuveiros quentes para você se refrescar e se arrumar após a remada.',
    },
    {
        icon: Lock,
        title: 'Guarda-volumes',
        description: 'Sala dedicada e segura para você deixar seus pertences enquanto treina.',
    },
    {
        icon: Utensils,
        title: 'Restaurante e Lanchonete',
        description: 'Recarregue as energias com opções de almoço e lanches dentro do próprio clube.',
    },
    {
        icon: Ship,
        title: 'Equipamentos de Ponta',
        description: 'Canoas, remos e coletes de alta performance e revisados constantemente.',
    },
    {
        icon: AlarmClock,
        title: 'Horários Flexíveis',
        description: 'Diversas opções de turmas pela manhã e noite para encaixar na sua rotina.',
        href: '/horarios', // Card Clicável
    },
    {
        icon: Handshake,
        title: 'Conexão com a Natureza',
        description: 'O contato direto com o Lago Paranoá proporciona bem-estar mental e físico.',
    },
    {
        icon: GraduationCap,
        title: 'Instrutores Especializados',
        description: 'Profissionais experientes prontos para guiar sua evolução com técnica e segurança.',
    },
]

export default function EstruturaClubeCompleta() {
    return (
        <section className="bg-white py-20 md:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-20">

                {/* --- HEADER DA SEÇÃO --- */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Badge variant="outline" className="mb-4 border-zinc-900 text-zinc-900 px-3 py-1 text-xs uppercase tracking-widest font-bold">
                            Estrutura Completa
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tight leading-tight mb-6">
                            Tudo pensado para a sua <span className="text-zinc-500">melhor performance.</span>
                        </h2>
                        <p className="text-lg text-zinc-600 leading-relaxed max-w-lg">
                            Nossa base no Clube ASCADE oferece a combinação perfeita entre segurança, conforto e contato com a natureza.
                        </p>
                    </motion.div>

                    {/* Imagem de Destaque */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[300px] lg:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/ascade.jpg"
                            alt="Clube ASCADE - Local das remadas"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            quality={90}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="font-bold text-lg">Clube ASCADE</p>
                            <p className="text-sm text-zinc-300">Sede Oficial CPP Extreme</p>
                        </div>
                    </motion.div>
                </div>

                {/* --- GRID DE CARDS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {estruturaData.map((item, index) => {
                        const Icon = item.icon
                        const isClickable = !!item.href

                        const CardContentInner = (
                            <Card className={`
                                h-full border transition-all duration-300 relative overflow-hidden group
                                ${isClickable
                                    ? 'bg-zinc-900 border-zinc-900 text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl'
                                    : 'bg-white border-zinc-200 hover:border-zinc-400 hover:shadow-lg'
                                }
                            `}>
                                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                                    <div className={`
                                        p-3 rounded-xl transition-colors
                                        ${isClickable ? 'bg-white/10 text-white' : 'bg-zinc-100 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white'}
                                    `}>
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className={`text-xl font-bold leading-tight ${isClickable ? 'text-white' : 'text-zinc-900'}`}>
                                            {item.title}
                                        </CardTitle>
                                    </div>
                                    {/* Indicador visual de link */}
                                    {isClickable && (
                                        <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-zinc-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    )}
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className={`text-base leading-relaxed ${isClickable ? 'text-zinc-400' : 'text-zinc-600'}`}>
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        )

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                {isClickable ? (
                                    <Link href={item.href!} className="block h-full cursor-pointer">
                                        {CardContentInner}
                                    </Link>
                                ) : (
                                    CardContentInner
                                )}
                            </motion.div>
                        )
                    })}
                </div>

                {/* --- MAPA --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full rounded-3xl overflow-hidden shadow-sm border border-zinc-200 h-[300px] md:h-[450px]"
                >
                    <iframe
                        title="Localização CPP Extreme"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.297405626388!2d-47.85451242499684!3d-15.818687484823482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a25c82d57ad6d%3A0xf59dbb7e8c7889a9!2sCpp%20Extremo!5e0!3m2!1spt-BR!2sbr!4v1709666000000!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }} // Filtro removido para exibir cores originais
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>
            </div>
        </section>
    )
}