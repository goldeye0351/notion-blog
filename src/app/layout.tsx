import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TmProvider from "@/components/ThemeProvider";
import Script from "next/script";
import BLOG from "@/blog.config";
import StarrySky from "@/components/StarrySky";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#212936]  dark:bg-black text-gray-200 `}>
      <ClerkProvider
        appearance={{
          baseTheme: [dark], 
          variables: { colorPrimary: 'red' },
          elements: {
            card:"bg-gray-700 hover:bg-gyay-200",  
          }   
        }}
        >
        <TmProvider >
            {children}
        </TmProvider>
      </ClerkProvider>
        <StarrySky />
     
     {BLOG.analytics && BLOG.analytics.provider === 'umami' && (
          <Script
            src={BLOG.analytics.umamiConfig.scriptUrl}
            strategy='afterInteractive'
            data-website-id={BLOG.analytics.umamiConfig.websiteId}
          />
        )}
      </body>
    </html>
  );
}


export const metadata = {
  title: {    default: '51xMI',    template: '%s | 51xMI',  },
  description: "Notion,Blog,shortcuts,fast,easy",
  verification:{google:'',yandex:'',yahoo:'',other:{'baidu-site-verification':"codeva-girgY7u1Aj"}},
  googleSiteVerification:"",
  mobileWebAppCapable:true,
  appleMobileWebAppCapable:true,
  appleMobileWebAppStatusBarStyle:'blackTranslucent',

  generator: 'goldeye0351',
  applicationName: '51xMI.com',
  referrer: 'origin-when-cross-origin',
  keywords: ['notion', 'blog', 'shortcuts','博客','苹果捷径','5分钟'],
  authors: [{ name: 'goldeye0351' }, { name: 'goldeye0351', url: 'https://github.com/goldeye0351/notion-blog' }],
  creator: 'goldeye0351',
  publisher: 'vercel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: '51xMI.com',
    description: 'Notion,Blog,shortcuts,fast,easy',
    url: 'https://51xmi.com',
    siteName: '51xMI.com',
    images: [
      {
        url: 'https://51xMI.com/51.png', // Must be an absolute URL
        width: 84,
        height: 84,
        alt: '51xmi.com',
      },
    ],
    //locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  //manifest: "/manifest.json",

};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit:'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#212936' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}