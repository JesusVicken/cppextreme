// 'use client'

// import { Parallax } from 'react-scroll-parallax'
// import Image from 'next/image'

// export default function Projects() {
//     return (
//         <div className="relative h-[700px] md:h-[800px] lg:h-[900px] overflow-hidden">
//             <Parallax speed={-20} className="absolute inset-0">
//                 <div className="relative w-full h-full">
//                     <Image
//                         src="/remadalinda.jpg"
//                         alt="Canoa Havaiana"
//                         fill
//                         className="object-cover"
//                         style={{
//                             objectPosition: 'center 30%',
//                         }}
//                         priority
//                     />
//                 </div>
//             </Parallax>

//             <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
//                 <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
//                     Entre no nosso grupo e fique por dentro da programação de passeios e experiências do CPP Extreme BSB
//                 </h2>
//             </div>
//         </div>
//     )
// }



'use client'

import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'
import { WhatsappLogo } from '@phosphor-icons/react'

export default function Projects() {
    return (
        <div
            className="relative h-[700px] md:h-[800px] lg:h-[900px] overflow-hidden"
            data-aos="fade-up"
        >
            <Parallax speed={-20} className="absolute inset-0">
                <div className="relative w-full h-full">
                    <Image
                        src="/remadalinda.jpg"
                        alt="Canoa Havaiana"
                        fill
                        className="object-cover"
                        style={{
                            objectPosition: 'center 30%',
                        }}
                        priority
                    />
                </div>
            </Parallax>

            <div
                className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-10 px-4 space-y-8"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-3xl px-4">
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
            </div>
        </div>
    )
}
