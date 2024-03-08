import { CategoryComponent } from '@components/categories/categoryComponent';
import { useEffect, useState } from 'react';
import { MoviesView } from '@views/moviesView';
import { Genre } from '@interfaces/genre.interface';
import { useQueryCategories } from '@hooks/useQueryCategories';

export const CategoriesView = () => {
  const [category, setCategory] = useState<Genre | null>(null);
  const queryCategories = useQueryCategories();
  const genres = queryCategories.data?.data.genres;

  useEffect(() => {
    if (genres) setCategory(genres[0]);
  }, [genres]);

  return (
    <div className='flex flex-wrap'>
      <div
        className='w-[95%] container-category
        flex gap-2  h-fit overflow-scroll 
        overscroll-none'
      >
        {genres?.map((genre) => (
          <CategoryComponent
            key={genre.id}
            genre={genre}
            setCategory={setCategory}
            currentCategory={category}
          ></CategoryComponent>
        ))}
      </div>

      {category ? (
        <MoviesView width='w-[95%] mt-10' genre={category}></MoviesView>
      ) : null}
    </div>
  );
};
