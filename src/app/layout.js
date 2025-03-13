import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Load custom fonts for the band
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mysore Xpress | Where Tradition Meets Modern Rock",
  description: "Mysore Xpress is a modern fusion band from Mysore, India, blending rich traditional Carnatic sounds with contemporary metal. Explore our latest albums, tour dates, and more.",
  keywords: "Mysore Xpress, Carnatic metal, fusion band, Indian metal, Mysore music, Carnatic fusion, metal band, Mysore Masala Metal, rock fusion, Indian rock",
  authors: [{ name: "Mysore Xpress Band" }],
  creator: "Mysore Xpress",
  publisher: "Mysore Xpress",
  metadataBase: new URL("https://mysorexpressmusic.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mysore Xpress | Where Tradition Meets Modern Rock",
    description: "Mysore Xpress is a modern fusion band from Mysore, India, blending rich traditional Carnatic sounds with contemporary metal. Founded with a vision to create a unique sonic landscape that bridges ancient musical traditions with modern metal intensity.",
    url: "https://mysorexpressmusic.com/",
    siteName: "Mysore Xpress",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Mysore Xpress - Carnatic Metal Band",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mysore Xpress | Where Tradition Meets Modern Rock",
    description: "Explore the unique sound where traditional Carnatic rhythms meet crushing metal riffs. Listen to our latest album Mysore Masala Metal now!",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "music",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black dark:bg-black text-white selection:bg-red-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
