// src/app/music/layout.js (Server Component)
import { ClientLayout } from './ClientLayout'

export const metadata = {
  title: 'Music & Discography | Mysore XPress',
  description: 'Listen to Mysore XPress music across all major streaming platforms. Explore our albums, singles, and latest releases.',
  keywords: 'Mysore XPress music, Mysore band discography, Indian fusion rock, Carnatic metal, music streaming, Spotify, Apple Music, YouTube',
  openGraph: {
    title: 'Music & Discography | Mysore XPress',
    description: 'Stream Mysore XPress music across all platforms. Explore our complete discography.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Mysore XPress music',
      },
    ],
  },
}

export default function MusicLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>
}