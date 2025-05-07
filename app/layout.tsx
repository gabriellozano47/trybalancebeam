import React, { ReactNode } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BalanceBeam – AI Bookkeeper',
  description: 'Automate 100% of your bookkeeping with BalanceBeam, your AI bookkeeper agent.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-light text-dark antialiased`}>
        {children}
      </body>
    </html>
  );
} 