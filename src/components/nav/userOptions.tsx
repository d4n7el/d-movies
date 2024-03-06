import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@context/auth.context';
import { useNavigate } from 'react-router-dom';

export const UserOptions = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [t] = useTranslation('translation');

  const redirect = (url: string) => {
    navigate(url);
  };

  const logoutHandle = async () => {
    await logout();
    navigate('/login');
  };

  const options = [
    {
      key: 'setting',
      label: 'setting',
      icon: (
        <span className='icon-[material-symbols--settings-b-roll] w-6 h-6'></span>
      ),
      action: () => {
        redirect('/setting');
      },
    },
    {
      key: 'logout',
      label: 'logout',
      icon: <span className='icon-[websymbol--logout] w-6 h-6'></span>,
      action: logoutHandle,
    },
  ];

  const DropdownItemLang = options.map((item) => (
    <DropdownItem key={item.key} className='' onClick={item.action}>
      <span className='text-boston-blue-500 flex justify-between items-center'>
        {t(item.label)} {item.icon}
      </span>
    </DropdownItem>
  ));

  return (
    <Dropdown backdrop='blur'>
      <DropdownTrigger>
        <Button
          className='bg-transparent border border-boston-blue-50 '
          aria-label='user-info'
          variant='flat'
          size='sm'
          startContent={
            <span
              className='icon-[mingcute--user-4-fill]
              w-6 h-6 text-boston-blue-100
              animate-spin-clockwise'
            ></span>
          }
          endContent={
            <span className='text-boston-blue-100'>{user?.email}</span>
          }
        ></Button>
      </DropdownTrigger>
      <DropdownMenu
        variant='faded'
        aria-label='Static Actions'
        selectionMode='single'
      >
        {DropdownItemLang}
      </DropdownMenu>
    </Dropdown>
  );
};
