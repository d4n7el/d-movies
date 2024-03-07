import { getRequest } from '@api/base.api';
import { AxiosResponse } from 'axios';
import { ResponseMovies } from '@interfaces/movies.interface';

const BASE_URL_MOVIE_BD = import.meta.env.VITE_APP_BASE_URL_MOVIE_BD_;
const API_KEY_MOVIE_BD = import.meta.env.VITE_APP_API_KEY_MOVIE_BD_;

const queryApiKey = `?api_key=${API_KEY_MOVIE_BD}`;

export const getMovies = async (
  query?: string
): Promise<AxiosResponse<ResponseMovies, ResponseMovies>> => {
  const path = query ? 'search' : 'discover';
  const url = `${BASE_URL_MOVIE_BD}${path}/movie${queryApiKey}&query=${query}`;
  const response = await getRequest(url);
  return response;
};
