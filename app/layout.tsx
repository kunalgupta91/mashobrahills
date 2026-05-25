import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import WhatsAppFloat from '@/components/WhatsAppFloat'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aether Heights | Rare Land Investment — Baldeyan, Himachal Pradesh',
  description:
    'A rare 11,993 sq.m. land parcel near Mashobra, Himachal Pradesh. Ideal for a 150-room luxury resort or 5-star hotel. Section 118 approved. Available for outright sale or joint venture at ₹40 Crore.',
  keywords:
    'Aether Heights, luxury land investment Himachal Pradesh, hotel land for sale Shimla, Baldeyan property, Section 118 approved land, resort development HP, Mashobra resort land',
  metadataBase: new URL('https://aetherheights.in'),
  openGraph: {
    title: 'Aether Heights | Premium Land Investment — Himachal Pradesh',
    description:
      'A rare investment opportunity in the hills of Himachal Pradesh. 11,993 sq.m. of prime land near Mashobra, Section 118 approved.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aether Heights | Premium Land Investment',
    description: 'Rare land parcel near Mashobra, HP. Section 118 approved. ₹40 Cr.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-cream text-charcoal antialiased font-sans">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
