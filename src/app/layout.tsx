import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/layouts/navbar";
import Footer from "@/layouts/footer";
import "./globals.css";
import FocusTrap from "@mui/material/Unstable_TrapFocus";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
