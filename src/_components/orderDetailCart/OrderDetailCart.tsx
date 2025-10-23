"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
import OrderPlaced from "./OrderPlaced";
import { useRouter } from "next/navigation";

const OrderDetailCart = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const GoBackHome = () => {
    console.log("hello");
    setOpen(false);
    router.push("/");
  };
  return (
    <div>
      <Drawer direction="right" open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button
            variant={"secondary"}
            className="rounded-full py-4 px-4"
            onClick={() => {
              setOpen(true);
            }}
          >
            <ShoppingCart width={16} height={16} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-neutral-700 shadow-lg border-0 flex flex-col gap-7 h-screen rounded-l-[20px] p-8 w-134 box-border">
          <DrawerHeader>
            <DrawerTitle className="flex items-center gap-3 text-primary-foreground">
              <ShoppingCart />
              Order detail
            </DrawerTitle>
          </DrawerHeader>
          <div>
            <Tabs defaultValue="cart" className="gap-0">
              <TabsList className="flex gap-2 mb-7 bg-background p-1 rounded-full justify-between w-fit">
                <TabsTrigger
                  value="cart"
                  className="rounded-full py-1 focus:bg-red-500"
                >
                  Cart
                </TabsTrigger>
                <TabsTrigger
                  value="order"
                  className="rounded-full py-1  focus:bg-red-500"
                >
                  Order
                </TabsTrigger>
              </TabsList>
              <TabsContent value="cart">
                <Card className="flex flex-col gap-5 p-4 h-135">
                  <CardHeader className="px-0">
                    <CardTitle className="text-foreground text-5 text-7 font-[600]">
                      My cart
                    </CardTitle>
                  </CardHeader>
                  <div className="bg-secondary py-8 px-12 rounded-xl flex flex-col gap-1 items-center">
                    <img src={"./cartIcon.svg"} />
                    <p className="text-foreground text-4 leading-7 font-[700]">
                      Your cart is empty
                    </p>
                    <p className="text-muted-foreground  text-xs text-center">
                      Hungry? 🍔 Add some delicious dishes to your cart and
                      satisfy your cravings!
                    </p>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="order">
                <Card className="flex flex-col gap-5 p-4 h-135">
                  <CardHeader className="px-0">
                    <CardTitle className="text-foreground text-5 text-7 font-[600]">
                      Order history
                    </CardTitle>
                  </CardHeader>
                  <div className="bg-secondary py-8 px-12 rounded-xl flex flex-col gap-1 items-center">
                    <img src={"./cartIcon.svg"} />
                    <p className="text-foreground text-4 leading-7 font-[700]">
                      No Orders Yet?
                    </p>
                    <p className="text-muted-foreground  text-xs text-center">
                      🍕 "You haven't placed any orders yet. Start exploring our
                      menu and satisfy your cravings!"
                    </p>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <Card className="flex flex-col gap-5 p-4">
            <CardHeader className="px-0">
              <CardTitle className="text-foreground text-5 text-7 font-[600]">
                Payment info
              </CardTitle>
            </CardHeader>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="text-muted-foreground text-4 leading-7 font-[400]">
                  Items
                </p>
                <p>-</p>
              </div>
              <div className="flex justify-between">
                <p className="text-muted-foreground text-4 leading-7 font-[400]">
                  Shipping
                </p>
                <p>-</p>
              </div>
            </div>{" "}
            <div className="border border-dashed border-foreground-50"></div>
            <div className="flex justify-between">
              <p className="text-muted-foreground text-4 leading-7 font-[400]">
                Total
              </p>
              <p>-</p>
            </div>
            <div className=" w-full">
              <OrderPlaced goBackHome={GoBackHome} />
            </div>
          </Card>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default OrderDetailCart;
