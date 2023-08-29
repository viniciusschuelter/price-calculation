

export interface ProductInterface {
  id: string;
  fabricator: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  editing?: boolean;
}

export interface ProductTabInterface {
  header: string;
  prop: keyof ProductInterface;
  type: 'text' | 'number';
}
