import './globals.css';
import { Inter } from 'next/font/google';
import NavBar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Harvard Mars Rover',
  description: 'Harvard Mars Rover Challenge Team website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
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
