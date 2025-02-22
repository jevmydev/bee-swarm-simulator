export function BondConfig({ handleTreatsInventory, handleBondFromTreats, handleNumberBees, bondConfig }) {
    const { treatsInventory, bondFromTreats, numberBees } = bondConfig;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="flex flex-col sm:flex-row gap-4 justify-between w-full" action="GET" onSubmit={handleSubmit}>
            <label className="flex flex-wrap items-center gap-4">
                <span className="max-w-[18.4rem]">Tus &quot;Bond from Treats&quot;: (encuéntralo en tus configuraciones)</span>
                <input
                    className="max-w-20 bg-light py-2 px-4 rounded-lg text-dark text-center font-semibold tracking-wider ring-2 ring-light transition-shadow duration-300 outline-none hover:ring-offset-2 hover:ring-offset-honey"
                    type="number"
                    value={bondFromTreats}
                    min={100}
                    onChange={handleBondFromTreats}
                />
            </label>
            <label className="flex flex-wrap items-center gap-4">
                <span>Treats en tu inventario:</span>
                <input
                    className="max-w-20 bg-light py-2 px-4 rounded-lg text-dark text-center font-semibold tracking-wider ring-2 ring-light transition-shadow duration-300 outline-none hover:ring-offset-2 hover:ring-offset-honey"
                    type="number"
                    value={treatsInventory}
                    min={0}
                    onChange={handleTreatsInventory}
                />
            </label>
            <label className="flex flex-wrap items-center gap-4">
                <span>N° Abejas:</span>
                <input
                    className="max-w-20 bg-light py-2 px-4 rounded-lg text-dark text-center font-semibold tracking-wider ring-2 ring-light transition-shadow duration-300 outline-none hover:ring-offset-2 hover:ring-offset-honey"
                    type="number"
                    value={numberBees}
                    min={1}
                    max={50}
                    onChange={handleNumberBees}
                />
            </label>
        </form>
    );
}

export default BondConfig;
