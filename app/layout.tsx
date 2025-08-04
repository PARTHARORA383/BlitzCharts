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
  title: "BlitzCharts",
  description: "Collection of animated charts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-[var(--background-custom)] 
            min-h-screen 
          flex items-center justify-center`}
      >
        <div className="w-full max-w-[1920px] px-4">

        {children}
        </div>
      </body>
    </html>
  );
}
