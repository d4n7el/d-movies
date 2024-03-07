import { MoviesComponent } from '@components/movies/movieComponent';
import { getMoviesByCategory } from 'src/api/categories.api';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import ModalComponent from '@components/modalComponent';
import { Movie } from '@interfaces/movies.interface';
import { TitleComponent } from '@components/titleComponent';
import { Genre } from '@interfaces/genre.interface';
import { useTranslation } from 'react-i18next';
import { MovieContentModal } from '@components/movies/detail/movieContentModal';
import { getMovies } from '@api/movies.api';

export interface Props {
  genre?: Genre;
  width: string;
}

export const MoviesView = ({ genre, width }: Props) => {
  const [t] = useTranslation('translation');
  const [movieDetail, setMovieDetail] = useState<Movie | null>(null);
  const getMoviesCategoriesHandle = async () => {
    const response = genre ? await getMoviesByCategory(genre.id) : getMovies();
    return response;
  };

  const queryMovies = useQuery({
    queryKey: genre ? ['moviesByCategory', genre.id] : ['movies'],
    queryFn: getMoviesCategoriesHandle,
  });

  const movies = queryMovies.data?.data.results;
  const info = queryMovies.data?.data;

  return (
    <div className={`flex gap-2 flex-wrap ${width} p-10`}>
      <TitleComponent
        title={genre ? genre.name : t('movieList')}
        subTitle={t('infoPages', {
          results: info?.total_results,
          pages: info?.total_pages,
        })}
      ></TitleComponent>

      <div className='flex gap-2 flex-wrap w-12/12 overflow-scroll'>
        {movies?.map((movie) => (
          <MoviesComponent
            key={movie.id}
            movie={movie}
            setMovieDetail={setMovieDetail}
          ></MoviesComponent>
        ))}
        <ModalComponent
          onCloseHandle={setMovieDetail}
          open={!!movieDetail}
          size='5xl'
          content={
            <MovieContentModal
              movie={movieDetail}
              genre={genre}
            ></MovieContentModal>
          }
        ></ModalComponent>
      </div>
    </div>
  );
};
