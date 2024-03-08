import { useQuery } from '@tanstack/react-query';
import { getMovie } from '@api/movies.api';

export const useQueryMovie = (id: number) => {
  const queryMovie = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovie(id),
  });
  return queryMovie;
};
