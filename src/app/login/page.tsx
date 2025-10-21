"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    if (localStorage) {
      const loggedInEmail = localStorage.getItem("userEmail");
      if (loggedInEmail) {
        router.push("/");
      }
    }
  }, [localStorage]);

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
      // localStorage.setItem("password", password);
      router.push("/");
    } else {
      alert("Login failed, Email not found");
    }
  };
  return (
    <div className="w-full h-screen flex justify-between p-5">
      <div className="flex items-center ml-25">
        <div className="flex flex-col gap-6">
          <Link href={"/"}>
            <Button variant={"outline"} className="w-9 h-9 ">
              <ChevronLeft />
            </Button>
          </Link>
          <div className="flex flex-col gap-1">
            <h3 className="text-6 leading-8 font-[600]">Log in</h3>
            <p className="text-4 leading-6 font-[400] text-muted-foreground">
              Create a strong password with letters, numbers.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a className="underline">Forgot password ?</a>
          </div>

          <Button variant="outline" onClick={onLogin}>
            Let's Go
          </Button>
          <div className="flex gap-3 justify-center">
            <p className="text-muted-foreground text-4 leading-6 font-[400]">
              Don’t have an account?
            </p>
            <Link href={"/register"}>
              {/* <Button onClick={() => changePath}> */}
              <p className="text-[#2563EB] text-4 leading-6 font-[400]">
                Sign up
              </p>
              {/* </Button> */}
            </Link>
          </div>
        </div>
      </div>
      <div className="w-214 h-screen">
        <img
          src={"./delivery.svg"}
          className="rounded-2xl w-214 h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default Page;
