// NEXT_DEFAULT
import type {Metadata} from "next";

// components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// GA & log & performance
import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google";

// fonts
import localFont from "next/font/local";

// styles
import "./globals.css";
import "../assets/styles/custom.scss";

// provider
import {ClientProvider} from "@/components/provider/ClientProvider";
import SmoothScrollProvider from "@/components/provider/SmoothScrollProvider";

// third-party
import NextTopLoader from "nextjs-toploader";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Run Sync",
  description: "",
  keywords: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextTopLoader color="#8a3e0e" shadow="0 0 10px #8a3e0e,0 0 5px #8a3e0e" />
        <ClientProvider>
          <SmoothScrollProvider />
          <div id="wrap" className="bg-[#111]">
            <Header />
            <main id="content" role="main">
              {children}
            </main>
            <Footer />
          </div>
        </ClientProvider>
        <GoogleAnalytics gaId="G-내계정키 환경변수로 넣을꺼임" />
        <GoogleTagManager gtmId="G-내계정키 환경변수로 넣을꺼임" />
      </body>
    </html>
  );
}
