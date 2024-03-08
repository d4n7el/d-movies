import { TitleComponent } from 'src/components/titleComponent';
import { Movie } from '@interfaces/movies.interface';
import { Genre } from '@interfaces/genre.interface';
import { useTranslation } from 'react-i18next';
import { Image } from '@nextui-org/react';
import defaultImage from '@images/bg-login.jpeg';
import { useQueryMovie } from '@hooks/useQueryMovie';
export interface Props {
  movie: Movie;
  genre?: Genre;
}

export const MovieContentModal = ({ movie, genre }: Props) => {
  const [t] = useTranslation('translation');
  const queryMovie = useQueryMovie(movie?.id);
  const detailMovie = queryMovie.data?.data;
  const productionCompanies = detailMovie?.production_companies ?? [];
  const URL_IMAGES_MOVIE_BD_ = import.meta.env.VITE_APP_URL_IMAGES_MOVIE_BD_;
  const urlImagePoster = URL_IMAGES_MOVIE_BD_ + movie?.poster_path;
  const urlImageBg = URL_IMAGES_MOVIE_BD_ + movie?.backdrop_path;
  const urlCompanyProd =
    URL_IMAGES_MOVIE_BD_ + productionCompanies?.length > 0
      ? productionCompanies[0].logo_path
      : '';

  return (
    <div>
      <div
        className='bg-cover h-[600px] bg-center relative'
        style={{
          backgroundImage: `url(${
            movie?.backdrop_path ? urlImageBg : defaultImage
          })`,
        }}
      >
        <div className='absolute z-10 left-0 top-0 h-full w-full gradient-opaque'></div>
        <div className='absolute z-20 left-0 top-0 h-full w-full flex items-end justify-end '></div>
      </div>
      <div className='flex items-end mt-[-250px] z-30 sticky'>
        <div className='hidden md:inline-flex ml-10 md:w-[30%] shadow-lg shadow-white-alpha/20 rounded-lg'>
          <Image
            className='rounded-lg'
            width={400}
            alt='NextUI hero Image with delay'
            src={urlImagePoster ?? defaultImage}
          />
        </div>
        <div className='h-fit px-10 md:w-[70%] mt-[-150px]'>
          <TitleComponent
            title={movie?.title ?? ''}
            subTitle={genre ? t('currentCategory', { genre: genre.name }) : ''}
          ></TitleComponent>
          <article className='text-boston-blue-50 flex justify-end tracking-wide text-right mt-5'>
            <p className='w-[400px]'>{movie?.overview}</p>
          </article>
          <article className='text-boston-blue-50 flex justify-end mt-6 px-10 gap-1'>
            {movie?.adult && (
              <section className='flex items-center bg-white-alpha  py-1 px-3 rounded-md'>
                <span className='w-6 h-6 icon-[uil--18-plus] bg-danger-600'></span>
              </section>
            )}

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
            <section className='flex border py-1 px-3 rounded-md items-center border-white/10'>
              <p>{t('language')}:</p>
              <span className='ml-2 text-boston-blue-400'>
                {movie?.original_language?.toString()}
              </span>
            </section>
          </article>
          <article className='text-boston-blue-50 flex justify-end items-center gap-1 mt-1 px-10'>
            <section className='border py-1 px-3 rounded-md border-white/10 w-fit'>
              <span className='ml-2 text-boston-blue-400'>{t('genre')}:</span>
              {detailMovie?.genres.map((genre) => (
                <span className='px-1'>{genre.name} /</span>
              ))}
            </section>
          </article>
          <article className='text-boston-blue-50 flex justify-end items-center gap-1 mt-1 px-10 pt-5'>
            <Image
              className='rounded-lg'
              width={100}
              alt='NextUI hero Image with delay'
              src={urlCompanyProd}
            />
          </article>
        </div>
      </div>
    </div>
  );
};
