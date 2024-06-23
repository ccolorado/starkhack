import PropTypes from "prop-types";
import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = ({ className = "" }) => {
  return (
    <div className={[styles.welcomeMessage, className].join(" ")}>
      <div className={styles.welcomeBackMessage}>
        <div className={styles.welcomeBackWe}>welcome back we missed you</div>
      </div>
      <div className={styles.welcomeBackTitle}>
        <div className={styles.welcomeBack}>Welcome Back!</div>
      </div>
      <div className={styles.usernameForm}>
        <div className={styles.usernameLabelContainer}>
          <div className={styles.username}>Username</div>
        </div>
        <div className={styles.usernameInputContainer}>
          <div className={styles.username1}>
            <img className={styles.cardIcon} alt="" src="/card@2x.png" />
            <div className={styles.inputIconContainer}>
              <img
                className={styles.inputIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className={styles.username2}>Username</div>
          </div>
        </div>
        <div className={styles.signinOptions}>
          <div className={styles.googleSigninContainer}>
            <button className={styles.signinButton}>
              <div className={styles.signinButtonChild} />
              <div className={styles.continueWithGoogle}>
                Continue with Google
              </div>
            </button>
          </div>
          <div className={styles.separatorContainer}>
            <div className={styles.or}>OR</div>
          </div>
          <button className={styles.signinButton1}>
            <div className={styles.signinButtonItem} />
            <div className={styles.continueWithA}>Continue with a wallet</div>
          </button>
        </div>
      </div>
    </div>
  );
};

WelcomeMessage.propTypes = {
  className: PropTypes.string,
};

export default WelcomeMessage;
