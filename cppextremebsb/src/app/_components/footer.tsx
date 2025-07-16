import Image from 'next/image'
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  WhatsappLogo,
} from '@phosphor-icons/react/dist/ssr'
import { Anchor } from 'lucide-react'

import ondasupLogo from '../../../public/ondasup.jpg'
import ascadeLogo from '../../../public/logo-ascade.png'
import filhooosLogo from '../../../public/filhooos.jpg' // Nova imagem
import canoMAMALogo from '../../../public/canoMAMAlogo.png' // Nova imagem

const brands = [
  { name: 'Ondasup', logo: ondasupLogo },
  { name: 'Ascade', logo: ascadeLogo },
  { name: 'Filhooos', logo: filhooosLogo }, // Novo parceiro
  { name: 'CanoMAMA', logo: canoMAMALogo }, // Novo parceiro
]

export function Footer() {
  const whatsappNumber = '61998219177'
  const whatsappMessage =
    'Olá, gostaria de mais informações sobre as aulas de remo na CPP Extreme!'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`

  return (
    <section className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Parceiros */}
        <div
          className="border-b border-white/20 pb-8"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h4 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center gap-3">
            <Anchor className="w-8 h-8" />
            Nossos Parceiros
          </h4>

          <div className="flex flex-wrap justify-center gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={150}
                  height={80}
                  quality={100}
                  className="object-contain"
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '150px',
                    maxHeight: '80px',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Informações e Contatos */}
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          {/* Sobre */}
          <div data-aos="fade-up-left">
            <h3 className="text-2xl font-semibold mb-2">CPP Extreme Brasília</h3>
            <p className="mb-4">
              Promovendo inclusão social através do esporte e aventura.
            </p>
            <a
              href={whatsappLink}
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>
          </div>

          {/* Contatos */}
          <div data-aos="flip-up">
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            {/* <p>Email: contato@cppextreme.com.br</p> */}
            <p>Telefone: (61) 99821-9177</p>
            <p>Ascade - Associação dos Servidores da Câmara dos Deputados 📍 Brasília DF</p>
          </div>

          {/* Redes Sociais */}
          <div data-aos="fade-up-right">
            <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/CPPExtreme"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookLogo className="w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com/cppextremebsb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo className="w-8 h-8" />
              </a>
              <a
                href="https://www.youtube.com/@cppextreme"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeLogo className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Google Maps com marcação da Ascade */}
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
