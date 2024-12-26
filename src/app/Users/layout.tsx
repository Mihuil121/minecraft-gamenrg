import RootLayout from "../layout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Игроки",
    description: "Ютуберы",
  };

export default function NewLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <RootLayout>
            {children}
        </RootLayout>
    );
}
