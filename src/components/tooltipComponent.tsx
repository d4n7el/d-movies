import { Tooltip } from '@nextui-org/react';
import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

export interface Props {
  content: ReactElement;
  title: string;
  description: string;
  closeDelay?: number;
}
export const TooltipComponent = ({
  content,
  title,
  description,
  closeDelay = 1000,
}: Props) => {
  const [t] = useTranslation('translation');
  return (
    <Tooltip
      closeDelay={closeDelay}
      content={
        <div className='px-1 py-2'>
          <div className='text-small font-bold'>{t(title)}</div>
          <div className='text-tiny'>{t(description)}</div>
        </div>
      }
    >
      {content}
    </Tooltip>
  );
};
