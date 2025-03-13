// src/app/videos/layout.js (Server Component)
import { ClientLayout } from './ClientLayout'

export const metadata = {
  title: 'Videos | Mysore XPress',
  description: 'Watch official music videos, live performances, and behind-the-scenes footage of Mysore XPress, the fusion rock band from Mysore, South India.',
  keywords: 'Mysore XPress videos, music videos, live performances, Mysore band, fusion rock videos, Carnatic metal videos, concert footage',
  openGraph: {
    title: 'Videos | Mysore XPress',
    description: 'Watch Mysore XPress music videos and live performances.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Mysore XPress band performing',
      },
    ],
  },
}

export default function VideosLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>
}