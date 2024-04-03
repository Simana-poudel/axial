import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Header from "@/components/NavBar/Header";
import Footer from "@/components/Footer";
import DemoHeader from "@/components/NavBar/DemoHeader";
import NewDemoHeader from "@/components/NavBar/NewDemoHeader";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALD Corporate",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.png",
  },
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
        {/* <DemoHeader /> */}
        {/* <NewDemoHeader /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
