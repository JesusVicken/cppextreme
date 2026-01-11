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
        <section className="bg-white pb-20 md:pb-32 overflow-hidden">

            {/* --- NOVO BANNER DE VÍDEO (Hero da Seção) --- */}
            <div className="relative h-[60vh] min-h-[500px] w-full mb-20 overflow-hidden">
                <video
                    src="/cpp3.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay Escuro para contraste total P&B */}
                <div className="absolute inset-0 bg-black/70" />

                {/* Conteúdo sobre o vídeo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Badge className="bg-white text-black border-none px-4 py-1.5 text-xs md:text-sm font-black tracking-widest uppercase mb-6">
                            Nossa Base
                        </Badge>
                       
                        <p className="text-white text-lg md:text-xl mt-6 max-w-2xl mx-auto font-medium drop-shadow-md">
                            Conheça o local onde sua transformação acontece. Segurança, conforto e o melhor visual de Brasília.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 md:px-8 space-y-20">

                {/* --- SEÇÃO DE DESTAQUE --- */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Badge variant="outline" className="mb-4 border-2 border-black text-black px-3 py-1 text-xs uppercase tracking-widest font-bold">
                            Clube ASCADE
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight leading-tight mb-6 uppercase">
                            O cenário perfeito para o seu <span className="underline decoration-4 underline-offset-4 decoration-black">treino diário.</span>
                        </h2>
                        {/* Texto puramente preto */}
                        <p className="text-lg text-black leading-relaxed max-w-lg mb-6 font-medium">
                            Localizado em um dos pontos mais nobres do Lago Paranoá, o Clube ASCADE oferece uma infraestrutura completa que vai muito além da canoagem.
                        </p>
                        <ul className="space-y-3 text-black font-bold">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-black" /> Acesso exclusivo ao lago
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-black" /> Ambiente seguro e monitorado
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-black" /> Áreas de convivência
                            </li>
                        </ul>
                    </motion.div>

                    {/* Imagem de Destaque */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[350px] lg:h-[500px] w-full rounded-none md:rounded-3xl overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] border-2 border-black group"
                    >
                        <Image
                            src="/vista_ascade.jpg"
                            alt="Vista panorâmica do Clube ASCADE"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" // Efeito P&B que ganha cor no hover (opcional, pode deixar grayscale sempre)
                            quality={100}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8 text-white">
                            <p className="font-black text-2xl mb-1 uppercase">Vista Panorâmica</p>
                            <p className="text-sm text-white font-bold flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> Clube ASCADE
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* --- GRID DE CARDS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {estruturaData.map((item, index) => {
                        const Icon = item.icon
                        const isClickable = !!item.href

                        // Design do Card: Borda grossa preta, fundo branco, texto preto.
                        const CardContentInner = (
                            <Card className={`
                                h-full transition-all duration-300 relative overflow-hidden group border-2 border-black rounded-xl
                                ${isClickable
                                    ? 'bg-black text-white hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]' // Card Clicável Invertido
                                    : 'bg-white text-black hover:bg-black hover:text-white' // Card Normal: Hover inverte as cores
                                }
                            `}>
                                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                                    <div className={`
                                        p-3 rounded-lg transition-colors border-2 border-transparent
                                        ${isClickable
                                            ? 'bg-white text-black' // Ícone do clicável
                                            : 'bg-black text-white group-hover:bg-white group-hover:text-black' // Ícone normal inverte no hover
                                        }
                                    `}>
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-xl font-black leading-tight uppercase">
                                            {item.title}
                                        </CardTitle>
                                    </div>
                                    {/* Indicador visual de link */}
                                    {isClickable && (
                                        <ArrowUpRight className="absolute top-6 right-6 w-6 h-6 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                    )}
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className={`text-base font-medium leading-relaxed
                                        ${isClickable ? 'text-gray-300' : 'text-black group-hover:text-white'}
                                    `}>
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
                    className="w-full rounded-3xl overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] border-2 border-black h-[300px] md:h-[450px]"
                >
                    <iframe
                        title="Localização CPP Extreme"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.297405626388!2d-47.85451242499684!3d-15.818687484823482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a25c82d57ad6d%3A0xf59dbb7e8c7889a9!2sCpp%20Extremo!5e0!3m2!1spt-BR!2sbr!4v1709666000000!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </motion.div>
            </div>
        </section>
    )
}