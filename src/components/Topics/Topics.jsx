import { topics } from "../../mocks/links/topics";
import { TOPICS_GRID_GALLERY } from "../../constants/const";

import Link from "../../elements/Link";

export function Topics() {
    return (
        <section>
            <div className="max-w-screen-lg mx-auto px-4 pt-8">
                <ul className="flex flex-col lg:grid lg:grid-cols-3 gap-4">
                    {topics.map(({ id, title, href, imageUrl }, index) => {
                        const gridClass = TOPICS_GRID_GALLERY[index] || "";

                        return (
                            <li className={gridClass} key={id}>
                                <Link title={title} href={href} isActive>
                                    <div className="relative w-full h-full">
                                        <div className="opacity-20 -z-10 flex justify-center">
                                            <img className="w-full h-full object-contain max-w-60 lg:max-w-80 max-h-52" src={imageUrl} alt={title} loading="lazy" decoding="async" />
                                        </div>
                                        <div className="absolute flex justify-center items-center w-full h-full top-0 left-0">
                                            <h2 className="font-title tracking-wider text-5xl lg:text-6xl">{title}</h2>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Topics;
