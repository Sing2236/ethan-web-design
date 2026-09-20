import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://ethan-web-studio.patriotmobile.chatgpt.site';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Ethan Web Studio | Websites for Small Businesses',
  description:
    'Modern, easy-to-edit websites for small businesses in Dallas–Fort Worth, with six months of post-launch support included.',
  openGraph: {
    title: 'Ethan Web Studio | Websites for Small Businesses',
    description:
      'Modern, easy-to-edit websites with six months of post-launch support included.',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1536,
        height: 912,
        alt: 'Ethan Web Studio — websites built specifically for you',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethan Web Studio | Websites for Small Businesses',
    description:
      'Modern, easy-to-edit websites with six months of post-launch support included.',
    images: ['/og.png'],
  },
  icons: {
    icon: '/ethan-web-studio-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
