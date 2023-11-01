import { Raleway } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'The Foliage Green',
  description: 'Bespoke floristry that exceeds expectations.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
