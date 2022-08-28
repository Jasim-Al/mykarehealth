import AuthForm from "./Components/AuthForm";
import styles from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={styles.Auth}>
      <h1>From Auth</h1>
      <AuthForm />
    </div>
  );
};

export default Auth;
