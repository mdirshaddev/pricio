// Tailwind
import 'app/globals.css';

// Next typings
import type { Metadata } from 'next';

// Next script
import Script from 'next/script';

// Vercel Analytics
import { Analytics } from '@vercel/analytics/react';

// Shadcn
import { cn } from '@shadcn/lib/utils';
import { fontSans } from '@shadcn/lib/fonts';

// Configs - Site config
import { siteConfig } from 'configs';

// Root provider
import { RootProviders } from 'app/rootProviders';

// Modules - Layout
import { SiteHeader, SiteFooter } from 'src/modules/layouts';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: '/manifest.json'
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en'>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background antialiased',
          fontSans.className
        )}>
        <RootProviders>
          <SiteHeader />
          <main className='relative flex flex-col'>
            <div className='min-h-[calc(100vh-64px)] flex-1 overflow-hidden'>
              {children}
            </div>
          </main>
          <Analytics />
          <SiteFooter />
        </RootProviders>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
      </body>
    </html>
  );
}
