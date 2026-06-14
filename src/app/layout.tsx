import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from "next/font/google";
import NavBar from "./components/NavBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: "Wu's Portfolio",
  description: "Wu's Portfolio, a collection of projects.",
};

// Runs before first paint to apply the saved/system theme and avoid a flash.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var isDark = stored
      ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', isDark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
