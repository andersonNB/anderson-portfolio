import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anderson Navarro | Frontend Developer",
  description:
    "Portfolio de Anderson Navarro, Frontend Developer especializado en React y Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
