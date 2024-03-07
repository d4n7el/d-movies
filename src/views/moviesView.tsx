import { MoviesComponent } from '@components/movies/movieComponent';
import { getMoviesByCategory } from 'src/api/categories.api';
import { useQuery } from '@tanstack/react-query';
import { useState, Suspense } from 'react';
import ModalComponent from '@components/modalComponent';
import { Movie } from '@interfaces/movies.interface';
import { TitleComponent } from '@components/titleComponent';
import { Genre } from '@interfaces/genre.interface';
import { useTranslation } from 'react-i18next';
import { MovieContentModal } from '@components/movies/detail/movieContentModal';
import { getMovies } from '@api/movies.api';
import { SkeletonComponent } from '@components/skeletonComponent';
import { Input } from '@nextui-org/react';
import { useDebounce } from 'src/hooks/useDebounce';

export interface Props {
  genre?: Genre;
  width: string;
}

export const MoviesView = ({ genre, width }: Props) => {
  const [t] = useTranslation('translation');
  const [movieDetail, setMovieDetail] = useState<Movie | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>();
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

  const movies = queryMovies.data?.data.results;
  const info = queryMovies.data?.data;

  return (
    <div className={`${width} p-10`}>
      <div className='flex items-center gap-2 flex-wrap py-10'>
        <TitleComponent
          title={genre ? genre.name : t('movieList')}
          subTitle={t('infoPages', {
            results: info?.total_results,
            pages: info?.total_pages,
          })}
        ></TitleComponent>
        {!genre && (
          <div
            className='w-[340px]
          flex justify-center items-center 
          text-boston-blue-400 ml-2'
          >
            <Input
              onValueChange={setSearchQuery}
              className='input-search border-bos '
              label='Search'
              isClearable
              radius='lg'
              classNames={{
                base: ['data-[hover=true]:bg-transparent'],
                label: 'text-boston-blue-500',
                input: [
                  'text-boston-blue-500',
                  'placeholder:text-boston-blue-400',
                ],
                innerWrapper: 'hover:bg-transparent',
                inputWrapper: [
                  'bg-white-alpha/10',
                  'backdrop-blur-xl',
                  'backdrop-saturate-200',
                  'hover:bg-transparent',
                  'data-[hover=true]:bg-white-alpha/10',
                  'data-[hover=true]:border',
                  'data-[hover=true]:border-white-alpha/20',
                  'group-data-[focus=true]:bg-white-alpha/10',
                  'group-data-[focus=true]:border',
                  'group-data-[focus=true]:border-white-alpha/20',
                  '!cursor-text',
                ],
              }}
              placeholder='Type to search...'
              startContent={<span className='icon-[ri--search-2-line]'></span>}
            />
          </div>
        )}
      </div>

      <Suspense fallback={<SkeletonComponent></SkeletonComponent>}>
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
      </Suspense>
    </div>
  );
};
