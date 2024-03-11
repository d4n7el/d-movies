import { getRequest } from '@api/base.api';
import { AxiosResponse } from 'axios';
import { MoviesResponse } from '@interfaces/movies.interface';
import { MovieResponse } from '@interfaces/movie.interface';

const BASE_URL_MOVIE_BD = import.meta.env.VITE_APP_BASE_URL_MOVIE_BD_;
const API_KEY_MOVIE_BD = import.meta.env.VITE_APP_API_KEY_MOVIE_BD_;

const queryApiKey = `?api_key=${API_KEY_MOVIE_BD}`;

export const getMovies = async (
  currentPage: number,
  path: 'search' | 'discover',
  query?: string
): Promise<AxiosResponse<MoviesResponse, MoviesResponse>> => {
  const url = `${BASE_URL_MOVIE_BD}${path}/movie${queryApiKey}&query=${query}&page=${currentPage}`;
  const response = await getRequest(url);
  return response;
};

export const getMovie = async (
  id: number
): Promise<AxiosResponse<MovieResponse, MovieResponse>> => {
  const url = `${BASE_URL_MOVIE_BD}movie/${id}${queryApiKey}`;
  const response = await getRequest(url);
  return response;
};
