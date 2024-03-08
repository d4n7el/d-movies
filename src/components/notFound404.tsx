import { Button, Link } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';

export const NotFound404 = () => {
  const [t] = useTranslation('translation');
  return (
    <div
      className='
      bg-transparent mt-[-100px] sticky
      h-fit flex justify-center '
    >
      <div className=' w-[500px]'>
        <p className='w-full text-center text-[200px] text-white-alpha/40'>
          404
        </p>
        <h6 className='w-full text-center text-boston-blue-500 text-2xl mt-[-60px]'>
          {t('404')}
        </h6>
        <div className='flex justify-center mt-10'>
          <Button
            as={Link}
            href='/categories'
            className=' bg-white/10 text-boston-blue-500'
            endContent={
              <span className='icon-[material-symbols--arrow-forward]'></span>
            }
          >
            {t('goToMain')}
          </Button>
        </div>
      </div>
    </div>
  );
};
