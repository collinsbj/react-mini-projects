import styles from "./styles.module.css";

export default function GlassmorphismPureCSSCircularProgressBar() {
  return (
    <div>
      <section>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.box}>
              <div>
                <div className={styles.percent}>
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className={styles.number}>
                    <h2>
                      90<span>%</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.text}>HTML</div>
          </div>

          <div className={styles.card}>
            <div className={styles.box}>
              <div>
                <div className={styles.percent}>
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className={styles.number}>
                    <h2>
                      82<span>%</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.text}>CSS</div>
          </div>

          <div className={styles.card}>
            <div className={styles.box}>
              <div>
                <div className={styles.percent}>
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className={styles.number}>
                    <h2>
                      64<span>%</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.text}>Javascript</div>
          </div>
        </div>
      </section>
    </div>
  );
}
