import styles from "./styles.module.scss";
import bg from "./assets/bg.mp4";
import { useEffect } from "react";
import clsx from "clsx";

export default function SplitVideoOnPageScroll() {
  useEffect(() => {
    let side1 = document.getElementById("side1");
    let side2 = document.getElementById("side2");

    window.addEventListener("scroll", function () {
      side1.style.left = -window.pageYOffset + "px";
      side2.style.left = window.pageYOffset + "px";
    });
  }, []);

  return (
    <div className={styles.projectWrapper}>
      <section>
        <div className={clsx(styles.side, styles.side1)} id="side1">
          <video src={bg} type="video/mp4" autoPlay loop muted></video>
        </div>
        <div className={clsx(styles.side, styles.side2)} id="side2">
          <video src={bg} type="video/mp4" autoPlay loop muted></video>
        </div>
      </section>
      <div className={styles.content}>
        <h2>Split Video on Page Scroll</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget
          lorem est. Morbi felis diam, pretium quis neque sed, placerat porta
          est. Quisque neque dolor, elementum eget cursus vel, egestas ac sem.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          congue augue urna. Vivamus massa risus, malesuada sit amet pharetra
          ac, viverra eget justo. Morbi aliquam auctor augue, sed blandit erat
          egestas sed. Phasellus pharetra lacinia enim at faucibus. Integer
          dapibus, neque non ultricies porttitor, urna urna ullamcorper erat,
          vitae dictum velit velit eu velit. Integer viverra egestas ligula.
          Vestibulum at orci consequat, suscipit elit eget, semper mi. In
          vehicula nec lectus in tristique.
        </p>
      </div>
    </div>
  );
}
