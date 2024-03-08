import { useQuery } from '@tanstack/react-query';
import { getMovie } from '@api/movies.api';

export const useQueryMovie = (id: number) => {
  const getMovieHandle = async () => {
    const response = await getMovie(id);
    return response;
  };

  const queryMovie = useQuery({
    queryKey: ['movie', id],
    queryFn: getMovieHandle,
  });
  return queryMovie;
};
