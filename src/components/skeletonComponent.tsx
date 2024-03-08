import { Card, Skeleton } from '@nextui-org/react';

export interface Props {
  items: number;
}

export const SkeletonComponent = ({ items }: Props) => {
  const dynamicItems = Array.from({ length: items }, (_, index) => index + 1);
  return (
    <>
      {dynamicItems.map((item) => (
        <Card
          className='w-[200px] space-y-5 p-4 bg-white/10 opacity-15 '
          radius='lg'
          key={item}
        >
          <Skeleton className='rounded-lg bg-white/10 '>
            <div className='h-24 rounded-lg bg-default-300'></div>
          </Skeleton>
          <div className='space-y-3'>
            <Skeleton className='w-3/5 rounded-lg bg-white/10'>
              <div className='h-3 w-3/5 rounded-lg bg-default-200'></div>
            </Skeleton>
            <Skeleton className='w-4/5 rounded-lg bg-white/10'>
              <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
            </Skeleton>
            <Skeleton className='w-2/5 rounded-lg bg-white/10'>
              <div className='h-3 w-2/5 rounded-lg bg-default-300'></div>
            </Skeleton>
          </div>
        </Card>
      ))}
    </>
  );
};
