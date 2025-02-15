import Header from "../components/Header/Header";
import News from "../components/News/News";
import Footer from "../components/Footer/footer";

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
