"use client";
import { useData } from "@/_providers/FoodProvider";
import React from "react";

const page = () => {
  const { foods, categories, refetchFoods, isLoading } = useData();
  console.log(foods, "foods");
  console.log(categories, "categories");
  console.log(isLoading, "Loading");
  console.log(refetchFoods, "refetch");

  return <div className="p-10">page</div>;
};

export default page;
