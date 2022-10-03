import img1 from "../../../images/yummyBaking.jpg";
import styles from "./HomeTopImage.module.css"

export default function HomeTopImage() {
    return (
        <div>
        <img src={img1} alt='' className={styles.topImage}/>
        <div className={styles.image1Overlay}>Welcome people {'&'} pets!</div>
        </div>
    )
}