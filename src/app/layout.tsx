import type { Metadata } from "next";
import "./globals.css";
import Cap from "@/components/Cap/Cap";
import './style.scss';
import icon from '../img/gosnov.png';

export const metadata: Metadata = {
  title: "GameNRG",
  description: "server mincravt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={icon.src} type="image/x-icon" />
      </head>
      <body>
        <Cap />
        {children}
      </body>
    </html>
  );
}