import Header from "../components/Header/Header";
import Map from "../components/Map/Map";
import Footer from "../components/Footer/footer";

export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Map />
            </main>
            <Footer />
        </>
    );
}

export default HomePage;
