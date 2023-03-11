import Header from "../components/Header"
import PlaceList from "../components/PlaceList"
import Footer from "../components/Footer"

function Home() {
    return (
        <div className="container main-layout">
            <Header className="layout-header" title="yuhsin" slogan="Hello World" />
            <PlaceList className="layout-content" />
            <Footer className="layout-footer" />
        </div>
    );
}

export default Home;