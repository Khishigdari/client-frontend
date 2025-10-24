"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CategoryType, Foodtype } from "@/lib/types";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { useFood } from "@/_hooks/use-food";

export const CategorizedFood = ({
  category,
  foods,
}: {
  category: CategoryType;
  foods: Foodtype[];
}) => {
  // const { foods } = useFood();

  const [selectedFoodId, setSelectedFoodId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<Foodtype>();

  const selectedFood = foods.find((food) => food._id === selectedFoodId);

  const handleCountUpOnClick = () => {
    setPrice(price);
    setQuantity(quantity + 1);
  };

  const handleCountDownOnClick = () => {
    setQuantity(quantity - 1);
  };

  const handleFoodClick = (id: string) => {
    setSelectedFoodId(id);
  };

  return (
    <div>
      <div className="flex flex-col mb-[54px]">
        <h2 className="text-[30px] leading-9 font-[600] text-white mb-13.5">
          {category.name}
        </h2>

        <div className="flex gap-9">
          {foods?.map((food) => (
            <div key={food._id}>
              <Dialog>
                <DialogTrigger asChild>
                  <div
                    className="w-99.5 h-85.5 p-4 border border-border rounded-[20px] flex flex-col gap-5 bg-white"
                    onClick={() => handleFoodClick(food._id)}
                  >
                    <div className="w-full h-52.5 rounded-xl  overflow-hidden relative">
                      {food.image ? (
                        <div>
                          <img
                            src={food.image}
                            alt=""
                            className="bg-gray-200"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-5 bottom-5 rounded-full py-2 px-4"
                            onClick={() =>
                              toast.success(
                                "Food is being added to the cart!"
                                //   {
                                //   style: {
                                //     background: "primary",
                                //     border: "1px",
                                //   },
                                // }
                              )
                            }
                          >
                            <Plus className="text-red-500 " />
                          </Button>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between gap-2.5">
                        <h3 className="text-2xl leading-8 font-semibold text-red-500 flex-1 items-center">
                          {food.name}
                        </h3>
                        <div className="text-[18px] leading-7 text-foreground font-semibold">
                          ${food.price}
                          {/* ₮ */}
                        </div>
                      </div>
                      <div className="text-[14px] leading-5 text-foreground font-normal items-start">
                        {food.ingredients}
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle></DialogTitle>
                  <DialogContent>
                    {selectedFood && (
                      <div className="" key={selectedFood._id}>
                        <div className="flex p-6 gap-6 w-full">
                          <div>
                            <img
                              src={selectedFood.image}
                              className="rounded-xl h-91 w-94"
                            />
                          </div>
                          <div className="pt-9 flex flex-col justify-between">
                            <div className="flex flex-col gap-3">
                              <h2 className="text-[30px] leading-9 font-[600] text-red-500">
                                {selectedFood.name}
                              </h2>
                              <p className="text-4 leading-6 font-[400] text-foreground">
                                {selectedFood.ingredients}
                              </p>
                            </div>
                            <div className="flex flex-col gap-6">
                              <div className="flex justify-between">
                                <div className="flex flex-col gap-0">
                                  <p className="text-foreground text-4 leading-6 font-[400]">
                                    Total price
                                  </p>
                                  <h3 className="text-foreground text-6 leading-8 font-[600]">
                                    ${selectedFood.price}
                                  </h3>
                                </div>
                                <div className="flex gap-3 items-center">
                                  <Button
                                    variant={"outline"}
                                    className="rounded-full "
                                    size={"lg"}
                                    onClick={handleCountDownOnClick}
                                  >
                                    <Minus />
                                  </Button>
                                  <p className="text-[18px] leading-7 font-[600] text-foreground">
                                    {quantity}
                                  </p>
                                  <Button
                                    variant={"outline"}
                                    className="rounded-full "
                                    size={"lg"}
                                    onClick={handleCountUpOnClick}
                                  >
                                    <Plus />
                                  </Button>
                                </div>
                              </div>
                              <Button className="rounded-full py-2 px8 w-94 text-[14px] leading-5 font-[500]">
                                Add to cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
