import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ShoppingCart } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const OrderDetailCart = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className="rounded-full bg-secondary py-4 px-4">
            <ShoppingCart
              width={16}
              height={16}
              className="text-secondary-foreground hover:text-secondary"
            />
          </Button>
        </DialogTrigger>
        {/* <div className="flex justify-end"> */}
        <DialogContent className="bg-neutral-700 shadow-lg border-0 flex flex-col gap-7 h-screen">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-primary-foreground">
              <ShoppingCart className="" />
              Order details
            </DialogTitle>
          </DialogHeader>
          <div className="flex gap-2 bg-background p-1 rounded-full justify-between">
            <Button className="rounded-full py-1 px-24" variant={"destructive"}>
              Cart
            </Button>
            <Button className="rounded-full py-1 px-23" variant={"ghost"}>
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
            <Button
              variant={"destructive"}
              className="py-2 px-8 rounded-full"
              disabled
            >
              Checkout
            </Button>
          </Card>
        </DialogContent>
        {/* </div> */}
      </Dialog>
    </div>
  );
};

export default OrderDetailCart;
