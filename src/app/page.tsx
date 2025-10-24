// "use client";

// import { CategorizedFood } from "@/_components/foodCard";
// import { Header } from "@/_components/header/Header";
// import { Footer } from "@/_components/layout/Footer";
// import { useFood } from "@/_hooks/use-food";

// import { useEffect, useState } from "react";

// const Home = () => {
//   const { categories, foods } = useFood();
//   const [userEmail, setUserEmail] = useState<string | null>(null);

//   useEffect(() => {
//     if (localStorage) {
//       setUserEmail(localStorage.getItem("userEmail"));
//     }
//   }, []);

//   return (
//     <div className="bg-primary inter">
//       <Header />
//       <div className="">
//         <img src={"./BG.svg"} className="w-480 h-142.5 object-cover" />
//       </div>

//       <div className="p-22 bg-neutral-700">
//         {categories.map((category) => {
//           return (
//             <div key={category._id}>
//               <CategorizedFood
//                 foods={foods.filter((food) => {
//                   return food.categoryId._id == category._id;
//                 })}
//                 category={category}
//               />
//             </div>
//           );
//         })}
//       </div>
//       <footer>
//         <Footer categories={categories} />
//       </footer>
//     </div>
//   );
// };

// export default Home;
