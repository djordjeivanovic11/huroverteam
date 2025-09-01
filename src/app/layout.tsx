import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://huroverteam.com'),
  title: 'Harvard URC Team | Mars Rover Challenge',
  description: 'Harvard University Rover Challenge Team - Building autonomous rovers for Mars exploration. Join us in advancing planetary robotics and space exploration technology.',
  keywords: 'Harvard, URC, University Rover Challenge, Mars rover, robotics, space exploration, autonomous vehicles, planetary exploration',
  authors: [{ name: 'Harvard URC Team' }],
  creator: 'Harvard URC Team',
  publisher: 'Harvard URC Team',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/urc_logo.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Harvard URC Team | Mars Rover Challenge',
    description: 'Harvard University Rover Challenge Team - Building autonomous rovers for Mars exploration.',
    url: 'https://huroverteam.com',
    siteName: 'Harvard URC Team',
    images: [
      {
        url: '/images/urc_logo.png',
        width: 1200,
        height: 630,
        alt: 'Harvard URC Team Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harvard URC Team | Mars Rover Challenge',
    description: 'Harvard University Rover Challenge Team - Building autonomous rovers for Mars exploration.',
    images: ['/images/urc_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/urc_logo.png" type="image/png" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Global Navigation */}
        <NavBar />

        {/* Main Content */}
        <main className='flex-grow'>{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
