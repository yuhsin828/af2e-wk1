export default function PlaceItem({ place }) {
    return (
        <div className="image mt-4 col-sm-6 col-lg-3">
            <a href="" className="image__link">
                <img src={place.src} alt="" className="image__style" />
            </a>
            <p className="image_title">{place.title}</p>
        </div>
    );
}