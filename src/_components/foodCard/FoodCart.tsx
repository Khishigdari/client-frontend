"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useCart } from "@/_providers/CartProvider";

type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string;
};

type Props = {
  food: Food;
};

const FoodCard: React.FC<Props> = ({ food }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleCountUp = () => setQuantity((prev) => prev + 1);
  const handleCountDown = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex p-6 gap-6 w-full">
      <div>
        <img
          src={food.image}
          alt={food.name}
          className="rounded-xl h-91 w-94 object-cover"
        />
      </div>
      <div className="pt-9 flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-3">
          <h2 className="text-[30px] leading-9 font-[600] text-red-500">
            {food.name}
          </h2>
          <p className="text-4 leading-6 font-[400] text-foreground">
            {food.ingredients}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-0">
              <p className="text-foreground text-4 leading-6 font-[400]">
                Total price
              </p>
              <h3 className="text-foreground text-6 leading-8 font-[600]">
                ${(food.price * quantity).toFixed(2)}
              </h3>
            </div>

            <div className="flex gap-3 items-center">
              <Button
                variant="outline"
                className="rounded-full"
                size="lg"
                onClick={handleCountDown}
                disabled={quantity === 1}
              >
                <Minus />
              </Button>
              <p className="text-[18px] leading-7 font-[600] text-foreground">
                {quantity}
              </p>
              <Button
                variant="outline"
                className="rounded-full"
                size="lg"
                onClick={handleCountUp}
              >
                <Plus />
              </Button>
            </div>
          </div>

          <Button
            className="rounded-full py-2 px-8 w-94 text-[14px] leading-5 font-[500]"
            onClick={() => addToCart({ foodId: food._id, food, quantity })}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
