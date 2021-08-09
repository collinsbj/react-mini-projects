import clsx from "clsx";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function NavigationMenuCurveOutsideinActiveTab() {
  const [selected, setSelected] = useState("Home");

  const items = [
    { text: "Home", icon: "home-outline" },
    { text: "Profile", icon: "person-outline" },
    { text: "Messages", icon: "chatbubbles-outline" },
    { text: "Settings", icon: "settings-outline" },
    { text: "Help", icon: "help-outline" },
    { text: "Password", icon: "lock-closed-outline" },
    { text: "Sign Out", icon: "log-out-outline" },
  ];

  return (
    <div className={styles.projectWrapper}>
      <div className={styles.navigation}>
        <ul>
          {items.map(({ text, icon }) => (
            <li
              className={clsx(styles.list, {
                [styles.active]: selected === text,
              })}
              onClick={() => setSelected(text)}
              key={text}
            >
              <div className={styles.link}>
                <span className={styles.icon}>
                  <ion-icon name={icon}></ion-icon>
                </span>
                <span className={styles.title}>{text}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
