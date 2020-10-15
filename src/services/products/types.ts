export interface ProductsQuery {
  search: string;
  limit: number;
  page: number;
  promo: boolean;
  active: boolean;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
}

export interface Products {
  items: Product[];
  itemCount: number;
  totalItems: number;
  pageCount: number;
  next: string;
  previous: string;
}
