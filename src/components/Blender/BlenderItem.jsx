export function BlenderItem({ blenderItem, amount, index }) {
    const { title, imageUrl, ingredients } = blenderItem;
    const { currentIndex, totalItems } = index;

    return (
        <article className="flex flex-col sm:flex-row gap-16 p-8 bg-blue-900 w-full rounded-lg rounded-bl-none rounded-br-none">
            <aside className="flex flex-col justify-center items-start">
                <span>x{amount}</span>
                <img className="max-w-40" src={imageUrl} alt={title} />
            </aside>
            <section className="flex flex-col gap-8 justify-between w-full">
                <header className="flex justify-between items-center w-full">
                    <h2 className="font-title tracking-wider text-4xl">{title}</h2>
                    <span>
                        {currentIndex + 1}/{totalItems}
                    </span>
                </header>
                <div className="flex flex-col gap-2">
                    <span>Ingredientes:</span>
                    <ul className="flex flex-wrap gap-4">
                        {ingredients.map(({ id, title, imageUrl, amount: defaultAmount }) => {
                            const totalAmount = defaultAmount * amount;

                            return (
                                <li key={id}>
                                    <span>x{totalAmount}</span>
                                    <img className="max-w-20" src={imageUrl} alt={title} loading="lazy" decoding="async" />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        </article>
    );
}

export default BlenderItem;
