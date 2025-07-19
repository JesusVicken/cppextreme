'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'
import { Button } from '@/components/ui/button'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false)
            }
        }
        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [menuOpen])

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '#sobre', label: 'CPP Extreme Brasília' },
        { href: '#modalidades', label: 'Modalidades' },
        { href: '#planos', label: 'Planos' },
        { href: '#contato', label: 'Contato' },
    ]

    return (
        <header className="relative h-screen w-full">
            {/* Imagem de fundo */}
            <Image
                src="/canoa1.jpg"
                alt="Imagem da canoa"
                fill
                priority
                className="absolute inset-0 object-cover object-center -z-10"
            />

            {/* Navbar fixa */}
            <div
                className={clsx(
                    'fixed top-0 left-0 w-full z-50 transition-all duration-300',
                    isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4">
                    <a href="/" className="z-50">
                        <Image
                            src="/logo3.png"
                            alt="Logo CPP Extreme"
                            width={300}
                            height={192}
                            className="object-contain w-48 sm:w-52 md:w-48 lg:w-56 h-auto"
                            priority
                        />
                    </a>

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
                        aria-label="Abrir menu mobile"
                    >
                        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Menu Mobile em tela cheia */}
            {menuOpen && (
                <div className="fixed inset-0 z-[9999] bg-black/50 transition-opacity duration-300">
                    <div
                        ref={menuRef}
                        className={clsx(
                            'absolute top-0 right-0 h-full w-4/5 max-w-xs bg-background shadow-lg transform transition-transform duration-300 ease-in-out',
                            menuOpen ? 'translate-x-0' : 'translate-x-full'
                        )}
                    >
                        <div className="flex flex-col items-start p-6 gap-4">
                            {navItems.map(({ href, label }) => (
                                <a
                                    key={href}
                                    href={href}
                                    onClick={() => setMenuOpen(false)}
                                    className="w-full text-base font-medium py-2 px-3 rounded-md hover:bg-accent/10 transition-colors"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
