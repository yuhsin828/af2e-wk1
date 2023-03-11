import Header from "../components/Header"
import PlaceList from "../components/PlaceList"
import Description from "../components/Description"
import Footer from "../components/Footer"
import places from "../json/places.json";

function Home() {
    return (
        <div className=" mainLayout">
            <Header
                className="layoutHeader"
                title="yuhsin"
                slogan="Hello World"
            />
            <PlaceList places={places} className="layoutContent" />
            <Description />
            <Footer className="layoutFooter" />
        </div>
    );
}

export default Home;