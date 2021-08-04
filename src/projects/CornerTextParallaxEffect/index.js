import { useEffect } from "react";
import styles from "./styles.module.scss";

export default function CornerTextParallaxEffect() {
  useEffect(() => {
    const parallaxText = (e) => {
      document.querySelectorAll(".layer").forEach((layer) => {
        let x = (window.innerWidth - e.pageX * 2) / 2;
        layer.style.transform = `translateX(${x}px)`;
      });
    };

    document.addEventListener("mousemove", parallaxText);

    return document.removeEventListener("mousemove", parallaxText, true);
  }, []);

  return (
    <div className={styles.projectWrapper}>
      <section>
        <div className={styles.skew1}>
          <h2 className="layer">Corner Text</h2>
        </div>
        <div className={styles.textBox}>
          <div className={styles.skew2}>
            <h2 className="layer">Corner Text</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
