import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { Check } from "lucide-react"
import cpp1 from "../../../public/canoa1.jpg"
import Image from "next/image"

export function Hero() {
    const whatsappMessage = encodeURIComponent(
        "Olá, visitei o site da CPP Extreme Brasília e gostaria de mais informações sobre as aulas de canoa havaiana!"
    )

    return (
        <section className="bg-[#060505] text-white relative overflow-hidden">
            {/* Imagem de fundo mobile */}
            <div>
                <Image
                    src={cpp1}
                    alt='Foto da equipe CPP remando no Lago Paranoá'
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-20 md:hidden'></div>
            </div>

            <div className='container mx-auto pt-16 pb-16 px-4 relative'>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-12'>

                    {/* Bloco de texto */}
                    <div className='space-y-6' data-aos="fade-up">
                        <h1 className="text-3xl md:text-4xl font-bold leading-10">
                            CPP Extreme Brasilia: Canoa Polinesia é estilo de vida
                        </h1>

                        {/* Tópicos em colunas */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* O que oferecemos */}
                            <div>
                                <p className="text-base md:text-lg font-semibold mb-2">
                                    O que oferecemos:
                                </p>
                                <ul className="text-sm md:text-base space-y-2">
                                    <li className="flex items-center gap-2">
                                        <Check className="text-green-600" />
                                        Remadas de canoa Polinésia (Havaiana)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="text-green-600" />
                                        Desafios e Aventuras Extreme
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="text-green-600" />
                                        Experiências de Saúde e bem-estar
                                    </li>
                                </ul>
                            </div>

                            {/* Para quem é */}
                            <div>
                                <p className="text-base md:text-lg font-semibold mb-2">
                                    Para pessoas que buscam:
                                </p>
                                <ul className="text-sm md:text-base space-y-2">
                                    <li className="flex items-center gap-2">
                                        <Check className="text-green-600" />
                                        Aprender a remar do zero
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="text-green-600" />
                                        Conectar com a natureza
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="text-green-600" />
                                        Sentir-se bem na água
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="text-green-600" />
                                        Sincronia em equipe
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="text-green-600" />
                                        Conectar com o corpo e respiração
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="text-green-600" />
                                        Se desafiar
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Botão WhatsApp */}
                        <div className="mt-4">
                            <a
                                href={`https://wa.me/5561998219177?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:bg-green-700 transition"
                            >
                                <WhatsappLogo className='w-5 h-5' />
                                Contato via WhatsApp
                            </a>
                        </div>

                        {/* Aula experimental */}
                        <div className="mt-4">
                            <p className="text-sm">
                                Venha fazer sua aula experimental <b className="bg-white text-black px-2 py-1 rounded-md">gratuita</b>
                            </p>
                        </div>
                    </div>

                    {/* Imagem lateral desktop */}
                    <div
                        className="hidden md:block relative w-full h-[400px] rounded-3xl overflow-hidden"
                        data-aos="zoom-in"
                    >
                        <Image
                            src={cpp1}
                            alt="Equipe CPP remando juntos"
                            fill
                            quality={100}
                            className="object-cover hover:scale-110 duration-300"
                            priority
                        />
                    </div>

                </article>
            </div>
        </section>
    )
}
