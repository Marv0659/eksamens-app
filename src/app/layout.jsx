"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { BasketProvider } from "./contexts/basketContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BasketProvider>
          <Navbar />
          {children}
        </BasketProvider>{" "}
        <Footer />
      </body>
    </html>
  );
}
