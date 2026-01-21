'use client'

import {
    Check, ChevronRight, MessageCircle, Star, Clock, CalendarDays,
    Info, UploadCloud, Copy, CheckCircle2, Wallet
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Badge } from '@/components/ui/badge'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { uploadToDrive } from './upload'

// --- TYPES ---
type PlanStep = 'payment' | 'upload' | 'success';

interface Plano {
    nome: string;
    preco: string;
    periodo: string;
    descricao?: string;
    destaque?: boolean;
    imagem: string;
    beneficios: string[];
    destaquePreco?: boolean;
}

// --- ANIMATIONS ---
const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
    // --- STATE MANAGEMENT ---
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentStep, setCurrentStep] = useState<PlanStep>('payment')
    const [selectedPlan, setSelectedPlan] = useState<Plano | null>(null)
    const [receiptFile, setReceiptFile] = useState<File | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [copied, setCopied] = useState(false)

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-in-out' })
    }, [])

    // --- CONFIGURAÇÃO ---
    const GLOBAL_PIX_IMAGE = '/qrcode.jpg'
    const GLOBAL_PIX_KEY = 'marcus.lopesss@gmail.com'
    const GLOBAL_PIX_NAME = 'MARCUS LOPES GOMES'
    const GLOBAL_GROUP_LINK = "https://chat.whatsapp.com/LteTVmibhZBB4hAjO6E6Dn"

    // --- HANDLERS ---

    const handleSelectPlan = (plano: Plano) => {
        setSelectedPlan(plano)
        setCurrentStep('payment')
        setReceiptFile(null)
        setIsModalOpen(true)
    }

    const handleCopyPix = () => {
        navigator.clipboard.writeText(GLOBAL_PIX_KEY)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleUploadReceipt = async () => {
        if (!receiptFile || !selectedPlan) return

        setIsLoading(true)

        try {
            const formData = new FormData()
            formData.append('file', receiptFile)
            formData.append('plano', selectedPlan.nome)

            const result = await uploadToDrive(formData)

            if (result.success) {
                setIsLoading(false)
                setCurrentStep('success')
                
                // --- TRAVA DE SEGURANÇA: AUTO-REDIRECT ---
                // Tenta abrir o grupo automaticamente assim que der sucesso
                setTimeout(() => {
                    window.open(GLOBAL_GROUP_LINK, '_blank')
                }, 1500) // Espera 1.5s para o usuário ver o "check" verde antes de abrir
                
            } else {
                throw new Error(result.error || 'Erro desconhecido no upload')
            }

        } catch (error) {
            console.error("Erro no upload:", error)
            setIsLoading(false)
            alert("Ocorreu um erro ao enviar o comprovante. Verifique sua conexão e tente novamente.")
        }
    }

    const handleJoinGroup = () => {
        window.open(GLOBAL_GROUP_LINK, '_blank')
        // Só fecha o modal se o usuário clicar no botão explicitamente
        setIsModalOpen(false)
    }

    const whatsappNumber = '556198219177'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Tenho dúvida sobre os planos.`

    // --- DADOS ---
    const planos = [
        {
            nome: '2X Semana',
            descricao: 'Ideal para quem está começando',
            preco: 'R$ 265',
            periodo: '/mês',
            destaque: false,
            imagem: '/canoa1.jpg',
            beneficios: ['2 remadas semanais', 'Acesso aos horários regulares', 'Equipamentos inclusos', 'Participação em eventos', 'Acompanhamento básico'],
        },
        {
            nome: '3X Semana',
            descricao: 'Para evolução técnica acelerada',
            preco: 'R$ 285',
            periodo: '/mês',
            destaque: true,
            imagem: '/canoa2.jpg',
            beneficios: ['3 remadas semanais', 'Todos os horários disponíveis', 'Equipamentos premium', 'Prioridade em eventos', 'Acompanhamento técnico'],
        },
        {
            nome: 'Plano Livre',
            descricao: 'Remadas ilimitadas',
            preco: 'R$ 350',
            periodo: '/mês',
            destaque: false,
            imagem: '/canoa3.jpg',
            beneficios: ['Remadas ilimitadas', 'Todos os horários', 'Equipamentos premium', 'Participação gratuita em eventos', 'Acompanhamento personalizado'],
        },
    ]

    const planosAvulsos = [
        { nome: '1 Remada Avulsa', preco: 'R$ 50 / 70', periodo: '/aula', imagem: '/cpp-sol.jpg', beneficios: ['Seg a Sex: R$ 50,00', 'Sáb, Dom e Feriado: R$ 70,00', 'Equipamento incluso'], destaquePreco: true },
        { nome: '5 Remadas Avulsas', preco: 'R$ 185', periodo: '/pacote', imagem: '/sol.jpg', beneficios: ['Validade de 2 meses', 'Flexibilidade total'] },
        { nome: '10 Remadas Avulsas', preco: 'R$ 355', periodo: '/pacote', imagem: '/cppbanner.jpg', beneficios: ['Validade de 3 meses', 'Melhor custo-benefício'] }
    ]

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

                {/* --- HEADER --- */}
                <motion.div
                    className="flex flex-col items-center justify-center text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Badge variant="outline" className="mb-4 px-4 py-1 text-sm border-primary/20 text-primary bg-primary/5">Planos e Horários</Badge>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6">Invista em Você</h2>
                    <p className="max-w-[700px] text-gray-600 md:text-xl font-medium leading-relaxed">
                        Escolha o plano ideal para sua jornada na canoa havaiana. Flexibilidade e qualidade técnica para todos os níveis.
                    </p>
                </motion.div>

                {/* --- PLANOS MENSAIS --- */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-7xl mx-auto"
                    variants={container}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    ref={ref}
                >
                    {planos.map((plano, index) => (
                        <motion.div key={index} variants={item} whileHover={cardHover} className="h-full">
                            <Card className={`h-full flex flex-col rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl overflow-hidden ${plano.destaque ? 'border-primary shadow-xl ring-4 ring-primary/5 relative transform md:-translate-y-4' : 'border-transparent shadow-lg bg-white'}`}>
                                <motion.div className="relative h-56 w-full overflow-hidden" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
                                    <Image src={plano.imagem} alt={`Imagem do ${plano.nome}`} fill className="object-cover transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
                                    <p className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-wide">{plano.descricao}</p>
                                    <ul className="space-y-4">
                                        {plano.beneficios.map((beneficio, i) => (
                                            <motion.li key={i} className="flex items-start gap-3">
                                                <div className="mt-1 rounded-full bg-green-100 p-1"><Check className="h-3 w-3 text-green-600" /></div>
                                                <span className="text-gray-700 text-sm font-medium">{beneficio}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter className="p-8 pt-0">
                                    <motion.div className="w-full" whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            size="lg"
                                            className={`w-full rounded-xl font-bold text-md py-6 shadow-md transition-all ${plano.destaque ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-zinc-900 hover:bg-zinc-800 text-white'}`}
                                            onClick={() => handleSelectPlan(plano)}
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

                {/* --- PLANOS AVULSOS --- */}
                <motion.div
                    className="mb-24 max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center gap-2">
                            <Star className="w-5 h-5 text-primary" /> Pack de Remadas Avulsas
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {planosAvulsos.map((plano, index) => (
                            <motion.div key={index} className="h-full" whileHover={{ y: -5 }}>
                                <Card className="h-full flex flex-col rounded-2xl border border-gray-100 shadow-lg overflow-hidden hover:shadow-xl transition-all">
                                    <div className="relative h-40 w-full overflow-hidden">
                                        <Image src={plano.imagem} alt={plano.nome} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                                        <div className="absolute inset-0 bg-black/40" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <h4 className="text-xl font-bold text-white shadow-sm uppercase tracking-wider">{plano.nome}</h4>
                                        </div>
                                    </div>
                                    <CardContent className="flex-1 p-6 flex flex-col items-center">
                                        <div className="mb-4 text-center">
                                            <span className={`text-3xl font-black text-primary ${plano.destaquePreco ? 'text-2xl' : ''}`}>{plano.preco}</span>
                                            <span className="text-gray-400 text-sm block">{plano.periodo}</span>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg px-4 py-3 w-full text-center mb-6 flex-1 flex flex-col justify-center">
                                            {plano.beneficios.map((b, i) => (
                                                <span key={i} className="text-xs font-semibold text-gray-600 uppercase tracking-wide block py-1 border-b last:border-0 border-gray-100">{b}</span>
                                            ))}
                                        </div>
                                        <Button
                                            variant="outline" size="sm"
                                            className="w-full rounded-full border-gray-200 hover:bg-gray-50 hover:text-primary"
                                            onClick={() => handleSelectPlan(plano)}
                                        >
                                            Contratar
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* --- HORÁRIOS --- */}
                <motion.div className="max-w-7xl mx-auto" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <div className="text-center mb-12">
                        <Badge variant="secondary" className="mb-4">Agenda Semanal</Badge>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                            <CalendarDays className="w-6 h-6 text-primary" /> Nossos Horários
                        </h3>
                        <p className="text-gray-500">Confira a disponibilidade de turmas para a semana</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                        {scheduleData.map((item, index) => (
                            <motion.div key={index} className={`rounded-2xl p-4 border transition-all duration-300 group ${item.isWeekend ? 'bg-primary/5 border-primary/20' : 'bg-white border-gray-200 hover:border-gray-300'}`} whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}>
                                <div className="text-center mb-4 pb-2 border-b border-gray-100 group-hover:border-gray-200 transition-colors">
                                    <span className={`block text-xs font-bold uppercase tracking-widest mb-1 ${item.isWeekend ? 'text-primary' : 'text-gray-400'}`}>{item.day}</span>
                                </div>
                                <div className="space-y-2 flex flex-col items-center">
                                    {item.times.map((time, tIndex) => (
                                        <div key={tIndex} className={`px-3 py-1.5 rounded-lg text-sm font-semibold w-full text-center transition-colors ${item.isWeekend ? 'bg-white text-gray-800 shadow-sm' : 'bg-gray-50 text-gray-600 group-hover:bg-gray-100 group-hover:text-gray-900'}`}>{time}</div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* --- CTA FINAL --- */}
                <motion.div className="mt-20 text-center bg-zinc-900 rounded-3xl p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto shadow-2xl" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="relative z-10">
                        <div className="flex flex-col items-center gap-2 mb-6">
                            <Clock className="w-8 h-8 text-primary mb-2" />
                            <h3 className="text-2xl md:text-3xl font-bold text-white">Não encontrou seu horário?</h3>
                        </div>
                        <p className="text-gray-300 mb-8 text-lg max-w-xl mx-auto">
                            Entre em contato para verificar disponibilidade de turmas extras ou aulas particulares.<br />
                            <span className="text-sm opacity-60 mt-2 block">* Taxa de matrícula: R$ 70 (exceto para planos avulsos)</span>
                        </p>
                        <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }} className="inline-block">
                            <Button size="lg" className="bg-white text-zinc-900 hover:bg-gray-100 font-bold px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all" onClick={() => window.open(whatsappLink, '_blank')}>
                                <MessageCircle className="mr-2 h-5 w-5" /> Fale com nosso Time
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* ========================================================================
                MODAL DE PAGAMENTO (DIALOG)
               ======================================================================== */}
            <Dialog open={isModalOpen} onOpenChange={(open) => {
                // TRAVA DE SEGURANÇA:
                // Se estiver no passo 'success', impede o fechamento pelo 'onOpenChange' (clicar fora ou ESC)
                // O usuário só pode fechar clicando no botão "Entrar no Grupo"
                if (currentStep === 'success' && !open) {
                    return;
                }
                setIsModalOpen(open);
            }}>
                <DialogContent 
                    className="sm:max-w-md md:max-w-lg p-0 overflow-hidden bg-white rounded-3xl border-0 shadow-2xl flex flex-col max-h-[90vh]"
                    // Desabilita interação fora se estiver no sucesso
                    onInteractOutside={(e) => {
                        if (currentStep === 'success') {
                            e.preventDefault();
                        }
                    }}
                    // Desabilita ESC se estiver no sucesso
                    onEscapeKeyDown={(e) => {
                        if (currentStep === 'success') {
                            e.preventDefault();
                        }
                    }}
                >

                    <div className="p-6 pb-2 relative z-10 bg-white shrink-0">
                        <DialogHeader>
                            <DialogTitle className="text-2xl font-black text-gray-900 flex items-center gap-2">
                                {currentStep === 'payment' && <><Wallet className="text-primary w-6 h-6" /> Pagamento Pix</>}
                                {currentStep === 'upload' && <><UploadCloud className="text-primary w-6 h-6" /> Comprovante</>}
                                {currentStep === 'success' && <><CheckCircle2 className="text-green-500 w-6 h-6" /> Tudo Certo!</>}
                            </DialogTitle>
                            <DialogDescription className="truncate">
                                {currentStep === 'payment' && `Para: ${selectedPlan?.nome} (${selectedPlan?.preco})`}
                                {currentStep === 'upload' && "Envie o comprovante para confirmar."}
                                {currentStep === 'success' && "Bem-vindo(a) à CPP Extreme!"}
                            </DialogDescription>
                        </DialogHeader>
                    </div>

                    <div className="px-6 pb-8 overflow-y-auto custom-scrollbar flex-1">
                        <AnimatePresence mode="wait">

                            {/* ETAPA 1: QR CODE PIX */}
                            {currentStep === 'payment' && (
                                <motion.div
                                    key="payment"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="flex flex-col items-center gap-4 pt-2"
                                >
                                    <div className="w-full bg-amber-50 border border-amber-200 rounded-lg p-3 flex gap-3 items-start">
                                        <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                        <div className="text-sm text-amber-800">
                                            <p className="font-bold">Atenção ao valor:</p>
                                            <p>Ao pagar, confirme se o valor digitado é <strong>{selectedPlan?.preco}</strong>.</p>
                                        </div>
                                    </div>

                                    <div className="bg-white border-2 border-dashed border-gray-200 p-2 rounded-xl shadow-sm relative w-full flex justify-center bg-gray-50">
                                        <div className="relative w-[240px] h-[340px] md:w-[280px] md:h-[400px]">
                                            <Image
                                                src={GLOBAL_PIX_IMAGE}
                                                alt="QR Code Pix"
                                                fill
                                                className="object-contain rounded-md"
                                                priority
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full space-y-2">
                                        <Label htmlFor="pix-key" className="text-xs text-gray-500 font-semibold uppercase">Chave Pix (E-mail)</Label>
                                        <div className="flex gap-2">
                                            <Input
                                                id="pix-key"
                                                value={GLOBAL_PIX_KEY}
                                                readOnly
                                                className="bg-gray-50 font-mono text-sm text-gray-700 h-12"
                                            />
                                            <Button size="icon" className="h-12 w-12 shrink-0" onClick={handleCopyPix}>
                                                {copied ? <Check className="w-5 h-5 text-green-200" /> : <Copy className="w-5 h-5" />}
                                            </Button>
                                        </div>
                                        <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest mt-1">
                                            Destinatário: {GLOBAL_PIX_NAME}
                                        </p>
                                    </div>

                                    <div className="w-full pt-2">
                                        <Button className="w-full py-6 text-lg font-bold shadow-lg shadow-primary/20" onClick={() => setCurrentStep('upload')}>
                                            Já fiz o pagamento
                                            <ChevronRight className="ml-2 w-5 h-5" />
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {/* ETAPA 2: UPLOAD */}
                            {currentStep === 'upload' && (
                                <motion.div
                                    key="upload"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="flex flex-col items-center justify-center h-full pt-4 space-y-6"
                                >
                                    <div className="w-full">
                                        <Label htmlFor="receipt" className="block text-sm font-medium text-gray-700 mb-2">Anexar Comprovante</Label>
                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="dropzone-file" className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${receiptFile ? 'border-primary bg-primary/5' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}`}>
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4 text-center">
                                                    {receiptFile ? (
                                                        <>
                                                            <CheckCircle2 className="w-10 h-10 text-primary mb-3" />
                                                            <p className="text-sm text-gray-600 font-semibold break-all">{receiptFile.name}</p>
                                                            <p className="text-xs text-gray-500 mt-1">Clique para alterar</p>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <UploadCloud className="w-10 h-10 text-gray-400 mb-3" />
                                                            <p className="text-sm text-gray-500"><span className="font-semibold">Toque para enviar</span></p>
                                                            <p className="text-xs text-gray-400">Print ou PDF do banco</p>
                                                        </>
                                                    )}
                                                </div>
                                                <input
                                                    id="dropzone-file"
                                                    type="file"
                                                    className="hidden"
                                                    accept="image/*,application/pdf"
                                                    onChange={(e) => setReceiptFile(e.target.files?.[0] || null)}
                                                />
                                            </label>
                                        </div>
                                    </div>

                                    <div className="w-full space-y-3">
                                        <Button
                                            className="w-full py-6 font-bold"
                                            disabled={!receiptFile || isLoading}
                                            onClick={handleUploadReceipt}
                                        >
                                            {isLoading ? 'Enviando...' : 'Enviar Comprovante'}
                                        </Button>
                                        <Button variant="ghost" className="w-full text-xs text-gray-400 hover:text-gray-600" onClick={() => setCurrentStep('payment')}>
                                            Voltar para Pagamento
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {/* ETAPA 3: SUCESSO */}
                            {currentStep === 'success' && (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center pt-8 text-center space-y-6"
                                >
                                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-2 animate-bounce">
                                        <Check className="w-12 h-12 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">Comprovante Recebido!</h4>
                                        <p className="text-gray-600 font-medium mt-2 max-w-xs mx-auto">
                                            Redirecionando para o Grupo VIP...
                                        </p>
                                        <p className="text-gray-400 text-xs mt-1">
                                            Se não abrir, clique no botão abaixo.
                                        </p>
                                    </div>
                                    <Button
                                        className="w-full py-6 bg-green-600 hover:bg-green-700 text-white font-bold text-lg shadow-green-200 shadow-xl animate-pulse"
                                        onClick={handleJoinGroup}
                                    >
                                        <MessageCircle className="mr-2 h-5 w-5 fill-current" />
                                        Entrar no Grupo (Obrigatório)
                                    </Button>
                                </motion.div>
                            )}

                        </AnimatePresence>
                    </div>
                </DialogContent>
            </Dialog>

        </section>
    )
}