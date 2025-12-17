import { FoodProvider } from "@/_providers/FoodProvider";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "NomNom Swift Delivery",
  description: "Food Delivery Web Application Client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FoodProvider>{children}</FoodProvider>
      </body>
    </html>
  );
}
