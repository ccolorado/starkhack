import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAuctionTextClick = useCallback(() => {
    navigate("/auction");
  }, [navigate]);

  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <nav className={styles.frameWrapper}>
        <nav className={styles.homeParent}>
          <a className={styles.home}>
            <span>Home</span>
            <span className={styles.span}>{` `}</span>
          </a>
          <a className={styles.auction} onClick={onAuctionTextClick}>
            auction
          </a>
          <div className={styles.shopWrapper}>
            <a className={styles.shop}>
              <span>Shop</span>
              <span className={styles.span1}>{` `}</span>
            </a>
          </div>
        </nav>
      </nav>
      <div className={styles.navigationbar} />
      <div className={styles.icons8Search1Parent}>
        <img
          className={styles.icons8Search1}
          loading="lazy"
          alt=""
          src="/icons8search-1.svg"
        />
        <div className={styles.icons8FacebookCircled1Wrapper}>
          <img
            className={styles.icons8FacebookCircled1}
            loading="lazy"
            alt=""
            src="/icons8facebookcircled-1.svg"
          />
        </div>
        <img
          className={styles.icons8Instagram1}
          loading="lazy"
          alt=""
          src="/icons8instagram-1.svg"
        />
        <img
          className={styles.icons8ShoppingCart241}
          loading="lazy"
          alt=""
          src="/icons8shoppingcart24-1@2x.png"
        />
      </div>
    </header>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
