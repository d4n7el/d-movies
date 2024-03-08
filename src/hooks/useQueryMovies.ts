import { getMoviesByCategory } from '@api/categories.api';
import { getMovies } from '@api/movies.api';
import { Genre } from '@interfaces/genre.interface';
import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@hooks/useDebounce';

export interface Props {
  genre?: Genre;
  searchQuery?: string;
  currentPage: number;
}

export const useQueryMovies = ({ genre, searchQuery, currentPage }: Props) => {
  const searchQueryDebounce = useDebounce({ value: searchQuery, delay: 500 });

  const getMoviesCategoriesHandle = async () => {
    const response = genre
      ? await getMoviesByCategory(genre.id, currentPage)
      : getMovies(currentPage, searchQuery);
    return response;
  };

  const queryMovies = useQuery({
    queryKey: genre
      ? ['moviesByCategory', genre.id, currentPage]
      : ['movies', searchQueryDebounce, currentPage],
    queryFn: getMoviesCategoriesHandle,
  });

  return queryMovies;
};
