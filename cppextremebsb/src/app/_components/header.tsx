'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import clsx from 'clsx'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 w-full z-50 transition-all',
                isScrolled ? 'bg-white/80 shadow-md backdrop-blur-md' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* LOGO */}
                <Link href="/">
                    <Image
                        src="/logo-remo-brasilia.png"
                        alt="Logo Remo"
                        width={150}
                        height={60}
                        className="object-contain"
                    />
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex gap-8 font-semibold text-black">
                    <Link href="/" className="hover:text-green-600 transition">Home</Link>
                    <Link href="#sobre" className="hover:text-green-600 transition">CPP Extreme Brasília</Link>
                    <Link href="#modalidades" className="hover:text-green-600 transition">Modalidades</Link>
                    <Link href="#planos" className="hover:text-green-600 transition">Planos</Link>
                    <Link href="#contato" className="hover:text-green-600 transition">Contato</Link>
                </nav>

                {/* MOBILE NAV ICON */}
                <button className="md:hidden">
                    <Menu size={28} />
                </button>
            </div>
        </header>
    )
}
