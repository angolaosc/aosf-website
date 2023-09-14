import Image from "next/image"
import "./global/globals.css";
import "./Styles/header.css"
import { Inter } from 'next/font/google'
import CommunityLogo from "../assets/logo_community.png"

const inter = Inter({ subsets: ['latin'], weight: "500", style: "normal", })

export const metadata = {
  title: "",
  description: "",
  icons: {
    icon: [
      "../assets/logo_community.png"
    ],
    apple: [
      "/vercel.svg"
    ],
    shortcut: [
      "/vercel.svg"
    ]
  },
  manifest: "/vercel.svg"
}

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
            <Image src={CommunityLogo} alt="Logo" />
            <ul>
              <a href="">Evento</a>
              <a href="">Agenda</a>
              <a href="">Informações</a>
              <a href="">Parceiro</a>
              <a href="">Contacto</a>
            </ul>
          </div>
        </header>
        {children}</body>
    </html>
  )
}
