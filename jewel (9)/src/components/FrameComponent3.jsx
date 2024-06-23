import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.icons8Search1Parent, className].join(" ")}>
      <img
        className={styles.icons8Search1}
        loading="lazy"
        alt=""
        src="/icons8search-1.svg"
      />
      <img
        className={styles.icons8Instagram1}
        loading="lazy"
        alt=""
        src="/icons8instagram-1.svg"
      />
      <img
        className={styles.icons8FacebookCircled1}
        loading="lazy"
        alt=""
        src="/icons8facebookcircled-1.svg"
      />
      <img
        className={styles.icons8ShoppingCart241}
        loading="lazy"
        alt=""
        src="/icons8shoppingcart24-1@2x.png"
      />
      <div className={styles.navigationbar} />
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
