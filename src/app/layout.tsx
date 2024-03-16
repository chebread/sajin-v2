import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import StyledComponentsRegistry from 'styles/registry';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--roboto',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
};
export const metadata: Metadata = {
  metadataBase: new URL('https://sajin.page'),
  title: {
    template: '%s | Sajin',
    default: 'Sajin',
  },
  description: `URL로 사진을 공유하세요.`,
  keywords: '사진, Sajin',
  openGraph: {
    title: 'Sajin',
    description: `URL로 사진을 공유하세요.`,
    url: 'https://sajin.page',
    siteName: 'Sajin',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    title: 'Sajin',
    description: `URL로 사진을 공유하세요.`,
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="ko">
        <body className={roboto.className} suppressHydrationWarning>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </>
  );
}
