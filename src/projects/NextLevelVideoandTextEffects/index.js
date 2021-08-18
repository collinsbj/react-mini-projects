import clsx from "clsx";
import { useState } from "react";
import styles from "./styles.module.scss";
import bg from "./assets/bg.mp4";

export default function NextLevelVideoandTextEffects() {
  const [dotActive, setDotActive] = useState(false);
  const [sectionActive, setSectionActive] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    left: 0,
    top: 0,
  });

  return (
    <div
      className={styles.projectWrapper}
      onMouseMove={(e) => {
        setMousePosition({ left: e.pageX, top: e.pageY });
      }}
    >
      <section
        className={clsx({ [styles.active]: sectionActive })}
        onClick={() => setSectionActive(!sectionActive)}
      >
        <video autoPlay muted loop>
          <source src={bg} type="video/mp4" />
        </video>
        <h2>Run</h2>
        <div
          className={clsx(styles.dot, { [styles.active]: dotActive })}
          onClick={() => setDotActive(!dotActive)}
          style={{ left: mousePosition.left, top: mousePosition.top }}
        ></div>
      </section>
    </div>
  );
}
