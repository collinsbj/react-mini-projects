import { useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

export default function CurtainLayerMenuResponsiveFullscreenOverlayNavigationMenu() {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.projectWrapper}>
      <section className={styles.section}>
        <h2 className={styles.h2}>Curtain Layer Menu</h2>
      </section>
      <div
        role="button"
        aria-hidden="true"
        onClick={toggle}
        className={clsx(styles.toggle, isActive && styles.active)}
      ></div>
      <section
        className={clsx(
          styles.section,
          styles.navigation,
          isActive && styles.active
        )}
      >
        <span className={styles.span} style={{ "--i": 0 }}></span>
        <span className={styles.span} style={{ "--i": 1 }}></span>
        <span className={styles.span} style={{ "--i": 2 }}></span>
        <span className={styles.span} style={{ "--i": 3 }}></span>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a className={styles.a} href="/">
              Home
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="/">
              About
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="/">
              Portfolio
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="/">
              Team
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="/">
              Contact
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
