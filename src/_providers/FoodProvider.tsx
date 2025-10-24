"use client";
import { CategoryType, Foodtype } from "@/lib/types";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

type FoodContextType = {
  foods: Foodtype[];
  categories: CategoryType[];
  refetchFoods: () => Promise<void>;
  isLoading: boolean;
};

//creating context
const FoodContext = createContext<FoodContextType>({} as FoodContextType);

//wrapper component
export const FoodProvider = ({ children }: Props) => {
  const [foods, setFoods] = useState<Foodtype[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getCategories = async () => {
    setIsLoading(true);
    // console.log(setIsLoading, "loading");
    const result = await fetch(
      "https://food-be-next.vercel.app/api/categories"
    );
    const responseData = await result.json();
    const { data } = responseData;
    setCategories(data);
    setIsLoading(false);
    // console.log(setIsLoading, "loading");
  };

  const getFoods = async () => {
    setIsLoading(true);

    const result = await fetch("https://food-be-next.vercel.app/api/foods");
    const responseData = await result.json();
    setFoods(responseData.foods);
    setIsLoading(false);
    // setRefetchFoods(getFoods);
  };

  useEffect(() => {
    getCategories();
    getFoods();
  }, []);

  return (
    <FoodContext.Provider
      value={{
        foods,
        categories,
        refetchFoods: getFoods,
        isLoading,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

//usage
export const useData = () => {
  return useContext(FoodContext);
};

//challange
// ene useData gaas zovhon foods/categories garch irj baigaag saijruul:
// refetchFoods gargaj ireh
// loading gargaj ireh
