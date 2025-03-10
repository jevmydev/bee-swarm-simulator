import Header from "../components/Header/Header";
import News from "../components/News/News";
import Footer from "../components/Footer/Footer";

export function NewsPage() {
    return (
        <>
            <Header />
            <main>
                <News />
            </main>
            <Footer />
        </>
    );
}

export default NewsPage;
