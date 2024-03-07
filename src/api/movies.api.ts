import { getRequest } from '@api/base.api';
import { AxiosResponse } from 'axios';
import { ResponseMovies } from '@interfaces/movies.interface';

const BASE_URL_MOVIE_BD = import.meta.env.VITE_APP_BASE_URL_MOVIE_BD_;
const API_KEY_MOVIE_BD = import.meta.env.VITE_APP_API_KEY_MOVIE_BD_;

const queryApiKey = `?api_key=${API_KEY_MOVIE_BD}`;

export const getMovies = async (): Promise<
  AxiosResponse<ResponseMovies, ResponseMovies>
> => {
  const url = `${BASE_URL_MOVIE_BD}discover/movie${queryApiKey}`;
  const response = await getRequest(url);
  return response;
};
