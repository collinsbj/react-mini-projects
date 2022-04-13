import styles from "./styles.module.scss";

const images = [
  "https://seamlesshr.com/wp-content/uploads/2020/11/2.png",
  "https://seamlesshr.com/wp-content/uploads/2020/11/1.png",
];
const bubbles = [
  {
    icon: "https://seamlesshr.com/wp-content/uploads/2020/10/finger-print.svg",
    text: "HR Information System",
  },
  {
    icon: "https://seamlesshr.com/wp-content/uploads/2020/10/coconut.svg",
    text: "Leaves & Holidays",
  },
  {
    icon: "https://seamlesshr.com/wp-content/uploads/2020/10/logout.svg",
    text: "Exit & Off-boarding",
  },
  {
    icon: "https://seamlesshr.com/wp-content/uploads/2020/10/plane-1.svg",
    text: "Travel & Requisitions",
  },
  {
    icon: "https://seamlesshr.com/wp-content/uploads/2020/10/law.svg",
    text: "Disciplinary",
  },
  {
    icon: "https://seamlesshr.com/wp-content/uploads/2020/10/analytics.svg",
    text: "Analytics & Reporting",
  },
  {
    icon: "https://seamlesshr.com/wp-content/uploads/2020/10/calendar.svg",
    text: "Time & Attendance",
  },
  {
    icon: "https://seamlesshr.com/wp-content/uploads/2020/10/person.svg",
    text: "Onboarding",
  },
];

export default function ResponsiveWebsiteDesign() {
  return (
    <div className={styles.projectWrapper}>
      <div className={styles.sol}>
        {images.map((image) => (
          <img key={image} src={image} alt="" />
        ))}
      </div>

      <div className={styles.planets}>
        {bubbles.map(({ icon, text }) => (
          <div key={icon} className={styles.bubble}>
            <img src={icon} alt="" />
            <div>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
