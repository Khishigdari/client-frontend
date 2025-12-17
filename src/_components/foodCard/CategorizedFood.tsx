"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CategoryType, Foodtype } from "@/lib/types";
import { Minus, Plus, Check } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { useCart } from "@/_providers/CartProvider";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const CategorizedFood = ({
  category,
  foods,
}: {
  category: CategoryType;
  foods: Foodtype[];
}) => {
  const { cartItems, addToCart } = useCart();
  const [selectedFoodId, setSelectedFoodId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const selectedFood = foods.find((food) => food._id === selectedFoodId);

  const handleCountUp = () => setQuantity(quantity + 1);
  const handleCountDown = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const isInCart = (foodId: string) =>
    cartItems.some((item) => item.foodId === foodId);

  const handleAddToCart = (food: Foodtype) => {
    if (isInCart(food._id)) {
      toast("Food is already in cart!");
      return;
    }

    addToCart({ foodId: food._id, food, quantity: 1 });
    toast.success("Food is being added to the cart!");
  };

  return (
    <div className="flex flex-col mb-[54px]">
      <h2 className="text-[30px] leading-9 font-[600] text-white mb-13.5">
        {category.name}
      </h2>

      <div className="flex flex-wrap gap-9">
        {foods.map((food) => (
          <Dialog key={food._id}>
            <DialogTrigger asChild>
              <div
                className="w-99.5 h-85.5 p-4 border border-border rounded-[20px] flex flex-col gap-5 bg-white cursor-pointer"
                onClick={() => {
                  setSelectedFoodId(food._id);
                  setQuantity(1);
                }}
              >
                <div className="w-full h-52.5 rounded-xl overflow-hidden relative">
                  <img
                    src={food.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />

                  <Button
                    variant="outline"
                    size="icon"
                    className={`absolute right-5 bottom-5 rounded-full border-none cursor-pointer
    ${
      isInCart(food._id)
        ? "bg-black text-white hover:bg-black hover:text-white"
        : "bg-white text-black  hover:bg-white hover:text-black"
    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(food);
                    }}
                  >
                    {isInCart(food._id) ? <Check /> : <Plus />}
                  </Button>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2.5">
                    <h3 className="text-2xl leading-8 font-semibold text-red-500 flex-1">
                      {food.name}
                    </h3>
                    <div className="text-[18px] leading-7 text-foreground font-semibold">
                      ${food.price}
                    </div>
                  </div>
                  <div className="text-[14px] leading-5 text-foreground font-normal">
                    {food.ingredients}
                  </div>
                </div>
              </div>
            </DialogTrigger>

            <DialogContent className="p-0">
              <VisuallyHidden>
                <DialogTitle>Food details</DialogTitle>
              </VisuallyHidden>
              {selectedFood && (
                <div className="flex p-6 gap-6 w-full">
                  {/* < */}
                  <img
                    src={selectedFood.image}
                    className="rounded-xl h-91 w-94"
                  />
                  <div className="pt-9 flex flex-col justify-between flex-1">
                    <div className="flex flex-col gap-3">
                      <h2 className="text-[30px] leading-6 text-red-500 font-semibold">
                        {selectedFood.name}
                      </h2>
                      <p className="text-foreground text-4 leading-6 font-normal">
                        {selectedFood.ingredients}
                      </p>
                    </div>

                    <div className="flex flex-col gap-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-4 leading-6 font-normal">
                            Total price
                          </p>
                          <h3 className="text-foreground text-6 leading-8 font-semibold">
                            ${(selectedFood.price * quantity).toFixed(2)}
                          </h3>
                        </div>

                        <div className=" flex gap-3 items-center">
                          <Button
                            variant="outline"
                            size="lg"
                            onClick={handleCountDown}
                            disabled={quantity === 1}
                            className="rounded-full"
                          >
                            <Minus />
                          </Button>
                          <p className="text-[18px] leading-7 font-semibold text-foreground">
                            {quantity}
                          </p>
                          <Button
                            variant="outline"
                            size="lg"
                            onClick={handleCountUp}
                            className="rounded-full"
                          >
                            <Plus />
                          </Button>
                        </div>
                      </div>

                      <Button
                        className="rounded-full py-2 px-8 w-94 text-[14px] leading-5 font-[500]"
                        onClick={() =>
                          addToCart({
                            foodId: selectedFood._id,
                            food: selectedFood,
                            quantity,
                          })
                        }
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};
