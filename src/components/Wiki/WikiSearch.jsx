export function WikiSearch({ entry }) {
    const { name, description, imageUrl } = entry;

    return (
        <article className="flex flex-col gap-8">
            <header>
                <h2 className="font-title tracking-wider text-5xl lg:text-8xl">{name}</h2>
            </header>
            <section>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                    <p className="font-body text-3xl max-w-3xl">{description}</p>
                    {imageUrl && <img className="max-w-64 w-full h-full object-contain" src={imageUrl} alt={name} loading="lazy" decoding="async" />}
                </div>
            </section>
        </article>
    );
}

export default WikiSearch;
