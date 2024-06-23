import FrameComponent from "./FrameComponent";
import Bidders from "./Bidders";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={[styles.auctionDetails, className].join(" ")}>
      <div className={styles.progressBars}>
        <div className={styles.progressBar} />
        <img
          className={styles.progressBarsChild}
          loading="lazy"
          alt=""
          src="/group-5.svg"
        />
      </div>
      <FrameComponent />
      <div className={styles.bidArea} />
      <Bidders />
      <div className={styles.bidButton}>
        <div className={styles.bidderList}>
          <div className={styles.frameParent}>
            <div className={styles.bidderPictureParent}>
              <img
                className={styles.bidderPictureIcon}
                loading="lazy"
                alt=""
                src="/ellipse-1-1@2x.png"
              />
              <div className={styles.ronaldRichardsParent}>
                <div className={styles.ronaldRichards}>Ronald Richards</div>
                <div className={styles.s}>20s</div>
              </div>
            </div>
            <div className={styles.emptyBidder}>%5</div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                alt=""
                src="/ellipse-1-2@2x.png"
              />
              <div className={styles.cameronWilliamsonParent}>
                <div className={styles.cameronWilliamson}>
                  Cameron Williamson
                </div>
                <div className={styles.m}>1m</div>
              </div>
            </div>
            <div className={styles.div}>%15</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.ellipseGroup}>
              <img
                className={styles.frameItem}
                alt=""
                src="/ellipse-1-3@2x.png"
              />
              <div className={styles.guyHawkinsParent}>
                <div className={styles.guyHawkins}>Guy Hawkins</div>
                <div className={styles.m1}>5m</div>
              </div>
            </div>
            <div className={styles.div1}>%30</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.ellipseContainer}>
              <img
                className={styles.frameInner}
                alt=""
                src="/ellipse-1-4@2x.png"
              />
              <div className={styles.darrellStewardParent}>
                <div className={styles.darrellSteward}>Darrell Steward</div>
                <div className={styles.m2}>7m</div>
              </div>
            </div>
            <div className={styles.div2}>%10</div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.ellipseParent1}>
              <img
                className={styles.ellipseIcon}
                alt=""
                src="/ellipse-1-5@2x.png"
              />
              <div className={styles.wadeWarrenParent}>
                <div className={styles.wadeWarren}>Wade Warren</div>
                <div className={styles.m3}>10m</div>
              </div>
            </div>
            <div className={styles.div3}>%10</div>
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
