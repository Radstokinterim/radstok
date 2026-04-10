import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stefan Radstok | Interim Manager Operations & Specialist Operations Strategie",
  description:
    "Van operationele chaos naar voorspelbare groei. Met de Operations Scan breng ik structuur én menselijkheid in jouw organisatie. Hard én Hart. 15+ jaar ervaring, Nyenrode alumnus.",
  keywords: [
    "interim manager operations",
    "operations strategie",
    "operations consultant",
    "lean management",
    "verandermanagement",
    "MKB",
    "financiële dienstverlening",
    "Nyenrode",
    "operations scan",
  ],
  authors: [{ name: "Stefan Radstok" }],
  openGraph: {
    title: "Stefan Radstok | Interim Manager Operations",
    description:
      "Van operationele chaos naar voorspelbare groei. Hard én Hart: structuur, strategie en resultaat, gecombineerd met aandacht voor mensen, cultuur en ontwikkeling.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
