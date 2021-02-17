import styles from "./styles.module.scss";
import { createRef, useEffect } from "react";
import anime from "animejs";

export default function AnimeJSBackgroundAnimationEffects() {
  const animationRef = createRef(null);
  const blockRef = createRef();

  const blocks = [];
  for (let index = 0; index < 100; index++) {
    blocks.push(<div ref={blockRef} className={styles.block}></div>);
  }

  function animateBlocks() {
    animationRef.current = anime({
      targets: "[class*='block']",
      translateX: function () {
        return anime.random(-700, 700);
      },
      translateY: function () {
        return anime.random(-500, 500);
      },
      scale: function () {
        return anime.random(1, 5);
      },
      easing: "linear",
      duration: 3000,
      delay: anime.stagger(10),
      complete: animateBlocks,
    });
  }

  useEffect(() => {
    animateBlocks();
  });

  return (
    <div className={styles.projectWrapper}>
      <div className={styles.container}>
        <h2>AnimeJS</h2>
        {blocks}
      </div>
    </div>
  );
}
