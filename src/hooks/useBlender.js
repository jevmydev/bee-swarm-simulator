import { useState } from "react";
import { blender } from "../mocks/blender/blender";
import { DEFAULT_AMOUNT_BLENDER, FIRST_ITEM } from "../constants/const";

export const useBlender = () => {
    const [blenderItem, setBlenderItem] = useState(blender[FIRST_ITEM]);
    const [amount, setAmount] = useState(DEFAULT_AMOUNT_BLENDER);
    const [index, setIndex] = useState({ currentIndex: FIRST_ITEM, totalItems: blender.length });

    const handleChangeAmount = (e) => {
        const { value } = e.target;
        if (value < DEFAULT_AMOUNT_BLENDER || Number.isNaN(value)) return;

        setAmount(Number(value));
    };

    const handleNextItem = () => {
        const nextIndex = index.currentIndex + 1;
        if (nextIndex >= index.totalItems) return;

        setBlenderItem(blender[nextIndex]);
        setIndex({ ...index, currentIndex: nextIndex });
    };

    const handlePreviousItem = () => {
        const previousIndex = index.currentIndex - 1;
        if (previousIndex < 0) return;

        setBlenderItem(blender[previousIndex]);
        setIndex({ ...index, currentIndex: previousIndex });
    };

    return { blenderItem, amount, index, handleChangeAmount, handleNextItem, handlePreviousItem };
};
