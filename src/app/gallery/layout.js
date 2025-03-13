import { ClientLayout } from './ClientLayout'

export const metadata = {
  title: 'Gallery | Mysore XPress',
  description: 'Explore performance photos of Mysore XPress, the fusion rock band from Mysore, South India. See the band in action at various venues and performances.',
  keywords: 'Mysore XPress gallery, band photos, live performance images, Mysore band, fusion rock gallery, music photography',
  openGraph: {
    title: 'Gallery | Mysore XPress',
    description: 'View the photo gallery of Mysore XPress performances and events.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Mysore XPress band performing live',
      },
    ],
  },
}

export default function GalleryLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>
}