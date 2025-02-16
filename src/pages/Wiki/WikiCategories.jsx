import Header from "../../components/Header/Header";
import WikiCategory from "../../components/Wiki/WikiCategory";
import Footer from "../../components/Footer/Footer";

export function WikiCategories() {
    return (
        <>
            <Header />
            <main>
                <WikiCategory />
            </main>
            <Footer />
        </>
    );
}

export default WikiCategories;
