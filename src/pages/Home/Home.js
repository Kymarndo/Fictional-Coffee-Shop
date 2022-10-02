import styles from "./Home.module.css";
import img1 from "../../images/yummyBaking.jpg"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.image1Container}>
        <img src={img1} alt='' className={styles.topImage}/>
        <div className={styles.image1Overlay}>Welcome people {'&'} pets!</div>
        </div>
      </div>
    </div>
  );
}
