import PropTypes from "prop-types";
import styles from "./Bidders.module.css";

const Bidders = ({ className = "" }) => {
  return (
    <div className={[styles.bidders, className].join(" ")}>
      <b className={styles.liveAuction}>Live Auction</b>
    </div>
  );
};

Bidders.propTypes = {
  className: PropTypes.string,
};

export default Bidders;
