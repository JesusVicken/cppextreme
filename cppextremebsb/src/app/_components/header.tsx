'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, UserCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    const navItems = [
        { href: '/sobre', label: 'Sobre Nós' },
        { href: '/estrutura', label: 'Nossa Estrutura' },
        { href: '/horarios', label: 'Horários' },
        { href: '/aulas', label: 'Aulas' },
        { href: '/planos', label: 'Planos' },
        { href: '/passeios', label: 'Passeios' },
        { href: '/agenda', label: 'Agenda' },
        { href: '/extreme', label: 'Extreme' },
        { href: '/contato', label: 'Contato' },
    ]

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
                ? 'bg-white/95 shadow-sm backdrop-blur-md border-zinc-200'
                : 'bg-transparent border-transparent'
                }`}
        >
            {/* Container principal usando Flexbox para distribuição segura */}
            <div className="max-w-[1600px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">

                {/* 1. LOGO (Esquerda) */}
                <Link href="/" className="z-50 shrink-0 relative hover:opacity-90 transition-opacity mr-4">
                    <Image
                        src="/logo3.png"
                        alt="Logo CPP Extreme"
                        width={250}
                        height={152}
                        className="object-contain h-8 md:h-9 lg:h-10 w-auto"
                        priority
                    />
                </Link>

                {/* 2. MENU DESKTOP (Centro) */}
                {/* MUDANÇA: hidden xl:flex (só aparece em telas grandes) e removemos o absolute */}
                <nav className="hidden xl:flex items-center justify-center gap-1 2xl:gap-2 flex-1 px-4">
                    {navItems.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`
                                px-2 2xl:px-3 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap
                                ${isScrolled
                                    ? 'text-zinc-600 hover:text-white hover:bg-black'
                                    : 'text-white/90 hover:text-black hover:bg-white'
                                }
                            `}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* 3. ÁREA DO CLIENTE + MENU MOBILE (Direita) */}
                <div className="flex items-center gap-3 shrink-0">

                    {/* Botão Área do Cliente (Desktop - aparece a partir de lg para garantir acesso) */}
                    <div className="hidden lg:block">
                        <Link href="/login">
                            <Button
                                size="sm"
                                className={`
                                    rounded-full font-bold tracking-wide transition-all shadow-md
                                    ${isScrolled
                                        ? 'bg-black text-white hover:bg-zinc-800'
                                        : 'bg-white text-black hover:bg-gray-100'
                                    }
                                `}
                            >
                                <UserCircle className="mr-2 h-4 w-4" />
                                Área do Cliente
                            </Button>
                        </Link>
                    </div>

                    {/* Botão Hamburger (Mobile + Tablets + Notebooks pequenos) */}
                    {/* MUDANÇA: lg:block xl:hidden (aparece até em notebooks onde o menu extenso quebraria) */}
                    <div className="xl:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    aria-label="Abrir menu"
                                    className={`hover:bg-white/10 ${isScrolled ? 'text-black' : 'text-white'}`}
                                >
                                    <Menu className="h-7 w-7" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[350px] border-l-zinc-800 bg-black/95 backdrop-blur-xl text-white overflow-y-auto">
                                <SheetHeader className="text-left border-b border-white/10 pb-4 mb-4">
                                    <SheetTitle className="text-white flex items-center gap-2">
                                        <Image
                                            src="/logo3.png"
                                            alt="Logo"
                                            width={120}
                                            height={60}
                                            className="h-8 w-auto brightness-0 invert"
                                        />
                                    </SheetTitle>
                                </SheetHeader>

                                <div className="flex flex-col h-full pb-6">
                                    {/* Links Mobile */}
                                    <nav className="flex flex-col space-y-1">
                                        {navItems.map(({ href, label }) => (
                                            <Link
                                                key={href}
                                                href={href}
                                                onClick={() => setOpen(false)}
                                                className={`
                                                    px-4 py-3 rounded-lg text-sm font-medium tracking-wide uppercase transition-colors
                                                    ${pathname === href
                                                        ? 'bg-white text-black font-bold'
                                                        : 'text-zinc-400 hover:text-white hover:bg-white/10'
                                                    }
                                                `}
                                            >
                                                {label}
                                            </Link>
                                        ))}
                                    </nav>

                                    {/* Botão Login Mobile */}
                                    <div className="mt-8 mb-8">
                                        <Separator className="bg-white/10 mb-6" />
                                        <Link href="/login" onClick={() => setOpen(false)}>
                                            <Button
                                                className="w-full bg-white text-black hover:bg-zinc-200 font-bold rounded-full h-12 text-base"
                                            >
                                                <UserCircle className="mr-2 h-5 w-5" />
                                                Acessar Área do Cliente
                                            </Button>
                                        </Link>
                                        <p className="text-center text-xs text-zinc-500 mt-4">
                                            Acesse para gerenciar seus planos e aulas.
                                        </p>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}