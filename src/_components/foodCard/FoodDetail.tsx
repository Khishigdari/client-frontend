import { DialogTitle } from "@/components/ui/dialog";
import { Foodtype } from "@/lib/types";
import React from "react";

const FoodDetail = ({ foods }: { foods: Foodtype[] }) => {
  return (
    <div className="p-6 flex gap-6">
      <DialogTitle></DialogTitle>
      {/* {foods.filter((food)=>{
        <div>
        <img src={foods.image}/>
      </div>
      })} */}
    </div>
  );
};

export default FoodDetail;
