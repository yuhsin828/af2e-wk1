import PlaceItem from "../PlaceItem";
import styles from "./placeList.module.css"
import { Row, Col } from "antd";

export default function PlaceList({ places }) {
    return (
        <article className={styles.imageLayout}>
            <div className="container">
                <h1>IMAGES</h1>
                <hr className="divider--dark" />
                <Row gutter={[24, 24]}>
                    {places.map(place => (
                        <Col
                            key={place.id}
                            sm={{ span: 12 }}
                            lg={{ span: 6 }}
                        >
                            <PlaceItem place={place} />
                        </Col>
                    ))}
                </Row>
            </div>
        </article>
    );
}