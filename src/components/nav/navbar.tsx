import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
} from '@nextui-org/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectLanguage } from '@components/nav/selectLanguage';
import { UserOptions } from '@components/nav/userOptions';

export const Nav = () => {
  const [t] = useTranslation('translation');

  const menuItems = [
    {
      label: t('categories'),
      url: '/categories',
    },
    {
      label: t('movies'),
      url: '/movies',
    },
    {
      label: t('search'),
      url: '/search',
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItemsElements = menuItems.map((item) => (
    <NavbarItem key={item.url}>
      <Link
        className={`text-boston-blue-100 text-1xl 
        tracking-[.15em]  
        cursor-pointer px-3 rounded-md`}
        href={item.url}
      >
        {item.label}
      </Link>
    </NavbarItem>
  ));

  return (
    <Navbar
      className='navbar-default bg-boston-blue-900   shadow-none fixed'
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent className='sm:hidden'>
        <NavbarMenuToggle
          icon={
            isMenuOpen ? (
              <span
                className='icon-[iconamoon--close] text-2xl dark:text-boston-blue-100
              text-boston-blue-700 animate-expand-horizontally'
              ></span>
            ) : (
              <span
                className='icon-[tabler--menu] 
                text-2xl 
               text-boston-blue-100
                animate-expand-vertically'
              ></span>
            )
          }
        />
      </NavbarContent>
      <NavbarContent
        className={`hidden sm:flex gap-4 font-default font-semibold`}
        justify='center'
      >
        {menuItemsElements}
      </NavbarContent>
      <NavbarContent justify='end'>
        <SelectLanguage></SelectLanguage>
        <NavbarItem className=' flex cursor-pointer'>
          <UserOptions></UserOptions>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={`${item.url}`}>
            <Link
              className={`w-full text-boston-blue-100`}
              href={item.url}
              size='lg'
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
