"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const router = useRouter();

  const onLogin = async () => {
    const result = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "apllication/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const response = await result.json();
    if (response.success) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("password", password);
      router.push("/");
    } else {
      alert("Login failed, Email not found");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-60">
        <p>Email</p>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="outline" onClick={onLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Page;
