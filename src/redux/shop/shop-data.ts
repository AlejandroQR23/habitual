export interface ICategory {
  id: number;
  title: string;
  products: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  discount: number;
  img?: string;
}

export const getDiscount = (discount: number, price: number) => price - (price * discount) / 100;

export const SHOP_DATA: ICategory[] = [
  {
    id: 1,
    title: 'Misc',
    products: [
      { id: 0, name: 'VR', price: 1500, discount: 0 },
      { id: 1, name: 'Laptop', price: 500, discount: 10 },
      { id: 2, name: 'Lentes', price: 100, discount: 10 },
      { id: 3, name: 'Libro', price: 200, discount: 10 },
    ],
  },
];
