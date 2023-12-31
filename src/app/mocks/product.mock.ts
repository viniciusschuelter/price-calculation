import { ProductInterface, ProductTabInterface } from '../interfaces/product.interface';


export const ProductsMock: ProductInterface[] = [
  { id: 1, name: 'Produto 1', description: 'Descrição Produto 1', fabricator: 'Fabricante A', price: 200, discount: 20 },
  { id: 2, name: 'Produto 2', description: 'Descrição Produto 2', fabricator: 'Fabricante B', price: 1, discount: 20 },
  { id: 3, name: 'Produto 3', description: 'Descrição Produto 3', fabricator: 'Fabricante C', price: 100, discount: 20 },
  { id: 4, name: 'Produto 4', description: 'Descrição Produto 4', fabricator: 'Fabricante A', price: 300, discount: 20 },
];

export const ProductTabMock: ProductTabInterface[] = [
  { header: 'Fabricante', prop: 'fabricator', type: 'text' },
  { header: 'Cod. Produto', prop: 'name', type: 'text'  },
  { header: 'Descrição', prop: 'description', type: 'text'  },
  { header: 'Valor', prop: 'price', type: 'number'  },
];

export const PriceTabMock: ProductTabInterface[] = [
  { header: 'Fabricante', prop: 'fabricator', type: 'text' },
  { header: 'Cod. Produto', prop: 'name', type: 'text'  },
  { header: 'Descrição', prop: 'description', type: 'text'  },
  { header: 'Valor', prop: 'price', type: 'number'  },
  { header: 'Desconto', prop: 'discount', type: 'number'  },
  { header: 'Total', prop: 'id', type: 'total'  },
];

export const initialProduct: ProductInterface = {
  id: 0, fabricator: '', name: '', description: '', price: 1, discount: 0
};
