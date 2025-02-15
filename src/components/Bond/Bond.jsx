import { useBond } from "../../hooks/useBond";

import BondConfig from "./BondConfig";
import BondTable from "./BondTable";

export function Bond() {
    const { costRequired, bondConfig, handleTreatsInventory, handleBondFromTreats, handleNumberBees } = useBond();

    return (
        <section>
            <div className="max-w-screen-lg mx-auto px-4 pt-8 flex flex-col gap-8">
                <h2 className="font-title tracking-wider text-4xl md:text-5xl">Bond Calculator</h2>
                <div className="flex flex-col gap-12">
                    <BondConfig handleTreatsInventory={handleTreatsInventory} handleBondFromTreats={handleBondFromTreats} handleNumberBees={handleNumberBees} bondConfig={bondConfig} />
                    {costRequired && <BondTable costRequired={costRequired} />}
                </div>
            </div>
        </section>
    );
}

export default Bond;
