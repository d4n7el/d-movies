import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactElement,
  useMemo,
} from 'react';
import { AuthContextProps, User, UserSignUp } from '@interfaces/auth.interface';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from 'firebase/auth';
import { auth } from 'firebase.config';
import { useNavigate } from 'react-router-dom';

export interface Props {
  children: ReactElement;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {
    return null;
  },
  signUp: () => {},
  redirect: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser) as User);
      setIsAuthenticated(true);
    }
  }, []);

  const redirect = (path: string = '/login') => {
    navigate(path);
  };

  const login = async (user: UserSignUp) => {
    const response: UserCredential = await signInWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    setUser(user);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(response.user));
    return response;
  };

  const signUp = async (user: UserSignUp) => {
    const response: UserCredential = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    setUser(user);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(response.user));
    return response;
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    return true;
  };

  const value = useMemo(() => {
    return {
      user,
      isAuthenticated,
      login,
      logout,
      signUp,
      redirect,
    };
  }, [isAuthenticated, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
