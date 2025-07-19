'use client'

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
    Users,
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

const estruturaData = [
    {
        icon: <MapPin className="w-6 h-6 text-blue-600" />,
        title: 'Localização',
        description:
            'Base localizada no Clube ASCADE, com acesso fácil, seguro e de frente para o lago.',
    },
    {
        icon: <ParkingCircle className="w-6 h-6 text-green-600" />,
        title: 'Estacionamento',
        description:
            'Estacionamento interno e seguro disponível dentro do clube para sua tranquilidade.',
    },
    {
        icon: <ShowerHead className="w-6 h-6 text-indigo-600" />,
        title: 'Vestiários com chuveiros',
        description:
            'Vestiários completos com chuveiros para você se refrescar após a remada.',
    },
    {
        icon: <Lock className="w-6 h-6 text-yellow-600" />,
        title: 'Guarda-volumes',
        description: 'Sala dedicada para deixar seus pertences com segurança.',
    },
    {
        icon: <Users className="w-6 h-6 text-pink-600" />,
        title: 'Ambiente acolhedor',
        description:
            'Nosso time está sempre disponível para receber bem quem chega pra remar!',
    },
    {
        icon: <Ship className="w-6 h-6 text-cyan-600" />,
        title: 'Equipamentos modernos',
        description:
            'Canoas, remos e coletes de alta qualidade para sua segurança e performance.',
    },
    {
        icon: <AlarmClock className="w-6 h-6 text-rose-600" />,
        title: 'Flexibilidade de horários',
        description:
            'Aulas em diferentes horários para encaixar sua remada na rotina.',
    },
    {
        icon: <Handshake className="w-6 h-6 text-violet-600" />,
        title: 'Integração com a natureza',
        description:
            'Contato direto com o lago Paranoá, proporcionando conexão com o esporte e o ambiente.',
    },
    {
        icon: <GraduationCap className="w-6 h-6 text-orange-600" />,
        title: 'Professores capacitados',
        description:
            'Professores prontos para guiar sua experiência de forma segura e empolgante.',
    },
]

export default function EstruturaClubeCompleta() {
    return (
        <section className="bg-white py-32 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-800">
                        Nossa Estrutura
                    </h2>
                    <p className="text-zinc-600 mt-2 max-w-xl mx-auto">
                        Tudo pensado para sua experiência de remada ser confortável, segura e inesquecível.
                    </p>
                    <Badge className="mt-4 text-sm px-4 py-1 bg-zinc-100 text-zinc-700 border border-zinc-200">
                        Clube ASCADE · Lago Paranoá
                    </Badge>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {estruturaData.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`rounded-2xl ${cardColors[index % cardColors.length]}`}
                            whileHover={{ scale: 1.05, rotate: 0.3 }}
                            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                        >
                            <Card className="h-full border-none shadow-md bg-transparent">
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
            </div>
        </section>
    )
}
