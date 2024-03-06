export interface User {
  name?: string;
  email?: string;
  password?: string;
}

export interface UserSignUp extends Omit<User, 'name'> {
  email: string;
  password: string;
}

export interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (newUser: UserSignUp) => any;
  logout: () => Promise<boolean> | null;
  signUp: (newUser: UserSignUp) => any;
}
