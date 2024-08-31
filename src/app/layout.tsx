import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'primereact/resources/themes/saga-blue/theme.css';   // PrimeReact theme
import 'primereact/resources/primereact.min.css';           // PrimeReact core css
import "primeicons/primeicons.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Next.js Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
