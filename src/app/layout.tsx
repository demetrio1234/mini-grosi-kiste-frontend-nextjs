import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Login from "./_components/Forms/Login/Login";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mini Grosi Kiste",
  description: "Mini Grosi Kiste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{/*children*/}
        <Login></Login>
      </body>
    </html>
  );
}
