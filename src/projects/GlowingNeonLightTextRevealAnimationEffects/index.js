import styles from "./styles.module.scss";

export default function GlowingNeonLightTextRevealAnimationEffects() {
  return (
    <div className={styles.projectWrapper}>
      <div className={styles.box}>
        <div className={styles.lightbar}></div>
        <div className={styles.topLayer}></div>
        <h2>Neon Text</h2>
      </div>
    </div>
  );
}
