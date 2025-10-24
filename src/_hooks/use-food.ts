"use client";

import { CategoryType, Foodtype } from "@/lib/types";
import { useEffect, useState } from "react";

export const useFood = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [foods, setFoods] = useState<Foodtype[]>([]);

  const getCategories = async () => {
    const result = await fetch(
      "https://food-be-next.vercel.app/api/categories"
    );
    const responseData = await result.json();
    const { data } = responseData;
    setCategories(data);
    console.log(data, "data");
    setCategories(data);
  };

  const getFoods = async () => {
    const result = await fetch("https://food-be-next.vercel.app/api/foods");
    const responseData = await result.json();
    const { foods } = responseData;
    setFoods(foods);
    console.log(foods, "data");
    console.log(responseData);
  };
  useEffect(() => {
    getCategories();
    getFoods();
  }, []);
  return {
    loading,
    foods,
    categories,
    reFetchFoods: getFoods,
    reFetchCategories: getCategories,
  };
};
