import Main from "../components/Main";
import WelcomeMessage from "../components/WelcomeMessage";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <Main />
      <div className={styles.welcomeMessageWrapper}>
        <WelcomeMessage />
      </div>
    </div>
  );
};

export default Login;
