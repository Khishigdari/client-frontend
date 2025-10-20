"use client";

import { CategorizedFood } from "@/_components/foodCard";
import { Footer } from "@/_components/layout/Footer";
import { CategoryType, Foodtype } from "@/lib/types";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const Home = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [newCategory, setNewCategory] = useState<string | undefined>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
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
    <div className="bg-primary">
      <header className="bg-primary max-w-480 flex justify-between items-center py-3 px-22">
        <div className="my-13">
          <img src={"./clientLogo.svg"} />
        </div>
        <div className="flex gap-[13px]">
          <div className="flex gap-1">
            <Button className="bg-background py-2 px-3 rounded-full">
              <MapPin className="text-red-500 h-5 w-5" />
              <p className="text-3 leading-4 text-red-500">
                Delivery address:{" "}
              </p>
              <p className="text-3 leading-4 text-muted-foreground">
                {" "}
                Add location
              </p>
              <ChevronRight className="text-primary hover:text-foreground" />
            </Button>
          </div>

          <Button className="rounded-full bg-secondary py-4 px-4">
            <ShoppingCart
              width={16}
              height={16}
              className="text-secondary-foreground"
            />
          </Button>
          <Link href={"./register"}>
            <Button className="rounded-full bg-red-500 py-4 px-4">
              <User width={16} height={16} />
            </Button>
          </Link>
          {/* <div>{userEmail}</div> */}
        </div>
      </header>
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
