import { Card, CardHeader, CardFooter, Image, Button } from '@nextui-org/react';
import { Movie } from '@interfaces/movies.interface';
import { useTranslation } from 'react-i18next';
import { Dispatch, SetStateAction, useEffect } from 'react';
import imgDefault from '@images/bg-login.jpeg';
import { useAuth } from '@context/auth.context';

export interface Props {
  movie: Movie;
  setMovieDetail: Dispatch<SetStateAction<Movie | null>>;
}

export const MoviesComponent = ({ movie, setMovieDetail }: Props) => {
  const { isAuthenticated, redirect } = useAuth();

  const { poster_path, title, release_date } = movie;
  const [t] = useTranslation('translation');
  const URL_IMAGES_MOVIE_BD_ = import.meta.env.VITE_APP_URL_IMAGES_MOVIE_BD_;

  useEffect(() => {
    if (!isAuthenticated) redirect('/login');
  }, [isAuthenticated]);

  return (
    <Card
      isFooterBlurred
      className='w-[150px] md:w-[200px] h-[200px] col-span-12 sm:col-span-5'
    >
      <CardHeader className='absolute z-10 top-1 flex-col items-start'>
        <Button
          className='text-tiny bg-boston-blue-500 text-boston-blue-50 '
          radius='full'
          size='sm'
          onClick={() => {
            setMovieDetail(movie);
          }}
        >
          {t('showMore')}
        </Button>
      </CardHeader>
      <Image
        removeWrapper
        alt='Card example background'
        className='z-0 w-full h-full scale-125 -translate-y-6 object-cover'
        src={`${poster_path ? URL_IMAGES_MOVIE_BD_ + poster_path : imgDefault}`}
      />

      <CardFooter className='absolute bg-black/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between'>
        <div>
          <p className='text-boston-blue-100 text-tiny truncate text-ellipsis overflow-hidden w-[150px]'>
            {title}
          </p>
          <p className='text-boston-blue-100 text-tiny truncate text-ellipsis overflow-hidden w-[150px]'>
            {release_date}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};
