'use client'

import Image from 'next/image'
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
} from 'lucide-react'
import { motion } from 'framer-motion'

// Cores suaves para cada card
const cardColors = [
    'bg-blue-50',
    'bg-green-50',
    'bg-indigo-50',
    'bg-yellow-50',
    'bg-pink-50',
    'bg-cyan-50',
    'bg-rose-50',
    'bg-violet-50',
    'bg-orange-50',
]

// Array completo com todos os dados da estrutura
const estruturaData = [
    {
        icon: <MapPin className="h-6 w-6 text-blue-600" />,
        title: 'Localização',
        description:
            'Base localizada no Clube ASCADE, com acesso fácil, seguro e de frente para o lago.',
    },
    {
        icon: <ParkingCircle className="h-6 w-6 text-green-600" />,
        title: 'Estacionamento',
        description:
            'Estacionamento interno e seguro disponível dentro do clube para sua tranquilidade.',
    },
    {
        icon: <ShowerHead className="h-6 w-6 text-indigo-600" />,
        title: 'Vestiários com chuveiros',
        description:
            'Vestiários completos com chuveiros para você se refrescar após a remada.',
    },
    {
        icon: <Lock className="h-6 w-6 text-yellow-600" />,
        title: 'Guarda-volumes',
        description: 'Sala dedicada para deixar seus pertences com segurança.',
    },
    {
        icon: <Utensils className="h-6 w-6 text-pink-600" />,
        title: 'Restaurante e Lanchonete',
        description:
            'Após suas remadas, recarregue as energias no nosso restaurante! Almoço caseiro e café reforçado para você continuar o dia com disposição',
    },
    {
        icon: <Ship className="h-6 w-6 text-cyan-600" />,
        title: 'Equipamentos modernos',
        description:
            'Canoas, remos e coletes de alta qualidade para sua segurança e performance.',
    },
    {
        icon: <AlarmClock className="h-6 w-6 text-rose-600" />,
        title: 'Flexibilidade de horários',
        description:
            'Remadas em diferentes horários para encaixar sua remada na rotina.',
    },
    {
        icon: <Handshake className="h-6 w-6 text-violet-600" />,
        title: 'Integração com a natureza',
        description:
            'Contato direto com o lago Paranoá, proporcionando conexão com o esporte e o ambiente.',
    },
    {
        icon: <GraduationCap className="h-6 w-6 text-orange-600" />,
        title: 'Instrutores capacitados',
        description:
            'Instrutores prontos para guiar sua experiência de forma segura e empolgante.',
    },
]

export default function EstruturaClubeCompleta() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="mx-auto max-w-6xl space-y-16 px-4 md:px-8">
                {/* Agrupador da Faixa de Destaque e do texto mobile */}
                <div>
                    {/* Faixa de Destaque com Imagem - AJUSTADA para desktop */}
                    <div className="relative h-72 w-full mb-16 rounded-lg overflow-hidden md:h-96" data-aos="fade-up">
                        <Image
                            src="/ascade.jpg"
                            alt="Clube ASCADE - Local das remadas de canoa havaiana"
                            fill
                            className="object-cover"
                            quality={80}
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* TEXTO PARA DESKTOP (dentro da imagem) */}
                        <div className="hidden md:flex absolute inset-0 items-center bg-gradient-to-r from-black/70 via-black/50 to-transparent p-8 md:p-12">
                            <div className="max-w-xl">
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl"
                                >
                                    Nossa Estrutura
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-lg text-white/90"
                                >
                                    Tudo pensado para sua experiência de remada
                                    ser confortável, segura e inesquecível.
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <Badge className="mt-6 border-none bg-white/90 px-4 py-1 text-sm text-zinc-800 shadow">
                                        Clube ASCADE · Lago Paranoá
                                    </Badge>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* TEXTO PARA MOBILE (abaixo da imagem) */}
                    <div className="mt-8 text-center md:hidden">
                        <h2 className="text-3xl font-bold text-zinc-800">
                            Nossa Estrutura
                        </h2>
                        <p className="mx-auto mt-2 max-w-xl text-zinc-600">
                            Tudo pensado para sua experiência de remada ser
                            confortável, segura e inesquecível.
                        </p>
                        <Badge className="mt-4 border border-zinc-200 bg-zinc-100 px-4 py-1 text-sm text-zinc-700">
                            Clube ASCADE · Lago Paranoá
                        </Badge>
                    </div>
                </div>

                {/* Grid de Cards com a Estrutura */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {estruturaData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.05,
                                duration: 0.5,
                                type: 'spring',
                                stiffness: 250,
                                damping: 20,
                            }}
                            className={`rounded-2xl ${cardColors[index % cardColors.length]
                                }`}
                            whileHover={{ scale: 1.05, rotate: 0.3 }}
                        >
                            <Card className="h-full border-none bg-transparent shadow-md">
                                <CardHeader className="flex flex-row items-start gap-4">
                                    <div className="mt-1">{item.icon}</div>
                                    <div>
                                        <CardTitle className="text-lg font-semibold text-zinc-800">
                                            {item.title}
                                        </CardTitle>
                                        <CardDescription className="text-sm text-zinc-600">
                                            {item.description}
                                        </CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent />
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Mapa - Localização do Clube */}
                <div className="w-full rounded-2xl bg-zinc-50 p-8 md:p-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-8 text-center"
                    >
                        <h3 className="text-2xl font-bold text-zinc-800 md:text-3xl">
                            Venha fazer sua aula experimental!
                        </h3>
                        <p className="mx-auto mt-2 max-w-xl text-zinc-600">
                            Estamos no Clube ASCADE, às margens do Lago Paranoá
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="h-[300px] w-full overflow-hidden rounded-xl shadow-lg md:h-[400px] lg:h-[450px]"
                    >
                        <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] relative z-0">
                            <iframe
                                title="Localização CPP Extreme"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.297405626388!2d-47.85451242499684!3d-15.818687484823482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a25c82d57ad6d%3A0xf59dbb7e8c7889a9!2sCpp%20Extremo!5e0!3m2!1spt-BR!2sbr!4v1709666000000!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}