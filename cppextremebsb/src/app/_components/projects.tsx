'use client'

import { Parallax } from 'react-scroll-parallax'
import { WhatsappLogo } from '@phosphor-icons/react'
import Image from 'next/image'

export default function Projects() {
    return (
        <div
            className="relative h-[700px] md:h-[800px] lg:h-[900px] overflow-hidden"
            data-aos="fade-up"
        >
            <Parallax speed={-20} className="absolute inset-0">
                <div className="relative w-full h-full">
                    <video
                        src="/cpp2.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        style={{ objectPosition: 'center 30%' }}
                    />
                </div>
            </Parallax>

            {/* Overlay e Conteúdo Principal */}
            <div
                className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-10 px-4 space-y-8"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-3xl px-4 drop-shadow-lg">
                    Entre no nosso grupo e fique por dentro da programação de passeios e experiências do CPP Extreme BSB
                </h2>

                {/* Botão para entrar no grupo do WhatsApp */}
                <div
                    className="mt-2 animate-bounce hover:animate-none transition-all duration-300"
                    data-aos="zoom-in"
                    data-aos-delay="600"
                >
                    <a
                        href="https://chat.whatsapp.com/KM0KWPFhgvH2ivlof8QndE"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] text-white flex items-center justify-center gap-3 px-8 py-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 text-lg font-medium"
                        aria-label="Entrar no grupo do WhatsApp"
                    >
                        <WhatsappLogo weight="fill" className="w-7 h-7" />
                        <span>Entrar no grupo</span>
                    </a>
                </div>

                {/* --- ÁREA DO WELLHUB --- */}
                {/* Posicionei um pouco mais para cima (bottom-12) para dar respiro */}
                <div
                    className="absolute bottom-12 flex flex-col items-center gap-3"
                    data-aos="fade-in"
                    data-aos-delay="900"
                >
                    <span className="text-white/80 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold drop-shadow-md">
                        NOSSO NOVO PARCEIRO
                    </span>

                    {/* Aumentei significativamente o tamanho aqui */}
                    <div className="-mt-4 md:-mt-26 transition-transform duration-300 hover:scale-110 cursor-pointer">
                        <Image
                            src="/wellhub-logo.svg"
                            alt="Wellhub"
                            width={500}
                            height={150}
                            className="object-contain drop-shadow-2xl h-20 md:h-62 w-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}