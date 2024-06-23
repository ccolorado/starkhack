import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Main.module.css";

const Main = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onAuctionTextClick = useCallback(() => {
    navigate("/auction");
  }, [navigate]);

  return (
    <header className={[styles.main, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.body}>
          <a className={styles.home} onClick={onHomeTextClick}>
            <span>Home</span>
            <span className={styles.span}>{` `}</span>
          </a>
          <div className={styles.auctionShop}>
            <a className={styles.auction} onClick={onAuctionTextClick}>
              auction
            </a>
            <div className={styles.auctionImage}>
              <img
                className={styles.auctionGraphicIcon}
                alt=""
                src="/auction-graphic.svg"
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
                src="/mask-group@2x.png"
              />
              <img
                className={styles.auctionImageChild}
                loading="lazy"
                alt=""
                src="/rectangle-3.svg"
              />
              <img
                className={styles.auctionImageItem}
                loading="lazy"
                alt=""
                src="/rectangle-4.svg"
              />
            </div>
          </div>
          <div className={styles.shopWrapper}>
            <a className={styles.shop}>
              <span>Shop</span>
              <span className={styles.span1}>{` `}</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.navigationbar} />
      <div className={styles.iconsBar}>
        <img
          className={styles.icons8Search1}
          loading="lazy"
          alt=""
          src="/icons8search-1.svg"
        />
        <div className={styles.facebookIconContainer}>
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

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
