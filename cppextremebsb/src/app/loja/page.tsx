'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import gsap from 'gsap'

export default function LojaPage() {
    const cardsRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        if (!cardsRef.current.length) return

        gsap.fromTo(
            cardsRef.current,
            {
                opacity: 0,
                y: 40,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
            }
        )
    }, [])

    return (
        <main className="min-h-screen bg-white text-black overflow-hidden">

            {/* HERO COM FOTO */}
            <section className="relative h-[65vh] w-full overflow-hidden">
                {/* Imagem */}
                <Image
                    src="/remadalinda.jpg"
                    alt="Remada CPP Extreme"
                    fill
                    priority
                    className="object-cover object-top"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Conteúdo */}
                <div
                    className="relative z-10 flex h-full items-center justify-center text-center px-6"
                    data-aos="fade-up"
                >
                    <div className="max-w-4xl">
                        <div className="flex items-center justify-center mb-6">
                            <ShoppingBag className="h-12 w-12 text-white" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-white">
                            Loja CPP Extreme
                        </h1>

                        <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                            Produtos oficiais para quem vive o esporte dentro e fora da água.
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTEÚDO */}
            <section className="max-w-7xl mx-auto px-6 py-20">

                {/* TÍTULO */}
                <div
                    className="mb-14 text-center"
                    data-aos="fade-up"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
                        Em breve
                    </h2>
                    <p className="mt-4 text-zinc-600 max-w-xl mx-auto">
                        Estamos preparando uma linha exclusiva de produtos CPP Extreme.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {[1, 2, 3].map((item, index) => (
                        <div
                            key={item}
                            ref={(el) => {
                                if (el) cardsRef.current[index] = el
                            }}
                            data-aos="zoom-in"
                            className="group border border-zinc-200 rounded-2xl p-6 transition-all hover:shadow-xl hover:-translate-y-1"
                        >
                            {/* FOTO / PLACEHOLDER */}
                            <div className="relative aspect-square w-full rounded-xl bg-zinc-100 overflow-hidden flex items-center justify-center">
                                <span className="text-zinc-400 text-sm font-semibold uppercase tracking-wide">
                                    Produto em breve
                                </span>

                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>

                            {/* TEXTO */}
                            <div className="mt-6 space-y-2">
                                <h3 className="text-lg font-semibold uppercase tracking-wide">
                                    Produto CPP Extreme
                                </h3>
                                <p className="text-sm text-zinc-600">
                                    Descrição do produto aparecerá aqui.
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

                {/* CTA */}
                <div
                    className="mt-20 text-center"
                    data-aos="fade-up"
                >
                    <Link href="/contatos">
                        <Button
                            size="lg"
                            className="rounded-full bg-black text-white hover:bg-zinc-800 font-bold px-10 h-14"
                        >
                            Quero ser avisado
                        </Button>
                    </Link>

                    <p className="mt-4 text-xs text-zinc-500">
                        Entre em contato e fique por dentro dos lançamentos.
                    </p>
                </div>

            </section>
        </main>
    )
}
