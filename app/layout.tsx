import type { Metadata } from 'next';
import { Schibsted_Grotesk } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const schibsted = Schibsted_Grotesk({ subsets: ['latin'], variable: '--font-schibsted-grotesk' });

export const metadata: Metadata = {
  title: { default: 'NUS Fintech Society', template: '%s | NUS Fintech Society' },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={schibsted.variable}>
      <body>{children}</body>
    </html>
  );
}
