import type { Metadata } from 'next';
import { Inter, Great_Vibes, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});


export const metadata: Metadata = {
  title: 'Deepak & Salomi — Wedding Invitation',
  description: 'Join us as we celebrate our wedding on July 5–6, 2026 at Alcor, Jamshedpur.',
  openGraph: {
    title: 'Deepak & Salomi — Wedding Invitation',
    description: 'Deepak & Salomi are tying the knot! Join us for our wedding celebration.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${greatVibes.variable} ${cormorant.variable} font-sans bg-cream`}
      >
        {children}
      </body>
    </html>
  );
}
