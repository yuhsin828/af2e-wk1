import styles from "./placeItem.module.css";

export default function PlaceItem({ place }) {
    return (
        <div className={styles.image}>
            <a href="" className={styles.imageLink}>
                <img src={place.src} alt="" className={styles.imageStyle} />
            </a>
            <p className={styles.imageTitle}>{place.title}</p>
        </div>
    );
}