import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ParallaxWrapper>
          {children}
          <AosInit />
        </ParallaxWrapper>
      </body>
    </html>
  )
}