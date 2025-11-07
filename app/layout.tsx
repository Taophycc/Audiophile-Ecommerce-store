"use client";
import { Manrope } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./components/Providers";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${manrope.className} antialiased`}>
        <Providers>
          {!isHomePage && (
            <div className="bg-black">
              <Header />
            </div>
          )}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
