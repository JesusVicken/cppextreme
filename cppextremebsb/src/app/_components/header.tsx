'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
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

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '#sobre', label: 'CPP Extreme Brasília' },
        { href: '#modalidades', label: 'Modalidades' },
        { href: '/mobilizadores', label: 'Mobilizadores' },
        { href: '/planos', label: 'Planos' },
        { href: '#contato', label: 'Contato' },
    ]

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4">
                <Link href="/" className="z-50">
                    <Image
                        src="/logo3.png"
                        alt="Logo CPP Extreme"
                        width={300}
                        height={192}
                        className="object-contain h-8 md:h-auto w-auto"
                        priority
                    />
                </Link>

                {/* Menu Desktop */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-6 font-heading text-sm lg:text-base font-medium tracking-wide uppercase">
                    {navItems.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="px-2 py-1 rounded-md hover:text-primary transition-colors hover:bg-accent/10"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="md:hidden z-50">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Abrir menu"
                                className="text-foreground hover:bg-transparent"
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[260px] sm:w-[300px]">
                            <SheetHeader>
                                <SheetTitle className="text-left font-bold text-lg tracking-wide">
                                    Menu
                                </SheetTitle>
                            </SheetHeader>
                            <Separator className="my-4" />
                            <nav className="flex flex-col space-y-2">
                                {navItems.map(({ href, label }) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-primary transition-colors"
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}