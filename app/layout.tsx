import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/NavBar/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axial- Construction Company",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
