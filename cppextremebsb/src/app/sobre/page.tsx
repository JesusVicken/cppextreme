'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import {
    Users,
    Trophy,
    Sunrise,
    Waves,
    Anchor,
    ArrowRight
} from "lucide-react"

export default function SobrePage() {

    // Animação padrão para reutilizar
    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">

            {/* --- 1. HERO SECTION (VÍDEO) --- */}
            <section className="relative h-screen w-full overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
                >
                    <source src="/cpp2.mp4" type="video/mp4" />
                </video>

                {/* Gradiente para integrar o vídeo ao fundo preto */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-6"
                    >
                        <Image
                            src="/logocpp.png"
                            alt="CPP Extreme Logo"
                            width={300}
                            height={150}
                            className="w-48 md:w-72 lg:w-96 brightness-0 invert drop-shadow-2xl"
                        />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl md:text-3xl font-light tracking-[0.2em] uppercase text-zinc-300"
                    >
                        Conexão. Força. Natureza.
                    </motion.h1>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <ArrowRight className="rotate-90 w-6 h-6 text-white/50" />
                </motion.div>
            </section>

            {/* --- 2. SOBRE A CPP (IDENTIDADE) --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <motion.div {...fadeInUp} className="space-y-8 relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
                                Nascida no Mar,<br />
                                <span className="text-zinc-600">Criada no Lago.</span>
                            </h2>
                            <div className="w-20 h-1 bg-white"></div>
                            <div className="text-lg text-zinc-400 space-y-6 leading-relaxed font-light">
                                <p>
                                    A <strong className="text-white">CPP Extreme BSB</strong> não é apenas uma escola, é um coletivo nascido da paixão pelo oceano em Vitória (2012) e que encontrou nas águas de Brasília (2018) um novo lar para expandir limites.
                                </p>
                                <p>
                                    Nossa identidade é marcada pela intensidade e técnica. Oferecemos uma estrutura profissional para quem busca desde o lazer contemplativo até a alta performance em competições. Aqui, cada remada é um compromisso com a superação.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeInUp}
                            className="relative h-[500px] w-full rounded-sm overflow-hidden group"
                        >
                            <Image
                                src="/cpp-sol.jpg"
                                alt="Equipe CPP Extreme"
                                fill
                                // AJUSTE: Removido 'grayscale' e 'group-hover:grayscale-0'
                                className="object-cover transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                            />
                            {/* Borda decorativa */}
                            <div className="absolute inset-4 border border-white/20 z-10 pointer-events-none"></div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* --- 3. SOBRE A CANOA HAVAIANA (O ESPORTE) --- */}
            <section className="py-24 bg-zinc-900 border-y border-zinc-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">

                        <motion.div {...fadeInUp} className="space-y-8 lg:w-1/2">
                            <div className="flex items-center gap-4 text-zinc-500 mb-2">
                                <Anchor size={24} />
                                <span className="uppercase tracking-widest text-sm font-bold">A Cultura Va'a</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold uppercase text-white">
                                Mais que um Esporte, <br /> Um Legado Milenar.
                            </h2>
                            <div className="text-lg text-zinc-400 space-y-6 leading-relaxed font-light">
                                <p>
                                    A <strong>Canoa Havaiana</strong> (ou <em>Va'a</em> / <em>Outrigger Canoe</em>) é uma embarcação ancestral do Triângulo Polinésio. Mais do que força física, ela exige <strong>sincronia</strong> (Kotahitanga).
                                </p>
                                <p>
                                    Remar em uma canoa OC6 (para 6 pessoas) ensina que o coletivo é mais forte que o individual. Trabalhamos respiração, biomecânica, leitura da natureza e o espírito de equipe ("Ohana"). É uma meditação ativa em movimento.
                                </p>
                            </div>
                        </motion.div>

                        {/* Grid de detalhes do esporte */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            <div className="bg-black p-8 border border-zinc-800 hover:border-white/50 transition-colors duration-300">
                                <Users className="w-10 h-10 text-white mb-4" />
                                <h3 className="text-xl font-bold mb-2">Sincronia</h3>
                                <p className="text-zinc-500 text-sm">O ritmo único da equipe impulsiona a canoa, não a força bruta individual.</p>
                            </div>
                            <div className="bg-black p-8 border border-zinc-800 hover:border-white/50 transition-colors duration-300">
                                <Waves className="w-10 h-10 text-white mb-4" />
                                <h3 className="text-xl font-bold mb-2">Conexão</h3>
                                <p className="text-zinc-500 text-sm">Contato direto com a água e a natureza, proporcionando saúde mental.</p>
                            </div>
                            <div className="bg-black p-8 border border-zinc-800 hover:border-white/50 transition-colors duration-300">
                                <Trophy className="w-10 h-10 text-white mb-4" />
                                <h3 className="text-xl font-bold mb-2">Disciplina</h3>
                                <p className="text-zinc-500 text-sm">Foco, técnica e resiliência são pilares da cultura Va'a.</p>
                            </div>
                            <div className="bg-black p-8 border border-zinc-800 hover:border-white/50 transition-colors duration-300">
                                <Sunrise className="w-10 h-10 text-white mb-4" />
                                <h3 className="text-xl font-bold mb-2">Estilo de Vida</h3>
                                <p className="text-zinc-500 text-sm">Acordar cedo, ver o sol nascer e começar o dia com energia.</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* --- 4. GALERIA DE MODALIDADES (IMAGENS FORNECIDAS) --- */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
                        Nossas Modalidades
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Do treino intenso ao momento de contemplação. Escolha a sua experiência.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 h-[600px] md:h-[500px]">
                    {/* Card 1 - Regular */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="relative group h-full border-r border-zinc-800 overflow-hidden"
                    >
                        <Image
                            src="/regular.jpg"
                            alt="Aulas Regulares de Canoa"
                            fill
                            // AJUSTE: Removido 'grayscale'
                            className="object-cover transition-all duration-700 scale-100 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all duration-500 flex flex-col justify-end p-8">
                            <h3 className="text-2xl font-bold uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Aulas Regulares</h3>
                            <p className="text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm">
                                Treinos de segunda a sábado para todos os níveis. Técnica e condicionamento.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2 - Corporativo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative group h-full border-r border-zinc-800 overflow-hidden"
                    >
                        <Image
                            src="/corporativo.jpg"
                            alt="Eventos Corporativos"
                            fill
                            // AJUSTE: Removido 'grayscale'
                            className="object-cover transition-all duration-700 scale-100 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all duration-500 flex flex-col justify-end p-8">
                            <h3 className="text-2xl font-bold uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Corporativo</h3>
                            <p className="text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm">
                                Team building e dinâmicas empresariais. Fortaleça a sincronia da sua equipe.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3 - Experiências (Pôr do Sol) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative group h-full overflow-hidden"
                    >
                        <Image
                            src="/porsol.jpeg"
                            alt="Experiências CPP Extreme"
                            fill
                            // AJUSTE: Removido 'grayscale'
                            className="object-cover transition-all duration-700 scale-100 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-all duration-500 flex flex-col justify-end p-8">
                            <h3 className="text-2xl font-bold uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Experiências</h3>
                            <p className="text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm">
                                Remadas da Lua Cheia, Nascer do Sol e eventos temáticos inesquecíveis.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- 5. CTA FINAL --- */}
            <section className="py-24 bg-white text-black text-center relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8">
                            Faça Parte do Time
                        </h2>
                        <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto">
                            Não é preciso experiência prévia. Apenas a vontade de desafiar seus limites e se conectar com a natureza.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/5561998219177?text=Olá! Gostaria de agendar uma aula experimental na CPP Extreme."
                                target="_blank"
                                className="px-8 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-xl hover:-translate-y-1"
                            >
                                Agendar Aula Experimental
                            </a>
                            <a
                                href="https://wa.me/5561998219177?text=Olá! Gostaria de saber mais sobre os passeios e experiências."
                                target="_blank"
                                className="px-8 py-4 bg-transparent border-2 border-black text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all hover:-translate-y-1"
                            >
                                Grupos de Passeio
                            </a>
                        </div>
                    </motion.div>
                </div>
                {/* Textura de fundo sutil - AJUSTE: Removido 'grayscale' */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/cpp-sol.jpg')] bg-cover opacity-5 pointer-events-none"></div>
            </section>

        </main>
    )
}