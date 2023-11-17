export type ProductsData = {
  createdAt: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
  qtd: number;
  updatedAt: string;
};

export type DataProducts = {
  count: number;
  products: ProductsData[];
};
