import type { Metadata } from 'next';
import { Schibsted_Grotesk } from 'next/font/google';
import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { SITE_URL } from '@/content/site';
import './globals.css';

const schibsted = Schibsted_Grotesk({ subsets: ['latin'], variable: '--font-schibsted-grotesk' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'NUS Fintech Society', template: '%s | NUS Fintech Society' },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={schibsted.variable}>
      <body className="fs-base font-sans">
        <a href="#main" className="fs-skip">Skip to content</a>
        <NavBar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
