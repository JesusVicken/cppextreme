'use client'

import { Check, ChevronRight, MessageCircle, Star, Clock, CalendarDays, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { useEffect } from 'react'
import AOS from 'aos'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Badge } from '@/components/ui/badge'

// Animations
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const cardHover = {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
}

const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 }
}

export default function PlanosSection() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
        })
    }, [])

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const whatsappNumber = '556198219177'
    const whatsappMessage = 'Olá! Gostaria de saber mais sobre os planos da CPP Extreme BSB.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    // DADOS DOS PLANOS MENSAIS
    const planos = [
        {
            nome: '2X Semana',
            descricao: 'Ideal para quem está começando',
            preco: 'R$ 265',
            periodo: '/mês',
            destaque: false,
            imagem: '/canoa1.jpg',
            beneficios: [
                '2 remadas semanais',
                'Acesso aos horários regulares',
                'Equipamentos inclusos',
                'Participação em eventos',
                'Acompanhamento básico'
            ],
        },
        {
            nome: '3X Semana',
            descricao: 'Para evolução técnica acelerada',
            preco: 'R$ 285',
            periodo: '/mês',
            destaque: true,
            imagem: '/canoa2.jpg',
            beneficios: [
                '3 remadas semanais',
                'Todos os horários disponíveis',
                'Equipamentos premium',
                'Prioridade em eventos',
                'Acompanhamento técnico'
            ],
        },
        {
            nome: 'Plano Livre',
            descricao: 'Remadas ilimitadas',
            preco: 'R$ 350',
            periodo: '/mês',
            destaque: false,
            imagem: '/canoa3.jpg',
            beneficios: [
                'Remadas ilimitadas',
                'Todos os horários',
                'Equipamentos premium',
                'Participação gratuita em eventos',
                'Acompanhamento personalizado'
            ],
        },
    ]

    // DADOS AVULSOS (Atualizado com Imagens e Validade Nova)
    const planosAvulsos = [
        {
            nome: '1 Remada Avulsa',
            preco: 'R$ 50 / 70',
            periodo: '/aula',
            imagem: '/cppbanner.jpg', // FOTO FAKE 1
            beneficios: [
                'Seg a Sex: R$ 50,00',
                'Sáb, Dom e Feriado: R$ 70,00',
                'Equipamento incluso'
            ],
            destaquePreco: true
        },
        {
            nome: '5 Remadas Avulsas',
            preco: 'R$ 185',
            periodo: '/pacote',
            imagem: '/canoa4.jpg', // FOTO FAKE 2
            beneficios: [
                'Validade de 2 meses', // Validade ajustada
                'Flexibilidade total'
            ]
        },
        {
            nome: '10 Remadas Avulsas',
            preco: 'R$ 355',
            periodo: '/pacote',
            imagem: '/sol.jpg', // FOTO FAKE 3
            beneficios: [
                'Validade de 3 meses', // Validade ajustada
                'Melhor custo-benefício'
            ]
        }
    ]

    // DADOS DOS HORÁRIOS
    const scheduleData = [
        { day: 'SEG', fullDay: 'Segunda', times: ['6:00', '7:30', '12:15', '16:00', '17:40'] },
        { day: 'TER', fullDay: 'Terça', times: ['6:00', '7:30', '16:00', '17:40'] },
        { day: 'QUA', fullDay: 'Quarta', times: ['6:00', '7:30', '12:15', '16:00', '17:40'] },
        { day: 'QUI', fullDay: 'Quinta', times: ['6:00', '7:30', '16:00', '17:40'] },
        { day: 'SEX', fullDay: 'Sexta', times: ['6:00', '7:30', '12:15', '16:00'] },
        { day: 'SÁB', fullDay: 'Sábado', times: ['7:20', '9:40'], isWeekend: true },
        { day: 'DOM', fullDay: 'Domingo', times: ['11:00'], isWeekend: true },
    ]

    return (
        <section id="planos" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50">
            <div className="container px-4 md:px-6 mx-auto">

                {/* Cabeçalho da Seção */}
                <motion.div
                    className="flex flex-col items-center justify-center text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20 text-primary bg-primary/5">
                        Planos e Horários
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6">
                        Invista em Você
                    </h2>
                    <p className="max-w-[700px] text-gray-600 md:text-xl font-medium leading-relaxed">
                        Escolha o plano ideal para sua jornada na canoa havaiana. Flexibilidade e qualidade técnica para todos os níveis.
                    </p>
                </motion.div>

                {/* Planos Mensais */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-7xl mx-auto"
                    variants={container}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    ref={ref}
                >
                    {planos.map((plano, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={cardHover}
                            className="h-full"
                        >
                            <Card
                                className={`h-full flex flex-col rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl overflow-hidden ${plano.destaque
                                    ? 'border-primary shadow-xl ring-4 ring-primary/5 relative transform md:-translate-y-4'
                                    : 'border-transparent shadow-lg bg-white'
                                    }`}
                            >
                                {/* Imagem do Plano */}
                                <motion.div
                                    className="relative h-56 w-full overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image
                                        src={plano.imagem}
                                        alt={`Imagem do ${plano.nome}`}
                                        fill
                                        className="object-cover transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                    {/* Preço sobre a imagem */}
                                    <div className="absolute bottom-4 left-6 text-white">
                                        <p className="text-sm font-medium opacity-90 mb-1">{plano.nome}</p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-bold">{plano.preco}</span>
                                            <span className="text-sm font-medium opacity-80">{plano.periodo}</span>
                                        </div>
                                    </div>

                                    {plano.destaque && (
                                        <div className="absolute top-4 right-4">
                                            <Badge className="bg-primary text-white hover:bg-primary px-3 py-1 text-xs font-bold shadow-lg flex items-center gap-1">
                                                <Star className="w-3 h-3 fill-white" /> POPULAR
                                            </Badge>
                                        </div>
                                    )}
                                </motion.div>

                                <CardContent className="flex-1 p-8">
                                    <p className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-wide">
                                        {plano.descricao}
                                    </p>

                                    <ul className="space-y-4">
                                        {plano.beneficios.map((beneficio, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="mt-1 rounded-full bg-green-100 p-1">
                                                    <Check className="h-3 w-3 text-green-600" />
                                                </div>
                                                <span className="text-gray-700 text-sm font-medium">{beneficio}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter className="p-8 pt-0">
                                    <motion.div
                                        className="w-full"
                                        whileHover={buttonHover}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            size="lg"
                                            className={`w-full rounded-xl font-bold text-md py-6 shadow-md transition-all ${plano.destaque
                                                ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                                                : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                                                }`}
                                            onClick={() => window.open(whatsappLink, '_blank')}
                                        >
                                            Matricule-se Agora
                                            <ChevronRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </motion.div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Planos Avulsos & Kids */}
                <motion.div
                    className="mb-24 max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                            <Star className="w-5 h-5 text-primary" />
                            Pack de Remadas Avulsas
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {planosAvulsos.map((plano, index) => (
                            <motion.div
                                key={index}
                                className="h-full"
                                whileHover={{ y: -5 }}
                            >
                                <Card className="h-full flex flex-col rounded-2xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-all">

                                    {/* IMAGEM NO CARD AVULSO */}
                                    <div className="relative h-40 w-full overflow-hidden">
                                        <Image
                                            src={plano.imagem}
                                            alt={plano.nome}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-black/40" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <h4 className="text-xl font-bold text-white shadow-sm uppercase tracking-wider">{plano.nome}</h4>
                                        </div>
                                    </div>

                                    <CardContent className="flex-1 p-6 flex flex-col items-center">
                                        <div className="mb-4 text-center">
                                            <span className={`text-3xl font-black text-primary ${plano.destaquePreco ? 'text-2xl' : ''}`}>
                                                {plano.preco}
                                            </span>
                                            <span className="text-gray-400 text-sm block">{plano.periodo}</span>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg px-4 py-3 w-full text-center mb-6 flex-1 flex flex-col justify-center">
                                            {plano.beneficios.map((b, i) => (
                                                <span key={i} className="text-xs font-semibold text-gray-600 uppercase tracking-wide block py-1 border-b last:border-0 border-gray-100">
                                                    {b}
                                                </span>
                                            ))}
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full rounded-full border-gray-200 hover:bg-gray-50 hover:text-primary"
                                            onClick={() => window.open(whatsappLink, '_blank')}
                                        >
                                            Contratar
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* HORÁRIOS */}
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <Badge variant="secondary" className="mb-4">Agenda Semanal</Badge>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                            <CalendarDays className="w-6 h-6 text-primary" />
                            Nossos Horários
                        </h3>
                        <p className="text-gray-500">Confira a disponibilidade de turmas para a semana</p>
                    </div>

                    {/* Grid Responsivo de Horários */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                        {scheduleData.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`
                                    rounded-2xl p-4 border transition-all duration-300 group
                                    ${item.isWeekend
                                        ? 'bg-primary/5 border-primary/20'
                                        : 'bg-white border-gray-200 hover:border-gray-300'
                                    }
                                `}
                                whileHover={{ y: -4, shadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                            >
                                <div className="text-center mb-4 pb-2 border-b border-gray-100 group-hover:border-gray-200 transition-colors">
                                    <span className={`block text-xs font-bold uppercase tracking-widest mb-1 ${item.isWeekend ? 'text-primary' : 'text-gray-400'}`}>
                                        {item.day}
                                    </span>
                                </div>

                                <div className="space-y-2 flex flex-col items-center">
                                    {item.times.map((time, tIndex) => (
                                        <div
                                            key={tIndex}
                                            className={`
                                                px-3 py-1.5 rounded-lg text-sm font-semibold w-full text-center transition-colors
                                                ${item.isWeekend
                                                    ? 'bg-white text-gray-800 shadow-sm'
                                                    : 'bg-gray-50 text-gray-600 group-hover:bg-gray-100 group-hover:text-gray-900'
                                                }
                                            `}
                                        >
                                            {time}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Final */}
                <motion.div
                    className="mt-20 text-center bg-zinc-900 rounded-3xl p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto shadow-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    {/* Elementos decorativos de fundo */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex flex-col items-center gap-2 mb-6">
                            <Clock className="w-8 h-8 text-primary mb-2" />
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Não encontrou seu horário?</h3>
                        </div>

                        <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
                            Entre em contato para verificar disponibilidade de turmas extras ou aulas particulares.
                            <br />
                            <span className="text-sm opacity-60 mt-2 block">
                                * Taxa de matrícula: R$ 70 (exceto para planos avulsos)
                            </span>
                        </p>

                        <motion.div
                            whileHover={buttonHover}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <Button
                                size="lg"
                                className="bg-white text-zinc-900 hover:bg-gray-100 font-bold px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
                                onClick={() => window.open(whatsappLink, '_blank')}
                            >
                                <MessageCircle className="mr-2 h-5 w-5" />
                                Fale com nosso Time
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}