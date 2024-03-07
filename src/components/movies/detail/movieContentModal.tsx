import { TitleComponent } from 'src/components/titleComponent';
import { Movie } from '@interfaces/movies.interface';
import { Genre } from '@interfaces/genre.interface';
import { useTranslation } from 'react-i18next';

export interface Props {
  movie: Movie | null;
  genre: Genre;
}

export const MovieContentModal = ({ movie, genre }: Props) => {
  const URL_IMAGES_MOVIE_BD_ = import.meta.env.VITE_APP_URL_IMAGES_MOVIE_BD_;
  const urlImageBg = URL_IMAGES_MOVIE_BD_ + movie?.poster_path;

  const [t] = useTranslation('translation');
  return (
    <div
      className='bg-cover h-[600px] bg-center relative'
      style={{ backgroundImage: `url(${urlImageBg})` }}
    >
      <div className='absolute z-10 left-0 top-0 h-full w-full gradient-opaque'></div>
      <div className='absolute z-20 left-0 top-0 h-full w-full flex items-end justify-end '>
        <div className='h-fit px-10 py-10 '>
          <TitleComponent
            title={movie?.title ?? ''}
            subTitle={t('currentCategory', { genre: genre.name })}
          ></TitleComponent>
          <article className='text-boston-blue-50 flex justify-end tracking-wide  '>
            <p className='w-[400px]'>{movie?.overview}</p>
          </article>
          <article className='text-boston-blue-50 flex justify-end mt-6 px-10 gap-3'>
            {movie?.adult && (
              <section className='flex items-center bg-white-alpha  py-1 px-3 rounded-md'>
                <span className='w-6 h-6 icon-[uil--18-plus] bg-danger-600'></span>
              </section>
            )}
            <section className='flex border py-1 px-3 rounded-md items-center border-white/10'>
              <p>{t('language')}:</p>
              <span className='ml-2 text-boston-blue-400'>
                {movie?.original_language?.toString()}
              </span>
            </section>
            <section className='flex border py-1 px-3 rounded-md items-center border-white/10'>
              <p>{t('releaseDate')}:</p>
              <span className='ml-2 text-boston-blue-400'>
                {movie?.release_date?.toString()}
              </span>
            </section>
            <section className='flex border py-1 px-3 rounded-md items-center border-white/10'>
              <span className='icon-[icon-park-solid--like]'></span>
              <span className='ml-2 text-boston-blue-400'>
                {movie?.vote_count?.toString()}
              </span>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};
