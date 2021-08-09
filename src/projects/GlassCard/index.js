import styles from "./styles.module.scss";

export default function GlassCard() {
  return (
    <div className={styles.projectWrapper}>
      <div className={styles.card}>
        <span style={{ "--i": 0 }}></span>
        <span style={{ "--i": 1 }}></span>
        <span style={{ "--i": 2 }}></span>
        <span style={{ "--i": 3 }}></span>
        <div className={styles.glass}>
          <h2>
            BJ Collins <br />
            <i>(123) 456-7890</i>
          </h2>
        </div>
      </div>
    </div>
  );
}
