import { getRequest } from '@api/base.api';
import { AxiosResponse } from 'axios';
import { GenreResponse } from 'src/interfaces/genre.interface';
import { MoviesResponse } from '@interfaces/movies.interface';

const BASE_URL_MOVIE_BD = import.meta.env.VITE_APP_BASE_URL_MOVIE_BD_;
const API_KEY_MOVIE_BD = import.meta.env.VITE_APP_API_KEY_MOVIE_BD_;

const queryApiKey = `?api_key=${API_KEY_MOVIE_BD}`;

export const getCategories = async (): Promise<
  AxiosResponse<GenreResponse, GenreResponse>
> => {
  const url = `${BASE_URL_MOVIE_BD}genre/movie/list${queryApiKey}`;
  const response = await getRequest(url);
  return response;
};

export const getMoviesByCategory = async (
  categoryId: number,
  currentPage: number
): Promise<AxiosResponse<MoviesResponse, MoviesResponse>> => {
  const url = `${BASE_URL_MOVIE_BD}discover/movie${queryApiKey}&with_genres=${categoryId}&page=${currentPage}`;
  const response = await getRequest(url);
  return response;
};
