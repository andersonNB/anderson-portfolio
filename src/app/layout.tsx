import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anderson Navarro | Frontend Developer",
  description:
    "Portfolio de Anderson Navarro, Frontend Developer especializado en React y Next.js.",
};

const themeScript = `
  (function () {
    try {
      var storedTheme = localStorage.getItem("theme");
      var theme = storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

      document.documentElement.dataset.theme = theme;
    } catch (error) {
      document.documentElement.dataset.theme = "dark";
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased" data-theme="dark" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
