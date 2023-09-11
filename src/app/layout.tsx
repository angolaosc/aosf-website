import Image from "next/image"
import "./global/globals.css";
import "./Styles/header.css"
import { Inter } from 'next/font/google'
import CommunityLogo from "../assets/logo_community.png"
import Link from "next/link";

const inter = Inter({ subsets: ['latin'], weight: "500", style: "normal", })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="header">
          <div>
            <Link href="/">
              <Image src={CommunityLogo} alt="Logo" />
            </Link>
          <nav>
            <Link href="/pages/opening">Abertura</Link>
            <Link href="/pages/about">Sobre</Link>
            <Link href="/pages/partners">Parceiros</Link>
            <Link href="/pages/calendar">Agenda</Link>
            <Link href="/pages/information">Informações</Link>
            <Link href="/pages/contact">Contacto</Link>
          </nav>
          </div>
        </header>
        {children}</body>
    </html>
  )
}
