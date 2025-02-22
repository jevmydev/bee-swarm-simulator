import Button from "../../elements/Button";

export function HiveBees({ bees, beeClassification, updateBeeClassification, hiveNivel, updateHiveNivel, isGiftedHive, updateGiftedHive }) {
    const { mobs } = beeClassification;

    const handleSubmit = (e) => e.preventDefault();

    const handleDragStart = (e) => {
        const { target } = e;
        const imageUrl = target.getAttribute("src");
        const name = target.getAttribute("alt");

        e.dataTransfer.setData("text/plain", JSON.stringify({ name, imageUrl }));
    };

    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-4 w-full">
                <ul className="flex flex-wrap gap-4 w-full">
                    {bees.map((bee) => {
                        const { classification } = bee;
                        const isFocus = classification === beeClassification.classification;

                        return (
                            <li className="w-full sm:w-auto" key={classification}>
                                <Button isFocus={isFocus} isFullScreen onClick={() => updateBeeClassification(bee)}>
                                    {classification}
                                </Button>
                            </li>
                        );
                    })}
                </ul>
                <ul className="flex flex-wrap gap-4">
                    {mobs.map(({ id, name, imageUrl }) => (
                        <li key={id}>
                            <div draggable={true} onDragStart={handleDragStart}>
                                <img className="w-20 object-cover" src={imageUrl} alt={name} loading="lazy" decoding="async" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <form className="flex gap-8 items-center" action="GET" onSubmit={handleSubmit}>
                    <label className="flex items-center gap-4">
                        Nivel Hive
                        <input
                            className="bg-light py-2 px-4 rounded-lg text-dark text-center font-semibold tracking-wider ring-2 ring-light transition-shadow duration-300 outline-none hover:ring-offset-2 hover:ring-offset-honey"
                            type="number"
                            min={1}
                            max={25}
                            value={hiveNivel}
                            onChange={updateHiveNivel}
                        />
                    </label>
                    <label className="flex items-center gap-4">
                        Gifted
                        <input type="checkbox" value={isGiftedHive} onChange={updateGiftedHive} />
                    </label>
                </form>
            </div>
        </div>
    );
}

export default HiveBees;
