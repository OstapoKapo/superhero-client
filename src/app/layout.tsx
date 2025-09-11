import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SuperHero",
  description: "Practice project for JSN company where you can find or create your own superheros",
  icons: {
    icon: "/icons/favicon.svg",
  },
  keywords: ["superhero", "jsn", "practice", "project", "typescript", "nextjs", "react"],
  authors: [{ name: "Prodaniuk Ostap", url: "https://yourwebsite.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
