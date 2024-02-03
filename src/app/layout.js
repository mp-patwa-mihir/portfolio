import { Advent_Pro, Capriola } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import dynamic from "next/dynamic";
import "./globals.css";

const Header = dynamic(() => import("./components/layout/header"), {
  ssr: false,
});

const Preloader = dynamic(() => import("./components/preloader"), {
  ssr: false,
});


const capriola = Capriola({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-capriola",
  preload: true,
});

const adventPro = Advent_Pro({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-advent-pro",
  preload: true,
});

export const metadata = {
  title: "Mihir Patwa's Portfolio",
  description: "Developed by Mihir Patwa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${capriola.variable} ${adventPro.variable}`}>
        <Preloader />
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
