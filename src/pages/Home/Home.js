import styles from "./Home.module.css";
import HomeTopImage from "../../components/Home/HomeTopImage/HomeTopImage";
import HomeFeatures from "../../components/Home/HomeFeatures/HomeFeatures";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <HomeTopImage />
        <HomeFeatures />
      </div>
      
    </div>
  );
}
