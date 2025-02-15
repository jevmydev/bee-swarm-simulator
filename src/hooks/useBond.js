import { useState, useEffect } from "react";
import { bond } from "../mocks/bond/bond";
import { DEFAULT_BOND_CONFIG } from "../constants/const";
import { formatNumber } from "../utils/formats";

export const useBond = () => {
    const [costRequired, setCostRequired] = useState(null);
    const [bondConfig, setBondConfig] = useState(DEFAULT_BOND_CONFIG);

    const getCost = () => {
        const bondLevels = [];
        const { treatsInventory, bondFromTreats, numberBees } = bondConfig;

        bond.map(({ level, bondRequired }) => {
            let treatsRequired = (10 * bondRequired * numberBees) / bondFromTreats - treatsInventory;
            let honeyRequired = treatsRequired * 10000;

            treatsRequired = treatsRequired >= 0 ? treatsRequired : 0;
            honeyRequired = honeyRequired >= 0 ? honeyRequired : 0;

            bondLevels.push({
                id: `Bond-Level ${level}`,
                level,
                bondRequired: formatNumber(bondRequired),
                treatsRequired: formatNumber(treatsRequired),
                honeyRequired: formatNumber(honeyRequired)
            });
        });

        setCostRequired(bondLevels);
    };

    const handleTreatsInventory = (e) => {
        const { value } = e.target;
        const formattedValue = Number(value);

        if (Number.isNaN(formattedValue) || formattedValue < 0)
            return setBondConfig((prevConfig) => ({
                ...prevConfig,
                treatsInventory: DEFAULT_BOND_CONFIG.treatsInventory
            }));

        setBondConfig((prevConfig) => ({
            ...prevConfig,
            treatsInventory: formattedValue
        }));
    };

    const handleBondFromTreats = (e) => {
        const { value } = e.target;
        const formattedValue = Number(value);

        if (Number.isNaN(formattedValue) || formattedValue < 100)
            return setBondConfig((prevConfig) => ({
                ...prevConfig,
                bondFromTreats: DEFAULT_BOND_CONFIG.bondFromTreats
            }));

        setBondConfig((prevConfig) => ({
            ...prevConfig,
            bondFromTreats: formattedValue
        }));
    };

    const handleNumberBees = (e) => {
        const { value } = e.target;
        const formattedValue = Number(value);

        if (Number.isNaN(formattedValue) || formattedValue < 1 || formattedValue > 50)
            return setBondConfig((prevConfig) => ({
                ...prevConfig,
                numberBees: DEFAULT_BOND_CONFIG.numberBees
            }));

        setBondConfig((prevConfig) => ({
            ...prevConfig,
            numberBees: formattedValue
        }));
    };

    useEffect(() => getCost(), [bondConfig]);

    return { costRequired, bondConfig, handleTreatsInventory, handleBondFromTreats, handleNumberBees };
};
