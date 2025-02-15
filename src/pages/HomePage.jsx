import Header from "../components/Header/Header";
import HiveAd from "../components/Hive/HiveAd";
import Topics from "../components/Topics/Topics";
import BlenderAd from "../components/Blender/BlenderAd";
import News from "../components/News/News";
import MapAd from "../components/Map/MapAd";
import BondAd from "../components/Bond/BondAd";
import Footer from "../components/Footer/Footer";

export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <HiveAd />
                <Topics />
                <BlenderAd />
                <News showAllNews={false} />
                <MapAd />
                <BondAd />
            </main>
            <Footer />
        </>
    );
}

export default HomePage;
