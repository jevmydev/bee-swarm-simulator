import { useState } from "react";
import { creatures } from "../mocks/wiki/creatures";
import { DEFAULT_HIVE_NIVEL, FIRST_ITEM } from "../constants/const";

export const useHive = () => {
    const bees = creatures.filter(({ classification }) => classification.startsWith("Abejas"));
    const [beeClassification, setBeeClassification] = useState(bees[FIRST_ITEM]);
    const [hiveNivel, setHiveNivel] = useState(DEFAULT_HIVE_NIVEL);
    const [isGiftedHive, setIsGiftedHive] = useState(false);

    const updateBeeClassification = (newBeeClassification) => setBeeClassification(newBeeClassification);

    const updateHiveNivel = (e) => {
        const { value } = e.target;
        const numberValue = Number(value);

        if (Number.isNaN(numberValue) || numberValue <= 0 || numberValue > 25) return setHiveNivel(DEFAULT_HIVE_NIVEL);

        setHiveNivel(value);
    };

    const updateGiftedHive = (e) => {
        const { checked } = e.target;
        setIsGiftedHive(checked);
    };

    return { bees, beeClassification, hiveNivel, isGiftedHive, updateBeeClassification, updateHiveNivel, updateGiftedHive };
};
