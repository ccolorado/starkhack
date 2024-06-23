import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <footer className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.liveStatus}>
        <div className={styles.percentageSold}>
          <b className={styles.purchasedPercentages}>Purchased percentages</b>
          <div className={styles.emptyPurchased}>%70</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.liveIndicatorsParent}>
            <img
              className={styles.liveIndicatorsIcon}
              alt=""
              src="/live-indicators@2x.png"
            />
            <img
              className={styles.liveIndicatorsIcon1}
              alt=""
              src="/ellipse-2-11@2x.png"
            />
            <img
              className={styles.liveIndicatorsIcon2}
              alt=""
              src="/ellipse-2-21@2x.png"
            />
            <img
              className={styles.liveIndicatorsIcon3}
              loading="lazy"
              alt=""
              src="/ellipse-2-31@2x.png"
            />
          </div>
          <div className={styles.remainingLabel}>
            <div className={styles.availableIndicatorParent}>
              <div className={styles.availableIndicator} />
              <div className={styles.emptyAvailable}>+24</div>
            </div>
          </div>
          <div className={styles.availableItems}>
            <div className={styles.areLive}>are live</div>
          </div>
        </div>
      </div>
      <div className={styles.progressSeparator} />
      <div className={styles.availability}>
        <div className={styles.availablePercentageLabelCon}>
          <div className={styles.availablePercentageParent}>
            <b className={styles.availablePercentage}>Available percentage</b>
            <div className={styles.emptyTime}>%20</div>
          </div>
        </div>
        <div className={styles.iontimeOutlineParent}>
          <img
            className={styles.iontimeOutlineIcon}
            loading="lazy"
            alt=""
            src="/iontimeoutline.svg"
          />
          <div className={styles.sRemaining}>01: 23s remaining</div>
        </div>
      </div>
    </footer>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
