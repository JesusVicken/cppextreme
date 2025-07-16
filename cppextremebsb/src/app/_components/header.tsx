'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    // Efeito para detectar o scroll da página e alterar o fundo do header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Itens de navegação
    const navItems = [
        { href: '/', label: 'Home' },
        { href: '#sobre', label: 'CPP Extreme Brasília' },
        { href: '#modalidades', label: 'Modalidades' },
        { href: '#planos', label: 'Planos' },
        { href: '#contato', label: 'Contato' },
    ]

    return (
        <header
            className={clsx(
                'fixed top-0 left-0 w-full z-50 transition-all duration-300',
                // Aplica um fundo com blur quando o usuário rola a página
                isScrolled ? 'bg-white/80 shadow-md backdrop-blur-md' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* LOGO */}
                <a href="/" className="z-50">
                    <img
                        src="/logo3.png"
                        alt="Logo CPP Extreme"
                        className="object-contain w-48 md:w-64" // Ajuste de tamanho para responsividade
                    />
                </a>

                {/* NAVEGAÇÃO DESKTOP */}
                {/* A classe foi alterada para font-display para usar a fonte Inter */}
                <nav className="hidden md:flex gap-8 font-display text-[18px] font-bold tracking-wide uppercase text-black">
                    {navItems.map(({ href, label }) => (
                        <a key={href} href={href} className="hover:text-green-600 transition">
                            {label}
                        </a>
                    ))}
                </nav>

                {/* BOTÃO DO MENU MOBILE */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden z-50 text-black" // Garante que o ícone seja visível
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* GAVETA DE NAVEGAÇÃO MOBILE */}
            <div
                className={clsx(
                    'md:hidden fixed top-0 left-0 h-screen w-full bg-white z-40 transform transition-transform duration-300 ease-in-out',
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                )}
            >
                {/* A classe foi alterada para font-display para usar a fonte Inter */}
                <div className="flex flex-col items-center justify-center h-full gap-8 font-display text-[22px] font-bold text-black tracking-widest uppercase">
                    {navItems.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)} // Fecha o menu ao clicar em um item
                            className="hover:text-green-600 transition"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    )
}
