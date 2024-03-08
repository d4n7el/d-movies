import { getCategories } from '@api/categories.api';
import { useQuery } from '@tanstack/react-query';

export const useQueryCategories = () => {
  const queryCategories = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  return queryCategories;
};
