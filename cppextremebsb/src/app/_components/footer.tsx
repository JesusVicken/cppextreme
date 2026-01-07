'use client'

import Image from "next/image"
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr"

import ascadeLogo from "../../../public/logo-ascade.png"
import canoMAMALogo from "../../../public/canoMAMAlogo.png"

const brands = [
  { name: "Ascade", logo: ascadeLogo },
  { name: "CanoMAMA", logo: canoMAMALogo },
  { name: "Wellhub", logo: "/wellhub-logo.svg" },
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

          <div className="flex flex-wrap justify-center gap-8 items-center">
            {brands.map((item, index) => {
              const isWellhub = item.name === "Wellhub"

              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300 w-48 h-32 ${isWellhub ? "p-2" : "p-6"
                    }`}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={180}
                      height={100}
                      quality={100}
                      className={`object-contain max-h-full max-w-full ${isWellhub ? "scale-125" : ""
                        }`}
                    />
                  </div>
                </div>
              )
            })}
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

      {/* Google Maps com Pino no CPP Extreme */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] relative z-0">
        <iframe
          title="Localização CPP Extreme"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.297405626388!2d-47.85451242499684!3d-15.818687484823482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a25c82d57ad6d%3A0xf59dbb7e8c7889a9!2sCpp%20Extremo!5e0!3m2!1spt-BR!2sbr!4v1709666000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}