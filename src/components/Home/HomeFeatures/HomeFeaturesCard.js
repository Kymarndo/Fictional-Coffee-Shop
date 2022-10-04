import styles from "./HomeFeatures.module.css"

export default function HomeFeaturesCard ({ section }) {
    return (
        <div className={ styles.card }>
                <img src={ section.image } className={ styles.image } alt="" />
                <div className={styles.text}>{section.text}</div>
                <button className={styles.button}>{section.button}</button>
        </div>
        )
}