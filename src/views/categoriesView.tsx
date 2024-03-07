import { getCategories } from '@api/categories.api';
import { useQuery } from '@tanstack/react-query';
import { CategoryComponent } from '@components/categories/categoryComponent';
import { useEffect, useState } from 'react';
import { MoviesView } from '@views/moviesView';
import { Genre } from '@interfaces/genre.interface';

export const CategoriesView = () => {
  const [category, setCategory] = useState<Genre | null>(null);

  const getCategoriesHandle = async () => {
    const response = await getCategories();
    return response;
  };

  const queryCategories = useQuery({
    queryKey: ['categories'],
    queryFn: getCategoriesHandle,
  });

  const genres = queryCategories.data?.data.genres;

  useEffect(() => {
    if (genres) setCategory(genres[0]);
  }, [genres]);

  return (
    <div className='flex'>
      <div className='w-[15%] flex gap-2 flex-wrap h-fit'>
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
        <MoviesView width='w-[88%]' genre={category}></MoviesView>
      ) : null}
    </div>
  );
};
