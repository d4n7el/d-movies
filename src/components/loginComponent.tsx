import { useAuth } from 'src/context/auth.context';

export const LoginComponent = () => {
  const { user, isAuthenticated, login, logout } = useAuth();
  console.log(user, isAuthenticated, login, logout);
  return <div>login</div>;
};
