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

// provider
import {ClientProvider} from "@/components/provider/ClientProvider";
import {ThemeProvider} from "@/components/provider/theme-provider";

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
  title: "Nextjs Boilerplate",
  description:
    "Nextjs 최신버전 15와 Turbopack으로 만든 보일러 플레이트입니다. 사이드 프로젝트용으로 만들었습니다.",
  keywords: "NextJS 15, Turbopack, Typescript, tailwindcss, shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextTopLoader color="#16a34a" shadow="0 0 10px #16a34a,0 0 5px #16a34a" />
        <ClientProvider>
          <ThemeProvider attribute="class" defaultTheme="system">
            <div id="wrap">
              <Header />
              <main id="content" role="main">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </ClientProvider>
        <GoogleAnalytics gaId="G-내계정키 환경변수로 넣을꺼임" />
        <GoogleTagManager gtmId="G-내계정키 환경변수로 넣을꺼임" />
      </body>
    </html>
  );
}
