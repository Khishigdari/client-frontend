"use client";
import { CategorizedFood } from "@/_components/foodCard";
import { useData } from "@/_providers/FoodProvider";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const page = () => {
  const { foods, categories, refetchFoods, isLoading } = useData();
  console.log(foods, "foods");
  console.log(categories, "categories");
  console.log(isLoading, "Loading");
  console.log(refetchFoods, "refetch");

  return (
    <div className="p-10">
      {/* {isLoading ? (<Skeleton className="w-50 h-25" />) : (<CategorizedFood categories={categories} foods={food}/>)} */}
      <div className="flex gap-5">
        {[1, 2, 3].map((c) => (
          <Skeleton className="w-100 h-50" key={c} />
        ))}
      </div>
    </div>
  );
};

export default page;
