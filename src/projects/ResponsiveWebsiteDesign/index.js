import clsx from "clsx";
import styles from "./styles.module.scss";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";

export default function ResponsiveWebsiteDesign() {
  return (
    <div className={styles.projectWrapper}>
      <section className={styles.banner}>
        <div className={clsx(styles.box, styles.content)}>
          <header>
            <a href="/" className={styles.logo}>
              Hmmm.
            </a>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </header>

          <div className={styles.contentBox}>
            <h2>Creative</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              maximus dui eu erat malesuada venenatis. Vestibulum hendrerit
              vitae nisi sodales dapibus. Etiam rhoncus sem eget quam facilisis.
            </p>
            <a href="/" className={styles.btn}>
              Read More
            </a>
          </div>

          <ul className={styles.sci}>
            <h3>Follow us on</h3>
            <li>
              <a href="/">
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className={clsx(styles.box, styles.images)}>
          <div className={styles.imgBx}>
            <img src={img1} alt="img1" />
          </div>
          <div className={styles.imgBx}>
            <img src={img2} alt="img2" />
          </div>
          <div className={styles.imgBx}>
            <img src={img3} alt="img3" />
          </div>
        </div>
      </section>
    </div>
  );
}
