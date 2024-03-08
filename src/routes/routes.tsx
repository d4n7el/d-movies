import { Route, Routes } from 'react-router-dom';
import { LoginView } from '@views/login/loginView';
import { RegisterView } from '@views/login/registerView';
import { CategoriesView } from '@views/categoriesView';
import { MoviesView } from '@views/moviesView';
import { NotFound404 } from '@components/notFound404';

export const AppRouter = () => {
  const routes = [
    {
      path: '/',
      element: <CategoriesView></CategoriesView>,
    },
    {
      path: '/home',
      element: <CategoriesView></CategoriesView>,
    },
    {
      path: '/categories',
      element: <CategoriesView></CategoriesView>,
    },
    {
      path: '/movies',
      element: <MoviesView width='w-[100%]'></MoviesView>,
    },
    {
      path: '/login',
      element: <LoginView></LoginView>,
    },
    {
      path: '/register',
      element: <RegisterView></RegisterView>,
    },
    {
      path: '*',
      element: <NotFound404></NotFound404>,
    },
  ];

  return (
    <div className='m-auto pl-10 pt-2 '>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};
