import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { CursorLight } from "@/components/cursor-light";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quentin Santos - Mobile Engineer Portfolio",
  description: "React Native & Expo specialist building beautiful mobile experiences",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/portfolio/favicon.ico" />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        <CursorLight />
        {children}
      </body>
    </html>
  );
}
