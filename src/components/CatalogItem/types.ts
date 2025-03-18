export interface CatalogItemProps {
  image: string;
  title: string;
  price: string;
  isCart?: boolean;
  count?: number;
}

export interface CatalogItemCart {
  count: number;
  image: string;
  title: string;
  price: string;
}
