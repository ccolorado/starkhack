import { useCallback } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/auction");
  }, [navigate]);

  return (
    <div className={styles.homepage}>
      <div className={styles.homepageChild} />
      <FrameComponent4 />
      <div className={styles.homepageInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/vector-13.svg"
                />
                <div className={styles.logo}>
                  <div className={styles.logoChild} />
                  <img
                    className={styles.circleLogo1}
                    alt=""
                    src="/circle-logo-1@2x.png"
                  />
                </div>
                <img
                  className={styles.maskGroupIcon}
                  loading="lazy"
                  alt=""
                  src="/mask-group2@2x.png"
                />
              </div>
              <h1
                className={styles.buySafelyAnd}
              >{`Buy safely and securely `}</h1>
            </div>
          </div>
          <div className={styles.buttonsParent}>
            <div className={styles.buttons}>
              <div className={styles.buttonShapes} />
              <h2 className={styles.sellYourJewellery}>Sell your jewellery</h2>
            </div>
            <div className={styles.buttons1}>
              <div className={styles.buttonsChild} onClick={onRectangleClick} />
              <h2 className={styles.buyJewellery}>Buy jewellery</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
