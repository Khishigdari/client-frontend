export type CategoryType = {
  name: string;
  _id: string;
};

export type Foodtype = {
  name: string;
  _id: string;
  price: number;
  ingredients: string;
  image: string;
  categoryId: CategoryType;
};
export type FoodOrderItem = {
  food: Foodtype;
  quantity: number;
};
export type Ordertype = {
  _id: string;
  totalPrice: number;
  foodOrderItems: FoodOrderItem[];
  status: string;
};

export type CartItem = {
  foodId: string;
  food: {
    _id: string;
    name: string;
    price: number;
    image: string;
    ingredients: string;
  };
  quantity: number;
};
