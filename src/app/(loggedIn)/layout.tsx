"use client";
import { FoodProvider } from "@/_providers/FoodProvider";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useEffect(() => {
  //   const userEmail = localStorage.getItem("userEmail");

  //   if (!userEmail) return;

  //   const getUserId = async () => {
  //     const res = await fetch("http://localhost:4000/api/user", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email: userEmail }),
  //     });

  //     const data = await res.json();
  //     console.log({ data });

  //     if (data.success) {
  //       localStorage.setItem("userId", data.userId);
  //       // console.log("userId saved:", data.userId);
  //     }
  //   };

  //   getUserId();
  // }, []);
  return (
    <html lang="en">
      <body>
        <FoodProvider>{children}</FoodProvider>
      </body>
    </html>
  );
}
