// app/layout.tsx

import type { Metadata } from "next"
// 1. A nova fonte "Anton" foi importada
import { Geist, Geist_Mono, Inter, Anton } from "next/font/google"
import "./globals.css"
import { AosInit } from "./_components/aos-init"
import { ParallaxWrapper } from "./_components/ParallaxWrapper"
import Header from "./_components/header"
import FooterDev from "./_components/footer-dev"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
})

// 2. A fonte "Anton" foi configurada com sua própria variável CSS
const anton = Anton({
  variable: "--font-heading", // Vamos usar essa variável para os títulos/menu
  subsets: ["latin"],
  weight: "400", // Anton geralmente só tem o peso 400
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
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${anton.variable} antialiased`}
      >
        <Header />
        <ParallaxWrapper>
          {children}
          <AosInit />
        </ParallaxWrapper>
        <FooterDev />
      </body>
    </html>
  )
}
