export interface Price {
  amount: number;
  currency: string;
}

export interface Item {
  id: string;
  title: string;
  city: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}
