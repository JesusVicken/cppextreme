// app/layout.tsx

import type { Metadata } from "next"
// 1. A fonte "Inter" foi importada
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import { AosInit } from "./_components/aos-init"
import { ParallaxWrapper } from "./_components/ParallaxWrapper"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// 2. A fonte "Inter" foi configurada com sua própria variável CSS
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Pesos da fonte que você pode usar
})

export const metadata: Metadata = {
  title: "CPP Extreme BSB",
  description: "CPP Extreme BSB Site",
  icons: {
    icon: "/cpp.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* 3. A variável da nova fonte foi adicionada ao body */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <ParallaxWrapper>
          {children}
          <AosInit />
        </ParallaxWrapper>
      </body>
    </html>
  )
}
