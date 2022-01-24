import styles from "./styles.module.scss";

export default function SpinnyLayers() {
  return (
    <div className={styles.projectWrapper}>
      <div className={styles.outerWordsWrapper} style={{ "--i": 5, "--j": 0 }}>
        <div className={styles.middleWordsWrapper}>
          <div className={styles.innerWordsWrapper}>
            <div className={styles.word}>Elec</div>
            <div className={styles.word}>tronic</div>
            <div className={styles.word}>Daily</div>
          </div>
        </div>
      </div>

      <div className={styles.outerWordsWrapper} style={{ "--i": 4, "--j": 1 }}>
        <div className={styles.middleWordsWrapper}>
          <div className={styles.innerWordsWrapper}>
            <div className={styles.word}>Elec</div>
            <div className={styles.word}>tronic</div>
            <div className={styles.word}>Daily</div>
          </div>
        </div>
      </div>

      <div className={styles.outerWordsWrapper} style={{ "--i": 3, "--j": 2 }}>
        <div className={styles.middleWordsWrapper}>
          <div className={styles.innerWordsWrapper}>
            <div className={styles.word}>Elec</div>
            <div className={styles.word}>tronic</div>
            <div className={styles.word}>Daily</div>
          </div>
        </div>
      </div>

      <div className={styles.outerWordsWrapper} style={{ "--i": 2, "--j": 3 }}>
        <div className={styles.middleWordsWrapper}>
          <div className={styles.innerWordsWrapper}>
            <div className={styles.word}>Elec</div>
            <div className={styles.word}>tronic</div>
            <div className={styles.word}>Daily</div>
          </div>
        </div>
      </div>

      <div className={styles.outerWordsWrapper} style={{ "--i": 1, "--j": 4 }}>
        <div className={styles.middleWordsWrapper}>
          <div className={styles.innerWordsWrapper}>
            <div className={styles.word}>Elec</div>
            <div className={styles.word}>tronic</div>
            <div className={styles.word}>Daily</div>
          </div>
        </div>
      </div>

      <div className={styles.outerWordsWrapper} style={{ "--i": 0, "--j": 5 }}>
        <div className={styles.middleWordsWrapper}>
          <div className={styles.innerWordsWrapper}>
            <div className={styles.word}>Elec</div>
            <div className={styles.word}>tronic</div>
            <div className={styles.word}>Daily</div>
          </div>
        </div>
      </div>
    </div>
  );
}
