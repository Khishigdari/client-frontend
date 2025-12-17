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
import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/_providers/CartProvider";
import OrderPlaced from "./OrderPlaced";

const OrderDetailCart = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const itemsTotal = cartItems.reduce(
    (c, item) => c + item.food.price * item.quantity,
    0
  );
  const shippingFee = cartItems.length ? 0.99 : 0;
  const total = itemsTotal + shippingFee;

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="secondary"
          className="rounded-full py-4 px-4"
          onClick={() => setOpen(true)}
        >
          <ShoppingCart width={16} height={16} />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="bg-neutral-700 overflow-scroll shadow-lg border-0 flex flex-col gap-7 h-screen rounded-l-[20px] p-8 w-[34rem] box-border">
        <DrawerHeader>
          <DrawerTitle className="flex items-center gap-3 text-primary-foreground">
            <ShoppingCart /> Order detail
          </DrawerTitle>
        </DrawerHeader>

        <Tabs defaultValue="cart" className="gap-0">
          <TabsList className="flex gap-2 mb-7 bg-background p-1 rounded-full justify-between w-80">
            <TabsTrigger
              value="cart"
              className="rounded-full py-1 focus:bg-red-500"
            >
              Cart
            </TabsTrigger>
            <TabsTrigger
              value="order"
              className="rounded-full py-1 focus:bg-red-500"
            >
              Order
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cart" className="w-116">
            <Card className="flex flex-col gap-5 p-4 ">
              <CardHeader className="px-0">
                <CardTitle className="text-muted-foreground text-5 text-7 font-[600]">
                  My cart
                </CardTitle>
              </CardHeader>

              {cartItems.length === 0 ? (
                <div className="bg-secondary py-8 px-12 rounded-xl flex flex-col gap-1 items-center">
                  <img src={"./cartIcon.svg"} />
                  <p className="text-foreground text-4 leading-7 font-[700]">
                    Your cart is empty
                  </p>
                  <p className="text-muted-foreground text-xs text-center">
                    Hungry? 🍔 Add some delicious dishes to your cart and
                    satisfy your cravings!
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-5">
                  {cartItems.map((cart) => (
                    <div key={cart.food._id} className="flex flex-col gap-5">
                      <div className="flex gap-[10px]">
                        <img
                          className="h-30 w-31 rounded-xl bg-gray-100"
                          src={cart.food.image}
                        />
                        <div className="flex flex-col gap-6 flex-1">
                          <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1">
                              <p className="text-red-500 text-4 leading-7 font-bold">
                                {cart.food.name}
                              </p>
                              <p className="text-foreground text-3 leading-4 font-normal">
                                {cart.food.ingredients}
                              </p>
                            </div>
                            <Button
                              variant="outline"
                              className="rounded-full text-red-500 border-red-500"
                              onClick={() => removeFromCart(cart.foodId)}
                            >
                              <X />
                            </Button>
                          </div>

                          <div className="flex justify-between items-center">
                            <div className="flex gap-3 items-center">
                              <Button
                                variant="ghost"
                                className="rounded-full"
                                size="lg"
                                onClick={() => decreaseQuantity(cart.foodId)}
                              >
                                <Minus />
                              </Button>
                              <p className="text-[18px] leading-7 font-[600] text-foreground">
                                {cart.quantity}
                              </p>
                              <Button
                                variant="ghost"
                                className="rounded-full"
                                size="lg"
                                onClick={() => increaseQuantity(cart.foodId)}
                              >
                                <Plus />
                              </Button>
                            </div>
                            <p className="font-bold">
                              ${(cart.food.price * cart.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </TabsContent>

          <TabsContent value="order">
            <Card className="flex flex-col gap-5 p-4 ">
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
                <p className="text-muted-foreground text-xs text-center">
                  🍕 "You haven't placed any orders yet. Start exploring our
                  menu and satisfy your cravings!"
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="flex flex-col gap-5 p-4">
          <CardHeader className="px-0">
            <CardTitle className="text-foreground text-5 text-7 font-[600]">
              Payment info
            </CardTitle>
          </CardHeader>

          <div className="flex justify-between">
            <p className="text-muted-foreground text-4 leading-7 font-[400]">
              Items
            </p>
            <p>${itemsTotal.toFixed(2)}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-muted-foreground text-4 leading-7 font-[400]">
              Shipping
            </p>
            <p>${shippingFee.toFixed(2)}</p>
          </div>

          <div className="border border-dashed border-foreground-50 my-2"></div>

          <div className="flex justify-between font-bold">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>

          {/* <Button className="w-full mt-4" onClick={handleCheckOut}>
            Checkout
          </Button> */}
          <div className="w-full mt-4">
            <OrderPlaced />
          </div>
        </Card>
      </DrawerContent>
    </Drawer>
  );
};

export default OrderDetailCart;
