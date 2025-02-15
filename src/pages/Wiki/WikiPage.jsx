import Header from "../../components/Header/Header";
import Wiki from "../../components/Wiki/Wiki";
import Footer from "../../components/Footer/footer";

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
