import { createBrowserRouter } from 'react-router-dom';
import { LoginView } from '@views/login/loginView';
import { RegisterView } from '@views/login/registerView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginView></LoginView>,
  },
  {
    path: '/register',
    element: <RegisterView></RegisterView>,
  },
]);
