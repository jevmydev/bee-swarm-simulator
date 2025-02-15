import { useState } from "react";
import { hexagons } from "../mocks/hive/hexagons";
import { isValidImagePath } from "../utils/helpers";

export const useHiveBuilder = () => {
    const [updatedHexagons, setUpdatedHexagons] = useState(hexagons);

    const handleDrop = (e) => {
        const { target } = e;
        const { name, imageUrl } = JSON.parse(e.dataTransfer.getData("text/plain"));

        if (!name || !imageUrl || !isValidImagePath(imageUrl)) return target.classList.remove("stroke-hive-active");

        const parent = target.closest("g[data-id]");
        const hexId = parent.getAttribute("data-id");

        target.classList.remove("stroke-hive-active");

        setUpdatedHexagons((prevHexagons) => prevHexagons.map((hexagon) => (hexagon.pseudoId === hexId ? { ...hexagon, name, imageUrl } : hexagon)));
    };

    const handleDragOver = (e) => {
        e.preventDefault();

        const { target } = e;
        target.classList.add("stroke-hive-active");
    };

    const handleDragExit = (e) => {
        const { target } = e;
        target.classList.remove("stroke-hive-active");
    };

    return { updatedHexagons, handleDrop, handleDragOver, handleDragExit };
};
