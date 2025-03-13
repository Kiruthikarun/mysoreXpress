// layout.js (Server Component)
export const metadata = {
  title: 'About | Mysore Xpress',
  description: 'Learn about Mysore Xpress, a modern fusion rock band from Mysore, South India, blending traditional sounds with a modern twist.',
  keywords: 'Mysore Xpress, Mysore band, fusion rock, Indian rock music, Carnatic metal',
  openGraph: {
    title: 'About | Mysore Xpress',
    description: 'Learn about Mysore Xpress, a modern fusion rock band from Mysore, South India.',
    images: [
      {
        url: '/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Mysore Xpress band',
      },
    ],
  },
}

export default function AboutLayout({ children }) {
  return (
    <div className="bg-black">
      {children}
    </div>
  )
}

// ClientFonts.js (Client Component)
