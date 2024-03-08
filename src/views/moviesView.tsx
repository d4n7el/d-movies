import { MoviesComponent } from '@components/movies/movieComponent';
import { useState, useEffect } from 'react';
import ModalComponent from '@components/modalComponent';
import { Movie } from '@interfaces/movies.interface';
import { TitleComponent } from '@components/titleComponent';
import { Genre } from '@interfaces/genre.interface';
import { useTranslation } from 'react-i18next';
import { MovieContentModal } from '@components/movies/detail/movieContentModal';
import { SkeletonComponent } from '@components/skeletonComponent';
import { Input } from '@nextui-org/react';
import { useQueryMovies } from '@hooks/useQueryMovies';
import { PaginationComponent } from '@components/paginationComponent';

export interface Props {
  genre?: Genre;
  width: string;
}

export const MoviesView = ({ genre, width }: Props) => {
  const [t] = useTranslation('translation');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [movieDetail, setMovieDetail] = useState<Movie | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>();
  const queryMovies = useQueryMovies({ genre, searchQuery, currentPage });

  const movies = queryMovies.data?.data.results;
  const info = queryMovies.data?.data;

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);
  return (
    <div className={`${width} p-10 pt-0`}>
      <div className='flex items-center gap-2 flex-wrap py-10 pt-0'>
        <TitleComponent
          title={genre ? genre.name : t('movieList')}
          subTitle={t('infoPages', {
            results: info?.total_results,
            pages: info?.total_pages,
          })}
        />
        {!genre && (
          <div
            className='w-[100%] sm:w-[200px] md:w-[340px]
            flex justify-center items-center 
          text-boston-blue-400 ml-2 mt-10 sm:mt-0'
          >
            <Input
              onValueChange={setSearchQuery}
              className='input-search'
              label={t('search')}
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
              startContent={<span className='icon-[ri--search-2-line]' />}
            />
          </div>
        )}
        {info?.total_pages && (
          <PaginationComponent
            total={info?.total_pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
      {!queryMovies.isLoading ? (
        <div className='flex gap-2 flex-wrap w-12/12 overflow-scroll'>
          {movies?.map((movie) => (
            <MoviesComponent
              key={movie.id}
              movie={movie}
              setMovieDetail={setMovieDetail}
            />
          ))}
          {movieDetail && (
            <ModalComponent
              onCloseHandle={setMovieDetail}
              open={!!movieDetail}
              size='5xl'
              content={<MovieContentModal movie={movieDetail} genre={genre} />}
            />
          )}
        </div>
      ) : (
        <div className='flex gap-2 flex-wrap w-12/12 overflow-scroll'>
          <SkeletonComponent items={20} />
        </div>
      )}
    </div>
  );
};
