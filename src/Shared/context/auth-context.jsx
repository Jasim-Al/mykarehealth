import { createContext } from "react";

const AuthContext = createContext({
  user: {},
  isAdmin: false,
  login: () => {},
  logout: () => {},
  isLoggedIn: false,
});

export default AuthContext;
