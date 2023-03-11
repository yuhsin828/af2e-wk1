import PlaceItem from "./PlaceItem"
import places from "../json/places.json";

export default function PlaceList() {
    return (
        <article className="image__layout py-3 py-sm-5">
            <div className="container">
                <h1 className="text-center">IMAGES</h1>
                <hr className="divider--dark" />
                <div className="row">
                    {places.map(place => (
                        <PlaceItem key={place.id} place={place} />
                    ))}
                </div>
            </div>
        </article>
    );
}