import { useBlender } from "../../hooks/useBlender";

import BlenderItem from "./BlenderItem";
import BlenderAmount from "./BlenderAmount";

export function Blender() {
    const { blenderItem, amount, index, handleChangeAmount, handleNextItem, handlePreviousItem } = useBlender();

    return (
        <section>
            <div className="max-w-screen-lg mx-auto px-4 pt-8 flex flex-col gap-8">
                <div>
                    <h2 className="font-title tracking-wider text-4xl md:text-5xl">Blender</h2>
                </div>
                <div className="max-w-4xl w-full text-light">
                    <BlenderItem blenderItem={blenderItem} amount={amount} index={index} />
                    <BlenderAmount amount={amount} handleChangeAmount={handleChangeAmount} handleNextItem={handleNextItem} handlePreviousItem={handlePreviousItem} />
                </div>
            </div>
        </section>
    );
}

export default Blender;
