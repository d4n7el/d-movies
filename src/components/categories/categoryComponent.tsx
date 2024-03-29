import { Link } from '@nextui-org/react';
import { Genre } from '@interfaces/genre.interface';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useAuth } from '@context/auth.context';
export interface Props {
  genre: Genre;
  setCategory: Dispatch<SetStateAction<Genre | null>>;
  currentCategory: Genre | null;
}

export const CategoryComponent = ({
  genre,
  setCategory,
  currentCategory,
}: Props) => {
  const { isAuthenticated, redirect } = useAuth();
  const { name, id } = genre;

  useEffect(() => {
    if (!isAuthenticated) redirect('/login');
  }, [isAuthenticated]);

  return (
    <Link
      isBlock
      onClick={() => setCategory(genre)}
      className={`border h-fit  rounded-md border-white-alpha-light
      w-fit text-white-alpha flex justify-between cursor-pointer ${
        id === currentCategory?.id ? ' bg-boston-blue-500' : ''
      }`}
    >
      <span className='truncate'>{name}</span>
      <span className='icon-[material-symbols--arrow-forward]' />
    </Link>
  );
};
