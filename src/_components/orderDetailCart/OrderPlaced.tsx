import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useCart } from "@/_providers/CartProvider";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Ordertype } from "@/lib/types";

const OrderPlaced = () => {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();
  // const [open, setOpen] = useState<boolean>(false);
  // const [orders, setOrders] = useState<Ordertype[]>([]);
  // const [activeTab, setActiveTab] = useState<"cart" | "order">("cart");
  const handleCheckOut = async () => {
    if (!cartItems.length) return;

    const foodOrderItems = {
      items: cartItems.map((item) => ({
        foodId: item.foodId,
        quantity: item.quantity,
      })),
    };

    try {
      const result = await fetch("https://food-be-next.vercel.app/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(foodOrderItems),
      });

      const data = await result.json();

      if (data.success) {
        // setOrders((prev) => [...prev, data.order]);
        clearCart();

        // setActiveTab("order");

        // toast.success("Order placed successfully!");
      } else {
        toast.error("Failed to place order: " + data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="destructive"
            className="py-2 px-8 rounded-full"
            onClick={handleCheckOut}
          >
            Checkout
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="flex flex-col gap-6 items-center">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Your order has been successfully placed !
            </AlertDialogTitle>
          </AlertDialogHeader>
          <div>
            <img src={"./illustration.svg"} />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel className="rounded-full bg-secondary border-none">
              Back to home
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default OrderPlaced;
