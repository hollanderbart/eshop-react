import { useQuery } from 'react-query';
import { getProductData, getProductsData, Product } from '../fakebackend/data';

export default class ProductService {
  static async getProducts(): Promise<Product[]> {
    return getProductsData();
  }

  static async getProduct(id: number): Promise<Product | undefined> {
    return getProductData(id);
  }
}

export const useProducts = () => {
  return useQuery<Product[], Error>('products', ProductService.getProducts);
};

export const useProduct = (id: number) =>
  useQuery<Product | undefined, Error>(['product', id], () =>
    ProductService.getProduct(id),
  );
