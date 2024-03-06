import { useAuth } from '@context/auth.context';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const HomeComponent = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, []);

  return <div>home</div>;
};
