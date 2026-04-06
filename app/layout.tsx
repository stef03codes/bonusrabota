import type { Metadata } from "next";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Navbar from "@/app/components/Navbar";
import {Toaster} from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Бонус Работа",
  description: "Платформа за објавување и работа на огласи!",
};

config.autoAddCss = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Toaster />
      </body>
    </html>
  );
}