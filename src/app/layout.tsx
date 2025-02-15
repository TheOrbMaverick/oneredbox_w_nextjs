import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-poppins",
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Oneredbox Construction",
  description: "Masters of space",
  icons: {
    icon: '/images/oneredboxWhite.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`<span>&#8358;</span>{poppins.variable} <span>&#8358;</span>{geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
