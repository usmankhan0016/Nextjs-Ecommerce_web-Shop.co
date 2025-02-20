import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Announcement from "@/components/Announcement";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop.co E-commerce Web",
  description: "Created by Usman Nasir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Announcement/>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
