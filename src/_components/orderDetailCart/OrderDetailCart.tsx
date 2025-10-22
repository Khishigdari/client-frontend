import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ShoppingCart } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import OrderPlaced from "./OrderPlaced";

const OrderDetailCart = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"secondary"} className="rounded-full py-4 px-4">
            <ShoppingCart width={16} height={16} />
          </Button>
        </DialogTrigger>
        {/* <div className="flex justify-end"> */}
        <DialogContent className="bg-neutral-700 shadow-lg border-0 flex flex-col gap-7 h-screen">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-primary-foreground">
              <ShoppingCart />
              Order details
            </DialogTitle>
          </DialogHeader>
          <div className="flex gap-2 bg-background p-1 rounded-full justify-between">
            <Button
              className="rounded-full py-1 px-24 focus:bg-red-500 focus:text-secondary-foreground"
              variant={"ghost"}
            >
              Cart
            </Button>
            <Button
              className="rounded-full py-1 px-23 focus:bg-red-500 focus:text-secondary-foreground"
              variant={"ghost"}
            >
              Order
            </Button>
          </div>
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
                Hungry? 🍔 Add some delicious dishes to your cart and satisfy
                your cravings!
              </p>
            </div>
          </Card>
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
              <OrderPlaced />
            </div>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OrderDetailCart;
