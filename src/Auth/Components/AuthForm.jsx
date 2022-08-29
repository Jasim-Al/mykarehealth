import { useContext, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "../../Shared/components/Forms/Button";
import Input from "../../Shared/components/Forms/Input";
import styles from "./AuthForm.module.css";
import "../../Shared/styles/transition.css";
import UsersContext from "../../Shared/context/users-context";
import AuthContext from "../../Shared/context/auth-context";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const { users, dispatch } = useContext(UsersContext);
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
    confirm: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    setError("");
    if (!isLogin) {
      let user = null;
      user = users.find((user) => user.mobile === form.mobile);
      if (user) {
        setError("User Already exists. Please login.");
      } else {
        dispatch({
          type: "ADD_USER",
          user: {
            name: form.name,
            mobile: form.mobile,
            password: form.password,
            appointments: [],
          },
        });
        user = {
          name: form.name,
          mobile: form.mobile,
          appointments: [],
        };
        login(user, false);
      }
    }
    if (isLogin) {
      let user = null;
      user = users.find((user) => user.mobile === form.mobile);
      if (!user) {
        setError("User not found");
      } else {
        const isAdmin = user.mobile === "admin" || user.name === "admin";
        if (user.password === form.password) {
          delete user.password;
          login(user, isAdmin);
        } else {
          setError("Password is incorrect.");
        }
      }
    }
  };

  const inputHandler = (event) => {
    setForm((form) => {
      return { ...form, [event.target.name]: event.target.value };
    });
  };

  const toggleHandler = (type) => {
    switch (type) {
      case "log":
        return setIsLogin(true);
      case "sign":
        return setIsLogin(false);
      default:
        return setIsLogin(true);
    }
  };

  return (
    <div className={styles.AuthForm}>
      {error && <p className="error">{error}</p>}
      <div className={styles.AuthForm__Form}>
        <CSSTransition
          in={!isLogin}
          timeout={200}
          classNames={styles.AuthForm__Transition}
          unmountOnExit
        >
          <Input
            name="name"
            placeholder="Enter your Name"
            onChange={inputHandler}
            value={form.name}
          />
        </CSSTransition>
        <Input
          name="mobile"
          placeholder="Enter your phone number"
          onChange={inputHandler}
          value={form.mobile}
        />
        <Input
          name="password"
          type="password"
          placeholder="Enter a password"
          onChange={inputHandler}
          value={form.password}
        />
        <CSSTransition
          in={!isLogin}
          timeout={200}
          classNames="my-node"
          unmountOnExit
        >
          <Input
            name="confirm"
            type="password"
            placeholder="confirm your password"
            onChange={inputHandler}
            value={form.confirm}
          />
        </CSSTransition>
      </div>
      <div className={styles.AuthForm__Action}>
        <Button anime onClick={submitHandler}>
          Submit
        </Button>
      </div>
      <div className={styles.AuthForm__Toggle}>
        <Button onClick={toggleHandler.bind(this, "log")} inverse={!isLogin}>
          Login
        </Button>
        <Button inverse={isLogin} onClick={toggleHandler.bind(this, "sign")}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default AuthForm;
