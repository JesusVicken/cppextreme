'use client'

import Image from 'next/image'
import {
    FacebookLogo,
    InstagramLogo,
    YoutubeLogo,
    WhatsappLogo,
} from '@phosphor-icons/react'
import { Anchor } from 'lucide-react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Imagens dos parceiros
import ondasupLogo from '../../../public/ondasup.jpg'
import ascadeLogo from '../../../public/logo-ascade.png'
import filhooosLogo from '../../../public/filhooos.jpg'
import canoMAMALogo from '../../../public/canoMAMAlogo.png'

const brands = [
    { name: 'Ondasup', logo: ondasupLogo },
    { name: 'Ascade', logo: ascadeLogo },
    { name: 'Filhooos', logo: filhooosLogo },
    { name: 'CanoMAMA', logo: canoMAMALogo },
]

export default function ContatosPage() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    const whatsappNumber = '61998219177'
    const whatsappMessage =
        'Olá, gostaria de mais informações sobre as aulas de remo na CPP Extreme!'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`

    return (
        <section className="bg-white text-black min-h-screen">
            <div className="container mx-auto px-4 py-16 space-y-16">

                {/* Parceiros */}
                <div data-aos="fade-up" className="space-y-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center flex items-center justify-center gap-2">
                        <Anchor className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                        Nossos Parceiros
                    </h2>

                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                        {brands.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 hover:bg-gray-200 transition p-4 rounded-xl shadow-sm flex items-center justify-center w-[160px] h-[100px]"
                            >
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={150}
                                    height={80}
                                    quality={100}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contato e informações */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {/* Sobre */}
                    <div data-aos="fade-up-left">
                        <h3 className="text-2xl font-semibold mb-3">CPP Extreme Brasília</h3>
                        <p className="text-gray-700 mb-5">
                            Promovendo inclusão social através do esporte e aventura.
                        </p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition text-white font-semibold px-5 py-2 rounded-lg"
                        >
                            <WhatsappLogo className="w-5 h-5" />
                            Contato via WhatsApp
                        </a>
                    </div>

                    {/* Contatos */}
                    <div data-aos="flip-up">
                        <h3 className="text-2xl font-semibold mb-3">Contatos</h3>
                        <ul className="space-y-2 text-gray-800">
                            <li>📞 Telefone: <strong>(61) 99821-9177</strong></li>
                            <li>📍 Local: Ascade - Associação dos Servidores da Câmara dos Deputados</li>
                            <li>🗺️ Brasília, DF</li>
                        </ul>
                    </div>

                    {/* Redes sociais */}
                    <div data-aos="fade-up-right">
                        <h3 className="text-2xl font-semibold mb-3">Redes Sociais</h3>
                        <div className="flex gap-4 mt-2">
                            <a
                                href="https://www.facebook.com/CPPExtreme"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 transition"
                            >
                                <FacebookLogo className="w-8 h-8" />
                            </a>
                            <a
                                href="https://www.instagram.com/cppextremebsb/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-500 transition"
                            >
                                <InstagramLogo className="w-8 h-8" />
                            </a>
                            <a
                                href="https://www.youtube.com/@cppextreme"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-red-600 transition"
                            >
                                <YoutubeLogo className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mapa */}
            <div className="w-full h-[300px] md:h-[400px] lg:h-[450px]">
                <iframe
                    title="Localização CPP Extreme na Ascade"
                    src="https://www.google.com/maps?q=Ascade+-+Associação+dos+Servidores+da+Câmara+dos+Deputados,+Brasília+-+DF&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    style={{ border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}
