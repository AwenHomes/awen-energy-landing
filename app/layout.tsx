import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Awen Energy - Solar Warranty Recovery Service | Get Your System Fixed",
  description: "Your solar installer went bankrupt? We help homeowners recover manufacturer warranties and get their solar systems fixed—even when the installer is gone. Free assessment, nationwide service.",
  keywords: [
    "solar warranty recovery",
    "solar installer bankruptcy",
    "broken solar system",
    "solar panel warranty",
    "solar inverter warranty",
    "orphaned solar system",
    "solar system repair",
    "manufacturer warranty claim",
    "Enphase warranty",
    "SolarEdge warranty",
    "solar claim assistance"
  ],
  authors: [{ name: "Awen Energy LLC" }],
  creator: "Awen Energy LLC",
  publisher: "Awen Energy LLC",
  metadataBase: new URL("https://awenenergy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Awen Energy - Solar Warranty Recovery Service",
    description: "Your solar installer went bankrupt? We help homeowners recover manufacturer warranties and get their solar systems fixed. Free assessment, nationwide service.",
    url: "https://awenenergy.com",
    siteName: "Awen Energy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awen Energy - Solar Warranty Recovery Service",
    description: "Your solar installer went bankrupt? We help homeowners recover manufacturer warranties and get their solar systems fixed.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   // Add your verification codes when ready
  //   // google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
