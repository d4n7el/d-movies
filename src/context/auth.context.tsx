import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactElement,
} from 'react';
import { AuthContextProps, User, UserSignUp } from '@interfaces/auth.interface';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from 'firebase.config';
import { UserCredential } from 'firebase/auth';

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
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser) as User);
      setIsAuthenticated(true);
    }
  }, []);

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

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};
