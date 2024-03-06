import { UserSignUp } from '@interfaces/auth.interface';
import { useAuth } from '@context/auth.context';
import { useNavigate } from 'react-router-dom';
import { ContainerAuth } from '@components/containerAuth';

export const RegisterComponent = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const submitFormHandle = async (user: UserSignUp) => {
    try {
      const response = await signUp(user);
      if (response) navigate('/home');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <ContainerAuth
      isLogin={false}
      submitFormHandle={submitFormHandle}
    ></ContainerAuth>
  );
};
