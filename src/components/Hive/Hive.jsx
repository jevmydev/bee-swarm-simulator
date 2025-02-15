import { useRef } from "react";
import { useHive } from "../../hooks/useHive";

import HiveBees from "./HiveBees";
import HiveBuilder from "./HiveBuilder";
import HiveCapture from "./HiveCapture";

export function Hive() {
    const { bees, beeClassification, hiveNivel, isGiftedHive, updateBeeClassification, updateHiveNivel, updateGiftedHive } = useHive();
    const hiveRef = useRef(null);

    return (
        <section>
            <div className="max-w-screen-lg mx-auto px-4 pt-8">
                <div className="flex flex-col gap-8">
                    <div>
                        <h2 className="font-title tracking-wider text-4xl md:text-5xl">Hive builder</h2>
                    </div>
                    <div className="flex flex-col gap-8">
                        <HiveBees
                            bees={bees}
                            beeClassification={beeClassification}
                            updateBeeClassification={updateBeeClassification}
                            hiveNivel={hiveNivel}
                            updateHiveNivel={updateHiveNivel}
                            isGiftedHive={isGiftedHive}
                            updateGiftedHive={updateGiftedHive}
                        />
                        <HiveBuilder hiveRef={hiveRef} hiveNivel={hiveNivel} isGiftedHive={isGiftedHive} />
                        <hr></hr>
                        <HiveCapture hiveRef={hiveRef} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hive;
