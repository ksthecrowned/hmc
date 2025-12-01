import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HandiMobilité Congo - Le chemin de la mobilité commence ici',
  description: 'Fondation HandiMobilité Congo - Contribuer à la pleine inclusion des personnes en situation de handicap',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

