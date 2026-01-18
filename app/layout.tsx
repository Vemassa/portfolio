import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { CursorLight } from "@/components/cursor-light";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mobile App Developer Portfolio",
  description: "React Native & Expo specialist building beautiful mobile experiences",
  icons: {
    icon: [
      {
        url: "/icon-32x32.png",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <CursorLight />
        {children}
      </body>
    </html>
  );
}
