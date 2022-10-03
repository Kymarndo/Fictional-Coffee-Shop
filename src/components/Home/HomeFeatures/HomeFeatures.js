import Cards from "./HomeFeaturesCard"
import { featuredData } from "./HomeFeaturesData"
import styles from "./HomeFeatures.module.css"


export default function HomeFeatures() {
  return (
    <div className={styles.container}>
      {featuredData.map((section) => {
        return <Cards section={section} />;
      })}

      </div>
    )
}