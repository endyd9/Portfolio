import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DY_Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen h-screen min-h-screen max-w-xl lg:max-w-none mx-auto overflow-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
