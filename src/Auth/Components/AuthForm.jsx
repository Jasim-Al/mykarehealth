import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "../../Shared/components/Forms/Button";
import Input from "../../Shared/components/Forms/Input";
import styles from "./AuthForm.module.css";
import "../../Shared/styles/transition.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
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
    <form className={styles.AuthForm} onSubmit={submitHandler}>
      <div className={styles.AuthForm__Form}>
        <CSSTransition
          in={!isLogin}
          timeout={200}
          classNames={styles.AuthForm__Transition}
          unmountOnExit
        >
          <Input name="name" placeholder="Enter your Name" />
        </CSSTransition>
        <Input name="mobile" placeholder="Enter your phone number" />
        <Input name="password" type="password" placeholder="Enter a password" />
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
          />
        </CSSTransition>
      </div>
      <div className={styles.AuthForm__Action}>
        <Button anime>Submit</Button>
      </div>
      <div className={styles.AuthForm__Toggle}>
        <Button onClick={toggleHandler.bind(this, "log")} inverse={!isLogin}>
          Login
        </Button>
        <Button inverse={isLogin} onClick={toggleHandler.bind(this, "sign")}>
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
