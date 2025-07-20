'use client'

import { Check, ChevronRight, MessageCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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

    const whatsappNumber = '61998219177'
    const whatsappMessage = 'Olá! Gostaria de saber mais sobre os planos da CPP Extreme BSB.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

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

    const planosAvulsos = [
        {
            nome: '5 Remadas Avulsas',
            preco: 'R$ 185',
            periodo: '/pacote',
            beneficios: ['Validade de 3 meses']
        },
        {
            nome: '10 Remadas Avulsas',
            preco: 'R$ 355',
            periodo: '/pacote',
            beneficios: ['Validade de 6 meses']
        },
        {
            nome: 'Youipe Kids',
            preco: 'R$ 200',
            periodo: '/mês',
            beneficios: ['Taxa de matrícula: R$ 70']
        }
    ]

    return (
        <section id="planos" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    className="flex flex-col items-center justify-center text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-gray-900 mb-4">
                        Nossos Planos
                    </h2>
                    <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Escolha o plano ideal para sua jornada na canoa havaiana e entre em contato
                    </p>
                </motion.div>

                {/* Planos Principais */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
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
                        >
                            <Card
                                className={`h-full flex flex-col border-2 transition-all duration-300 hover:shadow-lg overflow-hidden ${plano.destaque ? 'border-primary shadow-md' : 'border-gray-200'}`}
                            >
                                <motion.div
                                    className="relative h-48 w-full"
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={plano.imagem}
                                        alt={`Imagem do ${plano.nome}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority={index === 0}
                                    />
                                    {plano.destaque && (
                                        <motion.div
                                            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm"
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ repeat: Infinity, duration: 2 }}
                                        >
                                            <Star className="h-5 w-5 text-primary" />
                                        </motion.div>
                                    )}
                                </motion.div>

                                <CardHeader className="pb-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <motion.h3
                                                className="text-2xl font-bold text-gray-900"
                                                whileHover={{ x: 5 }}
                                            >
                                                {plano.nome}
                                            </motion.h3>
                                            <p className="text-gray-600 text-sm">{plano.descricao}</p>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="flex-1">
                                    <motion.div
                                        className="mb-6"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <span className="text-4xl font-bold text-gray-900">{plano.preco}</span>
                                        <span className="text-gray-600 text-lg">{plano.periodo}</span>
                                    </motion.div>

                                    <ul className="space-y-3">
                                        {plano.beneficios.map((beneficio, i) => (
                                            <motion.li
                                                key={i}
                                                className="flex items-start gap-2"
                                                whileHover={{ x: 5 }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">{beneficio}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter>
                                    <motion.div
                                        whileHover={buttonHover}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            size="lg"
                                            className={`w-full group ${plano.destaque ? 'bg-primary hover:bg-primary/90' : 'bg-gray-900 hover:bg-gray-800'}`}
                                            onClick={() => window.open(whatsappLink, '_blank')}
                                        >
                                            Matricule-se
                                            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </motion.div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Planos Avulsos */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-2xl font-bold text-center mb-8">Planos Avulsos e Kids</h3>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        {planosAvulsos.map((plano, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                                variants={item}
                                whileHover={{ y: -5 }}
                            >
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{plano.nome}</h4>
                                <div className="mb-4 text-center">
                                    <span className="text-3xl font-bold text-gray-900">{plano.preco}</span>
                                    <span className="text-gray-600">{plano.periodo}</span>
                                </div>
                                <ul className="space-y-2 mb-6">
                                    {plano.beneficios.map((beneficio, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-center gap-2 text-sm text-gray-700"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <Check className="h-4 w-4 text-primary" />
                                            {beneficio}
                                        </motion.li>
                                    ))}
                                </ul>
                                <motion.div
                                    whileHover={buttonHover}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        size="sm"
                                        className="w-full mt-auto"
                                        onClick={() => window.open(whatsappLink, '_blank')}
                                    >
                                        Contratar
                                    </Button>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Horários */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-center mb-8">Nossos Horários</h3>
                    <motion.div
                        className="bg-white rounded-lg border border-gray-200 p-6 max-w-2xl mx-auto"
                        whileHover={{ scale: 1.01 }}
                    >
                        <div className="grid grid-cols-6 gap-2 text-sm">
                            {/* Dias */}
                            {['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'].map((dia, i) => (
                                <motion.div
                                    key={i}
                                    className="font-bold text-center"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {dia}
                                </motion.div>
                            ))}

                            {/* Horários */}
                            {['6:20', '6:20', '6:20', '6:00', '6:20', '7:30'].map((hora, i) => (
                                <motion.div
                                    key={i}
                                    className="text-center"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {hora}
                                </motion.div>
                            ))}

                            {['7:40', '7:40', '7:40', '7:40', '7:40', '9:30'].map((hora, i) => (
                                <motion.div
                                    key={i}
                                    className="text-center"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {hora}
                                </motion.div>
                            ))}

                            {['12:15', '17:40', '12:15', '17:40', '12:15', '11:30'].map((hora, i) => (
                                <motion.div
                                    key={i}
                                    className="text-center"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {hora}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* CTA Final */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <motion.p
                        className="text-gray-600 mb-4"
                        animate={{
                            scale: [1, 1.02, 1],
                            transition: { repeat: Infinity, duration: 3 }
                        }}
                    >
                        Taxa de matrícula: R$ 70 (exceto para planos avulsos)
                    </motion.p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-primary text-primary hover:bg-primary/10"
                            onClick={() => window.open(whatsappLink, '_blank')}
                        >
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Fale conosco pelo WhatsApp
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}