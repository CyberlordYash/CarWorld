import "./globals.css";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
export const metadata: Metadata = {
  title: "Car World",
  description: "Discover the best cars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
