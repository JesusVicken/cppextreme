
"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    ShowerHead,
    ClockIcon,
    InfoIcon,
    MapPinIcon,
    PhoneCallIcon,
    CheckCircle2,
} from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

const checklistItems = [
    "Deixar o nome na portaria ao chegar",
    "Ir para a beira lago (BASE CPP - quase de frente às piscinas)",
    "Guardar chinelas/mochilas na base/sala",
    "Leve garrafinha de água",
    "Roupa confortável que possa molhar",
    "Roupa extra para trocar na volta",
    "Roupa de banho (opcional para pular no lago)",
    "Lembrar que a remada é feita descalço ou com sapatilha híbrida",
    "Escolher remo do tamanho ideal para você ",
    "Vestir colete",
    "Partiu remada! 🛶"
]

export default function CheckVaa() {
    const [checkedItems, setCheckedItems] = useState(Array(checklistItems.length).fill(false))
    const [showConfetti, setShowConfetti] = useState(false)
    const { width, height } = useWindowSize()

    const handleCheck = (index: number) => {
        const updated = [...checkedItems]
        updated[index] = !updated[index]
        setCheckedItems(updated)
    }

    const allChecked = checkedItems.every(Boolean)

    useEffect(() => {
        if (allChecked) {
            setShowConfetti(true)
            const timer = setTimeout(() => {
                setShowConfetti(false)
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [allChecked])

    return (
        <section className="bg-white py-12 px-4 md:px-8 relative overflow-hidden">
            {showConfetti && (
                <Confetti
                    width={width}
                    height={height}
                    recycle={false}
                    numberOfPieces={500}
                    gravity={0.2}
                />
            )}
            <div className="max-w-3xl mx-auto">
                <Card className="shadow-lg border-zinc-200">
                    <CardHeader>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-zinc-900">
                            Primeira Aula de Canoa Havaiana 🌊
                        </CardTitle>
                        <CardDescription className="text-zinc-600">
                            Tudo que você precisa saber para remar com a gente!
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <InfoRow
                            icon={<MapPinIcon className="w-5 h-5 mt-1 text-blue-600" />}
                            title="Estacionamento:"
                            content="O clube conta com estacionamento privado interno. Pode estacionar com tranquilidade e segurança!"
                        />
                        <InfoRow
                            icon={<ClockIcon className="w-5 h-5 mt-1 text-green-600" />}
                            title="Horário:"
                            content="Chegar com 10 minutos de antecedência. Aula com ~1h de duração."
                        />
                        <InfoRow
                            icon={<MapPinIcon className="w-5 h-5 mt-1 text-red-600" />}
                            title="Local:"
                            content="ASCADE. Deixe o nome na portaria e vá até a base da CPP EXTREME (quase em frente às piscinas)."
                        />
                        <InfoRow
                            icon={<ShowerHead className="w-5 h-5 mt-1 text-indigo-600" />}
                            title="Banheiro com chuveiro:"
                            content="Temos um ótimo banheiro com chuveiro para você tomar banho após a remada e seguir direto para o trabalho!"
                        />

                        <div className="flex items-start gap-4">
                            <InfoIcon className="w-5 h-5 mt-1 text-yellow-600" />
                            <div>
                                <h4 className="text-zinc-800 font-semibold">Checklist para a remada:</h4>
                                <ul className="space-y-2 mt-2">
                                    {checklistItems.map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Checkbox
                                                checked={checkedItems[index]}
                                                onCheckedChange={() => handleCheck(index)}
                                            />
                                            <motion.span
                                                className={`text-sm ${checkedItems[index]
                                                    ? "line-through text-green-600"
                                                    : "text-zinc-700"
                                                    }`}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                            >
                                                {item}
                                            </motion.span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <PhoneCallIcon className="w-5 h-5 mt-1 text-purple-600" />
                            <div>
                                <h4 className="text-zinc-800 font-semibold">Contato:</h4>
                                <p className="text-sm text-zinc-600">
                                    Dúvidas? Fale conosco pelo WhatsApp!
                                </p>
                                <Button variant="default" className="mt-2" asChild>
                                    <a
                                        href="https://wa.me/5561998219177?text=Olá, gostaria de agendar minha primeira aula de canoa havaiana!"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Falar no WhatsApp
                                    </a>
                                </Button>
                            </div>
                        </div>

                        <div className="text-center mt-6">
                            <Badge variant="outline" className="text-sm px-3 py-1 text-zinc-700 border-zinc-300">
                                Vagas limitadas - Garanta sua remada!
                            </Badge>
                        </div>

                        <div className="text-center">
                            <Button
                                className="mt-4"
                                disabled={!allChecked}
                                variant={allChecked ? "default" : "outline"}
                            >
                                {allChecked ? (
                                    <motion.span
                                        className="flex items-center gap-2"
                                        initial={{ scale: 0.9 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 15
                                        }}
                                    >
                                        <CheckCircle2 className="w-4 h-4" />
                                        Check-in Confirmado!
                                    </motion.span>
                                ) : (
                                    "Marque todos os itens para confirmar"
                                )}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

function InfoRow({
    icon,
    title,
    content,
}: {
    icon: React.ReactNode
    title: string
    content: string
}) {
    return (
        <div className="flex items-start gap-4">
            {icon}
            <div>
                <h4 className="text-zinc-800 font-semibold">{title}</h4>
                <p className="text-sm text-zinc-600">{content}</p>
            </div>
        </div>
    )
}