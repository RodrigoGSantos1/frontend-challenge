export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOverviewVisible: boolean,
}
