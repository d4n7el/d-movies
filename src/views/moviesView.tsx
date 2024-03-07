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

export interface Props {
  genre: Genre;
}

export const MoviesView = ({ genre }: Props) => {
  const [t] = useTranslation('translation');
  const [movieDetail, setMovieDetail] = useState<Movie | null>(null);
  const getMoviesCategoriesHandle = async () => {
    const response = await getMoviesByCategory(genre.id);
    return response;
  };

  const queryMovies = useQuery({
    queryKey: ['moviesByCategory', genre.id],
    queryFn: getMoviesCategoriesHandle,
  });

  const movies = queryMovies.data?.data.results;
  const info = queryMovies.data?.data;

  return (
    <>
      <TitleComponent
        title={genre.name}
        subTitle={t('infoPages', {
          results: info?.total_results,
          pages: info?.total_pages,
        })}
      ></TitleComponent>

      <div className='flex gap-2 flex-wrap w-12/12 h-[90vh] overflow-scroll'>
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
    </>
  );
};
