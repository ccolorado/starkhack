import { useCallback } from "react";
import HeroContent from "../components/HeroContent";
import FrameComponent2 from "../components/FrameComponent2";
import Footer from "../components/Footer";
import styles from "./Auction1.module.css";

const Auction1 = () => {
  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameButton']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.auction}>
      <section className={styles.page}>
        <HeroContent />
        <FrameComponent2 />
      </section>
      <div className={styles.button} onClick={onButtonClick} />
      <Footer />
    </div>
  );
};

export default Auction1;
