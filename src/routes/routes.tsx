import { Route, Routes } from 'react-router-dom';
import { LoginView } from '@views/login/loginView';
import { RegisterView } from '@views/login/registerView';
import HomeView from '@views/homeView';

export const AppRouter = () => {
  const routes = [
    {
      path: '/',
      element: <HomeView></HomeView>,
    },
    {
      path: '/home',
      element: <HomeView></HomeView>,
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
      element: <>404</>,
    },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
