import Image from "next/image"
import cpp1 from "../../../public/cpp-sol.jpg"
import cpp2 from "../../../public/cpp2.jpeg"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export function About() {
    return (
        <section className="bg-white py-16 text-black">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={cpp1}
                                alt="Remadores na canoa havaiana"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-2xl overflow-hidden shadow-lg bg-white">
                            <Image
                                src={cpp2}
                                alt="Canoa havaiana no Lago Paranoá"
                                fill
                                quality={100}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
                        <h2 className="text-4xl font-bold text-black">SOBRE NÓS</h2>

                        <p className="text-gray-700">
                            Somos o <strong>CPP Extreme Brasília</strong>, uma equipe apaixonada por canoa havaiana em Brasília!
                            Nosso propósito vai além da remada — promovemos bem-estar, conexão com a natureza e espírito de equipe.
                            Realizamos treinos para todos os níveis, desde iniciantes até atletas experientes, com foco na técnica, segurança e diversão.
                            As águas do Lago Paranoá são nosso templo, e a tradição polinésia, nossa inspiração.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-green-600" />
                                Atividades para iniciantes e experientes
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-green-600" />
                                Aulas, treinos e passeios guiados no Lago Paranoá
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-green-600" />
                                Equipe de competição VA'A
                            </li>
                        </ul>

                        <p className="text-gray-700">
                            Deseja participar dos nossos <strong>grupos de passeios</strong> ou tirar dúvidas diretamente com a equipe?
                            Utilize os botões abaixo para falar conosco ou entrar no grupo oficial de passeios da <strong>CPP Extreme BSB</strong>!
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a
                                target="_blank"
                                href={`https://wa.me/5561998219177?text=Olá! Gostaria de saber mais sobre as aulas de Canoa Havaiana da CPP Extreme BSB.`}
                                className="bg-green-600 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:bg-gray-800 transition"
                            >
                                <WhatsappLogo className="w-5 h-5" />
                                Contato via WhatsApp
                            </a>

                            <a
                                target="_blank"
                                href={`https://wa.me/5561998219177?text=Olá! Gostaria de saber mais sobre os passeios de Canoa Havaiana da CPP Extreme BSB.`}
                                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                            >
                                <WhatsappLogo className="w-5 h-5" />
                                Grupo de Passeios
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}