interface ICategory {
  title: string;
  products: IProduct[];
}

interface IProduct {
  name: string;
  price: number;
  discount: number;
}

export const getDiscount = (discount: number, price: number) => price - (price * discount) / 100;

export const SHOP_DATA: ICategory[] = [
  {
    title: 'Misc',
    products: [
      { name: 'Laptop', price: 500, discount: 10 },
      { name: 'Lentes', price: 100, discount: 10 },
      { name: 'Libro', price: 200, discount: 10 },
    ],
  },
];
