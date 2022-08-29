import { useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Auth/Auth";
import "./base.css";
import AuthContext from "./Shared/context/auth-context";
import UsersContext from "./Shared/context/users-context";
import usersReducer from "./Shared/reducers/users-reducer";

const App = () => {
  const [users, dispatch] = useReducer(
    usersReducer,
    [],
    (initial = []) => JSON.parse(localStorage.getItem("users")) || initial
  );
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (user, isAdmin) => {
    setUser(user);
    setIsAdmin(isAdmin);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser({});
    setIsAdmin(false);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UsersContext.Provider value={{ users, dispatch }}>
      <AuthContext.Provider
        value={{ user, isLoggedIn, isAdmin, login, logout }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Auth />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </UsersContext.Provider>
  );
};

export default App;
