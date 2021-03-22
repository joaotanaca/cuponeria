import {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import { ProductI } from 'src/interfaces/products';

export type filter = ' ' | 'asc' | 'desc';

interface ProductsContextI {
  filterProducts: (products: ProductI[]) => ProductI[];
  setFilter: Dispatch<SetStateAction<filter>>;
}

const ProductsContext = createContext({} as ProductsContextI);

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }: { children?: ReactNode }) => {
  const [filter, setFilter] = useState<filter>(' ');

  const filterProducts = (products: ProductI[]) => {
    if (filter === 'asc') {
      return priceAsc([...products]);
    } else if (filter === 'desc') {
      return priceDesc([...products]);
    }
    return products;
  };

  const priceDesc = (products: ProductI[]) =>
    products.sort((a, b) => b.price - a.price);
  const priceAsc = (products: ProductI[]) =>
    products.sort((a, b) => a.price - b.price);

  return (
    <ProductsContext.Provider value={{ setFilter, filterProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
