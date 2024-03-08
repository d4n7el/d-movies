import { getCategories } from '@api/categories.api';
import { useQuery } from '@tanstack/react-query';

export const useQueryCategories = () => {
  const getCategoriesHandle = async () => {
    const response = await getCategories();
    return response;
  };

  const queryCategories = useQuery({
    queryKey: ['categories'],
    queryFn: getCategoriesHandle,
  });

  return queryCategories;
};
