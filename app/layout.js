import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PT. Rizza Jaya Abadi — Tour & Travel',
  description: 'Jasa perjalanan wisata domestik dan internasional terpercaya. Melayani paket wisata, sewa bus, umroh, dan corporate travel.',
  keywords: 'tour travel surabaya, wisata domestik, wisata internasional, sewa bus, umroh',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}