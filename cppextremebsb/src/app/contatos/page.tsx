'use client'

import Image from 'next/image'
import { useEffect } from 'react'
// REMOVIDO: import AOS from 'aos' e import 'aos/dist/aos.css' (Já está no layout global via aos-init.tsx)
import {
    MapPin,
    Phone,
} from 'lucide-react'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
} from 'react-icons/fa'

const brands = [
    { name: 'Ascade', logo: '/logo-ascade.png' },
    { name: 'CanoMAMA', logo: '/canoMAMAlogo.png' },
    { name: 'Wellhub', logo: '/wellhub-logo.svg' },
]

export default function ContatosPage() {
    // REMOVIDO: useEffect do AOS.init aqui para evitar conflito. O layout global já cuida disso.

    const whatsappNumber = '61998219177'
    const whatsappMessage = 'Olá, gostaria de mais informações sobre as aulas de remo na CPP Extreme!'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    return (
        <section className="flex flex-col min-h-screen bg-zinc-50">

            {/* --- 1. SEÇÃO DE PARCEIROS (Cores Reais) --- */}
            <div className="bg-white py-16 md:py-24 border-b border-zinc-100">
                <div className="container mx-auto px-4" data-aos="fade-up">
                    <h2 className="text-2xl md:text-3xl font-black text-center text-zinc-900 mb-12 uppercase tracking-wider">
                        Nossos Parceiros
                    </h2>

                    {/* Grid flexível e responsivo */}
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
                        {brands.map((item, index) => (
                            <div
                                key={index}
                                className="group relative w-36 h-20 md:w-52 md:h-32 flex items-center justify-center p-2 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110"
                            >
                                <Image
                                    src={item.logo}
                                    alt={`Parceiro ${item.name}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- 2. FOOTER / INFORMAÇÕES PRINCIPAIS --- */}
            <div className="flex-grow bg-zinc-950 text-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">

                        {/* Coluna 1: Logo e CTA */}
                        <div data-aos="fade-up" className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                            <div className="relative w-40 h-20 md:w-48 md:h-24">
                                <Image
                                    src="/logocpp.png"
                                    alt="Logo CPP Extreme"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs md:max-w-sm font-light">
                                Mais que uma escola de canoagem, um estilo de vida. Conectando pessoas à natureza, saúde e superação nas águas de Brasília.
                            </p>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-green-500/30 group hover:-translate-y-1"
                            >
                                <FaWhatsapp className="w-6 h-6" />
                                Fale Conosco
                            </a>
                        </div>

                        {/* Coluna 2: Onde Estamos */}
                        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
                            <h3 className="text-lg font-bold uppercase tracking-widest text-zinc-500">
                                Onde Estamos
                            </h3>
                            <ul className="space-y-6 text-zinc-300 w-full max-w-xs">
                                <li className="flex flex-col md:flex-row items-center md:items-start gap-4 group p-4 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                                    <div className="bg-zinc-800 p-3 rounded-full text-blue-500 group-hover:text-blue-400 transition-colors shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Telefone/WhatsApp</p>
                                        <span className="text-lg font-medium text-white">
                                            (61) 99821-9177
                                        </span>
                                    </div>
                                </li>
                                <li className="flex flex-col md:flex-row items-center md:items-start gap-4 group p-4 rounded-2xl bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
                                    <div className="bg-zinc-800 p-3 rounded-full text-red-500 group-hover:text-red-400 transition-colors shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Localização</p>
                                        <span className="text-sm leading-relaxed text-white block">
                                            <strong>Clube ASCADE</strong> <br />
                                            St. de Clubes Esportivos Sul Trecho 2, Cj 10, Lote 10. Brasília - DF
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Coluna 3: Redes Sociais */}
                        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
                            <h3 className="text-lg font-bold uppercase tracking-widest text-zinc-500">
                                Siga a CPP
                            </h3>
                            <p className="text-zinc-400 text-sm font-light">
                                Acompanhe nossos treinos e eventos:
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://www.instagram.com/cppextremebsb/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-zinc-900 p-4 rounded-2xl hover:bg-pink-600 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-pink-600/20 group"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram className="w-7 h-7 text-zinc-400 group-hover:text-white transition-colors" />
                                </a>
                                <a
                                    href="https://www.facebook.com/CPPExtreme"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-zinc-900 p-4 rounded-2xl hover:bg-blue-600 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-blue-600/20 group"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook className="w-7 h-7 text-zinc-400 group-hover:text-white transition-colors" />
                                </a>
                                <a
                                    href="https://www.youtube.com/@cppextreme"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-zinc-900 p-4 rounded-2xl hover:bg-red-600 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-red-600/20 group"
                                    aria-label="YouTube"
                                >
                                    <FaYoutube className="w-7 h-7 text-zinc-400 group-hover:text-white transition-colors" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* --- 3. MAPA (Link Corrigido) --- */}
            <div className="w-full h-[300px] md:h-[500px]">
                <iframe
                    title="Localização CPP Extreme na Ascade"
                    // LINK CORRIGIDO DA CPP EXTREMO
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.297405626388!2d-47.85451242499684!3d-15.818687484823482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a25c82d57ad6d%3A0xf59dbb7e8c7889a9!2sCpp%20Extremo!5e0!3m2!1spt-BR!2sbr!4v1709666000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Copyright */}
            <div className="bg-black text-zinc-600 text-[10px] md:text-xs text-center py-6 uppercase tracking-widest font-medium">
                © {new Date().getFullYear()} CPP Extreme BSB. Todos os direitos reservados.
            </div>
        </section>
    )
}