import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Emendas Participativas - Jadyel Alencar',
  description:
    'Participe da construção do futuro do nosso estado através das emendas participativas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
