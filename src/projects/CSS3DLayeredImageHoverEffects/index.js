import styles from "./styles.module.scss";

export default function CSS3DLayeredImageHoverEffects() {
  const images = [
    "https://images.unsplash.com/photo-1617167797878-61e64b2694c7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1503093928907-326ec3f06115?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    "https://images.unsplash.com/photo-1611937743987-b234d9b259ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80",
  ];

  return (
    <div className={styles.projectWrapper}>
      {images.map((image) => (
        <div className={styles.imgBox} key={image}>
          <img src={image} alt="img" style={{ "--i": 2, "--j": 0 }}></img>
          <img src={image} alt="img" style={{ "--i": 1, "--j": 1 }}></img>
          <img src={image} alt="img" style={{ "--i": 0, "--j": 2 }}></img>
          <img src={image} alt="img" style={{ "--i": -1, "--j": 3 }}></img>
          <img src={image} alt="img" style={{ "--i": -2, "--j": 4 }}></img>
        </div>
      ))}
    </div>
  );
}
