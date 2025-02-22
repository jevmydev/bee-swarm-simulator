import { news } from "../../mocks/news/news";
import { useNews } from "../../hooks/useNews.js";

import Link from "../../elements/Link.jsx";

export function News({ showAllNews = true }) {
    const { selectedNew, formattedContent, updateSelectedNew } = useNews(news);
    const { id, date, title } = selectedNew;

    return (
        <section>
            <div className="max-w-screen-lg mx-auto px-4 pt-8">
                <article className="bg-honey-amber rounded-lg p-4 flex flex-col gap-8">
                    {showAllNews && (
                        <nav>
                            <h2 className="font-title tracking-wider text-3xl md:text-4xl">Fechas Actualizaciones</h2>
                            <ul className="flex flex-wrap gap-2">
                                {news.map(({ id, date }, i) => {
                                    return (
                                        <li key={id}>
                                            <button
                                                className={`whitespace-nowrap ${selectedNew.id === id ? "text-dark cursor-default" : "text-blue-700 underline"}`}
                                                data-index={i}
                                                onClick={updateSelectedNew}
                                            >
                                                {date}
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    )}
                    <header>
                        <h2 className="font-title tracking-wider text-3xl md:text-4xl">{title}</h2>
                        <h3>{date} (Novedad)</h3>
                    </header>
                    <section className="flex flex-col gap-2">
                        {formattedContent.map((paragraph, i) => (
                            <p className="max-w-4xl" key={`${id}P${i}`}>
                                {paragraph}
                            </p>
                        ))}
                    </section>
                    {!showAllNews && (
                        <footer>
                            <Link title="Ver más novedades" href="/news">
                                Ver más novedades
                            </Link>
                        </footer>
                    )}
                </article>
            </div>
        </section>
    );
}

export default News;
