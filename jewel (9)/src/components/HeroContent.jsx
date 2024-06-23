import { useCallback } from "react";
import FrameComponent3 from "./FrameComponent3";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./HeroContent.module.css";

const HeroContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className={[styles.heroContent, className].join(" ")}>
      <FrameComponent3 />
      <div className={styles.homeParent}>
        <a className={styles.home} onClick={onHomeTextClick}>
          <span>Home</span>
          <span className={styles.span}>{` `}</span>
        </a>
        <a className={styles.auction}>auction</a>
        <div className={styles.shopNavigation}>
          <a className={styles.shop}>
            <span>Shop</span>
            <span className={styles.span1}>{` `}</span>
          </a>
        </div>
        <div className={styles.logo}>
          <div className={styles.logoChild} />
          <img
            className={styles.circleLogo1}
            alt=""
            src="/circle-logo-1@2x.png"
          />
        </div>
        <img className={styles.frameChild} alt="" src="/group-19@2x.png" />
      </div>
    </div>
  );
};

HeroContent.propTypes = {
  className: PropTypes.string,
};

export default HeroContent;
