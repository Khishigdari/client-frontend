"use client";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/_providers/CartProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider> {children}</CartProvider>

        <Toaster position="top-center" />
      </body>
    </html>
  );
}
