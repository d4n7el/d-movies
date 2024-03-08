import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { SvgEs } from './svg-es.lang';
import { SvgEn } from './svg-en.lang';

export const SelectLanguage = () => {
  const [t, i18n] = useTranslation('translation');
  const languages = [
    { key: 'es', label: 'spanish', component: <SvgEs /> },
    { key: 'en', label: 'english', component: <SvgEn /> },
  ];

  const DropdownItemLang = languages.map((item) =>
    item.key !== i18n.language ? (
      <DropdownItem key={item.key} className=''>
        <span className=' text-boston-blue-500 flex justify-between items-center'>
          {t(item.label)} {item.component}
        </span>
      </DropdownItem>
    ) : (
      <DropdownItem key={item.key} className=' hidden' />
    )
  );

  return (
    <Dropdown backdrop='blur'>
      <DropdownTrigger>
        <Button
          variant='flat'
          size='sm'
          className=' shadow-none bg-transparent '
        >
          <span
            className='icon-[heroicons--language-20-solid] h-6 w-6 text-boston-blue-100
             animate-slide-in-left '
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant='faded'
        aria-label='Static Actions'
        selectionMode='single'
        onAction={(e: React.Key) => {
          i18n.changeLanguage(e.toString());
        }}
      >
        {DropdownItemLang}
      </DropdownMenu>
    </Dropdown>
  );
};
