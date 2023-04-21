import Header from "../components/Header"
import PlaceList from "../components/PlaceList"
import Description from "../components/Description"
import Footer from "../components/Footer"
// import places from "../json/places.json";
import { usePlaces } from '../react-query';

function Home() {
    const { data, isLoading } = usePlaces();
    const places = data || [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

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