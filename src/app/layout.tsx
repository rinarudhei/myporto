import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Frontend Engineer Rinaldi Adrian',
  description: 'Portofolio Project Showcase',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(montserrat.variable, 'antialiased')}>
        {children}
      </body>
    </html>
  );
}
