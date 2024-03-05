export interface User {
  name: string;
}

export interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  login: (newUser: User) => void;
  logout: () => void;
}
