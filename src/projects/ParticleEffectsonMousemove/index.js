import styles from "./styles.module.scss";
import bg from "./assets/bg.jpg";
import Particles from "react-particles-js";
import particleParams from "./assets/particles";

export default function ParticleEffectsonMousemove() {
  return (
    <div className={styles.projectWrapper}>
      <section>
        <img src={bg} alt="bg" className={styles.bg} />
        <Particles
          width="100%"
          height="100vh"
          className={styles.particles}
          params={particleParams}
        />
      </section>
    </div>
  );
}
