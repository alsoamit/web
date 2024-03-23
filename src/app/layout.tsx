import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fahkwang, JetBrains_Mono } from "next/font/google";
import RootProvider from "@/layouts/RootProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fahkwang = Fahkwang({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fahkwang",
});

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fahkwang.variable} ${jetbrains_mono.variable} overflow-x-hidden dark`}
    >
      <body
        className={`${inter.className} overflow-x-hidden bg-white dark:bg-[#121316]`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
