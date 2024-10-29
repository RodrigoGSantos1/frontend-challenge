import { useQuery } from '@tanstack/react-query';
import api from './api';
import { paths } from './paths';
import { QueryKeys } from './queryKeys';

interface FetchProductsType {
  page: number;
  limit: number;
}

export const fetchProducts = async (params: FetchProductsType) => {
  const { data } = await api.get(
    `${paths.products}?page=${params.page}&limit=${params.limit}`,
  );
  return data;
};

export const useProducts = (params: FetchProductsType) => {
  return useQuery({
    queryKey: [QueryKeys.products, params],
    queryFn: () => fetchProducts(params),
  });
};
