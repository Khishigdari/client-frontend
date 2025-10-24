"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const Page = () => {
  // const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

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
            <h3 className="text-6 leading-8 font-[600]">
              Reset your password{" "}
            </h3>
            <p className="text-4 leading-6 font-[400] text-muted-foreground">
              Enter your email to receive a password reset link.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <Button>
            {/* onClick={onLogin} */}
            Send link
          </Button>
          <div className="flex gap-3 justify-center">
            <p className="text-muted-foreground text-4 leading-6 font-[400]">
              Don’t have an account?
            </p>
            <Link href={"/register"}>
              <p className="text-[#2563EB] text-4 leading-6 font-[400]">
                Sign up
              </p>
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
