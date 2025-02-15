import Link from "../../elements/Link";

export function WikiClassification({ categories, entryPropName }) {
    return (
        <>
            {categories.map((category) => {
                const entry = category[entryPropName];
                const classification = category?.classification;

                return (
                    <article className="flex flex-col gap-4" key={classification}>
                        <header>
                            <h2 className="font-title tracking-wider text-4xl">{classification}</h2>
                        </header>
                        <section>
                            <ul className="flex flex-col md:grid md:grid-cols-2 gap-4">
                                {entry.map(({ id, name, href, imageUrl }) => (
                                    <li key={id}>
                                        <Link title={name} href={href} isActive>
                                            <div className="flex gap-4 justify-between items-center w-full h-full">
                                                <div>
                                                    <h3 className="tracking-wider text-4xl">{name}</h3>
                                                </div>
                                                <div>{imageUrl && <img className="max-w-32 max-h-24 w-full h-full object-contain" src={imageUrl} alt={name} loading="lazy" decoding="async" />}</div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </article>
                );
            })}
        </>
    );
}

export default WikiClassification;
