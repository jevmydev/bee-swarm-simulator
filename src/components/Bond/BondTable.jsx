export function BondTable({ costRequired }) {
    return (
        <table className="table-auto text-center h-max w-full">
            <thead>
                <tr>
                    <th className="pb-4 tracking-wider">
                        <span className="hidden sm:block">Level</span>
                        <span className="block sm:hidden">Lvl</span>
                    </th>
                    <th className="pb-4 tracking-wider">
                        <div className="flex gap-2 justify-center items-center">
                            <img className="w-5 h-5 hidden sm:block" src="/assets/images/items/resources/bond.webp" alt="Bond" loading="lazy" decoding="async" />
                            <span className="hidden sm:block">Bond requerido</span>
                            <span className="block sm:hidden">Bond req.</span>
                        </div>
                    </th>
                    <th className="pb-4 tracking-wider">
                        <div className="flex gap-2 justify-center items-center">
                            <img className="w-5 h-5 hidden sm:block" src="/assets/images/items/resources/treat.webp" alt="Treat" loading="lazy" decoding="async" />
                            <span className="hidden sm:block">Treats requerido</span>
                            <span className="block sm:hidden">Treats req.</span>
                        </div>
                    </th>
                    <th className="pb-4 tracking-wider flex gap-2 justify-center items-center">
                        <div className="flex gap-2 justify-center items-center">
                            <img className="w-5 h-5 hidden sm:block" src="/assets/images/items/resources/honey.webp" alt="Honey" loading="lazy" decoding="async" />
                            <span className="hidden sm:block">Honey requerido</span>
                            <span className="block sm:hidden">Honey req.</span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody className="w-full">
                {costRequired.map(({ id, level, bondRequired, treatsRequired, honeyRequired }) => (
                    <tr className="border-y" key={id}>
                        <td className="p-1">{level}</td>
                        <td className="p-1">{bondRequired}</td>
                        <td className="p-1">{treatsRequired}</td>
                        <td className="p-1">{honeyRequired}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BondTable;
