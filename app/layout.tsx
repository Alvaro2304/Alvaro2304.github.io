import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Alvaro Palero | Portfolio</title>
        <meta name="description" content="Mechatronics Engineer focused on robotic vision and perception." />
        <meta property="og:title" content="Alvaro Palero | Portfolio" />
        <meta property="og:description" content="Mechatronics Engineer focused on robotic vision and perception." />
        <meta property="og:image" content="/ap_brazil.jpeg" />
        <meta property="og:url" content="https://alvaro2304.github.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/gunter.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
