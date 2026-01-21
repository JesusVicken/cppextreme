'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    ChevronRight,
    Moon,
    Sun,
    Activity,
    Users,
    Info,
    MessageCircle,
    AlertTriangle,
    Wallet,
    UploadCloud,
    CheckCircle2,
    Copy,
    Check,
    Clock
} from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from 'next/image'

// IMPORTANTE: O caminho para o seu arquivo de upload que criamos antes.
// Se der erro de caminho, tente mudar para: '../../planos/upload'
import { uploadToDrive } from '@/app/planos/upload'

// --- TYPES ---
type PaymentStep = 'payment' | 'upload' | 'success';

interface Experiencia {
    nome: string;
    descricao: string;
    imagem: string;
    preco: string;
}

export default function CppPage() {
    // --- STATE MANAGEMENT ---
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentStep, setCurrentStep] = useState<PaymentStep>('payment')
    const [selectedExperience, setSelectedExperience] = useState<Experiencia | null>(null)
    const [receiptFile, setReceiptFile] = useState<File | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' })
    }, [])

    // --- CONFIGURAÇÃO PIX ---
    const GLOBAL_PIX_IMAGE = '/qrcode.jpg'
    const GLOBAL_PIX_KEY = 'marcus.lopesss@gmail.com'
    const GLOBAL_PIX_NAME = 'MARCUS LOPES GOMES'
    const GLOBAL_GROUP_LINK = "https://chat.whatsapp.com/LteTVmibhZBB4hAjO6E6Dn"

    // --- HANDLERS ---
    const handleSelectExperience = (exp: Experiencia) => {
        setSelectedExperience(exp)
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
        if (!receiptFile || !selectedExperience) return

        setIsLoading(true)

        try {
            const formData = new FormData()
            formData.append('file', receiptFile)
            // Usa o nome da experiência como identificador no arquivo
            formData.append('plano', `EXP_${selectedExperience.nome}`)

            const result = await uploadToDrive(formData)

            if (result.success) {
                setIsLoading(false)
                setCurrentStep('success')

                // --- TRAVA DE SEGURANÇA: AUTO-REDIRECT ---
                setTimeout(() => {
                    window.open(GLOBAL_GROUP_LINK, '_blank')
                }, 1500)

            } else {
                throw new Error(result.error || 'Erro desconhecido')
            }

        } catch (error) {
            console.error("Erro no upload:", error)
            setIsLoading(false)
            alert("Ocorreu um erro ao enviar. Tente novamente.")
        }
    }

    const handleJoinGroup = () => {
        window.open(GLOBAL_GROUP_LINK, '_blank')
        setIsModalOpen(false)
    }

    // --- DADOS ---
    const niveis = [
        {
            nivel: 'Nível 1',
            titulo: 'Iniciante',
            descricao: 'Para todos os públicos, sem exigência física.',
            caracteristicas: ['Duração: 1-2 horas', 'Águas calmas', 'Sem experiência prévia'],
            cor: 'bg-emerald-50 border-emerald-200 text-emerald-800',
        },
        {
            nivel: 'Nível 2',
            titulo: 'Intermediário',
            descricao: 'Exige condicionamento físico básico.',
            caracteristicas: ['Duração: 2-3 horas', 'Pequenas ondulações', 'Desafios leves'],
            cor: 'bg-blue-50 border-blue-200 text-blue-800',
        },
        {
            nivel: 'Nível 3',
            titulo: 'Avançado',
            descricao: 'Exige boa condição física e experiência.',
            caracteristicas: ['Duração: 3-4 horas', 'Águas abertas', 'Técnica exigida'],
            cor: 'bg-amber-50 border-amber-200 text-amber-800',
        },
        {
            nivel: 'Nível 4',
            titulo: 'Expert',
            descricao: 'Para remadores experientes e atléticos.',
            caracteristicas: ['Duração: 4+ horas', 'Condições variáveis', 'Desafios físicos'],
            cor: 'bg-orange-50 border-orange-200 text-orange-800',
        },
        {
            nivel: 'Nível 5',
            titulo: 'Extremo',
            descricao: 'Excepcional condicionamento físico necessário.',
            caracteristicas: ['Expedições multi-dia', 'Condições severas', 'Teste prévio'],
            cor: 'bg-rose-50 border-rose-200 text-rose-800',
        },
    ]

    const modalidades = [
        {
            titulo: 'Experiências Contemplativas',
            subtitulo: 'Conexão e Natureza',
            nivelLabel: 'Nível 1',
            icone: <Moon className="w-6 h-6" />,
            corTema: 'text-indigo-600',
            experiencias: [
                { nome: 'Remada da Lua Cheia', preco: 'R$ 80,00', descricao: 'Remadas noturnas sob o luar com vista privilegiada.', imagem: '/noite.jpg' },
                { nome: 'Remada Pôr do Sol', preco: 'R$ 70,00', descricao: 'Aprecie o pôr do sol no lago com cores deslumbrantes.', imagem: '/por.jpg' },
                { nome: 'Remada Nascer do Sol', preco: 'R$ 70,00', descricao: 'Comece o dia com energia renovada.', imagem: '/corporativo.jpg' },
                { nome: 'Remada com Meditação', preco: 'R$ 90,00', descricao: 'Prática de mindfulness na canoa com instrutor.', imagem: '/iniciante.jpg' },
                { nome: 'Remada Festiva', preco: 'R$ 100,00', descricao: 'Eventos especiais com música e cultura.', imagem: '/sol.jpg' },
                { nome: 'Remada 60+', preco: 'R$ 60,00', descricao: 'Atividade segura e adaptada para 60+.', imagem: '/remadalinda.jpg' },
            ],
        },
        {
            titulo: 'Experiências Wellness',
            subtitulo: 'Saúde e Bem-estar',
            nivelLabel: 'Nível 2',
            icone: <Activity className="w-6 h-6" />,
            corTema: 'text-teal-600',
            experiencias: [
                { nome: 'Remada com Picnic', preco: 'R$ 120,00', descricao: 'Remada + piquenique gourmet em ilha privativa.', imagem: '/experimental.jpg' },
                { nome: 'Remada com Yoga', preco: 'R$ 100,00', descricao: 'Prática de yoga em plataforma flutuante.', imagem: '/regular.jpg' },
                { nome: 'Remada até Ponte JK', preco: 'R$ 90,00', descricao: 'Trajeto urbano com vista icônica.', imagem: '/canoa1.jpg' },
            ],
        },
        {
            titulo: 'Aventuras Avançadas',
            subtitulo: 'Desafio e Superação',
            nivelLabel: 'Nível 3',
            icone: <Sun className="w-6 h-6" />,
            corTema: 'text-amber-600',
            experiencias: [
                { nome: 'Remada até a Ermida', preco: 'R$ 110,00', descricao: 'Trajeto de 12km até o santuário.', imagem: '/canoa3.jpg' },
                { nome: 'Remada até a Barragem', preco: 'R$ 140,00', descricao: 'Desafio de 18km com vistas impressionantes.', imagem: '/canoa5.jpg' },
            ],
        },
        {
            titulo: 'Expedições',
            subtitulo: 'Jornadas Épicas',
            nivelLabel: 'Níveis 3-5',
            icone: <Users className="w-6 h-6" />,
            corTema: 'text-rose-600',
            experiencias: [
                { nome: 'Arraial à Corumbá', preco: 'R$ 450,00', descricao: 'Expedição de 2 dias com pernoite (Nível 4).', imagem: '/corumba.jpg' },
                { nome: 'Porto Seguro à Arraial', preco: 'R$ 200,00', descricao: 'Trajeto costeiro de 15km (Nível 2).', imagem: '/porto.jpg' },
                { nome: 'Abrolhos', preco: 'Sob Consulta', descricao: 'Remada em águas abertas (Nível 3).', imagem: '/abrolhos.jpg' },
                { nome: 'Praia do Forte', preco: 'R$ 180,00', descricao: 'Trajeto com parada em praia isolada (Nível 2).', imagem: '/forte.jpg' },
            ],
        },
    ]

    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 py-12 md:py-20">

            {/* --- HERO SECTION --- */}
            <div className="max-w-7xl mx-auto mb-20">
                <div
                    className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                    data-aos="fade-up"
                >
                    <video
                        src="/cpp.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transform scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Badge className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border-white/40 uppercase tracking-widest mb-4 px-4 py-1">
                                Experiências CPP
                            </Badge>
                            <p className="text-white/80 text-lg md:text-xl max-w-2xl font-medium">
                                Descubra Brasília sob uma nova perspectiva em nossas canoas polinésias no Lago Paranoá.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* --- INTRODUÇÃO --- */}
            <div className="max-w-4xl mx-auto text-center mb-24 space-y-6" data-aos="fade-up">
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                    Nossos Passeios
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Nossos passeios são experiências guiadas de canoa polinésia que conectam <span className="font-bold text-foreground">corpo, água e coletivo</span>.
                    Cada saída é pensada para respeitar o ritmo do grupo, as condições do dia e o nível de experiência dos remadores.
                </p>
            </div>

            {/* --- MODALIDADES (LOOP) --- */}
            <div className="space-y-32">
                {modalidades.map((modalidade, index) => (
                    <div key={index} id={`modalidade-${index}`} className="scroll-mt-24">
                        {/* Cabeçalho da Seção */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 max-w-7xl mx-auto" data-aos="fade-up">
                            <div className="flex items-start gap-4">
                                <div className={`p-4 rounded-2xl bg-gray-50 dark:bg-zinc-900 ${modalidade.corTema}`}>
                                    {modalidade.icone}
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <h3 className="text-3xl md:text-4xl font-black tracking-tight uppercase">
                                            {modalidade.titulo}
                                        </h3>
                                    </div>
                                    <p className="text-lg text-muted-foreground font-medium">
                                        {modalidade.subtitulo}
                                    </p>
                                </div>
                            </div>
                            <Badge variant="secondary" className="self-start md:self-auto text-sm px-4 py-1">
                                {modalidade.nivelLabel}
                            </Badge>
                        </div>

                        {/* Grid de Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                            {modalidade.experiencias.map((exp, expIndex) => (
                                <motion.div
                                    key={expIndex}
                                    whileHover={{ y: -8 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    data-aos="fade-up"
                                    data-aos-delay={expIndex * 100}
                                >
                                    <Card className="h-full border-none shadow-lg bg-card overflow-hidden rounded-3xl flex flex-col group">
                                        {/* Imagem */}
                                        <div className="relative h-64 w-full overflow-hidden">
                                            <Image
                                                src={exp.imagem}
                                                alt={exp.nome}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                            {/* Preço flutuante na imagem */}
                                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-bold border border-white/20">
                                                {exp.preco}
                                            </div>
                                        </div>

                                        {/* Conteúdo */}
                                        <CardContent className="flex-1 flex flex-col p-6 md:p-8 relative">
                                            <div className="mb-4">
                                                <h4 className="text-2xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                                                    {exp.nome}
                                                </h4>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {exp.descricao}
                                                </p>
                                            </div>

                                            <div className="mt-auto pt-6">
                                                {/* Botão Modificado para abrir Modal de Pagamento */}
                                                <Button
                                                    onClick={() => handleSelectExperience(exp)}
                                                    className="w-full rounded-xl py-6 font-bold text-md shadow-md hover:shadow-xl transition-all gap-2 cursor-pointer"
                                                >
                                                    <Wallet className="w-5 h-5" />
                                                    Reservar Agora
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* --- NÍVEIS DE EXPERIÊNCIA --- */}
            <div className="border-t border-border pt-20 pb-10 max-w-7xl mx-auto" id="niveis-info" data-aos="fade-up">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4">Informação Técnica</Badge>
                    <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                        <Info className="w-6 h-6 text-primary" />
                        Entenda os Níveis
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Utilize este guia para entender onde você se encaixa melhor.
                        A segurança é nossa prioridade número um.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {niveis.map((nivel, index) => (
                        <Card
                            key={index}
                            className={`border transition-all hover:shadow-md ${nivel.cor} bg-opacity-30 dark:bg-opacity-10`}
                        >
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-sm uppercase tracking-wider opacity-70">
                                        {nivel.nivel}
                                    </span>
                                </div>
                                <CardTitle className="text-lg font-bold">
                                    {nivel.titulo}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm font-medium mb-4 min-h-[40px]">
                                    {nivel.descricao}
                                </p>
                                <ul className="space-y-2">
                                    {nivel.caracteristicas.map((c, i) => (
                                        <li key={i} className="text-xs flex items-start gap-1.5 opacity-90">
                                            <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0" />
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground bg-gray-50 dark:bg-zinc-900 py-3 rounded-lg border border-dashed border-gray-200 dark:border-zinc-800">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    <span>A classificação dos níveis pode ser alterada conforme as condições climáticas do dia.</span>
                </div>
            </div>

            {/* --- MODAL DE PAGAMENTO --- */}
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
                                {currentStep === 'payment' && `Reserva: ${selectedExperience?.nome} (${selectedExperience?.preco})`}
                                {currentStep === 'upload' && "Envie o comprovante para confirmar sua aventura."}
                                {currentStep === 'success' && "Sua experiência foi agendada!"}
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
                                            <p className="font-bold">Valor da Experiência:</p>
                                            <p>Realize o pagamento exato de <strong>{selectedExperience?.preco}</strong>.</p>
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
                                        <Label htmlFor="receipt" className="block text-sm font-medium text-gray-700 mb-2">
                                            Anexar Comprovante
                                        </Label>
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

        </div>
    )
}