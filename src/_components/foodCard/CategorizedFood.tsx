import { Button } from "@/components/ui/button";
import { CategoryType, Foodtype } from "@/lib/types";
import { Plus } from "lucide-react";

export const CategorizedFood = ({
  foods,
  category,
  refetchFoods,
}: {
  foods: Foodtype[];
  category: CategoryType;
  refetchFoods: () => Promise<void>;
}) => {
  return (
    <div>
      <div className="flex flex-col mb-[54px]">
        <h2 className="text-[30px] leading-9 font-[600] text-white mb-13.5">
          {category.name}
        </h2>
        <div className="flex gap-9">
          {foods?.map((food) => (
            <div
              key={food._id}
              className="w-99.5 h-85.5 p-4 border border-border rounded-[20px] flex flex-col gap-5 bg-white"
            >
              <div className="w-full h-52.5 rounded-xl  overflow-hidden relative">
                {food.image ? (
                  <div>
                    <img src={food.image} alt="" className="bg-gray-200" />
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-5 bottom-5 rounded-full py-2 px-4"
                    >
                      <Plus className="text-red-500 " />
                    </Button>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-2xl leading-8 font-semibold text-red-500 flex-1 items-center">
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
          ))}
        </div>
      </div>
    </div>
  );
};
