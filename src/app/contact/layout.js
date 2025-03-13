import { ClientLayout } from './ClientLayout'

export const metadata = {
  title: 'Contact | Mysore XPress',
  description: 'Get in touch with Mysore XPress, the fusion rock band from Mysore, India. Contact us for bookings, collaborations, and inquiries.',
  keywords: 'Mysore XPress contact, band bookings, music collaborations, Mysore band contact',
  openGraph: {
    title: 'Contact | Mysore XPress',
    description: 'Reach out to Mysore XPress for events, performances, and collaborations.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Mysore XPress contact information',
      },
    ],
  },
}

export default function ContactLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>
}
