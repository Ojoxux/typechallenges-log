type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
};

type ProductSummary = Pick<Product, "name" | "price">;
