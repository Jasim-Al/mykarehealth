import { createContext } from "react";

const UsersContext = createContext({
  users: [],
  dispatch: () => {},
});

export default UsersContext;
