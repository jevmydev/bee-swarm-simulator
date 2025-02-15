import Header from "../../components/Header/Header";
import Wiki from "../../components/Wiki/Wiki";
import Footer from "../../components/Footer/Footer";

export function WikiPage() {
    return (
        <>
            <Header />
            <main>
                <Wiki />
            </main>
            <Footer />
        </>
    );
}

export default WikiPage;
