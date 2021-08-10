import styles from "./styles.module.scss";
import codepng from "./assets/code.png";
import desingpng from "./assets/design.png";
import earnpng from "./assets/earn.png";
import launchpng from "./assets/launch.png";

export default function ResponsiveFullscreenCurtainLayerMenu() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imgBx}>
            <img alt="design" src={desingpng}></img>
          </div>
          <div className={styles.content}>
            <div>
              <h3>Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                architecto ad animi sequi, aspernatur enim.
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.imgBx}>
            <img alt="code" src={codepng}></img>
          </div>
          <div className={styles.content}>
            <div>
              <h3>Code</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                architecto ad animi sequi, aspernatur enim.
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.imgBx}>
            <img alt="launch" src={launchpng}></img>
          </div>
          <div className={styles.content}>
            <div>
              <h3>Launch</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                architecto ad animi sequi, aspernatur enim.
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.imgBx}>
            <img alt="earn" src={earnpng}></img>
          </div>
          <div className={styles.content}>
            <div>
              <h3>Earn</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                architecto ad animi sequi, aspernatur enim.
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
