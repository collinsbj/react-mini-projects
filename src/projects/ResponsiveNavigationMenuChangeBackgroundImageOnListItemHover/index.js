import styles from "./styles.module.css";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import { useState } from "react";
import clsx from "clsx";

export default function ResponsiveNavigationMenuChangeBackgroundImageOnListItemHover() {
  const [navImage, setNavImage] = useState(img1);
  const [menuToggle, setMenuToggle] = useState(false);

  const changeImage = (image) => {
    setNavImage(image);
  };

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <>
      <div
        role="button"
        className={clsx(styles.menuToggle, menuToggle && styles.active)}
        onClick={toggleMenu}
        aria-hidden="true"
      ></div>
      <div className={clsx(styles.navigation, menuToggle && styles.active)}>
        <div className={styles.navArea}>
          <ul>
            <li>
              <a href="/" onMouseEnter={() => changeImage(img1)}>
                Home
              </a>
            </li>
            <li>
              <a href="/" onMouseEnter={() => changeImage(img2)}>
                About
              </a>
            </li>
            <li>
              <a href="/" onMouseEnter={() => changeImage(img3)}>
                Services
              </a>
            </li>
            <li>
              <a href="/" onMouseEnter={() => changeImage(img4)}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="/" onMouseEnter={() => changeImage(img5)}>
                Team
              </a>
            </li>
            <li>
              <a href="/" onMouseEnter={() => changeImage(img6)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.imgArea}>
          <img alt="img1" src={navImage} id="slider"></img>
        </div>
      </div>
    </>
  );
}
