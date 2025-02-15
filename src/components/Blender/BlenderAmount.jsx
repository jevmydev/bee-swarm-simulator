import { DEFAULT_AMOUNT_BLENDER } from "../../constants/const";
import { LeftArrowIcon, RightArrowIcon } from "../../elements/Icons";

export function BlenderAmount({ amount, handleChangeAmount, handleNextItem, handlePreviousItem }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="bg-blue-500 w-full overflow-hidden rounded-lg rounded-tl-none rounded-tr-none" onSubmit={handleSubmit}>
            <div className="flex justify-center gap-4 relative p-8">
                <button className="bg-blue-400 absolute top-0 left-0 h-full px-4 transition-colors duration-300 hover:bg-blue-300" title="Item anterior" onClick={handlePreviousItem}>
                    <LeftArrowIcon />
                </button>
                <div>
                    <input
                        className="max-w-24 sm:max-w-none bg-light py-2 px-4 rounded-lg text-dark text-center font-semibold tracking-wider ring-2 ring-light transition-shadow duration-300 outline-none focus:ring-offset-2 focus:ring-offset-honey"
                        type="number"
                        placeholder="Escoge una cantidad..."
                        min={DEFAULT_AMOUNT_BLENDER}
                        onChange={handleChangeAmount}
                        value={amount}
                    />
                </div>
                <button className="bg-blue-400 absolute top-0 right-0 h-full px-4 transition-colors duration-300 hover:bg-blue-300" title="Próximo item" onClick={handleNextItem}>
                    <RightArrowIcon />
                </button>
            </div>
        </form>
    );
}

export default BlenderAmount;
