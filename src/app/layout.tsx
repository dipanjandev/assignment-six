import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import FooterSec from "@/components/shared/FooterSec";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Assignment 6",
  description: "Gym Center Home Page",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
        <FooterSec />
      </body>
    </html>
  );
}
