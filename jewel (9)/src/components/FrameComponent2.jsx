import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.creator}>
        <h1 className={styles.diamondRing}>Diamond ring</h1>
        <div className={styles.ownerInfo}>
          <img
            className={styles.profilePictureIcon}
            loading="lazy"
            alt=""
            src="/ellipse-11@2x.png"
          />
          <div className={styles.ownerNameContainer}>
            <div className={styles.milindaPeterson}>Milinda Peterson</div>
          </div>
        </div>
      </div>
      <button className={styles.pushToBidWrapper} data-scroll-to="frameButton">
        <div className={styles.pushToBid}>push to bid</div>
      </button>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
