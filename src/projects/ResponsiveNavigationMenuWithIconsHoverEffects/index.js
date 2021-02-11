import styles from "./styles.module.scss";

export default function ResponsiveNavigationMenuWithIconsHoverEffects() {
  return (
    <div className={styles.projectWrapper}>
      <ul>
        <li>
          <a href="/">
            <div className={styles.icon}>
              <i className="fa fa-home" aria-hidden="true"></i>
              <i className="fa fa-home" aria-hidden="true"></i>
            </div>
            <div className={styles.name}>
              <span data-text="Home">Home</span>
            </div>
          </a>
        </li>
        <li>
          <a href="/">
            <div className={styles.icon}>
              <i className="fa fa-file-text-o" aria-hidden="true"></i>
              <i className="fa fa-file-text-o" aria-hidden="true"></i>
            </div>
            <div className={styles.name}>
              <span data-text="About">About</span>
            </div>
          </a>
        </li>
        <li>
          <a href="/">
            <div className={styles.icon}>
              <i className="fa fa-cogs" aria-hidden="true"></i>
              <i className="fa fa-cogs" aria-hidden="true"></i>
            </div>
            <div className={styles.name}>
              <span data-text="Services">Services</span>
            </div>
          </a>
        </li>
        <li>
          <a href="/">
            <div className={styles.icon}>
              <i className="fa fa-picture-o" aria-hidden="true"></i>
              <i className="fa fa-picture-o" aria-hidden="true"></i>
            </div>
            <div className={styles.name}>
              <span data-text="Portfolio">Portfolio</span>
            </div>
          </a>
        </li>
        <li>
          <a href="/">
            <div className={styles.icon}>
              <i className="fa fa-users" aria-hidden="true"></i>
              <i className="fa fa-users" aria-hidden="true"></i>
            </div>
            <div className={styles.name}>
              <span data-text="Team">Team</span>
            </div>
          </a>
        </li>
        <li>
          <a href="/">
            <div className={styles.icon}>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </div>
            <div className={styles.name}>
              <span data-text="Contact">Contact</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
