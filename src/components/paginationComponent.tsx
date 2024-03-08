import { Pagination } from '@nextui-org/react';
import { Dispatch, SetStateAction } from 'react';

export interface Props {
  total: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const PaginationComponent = ({
  total,
  currentPage,
  setCurrentPage,
}: Props) => {
  return (
    <div className='flex flex-col  justify-center container-pagination ml-3 pt-2'>
      <Pagination
        className='bg-transparent '
        variant='light'
        classNames={{
          base: ['p-1 '],
          cursor: ['bg-boston-blue-600'],
          item: [
            'bg-white-alpha/10',
            'text-boston-blue-600',
            'active:bg-white-alpha/40',
            '[&[data-hover=true]:not([data-active=true])]:bg-transparent',
            '[&[data-hover=true]:not([data-active=true])]:border',
            '[&[data-hover=true]:not([data-active=true])]:border-boston-blue-600/30',
          ],
        }}
        total={total}
        color='secondary'
        page={currentPage}
        onChange={setCurrentPage}
      />
      <p className='text-small text-default-500 mt-2'>
        Selected Page: {currentPage} of {total}
      </p>
    </div>
  );
};
