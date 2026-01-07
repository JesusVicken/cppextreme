'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ArrowRight, Mail, Lock, User, Chrome } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function LoginPage() {
    const [isLoginView, setIsLoginView] = useState(true)
    const containerRef = useRef<HTMLDivElement>(null)
    const formWrapperRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const ctx = gsap.context(() => {
            if (formWrapperRef.current) {
                gsap.fromTo(
                    formWrapperRef.current.children,
                    {
                        opacity: 0,
                        y: 20,
                        scale: 0.98
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: 'power3.out',
                        clearProps: 'all'
                    }
                )
            }
        }, containerRef)

        return () => ctx.revert()
    }, [isLoginView])

    const toggleView = (view: 'login' | 'signup') => {
        if ((view === 'login' && isLoginView) || (view === 'signup' && !isLoginView)) return;
        setIsLoginView(view === 'login');
    }

    return (
        <div className="min-h-screen w-full flex bg-black text-white overflow-hidden font-sans">
            {/* SEÇÃO ESQUERDA - Imagem/Branding */}
            <div
                className="hidden lg:flex w-1/2 relative bg-zinc-900 items-center justify-center overflow-hidden"
                data-aos="fade-right" // O AOS global vai pegar isso aqui
            >
                <div className="absolute inset-0 opacity-60">
                    <Image
                        src="/placeholder-hero-bw.jpg" // Certifique-se de ter essa imagem em public/
                        alt="CPP Extreme Natureza"
                        fill
                        className="object-cover grayscale contrast-125"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="relative z-10 p-12 text-left flex flex-col items-start mb-20">
                    <Image
                        src="/logo3.png"
                        alt="CPP Extreme Logo"
                        width={300}
                        height={180}
                        className="mb-8 brightness-0 invert"
                    />
                    <h2 className="text-4xl xl:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
                        Domine <br />o Extremo.
                    </h2>
                    <p className="text-zinc-300 text-lg max-w-md leading-relaxed">
                        Acesse sua área exclusiva para gerenciar agendamentos, acompanhar seu progresso e explorar novas aventuras.
                    </p>
                </div>
            </div>

            {/* SEÇÃO DIREITA - Formulário */}
            <div
                ref={containerRef}
                className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-black relative"
                data-aos="fade-left"
                data-aos-delay="200"
            >
                <Link href="/" className="absolute top-8 left-8 text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                    <ArrowRight className="rotate-180 h-4 w-4" /> Voltar ao início
                </Link>

                <div className="w-full max-w-md space-y-8 relative z-10 mt-16 lg:mt-0">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-black tracking-tighter text-white uppercase">
                            {isLoginView ? 'Bem-vindo de volta' : 'Junte-se à CPP'}
                        </h1>
                        <p className="text-zinc-400 text-sm">
                            {isLoginView ? 'Entre com suas credenciais para continuar.' : 'Crie sua conta e comece sua jornada.'}
                        </p>
                    </div>

                    {/* Toggle Switch */}
                    <div className="flex p-1 bg-zinc-900/50 rounded-xl border border-zinc-800/50 backdrop-blur-sm">
                        <button
                            onClick={() => toggleView('login')}
                            className={`flex-1 py-2.5 text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${isLoginView ? 'bg-white text-black shadow-md' : 'text-zinc-400 hover:text-white'}`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => toggleView('signup')}
                            className={`flex-1 py-2.5 text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-300 ${!isLoginView ? 'bg-white text-black shadow-md' : 'text-zinc-400 hover:text-white'}`}
                        >
                            Criar Conta
                        </button>
                    </div>

                    <div ref={formWrapperRef} className="space-y-6">

                        <Button variant="outline" className="w-full h-12 bg-transparent border-zinc-700 text-white hover:bg-zinc-900 hover:text-white hover:border-white font-bold transition-all duration-300 rounded-xl group relative overflow-hidden">
                            <span className="relative z-10 flex items-center justify-center gap-3">
                                <Chrome className="h-5 w-5" />
                                {isLoginView ? 'Entrar com Google' : 'Cadastrar com Google'}
                            </span>
                        </Button>

                        <div className="relative flex items-center py-2">
                            <Separator className="flex-1 bg-zinc-800" />
                            <span className="shrink-0 px-4 text-xs text-zinc-500 uppercase tracking-widest font-bold">
                                OU
                            </span>
                            <Separator className="flex-1 bg-zinc-800" />
                        </div>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

                            {!isLoginView && (
                                <div className="space-y-2 group">
                                    <Label htmlFor="name" className="text-xs uppercase tracking-wider font-bold text-zinc-400 group-focus-within:text-white transition-colors">Nome Completo</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500 group-focus-within:text-white transition-colors" />
                                        <Input
                                            id="name"
                                            placeholder="Seu nome"
                                            className="pl-10 h-12 bg-zinc-900/50 border-zinc-800 focus-visible:ring-white/20 focus-visible:border-white text-white placeholder:text-zinc-600 rounded-xl transition-all"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2 group">
                                <Label htmlFor="email" className="text-xs uppercase tracking-wider font-bold text-zinc-400 group-focus-within:text-white transition-colors">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500 group-focus-within:text-white transition-colors" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        className="pl-10 h-12 bg-zinc-900/50 border-zinc-800 focus-visible:ring-white/20 focus-visible:border-white text-white placeholder:text-zinc-600 rounded-xl transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password" className="text-xs uppercase tracking-wider font-bold text-zinc-400 group-focus-within:text-white transition-colors">Senha</Label>
                                    {isLoginView && (
                                        <Link href="#" className="text-xs text-zinc-500 hover:text-white transition-colors font-medium">
                                            Esqueceu a senha?
                                        </Link>
                                    )}
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500 group-focus-within:text-white transition-colors" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className="pl-10 h-12 bg-zinc-900/50 border-zinc-800 focus-visible:ring-white/20 focus-visible:border-white text-white placeholder:text-zinc-600 rounded-xl transition-all"
                                    />
                                </div>
                            </div>

                            <Button className="w-full h-12 bg-white text-black hover:bg-zinc-200 font-black tracking-wide uppercase rounded-xl mt-6 relative overflow-hidden group transition-transform active:scale-95">
                                <span className="relative z-10 flex items-center gap-2">
                                    {isLoginView ? 'Acessar Conta' : 'Criar Conta'} <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </form>
                    </div>

                    <p className="text-center text-xs text-zinc-500 mt-8 px-8 leading-relaxed">
                        Ao continuar, você concorda com os <Link href="#" className="underline underline-offset-4 hover:text-white">Termos de Serviço</Link> e <Link href="#" className="underline underline-offset-4 hover:text-white">Política de Privacidade</Link> da CPP Extreme.
                    </p>
                </div>
            </div>
        </div>
    )
}