import Image from "next/image"
import cpp1 from "../../../public/cpp-sol.jpg"
import cpp2 from "../../../public/cpp2.jpeg"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export function About() {
    return (
        <section className="bg-white py-16 text-black">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Imagens */}
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

                    {/* Texto */}
                    <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
                        <h2 className="text-4xl font-bold text-black">SOBRE NÓS</h2>

                        <p className="text-gray-700">
                            Somos a base <strong>CPP Extreme BSB</strong>, coletivo de canoa polinésia nascida em Vitória em 2012 e em Brasília desde 2018.
                        </p>
                        <p className="text-gray-700">
                            Na <strong>CPP Extreme BSB</strong> oferecemos remadas regulares de segunda a sábado para todos os níveis. A escola é para quem quer aprender a remar com o objetivo de participar de competições, expedições e travessias com segurança e conforto.
                        </p>
                        <p className="text-gray-700">
                            Também oferecemos diferentes tipos de passeios que acontecem fora dos horários regulares, como a remada da lua cheia, nascer do sol e remadas festivas.
                        </p>
                        <p className="text-gray-700">
                            Nossa estrutura conta com canoas coletivas e individuais (o treino com embarcação individual depende do número de pessoas na turma no dia).
                        </p>
                        <p className="text-gray-700">
                            A cada semana, focamos em um aspecto da sua remada: respiração, balanço, e movimento do corpo.
                        </p>
                        <p className="text-gray-700 font-semibold italic">
                            Deixe a canoa mudar a sua vida!
                        </p>
                        {/* Botões */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                target="_blank"
                                href={`https://wa.me/5561998219177?text=Olá! Gostaria de saber mais sobre as remadas de Canoa Havaiana da CPP Extreme BSB.`}
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
