import { getMoviesByCategory } from '@api/categories.api';
import { getMovies } from '@api/movies.api';
import { Genre } from '@interfaces/genre.interface';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@hooks/useDebounce';

export const useQueryMovies = (genre?: Genre, searchQuery?: string) => {
  const searchQueryDebounce = useDebounce({ value: searchQuery, delay: 500 });

  const getMoviesCategoriesHandle = async () => {
    const response = genre
      ? await getMoviesByCategory(genre.id)
      : getMovies(searchQuery);
    return response;
  };

  const queryMovies = useQuery({
    queryKey: genre
      ? ['moviesByCategory', genre.id]
      : ['movies', searchQueryDebounce],
    queryFn: getMoviesCategoriesHandle,
  });

  return queryMovies;
};
