import { Signal } from '@angular/core';


export interface ProductInterface {
  id: number;
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
  type: 'text' | 'number' | 'total';
}
