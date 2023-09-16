import Header from "./components/header";
import "./global/globals.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: "500", style: "normal", })

export const metadata = {
  title: "Angola Open-Source Community",
  description: "ere",
  icons: {
    icon: [
      "/favicon.ico?v=4"
    ],
    apple: [
      "/apple-touch-icon.png?v=4"
    ],
    shortcur: [
      "/apple-touch-icon.png"
    ]
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  )
}
