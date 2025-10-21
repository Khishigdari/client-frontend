"use client";

import { CategorizedFood } from "@/_components/foodCard";
import { Header } from "@/_components/header/Header";
import { Footer } from "@/_components/layout/Footer";
import { CategoryType, Foodtype } from "@/lib/types";
import { useEffect, useState } from "react";

const Home = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  // const [newCategory, setNewCategory] = useState<string | undefined>();
  // const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [foods, setFoods] = useState<Foodtype[]>([]);

  const getCategories = async () => {
    const result = await fetch("http://localhost:4000/api/categories");
    const responseData = await result.json();
    const { data } = responseData;
    setCategories(data);
    console.log(data, "data");
    setCategories(data);
  };

  const getFoods = async () => {
    const result = await fetch("http://localhost:4000/api/foods");
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

  // const userEmail = localStorage.getItem("userEmail");

  return (
    <div className="bg-primary inter">
      <Header />
      <div className="">
        <img src={"./BG.svg"} className="w-480 h-142.5 object-cover" />
      </div>
      <div className="p-22 bg-neutral-700">
        {categories.map((category) => {
          return (
            <div key={category._id}>
              <CategorizedFood
                refetchFoods={getFoods}
                foods={foods.filter((food) => {
                  return food.categoryId._id == category._id;
                })}
                category={category}
              />
            </div>
          );
        })}
      </div>
      <footer>
        <Footer categories={categories} />
      </footer>
    </div>
  );
};

export default Home;
