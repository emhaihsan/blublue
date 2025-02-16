import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blublue - Social Finance Reimagined",
  description: "Experience the future of social networking where every interaction has value",
  keywords: ["social finance", "crypto", "blockchain", "earning", "networking"],
  openGraph: {
    title: "BluBLUE - Socializing Meets Earning",
    description: "The future of finance, where social connections drive economic opportunities",
    type: "website",
    url: "https://blublue.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BluBLUE - Social Finance Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BluBLUE - Socializing Meets Earning",
    description: "The future of finance, where social connections drive economic opportunities",
    images: ["/og-image.png"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ]
  },
  manifest: "/site.webmanifest"
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
