import styles from "./Home.module.css";
import HomeTopImage from "../../components/Home/HomeTopImage/HomeTopImage";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <HomeTopImage />
      </div>
    </div>
  );
}
