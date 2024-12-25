import type { Metadata } from "next";
import "./globals.css";
import Cap from "@/components/Cap/Cap";

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
      <body >
        <Cap />
        {children}
      </body>
    </html>
  );
}
