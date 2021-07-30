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

export interface IShop {
  [index: string]: ICategory;
  misc: ICategory;
  education: ICategory;
  music: ICategory;
  gaming: ICategory;
  electronics: ICategory;
  fashion: ICategory;
}

export const getDiscount = (discount: number, price: number) => price - (price * discount) / 100;

export const SHOP_DATA: IShop = {
  misc: {
    id: 1,
    title: 'Misc',
    products: [
      {
        id: 0,
        name: 'VR',
        price: 1500,
        discount: 0,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/gaming.png?alt=media&token=fbb34afd-9887-4bfc-9963-4b451341362a',
      },
      {
        id: 1,
        name: 'McBook Pro',
        price: 500,
        discount: 10,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/macbook.png?alt=media&token=ac922064-a6cb-4e53-a058-add510314ec8',
      },
      {
        id: 2,
        name: 'Lentes',
        price: 100,
        discount: 10,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/lentes.png?alt=media&token=8251d6a2-36d5-4cfd-bbed-338eca24d2d9',
      },
      {
        id: 3,
        name: 'Libro',
        price: 200,
        discount: 0,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/Book%2003.png?alt=media&token=309dc29c-e299-4486-a5b5-34b9eb520a40',
      },
      {
        id: 4,
        name: 'Disco',
        price: 600,
        discount: 10,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/Music%2004.png?alt=media&token=3f8f0679-da9b-4655-8695-ef6d85840161',
      },
      {
        id: 5,
        name: 'Headphones',
        price: 600,
        discount: 10,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/bose-headset.png?alt=media&token=e48e092d-fc36-48f1-b40d-b9b73c605b4e',
      },
    ],
  },
  education: {
    id: 2,
    title: 'Education',
    products: [
      {
        id: 3,
        name: 'Book 1',
        price: 200,
        discount: 0,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/Book%2003.png?alt=media&token=309dc29c-e299-4486-a5b5-34b9eb520a40',
      },
      {
        id: 6,
        name: 'Book 2',
        price: 100,
        discount: 5,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/Book%2001.png?alt=media&token=b55a4b07-a227-4648-a2e4-c619d5258553',
      },
      {
        id: 8,
        name: 'Book 3',
        price: 110,
        discount: 5,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/Book%2002.png?alt=media&token=ed44352f-8286-45e1-8379-0d401ec85f3e',
      },
    ],
  },
  music: {
    id: 3,
    title: 'Music',
    products: [
      {
        id: 4,
        name: 'Album 1',
        price: 600,
        discount: 10,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/Music%2004.png?alt=media&token=3f8f0679-da9b-4655-8695-ef6d85840161',
      },
      {
        id: 9,
        name: 'Album 2',
        price: 300,
        discount: 10,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/Music%2002.png?alt=media&token=b2df21c7-e911-4d86-ad4e-06dfe97ef5db',
      },
      {
        id: 10,
        name: 'Album 3',
        price: 180,
        discount: 0,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/Music%2003.png?alt=media&token=6cad7a18-0703-4d17-b850-5b1a323d22be',
      },
    ],
  },
  gaming: {
    id: 4,
    title: 'Gaming',
    products: [
      {
        id: 0,
        name: 'VR',
        price: 1500,
        discount: 0,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/gaming.png?alt=media&token=fbb34afd-9887-4bfc-9963-4b451341362a',
      },
      {
        id: 10,
        name: 'Xbox Controller',
        price: 500,
        discount: 0,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/Electronics%2006.png?alt=media&token=4f5600eb-615c-4322-871c-8974db32a7ff',
      },
    ],
  },
  electronics: {
    id: 5,
    title: 'Electronics',
    products: [
      {
        id: 1,
        name: 'McBook Pro',
        price: 500,
        discount: 10,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/macbook.png?alt=media&token=ac922064-a6cb-4e53-a058-add510314ec8',
      },
      {
        id: 5,
        name: 'Headphones',
        price: 600,
        discount: 10,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/bose-headset.png?alt=media&token=e48e092d-fc36-48f1-b40d-b9b73c605b4e',
      },
      {
        id: 10,
        name: 'IPhone 12',
        price: 5000,
        discount: 0,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/iphone.png?alt=media&token=aa45bac6-effe-4061-a4a9-56932d4dab00',
      },
    ],
  },
  fashion: {
    id: 6,
    title: 'Fashion',
    products: [
      {
        id: 2,
        name: 'Sunglasses',
        price: 100,
        discount: 10,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/lentes.png?alt=media&token=8251d6a2-36d5-4cfd-bbed-338eca24d2d9',
      },
      {
        id: 7,
        name: 'Shirt',
        price: 150,
        discount: 0,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/Fashion%2008.png?alt=media&token=6479e1a7-2a4b-4b32-bb59-1c1f8de5eb48',
      },
      {
        id: 12,
        name: 'Converse',
        price: 200,
        discount: 10,
        img: 'https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/Fashion%2003.png?alt=media&token=351f6978-304e-4f16-a238-652c11bf3512',
      },
    ],
  },
};
