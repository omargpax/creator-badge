import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Creator badge",
  description: "Create and generate custom badges for your projects, profiles, or sites. Free online badge designer with multiple themes and sharing options. Perfect for developers, communities, and professionals",
  authors: [
    { name: "omargpax", url: "https://omargpax.vercel.app" }
  ],
  generator: "Next.js",
  applicationName: "Creator Badge Generator",
  referrer: "origin-when-cross-origin",
  creator: "Omar A. Guerrero",
  publisher: "Omar A. Guerrero",
  icons: {
    icon: '/favicon.ico',
    apple: '/start.png',
  },
  openGraph: {
    title: "Creator badge",
    description: "Generate your own badge creator and use it anywhere.",
    url: "https://creator-badge.vercel.app",
    siteName: "Creator Badge | Omargpax",
    images: [
      {
        url: "/img/site-preview.png",
        width: 1200,
        height: 630,
        alt: "Omargpax Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creator badge",
    description: "Generate your own badge creator and use it anywhere.",
    creator: "@omargpax",
    images: ["/img/site-preview.png"],
  },
  keywords: [
    "omargpax",
    "omar guerrero",
    "Full Stack Developer",
    "Creator badge",
    "badge generator",
    "web development",
    "nextjs",
    "vercel",
  ],
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
