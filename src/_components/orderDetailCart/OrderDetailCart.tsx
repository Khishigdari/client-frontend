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
import OrderPlaced from "./OrderPlaced";
import { useRouter } from "next/navigation";
import { Ordertype } from "@/lib/types";

const OrderDetailCart = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [orders, setOrders] = useState<Ordertype[]>([]);

  console.log({ orders });

  const getOrders = async () => {
    // const result = await fetch("http://localhost:4000/api/order");
    const result = await fetch("https:food-be-next.vercel.app/api/order");

    const responseData = await result.json();
    const { orders } = responseData;
    setOrders(orders);
    console.log({ responseData });
  };

  useEffect(() => {
    getOrders();
  }, []);

  const itemsTotal = orders.reduce((orderAcc, order) => {
    const orderTotal = order.foodOrderItems.reduce((itemAcc, item) => {
      return itemAcc + item.food.price * item.quantity;
    }, 0);
    return orderAcc + orderTotal;
  }, 0);

  const shippingFee = orders.length > 0 ? 0.99 : 0;

  const total = itemsTotal + shippingFee;

  const GoBackHome = () => {
    setOpen(false);
    // setOrders([]);
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
        <DrawerContent className="bg-neutral-700 shadow-lg border-0 flex flex-col gap-7 h-screen rounded-l-[20px] p-8 w-[34rem] box-border">
          <DrawerHeader>
            <DrawerTitle className="flex items-center gap-3 text-primary-foreground">
              <ShoppingCart />
              Order detail
            </DrawerTitle>
          </DrawerHeader>
          <div>
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
                  className="rounded-full py-1  focus:bg-red-500"
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
                  {orders.length === 0 ? (
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
                  ) : (
                    <div className="flex flex-col gap-5">
                      {orders.map((order) => (
                        <div key={order._id} className="flex flex-col gap-5">
                          {order.foodOrderItems.map((item) => (
                            <div>
                              <div className="flex gap-[10px]">
                                <img
                                  className="h-30 w-31 rounded-xl bg-gray-100"
                                  src={item.food.image}
                                />

                                <div className="flex flex-col gap-6">
                                  <div className="flex gap-[10px]">
                                    <div className=" flex flex-col">
                                      <p className="text-red-500 text-4 leading-7 font-bold">
                                        {item.food.name}
                                      </p>
                                      <p className="text-foreground text-3 leading-4 font-normal">
                                        {item.food.ingredients}
                                      </p>
                                    </div>
                                    <Button
                                      variant={"outline"}
                                      className="rounded-full text-red-500 border-red-500 hover:bg-none hover:text-none"
                                    >
                                      <X />
                                    </Button>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <div className="flex gap-3 items-center">
                                      <Button
                                        variant={"ghost"}
                                        className="rounded-full "
                                        size={"lg"}
                                        // onClick={handleCountDownOnClick}
                                        // disabled={quantity === 1}
                                      >
                                        <Minus />
                                      </Button>
                                      <p className="text-[18px] leading-7 font-[600] text-foreground">
                                        {item.quantity}
                                      </p>
                                      <Button
                                        variant={"ghost"}
                                        className="rounded-full "
                                        size={"lg"}
                                        // onClick={handleCountUpOnClick}
                                      >
                                        <Plus />
                                      </Button>
                                    </div>
                                    <div>${order.totalPrice}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
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
                <p>${itemsTotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-muted-foreground text-4 leading-7 font-[400]">
                  Shipping
                </p>
                <p>${shippingFee.toFixed(2)}</p>
              </div>
            </div>
            <div className="border border-dashed border-foreground-50"></div>
            <div className="flex justify-between">
              <p className="text-muted-foreground text-4 leading-7 font-[400]">
                Total
              </p>
              <p>${total.toFixed(2)}</p>
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
