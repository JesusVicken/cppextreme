import Image from "next/image"
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr"
import { Anchor } from "lucide-react"

import ascadeLogo from "../../../public/logo-ascade.png"
import canoMAMALogo from "../../../public/canoMAMAlogo.png"

const brands = [
  { name: "Ascade", logo: ascadeLogo },
  { name: "CanoMAMA", logo: canoMAMALogo },
]

export function Footer() {
  const whatsappNumber = "61998219177"
  const whatsappMessage =
    "Olá, gostaria de mais informações sobre as aulas de remo na CPP Extreme!"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Parceiros */}
        <div
          className="border-b border-white/20 pb-8"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h4 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center gap-3">
            Nossos Parceiros
          </h4>

          <div className="flex flex-wrap justify-center gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center shadow-md"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={150}
                  height={80}
                  quality={100}
                  className="object-contain"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "150px",
                    maxHeight: "80px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Informações */}
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Sobre */}
          <div data-aos="fade-up-left" className="space-y-4">
            <h3 className="text-2xl font-semibold">CPP Extreme Brasília</h3>
            <p className="text-gray-300 leading-relaxed">
              Passeios de Canoa e aventuras em cânions e vivências que despertam o corpo e acalmam a mente.
              Experiências de reconexão com a natureza e com você mesmo(a).
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-600 transition mx-auto md:mx-0"
              aria-label="Contato via WhatsApp"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>
          </div>

          {/* Contatos */}
          <div data-aos="flip-up" className="space-y-4">
            <h3 className="text-2xl font-semibold">Contatos</h3>
            {/* <p>Email: contato@cppextreme.com.br</p> */}
            <p className="text-gray-300">Telefone: (61) 99821-9177</p>
            <p className="text-gray-300">
              Ascade - Associação dos Servidores da Câmara dos Deputados 📍
              Brasília - DF
            </p>
          </div>

          {/* Redes Sociais */}
          <div data-aos="fade-up-right" className="space-y-4">
            <h3 className="text-2xl font-semibold">Redes Sociais</h3>
            <div className="flex gap-5 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/CPPExtreme"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-blue-600 hover:scale-110 transition-transform"
              >
                <FacebookLogo className="w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com/cppextremebsb/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-pink-500 hover:scale-110 transition-transform"
              >
                <InstagramLogo className="w-8 h-8" />
              </a>
              <a
                href="https://www.youtube.com/@cppextreme"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-red-600 hover:scale-110 transition-transform"
              >
                <YoutubeLogo className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Google Maps */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[450px]">
        <iframe
          title="Localização CPP Extreme na Ascade"
          src="https://www.google.com/maps?q=Ascade+-+Associa%C3%A7%C3%A3o+dos+Servidores+da+C%C3%A2mara+dos+Deputados,+Bras%C3%ADlia+-+DF&output=embed"
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
