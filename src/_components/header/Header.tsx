"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, User } from "lucide-react";
import Link from "next/link";
import LogOutBtn from "./LogOutBtn";
import { useRouter } from "next/navigation";
import OrderDetailCart from "../orderDetailCart/OrderDetailCart";
import { useEffect, useState } from "react";

export const Header = () => {
  // const userEmail = localStorage.getItem("userEmail");
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const route = useRouter();
  useEffect(() => {
    if (localStorage) {
      const userEmail = localStorage.getItem("userEmail");
      if (!userEmail) {
        route.push("/login");
      } else {
        setUserEmail(userEmail);
      }
    }
  }, []);

  // useEffect(() => {
  //     if(localStorage) {
  //       setUserEmail(localStorage.setItem("userEmail"))
  //     }
  //   }, []);

  return (
    <div>
      <header className="bg-primary max-w-480 flex justify-between items-center py-3 px-22">
        <div className="my-13">
          <img src={"./clientLogo.svg"} />
        </div>
        <div className="flex gap-[13px]">
          <div className="flex gap-1">
            <Button className="bg-background py-2 px-3 rounded-full">
              <MapPin className="text-red-500 h-5 w-5" />
              <p className="text-3 leading-4 text-red-500">
                Delivery address:{" "}
              </p>
              <p className="text-3 leading-4 text-muted-foreground">
                {" "}
                Add location
              </p>
              <ChevronRight className="text-primary hover:text-foreground" />
            </Button>
          </div>

          <OrderDetailCart />

          <Link href={"./register"}>
            <Button className="rounded-full bg-red-500 py-4 px-4">
              <User width={16} height={16} />
            </Button>
          </Link>
          {userEmail ? (
            <div className=" flex gap-[13px]">
              <Button
                className="bg-background py-2 px-3 rounded-full text-3 leading-4 text-secondary-foreground"
                variant={"outline"}
              >
                {userEmail}
              </Button>
              <LogOutBtn />
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
    </div>
  );
};
