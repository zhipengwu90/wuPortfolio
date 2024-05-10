import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: "Wu's Portfolio",
  description: "Wu's Portfolio, a collection of projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className = 'dark'>
      <body
        className={`${montserrat.variable} font-mont bg-light  dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        {children}
       <Footer />
      </body>
    </html>
  );
}
