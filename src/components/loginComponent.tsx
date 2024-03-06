import { useAuth } from '@context/auth.context';
import { UserSignUp } from '@interfaces/auth.interface';
import { redirectDocument } from 'react-router-dom';
import { ContainerAuth } from '@components/containerAuth';

export const LoginComponent = () => {
  const { login } = useAuth();
  const submitFormHandle = async (user: UserSignUp) => {
    try {
      const response = await login(user);
      if (response) redirectDocument('/home');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <ContainerAuth isLogin submitFormHandle={submitFormHandle}></ContainerAuth>
  );
};
