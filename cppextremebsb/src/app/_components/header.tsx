'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import { Button } from "@/components/ui/button"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '#sobre', label: 'CPP Extreme Brasília' },
        { href: '#modalidades', label: 'Modalidades' },
        { href: '#planos', label: 'Planos' },
        { href: '#contato', label: 'Contato' },
    ]

    return (
        <header className={clsx(
            'fixed top-0 left-0 w-full z-50 transition-all duration-300',
            isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
        )}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4">
                {/* Logo responsivo - maior no mobile */}
                <a href="/" className="z-50">
                    <Image
                        src="/logo3.png"
                        alt="Logo CPP Extreme"
                        width={300} // Aumentei um pouco a largura base
                        height={192} // Mantenha a proporção (160/250 = 0.64 → 300*0.64 ≈ 192)
                        className="object-contain w-52 md:w-48 lg:w-56 h-auto" // Maior no mobile (w-52), depois volta ao normal
                        priority
                    />
                </a>

                {/* Restante do código permanece igual */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-6 font-heading text-sm lg:text-base font-medium tracking-wide uppercase">
                    {navItems.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            className="px-2 py-1 rounded-md hover:text-primary transition-colors hover:bg-accent/10"
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden z-50 text-foreground hover:bg-transparent"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </Button>
            </div>

            <div className={clsx(
                'md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-40 transition-opacity duration-300',
                menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            )}>
                <div className="flex flex-col items-center justify-center h-full gap-6 px-4 py-20">
                    {navItems.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className="w-full text-center py-3 text-lg font-medium rounded-md hover:bg-accent/10 transition-colors"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    )
}