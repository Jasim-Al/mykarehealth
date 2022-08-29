import AuthForm from "./Components/AuthForm";
import styles from "./Auth.module.css";

const Auth = () => {
  return (
    <div className={styles.Auth}>
      <AuthForm />
    </div>
  );
};

export default Auth;
