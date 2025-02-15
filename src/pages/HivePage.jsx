import Header from "../components/Header/Header";
import Hive from "../components/Hive/Hive";
import Footer from "../components/Footer/Footer";

export function HivePage() {
    return (
        <>
            <Header />
            <main>
                <Hive />
            </main>
            <Footer />
        </>
    );
}

export default HivePage;
